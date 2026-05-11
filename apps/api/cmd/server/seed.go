package main

import (
	"context"
	"database/sql"
	"encoding/json"
	"log"

	"github.com/google/uuid"
)

func seedData(ctx context.Context, db *sql.DB) error {
	log.Println("seeding products...")
	if err := seedProducts(ctx, db); err != nil {
		return err
	}
	log.Println("seeding knowledge base...")
	if err := seedKnowledge(ctx, db); err != nil {
		return err
	}
	log.Println("seeding partners...")
	if err := seedPartners(ctx, db); err != nil {
		return err
	}
	log.Println("seeding pages...")
	if err := seedPages(ctx, db); err != nil {
		return err
	}
	return nil
}

func seedProducts(ctx context.Context, db *sql.DB) error {
	products := []map[string]interface{}{
		{
			"slug": "wablast", "name": "WaBlast",
			"tagline":        "WhatsApp Blast & Broadcast Desktop Tool",
			"category":       "blast",
			"description":    "Tool desktop untuk mengirim pesan WhatsApp massal ke ribuan kontak.",
			"delivery_model": "desktop", "sort_order": 1,
			"features": []string{"Bulk messaging ke ribuan kontak", "Import kontak dari Excel/CSV", "Custom message template", "Scheduled/delayed sending", "Anti-ban delay system", "Report & delivery tracking"},
			"pricing": []map[string]interface{}{
				{"name": "Basic", "price": "Rp 500.000", "period": "lifetime", "features": []string{"1 nomor WA", "1.000 kontak/hari"}, "highlighted": false},
				{"name": "Pro", "price": "Rp 1.500.000", "period": "lifetime", "features": []string{"3 nomor WA", "Unlimited kontak", "Priority support"}, "highlighted": true},
				{"name": "Enterprise", "price": "Rp 3.000.000", "period": "lifetime", "features": []string{"Unlimited nomor", "API access", "Custom branding"}, "highlighted": false},
			},
			"tech_stack": []string{"Tauri 2", "Rust", "Vue 3", "SQLite"},
		},
		{
			"slug": "wabotiq", "name": "WaBotIQ",
			"tagline":        "WhatsApp Business AI Chatbot Platform",
			"category":       "chatbot",
			"description":    "Platform chatbot WhatsApp cerdas dengan AI. Trainable sesuai bisnis Anda.",
			"delivery_model": "web", "sort_order": 2,
			"features": []string{"AI-powered auto reply", "Custom knowledge base training", "Multi-agent support", "Conversation analytics", "Webhook integration"},
			"pricing": []map[string]interface{}{
				{"name": "Starter", "price": "Rp 299.000", "period": "bulan", "features": []string{"1 nomor WA", "500 pesan AI/bulan"}, "highlighted": false},
				{"name": "Pro", "price": "Rp 799.000", "period": "bulan", "features": []string{"3 nomor WA", "5.000 pesan AI/bulan", "Analytics"}, "highlighted": true},
				{"name": "Business", "price": "Rp 1.999.000", "period": "bulan", "features": []string{"Unlimited", "Dedicated instance"}, "highlighted": false},
			},
			"tech_stack": []string{"Go", "Vue 3", "PostgreSQL", "OpenAI API"},
		},
		{
			"slug": "ddl-klinik", "name": "DDL Klinik",
			"tagline":        "WhatsApp AI Chatbot + Booking untuk Klinik & RS",
			"category":       "chatbot",
			"description":    "Solusi lengkap untuk klinik: chatbot WhatsApp booking pasien, reminder jadwal, dashboard admin.",
			"delivery_model": "web", "sort_order": 3,
			"features": []string{"Booking jadwal via WhatsApp", "Reminder otomatis H-1 dan H-day", "FAQ kesehatan per spesialisasi", "Dashboard admin", "Laporan kunjungan pasien"},
			"pricing": []map[string]interface{}{
				{"name": "Basic", "price": "Rp 5.000.000", "period": "tahun", "features": []string{"1 cabang", "1 nomor WA"}, "highlighted": false},
				{"name": "Pro", "price": "Rp 10.000.000", "period": "tahun", "features": []string{"3 cabang", "SIMRS integration"}, "highlighted": true},
			},
			"tech_stack": []string{"Go", "Vue 3", "MySQL", "WhatsApp API"},
		},
		{
			"slug": "autobot-flow", "name": "Autobot Flow",
			"tagline":        "Visual Workflow Automation Builder",
			"category":       "workflow",
			"description":    "Automasi proses bisnis dengan visual builder tanpa coding.",
			"delivery_model": "web", "sort_order": 4,
			"features": []string{"Visual drag & drop flow builder", "Trigger: schedule, webhook, event", "Action: WhatsApp, email, API call", "Conditional branching", "Execution logs"},
			"pricing": []map[string]interface{}{
				{"name": "Starter", "price": "Rp 499.000", "period": "bulan", "features": []string{"5 active flows"}, "highlighted": false},
				{"name": "Pro", "price": "Rp 1.499.000", "period": "bulan", "features": []string{"Unlimited flows", "API access"}, "highlighted": true},
			},
			"tech_stack": []string{"Go", "Vue 3", "MySQL", "Redis"},
		},
		{
			"slug": "autobot-agent", "name": "Autobot Agent",
			"tagline":        "Custom AI Agent untuk Bisnis Anda",
			"category":       "ai_agent",
			"description":    "AI agent khusus bisnis Anda: customer support, data analyst, lead qualifier.",
			"delivery_model": "web", "sort_order": 5,
			"features": []string{"Custom AI training per bisnis", "Deploy ke WhatsApp, web, API", "Knowledge base management", "Human handover capability"},
			"pricing": []map[string]interface{}{
				{"name": "Single Agent", "price": "Mulai Rp 3.000.000", "period": "bulan", "features": []string{"1 AI agent", "Custom training"}, "highlighted": false},
				{"name": "Multi Agent", "price": "Custom", "period": "bulan", "features": []string{"Multiple agents", "Dedicated instance"}, "highlighted": true},
			},
			"tech_stack": []string{"Go", "OpenAI API", "Anthropic API", "MySQL"},
		},
		{
			"slug": "autobot-connect", "name": "Autobot Connect",
			"tagline":        "System Integration Middleware",
			"category":       "integration",
			"description":    "Penghubung antar sistem: ERP ↔ WhatsApp, CRM ↔ Email, POS ↔ Inventory.",
			"delivery_model": "hybrid", "sort_order": 6,
			"features": []string{"Pre-built connectors (Mekari Jurnal, Accurate)", "WhatsApp ↔ ERP sync", "Real-time data sync", "Error queue & retry"},
			"pricing": []map[string]interface{}{
				{"name": "Per Project", "price": "Mulai Rp 10.000.000", "period": "one-time", "features": []string{"Custom scope", "3 bulan support"}, "highlighted": false},
				{"name": "Managed", "price": "Mulai Rp 2.000.000", "period": "bulan", "features": []string{"Monitoring 24/7", "Priority bug fix"}, "highlighted": true},
			},
			"tech_stack": []string{"Go", "REST/GraphQL", "MySQL", "Redis"},
		},
	}

	for _, p := range products {
		features, _ := json.Marshal(p["features"])
		pricing, _ := json.Marshal(p["pricing"])
		techStack, _ := json.Marshal(p["tech_stack"])
		id := uuid.New().String()

		_, err := db.ExecContext(ctx, `
			INSERT INTO products (id, slug, name, tagline, description, category, features, pricing, tech_stack, delivery_model, sort_order, status)
			VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'active')
			ON DUPLICATE KEY UPDATE
				name = VALUES(name), tagline = VALUES(tagline),
				features = VALUES(features), pricing = VALUES(pricing),
				updated_at = CURRENT_TIMESTAMP
		`, id, p["slug"], p["name"], p["tagline"], p["description"], p["category"],
			string(features), string(pricing), string(techStack), p["delivery_model"], p["sort_order"])
		if err != nil {
			log.Printf("failed to seed product %s: %v", p["slug"], err)
		}
	}
	return nil
}

