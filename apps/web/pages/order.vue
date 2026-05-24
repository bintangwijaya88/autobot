<script setup lang="ts">
definePageMeta({ layout: 'page' })
useSeoMeta({
  title: 'Order — Autobot',
  description: 'Mulai langganan chatbot WhatsApp dan AI automation dari CV Autobot Wijaya Solution.',
  ogTitle: 'Order Paket — Autobot',
  ogUrl: 'https://autobot.co.id/order',
})

const route = useRoute()
const planParam = route.query.plan as string | undefined

const plans: Record<string, { name: string; monthly: number; yearly: number }> = {
  starter: { name: 'Starter', monthly: 299_000, yearly: 2_988_000 },
  business: { name: 'Business', monthly: 799_000, yearly: 7_788_000 },
}

const selectedPlan = ref(planParam && plans[planParam] ? planParam : 'business')
const billing = ref<'monthly' | 'yearly'>('monthly')

const form = reactive({
  name: '',
  email: '',
  whatsapp: '',
  company: '',
  notes: '',
})

const submitted = ref(false)
const submitting = ref(false)
const error = ref('')

const currentPlan = computed(() => plans[selectedPlan.value])
const displayPrice = computed(() => {
  const p = billing.value === 'monthly' ? currentPlan.value.monthly : currentPlan.value.yearly
  return new Intl.NumberFormat('id-ID').format(p)
})
const billingLabel = computed(() => billing.value === 'monthly' ? '/bulan' : '/tahun')

async function handleSubmit() {
  if (!form.name || !form.email || !form.whatsapp) {
    error.value = 'Nama, email, dan nomor WhatsApp wajib diisi.'
    return
  }
  error.value = ''
  submitting.value = true

  // Build WhatsApp message for manual follow-up
  const msg = encodeURIComponent(
    `Halo Autobot! Saya ingin berlangganan:\n\n` +
    `Paket: ${currentPlan.value.name} (${billing.value === 'monthly' ? 'Bulanan' : 'Tahunan'})\n` +
    `Nama: ${form.name}\n` +
    `Email: ${form.email}\n` +
    `WhatsApp: ${form.whatsapp}\n` +
    `Perusahaan: ${form.company || '-'}\n` +
    `Catatan: ${form.notes || '-'}`
  )

  await new Promise(r => setTimeout(r, 600))
  submitting.value = false
  submitted.value = true

  // Open WA after brief delay
  setTimeout(() => {
    window.open(`https://wa.me/6281234567890?text=${msg}`, '_blank')
  }, 800)
}
</script>

