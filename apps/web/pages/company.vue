<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import {
  advantagePoints,
  businessProblems,
  businessSolutions,
  cloudCreditUses,
  companyAdvantages,
  companyProfile,
  companyValues,
  corePlatforms,
  industries,
  missionItems,
  teamMembers,
  workflowSteps,
} from '~/utils/marketing'

definePageMeta({ layout: 'marketing' })

const { t } = useLocale()

useSeoMeta({
  title: 'Tentang autobotws — Company Profile',
  description: 'Profil autobotws: brand teknologi Indonesia untuk software development, AI automation, otomasi WhatsApp, dan integrasi sistem. Produk: WaSigap, KlopDana, SanyClean, Bintanx.',
  ogTitle: 'Tentang autobotws',
  ogDescription: 'autobotws membantu bisnis mengotomatisasi proses kerja, mengelola komunikasi pelanggan, dan membangun sistem digital yang scalable.',
  ogImage: 'https://autobot.co.id/logo.png',
  ogUrl: 'https://autobot.co.id/company',
})
</script>

<template>
  <div>
    <section class="border-b border-slate-200 bg-white py-16">
      <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:items-center">
        <div>
          <p class="text-sm font-extrabold uppercase tracking-wider text-amber-700">{{ t('marketing.company.eyebrow') }}</p>
          <h1 class="mt-3 text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl">
            {{ t('marketing.company.title') }}
          </h1>
          <p class="mt-4 text-xl font-semibold leading-8 text-slate-700">
            {{ t('marketing.company.subtitle') }}
          </p>
          <p class="mt-5 text-lg leading-8 text-slate-600">
            {{ t('marketing.company.about') }}
          </p>
          <p class="mt-4 text-base leading-7 text-slate-600">
            {{ t('marketing.company.aboutExtended') }}
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink to="/contact" class="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white">
              {{ t('marketing.company.ctaButton') }}
              <ArrowRight class="h-4 w-4" />
            </NuxtLink>
            <NuxtLink to="/platforms" class="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800">
              {{ t('marketing.home.explorePlatforms') }}
            </NuxtLink>
          </div>
        </div>
        <div class="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <img src="/team-aws.png" alt="Tim autobotws" class="aspect-[16/10] w-full rounded-lg object-cover" />
        </div>
      </div>
    </section>

    <section class="bg-slate-50 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-wider text-rose-700">{{ t('marketing.company.problemEyebrow') }}</p>
        <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">{{ t('marketing.company.problemTitle') }}</h2>
        <div class="mt-8 grid gap-4 md:grid-cols-2">
          <article v-for="item in businessProblems" :key="item.title" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="font-extrabold text-slate-950">{{ item.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ item.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="border-y border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-wider text-emerald-700">{{ t('marketing.company.solutionEyebrow') }}</p>
        <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">{{ t('marketing.company.solutionTitle') }}</h2>
        <div class="mt-8 grid gap-4 md:grid-cols-2">
          <article v-for="item in businessSolutions" :key="item.title" class="rounded-lg border border-emerald-100 bg-emerald-50/50 p-6">
            <h3 class="font-extrabold text-slate-950">{{ item.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ item.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 py-16">
      <div class="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <article class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:col-span-1">
          <p class="text-sm font-extrabold uppercase tracking-wider text-amber-700">{{ t('marketing.company.visionEyebrow') }}</p>
          <p class="mt-4 text-base leading-7 text-slate-600">{{ t('marketing.company.vision') }}</p>
        </article>
        <article class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:col-span-2">
          <p class="text-sm font-extrabold uppercase tracking-wider text-amber-700">{{ t('marketing.company.missionEyebrow') }}</p>
          <ol class="mt-4 space-y-3">
            <li v-for="(item, index) in missionItems" :key="item" class="flex gap-3 text-sm leading-6 text-slate-600">
              <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-extrabold text-amber-800">{{ index + 1 }}</span>
              {{ item }}
            </li>
          </ol>
        </article>
      </div>
    </section>

    <section class="border-y border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-wider text-amber-700">{{ t('marketing.company.advantagesEyebrow') }}</p>
        <p class="mt-3 max-w-3xl text-base leading-7 text-slate-600">{{ t('marketing.company.advantagesDesc') }}</p>
        <div class="mt-6 grid gap-4 md:grid-cols-2">
          <article v-for="item in companyAdvantages" :key="item.title" class="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h2 class="font-extrabold text-slate-950">{{ item.title }}</h2>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ item.desc }}</p>
          </article>
        </div>
        <ul class="mt-6 grid gap-2 sm:grid-cols-2">
          <li v-for="point in advantagePoints" :key="point" class="flex items-start gap-2 text-sm text-slate-700">
            <span class="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
            {{ point }}
          </li>
        </ul>
      </div>
    </section>

    <section class="bg-slate-50 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p class="text-sm font-extrabold uppercase tracking-wider text-blue-700">{{ t('marketing.company.productsEyebrow') }}</p>
            <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">WaSigap, KlopDana, SanyClean, Bintanx</h2>
          </div>
          <NuxtLink to="/platforms" class="inline-flex items-center gap-2 text-sm font-bold text-blue-700">
            {{ t('marketing.home.platformSuite.directory') }}
            <ArrowRight class="h-4 w-4" />
          </NuxtLink>
        </div>
        <div class="mt-8 grid gap-4 md:grid-cols-2">
          <NuxtLink
            v-for="platform in corePlatforms"
            :key="platform.slug"
            :to="`/platforms/${platform.slug}`"
            class="rounded-lg border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-sm"
          >
            <component :is="platform.icon" class="h-7 w-7 text-blue-700" />
            <h3 class="mt-4 font-extrabold text-slate-950">{{ platform.name }}</h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ platform.desc }}</p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="border-y border-slate-200 bg-white py-16">
      <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p class="text-sm font-extrabold uppercase tracking-wider text-amber-700">{{ t('marketing.company.industriesEyebrow') }}</p>
          <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">Industri yang kami layani</h2>
          <p class="mt-4 text-base leading-7 text-slate-600">{{ t('marketing.company.industriesDesc') }}</p>
        </div>
        <div class="flex flex-wrap gap-2">
          <span v-for="industry in industries" :key="industry" class="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700">
            {{ industry }}
          </span>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 py-16">
      <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <div>
          <p class="text-sm font-extrabold uppercase tracking-wider text-cyan-700">{{ t('marketing.company.workflowEyebrow') }}</p>
          <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">{{ t('marketing.company.workflowTitle') }}</h2>
          <p class="mt-4 text-base leading-7 text-slate-600">{{ t('marketing.company.workflowDesc') }}</p>
        </div>
        <div class="grid gap-3">
          <div v-for="item in workflowSteps" :key="item.step" class="flex gap-4 rounded-lg border border-slate-200 bg-white p-5">
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-sm font-extrabold text-white">{{ item.step }}</span>
            <div>
              <h3 class="font-extrabold text-slate-950">{{ item.title }}</h3>
              <p class="mt-1 text-sm leading-6 text-slate-600">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="border-y border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-wider text-violet-700">{{ t('marketing.company.cloudEyebrow') }}</p>
        <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">{{ t('marketing.company.cloudTitle') }}</h2>
        <p class="mt-4 max-w-3xl text-base leading-7 text-slate-600">{{ t('marketing.company.cloudDesc') }}</p>
        <ul class="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          <li v-for="item in cloudCreditUses" :key="item" class="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
            {{ item }}
          </li>
        </ul>
      </div>
    </section>

    <section class="bg-slate-50 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-wider text-amber-700">{{ t('marketing.company.teamEyebrow') }}</p>
        <div class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div v-for="member in teamMembers" :key="member.name" class="rounded-lg border border-slate-200 bg-white p-4 text-center shadow-sm">
            <div class="mx-auto h-16 w-16 overflow-hidden rounded-full">
              <img :src="member.img" :alt="member.name" class="h-full w-full object-cover" />
            </div>
            <p class="mt-3 text-sm font-extrabold text-slate-950">{{ member.name }}</p>
            <p class="mt-1 text-xs text-slate-500">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="border-y border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-wider text-amber-700">{{ t('marketing.company.legalEyebrow') }}</p>
        <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">{{ t('marketing.company.legalBrand') }}</p>
            <p class="mt-2 text-sm font-bold text-slate-950">{{ companyProfile.brandName }}</p>
          </div>
          <div class="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">{{ t('marketing.company.legalName') }}</p>
            <p class="mt-2 text-sm font-bold text-slate-950">{{ companyProfile.legalName }}</p>
          </div>
          <div class="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">{{ t('marketing.company.legalWebsite') }}</p>
            <p class="mt-2 text-sm font-bold text-slate-950">autobot.co.id</p>
          </div>
          <div class="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">{{ t('marketing.company.legalFounder') }}</p>
            <p class="mt-2 text-sm font-bold text-slate-950">{{ companyProfile.founder }}</p>
          </div>
          <div class="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">{{ t('marketing.company.legalFounded') }}</p>
            <p class="mt-2 text-sm font-bold text-slate-950">{{ companyProfile.foundedYear }}</p>
          </div>
          <div class="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">{{ t('marketing.company.legalNib') }}</p>
            <p class="mt-2 text-sm font-bold text-slate-950">{{ companyProfile.legalPlaceholder }}</p>
          </div>
          <div class="rounded-lg border border-slate-200 bg-slate-50 p-5 sm:col-span-2 lg:col-span-3">
            <p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">{{ t('marketing.company.legalField') }}</p>
            <p class="mt-2 text-sm font-bold text-slate-950">{{ companyProfile.businessField }}</p>
          </div>
          <div class="rounded-lg border border-slate-200 bg-slate-50 p-5 sm:col-span-2 lg:col-span-3">
            <p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">{{ t('marketing.company.legalAddress') }}</p>
            <p class="mt-2 text-sm leading-6 text-slate-700">{{ companyProfile.address }}, Indonesia</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-slate-950 py-16 text-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 class="text-3xl font-extrabold tracking-tight">{{ t('marketing.company.ctaTitle') }}</h2>
            <p class="mt-4 max-w-2xl text-sm leading-6 text-slate-300">{{ t('marketing.company.ctaDesc') }}</p>
          </div>
          <div class="flex flex-col gap-3 sm:flex-row">
            <NuxtLink to="/contact" class="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-950">
              {{ t('marketing.company.ctaButton') }}
              <ArrowRight class="h-4 w-4" />
            </NuxtLink>
            <NuxtLink to="/partners" class="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-bold text-white">
              {{ t('marketing.company.viewPartners') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>