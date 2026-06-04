export default defineNuxtRouteMiddleware((to) => {
  if (import.meta.server) return
  const key = localStorage.getItem('user_access_key')
  if (!key) return navigateTo('/portal/login')
})
