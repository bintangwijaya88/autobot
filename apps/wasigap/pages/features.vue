<script setup lang="ts">
useSeoMeta({
  title: 'Features — WaSigap AI WhatsApp Automation Platform',
  description: 'Explore all WaSigap features: AI auto-reply, CRM, broadcast scheduler, AI follow-up, AI worker, multi AI provider support, and more for WhatsApp business automation.',
  ogTitle: 'WaSigap Features — AI WhatsApp Automation',
  ogDescription: 'Complete feature list for WaSigap: AI auto-reply, CRM, broadcast, AI follow-up, AI worker, and multi-provider AI support.',
  ogUrl: 'https://wa.autobot.co.id/features',
  ogImage: 'https://wa.autobot.co.id/logo.png',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://wa.autobot.co.id/features' }],
})

const coreFeatures = [
  {
    title: 'AI Auto Reply',
    desc: 'Automatically respond to customer questions using AI agents connected to business knowledge, FAQs, product information, and service workflows. Configure reply rules, set AI personas, and define escalation paths to human agents.',
    badge: 'AI Powered',
    color: 'emerald',
  },
  {
    title: 'CRM & Contact Management',
    desc: 'Organize customer contacts, conversation history, lead status, customer notes, tags, and service follow-up data in one unified dashboard. Track every interaction and never lose a customer conversation.',
    badge: 'Core',
    color: 'sky',
  },
  {
    title: 'Safe Broadcast & Scheduler',
    desc: 'Send scheduled WhatsApp campaigns with contact segmentation, delay control, message templates, and safer sending workflows designed for business communication compliance.',
    badge: 'Broadcast',
    color: 'amber',
  },
  {
    title: 'AI Follow-Up',
    desc: 'Generate smart follow-up recommendations automatically from customer conversations, schedule them for team approval, and ensure important leads never fall through the cracks.',
    badge: 'AI Powered',
    color: 'emerald',
  },
  {
    title: 'AI Worker',
    desc: 'Create task-based AI agents that run structured collection workflows through WhatsApp conversations — booking forms, registration flows, survey collection, and data gathering — and save results directly into custom database fields.',
    badge: 'AI Powered',
    color: 'violet',
  },
  {
    title: 'Multi AI Provider Support',
    desc: 'WaSigap integrates and experiments with multiple AI providers including Claude, OpenAI, Mimo, Groq, and AWS Bedrock. Switch and compare AI providers to support flexible automation workflows without vendor lock-in.',
    badge: 'Integration',
    color: 'sky',
  },
  {
    title: 'Multi-Agent Customer Service',
    desc: 'Support multiple human agents handling different customer conversations from the same WhatsApp inbox. Assign chats, transfer between agents, set availability, and monitor team performance.',
    badge: 'Team',
    color: 'amber',
  },
  {
    title: 'Chat Log & History',
    desc: 'Complete conversation history for every customer contact with search, filtering, tagging, and audit capabilities. Never lose context across team handoffs or long sales cycles.',
    badge: 'Core',
    color: 'slate',
  },
  {
    title: 'Flow Builder',
    desc: 'Design automated conversation flows with conditional logic, branching, data collection steps, and AI-assisted nodes. Build structured customer journeys without code.',
    badge: 'Automation',
    color: 'violet',
  },
  {
    title: 'Marketplace Integration',
    desc: 'Connect WaSigap with marketplace and third-party platforms to sync customer data, order information, and product catalogs into your WhatsApp automation workflows.',
    badge: 'Integration',
    color: 'sky',
  },
  {
    title: 'Reminder & Automation Workflow',
    desc: 'Set automated reminders, scheduled messages, appointment confirmations, payment follow-ups, and event notifications triggered by customer data and calendar events.',
    badge: 'Automation',
    color: 'amber',
  },
  {
    title: 'Dashboard & Analytics',
    desc: 'Monitor message volume, response times, AI usage, broadcast performance, team activity, and customer interaction metrics from a centralized operations dashboard.',
    badge: 'Analytics',
    color: 'slate',
  },
]

const colorMap: Record<string, string> = {
  emerald: 'border-emerald-100 bg-emerald-50/60 text-emerald-700',
  sky: 'border-sky-100 bg-sky-50/60 text-sky-700',
  amber: 'border-amber-100 bg-amber-50/60 text-amber-700',
  violet: 'border-violet-100 bg-violet-50/60 text-violet-700',
  slate: 'border-slate-200 bg-slate-50 text-slate-600',
}

const aiProviders = [
  { name: 'Claude', desc: 'Anthropic's Claude models for high-quality conversational AI and long context support.' },
  { name: 'OpenAI', desc: 'GPT models for general-purpose AI auto-reply, summarization, and content generation.' },
  { name: 'Mimo', desc: 'Specialized AI provider for targeted Indonesian business conversation flows.' },
  { name: 'Groq', desc: 'Ultra-fast AI inference for low-latency WhatsApp responses at scale.' },
  { name: 'AWS Bedrock', desc: 'Amazon Bedrock for enterprise-grade AI workloads, compliance, and scalable inference.' },
]
</script>

<template>
  <div class="bg-slate-50">
    <!-- Hero -->
    <section class="border-b border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-widest text-emerald-700">Platform Features</p>
        <h1 class="mt-3 max-w-4xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl">
          Everything you need to automate WhatsApp customer service
        </h1>
        <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          WaSigap provides a complete AI-powered WhatsApp automation toolkit — from intelligent auto-replies and CRM management to broadcast campaigns, AI workers, and multi-provider AI support.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <a href="https://wa.autobot.co.id/" target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700">
            Get Started
          </a>
          <NuxtLink to="/contact" class="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:bg-slate-50">
            Request Demo
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Core Features -->
    <section class="py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="feature in coreFeatures"
            :key="feature.title"
            class="rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm"
          >
            <span
              class="inline-flex rounded-full border px-3 py-1 text-xs font-bold"
              :class="colorMap[feature.color]"
            >
              {{ feature.badge }}
            </span>
            <h2 class="mt-4 text-xl font-extrabold text-slate-950">{{ feature.title }}</h2>
            <p class="mt-3 text-sm leading-7 text-slate-600">{{ feature.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- AI Providers -->
    <section class="border-t border-slate-200 bg-slate-950 py-20 text-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-widest text-emerald-400">Multi AI Provider</p>
        <h2 class="mt-3 text-4xl font-black tracking-tight">Flexible AI Provider Support</h2>
        <p class="mt-5 max-w-3xl text-base leading-8 text-slate-300">
          WaSigap doesn't lock you into a single AI model. Experiment, switch, and combine AI providers based on your use case, cost requirements, and performance needs.
        </p>
        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <div
            v-for="provider in aiProviders"
            :key="provider.name"
            class="rounded-[20px] border border-white/10 bg-white/5 p-5"
          >
            <p class="text-base font-extrabold text-white">{{ provider.name }}</p>
            <p class="mt-2 text-xs leading-6 text-slate-400">{{ provider.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-slate-50 py-16">
      <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 class="text-4xl font-black tracking-tight text-slate-950">Start automating your WhatsApp today</h2>
        <p class="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
          WaSigap Lifetime Access — one-time payment, no monthly subscription, free updates for the first 1,000 users.
        </p>
        <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="https://wa.autobot.co.id/" target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-base font-bold text-white transition hover:bg-emerald-700">
            Start Using WaSigap
          </a>
          <NuxtLink to="/contact" class="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-bold text-slate-800 transition hover:bg-slate-50">
            Request Demo
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
