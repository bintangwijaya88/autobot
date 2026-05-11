#!/bin/bash
# VPS initial setup script for autobot.co.id
# Run as root: curl -fsSL https://raw.../setup-vps.sh | bash
set -e

echo "=== Autobot VPS Setup ==="

# 1. Update system
apt update && apt upgrade -y

# 2. Install Docker
if ! command -v docker &>/dev/null; then
  curl -fsSL https://get.docker.com | sh
  apt install -y docker-compose-plugin
  systemctl enable docker
  echo "Docker installed"
else
  echo "Docker already installed"
fi

# 3. Create deploy user
if ! id deploy &>/dev/null; then
  adduser --disabled-password --gecos "" deploy
  usermod -aG docker deploy
  echo "User 'deploy' created"
fi

# 4. Setup SSH key for deploy user (paste your public key here)
mkdir -p /home/deploy/.ssh
chmod 700 /home/deploy/.ssh
# echo "YOUR_PUBLIC_KEY" >> /home/deploy/.ssh/authorized_keys
chmod 600 /home/deploy/.ssh/authorized_keys 2>/dev/null || true
chown -R deploy:deploy /home/deploy/.ssh

# 5. Create app directory
mkdir -p /opt/autobot
chown deploy:deploy /opt/autobot
mkdir -p /opt/autobot/logs
chown deploy:deploy /opt/autobot/logs

# 6. Firewall
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable
echo "Firewall configured"

# 7. Swap (if RAM <= 2GB)
TOTAL_RAM=$(free -m | awk '/^Mem:/{print $2}')
if [ "$TOTAL_RAM" -le 2048 ] && [ ! -f /swapfile ]; then
  fallocate -l 2G /swapfile
  chmod 600 /swapfile
  mkswap /swapfile
  swapon /swapfile
  echo '/swapfile none swap sw 0 0' >> /etc/fstab
  echo "Swap created"
fi

# 8. Install fail2ban
apt install -y fail2ban
systemctl enable fail2ban

echo ""
echo "=== Setup complete ==="
echo "Next steps:"
echo "1. Copy your SSH public key to /home/deploy/.ssh/authorized_keys"
echo "2. Copy docker-compose.yml and .env.production to /opt/autobot/"
echo "3. cd /opt/autobot && docker compose up -d"
echo "4. docker compose exec api /server migrate"
echo "5. docker compose exec api /server seed"
