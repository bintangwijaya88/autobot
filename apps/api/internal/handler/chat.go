package handler

import (
	"context"
	"encoding/json"
	"regexp"
	"strings"
	"unicode"

	"github.com/autobot-wijaya/autobot-api/internal/bot"
	"github.com/autobot-wijaya/autobot-api/internal/email"
	"github.com/autobot-wijaya/autobot-api/internal/metrics"
	"github.com/autobot-wijaya/autobot-api/internal/model"
	"github.com/autobot-wijaya/autobot-api/internal/payment"
	"github.com/autobot-wijaya/autobot-api/internal/repository"
	"github.com/autobot-wijaya/autobot-api/internal/ws"
	"github.com/gofiber/fiber/v2"
	fws "github.com/gofiber/websocket/v2"
	"github.com/google/uuid"
	"go.uber.org/zap"
)

var reEmail     = regexp.MustCompile(`^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$`)
var reAccessKey = regexp.MustCompile(`^[0-9a-f]{32}$`)
var reCode      = regexp.MustCompile(`^\d{6}$`)

type ChatHandler struct {
	hub         *ws.Hub
	chatRepo    *repository.ChatRepository
	productRepo *repository.ProductRepository
	userRepo    *repository.UserRepo
	engine      *bot.Engine
	mailer      *email.Mailer
	mt          *payment.Midtrans
	log         *zap.Logger
}

func NewChatHandler(
	hub *ws.Hub,
	chatRepo *repository.ChatRepository,
	productRepo *repository.ProductRepository,
	userRepo *repository.UserRepo,
	engine *bot.Engine,
	mailer *email.Mailer,
	mt *payment.Midtrans,
	log *zap.Logger,
) *ChatHandler {
	return &ChatHandler{hub: hub, chatRepo: chatRepo, productRepo: productRepo,
		userRepo: userRepo, engine: engine, mailer: mailer, mt: mt, log: log}
}

// ─── REST ────────────────────────────────────────────────────────────────────

func (h *ChatHandler) CreateSession(c *fiber.Ctx) error {
	visitorID := c.Get("X-Visitor-ID")
	if visitorID == "" {
		visitorID = uuid.New().String()
	}

	metadata := map[string]interface{}{
		"user_agent": c.Get("User-Agent"),
		"ip":         c.IP(),
		"referer":    c.Get("Referer"),
		"flow_state": bot.FlowNew,
	}

	session, err := h.chatRepo.CreateSession(c.Context(), visitorID, "web", metadata)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "failed to create session"})
	}
	metrics.ChatSessionsTotal.Inc()

	resp := fiber.Map{"session_id": session.ID, "visitor_id": visitorID}

	// Returning user via access key header
	if key := c.Get("X-Access-Key"); key != "" && reAccessKey.MatchString(key) {
		if user, err := h.userRepo.FindByAccessKey(c.Context(), key); err == nil {
			meta := bot.FlowMeta{State: bot.FlowChat, VisitorName: user.Name, UserID: user.ID}
			h.chatRepo.UpdateSessionMeta(c.Context(), session.ID, meta.Marshal())
			h.chatRepo.UpdateSessionVisitor(c.Context(), session.ID, user.Name, user.Email)
			resp["returning_user"] = true
			resp["user_name"] = user.Name
			resp["access_key"] = key
		}
	}
	return c.JSON(resp)
}

// ─── WebSocket ───────────────────────────────────────────────────────────────

