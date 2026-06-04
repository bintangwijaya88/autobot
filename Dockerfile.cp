# ==============================
# API - pre-built binary (Linux amd64)
# ==============================
FROM alpine:3.21 AS api
RUN apk add --no-cache ca-certificates tzdata
COPY apps/api/server /server
COPY apps/api/migrations /migrations
EXPOSE 50050
CMD ["/server"]

# ==============================
# Web - pre-built Nuxt output
# ==============================
FROM node:20-alpine AS web
WORKDIR /app
COPY apps/web/.output .output
EXPOSE 50081
ENV HOST=0.0.0.0
ENV PORT=50081
CMD ["node", ".output/server/index.mjs"]
