#!/bin/bash
# deploy.sh — build lokal, upload ke VPS, restart service
# Usage: ./deploy.sh [api|web|all]

set -e

TARGET=${1:-all}
VPS=autobot@autobot.co.id
DEST=/opt/autobot

build_api() {
  echo "[api] Building..."
  cd apps/api
  GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -ldflags="-s -w" -o server ./cmd/server
  cd ../..
}

build_web() {
  echo "[web] Building..."
  cd apps/web && npm ci && npm run build && cd ../..
}

upload_api() {
  echo "[upload] API..."
  ssh $VPS "mkdir -p $DEST/bin"
  rsync -az apps/api/server        $VPS:$DEST/bin/server
  rsync -az apps/api/migrations/   $VPS:$DEST/bin/migrations/
  ssh $VPS "chmod +x $DEST/bin/server && sudo systemctl restart autobot-api"
}

upload_web() {
  echo "[upload] Web..."
  ssh $VPS "mkdir -p $DEST/web"
  rsync -az --delete apps/web/.output/ $VPS:$DEST/web/.output/
  ssh $VPS "sudo systemctl restart autobot-web"
}

case "$TARGET" in
  api)  build_api;  upload_api  ;;
  web)  build_web;  upload_web  ;;
  all)
    build_api && build_web
    upload_api && upload_web
    ;;
  *)
    echo "Usage: ./deploy.sh [api|web|all]"
    exit 1
    ;;
esac

echo "Done!"
