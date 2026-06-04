package handler

import (
	"database/sql"
	"fmt"
	"time"

	"github.com/autobot-wijaya/autobot-api/internal/config"
	"github.com/autobot-wijaya/autobot-api/internal/middleware"
	"github.com/autobot-wijaya/autobot-api/internal/payment"
	"github.com/autobot-wijaya/autobot-api/internal/repository"
	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
	"go.uber.org/zap"
)

type MeetingHandler struct {
	db      *sql.DB
	xendit  *payment.Xendit
	cfg     *config.Config
	userRepo *repository.UserRepo
	log     *zap.Logger
}

func NewMeetingHandler(db *sql.DB, xendit *payment.Xendit, cfg *config.Config, userRepo *repository.UserRepo, log *zap.Logger) *MeetingHandler {
	return &MeetingHandler{db: db, xendit: xendit, cfg: cfg, userRepo: userRepo, log: log}
}

// ─── Public: Create meeting booking ──────────────────────────────────────────

// POST /api/meetings — public endpoint, creates meeting + Xendit invoice
func (h *MeetingHandler) Create(c *fiber.Ctx) error {
	var req struct {
		Name          string `json:"name"`
		Email         string `json:"email"`
		Phone         string `json:"phone"`
		Company       string `json:"company"`
		Topic         string `json:"topic"`
		PreferredDate string `json:"preferred_date"`
		PreferredTime string `json:"preferred_time"`
		Notes         string `json:"notes"`
		SessionID     string `json:"session_id"`
	}
	if err := c.BodyParser(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "invalid body"})
	}
	if req.Name == "" || req.Email == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "name and email are required"})
	}

	id := uuid.New().String()
	externalID := "MEETING-" + id[:8]
	amount := int64(50000)

	// Create meeting record first (pending payment)
	var sessionID *string
	if req.SessionID != "" {
		sessionID = &req.SessionID
	}

	var preferredDate any = nil
	if req.PreferredDate != "" {
		preferredDate = req.PreferredDate
	}

	var preferredTime any = nil
	if req.PreferredTime != "" {
		preferredTime = req.PreferredTime
	}

	_, err := h.db.ExecContext(c.Context(), `
		INSERT INTO meetings (id, name, email, phone, company, topic, preferred_date, preferred_time, notes, amount, status, payment_status, session_id)
		VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending', 'unpaid', ?)
	`, id, req.Name, req.Email, req.Phone, req.Company, req.Topic, preferredDate, preferredTime, req.Notes, amount, sessionID)
	if err != nil {
		h.log.Error("create meeting", zap.Error(err))
		return c.Status(500).JSON(fiber.Map{"error": "failed to create meeting"})
	}

	// Create Xendit invoice
	baseURL := "https://autobot.co.id"
	if h.cfg.AppEnv != "production" {
		baseURL = "http://localhost:3001"
	}

	invoiceResult, err := h.xendit.CreateInvoice(c.Context(), payment.InvoiceRequest{
		ExternalID:   externalID,
		Amount:       float64(amount),
		PayerEmail:   req.Email,
		Description:  fmt.Sprintf("Commitment Fee Konsultasi - %s", req.Name),
		CustomerName: req.Name,
		SuccessURL:   baseURL + "/meeting/success?id=" + id,
		FailureURL:   baseURL + "/meeting/failed?id=" + id,
	})

	resp := fiber.Map{"meeting_id": id, "amount": amount}

	if err != nil {
		h.log.Warn("xendit invoice creation failed, meeting saved without payment link", zap.Error(err))
		resp["payment_url"] = ""
		resp["note"] = "payment link tidak tersedia, tim kami akan menghubungi Anda"
	} else {
		h.db.ExecContext(c.Context(), `
			UPDATE meetings SET payment_id = ?, payment_url = ?, xendit_invoice_id = ?
			WHERE id = ?
		`, externalID, invoiceResult.InvoiceURL, invoiceResult.InvoiceID, id)
		resp["payment_url"] = invoiceResult.InvoiceURL
		resp["invoice_id"] = invoiceResult.InvoiceID
	}

	return c.JSON(resp)
}

