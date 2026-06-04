package handler

import (
	"database/sql"
	"strings"
	"time"
	"unicode"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
	"go.uber.org/zap"
)

type BlogHandler struct {
	db  *sql.DB
	log *zap.Logger
}

func NewBlogHandler(db *sql.DB, log *zap.Logger) *BlogHandler {
	return &BlogHandler{db: db, log: log}
}

type BlogPost struct {
	ID               string    `json:"id"`
	Slug             string    `json:"slug"`
	Title            string    `json:"title"`
	Excerpt          string    `json:"excerpt"`
	Content          string    `json:"content,omitempty"`
	CoverImage       string    `json:"cover_image"`
	Author           string    `json:"author"`
	Category         string    `json:"category"`
	Tags             string    `json:"tags"`
	IsPublished      bool      `json:"is_published"`
	PublishedAt      *string   `json:"published_at"`
	ReadTimeMinutes  int       `json:"read_time_minutes"`
	SortOrder        int       `json:"sort_order"`
	CreatedAt        time.Time `json:"created_at"`
	UpdatedAt        time.Time `json:"updated_at"`
}

func slugify(s string) string {
	s = strings.ToLower(strings.TrimSpace(s))
	var b strings.Builder
	prev := '-'
	for _, r := range s {
		if unicode.IsLetter(r) || unicode.IsDigit(r) {
			b.WriteRune(r)
			prev = r
		} else if prev != '-' {
			b.WriteRune('-')
			prev = '-'
		}
	}
	return strings.Trim(b.String(), "-")
}

// ─── Public ───────────────────────────────────────────────────────────────────

// GET /api/blog — public list (published only)
func (h *BlogHandler) List(c *fiber.Ctx) error {
	category := c.Query("category", "")
	limit := c.QueryInt("limit", 10)
	offset := c.QueryInt("offset", 0)

	where := "WHERE is_published = 1"
	args := []interface{}{}
	if category != "" {
		where += " AND category = ?"
		args = append(args, category)
	}
	args = append(args, limit, offset)

	var total int
	h.db.QueryRowContext(c.Context(), "SELECT COUNT(*) FROM blog_posts "+where, args[:len(args)-2]...).Scan(&total)

	rows, err := h.db.QueryContext(c.Context(), `
		SELECT id, slug, title, COALESCE(excerpt,''), COALESCE(cover_image,''), COALESCE(author,''), category,
		       COALESCE(tags,'[]'), is_published, published_at, read_time_minutes, sort_order, created_at, updated_at
		FROM blog_posts `+where+` ORDER BY sort_order DESC, published_at DESC LIMIT ? OFFSET ?`, args...)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "failed"})
	}
	defer rows.Close()
	posts := scanPosts(rows, false)
	return c.JSON(fiber.Map{"posts": posts, "total": total})
}

// GET /api/blog/:slug — single post
func (h *BlogHandler) GetBySlug(c *fiber.Ctx) error {
	var p BlogPost
	var excerpt, coverImage, author, tags sql.NullString
	var publishedAt sql.NullString
	err := h.db.QueryRowContext(c.Context(), `
		SELECT id, slug, title, COALESCE(excerpt,''), content, COALESCE(cover_image,''), COALESCE(author,'Autobot Team'), category,
		       COALESCE(tags,'[]'), is_published, published_at, read_time_minutes, sort_order, created_at, updated_at
		FROM blog_posts WHERE slug = ? AND is_published = 1
	`, c.Params("slug")).Scan(
		&p.ID, &p.Slug, &p.Title, &excerpt, &p.Content, &coverImage, &author, &p.Category,
		&tags, &p.IsPublished, &publishedAt, &p.ReadTimeMinutes, &p.SortOrder, &p.CreatedAt, &p.UpdatedAt,
	)
	if err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "not found"})
	}
	if excerpt.Valid { p.Excerpt = excerpt.String }
	if coverImage.Valid { p.CoverImage = coverImage.String }
	if author.Valid { p.Author = author.String }
	if tags.Valid { p.Tags = tags.String }
	if publishedAt.Valid { p.PublishedAt = &publishedAt.String }
	return c.JSON(p)
}

// ─── Admin ────────────────────────────────────────────────────────────────────

// GET /api/admin/blog — all posts (admin)
func (h *BlogHandler) AdminList(c *fiber.Ctx) error {
	rows, err := h.db.QueryContext(c.Context(), `
		SELECT id, slug, title, COALESCE(excerpt,''), COALESCE(cover_image,''), COALESCE(author,''), category,
		       COALESCE(tags,'[]'), is_published, published_at, read_time_minutes, sort_order, created_at, updated_at
		FROM blog_posts ORDER BY sort_order DESC, created_at DESC LIMIT 100`)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "failed"})
	}
	defer rows.Close()
	var total int
	h.db.QueryRowContext(c.Context(), "SELECT COUNT(*) FROM blog_posts").Scan(&total)
	return c.JSON(fiber.Map{"posts": scanPosts(rows, false), "total": total})
}

// GET /api/admin/blog/:id — get post with content
func (h *BlogHandler) AdminGet(c *fiber.Ctx) error {
	var p BlogPost
	var excerpt, coverImage, author, tags, publishedAt sql.NullString
	err := h.db.QueryRowContext(c.Context(), `
		SELECT id, slug, title, COALESCE(excerpt,''), content, COALESCE(cover_image,''), COALESCE(author,'Autobot Team'), category,
		       COALESCE(tags,'[]'), is_published, published_at, read_time_minutes, sort_order, created_at, updated_at
		FROM blog_posts WHERE id = ?
	`, c.Params("id")).Scan(
		&p.ID, &p.Slug, &p.Title, &excerpt, &p.Content, &coverImage, &author, &p.Category,
		&tags, &p.IsPublished, &publishedAt, &p.ReadTimeMinutes, &p.SortOrder, &p.CreatedAt, &p.UpdatedAt,
	)
	if err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "not found"})
	}
	if excerpt.Valid { p.Excerpt = excerpt.String }
	if coverImage.Valid { p.CoverImage = coverImage.String }
	if author.Valid { p.Author = author.String }
	if tags.Valid { p.Tags = tags.String }
	if publishedAt.Valid { p.PublishedAt = &publishedAt.String }
	return c.JSON(p)
}

