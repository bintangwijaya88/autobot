<script setup lang="ts">
useSeoMeta({
  title: 'WaSigap Startup Profile — AutobotWS',
  description: 'WaSigap is an AI WhatsApp automation and CRM platform by AutobotWS. 200 registered users, 80 active users, 30M+ AI tokens processed. Built for Indonesian SMEs and service businesses.',
  ogTitle: 'WaSigap Startup Profile — AutobotWS',
  ogDescription: 'AI WhatsApp automation and CRM platform by AutobotWS (CV Autobot Wijaya Solution). 200 registered users, 80 active users, 30M+ AI tokens processed.',
  ogUrl: 'https://wasigap.com/startup',
  ogImage: 'https://wasigap.com/logo.png',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://wasigap.com/startup' }],
})

const traction = [
  { label: 'Registered Users', value: '200', detail: 'Businesses and individuals signed up on the platform' },
  { label: 'Active Users', value: '80', detail: 'Users actively running automations and AI workflows' },
  { label: 'AI Tokens Processed', value: '30M+', detail: 'Tokens consumed across AI auto-reply, workers, and follow-up flows' },
  { label: 'AI Providers Integrated', value: '5+', detail: 'Claude, OpenAI, Mimo, Groq, AWS Bedrock' },
]

const techStack = [
  { category: 'Backend', items: 'Go, Node.js, Laravel/PHP, Java' },
  { category: 'Frontend', items: 'Vue.js, React.js, Tailwind CSS' },
  { category: 'Desktop', items: 'Rust, Tauri' },
  { category: 'Mobile', items: 'Flutter, Android' },
  { category: 'Database', items: 'MySQL, PostgreSQL, Redis' },
  { category: 'Infrastructure', items: 'Cloud server, VPS, Docker, queue workers, background jobs' },
  { category: 'AI & Automation', items: 'AI model APIs, chatbot, workflow automation, multi-provider AI' },
  { category: 'Integration', items: 'WhatsApp gateway, marketplace API, payment gateway, Google services, third-party APIs' },
]

const awsServices = [
  { service: 'Amazon EC2 / ECS', use: 'Application hosting and containerized backend services' },
  { service: 'Amazon RDS', use: 'Managed MySQL and PostgreSQL database hosting' },
  { service: 'Amazon S3', use: 'Object storage for files, media, backups, and exports' },
  { service: 'Amazon CloudFront', use: 'CDN for fast content delivery and static asset caching' },
  { service: 'Amazon CloudWatch', use: 'Logs, monitoring, alerts, and system health visibility' },
  { service: 'Amazon SES', use: 'Transactional email for notifications and system alerts' },
  { service: 'AWS Lambda', use: 'Scheduled automation tasks and event-driven processing' },
  { service: 'AWS Bedrock', use: 'AI model experimentation and production AI inference workloads' },
  { service: 'Amazon ElastiCache', use: 'Redis-compatible caching for sessions, queues, and rate limiting' },
]

const startupProfile = [
  { label: 'Product Name', value: 'WaSigap' },
  { label: 'Company / Startup', value: 'AutobotWS' },
  { label: 'Legal Entity', value: 'CV Autobot Wijaya Solution' },
  { label: 'Product Website', value: 'https://wasigap.com' },
  { label: 'Product Category', value: 'AI WhatsApp Automation & CRM Platform' },
  { label: 'Target Market', value: 'Indonesian SMEs, clinics, e-commerce sellers, service businesses' },
  { label: 'Product Status', value: 'Active — currently used by early adopters' },
  { label: 'AI Integrations', value: 'Claude, OpenAI, Mimo, Groq, AWS Bedrock' },
  { label: 'Location', value: 'Jakarta, Indonesia' },
]

const marketSegments = [
  {
    title: 'Indonesian SMEs',
    desc: 'Small and medium-sized businesses that manage customer orders, inquiries, and follow-ups primarily through WhatsApp.',
  },
  {
    title: 'Clinics & Healthcare Services',
    desc: 'Clinics, doctors\' practices, and healthcare service providers that need automated appointment booking, patient reminders, and service FAQs.',
  },
  {
    title: 'E-commerce Sellers',
    desc: 'Online sellers on Tokopedia, Shopee, and direct channels who receive product inquiries, order follow-ups, and customer support via WhatsApp.',
  },
  {
    title: 'Service Businesses',
    desc: 'Cleaning services, repair services, logistics, education providers, and other service businesses that use WhatsApp as their booking and support channel.',
  },
]
</script>