func (h *ChatHandler) HandleWebSocket(c *fws.Conn) {
	sessionID := c.Query("session_id")
	if sessionID == "" {
		c.WriteMessage(fws.CloseMessage, []byte("missing session_id"))
		return
	}

	client := ws.NewClient(sessionID, c, h.hub, h.log)
	h.hub.Register(client)
	defer h.hub.Unregister(client)
	go client.WritePump()

	ctx := context.Background()
	h.log.Info("ws: fetching session", zap.String("session_id", sessionID))
	session, err := h.chatRepo.GetSession(ctx, sessionID)
	if err != nil {
		h.log.Error("ws: get session failed", zap.String("session_id", sessionID), zap.Error(err))
		client.SendJSON(model.WSMessage{Type: "error", Error: "session not found"})
		return
	}
	h.log.Info("ws: session found", zap.String("session_id", sessionID), zap.String("state", string(session.Metadata)))

	meta := bot.ParseFlowMeta(session.Metadata)
	botCtx := &bot.SessionContext{SessionID: sessionID}

	// Only greet on a brand-new session; reconnects (refresh) are silent
	if meta.State == bot.FlowNew {
		client.SendJSON(model.WSMessage{
			Type:    "session_init",
			Role:    "assistant",
			Content: "Halo! 👋 Saya **Autobot AI**, asisten virtual CV Autobot Wijaya Solution.\n\nTanyakan apa saja — produk, layanan, chatbot, automasi, atau kebutuhan bisnis Anda!",
		})
	}

	for {
		_, msgBytes, err := c.ReadMessage()
		if err != nil {
			break
		}
		metrics.WSMessagesTotal.WithLabelValues("inbound").Inc()
		var wsMsg model.WSMessage
		if err := json.Unmarshal(msgBytes, &wsMsg); err != nil {
			continue
		}
		switch wsMsg.Type {
		case "message":
			h.dispatch(client, botCtx, &meta, sessionID, wsMsg.Content)
		case "register":
			h.handleRegister(client, &meta, sessionID, wsMsg.Data)
		case "form_submit":
			h.handleFormSubmit(client, sessionID, wsMsg)
		}
	}
}

// ─── Main dispatcher ─────────────────────────────────────────────────────────

