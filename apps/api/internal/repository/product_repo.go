package repository

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"

	"github.com/autobot-wijaya/autobot-api/internal/model"
	"github.com/google/uuid"
)

type ProductRepository struct {
	db *sql.DB
}

func NewProductRepository(db *sql.DB) *ProductRepository {
	return &ProductRepository{db: db}
}

func (r *ProductRepository) List(ctx context.Context, category string) ([]*model.Product, error) {
	query := `
		SELECT id, slug, name, tagline, description, category, icon_url, cover_image_url,
		       features, pricing, tech_stack, delivery_model, demo_url, status, sort_order, created_at, updated_at
		FROM products
		WHERE status = 'active'
	`
	args := []interface{}{}
	if category != "" {
		query += " AND category = ?"
		args = append(args, category)
	}
	query += " ORDER BY sort_order ASC, created_at ASC"

	rows, err := r.db.QueryContext(ctx, query, args...)
	if err != nil {
		return nil, fmt.Errorf("list products: %w", err)
	}
	defer rows.Close()

	var products []*model.Product
	for rows.Next() {
		p := &model.Product{}
		var tagline, description, iconURL, coverURL, features, pricing, techStack, deliveryModel, demoURL sql.NullString
		if err := rows.Scan(&p.ID, &p.Slug, &p.Name, &tagline, &description, &p.Category,
			&iconURL, &coverURL, &features, &pricing, &techStack,
			&deliveryModel, &demoURL, &p.Status, &p.SortOrder, &p.CreatedAt, &p.UpdatedAt); err != nil {
			return nil, err
		}
		if tagline.Valid { p.Tagline = &tagline.String }
		if description.Valid { p.Description = &description.String }
		if iconURL.Valid { p.IconURL = &iconURL.String }
		if features.Valid { p.Features = json.RawMessage(features.String) }
		if pricing.Valid { p.Pricing = json.RawMessage(pricing.String) }
		if techStack.Valid { p.TechStack = json.RawMessage(techStack.String) }
		if deliveryModel.Valid { p.DeliveryModel = &deliveryModel.String }
		products = append(products, p)
	}
	return products, nil
}

func (r *ProductRepository) GetBySlug(ctx context.Context, slug string) (*model.Product, error) {
	p := &model.Product{}
	var tagline, description, iconURL, coverURL, features, pricing, techStack, deliveryModel, demoURL sql.NullString
	err := r.db.QueryRowContext(ctx, `
		SELECT id, slug, name, tagline, description, category, icon_url, cover_image_url,
		       features, pricing, tech_stack, delivery_model, demo_url, status, sort_order, created_at, updated_at
		FROM products WHERE slug = ?
	`, slug).Scan(
		&p.ID, &p.Slug, &p.Name, &tagline, &description, &p.Category,
		&iconURL, &coverURL, &features, &pricing, &techStack,
		&deliveryModel, &demoURL, &p.Status, &p.SortOrder, &p.CreatedAt, &p.UpdatedAt,
	)
	if err != nil {
		return nil, fmt.Errorf("get product by slug: %w", err)
	}
	if tagline.Valid { p.Tagline = &tagline.String }
	if description.Valid { p.Description = &description.String }
	if features.Valid { p.Features = json.RawMessage(features.String) }
	if pricing.Valid { p.Pricing = json.RawMessage(pricing.String) }
	if techStack.Valid { p.TechStack = json.RawMessage(techStack.String) }
	if deliveryModel.Valid { p.DeliveryModel = &deliveryModel.String }
	return p, nil
}

func (r *ProductRepository) GetByID(ctx context.Context, id string) (*model.Product, error) {
	return r.GetBySlug(ctx, id) // reuse with id instead of slug for simplicity
}

