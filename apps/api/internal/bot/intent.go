package bot

import (
	"strings"

	"github.com/autobot-wijaya/autobot-api/internal/ai"
)

const (
	IntentGreeting        = "greeting"
	IntentProductInquiry  = "product_inquiry"
	IntentProductDetail   = "product_detail"
	IntentCustomDev       = "custom_development"
	IntentChatbot         = "chatbot_inquiry"
	IntentBlast           = "blast_inquiry"
	IntentAutomation      = "automation_inquiry"
	IntentIntegration     = "integration_inquiry"
	IntentAIAgent         = "ai_agent_inquiry"
	IntentCompanyInfo     = "company_info"
	IntentPartnerInfo     = "partner_info"
	IntentPricing         = "pricing"
	IntentDemoRequest     = "demo_request"
	IntentOrderRequest    = "order_request"
	IntentConsultation    = "consultation"
	IntentSupport          = "support"
	IntentFAQ              = "faq"
	IntentDocumentRequest  = "document_request"
	IntentPortfolio        = "portfolio"
	IntentDiagramRequest   = "diagram_request"
	IntentExcelRequest     = "excel_request"
	IntentPptRequest       = "ppt_request"
	IntentHtmlRequest      = "html_request"
	IntentUnknown          = "unknown"
)

var keywordIntents = map[string][]string{
	IntentGreeting:       {"halo", "hi", "hello", "selamat", "pagi", "siang", "sore", "malam", "hay", "hey"},
	IntentProductInquiry: {"produk", "layanan", "service", "jual apa", "lihat produk", "ada apa", "apa saja"},
	IntentBlast:          {"blast", "broadcast", "bulk", "kirim massal", "wablast"},
	IntentPricing:        {"harga", "biaya", "price", "tarif", "berapa", "bayar", "cost"},
	IntentOrderRequest:   {"order", "pesan", "beli", "langganan", "daftar", "subscribe"},
	IntentDemoRequest:    {"demo", "coba", "trial", "test", "lihat dulu"},
	IntentConsultation:   {"konsultasi", "diskusi", "ngobrol", "tanya", "advice"},
	IntentChatbot:        {"chatbot", "bot whatsapp", "wa bot", "auto reply", "chatbot wa", "whatsapp bot"},
	IntentAutomation:     {"automasi", "automation", "workflow", "otomatis", "proses bisnis"},
	IntentIntegration:    {"integrasi", "integration", "connect", "sync", "erp", "api"},
	IntentAIAgent:        {"ai agent", "agent ai", "artificial intelligence", "llm", "gpt", "claude"},
	IntentCompanyInfo:    {"siapa autobot", "tentang", "about", "company", "profil", "perusahaan"},
	IntentPartnerInfo:    {"mitra", "partner", "klien", "client", "rekanan"},
	IntentCustomDev:       {"custom", "bikin", "develop", "programming", "coding", "website", "aplikasi"},
	IntentSupport:         {"masalah", "error", "bug", "bantuan", "help", "support", "tidak bisa"},
	IntentDocumentRequest: {"proposal", "buatkan dokumen", "buat proposal", "surat penawaran", "dokumen word", "buat surat", "file word"},
	IntentPortfolio:       {"portofolio", "portfolio", "contoh kerja", "hasil kerja", "proyek sebelumnya", "referensi kerja"},
	IntentDiagramRequest:  {"flowchart", "flow chart", "diagram", "buatkan diagram", "buatkan flowchart", "gambar alur", "alur proses", "sequence diagram", "gantt", "erd", "entity relation"},
	IntentExcelRequest:    {"excel", "spreadsheet", "laporan excel", "tabel excel", "buatkan tabel", "export data", "data excel", "file excel", "buat laporan"},
	IntentPptRequest:      {"presentasi", "presentation", "powerpoint", "buatkan slide", "buatkan presentasi", "buat presentasi", "slide deck", "ppt"},
	IntentHtmlRequest:     {"buatkan html", "buat html", "website template", "form html", "kode html", "html page", "landing page"},
}

// ClassifyByKeyword does fast keyword matching
func ClassifyByKeyword(message string) string {
	msg := strings.ToLower(message)
	for intent, keywords := range keywordIntents {
		for _, kw := range keywords {
			if strings.Contains(msg, kw) {
				return intent
			}
		}
	}
	return ""
}

// Classify uses keyword first, then AI fallback
func Classify(message string, provider ai.AIProvider) string {
	if intent := ClassifyByKeyword(message); intent != "" {
		return intent
	}
	// AI fallback would be called from the service layer
	return IntentUnknown
}
