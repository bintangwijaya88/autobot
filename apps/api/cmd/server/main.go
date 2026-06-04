package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/autobot-wijaya/autobot-api/internal/ai"
	"github.com/autobot-wijaya/autobot-api/internal/bot"
	"github.com/autobot-wijaya/autobot-api/internal/calendar"
	"github.com/autobot-wijaya/autobot-api/internal/config"
	"github.com/autobot-wijaya/autobot-api/internal/database"
	"github.com/autobot-wijaya/autobot-api/internal/email"
	"github.com/autobot-wijaya/autobot-api/internal/handler"
	_ "github.com/autobot-wijaya/autobot-api/internal/metrics"
	"github.com/autobot-wijaya/autobot-api/internal/middleware"
	"github.com/autobot-wijaya/autobot-api/internal/payment"
	"github.com/autobot-wijaya/autobot-api/internal/repository"
	"github.com/autobot-wijaya/autobot-api/internal/ws"
	"github.com/gofiber/fiber/v2"
	fiberlogger "github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
	fws "github.com/gofiber/websocket/v2"
	"github.com/prometheus/client_golang/prometheus/promhttp"
	"github.com/valyala/fasthttp/fasthttpadaptor"
	"go.uber.org/zap"
)

func main() {
	if len(os.Args) > 1 {
		switch os.Args[1] {
		case "migrate":
			cfg := config.Load()
			if err := runMigrations(cfg); err != nil {
				log.Fatal("migration failed:", err)
			}
			return
		case "seed":
			cfg := config.Load()
			db, err := database.NewMySQLDB(cfg)
			if err != nil {
				log.Fatal("seed: failed to connect DB:", err)
			}
			defer db.Close()
			if err := seedData(context.Background(), db, cfg); err != nil {
				log.Fatal("seed failed:", err)
			}
			log.Println("seed complete")
			return
		}
	}

	zapLogger, err := zap.NewProduction()
	if err != nil {
		log.Fatal("failed to init logger:", err)
	}
	defer zapLogger.Sync()

	cfg := config.Load()

	db, err := database.NewMySQLDB(cfg)
	if err != nil {
		zapLogger.Fatal("failed to connect mysql", zap.Error(err))
	}
	defer db.Close()

	// Redis is optional
	redisClient, err := database.NewRedisClient(cfg)
	if err != nil {
		zapLogger.Warn("redis unavailable, continuing without cache", zap.Error(err))
	}
	if redisClient != nil {
		defer redisClient.Close()
	}

	chatRepo := repository.NewChatRepository(db)
	productRepo := repository.NewProductRepository(db)
	userRepo := repository.NewUserRepo(db)

	var aiProvider ai.AIProvider
	switch cfg.AI.Provider {
	case "anthropic":
		aiProvider = ai.NewAnthropicProvider(cfg)
	case "groq":
		aiProvider = ai.NewGroqProvider(cfg)
	default:
		aiProvider = ai.NewOpenAIProvider(cfg)
	}

	mailer := email.New(cfg.SMTP.Host, cfg.SMTP.Port, cfg.SMTP.User, cfg.SMTP.Pass, cfg.SMTP.From, cfg.SMTP.Debug)
	mt := payment.New(cfg.Midtrans.ServerKey, cfg.Midtrans.IsProduction)
	googleCalendar := calendar.NewGoogleCalendar(cfg)

	engine := bot.NewEngine(aiProvider, productRepo)
	hub := ws.NewHub(zapLogger)
	go hub.Run()

	chatHandler := handler.NewChatHandler(hub, chatRepo, productRepo, userRepo, engine, mailer, mt, googleCalendar, zapLogger)
	productHandler := handler.NewProductHandler(productRepo, redisClient, zapLogger)
	adminHandler := handler.NewAdminHandler(cfg, chatRepo, productRepo, userRepo, mailer, redisClient, zapLogger)
	userHandler := handler.NewUserHandler(userRepo, mailer, cfg, zapLogger)
	portalHandler := handler.NewPortalHandler(chatRepo, productRepo, userRepo, zapLogger)

	xenditClient := payment.NewXendit(cfg.Xendit.SecretKey, cfg.Xendit.IsProduction)
	meetingHandler := handler.NewMeetingHandler(db, xenditClient, cfg, userRepo, zapLogger)
	blogHandler := handler.NewBlogHandler(db, zapLogger)
	integrationHandler := handler.NewIntegrationHandler(db, zapLogger)

	app := fiber.New(fiber.Config{
		AppName:      "Autobot API v1.0",
		ReadTimeout:  30 * time.Second,
		WriteTimeout: 30 * time.Second,
		ErrorHandler: func(c *fiber.Ctx, err error) error {
			code := fiber.StatusInternalServerError
			if e, ok := err.(*fiber.Error); ok {
				code = e.Code
			}
			return c.Status(code).JSON(fiber.Map{"error": err.Error()})
		},
	})

	app.Use(recover.New())
	app.Use(fiberlogger.New())
	app.Use(middleware.CORS(cfg))
	app.Use(middleware.SecurityHeaders(cfg))
	app.Use(middleware.RateLimit(cfg))

	app.Get("/api/health", adminHandler.Health)
	app.Get("/api/metrics", func(c *fiber.Ctx) error {
		token := cfg.MetricsToken
		if token != "" && c.Get("X-Metrics-Token") != token {
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"error": "unauthorized"})
		}
		if token == "" {
			return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "metrics not enabled"})
		}
		fasthttpadaptor.NewFastHTTPHandler(promhttp.Handler())(c.Context())
		return nil
	})

	app.Use("/ws", func(c *fiber.Ctx) error {
		if fws.IsWebSocketUpgrade(c) {
			c.Locals("allowed", true)
			return c.Next()
		}
		return fiber.ErrUpgradeRequired
	})
	app.Get("/ws", fws.New(chatHandler.HandleWebSocket))

	api := app.Group("/api")
	api.Post("/chat/session", chatHandler.CreateSession)
	api.Get("/chat/sessions/:id/messages", chatHandler.GetHistory)
	api.Get("/products", productHandler.ListProducts)
	api.Get("/products/:slug", productHandler.GetProduct)
	api.Get("/partners", productHandler.ListPartners)
	api.Get("/pages/:slug", productHandler.GetPage)
	api.Post("/auth/request", userHandler.RequestOTP)
	api.Post("/auth/verify", userHandler.VerifyOTP)
	api.Post("/auth/google", userHandler.GoogleSignIn)
	api.Post("/auth/register", userHandler.Register)
	api.Post("/auth/login", userHandler.Login)

	// Blog (public)
	api.Get("/blog", blogHandler.List)
	api.Get("/blog/:slug", blogHandler.GetBySlug)

	// Integrations (public)
	api.Get("/integrations", integrationHandler.List)

	// Meeting booking (public)
	api.Post("/meetings", meetingHandler.Create)
	api.Post("/meetings/webhook", meetingHandler.Webhook)
	api.Get("/meetings/:id/status", meetingHandler.GetStatus)

	// Customer portal routes — protected by access key
	portal := api.Group("/portal", handler.PortalAuth(userRepo))
	portal.Get("/me", portalHandler.Me)
	portal.Get("/stats", portalHandler.Stats)
	portal.Get("/sessions", portalHandler.ListSessions)
	portal.Get("/sessions/:id", portalHandler.GetSession)
	portal.Get("/contacts", portalHandler.ListContacts)

	admin := api.Group("/admin")
	admin.Post("/login", adminHandler.Login)

	adminAuth := admin.Group("", middleware.JWTAuth(cfg))
	adminAuth.Get("/dashboard", adminHandler.GetDashboard)
	adminAuth.Get("/analytics", adminHandler.GetAnalytics)
	adminAuth.Get("/sessions", adminHandler.ListSessions)
	adminAuth.Get("/sessions/:id", adminHandler.GetSession)

	adminAuth.Get("/products", adminHandler.ListProducts)
	adminAuth.Post("/products", adminHandler.CreateProduct)
	adminAuth.Put("/products/:id", adminHandler.UpdateProduct)
	adminAuth.Delete("/products/:id", adminHandler.DeleteProduct)

	adminAuth.Get("/users", adminHandler.ListUsers)
	adminAuth.Get("/users/:id", adminHandler.GetUser)
	adminAuth.Put("/users/:id/status", adminHandler.UpdateUserStatus)

	adminAuth.Get("/contacts", adminHandler.ListContacts)
	adminAuth.Put("/contacts/:id", adminHandler.UpdateContact)

	adminAuth.Get("/pages", adminHandler.ListPages)
	adminAuth.Post("/pages", adminHandler.CreatePage)
	adminAuth.Put("/pages/:slug", adminHandler.UpdatePage)
	adminAuth.Delete("/pages/:slug", adminHandler.DeletePage)

	adminAuth.Get("/knowledge", adminHandler.ListKnowledge)
	adminAuth.Post("/knowledge", adminHandler.CreateKnowledge)
	adminAuth.Delete("/knowledge/:id", adminHandler.DeleteKnowledge)

	// Blog admin
	adminAuth.Get("/blog", blogHandler.AdminList)
	adminAuth.Get("/blog/:id", blogHandler.AdminGet)
	adminAuth.Post("/blog", blogHandler.AdminCreate)
	adminAuth.Put("/blog/:id", blogHandler.AdminUpdate)
	adminAuth.Delete("/blog/:id", blogHandler.AdminDelete)

	// Integrations admin
	adminAuth.Get("/integrations", integrationHandler.AdminList)
	adminAuth.Get("/integrations/:id", integrationHandler.AdminGet)
	adminAuth.Post("/integrations", integrationHandler.AdminCreate)
	adminAuth.Put("/integrations/:id", integrationHandler.AdminUpdate)
	adminAuth.Delete("/integrations/:id", integrationHandler.AdminDelete)

	adminAuth.Get("/meetings", meetingHandler.AdminList)
	adminAuth.Get("/meetings/stats", meetingHandler.AdminStats)
	adminAuth.Put("/meetings/:id", meetingHandler.AdminUpdate)
	adminAuth.Post("/meetings/:id/resend-invoice", meetingHandler.AdminResendInvoice)

	adminAuth.Get("/email/templates", adminHandler.ListEmailTemplates)
	adminAuth.Post("/email/preview/:id", adminHandler.PreviewEmailTemplate)
	adminAuth.Post("/email/test", adminHandler.SendTestEmail)

	addr := fmt.Sprintf(":%s", cfg.AppPort)
	zapLogger.Info("starting server", zap.String("addr", addr), zap.String("env", cfg.AppEnv))

	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)

	go func() {
		if err := app.Listen(addr); err != nil {
			zapLogger.Error("server error", zap.Error(err))
		}
	}()

	<-quit
	zapLogger.Info("shutting down gracefully...")
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	app.ShutdownWithContext(ctx)
}
