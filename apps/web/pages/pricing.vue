<script setup lang="ts">
definePageMeta({ layout: 'page' })
useSeoMeta({
  title: 'Harga — Autobot',
  description: 'Paket harga chatbot WhatsApp dan AI automation dari CV Autobot Wijaya Solution. Starter, Business, Enterprise. Transparan, tanpa biaya tersembunyi.',
  ogTitle: 'Harga Layanan Chatbot — Autobot',
  ogDescription: 'Paket Starter Rp 299rb/bln, Business Rp 799rb/bln, Enterprise custom. Chatbot WhatsApp + AI untuk bisnis Indonesia.',
  ogImage: 'https://autobot.co.id/logo.png',
  ogUrl: 'https://autobot.co.id/pricing',
})

const billing = ref<'monthly' | 'yearly'>('monthly')

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Untuk bisnis yang baru mulai otomasi',
    monthlyPrice: 299_000,
    yearlyPrice: 249_000,
    color: 'rgba(255,255,255,0.08)',
    borderColor: 'rgba(255,255,255,0.12)',
    badge: null,
    features: [
      '1 akun WhatsApp Bot',
      '1.000 pesan/bulan',
      '100.000 token AI/bulan (GPT-4o Mini)',
      '1 Knowledge Base (maks. 50 dokumen)',
      'Integrasi 1 channel (WA/Web)',
      'Dashboard analitik dasar',
      'Support via email (2 hari kerja)',
    ],
    extras: [
      { label: 'Tambah pesan', price: 'Rp 50/pesan' },
      { label: 'Tambah token AI', price: 'Rp 15.000/100rb token' },
    ],
    cta: 'Mulai Sekarang',
    ctaLink: '/order?plan=starter',
  },
  {
    id: 'business',
    name: 'Business',
    tagline: 'Untuk bisnis yang butuh performa penuh',
    monthlyPrice: 799_000,
    yearlyPrice: 649_000,
    color: 'rgba(59,130,246,0.08)',
    borderColor: 'rgba(59,130,246,0.35)',
    badge: 'Paling Populer',
    features: [
      '3 akun WhatsApp Bot',
      '10.000 pesan/bulan',
      '1.000.000 token AI/bulan (GPT-4o)',
      '5 Knowledge Base (maks. 500 dokumen)',
      'Integrasi 3 channel (WA, Web, Telegram)',
      'Broadcast & blast terjadwal',
      'Webhook & Zapier integration',
      'Dashboard analitik lengkap',
      'Support prioritas via WA (jam kerja)',
    ],
    extras: [
      { label: 'Tambah pesan', price: 'Rp 40/pesan' },
      { label: 'Tambah token AI', price: 'Rp 12.000/100rb token' },
      { label: 'Tambah bot WA', price: 'Rp 150.000/akun/bln' },
    ],
    cta: 'Pilih Business',
    ctaLink: '/order?plan=business',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Solusi penuh untuk skala besar & custom',
    monthlyPrice: null,
    yearlyPrice: null,
    color: 'rgba(168,85,247,0.06)',
    borderColor: 'rgba(168,85,247,0.25)',
    badge: null,
    features: [
      'Akun WhatsApp Bot tak terbatas',
      'Pesan tak terbatas',
      'Token AI tak terbatas (model pilihan)',
      'Knowledge Base tak terbatas',
      'Semua channel + custom integrasi',
      'Dedicated server / on-premise option',
      'SLA 99.9% uptime tertulis',
      'Custom AI model fine-tuning',
      'Onboarding & training tim',
      'Account Manager dedicated',
      'Support 24/7 prioritas tinggi',
    ],
    extras: [],
    cta: 'Hubungi Sales',
    ctaLink: '/contact',
  },
]

function formatPrice(price: number | null) {
  if (price === null) return null
  return new Intl.NumberFormat('id-ID').format(price)
}

const displayPrice = (plan: typeof plans[0]) => {
  const p = billing.value === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice
  return formatPrice(p)
}
</script>