func (h *ChatHandler) dispatch(client *ws.Client, botCtx *bot.SessionContext, meta *bot.FlowMeta, sessionID, content string) {
	ctx := context.Background()
	trimmed := strings.TrimSpace(content)

	// Always check for access key paste first
	if reAccessKey.MatchString(trimmed) {
		h.doResumeByKey(ctx, client, meta, sessionID, trimmed)
		return
	}

	h.chatRepo.SaveMessage(ctx, sessionID, "user", content, nil, "")

	// ── STRICT: code verification — no AI, just process ──────────────────────
	if meta.State == bot.FlowAwaitingCode {
		h.doVerifyCode(ctx, client, meta, sessionID, trimmed)
		return
	}

	// ── For all other states: stream AI response ─────────────────────────────

	flowAdvanced := h.tryAdvanceFlow(ctx, client, meta, sessionID, trimmed)

	// doSendCode / doResumeByKey already replied — no AI response needed
	if flowAdvanced && meta.State == bot.FlowAwaitingCode {
		return
	}

	// FlowOffering: "buat akun" keyword → show registration form directly
	if meta.State == bot.FlowOffering && !flowAdvanced {
		lower := strings.ToLower(trimmed)
		if strings.Contains(lower, "akun") || strings.Contains(lower, "daftar") || strings.Contains(lower, "register") {
			offerRich := mustJSON(map[string]interface{}{"type": "account_offer", "data": map[string]interface{}{}})
			client.SendJSON(model.WSMessage{
				Type:        "message",
				Role:        "assistant",
				Content:     "Isi form berikut untuk buat akun gratis ya! 😊",
				RichContent: offerRich,
			})
			h.chatRepo.SaveMessage(ctx, sessionID, "assistant", "Isi form berikut untuk buat akun gratis!", nil, "flow_offer")
			return
		}
	}

	// stream_start fires immediately → typing dots vanish right away
	msgID := uuid.New().String()
	client.SendJSON(model.WSMessage{Type: "stream_start", MessageID: msgID, Role: "assistant"})

	// Determine flow suffix before the AI call (state may have changed in tryAdvanceFlow)
	suffix := ""
	if !flowAdvanced || (meta.State != bot.FlowAwaitingEmail && meta.State != bot.FlowAwaitingCode && meta.State != bot.FlowChat) {
		suffix = h.flowSuffix(meta)
	}

	// Stream AI tokens directly to the WS client
	aiResp, _ := h.engine.StreamProcessMessage(ctx, botCtx, content, func(token string) {
		client.SendJSON(model.WSMessage{Type: "stream_token", MessageID: msgID, Token: token})
	})

	// Append flow suffix as a final token so it appears after the AI text
	if suffix != "" {
		client.SendJSON(model.WSMessage{Type: "stream_token", MessageID: msgID, Token: suffix})
		aiResp.Content += suffix
	}

	var richJSON json.RawMessage
	switch aiResp.Intent {
	case bot.IntentDocumentRequest:
		if aiResp.Content != "" {
			richJSON = mustJSON(map[string]interface{}{
				"type": "document",
				"data": map[string]interface{}{
					"id": "doc-" + msgID, "title": extractDocTitle(aiResp.Content), "content": aiResp.Content,
				},
			})
		}
	case bot.IntentDiagramRequest:
		if aiResp.Content != "" {
			richJSON = mustJSON(map[string]interface{}{
				"type": "mermaid",
				"data": map[string]interface{}{
					"id": "diagram-" + msgID, "title": extractDocTitle(aiResp.Content), "code": extractMermaidCode(aiResp.Content),
				},
			})
		}
	case bot.IntentExcelRequest:
		if aiResp.Content != "" {
			headers, rows := extractMarkdownTable(aiResp.Content)
			richJSON = mustJSON(map[string]interface{}{
				"type": "excel",
				"data": map[string]interface{}{
					"id": "excel-" + msgID, "title": extractDocTitle(aiResp.Content), "headers": headers, "rows": rows,
				},
			})
		}
	case bot.IntentPptRequest:
		if aiResp.Content != "" {
			richJSON = mustJSON(map[string]interface{}{
				"type": "ppt",
				"data": map[string]interface{}{
					"id": "ppt-" + msgID, "title": extractDocTitle(aiResp.Content), "slides": extractSlides(aiResp.Content),
				},
			})
		}
	case bot.IntentHtmlRequest:
		if aiResp.Content != "" {
			richJSON = mustJSON(map[string]interface{}{
				"type": "html",
				"data": map[string]interface{}{
					"id": "html-" + msgID, "title": extractDocTitle(aiResp.Content), "html": extractHTMLCode(aiResp.Content),
				},
			})
		}
	default:
		if aiResp.RichContent != nil {
			richJSON, _ = json.Marshal(aiResp.RichContent)
		}
	}
	if flowAdvanced && meta.State == bot.FlowOffering {
		richJSON = mustJSON(map[string]interface{}{
			"type": "account_offer",
			"data": map[string]interface{}{},
		})
	}

	suggestions := aiResp.Suggestions
	if meta.State == bot.FlowOffering {
		suggestions = append([]model.SuggestedPrompt{
			{Text: "Buat Akun Gratis", Icon: "key", Category: "account"},
			{Text: "Lanjut sebagai Tamu", Icon: "user", Category: "guest"},
		}, suggestions...)
	}

	client.SendJSON(model.WSMessage{
		Type:        "stream_end",
		MessageID:   msgID,
		RichContent: richJSON,
		Suggestions: suggestions,
	})
	h.chatRepo.SaveMessage(ctx, sessionID, "assistant", aiResp.Content, aiResp.RichContent, aiResp.Intent)
}

