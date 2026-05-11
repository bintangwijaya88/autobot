package email

import (
	"bytes"
	"fmt"
	"text/template"
)

// TemplateInfo describes an email template for the admin UI.
type TemplateInfo struct {
	ID          string                 `json:"id"`
	Name        string                 `json:"name"`
	Description string                 `json:"description"`
	Subject     string                 `json:"subject"`
	SampleVars  map[string]interface{} `json:"sample_vars"`
}

// AllTemplates is the registry of every supported email template.
var AllTemplates = []TemplateInfo{
	{
		ID:          "verification",
		Name:        "Email Verifikasi",
		Description: "Kode OTP 6-digit untuk verifikasi email saat pendaftaran",
		Subject:     "Kode Verifikasi Autobot: {{.Code}}",
		SampleVars:  map[string]interface{}{"Name": "Bintang", "Code": "123456"},
	},
	{
		ID:          "welcome",
		Name:        "Selamat Datang",
		Description: "Email sambutan setelah email terverifikasi, berisi access key",
		Subject:     "Selamat datang di Autobot, {{.Name}}!",
		SampleVars:  map[string]interface{}{"Name": "Bintang", "AccessKey": "a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6"},
	},
	{
		ID:          "order_confirm",
		Name:        "Konfirmasi Order",
		Description: "Konfirmasi penerimaan order atau permintaan produk dari visitor",
		Subject:     "Order Diterima — {{.ProductName}}",
		SampleVars:  map[string]interface{}{"Name": "Bintang", "ProductName": "WaBlastApp Pro", "OrderType": "order", "Notes": "Butuh integrasi dengan CRM"},
	},
	{
		ID:          "consultation",
		Name:        "Konfirmasi Konsultasi",
		Description: "Pemberitahuan jadwal konsultasi yang telah diterima",
		Subject:     "Konsultasi Terjadwal — {{.Date}}",
		SampleVars:  map[string]interface{}{"Name": "Bintang", "Date": "Senin, 12 Mei 2026", "Time": "14:00 WIB", "Medium": "Google Meet"},
	},
	{
		ID:          "follow_up",
		Name:        "Follow-Up Chat",
		Description: "Follow-up otomatis 24 jam setelah sesi chat berakhir",
		Subject:     "Ada yang bisa kami bantu, {{.Name}}?",
		SampleVars:  map[string]interface{}{"Name": "Bintang", "TopicSummary": "chatbot WhatsApp dan broadcast otomatis"},
	},
	{
		ID:          "proposal",
		Name:        "Pengiriman Proposal",
		Description: "Email pengiriman dokumen proposal layanan Autobot",
		Subject:     "Proposal Layanan — {{.DocumentTitle}}",
		SampleVars:  map[string]interface{}{"Name": "Bintang", "CompanyName": "PT Maju Bersama", "DocumentTitle": "Proposal Implementasi Chatbot WhatsApp", "DownloadURL": "https://autobot.co.id/proposals/sample.pdf"},
	},
	{
		ID:          "newsletter",
		Name:        "Newsletter / Update",
		Description: "Update produk, fitur baru, atau promo kepada subscriber",
		Subject:     "{{.Title}}",
		SampleVars:  map[string]interface{}{"Title": "Update Terbaru WaBlastApp v2.5", "Highlight1": "AI multi-provider: OpenAI, Claude, Gemini", "Highlight2": "Modul HR/Payroll baru tersedia", "Highlight3": "Dashboard analytics real-time", "CTAURL": "https://autobot.co.id", "CTALabel": "Lihat Detail"},
	},
}

// Render executes a named template with the given variables and returns
// (subject, htmlBody, error).
func Render(id string, vars map[string]interface{}) (string, string, error) {
	info := findTemplate(id)
	if info == nil {
		return "", "", fmt.Errorf("email template %q not found", id)
	}

	// Render subject
	subj, err := renderString(info.Subject, vars)
	if err != nil {
		subj = info.Name
	}

	// Render body
	bodyTmpl, ok := bodyTemplates[id]
	if !ok {
		return "", "", fmt.Errorf("body template %q not found", id)
	}
	body, err := renderString(bodyTmpl, vars)
	if err != nil {
		return "", "", fmt.Errorf("render body: %w", err)
	}

	html, err := renderString(baseLayout, map[string]interface{}{"Content": body, "Subject": subj})
	if err != nil {
		return "", "", fmt.Errorf("render layout: %w", err)
	}

	return subj, html, nil
}

