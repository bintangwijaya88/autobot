package main

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"strings"
	"time"
	"unicode"

	"github.com/autobot-wijaya/autobot-api/internal/config"
	"github.com/autobot-wijaya/autobot-api/internal/database"
	"github.com/google/uuid"
)

type topic struct {
	Title    string
	Category string
	Tags     []string
}

type angle struct {
	Prefix   string
	Focus    string
	Outcome  string
	ReadTime int
}

func main() {
	cfg := config.Load()
	db, err := database.NewMySQLDB(cfg)
	if err != nil {
		log.Fatalf("connect db: %v", err)
	}
	defer db.Close()

	ctx, cancel := context.WithTimeout(context.Background(), 2*time.Minute)
	defer cancel()

	if _, err := db.ExecContext(ctx, createBlogPosts); err != nil {
		log.Fatalf("ensure blog table: %v", err)
	}

	count, err := seedBlogPosts(ctx, db)
	if err != nil {
		log.Fatalf("seed blog posts: %v", err)
	}
	log.Printf("seeded %d blog posts", count)
}

func seedBlogPosts(ctx context.Context, db *sql.DB) (int, error) {
	topics := []topic{
		{"WhatsApp Automation untuk Tim Sales", "WhatsApp Automation", []string{"whatsapp", "sales", "automation"}},
		{"AI Agent untuk Customer Service", "AI Agent", []string{"ai-agent", "customer-service", "support"}},
		{"Workflow Automation untuk Operasional Harian", "Workflow", []string{"workflow", "operations", "automation"}},
		{"CRM Terintegrasi dengan WhatsApp", "CRM", []string{"crm", "whatsapp", "lead-management"}},
		{"Broadcast WhatsApp yang Aman dan Terukur", "WhatsApp Automation", []string{"broadcast", "campaign", "whatsapp"}},
		{"Knowledge Base untuk Chatbot Bisnis", "AI Agent", []string{"knowledge-base", "chatbot", "ai"}},
		{"Dashboard Analytics untuk Owner Bisnis", "Analytics", []string{"dashboard", "analytics", "metrics"}},
		{"Integrasi Payment Link dalam Customer Journey", "Payment", []string{"payment", "checkout", "automation"}},
		{"Document Automation untuk Proposal dan Invoice", "Document Automation", []string{"document", "invoice", "proposal"}},
		{"Lead Qualification Berbasis AI", "Sales Automation", []string{"lead", "qualification", "ai"}},
		{"Human Handover dalam Chatbot", "Customer Experience", []string{"handover", "support", "chatbot"}},
		{"Omnichannel Inbox untuk Tim Support", "Customer Experience", []string{"omnichannel", "inbox", "support"}},
		{"Data Isolation untuk Sistem Bisnis", "Security", []string{"security", "data", "architecture"}},
		{"Approval Workflow untuk Dokumen Internal", "Workflow", []string{"approval", "document", "workflow"}},
		{"Webhook dan API untuk Integrasi Sistem", "Integration", []string{"webhook", "api", "integration"}},
		{"AI Assistant untuk Follow-up Pelanggan", "AI Agent", []string{"follow-up", "ai-assistant", "sales"}},
		{"Automation untuk Klinik dan Layanan Kesehatan", "Industry", []string{"healthcare", "clinic", "automation"}},
		{"Automation untuk Bisnis Properti", "Industry", []string{"property", "sales", "automation"}},
		{"Automation untuk E-commerce Indonesia", "Industry", []string{"ecommerce", "whatsapp", "automation"}},
		{"Managed Automation untuk Perusahaan Bertumbuh", "Operations", []string{"managed-service", "growth", "operations"}},
	}

	angles := []angle{
		{"Panduan Praktis", "cara memulai dari proses paling bernilai", "tim punya langkah awal yang jelas", 4},
		{"Kesalahan Umum", "hal yang sering membuat implementasi lambat", "risiko bisa dikurangi sejak awal", 5},
		{"Checklist Implementasi", "komponen yang perlu disiapkan sebelum go-live", "project lebih mudah dikontrol", 6},
		{"Strategi Skalasi", "cara menaikkan kapasitas tanpa menambah beban manual", "operasional tetap rapi saat volume naik", 5},
		{"Studi Use Case", "contoh penerapan di proses bisnis nyata", "manfaat automation lebih mudah dihitung", 4},
	}

	total := 0
	for i, t := range topics {
		for j, a := range angles {
			seq := i*len(angles) + j + 1
			title := fmt.Sprintf("%s: %s", a.Prefix, t.Title)
			slug := fmt.Sprintf("%s-%03d", slugify(title), seq)
			excerpt := fmt.Sprintf("%s membahas %s agar %s.", title, a.Focus, a.Outcome)
			content := buildContent(title, t.Category, a.Focus, a.Outcome)
			tags, _ := json.Marshal(t.Tags)
			publishedAt := time.Now().AddDate(0, 0, -seq).Format("2006-01-02 15:04:05")
			coverImage := fmt.Sprintf("/images/blog/autobot-blog-%03d.jpg", seq)

			_, err := db.ExecContext(ctx, `
				INSERT INTO blog_posts (
					id, slug, title, excerpt, content, cover_image, author, category, tags,
					is_published, published_at, read_time_minutes, sort_order
				)
				VALUES (?, ?, ?, ?, ?, ?, 'Autobot Team', ?, ?, 1, ?, ?, ?)
				ON DUPLICATE KEY UPDATE
					title = VALUES(title),
					excerpt = VALUES(excerpt),
					content = VALUES(content),
					cover_image = VALUES(cover_image),
					author = VALUES(author),
					category = VALUES(category),
					tags = VALUES(tags),
					is_published = 1,
					published_at = VALUES(published_at),
					read_time_minutes = VALUES(read_time_minutes),
					sort_order = VALUES(sort_order),
					updated_at = CURRENT_TIMESTAMP
			`, uuid.NewString(), slug, title, excerpt, content, coverImage, t.Category, string(tags), publishedAt, a.ReadTime, 1000-seq)
			if err != nil {
				return total, fmt.Errorf("insert %s: %w", slug, err)
			}
			total++
		}
	}
	return total, nil
}