// tryAdvanceFlow detects if the user's message answers the current flow step.
// Returns true if the flow state was advanced (e.g., name detected, account choice made).
// Does NOT send any messages — that's done by the caller.
func (h *ChatHandler) tryAdvanceFlow(ctx context.Context, client *ws.Client, meta *bot.FlowMeta, sessionID, trimmed string) bool {
	lower := strings.ToLower(trimmed)
	isSkip := strings.Contains(lower, "lewati") || strings.Contains(lower, "skip") ||
		strings.Contains(lower, "nanti") || strings.Contains(lower, "tamu") ||
		trimmed == "continue_guest"

	switch meta.State {

	case bot.FlowNew:
		// Email provided on first message → create account immediately
		if reEmail.MatchString(trimmed) {
			if meta.VisitorName == "" {
				meta.VisitorName = strings.SplitN(trimmed, "@", 2)[0]
			}
			h.doSendCode(ctx, client, meta, sessionID, trimmed)
			return true
		}
		if isSkip {
			meta.State = bot.FlowChat
			h.chatRepo.UpdateSessionMeta(ctx, sessionID, meta.Marshal())
			return true
		}
		// First real message: advance to offering so account CTA appears
		meta.State = bot.FlowOffering
		h.chatRepo.UpdateSessionMeta(ctx, sessionID, meta.Marshal())
		return true

	case bot.FlowOffering:
		if reEmail.MatchString(trimmed) {
			if meta.VisitorName == "" {
				meta.VisitorName = strings.SplitN(trimmed, "@", 2)[0]
			}
			h.doSendCode(ctx, client, meta, sessionID, trimmed)
			return true
		}
		if isSkip {
			meta.State = bot.FlowChat
			h.chatRepo.UpdateSessionMeta(ctx, sessionID, meta.Marshal())
			return true
		}

	case bot.FlowAwaitingEmail:
		if reEmail.MatchString(trimmed) {
			h.doSendCode(ctx, client, meta, sessionID, trimmed)
			return true
		}
	}
	return false
}

// flowSuffix returns the flow prompt to append after AI response.
func (h *ChatHandler) flowSuffix(meta *bot.FlowMeta) string {
	// FlowOffering: account_offer rich component handles the UI — no text suffix needed
	return ""
}

// ─── Flow action handlers ─────────────────────────────────────────────────────

func (h *ChatHandler) doSendCode(ctx context.Context, client *ws.Client, meta *bot.FlowMeta, sessionID, emailAddr string) {
	if meta.VisitorName == "" {
		meta.VisitorName = strings.SplitN(emailAddr, "@", 2)[0]
	}
	userID, code, err := h.userRepo.CreatePendingUser(ctx, meta.VisitorName, emailAddr)
	if err != nil {
		h.log.Error("create pending user", zap.Error(err))
		client.SendJSON(model.WSMessage{
			Type:    "message",
			Role:    "assistant",
			Content: "Ada kendala teknis saat mendaftar. Coba lagi atau lanjut sebagai tamu.",
		})
		return
	}

	emailErr := h.mailer.SendVerification(emailAddr, meta.VisitorName, code)
	if emailErr != nil {
		h.log.Error("send verification email", zap.String("email", emailAddr), zap.Error(emailErr))
	}

	meta.PendingEmail = emailAddr
	meta.PendingUserID = userID
	meta.State = bot.FlowAwaitingCode
	h.chatRepo.UpdateSessionMeta(ctx, sessionID, meta.Marshal())

	var msg string
	masked := maskEmail(emailAddr)
	if emailErr != nil {
		msg = "⚠️ Akun berhasil dibuat, tapi pengiriman email ke **" + masked + "** gagal saat ini.\n\n" +
			"Silakan hubungi tim kami atau coba lagi nanti. Kode tetap aktif — masukkan jika kamu sudah menerimanya."
	} else {
		msg = "📧 Kode verifikasi **6 digit** sudah dikirim ke **" + masked + "**\n\nCek inbox (atau folder spam), lalu masukkan kodenya di sini:"
	}
	client.SendJSON(model.WSMessage{Type: "message", Role: "assistant", Content: msg})
	h.chatRepo.SaveMessage(ctx, sessionID, "assistant", msg, nil, "flow_code_sent")
}

