package bot

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/autobot-wijaya/autobot-api/internal/ai"
	"github.com/autobot-wijaya/autobot-api/internal/metrics"
	"github.com/autobot-wijaya/autobot-api/internal/model"
	"github.com/autobot-wijaya/autobot-api/internal/repository"
)

const mainSystemPrompt = `Kamu adalah Autobot AI, asisten virtual dari CV Autobot Wijaya Solution (autobot.co.id).

IDENTITAS PERUSAHAAN:
- Nama: CV Autobot Wijaya Solution
- Berdiri: 2022, Jakarta
- Spesialisasi: WhatsApp chatbot, broadcast/blast, AI integration, workflow automation
- Website: autobot.co.id
- Email: bintang@autobot.co.id

PRODUK UNGGULAN — WaBlastApp:
Platform WhatsApp automation desktop (Windows) dengan fitur lengkap:

AUTO-REPLY & RULE ENGINE:
- Exact match, contains match, regex pattern matching
- Default fallback rule, override per kontak, block mode
- Jam operasional otomatis, greeting kontak baru

AI INTEGRATION (Multi-Provider):
- Dukung OpenAI (GPT-4o), Anthropic Claude, Google Gemini
- Knowledge Base / FAQ upload (dokumen, Excel, manual)
- Custom AI persona per kontak, estimasi biaya AI real-time

BROADCAST & BLAST:
- Blast massal dengan delay control (anti-ban)
- Broadcast terjadwal, template pesan + media
- Status delivered/read tracking, segmentasi kontak

MANAJEMEN CHAT & KONTAK:
- Multi-device WhatsApp (banyak nomor sekaligus)
- Chat log, operator takeover, import kontak Excel
- Task management, catatan internal, ringkasan AI

20+ PAKET MODUL BISNIS:
Klinik, Toko/E-Commerce, CRM, Keuangan, HR/Payroll, Properti, F&B/Restoran, Event, Helpdesk, Pendidikan, Salon/Spa, Travel, Otomotif, Logistik, Gym, Legal, Marketing, Customer Success, Sales Automation, Apotek

PRODUK LAIN:
%s

TUGAS KAMU:
1. Jawab detail tentang fitur WaBlastApp dan produk lainnya
2. Recommend produk/paket yang tepat berdasarkan kebutuhan visitor
3. Bantu visitor mengisi form order/konsultasi langsung di chat
4. Jangan jawab di luar konteks perusahaan — redirect ke topik relevan

FORMAT OUTPUT KHUSUS (WAJIB diikuti ketika diminta):
- DIAGRAM/FLOWCHART: gunakan syntax Mermaid dalam code block ` + "```" + `mermaid ... ` + "```" + `. Jangan tambahkan teks panjang, langsung diagram.
- TABEL/LAPORAN EXCEL: buat dalam format Markdown table (| Kolom | Kolom |) dengan header baris pertama. Beri judul singkat di atas tabel.
- PRESENTASI/SLIDE: buat format ## Slide N: Judul (lalu bullet points dengan -). Mulai dengan judul utama # di baris pertama.
- DOKUMEN/PROPOSAL: format Markdown lengkap, mulai dengan # Judul dokumen.
- HTML: buat kode HTML lengkap dalam code block ` + "```" + `html ... ` + "```" + `.

Selalu friendly, profesional, dan to the point. Gunakan emoji secukupnya.`

type Engine struct {
	provider    ai.AIProvider
	productRepo *repository.ProductRepository
}

func NewEngine(provider ai.AIProvider, productRepo *repository.ProductRepository) *Engine {
	return &Engine{
		provider:    provider,
		productRepo: productRepo,
	}
}

type BotResponse struct {
	Content     string
	RichContent interface{}
	Intent      string
	Suggestions []model.SuggestedPrompt
}

type SessionContext struct {
	SessionID       string
	Messages        []ai.Message
	IdentifiedNeeds []string
	ProductInterest []string
	CurrentIntent   string
}

func (e *Engine) BuildSystemPrompt(ctx context.Context) string {
	products, err := e.productRepo.List(ctx, "")
	if err != nil {
		return fmt.Sprintf(mainSystemPrompt, "Data produk tidak tersedia saat ini.")
	}

	var sb strings.Builder
	for _, p := range products {
		tagline := ""
		if p.Tagline != nil {
			tagline = *p.Tagline
		}
		sb.WriteString(fmt.Sprintf("- %s (%s): %s\n", p.Name, p.Slug, tagline))
	}

	return fmt.Sprintf(mainSystemPrompt, sb.String())
}

