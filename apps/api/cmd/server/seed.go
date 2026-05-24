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
	// Remove discontinued products
	slugsToRemove := []string{"wablast", "wabotiq", "ddl-klinik", "autobot-flow", "autobot-agent", "autobot-connect"}
	for _, slug := range slugsToRemove {
		db.ExecContext(ctx, `DELETE FROM products WHERE slug = ?`, slug)
	}

	products := []map[string]interface{}{
		{
			"slug": "wasigap", "name": "WaSigap",
			"tagline":        "Aplikasi WhatsApp Multi-Akun — Bayar Sekali, Pakai Selamanya",
			"category":       "chatbot",
			"description":    "WaSigap adalah aplikasi WhatsApp multi-akun untuk bisnis dan tim. Satu dasbor, 99 akun WhatsApp, semua fitur lengkap — bayar sekali, tidak perlu perpanjang selamanya.",
			"delivery_model": "desktop", "sort_order": 0,
			"demo_url":        "https://wa.autobot.co.id/",
			"features": []string{
				"99 akun WhatsApp dalam 1 aplikasi",
				"Semua fitur utama tanpa batasan",
				"500 kredit pesan AI",
				"Update aplikasi gratis selamanya*",
				"Tidak perlu berlangganan bulanan",
				"Multi-device support",
				"Broadcast & auto-reply",
				"Dashboard terpusat untuk semua akun",
			},
			"pricing": []map[string]interface{}{
				{
					"name": "♾️ Lifetime", "price": "Rp 199.600", "period": "sekali bayar",
					"original_price": "Rp 499.000", "discount": "-60%",
					"features": []string{
						"99 akun WhatsApp",
						"Semua fitur utama",
						"500 kredit",
						"Update gratis (1.000 user pertama)",
						"Tidak perlu perpanjang",
					},
					"highlighted": true,
					"cta_url": "https://wa.autobot.co.id/",
				},
			},
			"tech_stack": []string{"Electron", "Vue 3", "Node.js", "SQLite"},
		},
		{
			"slug": "custom-ai", "name": "Custom AI Development",
			"tagline":        "AI Agent & Chatbot Khusus untuk Bisnis Anda",
			"category":       "ai_agent",
			"description":    "Kami bangun AI agent atau chatbot sesuai kebutuhan spesifik bisnis Anda — dari customer support, booking, hingga workflow automation. Deploy ke WhatsApp, web, atau API.",
			"delivery_model": "custom", "sort_order": 1,
			"features": []string{
				"Konsultasi kebutuhan & desain solusi",
				"AI agent custom berbasis LLM (Claude, GPT-4)",
				"Knowledge base training sesuai bisnis",
				"Deploy ke WhatsApp, web, atau API",
				"Human handover & escalation",
				"Garansi bug fix 3 bulan",
			},
			"pricing": []map[string]interface{}{
				{"name": "Custom Project", "price": "Mulai Rp 3.000.000", "period": "project", "features": []string{"Scope disesuaikan", "Konsultasi gratis", "3 bulan garansi"}, "highlighted": true},
			},
			"tech_stack": []string{"Go", "Anthropic Claude", "OpenAI GPT-4", "Vue 3"},
		},
	}

	for _, p := range products {
		features, _ := json.Marshal(p["features"])
		pricing, _ := json.Marshal(p["pricing"])
		techStack, _ := json.Marshal(p["tech_stack"])
		id := uuid.New().String()

		demoURL, _ := p["demo_url"].(string)
		var demoURLPtr *string
		if demoURL != "" {
			demoURLPtr = &demoURL
		}

		_, err := db.ExecContext(ctx, `
			INSERT INTO products (id, slug, name, tagline, description, category, features, pricing, tech_stack, delivery_model, demo_url, sort_order, status)
			VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'active')
			ON DUPLICATE KEY UPDATE
				name = VALUES(name), tagline = VALUES(tagline),
				features = VALUES(features), pricing = VALUES(pricing),
				demo_url = VALUES(demo_url),
				updated_at = CURRENT_TIMESTAMP
		`, id, p["slug"], p["name"], p["tagline"], p["description"], p["category"],
			string(features), string(pricing), string(techStack), p["delivery_model"], demoURLPtr, p["sort_order"])
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
		{"product", "Apa itu WaSigap?", "WaSigap adalah aplikasi desktop WhatsApp multi-akun — bayar sekali Rp 199.600, pakai selamanya. Support 99 akun WA, 500 kredit AI, update gratis untuk 1.000 user pertama.", 10},
		{"custom_dev", "Apakah Autobot menerima jasa custom AI development?", "Ya! Kami membangun AI agent dan chatbot custom sesuai kebutuhan bisnis Anda. Mulai dari Rp 3.000.000, dengan konsultasi gratis dan garansi bug fix 3 bulan.", 9},
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
