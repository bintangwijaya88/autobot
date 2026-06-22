#!/bin/bash
# ============================================================
# deploy.sh — build + transfer + run ke VPS
# Usage: ./deploy.sh [api|web|wasigap|all]
# ============================================================

set -e

TARGET=${1:-all}
VPS_USER="autobot"
VPS_HOST="autobot.co.id"
VPS_DIR="/var/www/autobot/autobot.co.id"

echo "==> Target: $TARGET"

# ── 1. Build API (Go binary linux/amd64) ──────────────────
build_api() {
  echo "[api] Building Go binary..."
  cd apps/api
  GOOS=linux GOARCH=amd64 go build -o server ./cmd/server
  cd ../..
  echo "[api] Done: apps/api/server"
}

# ── 2. Build Web (Nuxt) ───────────────────────────────────
build_web() {
  echo "[web] Building Nuxt..."
  cd apps/web
  npm ci
  npm run build
  cd ../..
  echo "[web] Done: apps/web/.output"
}

# ── 3. Build WaSigap (Nuxt) ───────────────────────────────
build_wasigap() {
  echo "[wasigap] Building Nuxt..."
  cd apps/wasigap
  npm ci
  npm run build
  cd ../..
  echo "[wasigap] Done: apps/wasigap/.output"
}

# ── 4. Transfer ke VPS ────────────────────────────────────
transfer() {
  echo "[transfer] Syncing files to VPS..."
  rsync -avz --delete \
    --exclude='.git' \
    --exclude='node_modules' \
    --exclude='apps/api/*.go' \
    --exclude='apps/web/node_modules' \
    --exclude='apps/wasigap/node_modules' \
    ./ ${VPS_USER}@${VPS_HOST}:${VPS_DIR}/
  echo "[transfer] Done"
}

# ── 5. Build image + restart di VPS ───────────────────────
deploy_vps() {
  echo "[vps] Building images and restarting containers..."
  ssh ${VPS_USER}@${VPS_HOST} bash << EOF
    set -e
    cd ${VPS_DIR}

    if [ "$TARGET" = "api" ] || [ "$TARGET" = "all" ]; then
      docker build --target api -f Dockerfile.cp -t autobot-api-cp:latest .
      docker compose -f docker-compose.cp.yml up -d --no-deps api
      echo "[vps] API restarted"
    fi

    if [ "$TARGET" = "web" ] || [ "$TARGET" = "all" ]; then
      docker build --target web -f Dockerfile.cp -t autobot-web-cp:latest .
      docker compose -f docker-compose.cp.yml up -d --no-deps web
      echo "[vps] Web restarted"
    fi

    if [ "$TARGET" = "wasigap" ] || [ "$TARGET" = "all" ]; then
      docker build --target wasigap -f Dockerfile.cp -t autobot-wasigap-cp:latest .
      docker compose -f docker-compose.cp.yml up -d --no-deps wasigap
      echo "[vps] WaSigap restarted"
    fi

    echo "[vps] Status:"
    docker compose -f docker-compose.cp.yml ps
EOF
}

# ── Run ───────────────────────────────────────────────────
case "$TARGET" in
  api)
    build_api
    transfer
    deploy_vps
    ;;
  web)
    build_web
    transfer
    deploy_vps
    ;;
  wasigap)
    build_wasigap
    transfer
    deploy_vps
    ;;
  all)
    build_api
    build_web
    build_wasigap
    transfer
    deploy_vps
    ;;
  *)
    echo "Usage: ./deploy.sh [api|web|wasigap|all]"
    exit 1
    ;;
esac

echo ""
echo "✅ Deploy selesai!"
