package handler

import (
	"context"
	"time"

	"github.com/autobot-wijaya/autobot-api/internal/config"
	"github.com/autobot-wijaya/autobot-api/internal/email"
	"github.com/autobot-wijaya/autobot-api/internal/middleware"
	"github.com/autobot-wijaya/autobot-api/internal/model"
	"github.com/autobot-wijaya/autobot-api/internal/repository"
	"github.com/gofiber/fiber/v2"
	dto "github.com/prometheus/client_model/go"
	"github.com/prometheus/client_golang/prometheus"
	"github.com/redis/go-redis/v9"
	"go.uber.org/zap"
)

type AdminHandler struct {
	cfg         *config.Config
	chatRepo    *repository.ChatRepository
	productRepo *repository.ProductRepository
	userRepo    *repository.UserRepo
	mailer      *email.Mailer
	redis       *redis.Client
	log         *zap.Logger
}

func NewAdminHandler(cfg *config.Config, chatRepo *repository.ChatRepository, productRepo *repository.ProductRepository, userRepo *repository.UserRepo, mailer *email.Mailer, redisClient *redis.Client, log *zap.Logger) *AdminHandler {
	return &AdminHandler{cfg: cfg, chatRepo: chatRepo, productRepo: productRepo, userRepo: userRepo, mailer: mailer, redis: redisClient, log: log}
}

func (h *AdminHandler) invalidateCache(ctx context.Context) {
	if h.redis == nil {
		return
	}
	h.redis.Del(ctx, cachePartners)
	iter := h.redis.Scan(ctx, 0, cacheProducts+"*", 100).Iterator()
	for iter.Next(ctx) {
		h.redis.Del(ctx, iter.Val())
	}
	iter = h.redis.Scan(ctx, 0, cachePage+"*", 100).Iterator()
	for iter.Next(ctx) {
		h.redis.Del(ctx, iter.Val())
	}
}

func (h *AdminHandler) Login(c *fiber.Ctx) error {
	var req struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}
	if err := c.BodyParser(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "invalid request"})
	}

	if req.Email != h.cfg.Admin.Email || req.Password != h.cfg.Admin.Password {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"error": "invalid credentials"})
	}

	token, err := middleware.GenerateToken(h.cfg, "admin-1", req.Email, "admin")
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "failed to generate token"})
	}

	return c.JSON(fiber.Map{
		"token": token,
		"user": fiber.Map{
			"id":    "admin-1",
			"email": req.Email,
			"role":  "admin",
		},
	})
}

func (h *AdminHandler) Health(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{
		"status":    "ok",
		"timestamp": time.Now().UTC(),
		"version":   "1.0.0",
	})
}

// ─── Dashboard / Analytics ────────────────────────────────────────────────────

func (h *AdminHandler) GetDashboard(c *fiber.Ctx) error {
	ctx := c.Context()

	totalSessions, _ := h.chatRepo.CountSessions(ctx)
	totalMessages, _ := h.chatRepo.CountMessages(ctx)
	sessions, _ := h.chatRepo.ListSessions(ctx, "", 10, 0)
	_, totalUsers, _ := h.userRepo.ListUsers(ctx, "", 1, 0)
	_, totalContacts, _ := h.productRepo.ListContacts(ctx, "", 1, 0)

	return c.JSON(fiber.Map{
		"stats": fiber.Map{
			"total_sessions": totalSessions,
			"total_messages": totalMessages,
			"total_users":    totalUsers,
			"total_contacts": totalContacts,
			"generated_at":   time.Now().UTC(),
		},
		"recent_sessions": sessions,
	})
}

// gatherCounter reads a Prometheus CounterVec value for the given metric name and label set.
func gatherCounter(metricName string, labels map[string]string) float64 {
	mfs, err := prometheus.DefaultGatherer.Gather()
	if err != nil {
		return 0
	}
	for _, mf := range mfs {
		if mf.GetName() != metricName {
			continue
		}
		for _, m := range mf.GetMetric() {
			if labelsMatch(m, labels) {
				if c := m.GetCounter(); c != nil {
					return c.GetValue()
				}
			}
		}
	}
	return 0
}

