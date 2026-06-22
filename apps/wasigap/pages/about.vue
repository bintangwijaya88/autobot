<script setup lang="ts">
useSeoMeta({
  title: 'About WaSigap — AI WhatsApp Automation by AutobotWS',
  description: 'WaSigap is built by AutobotWS under CV Autobot Wijaya Solution. We help Indonesian SMEs, clinics, e-commerce sellers, and service businesses automate WhatsApp with AI.',
  ogTitle: 'About WaSigap — AI WhatsApp Automation by AutobotWS',
  ogDescription: 'WaSigap is an AI WhatsApp automation and CRM platform built by AutobotWS (CV Autobot Wijaya Solution) for Indonesian businesses.',
  ogUrl: 'https://wasigap.com/about',
  ogImage: 'https://wasigap.com/logo.png',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://wasigap.com/about' }],
})

const missionPoints = [
  'Help businesses reduce repetitive WhatsApp customer service work through practical AI automation.',
  'Make AI-powered WhatsApp workflows accessible and affordable for Indonesian SMEs and service businesses.',
  'Build reliable, production-grade automation tools that businesses can trust for daily operations.',
  'Support Indonesian businesses in adopting AI-assisted communication at their own pace.',
]

const teamMembers = [
  {
    name: 'Bintang Wijaya',
    role: 'Founder & Lead Developer',
    desc: 'Software developer and technology founder focused on AI automation, software engineering, and digital product development for Indonesian businesses.',
    linkedin: 'https://www.linkedin.com/in/bintangwijaya/',
  },
]

const techStack = [
  { category: 'Backend', items: 'Go, Node.js, Laravel/PHP' },
  { category: 'Frontend', items: 'Vue.js, React.js, Tailwind CSS' },
  { category: 'Desktop', items: 'Rust, Tauri' },
  { category: 'Database', items: 'MySQL, PostgreSQL, Redis' },
  { category: 'Infrastructure', items: 'Cloud server, Docker, queue workers, background jobs' },
  { category: 'AI & Automation', items: 'Claude, OpenAI, Mimo, Groq, AWS Bedrock' },
  { category: 'Integration', items: 'WhatsApp gateway, marketplace API, payment gateway, third-party APIs' },
]

const legalItems = [
  { label: 'Product Name', value: 'WaSigap' },
  { label: 'Company / Startup', value: 'AutobotWS' },
  { label: 'Legal Entity', value: 'CV Autobot Wijaya Solution' },
  { label: 'Website', value: 'https://wasigap.com' },
  { label: 'Founder', value: 'Bintang Wijaya' },
  { label: 'Location', value: 'Jakarta, Indonesia' },
  { label: 'Business Field', value: 'AI WhatsApp Automation, CRM, Software Development' },
]
</script>

<template>
  <div class="bg-slate-50">
    <!-- Hero -->
    <section class="border-b border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-widest text-emerald-700">About</p>
        <h1 class="mt-3 max-w-4xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl">
          WaSigap — Built for Indonesian Businesses on WhatsApp
        </h1>
        <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          WaSigap is an AI-powered WhatsApp automation and CRM platform developed by AutobotWS under CV Autobot Wijaya Solution. We are building practical AI automation tools for Indonesian SMEs, clinics, e-commerce sellers, and service businesses that rely on WhatsApp for daily customer communication.
        </p>
      </div>
    </section>

    <!-- Mission -->
    <section class="border-b border-slate-200 bg-slate-50 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p class="text-sm font-extrabold uppercase tracking-widest text-sky-700">Mission</p>
            <h2 class="mt-3 text-4xl font-black tracking-tight text-slate-950">Why we built WaSigap</h2>
            <p class="mt-5 text-base leading-8 text-slate-600">
              Many Indonesian businesses — clinics, online sellers, service businesses, customer service teams — rely on WhatsApp as their main customer communication channel. As message volume grows, managing conversations manually becomes slow, inconsistent, and hard to scale.
            </p>
            <p class="mt-4 text-base leading-8 text-slate-600">
              WaSigap was built to solve this problem with practical AI automation: faster replies, organized CRM data, scheduled broadcasts, AI follow-ups, and structured customer workflows — all from one dashboard connected to WhatsApp.
            </p>
          </div>
          <div class="grid gap-3">
            <div
              v-for="point in missionPoints"
              :key="point"
              class="flex items-start gap-3 rounded-[18px] border border-slate-200 bg-white p-5"
            >
              <span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              </span>
              <p class="text-sm font-medium leading-7 text-slate-700">{{ point }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="border-b border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-widest text-amber-700">Team</p>
        <h2 class="mt-3 text-4xl font-black tracking-tight text-slate-950">The team behind WaSigap</h2>
        <div class="mt-8 max-w-lg">
          <div
            v-for="member in teamMembers"
            :key="member.name"
            class="rounded-[24px] border border-slate-200 bg-slate-50 p-7"
          >
            <p class="text-xl font-extrabold text-slate-950">{{ member.name }}</p>
            <p class="mt-1 text-sm font-bold text-emerald-700">{{ member.role }}</p>
            <p class="mt-4 text-sm leading-7 text-slate-600">{{ member.desc }}</p>
            <a
              :href="member.linkedin"
              target="_blank"
              rel="noopener"
              class="mt-5 inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <section class="border-b border-slate-200 bg-slate-50 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-widest text-violet-700">Technology</p>
        <h2 class="mt-3 text-4xl font-black tracking-tight text-slate-950">Technology Stack</h2>
        <p class="mt-5 max-w-3xl text-base leading-8 text-slate-600">
          WaSigap is built with a modern, production-grade technology stack designed for reliability, scalability, and AI integration flexibility.
        </p>
        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div
            v-for="tech in techStack"
            :key="tech.category"
            class="rounded-[20px] border border-slate-200 bg-white p-5"
          >
            <p class="text-xs font-extrabold uppercase tracking-widest text-slate-400">{{ tech.category }}</p>
            <p class="mt-3 text-sm font-semibold leading-7 text-slate-700">{{ tech.items }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Legal -->
    <section class="border-b border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p class="text-sm font-extrabold uppercase tracking-widest text-slate-500">Legal Identity</p>
            <h2 class="mt-3 text-4xl font-black tracking-tight text-slate-950">Company Information</h2>
            <p class="mt-5 text-base leading-8 text-slate-600">
              WaSigap is a product of AutobotWS, a technology brand operating under the legal entity CV Autobot Wijaya Solution based in Indonesia.
            </p>
          </div>
          <div class="rounded-[24px] border border-slate-200 bg-slate-50 p-6">
            <dl class="grid gap-4">
              <div
                v-for="item in legalItems"
                :key="item.label"
                class="flex items-start justify-between gap-4 border-b border-slate-200 pb-4 last:border-0 last:pb-0"
              >
                <dt class="text-sm text-slate-500">{{ item.label }}</dt>
                <dd class="text-right text-sm font-bold text-slate-950">{{ item.value }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-slate-50 py-16">
      <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 class="text-4xl font-black tracking-tight text-slate-950">Ready to get started?</h2>
        <p class="mx-auto mt-4 max-w-xl text-base leading-8 text-slate-600">
          See WaSigap features, pricing, and startup profile — or contact us directly.
        </p>
        <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <NuxtLink to="/features" class="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-base font-bold text-white transition hover:bg-emerald-700">
            View Features
          </NuxtLink>
          <NuxtLink to="/contact" class="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-bold text-slate-800 transition hover:bg-slate-50">
            Contact Us
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
