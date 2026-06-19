<template>
  <aside
    class="flex flex-col h-full relative"
    style="width: 256px; background: #111111; border-right: 1px solid rgba(255,255,255,0.06);"
  >
    <!-- Actions -->
    <div class="px-2 pb-1 space-y-0.5 shrink-0">
      <button
        @click="newChat"
        class="sidebar-item w-full font-medium"
        style="color: #F0F0F0;"
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" class="shrink-0 opacity-80">
          <path d="M10 5.25v9.5M5.25 10h9.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        </svg>
        {{ t('sidebar.newChat') }}
      </button>
      <button class="sidebar-item w-full" @click="openSearch">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" class="shrink-0">
          <path d="M15.5 15.5L12 12m-3.5 1.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        {{ t('sidebar.search') }}
        <span class="ml-auto text-[10px] font-semibold tracking-[0.18em]" style="color: rgba(255,255,255,0.24);">
          ⌘K
        </span>
      </button>
    </div>

    <!-- Nav links -->
    <div class="px-2 mt-2 space-y-0.5 shrink-0">
      <div class="px-2 mb-1">
        <span class="text-[11px] font-semibold tracking-widest uppercase" style="color: rgba(255,255,255,0.25);">{{ t('sidebar.explore') }}</span>
      </div>
      <NuxtLink to="/features" class="sidebar-item">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" class="shrink-0">
          <path d="M3.5 10a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0ZM10 7v3l2 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        {{ t('sidebar.features') }}
      </NuxtLink>
      <NuxtLink to="/products" class="sidebar-item">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" class="shrink-0">
          <rect x="3" y="3" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
          <rect x="11" y="3" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
          <rect x="3" y="11" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
          <rect x="11" y="11" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
        </svg>
        {{ t('sidebar.products') }}
      </NuxtLink>
      <NuxtLink to="/company" class="sidebar-item">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" class="shrink-0">
          <circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.5"/>
          <path d="M10 9v5M10 7v.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
        {{ t('sidebar.about') }}
      </NuxtLink>
      <NuxtLink to="/order" class="sidebar-item" style="color: #a78bfa;">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" class="shrink-0">
          <rect x="3" y="4.5" width="14" height="13" rx="2" stroke="currentColor" stroke-width="1.5"/>
          <path d="M3 8.5h14M7 2.5v4M13 2.5v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        {{ t('sidebar.consult') }}
      </NuxtLink>
    </div>

    <!-- Scrollable middle: Features + Recent -->
    <div class="flex-1 overflow-y-auto px-2 mt-3 min-h-0 space-y-4 pb-2">

      <!-- FITUR section -->
      <div>
        <div class="px-2 mb-2">
          <span class="text-[11px] font-semibold tracking-widest uppercase" style="color: rgba(255,255,255,0.25);">{{ t('sidebar.features') }}</span>
        </div>
        <div class="space-y-1.5">
          <div
            v-for="cat in featureCategories"
            :key="cat.id"
            class="rounded-xl overflow-hidden"
            :style="`border: 1px solid ${cat.borderColor};`"
          >
            <!-- Category header -->
            <button
              class="w-full flex items-center gap-2.5 px-3 py-2.5 transition-all"
              :style="`background: ${cat.bgColor};`"
              @click="toggleCat(cat.id)"
            >
              <span class="text-[15px] leading-none shrink-0">{{ cat.icon }}</span>
              <span class="flex-1 text-left text-[12.5px] font-semibold" :style="`color: ${cat.labelColor};`">{{ cat.label }}</span>
              <svg
                width="13" height="13" viewBox="0 0 20 20" fill="none"
                class="shrink-0 transition-transform duration-200"
                :style="`color: ${cat.labelColor}; opacity: 0.6; transform: rotate(${openCats.has(cat.id) ? '180deg' : '0deg'})`"
              >
                <path d="M5 8l5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>

            <!-- Features list -->
            <div v-if="openCats.has(cat.id)" class="px-2 pb-2 pt-1 space-y-0.5" style="background: rgba(0,0,0,0.2);">
              <button
                v-for="feat in cat.features"
                :key="feat.label"
                class="w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-left transition-all group"
                style="color: rgba(255,255,255,0.50);"
                @click="sendFeatureQuery(feat.query)"
                @mouseover="e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.85)'; }"
                @mouseleave="e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.50)'; }"
              >
                <span class="text-[10px] leading-none shrink-0" style="color: rgba(255,255,255,0.20);">▸</span>
                <span class="text-[12.5px] leading-snug">{{ feat.label }}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Link ke halaman fitur -->
        <NuxtLink
          to="/features"
          class="flex items-center justify-center gap-1.5 mt-2 py-2 rounded-xl text-[12px] font-medium transition-all"
          style="color: rgba(255,255,255,0.30); border: 1px solid rgba(255,255,255,0.06);"
          @mouseover="e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.65)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.14)'; }"
          @mouseleave="e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.30)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'; }"
        >
          {{ t('sidebar.allFeatures') }}
          <svg width="11" height="11" viewBox="0 0 20 20" fill="none">
            <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </NuxtLink>
      </div>

      <!-- RECENT section -->
      <div v-if="chatHistory.length">
        <div class="px-2 mb-1">
          <span class="text-[11px] font-semibold tracking-widest uppercase" style="color: rgba(255,255,255,0.25);">{{ t('sidebar.recent') }}</span>
        </div>
        <div class="space-y-0.5">
          <button
            v-for="h in chatHistory.slice(0, 8)"
            :key="h.id"
            class="sidebar-item w-full truncate"
          >
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" class="shrink-0 opacity-50">
              <path d="M3 10a7 7 0 1 0 14 0A7 7 0 0 0 3 10Zm7-3v3l2 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <span class="truncate text-[13px]">{{ h.preview }}</span>
          </button>
        </div>
      </div>

    </div>

    <!-- Footer -->
    <div class="px-2 pb-3 mt-2 shrink-0" style="border-top: 1px solid rgba(255,255,255,0.05); padding-top: 10px;">

      <!-- Language picker -->
      <button
        data-lang-menu
        @click="toggleLangMenu"
        class="sidebar-item w-full"
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" class="shrink-0">
          <circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.5"/>
          <path d="M10 2.5c0 0-3 3-3 7.5s3 7.5 3 7.5M10 2.5c0 0 3 3 3 7.5s-3 7.5-3 7.5M2.5 10h15" stroke="currentColor" stroke-width="1.5"/>
        </svg>
        <span class="flex-1 truncate">{{ currentLang.label }}</span>
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none" class="shrink-0 opacity-40">
          <path d="M5 8l5 5 5-5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <!-- Language dropdown -->
      <div
        v-if="langOpen"
        data-lang-menu
        class="mt-1 rounded-xl overflow-hidden py-1"
        style="background: #1d1d1d; border: 1px solid rgba(255,255,255,0.09);"
      >
        <button
          v-for="lang in locales"
          :key="lang.code"
          @click="setLang(lang)"
          class="flex items-center gap-2.5 w-full px-3 py-2 text-[13px] transition-colors"
          :style="currentLang.code === lang.code
            ? 'color: #F0F0F0; background: rgba(255,255,255,0.06);'
            : 'color: rgba(255,255,255,0.45);'"
        >
          <span class="text-base leading-none">{{ lang.flag }}</span>
          {{ lang.label }}
          <svg v-if="currentLang.code === lang.code" width="13" height="13" viewBox="0 0 20 20" fill="none" class="ml-auto shrink-0">
            <path d="M4 10l4.5 4.5L16 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <!-- Admin panel shortcut -->
      <NuxtLink
        v-if="isAdmin"
        to="/admin/dashboard"
        class="flex items-center gap-2.5 w-full px-3 py-2 rounded-xl text-[12.5px] font-medium transition-all mt-0.5"
        style="background: rgba(99,102,241,0.12); border: 1px solid rgba(99,102,241,0.25); color: #a5b4fc;"
        @mouseover="e => { (e.currentTarget as HTMLElement).style.background = 'rgba(99,102,241,0.20)'; }"
        @mouseleave="e => { (e.currentTarget as HTMLElement).style.background = 'rgba(99,102,241,0.12)'; }"
      >
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none" class="shrink-0">
          <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
          <rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
          <rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
          <rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
        </svg>
        {{ t('sidebar.adminPanel') }}
        <svg width="11" height="11" viewBox="0 0 20 20" fill="none" class="ml-auto shrink-0 opacity-60">
          <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </NuxtLink>

      <!-- Logged in: user panel -->
      <div v-if="chatStore.userName" class="mt-0.5 rounded-xl px-3 py-2.5 space-y-2" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07);">
        <div class="flex items-center gap-2.5">
          <div class="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center text-xs font-bold" style="background: rgba(255,255,255,0.10); color: #F0F0F0;">
            {{ chatStore.userName.charAt(0).toUpperCase() }}
          </div>
          <span class="text-[13px] font-medium truncate flex-1" style="color: #F0F0F0;">{{ chatStore.userName }}</span>
        </div>
        <button
          v-if="chatStore.accessKey"
          @click="copyKey"
          class="flex items-center gap-2 w-full text-[11.5px] transition-opacity hover:opacity-70"
          style="color: rgba(255,255,255,0.35);"
        >
          <svg width="13" height="13" viewBox="0 0 20 20" fill="none" class="shrink-0">
            <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" stroke-width="1.5"/>
            <path d="M13 7V5a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2" stroke="currentColor" stroke-width="1.5"/>
          </svg>
          {{ keyCopied ? t('sidebar.copied') : t('sidebar.copyAccessKey') }}
        </button>
      </div>

      <!-- Guest: sign in -->
      <button v-else class="sidebar-item mt-0.5 w-full" @click="openSignIn">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" class="shrink-0">
          <path d="M12.5 3.5H15a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 15 17.5h-2.5M8.5 13.5l4-3.5-4-3.5M12.5 10H3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        {{ t('common.signIn') }}
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useChatStore } from '~/stores/chat'

