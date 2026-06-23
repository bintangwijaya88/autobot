package middleware_test

import (
	"net/http"

	"github.com/autobot-wijaya/autobot-api/internal/config"
	"github.com/autobot-wijaya/autobot-api/internal/middleware"
	"github.com/gofiber/fiber/v2"
	"testing"
)

// newFiberApp returns a Fiber app with JWTAuth using default test config.
func newFiberApp(t *testing.T) *fiber.App {
	t.Helper()
	return newFiberAppWithCfg(t, testConfig("fiber-secret", 0))
}

// newFiberAppWithCfg returns a Fiber app with JWTAuth using the given config.
func newFiberAppWithCfg(t *testing.T, cfg *config.Config) *fiber.App {
	t.Helper()
	app := fiber.New(fiber.Config{DisableStartupMessage: true})
	app.Get("/protected", middleware.JWTAuth(cfg), func(c *fiber.Ctx) error {
		return c.SendStatus(fiber.StatusOK)
	})
	return app
}

// newRequest builds a simple HTTP request, optionally setting one header.
func newRequest(method, path, headerKey, headerVal string) *http.Request {
	req, _ := http.NewRequest(method, path, nil)
	if headerKey != "" {
		req.Header.Set(headerKey, headerVal)
	}
	return req
}
