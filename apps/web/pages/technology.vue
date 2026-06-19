<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { technologyCategories, technologyStack } from '~/utils/marketing'

definePageMeta({ layout: 'marketing' })

const { t } = useLocale()

useSeoMeta({
  title: 'Teknologi — autobotws',
  description: 'Kapabilitas teknologi autobotws: web, mobile, desktop, cloud, AI, dan integrasi untuk produk digital yang scalable.',
})

const methods = [
  { step: '01', title: 'Map business workflow', desc: 'Identify repetitive work, channel friction, data ownership, integration needs, and measurable success criteria.' },
  { step: '02', title: 'Design solution mix', desc: 'Choose the right product (WaSigap, KlopDana, SanyClean, Bintanx) or custom modules based on the business process.' },
  { step: '03', title: 'Deploy and integrate', desc: 'Connect APIs, configure roles, set up dashboards, and prepare SOPs for daily operations.' },
  { step: '04', title: 'Measure and improve', desc: 'Track conversion, response time, manual work reduction, SLA, and operational visibility.' },
]
</script>

<template>
  <div>
    <section class="border-b border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-wider text-cyan-700">{{ t('marketing.technology.eyebrow') }}</p>
        <div class="mt-3 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <h1 class="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            {{ t('marketing.technology.title') }}
          </h1>
          <p class="text-lg leading-8 text-slate-600">
            {{ t('marketing.technology.intro') }}
          </p>
        </div>
        <p class="mt-6 max-w-3xl rounded-lg border border-cyan-100 bg-cyan-50 px-5 py-4 text-sm leading-6 text-slate-700">
          {{ t('marketing.technology.principle') }}
        </p>
      </div>
    </section>

    <section class="bg-slate-50 py-16">
      <div class="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        <article v-for="item in technologyStack" :key="item.label" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <component :is="item.icon" class="h-8 w-8 text-cyan-700" />
          <h2 class="mt-5 text-xl font-extrabold text-slate-950">{{ item.label }}</h2>
          <p class="mt-3 text-sm leading-6 text-slate-600">{{ item.desc }}</p>
        </article>
      </div>
    </section>

    <section class="border-y border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-wider text-cyan-700">{{ t('marketing.technology.categoriesEyebrow') }}</p>
        <div class="mt-6 grid gap-4 md:grid-cols-2">
          <article v-for="item in technologyCategories" :key="item.slug" class="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h2 class="font-extrabold text-slate-950">{{ item.title }}</h2>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ item.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 py-16">
      <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <div>
          <p class="text-sm font-extrabold uppercase tracking-wider text-cyan-700">Implementation Method</p>
          <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">From workflow design to measurable deployment.</h2>
          <p class="mt-4 text-base leading-7 text-slate-600">
            autobotws designs systems from business process first, then chooses the right product and integration layer.
          </p>
        </div>
        <div class="grid gap-4">
          <div v-for="item in methods" :key="item.step" class="flex gap-4 rounded-lg border border-slate-200 bg-white p-5">
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-sm font-extrabold text-white">{{ item.step }}</span>
            <div>
              <h3 class="font-extrabold text-slate-950">{{ item.title }}</h3>
              <p class="mt-1 text-sm leading-6 text-slate-600">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="rounded-lg border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h2 class="text-3xl font-extrabold tracking-tight text-slate-950">{{ t('marketing.technology.ctaTitle') }}</h2>
          <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            {{ t('marketing.technology.ctaDesc') }}
          </p>
          <NuxtLink to="/contact" class="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white">
            {{ t('marketing.technology.ctaButton') }}
            <ArrowRight class="h-4 w-4" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>