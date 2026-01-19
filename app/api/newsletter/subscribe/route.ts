import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { env } from '@/lib/env';
import { rateLimit, getClientIdentifier, RateLimitPresets } from '@/lib/rate-limit';
import { validateOrigin } from '@/lib/csrf';

/**
 * Newsletter subscription validation schema
 */
const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export async function POST(request: NextRequest) {
  try {
    // CSRF Protection: Validate origin
    const originValidation = validateOrigin(request);
    if (!originValidation.success) {
      return NextResponse.json(
        { error: originValidation.error || 'Invalid request origin' },
        { status: 403 }
      );
    }

    // Apply rate limiting (10 requests per minute per IP)
    const identifier = getClientIdentifier(request);
    const rateLimitResult = rateLimit(
      `newsletter:${identifier}`,
      RateLimitPresets.moderate
    );

    // Add rate limit headers
    const headers = new Headers({
      'X-RateLimit-Limit': rateLimitResult.limit.toString(),
      'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
      'X-RateLimit-Reset': rateLimitResult.reset.toString(),
    });

    if (!rateLimitResult.success) {
      headers.set('Retry-After', rateLimitResult.retryAfter!.toString());
      return NextResponse.json(
        {
          error: 'Too many requests. Please try again later.',
          retryAfter: rateLimitResult.retryAfter,
        },
        { status: 429, headers }
      );
    }

    const body = await request.json();

    // Validate email with Zod
    const validationResult = newsletterSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: 'Invalid email address',
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { email } = validationResult.data;

    // Create transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: parseInt(env.SMTP_PORT),
      secure: env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASSWORD,
      },
    });

    // Send notification email to admin
    const adminMailOptions = {
      from: env.SMTP_FROM || env.SMTP_USER,
      to: env.ADMIN_EMAIL,
      subject: '🎉 New Newsletter Subscription',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9f9f9;
            }
            .header {
              background: linear-gradient(135deg, #116366 0%, #14b8a6 100%);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .content {
              background: white;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .email-box {
              background: #f0f9ff;
              border-left: 4px solid #116366;
              padding: 15px;
              margin: 20px 0;
              font-size: 18px;
              font-weight: bold;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 New Newsletter Subscriber!</h1>
            </div>
            <div class="content">
              <p>You have a new subscriber to your newsletter!</p>

              <div class="email-box">
                📧 ${email}
              </div>

              <p><strong>Subscribed at:</strong> ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}</p>

              <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">

              <p style="color: #666; font-size: 14px;">
                <strong>Next Steps:</strong><br>
                1. Add this email to your mailing list<br>
                2. Send a welcome email to the subscriber<br>
                3. Keep track of your subscriber count
              </p>
            </div>
            <div class="footer">
              <p>This email was sent from your Autobot Wijaya Solution website</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `New newsletter subscription from: ${email}\nSubscribed at: ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}`,
    };

    // Send welcome email to subscriber
    const welcomeMailOptions = {
      from: env.SMTP_FROM || env.SMTP_USER,
      to: email,
      subject: 'Welcome to Autobot Wijaya Solution Newsletter! 🚀',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9f9f9;
            }
            .header {
              background: linear-gradient(135deg, #116366 0%, #14b8a6 100%);
              color: white;
              padding: 40px 30px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .content {
              background: white;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .button {
              display: inline-block;
              background: linear-gradient(135deg, #116366 0%, #14b8a6 100%);
              color: white;
              padding: 15px 30px;
              text-decoration: none;
              border-radius: 5px;
              margin: 20px 0;
              font-weight: bold;
            }
            .features {
              background: #f0f9ff;
              padding: 20px;
              border-radius: 5px;
              margin: 20px 0;
            }
            .features li {
              margin: 10px 0;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 Welcome!</h1>
              <p style="font-size: 18px; margin-top: 10px;">Thank you for subscribing to our newsletter</p>
            </div>
            <div class="content">
              <p>Hi there! 👋</p>

              <p>We're thrilled to have you join the <strong>Autobot Wijaya Solution</strong> community!</p>

              <div class="features">
                <p><strong>Here's what you can expect from our newsletter:</strong></p>
                <ul>
                  <li>🚀 Latest technology trends and insights</li>
                  <li>💡 Industry best practices and tips</li>
                  <li>📱 New product launches and updates</li>
                  <li>🎯 Exclusive offers and promotions</li>
                  <li>📚 Case studies and success stories</li>
                </ul>
              </div>

              <p>We promise to only send you valuable content and respect your inbox. No spam, ever!</p>

              <center>
                <a href="${env.NEXT_PUBLIC_SITE_URL}" class="button">
                  Visit Our Website
                </a>
              </center>

              <p style="margin-top: 30px;">If you have any questions or feedback, feel free to reply to this email or contact us at <a href="mailto:info@autobot.co.id">info@autobot.co.id</a>.</p>

              <p>Best regards,<br>
              <strong>Autobot Wijaya Solution Team</strong></p>
            </div>
            <div class="footer">
              <p>You're receiving this email because you subscribed to our newsletter.</p>
              <p>Autobot Wijaya Solution | Jakarta, Indonesia</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `Welcome to Autobot Wijaya Solution Newsletter!\n\nThank you for subscribing! We're excited to have you join our community.\n\nYou'll receive updates about:\n- Latest technology trends\n- Industry insights\n- New products and services\n- Exclusive offers\n\nBest regards,\nAutobot Wijaya Solution Team`,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(welcomeMailOptions);

    return NextResponse.json(
      {
        message: 'Successfully subscribed to newsletter',
        success: true
      },
      { status: 200, headers }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      {
        error: 'Failed to subscribe. Please try again later.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
