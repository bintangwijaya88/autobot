export type LocaleCode = 'id' | 'en'

export const locales: Array<{ code: LocaleCode; label: string; flag: string }> = [
  { code: 'id', label: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
]

export const messages = {
  id: {
    common: {
      language: 'Bahasa',
      backToChat: 'Kembali ke Chat',
      signIn: 'Masuk',
      signOut: 'Keluar',
      close: 'Tutup',
      loading: 'Memuat',
      choose: 'Pilih',
    },
    layout: {
      page: {
        nav: {
          products: 'Produk',
          pricing: 'Harga',
          about: 'Tentang',
          contact: 'Kontak',
          chat: 'Chat',
        },
        footer: {
          brandDesc: 'Spesialis chatbot WhatsApp & AI automation untuk bisnis Indonesia.',
          products: 'Produk',
          company: 'Perusahaan',
          legal: 'Legal',
          allProducts: 'Semua Produk',
          features: 'Fitur',
          pricing: 'Harga',
          subscribe: 'Mulai Berlangganan',
          about: 'Tentang Kami',
          partners: 'Mitra & Case Study',
          contact: 'Kontak',
          whatsappAdmin: 'WhatsApp Admin',
          privacy: 'Kebijakan Privasi',
          terms: 'Syarat & Ketentuan',
          refund: 'Kebijakan Refund',
          copyright: '© 2026 Autobot Wijaya Solution · Seluruh hak cipta dilindungi.',
        },
      },
    },
    sidebar: {
      newChat: 'New Chat',
      search: 'Search',
      explore: 'Explore',
      features: 'Fitur',
      products: 'Produk',
      about: 'Tentang',
      consult: 'Konsultasi',
      allFeatures: 'Lihat semua fitur',
      recent: 'Recent',
      language: 'Bahasa Indonesia',
      adminPanel: 'Admin Panel',
      copied: '✓ Tersalin',
      copyAccessKey: 'Salin access key',
    },
    portal: {
      backToChat: 'Back to Chat',
      signOut: 'Sign Out',
      dashboard: 'Dashboard',
      chats: 'My Chats',
      contacts: 'My Contacts',
      profile: 'Profile',
    },
  },
  en: {
    common: {
      language: 'Language',
      backToChat: 'Back to Chat',
      signIn: 'Sign In',
      signOut: 'Sign Out',
      close: 'Close',
      loading: 'Loading',
      choose: 'Choose',
    },
    layout: {
      page: {
        nav: {
          products: 'Products',
          pricing: 'Pricing',
          about: 'About',
          contact: 'Contact',
          chat: 'Chat',
        },
        footer: {
          brandDesc: 'Specialists in WhatsApp chatbots and AI automation for Indonesian businesses.',
          products: 'Products',
          company: 'Company',
          legal: 'Legal',
          allProducts: 'All Products',
          features: 'Features',
          pricing: 'Pricing',
          subscribe: 'Start Subscription',
          about: 'About Us',
          partners: 'Partners & Case Studies',
          contact: 'Contact',
          whatsappAdmin: 'WhatsApp Admin',
          privacy: 'Privacy Policy',
          terms: 'Terms of Service',
          refund: 'Refund Policy',
          copyright: '© 2026 Autobot Wijaya Solution · All rights reserved.',
        },
      },
    },
    sidebar: {
      newChat: 'New Chat',
      search: 'Search',
      explore: 'Explore',
      features: 'Features',
      products: 'Products',
      about: 'About',
      consult: 'Consultation',
      allFeatures: 'View all features',
      recent: 'Recent',
      language: 'English',
      adminPanel: 'Admin Panel',
      copied: '✓ Copied',
      copyAccessKey: 'Copy access key',
    },
    portal: {
      backToChat: 'Back to Chat',
      signOut: 'Sign Out',
      dashboard: 'Dashboard',
      chats: 'My Chats',
      contacts: 'My Contacts',
      profile: 'Profile',
    },
  },
} as const

type Nested = string | { [key: string]: Nested }

function resolve(path: string, obj: Nested): string | undefined {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (!acc || typeof acc !== 'object') return undefined
    return (acc as Record<string, unknown>)[key]
  }, obj) as string | undefined
}

export function translate(locale: LocaleCode, key: string): string {
  return resolve(key, messages[locale] as Nested) ?? key
}