func labelsMatch(m *dto.Metric, want map[string]string) bool {
	got := make(map[string]string, len(m.GetLabel()))
	for _, lp := range m.GetLabel() {
		got[lp.GetName()] = lp.GetValue()
	}
	for k, v := range want {
		if got[k] != v {
			return false
		}
	}
	return true
}

func (h *AdminHandler) GetAnalytics(c *fiber.Ctx) error {
	ctx := c.Context()
	days := c.QueryInt("days", 30)

	trend, _ := h.chatRepo.GetSessionsTrend(ctx, days)
	intents, _ := h.chatRepo.GetTopIntents(ctx, 8)

	if trend == nil {
		trend = []repository.SessionTrendPoint{}
	}
	if intents == nil {
		intents = []repository.IntentCount{}
	}

	// Token usage from Prometheus in-process counters
	claudeIn  := gatherCounter("autobot_ai_tokens_total", map[string]string{"provider": "anthropic", "type": "input"})
	claudeOut := gatherCounter("autobot_ai_tokens_total", map[string]string{"provider": "anthropic", "type": "output"})
	openaiIn  := gatherCounter("autobot_ai_tokens_total", map[string]string{"provider": "openai", "type": "input"})
	openaiOut := gatherCounter("autobot_ai_tokens_total", map[string]string{"provider": "openai", "type": "output"})
	aiErrors  := gatherCounter("autobot_ai_errors_total", map[string]string{"provider": "anthropic"}) +
		gatherCounter("autobot_ai_errors_total", map[string]string{"provider": "openai"})

	// Estimate cost in USD (Claude Sonnet 3.7: $3/1M in, $15/1M out; GPT-4o: $5/1M in, $15/1M out)
	claudeCost := (claudeIn/1_000_000)*3.0 + (claudeOut/1_000_000)*15.0
	openaiCost := (openaiIn/1_000_000)*5.0 + (openaiOut/1_000_000)*15.0

	return c.JSON(fiber.Map{
		"sessions_trend": trend,
		"top_intents":    intents,
		"total_revenue":  0,
		"generated_at":   time.Now().UTC(),
		"ai_usage": fiber.Map{
			"claude": fiber.Map{
				"input_tokens":  int64(claudeIn),
				"output_tokens": int64(claudeOut),
				"total_tokens":  int64(claudeIn + claudeOut),
				"cost_usd":      claudeCost,
			},
			"openai": fiber.Map{
				"input_tokens":  int64(openaiIn),
				"output_tokens": int64(openaiOut),
				"total_tokens":  int64(openaiIn + openaiOut),
				"cost_usd":      openaiCost,
			},
			"total_cost_usd": claudeCost + openaiCost,
			"total_errors":   int64(aiErrors),
		},
	})
}

// ─── Sessions ────────────────────────────────────────────────────────────────

func (h *AdminHandler) ListSessions(c *fiber.Ctx) error {
	status := c.Query("status", "")
	limit := c.QueryInt("limit", 20)
	offset := c.QueryInt("offset", 0)

	sessions, err := h.chatRepo.ListSessions(c.Context(), status, limit, offset)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "failed to fetch sessions"})
	}

	total, _ := h.chatRepo.CountSessions(c.Context())
	return c.JSON(fiber.Map{"data": sessions, "total": total})
}

func (h *AdminHandler) GetSession(c *fiber.Ctx) error {
	sessionID := c.Params("id")

	session, err := h.chatRepo.GetSession(c.Context(), sessionID)
	if err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "session not found"})
	}

	messages, _ := h.chatRepo.GetSessionMessages(c.Context(), sessionID, 200)

	return c.JSON(fiber.Map{
		"session":  session,
		"messages": messages,
	})
}

// ─── Products CRUD ────────────────────────────────────────────────────────────

func (h *AdminHandler) ListProducts(c *fiber.Ctx) error {
	products, err := h.productRepo.ListAll(c.Context())
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "failed to fetch products"})
	}
	return c.JSON(fiber.Map{"data": products, "total": len(products)})
}

