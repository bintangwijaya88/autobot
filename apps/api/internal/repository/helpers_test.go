package repository

// Expose internal helpers for white-box testing within the same package.
// These wrappers just call the unexported functions directly.

func RandomDigitsForTest(n int) (string, error) {
	return randomDigits(n)
}

func HashPasswordForTest(password string) string {
	return hashPassword(password)
}

func CheckPasswordForTest(hash, password string) bool {
	return checkPassword(hash, password)
}
