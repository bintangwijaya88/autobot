package handler

import (
	"database/sql"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
	"go.uber.org/zap"
)

type IntegrationHandler struct {
	db  *sql.DB
	log *zap.Logger
}

func NewIntegrationHandler(db *sql.DB, log *zap.Logger) *IntegrationHandler {
	return &IntegrationHandler{db: db, log: log}
}

type Integration struct {
	ID           string    `json:"id"`
	Name         string    `json:"name"`
	Slug         string    `json:"slug"`
	Description  string    `json:"description"`
	LogoURL      string    `json:"logo_url"`
	Category     string    `json:"category"`
	Status       string    `json:"status"`
	IsFeatured   bool      `json:"is_featured"`
	SortOrder    int       `json:"sort_order"`
	DocsURL      string    `json:"docs_url"`
	KnowledgeBase string   `json:"knowledge_base"`
	CreatedAt    time.Time `json:"created_at"`
	UpdatedAt    time.Time `json:"updated_at"`
}

func scanIntegration(row interface{ Scan(...any) error }) (*Integration, error) {
	var i Integration
	var desc, logo, docs, kb sql.NullString
	var featured int
	err := row.Scan(&i.ID, &i.Name, &i.Slug, &desc, &logo, &i.Category, &i.Status, &featured, &i.SortOrder, &docs, &kb, &i.CreatedAt, &i.UpdatedAt)
	if err != nil {
		return nil, err
	}
	i.IsFeatured = featured == 1
	if desc.Valid { i.Description = desc.String }
	if logo.Valid { i.LogoURL = logo.String }
	if docs.Valid { i.DocsURL = docs.String }
	if kb.Valid { i.KnowledgeBase = kb.String }
	return &i, nil
}

// GET /api/integrations — public
func (h *IntegrationHandler) List(c *fiber.Ctx) error {
	category := c.Query("category", "")
	where := ""
	args := []interface{}{}
	if category != "" {
		where = " WHERE category = ?"
		args = append(args, category)
	}
	rows, err := h.db.QueryContext(c.Context(), `
		SELECT id, name, slug, COALESCE(description,''), COALESCE(logo_url,''), category, status, is_featured, sort_order,
		       COALESCE(docs_url,''), COALESCE(knowledge_base,''), created_at, updated_at
		FROM integrations`+where+` ORDER BY sort_order ASC, name ASC`, args...)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "failed"})
	}
	defer rows.Close()
	var list []Integration
	for rows.Next() {
		i, _ := scanIntegration(rows)
		if i != nil { list = append(list, *i) }
	}
	if list == nil { list = []Integration{} }
	return c.JSON(fiber.Map{"integrations": list})
}

// ─── Admin CRUD ───────────────────────────────────────────────────────────────

func (h *IntegrationHandler) AdminList(c *fiber.Ctx) error {
	rows, err := h.db.QueryContext(c.Context(), `
		SELECT id, name, slug, COALESCE(description,''), COALESCE(logo_url,''), category, status, is_featured, sort_order,
		       COALESCE(docs_url,''), COALESCE(knowledge_base,''), created_at, updated_at
		FROM integrations ORDER BY sort_order ASC, name ASC`)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "failed"})
	}
	defer rows.Close()
	var list []Integration
	for rows.Next() {
		i, _ := scanIntegration(rows)
		if i != nil { list = append(list, *i) }
	}
	if list == nil { list = []Integration{} }
	var total int
	h.db.QueryRowContext(c.Context(), "SELECT COUNT(*) FROM integrations").Scan(&total)
	return c.JSON(fiber.Map{"integrations": list, "total": total})
}

func (h *IntegrationHandler) AdminGet(c *fiber.Ctx) error {
	row := h.db.QueryRowContext(c.Context(), `
		SELECT id, name, slug, COALESCE(description,''), COALESCE(logo_url,''), category, status, is_featured, sort_order,
		       COALESCE(docs_url,''), COALESCE(knowledge_base,''), created_at, updated_at
		FROM integrations WHERE id = ?`, c.Params("id"))
	i, err := scanIntegration(row)
	if err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "not found"})
	}
	return c.JSON(i)
}

func (h *IntegrationHandler) AdminCreate(c *fiber.Ctx) error {
	var req Integration
	if err := c.BodyParser(&req); err != nil || req.Name == "" {
		return c.Status(400).JSON(fiber.Map{"error": "name required"})
	}
	if req.Slug == "" { req.Slug = slugify(req.Name) }
	if req.Category == "" { req.Category = "general" }
	if req.Status == "" { req.Status = "coming_soon" }

	id := uuid.New().String()
	_, err := h.db.ExecContext(c.Context(), `
		INSERT INTO integrations (id, name, slug, description, logo_url, category, status, is_featured, sort_order, docs_url, knowledge_base)
		VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
	`, id, req.Name, req.Slug, req.Description, req.LogoURL, req.Category, req.Status,
		req.IsFeatured, req.SortOrder, req.DocsURL, req.KnowledgeBase)
	if err != nil {
		h.log.Error("create integration", zap.Error(err))
		return c.Status(500).JSON(fiber.Map{"error": err.Error()})
	}
	return c.JSON(fiber.Map{"id": id})
}

func (h *IntegrationHandler) AdminUpdate(c *fiber.Ctx) error {
	var req Integration
	if err := c.BodyParser(&req); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "invalid body"})
	}
	_, err := h.db.ExecContext(c.Context(), `
		UPDATE integrations SET name=?, slug=?, description=?, logo_url=?, category=?, status=?, is_featured=?, sort_order=?, docs_url=?, knowledge_base=?
		WHERE id=?
	`, req.Name, req.Slug, req.Description, req.LogoURL, req.Category, req.Status,
		req.IsFeatured, req.SortOrder, req.DocsURL, req.KnowledgeBase, c.Params("id"))
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": err.Error()})
	}
	return c.JSON(fiber.Map{"ok": true})
}

func (h *IntegrationHandler) AdminDelete(c *fiber.Ctx) error {
	h.db.ExecContext(c.Context(), `DELETE FROM integrations WHERE id = ?`, c.Params("id"))
	return c.JSON(fiber.Map{"ok": true})
}
