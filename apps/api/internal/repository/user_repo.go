package repository

import (
	"context"
	"crypto/rand"
	"database/sql"
	"encoding/base64"
	"encoding/hex"
	"fmt"
	"math/big"
	"strings"
	"time"

	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
)

type UserRepo struct {
	db *sql.DB
}

func NewUserRepo(db *sql.DB) *UserRepo {
	return &UserRepo{db: db}
}

type VisitorUser struct {
	ID         string
	Name       string
	Email      string
	Role       string
	AccessKey  string
	IsVerified bool
}

// CreatePendingUser creates an unverified user with a verification code.
// Returns userID and the 6-digit code.
func (r *UserRepo) CreatePendingUser(ctx context.Context, name, email string) (userID, code string, err error) {
	code, err = randomDigits(6)
	if err != nil {
		return "", "", fmt.Errorf("generate otp: %w", err)
	}
	userID = uuid.New().String()
	expires := time.Now().Add(10 * time.Minute)

	_, err = r.db.ExecContext(ctx, `
		INSERT INTO users (id, email, password_hash, name, display_name, role, is_active,
		                   verification_code, verification_expires_at, is_email_verified)
		VALUES (?, ?, '', ?, ?, 'user', 1, ?, ?, 0)
		ON DUPLICATE KEY UPDATE
			display_name             = VALUES(display_name),
			verification_code        = VALUES(verification_code),
			verification_expires_at  = VALUES(verification_expires_at),
			is_email_verified        = 0
	`, userID, email, email, name, code, expires)
	if err != nil {
		return "", "", fmt.Errorf("create pending user: %w", err)
	}

	// If duplicate key, we need the existing user's ID
	var existingID string
	_ = r.db.QueryRowContext(ctx, `SELECT id FROM users WHERE email = ?`, email).Scan(&existingID)
	if existingID != "" {
		userID = existingID
	}
	return
}

// VerifyCode checks the code, generates an access key, and marks the user verified.
// Returns the 32-char access key on success.
func (r *UserRepo) VerifyCode(ctx context.Context, userID, code string) (accessKey string, err error) {
	var storedCode string
	var expires time.Time
	var isVerified bool
	var attempts int

	err = r.db.QueryRowContext(ctx,
		`SELECT COALESCE(verification_code,''), verification_expires_at, is_email_verified, COALESCE(otp_attempts,0) FROM users WHERE id = ?`,
		userID,
	).Scan(&storedCode, &expires, &isVerified, &attempts)
	if err != nil {
		return "", fmt.Errorf("user not found")
	}

	if attempts >= 5 {
		return "", fmt.Errorf("too many attempts, request a new code")
	}
	if time.Now().After(expires) {
		return "", fmt.Errorf("code expired")
	}
	if storedCode != code {
		r.db.ExecContext(ctx, `UPDATE users SET otp_attempts = otp_attempts + 1 WHERE id = ?`, userID)
		return "", fmt.Errorf("invalid code")
	}

	// Generate 32-char hex access key (16 random bytes)
	keyBytes := make([]byte, 16)
	if _, err = rand.Read(keyBytes); err != nil {
		return "", fmt.Errorf("generate key: %w", err)
	}
	accessKey = hex.EncodeToString(keyBytes)

	_, err = r.db.ExecContext(ctx, `
		UPDATE users
		SET access_key = ?, is_email_verified = 1, verification_code = NULL, otp_attempts = 0
		WHERE id = ?
	`, accessKey, userID)
	if err != nil {
		return "", fmt.Errorf("update user: %w", err)
	}
	return
}

// FindByAccessKey looks up a verified user by their 32-char access key.
func (r *UserRepo) FindByAccessKey(ctx context.Context, key string) (*VisitorUser, error) {
	u := &VisitorUser{}
	var displayName sql.NullString
	err := r.db.QueryRowContext(ctx, `
		SELECT id, COALESCE(display_name, name), email, COALESCE(role,'user'), access_key, is_email_verified
		FROM users WHERE access_key = ? AND is_email_verified = 1
	`, key).Scan(&u.ID, &displayName, &u.Email, &u.Role, &u.AccessKey, &u.IsVerified)
	if err != nil {
		return nil, err
	}
	if displayName.Valid {
		u.Name = displayName.String
	}
	return u, nil
}

