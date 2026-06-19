<script setup lang="ts">
import { ArrowRight, BadgePercent, CheckCircle2, MessageSquareText, Sparkles } from 'lucide-vue-next'

definePageMeta({ layout: 'marketing' })

useSeoMeta({
  title: 'Harga Produk — autobotws',
  description: 'Harga produk WaSigap dan layanan AI automation dari autobotws. Transparan, fleksibel, dan siap disesuaikan dengan kebutuhan bisnis.',
  ogTitle: 'Harga Produk — autobotws',
  ogDescription: 'Pilih paket WaSigap lifetime atau konsultasi custom AI development untuk workflow automation bisnis.',
  ogImage: 'https://autobot.co.id/logo.png',
  ogUrl: 'https://autobot.co.id/pricing',
})

const products = [
  {
    slug: 'wasigap',
    name: 'WaSigap',
    tagline: 'Aplikasi WhatsApp multi-akun untuk operasional, broadcast, dan auto-reply.',
    icon: MessageSquareText,
    badge: 'Lifetime Deal',
    accent: 'blue',
    tiers: [
      {
        name: 'Lifetime',
        price: 199_600,
        originalPrice: 499_000,
        period: 'sekali bayar',
        discount: '-60%',
        ctaLabel: 'Beli Sekarang',
        ctaUrl: 'https://wa.autobot.co.id/',
        ctaExternal: true,
        features: [
          '99 akun WhatsApp dalam satu aplikasi',
          'Broadcast dan auto-reply untuk tim',
          '500 kredit AI sudah termasuk',
          'Update gratis untuk 1.000 user pertama',
          'Tanpa biaya langganan bulanan',
          'Dashboard terpusat untuk semua akun',
        ],
      },
    ],
  },
  {
    slug: 'custom-ai',
    name: 'Custom AI Development',
    tagline: 'AI agent, chatbot, dan workflow automation sesuai proses bisnis Anda.',
    icon: Sparkles,
    badge: 'Custom Scope',
    accent: 'emerald',
    tiers: [
      {
        name: 'Custom Project',
        price: null,
        originalPrice: null,
        period: 'project',
        discount: null,
        ctaLabel: 'Konsultasi Gratis',
        ctaUrl: '/contact',
        ctaExternal: false,
        priceLabel: 'Mulai Rp 3.000.000',
        features: [
          'Konsultasi kebutuhan dan desain solusi',
          'AI agent berbasis Claude, GPT, atau provider lain',
          'Knowledge base sesuai data bisnis',
          'Deploy ke WhatsApp, web, atau API',
          'Human handover dan escalation path',
          'Garansi bug fix 3 bulan setelah delivery',
        ],
      },
    ],
  },
]

const notes = [
  'Harga belum termasuk PPN jika transaksi membutuhkan faktur pajak.',
  'Pembayaran dapat diarahkan melalui transfer, virtual account, QRIS, atau payment link.',
  'Scope custom akan dikunci setelah discovery agar estimasi biaya dan timeline jelas.',
  'Untuk kebutuhan enterprise, deployment dapat dibuat private instance atau managed service.',
]

function fmt(n: number | null) {
  if (n === null) return null
  return new Intl.NumberFormat('id-ID').format(n)
}
</script>

