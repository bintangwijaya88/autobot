package handler

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"

	"github.com/autobot-wijaya/autobot-api/internal/config"
	"github.com/autobot-wijaya/autobot-api/internal/email"
	"github.com/autobot-wijaya/autobot-api/internal/middleware"
	"github.com/autobot-wijaya/autobot-api/internal/repository"
	"github.com/gofiber/fiber/v2"
	"go.uber.org/zap"
)

type UserHandler struct {
	userRepo *repository.UserRepo
	mailer   *email.Mailer
	cfg      *config.Config
	log      *zap.Logger
}

func NewUserHandler(userRepo *repository.UserRepo, mailer *email.Mailer, cfg *config.Config, log *zap.Logger) *UserHandler {
	return &UserHandler{userRepo: userRepo, mailer: mailer, cfg: cfg, log: log}
}

// POST /api/auth/request — request OTP for sign-in/register
func (h *UserHandler) RequestOTP(c *fiber.Ctx) error {
	var body struct {
		Email string `json:"email"`
		Name  string `json:"name"`
	}
	if err := c.BodyParser(&body); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "invalid body"})
	}
	if !reEmail.MatchString(body.Email) {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "invalid email"})
	}
	if body.Name == "" {
		body.Name = body.Email
	}

	userID, code, err := h.userRepo.CreatePendingUser(c.Context(), body.Name, body.Email)
	if err != nil {
		h.log.Error("create pending user", zap.Error(err))
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "failed to process request"})
	}

	if sendErr := h.mailer.SendVerification(body.Email, body.Name, code); sendErr != nil {
		h.log.Warn("send verification email failed", zap.String("email", body.Email), zap.Error(sendErr))
	}

	return c.JSON(fiber.Map{"user_id": userID})
}

// POST /api/auth/google — verify Google ID token, return access key
func (h *UserHandler) GoogleSignIn(c *fiber.Ctx) error {
	if h.cfg.Google.ClientID == "" {
		return c.Status(fiber.StatusNotImplemented).JSON(fiber.Map{"error": "Google sign in not configured"})
	}

	var body struct {
		IDToken string `json:"id_token"`
	}
	if err := c.BodyParser(&body); err != nil || body.IDToken == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "id_token required"})
	}

	// Verify token via Google tokeninfo endpoint
	resp, err := http.Get(fmt.Sprintf("https://oauth2.googleapis.com/tokeninfo?id_token=%s", body.IDToken))
	if err != nil || resp.StatusCode != 200 {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"error": "invalid Google token"})
	}
	defer resp.Body.Close()

	var info struct {
		Aud   string `json:"aud"`
		Email string `json:"email"`
		Name  string `json:"name"`
		Sub   string `json:"sub"`
	}
	data, _ := io.ReadAll(resp.Body)
	if err := json.Unmarshal(data, &info); err != nil || info.Email == "" {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"error": "failed to parse Google token"})
	}
	if info.Aud != h.cfg.Google.ClientID {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"error": "token audience mismatch"})
	}

	if info.Name == "" {
		info.Name = info.Email
	}

	userID, _, err := h.userRepo.CreatePendingUser(c.Context(), info.Name, info.Email)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "failed to create user"})
	}

	// Mark as verified immediately — Google already verified the email
	accessKey, err := h.userRepo.VerifyGoogleUser(c.Context(), userID)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "failed to verify user"})
	}

	return c.JSON(fiber.Map{
		"access_key": accessKey,
		"name":       info.Name,
		"email":      info.Email,
	})
}

// POST /api/auth/verify — verify OTP, get access key
func (h *UserHandler) VerifyOTP(c *fiber.Ctx) error {
	var body struct {
		UserID string `json:"user_id"`
		Code   string `json:"code"`
	}
	if err := c.BodyParser(&body); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "invalid body"})
	}
	if body.UserID == "" || !reCode.MatchString(body.Code) {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "user_id and 6-digit code are required"})
	}

	accessKey, err := h.userRepo.VerifyCode(c.Context(), body.UserID, body.Code)
	if err != nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"error": err.Error()})
	}

	user, err := h.userRepo.GetByID(c.Context(), body.UserID)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "failed to load user"})
	}

	return c.JSON(fiber.Map{
		"access_key": accessKey,
		"name":       user.Name,
		"email":      user.Email,
		"role":       user.Role,
	})
}

// POST /api/auth/register — register with email/password
func (h *UserHandler) Register(c *fiber.Ctx) error {
	var body struct {
		Name     string `json:"name"`
		Email    string `json:"email"`
		Password string `json:"password"`
	}
	if err := c.BodyParser(&body); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "invalid body"})
	}
	if !reEmail.MatchString(body.Email) {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "invalid email"})
	}
	if len(body.Password) < 6 {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "password minimal 6 karakter"})
	}

	user, err := h.userRepo.RegisterWithPassword(c.Context(), body.Name, body.Email, body.Password)
	if err != nil {
		if err.Error() == "email already registered" {
			return c.Status(fiber.StatusConflict).JSON(fiber.Map{"error": err.Error()})
		}
		h.log.Error("register user", zap.Error(err))
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "failed to register"})
	}

	return c.JSON(fiber.Map{
		"access_key": user.AccessKey,
		"name":       user.Name,
		"email":      user.Email,
		"role":       user.Role,
	})
}

// POST /api/auth/login — login with email/password
func (h *UserHandler) Login(c *fiber.Ctx) error {
	var body struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}
	if err := c.BodyParser(&body); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "invalid body"})
	}
	if !reEmail.MatchString(body.Email) || body.Password == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "email/password wajib diisi"})
	}

	user, err := h.userRepo.LoginWithPassword(c.Context(), body.Email, body.Password)
	if err != nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"error": err.Error()})
	}

	resp := fiber.Map{
		"access_key": user.AccessKey,
		"name":       user.Name,
		"email":      user.Email,
		"role":       user.Role,
	}

	// Admin users also get a JWT so they can access the admin panel directly
	if user.Role == "admin" {
		if jwt, err := middleware.GenerateToken(h.cfg, user.ID, user.Email, user.Role); err == nil {
			resp["admin_token"] = jwt
		}
	}

	return c.JSON(resp)
}