func (r *ProductRepository) ListPartners(ctx context.Context, featuredOnly bool) ([]*model.Partner, error) {
	query := `
		SELECT id, name, logo_url, website_url, description, partnership_type,
		       testimonial, testimonial_author, testimonial_role, is_featured, sort_order, created_at
		FROM partners
	`
	if featuredOnly {
		query += " WHERE is_featured = 1"
	}
	query += " ORDER BY sort_order ASC, created_at ASC"

	rows, err := r.db.QueryContext(ctx, query)
	if err != nil {
		return nil, fmt.Errorf("list partners: %w", err)
	}
	defer rows.Close()

	var partners []*model.Partner
	for rows.Next() {
		p := &model.Partner{}
		var logoURL, websiteURL, description, partType, testimonial, testimonialAuthor, testimonialRole sql.NullString
		if err := rows.Scan(&p.ID, &p.Name, &logoURL, &websiteURL, &description,
			&partType, &testimonial, &testimonialAuthor, &testimonialRole,
			&p.IsFeatured, &p.SortOrder, &p.CreatedAt); err != nil {
			return nil, err
		}
		if logoURL.Valid { p.LogoURL = &logoURL.String }
		if description.Valid { p.Description = &description.String }
		if partType.Valid { p.PartnershipType = &partType.String }
		if testimonial.Valid { p.Testimonial = &testimonial.String }
		if testimonialAuthor.Valid { p.TestimonialAuthor = &testimonialAuthor.String }
		partners = append(partners, p)
	}
	return partners, nil
}

func (r *ProductRepository) GetPage(ctx context.Context, slug string) (*model.Page, error) {
	p := &model.Page{}
	var metaTitle, metaDesc sql.NullString
	err := r.db.QueryRowContext(ctx, `
		SELECT id, slug, title, content, meta_title, meta_description, is_published, sort_order, created_at, updated_at
		FROM pages WHERE slug = ? AND is_published = 1
	`, slug).Scan(
		&p.ID, &p.Slug, &p.Title, &p.Content, &metaTitle, &metaDesc,
		&p.IsPublished, &p.SortOrder, &p.CreatedAt, &p.UpdatedAt,
	)
	if err != nil {
		return nil, fmt.Errorf("get page: %w", err)
	}
	if metaTitle.Valid { p.MetaTitle = &metaTitle.String }
	if metaDesc.Valid { p.MetaDescription = &metaDesc.String }
	return p, nil
}

func (r *ProductRepository) FindKnowledge(ctx context.Context, message, category string) ([]*model.KnowledgeEntry, error) {
	// Try FULLTEXT search first when a message is provided
	if message != "" {
		entries, err := r.findKnowledgeFullText(ctx, message, category)
		if err == nil && len(entries) > 0 {
			return entries, nil
		}
	}

	// Fallback: return top-priority entries for the category
	query := `
		SELECT id, category, question, answer, rich_answer, priority, is_active, created_at, updated_at
		FROM knowledge_base
		WHERE is_active = 1
	`
	args := []interface{}{}
	if category != "" {
		query += " AND category = ?"
		args = append(args, category)
	}
	query += " ORDER BY priority DESC LIMIT 5"

	rows, err := r.db.QueryContext(ctx, query, args...)
	if err != nil {
		return nil, fmt.Errorf("find knowledge: %w", err)
	}
	defer rows.Close()

	return r.scanKnowledgeRows(rows)
}

