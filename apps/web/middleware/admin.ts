export default defineNuxtRouteMiddleware((to) => {
  if (import.meta.server) return

  const token = localStorage.getItem('admin_token')
  if (!token) {
    return navigateTo('/admin/login')
  }
})