func (h *AdminHandler) CreateProduct(c *fiber.Ctx) error {
	var p model.Product
	if err := c.BodyParser(&p); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "invalid request body"})
	}
	if p.Slug == "" || p.Name == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "slug and name are required"})
	}
	if p.Status == "" {
		p.Status = "active"
	}
	if err := h.productRepo.Create(c.Context(), &p); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "failed to create product"})
	}
	h.invalidateCache(c.Context())
	return c.Status(fiber.StatusCreated).JSON(p)
}

func (h *AdminHandler) UpdateProduct(c *fiber.Ctx) error {
	id := c.Params("id")
	var p model.Product
	if err := c.BodyParser(&p); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "invalid request body"})
	}
	p.ID = id
	if err := h.productRepo.Update(c.Context(), &p); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "failed to update product"})
	}
	h.invalidateCache(c.Context())
	return c.JSON(fiber.Map{"ok": true})
}

func (h *AdminHandler) DeleteProduct(c *fiber.Ctx) error {
	id := c.Params("id")
	if err := h.productRepo.Delete(c.Context(), id); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "failed to delete product"})
	}
	h.invalidateCache(c.Context())
	return c.JSON(fiber.Map{"ok": true})
}

// ─── Users ────────────────────────────────────────────────────────────────────

func (h *AdminHandler) ListUsers(c *fiber.Ctx) error {
	search := c.Query("search", "")
	limit := c.QueryInt("limit", 20)
	offset := c.QueryInt("offset", 0)

	users, total, err := h.userRepo.ListUsers(c.Context(), search, limit, offset)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "failed to fetch users"})
	}
	return c.JSON(fiber.Map{"data": users, "total": total})
}

func (h *AdminHandler) GetUser(c *fiber.Ctx) error {
	id := c.Params("id")
	u, err := h.userRepo.GetAdminUser(c.Context(), id)
	if err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "user not found"})
	}
	return c.JSON(u)
}

func (h *AdminHandler) UpdateUserStatus(c *fiber.Ctx) error {
	id := c.Params("id")
	var req struct {
		IsActive bool `json:"is_active"`
	}
	if err := c.BodyParser(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "invalid request"})
	}
	if err := h.userRepo.UpdateUserStatus(c.Context(), id, req.IsActive); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "failed to update user"})
	}
	return c.JSON(fiber.Map{"ok": true})
}

// ─── Contact Submissions ──────────────────────────────────────────────────────

func (h *AdminHandler) ListContacts(c *fiber.Ctx) error {
	status := c.Query("status", "")
	limit := c.QueryInt("limit", 20)
	offset := c.QueryInt("offset", 0)

	contacts, total, err := h.productRepo.ListContacts(c.Context(), status, limit, offset)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "failed to fetch contacts"})
	}
	return c.JSON(fiber.Map{"data": contacts, "total": total})
}

func (h *AdminHandler) UpdateContact(c *fiber.Ctx) error {
	id := c.Params("id")
	var req struct {
		Status string `json:"status"`
		Notes  string `json:"notes"`
	}
	if err := c.BodyParser(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "invalid request"})
	}
	if err := h.productRepo.UpdateContact(c.Context(), id, req.Status, req.Notes); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "failed to update contact"})
	}
	return c.JSON(fiber.Map{"ok": true})
}

// ─── Pages / Content ──────────────────────────────────────────────────────────

func (h *AdminHandler) ListPages(c *fiber.Ctx) error {
	pages, err := h.productRepo.ListPages(c.Context())
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "failed to fetch pages"})
	}
	return c.JSON(fiber.Map{"data": pages, "total": len(pages)})
}

func (h *AdminHandler) UpdatePage(c *fiber.Ctx) error {
	slug := c.Params("slug")
	var req struct {
		Title     string `json:"title"`
		Content   string `json:"content"`
		Published bool   `json:"is_published"`
	}
	if err := c.BodyParser(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "invalid request"})
	}
	if err := h.productRepo.UpdatePage(c.Context(), slug, req.Title, req.Content, req.Published); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "failed to update page"})
	}
	return c.JSON(fiber.Map{"ok": true})
}

