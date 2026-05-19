package config

import (
	"os"
	"strconv"
	"time"

	"github.com/joho/godotenv"
)

type Config struct {
	AppPort   string
	AppEnv    string
	DB        DBConfig
	Redis     RedisConfig
	JWT       JWTConfig
	AI        AIConfig
	CORS      CORSConfig
	RateLimit RateLimitConfig
	Admin     AdminConfig
	SMTP      SMTPConfig
	Midtrans  MidtransConfig
	Google    GoogleConfig
}

type MidtransConfig struct {
	ServerKey    string
	IsProduction bool
}

type SMTPConfig struct {
	Host   string
	Port   string
	User   string
	Pass   string
	From   string
	Debug  bool   // if true, prints code to log instead of sending email
	TestTo string // target address for admin test emails
}

type DBConfig struct {
	Driver   string
	Host     string
	Port     string
	Name     string
	User     string
	Password string
	SSLMode  string
}

type RedisConfig struct {
	URL string
}

type JWTConfig struct {
	Secret string
	Expiry time.Duration
}

type AIConfig struct {
	Provider       string
	OpenAIKey      string
	OpenAIModel    string
	AnthropicKey   string
	AnthropicModel string
}

type CORSConfig struct {
	Origins string
}

type RateLimitConfig struct {
	Max    int
	Window int
}

type AdminConfig struct {
	Email    string
	Password string
}

type GoogleConfig struct {
	ClientID string
}

func Load() *Config {
	_ = godotenv.Load()

	jwtExpiry, _ := time.ParseDuration(getEnv("JWT_EXPIRY", "24h"))
	rlMax, _ := strconv.Atoi(getEnv("RATE_LIMIT_MAX", "60"))
	rlWindow, _ := strconv.Atoi(getEnv("RATE_LIMIT_WINDOW", "60"))

	return &Config{
		AppPort: getEnv("APP_PORT", "50050"),
		AppEnv:  getEnv("APP_ENV", "development"),
		DB: DBConfig{
			Driver:   getEnv("DB_DRIVER", "mysql"),
			Host:     getEnv("DB_HOST", "localhost"),
			Port:     getEnv("DB_PORT", "3306"),
			Name:     getEnv("DB_NAME", "autobot"),
			User:     getEnv("DB_USER", "root"),
			Password: getEnv("DB_PASSWORD", ""),
			SSLMode:  getEnv("DB_SSL_MODE", "disable"),
		},
		Redis: RedisConfig{
			URL: getEnv("REDIS_URL", ""),
		},
		JWT: JWTConfig{
			Secret: getEnv("JWT_SECRET", "change-me-in-production"),
			Expiry: jwtExpiry,
		},
		AI: AIConfig{
			Provider:       getEnv("AI_PROVIDER", "openai"),
			OpenAIKey:      getEnv("OPENAI_API_KEY", ""),
			OpenAIModel:    getEnv("OPENAI_MODEL", "gpt-4o-mini"),
			AnthropicKey:   getEnv("ANTHROPIC_API_KEY", ""),
			AnthropicModel: getEnv("ANTHROPIC_MODEL", "claude-sonnet-4-20250514"),
		},
		CORS: CORSConfig{
			Origins: getEnv("CORS_ORIGINS", "http://localhost:3001"),
		},
		RateLimit: RateLimitConfig{
			Max:    rlMax,
			Window: rlWindow,
		},
		Admin: AdminConfig{
			Email:    getEnv("ADMIN_EMAIL", "admin@autobot.co.id"),
			Password: getEnv("ADMIN_PASSWORD", "admin123"),
		},
		Midtrans: MidtransConfig{
			ServerKey:    getEnv("MIDTRANS_SERVER_KEY", ""),
			IsProduction: getEnv("MIDTRANS_ENV", "sandbox") == "production",
		},
		SMTP: SMTPConfig{
			Host:   getEnv("SMTP_HOST", "smtp.gmail.com"),
			Port:   getEnv("SMTP_PORT", "587"),
			User:   getEnv("SMTP_USER", ""),
			Pass:   getEnv("SMTP_PASS", ""),
			From:   getEnv("SMTP_FROM", "Autobot <noreply@autobot.co.id>"),
			Debug:  getEnv("SMTP_DEBUG", "true") == "true",
			TestTo: getEnv("SMTP_TEST_TO", ""),
		},
		Google: GoogleConfig{
			ClientID: getEnv("GOOGLE_CLIENT_ID", ""),
		},
	}
}

func getEnv(key, fallback string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return fallback
}