<template>
  <div class="max-w-2xl">
    <NuxtLink to="/pricing" class="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-300 mb-8 transition-colors">
      ← Kembali ke Harga
    </NuxtLink>

    <h1 class="text-3xl font-bold text-white mb-2">Mulai Berlangganan</h1>
    <p class="text-gray-400 mb-8">Tim kami akan menghubungi Anda dalam 1×24 jam untuk aktivasi akun dan onboarding.</p>

    <template v-if="!submitted">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">

        <!-- Left: Form -->
        <div class="sm:col-span-1 order-2 sm:order-1">
          <h2 class="text-white font-semibold mb-4">Data Anda</h2>
          <form @submit.prevent="handleSubmit" class="space-y-4">

            <div>
              <label class="block text-sm text-gray-400 mb-1.5">Nama Lengkap <span class="text-red-400">*</span></label>
              <input
                v-model="form.name"
                type="text"
                placeholder="Budi Santoso"
                class="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
                style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);"
              />
            </div>

            <div>
              <label class="block text-sm text-gray-400 mb-1.5">Email <span class="text-red-400">*</span></label>
              <input
                v-model="form.email"
                type="email"
                placeholder="budi@perusahaan.com"
                class="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
                style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);"
              />
            </div>

            <div>
              <label class="block text-sm text-gray-400 mb-1.5">Nomor WhatsApp <span class="text-red-400">*</span></label>
              <input
                v-model="form.whatsapp"
                type="tel"
                placeholder="08123456789"
                class="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
                style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);"
              />
            </div>

            <div>
              <label class="block text-sm text-gray-400 mb-1.5">Nama Perusahaan</label>
              <input
                v-model="form.company"
                type="text"
                placeholder="PT Contoh Indonesia"
                class="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
                style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);"
              />
            </div>

            <div>
              <label class="block text-sm text-gray-400 mb-1.5">Catatan Kebutuhan</label>
              <textarea
                v-model="form.notes"
                rows="3"
                placeholder="Ceritakan kebutuhan chatbot Anda (opsional)..."
                class="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);"
              />
            </div>

            <p v-if="error" class="text-red-400 text-sm">{{ error }}</p>

            <button
              type="submit"
              :disabled="submitting"
              class="w-full py-3 rounded-xl font-medium text-sm transition-all duration-150 active:scale-[0.98] disabled:opacity-60"
              style="background: #3b82f6; color: white;"
            >
              <span v-if="submitting">Memproses...</span>
              <span v-else>Kirim & Lanjutkan via WhatsApp</span>
            </button>

            <p class="text-xs text-gray-600 text-center">
              Dengan mengirim form ini, Anda menyetujui <NuxtLink to="/terms-of-service" class="text-gray-500 hover:text-gray-400 underline">Syarat & Ketentuan</NuxtLink>
              dan <NuxtLink to="/privacy-policy" class="text-gray-500 hover:text-gray-400 underline">Kebijakan Privasi</NuxtLink> kami.
            </p>
          </form>
        </div>

        <!-- Right: Order summary -->
        <div class="sm:col-span-1 order-1 sm:order-2">
          <h2 class="text-white font-semibold mb-4">Ringkasan Pesanan</h2>

          <!-- Plan selector -->
          <div class="space-y-2 mb-4">
            <div
              v-for="(p, key) in plans"
              :key="key"
              @click="selectedPlan = key"
              class="flex items-center justify-between p-3.5 rounded-xl cursor-pointer transition-all"
              :style="selectedPlan === key
                ? 'border: 1px solid rgba(59,130,246,0.5); background: rgba(59,130,246,0.1);'
                : 'border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.03);'"
            >
              <div class="flex items-center gap-2.5">
                <div class="w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0"
                  :style="selectedPlan === key ? 'border-color: #3b82f6;' : 'border-color: rgba(255,255,255,0.2);'">
                  <div v-if="selectedPlan === key" class="w-2 h-2 rounded-full" style="background: #3b82f6;"></div>
                </div>
                <span class="text-sm text-white font-medium">{{ p.name }}</span>
              </div>
              <span class="text-sm text-gray-400">Rp {{ new Intl.NumberFormat('id-ID').format(p.monthly) }}/bln</span>
            </div>
          </div>

          <!-- Billing period -->
          <div class="flex gap-2 mb-5">
            <button
              @click="billing = 'monthly'"
              class="flex-1 py-2 rounded-lg text-xs font-medium transition-all"
              :style="billing === 'monthly' ? 'background: rgba(255,255,255,0.12); color: white;' : 'color: rgba(255,255,255,0.4); border: 1px solid rgba(255,255,255,0.08);'"
            >Bulanan</button>
            <button
              @click="billing = 'yearly'"
              class="flex-1 py-2 rounded-lg text-xs font-medium transition-all"
              :style="billing === 'yearly' ? 'background: rgba(255,255,255,0.12); color: white;' : 'color: rgba(255,255,255,0.4); border: 1px solid rgba(255,255,255,0.08);'"
            >Tahunan (hemat 17%)</button>
          </div>

          <div class="rounded-2xl border border-white/10 bg-white/3 p-4 text-sm space-y-2.5">
            <div class="flex justify-between text-gray-400">
              <span>Paket {{ currentPlan.name }}</span>
              <span class="text-white">Rp {{ displayPrice }} {{ billingLabel }}</span>
            </div>
            <div class="flex justify-between text-gray-400">
              <span>PPN 11%</span>
              <span class="text-white">Rp {{ new Intl.NumberFormat('id-ID').format(Math.round((billing === 'monthly' ? currentPlan.monthly : currentPlan.yearly) * 0.11)) }}</span>
            </div>
            <div class="border-t border-white/8 pt-2.5 flex justify-between">
              <span class="text-white font-medium">Total</span>
              <span class="text-white font-semibold">Rp {{ new Intl.NumberFormat('id-ID').format(Math.round((billing === 'monthly' ? currentPlan.monthly : currentPlan.yearly) * 1.11)) }} {{ billingLabel }}</span>
            </div>
          </div>

          <div class="mt-4 rounded-xl border border-yellow-500/20 bg-yellow-500/8 p-3.5">
            <p class="text-xs text-yellow-200/80">
              Pembayaran diproses setelah konfirmasi tim kami via WhatsApp. Kami mendukung transfer bank, virtual account, QRIS, dan kartu kredit via Xendit.
            </p>
          </div>
        </div>

      </div>
    </template>

    <!-- Success state -->
    <template v-else>
      <div class="rounded-2xl border border-green-500/30 bg-green-500/10 p-8 text-center">
        <div class="text-4xl mb-4">✓</div>
        <h2 class="text-2xl font-bold text-white mb-2">Pesanan Diterima!</h2>
        <p class="text-gray-400 mb-6">
          Kami akan menghubungi Anda via WhatsApp dalam 1×24 jam untuk proses pembayaran dan aktivasi akun.
        </p>
        <div class="flex gap-3 justify-center">
          <a href="https://wa.me/6281234567890" target="_blank"
            class="px-6 py-2.5 rounded-xl text-sm font-medium"
            style="background: #22c55e; color: white;">
            Buka WhatsApp Sekarang
          </a>
          <NuxtLink to="/" class="px-6 py-2.5 rounded-xl text-sm font-medium"
            style="background: rgba(255,255,255,0.09); color: #F0F0F0; border: 1px solid rgba(255,255,255,0.12);">
            Kembali ke Beranda
          </NuxtLink>
        </div>
      </div>
    </template>
  </div>
</template>