<template>
  <div class="bg-slate-50">
    <!-- Hero -->
    <section class="border-b border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap items-center gap-3">
          <span class="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-emerald-700">Startup Profile</span>
          <span class="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-slate-500">AutobotWS · CV Autobot Wijaya Solution</span>
        </div>
        <h1 class="mt-5 max-w-4xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl">
          WaSigap Startup Profile
        </h1>
        <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          WaSigap is an AI-powered WhatsApp automation and CRM platform developed by AutobotWS under CV Autobot Wijaya Solution. We are building practical AI automation tools for Indonesian SMEs, clinics, e-commerce sellers, and service businesses that rely on WhatsApp for daily customer communication.
        </p>
      </div>
    </section>

    <!-- Traction -->
    <section class="border-b border-slate-200 bg-slate-950 py-16 text-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-widest text-emerald-400">Traction</p>
        <h2 class="mt-3 text-4xl font-black tracking-tight">Current Product Traction</h2>
        <p class="mt-5 max-w-3xl text-base leading-8 text-slate-300">
          WaSigap is already being used by early adopters and businesses that need practical WhatsApp automation. The platform has processed more than 30 million AI tokens across customer support, reply automation, workflow testing, and AI assistant features.
        </p>
        <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="item in traction" :key="item.label" class="rounded-[24px] border border-white/10 bg-white/5 p-6">
            <p class="text-4xl font-black text-emerald-400">{{ item.value }}</p>
            <p class="mt-2 text-sm font-extrabold text-white">{{ item.label }}</p>
            <p class="mt-1 text-xs leading-5 text-slate-400">{{ item.detail }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Product description -->
    <section class="border-b border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p class="text-sm font-extrabold uppercase tracking-widest text-sky-700">What We Build</p>
            <h2 class="mt-3 text-4xl font-black tracking-tight text-slate-950">Product Description</h2>
            <div class="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Our product helps businesses automate customer support, manage conversations, organize CRM data, schedule broadcasts, create AI follow-ups, collect structured information through AI Worker, and connect WhatsApp conversations with operational workflows such as booking, reminders, lead qualification, and customer service.
              </p>
              <p>
                WaSigap currently has <strong class="text-slate-950">200 registered users</strong>, around <strong class="text-slate-950">80 active users</strong>, and has processed more than <strong class="text-slate-950">30 million AI tokens</strong> through AI-powered workflows. The platform integrates and experiments with AI providers including Claude, OpenAI, Mimo, Groq, and AWS Bedrock.
              </p>
            </div>
          </div>
          <div class="grid gap-4">
            <div v-for="item in startupProfile" :key="item.label" class="flex items-start justify-between gap-4 rounded-[16px] border border-slate-200 bg-slate-50 px-4 py-3.5">
              <span class="text-sm text-slate-500">{{ item.label }}</span>
              <span class="text-right text-sm font-bold text-slate-950">{{ item.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Market -->
    <section class="border-b border-slate-200 bg-slate-50 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-widest text-amber-700">Target Market</p>
        <h2 class="mt-3 text-4xl font-black tracking-tight text-slate-950">Focused on Indonesian SME & Healthcare Automation</h2>
        <div class="mt-8 grid gap-5 md:grid-cols-2">
          <article v-for="seg in marketSegments" :key="seg.title" class="rounded-[24px] border border-amber-100 bg-white p-7">
            <h3 class="text-xl font-extrabold text-slate-950">{{ seg.title }}</h3>
            <p class="mt-3 text-sm leading-7 text-slate-600">{{ seg.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Technology -->
    <section class="border-b border-slate-200 bg-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-widest text-violet-700">Technology Stack</p>
        <h2 class="mt-3 text-4xl font-black tracking-tight text-slate-950">How WaSigap Is Built</h2>
        <p class="mt-5 max-w-3xl text-base leading-8 text-slate-600">
          Our technology stack includes Go, Node.js, Rust/Tauri, Vue.js, MySQL, PostgreSQL, Redis, cloud storage, background workers, queue systems, and AI model APIs.
        </p>
        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="tech in techStack" :key="tech.category" class="rounded-[20px] border border-slate-200 bg-slate-50 p-5">
            <p class="text-xs font-extrabold uppercase tracking-widest text-slate-400">{{ tech.category }}</p>
            <p class="mt-3 text-sm font-semibold leading-7 text-slate-700">{{ tech.items }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- AWS Use Case -->
    <section class="border-b border-slate-200 bg-slate-950 py-16 text-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-extrabold uppercase tracking-widest text-sky-400">AWS Activate</p>
        <h2 class="mt-3 text-4xl font-black tracking-tight">How We Plan to Use AWS</h2>
        <p class="mt-5 max-w-3xl text-base leading-8 text-slate-300">
          AWS credits will help WaSigap scale its infrastructure while serving early customers and improving product reliability. We plan to use AWS for backend services, database hosting, object storage, file backups, CDN delivery, email notifications, monitoring, AI workflow experiments, and production-grade deployment.
        </p>
        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article v-for="item in awsServices" :key="item.service" class="rounded-[20px] border border-white/10 bg-white/5 p-5">
            <p class="text-sm font-extrabold text-white">{{ item.service }}</p>
            <p class="mt-2 text-xs leading-6 text-slate-400">{{ item.use }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-slate-50 py-16">
      <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 class="text-4xl font-black tracking-tight text-slate-950">Learn more about WaSigap</h2>
        <p class="mx-auto mt-4 max-w-xl text-base leading-8 text-slate-600">
          See our features, pricing, and contact us for product demos or partnership inquiries.
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
