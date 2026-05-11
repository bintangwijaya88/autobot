package email

import (
	"fmt"
	"log"
	"net/smtp"
	"strings"
)

type Mailer struct {
	host  string
	port  string
	user  string
	pass  string
	from  string
	debug bool
}

func New(host, port, user, pass, from string, debug bool) *Mailer {
	return &Mailer{host: host, port: port, user: user, pass: pass, from: from, debug: debug}
}

func (m *Mailer) SendVerification(toEmail, name, code string) error {
	subject, body, err := Render("verification", map[string]interface{}{"Name": name, "Code": code})
	if err != nil {
		// Fallback to legacy inline HTML
		subject = fmt.Sprintf("Kode Verifikasi Autobot: %s", code)
		body = verificationHTML(name, code)
	}
	return m.Send(toEmail, subject, body)
}

func (m *Mailer) SendTemplate(toEmail, templateID string, vars map[string]interface{}) error {
	subject, body, err := Render(templateID, vars)
	if err != nil {
		return fmt.Errorf("render template %q: %w", templateID, err)
	}
	return m.Send(toEmail, subject, body)
}

func (m *Mailer) Send(to, subject, htmlBody string) error {
	if m.debug {
		log.Printf("[EMAIL DEBUG] To: %s | Subject: %s | Body: %s", to, subject, stripHTML(htmlBody))
		return nil
	}

	auth := smtp.PlainAuth("", m.user, m.pass, m.host)
	msg := strings.Join([]string{
		fmt.Sprintf("From: %s", m.from),
		fmt.Sprintf("To: %s", to),
		fmt.Sprintf("Subject: %s", subject),
		"MIME-Version: 1.0",
		"Content-Type: text/html; charset=UTF-8",
		"",
		htmlBody,
	}, "\r\n")

	addr := fmt.Sprintf("%s:%s", m.host, m.port)
	return smtp.SendMail(addr, auth, m.user, []string{to}, []byte(msg))
}

func verificationHTML(name, code string) string {
	return fmt.Sprintf(`<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="background:#111;color:#f0f0f0;font-family:'Plus Jakarta Sans',sans-serif;padding:40px 0;">
  <div style="max-width:480px;margin:0 auto;background:#171717;border-radius:16px;padding:40px;border:1px solid rgba(255,255,255,0.08);">
    <div style="margin-bottom:24px;">
      <div style="width:40px;height:40px;background:#f0f0f0;border-radius:10px;display:inline-flex;align-items:center;justify-content:center;">
        <span style="color:#111;font-weight:700;font-size:16px;">A</span>
      </div>
    </div>
    <h2 style="margin:0 0 8px;font-size:20px;font-weight:700;color:#f0f0f0;">Verifikasi Email Anda</h2>
    <p style="color:#838383;margin:0 0 28px;font-size:14px;line-height:1.6;">
      Halo <strong style="color:#f0f0f0;">%s</strong>! Gunakan kode berikut untuk menyelesaikan pendaftaran akun Autobot Anda.
    </p>
    <div style="background:#111;border-radius:12px;padding:20px;text-align:center;margin-bottom:28px;border:1px solid rgba(255,255,255,0.06);">
      <span style="font-size:36px;font-weight:800;letter-spacing:12px;color:#f0f0f0;">%s</span>
    </div>
    <p style="color:#464646;font-size:12px;margin:0;">
      Kode berlaku selama <strong>10 menit</strong>. Jangan bagikan ke siapapun.
    </p>
  </div>
</body>
</html>`, name, code)
}

func stripHTML(s string) string {
	var result strings.Builder
	inTag := false
	for _, r := range s {
		if r == '<' { inTag = true; continue }
		if r == '>' { inTag = false; continue }
		if !inTag { result.WriteRune(r) }
	}
	return strings.TrimSpace(result.String())
}
