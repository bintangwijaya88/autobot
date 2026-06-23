package handler_test

import "regexp"

// Mirror the same patterns defined in handler/chat.go so user_test.go can use them.
var (
	reEmailPattern = regexp.MustCompile(`^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$`)
	reCodePattern  = regexp.MustCompile(`^\d{6}$`)
)
