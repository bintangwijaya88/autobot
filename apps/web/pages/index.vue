<script setup lang="ts">
import {
  ArrowRight,
  Bot,
  Briefcase,
  Building2,
  Check,
  ChevronRight,
  Cloud,
  Database,
  Globe,
  Layers3,
  Link2,
  Mail,
  MessageCircle,
  MessageSquareText,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Workflow,
} from 'lucide-vue-next'
import { companyProfile } from '~/utils/marketing'

definePageMeta({ layout: 'marketing' })

const { locale } = useLocale()

useSeoMeta({
  title: 'autobotws — AI Automation and Software Products for Indonesian Businesses',
  description: 'autobotws builds AI automation, WhatsApp automation, and software products for Indonesian SMEs, clinics, online stores, and service businesses.',
  ogTitle: 'autobotws — AI Automation and Software Products',
  ogDescription: 'Software, AI automation, and WhatsApp automation products for growing Indonesian businesses.',
  ogUrl: 'https://autobot.co.id',
  ogType: 'website',
  ogImage: 'https://autobot.co.id/logo.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'autobotws — AI Automation and Software Products',
  twitterDescription: 'Software, AI automation, and WhatsApp automation products for growing Indonesian businesses.',
  twitterImage: 'https://autobot.co.id/logo.png',
})

useHead({
  htmlAttrs: { lang: locale.value === 'id' ? 'id' : 'en' },
  meta: [{ name: 'theme-color', content: '#f8fafc' }],
})

