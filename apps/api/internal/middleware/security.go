package middleware

import (
	"github.com/autobot-wijaya/autobot-api/internal/config"
	"github.com/gofiber/fiber/v2"
)

func SecurityHeaders(cfg *config.Config) fiber.Handler {
	isProd := cfg.AppEnv == "production"

	return func(c *fiber.Ctx) error {
		c.Set("X-Content-Type-Options", "nosniff")
		c.Set("X-Frame-Options", "DENY")
		c.Set("X-XSS-Protection", "1; mode=block")
		c.Set("Referrer-Policy", "strict-origin-when-cross-origin")
		c.Set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")

		if isProd {
			c.Set("Strict-Transport-Security", "max-age=31536000; includeSubDomains")
		}

		// CSP: allow self, fonts, and the declared API origin
		c.Set("Content-Security-Policy",
			"default-src 'self'; "+
				"script-src 'self' 'unsafe-inline'; "+
				"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; "+
				"font-src 'self' https://fonts.gstatic.com; "+
				"img-src 'self' data: https:; "+
				"connect-src 'self' wss: https:; "+
				"frame-ancestors 'none';",
		)

		return c.Next()
	}
}