// POST /api/admin/blog — create
func (h *BlogHandler) AdminCreate(c *fiber.Ctx) error {
	var req struct {
		Title           string `json:"title"`
		Slug            string `json:"slug"`
		Excerpt         string `json:"excerpt"`
		Content         string `json:"content"`
		CoverImage      string `json:"cover_image"`
		Author          string `json:"author"`
		Category        string `json:"category"`
		Tags            string `json:"tags"`
		IsPublished     bool   `json:"is_published"`
		ReadTimeMinutes int    `json:"read_time_minutes"`
		SortOrder       int    `json:"sort_order"`
	}
	if err := c.BodyParser(&req); err != nil || req.Title == "" {
		return c.Status(400).JSON(fiber.Map{"error": "title required"})
	}
	if req.Slug == "" {
		req.Slug = slugify(req.Title)
	}
	if req.Author == "" { req.Author = "Autobot Team" }
	if req.Category == "" { req.Category = "general" }
	if req.ReadTimeMinutes == 0 { req.ReadTimeMinutes = 5 }
	if req.Tags == "" { req.Tags = "[]" }

	id := uuid.New().String()
	var pubAt interface{} = nil
	if req.IsPublished { pubAt = time.Now() }

	_, err := h.db.ExecContext(c.Context(), `
		INSERT INTO blog_posts (id, slug, title, excerpt, content, cover_image, author, category, tags, is_published, published_at, read_time_minutes, sort_order)
		VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
	`, id, req.Slug, req.Title, req.Excerpt, req.Content, req.CoverImage, req.Author, req.Category, req.Tags, req.IsPublished, pubAt, req.ReadTimeMinutes, req.SortOrder)
	if err != nil {
		h.log.Error("create blog post", zap.Error(err))
		return c.Status(500).JSON(fiber.Map{"error": "failed to create: " + err.Error()})
	}
	return c.JSON(fiber.Map{"id": id, "slug": req.Slug})
}

// PUT /api/admin/blog/:id — update
func (h *BlogHandler) AdminUpdate(c *fiber.Ctx) error {
	var req struct {
		Title           string `json:"title"`
		Slug            string `json:"slug"`
		Excerpt         string `json:"excerpt"`
		Content         string `json:"content"`
		CoverImage      string `json:"cover_image"`
		Author          string `json:"author"`
		Category        string `json:"category"`
		Tags            string `json:"tags"`
		IsPublished     bool   `json:"is_published"`
		ReadTimeMinutes int    `json:"read_time_minutes"`
		SortOrder       int    `json:"sort_order"`
	}
	if err := c.BodyParser(&req); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "invalid body"})
	}

	var pubAt interface{} = nil
	if req.IsPublished {
		var existing sql.NullString
		h.db.QueryRowContext(c.Context(), `SELECT published_at FROM blog_posts WHERE id = ?`, c.Params("id")).Scan(&existing)
		if existing.Valid {
			pubAt = existing.String
		} else {
			pubAt = time.Now()
		}
	}

	_, err := h.db.ExecContext(c.Context(), `
		UPDATE blog_posts SET slug=?, title=?, excerpt=?, content=?, cover_image=?, author=?, category=?, tags=?,
		                      is_published=?, published_at=?, read_time_minutes=?, sort_order=?
		WHERE id=?
	`, req.Slug, req.Title, req.Excerpt, req.Content, req.CoverImage, req.Author, req.Category, req.Tags,
		req.IsPublished, pubAt, req.ReadTimeMinutes, req.SortOrder, c.Params("id"))
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": err.Error()})
	}
	return c.JSON(fiber.Map{"ok": true})
}

// DELETE /api/admin/blog/:id
func (h *BlogHandler) AdminDelete(c *fiber.Ctx) error {
	h.db.ExecContext(c.Context(), `DELETE FROM blog_posts WHERE id = ?`, c.Params("id"))
	return c.JSON(fiber.Map{"ok": true})
}

// helper
func scanPosts(rows *sql.Rows, withContent bool) []BlogPost {
	var posts []BlogPost
	for rows.Next() {
		var p BlogPost
		var excerpt, coverImage, author, tags, publishedAt sql.NullString
		var isPublished int
		if withContent {
			rows.Scan(&p.ID, &p.Slug, &p.Title, &excerpt, &p.Content, &coverImage, &author,
				&p.Category, &tags, &isPublished, &publishedAt, &p.ReadTimeMinutes, &p.SortOrder, &p.CreatedAt, &p.UpdatedAt)
		} else {
			rows.Scan(&p.ID, &p.Slug, &p.Title, &excerpt, &coverImage, &author,
				&p.Category, &tags, &isPublished, &publishedAt, &p.ReadTimeMinutes, &p.SortOrder, &p.CreatedAt, &p.UpdatedAt)
		}
		p.IsPublished = isPublished == 1
		if excerpt.Valid { p.Excerpt = excerpt.String }
		if coverImage.Valid { p.CoverImage = coverImage.String }
		if author.Valid { p.Author = author.String }
		if tags.Valid { p.Tags = tags.String }
		if publishedAt.Valid { p.PublishedAt = &publishedAt.String }
		posts = append(posts, p)
	}
	if posts == nil { posts = []BlogPost{} }
	return posts
}
