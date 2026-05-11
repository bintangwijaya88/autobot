package ai

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strings"
	"time"

	"github.com/autobot-wijaya/autobot-api/internal/config"
	"github.com/autobot-wijaya/autobot-api/internal/metrics"
)

type AnthropicProvider struct {
	apiKey string
	model  string
	client *http.Client
}

type anthropicRequest struct {
	Model     string             `json:"model"`
	MaxTokens int                `json:"max_tokens"`
	System    string             `json:"system,omitempty"`
	Messages  []anthropicMessage `json:"messages"`
	Stream    bool               `json:"stream,omitempty"`
}

type anthropicMessage struct {
	Role    string `json:"role"`
	Content string `json:"content"`
}

type anthropicResponse struct {
	Content []struct {
		Text string `json:"text"`
	} `json:"content"`
	Usage struct {
		InputTokens  int `json:"input_tokens"`
		OutputTokens int `json:"output_tokens"`
	} `json:"usage"`
}

func NewAnthropicProvider(cfg *config.Config) *AnthropicProvider {
	return &AnthropicProvider{
		apiKey: cfg.AI.AnthropicKey,
		model:  cfg.AI.AnthropicModel,
		client: &http.Client{Timeout: 60 * time.Second},
	}
}

func (p *AnthropicProvider) ChatCompletion(ctx context.Context, req ChatRequest) (ChatResponse, error) {
	start := time.Now()

	msgs := make([]anthropicMessage, 0, len(req.Messages))
	for _, m := range req.Messages {
		if m.Role == "system" {
			continue
		}
		msgs = append(msgs, anthropicMessage{Role: m.Role, Content: m.Content})
	}

	maxTokens := req.MaxTokens
	if maxTokens == 0 {
		maxTokens = 1000
	}

	body, _ := json.Marshal(anthropicRequest{
		Model:     p.model,
		MaxTokens: maxTokens,
		System:    req.SystemPrompt,
		Messages:  msgs,
	})

	httpReq, err := http.NewRequestWithContext(ctx, "POST", "https://api.anthropic.com/v1/messages", bytes.NewReader(body))
	if err != nil {
		return ChatResponse{}, err
	}
	httpReq.Header.Set("x-api-key", p.apiKey)
	httpReq.Header.Set("anthropic-version", "2023-06-01")
	httpReq.Header.Set("content-type", "application/json")

	resp, err := p.client.Do(httpReq)
	latency := time.Since(start).Seconds()
	if err != nil {
		metrics.AIRequestErrors.WithLabelValues("anthropic").Inc()
		return ChatResponse{}, fmt.Errorf("anthropic request: %w", err)
	}
	defer resp.Body.Close()

	var result anthropicResponse
	if err := json.NewDecoder(resp.Body).Decode(&result); err != nil {
		metrics.AIRequestErrors.WithLabelValues("anthropic").Inc()
		return ChatResponse{}, fmt.Errorf("anthropic decode: %w", err)
	}
	metrics.AIRequestLatency.WithLabelValues("anthropic").Observe(latency)
	metrics.AITokensUsed.WithLabelValues("anthropic", "input").Add(float64(result.Usage.InputTokens))
	metrics.AITokensUsed.WithLabelValues("anthropic", "output").Add(float64(result.Usage.OutputTokens))

	content := ""
	if len(result.Content) > 0 {
		content = result.Content[0].Text
	}

	return ChatResponse{
		Content:    content,
		TokensUsed: result.Usage.InputTokens + result.Usage.OutputTokens,
		Model:      p.model,
		Latency:    time.Since(start),
	}, nil
}

func (p *AnthropicProvider) StreamCompletion(ctx context.Context, req ChatRequest, callback func(token string)) error {
	msgs := make([]anthropicMessage, 0, len(req.Messages))
	for _, m := range req.Messages {
		if m.Role == "system" {
			continue
		}
		msgs = append(msgs, anthropicMessage{Role: m.Role, Content: m.Content})
	}

	maxTokens := req.MaxTokens
	if maxTokens == 0 {
		maxTokens = 1000
	}

	body, _ := json.Marshal(anthropicRequest{
		Model:     p.model,
		MaxTokens: maxTokens,
		System:    req.SystemPrompt,
		Messages:  msgs,
		Stream:    true,
	})

	httpReq, err := http.NewRequestWithContext(ctx, "POST", "https://api.anthropic.com/v1/messages", bytes.NewReader(body))
	if err != nil {
		return err
	}
	httpReq.Header.Set("x-api-key", p.apiKey)
	httpReq.Header.Set("anthropic-version", "2023-06-01")
	httpReq.Header.Set("content-type", "application/json")

	resp, err := p.client.Do(httpReq)
	if err != nil {
		return fmt.Errorf("anthropic stream: %w", err)
	}
	defer resp.Body.Close()

	buf := make([]byte, 4096)
	for {
		n, err := resp.Body.Read(buf)
		if n > 0 {
			line := string(buf[:n])
			// Parse SSE data lines
			for _, part := range strings.Split(line, "\n") {
				if strings.HasPrefix(part, "data: ") {
					data := strings.TrimPrefix(part, "data: ")
					var event struct {
						Type  string `json:"type"`
						Delta struct {
							Text string `json:"text"`
						} `json:"delta"`
					}
					if json.Unmarshal([]byte(data), &event) == nil {
						if event.Type == "content_block_delta" && event.Delta.Text != "" {
							callback(event.Delta.Text)
						}
					}
				}
			}
		}
		if err == io.EOF {
			break
		}
		if err != nil {
			return err
		}
	}
	return nil
}

func (p *AnthropicProvider) ClassifyIntent(ctx context.Context, message string) (string, error) {
	resp, err := p.ChatCompletion(ctx, ChatRequest{
		SystemPrompt: `You are an intent classifier. Respond ONLY with the intent name, nothing else.`,
		Messages: []Message{
			{Role: "user", Content: fmt.Sprintf(`Classify this message to one of: greeting, product_inquiry, product_detail, custom_development, chatbot_inquiry, blast_inquiry, automation_inquiry, integration_inquiry, ai_agent_inquiry, company_info, partner_info, pricing, demo_request, order_request, consultation, support, faq, unknown

Message: "%s"`, message)},
		},
		MaxTokens:   20,
		Temperature: 0,
	})
	if err != nil {
		return "unknown", nil
	}
	return strings.TrimSpace(strings.ToLower(resp.Content)), nil
}