func findTemplate(id string) *TemplateInfo {
	for i := range AllTemplates {
		if AllTemplates[i].ID == id {
			return &AllTemplates[i]
		}
	}
	return nil
}

func renderString(tmplStr string, vars map[string]interface{}) (string, error) {
	t, err := template.New("").Parse(tmplStr)
	if err != nil {
		return "", err
	}
	var buf bytes.Buffer
	if err := t.Execute(&buf, vars); err != nil {
		return "", err
	}
	return buf.String(), nil
}

// ─── Base layout ──────────────────────────────────────────────────────────────

const baseLayout = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>{{.Subject}}</title>
</head>
<body style="margin:0;padding:40px 20px;background:#0e0e0e;font-family:'Helvetica Neue',Arial,sans-serif;color:#f0f0f0;">
  <div style="max-width:540px;margin:0 auto;">

    <!-- Logo -->
    <div style="text-align:center;margin-bottom:28px;">
      <a href="https://autobot.co.id" style="text-decoration:none;display:inline-flex;align-items:center;gap:10px;">
        <div style="width:38px;height:38px;background:#f0f0f0;border-radius:11px;display:inline-flex;align-items:center;justify-content:center;">
          <span style="color:#111;font-weight:800;font-size:17px;line-height:1;">A</span>
        </div>
        <span style="color:#f0f0f0;font-weight:700;font-size:17px;letter-spacing:-0.5px;">Autobot</span>
      </a>
    </div>

    <!-- Card -->
    <div style="background:#171717;border-radius:16px;padding:40px 40px 36px;border:1px solid rgba(255,255,255,0.08);">
      {{.Content}}
    </div>

    <!-- Footer -->
    <div style="text-align:center;margin-top:28px;">
      <p style="color:#3a3a3a;font-size:12px;line-height:1.7;margin:0;">
        Email ini dikirim oleh
        <a href="https://autobot.co.id" style="color:#555;text-decoration:none;">CV Autobot Wijaya Solution</a><br>
        Jakarta · <a href="mailto:bintang@autobot.co.id" style="color:#555;text-decoration:none;">bintang@autobot.co.id</a>
      </p>
    </div>

  </div>
</body>
</html>`

// ─── Body templates ───────────────────────────────────────────────────────────

var bodyTemplates = map[string]string{
	"verification": `
<div style="margin-bottom:24px;">
  <h2 style="margin:0 0 10px;font-size:20px;font-weight:700;color:#f0f0f0;">Verifikasi Email Anda</h2>
  <p style="color:#888;margin:0;font-size:14px;line-height:1.7;">
    Halo <strong style="color:#f0f0f0;">{{.Name}}</strong>! Gunakan kode berikut untuk menyelesaikan pendaftaran akun Autobot Anda.
  </p>
</div>
<div style="background:#111;border-radius:12px;padding:22px;text-align:center;margin-bottom:28px;border:1px solid rgba(255,255,255,0.06);">
  <span style="font-size:38px;font-weight:800;letter-spacing:14px;color:#f0f0f0;font-variant-numeric:tabular-nums;">{{.Code}}</span>
</div>
<p style="color:#464646;font-size:12px;margin:0;line-height:1.6;">
  Kode berlaku selama <strong style="color:#666;">10 menit</strong>. Jangan bagikan kode ini kepada siapapun.
</p>`,

	"welcome": `
<div style="margin-bottom:28px;">
  <div style="width:44px;height:44px;background:rgba(99,102,241,0.15);border-radius:12px;display:inline-flex;align-items:center;justify-content:center;margin-bottom:20px;border:1px solid rgba(99,102,241,0.25);">
    <span style="font-size:20px;">🎉</span>
  </div>
  <h2 style="margin:0 0 10px;font-size:20px;font-weight:700;color:#f0f0f0;">Selamat datang, {{.Name}}!</h2>
  <p style="color:#888;margin:0;font-size:14px;line-height:1.7;">
    Akun Autobot Anda sudah aktif. Simpan <strong style="color:#f0f0f0;">Access Key</strong> di bawah ini — Anda membutuhkannya untuk melanjutkan sesi chat.
  </p>
</div>
<div style="background:#111;border-radius:12px;padding:16px 20px;margin-bottom:28px;border:1px solid rgba(255,255,255,0.06);">
  <p style="color:#555;font-size:11px;margin:0 0 6px;text-transform:uppercase;letter-spacing:1px;">Access Key</p>
  <code style="font-size:13px;color:#a5b4fc;letter-spacing:1px;word-break:break-all;">{{.AccessKey}}</code>
