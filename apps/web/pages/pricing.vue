<script setup lang="ts">
definePageMeta({ layout: 'page' })
useSeoMeta({
  title: 'Harga — Autobot',
  description: 'Harga produk chatbot WhatsApp dan AI automation dari Autobot Wijaya Solution. Transparan, tanpa biaya tersembunyi.',
  ogTitle: 'Harga Produk — Autobot',
  ogUrl: 'https://autobot.co.id/pricing',
})

const products = [
  {
    slug: 'wasigap',
    name: 'WaSigap',
    tagline: 'Aplikasi WhatsApp Multi-Akun Desktop',
    icon: '♾️',
    color: 'rgba(124,58,237,0.10)',
    border: 'rgba(124,58,237,0.35)',
    badge: 'Lifetime Deal',
    badgeColor: 'rgba(168,85,247,0.25)',
    badgeText: '#c084fc',
    tiers: [
      {
        name: '♾️ Lifetime',
        price: 199_600,
        originalPrice: 499_000,
        period: 'sekali bayar',
        discount: '-60%',
        highlighted: true,
        ctaLabel: 'Beli Sekarang',
        ctaUrl: 'https://wa.autobot.co.id/',
        ctaExternal: true,
        features: [
          '99 akun WhatsApp',
          'Semua fitur utama',
          '500 kredit AI',
          'Update gratis (1.000 user pertama)',
          'Tidak perlu perpanjang',
          'Multi-device support',
        ],
      },
    ],
  },
  {
    slug: 'custom-ai',
    name: 'Custom AI Development',
    tagline: 'AI Agent & Chatbot Khusus untuk Bisnis Anda',
    icon: '🧠',
    color: 'rgba(239,68,68,0.06)',
    border: 'rgba(239,68,68,0.18)',
    badge: null,
    tiers: [
      {
        name: 'Custom Project',
        price: null,
        originalPrice: null,
        period: 'project',
        discount: null,
        highlighted: true,
        ctaLabel: 'Konsultasi Gratis',
        ctaUrl: '/contact',
        ctaExternal: false,
        priceLabel: 'Mulai Rp 3.000.000',
        features: [
          'Konsultasi kebutuhan & desain solusi',
          'AI agent berbasis Claude / GPT-4',
          'Knowledge base training bisnis Anda',
          'Deploy ke WhatsApp, web, atau API',
          'Human handover & escalation',
          'Garansi bug fix 3 bulan',
        ],
      },
    ],
  },
]

function fmt(n: number | null) {
  if (n === null) return null
  return new Intl.NumberFormat('id-ID').format(n)
}
</script>