<template>
  <div>
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-white mb-3">Harga yang Transparan</h1>
      <p class="text-gray-400 text-lg mb-6">Tidak ada biaya tersembunyi. Bayar sesuai kebutuhan bisnis Anda.</p>

      <!-- Billing toggle -->
      <div class="inline-flex items-center gap-1 p-1 rounded-full" style="background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.10);">
        <button
          @click="billing = 'monthly'"
          class="px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-150"
          :style="billing === 'monthly' ? 'background: #F0F0F0; color: #111;' : 'color: rgba(255,255,255,0.45);'"
        >
          Bulanan
        </button>
        <button
          @click="billing = 'yearly'"
          class="px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-150 flex items-center gap-1.5"
          :style="billing === 'yearly' ? 'background: #F0F0F0; color: #111;' : 'color: rgba(255,255,255,0.45);'"
        >
          Tahunan
          <span class="text-[11px] px-1.5 py-0.5 rounded-full font-semibold" style="background: rgba(34,197,94,0.2); color: #4ade80;">Hemat 17%</span>
        </button>
      </div>
    </div>

    <!-- Pricing cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div
        v-for="plan in plans"
        :key="plan.id"
        class="rounded-2xl p-6 flex flex-col relative"
        :style="`background: ${plan.color}; border: 1px solid ${plan.borderColor};`"
      >
        <!-- Badge -->
        <div
          v-if="plan.badge"
          class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold"
          style="background: #3b82f6; color: white;"
        >
          {{ plan.badge }}
        </div>

        <div class="mb-5">
          <h2 class="text-xl font-bold text-white mb-1">{{ plan.name }}</h2>
          <p class="text-gray-400 text-sm">{{ plan.tagline }}</p>
        </div>

        <!-- Price -->
        <div class="mb-6">
          <template v-if="displayPrice(plan)">
            <div class="flex items-end gap-1.5">
              <span class="text-gray-400 text-sm">Rp</span>
              <span class="text-4xl font-bold text-white">{{ displayPrice(plan) }}</span>
            </div>
            <p class="text-gray-500 text-sm mt-1">per bulan{{ billing === 'yearly' ? ', ditagih tahunan' : '' }}</p>
            <p v-if="billing === 'yearly'" class="text-green-400 text-xs mt-0.5">
              Hemat Rp {{ formatPrice((plan.monthlyPrice! - plan.yearlyPrice!) * 12) }} / tahun
            </p>
          </template>
          <template v-else>
            <div class="text-3xl font-bold text-white">Custom</div>
            <p class="text-gray-500 text-sm mt-1">Hubungi kami untuk penawaran</p>
          </template>
        </div>

        <!-- Features -->
        <ul class="space-y-2 mb-6 flex-1">
          <li
            v-for="feature in plan.features"
            :key="feature"
            class="flex items-start gap-2 text-sm text-gray-300"
          >
            <span class="text-green-400 shrink-0 mt-0.5">✓</span>
            {{ feature }}
          </li>
        </ul>

        <!-- Add-ons -->
        <div v-if="plan.extras.length > 0" class="mb-5 pt-4 border-t border-white/8">
          <p class="text-xs text-gray-500 mb-2 uppercase tracking-wide">Biaya tambahan (opsional)</p>
          <div class="space-y-1">
            <div
              v-for="extra in plan.extras"
              :key="extra.label"
              class="flex justify-between text-xs text-gray-400"
            >
              <span>{{ extra.label }}</span>
              <span class="text-gray-300">{{ extra.price }}</span>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <NuxtLink
          :to="plan.ctaLink"
          class="w-full py-3 rounded-xl text-center text-sm font-medium transition-all duration-150 active:scale-[0.97]"
          :style="plan.id === 'business'
            ? 'background: #3b82f6; color: white;'
            : 'background: rgba(255,255,255,0.09); color: #F0F0F0; border: 1px solid rgba(255,255,255,0.12);'"
          @mouseover="(e: MouseEvent) => { if (plan.id !== 'business') (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.14)' }"
          @mouseleave="(e: MouseEvent) => { if (plan.id !== 'business') (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.09)' }"
        >
          {{ plan.cta }}
        </NuxtLink>
      </div>
    </div>

    <!-- WaSigap Lifetime Deal Banner -->
    <div
      class="rounded-2xl p-6 mb-8 relative overflow-hidden"
      style="border: 1px solid rgba(124,58,237,0.4); background: linear-gradient(135deg, rgba(124,58,237,0.12), rgba(37,99,235,0.08));"
    >
      <!-- Decorative glow -->
      <div class="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-20" style="background: radial-gradient(circle, #7c3aed, transparent);"></div>

      <div class="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-sm px-2.5 py-0.5 rounded-full font-semibold" style="background: rgba(168,85,247,0.25); color: #c084fc;">♾️ Lifetime Deal</span>
            <span class="text-sm px-2.5 py-0.5 rounded-full font-bold" style="background: rgba(34,197,94,0.2); color: #4ade80;">−60%</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-1">WaSigap — Bayar Sekali, Pakai Selamanya</h3>
          <p class="text-gray-400 text-sm mb-3">99 akun WhatsApp · 500 kredit AI · Semua fitur · Update gratis*</p>
          <div class="flex items-end gap-2">
            <span class="text-gray-500 text-sm line-through">Rp 499.000</span>
            <span class="text-3xl font-bold text-white">Rp 199.600</span>
            <span class="text-gray-400 text-sm mb-0.5">sekali bayar</span>
          </div>
          <p class="text-xs text-gray-500 mt-1.5">*Update gratis untuk 1.000 user pertama · Tidak perlu perpanjang</p>
        </div>
        <div class="flex flex-col gap-2 shrink-0">
          <a
            href="https://wa.autobot.co.id/"
            target="_blank"
            rel="noopener"
            class="px-7 py-3 rounded-xl font-semibold text-sm text-center transition-all hover:opacity-90 active:scale-[0.97]"
            style="background: linear-gradient(135deg, #7c3aed, #2563eb); color: white; min-width: 160px;"
          >
            Beli Sekarang →
          </a>
          <NuxtLink
            to="/products/wasigap"
            class="px-7 py-2.5 rounded-xl text-sm text-center transition-colors"
            style="border: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.5);"
          >
            Lihat Detail
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- FAQ / Notes -->
    <div class="rounded-2xl border border-white/10 bg-white/3 p-6 mb-8">
      <h3 class="text-white font-semibold mb-4">Yang Perlu Anda Tahu</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-400">
        <div>
          <p class="text-white font-medium mb-1">Periode Langganan</p>
          <p>Paket bulanan diperbarui tiap bulan. Paket tahunan dibayar di muka 12 bulan dan lebih hemat 17%.</p>
        </div>
        <div>
          <p class="text-white font-medium mb-1">Sisa Kuota</p>
          <p>Kuota pesan dan token AI tidak diakumulasi ke bulan berikutnya. Reset di awal setiap periode.</p>
        </div>
        <div>
          <p class="text-white font-medium mb-1">Upgrade / Downgrade</p>
          <p>Anda bisa upgrade paket kapan saja. Downgrade berlaku di awal periode berikutnya.</p>
        </div>
        <div>
          <p class="text-white font-medium mb-1">Metode Pembayaran</p>
          <p>Transfer bank, virtual account, QRIS, kartu kredit/debit, dan e-wallet melalui Xendit.</p>
        </div>
        <div>
          <p class="text-white font-medium mb-1">Token AI</p>
          <p>Token dihitung berdasarkan panjang percakapan. GPT-4o Mini ~4× lebih hemat dari GPT-4o.</p>
        </div>
        <div>
          <p class="text-white font-medium mb-1">Pengembalian Dana</p>
          <p>Lihat <NuxtLink to="/refund-policy" class="text-blue-400 hover:text-blue-300">Kebijakan Refund</NuxtLink> kami untuk detail lengkap.</p>
        </div>
      </div>
    </div>

    <!-- Enterprise CTA -->
    <div class="rounded-2xl border border-purple-500/25 bg-purple-500/8 p-8 text-center">
      <h3 class="text-white text-xl font-bold mb-2">Butuh Solusi Skala Besar?</h3>
      <p class="text-gray-400 mb-5">Tim enterprise kami siap merancang arsitektur custom, SLA tertulis, dan harga volume spesial untuk Anda.</p>
      <div class="flex gap-3 justify-center">
        <NuxtLink to="/contact" class="px-6 py-2.5 rounded-xl bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors">
          Hubungi Sales
        </NuxtLink>
        <a href="https://wa.me/6281234567890?text=Halo%2C+saya+tertarik+paket+Enterprise+Autobot" target="_blank"
          class="px-6 py-2.5 rounded-xl text-sm font-medium transition-colors"
          style="background: rgba(255,255,255,0.09); color: #F0F0F0; border: 1px solid rgba(255,255,255,0.12);"
        >
          WhatsApp Langsung
        </a>
      </div>
    </div>
  </div>
</template>