func (r *ProductRepository) findKnowledgeFullText(ctx context.Context, message, category string) ([]*model.KnowledgeEntry, error) {
	query := `
		SELECT id, category, question, answer, rich_answer, priority, is_active, created_at, updated_at,
		       MATCH(question, answer) AGAINST(? IN BOOLEAN MODE) AS relevance
		FROM knowledge_base
		WHERE is_active = 1
		  AND MATCH(question, answer) AGAINST(? IN BOOLEAN MODE)
	`
	args := []interface{}{message, message}
	if category != "" {
		query += " AND category = ?"
		args = append(args, category)
	}
	query += " ORDER BY relevance DESC, priority DESC LIMIT 3"

	rows, err := r.db.QueryContext(ctx, query, args...)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var entries []*model.KnowledgeEntry
	for rows.Next() {
		e := &model.KnowledgeEntry{}
		var question, richAnswer sql.NullString
		var relevance float64
		if err := rows.Scan(&e.ID, &e.Category, &question, &e.Answer, &richAnswer,
			&e.Priority, &e.IsActive, &e.CreatedAt, &e.UpdatedAt, &relevance); err != nil {
			return nil, err
		}
		if question.Valid { e.Question = &question.String }
		if richAnswer.Valid { e.RichAnswer = json.RawMessage(richAnswer.String) }
		entries = append(entries, e)
	}
	return entries, nil
}

func (r *ProductRepository) scanKnowledgeRows(rows *sql.Rows) ([]*model.KnowledgeEntry, error) {
	var entries []*model.KnowledgeEntry
	for rows.Next() {
		e := &model.KnowledgeEntry{}
		var question, richAnswer sql.NullString
		if err := rows.Scan(&e.ID, &e.Category, &question, &e.Answer, &richAnswer,
			&e.Priority, &e.IsActive, &e.CreatedAt, &e.UpdatedAt); err != nil {
			return nil, err
		}
		if question.Valid { e.Question = &question.String }
		if richAnswer.Valid { e.RichAnswer = json.RawMessage(richAnswer.String) }
		entries = append(entries, e)
	}
	return entries, nil
}

// ─── Admin: Products ──────────────────────────────────────────────────────────

func (r *ProductRepository) ListAll(ctx context.Context) ([]*model.Product, error) {
	rows, err := r.db.QueryContext(ctx, `
		SELECT id, slug, name, tagline, description, category, icon_url, cover_image_url,
		       features, pricing, tech_stack, delivery_model, demo_url, status, sort_order, created_at, updated_at
		FROM products ORDER BY sort_order ASC, created_at DESC`)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var products []*model.Product
	for rows.Next() {
		p := &model.Product{}
		var tagline, description, iconURL, coverURL, features, pricing, techStack, deliveryModel, demoURL sql.NullString
		if err := rows.Scan(&p.ID, &p.Slug, &p.Name, &tagline, &description, &p.Category,
			&iconURL, &coverURL, &features, &pricing, &techStack,
			&deliveryModel, &demoURL, &p.Status, &p.SortOrder, &p.CreatedAt, &p.UpdatedAt); err != nil {
			return nil, err
		}
		if tagline.Valid { p.Tagline = &tagline.String }
		if description.Valid { p.Description = &description.String }
		if iconURL.Valid { p.IconURL = &iconURL.String }
		if features.Valid { p.Features = json.RawMessage(features.String) }
		if pricing.Valid { p.Pricing = json.RawMessage(pricing.String) }
		if techStack.Valid { p.TechStack = json.RawMessage(techStack.String) }
		if deliveryModel.Valid { p.DeliveryModel = &deliveryModel.String }
		products = append(products, p)
	}
	return products, nil
}

