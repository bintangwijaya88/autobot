package main

import (
	"context"
	"database/sql"
	"encoding/json"
	"log"

	"github.com/autobot-wijaya/autobot-api/internal/config"
	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
)

func seedData(ctx context.Context, db *sql.DB, cfg *config.Config) error {
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
	log.Println("seeding default users...")
	if err := seedDefaultUsers(ctx, db, cfg); err != nil {
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
	// Clear and re-seed to avoid duplicates on redeploy
	db.ExecContext(ctx, `DELETE FROM knowledge_base`)

	entries := []struct {
		category, question, answer string
		priority                   int
	}{
		// Company info
		{"company_info", "Siapa AutobotWS?", "AutobotWS adalah perusahaan IT spesialis chatbot dan AI berbasis di Jakarta. Didirikan 2022, kami fokus membangun WhatsApp chatbot, broadcast/blast, AI integration, dan workflow automation.", 10},
		{"company_info", "Apa spesialisasi AutobotWS?", "Kami spesialis di bidang WhatsApp chatbot, WhatsApp blast, AI agent, workflow automation, dan custom software development untuk bisnis.", 10},
		{"company_info", "Bagaimana cara menghubungi AutobotWS?", "Hubungi kami via email bintang@autobot.co.id, website autobot.co.id, atau WhatsApp di nomor +62 821-6486-7681.", 9},
		// WaSigap product
		{"product", "Apa itu WaSigap?", "WaSigap adalah aplikasi desktop WhatsApp multi-akun — bayar sekali Rp 199.600 (diskon -60% dari Rp 499.000), pakai selamanya. Support 99 akun WhatsApp, 500 kredit AI, update gratis untuk 1.000 user pertama. Tidak perlu berlangganan bulanan.", 10},
		{"product", "Fitur utama WaSigap apa saja?", "WaSigap memiliki fitur: (1) 99 akun WhatsApp dalam 1 aplikasi desktop, (2) Broadcast & blast pesan ke banyak kontak, (3) Auto-reply otomatis, (4) 500 kredit pesan AI untuk balasan cerdas, (5) Multi-device support, (6) Dashboard terpusat semua akun, (7) Update gratis selamanya untuk 1.000 pembeli pertama.", 10},
		{"product", "Berapa harga WaSigap?", "WaSigap dijual dengan harga Rp 199.600 (bayar sekali, pakai selamanya). Harga normal Rp 499.000, sedang diskon -60%. Tidak ada biaya bulanan atau tahunan. Tersedia di https://wa.autobot.co.id/", 10},
		{"product", "Siapa target pengguna WaSigap?", "WaSigap cocok untuk: pemilik bisnis online, tim marketing & sales, agen properti, reseller & dropshipper, customer support, dan siapapun yang perlu mengelola banyak akun WhatsApp sekaligus.", 9},
		{"product", "Apakah WaSigap aman dari banned WhatsApp?", "WaSigap menggunakan teknologi yang meniru perilaku pengguna nyata untuk meminimalkan risiko banned. Namun tetap disarankan mengikuti panduan penggunaan: jangan kirim spam, gunakan delay antar pesan, dan hindari konten yang melanggar kebijakan WhatsApp.", 8},
		{"product", "AI di WaSigap menggunakan teknologi apa?", "WaSigap menggunakan beberapa pilihan AI: AutobotLLM (AI proprietary kami), OpenAI GPT, dan Anthropic Claude. User mendapat 500 kredit AI gratis saat pembelian.", 9},
		{"product", "Apa itu kredit AI di WaSigap?", "Kredit AI adalah unit untuk menggunakan fitur balasan cerdas berbasis AI di WaSigap. Setiap pesan yang dibalas AI menggunakan 1 kredit. 500 kredit gratis sudah termasuk dalam pembelian. Kredit tambahan bisa dibeli jika habis.", 8},
		{"product", "Apakah ada addon atau tambahan untuk WaSigap?", "Ya, tersedia addon berbayar: (1) Kredit AI tambahan, (2) Template pesan premium, (3) Integrasi webhook custom. Detail dan harga bisa ditanyakan langsung via WhatsApp atau email.", 7},
		{"product", "Bagaimana cara membeli WaSigap?", "Beli WaSigap di https://wa.autobot.co.id/ — klik tombol beli, isi form, lakukan pembayaran, dan dapatkan link download + lisensi via email/WhatsApp. Proses aktivasi instan.", 10},
		{"product", "Apa perbedaan WaSigap dengan WhatsApp Business biasa?", "WhatsApp Business hanya untuk 1 akun per device. WaSigap support 99 akun dalam 1 aplikasi desktop, plus fitur broadcast massal, auto-reply AI, dan tidak perlu bayar bulanan. Jauh lebih powerful untuk tim dan bisnis skala besar.", 9},
		{"product", "Apakah WaSigap bisa digunakan offline?", "WaSigap adalah aplikasi desktop yang perlu koneksi internet untuk sinkronisasi WhatsApp. Namun data dan pengaturan tersimpan lokal, sehingga lebih stabil dibanding solusi berbasis browser.", 7},
		// Custom AI
		{"custom_dev", "Apakah AutobotWS menerima jasa custom AI development?", "Ya! Kami membangun AI agent dan chatbot custom sesuai kebutuhan spesifik bisnis Anda. Mulai dari Rp 3.000.000, dengan konsultasi gratis dan garansi bug fix 3 bulan. Deploy ke WhatsApp, web, atau API.", 9},
		// General FAQ
		{"faq", "Apakah data saya aman?", "Sangat aman. Setiap deployment client mendapat instance eksklusif — data Anda 100% terisolasi. Kami tidak menyimpan data WhatsApp pengguna di server kami.", 9},
		{"faq", "Apakah ada garansi?", "Ya! WaSigap: garansi produk berfungsi sesuai deskripsi. Custom AI Development: garansi bug fix 3 bulan setelah delivery. Kami juga menyediakan support responsif via WhatsApp.", 9},
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
		{"about", "Tentang AutobotWS", `# AutobotWS

AutobotWS adalah perusahaan IT spesialis **WhatsApp chatbot, AI integration, dan workflow automation** berbasis di Jakarta. Didirikan 2022.

## Visi
Menjadi penyedia solusi chatbot dan AI terdepan di Indonesia.

## Keunggulan
- Spesialis WhatsApp chatbot & blast
- AI agent custom berbasis LLM
- Data 100% terisolasi per client
- Support responsif`, "AutobotWS — Spesialis WhatsApp chatbot, AI integration, dan workflow automation."},
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

func seedDefaultUsers(ctx context.Context, db *sql.DB, cfg *config.Config) error {
	hash := func(password string) string {
		h, _ := bcrypt.GenerateFromPassword([]byte(password), 12)
		return string(h)
	}

	adminID := uuid.New().String()
	adminAccessKey := uuid.New().String()
	_, err := db.ExecContext(ctx, `
		INSERT INTO users (id, email, password_hash, name, display_name, role, is_active, access_key, is_email_verified)
		VALUES (?, ?, ?, ?, ?, 'admin', 1, ?, 1)
		ON DUPLICATE KEY UPDATE
			password_hash = VALUES(password_hash),
			name = VALUES(name),
			display_name = VALUES(display_name),
			role = 'admin',
			is_active = 1,
			is_email_verified = 1
	`, adminID, cfg.Admin.Email, hash(cfg.Admin.Password), "Administrator", "Administrator", adminAccessKey)
	if err != nil {
		return err
	}

	userID := uuid.New().String()
	userEmail := "user@autobot.co.id"
	userPassword := "user12345"
	userAccessKey := uuid.New().String()
	_, err = db.ExecContext(ctx, `
		INSERT INTO users (id, email, password_hash, name, display_name, role, is_active, access_key, is_email_verified)
		VALUES (?, ?, ?, ?, ?, 'user', 1, ?, 1)
		ON DUPLICATE KEY UPDATE
			password_hash = VALUES(password_hash),
			name = VALUES(name),
			display_name = VALUES(display_name),
			role = 'user',
			is_active = 1,
			is_email_verified = 1
	`, userID, userEmail, hash(userPassword), "Default User", "Default User", userAccessKey)
	if err != nil {
		return err
	}

	log.Printf("default admin: %s / %s", cfg.Admin.Email, cfg.Admin.Password)
	log.Printf("default user: %s / %s", userEmail, userPassword)
	return nil
}