func seedKnowledge(ctx context.Context, db *sql.DB) error {
	entries := []struct{ category, question, answer string; priority int }{
		{"company_info", "Siapa Autobot?", "CV Autobot Wijaya Solution adalah perusahaan IT spesialis bot dan automasi berbasis di Jakarta. Didirikan 2022, kami fokus membangun chatbot cerdas, workflow automation, dan AI agent.", 10},
		{"company_info", "Apa spesialisasi Autobot?", "Kami spesialis di bidang bot dan automasi: WhatsApp chatbot, WhatsApp blast, workflow automation, system integration, AI agent, dan scheduled worker.", 10},
		{"faq", "Apakah data saya aman?", "Sangat aman. Setiap deployment client mendapat instance eksklusif — data Anda 100% terisolasi.", 9},
		{"faq", "Apakah bisa di-install di server sendiri?", "Ya! Produk kami tersedia versi desktop (PC) dan web (server Anda atau managed hosting).", 9},
		{"product", "Apa bedanya WaBlast dan WaBotIQ?", "WaBlast untuk kirim pesan massal (1-way broadcast), WaBotIQ adalah chatbot AI yang menjawab otomatis (2-way). WaBlast untuk promo, WaBotIQ untuk customer service.", 10},
		{"custom_dev", "Apakah Autobot menerima jasa custom development?", "Ya! Kami menyediakan jasa custom software development: website, web app, mobile app, desktop app, dan system integration.", 9},
	}

	for _, e := range entries {
		id := uuid.New().String()
		_, err := db.ExecContext(ctx, `
			INSERT INTO knowledge_base (id, category, question, answer, priority, is_active)
			VALUES (?, ?, ?, ?, ?, 1)
		`, id, e.category, e.question, e.answer, e.priority)
		if err != nil {
			log.Printf("failed to seed KB entry: %v", err)
		}
	}
	return nil
}

