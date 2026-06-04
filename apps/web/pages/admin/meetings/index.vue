<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })
useSeoMeta({ title: 'Meetings — Admin', robots: 'noindex' })

const config = useRuntimeConfig()

interface Meeting {
  id: string
  name: string
  email: string
  phone: string
  company: string
  topic: string
  preferred_date: string
  preferred_time: string
  amount: number
  status: string
  payment_status: string
  payment_url: string
  payment_method: string
  created_at: string
}

const meetings = ref<Meeting[]>([])
const stats = ref<any>({ total: 0, paid: 0, pending: 0, confirmed: 0, revenue_idr: 0 })
const total = ref(0)
const page = ref(1)
const filter = ref('')
const loading = ref(true)
const editModal = ref<Meeting | null>(null)
const editForm = reactive({ status: '', payment_status: '' })
const resendLoading = ref<string | null>(null)

function headers() {
  return { Authorization: `Bearer ${localStorage.getItem('admin_token') || ''}` }
}

async function fetchAll() {
  loading.value = true
  const [m, s] = await Promise.all([
    $fetch<any>(`${config.public.apiBase}/api/admin/meetings?page=${page.value}${filter.value ? '&status=' + filter.value : ''}`, { headers: headers() }).catch(() => ({ meetings: [], total: 0 })),
    $fetch<any>(`${config.public.apiBase}/api/admin/meetings/stats`, { headers: headers() }).catch(() => ({})),
  ])
  meetings.value = m.meetings ?? []
  total.value = m.total ?? 0
  stats.value = s
  loading.value = false
}

onMounted(fetchAll)
watch([page, filter], fetchAll)

function openEdit(m: Meeting) {
  editModal.value = m
  editForm.status = m.status
  editForm.payment_status = m.payment_status
}

async function saveEdit() {
  if (!editModal.value) return
  await $fetch(`${config.public.apiBase}/api/admin/meetings/${editModal.value.id}`, {
    method: 'PUT', headers: headers(), body: editForm,
  }).catch(() => {})
  editModal.value = null
  fetchAll()
}

async function resendInvoice(id: string) {
  resendLoading.value = id
  try {
    const r = await $fetch<any>(`${config.public.apiBase}/api/admin/meetings/${id}/resend-invoice`, { method: 'POST', headers: headers() })
    if (r.payment_url) window.open(r.payment_url, '_blank')
    await fetchAll()
  } catch (e: any) {
    alert(e.data?.error || 'Gagal resend invoice')
  }
  resendLoading.value = null
}

function fmtRp(n: number) {
  return 'Rp ' + n.toLocaleString('id')
}
function fmtDate(d: string) {
  return new Date(d).toLocaleDateString('id', { day: '2-digit', month: 'short', year: 'numeric' })
}

const statusColor: Record<string, string> = {
  pending: 'bg-yellow-500/20 text-yellow-400',
  confirmed: 'bg-green-500/20 text-green-400',
  cancelled: 'bg-red-500/20 text-red-400',
  done: 'bg-blue-500/20 text-blue-400',
}
const payColor: Record<string, string> = {
  unpaid: 'bg-gray-500/20 text-gray-400',
  paid: 'bg-green-500/20 text-green-400',
  expired: 'bg-red-500/20 text-red-400',
}
</script>

