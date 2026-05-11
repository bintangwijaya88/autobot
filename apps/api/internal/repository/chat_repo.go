package repository

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"time"

	"github.com/autobot-wijaya/autobot-api/internal/model"
	"github.com/google/uuid"
)

type ChatRepository struct {
	db *sql.DB
}

func NewChatRepository(db *sql.DB) *ChatRepository {
	return &ChatRepository{db: db}
}

func (r *ChatRepository) CreateSession(ctx context.Context, visitorID, source string, metadata map[string]interface{}) (*model.ChatSession, error) {
	meta, _ := json.Marshal(metadata)
	id := uuid.New().String()

	_, err := r.db.ExecContext(ctx, `
		INSERT INTO chat_sessions (id, visitor_id, source, metadata)
		VALUES (?, ?, ?, ?)
	`, id, visitorID, source, string(meta))
	if err != nil {
		return nil, fmt.Errorf("create session: %w", err)
	}

	return r.GetSession(ctx, id)
}

func (r *ChatRepository) GetSession(ctx context.Context, id string) (*model.ChatSession, error) {
	session := &model.ChatSession{}
	var meta, visitorName, visitorEmail, visitorPhone sql.NullString

	err := r.db.QueryRowContext(ctx, `
		SELECT id, visitor_id, visitor_name, visitor_email, visitor_phone, source, status, metadata, created_at, updated_at
		FROM chat_sessions WHERE id = ?
	`, id).Scan(
		&session.ID, &session.VisitorID, &visitorName, &visitorEmail,
		&visitorPhone, &session.Source, &session.Status, &meta,
		&session.CreatedAt, &session.UpdatedAt,
	)
	if err != nil {
		return nil, fmt.Errorf("get session: %w", err)
	}

	if visitorName.Valid { session.VisitorName = &visitorName.String }
	if visitorEmail.Valid { session.VisitorEmail = &visitorEmail.String }
	if visitorPhone.Valid { session.VisitorPhone = &visitorPhone.String }
	if meta.Valid { session.Metadata = json.RawMessage(meta.String) }

	return session, nil
}

func (r *ChatRepository) SaveMessage(ctx context.Context, sessionID, role, content string, richContent interface{}, intent string) (*model.ChatMessage, error) {
	var richJSON *string
	if richContent != nil {
		b, _ := json.Marshal(richContent)
		s := string(b)
		richJSON = &s
	}

	var intentPtr *string
	if intent != "" {
		intentPtr = &intent
	}

	meta, _ := json.Marshal(map[string]interface{}{"saved_at": time.Now().UTC()})
	metaStr := string(meta)
	id := uuid.New().String()

	_, err := r.db.ExecContext(ctx, `
		INSERT INTO chat_messages (id, session_id, role, content, rich_content, intent, metadata)
		VALUES (?, ?, ?, ?, ?, ?, ?)
	`, id, sessionID, role, content, richJSON, intentPtr, metaStr)
	if err != nil {
		return nil, fmt.Errorf("save message: %w", err)
	}

	return &model.ChatMessage{
		ID:        id,
		SessionID: sessionID,
		Role:      role,
		Content:   content,
		Intent:    intentPtr,
		CreatedAt: time.Now(),
	}, nil
}

func (r *ChatRepository) GetSessionMessages(ctx context.Context, sessionID string, limit int) ([]*model.ChatMessage, error) {
	rows, err := r.db.QueryContext(ctx, `
		SELECT id, session_id, role, content, rich_content, intent, metadata, created_at
		FROM chat_messages
		WHERE session_id = ?
		ORDER BY created_at ASC
		LIMIT ?
	`, sessionID, limit)
	if err != nil {
		return nil, fmt.Errorf("get messages: %w", err)
	}
	defer rows.Close()

	var messages []*model.ChatMessage
	for rows.Next() {
		msg := &model.ChatMessage{}
		var richContent, meta, intent sql.NullString
		if err := rows.Scan(&msg.ID, &msg.SessionID, &msg.Role, &msg.Content,
			&richContent, &intent, &meta, &msg.CreatedAt); err != nil {
			return nil, err
		}
		if richContent.Valid { msg.RichContent = json.RawMessage(richContent.String) }
		if intent.Valid { msg.Intent = &intent.String }
		if meta.Valid { msg.Metadata = json.RawMessage(meta.String) }
		messages = append(messages, msg)
	}
	return messages, nil
}