func seedPartners(ctx context.Context, db *sql.DB) error {
	partners := []struct{ name, partType, description, testimonial string; featured bool }{
		{"PT Kimia Farma Diagnostika", "client", "SuratMedis — 600.000+ surat keterangan medis terbit", "Sistem SuratMedis dari Autobot telah membantu kami menerbitkan lebih dari 600 ribu surat keterangan medis secara efisien.", true},
		{"SMKS Ar-Raisiyah Husada", "client", "SIAKAD BINTANX — Sistem akademik dan e-learning", "", true},
		{"RSIA Aries", "client", "SIMRS — Sistem informasi manajemen rumah sakit", "", true},
		{"Denali Import", "client", "PO Middleware — Integrasi purchase order dengan Mekari Jurnal", "", false},
	}

	for _, p := range partners {
		id := uuid.New().String()
		featured := 0
		if p.featured { featured = 1 }
		var testimonial *string
		if p.testimonial != "" { testimonial = &p.testimonial }
		_, err := db.ExecContext(ctx, `
			INSERT INTO partners (id, name, partnership_type, description, testimonial, is_featured)
			VALUES (?, ?, ?, ?, ?, ?)
		`, id, p.name, p.partType, p.description, testimonial, featured)
		if err != nil {
			log.Printf("failed to seed partner: %v", err)
		}
	}
	return nil
}

func seedPages(ctx context.Context, db *sql.DB) error {
	pages := []struct{ slug, title, content, metaDesc string }{
		{"about", "Tentang CV Autobot Wijaya Solution", `# CV Autobot Wijaya Solution

CV Autobot Wijaya Solution adalah perusahaan IT spesialis **bot dan automasi** berbasis di Jakarta. Didirikan 2022.

## Visi
Menjadi penyedia solusi automasi bisnis terdepan di Indonesia.

## Keunggulan
- 9+ tahun pengalaman full-stack development
- Data 100% terisolasi per client
- AI-powered chatbot dan agent
- Support responsif`, "CV Autobot Wijaya Solution — Spesialis bot dan automasi bisnis."},
		{"services", "Jasa Custom Development", `# Jasa Custom Development

Web App, Mobile App, Desktop App, System Integration, AI/ML Integration.

## Tech Stack
- Backend: Go (Fiber), Rust
- Frontend: Vue 3, Nuxt 3
- Mobile: Flutter
- Desktop: Tauri 2
- AI: OpenAI, Anthropic`, "Jasa custom software development oleh Autobot."},
	}

	for _, p := range pages {
		id := uuid.New().String()
		_, err := db.ExecContext(ctx, `
			INSERT INTO pages (id, slug, title, content, meta_description, is_published)
			VALUES (?, ?, ?, ?, ?, 1)
			ON DUPLICATE KEY UPDATE title = VALUES(title), content = VALUES(content)
		`, id, p.slug, p.title, p.content, p.metaDesc)
		if err != nil {
			log.Printf("failed to seed page %s: %v", p.slug, err)
		}
	}
	return nil
}
