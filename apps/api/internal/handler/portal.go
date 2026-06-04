package handler

import (
	"database/sql"
	"encoding/json"
	"time"

	"github.com/autobot-wijaya/autobot-api/internal/model"
	"github.com/autobot-wijaya/autobot-api/internal/repository"
	"github.com/gofiber/fiber/v2"
	"go.uber.org/zap"
)

type PortalHandler struct {
	chatRepo    *repository.ChatRepository
	productRepo *repository.ProductRepository
	userRepo    *repository.UserRepo
	log         *zap.Logger
}

func NewPortalHandler(chatRepo *repository.ChatRepository, productRepo *repository.ProductRepository, userRepo *repository.UserRepo, log *zap.Logger) *PortalHandler {
	return &PortalHandler{chatRepo: chatRepo, productRepo: productRepo, userRepo: userRepo, log: log}
}

// PortalAuth middleware — validates X-Access-Key and sets portal_user in context locals.
func PortalAuth(userRepo *repository.UserRepo) fiber.Handler {
	return func(c *fiber.Ctx) error {
		key := c.Get("X-Access-Key")
		if key == "" {
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"error": "X-Access-Key header required"})
		}
		user, err := userRepo.FindByAccessKey(c.Context(), key)
		if err != nil {
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"error": "invalid or expired access key"})
		}
		c.Locals("portal_user", user)
		return c.Next()
	}
}

func portalUser(c *fiber.Ctx) *repository.VisitorUser {
	u, _ := c.Locals("portal_user").(*repository.VisitorUser)
	return u
}

// GET /api/portal/me — current user profile
func (h *PortalHandler) Me(c *fiber.Ctx) error {
	u := portalUser(c)
	return c.JSON(fiber.Map{
		"id":         u.ID,
		"name":       u.Name,
		"email":      u.Email,
		"role":       u.Role,
		"access_key": u.AccessKey,
	})
}

// GET /api/portal/sessions — sessions linked to user email
func (h *PortalHandler) ListSessions(c *fiber.Ctx) error {
	u := portalUser(c)
	page := c.QueryInt("page", 1)
	if page < 1 {
		page = 1
	}
	limit := 20
	offset := (page - 1) * limit

	rows, err := h.chatRepo.DB().QueryContext(c.Context(), `
		SELECT id, visitor_id, COALESCE(visitor_name,'') as visitor_name,
		       source, status, metadata, created_at, updated_at,
		       (SELECT COUNT(*) FROM chat_messages WHERE session_id = cs.id) as msg_count,
		       (SELECT content FROM chat_messages WHERE session_id = cs.id AND role = 'user' ORDER BY created_at ASC LIMIT 1) as first_msg
		FROM chat_sessions cs
		WHERE visitor_email = ?
		ORDER BY created_at DESC
		LIMIT ? OFFSET ?
	`, u.Email, limit, offset)
	if err != nil {
		h.log.Error("portal list sessions", zap.Error(err))
		return c.Status(500).JSON(fiber.Map{"error": "failed to fetch sessions"})
	}
	defer rows.Close()

	type SessionRow struct {
		ID          string          `json:"id"`
		VisitorID   string          `json:"visitor_id"`
		VisitorName string          `json:"visitor_name"`
		Source      string          `json:"source"`
		Status      string          `json:"status"`
		Metadata    json.RawMessage `json:"metadata,omitempty"`
		CreatedAt   time.Time       `json:"created_at"`
		UpdatedAt   time.Time       `json:"updated_at"`
		MsgCount    int             `json:"message_count"`
		FirstMsg    string          `json:"first_message"`
	}

	var sessions []SessionRow
	for rows.Next() {
		var s SessionRow
		var meta sql.NullString
		var firstMsg sql.NullString
		if err := rows.Scan(&s.ID, &s.VisitorID, &s.VisitorName, &s.Source, &s.Status, &meta, &s.CreatedAt, &s.UpdatedAt, &s.MsgCount, &firstMsg); err != nil {
			continue
		}
		if meta.Valid {
			s.Metadata = json.RawMessage(meta.String)
		}
		if firstMsg.Valid {
			s.FirstMsg = firstMsg.String
			if len([]rune(s.FirstMsg)) > 80 {
				s.FirstMsg = string([]rune(s.FirstMsg)[:80]) + "…"
			}
		}
		sessions = append(sessions, s)
	}
	if sessions == nil {
		sessions = []SessionRow{}
	}

	var total int
	h.chatRepo.DB().QueryRowContext(c.Context(), `SELECT COUNT(*) FROM chat_sessions WHERE visitor_email = ?`, u.Email).Scan(&total)

	return c.JSON(fiber.Map{"sessions": sessions, "total": total, "page": page})
}

