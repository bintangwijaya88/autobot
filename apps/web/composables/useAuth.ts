type AuthUser = { name: string; email: string; access_key: string; role?: string; admin_token?: string }

export function useAuth() {
  const showSignIn = useState('signInModalOpen', () => false)
  const currentUser = useState<AuthUser | null>('currentUser', () => null)
  const hydrated = useState('authHydrated', () => false)

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
      if (user.role) localStorage.setItem('user_role', user.role)
      if (user.admin_token) localStorage.setItem('admin_token', user.admin_token)
    }
    currentUser.value = user
    showSignIn.value = false
  }

  function signOut() {
    if (import.meta.client) {
      localStorage.removeItem('user_access_key')
      localStorage.removeItem('user_name')
      localStorage.removeItem('user_email')
      localStorage.removeItem('user_role')
      localStorage.removeItem('admin_token')
    }
    currentUser.value = null
  }

  function loadFromStorage() {
    if (!import.meta.client) return
    const key = localStorage.getItem('user_access_key')
    const name = localStorage.getItem('user_name')
    const email = localStorage.getItem('user_email')
    const role = localStorage.getItem('user_role') ?? undefined
    if (key && name && email) {
      currentUser.value = { name, email, access_key: key, role }
    }
  }

  if (import.meta.client && !hydrated.value) {
    hydrated.value = true
    loadFromStorage()
  }

  return { showSignIn, currentUser, openSignIn, closeSignIn, setUser, signOut, loadFromStorage }
}
