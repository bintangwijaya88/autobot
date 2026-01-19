/**
 * CSRF (Cross-Site Request Forgery) Protection
 *
 * This module provides CSRF protection for API routes by validating
 * the Origin and Referer headers to ensure requests come from trusted sources.
 *
 * For additional security with token-based CSRF protection, consider using
 * libraries like 'edge-csrf' or implementing a double-submit cookie pattern.
 */

import { NextRequest } from 'next/server';
import { env } from './env';

/**
 * Validate that a request comes from a trusted origin
 *
 * This checks the Origin and Referer headers to prevent CSRF attacks.
 * Only requests from the same origin or explicitly allowed origins are accepted.
 *
 * @param request - The Next.js request object
 * @param allowedOrigins - Additional origins to allow (optional)
 * @returns Object with success status and optional error message
 */
export function validateOrigin(
  request: NextRequest,
  allowedOrigins: string[] = []
): { success: boolean; error?: string } {
  // GET and HEAD requests are safe from CSRF
  if (request.method === 'GET' || request.method === 'HEAD') {
    return { success: true };
  }

  // Get the origin from the request
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');

  // For development, we might not have origin/referer
  if (process.env.NODE_ENV === 'development') {
    // In development, allow requests without origin/referer
    // This is useful for tools like Postman or curl
    if (!origin && !referer) {
      console.warn('[CSRF] Development mode: Allowing request without origin/referer');
      return { success: true };
    }
  }

  // Build list of allowed origins
  const trusted = [
    env.NEXT_PUBLIC_SITE_URL,
    ...allowedOrigins,
  ];

  // Check origin header first
  if (origin) {
    const isAllowed = trusted.some((trustedOrigin) => {
      // Normalize URLs to remove trailing slashes
      const normalizedOrigin = origin.replace(/\/$/, '');
      const normalizedTrusted = trustedOrigin.replace(/\/$/, '');
      return normalizedOrigin === normalizedTrusted;
    });

    if (isAllowed) {
      return { success: true };
    }
  }

  // Fallback to referer header
  if (referer) {
    try {
      const refererUrl = new URL(referer);
      const refererOrigin = `${refererUrl.protocol}//${refererUrl.host}`;

      const isAllowed = trusted.some((trustedOrigin) => {
        const normalizedReferer = refererOrigin.replace(/\/$/, '');
        const normalizedTrusted = trustedOrigin.replace(/\/$/, '');
        return normalizedReferer === normalizedTrusted;
      });

      if (isAllowed) {
        return { success: true };
      }
    } catch {
      // Invalid referer URL
      return {
        success: false,
        error: 'Invalid referer header',
      };
    }
  }

  // If we get here, the request is not from a trusted origin
  return {
    success: false,
    error: 'Request origin not allowed. Possible CSRF attack detected.',
  };
}

/**
 * Simple CSRF token generation and validation
 *
 * This provides a basic implementation of CSRF tokens.
 * For production use with multiple servers, consider using a library
 * or implementing a more robust solution with Redis.
 */

// In-memory store for CSRF tokens
// For production with multiple servers, use Redis or a database
const tokenStore = new Map<string, { token: string; expiresAt: number }>();

// Clean up expired tokens every hour
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of tokenStore.entries()) {
    if (now > value.expiresAt) {
      tokenStore.delete(key);
    }
  }
}, 60 * 60 * 1000);

/**
 * Generate a random CSRF token
 */
function generateToken(): string {
  // Generate a random string
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * Create a CSRF token for a session
 *
 * @param sessionId - Unique identifier for the session (e.g., user ID, session cookie)
 * @param ttl - Time to live in seconds (default: 1 hour)
 * @returns The generated CSRF token
 */
export function createCsrfToken(sessionId: string, ttl: number = 3600): string {
  const token = generateToken();
  const expiresAt = Date.now() + ttl * 1000;

  tokenStore.set(sessionId, { token, expiresAt });

  return token;
}

/**
 * Validate a CSRF token
 *
 * @param sessionId - Unique identifier for the session
 * @param token - The token to validate
 * @returns true if the token is valid, false otherwise
 */
export function validateCsrfToken(sessionId: string, token: string): boolean {
  const stored = tokenStore.get(sessionId);

  if (!stored) {
    return false;
  }

  // Check if token has expired
  if (Date.now() > stored.expiresAt) {
    tokenStore.delete(sessionId);
    return false;
  }

  // Compare tokens
  return stored.token === token;
}

/**
 * Delete a CSRF token (e.g., after use)
 *
 * @param sessionId - Unique identifier for the session
 */
export function deleteCsrfToken(sessionId: string): void {
  tokenStore.delete(sessionId);
}
