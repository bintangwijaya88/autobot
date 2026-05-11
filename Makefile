.PHONY: dev dev-api dev-web build deploy migrate migrate-down seed test test-e2e logs clean

# Development
dev:
	docker compose -f docker/docker-compose.dev.yml up -d
	@echo "PostgreSQL: localhost:5432, Redis: localhost:6379"

dev-api:
	cd apps/api && go run ./cmd/server

dev-web:
	cd apps/web && npm run dev

# Build
build:
	docker compose -f docker/docker-compose.yml build

# Deploy
deploy:
	docker compose pull api web
	docker compose up -d --no-deps api web

# Database
migrate:
	cd apps/api && go run ./cmd/server migrate up

migrate-down:
	cd apps/api && go run ./cmd/server migrate down 1

seed:
	cd apps/api && go run ./cmd/server seed

# Test
test:
	cd apps/api && go test ./... -v -cover
	cd apps/web && npm run test:unit

test-e2e:
	cd apps/web && npx playwright test

# Misc
logs:
	docker compose logs -f --tail=100

clean:
	docker compose down -v
	docker image prune -f

# Install dependencies
install:
	cd apps/api && go mod download
	cd apps/web && npm install
