# ==============================
# API — Build
# ==============================
FROM golang:1.25-alpine AS api-builder
WORKDIR /app
COPY apps/api/go.mod apps/api/go.sum ./
RUN go mod download
COPY apps/api/ .
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o /server ./cmd/server

# ==============================
# API — Runtime
# ==============================
FROM alpine:3.21 AS api
RUN apk add --no-cache ca-certificates tzdata
COPY --from=api-builder /server /server
COPY apps/api/migrations /migrations
EXPOSE 50080
CMD ["/server"]

# ==============================
# Web — Build (Node via Mise)
# ==============================
FROM debian:bookworm-slim AS web-builder
RUN apt-get update && apt-get install -y --no-install-recommends curl ca-certificates git \
    && rm -rf /var/lib/apt/lists/*
RUN curl https://mise.run | sh && /root/.local/bin/mise use --global node@20
ENV PATH="/root/.local/share/mise/shims:/root/.local/bin:$PATH"
WORKDIR /app
COPY apps/web/package*.json ./
RUN npm ci
COPY apps/web/ .
RUN npm run build

# ==============================
# Web — Runtime (Node via Mise)
# ==============================
FROM debian:bookworm-slim AS web
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates \
    && rm -rf /var/lib/apt/lists/*
COPY --from=web-builder /root/.local /root/.local
COPY --from=web-builder /root/.config/mise /root/.config/mise
ENV PATH="/root/.local/share/mise/shims:/root/.local/bin:$PATH"
WORKDIR /app
COPY --from=web-builder /app/.output .output
COPY --from=web-builder /app/package.json .
EXPOSE 50081
ENV HOST=0.0.0.0
ENV PORT=50081
CMD ["node", ".output/server/index.mjs"]