func (r *ChatRepository) ListSessions(ctx context.Context, status string, limit, offset int) ([]*model.ChatSession, error) {
	query := `
		SELECT id, visitor_id, visitor_name, visitor_email, visitor_phone, source, status, metadata, created_at, updated_at
		FROM chat_sessions
	`
	args := []interface{}{}
	if status != "" {
		query += " WHERE status = ?"
		args = append(args, status)
	}
	query += " ORDER BY created_at DESC LIMIT ? OFFSET ?"
	args = append(args, limit, offset)

	rows, err := r.db.QueryContext(ctx, query, args...)
	if err != nil {
		return nil, fmt.Errorf("list sessions: %w", err)
	}
	defer rows.Close()

	var sessions []*model.ChatSession
	for rows.Next() {
		s := &model.ChatSession{}
		var meta, visitorName, visitorEmail, visitorPhone sql.NullString
		if err := rows.Scan(&s.ID, &s.VisitorID, &visitorName, &visitorEmail,
			&visitorPhone, &s.Source, &s.Status, &meta, &s.CreatedAt, &s.UpdatedAt); err != nil {
			return nil, err
		}
		if visitorName.Valid { s.VisitorName = &visitorName.String }
		if visitorEmail.Valid { s.VisitorEmail = &visitorEmail.String }
		if meta.Valid { s.Metadata = json.RawMessage(meta.String) }
		sessions = append(sessions, s)
	}
	return sessions, nil
}

func (r *ChatRepository) CountSessions(ctx context.Context) (int64, error) {
	var count int64
	err := r.db.QueryRowContext(ctx, "SELECT COUNT(*) FROM chat_sessions").Scan(&count)
	return count, err
}

func (r *ChatRepository) CountMessages(ctx context.Context) (int64, error) {
	var count int64
	err := r.db.QueryRowContext(ctx, "SELECT COUNT(*) FROM chat_messages").Scan(&count)
	return count, err
}

func (r *ChatRepository) UpdateSessionMeta(ctx context.Context, sessionID string, meta json.RawMessage) error {
	_, err := r.db.ExecContext(ctx,
		`UPDATE chat_sessions SET metadata = ? WHERE id = ?`, string(meta), sessionID)
	return err
}

func (r *ChatRepository) UpdateSessionVisitor(ctx context.Context, sessionID, name, email string) error {
	_, err := r.db.ExecContext(ctx,
		`UPDATE chat_sessions SET visitor_name = ?, visitor_email = ? WHERE id = ?`,
		name, email, sessionID)
	return err
}

type SessionTrendPoint struct {
	Date  string `json:"date"`
	Count int    `json:"count"`
}

type IntentCount struct {
	Intent string `json:"intent"`
	Count  int    `json:"count"`
}

func (r *ChatRepository) GetSessionsTrend(ctx context.Context, days int) ([]SessionTrendPoint, error) {
	rows, err := r.db.QueryContext(ctx, `
		SELECT DATE(created_at) as date, COUNT(*) as count
		FROM chat_sessions
		WHERE created_at >= DATE_SUB(NOW(), INTERVAL ? DAY)
		GROUP BY DATE(created_at)
		ORDER BY date ASC
	`, days)
	if err != nil {
		return nil, fmt.Errorf("sessions trend: %w", err)
	}
	defer rows.Close()

	var points []SessionTrendPoint
	for rows.Next() {
		var p SessionTrendPoint
		var d time.Time
		if err := rows.Scan(&d, &p.Count); err != nil {
			return nil, err
		}
		p.Date = d.Format("2006-01-02")
		points = append(points, p)
	}
	return points, nil
}

func (r *ChatRepository) GetTopIntents(ctx context.Context, limit int) ([]IntentCount, error) {
	rows, err := r.db.QueryContext(ctx, `
		SELECT intent, COUNT(*) as count
		FROM chat_messages
		WHERE intent IS NOT NULL AND intent != '' AND intent != 'unknown'
		GROUP BY intent
		ORDER BY count DESC
		LIMIT ?
	`, limit)
	if err != nil {
		return nil, fmt.Errorf("top intents: %w", err)
	}
	defer rows.Close()

	var intents []IntentCount
	for rows.Next() {
		var ic IntentCount
		if err := rows.Scan(&ic.Intent, &ic.Count); err != nil {
			return nil, err
		}
		intents = append(intents, ic)
	}
	return intents, nil
}
