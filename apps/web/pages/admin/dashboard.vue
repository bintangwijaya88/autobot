<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })
useSeoMeta({ title: 'Dashboard — Autobot Admin', robots: 'noindex' })

const config = useRuntimeConfig()

const stats = ref<any>({})
const recentSessions = ref<any[]>([])
const sessionsTrend = ref<{ date: string; count: number }[]>([])
const topIntents = ref<{ intent: string; count: number }[]>([])
const aiUsage = ref<any>(null)
const loading = ref(true)
const lastRefreshed = ref<Date | null>(null)
let refreshTimer: ReturnType<typeof setInterval> | null = null

function getToken() {
  return localStorage.getItem('admin_token') || ''
}

async function fetchDashboard() {
  const headers = { Authorization: `Bearer ${getToken()}` }
  const [dash, analytics] = await Promise.all([
    $fetch<any>(`${config.public.apiBase}/api/admin/dashboard`, { headers }),
    $fetch<any>(`${config.public.apiBase}/api/admin/analytics?days=7`, { headers }),
  ])
  stats.value = dash?.stats || {}
  recentSessions.value = dash?.recent_sessions || []
  sessionsTrend.value = analytics?.sessions_trend || []
  topIntents.value = analytics?.top_intents || []
  aiUsage.value = analytics?.ai_usage || null
  lastRefreshed.value = new Date()
  loading.value = false
}

function fmtTokens(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(2) + 'M'
  if (n >= 1_000) return (n / 1_000).toFixed(1) + 'K'
  return n.toString()
}

function fmtCost(usd: number): string {
  if (usd < 0.01) return '< $0.01'
  return '$' + usd.toFixed(4)
}

onMounted(() => {
  fetchDashboard()
  refreshTimer = setInterval(fetchDashboard, 30_000)
})

onUnmounted(() => {
  if (refreshTimer) clearInterval(refreshTimer)
})

// ─── SVG Line Chart helpers ────────────────────────────────────────────────────

const chartW = 440
const chartH = 100
const chartPad = { top: 10, right: 10, bottom: 20, left: 28 }

const linePoints = computed(() => {
  const data = sessionsTrend.value
  if (!data.length) return ''
  const counts = data.map(d => d.count)
  const maxVal = Math.max(...counts, 1)
  const innerW = chartW - chartPad.left - chartPad.right
  const innerH = chartH - chartPad.top - chartPad.bottom
  return data.map((d, i) => {
    const x = chartPad.left + (i / Math.max(data.length - 1, 1)) * innerW
    const y = chartPad.top + innerH - (d.count / maxVal) * innerH
    return `${x},${y}`
  }).join(' ')
})

const areaPoints = computed(() => {
  if (!linePoints.value) return ''
  const data = sessionsTrend.value
  const innerW = chartW - chartPad.left - chartPad.right
  const bottomY = chartH - chartPad.bottom
  const firstX = chartPad.left
  const lastX = chartPad.left + innerW
  return `${firstX},${bottomY} ${linePoints.value} ${lastX},${bottomY}`
})

const xLabels = computed(() => {
  const data = sessionsTrend.value
  if (!data.length) return []
  const innerW = chartW - chartPad.left - chartPad.right
  const step = Math.ceil(data.length / 5)
  return data
    .filter((_, i) => i % step === 0 || i === data.length - 1)
    .map((d, idx, arr) => {
      const origIdx = data.indexOf(d)
      const x = chartPad.left + (origIdx / Math.max(data.length - 1, 1)) * innerW
      const label = d.date.slice(5) // MM-DD
      return { x, label }
    })
})

const yMax = computed(() => {
  if (!sessionsTrend.value.length) return 0
  return Math.max(...sessionsTrend.value.map(d => d.count))
})

// ─── Bar Chart helpers ─────────────────────────────────────────────────────────

const barChartH = 120
const barChartW = 440
const barPad = { top: 10, right: 10, bottom: 20, left: 28 }