func (h *AdminHandler) CreatePage(c *fiber.Ctx) error {
	var req struct {
		Slug      string `json:"slug"`
		Title     string `json:"title"`
		Content   string `json:"content"`
		Published bool   `json:"is_published"`
		SortOrder int    `json:"sort_order"`
	}
	if err := c.BodyParser(&req); err != nil || req.Title == "" || req.Slug == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "slug and title required"})
	}
	id := "page-" + req.Slug
	if err := h.productRepo.CreatePage(c.Context(), id, req.Slug, req.Title, req.Content, req.Published, req.SortOrder); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "failed to create: " + err.Error()})
	}
	return c.JSON(fiber.Map{"slug": req.Slug})
}

func (h *AdminHandler) DeletePage(c *fiber.Ctx) error {
	if err := h.productRepo.DeletePage(c.Context(), c.Params("slug")); err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "failed to delete"})
	}
	return c.JSON(fiber.Map{"ok": true})
}

// ─── Knowledge Base ───────────────────────────────────────────────────────────

func (h *AdminHandler) ListKnowledge(c *fiber.Ctx) error {
	entries, err := h.productRepo.ListKnowledge(c.Context())
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "failed to fetch knowledge"})
	}
	return c.JSON(fiber.Map{"data": entries, "total": len(entries)})
}

func (h *AdminHandler) CreateKnowledge(c *fiber.Ctx) error {
	var e model.KnowledgeEntry
	if err := c.BodyParser(&e); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "invalid request body"})
	}
	if e.Answer == "" || e.Category == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "category and answer are required"})
	}
	if err := h.productRepo.CreateKnowledge(c.Context(), &e); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "failed to create knowledge entry"})
	}
	return c.Status(fiber.StatusCreated).JSON(e)
}

func (h *AdminHandler) DeleteKnowledge(c *fiber.Ctx) error {
	id := c.Params("id")
	if err := h.productRepo.DeleteKnowledge(c.Context(), id); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "failed to delete knowledge entry"})
	}
	return c.JSON(fiber.Map{"ok": true})
}

// ─── Email Templates ──────────────────────────────────────────────────────────

func (h *AdminHandler) ListEmailTemplates(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{"data": email.AllTemplates, "total": len(email.AllTemplates)})
}

// PreviewEmailTemplate renders a template to HTML without sending it.
func (h *AdminHandler) PreviewEmailTemplate(c *fiber.Ctx) error {
	id := c.Params("id")
	var vars map[string]interface{}
	if err := c.BodyParser(&vars); err != nil || vars == nil {
		// Fall back to sample vars
		for _, t := range email.AllTemplates {
			if t.ID == id {
				vars = t.SampleVars
				break
			}
		}
	}
	_, html, err := email.Render(id, vars)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": err.Error()})
	}
	c.Set("Content-Type", "text/html; charset=utf-8")
	return c.SendString(html)
}

// SendTestEmail sends a template to the configured SMTP_TEST_TO address.
func (h *AdminHandler) SendTestEmail(c *fiber.Ctx) error {
	var req struct {
		TemplateID string                 `json:"template_id"`
		To         string                 `json:"to"`
		Vars       map[string]interface{} `json:"vars"`
	}
	if err := c.BodyParser(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "invalid request"})
	}
	if req.TemplateID == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "template_id required"})
	}

	// Use provided To, fall back to config TestTo, then admin email
	to := req.To
	if to == "" {
		to = h.cfg.SMTP.TestTo
	}
	if to == "" {
		to = h.cfg.Admin.Email
	}

	// Use provided vars or fall back to sample vars
	vars := req.Vars
	if vars == nil {
		for _, t := range email.AllTemplates {
			if t.ID == req.TemplateID {
				vars = t.SampleVars
				break
			}
		}
	}

	if err := h.mailer.SendTemplate(to, req.TemplateID, vars); err != nil {
		h.log.Error("send test email", zap.Error(err))
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "failed to send: " + err.Error()})
	}

	return c.JSON(fiber.Map{"ok": true, "sent_to": to})
}
