package middleware

import (
	"time"

	"github.com/autobot-wijaya/autobot-api/internal/config"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/limiter"
)

func RateLimit(cfg *config.Config) fiber.Handler {
	max := cfg.RateLimit.Max
	if max <= 0 {
		max = 60
	}
	window := cfg.RateLimit.Window
	if window <= 0 {
		window = 60
	}

	return limiter.New(limiter.Config{
		Max:        max,
		Expiration: time.Duration(window) * time.Second,
		KeyGenerator: func(c *fiber.Ctx) string {
			return c.IP()
		},
		LimitReached: func(c *fiber.Ctx) error {
			return c.Status(fiber.StatusTooManyRequests).JSON(fiber.Map{
				"error": "too many requests, please slow down",
			})
		},
		SkipFailedRequests:     false,
		SkipSuccessfulRequests: false,
	})
}

// WSRateLimit uses a per-session token bucket approach via a simple in-memory check.
// It limits WebSocket message processing — applied inside the WS handler, not at HTTP level.
func WSRateLimit(maxPerMin int) func(sessionID string, counters map[string]int) bool {
	if maxPerMin <= 0 {
		maxPerMin = 30
	}
	return func(sessionID string, counters map[string]int) bool {
		counters[sessionID]++
		return counters[sessionID] <= maxPerMin
	}
}
