package model

import (
	"encoding/json"
	"time"
)

type ChatSession struct {
	ID           string          `db:"id" json:"id"`
	VisitorID    string          `db:"visitor_id" json:"visitor_id"`
	VisitorName  *string         `db:"visitor_name" json:"visitor_name"`
	VisitorEmail *string         `db:"visitor_email" json:"visitor_email"`
	VisitorPhone *string         `db:"visitor_phone" json:"visitor_phone"`
	Source       string          `db:"source" json:"source"`
	Status       string          `db:"status" json:"status"`
	Metadata     json.RawMessage `db:"metadata" json:"metadata"`
	CreatedAt    time.Time       `db:"created_at" json:"created_at"`
	UpdatedAt    time.Time       `db:"updated_at" json:"updated_at"`
}

type ChatMessage struct {
	ID          string          `db:"id" json:"id"`
	SessionID   string          `db:"session_id" json:"session_id"`
	Role        string          `db:"role" json:"role"`
	Content     string          `db:"content" json:"content"`
	RichContent json.RawMessage `db:"rich_content" json:"rich_content,omitempty"`
	Intent      *string         `db:"intent" json:"intent,omitempty"`
	Metadata    json.RawMessage `db:"metadata" json:"metadata,omitempty"`
	CreatedAt   time.Time       `db:"created_at" json:"created_at"`
}

// WebSocket message types
type WSMessage struct {
	Type        string          `json:"type"`
	SessionID   string          `json:"session_id,omitempty"`
	Content     string          `json:"content,omitempty"`
	Role        string          `json:"role,omitempty"`
	RichContent json.RawMessage `json:"rich_content,omitempty"`
	MessageID   string          `json:"message_id,omitempty"`
	Token       string          `json:"token,omitempty"`
	Suggestions []SuggestedPrompt `json:"suggestions,omitempty"`
	FormType    string          `json:"form_type,omitempty"`
	Data        json.RawMessage `json:"data,omitempty"`
	Error       string          `json:"error,omitempty"`
	UserName    string          `json:"user_name,omitempty"`
	AccessKey   string          `json:"access_key,omitempty"`
}

type SuggestedPrompt struct {
	Text     string `json:"text"`
	Icon     string `json:"icon"`
	Category string `json:"category"`
}

// Rich content types
type RichContent struct {
	Type string          `json:"type"`
	Data json.RawMessage `json:"data"`
}

type ProductCardData struct {
	Name         string            `json:"name"`
	Slug         string            `json:"slug"`
	Tagline      string            `json:"tagline"`
	Image        string            `json:"image"`
	Category     string            `json:"category"`
	Features     []string          `json:"features"`
	Delivery     string            `json:"delivery"`
	CTA          *CTAData          `json:"cta,omitempty"`
}

type CTAData struct {
	Label    string `json:"label"`
	Action   string `json:"action"`
	FormType string `json:"form_type,omitempty"`
	Slug     string `json:"slug,omitempty"`
}

type CarouselData struct {
	Title string            `json:"title"`
	Items []CarouselItem    `json:"items"`
}

type CarouselItem struct {
	Name    string   `json:"name"`
	Slug    string   `json:"slug"`
	Image   string   `json:"image"`
	Tagline string   `json:"tagline"`
}

type PricingTableData struct {
	Product string        `json:"product"`
	Tiers   []PricingTier `json:"tiers"`
	CTA     *CTAData      `json:"cta,omitempty"`
}

type PricingTier struct {
	Name        string   `json:"name"`
	Price       string   `json:"price"`
	Period      string   `json:"period"`
	Features    []string `json:"features"`
	Highlighted bool     `json:"highlighted"`
}

type FormData struct {
	FormType    string      `json:"form_type"`
	Title       string      `json:"title"`
	Description string      `json:"description,omitempty"`
	Fields      []FormField `json:"fields"`
	SubmitLabel string      `json:"submit_label"`
}

type FormField struct {
	Name        string   `json:"name"`
	Label       string   `json:"label"`
	Type        string   `json:"type"`
	Required    bool     `json:"required"`
	Placeholder string   `json:"placeholder,omitempty"`
	Options     []string `json:"options,omitempty"`
}
