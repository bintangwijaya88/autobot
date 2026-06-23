#!/bin/bash
# ============================================================
# deploy.sh — build image lokal, push ke GHCR, VPS pull & run
# Usage: ./deploy.sh [api|web|wasigap|all]
# ============================================================

set -e

TARGET=${1:-all}
REGISTRY="ghcr.io/bintangwijaya88/autobot"
VPS_USER="autobot"
VPS_HOST="autobot.co.id"
VPS_DIR="/opt/autobot"

echo "==> Target: $TARGET"

# ── Build & push image ke GHCR ────────────────────────────
push_image() {
  local name=$1
  local dockerfile=$2
  echo "[build] $name..."
  docker build -t ${REGISTRY}/${name}:latest -f ${dockerfile} .
  docker push ${REGISTRY}/${name}:latest
  echo "[push] ${REGISTRY}/${name}:latest done"
}

# ── VPS: pull image terbaru dan restart container ─────────
restart_vps() {
  local services="$1"
  echo "[vps] Pulling & restarting: ${services}..."
  ssh ${VPS_USER}@${VPS_HOST} bash << EOF
    set -e
    cd ${VPS_DIR}
    docker compose -f docker-compose.deploy.yml pull ${services}
    docker compose -f docker-compose.deploy.yml up -d --no-deps --no-build ${services}
    docker image prune -f
    echo "[vps] Status:"
    docker compose -f docker-compose.deploy.yml ps
EOF
}

# ── Run ───────────────────────────────────────────────────
case "$TARGET" in
  api)
    push_image api docker/Dockerfile.api
    restart_vps api
    ;;
  web)
    push_image web docker/Dockerfile.web
    restart_vps web
    ;;
  wasigap)
    push_image wasigap docker/Dockerfile.wasigap
    restart_vps wasigap
    ;;
  all)
    push_image api docker/Dockerfile.api
    push_image web docker/Dockerfile.web
    push_image wasigap docker/Dockerfile.wasigap
    restart_vps "api web wasigap"
    ;;
  *)
    echo "Usage: ./deploy.sh [api|web|wasigap|all]"
    exit 1
    ;;
esac

echo ""
echo "Deploy selesai!"
