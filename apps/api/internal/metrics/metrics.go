package metrics

import (
	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promauto"
)

var (
	WSConnectionsActive = promauto.NewGauge(prometheus.GaugeOpts{
		Name: "autobot_ws_connections_active",
		Help: "Number of active WebSocket connections",
	})

	WSMessagesTotal = promauto.NewCounterVec(prometheus.CounterOpts{
		Name: "autobot_ws_messages_total",
		Help: "Total WebSocket messages processed",
	}, []string{"direction"}) // inbound | outbound

	ChatSessionsTotal = promauto.NewCounter(prometheus.CounterOpts{
		Name: "autobot_chat_sessions_total",
		Help: "Total chat sessions created",
	})

	ChatResponseLatency = promauto.NewHistogramVec(prometheus.HistogramOpts{
		Name:    "autobot_chat_response_latency_seconds",
		Help:    "Chat response latency in seconds",
		Buckets: []float64{0.1, 0.25, 0.5, 1, 2, 5, 10},
	}, []string{"intent"})

	AITokensUsed = promauto.NewCounterVec(prometheus.CounterOpts{
		Name: "autobot_ai_tokens_total",
		Help: "Total AI tokens consumed",
	}, []string{"provider", "type"}) // type: input | output

	AIRequestLatency = promauto.NewHistogramVec(prometheus.HistogramOpts{
		Name:    "autobot_ai_request_latency_seconds",
		Help:    "AI API request latency in seconds",
		Buckets: []float64{0.5, 1, 2, 3, 5, 10, 30},
	}, []string{"provider"})

	AIRequestErrors = promauto.NewCounterVec(prometheus.CounterOpts{
		Name: "autobot_ai_errors_total",
		Help: "AI API request errors",
	}, []string{"provider"})

	FormSubmissionsTotal = promauto.NewCounterVec(prometheus.CounterOpts{
		Name: "autobot_form_submissions_total",
		Help: "Total form submissions",
	}, []string{"form_type"})

	IntentClassifications = promauto.NewCounterVec(prometheus.CounterOpts{
		Name: "autobot_intent_classifications_total",
		Help: "Intent classification counts",
	}, []string{"intent", "method"}) // method: keyword | ai | unknown

	HTTPRequestDuration = promauto.NewHistogramVec(prometheus.HistogramOpts{
		Name:    "autobot_http_duration_seconds",
		Help:    "HTTP request duration in seconds",
		Buckets: prometheus.DefBuckets,
	}, []string{"method", "path", "status"})
)
