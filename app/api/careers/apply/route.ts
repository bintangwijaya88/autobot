import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { env } from '@/lib/env';
import { rateLimit, getClientIdentifier, RateLimitPresets } from '@/lib/rate-limit';
import { validateOrigin } from '@/lib/csrf';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export async function POST(request: NextRequest) {
  try {
    // CSRF Protection
    const originValidation = validateOrigin(request);
    if (!originValidation.success) {
      return NextResponse.json(
        { error: originValidation.error || 'Invalid request origin' },
        { status: 403 }
      );
    }

    // Rate limiting (5 per hour)
    const identifier = getClientIdentifier(request);
    const rateLimitResult = rateLimit(`careers:${identifier}`, RateLimitPresets.strict);

    const headers = new Headers({
      'X-RateLimit-Limit': rateLimitResult.limit.toString(),
      'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
      'X-RateLimit-Reset': rateLimitResult.reset.toString(),
    });

    if (!rateLimitResult.success) {
      headers.set('Retry-After', rateLimitResult.retryAfter!.toString());
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers }
      );
    }

    // Parse multipart form data
    const formData = await request.formData();

    const fullName    = (formData.get('fullName') as string)?.trim();
    const email       = (formData.get('email') as string)?.trim();
    const phone       = (formData.get('phone') as string)?.trim();
    const location    = (formData.get('location') as string)?.trim();
    const position    = (formData.get('position') as string)?.trim();
    const experience  = (formData.get('experience') as string)?.trim();
    const skills      = (formData.get('skills') as string)?.trim();
    const linkedin    = (formData.get('linkedin') as string)?.trim() || '';
    const github      = (formData.get('github') as string)?.trim() || '';
    const coverLetter = (formData.get('coverLetter') as string)?.trim();
    const salary      = (formData.get('salary') as string)?.trim() || '';
    const availability = (formData.get('availability') as string)?.trim() || '';
    const cvFile      = formData.get('cv') as File | null;

    // Basic validation
    if (!fullName || !email || !phone || !location || !position || !experience || !skills || !coverLetter) {
      return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    // CV file validation
    if (!cvFile || cvFile.size === 0) {
      return NextResponse.json({ error: 'Please upload your CV (PDF).' }, { status: 400 });
    }

    if (cvFile.type !== 'application/pdf') {
      return NextResponse.json({ error: 'CV must be a PDF file.' }, { status: 400 });
    }

    if (cvFile.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: 'CV file size must not exceed 5MB.' }, { status: 400 });
    }

    // Check SMTP config
    if (!env.SMTP_USER || !env.SMTP_PASSWORD) {
      return NextResponse.json(
        { error: 'Email service not configured. Please contact us directly at ' + env.ADMIN_EMAIL },
        { status: 500 }
      );
    }

    // Read CV file buffer
    const cvBuffer = Buffer.from(await cvFile.arrayBuffer());
    const cvFilename = cvFile.name || `CV_${fullName.replace(/\s+/g, '_')}.pdf`;

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: parseInt(env.SMTP_PORT),
      secure: env.SMTP_SECURE === 'true',
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASSWORD,
      },
    });

    const jakartaTime = new Intl.DateTimeFormat('id-ID', {
      timeZone: 'Asia/Jakarta',
      dateStyle: 'full',
      timeStyle: 'long',
    }).format(new Date());

    const positionLabels: Record<string, string> = {
      frontend: 'Frontend Developer',
      backend: 'Backend Developer',
      fullstack: 'Fullstack Developer',
      mobile: 'Mobile Developer',
      devops: 'DevOps Engineer',
      'ai-ml': 'AI/ML Engineer',
      'ui-ux': 'UI/UX Designer',
      'project-manager': 'Project Manager',
      'business-analyst': 'Business Analyst',
      other: 'Other',
    };

    const salaryLabels: Record<string, string> = {
      '5-10m': 'Rp 5–10 Juta',
      '10-15m': 'Rp 10–15 Juta',
      '15-20m': 'Rp 15–20 Juta',
      '20-30m': 'Rp 20–30 Juta',
      '30m+': 'Rp 30 Juta+',
      negotiable: 'Negotiable',
    };

    const availabilityLabels: Record<string, string> = {
      immediate: 'Immediate',
      '2weeks': '2 Weeks Notice',
      '1month': '1 Month Notice',
      '2months': '2 Months Notice',
      flexible: 'Flexible',
    };

    const positionLabel = positionLabels[position] || position;
    const salaryLabel = salary ? (salaryLabels[salary] || salary) : '-';
    const availabilityLabel = availability ? (availabilityLabels[availability] || availability) : '-';

    // Email to admin with CV attachment
    const adminMail = {
      from: env.SMTP_FROM || env.SMTP_USER,
      to: env.ADMIN_EMAIL,
      replyTo: email,
      subject: `💼 Lamaran Baru: ${positionLabel} — ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin:0; padding:0; }
          .wrap { max-width: 640px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #116366 0%, #14b8a6 100%); color: white; padding: 32px 30px; border-radius: 12px 12px 0 0; text-align: center; }
          .body { background: #f9fafb; padding: 30px; border-radius: 0 0 12px 12px; }
          .row { background: white; border-left: 4px solid #116366; border-radius: 6px; padding: 14px 18px; margin: 12px 0; }
          .lbl { font-weight: 700; color: #116366; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
          .val { color: #374151; font-size: 15px; }
          .skills-box { background: white; border-radius: 8px; padding: 18px; margin: 12px 0; border: 1px solid #e5e7eb; }
          .cover-box { background: white; border-radius: 8px; padding: 18px; margin: 12px 0; border: 1px solid #e5e7eb; white-space: pre-wrap; color: #374151; font-size: 15px; }
          .badge { display: inline-block; padding: 3px 10px; background: #14b8a6; color: white; border-radius: 20px; font-size: 12px; font-weight: 600; }
          .footer { text-align: center; padding: 20px; color: #9ca3af; font-size: 13px; }
          .ts { margin-top: 20px; padding: 14px; background: #eff6ff; border-radius: 8px; font-size: 13px; color: #1e40af; }
          a { color: #116366; }
        </style>
        </head>
        <body>
        <div class="wrap">
          <div class="header">
            <h1 style="margin:0;font-size:22px;">💼 Lamaran Baru Masuk</h1>
            <p style="margin:8px 0 0;opacity:.9;font-size:15px;">${positionLabel}</p>
          </div>
          <div class="body">
            <div class="row">
              <div class="lbl">👤 Nama Lengkap</div>
              <div class="val">${fullName}</div>
            </div>
            <div class="row">
              <div class="lbl">📧 Email</div>
              <div class="val"><a href="mailto:${email}">${email}</a></div>
            </div>
            <div class="row">
              <div class="lbl">📱 Telepon</div>
              <div class="val"><a href="tel:${phone}">${phone}</a></div>
            </div>
            <div class="row">
              <div class="lbl">📍 Lokasi</div>
              <div class="val">${location}</div>
            </div>
            <div class="row">
              <div class="lbl">💼 Posisi yang Diminati</div>
              <div class="val"><strong>${positionLabel}</strong></div>
            </div>
            <div class="row">
              <div class="lbl">🎓 Pengalaman</div>
              <div class="val">${experience}</div>
            </div>
            <div class="row">
              <div class="lbl">💰 Ekspektasi Gaji</div>
              <div class="val">${salaryLabel}</div>
            </div>
            <div class="row">
              <div class="lbl">📅 Ketersediaan</div>
              <div class="val">${availabilityLabel}</div>
            </div>
            ${linkedin ? `<div class="row"><div class="lbl">🔗 LinkedIn</div><div class="val"><a href="${linkedin}">${linkedin}</a></div></div>` : ''}
            ${github ? `<div class="row"><div class="lbl">💻 GitHub</div><div class="val"><a href="${github}">${github}</a></div></div>` : ''}

            <div class="skills-box">
              <div class="lbl" style="color:#116366;font-weight:700;">🛠 Keahlian & Teknologi</div>
              <div style="margin-top:8px;color:#374151;">${skills}</div>
            </div>

            <div class="skills-box">
              <div class="lbl" style="color:#116366;font-weight:700;">📝 Cover Letter</div>
              <div class="cover-box" style="margin:8px 0 0;padding:0;border:none;">${coverLetter}</div>
            </div>

            <div style="background:#dcfce7;border-radius:8px;padding:14px 18px;margin-top:16px;">
              <strong style="color:#166534;">📎 CV terlampir: ${cvFilename}</strong>
            </div>

            <div class="ts">⏰ Dikirim: ${jakartaTime}</div>
          </div>
          <div class="footer">
            <p>Email ini dikirim otomatis dari form lamaran Autobot.co.id</p>
            <p>Balas langsung ke email pelamar: <a href="mailto:${email}">${email}</a></p>
          </div>
        </div>
        </body></html>
      `,
      attachments: [
        {
          filename: cvFilename,
          content: cvBuffer,
          contentType: 'application/pdf',
        },
      ],
    };

    // Auto-reply to applicant
    const applicantMail = {
      from: env.SMTP_FROM || env.SMTP_USER,
      to: email,
      subject: `Lamaran Anda di Autobot Telah Diterima 🎉`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin:0; }
          .wrap { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #116366 0%, #14b8a6 100%); color: white; padding: 40px 30px; border-radius: 12px 12px 0 0; text-align: center; }
          .body { background: #f9fafb; padding: 36px 30px; border-radius: 0 0 12px 12px; }
          .box { background: white; border-left: 4px solid #116366; border-radius: 6px; padding: 16px 20px; margin: 20px 0; }
          .steps { list-style: none; padding: 0; margin: 0; }
          .steps li { display: flex; align-items: flex-start; gap: 14px; margin-bottom: 14px; }
          .step-num { width: 28px; height: 28px; border-radius: 50%; background: #116366; color: white; font-weight: 700; font-size: 13px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
          .footer { text-align: center; padding: 24px; color: #9ca3af; font-size: 13px; }
          a { color: #116366; }
        </style>
        </head>
        <body>
        <div class="wrap">
          <div class="header">
            <div style="font-size:48px;margin-bottom:12px;">🎉</div>
            <h1 style="margin:0;font-size:26px;">Lamaran Diterima!</h1>
            <p style="margin:10px 0 0;opacity:.9;">Terima kasih telah melamar di Autobot</p>
          </div>
          <div class="body">
            <p style="font-size:17px;color:#116366;margin-top:0;"><strong>Halo ${fullName},</strong></p>
            <p style="color:#374151;">Kami telah menerima lamaran Anda untuk posisi <strong>${positionLabel}</strong>. Tim HR kami akan meninjau profil Anda dengan seksama.</p>

            <div class="box">
              <strong style="color:#116366;">📋 Detail Lamaran Anda</strong>
              <table style="width:100%;margin-top:10px;font-size:14px;color:#374151;">
                <tr><td style="padding:4px 0;color:#6b7280;width:40%;">Posisi:</td><td><strong>${positionLabel}</strong></td></tr>
                <tr><td style="padding:4px 0;color:#6b7280;">Pengalaman:</td><td>${experience}</td></tr>
                <tr><td style="padding:4px 0;color:#6b7280;">Lokasi:</td><td>${location}</td></tr>
              </table>
            </div>

            <p style="color:#374151;font-weight:600;margin-bottom:10px;">Proses Selanjutnya:</p>
            <ul class="steps">
              <li><span class="step-num">1</span><span style="color:#374151;">Tim HR kami akan meninjau CV dan lamaran Anda (1–2 minggu)</span></li>
              <li><span class="step-num">2</span><span style="color:#374151;">Jika profil Anda cocok, kami akan menghubungi Anda via email/telepon untuk screening awal</span></li>
              <li><span class="step-num">3</span><span style="color:#374151;">Technical test dan interview akan dilakukan secara online/offline</span></li>
              <li><span class="step-num">4</span><span style="color:#374151;">Keputusan final dan penawaran dalam 2–4 minggu</span></li>
            </ul>

            <p style="color:#6b7280;font-size:14px;margin-top:24px;">Jika ada pertanyaan, silakan hubungi kami di <a href="mailto:${env.ADMIN_EMAIL}">${env.ADMIN_EMAIL}</a></p>
          </div>
          <div class="footer">
            <p><strong>Autobot Wijaya Solution</strong></p>
            <p>Your Digital Transformation Partner</p>
            <p><a href="${env.NEXT_PUBLIC_SITE_URL}">${env.NEXT_PUBLIC_SITE_URL}</a></p>
          </div>
        </div>
        </body></html>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMail),
      transporter.sendMail(applicantMail),
    ]);

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully!' },
      { headers }
    );

  } catch (error) {
    console.error('Career application error:', error);
    return NextResponse.json(
      {
        error: 'Failed to submit application. Please try again or email us directly.',
        details: process.env.NODE_ENV === 'development'
          ? (error instanceof Error ? error.message : 'Unknown error')
          : undefined,
      },
      { status: 500 }
    );
  }
}
