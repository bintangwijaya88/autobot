export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  ssr: true,

  app: {
    head: {
      title: 'WaSigap — AI WhatsApp Automation Platform',
      titleTemplate: '%s | WaSigap',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'WaSigap is an AI-powered WhatsApp automation and CRM platform for Indonesian SMEs, clinics, e-commerce sellers, and service businesses.' },
        { name: 'keywords', content: 'WaSigap, WhatsApp automation, AI CRM, WhatsApp CRM, AI auto-reply, broadcast WhatsApp, otomasi WhatsApp, UMKM Indonesia' },
        { name: 'author', content: 'AutobotWS' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:site_name', content: 'WaSigap' },
        { property: 'og:title', content: 'WaSigap — AI WhatsApp Automation Platform' },
        { property: 'og:description', content: 'AI-powered WhatsApp automation and CRM platform for Indonesian SMEs, clinics, e-commerce sellers, and service businesses.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://wasigap.com' },
        { property: 'og:image', content: 'https://wasigap.com/logo.png' },
        { property: 'og:locale', content: 'en_US' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'WaSigap — AI WhatsApp Automation Platform' },
        { name: 'twitter:description', content: 'AI-powered WhatsApp automation and CRM platform for Indonesian SMEs, clinics, e-commerce sellers, and service businesses.' },
        { name: 'twitter:image', content: 'https://wasigap.com/logo.png' },
        { name: 'theme-color', content: '#f0fdf4' },
      ],
      link: [
        { rel: 'canonical', href: 'https://wasigap.com' },
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'shortcut icon', href: '/logo.png' },
        { rel: 'apple-touch-icon', href: '/logo.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap',
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'WaSigap',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '199000',
              priceCurrency: 'IDR',
            },
            description: 'AI-powered WhatsApp automation and CRM platform for Indonesian SMEs, clinics, e-commerce sellers, and service businesses.',
            url: 'https://wasigap.com',
            image: 'https://wasigap.com/logo.png',
            publisher: {
              '@type': 'Organization',
              name: 'AutobotWS',
              legalName: 'CV Autobot Wijaya Solution',
              url: 'https://wasigap.com',
            },
          }),
        },
      ],
    },
  },

  runtimeConfig: {
    public: {},
  },

  css: ['~/assets/css/main.css'],

  devtools: { enabled: false },

  compatibilityDate: '2024-04-03',

  nitro: {
    routeRules: {
      '/**': {
        headers: {
          'X-Frame-Options': 'DENY',
          'X-Content-Type-Options': 'nosniff',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
        },
      },
    },
  },
})
