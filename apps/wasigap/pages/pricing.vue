<script setup lang="ts">
useSeoMeta({
  title: 'Pricing — WaSigap AI WhatsApp Automation',
  description: 'WaSigap Lifetime Access for Rp 199.000 one-time payment. Includes 200 AI credits/month, multi WhatsApp account, AI auto-reply, broadcast, CRM, and free updates.',
  ogTitle: 'WaSigap Pricing — Lifetime Access from Rp 199.000',
  ogDescription: 'One-time payment, no monthly subscription. Includes AI auto-reply, CRM, broadcast scheduler, and multi-account support.',
  ogUrl: 'https://wa.autobot.co.id/pricing',
  ogImage: 'https://wa.autobot.co.id/logo.png',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://wa.autobot.co.id/pricing' }],
})

const features = [
  '200 AI credits per month',
  'Multi WhatsApp account support',
  'AI auto-reply',
  'Broadcast scheduler',
  'CRM and contact management',
  'AI chat features',
  'Flow builder',
  'Chat log and history',
  'Free updates',
  'WhatsApp support',
]

const notes = [
  {
    title: 'What is 1 AI credit?',
    desc: '1 AI credit equals one AI-generated WhatsApp reply up to 200 characters. Additional AI credit packages are available for businesses with higher message volume.',
  },
  {
    title: 'For the first 1,000 users',
    desc: 'The Lifetime Deal pricing is available for the first 1,000 registered users only. After that, WaSigap transitions to a subscription model.',
  },
  {
    title: 'Enterprise & Custom Setup',
    desc: 'For businesses that need private deployment, custom integrations, or higher capacity, contact us for enterprise pricing and setup.',
  },
  {
    title: 'Payment',
    desc: 'Payment can be made via bank transfer, virtual account, QRIS, or payment link. Indonesian businesses are supported through local payment methods.',
  },
]

const faqs = [
  {
    q: 'Is this a one-time payment?',
    a: 'Yes. WaSigap Lifetime Access is a one-time payment of Rp 199.000. No monthly or annual subscription fees.',
  },
  {
    q: 'How many WhatsApp accounts can I connect?',
    a: 'You can connect multiple WhatsApp accounts under one WaSigap account. The exact limit depends on your account tier and usage.',
  },
  {
    q: 'What AI models does WaSigap use?',
    a: 'WaSigap integrates with Claude, OpenAI, Mimo, Groq, and AWS Bedrock. You can configure which AI provider to use for different workflows.',
  },
  {
    q: 'Do I need technical knowledge to use WaSigap?',
    a: 'No. WaSigap is designed for non-technical business users. Setup is guided and most automations can be configured from the dashboard without code.',
  },
  {
    q: 'What happens after I run out of AI credits?',
    a: 'Your standard WhatsApp messaging continues normally. Only AI-generated replies are paused until you top up with an additional AI credit package.',
  },
]
</script>

<template>
  <div class="bg-slate-50">
    <!-- Hero -->
    <section class="border-b border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-widest text-emerald-700">Pricing</p>
        <h1 class="mt-3 max-w-3xl text-5xl font-black tracking-tight text-slate-950">
          Transparent pricing. One-time payment.
        </h1>
        <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Start with WaSigap Lifetime Access — pay once, use forever, free updates for the first 1,000 users.
        </p>
      </div>
    </section>

    <!-- Pricing card -->
    <section class="py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <!-- Main card -->
          <div class="rounded-[32px] border-2 border-emerald-500 bg-white p-8 shadow-xl shadow-emerald-100 lg:p-10">
            <div class="flex items-start justify-between gap-4">
              <div>
                <span class="inline-flex rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white">
                  Lifetime Deal
                </span>
                <h2 class="mt-4 text-3xl font-black text-slate-950">WaSigap Lifetime Access</h2>
                <p class="mt-2 text-sm text-slate-500">For the first 1,000 users</p>
              </div>
            </div>

            <div class="mt-6 flex items-end gap-3">
              <span class="text-6xl font-black tracking-tight text-slate-950">Rp 199.000</span>
              <span class="mb-2 text-lg font-semibold text-slate-400 line-through">Rp 499.000</span>
            </div>
            <p class="mt-2 text-sm font-semibold text-emerald-600">One-time payment · No monthly fee · Save 60%</p>

            <ul class="mt-8 grid gap-3">
              <li v-for="feature in features" :key="feature" class="flex items-center gap-3 text-sm font-medium text-slate-700">
                <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <svg class="h-3 w-3" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </span>
                {{ feature }}
              </li>
            </ul>

            <a
              href="https://wa.autobot.co.id/"
              target="_blank"
              rel="noopener"
              class="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-4 text-base font-bold text-white transition hover:bg-emerald-700"
            >
              Get Started — Rp 199.000
              <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </a>
          </div>

          <!-- Notes -->
          <div class="grid gap-4">
            <div
              v-for="note in notes"
              :key="note.title"
              class="rounded-[20px] border border-slate-200 bg-white p-5"
            >
              <p class="text-sm font-extrabold text-slate-950">{{ note.title }}</p>
              <p class="mt-2 text-sm leading-6 text-slate-600">{{ note.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="border-t border-slate-200 bg-white py-20">
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-black tracking-tight text-slate-950">Frequently Asked Questions</h2>
        <div class="mt-10 grid gap-5">
          <article v-for="faq in faqs" :key="faq.q" class="rounded-[20px] border border-slate-200 bg-slate-50 p-6">
            <p class="font-extrabold text-slate-950">{{ faq.q }}</p>
            <p class="mt-3 text-sm leading-7 text-slate-600">{{ faq.a }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-slate-50 py-16">
      <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 class="text-3xl font-black tracking-tight text-slate-950">Still have questions?</h2>
        <p class="mt-4 text-base leading-8 text-slate-600">Contact us for a demo, enterprise pricing, or custom integration discussion.</p>
        <NuxtLink
          to="/contact"
          class="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-base font-bold text-white transition hover:bg-slate-800"
        >
          Contact Us
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
