import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { env } from '@/lib/env';
import { rateLimit, getClientIdentifier, RateLimitPresets } from '@/lib/rate-limit';
import { validateOrigin } from '@/lib/csrf';

/**
 * Contact form submission validation schema
 */
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name too long'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(8, 'Phone number too short').max(20, 'Phone number too long').optional(),
  company: z.string().max(100, 'Company name too long').optional(),
  subject: z.string().min(3, 'Subject must be at least 3 characters').max(200, 'Subject too long'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000, 'Message too long'),
});

export type ContactFormData = z.infer<typeof contactSchema>;

/**
 * POST /api/contact
 * Handle contact form submissions
 */
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

    // Apply rate limiting (3 requests per hour per IP)
    const identifier = getClientIdentifier(request);
    const rateLimitResult = rateLimit(
      `contact:${identifier}`,
      RateLimitPresets.veryStrict
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

    // Parse request body
    const body = await request.json();

    // Validate input
    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Check if email is configured
    if (!env.SMTP_USER || !env.SMTP_PASSWORD) {
      console.error('SMTP not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact us directly.' },
        { status: 500 }
      );
    }

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: parseInt(env.SMTP_PORT),
      secure: env.SMTP_SECURE === 'true',
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASSWORD,
      },
    });

    // Get current time in Jakarta timezone
    const now = new Date();
    const jakartaTime = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Jakarta',
      dateStyle: 'full',
      timeStyle: 'long',
    }).format(now);

    // Email to admin (notification)
    const adminMailOptions = {
      from: env.SMTP_FROM || env.SMTP_USER,
      to: env.ADMIN_EMAIL,
      subject: `🔔 New Contact Form Submission: ${data.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #116366 0%, #14b8a6 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .info-row { margin: 15px 0; padding: 15px; background: white; border-left: 4px solid #116366; border-radius: 4px; }
            .label { font-weight: 600; color: #116366; margin-bottom: 5px; }
            .value { color: #4b5563; }
            .message-box { background: white; padding: 20px; border-radius: 8px; margin-top: 20px; border: 1px solid #e5e7eb; }
            .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; }
            .badge { display: inline-block; padding: 4px 12px; background: #14b8a6; color: white; border-radius: 12px; font-size: 12px; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">📬 New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Autobot Website</p>
            </div>

            <div class="content">
              <p style="font-size: 16px; color: #374151; margin-top: 0;">You have received a new contact form submission:</p>

              <div class="info-row">
                <div class="label">👤 Name</div>
                <div class="value">${data.name}</div>
              </div>

              <div class="info-row">
                <div class="label">📧 Email</div>
                <div class="value"><a href="mailto:${data.email}" style="color: #116366;">${data.email}</a></div>
              </div>

              ${data.phone ? `
              <div class="info-row">
                <div class="label">📱 Phone</div>
                <div class="value"><a href="tel:${data.phone}" style="color: #116366;">${data.phone}</a></div>
              </div>
              ` : ''}

              ${data.company ? `
              <div class="info-row">
                <div class="label">🏢 Company</div>
                <div class="value">${data.company}</div>
              </div>
              ` : ''}

              <div class="info-row">
                <div class="label">📝 Subject</div>
                <div class="value"><strong>${data.subject}</strong></div>
              </div>

              <div class="message-box">
                <div class="label">💬 Message</div>
                <div class="value" style="white-space: pre-wrap; margin-top: 10px;">${data.message}</div>
              </div>

              <div style="margin-top: 20px; padding: 15px; background: #eff6ff; border-radius: 8px; font-size: 14px; color: #1e40af;">
                <strong>⏰ Submitted:</strong> ${jakartaTime}
              </div>
            </div>

            <div class="footer">
              <p>This email was sent from Autobot website contact form.</p>
              <p style="margin-top: 5px;">Please respond to the customer within 24 hours.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}
${data.company ? `Company: ${data.company}` : ''}
Subject: ${data.subject}

Message:
${data.message}

Submitted: ${jakartaTime}
      `,
    };

    // Auto-reply email to customer
    const customerMailOptions = {
      from: env.SMTP_FROM || env.SMTP_USER,
      to: data.email,
      subject: `Thank you for contacting Autobot - ${data.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #116366 0%, #14b8a6 100%); color: white; padding: 40px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 40px; border-radius: 0 0 8px 8px; }
            .button { display: inline-block; padding: 12px 30px; background: #116366; color: white; text-decoration: none; border-radius: 6px; margin: 20px 0; font-weight: 600; }
            .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">Thank You for Contacting Us! 🎉</h1>
            </div>

            <div class="content">
              <p style="font-size: 18px; color: #116366; margin-top: 0;"><strong>Hello ${data.name},</strong></p>

              <p style="font-size: 16px; color: #374151;">We have received your message regarding <strong>"${data.subject}"</strong> and appreciate you reaching out to Autobot.</p>

              <p style="font-size: 16px; color: #374151;">Our team will review your inquiry and respond within <strong>1-2 business days</strong>. We're excited to help you with your digital transformation journey!</p>

              <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #116366; margin: 25px 0;">
                <p style="margin: 0; color: #6b7280; font-size: 14px;"><strong>Your Message:</strong></p>
                <p style="margin: 10px 0 0 0; color: #374151;">${data.message.substring(0, 200)}${data.message.length > 200 ? '...' : ''}</p>
              </div>

              <p style="font-size: 16px; color: #374151;">In the meantime, feel free to explore our services:</p>

              <div style="text-align: center;">
                <a href="${env.NEXT_PUBLIC_SITE_URL}/services" class="button">Explore Our Services</a>
              </div>

              <p style="font-size: 14px; color: #6b7280; margin-top: 30px;">If you have any urgent questions, please don't hesitate to call us directly.</p>
            </div>

            <div class="footer">
              <p><strong>Autobot Wijaya Solution</strong></p>
              <p>Your Digital Transformation Partner</p>
              <p style="margin-top: 10px;">
                📧 ${env.ADMIN_EMAIL} | 📱 +62 XXX-XXXX-XXXX<br>
                🌐 <a href="${env.NEXT_PUBLIC_SITE_URL}" style="color: #116366;">${env.NEXT_PUBLIC_SITE_URL}</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Hello ${data.name},

Thank you for contacting Autobot!

We have received your message regarding "${data.subject}" and appreciate you reaching out to us.

Our team will review your inquiry and respond within 1-2 business days. We're excited to help you with your digital transformation journey!

Your Message:
${data.message}

In the meantime, feel free to explore our services at ${env.NEXT_PUBLIC_SITE_URL}/services

Best regards,
Autobot Team

---
Autobot Wijaya Solution
Your Digital Transformation Partner
${env.ADMIN_EMAIL}
${env.NEXT_PUBLIC_SITE_URL}
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(customerMailOptions),
    ]);

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully! We will get back to you soon.',
      },
      { headers }
    );

  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      {
        error: 'Failed to send message. Please try again or contact us directly.',
        details: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : 'Unknown error') : undefined,
      },
      { status: 500 }
    );
  }
}
