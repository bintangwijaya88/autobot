package payment

import (
	"bytes"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"
)

type Midtrans struct {
	serverKey    string
	isProduction bool
}

type GopayCharge struct {
	OrderID       string
	Amount        int64
	ItemName      string
	CustomerName  string
	CustomerEmail string
}

type GopayResult struct {
	TransactionID string
	OrderID       string
	QRCodeURL     string
	DeepLinkURL   string
}

func New(serverKey string, isProduction bool) *Midtrans {
	return &Midtrans{serverKey: serverKey, isProduction: isProduction}
}

func (m *Midtrans) baseURL() string {
	if m.isProduction {
		return "https://api.midtrans.com"
	}
	return "https://api.sandbox.midtrans.com"
}

func (m *Midtrans) CreateGopayCharge(charge GopayCharge) (*GopayResult, error) {
	payload := map[string]interface{}{
		"payment_type": "gopay",
		"transaction_details": map[string]interface{}{
			"order_id":     charge.OrderID,
			"gross_amount": charge.Amount,
		},
		"item_details": []map[string]interface{}{
			{
				"id":       "commitment-fee",
				"price":    charge.Amount,
				"quantity": 1,
				"name":     charge.ItemName,
			},
		},
		"customer_details": map[string]interface{}{
			"first_name": charge.CustomerName,
			"email":      charge.CustomerEmail,
		},
		"gopay": map[string]interface{}{
			"enable_callback": false,
		},
	}

	body, _ := json.Marshal(payload)
	req, err := http.NewRequest("POST", m.baseURL()+"/v2/charge", bytes.NewReader(body))
	if err != nil {
		return nil, err
	}

	auth := base64.StdEncoding.EncodeToString([]byte(m.serverKey + ":"))
	req.Header.Set("Authorization", "Basic "+auth)
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Accept", "application/json")

	client := &http.Client{Timeout: 15 * time.Second}
	resp, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("request failed: %w", err)
	}
	defer resp.Body.Close()

	data, _ := io.ReadAll(resp.Body)

	var result struct {
		TransactionID string `json:"transaction_id"`
		OrderID       string `json:"order_id"`
		StatusCode    string `json:"status_code"`
		StatusMessage string `json:"status_message"`
		Actions       []struct {
			Name string `json:"name"`
			URL  string `json:"url"`
		} `json:"actions"`
	}
	if err := json.Unmarshal(data, &result); err != nil {
		return nil, fmt.Errorf("parse response: %w", err)
	}
	if result.StatusCode != "201" {
		return nil, fmt.Errorf("midtrans: %s", result.StatusMessage)
	}

	res := &GopayResult{
		TransactionID: result.TransactionID,
		OrderID:       result.OrderID,
	}
	for _, a := range result.Actions {
		switch a.Name {
		case "generate-qr-code":
			res.QRCodeURL = a.URL
		case "deeplink-redirect":
			res.DeepLinkURL = a.URL
		}
	}
	return res, nil
}
