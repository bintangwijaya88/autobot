param(
  [string]$OutputDir = "dist/vps"
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$staging = Join-Path $root $OutputDir
$apiStaging = Join-Path $staging "apps/api"
$webStaging = Join-Path $staging "apps/web"

function Ensure-Directory {
  param([string]$Path)
  New-Item -ItemType Directory -Force -Path $Path | Out-Null
}

function Copy-Path {
  param(
    [string]$Source,
    [string]$Destination
  )

  Copy-Item -LiteralPath $Source -Destination $Destination -Recurse -Force
}

if (Test-Path -LiteralPath $staging) {
  Remove-Item -LiteralPath $staging -Recurse -Force
}

Ensure-Directory $apiStaging
Ensure-Directory $webStaging

Write-Host "Building API binary for Linux amd64..."
Push-Location (Join-Path $root "apps/api")
$env:GOOS = "linux"
$env:GOARCH = "amd64"
$env:CGO_ENABLED = "0"
go build -trimpath -ldflags="-s -w" -o (Join-Path $apiStaging "server") ./cmd/server
Pop-Location

Write-Host "Copying API migrations..."
Copy-Path (Join-Path $root "apps/api/migrations") (Join-Path $apiStaging "migrations")

Write-Host "Building web output..."
Push-Location (Join-Path $root "apps/web")
if (-not $env:NUXT_PUBLIC_API_BASE) {
  $env:NUXT_PUBLIC_API_BASE = "https://api.autobot.co.id"
}
if (-not $env:NUXT_PUBLIC_WS_URL) {
  $env:NUXT_PUBLIC_WS_URL = "wss://api.autobot.co.id/ws"
}
$env:NUXT_IGNORE_LOCK = "1"
if (Test-Path (Join-Path (Get-Location) "node_modules")) {
  npm run build
} else {
  npm ci
  npm run build
}
Copy-Path (Join-Path (Get-Location) ".output") (Join-Path $webStaging ".output")
Pop-Location

Write-Host "Copying deploy files..."
Copy-Path (Join-Path $root "Dockerfile.cp") (Join-Path $staging "Dockerfile.cp")
Copy-Path (Join-Path $root "docker-compose.cp.yml") (Join-Path $staging "docker-compose.cp.yml")
Copy-Path (Join-Path $root ".env.example") (Join-Path $staging ".env.example")
Copy-Path (Join-Path $root "scripts/setup-vps.sh") (Join-Path $staging "setup-vps.sh")
Copy-Path (Join-Path $root "scripts/backup-db.sh") (Join-Path $staging "backup-db.sh")

Write-Host ""
Write-Host "VPS package is ready at: $staging"
Write-Host "Upload that folder to /opt/autobot on the VPS, then run docker compose -f docker-compose.cp.yml up -d --build"