const copy = computed(() => {
  if (locale.value === 'id') {
    return {
      heroBadge: 'AI Automation and Software Products',
      heroTitle: 'autobotws',
      heroSubtitle: 'Solusi AI Automation dan Software untuk Bisnis yang Berkembang.',
      heroDesc: 'autobotws membantu bisnis Indonesia mengotomatisasi proses kerja, mengelola komunikasi pelanggan, dan membangun sistem digital yang scalable melalui software, AI, dan solusi otomasi praktis.',
      heroPoints: [
        'Brand teknologi yang fokus pada software products dan AI automation',
        'WaSigap sebagai flagship product untuk otomasi WhatsApp berbasis AI',
        'Target market: UMKM, klinik, toko online, bisnis jasa, dan tim customer service',
      ],
      ctaPrimary: 'View WaSigap',
      ctaSecondary: 'Request Demo',
      ctaTertiary: 'Contact Founder',
      trustTitle: 'Mengapa reviewer cepat paham',
      trustPoints: [
        'Brand utama jelas: autobotws',
        'Produk utama jelas: WaSigap',
        'Use case dan kebutuhan AWS credits terlihat sejak awal',
      ],
      productEyebrow: 'Produk Utama',
      productTitle: 'WaSigap — Otomasi WhatsApp Berbasis AI untuk Bisnis Indonesia',
      productDesc: 'WaSigap adalah platform otomasi WhatsApp berbasis AI yang membantu UMKM, klinik, toko online, bisnis jasa, dan tim customer service mengelola percakapan, AI auto-reply, CRM, broadcast terjadwal, dan follow-up pelanggan dalam satu dashboard.',
      productButtons: ['Visit WaSigap', 'View Pricing', 'Request Demo'],
      productScreenshotLabel: 'Preview dashboard WaSigap',
      productScreenshotNote: 'Preview ini menunjukkan positioning produk WaSigap sebagai platform operasional WhatsApp berbasis AI untuk bisnis Indonesia.',
      problemTitle: 'Masalah yang Kami Selesaikan',
      problemDesc: 'Banyak bisnis Indonesia bergantung pada WhatsApp sebagai kanal utama komunikasi pelanggan dan penjualan. Namun, ketika volume chat meningkat, tim sering mengalami respons lambat, follow-up tercecer, data pelanggan tidak rapi, broadcast masih manual, dan riwayat percakapan sulit dipantau.',
      solutionTitle: 'Solusi Kami',
      solutionDesc: 'autobotws membangun produk AI automation yang praktis untuk membantu bisnis mengurangi pekerjaan berulang, mempercepat respons pelanggan, merapikan data customer, dan mengotomatisasi alur kerja operasional.',
      featureTitle: 'Fitur Utama WaSigap',
      useCaseTitle: 'Use Case',
      otherProductsTitle: 'Produk Lain dari autobotws',
      technologyTitle: 'Teknologi',
      technologyDesc: 'autobotws membangun produk digital yang scalable menggunakan teknologi web, mobile, desktop, cloud, dan AI modern. Stack teknologi dipilih berdasarkan kebutuhan produk, skala sistem, keamanan, kebutuhan integrasi, dan kemudahan pengembangan jangka panjang.',
      awsTitle: 'Penggunaan AWS Credits',
      awsDesc: 'Kami berencana menggunakan AWS credits untuk mendukung pengembangan produk, staging, production infrastructure, dan scaling WaSigap serta produk autobotws lainnya.',
      progressTitle: 'Progress Startup',
      legalTitle: 'Legal Entity',
      founderTitle: 'Founder',
      founderDesc: 'autobotws didirikan oleh Bintang Wijaya, seorang software developer dan technology founder yang berfokus pada software engineering, AI automation, business process automation, dan pengembangan produk digital untuk bisnis Indonesia.',
      finalTitle: 'Bangun Otomasi Bisnis yang Lebih Cerdas bersama autobotws',
      finalDesc: 'Kami membangun produk AI automation yang praktis untuk bisnis Indonesia. Hubungi kami untuk demo, integrasi, atau peluang kerja sama.',
    }
  }

  return {
    heroBadge: 'AI Automation and Software Products',
    heroTitle: 'autobotws',
    heroSubtitle: 'AI Automation and Software Products for Growing Businesses.',
    heroDesc: 'autobotws helps Indonesian businesses automate workflows, manage customer communication, and build scalable digital systems through software, AI, and practical automation solutions.',
    heroPoints: [
      'Technology brand focused on software products and AI automation',
      'WaSigap positioned as the flagship AI WhatsApp automation product',
      'Target market: Indonesian SMEs, clinics, online stores, service businesses, and customer service teams',
    ],
    ctaPrimary: 'View WaSigap',
    ctaSecondary: 'Request Demo',
    ctaTertiary: 'Contact Founder',
    trustTitle: 'What a reviewer sees immediately',
    trustPoints: [
      'Brand is clear: autobotws',
      'Main product is clear: WaSigap',
      'Use cases and AWS credit needs are visible above the fold',
    ],
    productEyebrow: 'Flagship Product',
    productTitle: 'WaSigap — AI WhatsApp Automation for Indonesian SMEs',
    productDesc: 'WaSigap is an AI-powered WhatsApp automation platform that helps SMEs, clinics, online stores, service businesses, and customer service teams manage conversations, AI auto-replies, CRM, broadcast scheduling, and customer follow-ups from one dashboard.',
    productButtons: ['Visit WaSigap', 'View Pricing', 'Request Demo'],
    productScreenshotLabel: 'WaSigap dashboard preview',
    productScreenshotNote: 'This preview positions WaSigap as an AI-powered operational WhatsApp platform for Indonesian businesses.',
    problemTitle: 'The Problem',
    problemDesc: 'Many Indonesian businesses rely on WhatsApp as their main customer communication and sales channel. However, as message volume grows, teams often face slow responses, missed follow-ups, scattered customer data, manual broadcast workflows, and limited visibility into customer conversations.',
    solutionTitle: 'Our Solution',
    solutionDesc: 'autobotws builds practical AI automation products that help businesses reduce repetitive work, improve response speed, organize customer data, and automate operational workflows.',
    featureTitle: 'WaSigap Key Features',
    useCaseTitle: 'Use Cases',
    otherProductsTitle: 'Other Products by autobotws',
    technologyTitle: 'Technology',
    technologyDesc: 'autobotws builds scalable products using modern web, mobile, desktop, cloud, and AI technologies. Our stack is selected based on product requirements, scalability, security, integration needs, and long-term maintainability.',
    awsTitle: 'How We Use AWS Credits',
    awsDesc: 'We plan to use AWS credits to support product development, staging, production infrastructure, and scaling for WaSigap and other autobotws products.',
    progressTitle: 'Startup Progress',
    legalTitle: 'Legal Entity',
    founderTitle: 'Founder',
    founderDesc: 'autobotws was founded by Bintang Wijaya, a software developer and technology founder focused on software engineering, AI automation, business process automation, and digital product development for Indonesian businesses.',
    finalTitle: 'Build Smarter Business Automation with autobotws',
    finalDesc: 'We are building practical AI automation products for Indonesian businesses. Contact us to request a demo, discuss integration, or explore collaboration.',
  }
})

