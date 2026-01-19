import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { verifyEmailToken, sendWelcomeEmail } from '@/lib/email-verification';
import { rateLimit, getClientIdentifier, RateLimitPresets } from '@/lib/rate-limit';

const verifySchema = z.object({
  token: z.string().min(1, 'Token is required'),
  email: z.string().email('Invalid email address'),
});

export async function GET(request: NextRequest) {
  try {
    // Rate Limiting (moderate - 10 requests per minute)
    const clientId = getClientIdentifier(request);
    const rateLimitResult = rateLimit(`verify-email:${clientId}`, RateLimitPresets.moderate);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          error: 'Too many verification attempts. Please try again later.',
          retryAfter: rateLimitResult.retryAfter
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(rateLimitResult.retryAfter),
            'X-RateLimit-Limit': String(rateLimitResult.limit),
            'X-RateLimit-Remaining': String(rateLimitResult.remaining),
            'X-RateLimit-Reset': String(rateLimitResult.reset),
          }
        }
      );
    }

    // Get query parameters
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');
    const email = searchParams.get('email');

    // Validate parameters
    const validation = verifySchema.safeParse({ token, email });
    if (!validation.success) {
      return NextResponse.json(
        {
          error: 'Invalid verification parameters',
          details: validation.error.flatten().fieldErrors
        },
        { status: 400 }
      );
    }

    const { token: validToken, email: validEmail } = validation.data;

    // Verify the token
    const isValid = await verifyEmailToken(validToken, validEmail);

    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid or expired verification token' },
        { status: 400 }
      );
    }

    // Send welcome email
    try {
      await sendWelcomeEmail(validEmail);
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError);
      // Don't fail verification if welcome email fails
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Email verified successfully. You can now sign in.'
      },
      {
        status: 200,
        headers: {
          'X-RateLimit-Limit': String(rateLimitResult.limit),
          'X-RateLimit-Remaining': String(rateLimitResult.remaining),
          'X-RateLimit-Reset': String(rateLimitResult.reset),
        }
      }
    );
  } catch (error) {
    console.error('Email verification error:', error);

    return NextResponse.json(
      {
        error: process.env.NODE_ENV === 'production'
          ? 'An error occurred during verification'
          : error instanceof Error
            ? error.message
            : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
