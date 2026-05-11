package ai

import (
	"context"
	"fmt"
	"io"
	"strings"
	"time"

	"github.com/autobot-wijaya/autobot-api/internal/config"
	"github.com/autobot-wijaya/autobot-api/internal/metrics"
	openai "github.com/sashabaranov/go-openai"
)

type OpenAIProvider struct {
	client *openai.Client
	model  string
}

func NewOpenAIProvider(cfg *config.Config) *OpenAIProvider {
	return &OpenAIProvider{
		client: openai.NewClient(cfg.AI.OpenAIKey),
		model:  cfg.AI.OpenAIModel,
	}
}

func (p *OpenAIProvider) ChatCompletion(ctx context.Context, req ChatRequest) (ChatResponse, error) {
	start := time.Now()

	msgs := make([]openai.ChatCompletionMessage, 0, len(req.Messages)+1)
	if req.SystemPrompt != "" {
		msgs = append(msgs, openai.ChatCompletionMessage{
			Role:    openai.ChatMessageRoleSystem,
			Content: req.SystemPrompt,
		})
	}
	for _, m := range req.Messages {
		msgs = append(msgs, openai.ChatCompletionMessage{
			Role:    m.Role,
			Content: m.Content,
		})
	}

	maxTokens := req.MaxTokens
	if maxTokens == 0 {
		maxTokens = 1000
	}
	temp := req.Temperature
	if temp == 0 {
		temp = 0.7
	}

	resp, err := p.client.CreateChatCompletion(ctx, openai.ChatCompletionRequest{
		Model:       p.model,
		Messages:    msgs,
		MaxTokens:   maxTokens,
		Temperature: float32(temp),
	})
	latency := time.Since(start).Seconds()
	if err != nil {
		metrics.AIRequestErrors.WithLabelValues("openai").Inc()
		return ChatResponse{}, fmt.Errorf("openai completion: %w", err)
	}
	metrics.AIRequestLatency.WithLabelValues("openai").Observe(latency)
	metrics.AITokensUsed.WithLabelValues("openai", "input").Add(float64(resp.Usage.PromptTokens))
	metrics.AITokensUsed.WithLabelValues("openai", "output").Add(float64(resp.Usage.CompletionTokens))

	return ChatResponse{
		Content:    resp.Choices[0].Message.Content,
		TokensUsed: resp.Usage.TotalTokens,
		Model:      resp.Model,
		Latency:    time.Since(start),
	}, nil
}

func (p *OpenAIProvider) StreamCompletion(ctx context.Context, req ChatRequest, callback func(token string)) error {
	msgs := make([]openai.ChatCompletionMessage, 0, len(req.Messages)+1)
	if req.SystemPrompt != "" {
		msgs = append(msgs, openai.ChatCompletionMessage{
			Role:    openai.ChatMessageRoleSystem,
			Content: req.SystemPrompt,
		})
	}
	for _, m := range req.Messages {
		msgs = append(msgs, openai.ChatCompletionMessage{
			Role:    m.Role,
			Content: m.Content,
		})
	}

	maxTokens := req.MaxTokens
	if maxTokens == 0 {
		maxTokens = 1000
	}
	temp := req.Temperature
	if temp == 0 {
		temp = 0.7
	}

	stream, err := p.client.CreateChatCompletionStream(ctx, openai.ChatCompletionRequest{
		Model:       p.model,
		Messages:    msgs,
		MaxTokens:   maxTokens,
		Temperature: float32(temp),
		Stream:      true,
	})
	if err != nil {
		return fmt.Errorf("openai stream: %w", err)
	}
	defer stream.Close()

	for {
		resp, err := stream.Recv()
		if err == io.EOF {
			break
		}
		if err != nil {
			return fmt.Errorf("stream recv: %w", err)
		}
		if len(resp.Choices) > 0 {
			token := resp.Choices[0].Delta.Content
			if token != "" {
				callback(token)
			}
		}
	}
	return nil
}

func (p *OpenAIProvider) ClassifyIntent(ctx context.Context, message string) (string, error) {
	prompt := fmt.Sprintf(`Kamu adalah intent classifier untuk Autobot, perusahaan spesialis bot & automasi.
Classify user message ke SALAH SATU intent berikut:
- greeting, product_inquiry, product_detail, custom_development
- chatbot_inquiry, blast_inquiry, automation_inquiry, integration_inquiry, ai_agent_inquiry
- company_info, partner_info, pricing, demo_request, order_request, consultation
- support, faq, unknown

Respond HANYA dengan intent name, tanpa penjelasan.

User message: "%s"`, message)

	resp, err := p.client.CreateChatCompletion(ctx, openai.ChatCompletionRequest{
		Model: p.model,
		Messages: []openai.ChatCompletionMessage{
			{Role: openai.ChatMessageRoleUser, Content: prompt},
		},
		MaxTokens:   20,
		Temperature: 0,
	})
	if err != nil {
		return "unknown", nil
	}

	intent := strings.TrimSpace(strings.ToLower(resp.Choices[0].Message.Content))
	return intent, nil
}
