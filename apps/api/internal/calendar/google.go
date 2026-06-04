package calendar

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"strconv"
	"strings"
	"sync"
	"time"

	"github.com/autobot-wijaya/autobot-api/internal/config"
)

type BookingRequest struct {
	Name            string
	Email           string
	Phone           string
	Company         string
	Topic           string
	Notes           string
	PreferredDate   string
	PreferredTime   string
	DurationMinutes int
}

type BookingResult struct {
	EventID   string
	HTMLLink  string
	Summary   string
	StartTime time.Time
	EndTime   time.Time
}

type GoogleCalendar struct {
	cfg         config.GoogleCalendarConfig
	client      *http.Client
	mu          sync.Mutex
	accessToken string
	tokenExpiry time.Time
}

func NewGoogleCalendar(cfg *config.Config) *GoogleCalendar {
	return &GoogleCalendar{
		cfg:    cfg.Calendar,
		client: &http.Client{Timeout: 30 * time.Second},
	}
}

func (g *GoogleCalendar) Enabled() bool {
	return strings.TrimSpace(g.cfg.CalendarID) != "" &&
		(strings.TrimSpace(g.cfg.AccessToken) != "" ||
			(strings.TrimSpace(g.cfg.RefreshToken) != "" &&
				strings.TrimSpace(g.cfg.ClientID) != "" &&
				strings.TrimSpace(g.cfg.ClientSecret) != ""))
}

func (g *GoogleCalendar) CreateConsultationBooking(ctx context.Context, req BookingRequest) (*BookingResult, error) {
	if !g.Enabled() {
		return nil, fmt.Errorf("google calendar not configured")
	}

	locName := strings.TrimSpace(g.cfg.TimeZone)
	if locName == "" {
		locName = "Asia/Jakarta"
	}
	loc, err := time.LoadLocation(locName)
	if err != nil {
		loc = time.FixedZone("WIB", 7*60*60)
	}

	if req.PreferredDate == "" || req.PreferredTime == "" {
		return nil, fmt.Errorf("preferred date and time are required")
	}

	start, err := time.ParseInLocation("2006-01-02 15:04", req.PreferredDate+" "+req.PreferredTime, loc)
	if err != nil {
		return nil, fmt.Errorf("invalid preferred date/time")
	}

	duration := req.DurationMinutes
	if duration <= 0 {
		duration = 60
	}
	end := start.Add(time.Duration(duration) * time.Minute)

	summary := "Konsultasi Autobot - " + strings.TrimSpace(req.Name)
	if req.Topic != "" {
		summary = summary + " (" + req.Topic + ")"
	}

	var desc strings.Builder
	desc.WriteString("Booking konsultasi dari chatbot Autobot.\n\n")
	writeLine := func(label, value string) {
		value = strings.TrimSpace(value)
		if value == "" {
			return
		}
		desc.WriteString(label)
		desc.WriteString(": ")
		desc.WriteString(value)
		desc.WriteString("\n")
	}
	writeLine("Nama", req.Name)
	writeLine("Email", req.Email)
	writeLine("WhatsApp", req.Phone)
	writeLine("Perusahaan", req.Company)
	writeLine("Topik", req.Topic)
	writeLine("Catatan", req.Notes)

	payload := map[string]interface{}{
		"summary":     summary,
		"description": desc.String(),
		"start": map[string]string{
			"dateTime": start.Format(time.RFC3339),
			"timeZone": locName,
		},
		"end": map[string]string{
			"dateTime": end.Format(time.RFC3339),
			"timeZone": locName,
		},
	}

	if req.Email != "" {
		payload["attendees"] = []map[string]string{{"email": req.Email}}
	}

	body, _ := json.Marshal(payload)
	token, err := g.getAccessToken(ctx)
	if err != nil {
		return nil, err
	}

	calendarID := url.PathEscape(strings.TrimSpace(g.cfg.CalendarID))
	endpoint := fmt.Sprintf("https://www.googleapis.com/calendar/v3/calendars/%s/events?sendUpdates=all", calendarID)
	httpReq, err := http.NewRequestWithContext(ctx, http.MethodPost, endpoint, bytes.NewReader(body))
	if err != nil {
		return nil, err
	}
	httpReq.Header.Set("Authorization", "Bearer "+token)
	httpReq.Header.Set("Content-Type", "application/json")

	resp, err := g.client.Do(httpReq)
	if err != nil {
		return nil, fmt.Errorf("create calendar event: %w", err)
	}
	defer resp.Body.Close()

	respBody, _ := io.ReadAll(resp.Body)
	if resp.StatusCode < 200 || resp.StatusCode >= 300 {
		return nil, fmt.Errorf("calendar api error: %s", strings.TrimSpace(string(respBody)))
	}

	var result struct {
		ID       string `json:"id"`
		HTMLLink string `json:"htmlLink"`
		Start    struct {
			DateTime string `json:"dateTime"`
		} `json:"start"`
		End struct {
			DateTime string `json:"dateTime"`
		} `json:"end"`
		Summary string `json:"summary"`
	}
	if err := json.Unmarshal(respBody, &result); err != nil {
		return nil, fmt.Errorf("parse calendar response: %w", err)
	}

	createdStart, _ := time.Parse(time.RFC3339, result.Start.DateTime)
	createdEnd, _ := time.Parse(time.RFC3339, result.End.DateTime)
	if createdStart.IsZero() {
		createdStart = start
	}
	if createdEnd.IsZero() {
		createdEnd = end
	}

	return &BookingResult{
		EventID:   result.ID,
		HTMLLink:  result.HTMLLink,
		Summary:   result.Summary,
		StartTime: createdStart,
		EndTime:   createdEnd,
	}, nil
}

