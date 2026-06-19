<script setup lang="ts">
type SearchItemKind = 'page' | 'product' | 'feature' | 'resource' | 'partner' | 'contact' | 'chat'

type SearchItem = {
  id: string
  kind: SearchItemKind
  title: string
  description: string
  category: string
  route?: string
  externalUrl?: string
  query?: string
  tags: string[]
  emoji: string
  actionLabel: string
  aliases?: string[]
}

const { locale } = useLocale()
const { closeSearch } = useSearchModal()
const chatStore = useChatStore()
const config = useRuntimeConfig()

const query = ref('')
const inputRef = ref<HTMLInputElement | null>(null)
const navigating = ref(false)

const { data: productsData } = await useFetch<{ data: any[] }>(`${config.public.apiBase}/api/products`)
const { data: partnersData } = await useFetch<{ data: any[] }>(`${config.public.apiBase}/api/partners`)

const staticItems = computed<SearchItem[]>(() => [
  {
    id: 'page-features',
    kind: 'page',
    title: locale.value === 'id' ? 'Fitur Lengkap WaSigap' : 'WaSigap Features',
    description: locale.value === 'id'
      ? 'Auto-reply, AI multi-provider, broadcast, manajemen kontak, dan 20+ modul bisnis.'
      : 'Auto-reply, AI multi-provider, broadcast, contact management, and 20+ business modules.',
    category: locale.value === 'id' ? 'Halaman Publik' : 'Public Page',
    route: '/features',
    tags: ['feature', 'ai', 'blast', 'crm'],
    emoji: '✨',
    actionLabel: locale.value === 'id' ? 'Buka halaman' : 'Open page',
    aliases: ['fitur', 'features', 'wa blast', 'autoreply', 'broadcast', 'ai', 'crm'],
  },
  {
    id: 'page-products',
    kind: 'page',
    title: locale.value === 'id' ? 'Semua Produk Autobot' : 'Autobot Products',
    description: locale.value === 'id'
      ? 'Koleksi produk chatbot, workflow, integrasi, dan custom AI.'
      : 'Product catalog for chatbot, workflow, integration, and custom AI solutions.',
    category: locale.value === 'id' ? 'Halaman Publik' : 'Public Page',
    route: '/products',
    tags: ['products', 'catalog', 'solutions'],
    emoji: '📦',
    actionLabel: locale.value === 'id' ? 'Lihat produk' : 'View products',
    aliases: ['product', 'produk', 'catalog'],
  },
  {
    id: 'page-pricing',
    kind: 'page',
    title: locale.value === 'id' ? 'Harga & Paket' : 'Pricing & Plans',
    description: locale.value === 'id'
      ? 'Bandingkan paket, lisensi, dan penawaran produk Autobot.'
      : 'Compare plans, licensing, and product offers from Autobot.',
    category: locale.value === 'id' ? 'Halaman Publik' : 'Public Page',
    route: '/pricing',
    tags: ['pricing', 'package', 'plan'],
    emoji: '💳',
    actionLabel: locale.value === 'id' ? 'Lihat paket' : 'View plans',
    aliases: ['price', 'harga', 'paket'],
  },
  {
    id: 'page-order',
    kind: 'page',
    title: locale.value === 'id' ? 'Konsultasi / Order' : 'Consultation / Order',
    description: locale.value === 'id'
      ? 'Mulai konsultasi, jelaskan kebutuhan, dan minta penawaran.'
      : 'Start a consultation, describe your needs, and request a quote.',
    category: locale.value === 'id' ? 'Halaman Publik' : 'Public Page',
    route: '/order',
    tags: ['consultation', 'order', 'quote'],
    emoji: '📝',
    actionLabel: locale.value === 'id' ? 'Buka form' : 'Open form',
    aliases: ['order', 'consultation', 'konsultasi', 'request'],
  },
  {
    id: 'page-contact',
    kind: 'page',
    title: locale.value === 'id' ? 'Kontak Autobot' : 'Autobot Contact',
    description: 'support@autobot.co.id · +62 821-6486-7681 · WhatsApp admin',
    category: locale.value === 'id' ? 'Kontak' : 'Contact',
    route: '/contact',
    tags: ['contact', 'support', 'sales'],
    emoji: '☎️',
    actionLabel: locale.value === 'id' ? 'Hubungi' : 'Contact',
    aliases: ['contact', 'support', 'sales', 'whatsapp'],
  },
  {
    id: 'page-about',
    kind: 'page',
    title: locale.value === 'id' ? 'Tentang Autobot' : 'About Autobot',
    description: locale.value === 'id'
      ? 'Profil autobotws: visi, keunggulan, produk, dan tim.'
      : 'autobotws company profile, vision, strengths, products, and team.',
    category: locale.value === 'id' ? 'Perusahaan' : 'Company',
    route: '/company',
    tags: ['about', 'company', 'team'],
    emoji: '🏢',
    actionLabel: locale.value === 'id' ? 'Buka halaman' : 'Open page',
    aliases: ['about', 'company', 'team', 'profile'],
  },
  {
    id: 'page-resources',
    kind: 'page',
    title: locale.value === 'id' ? 'Developer Resources' : 'Developer Resources',
    description: locale.value === 'id'
      ? 'API reference, WebSocket guide, SDK, dan webhook events.'
      : 'API reference, WebSocket guide, SDKs, and webhook events.',
    category: locale.value === 'id' ? 'Dokumentasi' : 'Docs',
    route: '/resources',
    tags: ['api', 'docs', 'websocket', 'sdk'],
    emoji: '📚',
    actionLabel: locale.value === 'id' ? 'Lihat dokumentasi' : 'View docs',
    aliases: ['api', 'docs', 'documentation', 'websocket', 'sdk'],
  },
  {
    id: 'page-partners',
    kind: 'page',
    title: locale.value === 'id' ? 'Klien & Mitra' : 'Clients & Partners',
    description: locale.value === 'id'
      ? 'Daftar klien, testimoni, dan studi kasus dari berbagai industri.'
      : 'Client list, testimonials, and case studies across industries.',
    category: locale.value === 'id' ? 'Bukti Sosial' : 'Social Proof',
    route: '/partners',
    tags: ['partners', 'clients', 'case study'],
    emoji: '🤝',
    actionLabel: locale.value === 'id' ? 'Lihat mitra' : 'View partners',
    aliases: ['partner', 'client', 'case study', 'testimonial'],
  },
  {
    id: 'page-privacy',
    kind: 'page',
    title: locale.value === 'id' ? 'Kebijakan Privasi' : 'Privacy Policy',
    description: locale.value === 'id'
      ? 'Penjelasan bagaimana data dikumpulkan, disimpan, dan digunakan.'
      : 'How data is collected, stored, and used.',
    category: locale.value === 'id' ? 'Legal' : 'Legal',
    route: '/privacy-policy',
    tags: ['privacy', 'legal'],
    emoji: '🔒',
    actionLabel: locale.value === 'id' ? 'Baca' : 'Read',
    aliases: ['privacy', 'policy'],
  },
  {
    id: 'page-terms',
    kind: 'page',
    title: locale.value === 'id' ? 'Syarat & Ketentuan' : 'Terms of Service',
    description: locale.value === 'id'
      ? 'Aturan penggunaan layanan dan batasan tanggung jawab.'
      : 'Terms, usage rules, and service limitations.',
    category: locale.value === 'id' ? 'Legal' : 'Legal',
    route: '/terms-of-service',
    tags: ['terms', 'legal'],
    emoji: '📄',
    actionLabel: locale.value === 'id' ? 'Baca' : 'Read',
    aliases: ['terms', 'service', 'agreement'],
  },
  {
    id: 'page-refund',
    kind: 'page',
    title: locale.value === 'id' ? 'Kebijakan Refund' : 'Refund Policy',
    description: locale.value === 'id'
      ? 'Ketentuan pengembalian dana dan proses refund.'
      : 'Refund terms and the refund process.',
    category: locale.value === 'id' ? 'Legal' : 'Legal',
    route: '/refund-policy',
    tags: ['refund', 'legal'],
    emoji: '↩️',
    actionLabel: locale.value === 'id' ? 'Baca' : 'Read',
    aliases: ['refund', 'return'],
  },
  {
    id: 'chat-home',
    kind: 'chat',
    title: locale.value === 'id' ? 'Mulai percakapan' : 'Start chat',
    description: locale.value === 'id'
      ? 'Kirim pertanyaan langsung ke Autobot AI.'
      : 'Send your question directly to Autobot AI.',
    category: locale.value === 'id' ? 'AI Chat' : 'AI Chat',
    query: locale.value === 'id'
      ? 'Saya ingin bertanya tentang Autobot'
      : 'I want to ask about Autobot',
    tags: ['chat', 'ask', 'ai'],
    emoji: '💬',
    actionLabel: locale.value === 'id' ? 'Tanya AI' : 'Ask AI',
    aliases: ['chat', 'ask', 'question', 'ask ai'],
  },
])