<template>
  <div>
    <div class="mb-10">
      <h1 class="text-4xl font-bold text-white mb-2">Harga Produk</h1>
      <p class="text-gray-400">Pilih produk yang sesuai kebutuhan bisnis Anda. Semua harga transparan, tanpa biaya tersembunyi.</p>
    </div>

    <!-- Product sections -->
    <div class="space-y-12">
      <div v-for="product in products" :key="product.slug" class="rounded-2xl p-6" :style="`background: ${product.color}; border: 1px solid ${product.border};`">

        <!-- Product header -->
        <div class="flex items-start justify-between mb-6">
          <div class="flex items-center gap-3">
            <span class="text-3xl">{{ product.icon }}</span>
            <div>
              <div class="flex items-center gap-2">
                <h2 class="text-xl font-bold text-white">{{ product.name }}</h2>
                <span v-if="product.badge" class="text-xs px-2 py-0.5 rounded-full font-semibold" :style="`background: ${product.badgeColor}; color: ${product.badgeText};`">
                  {{ product.badge }}
                </span>
              </div>
              <p class="text-gray-400 text-sm mt-0.5">{{ product.tagline }}</p>
            </div>
          </div>
          <NuxtLink :to="`/products/${product.slug}`" class="text-xs text-gray-500 hover:text-gray-300 transition-colors shrink-0 mt-1">
            Lihat detail →
          </NuxtLink>
        </div>

        <!-- Tiers -->
        <div class="grid gap-4" :class="product.tiers.length === 1 ? 'grid-cols-1 max-w-sm' : product.tiers.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-3'">
          <div
            v-for="tier in product.tiers"
            :key="tier.name"
            class="rounded-xl p-5 flex flex-col"
            :style="tier.highlighted
              ? 'background: rgba(255,255,255,0.09); border: 1px solid rgba(255,255,255,0.22);'
              : 'background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09);'"
          >
            <!-- Tier name -->
            <div class="flex items-center justify-between mb-3">
              <span class="text-white font-semibold text-sm">{{ tier.name }}</span>
              <span v-if="tier.discount" class="text-xs px-1.5 py-0.5 rounded-full font-bold" style="background: rgba(34,197,94,0.2); color: #4ade80;">
                {{ tier.discount }}
              </span>
              <span v-else-if="tier.highlighted" class="text-xs px-1.5 py-0.5 rounded-full" style="background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.6);">
                Populer
              </span>
            </div>

            <!-- Price -->
            <div class="mb-4">
              <div v-if="tier.originalPrice" class="text-gray-500 text-xs line-through mb-0.5">
                Rp {{ fmt(tier.originalPrice) }}
              </div>
              <div v-if="tier.price !== null" class="flex items-end gap-1">
                <span class="text-2xl font-bold text-white">Rp {{ fmt(tier.price) }}</span>
                <span class="text-gray-500 text-xs mb-0.5">/ {{ tier.period }}</span>
              </div>
              <div v-else-if="tier.priceLabel" class="text-2xl font-bold text-white">
                {{ tier.priceLabel }}
              </div>
              <div v-else class="text-2xl font-bold text-white">Custom</div>
            </div>

            <!-- Features -->
            <ul class="space-y-1.5 mb-5 flex-1">
              <li v-for="f in tier.features" :key="f" class="flex items-start gap-2 text-xs text-gray-300">
                <span class="text-green-400 shrink-0 mt-0.5">✓</span> {{ f }}
              </li>
            </ul>

            <!-- CTA -->
            <a v-if="tier.ctaExternal" :href="tier.ctaUrl" target="_blank" rel="noopener"
              class="block w-full py-2.5 rounded-lg text-xs font-semibold text-center transition-all hover:opacity-90"
              style="background: linear-gradient(135deg, #7c3aed, #2563eb); color: white;">
              {{ tier.ctaLabel }} →
            </a>
            <NuxtLink v-else :to="tier.ctaUrl"
              class="block w-full py-2.5 rounded-lg text-xs font-medium text-center transition-all"
              :style="tier.highlighted
                ? 'background: #F0F0F0; color: #111;'
                : 'border: 1px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.6);'">
              {{ tier.ctaLabel }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer notes -->
    <div class="mt-10 rounded-2xl border border-white/8 bg-white/3 p-6">
      <h3 class="text-white font-semibold mb-3">Catatan Umum</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-400">
        <div class="flex gap-2"><span class="text-blue-400 shrink-0">•</span> Harga belum termasuk PPN 11%.</div>
        <div class="flex gap-2"><span class="text-blue-400 shrink-0">•</span> Pembayaran via Xendit: transfer, VA, QRIS, kartu kredit.</div>
        <div class="flex gap-2"><span class="text-blue-400 shrink-0">•</span> Upgrade/downgrade bisa dilakukan kapan saja.</div>
        <div class="flex gap-2"><span class="text-blue-400 shrink-0">•</span> Kuota bulanan reset di awal periode, tidak diakumulasi.</div>
        <div class="flex gap-2">
          <span class="text-blue-400 shrink-0">•</span>
          <span>Lihat <NuxtLink to="/refund-policy" class="text-blue-400 hover:text-blue-300">Kebijakan Refund</NuxtLink> untuk detail pengembalian dana.</span>
        </div>
        <div class="flex gap-2"><span class="text-blue-400 shrink-0">•</span> Butuh custom? <NuxtLink to="/contact" class="text-blue-400 hover:text-blue-300">Hubungi tim kami.</NuxtLink></div>
      </div>
    </div>
  </div>
</template>
