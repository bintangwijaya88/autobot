<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { services } from '~/utils/marketing'

definePageMeta({ layout: 'marketing' })

const { t } = useLocale()

useSeoMeta({
  title: 'Layanan — autobotws',
  description: 'Layanan autobotws: custom software development, web & mobile app, desktop agent, AI chatbot, WhatsApp automation, CRM, system integration, cloud deployment, dan maintenance.',
  ogTitle: 'Layanan — autobotws',
  ogDescription: 'Pengembangan software dan otomasi bisnis yang disesuaikan dengan kebutuhan operasional Anda.',
  ogImage: 'https://autobot.co.id/logo.png',
  ogUrl: 'https://autobot.co.id/services',
})

const pricingModels = [
  { key: 'fixed' as const },
  { key: 'tnm' as const },
  { key: 'retainer' as const },
]
</script>

<template>
  <div>
    <section class="border-b border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-wider text-blue-700">{{ t('marketing.services.eyebrow') }}</p>
        <div class="mt-3 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <h1 class="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            {{ t('marketing.services.title') }}
          </h1>
          <p class="text-lg leading-8 text-slate-600">
            {{ t('marketing.services.desc') }}
          </p>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 py-16">
      <div class="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <article
          v-for="service in services"
          :key="service.slug"
          class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
        >
          <component :is="service.icon" class="h-8 w-8 text-blue-700" />
          <h2 class="mt-5 text-xl font-extrabold text-slate-950">{{ service.title }}</h2>
          <p class="mt-3 text-sm leading-6 text-slate-600">{{ service.desc }}</p>
        </article>
      </div>
    </section>

    <section class="border-y border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-wider text-blue-700">{{ t('marketing.services.modelsTitle') }}</p>
        <div class="mt-6 grid gap-4 md:grid-cols-3">
          <div
            v-for="model in pricingModels"
            :key="model.key"
            class="rounded-lg border border-slate-200 bg-slate-50 p-6 text-center"
          >
            <h3 class="font-extrabold text-slate-950">{{ t(`marketing.services.models.${model.key}.name`) }}</h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ t(`marketing.services.models.${model.key}.desc`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="rounded-lg border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 class="text-3xl font-extrabold tracking-tight text-slate-950">{{ t('marketing.company.ctaTitle') }}</h2>
              <p class="mt-4 max-w-2xl text-base leading-7 text-slate-600">{{ t('marketing.company.ctaDesc') }}</p>
            </div>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              {{ t('marketing.services.cta') }}
              <ArrowRight class="h-4 w-4" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>