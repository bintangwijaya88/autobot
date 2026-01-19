import nodemailer from 'nodemailer';
import { env, isEmailConfigured } from './env';
import crypto from 'crypto';
import { prisma } from './prisma';

const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: parseInt(env.SMTP_PORT),
  secure: env.SMTP_SECURE === 'true',
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASSWORD,
  },
});

export async function generateVerificationToken(email: string): Promise<string> {
  const token = crypto.randomBytes(32).toString('hex');
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

  // Delete any existing verification tokens for this email
  await prisma.verificationToken.deleteMany({
    where: { identifier: email },
  });

  // Create new verification token
  await prisma.verificationToken.create({
    data: {
      identifier: email,
      token,
      expires,
    },
  });

  return token;
}

export async function verifyEmailToken(token: string, email: string): Promise<boolean> {
  const verificationToken = await prisma.verificationToken.findUnique({
    where: {
      identifier_token: {
        identifier: email,
        token,
      },
    },
  });

  if (!verificationToken) {
    return false;
  }

  // Check if token has expired
  if (verificationToken.expires < new Date()) {
    await prisma.verificationToken.delete({
      where: {
        identifier_token: {
          identifier: email,
          token,
        },
      },
    });
    return false;
  }

  // Token is valid - verify the user's email
  await prisma.user.update({
    where: { email },
    data: { emailVerified: new Date() },
  });

  // Delete the verification token
  await prisma.verificationToken.delete({
    where: {
      identifier_token: {
        identifier: email,
        token,
      },
    },
  });

  return true;
}

export async function sendVerificationEmail(email: string, token: string): Promise<void> {
  if (!isEmailConfigured()) {
    console.error('Email not configured. Cannot send verification email.');
    throw new Error('Email service not configured');
  }

  const verificationUrl = `${env.NEXT_PUBLIC_SITE_URL}/auth/verify-email?token=${token}&email=${encodeURIComponent(email)}`;

  const mailOptions = {
    from: env.SMTP_FROM,
    to: email,
    subject: 'Verify Your Email - Autobot',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Verify Your Email</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 40px auto;
              background: #ffffff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              padding: 40px 20px;
              text-align: center;
              color: white;
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
            }
            .content {
              padding: 40px 30px;
            }
            .button {
              display: inline-block;
              padding: 14px 32px;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              text-decoration: none;
              border-radius: 5px;
              font-weight: 600;
              margin: 20px 0;
            }
            .button:hover {
              opacity: 0.9;
            }
            .footer {
              background: #f8f9fa;
              padding: 20px 30px;
              text-align: center;
              color: #666;
              font-size: 14px;
            }
            .link {
              color: #667eea;
              word-break: break-all;
            }
            .warning {
              background: #fff3cd;
              border-left: 4px solid #ffc107;
              padding: 12px;
              margin: 20px 0;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Verify Your Email</h1>
            </div>
            <div class="content">
              <p>Hello!</p>
              <p>Thank you for registering with Autobot. To complete your registration, please verify your email address by clicking the button below:</p>

              <div style="text-align: center;">
                <a href="${verificationUrl}" class="button">Verify Email Address</a>
              </div>

              <p>Or copy and paste this link into your browser:</p>
              <p class="link">${verificationUrl}</p>

              <div class="warning">
                <strong>Security Notice:</strong> This verification link will expire in 24 hours. If you didn't create an account with Autobot, you can safely ignore this email.
              </div>

              <p>If you have any questions, feel free to contact us.</p>

              <p>Best regards,<br>The Autobot Team</p>
            </div>
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Autobot. All rights reserved.</p>
              <p>This is an automated email. Please do not reply to this message.</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
      Hello!

      Thank you for registering with Autobot. To complete your registration, please verify your email address by visiting this link:

      ${verificationUrl}

      This verification link will expire in 24 hours.

      If you didn't create an account with Autobot, you can safely ignore this email.

      Best regards,
      The Autobot Team
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Verification email sent to:', email);
  } catch (error) {
    console.error('Failed to send verification email:', error);
    throw new Error('Failed to send verification email');
  }
}

export async function sendWelcomeEmail(email: string, name?: string): Promise<void> {
  if (!isEmailConfigured()) {
    console.log('Email not configured. Skipping welcome email.');
    return;
  }

  const displayName = name || 'there';

  const mailOptions = {
    from: env.SMTP_FROM,
    to: email,
    subject: 'Welcome to Autobot!',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Welcome to Autobot</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 40px auto;
              background: #ffffff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              padding: 40px 20px;
              text-align: center;
              color: white;
            }
            .content {
              padding: 40px 30px;
            }
            .footer {
              background: #f8f9fa;
              padding: 20px 30px;
              text-align: center;
              color: #666;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Welcome to Autobot!</h1>
            </div>
            <div class="content">
              <p>Hi ${displayName},</p>
              <p>Your email has been successfully verified. Welcome to Autobot!</p>
              <p>You can now access all features of your account.</p>
              <p>If you have any questions, feel free to reach out to us.</p>
              <p>Best regards,<br>The Autobot Team</p>
            </div>
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Autobot. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
      Hi ${displayName},

      Your email has been successfully verified. Welcome to Autobot!

      You can now access all features of your account.

      Best regards,
      The Autobot Team
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Welcome email sent to:', email);
  } catch (error) {
    console.error('Failed to send welcome email:', error);
  }
}
