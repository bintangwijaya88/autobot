<script setup lang="ts">
definePageMeta({ layout: 'portal', middleware: 'customer' })
const { locale, t } = useLocale()
useSeoMeta({ title: 'My Contacts — Portal', robots: 'noindex' })

const config = useRuntimeConfig()
const { currentUser } = useAuth()

interface Contact {
  id: string
  type: string
  name: string
  phone: string
  company: string
  message: string
  product_interest: string
  status: string
  created_at: string
}

const contacts = ref<Contact[]>([])
const loading = ref(true)

function headers() {
  return { 'X-Access-Key': currentUser.value?.access_key || '' }
}

onMounted(async () => {
  try {
    const res = await $fetch<{ contacts: Contact[] }>(
      `${config.public.apiBase}/api/portal/contacts`,
      { headers: headers() }
    )
    contacts.value = res.contacts
  } catch {}
  loading.value = false
})

const typeLabel: Record<string, string> = {
  order: 'Order',
  consultation_booking: 'Konsultasi',
  demo_request: 'Demo Request',
  contact: 'Kontak',
  consultation_payment: 'Pembayaran',
}

const typeColor: Record<string, string> = {
  order: 'bg-purple-500/20 text-purple-300',
  consultation_booking: 'bg-blue-500/20 text-blue-300',
  demo_request: 'bg-yellow-500/20 text-yellow-300',
  contact: 'bg-gray-500/20 text-gray-300',
  consultation_payment: 'bg-green-500/20 text-green-300',
}

const statusColor: Record<string, string> = {
  new: 'bg-indigo-500/20 text-indigo-300',
  in_progress: 'bg-yellow-500/20 text-yellow-300',
  closed: 'bg-gray-500/20 text-gray-400',
}

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString(locale.value === 'id' ? 'id-ID' : 'en-US', { day: '2-digit', month: 'short', year: 'numeric' })
}
</script>

<template>
  <div class="p-6 max-w-4xl mx-auto w-full">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-xl font-bold text-white">{{ t('portal.contacts') }}</h1>
      <span class="text-xs text-gray-500">{{ contacts.length }} {{ locale === 'id' ? 'pengiriman' : 'submissions' }}</span>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="space-y-3">
      <div v-for="i in 4" :key="i" class="rounded-xl border border-white/8 p-4 h-24 animate-pulse" style="background: rgba(255,255,255,0.03);" />
    </div>

    <!-- Empty -->
    <div v-else-if="!contacts.length" class="rounded-2xl border border-white/8 py-16 text-center" style="background: rgba(255,255,255,0.02);">
      <svg width="36" height="36" viewBox="0 0 20 20" fill="none" class="mx-auto mb-3 opacity-20">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="white" stroke-width="1.2"/>
        <path d="M2 7l8 5 8-5" stroke="white" stroke-width="1.2"/>
      </svg>
      <p class="text-gray-500 text-sm">{{ locale === 'id' ? 'Belum ada form yang disubmit' : 'No forms submitted yet' }}</p>
    </div>

    <!-- List -->
    <div v-else class="space-y-3">
      <div
        v-for="ct in contacts"
        :key="ct.id"
        class="rounded-xl border border-white/8 p-4"
        style="background: rgba(255,255,255,0.02);"
      >
        <div class="flex items-start justify-between gap-3 mb-2">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-[11px] px-2 py-0.5 rounded-full font-medium" :class="typeColor[ct.type] || 'bg-gray-500/20 text-gray-300'">
              {{ typeLabel[ct.type] || ct.type }}
            </span>
            <span class="text-[11px] px-2 py-0.5 rounded-full" :class="statusColor[ct.status] || 'bg-gray-500/20 text-gray-400'">
              {{ ct.status }}
            </span>
          </div>
          <span class="text-xs text-gray-500 shrink-0">{{ fmtDate(ct.created_at) }}</span>
        </div>
        <div class="space-y-1">
          <p v-if="ct.company" class="text-sm text-white font-medium">{{ ct.company }}</p>
          <p v-if="ct.product_interest" class="text-xs text-gray-400">{{ locale === 'id' ? 'Produk' : 'Product' }}: {{ ct.product_interest }}</p>
          <p v-if="ct.message" class="text-xs text-gray-500 line-clamp-2">{{ ct.message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
