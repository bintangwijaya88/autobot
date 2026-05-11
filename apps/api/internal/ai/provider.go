package ai

import (
	"context"
	"time"
)

// AIProvider is the interface for all AI providers
type AIProvider interface {
	ChatCompletion(ctx context.Context, req ChatRequest) (ChatResponse, error)
	StreamCompletion(ctx context.Context, req ChatRequest, callback func(token string)) error
	ClassifyIntent(ctx context.Context, message string) (string, error)
}

type ChatRequest struct {
	SystemPrompt string
	Messages     []Message
	MaxTokens    int
	Temperature  float64
}

type Message struct {
	Role    string `json:"role"`
	Content string `json:"content"`
}

type ChatResponse struct {
	Content    string
	TokensUsed int
	Model      string
	Latency    time.Duration
}