// POST /api/meetings/webhook — Xendit webhook for payment status update
func (h *MeetingHandler) Webhook(c *fiber.Ctx) error {
	// Validate webhook token
	token := c.Get("X-Callback-Token")
	if h.cfg.Xendit.WebhookToken != "" && token != h.cfg.Xendit.WebhookToken {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"error": "invalid token"})
	}

	var payload struct {
		ExternalID    string `json:"external_id"`
		Status        string `json:"status"`
		PaymentMethod string `json:"payment_method"`
		PaidAt        string `json:"paid_at"`
	}
	if err := c.BodyParser(&payload); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "invalid body"})
	}

	paymentStatus := "unpaid"
	meetingStatus := "pending"
	if payload.Status == "PAID" || payload.Status == "SETTLED" {
		paymentStatus = "paid"
		meetingStatus = "confirmed"
	} else if payload.Status == "EXPIRED" {
		paymentStatus = "expired"
	}

	h.db.ExecContext(c.Context(), `
		UPDATE meetings
		SET payment_status = ?, payment_method = ?, status = ?
		WHERE payment_id = ?
	`, paymentStatus, payload.PaymentMethod, meetingStatus, payload.ExternalID)

	return c.JSON(fiber.Map{"received": true})
}

// GET /api/meetings/:id/status — check payment status (public)
func (h *MeetingHandler) GetStatus(c *fiber.Ctx) error {
	var m struct {
		ID            string    `json:"id"`
		Name          string    `json:"name"`
		Status        string    `json:"status"`
		PaymentStatus string    `json:"payment_status"`
		PaymentURL    string    `json:"payment_url"`
		Amount        int64     `json:"amount"`
		CreatedAt     time.Time `json:"created_at"`
	}
	var payURL sql.NullString
	err := h.db.QueryRowContext(c.Context(), `
		SELECT id, name, status, payment_status, COALESCE(payment_url,''), amount, created_at
		FROM meetings WHERE id = ?
	`, c.Params("id")).Scan(&m.ID, &m.Name, &m.Status, &m.PaymentStatus, &payURL, &m.Amount, &m.CreatedAt)
	if err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "meeting not found"})
	}
	if payURL.Valid {
		m.PaymentURL = payURL.String
	}
	return c.JSON(m)
}

// ─── Admin endpoints ──────────────────────────────────────────────────────────

// GET /api/admin/meetings — list all meetings
func (h *MeetingHandler) AdminList(c *fiber.Ctx) error {
	status := c.Query("status", "")
	page := c.QueryInt("page", 1)
	if page < 1 {
		page = 1
	}
	limit := 20
	offset := (page - 1) * limit

	where := ""
	args := []interface{}{}
	if status != "" {
		where = " WHERE status = ?"
		args = append(args, status)
	}
	args = append(args, limit, offset)

	var total int
	h.db.QueryRowContext(c.Context(), "SELECT COUNT(*) FROM meetings"+where, args[:len(args)-2]...).Scan(&total)

	rows, err := h.db.QueryContext(c.Context(), `
		SELECT id, name, email, COALESCE(phone,''), COALESCE(company,''), COALESCE(topic,''),
		       COALESCE(preferred_date,''), COALESCE(preferred_time,''),
		       amount, status, payment_status, COALESCE(payment_url,''), COALESCE(payment_method,''), created_at
		FROM meetings`+where+` ORDER BY created_at DESC LIMIT ? OFFSET ?`, args...)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "failed to fetch meetings"})
	}
	defer rows.Close()

	type Meeting struct {
		ID            string    `json:"id"`
		Name          string    `json:"name"`
		Email         string    `json:"email"`
		Phone         string    `json:"phone"`
		Company       string    `json:"company"`
		Topic         string    `json:"topic"`
		PreferredDate string    `json:"preferred_date"`
		PreferredTime string    `json:"preferred_time"`
		Amount        int64     `json:"amount"`
		Status        string    `json:"status"`
		PaymentStatus string    `json:"payment_status"`
		PaymentURL    string    `json:"payment_url"`
		PaymentMethod string    `json:"payment_method"`
		CreatedAt     time.Time `json:"created_at"`
	}

	var meetings []Meeting
	for rows.Next() {
		var m Meeting
		if err := rows.Scan(&m.ID, &m.Name, &m.Email, &m.Phone, &m.Company, &m.Topic,
			&m.PreferredDate, &m.PreferredTime,
			&m.Amount, &m.Status, &m.PaymentStatus, &m.PaymentURL, &m.PaymentMethod, &m.CreatedAt); err != nil {
			continue
		}
		meetings = append(meetings, m)
	}
	if meetings == nil {
		meetings = []Meeting{}
	}

	return c.JSON(fiber.Map{"meetings": meetings, "total": total, "page": page})
}