// VerifyGoogleUser marks a user as verified and generates an access key (no OTP needed).
func (r *UserRepo) VerifyGoogleUser(ctx context.Context, userID string) (accessKey string, err error) {
	keyBytes := make([]byte, 16)
	if _, err = rand.Read(keyBytes); err != nil {
		return "", fmt.Errorf("generate key: %w", err)
	}
	accessKey = hex.EncodeToString(keyBytes)

	// Check if user already has a valid access key (returning Google user)
	var existingKey string
	_ = r.db.QueryRowContext(ctx, `SELECT COALESCE(access_key,'') FROM users WHERE id = ? AND is_email_verified = 1`, userID).Scan(&existingKey)
	if existingKey != "" {
		return existingKey, nil
	}

	_, err = r.db.ExecContext(ctx, `
		UPDATE users
		SET access_key = ?, is_email_verified = 1, verification_code = NULL
		WHERE id = ?
	`, accessKey, userID)
	return accessKey, err
}

// ResendCode generates a fresh verification code for an existing pending user.
func (r *UserRepo) ResendCode(ctx context.Context, userID string) (string, error) {
	code, err := randomDigits(6)
	if err != nil {
		return "", err
	}
	expires := time.Now().Add(10 * time.Minute)
	_, err = r.db.ExecContext(ctx,
		`UPDATE users SET verification_code = ?, verification_expires_at = ?, otp_attempts = 0 WHERE id = ?`,
		code, expires, userID,
	)
	return code, err
}

// GetUserByID returns basic user info.
func (r *UserRepo) GetByID(ctx context.Context, id string) (*VisitorUser, error) {
	u := &VisitorUser{}
	var displayName sql.NullString
	err := r.db.QueryRowContext(ctx,
		`SELECT id, COALESCE(display_name, name), email, COALESCE(role,'user') FROM users WHERE id = ?`, id,
	).Scan(&u.ID, &displayName, &u.Email, &u.Role)
	if err != nil {
		return nil, err
	}
	if displayName.Valid {
		u.Name = displayName.String
	}
	return u, nil
}

// ─── Admin: Users ─────────────────────────────────────────────────────────────

type AdminUser struct {
	ID             string    `json:"id"`
	Name           string    `json:"name"`
	Email          string    `json:"email"`
	Role           string    `json:"role"`
	IsActive       bool      `json:"is_active"`
	IsVerified     bool      `json:"is_verified"`
	AccessKey      string    `json:"access_key,omitempty"`
	CreatedAt      time.Time `json:"created_at"`
}

func (r *UserRepo) ListUsers(ctx context.Context, search string, limit, offset int) ([]*AdminUser, int, error) {
	where := ""
	args := []interface{}{}
	if search != "" {
		where = " WHERE (email LIKE ? OR name LIKE ? OR display_name LIKE ?)"
		q := "%" + search + "%"
		args = append(args, q, q, q)
	}

	var total int
	r.db.QueryRowContext(ctx, "SELECT COUNT(*) FROM users"+where, args...).Scan(&total)

	args = append(args, limit, offset)
	rows, err := r.db.QueryContext(ctx,
		`SELECT id, COALESCE(display_name, name, ''), email, role, is_active, is_email_verified, COALESCE(access_key,''), created_at
		 FROM users`+where+` ORDER BY created_at DESC LIMIT ? OFFSET ?`, args...)
	if err != nil {
		return nil, 0, err
	}
	defer rows.Close()

	var users []*AdminUser
	for rows.Next() {
		u := &AdminUser{}
		if err := rows.Scan(&u.ID, &u.Name, &u.Email, &u.Role, &u.IsActive, &u.IsVerified, &u.AccessKey, &u.CreatedAt); err != nil {
			return nil, 0, err
		}
		users = append(users, u)
	}
	return users, total, nil
}

func (r *UserRepo) GetAdminUser(ctx context.Context, id string) (*AdminUser, error) {
	u := &AdminUser{}
	err := r.db.QueryRowContext(ctx,
		`SELECT id, COALESCE(display_name, name, ''), email, role, is_active, is_email_verified, COALESCE(access_key,''), created_at
		 FROM users WHERE id = ?`, id,
	).Scan(&u.ID, &u.Name, &u.Email, &u.Role, &u.IsActive, &u.IsVerified, &u.AccessKey, &u.CreatedAt)
	if err != nil {
		return nil, err
	}
	return u, nil
}

