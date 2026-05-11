#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR=/opt/autobot/backups

mkdir -p $BACKUP_DIR

# Dump PostgreSQL
docker compose exec -T postgres pg_dump -U $DB_USER autobot | gzip > $BACKUP_DIR/autobot_$DATE.sql.gz

# Keep last 30 days
find $BACKUP_DIR -name "*.sql.gz" -mtime +30 -delete

echo "Backup complete: autobot_$DATE.sql.gz"