const featureCards = [
  { icon: Bot, text: 'AI auto-reply for WhatsApp conversations' },
  { icon: Users, text: 'Customer CRM and chat history' },
  { icon: MessageCircle, text: 'Broadcast scheduling' },
  { icon: Briefcase, text: 'Multi-agent customer service' },
  { icon: Workflow, text: 'AI follow-up recommendations' },
  { icon: Link2, text: 'Workflow automation' },
  { icon: Database, text: 'Customer data collection' },
  { icon: Globe, text: 'Marketplace and third-party integrations' },
]

const useCases = [
  {
    title: 'Clinics and Healthcare Services',
    desc: 'Automate patient inquiries, doctor schedules, service information, booking reminders, and customer follow-ups.',
  },
  {
    title: 'Online Stores and E-commerce',
    desc: 'Manage product inquiries, stock questions, order follow-ups, broadcast campaigns, and customer data.',
  },
  {
    title: 'Service Businesses',
    desc: 'Handle booking requests, customer questions, reminders, service updates, and lead management.',
  },
  {
    title: 'Customer Service Teams',
    desc: 'Centralize WhatsApp conversations, support multiple agents, track chat history, and improve response time.',
  },
]

const otherProducts = [
  {
    title: 'KlopDana',
    desc: 'A bank reconciliation system that helps finance teams automate transaction matching, validation, and audit trails.',
  },
  {
    title: 'SanyClean',
    desc: 'A cleaning service management platform for organizing bookings, customers, and service operations.',
  },
  {
    title: 'Bintanx',
    desc: 'An academic information system for helping educational institutions manage academic and administrative workflows.',
  },
]

const technologyGroups = [
  { title: 'Backend', items: 'Laravel/PHP, Golang, Java, Node.js' },
  { title: 'Frontend', items: 'Vue.js, React.js, Tailwind CSS' },
  { title: 'Mobile', items: 'Flutter, Android' },
  { title: 'Desktop', items: 'Rust, Tauri' },
  { title: 'Database', items: 'MySQL, PostgreSQL, Redis' },
  { title: 'Infrastructure', items: 'Cloud server, VPS, Docker, queue workers, background jobs' },
  { title: 'AI & Automation', items: 'AI model integration, chatbot, OCR, workflow automation' },
  { title: 'Integration', items: 'WhatsApp gateway, marketplace API, Google services, payment gateway, third-party APIs' },
]

const awsUses = [
  'Backend hosting',
  'Database infrastructure',
  'Queue and background jobs',
  'Scheduled automation processing',
  'File and media storage',
  'Monitoring and logging',
  'CDN and security layer',
  'AI-related workloads',
  'Testing and staging environments',
  'Scaling multi-tenant SaaS infrastructure',
]

const startupProgress = [
  { label: 'Product status', value: 'Active product development and go-to-market rollout' },
  { label: 'Main product', value: 'WaSigap' },
  { label: 'Target market', value: 'Indonesian SMEs, clinics, online stores, and service businesses' },
  { label: 'Website', value: 'https://wa.autobot.co.id' },
  { label: 'Demo', value: 'Available via product website and direct demo request' },
  { label: 'Registered users', value: '133 users registered' },
  { label: 'Active users', value: '30 active users' },
  { label: 'Legal entity', value: 'Available' },
]

const legalItems = [
  { label: 'Brand Name', value: 'autobotws' },
  { label: 'Legal Entity', value: 'CV Autobot Wijaya Solution' },
  { label: 'Founder', value: 'Bintang Wijaya' },
  { label: 'Location', value: 'Indonesia' },
  { label: 'Website', value: 'https://autobot.co.id' },
  { label: 'Product Website', value: 'https://wa.autobot.co.id' },
  { label: 'Business Field', value: 'Software Development, AI Automation, WhatsApp Automation, and System Integration' },
  { label: 'Legal Document', value: '[NIB / Akta / Nomor Legalitas]' },
]

const founderLinks = [
  { label: 'Email', href: `mailto:${companyProfile.email}`, value: companyProfile.email },
  { label: 'WhatsApp', href: 'https://wa.me/6282164867681', value: companyProfile.whatsapp },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bintangwijaya/', value: 'linkedin.com/in/bintangwijaya' },
]
</script>