const resourceItems = computed<SearchItem[]>(() => [
  {
    id: 'resource-api',
    kind: 'resource',
    title: 'API Reference',
    description: locale.value === 'id'
      ? 'Endpoint REST untuk chatbot, sesi, produk, dan portal.'
      : 'REST endpoints for chatbot, sessions, products, and portal.',
    category: locale.value === 'id' ? 'Dokumentasi' : 'Docs',
    route: '/resources',
    tags: ['api', 'rest', 'endpoint'],
    emoji: '🔌',
    actionLabel: locale.value === 'id' ? 'Buka docs' : 'Open docs',
    aliases: ['api reference', 'rest api'],
  },
  {
    id: 'resource-websocket',
    kind: 'resource',
    title: 'WebSocket Guide',
    description: locale.value === 'id'
      ? 'Panduan streaming chat real-time dan event socket.'
      : 'Guide to real-time chat streaming and socket events.',
    category: locale.value === 'id' ? 'Dokumentasi' : 'Docs',
    route: '/resources',
    tags: ['websocket', 'ws', 'realtime'],
    emoji: '⚡',
    actionLabel: locale.value === 'id' ? 'Buka docs' : 'Open docs',
    aliases: ['socket', 'realtime'],
  },
  {
    id: 'resource-sdk',
    kind: 'resource',
    title: 'SDK & Libraries',
    description: locale.value === 'id'
      ? 'SDK JavaScript, Python, dan Go untuk integrasi cepat.'
      : 'JavaScript, Python, and Go SDKs for quick integration.',
    category: locale.value === 'id' ? 'Dokumentasi' : 'Docs',
    route: '/resources',
    tags: ['sdk', 'library'],
    emoji: '🧩',
    actionLabel: locale.value === 'id' ? 'Buka docs' : 'Open docs',
    aliases: ['sdk', 'library', 'libraries'],
  },
  {
    id: 'resource-webhook',
    kind: 'resource',
    title: 'Webhook Events',
    description: locale.value === 'id'
      ? 'Payload event untuk integrasi sistem internal.'
      : 'Event payloads for integrating with your internal systems.',
    category: locale.value === 'id' ? 'Dokumentasi' : 'Docs',
    route: '/resources',
    tags: ['webhook', 'event'],
    emoji: '📦',
    actionLabel: locale.value === 'id' ? 'Buka docs' : 'Open docs',
    aliases: ['webhook events'],
  },
])

