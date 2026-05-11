package ws

import (
	"encoding/json"
	"sync"

	"github.com/autobot-wijaya/autobot-api/internal/metrics"
	"go.uber.org/zap"
)

// Hub manages all active WebSocket connections
type Hub struct {
	clients    map[string]*Client // session_id → client
	register   chan *Client
	unregister chan *Client
	mu         sync.RWMutex
	log        *zap.Logger
}

func NewHub(log *zap.Logger) *Hub {
	return &Hub{
		clients:    make(map[string]*Client),
		register:   make(chan *Client, 256),
		unregister: make(chan *Client, 256),
		log:        log,
	}
}

func (h *Hub) Run() {
	for {
		select {
		case client := <-h.register:
			h.mu.Lock()
			h.clients[client.SessionID] = client
			h.mu.Unlock()
			metrics.WSConnectionsActive.Inc()
			h.log.Info("client connected", zap.String("session_id", client.SessionID))

		case client := <-h.unregister:
			h.mu.Lock()
			if _, ok := h.clients[client.SessionID]; ok {
				delete(h.clients, client.SessionID)
				close(client.Send)
				metrics.WSConnectionsActive.Dec()
			}
			h.mu.Unlock()
			h.log.Info("client disconnected", zap.String("session_id", client.SessionID))
		}
	}
}

func (h *Hub) Register(client *Client) {
	h.register <- client
}

func (h *Hub) Unregister(client *Client) {
	h.unregister <- client
}

func (h *Hub) SendToSession(sessionID string, msg interface{}) error {
	h.mu.RLock()
	client, ok := h.clients[sessionID]
	h.mu.RUnlock()

	if !ok {
		return nil
	}

	data, err := json.Marshal(msg)
	if err != nil {
		return err
	}

	select {
	case client.Send <- data:
	default:
		h.mu.Lock()
		delete(h.clients, sessionID)
		close(client.Send)
		h.mu.Unlock()
	}
	return nil
}

func (h *Hub) ActiveCount() int {
	h.mu.RLock()
	defer h.mu.RUnlock()
	return len(h.clients)
}
