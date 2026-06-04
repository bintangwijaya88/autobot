<template>
  <div class="flex flex-col h-screen overflow-hidden" style="background: #111111;">

    <!-- Top header -->
    <header
      class="shrink-0 flex items-center justify-between px-5 h-[52px] z-40 relative"
      style="background: #111111; border-bottom: 1px solid rgba(255,255,255,0.07);"
    >
      <!-- Left: Logo -->
      <NuxtLink to="/" class="flex items-center gap-2.5 select-none shrink-0">
        <img src="/logo.png" alt="Autobot" class="h-7 w-auto object-contain" />
        <span class="font-semibold text-[15px] tracking-tight hidden sm:block" style="color: #F0F0F0;">AutobotWs</span>
      </NuxtLink>

      <!-- Center: Nav -->
      <nav class="hidden md:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2">
        <NuxtLink
          v-for="item in navItems"
          :key="item.label"
          :to="item.to"
          class="px-3.5 py-1.5 rounded-lg text-[13.5px] font-medium transition-colors duration-150 whitespace-nowrap"
          style="color: rgba(255,255,255,0.45);"
          active-class="!text-white"
          @mouseover="e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.85)'"
          @mouseleave="e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.45)'"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <!-- Right: CTA -->
      <div class="flex items-center gap-2 shrink-0">
        <button
          class="hidden sm:flex items-center gap-1.5 px-4 h-[34px] rounded-full text-[13px] font-medium transition-all duration-150"
          style="color: rgba(255,255,255,0.5); border: 1px solid rgba(255,255,255,0.10);"
          @mouseover="e => { (e.currentTarget as HTMLElement).style.color = '#F0F0F0'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.22)'; }"
          @mouseleave="e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.10)'; }"
          @click="$router.push('/contact')"
        >
          Contact Sales
        </button>

        <!-- Admin badge (logged in as admin but not as chat user) -->
        <div v-if="isAdmin && !currentUser" class="relative" ref="adminMenuRef">
          <button
            class="flex items-center gap-2 px-3.5 h-[34px] rounded-full text-[13px] font-medium transition-all duration-150"
            style="background: rgba(99,102,241,0.15); color: #a5b4fc; border: 1px solid rgba(99,102,241,0.30);"
            @click="adminMenuOpen = !adminMenuOpen"
          >
            <span class="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold" style="background: rgba(99,102,241,0.3);">A</span>
            Administrator
            <svg width="12" height="12" viewBox="0 0 20 20" fill="none" class="opacity-60">
              <path d="M5 8l5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div
            v-if="adminMenuOpen"
            class="absolute right-0 top-full mt-1.5 rounded-xl py-1.5 z-50"
            style="background: #1a1a1a; border: 1px solid rgba(99,102,241,0.25); box-shadow: 0 8px 24px rgba(0,0,0,0.5); min-width: 180px;"
          >
            <p class="px-3.5 py-1.5 text-[10px] font-semibold tracking-widest uppercase text-indigo-400/60 border-b border-white/6 mb-1">Admin Panel</p>
            <NuxtLink v-for="m in adminMenuItems" :key="m.to" :to="m.to"
              class="flex items-center gap-2.5 px-3.5 py-2 text-[13px] text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
              @click="adminMenuOpen = false"
            >
              <span class="w-3.5 h-3.5 shrink-0 opacity-60" v-html="m.icon" />
              {{ m.label }}
            </NuxtLink>
            <div class="border-t border-white/6 mt-1 pt-1">
              <button
                class="w-full flex items-center gap-2.5 px-3.5 py-2 text-[13px] text-red-400 hover:bg-white/5 transition-colors"
                @click="handleAdminLogout"
              >
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" class="shrink-0">
                  <path d="M7 3H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3M13 14l3-4-3-4M16 10H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Logout Admin
              </button>
            </div>
          </div>
        </div>

        <!-- Signed-in chat user -->
        <template v-else-if="currentUser">
          <div class="relative" ref="userMenuRef">
            <button
              class="flex items-center gap-2 px-3.5 h-[34px] rounded-full text-[13px] font-medium transition-all duration-150"
              style="background: rgba(255,255,255,0.07); color: #F0F0F0; border: 1px solid rgba(255,255,255,0.12);"
              @click="userMenuOpen = !userMenuOpen"
            >
              <span class="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold">
                {{ currentUser.name.charAt(0).toUpperCase() }}
              </span>
              {{ currentUser.name.split(' ')[0] }}
            </button>
            <div
              v-if="userMenuOpen"
              class="absolute right-0 top-full mt-1.5 rounded-xl py-1.5 z-50"
              style="background: #1f1f1f; border: 1px solid rgba(255,255,255,0.10); box-shadow: 0 8px 24px rgba(0,0,0,0.4); min-width: 180px;"
            >
              <p class="px-3.5 py-1.5 text-xs text-gray-500 border-b border-white/8">{{ currentUser.email }}</p>
              <!-- Admin links inside user menu -->
              <template v-if="isAdmin">
                <p class="px-3.5 pt-2 pb-1 text-[10px] font-semibold tracking-widest uppercase text-indigo-400/60">Admin Panel</p>
                <NuxtLink v-for="m in adminMenuItems" :key="m.to" :to="m.to"
                  class="flex items-center gap-2.5 px-3.5 py-2 text-[13px] text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                  @click="userMenuOpen = false"
                >
                  <span class="w-3.5 h-3.5 shrink-0 opacity-60" v-html="m.icon" />
                  {{ m.label }}
                </NuxtLink>
                <div class="border-t border-white/6 mt-1 pt-1" />
              </template>
              <button
                class="w-full text-left px-3.5 py-2 text-sm text-red-400 hover:bg-white/5 transition-colors"
                @click="handleSignOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </template>

        <!-- Not signed in: Sign In button -->
        <template v-else>
          <button
            class="flex items-center gap-1.5 px-4 h-[34px] rounded-full text-[13px] font-medium transition-all duration-150 active:scale-[0.97]"
            style="background: #F0F0F0; color: #111111;"
            @mouseover="e => (e.currentTarget as HTMLElement).style.background = '#E0E0E0'"
            @mouseleave="e => (e.currentTarget as HTMLElement).style.background = '#F0F0F0'"
            @click="openSignIn"
          >
            Sign In
          </button>
        </template>

        <!-- Mobile hamburger -->
        <button
          class="md:hidden flex items-center justify-center w-8 h-8 rounded-lg transition-colors"
          style="color: rgba(255,255,255,0.5);"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

      <!-- Sign In Modal -->
      <CommonSignInModal
        v-if="showSignIn"
        @close="closeSignIn"
      />
    </header>

    <!-- Mobile nav dropdown -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden shrink-0 px-4 py-3 space-y-1 z-30"
      style="background: #171717; border-bottom: 1px solid rgba(255,255,255,0.07);"
    >
      <NuxtLink
        v-for="item in navItems"
        :key="item.label"
        :to="item.to"
        class="flex items-center px-3 py-2 rounded-lg text-[14px] font-medium transition-colors"
        style="color: rgba(255,255,255,0.5);"
        active-class="!text-white bg-white/5"
        @click="mobileMenuOpen = false"
      >
        {{ item.label }}
      </NuxtLink>
      <NuxtLink
        to="/contact"
        class="flex items-center px-3 py-2 rounded-lg text-[14px] font-medium"
        style="color: rgba(255,255,255,0.5);"
        @click="mobileMenuOpen = false"
      >
        Contact Sales
      </NuxtLink>
    </div>

    <!-- Body: sidebar + content -->
    <div class="flex flex-1 min-h-0 overflow-hidden">
      <!-- Sidebar — desktop only -->
      <LayoutSidebar class="hidden lg:flex flex-shrink-0" />

      <!-- Main content -->
      <div class="flex-1 flex flex-col min-w-0 min-h-0">
        <slot />
      </div>
    </div>

    <!-- Legal footer strip -->
    <div
      class="shrink-0 flex items-center justify-center gap-4 px-4 h-7 text-[11px]"
      style="border-top: 1px solid rgba(255,255,255,0.05); color: rgba(255,255,255,0.2);"
    >
      <NuxtLink to="/privacy-policy" class="hover:text-white/40 transition-colors">Kebijakan Privasi</NuxtLink>
      <span>·</span>
      <NuxtLink to="/terms-of-service" class="hover:text-white/40 transition-colors">Syarat &amp; Ketentuan</NuxtLink>
      <span>·</span>
      <NuxtLink to="/refund-policy" class="hover:text-white/40 transition-colors">Kebijakan Refund</NuxtLink>
    </div>

  </div>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)