const chatStore = useChatStore()
const { openSignIn } = useAuth()
const { openSearch } = useSearchModal()
const { t, locale, locales, setLocale } = useLocale()
const chatHistory = ref<{ id: string; preview: string }[]>([])
const langOpen = ref(false)
const keyCopied = ref(false)
const isAdmin = ref(false)

onMounted(() => {
  isAdmin.value = !!localStorage.getItem('admin_token')
})

// ── Feature categories ────────────────────────────────────────────────────────
const featureCategories = [
  {
    id: 'autoreply',
    label: 'Auto-Reply & Rule Engine',
    icon: '↩️',
    bgColor: 'rgba(34,197,94,0.10)',
    borderColor: 'rgba(34,197,94,0.22)',
    labelColor: '#86efac',
    features: [
      { label: 'Exact & Contains Match', query: 'Bagaimana fitur exact match dan contains match auto-reply di WaSigap?' },
      { label: 'Regex Pattern', query: 'Apakah WaSigap mendukung regex untuk aturan auto-reply?' },
      { label: 'Override Per Kontak', query: 'Bisakah saya set aturan reply berbeda untuk kontak tertentu?' },
      { label: 'Default Fallback', query: 'Bagaimana cara setup default fallback reply di WaSigap?' },
    ],
  },
  {
    id: 'ai',
    label: 'AI Multi-Provider',
    icon: '🤖',
    bgColor: 'rgba(99,102,241,0.10)',
    borderColor: 'rgba(99,102,241,0.22)',
    labelColor: '#a5b4fc',
    features: [
      { label: 'OpenAI / Claude / Gemini', query: 'AI provider apa saja yang didukung WaSigap?' },
      { label: 'Knowledge Base (FAQ)', query: 'Bagaimana cara upload knowledge base ke WaSigap?' },
      { label: 'Custom AI Persona', query: 'Bisakah buat persona AI yang berbeda per kontak di WaSigap?' },
      { label: 'Estimasi Biaya AI', query: 'Bagaimana cara pantau biaya penggunaan AI di WaSigap?' },
    ],
  },
  {
    id: 'blast',
    label: 'Broadcast & Blast',
    icon: '📣',
    bgColor: 'rgba(234,179,8,0.08)',
    borderColor: 'rgba(234,179,8,0.20)',
    labelColor: '#fde047',
    features: [
      { label: 'Blast Massal + Delay', query: 'Bagaimana cara blast pesan ke ribuan kontak di WaSigap?' },
      { label: 'Broadcast Terjadwal', query: 'Bagaimana cara menjadwalkan broadcast di WaSigap?' },
      { label: 'Template + Media', query: 'Bagaimana cara membuat template pesan dengan media di WaSigap?' },
      { label: 'Status Pengiriman', query: 'Bagaimana cara melihat status pengiriman broadcast di WaSigap?' },
    ],
  },
  {
    id: 'management',
    label: 'Chat & Kontak',
    icon: '👥',
    bgColor: 'rgba(59,130,246,0.08)',
    borderColor: 'rgba(59,130,246,0.20)',
    labelColor: '#93c5fd',
    features: [
      { label: 'Multi-Device WA', query: 'Berapa banyak nomor WhatsApp yang bisa dihubungkan?' },
      { label: 'Import Kontak Excel', query: 'Bagaimana cara import kontak dari Excel ke WaSigap?' },
      { label: 'Operator Takeover', query: 'Apa itu operator takeover di WaSigap?' },
      { label: 'Jam Operasional', query: 'Bagaimana cara mengatur jam operasional bot WaSigap?' },
    ],
  },
  {
    id: 'modules',
    label: '20+ Modul Bisnis',
    icon: '🏢',
    bgColor: 'rgba(168,85,247,0.08)',
    borderColor: 'rgba(168,85,247,0.20)',
    labelColor: '#c4b5fd',
    features: [
      { label: 'Klinik, Salon, Apotek', query: 'Ceritakan paket modul bisnis kesehatan di WaSigap' },
      { label: 'CRM, Sales, Marketing', query: 'Ceritakan paket modul CRM dan Sales di WaSigap' },
      { label: 'HR, Keuangan, Toko', query: 'Ceritakan paket modul HR dan Keuangan di WaSigap' },
      { label: 'F&B, Event, Travel', query: 'Ceritakan paket modul F&B dan Event di WaSigap' },
    ],
  },
]

const openCats = ref<Set<string>>(new Set(['ai']))

const toggleCat = (id: string) => {
  const s = new Set(openCats.value)
  if (s.has(id)) s.delete(id)
  else s.add(id)
  openCats.value = s
}

const sendFeatureQuery = (query: string) => {
  chatStore.triggerSend(query)
}

const copyKey = async () => {
  if (!chatStore.accessKey) return
  await navigator.clipboard.writeText(chatStore.accessKey)
  keyCopied.value = true
  setTimeout(() => { keyCopied.value = false }, 2000)
}

const currentLang = computed(() => locales.find(lang => lang.code === locale.value) ?? locales[0])

const toggleLangMenu = () => { langOpen.value = !langOpen.value }

const setLang = (lang: (typeof locales)[number]) => {
  setLocale(lang.code)
  langOpen.value = false
}

const newChat = () => chatStore.clearMessages()

// Close dropdown when clicking outside
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (!(e.target as HTMLElement).closest('[data-lang-menu]')) {
      langOpen.value = false
    }
  })
})
</script>
