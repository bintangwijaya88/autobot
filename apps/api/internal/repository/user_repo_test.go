package repository

import (
	"strings"
	"testing"
	"unicode"
)

// ─── randomDigits ─────────────────────────────────────────────────────────────

func TestRandomDigits_Length(t *testing.T) {
	for _, n := range []int{1, 4, 6, 10} {
		got, err := RandomDigitsForTest(n)
		if err != nil {
			t.Fatalf("n=%d: unexpected error: %v", n, err)
		}
		if len(got) != n {
			t.Errorf("n=%d: len=%d, want %d", n, len(got), n)
		}
	}
}

func TestRandomDigits_OnlyDigits(t *testing.T) {
	for i := 0; i < 20; i++ {
		s, err := RandomDigitsForTest(6)
		if err != nil {
			t.Fatalf("unexpected error: %v", err)
		}
		for _, r := range s {
			if !unicode.IsDigit(r) {
				t.Errorf("non-digit char %q in %q", r, s)
			}
		}
	}
}

func TestRandomDigits_IsRandom(t *testing.T) {
	// Very unlikely to get the same code twice in 50 calls
	seen := make(map[string]bool)
	for i := 0; i < 50; i++ {
		s, _ := RandomDigitsForTest(6)
		seen[s] = true
	}
	if len(seen) < 5 {
		t.Errorf("expected random distribution, got only %d unique values in 50 calls", len(seen))
	}
}

// ─── hashPassword / checkPassword ────────────────────────────────────────────

func TestHashPassword_ProducesValidBcryptHash(t *testing.T) {
	hash := HashPasswordForTest("mypassword123")
	if hash == "" {
		t.Fatal("expected non-empty hash")
	}
	// bcrypt hashes start with $2a$, $2b$, or $2y$
	if !strings.HasPrefix(hash, "$2") {
		t.Errorf("hash %q doesn't look like bcrypt", hash)
	}
}

func TestHashPassword_DifferentHashEachTime(t *testing.T) {
	h1 := HashPasswordForTest("samepassword")
	h2 := HashPasswordForTest("samepassword")
	if h1 == h2 {
		t.Error("bcrypt should produce different salts each call")
	}
}

func TestCheckPassword_CorrectPassword(t *testing.T) {
	pw := "secret123"
	hash := HashPasswordForTest(pw)
	if !CheckPasswordForTest(hash, pw) {
		t.Error("checkPassword returned false for correct password")
	}
}

func TestCheckPassword_WrongPassword(t *testing.T) {
	hash := HashPasswordForTest("correct")
	if CheckPasswordForTest(hash, "wrong") {
		t.Error("checkPassword returned true for wrong password")
	}
}

func TestCheckPassword_EmptyPassword(t *testing.T) {
	hash := HashPasswordForTest("notempty")
	if CheckPasswordForTest(hash, "") {
		t.Error("checkPassword returned true for empty password")
	}
}

func TestCheckPassword_EmptyHash(t *testing.T) {
	if CheckPasswordForTest("", "anypassword") {
		t.Error("checkPassword returned true for empty hash")
	}
}