func buildContent(title, category, focus, outcome string) string {
	return fmt.Sprintf(`# %s

Automation yang baik selalu dimulai dari masalah operasional yang spesifik. Dalam konteks %s, target utamanya bukan sekadar menambah tools, tetapi membuat pekerjaan tim lebih terukur, konsisten, dan mudah diaudit.

## Kenapa topik ini penting

Banyak bisnis sudah punya channel digital, tetapi proses di belakangnya masih bergantung pada chat manual, spreadsheet terpisah, dan follow-up yang sulit dilacak. Ketika volume pelanggan naik, pola kerja seperti ini membuat respons melambat dan kualitas layanan tidak stabil.

Fokus utama artikel ini adalah %s. Dengan fokus yang jelas, tim bisa memilih prioritas yang berdampak langsung pada revenue, kepuasan pelanggan, atau efisiensi operasional.

## Komponen yang perlu disiapkan

- Definisikan proses bisnis yang ingin diperbaiki.
- Tentukan data apa saja yang perlu dikumpulkan.
- Buat alur handover ketika automation tidak cukup.
- Siapkan metrik seperti response time, conversion rate, dan completion rate.
- Pastikan setiap aksi penting punya audit trail.

## Cara menerapkan secara bertahap

Mulailah dari satu workflow yang sering terjadi dan mudah diukur. Setelah alur pertama stabil, tambahkan integrasi ke CRM, payment, dokumen, atau dashboard. Pendekatan bertahap membuat tim lebih mudah beradaptasi dan mengurangi risiko perubahan besar sekaligus.

## Kesimpulan

Tujuan akhirnya adalah agar %s. Dengan rancangan yang rapi, automation menjadi fondasi operasional, bukan eksperimen yang berhenti setelah demo pertama.`, title, category, focus, outcome)
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

const createBlogPosts = `
CREATE TABLE IF NOT EXISTS blog_posts (
    id VARCHAR(36) PRIMARY KEY,
    slug VARCHAR(200) UNIQUE NOT NULL,
    title VARCHAR(500) NOT NULL,
    excerpt TEXT,
    content LONGTEXT NOT NULL,
    cover_image VARCHAR(500),
    author VARCHAR(255) DEFAULT 'Autobot Team',
    category VARCHAR(100) DEFAULT 'general',
    tags JSON,
    is_published TINYINT(1) DEFAULT 0,
    published_at DATETIME,
    read_time_minutes INT DEFAULT 5,
    sort_order INT DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_slug (slug),
    INDEX idx_published (is_published),
    INDEX idx_category (category),
    FULLTEXT INDEX idx_ft (title, excerpt, content)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`