const featureItems = computed<SearchItem[]>(() => [
  {
    id: 'feature-autoreply',
    kind: 'feature',
    title: 'Auto-Reply & Rule Engine',
    description: locale.value === 'id'
      ? 'Exact match, contains match, regex, override kontak, dan fallback.'
      : 'Exact match, contains match, regex, contact override, and fallback.',
    category: locale.value === 'id' ? 'Fitur' : 'Feature',
    query: 'Bagaimana fitur auto-reply dan rule engine bekerja di WaSigap?',
    tags: ['auto-reply', 'rule', 'regex'],
    emoji: '↩️',
    actionLabel: locale.value === 'id' ? 'Tanya AI' : 'Ask AI',
    aliases: ['autoreply', 'rule engine', 'regex', 'fallback'],
  },
  {
    id: 'feature-ai',
    kind: 'feature',
    title: 'AI Multi-Provider',
    description: locale.value === 'id'
      ? 'OpenAI, Claude, Gemini, knowledge base, persona, dan estimasi biaya.'
      : 'OpenAI, Claude, Gemini, knowledge base, persona, and cost estimates.',
    category: locale.value === 'id' ? 'Fitur' : 'Feature',
    query: 'AI provider apa saja yang didukung dan bagaimana knowledge base-nya?',
    tags: ['ai', 'openai', 'claude', 'gemini'],
    emoji: '🤖',
    actionLabel: locale.value === 'id' ? 'Tanya AI' : 'Ask AI',
    aliases: ['ai provider', 'knowledge base', 'persona'],
  },
  {
    id: 'feature-blast',
    kind: 'feature',
    title: 'Broadcast & Blast',
    description: locale.value === 'id'
      ? 'Blast massal, broadcast terjadwal, media, status pengiriman, delay.'
      : 'Mass blast, scheduled broadcast, media, delivery status, and delay.',
    category: locale.value === 'id' ? 'Fitur' : 'Feature',
    query: 'Bagaimana cara broadcast dan blast pesan massal di WaSigap?',
    tags: ['broadcast', 'blast', 'schedule'],
    emoji: '📣',
    actionLabel: locale.value === 'id' ? 'Tanya AI' : 'Ask AI',
    aliases: ['broadcast', 'blast', 'mass message'],
  },
  {
    id: 'feature-contact',
    kind: 'feature',
    title: 'Chat & Kontak',
    description: locale.value === 'id'
      ? 'Multi-device, import Excel, operator takeover, jam operasional.'
      : 'Multi-device, Excel import, operator takeover, operating hours.',
    category: locale.value === 'id' ? 'Fitur' : 'Feature',
    query: 'Bagaimana manajemen chat dan kontak di WaSigap?',
    tags: ['chat', 'contacts', 'excel'],
    emoji: '👥',
    actionLabel: locale.value === 'id' ? 'Tanya AI' : 'Ask AI',
    aliases: ['chat log', 'contacts', 'multi device'],
  },
  {
    id: 'feature-modules',
    kind: 'feature',
    title: '20+ Modul Bisnis',
    description: locale.value === 'id'
      ? 'Klinik, CRM, keuangan, F&B, travel, event, dan lainnya.'
      : 'Clinic, CRM, finance, F&B, travel, events, and more.',
    category: locale.value === 'id' ? 'Fitur' : 'Feature',
    query: 'Ceritakan paket modul bisnis yang tersedia di WaSigap',
    tags: ['modules', 'business', 'industry'],
    emoji: '🏢',
    actionLabel: locale.value === 'id' ? 'Tanya AI' : 'Ask AI',
    aliases: ['module', 'business module', 'industry'],
  },
])