// StreamProcessMessage streams tokens via onToken, then returns the full BotResponse.
func (e *Engine) StreamProcessMessage(ctx context.Context, session *SessionContext, userMessage string, onToken func(string)) (*BotResponse, error) {
	intent := ClassifyByKeyword(userMessage)
	if intent == IntentUnknown || intent == "" {
		var err error
		intent, err = e.provider.ClassifyIntent(ctx, userMessage)
		if err != nil {
			intent = IntentUnknown
		}
		metrics.IntentClassifications.WithLabelValues(intent, "ai").Inc()
	} else {
		metrics.IntentClassifications.WithLabelValues(intent, "keyword").Inc()
	}

	session.Messages = append(session.Messages, ai.Message{Role: "user", Content: userMessage})
	session.CurrentIntent = intent

	richContent, _ := e.buildRichContent(ctx, intent, userMessage)
	systemPrompt := e.BuildSystemPrompt(ctx)

	var sb strings.Builder
	streamErr := e.provider.StreamCompletion(ctx, ai.ChatRequest{
		SystemPrompt: systemPrompt,
		Messages:     session.Messages,
		MaxTokens:    800,
		Temperature:  0.7,
	}, func(token string) {
		sb.WriteString(token)
		onToken(token)
	})

	content := sb.String()
	if streamErr != nil || content == "" {
		content = "Maaf, saya sedang mengalami gangguan teknis. Silakan coba lagi atau hubungi kami di bintang@autobot.co.id"
		onToken(content)
	}

	session.Messages = append(session.Messages, ai.Message{Role: "assistant", Content: content})
	if len(session.Messages) > 20 {
		session.Messages = session.Messages[len(session.Messages)-20:]
	}

	return &BotResponse{
		Content:     content,
		RichContent: richContent,
		Intent:      intent,
		Suggestions: GetSuggestions(intent),
	}, nil
}

func (e *Engine) ProcessMessage(ctx context.Context, session *SessionContext, userMessage string) (*BotResponse, error) {
	// 1. Classify intent
	intent := ClassifyByKeyword(userMessage)
	if intent == IntentUnknown || intent == "" {
		var err error
		intent, err = e.provider.ClassifyIntent(ctx, userMessage)
		if err != nil {
			intent = IntentUnknown
		}
		metrics.IntentClassifications.WithLabelValues(intent, "ai").Inc()
	} else {
		metrics.IntentClassifications.WithLabelValues(intent, "keyword").Inc()
	}

	// 2. Add user message to context
	session.Messages = append(session.Messages, ai.Message{
		Role:    "user",
		Content: userMessage,
	})
	session.CurrentIntent = intent

	// 3. Build rich content based on intent
	richContent, err := e.buildRichContent(ctx, intent, userMessage)
	if err != nil {
		richContent = nil
	}

	// 4. Build system prompt
	systemPrompt := e.BuildSystemPrompt(ctx)

	// 5. Generate AI response
	resp, err := e.provider.ChatCompletion(ctx, ai.ChatRequest{
		SystemPrompt: systemPrompt,
		Messages:     session.Messages,
		MaxTokens:    800,
		Temperature:  0.7,
	})
	if err != nil {
		return &BotResponse{
			Content: "Maaf, saya sedang mengalami gangguan teknis. Silakan coba lagi atau hubungi kami langsung di bintang@autobot.co.id",
			Intent:  intent,
		}, nil
	}

	// 6. Add assistant response to context
	session.Messages = append(session.Messages, ai.Message{
		Role:    "assistant",
		Content: resp.Content,
	})

	// 7. Trim context if too long
	if len(session.Messages) > 20 {
		session.Messages = session.Messages[len(session.Messages)-20:]
	}

	// 8. Get suggestions
	suggestions := GetSuggestions(intent)

	return &BotResponse{
		Content:     resp.Content,
		RichContent: richContent,
		Intent:      intent,
		Suggestions: suggestions,
	}, nil
}