</div>
<a href="https://autobot.co.id/?session={{.AccessKey}}" style="display:inline-block;background:#f0f0f0;color:#111;text-decoration:none;padding:12px 28px;border-radius:10px;font-weight:600;font-size:14px;">
  Lanjut ke Chat →
</a>`,

	"order_confirm": `
<div style="margin-bottom:24px;">
  <div style="width:44px;height:44px;background:rgba(34,197,94,0.12);border-radius:12px;display:inline-flex;align-items:center;justify-content:center;margin-bottom:20px;border:1px solid rgba(34,197,94,0.22);">
    <span style="font-size:20px;">✅</span>
  </div>
  <h2 style="margin:0 0 10px;font-size:20px;font-weight:700;color:#f0f0f0;">Order Diterima!</h2>
  <p style="color:#888;margin:0;font-size:14px;line-height:1.7;">
    Halo <strong style="color:#f0f0f0;">{{.Name}}</strong>, kami telah menerima permintaan Anda. Tim kami akan menghubungi Anda dalam <strong style="color:#f0f0f0;">1×24 jam</strong>.
  </p>
</div>
<div style="background:#111;border-radius:12px;padding:16px 20px;margin-bottom:28px;border:1px solid rgba(255,255,255,0.06);">
  <p style="color:#555;font-size:11px;margin:0 0 6px;text-transform:uppercase;letter-spacing:1px;">Produk</p>
  <p style="color:#f0f0f0;margin:0 0 12px;font-weight:600;">{{.ProductName}}</p>
  {{if .Notes}}
  <p style="color:#555;font-size:11px;margin:0 0 6px;text-transform:uppercase;letter-spacing:1px;">Catatan</p>
  <p style="color:#888;margin:0;font-size:13px;">{{.Notes}}</p>
  {{end}}
</div>
<p style="color:#555;font-size:13px;margin:0;">
  Ada pertanyaan? Hubungi kami di
  <a href="mailto:bintang@autobot.co.id" style="color:#a5b4fc;text-decoration:none;">bintang@autobot.co.id</a>
  atau WhatsApp kami langsung.
</p>`,

	"consultation": `
<div style="margin-bottom:24px;">
  <div style="width:44px;height:44px;background:rgba(251,146,60,0.12);border-radius:12px;display:inline-flex;align-items:center;justify-content:center;margin-bottom:20px;border:1px solid rgba(251,146,60,0.22);">
    <span style="font-size:20px;">📅</span>
  </div>
  <h2 style="margin:0 0 10px;font-size:20px;font-weight:700;color:#f0f0f0;">Konsultasi Terjadwal</h2>
  <p style="color:#888;margin:0;font-size:14px;line-height:1.7;">
    Halo <strong style="color:#f0f0f0;">{{.Name}}</strong>, sesi konsultasi Anda dengan tim Autobot telah dikonfirmasi.
  </p>
</div>
<div style="background:#111;border-radius:12px;padding:20px;margin-bottom:28px;border:1px solid rgba(255,255,255,0.06);">
  <table style="width:100%;border-collapse:collapse;">
    <tr>
      <td style="color:#555;font-size:12px;padding:6px 0;width:90px;">Tanggal</td>
      <td style="color:#f0f0f0;font-size:14px;font-weight:600;padding:6px 0;">{{.Date}}</td>
    </tr>
    <tr>
      <td style="color:#555;font-size:12px;padding:6px 0;">Waktu</td>
      <td style="color:#f0f0f0;font-size:14px;font-weight:600;padding:6px 0;">{{.Time}}</td>
    </tr>
    <tr>
      <td style="color:#555;font-size:12px;padding:6px 0;">Medium</td>
      <td style="color:#f0f0f0;font-size:14px;font-weight:600;padding:6px 0;">{{.Medium}}</td>
    </tr>
  </table>
</div>
<p style="color:#555;font-size:13px;margin:0;">
  Perlu reschedule? Balas email ini atau hubungi
  <a href="mailto:bintang@autobot.co.id" style="color:#a5b4fc;text-decoration:none;">bintang@autobot.co.id</a>.
</p>`,

	"follow_up": `
<div style="margin-bottom:24px;">
  <h2 style="margin:0 0 10px;font-size:20px;font-weight:700;color:#f0f0f0;">Ada yang bisa kami bantu?</h2>
  <p style="color:#888;margin:0;font-size:14px;line-height:1.7;">
    Halo <strong style="color:#f0f0f0;">{{.Name}}</strong>! Kami melihat Anda sempat bertanya tentang
    <strong style="color:#f0f0f0;">{{.TopicSummary}}</strong>.
    Tim kami siap membantu Anda lebih lanjut.
  </p>