const contactItems = computed<SearchItem[]>(() => [
  {
    id: 'contact-email',
    kind: 'contact',
    title: 'support@autobot.co.id',
    description: locale.value === 'id'
      ? 'Email support dan sales utama.'
      : 'Primary support and sales email.',
    category: locale.value === 'id' ? 'Kontak' : 'Contact',
    externalUrl: 'mailto:support@autobot.co.id',
    tags: ['email', 'support'],
    emoji: '✉️',
    actionLabel: locale.value === 'id' ? 'Kirim email' : 'Send email',
    aliases: ['email', 'support email'],
  },
  {
    id: 'contact-whatsapp',
    kind: 'contact',
    title: '+62 821-6486-7681',
    description: locale.value === 'id'
      ? 'Chat WhatsApp untuk sales dan konsultasi.'
      : 'WhatsApp chat for sales and consultation.',
    category: locale.value === 'id' ? 'Kontak' : 'Contact',
    externalUrl: 'https://wa.me/6282164867681',
    tags: ['whatsapp', 'sales'],
    emoji: '📱',
    actionLabel: locale.value === 'id' ? 'Buka WhatsApp' : 'Open WhatsApp',
    aliases: ['whatsapp', 'wa', 'phone'],
  },
])

const apiProducts = computed<SearchItem[]>(() =>
  (productsData.value?.data || []).map((product: any) => ({
    id: `product-${product.slug}`,
    kind: 'product',
    title: product.name,
    description: product.tagline || product.description || '',
    category: locale.value === 'id' ? 'Produk' : 'Product',
    route: `/products/${product.slug}`,
    query: `Ceritakan detail tentang produk ${product.name}`,
    tags: [product.category, ...(product.features || []).slice(0, 3)],
    emoji: product.category === 'chatbot' ? '🤖' : product.category === 'blast' ? '📣' : product.category === 'ai_agent' ? '🧠' : '📦',
    actionLabel: locale.value === 'id' ? 'Lihat detail' : 'View details',
    aliases: [product.slug, product.name, product.category, ...(product.features || [])],
  }))
)