const barData = computed(() => topIntents.value.slice(0, 6))

const bars = computed(() => {
  const data = barData.value
  if (!data.length) return []
  const maxVal = Math.max(...data.map(d => d.count), 1)
  const innerW = barChartW - barPad.left - barPad.right
  const innerH = barChartH - barPad.top - barPad.bottom
  const barW = innerW / data.length * 0.6
  const gap = innerW / data.length

  return data.map((d, i) => {
    const barH = (d.count / maxVal) * innerH
    const x = barPad.left + i * gap + (gap - barW) / 2
    const y = barPad.top + innerH - barH
    return { x, y, w: barW, h: barH, label: d.intent, count: d.count }
  })
})

const quickLinks = [
  {
    to: '/admin/products',
    label: 'Products',
    icon: `<svg width="14" height="14" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M2 7h16M7 7v11" stroke="currentColor" stroke-width="1.5"/></svg>`,
  },
  {
    to: '/admin/contacts',
    label: 'Contacts',
    icon: `<svg width="14" height="14" viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M2 7l8 5 8-7" stroke="currentColor" stroke-width="1.5"/></svg>`,
  },
  {
    to: '/admin/knowledge',
    label: 'Knowledge Base',
    icon: `<svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M10 2a6 6 0 0 1 6 6c0 2.5-1.5 4.6-3.5 5.5V15H7.5v-1.5C5.5 12.6 4 10.5 4 8a6 6 0 0 1 6-6Z" stroke="currentColor" stroke-width="1.5"/><path d="M7.5 18h5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  },
  {
    to: '/admin/sessions',
    label: 'Sessions',
    icon: `<svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M2 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6l-4 3V5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
  },
]
</script>

