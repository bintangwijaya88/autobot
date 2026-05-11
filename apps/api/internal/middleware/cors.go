package middleware

import (
	"strings"

	"github.com/autobot-wijaya/autobot-api/internal/config"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func CORS(cfg *config.Config) fiber.Handler {
	origins := cfg.CORS.Origins
	if origins == "" {
		origins = "*"
	}
	return cors.New(cors.Config{
		AllowOrigins:     origins,
		AllowMethods:     strings.Join([]string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"}, ","),
		AllowHeaders:     "Origin, Content-Type, Accept, Authorization",
		AllowCredentials: !strings.Contains(origins, "*"),
		MaxAge:           86400,
	})
}