// GET /api/portal/sessions/:id — session detail with messages
func (h *PortalHandler) GetSession(c *fiber.Ctx) error {
	u := portalUser(c)
	sessionID := c.Params("id")

	session, err := h.chatRepo.GetSession(c.Context(), sessionID)
	if err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "session not found"})
	}
	// Only allow access to user's own sessions
	if session.VisitorEmail == nil || *session.VisitorEmail != u.Email {
		return c.Status(fiber.StatusForbidden).JSON(fiber.Map{"error": "forbidden"})
	}

	msgs, err := h.chatRepo.GetSessionMessages(c.Context(), sessionID, 200)
	if err != nil {
		msgs = []*model.ChatMessage{}
	}

	return c.JSON(fiber.Map{"session": session, "messages": msgs})
}

// GET /api/portal/contacts — form submissions linked to user email
func (h *PortalHandler) ListContacts(c *fiber.Ctx) error {
	u := portalUser(c)

	rows, err := h.chatRepo.DB().QueryContext(c.Context(), `
		SELECT id, type, name, COALESCE(phone,''), COALESCE(company,''), COALESCE(message,''),
		       COALESCE(product_interest,''), status, created_at
		FROM contact_submissions
		WHERE email = ?
		ORDER BY created_at DESC
		LIMIT 50
	`, u.Email)
	if err != nil {
		h.log.Error("portal list contacts", zap.Error(err))
		return c.Status(500).JSON(fiber.Map{"error": "failed to fetch contacts"})
	}
	defer rows.Close()

	type ContactRow struct {
		ID              string    `json:"id"`
		Type            string    `json:"type"`
		Name            string    `json:"name"`
		Phone           string    `json:"phone,omitempty"`
		Company         string    `json:"company,omitempty"`
		Message         string    `json:"message,omitempty"`
		ProductInterest string    `json:"product_interest,omitempty"`
		Status          string    `json:"status"`
		CreatedAt       time.Time `json:"created_at"`
	}

	var contacts []ContactRow
	for rows.Next() {
		var ct ContactRow
		if err := rows.Scan(&ct.ID, &ct.Type, &ct.Name, &ct.Phone, &ct.Company, &ct.Message, &ct.ProductInterest, &ct.Status, &ct.CreatedAt); err != nil {
			continue
		}
		contacts = append(contacts, ct)
	}
	if contacts == nil {
		contacts = []ContactRow{}
	}

	return c.JSON(fiber.Map{"contacts": contacts})
}

// GET /api/portal/stats — summary stats for dashboard
func (h *PortalHandler) Stats(c *fiber.Ctx) error {
	u := portalUser(c)

	var sessionCount int
	var contactCount int
	h.chatRepo.DB().QueryRowContext(c.Context(), `SELECT COUNT(*) FROM chat_sessions WHERE visitor_email = ?`, u.Email).Scan(&sessionCount)
	h.chatRepo.DB().QueryRowContext(c.Context(), `SELECT COUNT(*) FROM contact_submissions WHERE email = ?`, u.Email).Scan(&contactCount)

	// Most recent session
	var lastSession struct {
		ID        string    `json:"id"`
		CreatedAt time.Time `json:"created_at"`
	}
	h.chatRepo.DB().QueryRowContext(c.Context(),
		`SELECT id, created_at FROM chat_sessions WHERE visitor_email = ? ORDER BY created_at DESC LIMIT 1`, u.Email,
	).Scan(&lastSession.ID, &lastSession.CreatedAt)

	return c.JSON(fiber.Map{
		"session_count": sessionCount,
		"contact_count": contactCount,
		"last_session":  lastSession,
	})
}