func (e *Engine) buildRichContent(ctx context.Context, intent, message string) (interface{}, error) {
	switch intent {
	case IntentProductInquiry:
		products, err := e.productRepo.List(ctx, "")
		if err != nil {
			return nil, err
		}
		items := make([]model.CarouselItem, 0, len(products))
		for _, p := range products {
			tagline := ""
			if p.Tagline != nil {
				tagline = *p.Tagline
			}
			items = append(items, model.CarouselItem{
				Name:    p.Name,
				Slug:    p.Slug,
				Tagline: tagline,
			})
		}
		return map[string]interface{}{
			"type": "carousel",
			"data": model.CarouselData{Title: "Produk Kami", Items: items},
		}, nil

	case IntentConsultation:
		return map[string]interface{}{
			"type": "consultation_offer",
			"data": map[string]interface{}{},
		}, nil

	case IntentPortfolio:
		return map[string]interface{}{
			"type": "selection_list",
			"data": map[string]interface{}{
				"id":          "portfolio-list",
				"title":       "Portofolio Kami",
				"subtitle":    "Pilih proyek untuk lihat detail",
				"action_type": "show_portfolio",
				"items": []map[string]interface{}{
					{"id": "wablastapp", "label": "WaBlastApp", "description": "Platform blast & marketing automation via WhatsApp", "tag": "Chatbot"},
					{"id": "wabotiq", "label": "WaBotIQ", "description": "Chatbot cerdas dengan AI untuk WhatsApp Business", "tag": "AI"},
					{"id": "bintanx", "label": "BintanX Platform", "description": "SaaS multi-tenant dengan chatbot, CRM & analytics", "tag": "SaaS"},
					{"id": "suratmedis", "label": "SuratMedis", "description": "Platform surat medis digital untuk klinik & RS", "tag": "Healthcare"},
					{"id": "covid-portal", "label": "COVID-19 Data Portal", "description": "Portal data kesehatan nasional terintegrasi", "tag": "Gov"},
				},
			},
		}, nil

	case IntentOrderRequest, IntentDemoRequest:
		formType := "order"
		title := "Order Produk"
		if intent == IntentDemoRequest {
			formType = "demo_request"
			title = "Request Demo"
		}
		return buildFormContent(formType, title), nil

	case IntentChatbot, IntentBlast:
		cat := "chatbot"
		if intent == IntentBlast {
			cat = "blast"
		}
		products, err := e.productRepo.List(ctx, cat)
		if err != nil {
			return nil, err
		}
		if len(products) == 1 {
			p := products[0]
			tagline := ""
			if p.Tagline != nil {
				tagline = *p.Tagline
			}
			var features []string
			json.Unmarshal(p.Features, &features)
			return map[string]interface{}{
				"type": "product_card",
				"data": model.ProductCardData{
					Name:     p.Name,
					Slug:     p.Slug,
					Tagline:  tagline,
					Category: p.Category,
					Features: features,
					Delivery: func() string {
						if p.DeliveryModel != nil {
							return *p.DeliveryModel
						}
						return "web"
					}(),
					CTA: &model.CTAData{Label: "Order Sekarang", Action: "show_form", FormType: "order"},
				},
			}, nil
		}
	}
	return nil, nil
}

func buildFormContent(formType, title string) interface{} {
	fields := []model.FormField{
		{Name: "name", Label: "Nama Lengkap", Type: "text", Required: true, Placeholder: "Nama lengkap Anda"},
		{Name: "phone", Label: "No. WhatsApp", Type: "tel", Required: true, Placeholder: "08xxx"},
		{Name: "email", Label: "Email", Type: "email", Required: false, Placeholder: "email@example.com"},
		{Name: "company", Label: "Perusahaan/Instansi", Type: "text", Required: false},
	}

	if formType == "order" {
		fields = append(fields,
			model.FormField{Name: "product", Label: "Produk yang Diminati", Type: "text", Required: false},
			model.FormField{Name: "notes", Label: "Catatan", Type: "textarea", Required: false},
		)
	} else {
		fields = append(fields,
			model.FormField{Name: "message", Label: "Kebutuhan Anda", Type: "textarea", Required: true, Placeholder: "Ceritakan kebutuhan Anda..."},
		)
	}

	return map[string]interface{}{
		"type": "form",
		"data": model.FormData{
			FormType:    formType,
			Title:       title,
			Fields:      fields,
			SubmitLabel: "Kirim",
		},
	}
}

func GetSuggestions(currentIntent string) []model.SuggestedPrompt {
	switch currentIntent {
	case IntentGreeting, "":
		return []model.SuggestedPrompt{
			{Text: "Lihat portofolio kami", Icon: "folder", Category: "portfolio"},
			{Text: "Buatkan proposal layanan untuk saya", Icon: "file-text", Category: "document"},
			{Text: "Lihat semua produk", Icon: "package", Category: "product"},
			{Text: "Saya butuh chatbot WhatsApp", Icon: "message-circle", Category: "chatbot"},
			{Text: "Mau blast promo ke banyak kontak", Icon: "send", Category: "blast"},
			{Text: "Butuh automasi proses bisnis", Icon: "git-merge", Category: "automation"},
		}
	case IntentProductInquiry:
		return []model.SuggestedPrompt{
			{Text: "Ceritakan tentang WaBlast", Icon: "send", Category: "product"},
			{Text: "Ceritakan tentang WaBotIQ", Icon: "bot", Category: "product"},
			{Text: "Harga produk chatbot", Icon: "tag", Category: "pricing"},
		}
	default:
		return []model.SuggestedPrompt{
			{Text: "Mau order produk", Icon: "shopping-cart", Category: "order"},
			{Text: "Request demo", Icon: "play", Category: "demo"},
			{Text: "Konsultasi gratis", Icon: "phone", Category: "consultation"},
		}
	}
}
