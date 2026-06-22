<script setup lang="ts">
useSeoMeta({
  title: 'Contact WaSigap — Get Started or Request a Demo',
  description: 'Contact WaSigap for product demos, business inquiries, partnership, or startup verification. Reach us via WhatsApp, email, or the contact form.',
  ogTitle: 'Contact WaSigap',
  ogDescription: 'Get in touch with WaSigap for business inquiries, product demos, or partnership discussions.',
  ogUrl: 'https://wasigap.com/contact',
  ogImage: 'https://wasigap.com/logo.png',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://wasigap.com/contact' }],
})

const form = reactive({
  name: '',
  businessName: '',
  email: '',
  whatsapp: '',
  message: '',
})

const submitted = ref(false)
const submitting = ref(false)
const error = ref('')

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

async function handleSubmit() {
  error.value = ''
  if (!form.name.trim()) { error.value = 'Please enter your name.'; return }
  if (!form.email.trim() || !validateEmail(form.email)) { error.value = 'Please enter a valid email address.'; return }
  if (!form.message.trim()) { error.value = 'Please enter your message.'; return }

  submitting.value = true
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 800))
  submitting.value = false
  submitted.value = true
}

const contactChannels = [
  {
    title: 'WhatsApp',
    desc: 'Chat directly with our team via WhatsApp for quick questions and demo requests.',
    value: '+62 821-6486-7681',
    href: 'https://wa.me/6282164867681',
    color: 'emerald',
  },
  {
    title: 'Email',
    desc: 'Send us an email for business inquiries, partnership, or startup verification.',
    value: 'support@autobot.co.id',
    href: 'mailto:support@autobot.co.id',
    color: 'sky',
  },
  {
    title: 'LinkedIn',
    desc: 'Connect with the founder directly for startup collaboration and investment inquiries.',
    value: 'linkedin.com/in/bintangwijaya',
    href: 'https://www.linkedin.com/in/bintangwijaya/',
    color: 'blue',
  },
]

const colorMap: Record<string, { card: string; badge: string }> = {
  emerald: { card: 'border-emerald-100 bg-emerald-50/60', badge: 'bg-emerald-100 text-emerald-700' },
  sky: { card: 'border-sky-100 bg-sky-50/60', badge: 'bg-sky-100 text-sky-700' },
  blue: { card: 'border-blue-100 bg-blue-50/60', badge: 'bg-blue-100 text-blue-700' },
}
</script>

<template>
  <div class="bg-slate-50">
    <!-- Hero -->
    <section class="border-b border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-widest text-emerald-700">Contact</p>
        <h1 class="mt-3 max-w-3xl text-5xl font-black tracking-tight text-slate-950">
          Get in touch with WaSigap
        </h1>
        <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          For business inquiries, partnership, product demo, or startup verification, please contact WaSigap through the official website at <strong class="text-slate-950">https://wasigap.com</strong>. Our team is active Monday–Friday, 09.00–17.00 WIB.
        </p>
      </div>
    </section>

    <!-- Channels + Form -->
    <section class="py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <!-- Contact channels -->
          <div>
            <p class="text-sm font-extrabold uppercase tracking-widest text-slate-500">Contact Channels</p>
            <div class="mt-5 grid gap-4">
              <a
                v-for="ch in contactChannels"
                :key="ch.title"
                :href="ch.href"
                target="_blank"
                rel="noopener"
                class="group flex items-start gap-4 rounded-[20px] border p-5 transition hover:shadow-sm"
                :class="colorMap[ch.color].card"
              >
                <span class="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-extrabold text-sm"
                  :class="colorMap[ch.color].badge">
                  {{ ch.title[0] }}
                </span>
                <div>
                  <p class="text-sm font-extrabold text-slate-950">{{ ch.title }}</p>
                  <p class="mt-1 text-xs leading-5 text-slate-500">{{ ch.desc }}</p>
                  <p class="mt-2 text-sm font-bold text-slate-700">{{ ch.value }}</p>
                </div>
              </a>
            </div>

            <div class="mt-6 rounded-[20px] border border-slate-200 bg-white p-5">
              <p class="text-xs font-extrabold uppercase tracking-widest text-slate-400">Business Address</p>
              <p class="mt-3 text-sm leading-7 text-slate-600">
                CV Autobot Wijaya Solution<br>
                Gg. Bina Warga III Desa No.36, Lubang Buaya, Cipayung,<br>
                Jakarta Timur 13810, Indonesia
              </p>
            </div>
          </div>

          <!-- Contact form -->
          <div class="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm lg:p-8">
            <div v-if="submitted" class="flex flex-col items-center justify-center py-12 text-center">
              <span class="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl">✓</span>
              <h2 class="mt-5 text-2xl font-extrabold text-slate-950">Message Sent!</h2>
              <p class="mt-3 max-w-sm text-sm leading-7 text-slate-500">
                Thank you for reaching out. We will get back to you within 1 business day via email or WhatsApp.
              </p>
              <button
                class="mt-6 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-800 transition hover:bg-slate-50"
                type="button"
                @click="submitted = false; Object.assign(form, { name: '', businessName: '', email: '', whatsapp: '', message: '' })"
              >
                Send Another Message
              </button>
            </div>

            <form v-else class="grid gap-5" @submit.prevent="handleSubmit">
              <p class="text-xl font-extrabold text-slate-950">Send us a message</p>

              <div class="grid gap-5 sm:grid-cols-2">
                <div>
                  <label class="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500" for="name">
                    Name <span class="text-rose-500">*</span>
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    placeholder="Your full name"
                    class="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                    required
                  />
                </div>
                <div>
                  <label class="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500" for="businessName">
                    Business Name
                  </label>
                  <input
                    id="businessName"
                    v-model="form.businessName"
                    type="text"
                    placeholder="Your business or company"
                    class="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>
              </div>

              <div class="grid gap-5 sm:grid-cols-2">
                <div>
                  <label class="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500" for="email">
                    Email <span class="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    placeholder="you@company.com"
                    class="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                    required
                  />
                </div>
                <div>
                  <label class="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500" for="whatsapp">
                    WhatsApp Number
                  </label>
                  <input
                    id="whatsapp"
                    v-model="form.whatsapp"
                    type="tel"
                    placeholder="+62 8xx-xxxx-xxxx"
                    class="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>
              </div>

              <div>
                <label class="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500" for="message">
                  Message <span class="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  placeholder="Tell us about your business needs, demo request, or any questions..."
                  class="w-full resize-none rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  required
                />
              </div>

              <p v-if="error" class="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700">
                {{ error }}
              </p>

              <button
                type="submit"
                :disabled="submitting"
                class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-4 text-sm font-bold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span v-if="submitting">Sending...</span>
                <span v-else>Send Message</span>
              </button>

              <p class="text-center text-xs text-slate-400">
                By submitting this form, you agree to our
                <NuxtLink to="/privacy-policy" class="underline hover:text-slate-600">Privacy Policy</NuxtLink>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