// PUT /api/admin/meetings/:id — update meeting status
func (h *MeetingHandler) AdminUpdate(c *fiber.Ctx) error {
	var req struct {
		Status        string `json:"status"`
		PaymentStatus string `json:"payment_status"`
		Notes         string `json:"notes"`
	}
	if err := c.BodyParser(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "invalid body"})
	}

	_, err := h.db.ExecContext(c.Context(), `
		UPDATE meetings SET status = COALESCE(NULLIF(?, ''), status),
		                    payment_status = COALESCE(NULLIF(?, ''), payment_status),
		                    notes = COALESCE(NULLIF(?, ''), notes)
		WHERE id = ?
	`, req.Status, req.PaymentStatus, req.Notes, c.Params("id"))
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "failed to update"})
	}
	return c.JSON(fiber.Map{"ok": true})
}

// GET /api/admin/meetings/stats — meeting stats for dashboard
func (h *MeetingHandler) AdminStats(c *fiber.Ctx) error {
	var total, paid, pending, confirmed int
	var revenue int64
	h.db.QueryRowContext(c.Context(), `SELECT COUNT(*), SUM(CASE WHEN payment_status='paid' THEN 1 ELSE 0 END),
		SUM(CASE WHEN status='pending' THEN 1 ELSE 0 END), SUM(CASE WHEN status='confirmed' THEN 1 ELSE 0 END),
		COALESCE(SUM(CASE WHEN payment_status='paid' THEN amount ELSE 0 END), 0)
		FROM meetings`).Scan(&total, &paid, &pending, &confirmed, &revenue)

	return c.JSON(fiber.Map{
		"total": total, "paid": paid, "pending": pending,
		"confirmed": confirmed, "revenue_idr": revenue,
	})
}

// POST /api/admin/meetings/:id/resend-invoice — resend payment link
func (h *MeetingHandler) AdminResendInvoice(c *fiber.Ctx) error {
	var m struct {
		Name  string
		Email string
	}
	err := h.db.QueryRowContext(c.Context(), `SELECT name, email FROM meetings WHERE id = ?`, c.Params("id")).Scan(&m.Name, &m.Email)
	if err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "not found"})
	}

	id := c.Params("id")
	externalID := "MEETING-" + id[:8] + "-R"

	result, err := h.xendit.CreateInvoice(c.Context(), payment.InvoiceRequest{
		ExternalID:   externalID,
		Amount:       50000,
		PayerEmail:   m.Email,
		Description:  "Commitment Fee Konsultasi - " + m.Name,
		CustomerName: m.Name,
	})
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "failed to create invoice: " + err.Error()})
	}

	h.db.ExecContext(c.Context(), `UPDATE meetings SET payment_id=?, payment_url=?, xendit_invoice_id=? WHERE id=?`,
		externalID, result.InvoiceURL, result.InvoiceID, id)

	// Generate JWT for resend confirmation
	token, _ := middleware.GenerateToken(h.cfg, "admin", "admin", "admin")
	_ = token

	return c.JSON(fiber.Map{"payment_url": result.InvoiceURL})
}