func (r *ProductRepository) Create(ctx context.Context, p *model.Product) error {
	p.ID = uuid.New().String()
	features := "{}"
	if p.Features != nil { features = string(p.Features) }
	pricing := "{}"
	if p.Pricing != nil { pricing = string(p.Pricing) }
	techStack := "[]"
	if p.TechStack != nil { techStack = string(p.TechStack) }
	_, err := r.db.ExecContext(ctx, `
		INSERT INTO products (id, slug, name, tagline, description, category, features, pricing, tech_stack,
		                      delivery_model, demo_url, status, sort_order)
		VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
		p.ID, p.Slug, p.Name, p.Tagline, p.Description, p.Category,
		features, pricing, techStack, p.DeliveryModel, p.DemoURL, p.Status, p.SortOrder)
	return err
}

func (r *ProductRepository) Update(ctx context.Context, p *model.Product) error {
	features := "{}"
	if p.Features != nil { features = string(p.Features) }
	pricing := "{}"
	if p.Pricing != nil { pricing = string(p.Pricing) }
	techStack := "[]"
	if p.TechStack != nil { techStack = string(p.TechStack) }
	_, err := r.db.ExecContext(ctx, `
		UPDATE products SET slug=?, name=?, tagline=?, description=?, category=?, features=?,
		       pricing=?, tech_stack=?, delivery_model=?, demo_url=?, status=?, sort_order=?,
		       updated_at=NOW()
		WHERE id=?`,
		p.Slug, p.Name, p.Tagline, p.Description, p.Category,
		features, pricing, techStack, p.DeliveryModel, p.DemoURL, p.Status, p.SortOrder, p.ID)
	return err
}

func (r *ProductRepository) Delete(ctx context.Context, id string) error {
	_, err := r.db.ExecContext(ctx, `UPDATE products SET status='archived', updated_at=NOW() WHERE id=?`, id)
	return err
}

// ─── Admin: Contacts ─────────────────────────────────────────────────────────

func (r *ProductRepository) ListContacts(ctx context.Context, status string, limit, offset int) ([]*model.ContactSubmission, int, error) {
	args := []interface{}{}
	where := ""
	if status != "" {
		where = " WHERE status = ?"
		args = append(args, status)
	}
	var total int
	r.db.QueryRowContext(ctx, "SELECT COUNT(*) FROM contact_submissions"+where, args...).Scan(&total)

	args = append(args, limit, offset)
	rows, err := r.db.QueryContext(ctx,
		`SELECT id, session_id, type, name, email, phone, company, message, product_interest, budget_range, form_data, status, notes, created_at, updated_at
		 FROM contact_submissions`+where+` ORDER BY created_at DESC LIMIT ? OFFSET ?`, args...)
	if err != nil {
		return nil, 0, err
	}
	defer rows.Close()

	var subs []*model.ContactSubmission
	for rows.Next() {
		s := &model.ContactSubmission{}
		var sessionID, email, phone, company, msg, pi, br, formData, notes sql.NullString
		if err := rows.Scan(&s.ID, &sessionID, &s.Type, &s.Name, &email, &phone, &company,
			&msg, &pi, &br, &formData, &s.Status, &notes, &s.CreatedAt, &s.UpdatedAt); err != nil {
			return nil, 0, err
		}
		if sessionID.Valid { s.SessionID = &sessionID.String }
		if email.Valid { s.Email = &email.String }
		if phone.Valid { s.Phone = &phone.String }
		if company.Valid { s.Company = &company.String }
		if msg.Valid { s.Message = &msg.String }
		if pi.Valid { s.ProductInterest = &pi.String }
		if notes.Valid { s.Notes = &notes.String }
		if formData.Valid { s.FormData = json.RawMessage(formData.String) }
		subs = append(subs, s)
	}
	return subs, total, nil
}

func (r *ProductRepository) UpdateContact(ctx context.Context, id, status, notes string) error {
	_, err := r.db.ExecContext(ctx, `UPDATE contact_submissions SET status=?, notes=?, updated_at=NOW() WHERE id=?`, status, notes, id)
	return err
}

// ─── Admin: Pages ─────────────────────────────────────────────────────────────

func (r *ProductRepository) ListPages(ctx context.Context) ([]*model.Page, error) {
	rows, err := r.db.QueryContext(ctx,
		`SELECT id, slug, title, content, meta_title, meta_description, is_published, sort_order, created_at, updated_at
		 FROM pages ORDER BY sort_order ASC`)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var pages []*model.Page
	for rows.Next() {
		p := &model.Page{}
		var metaTitle, metaDesc sql.NullString
		if err := rows.Scan(&p.ID, &p.Slug, &p.Title, &p.Content, &metaTitle, &metaDesc, &p.IsPublished, &p.SortOrder, &p.CreatedAt, &p.UpdatedAt); err != nil {
			return nil, err
		}
		if metaTitle.Valid { p.MetaTitle = &metaTitle.String }
		if metaDesc.Valid { p.MetaDescription = &metaDesc.String }
		pages = append(pages, p)
	}
	return pages, nil
}

func (r *ProductRepository) UpdatePage(ctx context.Context, slug, title, content string, published bool) error {
	_, err := r.db.ExecContext(ctx,
		`UPDATE pages SET title=?, content=?, is_published=?, updated_at=NOW() WHERE slug=?`,
		title, content, published, slug)
	return err
}

func (r *ProductRepository) CreatePage(ctx context.Context, id, slug, title, content string, published bool, sortOrder int) error {
	_, err := r.db.ExecContext(ctx,
		`INSERT INTO pages (id, slug, title, content, is_published, sort_order) VALUES (?, ?, ?, ?, ?, ?)`,
		id, slug, title, content, published, sortOrder)
	return err
}

func (r *ProductRepository) DeletePage(ctx context.Context, slug string) error {
	_, err := r.db.ExecContext(ctx, `DELETE FROM pages WHERE slug = ?`, slug)
	return err
}

// ─── Admin: Knowledge Base ────────────────────────────────────────────────────

func (r *ProductRepository) ListKnowledge(ctx context.Context) ([]*model.KnowledgeEntry, error) {
	rows, err := r.db.QueryContext(ctx,
		`SELECT id, category, question, answer, rich_answer, priority, is_active, created_at, updated_at
		 FROM knowledge_base ORDER BY priority DESC, created_at DESC`)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var entries []*model.KnowledgeEntry
	for rows.Next() {
		e := &model.KnowledgeEntry{}
		var question, richAnswer sql.NullString
		if err := rows.Scan(&e.ID, &e.Category, &question, &e.Answer, &richAnswer,
			&e.Priority, &e.IsActive, &e.CreatedAt, &e.UpdatedAt); err != nil {
			return nil, err
		}
		if question.Valid { e.Question = &question.String }
		if richAnswer.Valid { e.RichAnswer = json.RawMessage(richAnswer.String) }
		entries = append(entries, e)
	}
	return entries, nil
}

func (r *ProductRepository) CreateKnowledge(ctx context.Context, e *model.KnowledgeEntry) error {
	e.ID = uuid.New().String()
	q := ""
	if e.Question != nil { q = *e.Question }
	_, err := r.db.ExecContext(ctx,
		`INSERT INTO knowledge_base (id, category, question, answer, priority, is_active) VALUES (?, ?, ?, ?, ?, 1)`,
		e.ID, e.Category, q, e.Answer, e.Priority)
	return err
}

func (r *ProductRepository) DeleteKnowledge(ctx context.Context, id string) error {
	_, err := r.db.ExecContext(ctx, `UPDATE knowledge_base SET is_active=0 WHERE id=?`, id)
	return err
}

// ─── Admin: Contact Submissions (original) ───────────────────────────────────

func (r *ProductRepository) SaveContactSubmission(ctx context.Context, sub *model.ContactSubmission) error {
	id := uuid.New().String()
	var formData string
	if sub.FormData != nil {
		formData = string(sub.FormData)
	} else {
		formData = "{}"
	}

	_, err := r.db.ExecContext(ctx, `
		INSERT INTO contact_submissions (id, session_id, type, name, email, phone, company, message, product_interest, budget_range, form_data, status)
		VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'new')
	`, id, sub.SessionID, sub.Type, sub.Name, sub.Email, sub.Phone, sub.Company, sub.Message,
		sub.ProductInterest, sub.BudgetRange, formData)
	if err != nil {
		return fmt.Errorf("save submission: %w", err)
	}
	sub.ID = id
	return nil
}