func (r *UserRepo) UpdateUserStatus(ctx context.Context, id string, isActive bool) error {
	_, err := r.db.ExecContext(ctx, `UPDATE users SET is_active=? WHERE id=?`, isActive, id)
	return err
}

func randomDigits(n int) (string, error) {
	const digits = "0123456789"
	result := make([]byte, n)
	for i := range result {
		num, err := rand.Int(rand.Reader, big.NewInt(int64(len(digits))))
		if err != nil {
			return "", err
		}
		result[i] = digits[num.Int64()]
	}
	return string(result), nil
}

func hashPassword(password string) string {
	hash, _ := bcrypt.GenerateFromPassword([]byte(password), 12)
	return string(hash)
}

func checkPassword(hash, password string) bool {
	return bcrypt.CompareHashAndPassword([]byte(hash), []byte(password)) == nil
}

func (r *UserRepo) RegisterWithPassword(ctx context.Context, name, email, password string) (*VisitorUser, error) {
	if strings.TrimSpace(name) == "" {
		name = email
	}

	var existingID string
	err := r.db.QueryRowContext(ctx, `SELECT id FROM users WHERE email = ? LIMIT 1`, email).Scan(&existingID)
	if err == nil && existingID != "" {
		return nil, fmt.Errorf("email already registered")
	}
	if err != nil && err != sql.ErrNoRows {
		return nil, fmt.Errorf("failed to check user: %w", err)
	}

	userID := uuid.New().String()
	keyBytes := make([]byte, 24)
	if _, err := rand.Read(keyBytes); err != nil {
		return nil, fmt.Errorf("generate access key: %w", err)
	}
	accessKey := base64.RawURLEncoding.EncodeToString(keyBytes)
	passHash := hashPassword(password)

	_, err = r.db.ExecContext(ctx, `
		INSERT INTO users (id, email, password_hash, name, display_name, role, is_active, access_key, is_email_verified)
		VALUES (?, ?, ?, ?, ?, 'user', 1, ?, 1)
	`, userID, email, passHash, name, name, accessKey)
	if err != nil {
		return nil, fmt.Errorf("failed to create user: %w", err)
	}

	return &VisitorUser{
		ID:         userID,
		Name:       name,
		Email:      email,
		Role:       "user",
		AccessKey:  accessKey,
		IsVerified: true,
	}, nil
}

func (r *UserRepo) LoginWithPassword(ctx context.Context, email, password string) (*VisitorUser, error) {
	var u VisitorUser
	var passHash string
	var isActive bool
	var displayName sql.NullString

	err := r.db.QueryRowContext(ctx, `
		SELECT id, COALESCE(display_name, name), email, COALESCE(role,'user'), COALESCE(access_key,''), COALESCE(password_hash,''), is_active, is_email_verified
		FROM users WHERE email = ? LIMIT 1
	`, email).Scan(&u.ID, &displayName, &u.Email, &u.Role, &u.AccessKey, &passHash, &isActive, &u.IsVerified)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, fmt.Errorf("invalid credentials")
		}
		return nil, fmt.Errorf("failed to load user: %w", err)
	}

	if !isActive {
		return nil, fmt.Errorf("account is inactive")
	}
	if passHash == "" {
		return nil, fmt.Errorf("invalid credentials")
	}
	if !checkPassword(passHash, password) {
		return nil, fmt.Errorf("invalid credentials")
	}
	if !u.IsVerified {
		return nil, fmt.Errorf("email not verified")
	}
	if displayName.Valid {
		u.Name = displayName.String
	}

	if u.AccessKey == "" {
		keyBytes := make([]byte, 24)
		if _, err := rand.Read(keyBytes); err != nil {
			return nil, fmt.Errorf("generate access key: %w", err)
		}
		u.AccessKey = base64.RawURLEncoding.EncodeToString(keyBytes)
		if _, err := r.db.ExecContext(ctx, `UPDATE users SET access_key = ? WHERE id = ?`, u.AccessKey, u.ID); err != nil {
			return nil, fmt.Errorf("failed to persist access key: %w", err)
		}
	}

	return &u, nil
}