func (h *ChatHandler) doVerifyCode(ctx context.Context, client *ws.Client, meta *bot.FlowMeta, sessionID, input string) {
	// Resend request
	lower := strings.ToLower(input)
	if strings.Contains(lower, "kirim ulang") || lower == "resend" {
		if newCode, err := h.userRepo.ResendCode(ctx, meta.PendingUserID); err == nil {
			h.mailer.SendVerification(meta.PendingEmail, meta.VisitorName, newCode)
		}
		client.SendJSON(model.WSMessage{
			Type:    "message",
			Role:    "assistant",
			Content: "✅ Kode baru sudah dikirim ke **" + maskEmail(meta.PendingEmail) + "**",
		})
		return
	}

	if !reCode.MatchString(input) {
		client.SendJSON(model.WSMessage{
			Type:    "message",
			Role:    "assistant",
			Content: "Masukkan kode **6 digit** yang dikirim ke email Anda. Atau ketik **kirim ulang** untuk kode baru.",
		})
		return
	}

	accessKey, err := h.userRepo.VerifyCode(ctx, meta.PendingUserID, input)
	if err != nil {
		msg := "❌ Kode salah. Coba lagi."
		if err.Error() == "code expired" {
			msg = "⏰ Kode sudah expired. Ketik **kirim ulang** untuk kode baru."
		}
		client.SendJSON(model.WSMessage{Type: "message", Role: "assistant", Content: msg})
		return
	}

	prevEmail := meta.PendingEmail
	name := meta.VisitorName
	meta.State = bot.FlowChat
	meta.UserID = meta.PendingUserID
	meta.PendingUserID = ""
	meta.PendingEmail = ""
	h.chatRepo.UpdateSessionMeta(ctx, sessionID, meta.Marshal())
	h.chatRepo.UpdateSessionVisitor(ctx, sessionID, name, prevEmail)

	msg := "✅ Email terverifikasi! Akun **" + name + "** berhasil dibuat.\n\n" +
		"🔑 **Access Key Anda:**\n```\n" + accessKey + "\n```\n\n" +
		"Simpan key ini! Lain kali paste di chat untuk melanjutkan sesi.\n\n" +
		"Sekarang, ada yang bisa saya bantu? 😊"

	client.SendJSON(model.WSMessage{
		Type:      "user_authenticated",
		UserName:  name,
		AccessKey: accessKey,
	})
	client.SendJSON(model.WSMessage{
		Type:        "message",
		Role:        "assistant",
		Content:     msg,
		Suggestions: bot.GetSuggestions(""),
	})
	h.chatRepo.SaveMessage(ctx, sessionID, "assistant", msg, nil, "flow_verified")
}

func (h *ChatHandler) doResumeByKey(ctx context.Context, client *ws.Client, meta *bot.FlowMeta, sessionID, key string) {
	user, err := h.userRepo.FindByAccessKey(ctx, key)
	if err != nil {
		client.SendJSON(model.WSMessage{
			Type:    "message",
			Role:    "assistant",
			Content: "❌ Access key tidak dikenali. Pastikan Anda menempel key yang benar (32 karakter).",
		})
		return
	}

	meta.State = bot.FlowChat
	meta.VisitorName = user.Name
	meta.UserID = user.ID
	h.chatRepo.UpdateSessionMeta(ctx, sessionID, meta.Marshal())
	h.chatRepo.UpdateSessionVisitor(ctx, sessionID, user.Name, user.Email)

	// Tell frontend to store key in URL and update sidebar
	client.SendJSON(model.WSMessage{
		Type:      "user_authenticated",
		UserName:  user.Name,
		AccessKey: key,
	})
	client.SendJSON(model.WSMessage{
		Type:        "message",
		Role:        "assistant",
		Content:     "🎉 Selamat datang kembali, **" + user.Name + "**! Sesi dilanjutkan.\n\nAda yang bisa saya bantu?",
		Suggestions: bot.GetSuggestions(""),
	})
	h.chatRepo.SaveMessage(ctx, sessionID, "system", "resumed:"+user.ID, nil, "flow_resume")
}

// ─── Register form ────────────────────────────────────────────────────────────

func (h *ChatHandler) handleRegister(client *ws.Client, meta *bot.FlowMeta, sessionID string, raw json.RawMessage) {
	ctx := context.Background()
	var reg struct {
		Name  string `json:"name"`
		Email string `json:"email"`
	}
	if err := json.Unmarshal(raw, &reg); err != nil || !reEmail.MatchString(reg.Email) {
		client.SendJSON(model.WSMessage{Type: "message", Role: "assistant", Content: "❌ Email tidak valid."})
		return
	}
	if reg.Name != "" {
		meta.VisitorName = reg.Name
	}
	h.chatRepo.SaveMessage(ctx, sessionID, "user", reg.Email, nil, "")
	h.doSendCode(ctx, client, meta, sessionID, reg.Email)
}

