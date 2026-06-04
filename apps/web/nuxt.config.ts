export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt'],
  ssr: true,

  app: {
    head: {
      title: 'Autobot — Spesialis WhatsApp Chatbot & Automasi Bisnis',
      titleTemplate: '%s | Autobot',
      htmlAttrs: { lang: 'id' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Autobot adalah spesialis WhatsApp chatbot, broadcast/blast, dan AI automation untuk bisnis Indonesia. Solusi WaBlastApp, multi-device, knowledge base, dan 20+ modul bisnis.' },
        { name: 'keywords', content: 'whatsapp chatbot, wa blast, automasi bisnis, chatbot indonesia, ai chatbot, wablast, autobot, autobot.co.id' },
        { name: 'author', content: 'Autobot Wijaya Solution' },
        { name: 'robots', content: 'index, follow' },
        // Open Graph
        { property: 'og:site_name', content: 'Autobot' },
        { property: 'og:title', content: 'Autobot — Spesialis WhatsApp Chatbot & Automasi Bisnis' },
        { property: 'og:description', content: 'Platform WhatsApp chatbot, blast, dan AI automation terlengkap untuk bisnis Indonesia.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://autobot.co.id' },
        { property: 'og:image', content: 'https://autobot.co.id/logo.png' },
        { property: 'og:image:width', content: '512' },
        { property: 'og:image:height', content: '512' },
        { property: 'og:locale', content: 'id_ID' },
        // Twitter / X
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Autobot — WhatsApp Chatbot & Automasi Bisnis' },
        { name: 'twitter:description', content: 'Spesialis WA chatbot, blast massal, dan AI automation untuk bisnis Indonesia.' },
        { name: 'twitter:image', content: 'https://autobot.co.id/logo.png' },
        { name: 'theme-color', content: '#111111' },
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
            name: 'Autobot Wijaya Solution',
            url: 'https://autobot.co.id',
            logo: 'https://autobot.co.id/logo.png',
            image: 'https://autobot.co.id/logo.png',
            description: 'Spesialis WhatsApp chatbot, broadcast/blast, dan AI automation untuk bisnis Indonesia.',
            address: { '@type': 'PostalAddress', addressLocality: 'Jakarta', addressCountry: 'ID' },
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
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:3000',
      wsUrl: process.env.NUXT_PUBLIC_WS_URL || 'ws://localhost:3000/ws',
      googleClientId: process.env.NUXT_PUBLIC_GOOGLE_CLIENT_ID || '',
    },
  },

  css: ['~/assets/css/main.css'],

  devtools: { enabled: false },

  compatibilityDate: '2024-04-03',

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

  vite: {
    build: {
      rollupOptions: {
        maxParallelFileOps: 3,
      },
    },
  },
})
