package bot

import "encoding/json"

// Flow states
const (
	FlowNew           = "new"
	FlowAwaitingName  = "awaiting_name"
	FlowOffering      = "offering"
	FlowAwaitingEmail = "awaiting_email"
	FlowAwaitingCode  = "awaiting_code"
	FlowChat          = "chat"
)

// FlowMeta is stored in chat_sessions.metadata JSON
type FlowMeta struct {
	State         string `json:"flow_state"`
	VisitorName   string `json:"visitor_name,omitempty"`
	PendingEmail  string `json:"pending_email,omitempty"`
	PendingUserID string `json:"pending_user_id,omitempty"`
	UserID        string `json:"user_id,omitempty"`
	// preserved from original session creation
	UserAgent string `json:"user_agent,omitempty"`
	IP        string `json:"ip,omitempty"`
	Referer   string `json:"referer,omitempty"`
}

func ParseFlowMeta(raw json.RawMessage) FlowMeta {
	var m FlowMeta
	if raw != nil {
		json.Unmarshal(raw, &m)
	}
	if m.State == "" {
		m.State = FlowNew
	}
	return m
}

func (f FlowMeta) Marshal() json.RawMessage {
	b, _ := json.Marshal(f)
	return b
}
