#!/bin/bash

# API Security Testing Script
# Tests rate limiting and CSRF protection

echo "🔐 Testing API Security Features"
echo "================================="
echo ""

# Configuration
BASE_URL="${1:-http://localhost:3000}"
CONTACT_API="$BASE_URL/api/contact"
NEWSLETTER_API="$BASE_URL/api/newsletter/subscribe"

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test data
CONTACT_DATA='{
  "name": "Test User",
  "email": "test@example.com",
  "subject": "Security Test",
  "message": "This is a test message for security validation"
}'

NEWSLETTER_DATA='{
  "email": "test@example.com"
}'

echo "📍 Testing against: $BASE_URL"
echo ""

# Test 1: CSRF Protection - Request without Origin header
echo "Test 1: CSRF Protection (No Origin Header)"
echo "-------------------------------------------"
RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "$CONTACT_API" \
  -H "Content-Type: application/json" \
  -d "$CONTACT_DATA")

HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | head -n-1)

if [ "$HTTP_CODE" = "403" ] || [ "$HTTP_CODE" = "200" ]; then
  if [ "$HTTP_CODE" = "403" ]; then
    echo -e "${GREEN}✅ PASS${NC} - CSRF protection working (403 Forbidden)"
  else
    echo -e "${YELLOW}⚠️  WARN${NC} - Request allowed (dev mode)"
  fi
else
  echo -e "${RED}❌ FAIL${NC} - Unexpected status code: $HTTP_CODE"
fi
echo "Response: $BODY"
echo ""

# Test 2: CSRF Protection - Request with valid Origin
echo "Test 2: CSRF Protection (Valid Origin)"
echo "---------------------------------------"
RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "$CONTACT_API" \
  -H "Content-Type: application/json" \
  -H "Origin: $BASE_URL" \
  -d "$CONTACT_DATA")

HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | head -n-1)

# Check if SMTP is configured
if echo "$BODY" | grep -q "not configured"; then
  echo -e "${YELLOW}⚠️  INFO${NC} - SMTP not configured (expected in dev)"
elif [ "$HTTP_CODE" = "200" ]; then
  echo -e "${GREEN}✅ PASS${NC} - Request accepted with valid origin"
else
  echo -e "${RED}❌ FAIL${NC} - Unexpected status code: $HTTP_CODE"
fi
echo "Response: $BODY"
echo ""

# Test 3: Rate Limiting - Multiple rapid requests
echo "Test 3: Rate Limiting (Newsletter API - 10 req/min)"
echo "----------------------------------------------------"
echo "Sending 12 requests rapidly..."

SUCCESS_COUNT=0
RATE_LIMITED_COUNT=0

for i in {1..12}; do
  RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "$NEWSLETTER_API" \
    -H "Content-Type: application/json" \
    -H "Origin: $BASE_URL" \
    -d "$NEWSLETTER_DATA")

  HTTP_CODE=$(echo "$RESPONSE" | tail -n1)

  if [ "$HTTP_CODE" = "429" ]; then
    RATE_LIMITED_COUNT=$((RATE_LIMITED_COUNT + 1))
  elif [ "$HTTP_CODE" = "200" ] || [ "$HTTP_CODE" = "500" ]; then
    SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
  fi

  echo -n "."
done

echo ""
echo "Results:"
echo "  - Successful requests: $SUCCESS_COUNT"
echo "  - Rate limited (429): $RATE_LIMITED_COUNT"

if [ $RATE_LIMITED_COUNT -gt 0 ]; then
  echo -e "${GREEN}✅ PASS${NC} - Rate limiting is working"
else
  echo -e "${YELLOW}⚠️  WARN${NC} - No rate limiting detected (check implementation)"
fi
echo ""

# Test 4: Rate Limit Headers
echo "Test 4: Rate Limit Headers"
echo "--------------------------"
RESPONSE=$(curl -s -i -X POST "$NEWSLETTER_API" \
  -H "Content-Type: application/json" \
  -H "Origin: $BASE_URL" \
  -d "$NEWSLETTER_DATA")

if echo "$RESPONSE" | grep -q "X-RateLimit-Limit"; then
  echo -e "${GREEN}✅ PASS${NC} - Rate limit headers present"
  echo "$RESPONSE" | grep -i "x-ratelimit"
else
  echo -e "${RED}❌ FAIL${NC} - Rate limit headers missing"
fi
echo ""

# Test 5: Input Validation
echo "Test 5: Input Validation (Invalid Email)"
echo "-----------------------------------------"
INVALID_DATA='{
  "email": "not-an-email"
}'

RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "$NEWSLETTER_API" \
  -H "Content-Type: application/json" \
  -H "Origin: $BASE_URL" \
  -d "$INVALID_DATA")

HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | head -n-1)

if [ "$HTTP_CODE" = "400" ]; then
  echo -e "${GREEN}✅ PASS${NC} - Input validation working (400 Bad Request)"
else
  echo -e "${RED}❌ FAIL${NC} - Expected 400, got: $HTTP_CODE"
fi
echo "Response: $BODY"
echo ""

# Summary
echo "================================="
echo "📊 Security Test Summary"
echo "================================="
echo ""
echo "Security features tested:"
echo "  ✓ CSRF Protection (Origin validation)"
echo "  ✓ Rate Limiting (Request throttling)"
echo "  ✓ Rate Limit Headers"
echo "  ✓ Input Validation (Zod schemas)"
echo ""
echo "🔍 Manual verification recommended:"
echo "  - Check security headers: curl -I $BASE_URL"
echo "  - Test from different IPs/origins"
echo "  - Monitor rate limit behavior over time"
echo ""
echo "For production testing, use tools like:"
echo "  - OWASP ZAP: https://www.zaproxy.org/"
echo "  - Burp Suite: https://portswigger.net/burp"
echo "  - Artillery: https://www.artillery.io/"
echo ""
