package main

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/autobot-wijaya/autobot-api/internal/config"
	"github.com/autobot-wijaya/autobot-api/internal/database"
	_ "github.com/go-sql-driver/mysql"
)

func runMigrations(cfg *config.Config) error {
	db, err := database.NewMySQLDB(cfg)
	if err != nil {
		return fmt.Errorf("connect db: %w", err)
	}
	defer db.Close()

	log.Println("running MySQL migrations...")
	return applyMigrations(db)
}

func applyMigrations(db *sql.DB) error {
	migrations := []string{
		createUsers,
		createChatSessions,
		createChatMessages,
		createProducts,
		createPartners,
		createPages,
		createContactSubmissions,
		createKnowledgeBase,
		createMeetings,
		createBlogPosts,
		createIntegrations,
	}

	for i, m := range migrations {
		if _, err := db.Exec(m); err != nil {
			return fmt.Errorf("migration %d failed: %w", i+1, err)
		}
		log.Printf("migration %d applied", i+1)
	}

	// Additive ALTER TABLE migrations — safe to fail if columns already exist
	alters := []string{
		`ALTER TABLE users ADD COLUMN display_name VARCHAR(255)`,
		`ALTER TABLE users ADD COLUMN access_key VARCHAR(64)`,
		`ALTER TABLE users ADD COLUMN verification_code VARCHAR(10)`,
		`ALTER TABLE users ADD COLUMN verification_expires_at DATETIME`,
		`ALTER TABLE users ADD COLUMN is_email_verified TINYINT(1) DEFAULT 0`,
		`ALTER TABLE users ADD UNIQUE INDEX idx_access_key (access_key)`,
		`ALTER TABLE users ADD COLUMN otp_attempts INT DEFAULT 0`,
	}
	for _, a := range alters {
		if _, err := db.Exec(a); err != nil {
			// "Duplicate column" or "Duplicate key" errors are expected on re-run
			log.Printf("alter (skipped if duplicate): %v", err)
		}
	}
	return nil
}

const createUsers = `
CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(36) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'admin',
    is_active TINYINT(1) DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`

const createChatSessions = `
CREATE TABLE IF NOT EXISTS chat_sessions (
    id VARCHAR(36) PRIMARY KEY,
    visitor_id VARCHAR(255) NOT NULL,
    visitor_name VARCHAR(255),
    visitor_email VARCHAR(255),
    visitor_phone VARCHAR(50),
    source VARCHAR(50) DEFAULT 'web',
    status VARCHAR(50) DEFAULT 'active',
    metadata JSON,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_visitor (visitor_id),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`

const createChatMessages = `
CREATE TABLE IF NOT EXISTS chat_messages (
    id VARCHAR(36) PRIMARY KEY,
    session_id VARCHAR(36) NOT NULL,
    role VARCHAR(20) NOT NULL,
    content TEXT NOT NULL,
    rich_content JSON,
    intent VARCHAR(100),
    metadata JSON,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_session (session_id),
    FOREIGN KEY (session_id) REFERENCES chat_sessions(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`

const createProducts = `
CREATE TABLE IF NOT EXISTS products (
    id VARCHAR(36) PRIMARY KEY,
    slug VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    tagline VARCHAR(500),
    description TEXT,
    category VARCHAR(100) NOT NULL,
    icon_url VARCHAR(500),
    cover_image_url VARCHAR(500),
    features JSON,
    pricing JSON,
    tech_stack JSON,
    delivery_model VARCHAR(50),
    demo_url VARCHAR(500),
    status VARCHAR(50) DEFAULT 'active',
    sort_order INT DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`

const createPartners = `
CREATE TABLE IF NOT EXISTS partners (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    logo_url VARCHAR(500),
    website_url VARCHAR(500),
    description TEXT,
    partnership_type VARCHAR(100),
    testimonial TEXT,
    testimonial_author VARCHAR(255),
    testimonial_role VARCHAR(255),
    is_featured TINYINT(1) DEFAULT 0,
    sort_order INT DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`

const createPages = `
CREATE TABLE IF NOT EXISTS pages (
    id VARCHAR(36) PRIMARY KEY,
    slug VARCHAR(100) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    meta_title VARCHAR(255),
    meta_description VARCHAR(500),
    is_published TINYINT(1) DEFAULT 1,
    sort_order INT DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`

const createContactSubmissions = `
CREATE TABLE IF NOT EXISTS contact_submissions (
    id VARCHAR(36) PRIMARY KEY,
    session_id VARCHAR(36),
    type VARCHAR(100) NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(50),
    company VARCHAR(255),
    message TEXT,
    product_interest VARCHAR(100),
    budget_range VARCHAR(100),
    form_data JSON,
    status VARCHAR(50) DEFAULT 'new',
    notes TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_status (status),
    INDEX idx_type (type)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`

const createKnowledgeBase = `
CREATE TABLE IF NOT EXISTS knowledge_base (
    id VARCHAR(36) PRIMARY KEY,
    category VARCHAR(100) NOT NULL,
    question TEXT,
    answer TEXT NOT NULL,
    rich_answer JSON,
    priority INT DEFAULT 0,
    is_active TINYINT(1) DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_category (category),
    FULLTEXT INDEX idx_fulltext (question, answer)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`

const createMeetings = `
CREATE TABLE IF NOT EXISTS meetings (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    company VARCHAR(255),
    topic TEXT,
    preferred_date DATE,
    preferred_time VARCHAR(20),
    notes TEXT,
    amount INT NOT NULL DEFAULT 50000,
    status VARCHAR(50) DEFAULT 'pending',
    payment_status VARCHAR(50) DEFAULT 'unpaid',
    payment_id VARCHAR(255),
    payment_url VARCHAR(500),
    payment_method VARCHAR(100),
    xendit_invoice_id VARCHAR(255),
    session_id VARCHAR(36),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_status (status),
    INDEX idx_payment_status (payment_status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`

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

const createIntegrations = `
CREATE TABLE IF NOT EXISTS integrations (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    logo_url VARCHAR(500),
    category VARCHAR(100) DEFAULT 'general',
    status VARCHAR(50) DEFAULT 'coming_soon',
    is_featured TINYINT(1) DEFAULT 0,
    sort_order INT DEFAULT 0,
    docs_url VARCHAR(500),
    knowledge_base TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_status (status),
    INDEX idx_category (category)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`
