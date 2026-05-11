# autobot.co.id

CV Autobot Wijaya Solution — Bot & Automation Specialist

> "Tell Autobot what you need. Consider it done."

## Stack

- **Backend:** Go 1.22+ (Fiber v2) + WebSocket
- **Frontend:** Nuxt 3 (Vue 3, SSR, Tailwind CSS v4)
- **Database:** PostgreSQL 16 + Redis 7
- **Desktop:** Tauri 2 + Rust
- **AI:** OpenAI API / Anthropic API (pluggable)

## Quick Start

```bash
# Start dev dependencies (PostgreSQL + Redis)
make dev

# Run API
make dev-api

# Run frontend
make dev-web
```

## Project Structure

```
autobot/
├── apps/
│   ├── api/          # Go Fiber backend
│   ├── web/          # Nuxt 3 frontend
│   └── desktop/      # Tauri desktop app
├── packages/
│   ├── chat-components/
│   ├── bot-engine/
│   ├── ai-provider/
│   └── license/
├── docker/
└── scripts/
```

## Commands

```bash
make dev           # Start PostgreSQL + Redis
make dev-api       # Run Go API (hot reload)
make dev-web       # Run Nuxt 3 frontend
make migrate       # Run DB migrations
make seed          # Seed initial data
make test          # Run all tests
make build         # Build Docker images
make deploy        # Deploy to production
```