const apiPartners = computed<SearchItem[]>(() =>
  (partnersData.value?.data || []).slice(0, 12).map((partner: any) => ({
    id: `partner-${partner.id}`,
    kind: 'partner',
    title: partner.name,
    description: partner.description || partner.testimonial || '',
    category: locale.value === 'id' ? 'Mitra' : 'Partner',
    route: '/partners',
    tags: [partner.partnership_type || 'client'],
    emoji: '🤝',
    actionLabel: locale.value === 'id' ? 'Lihat mitra' : 'View partners',
    aliases: [partner.name, partner.description || '', partner.testimonial || '', partner.partnership_type || ''],
  }))
)

const allItems = computed(() => [
  ...staticItems.value,
  ...resourceItems.value,
  ...featureItems.value,
  ...contactItems.value,
  ...apiProducts.value,
  ...apiPartners.value,
])

const normalizedQuery = computed(() => normalize(query.value))

const filteredItems = computed(() => {
  const q = normalizedQuery.value
  const base = allItems.value
  if (!q) {
    return base.slice(0, 12)
  }

  return base
    .map(item => ({ item, score: scoreItem(item, q) }))
    .filter(entry => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(entry => entry.item)
    .slice(0, 20)
})

const quickItems = computed(() => allItems.value.slice(0, 8))

const groupLabel = (kind: SearchItemKind) => {
  switch (kind) {
    case 'product': return locale.value === 'id' ? 'Produk' : 'Products'
    case 'feature': return locale.value === 'id' ? 'Fitur' : 'Features'
    case 'resource': return locale.value === 'id' ? 'Dokumentasi' : 'Docs'
    case 'partner': return locale.value === 'id' ? 'Mitra' : 'Partners'
    case 'contact': return locale.value === 'id' ? 'Kontak' : 'Contact'
    case 'chat': return locale.value === 'id' ? 'AI Chat' : 'AI Chat'
    default: return locale.value === 'id' ? 'Halaman' : 'Pages'
  }
}

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

function scoreItem(item: SearchItem, q: string) {
  const haystack = normalize([
    item.title,
    item.description,
    item.category,
    item.tags.join(' '),
    item.aliases?.join(' ') || '',
    item.route || '',
    item.query || '',
  ].join(' '))

  if (!haystack.includes(q)) return 0

  let score = 20
  const title = normalize(item.title)
  const category = normalize(item.category)
  if (title === q) score += 120
  else if (title.startsWith(q)) score += 100
  else if (title.includes(q)) score += 70
  if (category.includes(q)) score += 28
  if ((item.aliases || []).some(a => normalize(a).includes(q))) score += 26
  if ((item.tags || []).some(t => normalize(t).includes(q))) score += 18
  if (item.route && normalize(item.route).includes(q)) score += 16
  return score
}

function highlightText(text: string) {
  const q = normalizedQuery.value
  if (!q) return [{ text, match: false }]
  const normalized = normalize(text)
  const idx = normalized.indexOf(q)
  if (idx === -1) return [{ text, match: false }]

  const raw = text
  const lowered = raw.toLowerCase()
  const start = lowered.indexOf(q)
  if (start === -1) return [{ text, match: false }]
  return [
    { text: raw.slice(0, start), match: false },
    { text: raw.slice(start, start + q.length), match: true },
    { text: raw.slice(start + q.length), match: false },
  ]
}

async function openItem(item: SearchItem) {
  navigating.value = true
  try {
    closeSearch()
    if (item.kind === 'chat' && item.query) {
      chatStore.triggerSend(item.query)
      await navigateTo('/')
      return
    }

    if (item.externalUrl) {
      window.open(item.externalUrl, '_blank', 'noopener')
      return
    }

    if (item.route) {
      await navigateTo(item.route)
      return
    }
  } finally {
    navigating.value = false
  }
}

function clearQuery() {
  query.value = ''
  inputRef.value?.focus()
}

onMounted(() => {
  nextTick(() => inputRef.value?.focus())
})

watch(query, () => {
  navigating.value = false
})
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-[70] flex items-start justify-center px-4 py-6 sm:py-10 overflow-y-auto"
      style="background: rgba(0,0,0,0.72); backdrop-filter: blur(18px);"
      @click.self="closeSearch"
    >
      <div
        class="w-full max-w-[760px] overflow-hidden rounded-[32px] border shadow-2xl"
        style="background: linear-gradient(180deg, rgba(19,19,20,0.98) 0%, rgba(12,12,13,0.98) 100%); border-color: rgba(255,255,255,0.10); box-shadow: 0 32px 90px rgba(0,0,0,0.60);"
      >
        <div class="px-5 pt-5 pb-4 sm:px-6 sm:pt-6 sm:pb-5">
          <div class="flex items-center justify-between gap-3 mb-4">
            <div>
              <p class="text-[11px] font-semibold uppercase tracking-[0.28em]" style="color: rgba(255,255,255,0.28);">
                {{ locale === 'id' ? 'Pencarian Cepat' : 'Quick Search' }}
              </p>
              <h2 class="mt-1 text-[18px] sm:text-[20px] font-semibold tracking-tight text-white">
                {{ locale === 'id' ? 'Cari semua informasi Autobot' : 'Search all Autobot information' }}
              </h2>
            </div>
            <button
              class="hidden sm:flex items-center gap-2 rounded-full px-3 py-1.5 text-[12px] font-medium transition-colors"
              style="background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.48); border: 1px solid rgba(255,255,255,0.08);"
              @click="closeSearch"
            >
              Esc
            </button>
          </div>

          <div
            class="flex items-center gap-3 rounded-[22px] px-4 py-3"
            style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); box-shadow: inset 0 1px 0 rgba(255,255,255,0.04);"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" class="shrink-0" style="color: rgba(255,255,255,0.38);">
              <path d="M15.5 15.5L12 12m-3.5 1.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </svg>
            <input
              ref="inputRef"
              v-model="query"
              type="search"
              class="w-full bg-transparent text-[15px] text-white outline-none placeholder:text-white/25"
              :placeholder="locale === 'id' ? 'Ketik produk, fitur, halaman, mitra, atau pertanyaan...' : 'Type a product, feature, page, partner, or question...'"
              @keydown.esc="closeSearch"
            />
            <button
              v-if="query"
              class="rounded-full px-2.5 py-1 text-[12px] font-medium transition-colors"
              style="background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.45);"
              @click="clearQuery"
            >
              Clear
            </button>
            <div class="hidden sm:flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium" style="background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.38);">
              <span>⌘</span><span>K</span>
            </div>
          </div>

          <div class="mt-4 flex flex-wrap items-center gap-2">
            <button
              v-for="item in quickItems"
              :key="item.id"
              class="rounded-full px-3 py-1.5 text-[12px] transition-colors"
              style="background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.50); border: 1px solid rgba(255,255,255,0.07);"
              @click="query = item.title"
            >
              {{ item.title }}
            </button>
          </div>
        </div>

        <div class="max-h-[58vh] overflow-y-auto px-3 pb-4 sm:px-4">
          <div v-if="filteredItems.length" class="space-y-2">
            <button
              v-for="item in filteredItems"
              :key="item.id"
              class="group flex w-full items-start gap-3 rounded-[20px] px-4 py-3 text-left transition-all"
              style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);"
              :class="navigating ? 'opacity-70 pointer-events-none' : ''"
              @click="openItem(item)"
            >
              <div
                class="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-[18px]"
                style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.07);"
              >
                {{ item.emoji }}
              </div>

              <div class="min-w-0 flex-1">
                <div class="flex flex-wrap items-center gap-2">
                  <h3 class="text-[14px] font-semibold tracking-tight text-white">
                    <template v-for="(part, idx) in highlightText(item.title)" :key="idx">
                      <span v-if="part.match" style="color: #f8fafc; background: rgba(255,255,255,0.12);">{{ part.text }}</span>
                      <span v-else>{{ part.text }}</span>
                    </template>
                  </h3>
                  <span class="rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em]" style="background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.36);">
                    {{ groupLabel(item.kind) }}
                  </span>
                </div>
                <p class="mt-1 text-[12.5px] leading-relaxed" style="color: rgba(255,255,255,0.42);">
                  {{ item.description }}
                </p>
                <div class="mt-2 flex flex-wrap items-center gap-2">
                  <span
                    v-for="tag in item.tags.slice(0, 4)"
                    :key="tag"
                    class="rounded-full px-2.5 py-1 text-[11px]"
                    style="background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.45);"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>

              <div class="flex shrink-0 flex-col items-end gap-2 pt-1">
                <span class="text-[11px] font-medium" style="color: rgba(255,255,255,0.35);">
                  {{ item.actionLabel }}
                </span>
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" class="transition-transform group-hover:translate-x-0.5" style="color: rgba(255,255,255,0.30);">
                  <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </button>
          </div>

          <div v-else class="px-4 py-10 text-center">
            <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-3xl" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);">
              <svg width="22" height="22" viewBox="0 0 20 20" fill="none" style="color: rgba(255,255,255,0.35);">
                <path d="M15.5 15.5L12 12m-3.5 1.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
              </svg>
            </div>
            <p class="text-[15px] font-medium text-white">
              {{ locale === 'id' ? 'Tidak ada hasil yang cocok' : 'No matching results' }}
            </p>
            <p class="mt-2 text-[12.5px]" style="color: rgba(255,255,255,0.40);">
              {{ locale === 'id'
                ? 'Coba kata kunci lain, atau pilih salah satu pintasan di atas.'
                : 'Try another keyword or pick one of the shortcuts above.' }}
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-2 border-t px-5 py-3 sm:flex-row sm:items-center sm:justify-between" style="border-color: rgba(255,255,255,0.06); color: rgba(255,255,255,0.28);">
          <p class="text-[11px]">
            {{ locale === 'id' ? 'Live search: produk, halaman, fitur, mitra, dokumentasi, dan kontak.' : 'Live search: products, pages, features, partners, docs, and contacts.' }}
          </p>
          <p class="text-[11px]">
            {{ locale === 'id' ? 'Tekan Esc untuk menutup.' : 'Press Esc to close.' }}
          </p>
        </div>
      </div>
    </div>
  </Teleport>
</template>
