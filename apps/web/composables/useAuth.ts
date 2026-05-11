type AuthUser = { name: string; email: string; access_key: string }

export function useAuth() {
  const showSignIn = useState('signInModalOpen', () => false)
  const currentUser = useState<AuthUser | null>('currentUser', () => null)

  function openSignIn() {
    showSignIn.value = true
  }

  function closeSignIn() {
    showSignIn.value = false
  }

  function setUser(user: AuthUser) {
    if (import.meta.client) {
      localStorage.setItem('user_access_key', user.access_key)
      localStorage.setItem('user_name', user.name)
      localStorage.setItem('user_email', user.email)
    }
    currentUser.value = user
    showSignIn.value = false
  }

  function signOut() {
    if (import.meta.client) {
      localStorage.removeItem('user_access_key')
      localStorage.removeItem('user_name')
      localStorage.removeItem('user_email')
    }
    currentUser.value = null
  }

  function loadFromStorage() {
    if (!import.meta.client) return
    const key = localStorage.getItem('user_access_key')
    const name = localStorage.getItem('user_name')
    const email = localStorage.getItem('user_email')
    if (key && name && email) {
      currentUser.value = { name, email, access_key: key }
    }
  }

  return { showSignIn, currentUser, openSignIn, closeSignIn, setUser, signOut, loadFromStorage }
}
