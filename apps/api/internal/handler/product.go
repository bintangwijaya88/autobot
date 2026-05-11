package handler

import (
	"context"
	"encoding/json"
	"time"

	"github.com/autobot-wijaya/autobot-api/internal/repository"
	"github.com/gofiber/fiber/v2"
	"github.com/redis/go-redis/v9"
	"go.uber.org/zap"
)

const (
	cacheProducts = "cache:products:"
	cachePartners = "cache:partners"
	cachePage     = "cache:page:"
	cacheTTL      = 5 * time.Minute
	pagesTTL      = 1 * time.Hour
)

type ProductHandler struct {
	productRepo *repository.ProductRepository
	redis       *redis.Client
	log         *zap.Logger
}

func NewProductHandler(productRepo *repository.ProductRepository, redisClient *redis.Client, log *zap.Logger) *ProductHandler {
	return &ProductHandler{productRepo: productRepo, redis: redisClient, log: log}
}

func (h *ProductHandler) ListProducts(c *fiber.Ctx) error {
	category := c.Query("category", "")
	cacheKey := cacheProducts + category

	if h.redis != nil {
		if cached, err := h.redis.Get(context.Background(), cacheKey).Bytes(); err == nil {
			c.Set("X-Cache", "HIT")
			c.Set("Content-Type", "application/json")
			return c.Send(cached)
		}
	}

	products, err := h.productRepo.List(c.Context(), category)
	if err != nil {
		h.log.Error("list products error", zap.Error(err))
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "failed to fetch products"})
	}

	result := fiber.Map{"data": products}
	if h.redis != nil {
		if b, err := json.Marshal(result); err == nil {
			h.redis.Set(context.Background(), cacheKey, b, cacheTTL)
		}
	}

	c.Set("X-Cache", "MISS")
	return c.JSON(result)
}

func (h *ProductHandler) GetProduct(c *fiber.Ctx) error {
	slug := c.Params("slug")
	cacheKey := cacheProducts + "slug:" + slug

	if h.redis != nil {
		if cached, err := h.redis.Get(context.Background(), cacheKey).Bytes(); err == nil {
			c.Set("X-Cache", "HIT")
			c.Set("Content-Type", "application/json")
			return c.Send(cached)
		}
	}

	product, err := h.productRepo.GetBySlug(c.Context(), slug)
	if err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "product not found"})
	}

	if h.redis != nil {
		if b, err := json.Marshal(product); err == nil {
			h.redis.Set(context.Background(), cacheKey, b, cacheTTL)
		}
	}

	c.Set("X-Cache", "MISS")
	return c.JSON(product)
}

func (h *ProductHandler) ListPartners(c *fiber.Ctx) error {
	featured := c.Query("featured") == "true"
	cacheKey := cachePartners
	if featured {
		cacheKey += ":featured"
	}

	if h.redis != nil {
		if cached, err := h.redis.Get(context.Background(), cacheKey).Bytes(); err == nil {
			c.Set("X-Cache", "HIT")
			c.Set("Content-Type", "application/json")
			return c.Send(cached)
		}
	}

	partners, err := h.productRepo.ListPartners(c.Context(), featured)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "failed to fetch partners"})
	}

	result := fiber.Map{"data": partners}
	if h.redis != nil {
		if b, err := json.Marshal(result); err == nil {
			h.redis.Set(context.Background(), cacheKey, b, cacheTTL)
		}
	}

	c.Set("X-Cache", "MISS")
	return c.JSON(result)
}

func (h *ProductHandler) GetPage(c *fiber.Ctx) error {
	slug := c.Params("slug")
	cacheKey := cachePage + slug

	if h.redis != nil {
		if cached, err := h.redis.Get(context.Background(), cacheKey).Bytes(); err == nil {
			c.Set("X-Cache", "HIT")
			c.Set("Content-Type", "application/json")
			return c.Send(cached)
		}
	}

	page, err := h.productRepo.GetPage(c.Context(), slug)
	if err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "page not found"})
	}

	if h.redis != nil {
		if b, err := json.Marshal(page); err == nil {
			h.redis.Set(context.Background(), cacheKey, b, pagesTTL)
		}
	}

	c.Set("X-Cache", "MISS")
	return c.JSON(page)
}

// InvalidateProductCache removes cached product data — call after admin updates.
func (h *ProductHandler) InvalidateProductCache(ctx context.Context) {
	if h.redis == nil {
		return
	}
	keys := []string{cachePartners, cachePartners + ":featured"}
	for _, key := range keys {
		h.redis.Del(ctx, key)
	}
	// Scan and delete product/page keys
	iter := h.redis.Scan(ctx, 0, cacheProducts+"*", 100).Iterator()
	for iter.Next(ctx) {
		h.redis.Del(ctx, iter.Val())
	}
	iter = h.redis.Scan(ctx, 0, cachePage+"*", 100).Iterator()
	for iter.Next(ctx) {
		h.redis.Del(ctx, iter.Val())
	}
}
