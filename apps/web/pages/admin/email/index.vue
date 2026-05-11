<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })

const config = useRuntimeConfig()
const data = ref<any>(null)
const templates = computed(() => data.value?.data || [])

function getHeaders() {
  return { Authorization: `Bearer ${localStorage.getItem('admin_token') || ''}` }
}

onMounted(async () => {
  data.value = await $fetch(`${config.public.apiBase}/api/admin/email/templates`, { headers: getHeaders() })
})

// — Preview —
const previewHTML = ref('')
const previewTitle = ref('')
const showPreview = ref(false)

async function openPreview(tmpl: any) {
  previewTitle.value = tmpl.name
  try {
    const html = await $fetch<string>(`${config.public.apiBase}/api/admin/email/preview/${tmpl.id}`, {
      method: 'POST', headers: getHeaders(), responseType: 'text', body: tmpl.sample_vars,
    })
    previewHTML.value = html as string
    showPreview.value = true
  } catch (e) {
    console.error('preview error', e)
  }
}

// — Send test —
const sending = ref<string | null>(null)
const sendResult = ref<{ ok: boolean; message: string } | null>(null)
const activeForm = ref<string | null>(null)
const testTo = ref('')
const editedVars = ref<Record<string, string>>({})

function openSendForm(tmpl: any) {
  activeForm.value = tmpl.id
  testTo.value = ''
  // Flatten sample vars into string map for editing
  editedVars.value = Object.fromEntries(
    Object.entries(tmpl.sample_vars || {}).map(([k, v]) => [k, String(v)])
  )
}

async function sendTest(tmpl: any) {
  sending.value = tmpl.id
  sendResult.value = null
  try {
    const result = await $fetch<any>(`${config.public.apiBase}/api/admin/email/test`, {
      method: 'POST', headers: getHeaders(),
      body: {
        template_id: tmpl.id,
        to: testTo.value || undefined,
        vars: editedVars.value,
      },
    })
    sendResult.value = { ok: true, message: `Terkirim ke ${result.sent_to}` }
    activeForm.value = null
  } catch (e: any) {
    sendResult.value = { ok: false, message: e.data?.error || 'Gagal kirim email' }
  } finally {
    sending.value = null
    setTimeout(() => { sendResult.value = null }, 4000)
  }
}

const typeColors: Record<string, string> = {
  verification: 'bg-blue-500/15 text-blue-400 border-blue-500/25',
  welcome: 'bg-green-500/15 text-green-400 border-green-500/25',
  order_confirm: 'bg-purple-500/15 text-purple-400 border-purple-500/25',
  consultation: 'bg-orange-500/15 text-orange-400 border-orange-500/25',
  follow_up: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/25',
  proposal: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/25',
  newsletter: 'bg-pink-500/15 text-pink-400 border-pink-500/25',
}
</script>