// ─── Form submit ──────────────────────────────────────────────────────────────

func (h *ChatHandler) handleFormSubmit(client *ws.Client, sessionID string, wsMsg model.WSMessage) {
	ctx := context.Background()
	var formData map[string]string
	if err := json.Unmarshal(wsMsg.Data, &formData); err != nil {
		return
	}

	sub := &model.ContactSubmission{Type: wsMsg.FormType, SessionID: &sessionID}
	if v, ok := formData["name"]; ok { sub.Name = v }
	if v, ok := formData["email"]; ok && v != "" { sub.Email = &v }
	if v, ok := formData["phone"]; ok && v != "" { sub.Phone = &v }
	if v, ok := formData["company"]; ok && v != "" { sub.Company = &v }
	if v, ok := formData["message"]; ok && v != "" { sub.Message = &v }
	if v, ok := formData["product"]; ok && v != "" { sub.ProductInterest = &v }
	sub.FormData, _ = json.Marshal(formData)

	if h.productRepo != nil {
		h.productRepo.SaveContactSubmission(ctx, sub)
	}

	// Consultation payment: skip contact form, create Midtrans charge instead
	if wsMsg.FormType == "consultation_payment" {
		h.handleConsultationPayment(client, sessionID, formData)
		return
	}

	confirm := "✅ Terima kasih! Tim kami akan menghubungi Anda dalam 1x24 jam."
	switch wsMsg.FormType {
	case "order":
		confirm = "✅ Order diterima! Kami akan segera menghubungi Anda via WhatsApp. 🎉"
	case "demo_request":
		confirm = "✅ Request demo diterima! Kami akan jadwalkan sesi demo."
	}

	client.SendJSON(model.WSMessage{
		Type:        "message",
		Role:        "assistant",
		Content:     confirm,
		Suggestions: bot.GetSuggestions(""),
	})
	h.chatRepo.SaveMessage(ctx, sessionID, "system", "form:"+wsMsg.FormType, nil, "form_submit")
}

// ─── Consultation payment ─────────────────────────────────────────────────────

func (h *ChatHandler) handleConsultationPayment(client *ws.Client, sessionID string, data map[string]string) {
	ctx := context.Background()
	name := data["name"]
	if name == "" {
		name = "Visitor"
	}
	orderID := "CONSULT-" + uuid.New().String()[:8]

	result, err := h.mt.CreateGopayCharge(payment.GopayCharge{
		OrderID:       orderID,
		Amount:        50000,
		ItemName:      "Commitment Fee - Konsultasi Tim Autobot",
		CustomerName:  name,
		CustomerEmail: data["email"],
	})
	if err != nil {
		h.log.Error("create gopay charge", zap.Error(err))
		client.SendJSON(model.WSMessage{
			Type:    "message",
			Role:    "assistant",
			Content: "⚠️ Sistem pembayaran sedang gangguan. Tim kami akan menghubungi Anda segera di bintang@autobot.co.id.",
		})
		return
	}

	richJSON := mustJSON(map[string]interface{}{
		"type": "payment_qr",
		"data": map[string]interface{}{
			"order_id":     result.OrderID,
			"amount":       50000,
			"qr_url":       result.QRCodeURL,
			"deeplink_url": result.DeepLinkURL,
		},
	})
	client.SendJSON(model.WSMessage{
		Type:        "message",
		Role:        "assistant",
		Content:     "Berikut QR Code GoPay untuk **Commitment Fee Konsultasi** — Rp 50.000 👇",
		RichContent: richJSON,
	})
	h.chatRepo.SaveMessage(ctx, sessionID, "system", "payment:"+orderID, nil, "consultation_payment")
}

// ─── History ──────────────────────────────────────────────────────────────────

func (h *ChatHandler) GetHistory(c *fiber.Ctx) error {
	msgs, err := h.chatRepo.GetSessionMessages(c.Context(), c.Params("id"), 100)
	if err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "not found"})
	}
	return c.JSON(fiber.Map{"messages": msgs})
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

