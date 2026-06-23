package handler_test

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"github.com/gofiber/fiber/v2"
)

// ─── Helpers ─────────────────────────────────────────────────────────────────

func jsonBody(v any) *bytes.Reader {
	b, _ := json.Marshal(v)
	return bytes.NewReader(b)
}

func postJSON(app *fiber.App, path string, body any) *http.Response {
	var req *http.Request
	if body != nil {
		req = httptest.NewRequest("POST", path, jsonBody(body))
		req.Header.Set("Content-Type", "application/json")
	} else {
		req = httptest.NewRequest("POST", path, strings.NewReader("not-json"))
		req.Header.Set("Content-Type", "application/json")
	}
	resp, _ := app.Test(req, -1)
	return resp
}

// ─── reEmail / reCode regex (same as handler package) ────────────────────────

// These tests validate the *same* regex rules enforced in the handler
// without needing a real DB or Fiber app wired with dependencies.

func TestEmailValidation(t *testing.T) {
	cases := []struct {
		email string
		valid bool
	}{
		{"user@example.com", true},
		{"user.name+tag@sub.domain.co.id", true},
		{"USER@EXAMPLE.COM", true},
		{"", false},
		{"notanemail", false},
		{"@nodomain.com", false},
		{"noat.com", false},
		{"double@@domain.com", false},
		{"space here@domain.com", false},
	}

	// Build a tiny Fiber app that mimics handler email validation
	app := fiber.New(fiber.Config{DisableStartupMessage: true})
	app.Post("/check-email", func(c *fiber.Ctx) error {
		var body struct {
			Email string `json:"email"`
		}
		if err := c.BodyParser(&body); err != nil {
			return c.Status(400).JSON(fiber.Map{"error": "bad body"})
		}
		// same regex as handler package
		if !reEmailPattern.MatchString(body.Email) {
			return c.Status(400).JSON(fiber.Map{"error": "invalid email"})
		}
		return c.JSON(fiber.Map{"ok": true})
	})

	for _, tc := range cases {
		resp := postJSON(app, "/check-email", map[string]string{"email": tc.email})
		if tc.valid && resp.StatusCode != 200 {
			t.Errorf("email %q: expected 200, got %d", tc.email, resp.StatusCode)
		}
		if !tc.valid && resp.StatusCode == 200 {
			t.Errorf("email %q: expected non-200, got 200", tc.email)
		}
	}
}

func TestOTPCodeValidation(t *testing.T) {
	cases := []struct {
		code  string
		valid bool
	}{
		{"123456", true},
		{"000000", true},
		{"999999", true},
		{"", false},
		{"12345", false},   // 5 digits
		{"1234567", false}, // 7 digits
		{"12345a", false},  // has letter
		{"      ", false},  // spaces
	}

	app := fiber.New(fiber.Config{DisableStartupMessage: true})
	app.Post("/check-code", func(c *fiber.Ctx) error {
		var body struct {
			Code string `json:"code"`
		}
		if err := c.BodyParser(&body); err != nil {
			return c.Status(400).JSON(fiber.Map{"error": "bad body"})
		}
		if !reCodePattern.MatchString(body.Code) {
			return c.Status(400).JSON(fiber.Map{"error": "invalid code"})
		}
		return c.JSON(fiber.Map{"ok": true})
	})

	for _, tc := range cases {
		resp := postJSON(app, "/check-code", map[string]string{"code": tc.code})
		if tc.valid && resp.StatusCode != 200 {
			t.Errorf("code %q: expected 200, got %d", tc.code, resp.StatusCode)
		}
		if !tc.valid && resp.StatusCode == 200 {
			t.Errorf("code %q: expected non-200, got 200", tc.code)
		}
	}
}

func TestPasswordMinLength(t *testing.T) {
	cases := []struct {
		pw    string
		valid bool
	}{
		{"abc123", true},   // exactly 6
		{"abcdefg", true},  // > 6
		{"abc12", false},   // 5 chars
		{"", false},
		{"12345", false},
	}

	app := fiber.New(fiber.Config{DisableStartupMessage: true})
	app.Post("/check-pw", func(c *fiber.Ctx) error {
		var body struct {
			Password string `json:"password"`
		}
		if err := c.BodyParser(&body); err != nil {
			return c.Status(400).JSON(fiber.Map{"error": "bad body"})
		}
		if len(body.Password) < 6 {
			return c.Status(400).JSON(fiber.Map{"error": "password minimal 6 karakter"})
		}
		return c.JSON(fiber.Map{"ok": true})
	})

	for _, tc := range cases {
		resp := postJSON(app, "/check-pw", map[string]string{"password": tc.pw})
		if tc.valid && resp.StatusCode != 200 {
			t.Errorf("pw %q: expected 200, got %d", tc.pw, resp.StatusCode)
		}
		if !tc.valid && resp.StatusCode == 200 {
			t.Errorf("pw %q: expected non-200, got 200", tc.pw)
		}
	}
}

func TestMalformedBodyReturns400(t *testing.T) {
	app := fiber.New(fiber.Config{DisableStartupMessage: true})
	app.Post("/parse", func(c *fiber.Ctx) error {
		var body struct{ Email string }
		if err := c.BodyParser(&body); err != nil {
			return c.Status(400).JSON(fiber.Map{"error": "invalid body"})
		}
		return c.JSON(fiber.Map{"ok": true})
	})

	req := httptest.NewRequest("POST", "/parse", strings.NewReader("{invalid-json"))
	req.Header.Set("Content-Type", "application/json")
	resp, _ := app.Test(req, -1)
	if resp.StatusCode != 400 {
		t.Errorf("expected 400 for malformed JSON, got %d", resp.StatusCode)
	}
}
