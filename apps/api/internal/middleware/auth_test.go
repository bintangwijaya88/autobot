package middleware_test

import (
	"testing"
	"time"

	"github.com/autobot-wijaya/autobot-api/internal/config"
	"github.com/autobot-wijaya/autobot-api/internal/middleware"
	"github.com/golang-jwt/jwt/v5"
)

func testConfig(secret string, expiry time.Duration) *config.Config {
	return &config.Config{
		JWT: config.JWTConfig{
			Secret: secret,
			Expiry: expiry,
		},
	}
}

// ─── GenerateToken ────────────────────────────────────────────────────────────

func TestGenerateToken_ReturnsNonEmptyString(t *testing.T) {
	cfg := testConfig("test-secret", time.Hour)
	tok, err := middleware.GenerateToken(cfg, "user-1", "a@b.com", "user")
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if tok == "" {
		t.Fatal("expected non-empty token")
	}
}

func TestGenerateToken_ClaimsRoundTrip(t *testing.T) {
	cfg := testConfig("round-trip-secret", time.Hour)
	tok, err := middleware.GenerateToken(cfg, "uid-42", "test@example.com", "admin")
	if err != nil {
		t.Fatalf("GenerateToken error: %v", err)
	}

	// Parse and verify claims
	claims := &middleware.Claims{}
	parsed, err := jwt.ParseWithClaims(tok, claims, func(t *jwt.Token) (interface{}, error) {
		return []byte(cfg.JWT.Secret), nil
	})
	if err != nil || !parsed.Valid {
		t.Fatalf("token invalid: %v", err)
	}

	if claims.UserID != "uid-42" {
		t.Errorf("UserID = %q, want %q", claims.UserID, "uid-42")
	}
	if claims.Email != "test@example.com" {
		t.Errorf("Email = %q, want %q", claims.Email, "test@example.com")
	}
	if claims.Role != "admin" {
		t.Errorf("Role = %q, want %q", claims.Role, "admin")
	}
}

func TestGenerateToken_DefaultExpiry(t *testing.T) {
	// Expiry = 0 should fall back to 24h
	cfg := testConfig("secret", 0)
	before := time.Now()
	tok, err := middleware.GenerateToken(cfg, "u1", "x@y.com", "user")
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	claims := &middleware.Claims{}
	jwt.ParseWithClaims(tok, claims, func(t *jwt.Token) (interface{}, error) {
		return []byte(cfg.JWT.Secret), nil
	})

	expiry := claims.ExpiresAt.Time
	minExpected := before.Add(23 * time.Hour)
	if expiry.Before(minExpected) {
		t.Errorf("expiry %v is less than expected minimum %v", expiry, minExpected)
	}
}

func TestGenerateToken_ExpiredTokenIsInvalid(t *testing.T) {
	cfg := testConfig("secret", -time.Minute) // already expired
	tok, err := middleware.GenerateToken(cfg, "u1", "x@y.com", "user")
	if err != nil {
		t.Fatalf("unexpected error generating: %v", err)
	}

	claims := &middleware.Claims{}
	_, err = jwt.ParseWithClaims(tok, claims, func(t *jwt.Token) (interface{}, error) {
		return []byte(cfg.JWT.Secret), nil
	})
	if err == nil {
		t.Error("expected error parsing expired token, got nil")
	}
}

func TestGenerateToken_WrongSecretFails(t *testing.T) {
	cfg := testConfig("correct-secret", time.Hour)
	tok, _ := middleware.GenerateToken(cfg, "u1", "x@y.com", "user")

	claims := &middleware.Claims{}
	_, err := jwt.ParseWithClaims(tok, claims, func(t *jwt.Token) (interface{}, error) {
		return []byte("wrong-secret"), nil
	})
	if err == nil {
		t.Error("expected error with wrong secret, got nil")
	}
}

// ─── JWTAuth middleware (Fiber handler) ──────────────────────────────────────

func TestJWTAuth_MissingHeader(t *testing.T) {
	app := newFiberApp(t)
	resp, err := app.Test(newRequest("GET", "/protected", "", ""))
	if err != nil {
		t.Fatalf("request error: %v", err)
	}
	if resp.StatusCode != 401 {
		t.Errorf("status = %d, want 401", resp.StatusCode)
	}
}

func TestJWTAuth_InvalidFormat(t *testing.T) {
	app := newFiberApp(t)
	resp, _ := app.Test(newRequest("GET", "/protected", "Authorization", "InvalidTokenHere"))
	if resp.StatusCode != 401 {
		t.Errorf("status = %d, want 401", resp.StatusCode)
	}
}

func TestJWTAuth_WrongScheme(t *testing.T) {
	app := newFiberApp(t)
	resp, _ := app.Test(newRequest("GET", "/protected", "Authorization", "Basic dXNlcjpwYXNz"))
	if resp.StatusCode != 401 {
		t.Errorf("status = %d, want 401", resp.StatusCode)
	}
}

func TestJWTAuth_ValidToken(t *testing.T) {
	cfg := testConfig("fiber-secret", time.Hour)
	tok, _ := middleware.GenerateToken(cfg, "u1", "ok@test.com", "user")

	app := newFiberAppWithCfg(t, cfg)
	resp, _ := app.Test(newRequest("GET", "/protected", "Authorization", "Bearer "+tok))
	if resp.StatusCode != 200 {
		t.Errorf("status = %d, want 200", resp.StatusCode)
	}
}

func TestJWTAuth_TamperedToken(t *testing.T) {
	cfg := testConfig("fiber-secret", time.Hour)
	tok, _ := middleware.GenerateToken(cfg, "u1", "ok@test.com", "user")

	app := newFiberAppWithCfg(t, cfg)
	resp, _ := app.Test(newRequest("GET", "/protected", "Authorization", "Bearer "+tok+"tampered"))
	if resp.StatusCode != 401 {
		t.Errorf("status = %d, want 401", resp.StatusCode)
	}
}
