package ws

import (
	"encoding/json"
	"time"

	"github.com/gofiber/websocket/v2"
	"go.uber.org/zap"
)

const (
	writeWait      = 10 * time.Second
	pongWait       = 60 * time.Second
	pingPeriod     = (pongWait * 9) / 10
	maxMessageSize = 4096
)

type Client struct {
	SessionID string
	Conn      *websocket.Conn
	Send      chan []byte
	Hub       *Hub
	log       *zap.Logger
}

func NewClient(sessionID string, conn *websocket.Conn, hub *Hub, log *zap.Logger) *Client {
	return &Client{
		SessionID: sessionID,
		Conn:      conn,
		Send:      make(chan []byte, 256),
		Hub:       hub,
		log:       log,
	}
}

// WritePump pumps messages from the hub to the websocket connection
func (c *Client) WritePump() {
	ticker := time.NewTicker(pingPeriod)
	defer func() {
		ticker.Stop()
		c.Conn.Close()
	}()

	for {
		select {
		case message, ok := <-c.Send:
			c.Conn.SetWriteDeadline(time.Now().Add(writeWait))
			if !ok {
				c.Conn.WriteMessage(websocket.CloseMessage, []byte{})
				return
			}
			if err := c.Conn.WriteMessage(websocket.TextMessage, message); err != nil {
				return
			}

		case <-ticker.C:
			c.Conn.SetWriteDeadline(time.Now().Add(writeWait))
			if err := c.Conn.WriteMessage(websocket.PingMessage, nil); err != nil {
				return
			}
		}
	}
}

func (c *Client) SendJSON(v interface{}) {
	data, err := json.Marshal(v)
	if err != nil {
		c.log.Error("failed to marshal message", zap.Error(err))
		return
	}
	select {
	case c.Send <- data:
	default:
		c.log.Warn("client send buffer full", zap.String("session_id", c.SessionID))
	}
}