</div>
<div style="margin-bottom:28px;">
  <a href="https://autobot.co.id" style="display:inline-block;background:#f0f0f0;color:#111;text-decoration:none;padding:12px 28px;border-radius:10px;font-weight:600;font-size:14px;margin-right:12px;">
    Lanjut Chat →
  </a>
  <a href="https://autobot.co.id/contact" style="display:inline-block;color:#888;text-decoration:none;padding:12px 0;font-size:14px;">
    Jadwalkan Konsultasi
  </a>
</div>
<p style="color:#3a3a3a;font-size:12px;margin:0;line-height:1.7;">
  Tidak ingin menerima follow-up? Anda bisa mengabaikan email ini.
</p>`,

	"proposal": `
<div style="margin-bottom:24px;">
  <div style="width:44px;height:44px;background:rgba(99,102,241,0.12);border-radius:12px;display:inline-flex;align-items:center;justify-content:center;margin-bottom:20px;border:1px solid rgba(99,102,241,0.22);">
    <span style="font-size:20px;">📄</span>
  </div>
  <h2 style="margin:0 0 10px;font-size:20px;font-weight:700;color:#f0f0f0;">Proposal Siap Diunduh</h2>
  <p style="color:#888;margin:0;font-size:14px;line-height:1.7;">
    Halo <strong style="color:#f0f0f0;">{{.Name}}</strong>
    {{if .CompanyName}}dari <strong style="color:#f0f0f0;">{{.CompanyName}}</strong>{{end}},
    proposal layanan Autobot telah kami siapkan untuk Anda.
  </p>
</div>
<div style="background:#111;border-radius:12px;padding:16px 20px;margin-bottom:28px;border:1px solid rgba(255,255,255,0.06);">
  <p style="color:#555;font-size:11px;margin:0 0 6px;text-transform:uppercase;letter-spacing:1px;">Dokumen</p>
  <p style="color:#f0f0f0;margin:0;font-weight:600;">{{.DocumentTitle}}</p>
</div>
<a href="{{.DownloadURL}}" style="display:inline-block;background:#f0f0f0;color:#111;text-decoration:none;padding:12px 28px;border-radius:10px;font-weight:600;font-size:14px;margin-bottom:24px;">
  Unduh Proposal →
</a>
<p style="color:#555;font-size:13px;margin:0;line-height:1.7;">
  Ada pertanyaan setelah membaca proposal? Balas email ini atau hubungi
  <a href="mailto:bintang@autobot.co.id" style="color:#a5b4fc;text-decoration:none;">bintang@autobot.co.id</a>.
</p>`,

	"newsletter": `
<div style="margin-bottom:28px;">
  <h2 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#f0f0f0;line-height:1.3;">{{.Title}}</h2>
  <p style="color:#888;margin:0;font-size:14px;line-height:1.7;">
    Update terbaru dari tim Autobot — fitur baru, peningkatan, dan kabar produk untuk Anda.
  </p>
</div>
<div style="margin-bottom:28px;">
  {{if .Highlight1}}
  <div style="display:flex;gap:12px;margin-bottom:14px;align-items:flex-start;">
    <div style="width:6px;height:6px;background:#a5b4fc;border-radius:50%;margin-top:8px;flex-shrink:0;"></div>
    <p style="color:#d4d4d4;margin:0;font-size:14px;line-height:1.6;">{{.Highlight1}}</p>
  </div>
  {{end}}
  {{if .Highlight2}}
  <div style="display:flex;gap:12px;margin-bottom:14px;align-items:flex-start;">
    <div style="width:6px;height:6px;background:#a5b4fc;border-radius:50%;margin-top:8px;flex-shrink:0;"></div>
    <p style="color:#d4d4d4;margin:0;font-size:14px;line-height:1.6;">{{.Highlight2}}</p>
  </div>
  {{end}}
  {{if .Highlight3}}
  <div style="display:flex;gap:12px;margin-bottom:14px;align-items:flex-start;">
    <div style="width:6px;height:6px;background:#a5b4fc;border-radius:50%;margin-top:8px;flex-shrink:0;"></div>
    <p style="color:#d4d4d4;margin:0;font-size:14px;line-height:1.6;">{{.Highlight3}}</p>
  </div>
  {{end}}
</div>
<a href="{{.CTAURL}}" style="display:inline-block;background:#f0f0f0;color:#111;text-decoration:none;padding:12px 28px;border-radius:10px;font-weight:600;font-size:14px;">
  {{.CTALabel}} →
</a>`,
}
