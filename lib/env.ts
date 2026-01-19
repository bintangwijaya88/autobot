import { z } from 'zod';

/**
 * Environment variable validation schema
 * Validates all required environment variables at build time
 */

// Server-side environment variables (private)
const serverSchema = z.object({
  // SMTP Configuration
  SMTP_HOST: z.string().default('smtp.gmail.com'),
  SMTP_PORT: z.string().default('587'),
  SMTP_SECURE: z.string().default('false'),
  SMTP_USER: z.string().optional(),
  SMTP_PASSWORD: z.string().optional(),
  SMTP_FROM: z.string().email().optional(),
  ADMIN_EMAIL: z.string().email().default('info@autobot.co.id'),

  // Authentication (NextAuth.js)
  NEXTAUTH_SECRET: z.string().optional(),
  NEXTAUTH_URL: z.string().url().optional(),
  GOOGLE_CLIENT_ID: z.string().optional(),
  GOOGLE_CLIENT_SECRET: z.string().optional(),
  GITHUB_CLIENT_ID: z.string().optional(),
  GITHUB_CLIENT_SECRET: z.string().optional(),
  DATABASE_URL: z.string().optional(),

  // Contentful Preview (server-side only)
  CONTENTFUL_PREVIEW_ACCESS_TOKEN: z.string().optional(),

  // Node environment
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

// Client-side environment variables (public)
const clientSchema = z.object({
  // Contentful
  NEXT_PUBLIC_CONTENTFUL_SPACE_ID: z.string().optional(),
  NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN: z.string().optional(),

  // Site configuration
  NEXT_PUBLIC_SITE_URL: z.string().url().default('http://localhost:3000'),

  // Analytics
  NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().optional(),
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: z.string().optional(),
});

/**
 * Validate and parse environment variables
 * Throws error if validation fails
 */
const processEnv = {
  // Server variables
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_SECURE: process.env.SMTP_SECURE,
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASSWORD: process.env.SMTP_PASSWORD,
  SMTP_FROM: process.env.SMTP_FROM,
  ADMIN_EMAIL: process.env.ADMIN_EMAIL,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  DATABASE_URL: process.env.DATABASE_URL,
  CONTENTFUL_PREVIEW_ACCESS_TOKEN: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  NODE_ENV: process.env.NODE_ENV,

  // Client variables
  NEXT_PUBLIC_CONTENTFUL_SPACE_ID: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
};

// Merge schemas for validation
const envSchema = serverSchema.merge(clientSchema);

// Parse and validate
const parsed = envSchema.safeParse(processEnv);

if (!parsed.success) {
  console.error('❌ Invalid environment variables:', parsed.error.flatten().fieldErrors);
  throw new Error('Invalid environment variables');
}

/**
 * Validated environment variables
 * Type-safe access to env vars
 */
export const env = parsed.data;

/**
 * Check if Contentful is properly configured
 */
export const isContentfulConfigured = () => {
  return !!(
    env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID &&
    env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  );
};

/**
 * Check if email is properly configured
 */
export const isEmailConfigured = () => {
  return !!(
    env.SMTP_USER &&
    env.SMTP_PASSWORD
  );
};