<template>
  <div class="p-6 max-w-6xl mx-auto w-full">
    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-xl font-bold text-white">Dashboard</h1>
      <div class="flex items-center gap-3">
        <span v-if="lastRefreshed" class="text-xs text-gray-600">
          Diperbarui {{ lastRefreshed.toLocaleTimeString('id') }}
        </span>
        <div class="flex items-center gap-1.5 text-xs text-green-400 bg-green-500/10 px-2.5 py-1 rounded-full border border-green-500/20">
          <span class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          LIVE
        </div>
        <button @click="fetchDashboard" class="text-xs text-gray-500 hover:text-white transition-colors px-3 py-1 rounded-lg border border-white/8 hover:border-white/20">
          ↻ Refresh
        </button>
      </div>
    </div>

    <!-- Loading skeleton -->
    <div v-if="loading" class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div v-for="i in 4" :key="i" class="rounded-2xl border border-white/8 p-5 h-20 animate-pulse" style="background: rgba(255,255,255,0.03);" />
    </div>

    <template v-else>
      <!-- Stat cards -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div class="rounded-2xl border border-white/8 p-5" style="background: rgba(255,255,255,0.03);">
          <p class="text-gray-500 text-xs mb-1.5">Total Sessions</p>
          <p class="text-2xl font-bold text-white">{{ (stats.total_sessions ?? 0).toLocaleString() }}</p>
        </div>
        <div class="rounded-2xl border border-white/8 p-5" style="background: rgba(255,255,255,0.03);">
          <p class="text-gray-500 text-xs mb-1.5">Total Messages</p>
          <p class="text-2xl font-bold text-white">{{ (stats.total_messages ?? 0).toLocaleString() }}</p>
        </div>
        <div class="rounded-2xl border border-white/8 p-5" style="background: rgba(255,255,255,0.03);">
          <p class="text-gray-500 text-xs mb-1.5">Total Users</p>
          <p class="text-2xl font-bold text-blue-400">{{ (stats.total_users ?? 0).toLocaleString() }}</p>
        </div>
        <div class="rounded-2xl border border-white/8 p-5" style="background: rgba(255,255,255,0.03);">
          <p class="text-gray-500 text-xs mb-1.5">Contact Forms</p>
          <p class="text-2xl font-bold text-green-400">{{ (stats.total_contacts ?? 0).toLocaleString() }}</p>
        </div>
      </div>

      <!-- Charts row -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

        <!-- Sessions Trend (Line Chart) -->
        <div class="rounded-2xl border border-white/8 p-5" style="background: rgba(255,255,255,0.02);">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-sm font-medium text-white">Sessions (7 hari terakhir)</h2>
            <span class="text-xs text-gray-600">Total: {{ sessionsTrend.reduce((a, b) => a + b.count, 0) }}</span>
          </div>
          <div v-if="!sessionsTrend.length" class="h-28 flex items-center justify-center text-gray-600 text-sm">
            Belum ada data
          </div>
          <svg v-else :viewBox="`0 0 ${chartW} ${chartH}`" class="w-full" preserveAspectRatio="none">
            <!-- Y grid lines -->
            <line :x1="chartPad.left" :y1="chartPad.top" :x2="chartPad.left" :y2="chartH - chartPad.bottom"
              stroke="rgba(255,255,255,0.06)" stroke-width="1" />
            <line :x1="chartPad.left" :y1="chartH - chartPad.bottom" :x2="chartW - chartPad.right" :y2="chartH - chartPad.bottom"
              stroke="rgba(255,255,255,0.06)" stroke-width="1" />
            <!-- Area fill -->
            <polygon :points="areaPoints" fill="rgba(96,165,250,0.12)" />
            <!-- Line -->
            <polyline :points="linePoints" fill="none" stroke="#60a5fa" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" />
            <!-- Dots -->
            <template v-for="(d, i) in sessionsTrend" :key="i">
              <circle
                :cx="chartPad.left + (i / Math.max(sessionsTrend.length - 1, 1)) * (chartW - chartPad.left - chartPad.right)"
                :cy="chartPad.top + (chartH - chartPad.top - chartPad.bottom) - (d.count / Math.max(yMax, 1)) * (chartH - chartPad.top - chartPad.bottom)"
                r="3" fill="#60a5fa" stroke="#111" stroke-width="1.5"
              />
            </template>
            <!-- X labels -->
            <text v-for="lbl in xLabels" :key="lbl.label"
              :x="lbl.x" :y="chartH - 4"
              text-anchor="middle" fill="rgba(255,255,255,0.3)" font-size="10">
              {{ lbl.label }}
            </text>
            <!-- Y max label -->
            <text :x="chartPad.left - 4" :y="chartPad.top + 4"
              text-anchor="end" fill="rgba(255,255,255,0.3)" font-size="10">
              {{ yMax }}
            </text>
          </svg>
        </div>

        <!-- Top Intents (Bar Chart) -->
        <div class="rounded-2xl border border-white/8 p-5" style="background: rgba(255,255,255,0.02);">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-sm font-medium text-white">Top Intents</h2>
            <span class="text-xs text-gray-600">{{ topIntents.length }} intents</span>
          </div>
          <div v-if="!topIntents.length" class="h-28 flex items-center justify-center text-gray-600 text-sm">
            Belum ada data
          </div>
          <div v-else class="space-y-2">
            <div v-for="(item, i) in topIntents.slice(0, 6)" :key="item.intent" class="flex items-center gap-3">
              <span class="text-xs text-gray-500 w-32 truncate">{{ item.intent }}</span>
              <div class="flex-1 h-2 rounded-full overflow-hidden" style="background: rgba(255,255,255,0.06);">
                <div
                  class="h-2 rounded-full transition-all duration-500"
                  :style="{
                    width: `${(item.count / topIntents[0].count) * 100}%`,
                    background: ['#60a5fa','#a78bfa','#34d399','#fb923c','#f472b6','#facc15'][i % 6]
                  }"
                />
              </div>
              <span class="text-xs text-gray-400 w-8 text-right">{{ item.count }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- AI Token Usage -->
      <div class="rounded-2xl border border-white/8 mb-8 overflow-hidden" style="background: rgba(255,255,255,0.02);">
        <div class="px-5 py-4 border-b border-white/8 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="text-sm font-medium text-white">AI Token Usage</span>
            <span class="text-xs px-2 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/25 text-purple-400">since last restart</span>
          </div>
          <span v-if="aiUsage" class="text-xs text-gray-500">
            Total cost: <span class="text-yellow-400 font-medium">{{ fmtCost(aiUsage.total_cost_usd) }}</span>
          </span>
        </div>

        <div v-if="!aiUsage || (aiUsage.claude.total_tokens === 0 && aiUsage.openai.total_tokens === 0)"
          class="px-5 py-8 text-center text-gray-600 text-sm">
          Belum ada pemakaian AI token
        </div>

        <div v-else class="p-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          <!-- Claude -->
          <div class="rounded-xl border p-4 space-y-3"
            :class="aiUsage.claude.total_tokens > 0 ? 'border-purple-500/20 bg-purple-500/5' : 'border-white/6 bg-white/1'">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div class="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold" style="background: rgba(168,85,247,0.2); color: #c084fc;">C</div>
                <span class="text-sm font-medium text-white">Claude (Anthropic)</span>
              </div>
              <span class="text-xs font-semibold" :class="aiUsage.claude.cost_usd > 0 ? 'text-yellow-400' : 'text-gray-600'">
                {{ fmtCost(aiUsage.claude.cost_usd) }}
              </span>
            </div>

            <div class="grid grid-cols-3 gap-3 text-center">
              <div>
                <p class="text-lg font-bold text-purple-300">{{ fmtTokens(aiUsage.claude.input_tokens) }}</p>
                <p class="text-[10px] text-gray-500 mt-0.5">Input tokens</p>
              </div>
              <div>
                <p class="text-lg font-bold text-purple-300">{{ fmtTokens(aiUsage.claude.output_tokens) }}</p>
                <p class="text-[10px] text-gray-500 mt-0.5">Output tokens</p>
              </div>
              <div>
                <p class="text-lg font-bold text-white">{{ fmtTokens(aiUsage.claude.total_tokens) }}</p>
                <p class="text-[10px] text-gray-500 mt-0.5">Total</p>
              </div>
            </div>

            <!-- Input/output bar -->
            <div v-if="aiUsage.claude.total_tokens > 0">
              <div class="h-1.5 rounded-full overflow-hidden" style="background: rgba(255,255,255,0.06);">
                <div class="h-1.5 rounded-full" style="background: linear-gradient(90deg, #a855f7, #7c3aed);"
                  :style="{ width: `${(aiUsage.claude.input_tokens / aiUsage.claude.total_tokens) * 100}%` }" />
              </div>
              <div class="flex justify-between text-[10px] text-gray-600 mt-1">
                <span>Input {{ ((aiUsage.claude.input_tokens / aiUsage.claude.total_tokens) * 100).toFixed(0) }}%</span>
                <span>Output {{ ((aiUsage.claude.output_tokens / aiUsage.claude.total_tokens) * 100).toFixed(0) }}%</span>
              </div>
            </div>

            <p class="text-[10px] text-gray-600">Pricing: $3/1M input · $15/1M output</p>
          </div>

          <!-- OpenAI -->
          <div class="rounded-xl border p-4 space-y-3"
            :class="aiUsage.openai.total_tokens > 0 ? 'border-green-500/20 bg-green-500/5' : 'border-white/6 bg-white/1'">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div class="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold" style="background: rgba(74,222,128,0.15); color: #4ade80;">G</div>
                <span class="text-sm font-medium text-white">GPT (OpenAI)</span>
              </div>
              <span class="text-xs font-semibold" :class="aiUsage.openai.cost_usd > 0 ? 'text-yellow-400' : 'text-gray-600'">
                {{ fmtCost(aiUsage.openai.cost_usd) }}
              </span>
            </div>

            <div class="grid grid-cols-3 gap-3 text-center">
              <div>
                <p class="text-lg font-bold text-green-300">{{ fmtTokens(aiUsage.openai.input_tokens) }}</p>
                <p class="text-[10px] text-gray-500 mt-0.5">Input tokens</p>
              </div>
              <div>
                <p class="text-lg font-bold text-green-300">{{ fmtTokens(aiUsage.openai.output_tokens) }}</p>
                <p class="text-[10px] text-gray-500 mt-0.5">Output tokens</p>
              </div>
              <div>
                <p class="text-lg font-bold text-white">{{ fmtTokens(aiUsage.openai.total_tokens) }}</p>
                <p class="text-[10px] text-gray-500 mt-0.5">Total</p>
              </div>
            </div>

            <div v-if="aiUsage.openai.total_tokens > 0">
              <div class="h-1.5 rounded-full overflow-hidden" style="background: rgba(255,255,255,0.06);">
                <div class="h-1.5 rounded-full" style="background: linear-gradient(90deg, #4ade80, #16a34a);"
                  :style="{ width: `${(aiUsage.openai.input_tokens / aiUsage.openai.total_tokens) * 100}%` }" />
              </div>
              <div class="flex justify-between text-[10px] text-gray-600 mt-1">
                <span>Input {{ ((aiUsage.openai.input_tokens / aiUsage.openai.total_tokens) * 100).toFixed(0) }}%</span>
                <span>Output {{ ((aiUsage.openai.output_tokens / aiUsage.openai.total_tokens) * 100).toFixed(0) }}%</span>
              </div>
            </div>

            <p class="text-[10px] text-gray-600">Pricing: $5/1M input · $15/1M output</p>
          </div>
        </div>

        <!-- Error count -->
        <div v-if="aiUsage && aiUsage.total_errors > 0"
          class="px-5 py-2.5 border-t border-white/5 flex items-center gap-2 text-xs text-red-400">
          <svg width="12" height="12" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.5"/><path d="M10 6v4M10 13v.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
          {{ aiUsage.total_errors }} AI request error(s) since last restart
        </div>
      </div>

      <!-- Quick nav -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <NuxtLink v-for="l in quickLinks" :key="l.to" :to="l.to"
          class="flex items-center gap-3 rounded-xl border border-white/8 px-4 py-3 text-sm text-gray-400 hover:text-white hover:border-white/20 transition-colors"
          style="background: rgba(255,255,255,0.02);">
          <span class="w-4 h-4 shrink-0 opacity-70" v-html="l.icon" />
          {{ l.label }}
        </NuxtLink>
      </div>

      <!-- Recent sessions table -->
      <div class="rounded-2xl border border-white/8 overflow-hidden" style="background: rgba(255,255,255,0.02);">
        <div class="px-5 py-4 border-b border-white/8 flex items-center justify-between">
          <h2 class="text-white text-sm font-medium">Sessions Terbaru</h2>
          <NuxtLink to="/admin/sessions" class="text-xs text-blue-400 hover:text-blue-300">Lihat semua →</NuxtLink>
        </div>
        <div v-if="recentSessions.length" class="divide-y divide-white/5">
          <div v-for="s in recentSessions" :key="s.id" class="px-5 py-3 flex items-center justify-between hover:bg-white/3 transition-colors">
            <div>
              <p class="text-sm text-white">{{ s.visitor_name || (s.visitor_id?.slice(0, 8) + '...') }}</p>
              <p class="text-xs text-gray-500">{{ s.source }} · {{ new Date(s.created_at).toLocaleString('id') }}</p>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-xs px-2 py-0.5 rounded-full"
                :class="s.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'">
                {{ s.status }}
              </span>
              <NuxtLink :to="`/admin/sessions/${s.id}`" class="text-xs text-blue-400 hover:text-blue-300">Detail</NuxtLink>
            </div>
          </div>
        </div>
        <div v-else class="px-5 py-10 text-center text-gray-600 text-sm">Belum ada sessions</div>
      </div>
    </template>
  </div>
</template>

