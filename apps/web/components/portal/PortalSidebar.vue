<template>
  <aside class="flex flex-col w-56 shrink-0 h-full border-r" style="background: #131318; border-color: rgba(255,255,255,0.07);">
    <!-- Logo -->
    <div class="px-4 py-4 border-b flex items-center gap-2.5" style="border-color: rgba(255,255,255,0.07);">
      <img src="/logo.png" alt="Autobot" class="h-7 w-7 rounded-lg object-contain" />
      <div>
        <p class="font-semibold text-sm text-white leading-tight">My Portal</p>
        <p class="text-[10px] truncate max-w-[120px]" style="color: rgba(255,255,255,0.35);">{{ userName }}</p>
      </div>
    </div>

    <!-- Nav -->
    <nav class="flex-1 py-3 px-2 space-y-0.5 overflow-y-auto">
      <NuxtLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors w-full"
        :class="isActive(item.to) ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'"
      >
        <span class="w-4 h-4 shrink-0 flex items-center justify-center opacity-70" v-html="item.icon" />
        <span class="font-medium">{{ item.label }}</span>
      </NuxtLink>
    </nav>

    <!-- Footer -->
    <div class="px-2 py-3 border-t space-y-1" style="border-color: rgba(255,255,255,0.07);">
      <NuxtLink to="/" class="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-gray-500 hover:text-gray-300 hover:bg-white/5 transition-colors">
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none" class="shrink-0 opacity-70">
          <path d="M10 3L3 10M3 10L10 17M3 10h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="font-medium">{{ t('portal.backToChat') }}</span>
      </NuxtLink>
      <button
        @click="logout"
        class="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-red-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none" class="shrink-0">
          <path d="M7 3H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3M13 14l3-4-3-4M16 10H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="font-medium">{{ t('portal.signOut') }}</span>
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
const route = useRoute()
const { currentUser, signOut } = useAuth()
const { t } = useLocale()

const userName = computed(() => currentUser.value?.name ?? 'Customer')

const navItems = [
  {
    to: '/portal',
    label: 'Dashboard',
    icon: `<svg width="14" height="14" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/></svg>`,
  },
  {
    to: '/portal/chats',
    label: 'My Chats',
    icon: `<svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M2 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6l-4 3V5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
  },
  {
    to: '/portal/contacts',
    label: 'My Contacts',
    icon: `<svg width="14" height="14" viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M2 7l8 5 8-5" stroke="currentColor" stroke-width="1.5"/></svg>`,
  },
  {
    to: '/portal/profile',
    label: 'Profile',
    icon: `<svg width="14" height="14" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="6" r="3.5" stroke="currentColor" stroke-width="1.5"/><path d="M3 17c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  },
]

function isActive(to: string) {
  if (to === '/portal') return route.path === '/portal'
  return route.path.startsWith(to)
}

function logout() {
  signOut()
  navigateTo('/portal/login')
}
</script>
