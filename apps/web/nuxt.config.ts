export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt'],
  ssr: true,

  app: {
    head: {
      title: 'autobotws — AI Automation and Software Products for Indonesian Businesses',
      titleTemplate: '%s | autobotws',
      htmlAttrs: { lang: 'id' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'autobotws builds AI automation, WhatsApp automation, and software products for Indonesian SMEs, clinics, online stores, and service businesses.' },
        { name: 'keywords', content: 'autobotws, AI automation, WhatsApp automation, software products, SaaS Indonesia, CRM automation, workflow automation, WaSigap' },
        { name: 'author', content: 'autobotws' },
        { name: 'robots', content: 'index, follow' },
        // Open Graph
        { property: 'og:site_name', content: 'autobotws' },
        { property: 'og:title', content: 'autobotws — AI Automation and Software Products' },
        { property: 'og:description', content: 'Software, AI automation, and WhatsApp automation products for growing Indonesian businesses.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://autobot.co.id' },
        { property: 'og:image', content: 'https://autobot.co.id/logo.png' },
        { property: 'og:image:width', content: '512' },
        { property: 'og:image:height', content: '512' },
        { property: 'og:locale', content: 'id_ID' },
        // Twitter / X
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'autobotws — AI Automation and Software Products' },
        { name: 'twitter:description', content: 'Software, AI automation, and WhatsApp automation products for growing Indonesian businesses.' },
        { name: 'twitter:image', content: 'https://autobot.co.id/logo.png' },
        { name: 'theme-color', content: '#f8fafc' },
      ],
      script: [
        // Google Analytics
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-ENVNTMR55Y',
          async: true,
        },
        {
          innerHTML: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-ENVNTMR55Y');`,
        },
        // Microsoft Clarity
        {
          innerHTML: `(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "x0ygtk3h0p");`,
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'autobotws',
            alternateName: ['CV Autobot Wijaya Solution', 'Autobot Wijaya Solution'],
            url: 'https://autobot.co.id',
            logo: 'https://autobot.co.id/logo.png',
            image: 'https://autobot.co.id/logo.png',
            description: 'autobotws builds AI automation, WhatsApp automation, and software products for Indonesian SMEs, clinics, online stores, and service businesses.',
            foundingDate: '2022',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Gg. Bina Warga III Desa No.36, Lubang Buaya, Cipayung',
              addressLocality: 'Jakarta Timur',
              addressRegion: 'DKI Jakarta',
              postalCode: '13810',
              addressCountry: 'ID',
            },
            contactPoint: { '@type': 'ContactPoint', email: 'bintang@autobot.co.id', contactType: 'customer service' },
            sameAs: ['https://autobot.co.id'],
          }),
        },
      ],
      link: [
        // Favicon: PNG utama, SVG fallback
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
    },
  },

  runtimeConfig: {
    apiBase: process.env.NUXT_API_BASE || 'http://localhost:3000',
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '',
      wsUrl: process.env.NUXT_PUBLIC_WS_URL || 'ws://localhost:3000/ws',
      googleClientId: process.env.NUXT_PUBLIC_GOOGLE_CLIENT_ID || '',
    },
  },

  css: ['~/assets/css/main.css'],

  devtools: { enabled: false },

  compatibilityDate: '2024-04-03',

  experimental: {
    appManifest: false,
  },

  // Security headers via Nuxt server routes
  routeRules: {
    '/admin/**': { ssr: false },
    '/api/**': { cors: true },
  },

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
