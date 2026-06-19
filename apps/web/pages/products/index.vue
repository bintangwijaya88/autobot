<script setup lang="ts">
import { ArrowRight, CheckCircle2 } from 'lucide-vue-next'
import { platformGroups } from '~/utils/marketing'

definePageMeta({ layout: 'marketing' })

const { t } = useLocale()

useSeoMeta({
  title: 'Produk — autobotws',
  description: 'Produk autobotws: WaSigap, KlopDana, SanyClean, Bintanx, dan solusi vertikal untuk kebutuhan industri tertentu.',
  ogTitle: 'Produk — autobotws',
  ogDescription: 'Empat produk inti dan solusi vertikal untuk otomasi WhatsApp, rekonsiliasi bank, layanan kebersihan, dan sistem akademik.',
  ogImage: 'https://autobot.co.id/logo.png',
  ogUrl: 'https://autobot.co.id/products',
})
</script>

<template>
  <div>
    <section class="border-b border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-wider text-blue-700">{{ t('marketing.products.eyebrow') }}</p>
        <div class="mt-3 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <h1 class="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            {{ t('marketing.products.title') }}
          </h1>
          <p class="text-lg leading-8 text-slate-600">
            {{ t('marketing.products.desc') }}
          </p>
        </div>
      </div>
    </section>

    <section
      v-for="group in platformGroups"
      :key="group.slug"
      class="border-b border-slate-200 py-16"
      :class="group.slug === 'core' ? 'bg-slate-50' : 'bg-white'"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-xs font-extrabold uppercase tracking-wider text-blue-700">
          {{ group.slug === 'core' ? t('marketing.products.coreLabel') : t('marketing.products.verticalLabel') }}
        </p>
        <h2 class="mt-2 text-2xl font-extrabold text-slate-950">{{ group.title }}</h2>
        <p class="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{{ group.desc }}</p>

        <div class="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-2">
          <article
            v-for="product in group.products"
            :key="product.slug"
            class="flex min-h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
          >
            <div class="flex items-start justify-between gap-4">
              <div class="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                <component :is="product.icon" class="h-6 w-6" />
              </div>
              <span class="rounded-full border border-slate-200 px-3 py-1 text-xs font-bold text-slate-500">
                {{ product.domain }}
              </span>
            </div>

            <h3 class="mt-5 text-xl font-extrabold text-slate-950">{{ product.name }}</h3>
            <p class="mt-2 text-sm font-semibold text-slate-500">{{ product.tagline }}</p>
            <p class="mt-4 flex-1 text-sm leading-7 text-slate-600">{{ product.desc }}</p>

            <div class="mt-5 grid gap-2">
              <div v-for="feature in product.features.slice(0, 3)" :key="feature" class="flex items-start gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 class="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                {{ feature }}
              </div>
            </div>

            <div class="mt-6 flex flex-wrap gap-2">
              <NuxtLink
                :to="`/platforms/${product.slug}`"
                class="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                {{ t('marketing.products.detail') }}
              </NuxtLink>
              <a
                :href="product.url"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-slate-800"
              >
                {{ t('marketing.products.visit') }}
                <ArrowRight class="h-4 w-4" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>