func (g *GoogleCalendar) getAccessToken(ctx context.Context) (string, error) {
	if token := strings.TrimSpace(g.cfg.AccessToken); token != "" {
		return token, nil
	}

	g.mu.Lock()
	defer g.mu.Unlock()

	if g.accessToken != "" && time.Until(g.tokenExpiry) > 30*time.Second {
		return g.accessToken, nil
	}

	values := url.Values{}
	values.Set("grant_type", "refresh_token")
	values.Set("client_id", g.cfg.ClientID)
	values.Set("client_secret", g.cfg.ClientSecret)
	values.Set("refresh_token", g.cfg.RefreshToken)

	httpReq, err := http.NewRequestWithContext(ctx, http.MethodPost, "https://oauth2.googleapis.com/token", strings.NewReader(values.Encode()))
	if err != nil {
		return "", err
	}
	httpReq.Header.Set("Content-Type", "application/x-www-form-urlencoded")

	resp, err := g.client.Do(httpReq)
	if err != nil {
		return "", fmt.Errorf("refresh google token: %w", err)
	}
	defer resp.Body.Close()

	body, _ := io.ReadAll(resp.Body)
	if resp.StatusCode < 200 || resp.StatusCode >= 300 {
		return "", fmt.Errorf("refresh google token failed: %s", strings.TrimSpace(string(body)))
	}

	var tokenResp struct {
		AccessToken string `json:"access_token"`
		ExpiresIn   int    `json:"expires_in"`
		TokenType   string `json:"token_type"`
	}
	if err := json.Unmarshal(body, &tokenResp); err != nil {
		return "", fmt.Errorf("parse google token response: %w", err)
	}
	if tokenResp.AccessToken == "" {
		return "", fmt.Errorf("google token response missing access token")
	}

	g.accessToken = tokenResp.AccessToken
	if tokenResp.ExpiresIn > 0 {
		g.tokenExpiry = time.Now().Add(time.Duration(tokenResp.ExpiresIn) * time.Second)
	} else {
		g.tokenExpiry = time.Now().Add(45 * time.Minute)
	}
	return g.accessToken, nil
}

func ParseDurationMinutes(value string) int {
	if value == "" {
		return 0
	}
	n, err := strconv.Atoi(strings.TrimSpace(value))
	if err != nil {
		return 0
	}
	return n
}
