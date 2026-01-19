/**
 * Simple in-memory rate limiting utility
 *
 * This uses a Map to store rate limit data in memory.
 * For production with multiple servers, consider using Redis-based rate limiting
 * like @upstash/ratelimit or implementing your own Redis solution.
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

// In-memory store for rate limiting
const store = new Map<string, RateLimitEntry>();

// Clean up expired entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of store.entries()) {
    if (now > entry.resetTime) {
      store.delete(key);
    }
  }
}, 5 * 60 * 1000);

export interface RateLimitConfig {
  /**
   * Maximum number of requests allowed in the time window
   */
  limit: number;

  /**
   * Time window in seconds
   */
  window: number;
}

export interface RateLimitResult {
  /**
   * Whether the request is allowed
   */
  success: boolean;

  /**
   * Number of requests remaining in the current window
   */
  remaining: number;

  /**
   * Total limit
   */
  limit: number;

  /**
   * Timestamp when the rate limit resets (in seconds)
   */
  reset: number;

  /**
   * Time to wait before retrying (in seconds), only present if success is false
   */
  retryAfter?: number;
}

/**
 * Check if a request should be rate limited
 *
 * @param identifier - Unique identifier for the client (e.g., IP address, user ID)
 * @param config - Rate limit configuration
 * @returns Rate limit result
 */
export function rateLimit(
  identifier: string,
  config: RateLimitConfig
): RateLimitResult {
  const now = Date.now();
  const windowMs = config.window * 1000;

  let entry = store.get(identifier);

  // If no entry exists or the window has expired, create a new one
  if (!entry || now > entry.resetTime) {
    entry = {
      count: 1,
      resetTime: now + windowMs,
    };
    store.set(identifier, entry);

    return {
      success: true,
      remaining: config.limit - 1,
      limit: config.limit,
      reset: Math.floor(entry.resetTime / 1000),
    };
  }

  // Check if limit exceeded
  if (entry.count >= config.limit) {
    const retryAfter = Math.ceil((entry.resetTime - now) / 1000);

    return {
      success: false,
      remaining: 0,
      limit: config.limit,
      reset: Math.floor(entry.resetTime / 1000),
      retryAfter,
    };
  }

  // Increment count
  entry.count++;
  store.set(identifier, entry);

  return {
    success: true,
    remaining: config.limit - entry.count,
    limit: config.limit,
    reset: Math.floor(entry.resetTime / 1000),
  };
}

/**
 * Get client identifier from request headers
 * Tries to get real IP from various proxy headers, falls back to direct IP
 */
export function getClientIdentifier(request: Request): string {
  // Try to get real IP from common proxy headers
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    // x-forwarded-for can contain multiple IPs, take the first one
    return forwardedFor.split(',')[0].trim();
  }

  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp;
  }

  const cfConnectingIp = request.headers.get('cf-connecting-ip');
  if (cfConnectingIp) {
    return cfConnectingIp;
  }

  // Fallback to a generic identifier if IP is not available
  // In serverless environments, this might not be available
  return 'anonymous';
}

/**
 * Preset rate limit configurations
 */
export const RateLimitPresets = {
  /**
   * Strict: 5 requests per minute
   * Good for sensitive operations like contact forms
   */
  strict: { limit: 5, window: 60 },

  /**
   * Moderate: 10 requests per minute
   * Good for newsletter subscriptions
   */
  moderate: { limit: 10, window: 60 },

  /**
   * Generous: 30 requests per minute
   * Good for general API endpoints
   */
  generous: { limit: 30, window: 60 },

  /**
   * Very strict: 3 requests per hour
   * Good for operations that send emails
   */
  veryStrict: { limit: 3, window: 3600 },
} as const;