<template>
  <div class="p-6 max-w-6xl mx-auto w-full">

    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-xl font-bold text-white">Meetings</h1>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
      <div class="rounded-xl border border-white/8 p-4" style="background: rgba(255,255,255,0.03);">
        <p class="text-xs text-gray-500 mb-1">Total</p>
        <p class="text-2xl font-bold text-white">{{ stats.total }}</p>
      </div>
      <div class="rounded-xl border border-white/8 p-4" style="background: rgba(234,179,8,0.06); border-color: rgba(234,179,8,0.18);">
        <p class="text-xs text-gray-500 mb-1">Pending</p>
        <p class="text-2xl font-bold text-yellow-400">{{ stats.pending }}</p>
      </div>
      <div class="rounded-xl border border-white/8 p-4" style="background: rgba(52,211,153,0.06); border-color: rgba(52,211,153,0.18);">
        <p class="text-xs text-gray-500 mb-1">Confirmed</p>
        <p class="text-2xl font-bold text-green-400">{{ stats.confirmed }}</p>
      </div>
      <div class="rounded-xl border border-white/8 p-4" style="background: rgba(52,211,153,0.06); border-color: rgba(52,211,153,0.18);">
        <p class="text-xs text-gray-500 mb-1">Lunas</p>
        <p class="text-2xl font-bold text-green-400">{{ stats.paid }}</p>
      </div>
      <div class="rounded-xl border border-white/8 p-4" style="background: rgba(99,102,241,0.07); border-color: rgba(99,102,241,0.20);">
        <p class="text-xs text-gray-500 mb-1">Revenue</p>
        <p class="text-lg font-bold" style="color: #a5b4fc;">{{ fmtRp(stats.revenue_idr || 0) }}</p>
      </div>
    </div>

    <!-- Filter -->
    <div class="flex items-center gap-2 mb-4">
      <button v-for="s in ['', 'pending', 'confirmed', 'done', 'cancelled']" :key="s"
        @click="filter = s; page = 1"
        class="px-3 py-1.5 rounded-lg text-xs font-medium transition-all border"
        :class="filter === s ? 'bg-white text-black border-white' : 'text-gray-400 border-white/10 hover:border-white/25'">
        {{ s === '' ? 'Semua' : s.charAt(0).toUpperCase() + s.slice(1) }}
      </button>
    </div>

    <!-- Table -->
    <div class="rounded-2xl border border-white/8 overflow-hidden" style="background: rgba(255,255,255,0.02);">
      <div v-if="loading" class="p-8 text-center text-gray-500 text-sm">Memuat...</div>
      <div v-else-if="!meetings.length" class="p-12 text-center text-gray-500 text-sm">Belum ada meeting</div>
      <div v-else>
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-white/8" style="background: rgba(255,255,255,0.03);">
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500">Nama / Email</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500">Topik</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500">Jadwal</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500">Status</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500">Bayar</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500">Aksi</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5">
            <tr v-for="m in meetings" :key="m.id" class="hover:bg-white/2 transition-colors">
              <td class="px-4 py-3">
                <p class="font-medium text-white">{{ m.name }}</p>
                <p class="text-xs text-gray-500">{{ m.email }}</p>
                <p v-if="m.company" class="text-xs text-gray-600">{{ m.company }}</p>
              </td>
              <td class="px-4 py-3 text-gray-300 max-w-[200px]">
                <p class="truncate text-xs">{{ m.topic || '—' }}</p>
              </td>
              <td class="px-4 py-3 text-xs text-gray-400">
                <p>{{ m.preferred_date || '—' }}</p>
                <p>{{ m.preferred_time || '' }}</p>
              </td>
              <td class="px-4 py-3">
                <span class="text-[11px] px-2 py-0.5 rounded-full font-medium" :class="statusColor[m.status] || 'bg-gray-500/20 text-gray-400'">
                  {{ m.status }}
                </span>
              </td>
              <td class="px-4 py-3">
                <span class="text-[11px] px-2 py-0.5 rounded-full" :class="payColor[m.payment_status] || 'bg-gray-500/20 text-gray-400'">
                  {{ m.payment_status }}
                </span>
                <p class="text-[10px] text-gray-600 mt-0.5">{{ fmtRp(m.amount) }}</p>
              </td>
              <td class="px-4 py-3">
                <div class="flex items-center gap-2">
                  <button @click="openEdit(m)"
                    class="text-xs text-blue-400 hover:text-blue-300 transition-colors">Edit</button>
                  <a v-if="m.payment_url" :href="m.payment_url" target="_blank"
                    class="text-xs text-green-400 hover:text-green-300 transition-colors">Invoice</a>
                  <button v-if="m.payment_status !== 'paid'" @click="resendInvoice(m.id)"
                    :disabled="resendLoading === m.id"
                    class="text-xs text-indigo-400 hover:text-indigo-300 disabled:opacity-50 transition-colors">
                    {{ resendLoading === m.id ? '...' : 'Resend' }}
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Pagination -->
        <div v-if="total > 20" class="px-4 py-3 border-t border-white/8 flex items-center justify-between">
          <span class="text-xs text-gray-500">{{ total }} total</span>
          <div class="flex gap-2">
            <button :disabled="page <= 1" @click="page--" class="px-3 py-1.5 rounded-lg text-xs text-gray-400 hover:text-white border border-white/8 disabled:opacity-30">← Prev</button>
            <button :disabled="page >= Math.ceil(total / 20)" @click="page++" class="px-3 py-1.5 rounded-lg text-xs text-gray-400 hover:text-white border border-white/8 disabled:opacity-30">Next →</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit Modal -->
    <Teleport to="body">
      <div v-if="editModal" class="fixed inset-0 z-50 flex items-center justify-center px-4" style="background: rgba(0,0,0,0.7);" @click.self="editModal = null">
        <div class="w-full max-w-[420px] rounded-2xl p-6" style="background: #1a1a1a; border: 1px solid rgba(255,255,255,0.10);">
          <h3 class="text-base font-semibold text-white mb-4">Edit Meeting — {{ editModal.name }}</h3>
          <div class="space-y-3">
            <div>
              <label class="block text-xs text-gray-500 mb-1">Status Meeting</label>
              <select v-model="editForm.status" class="w-full h-10 rounded-xl bg-white/5 border border-white/10 px-3 text-sm text-white outline-none">
                <option value="pending">pending</option>
                <option value="confirmed">confirmed</option>
                <option value="done">done</option>
                <option value="cancelled">cancelled</option>
              </select>
            </div>
            <div>
              <label class="block text-xs text-gray-500 mb-1">Status Pembayaran</label>
              <select v-model="editForm.payment_status" class="w-full h-10 rounded-xl bg-white/5 border border-white/10 px-3 text-sm text-white outline-none">
                <option value="unpaid">unpaid</option>
                <option value="paid">paid</option>
                <option value="expired">expired</option>
              </select>
            </div>
          </div>
          <div class="flex justify-end gap-2 mt-5">
            <button @click="editModal = null" class="px-4 py-2 rounded-xl text-sm text-gray-400 hover:text-white border border-white/10">Batal</button>
            <button @click="saveEdit" class="px-4 py-2 rounded-xl text-sm font-medium text-white" style="background: #6366f1;">Simpan</button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>
