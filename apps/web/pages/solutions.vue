<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { platforms, useCases } from '~/utils/marketing'

definePageMeta({ layout: 'marketing' })

useSeoMeta({
  title: 'Use Cases — autobotws',
  description: 'Use case autobotws untuk AI sales assistant, approval workflow, document automation, payment follow-up, executive dashboard, dan system integration.',
})
</script>

<template>
  <div>
    <section class="border-b border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-wider text-emerald-700">Use Cases</p>
        <div class="mt-3 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <h1 class="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Automation that solves operational bottlenecks.
          </h1>
          <p class="text-lg leading-8 text-slate-600">
            Autobot is packaged around measurable business outcomes: faster response, cleaner data, less manual admin, and better visibility for owners and teams.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 py-16">
      <div class="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        <article v-for="item in useCases" :key="item.slug" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <component :is="item.icon" class="h-8 w-8 text-emerald-700" />
          <h2 class="mt-5 text-xl font-extrabold text-slate-950">{{ item.title }}</h2>
          <p class="mt-3 text-sm leading-6 text-slate-600">{{ item.desc }}</p>
          <div class="mt-5 rounded-lg bg-slate-50 p-4">
            <p class="text-xs font-extrabold uppercase tracking-wider text-slate-400">Suggested platform mix</p>
            <p class="mt-2 text-sm font-semibold text-slate-700">
              {{ platforms.slice(0, 3).map(p => p.name).join(' + ') }}
            </p>
          </div>
        </article>
      </div>
    </section>

    <section class="border-y border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="rounded-lg bg-slate-950 p-8 text-white sm:p-10">
          <p class="text-sm font-extrabold uppercase tracking-wider text-emerald-300">Roadmap Workshop</p>
          <h2 class="mt-3 text-3xl font-extrabold">Start from one workflow, then expand into a platform suite.</h2>
          <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
            The most practical first step is not buying every tool. It is mapping one high-impact process and automating it properly.
          </p>
          <NuxtLink to="/contact" class="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-950">
            Discuss use case
            <ArrowRight class="h-4 w-4" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
