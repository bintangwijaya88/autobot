<script setup lang="ts">
import { ArrowLeft, ArrowRight, Check } from 'lucide-vue-next'
import {
  cloudCreditUses,
  companyProfile,
  getPlatformBySlug,
  wasigapBusinessModel,
  wasigapProblems,
  wasigapTraction,
  wasigapUseCases,
} from '~/utils/marketing'

definePageMeta({ layout: 'marketing' })

const { t } = useLocale()
const platform = getPlatformBySlug('wasigap')!

useSeoMeta({
  title: 'WaSigap — Otomasi WhatsApp Berbasis AI | autobotws',
  description: 'WaSigap membantu klinik, toko online, bisnis jasa, dan tim customer service mengelola percakapan WhatsApp melalui AI auto-reply, CRM, broadcast terjadwal, dan follow-up otomatis.',
  ogTitle: 'WaSigap — AI WhatsApp Automation for Indonesian SMEs',
  ogDescription: 'WaSigap helps businesses manage WhatsApp conversations with AI auto-reply, CRM, broadcast scheduling, customer follow-up, and workflow automation from one dashboard.',
  ogImage: 'https://autobot.co.id/logo.png',
  ogUrl: 'https://autobot.co.id/platforms/wasigap',
})
</script>

<template>
  <div>
    <section class="border-b border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <NuxtLink to="/platforms" class="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-950">
          <ArrowLeft class="h-4 w-4" />
          {{ t('marketing.wasigap.back') }}
        </NuxtLink>
        <div class="mt-8 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p class="text-sm font-extrabold uppercase tracking-wider text-emerald-700">{{ t('marketing.wasigap.badge') }}</p>
            <h1 class="mt-3 text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl">WaSigap</h1>
            <p class="mt-4 text-xl font-semibold leading-8 text-slate-700">{{ t('marketing.wasigap.heroTitle') }}</p>
            <p class="mt-5 text-lg leading-8 text-slate-600">{{ t('marketing.wasigap.heroDesc') }}</p>
            <div class="mt-8 flex flex-wrap gap-3">
              <a
                :href="platform.url"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white"
              >
                {{ t('marketing.wasigap.ctaPrimary') }}
                <ArrowRight class="h-4 w-4" />
              </a>
              <NuxtLink to="/contact" class="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800">
                {{ t('marketing.wasigap.ctaSecondary') }}
              </NuxtLink>
            </div>
          </div>
          <div class="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div class="flex aspect-[16/10] items-center justify-center rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center">
              <div>
                <component :is="platform.icon" class="mx-auto h-12 w-12 text-emerald-700" />
                <p class="mt-4 text-sm font-bold text-slate-700">{{ t('marketing.wasigap.demoDesc') }}</p>
                <p class="mt-1 text-xs text-slate-500">[Screenshot Produk] · [Demo URL]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-wider text-rose-700">{{ t('marketing.wasigap.problemEyebrow') }}</p>
        <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">{{ t('marketing.wasigap.problemTitle') }}</h2>
        <div class="mt-8 grid gap-4 md:grid-cols-2">
          <article v-for="item in wasigapProblems" :key="item.title" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="font-extrabold text-slate-950">{{ item.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ item.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="border-y border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-wider text-emerald-700">{{ t('marketing.wasigap.solutionEyebrow') }}</p>
        <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">{{ t('marketing.wasigap.solutionTitle') }}</h2>
        <p class="mt-4 max-w-3xl text-base leading-7 text-slate-600">{{ t('marketing.wasigap.solutionDesc') }}</p>
      </div>
    </section>

    <section class="bg-slate-50 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-wider text-blue-700">{{ t('marketing.wasigap.featuresEyebrow') }}</p>
        <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">{{ t('marketing.wasigap.featuresTitle') }}</h2>
        <div class="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="feature in platform.features" :key="feature" class="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
            <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <Check class="h-4 w-4" />
            </span>
            <p class="text-sm font-bold text-slate-800">{{ feature }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="border-y border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-wider text-amber-700">{{ t('marketing.wasigap.useCasesEyebrow') }}</p>
        <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">{{ t('marketing.wasigap.useCasesTitle') }}</h2>
        <div class="mt-8 grid gap-4 md:grid-cols-2">
          <article v-for="item in wasigapUseCases" :key="item.title" class="rounded-lg border border-amber-100 bg-amber-50/40 p-6">
            <h3 class="font-extrabold text-slate-950">{{ item.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ item.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 py-16">
      <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p class="text-sm font-extrabold uppercase tracking-wider text-violet-700">{{ t('marketing.wasigap.businessModelEyebrow') }}</p>
          <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">{{ t('marketing.wasigap.businessModelTitle') }}</h2>
          <ul class="mt-6 space-y-3">
            <li v-for="item in wasigapBusinessModel" :key="item" class="flex items-start gap-3 text-sm leading-6 text-slate-600">
              <Check class="mt-0.5 h-4 w-4 shrink-0 text-violet-700" />
              {{ item }}
            </li>
          </ul>
          <NuxtLink to="/pricing" class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-violet-700 hover:text-violet-900">
            Lihat harga WaSigap
            <ArrowRight class="h-4 w-4" />
          </NuxtLink>
        </div>
        <div>
          <p class="text-sm font-extrabold uppercase tracking-wider text-slate-500">{{ t('marketing.wasigap.tractionEyebrow') }}</p>
          <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">{{ t('marketing.wasigap.tractionTitle') }}</h2>
          <div class="mt-6 grid gap-3 sm:grid-cols-2">
            <div v-for="item in wasigapTraction" :key="item.label" class="rounded-lg border border-slate-200 bg-white p-5">
              <p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">{{ item.label }}</p>
              <p class="mt-2 text-lg font-extrabold text-slate-950">{{ item.value }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="border-y border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-wider text-blue-700">{{ t('marketing.wasigap.techEyebrow') }}</p>
        <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">{{ t('marketing.wasigap.techTitle') }}</h2>
        <p class="mt-4 max-w-3xl text-base leading-7 text-slate-600">{{ t('marketing.wasigap.techDesc') }}</p>
      </div>
    </section>

    <section class="bg-slate-50 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-wider text-indigo-700">{{ t('marketing.wasigap.cloudEyebrow') }}</p>
        <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">{{ t('marketing.wasigap.cloudTitle') }}</h2>
        <p class="mt-4 max-w-3xl text-base leading-7 text-slate-600">{{ t('marketing.wasigap.cloudDesc') }}</p>
        <ul class="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          <li v-for="item in cloudCreditUses" :key="item" class="rounded-lg border border-indigo-100 bg-white px-4 py-3 text-sm font-semibold text-slate-700">
            {{ item }}
          </li>
        </ul>
      </div>
    </section>

    <section class="border-y border-slate-200 bg-white py-16">
      <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p class="text-sm font-extrabold uppercase tracking-wider text-amber-700">{{ t('marketing.wasigap.aboutEyebrow') }}</p>
          <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">{{ t('marketing.wasigap.aboutTitle') }}</h2>
          <p class="mt-4 text-base leading-7 text-slate-600">{{ t('marketing.wasigap.aboutDesc') }}</p>
          <NuxtLink to="/company" class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-amber-700 hover:text-amber-900">
            Lihat profil autobotws
            <ArrowRight class="h-4 w-4" />
          </NuxtLink>
        </div>
        <div class="rounded-lg border border-slate-200 bg-slate-50 p-6">
          <p class="text-sm font-extrabold uppercase tracking-wider text-slate-500">{{ t('marketing.wasigap.legalEyebrow') }}</p>
          <dl class="mt-4 space-y-3 text-sm">
            <div class="flex justify-between gap-4 border-b border-slate-200 pb-3">
              <dt class="text-slate-500">Brand Name</dt>
              <dd class="font-bold text-slate-950">{{ companyProfile.brandName }}</dd>
            </div>
            <div class="flex justify-between gap-4 border-b border-slate-200 pb-3">
              <dt class="text-slate-500">Legal Entity</dt>
              <dd class="font-bold text-slate-950">{{ companyProfile.legalName }}</dd>
            </div>
            <div class="flex justify-between gap-4 border-b border-slate-200 pb-3">
              <dt class="text-slate-500">Website</dt>
              <dd class="font-bold text-slate-950">{{ companyProfile.website.replace('https://', '') }}</dd>
            </div>
            <div class="flex justify-between gap-4 border-b border-slate-200 pb-3">
              <dt class="text-slate-500">Founder</dt>
              <dd class="font-bold text-slate-950">{{ companyProfile.founder }}</dd>
            </div>
            <div class="flex justify-between gap-4">
              <dt class="text-slate-500">Legal Document</dt>
              <dd class="font-bold text-slate-950">{{ companyProfile.legalPlaceholder }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <section class="bg-slate-950 py-16 text-white">
      <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold tracking-tight">{{ t('marketing.wasigap.ctaTitle') }}</h2>
        <p class="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">{{ t('marketing.wasigap.ctaDesc') }}</p>
        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <a
            :href="platform.url"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-950"
          >
            {{ t('marketing.wasigap.ctaPrimary') }}
            <ArrowRight class="h-4 w-4" />
          </a>
          <NuxtLink to="/contact" class="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-bold text-white">
            {{ t('marketing.wasigap.ctaSecondary') }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>