const userMenuOpen = ref(false)
const userMenuRef = ref<HTMLElement | null>(null)
const adminMenuOpen = ref(false)
const adminMenuRef = ref<HTMLElement | null>(null)

const { showSignIn, currentUser, openSignIn, closeSignIn, signOut, loadFromStorage } = useAuth()

const isAdmin = computed(() =>
  currentUser.value?.role === 'admin' ||
  (import.meta.client && !!localStorage.getItem('admin_token'))
)

const navItems = [
  { label: 'Fitur',        to: '/features' },
  { label: 'Products',     to: '/products' },
  { label: 'Resources',    to: '/resources' },
  { label: 'Case Study',   to: '/partners' },
  { label: 'Konsultasi',   to: '/order' },
]

const adminMenuItems = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: `<svg viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/></svg>` },
  { to: '/admin/sessions',  label: 'Sessions',  icon: `<svg viewBox="0 0 20 20" fill="none"><path d="M2 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6l-4 3V5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>` },
  { to: '/admin/users',     label: 'Users',     icon: `<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="6" r="3.5" stroke="currentColor" stroke-width="1.5"/><path d="M3 17c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>` },
  { to: '/admin/contacts',  label: 'Contacts',  icon: `<svg viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M2 7l8 5 8-5" stroke="currentColor" stroke-width="1.5"/></svg>` },
  { to: '/admin/products',  label: 'Products',  icon: `<svg viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M2 7h16M7 7v11" stroke="currentColor" stroke-width="1.5"/></svg>` },
  { to: '/admin/knowledge', label: 'Knowledge Base', icon: `<svg viewBox="0 0 20 20" fill="none"><path d="M10 2a6 6 0 0 1 6 6c0 2.5-1.5 4.6-3.5 5.5V15H7.5v-1.5C5.5 12.6 4 10.5 4 8a6 6 0 0 1 6-6Z" stroke="currentColor" stroke-width="1.5"/><path d="M7.5 18h5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>` },
  { to: '/admin/content',   label: 'Content',   icon: `<svg viewBox="0 0 20 20" fill="none"><path d="M4 4h12M4 8h12M4 12h7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>` },
  { to: '/admin/email',     label: 'Email Templates', icon: `<svg viewBox="0 0 20 20" fill="none"><path d="M3 4h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" stroke="currentColor" stroke-width="1.5"/><path d="M2 5l8 7 8-7" stroke="currentColor" stroke-width="1.5"/></svg>` },
]

onMounted(() => {
  loadFromStorage()
  document.addEventListener('click', (e) => {
    if (userMenuRef.value && !userMenuRef.value.contains(e.target as Node)) {
      userMenuOpen.value = false
    }
    if (adminMenuRef.value && !adminMenuRef.value.contains(e.target as Node)) {
      adminMenuOpen.value = false
    }
  })
})

function handleSignOut() {
  signOut()
  userMenuOpen.value = false
}

function handleAdminLogout() {
  localStorage.removeItem('admin_token')
  isAdmin.value = false
  adminMenuOpen.value = false
  navigateTo('/admin/login')
}
</script>