<template>
  <div class="p-6 max-w-5xl mx-auto w-full">
    <div class="flex items-center justify-between mb-6">
      <div>
        <h1 class="text-xl font-bold text-white">Email Templates</h1>
        <p class="text-xs text-gray-600 mt-0.5">{{ templates.length }} template tersedia</p>
      </div>
    </div>

    <!-- Toast -->
    <Transition name="fade">
      <div v-if="sendResult" class="mb-4 px-4 py-3 rounded-xl border text-sm"
        :class="sendResult.ok ? 'bg-green-500/10 border-green-500/25 text-green-400' : 'bg-red-500/10 border-red-500/25 text-red-400'">
        {{ sendResult.ok ? '✅' : '❌' }} {{ sendResult.message }}
      </div>
    </Transition>

    <!-- Template cards -->
    <div class="space-y-3">
      <div v-for="tmpl in templates" :key="tmpl.id"
        class="rounded-2xl border border-white/8 overflow-hidden transition-colors"
        style="background: rgba(255,255,255,0.02);">

        <!-- Card header -->
        <div class="px-5 py-4 flex items-start gap-4">
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2.5 mb-1.5 flex-wrap">
              <span class="font-medium text-white text-sm">{{ tmpl.name }}</span>
              <span class="text-[11px] px-2 py-0.5 rounded-full border"
                :class="typeColors[tmpl.id] || 'bg-gray-500/15 text-gray-400 border-gray-500/25'">
                {{ tmpl.id }}
              </span>
            </div>
            <p class="text-xs text-gray-500">{{ tmpl.description }}</p>
            <p class="text-[11px] text-gray-700 mt-1 font-mono truncate">Subject: {{ tmpl.subject }}</p>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <button @click="openPreview(tmpl)"
              class="px-3 h-8 rounded-lg border border-white/10 text-xs text-gray-400 hover:text-white hover:border-white/25 transition-colors">
              Preview
            </button>
            <button @click="activeForm === tmpl.id ? activeForm = null : openSendForm(tmpl)"
              class="px-3 h-8 rounded-lg bg-white/8 border border-white/10 text-xs text-gray-300 hover:text-white hover:bg-white/12 transition-colors">
              {{ activeForm === tmpl.id ? 'Cancel' : 'Send Test' }}
            </button>
          </div>
        </div>

        <!-- Inline send form -->
        <div v-if="activeForm === tmpl.id" class="border-t border-white/8 px-5 py-4 bg-white/2">
          <div class="grid grid-cols-2 gap-3 mb-3">
            <div class="col-span-2">
              <label class="block text-xs text-gray-500 mb-1.5">Send To (blank = SMTP_TEST_TO)</label>
              <input v-model="testTo" type="email" class="admin-input w-full" placeholder="test@example.com" />
            </div>
            <template v-for="(val, key) in editedVars" :key="key">
              <div>
                <label class="block text-xs text-gray-500 mb-1.5">{{ key }}</label>
                <input v-model="editedVars[key as string]" class="admin-input w-full" :placeholder="String(val)" />
              </div>
            </template>
          </div>
          <div class="flex justify-end">
            <button @click="sendTest(tmpl)" :disabled="sending === tmpl.id"
              class="px-4 h-8 rounded-lg bg-white text-black text-xs font-medium hover:bg-gray-200 disabled:opacity-50 transition-colors">
              {{ sending === tmpl.id ? 'Sending...' : 'Send Email' }}
            </button>
          </div>
        </div>

        <!-- Sample vars preview -->
        <div class="px-5 py-2.5 border-t border-white/5 flex flex-wrap gap-2">
          <span v-for="(val, key) in tmpl.sample_vars" :key="key"
            class="text-[11px] px-2 py-0.5 rounded-full bg-white/4 border border-white/8 text-gray-500">
            <span class="text-gray-600">{{ key }}:</span> {{ String(val).slice(0, 24) }}{{ String(val).length > 24 ? '…' : '' }}
          </span>
        </div>
      </div>
    </div>

    <!-- Preview modal -->
    <Teleport to="body">
      <div v-if="showPreview" class="fixed inset-0 z-50 flex items-center justify-center p-4" style="background: rgba(0,0,0,0.85);">
        <div class="w-full max-w-2xl flex flex-col rounded-2xl border border-white/15 overflow-hidden" style="background: #1a1a1a; max-height: 90vh;">
          <div class="flex items-center justify-between px-5 py-3 border-b border-white/8 shrink-0">
            <p class="text-white text-sm font-medium">{{ previewTitle }}</p>
            <button @click="showPreview = false" class="text-gray-500 hover:text-white text-sm px-3 py-1 rounded-lg hover:bg-white/5">Close</button>
          </div>
          <div class="flex-1 overflow-auto">
            <iframe :srcdoc="previewHTML" class="w-full border-0" style="height: 600px; background: #0e0e0e;" title="Email Preview" />
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style>
.admin-input {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  padding: 7px 11px;
  color: #f0f0f0;
  font-size: 13px;
  outline: none;
}
.admin-input:focus { border-color: rgba(255,255,255,0.3); }

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