<template>
  <div>
    <section class="tech-pattern relative border-b border-slate-200 bg-white py-16">
      <div class="pointer-events-none absolute right-8 top-10 hidden h-24 w-24 rounded-full border border-blue-200 bg-blue-50/50 lg:block" />
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-wider text-blue-700">Pricing</p>
        <div class="mt-3 grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <h1 class="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Harga transparan untuk automation yang langsung bisa dipakai.
          </h1>
          <p class="text-lg leading-8 text-slate-600">
            Mulai dari produk siap pakai seperti WaSigap sampai custom AI agent untuk workflow khusus. Pilih jalur yang paling sesuai dengan tahap bisnis Anda.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 py-16">
      <div class="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <article
          v-for="product in products"
          :key="product.slug"
          class="flex min-h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
        >
          <div class="flex items-start justify-between gap-4">
            <div class="flex items-start gap-4">
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
                :class="product.accent === 'blue' ? 'bg-blue-50 text-blue-700' : 'bg-emerald-50 text-emerald-700'"
              >
                <component :is="product.icon" class="h-6 w-6" />
              </div>
              <div>
                <div class="flex flex-wrap items-center gap-2">
                  <h2 class="text-xl font-extrabold text-slate-950">{{ product.name }}</h2>
                  <span class="rounded-full border border-slate-200 px-3 py-1 text-xs font-bold text-slate-500">
                    {{ product.badge }}
                  </span>
                </div>
                <p class="mt-2 text-sm leading-6 text-slate-600">{{ product.tagline }}</p>
              </div>
            </div>
            <NuxtLink :to="`/products/${product.slug}`" class="hidden shrink-0 text-sm font-bold text-blue-700 hover:text-blue-800 sm:inline-flex">
              Detail
            </NuxtLink>
          </div>

          <div class="mt-6 grid gap-4">
            <div
              v-for="tier in product.tiers"
              :key="tier.name"
              class="rounded-lg border border-slate-200 bg-slate-50 p-5"
            >
              <div class="flex items-center justify-between gap-3">
                <p class="text-sm font-extrabold uppercase tracking-wider text-slate-500">{{ tier.name }}</p>
                <span v-if="tier.discount" class="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-700">
                  <BadgePercent class="h-3.5 w-3.5" />
                  {{ tier.discount }}
                </span>
              </div>

              <div class="mt-4">
                <p v-if="tier.originalPrice" class="text-sm font-semibold text-slate-400 line-through">
                  Rp {{ fmt(tier.originalPrice) }}
                </p>
                <div v-if="tier.price !== null" class="mt-1 flex flex-wrap items-end gap-2">
                  <span class="text-3xl font-extrabold tracking-tight text-slate-950">Rp {{ fmt(tier.price) }}</span>
                  <span class="pb-1 text-sm font-semibold text-slate-500">/ {{ tier.period }}</span>
                </div>
                <p v-else class="mt-1 text-3xl font-extrabold tracking-tight text-slate-950">
                  {{ tier.priceLabel }}
                </p>
              </div>

              <ul class="mt-5 grid gap-2">
                <li v-for="feature in tier.features" :key="feature" class="flex items-start gap-2 text-sm font-medium leading-6 text-slate-700">
                  <CheckCircle2 class="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  {{ feature }}
                </li>
              </ul>

              <a
                v-if="tier.ctaExternal"
                :href="tier.ctaUrl"
                target="_blank"
                rel="noopener"
                class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                {{ tier.ctaLabel }}
                <ArrowRight class="h-4 w-4" />
              </a>
              <NuxtLink
                v-else
                :to="tier.ctaUrl"
                class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
              >
                {{ tier.ctaLabel }}
                <ArrowRight class="h-4 w-4" />
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="border-t border-slate-200 bg-white py-16">
      <div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <div>
          <p class="text-sm font-extrabold uppercase tracking-wider text-blue-700">Notes</p>
          <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">Catatan sebelum memilih paket</h2>
          <p class="mt-4 text-base leading-7 text-slate-600">
            Untuk custom project, harga final mengikuti kompleksitas integrasi, jumlah channel, kebutuhan data, dan model deployment.
          </p>
        </div>
        <div class="grid gap-3 sm:grid-cols-2">
          <div v-for="note in notes" :key="note" class="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm font-medium leading-6 text-slate-700">
            {{ note }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
:global(html),
:global(body) {
  background-color: #f8fafc;
  color: #0f172a;
}

.tech-pattern::before {
  background-image:
    radial-gradient(circle at 82% 14%, rgba(37, 99, 235, 0.12), transparent 24%),
    radial-gradient(circle at 16% 76%, rgba(6, 182, 212, 0.10), transparent 22%);
  background-size: 100% 100%, 100% 100%;
  content: '';
  inset: 0;
  opacity: 0.9;
  pointer-events: none;
  position: absolute;
}
</style>
