package model

import (
	"encoding/json"
	"time"
)

type Product struct {
	ID            string          `db:"id" json:"id"`
	Slug          string          `db:"slug" json:"slug"`
	Name          string          `db:"name" json:"name"`
	Tagline       *string         `db:"tagline" json:"tagline,omitempty"`
	Description   *string         `db:"description" json:"description,omitempty"`
	Category      string          `db:"category" json:"category"`
	IconURL       *string         `db:"icon_url" json:"icon_url,omitempty"`
	CoverImageURL *string         `db:"cover_image_url" json:"cover_image_url,omitempty"`
	Features      json.RawMessage `db:"features" json:"features"`
	Pricing       json.RawMessage `db:"pricing" json:"pricing"`
	TechStack     json.RawMessage `db:"tech_stack" json:"tech_stack"`
	DeliveryModel *string         `db:"delivery_model" json:"delivery_model,omitempty"`
	DemoURL       *string         `db:"demo_url" json:"demo_url,omitempty"`
	Status        string          `db:"status" json:"status"`
	SortOrder     int             `db:"sort_order" json:"sort_order"`
	CreatedAt     time.Time       `db:"created_at" json:"created_at"`
	UpdatedAt     time.Time       `db:"updated_at" json:"updated_at"`
}

type Partner struct {
	ID                string    `db:"id" json:"id"`
	Name              string    `db:"name" json:"name"`
	LogoURL           *string   `db:"logo_url" json:"logo_url,omitempty"`
	WebsiteURL        *string   `db:"website_url" json:"website_url,omitempty"`
	Description       *string   `db:"description" json:"description,omitempty"`
	PartnershipType   *string   `db:"partnership_type" json:"partnership_type,omitempty"`
	Testimonial       *string   `db:"testimonial" json:"testimonial,omitempty"`
	TestimonialAuthor *string   `db:"testimonial_author" json:"testimonial_author,omitempty"`
	TestimonialRole   *string   `db:"testimonial_role" json:"testimonial_role,omitempty"`
	IsFeatured        bool      `db:"is_featured" json:"is_featured"`
	SortOrder         int       `db:"sort_order" json:"sort_order"`
	CreatedAt         time.Time `db:"created_at" json:"created_at"`
}

type Page struct {
	ID              string    `db:"id" json:"id"`
	Slug            string    `db:"slug" json:"slug"`
	Title           string    `db:"title" json:"title"`
	Content         string    `db:"content" json:"content"`
	MetaTitle       *string   `db:"meta_title" json:"meta_title,omitempty"`
	MetaDescription *string   `db:"meta_description" json:"meta_description,omitempty"`
	IsPublished     bool      `db:"is_published" json:"is_published"`
	SortOrder       int       `db:"sort_order" json:"sort_order"`
	CreatedAt       time.Time `db:"created_at" json:"created_at"`
	UpdatedAt       time.Time `db:"updated_at" json:"updated_at"`
}

type ContactSubmission struct {
	ID              string          `db:"id" json:"id"`
	SessionID       *string         `db:"session_id" json:"session_id,omitempty"`
	Type            string          `db:"type" json:"type"`
	Name            string          `db:"name" json:"name"`
	Email           *string         `db:"email" json:"email,omitempty"`
	Phone           *string         `db:"phone" json:"phone,omitempty"`
	Company         *string         `db:"company" json:"company,omitempty"`
	Message         *string         `db:"message" json:"message,omitempty"`
	ProductInterest *string         `db:"product_interest" json:"product_interest,omitempty"`
	BudgetRange     *string         `db:"budget_range" json:"budget_range,omitempty"`
	FormData        json.RawMessage `db:"form_data" json:"form_data,omitempty"`
	Status          string          `db:"status" json:"status"`
	Notes           *string         `db:"notes" json:"notes,omitempty"`
	CreatedAt       time.Time       `db:"created_at" json:"created_at"`
	UpdatedAt       time.Time       `db:"updated_at" json:"updated_at"`
}

type KnowledgeEntry struct {
	ID         string          `db:"id" json:"id"`
	Category   string          `db:"category" json:"category"`
	Question   *string         `db:"question" json:"question,omitempty"`
	Answer     string          `db:"answer" json:"answer"`
	RichAnswer json.RawMessage `db:"rich_answer" json:"rich_answer,omitempty"`
	Priority   int             `db:"priority" json:"priority"`
	IsActive   bool            `db:"is_active" json:"is_active"`
	CreatedAt  time.Time       `db:"created_at" json:"created_at"`
	UpdatedAt  time.Time       `db:"updated_at" json:"updated_at"`
}