// looksLikeName returns true for short mostly-alphabetic strings that aren't emails/URLs/questions.
func looksLikeName(s string) bool {
	s = strings.TrimSpace(s)
	if len(s) < 2 || len(s) > 40 { return false }
	if strings.ContainsAny(s, "@/?!.#%") { return false }
	if strings.Contains(strings.ToLower(s), "http") { return false }

	alphaOrSpace := 0
	for _, r := range s {
		if unicode.IsLetter(r) || r == ' ' {
			alphaOrSpace++
		}
	}
	return float64(alphaOrSpace)/float64(len([]rune(s))) >= 0.75
}

func maskEmail(e string) string {
	parts := strings.SplitN(e, "@", 2)
	if len(parts) != 2 { return e }
	local := parts[0]
	if len(local) <= 2 { return local + "@" + parts[1] }
	return string([]rune(local)[0]) +
		strings.Repeat("*", len([]rune(local))-2) +
		string([]rune(local)[len([]rune(local))-1]) +
		"@" + parts[1]
}

func mustJSON(v interface{}) json.RawMessage {
	b, _ := json.Marshal(v)
	return b
}

func extractMermaidCode(content string) string {
	re := regexp.MustCompile("(?s)```mermaid\n(.*?)```")
	if m := re.FindStringSubmatch(content); len(m) > 1 {
		return strings.TrimSpace(m[1])
	}
	// Fallback: whole content (AI may have omitted fences)
	return strings.TrimSpace(content)
}

func extractHTMLCode(content string) string {
	re := regexp.MustCompile("(?s)```html\n(.*?)```")
	if m := re.FindStringSubmatch(content); len(m) > 1 {
		return strings.TrimSpace(m[1])
	}
	re2 := regexp.MustCompile("(?s)```\n(.*?)```")
	if m := re2.FindStringSubmatch(content); len(m) > 1 {
		return strings.TrimSpace(m[1])
	}
	return strings.TrimSpace(content)
}

func extractMarkdownTable(content string) ([]string, [][]string) {
	var headers []string
	var rows [][]string
	sepRe := regexp.MustCompile(`^[|\s:*-]+$`)
	for _, line := range strings.Split(content, "\n") {
		line = strings.TrimSpace(line)
		if !strings.HasPrefix(line, "|") {
			continue
		}
		cells := strings.Split(strings.Trim(line, "|"), "|")
		for i, c := range cells {
			cells[i] = strings.TrimSpace(c)
		}
		if sepRe.MatchString(strings.ReplaceAll(line, " ", "")) {
			continue // separator row
		}
		if headers == nil {
			headers = cells
		} else {
			rows = append(rows, cells)
		}
	}
	return headers, rows
}

func extractSlides(content string) []map[string]interface{} {
	var slides []map[string]interface{}
	var current map[string]interface{}
	var bullets []string
	for _, line := range strings.Split(content, "\n") {
		trimmed := strings.TrimSpace(line)
		if strings.HasPrefix(trimmed, "## ") {
			if current != nil {
				current["bullets"] = bullets
				slides = append(slides, current)
			}
			current = map[string]interface{}{"title": strings.TrimPrefix(trimmed, "## ")}
			bullets = nil
		} else if current != nil {
			if strings.HasPrefix(trimmed, "- ") {
				bullets = append(bullets, strings.TrimPrefix(trimmed, "- "))
			} else if trimmed != "" && !strings.HasPrefix(trimmed, "#") {
				// Plain text as a bullet
				bullets = append(bullets, trimmed)
			}
		}
	}
	if current != nil {
		current["bullets"] = bullets
		slides = append(slides, current)
	}
	return slides
}

func extractDocTitle(content string) string {
	for _, line := range strings.Split(content, "\n") {
		line = strings.TrimSpace(line)
		if strings.HasPrefix(line, "# ") {
			return strings.TrimPrefix(line, "# ")
		}
	}
	// Fallback: first non-empty line, truncated
	for _, line := range strings.Split(content, "\n") {
		line = strings.TrimSpace(line)
		if line != "" {
			runes := []rune(line)
			if len(runes) > 48 {
				return string(runes[:48]) + "…"
			}
			return line
		}
	}
	return "Dokumen"
}