<template>
  <div class="landing-page bg-slate-50 text-slate-950">
    <section class="hero-shell relative overflow-hidden border-b border-slate-200 bg-white">
      <div class="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top_right,_rgba(34,197,94,0.12),_transparent_35%),radial-gradient(circle_at_top_left,_rgba(14,165,233,0.12),_transparent_30%)]" />
      <div class="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
        <div class="relative z-10">
          <div class="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
            <Sparkles class="h-4 w-4" />
            {{ copy.heroBadge }}
          </div>
          <h1 class="mt-6 text-5xl font-black tracking-tight text-slate-950 sm:text-6xl">
            {{ copy.heroTitle }}
          </h1>
          <p class="mt-4 max-w-3xl text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
            {{ copy.heroSubtitle }}
          </p>
          <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {{ copy.heroDesc }}
          </p>

          <div class="mt-8 grid gap-3">
            <div v-for="point in copy.heroPoints" :key="point" class="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <Check class="h-4 w-4" />
              </span>
              <span class="text-sm font-semibold text-slate-700">{{ point }}</span>
            </div>
          </div>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="https://wa.autobot.co.id"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              {{ copy.ctaPrimary }}
              <ArrowRight class="h-4 w-4" />
            </a>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
            >
              {{ copy.ctaSecondary }}
            </NuxtLink>
            <a
              href="https://www.linkedin.com/in/bintangwijaya/"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-bold text-emerald-800 transition hover:border-emerald-300 hover:bg-emerald-100"
            >
              {{ copy.ctaTertiary }}
            </a>
          </div>
        </div>

        <div class="relative z-10">
          <div class="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950 shadow-[0_32px_80px_-32px_rgba(15,23,42,0.55)]">
            <div class="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p class="text-sm font-bold text-white">Startup Review Snapshot</p>
                <p class="text-xs text-slate-400">autobotws + WaSigap</p>
              </div>
              <span class="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-300">
                ACTIVE PRODUCT
              </span>
            </div>

            <div class="grid gap-4 p-5">
              <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div class="flex items-center gap-3">
                  <span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
                    <MessageSquareText class="h-5 w-5" />
                  </span>
                  <div>
                    <p class="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Flagship Product</p>
                    <p class="text-lg font-extrabold text-white">WaSigap</p>
                  </div>
                </div>
                <p class="mt-4 text-sm leading-6 text-slate-300">
                  AI WhatsApp automation platform for SMEs, clinics, online stores, service businesses, and support teams.
                </p>
              </div>

              <div class="grid gap-4 sm:grid-cols-2">
                <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p class="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">Primary Market</p>
                  <p class="mt-3 text-sm font-semibold leading-6 text-white">Indonesia-first SMEs and service operations with growing customer conversations.</p>
                </div>
                <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p class="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">Why Credits Matter</p>
                  <p class="mt-3 text-sm font-semibold leading-6 text-white">Cloud infrastructure is required for SaaS hosting, queue jobs, monitoring, storage, and AI workloads.</p>
                </div>
              </div>

              <div class="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950/60 p-5">
                <p class="text-sm font-bold text-white">{{ copy.trustTitle }}</p>
                <div class="mt-4 grid gap-3">
                  <div v-for="point in copy.trustPoints" :key="point" class="flex items-start gap-3">
                    <Check class="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                    <span class="text-sm leading-6 text-slate-200">{{ point }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="border-b border-slate-200 bg-slate-50 py-16">
      <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
        <div>
          <p class="text-sm font-extrabold uppercase tracking-[0.2em] text-emerald-700">{{ copy.productEyebrow }}</p>
          <h2 class="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            {{ copy.productTitle }}
          </h2>
          <p class="mt-5 text-base leading-8 text-slate-600">
            {{ copy.productDesc }}
          </p>

          <div class="mt-6 grid gap-3">
            <a
              href="https://wa.autobot.co.id"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-bold text-slate-900 transition hover:border-emerald-300 hover:shadow-sm"
            >
              <span>{{ copy.productButtons[0] }}</span>
              <ChevronRight class="h-4 w-4 text-slate-400" />
            </a>
            <NuxtLink
              to="/pricing"
              class="inline-flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-bold text-slate-900 transition hover:border-emerald-300 hover:shadow-sm"
            >
              <span>{{ copy.productButtons[1] }}</span>
              <ChevronRight class="h-4 w-4 text-slate-400" />
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-bold text-slate-900 transition hover:border-emerald-300 hover:shadow-sm"
            >
              <span>{{ copy.productButtons[2] }}</span>
              <ChevronRight class="h-4 w-4 text-slate-400" />
            </NuxtLink>
          </div>

          <div class="mt-6 flex flex-wrap gap-3 text-sm">
            <NuxtLink to="/privacy-policy" class="rounded-full border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:border-slate-400 hover:text-slate-900">
              Privacy Policy
            </NuxtLink>
            <NuxtLink to="/terms-of-service" class="rounded-full border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:border-slate-400 hover:text-slate-900">
              Terms of Service
            </NuxtLink>
          </div>
        </div>

        <div class="rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm">
          <div class="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-950">
            <div class="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <p class="text-sm font-bold text-white">{{ copy.productScreenshotLabel }}</p>
              <span class="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-slate-200">AI + CRM + Automation</span>
            </div>
            <div class="aspect-[1896/829] bg-slate-900">
              <img
                src="/images/placeholders/banner.png"
                alt="WaSigap product preview"
                class="block h-full w-full object-contain"
              />
            </div>
          </div>
          <p class="mt-4 text-sm leading-6 text-slate-500">
            {{ copy.productScreenshotNote }}
          </p>
        </div>
      </div>
    </section>

    <section class="border-b border-slate-200 bg-white py-16">
      <div class="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <article class="rounded-[28px] border border-rose-100 bg-rose-50 p-8">
          <p class="text-sm font-extrabold uppercase tracking-[0.2em] text-rose-700">Problem</p>
          <h2 class="mt-3 text-3xl font-black tracking-tight text-slate-950">{{ copy.problemTitle }}</h2>
          <p class="mt-5 text-base leading-8 text-slate-700">{{ copy.problemDesc }}</p>
        </article>
        <article class="rounded-[28px] border border-emerald-100 bg-emerald-50 p-8">
          <p class="text-sm font-extrabold uppercase tracking-[0.2em] text-emerald-700">Solution</p>
          <h2 class="mt-3 text-3xl font-black tracking-tight text-slate-950">{{ copy.solutionTitle }}</h2>
          <p class="mt-5 text-base leading-8 text-slate-700">{{ copy.solutionDesc }}</p>
        </article>
      </div>
    </section>

    <section class="border-b border-slate-200 bg-slate-50 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <p class="text-sm font-extrabold uppercase tracking-[0.2em] text-sky-700">Product Features</p>
          <h2 class="mt-3 text-3xl font-black tracking-tight text-slate-950">{{ copy.featureTitle }}</h2>
        </div>

        <div class="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <article v-for="feature in featureCards" :key="feature.text" class="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
            <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
              <component :is="feature.icon" class="h-5 w-5" />
            </span>
            <p class="mt-4 text-sm font-bold leading-6 text-slate-900">{{ feature.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="border-b border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <p class="text-sm font-extrabold uppercase tracking-[0.2em] text-amber-700">Target Market</p>
          <h2 class="mt-3 text-3xl font-black tracking-tight text-slate-950">{{ copy.useCaseTitle }}</h2>
        </div>

        <div class="mt-8 grid gap-4 md:grid-cols-2">
          <article v-for="item in useCases" :key="item.title" class="rounded-[24px] border border-amber-100 bg-amber-50/60 p-6">
            <h3 class="text-lg font-extrabold text-slate-950">{{ item.title }}</h3>
            <p class="mt-3 text-sm leading-7 text-slate-700">{{ item.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="border-b border-slate-200 bg-slate-50 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <p class="text-sm font-extrabold uppercase tracking-[0.2em] text-violet-700">Product Portfolio</p>
          <h2 class="mt-3 text-3xl font-black tracking-tight text-slate-950">{{ copy.otherProductsTitle }}</h2>
        </div>

        <div class="mt-8 grid gap-4 lg:grid-cols-3">
          <article v-for="item in otherProducts" :key="item.title" class="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-lg font-extrabold text-slate-950">{{ item.title }}</h3>
            <p class="mt-3 text-sm leading-7 text-slate-600">{{ item.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="border-b border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl">
          <p class="text-sm font-extrabold uppercase tracking-[0.2em] text-slate-700">Technology Capabilities</p>
          <h2 class="mt-3 text-3xl font-black tracking-tight text-slate-950">{{ copy.technologyTitle }}</h2>
          <p class="mt-5 text-base leading-8 text-slate-600">{{ copy.technologyDesc }}</p>
        </div>

        <div class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <article v-for="item in technologyGroups" :key="item.title" class="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
            <div class="flex items-center gap-3">
              <span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-900 shadow-sm">
                <component :is="item.title === 'Mobile' ? Smartphone : item.title === 'Infrastructure' ? Cloud : item.title === 'Integration' ? Link2 : item.title === 'Database' ? Database : item.title === 'Backend' ? Layers3 : item.title === 'AI & Automation' ? Bot : ShieldCheck" class="h-5 w-5" />
              </span>
              <h3 class="text-sm font-extrabold text-slate-950">{{ item.title }}</h3>
            </div>
            <p class="mt-4 text-sm leading-7 text-slate-600">{{ item.items }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="border-b border-slate-200 bg-slate-950 py-16 text-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl">
          <p class="text-sm font-extrabold uppercase tracking-[0.2em] text-cyan-300">AWS Activate Readiness</p>
          <h2 class="mt-3 text-3xl font-black tracking-tight">{{ copy.awsTitle }}</h2>
          <p class="mt-5 text-base leading-8 text-slate-300">{{ copy.awsDesc }}</p>
        </div>

        <div class="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          <article v-for="item in awsUses" :key="item" class="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-slate-100">
            {{ item }}
          </article>
        </div>
      </div>
    </section>

    <section class="border-b border-slate-200 bg-white py-16">
      <div class="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <article class="rounded-[28px] border border-slate-200 bg-slate-50 p-8">
          <p class="text-sm font-extrabold uppercase tracking-[0.2em] text-slate-700">Startup Readiness</p>
          <h2 class="mt-3 text-3xl font-black tracking-tight text-slate-950">{{ copy.progressTitle }}</h2>
          <div class="mt-6 grid gap-3">
            <div v-for="item in startupProgress" :key="item.label" class="flex items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4">
              <span class="text-sm font-semibold text-slate-500">{{ item.label }}</span>
              <span class="text-right text-sm font-bold text-slate-950">{{ item.value }}</span>
            </div>
          </div>
        </article>

        <div class="grid gap-6">
          <article class="rounded-[28px] border border-slate-200 bg-slate-50 p-8">
            <p class="text-sm font-extrabold uppercase tracking-[0.2em] text-slate-700">{{ copy.legalTitle }}</p>
            <div class="mt-6 grid gap-3">
              <div v-for="item in legalItems" :key="item.label" class="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                <p class="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-400">{{ item.label }}</p>
                <p class="mt-2 text-sm font-bold leading-6 text-slate-950">{{ item.value }}</p>
              </div>
            </div>
          </article>

          <article class="rounded-[28px] border border-emerald-100 bg-emerald-50 p-8">
            <p class="text-sm font-extrabold uppercase tracking-[0.2em] text-emerald-700">{{ copy.founderTitle }}</p>
            <p class="mt-4 text-base leading-8 text-slate-700">{{ copy.founderDesc }}</p>
            <div class="mt-6 grid gap-3">
              <a
                v-for="item in founderLinks"
                :key="item.label"
                :href="item.href"
                target="_blank"
                rel="noopener"
                class="flex items-center justify-between rounded-2xl border border-emerald-200 bg-white px-4 py-4 text-sm font-bold text-slate-900 transition hover:border-emerald-300"
              >
                <span>{{ item.label }}</span>
                <span class="text-slate-500">{{ item.value }}</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p class="text-sm font-extrabold uppercase tracking-[0.2em] text-slate-700">Call to Action</p>
              <h2 class="mt-3 text-3xl font-black tracking-tight text-slate-950">{{ copy.finalTitle }}</h2>
              <p class="mt-4 max-w-3xl text-base leading-8 text-slate-600">{{ copy.finalDesc }}</p>
            </div>
            <div class="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <NuxtLink
                to="/contact"
                class="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
              >
                Request Demo
                <ArrowRight class="h-4 w-4" />
              </NuxtLink>
              <a
                href="https://www.linkedin.com/in/bintangwijaya/"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Contact Founder
              </a>
              <a
                href="https://wa.autobot.co.id"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-bold text-emerald-800 transition hover:border-emerald-300 hover:bg-emerald-100"
              >
                View WaSigap
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-shell::after {
  background-image:
    linear-gradient(120deg, rgba(15, 23, 42, 0.02), transparent 38%),
    radial-gradient(circle at bottom left, rgba(20, 184, 166, 0.08), transparent 24%);
  content: '';
  inset: 0;
  pointer-events: none;
  position: absolute;
}
</style>
