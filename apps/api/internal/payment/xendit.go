package payment

import (
	"context"
	"fmt"

	xendit "github.com/xendit/xendit-go/v6"
	"github.com/xendit/xendit-go/v6/invoice"
)

type Xendit struct {
	client       *xendit.APIClient
	isProduction bool
}

func NewXendit(secretKey string, isProduction bool) *Xendit {
	if secretKey == "" {
		return &Xendit{isProduction: isProduction}
	}
	client := xendit.NewClient(secretKey)
	return &Xendit{client: client, isProduction: isProduction}
}

func (x *Xendit) Enabled() bool {
	return x.client != nil
}

type InvoiceRequest struct {
	ExternalID  string
	Amount      float64
	PayerEmail  string
	Description string
	CustomerName string
	SuccessURL  string
	FailureURL  string
}

type InvoiceResult struct {
	InvoiceID  string
	InvoiceURL string
	ExternalID string
	Status     string
}

func (x *Xendit) CreateInvoice(ctx context.Context, req InvoiceRequest) (*InvoiceResult, error) {
	if !x.Enabled() {
		return nil, fmt.Errorf("xendit not configured")
	}

	desc := req.Description
	createReq := invoice.CreateInvoiceRequest{
		ExternalId:  req.ExternalID,
		Amount:      req.Amount,
		PayerEmail:  &req.PayerEmail,
		Description: &desc,
	}
	if req.SuccessURL != "" {
		createReq.SuccessRedirectUrl = &req.SuccessURL
	}
	if req.FailureURL != "" {
		createReq.FailureRedirectUrl = &req.FailureURL
	}

	resp, _, err := x.client.InvoiceApi.CreateInvoice(ctx).CreateInvoiceRequest(createReq).Execute()
	if err != nil {
		return nil, fmt.Errorf("xendit create invoice: %w", err)
	}

	return &InvoiceResult{
		InvoiceID:  resp.GetId(),
		InvoiceURL: resp.GetInvoiceUrl(),
		ExternalID: resp.GetExternalId(),
		Status:     string(resp.GetStatus()),
	}, nil
}
