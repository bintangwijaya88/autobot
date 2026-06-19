<script setup lang="ts">
import { useChatStore } from '~/stores/chat'

useSeoMeta({
  title: 'Fitur WaSigap — autobotws',
  description: 'Fitur lengkap WaSigap: auto-reply AI, broadcast, multi-agent customer service, CRM, flow builder, dan modul bisnis.',
  ogTitle: 'Fitur Lengkap WaSigap — autobotws',
  ogDescription: 'Auto-reply cerdas, AI integration, blast massal, multi-device WA, dan 20+ modul bisnis dalam satu platform.',
  ogImage: 'https://autobot.co.id/logo.png',
  ogUrl: 'https://autobot.co.id/features',
})

const chatStore = useChatStore()
const router = useRouter()

const ask = (query: string) => {
  chatStore.triggerSend(query)
  router.push('/')
}

const categories = [
  {
    id: 'autoreply',
    label: 'Auto-Reply & Rule Engine',
    description: 'Balas pesan otomatis berdasarkan aturan fleksibel tanpa coding',
    icon: '↩️',
    bgColor: 'rgba(34,197,94,0.10)',
    borderColor: 'rgba(34,197,94,0.25)',
    labelColor: '#86efac',
    features: [
      { icon: '🎯', label: 'Exact Match', desc: 'Balas pesan yang persis cocok dengan kata kunci yang ditentukan.', query: 'Bagaimana fitur exact match auto-reply bekerja di WaSigap?' },
      { icon: '🔍', label: 'Contains Match', desc: 'Deteksi kata kunci di mana saja dalam pesan masuk, tidak harus persis.', query: 'Apa bedanya exact match dan contains match di auto-reply WaSigap?' },
      { icon: '⚙️', label: 'Regex Pattern', desc: 'Rule berbasis ekspresi reguler untuk pencocokan pola pesan yang kompleks.', query: 'Apakah WaSigap mendukung regex untuk aturan auto-reply?' },
      { icon: '🔄', label: 'Default Fallback', desc: 'Respons default ketika tidak ada rule yang cocok dengan pesan masuk.', query: 'Bagaimana cara setup default fallback reply di WaSigap?' },
      { icon: '👤', label: 'Override Per Kontak', desc: 'Aturan khusus untuk nomor tertentu — berbeda dari aturan global.', query: 'Bisakah saya set aturan reply yang berbeda untuk kontak tertentu?' },
      { icon: '🚫', label: 'Block Mode', desc: 'Blokir kontak tertentu agar tidak mendapat respons dari bot.', query: 'Bagaimana cara memblokir kontak tertentu dari bot WaSigap?' },
    ],
  },
  {
    id: 'ai',
    label: 'Integrasi AI Multi-Provider',
    description: 'Gunakan OpenAI, Claude, atau Gemini sebagai otak chatbot kamu',
    icon: '🤖',
    bgColor: 'rgba(99,102,241,0.10)',
    borderColor: 'rgba(99,102,241,0.22)',
    labelColor: '#a5b4fc',
    features: [
      { icon: '🧠', label: 'OpenAI GPT', desc: 'Integrasikan GPT-4o atau GPT-4o-mini sebagai AI responder untuk percakapan.', query: 'Bagaimana cara mengintegrasikan OpenAI di WaSigap?' },
      { icon: '⚡', label: 'Anthropic Claude', desc: 'Gunakan Claude Haiku, Sonnet, atau Opus untuk reply yang lebih natural dan akurat.', query: 'Apakah WaSigap mendukung Anthropic Claude sebagai AI provider?' },
      { icon: '✨', label: 'Google Gemini', desc: 'Pilihan AI Google Gemini untuk respons cepat dengan biaya lebih rendah.', query: 'Bisa pakai Google Gemini di WaSigap?' },
      { icon: '📚', label: 'Knowledge Base (FAQ)', desc: 'Upload dokumen, Excel, atau tulis manual sebagai konteks pengetahuan AI.', query: 'Bagaimana cara upload knowledge base dan FAQ ke WaSigap?' },
      { icon: '🎭', label: 'Custom AI Persona', desc: 'Atur persona, nama, dan kepribadian AI berbeda untuk setiap kontak atau nomor.', query: 'Bisakah saya buat persona AI yang berbeda per kontak di WaSigap?' },
      { icon: '💰', label: 'Estimasi Biaya AI', desc: 'Pantau estimasi pemakaian token dan biaya AI secara real-time di dashboard.', query: 'Bagaimana cara memantau biaya penggunaan AI di WaSigap?' },
    ],
  },
  {
    id: 'blast',
    label: 'Broadcast & Blast',
    description: 'Kirim pesan massal ke ribuan kontak dengan kontrol penuh',
    icon: '📣',
    bgColor: 'rgba(234,179,8,0.08)',
    borderColor: 'rgba(234,179,8,0.20)',
    labelColor: '#fde047',
    features: [
      { icon: '📤', label: 'Blast Massal', desc: 'Kirim pesan ke banyak nomor sekaligus dengan delay control untuk menghindari spam.', query: 'Bagaimana cara blast pesan ke ribuan kontak di WaSigap?' },
      { icon: '📅', label: 'Broadcast Terjadwal', desc: 'Jadwalkan kampanye broadcast di hari dan jam tertentu secara otomatis.', query: 'Bagaimana cara menjadwalkan broadcast di WaSigap?' },
      { icon: '📋', label: 'Template Pesan', desc: 'Simpan template teks dan media yang bisa digunakan ulang untuk berbagai kampanye.', query: 'Bagaimana cara membuat dan menggunakan template pesan di WaSigap?' },
      { icon: '🖼️', label: 'Media & Attachment', desc: 'Kirim gambar, video, dokumen, atau audio dalam pesan broadcast.', query: 'Bisakah mengirim gambar atau file dalam broadcast WaSigap?' },
      { icon: '📊', label: 'Status Pengiriman', desc: 'Pantau status delivered, read, dan gagal untuk setiap pesan yang dikirim.', query: 'Bagaimana cara melihat status pengiriman broadcast di WaSigap?' },
      { icon: '⏱️', label: 'Delay Control', desc: 'Atur jeda antar pesan untuk meniru pola pengiriman natural dan menghindari ban.', query: 'Apa itu delay control di broadcast WaSigap dan kenapa penting?' },
    ],
  },
  {
    id: 'management',
    label: 'Manajemen Chat & Kontak',
    description: 'Kelola percakapan dan database kontak dari satu tempat',
    icon: '👥',
    bgColor: 'rgba(59,130,246,0.08)',
    borderColor: 'rgba(59,130,246,0.20)',
    labelColor: '#93c5fd',
    features: [
      { icon: '💬', label: 'Chat Log Lengkap', desc: 'Riwayat semua percakapan dengan filter, search, dan status baca/belum baca.', query: 'Bagaimana fitur chat log di WaSigap bekerja?' },
      { icon: '📱', label: 'Multi-Device', desc: 'Hubungkan beberapa nomor WhatsApp sekaligus dalam satu dashboard.', query: 'Berapa banyak nomor WhatsApp yang bisa dihubungkan ke WaSigap?' },
      { icon: '🏷️', label: 'Kelompok Kontak', desc: 'Organisir kontak ke dalam grup/label untuk blast yang lebih tertarget.', query: 'Bagaimana cara membuat kelompok kontak di WaSigap?' },
      { icon: '📥', label: 'Import Kontak Excel', desc: 'Import daftar kontak massal dari file Excel atau CSV dengan mudah.', query: 'Bagaimana cara import kontak dari Excel ke WaSigap?' },
      { icon: '🔄', label: 'Operator Takeover', desc: 'Nonaktifkan bot sementara untuk menangani percakapan secara manual per kontak.', query: 'Apa itu operator takeover dan bagaimana cara menggunakannya di WaSigap?' },
      { icon: '🕐', label: 'Jam Operasional', desc: 'Atur jam aktif bot dan auto-reply di luar jam operasional dengan pesan kustom.', query: 'Bagaimana cara mengatur jam operasional bot di WaSigap?' },
    ],
  },
  {
    id: 'analytics',
    label: 'Dashboard & Analytics',
    description: 'Pantau performa bot dan aktivitas bisnis secara real-time',
    icon: '📊',
    bgColor: 'rgba(20,184,166,0.08)',
    borderColor: 'rgba(20,184,166,0.20)',
    labelColor: '#5eead4',
    features: [
      { icon: '📈', label: 'Statistik Harian', desc: 'Pantau jumlah pesan masuk, auto-reply rate, dan AI reply rate setiap hari.', query: 'Apa saja statistik yang bisa dipantau di dashboard WaSigap?' },
      { icon: '⚡', label: 'Rata-rata Respons', desc: 'Ukur kecepatan rata-rata bot dalam merespons pesan masuk.', query: 'Bagaimana cara melihat rata-rata waktu respons di WaSigap?' },
      { icon: '📉', label: 'Grafik 7 Hari', desc: 'Visualisasi tren aktivitas chat dalam 7 hari terakhir dalam bentuk grafik.', query: 'Apakah ada grafik trend di dashboard WaSigap?' },
      { icon: '🔔', label: 'Badge Unread', desc: 'Counter real-time pesan belum dibaca per kontak dan per device.', query: 'Bagaimana sistem notifikasi dan badge unread di WaSigap?' },
      { icon: '📝', label: 'Catatan Internal', desc: 'Tambahkan catatan internal per sesi dan ringkasan AI otomatis per periode.', query: 'Apakah ada fitur catatan internal di WaSigap?' },
      { icon: '📋', label: 'Task Management', desc: 'Buat dan pantau task untuk operator tim terkait percakapan pelanggan.', query: 'Bagaimana fitur task management untuk operator di WaSigap?' },
    ],
  },
]

const businessModules = [
  { icon: '🏥', label: 'Klinik', sub: 'Booking & Rekam Medis', query: 'Ceritakan tentang paket modul Klinik di WaSigap' },
  { icon: '🛍️', label: 'Toko / E-Commerce', sub: 'Order & Inventory', query: 'Ceritakan tentang paket modul Toko untuk e-commerce di WaSigap' },
  { icon: '🎯', label: 'CRM', sub: 'Pipeline & Leads', query: 'Ceritakan tentang paket modul CRM di WaSigap' },
  { icon: '💰', label: 'Keuangan', sub: 'Invoice & Cash Flow', query: 'Ceritakan tentang paket modul Keuangan di WaSigap' },
  { icon: '👷', label: 'HR & Payroll', sub: 'Absensi & Gaji', query: 'Ceritakan tentang paket modul HR dan Payroll di WaSigap' },
  { icon: '🏠', label: 'Properti', sub: 'Listing & Tenant', query: 'Ceritakan tentang paket modul Properti di WaSigap' },
  { icon: '🍽️', label: 'F&B / Restoran', sub: 'Menu & Order Meja', query: 'Ceritakan tentang paket modul F&B untuk restoran di WaSigap' },
  { icon: '🎪', label: 'Event', sub: 'Tiket & Registrasi', query: 'Ceritakan tentang paket modul Event di WaSigap' },
  { icon: '🎧', label: 'Helpdesk', sub: 'Tiket Support & SLA', query: 'Ceritakan tentang paket modul Helpdesk di WaSigap' },
  { icon: '🎓', label: 'Pendidikan', sub: 'Absensi & Nilai', query: 'Ceritakan tentang paket modul Pendidikan di WaSigap' },
  { icon: '💅', label: 'Salon & Spa', sub: 'Booking & Loyalty', query: 'Ceritakan tentang paket modul Salon & Spa di WaSigap' },
  { icon: '✈️', label: 'Travel & Tour', sub: 'Paket & Itinerary', query: 'Ceritakan tentang paket modul Travel di WaSigap' },
  { icon: '🚗', label: 'Otomotif', sub: 'Service & Fleet', query: 'Ceritakan tentang paket modul Otomotif di WaSigap' },
  { icon: '📦', label: 'Logistik', sub: 'Resi & Driver', query: 'Ceritakan tentang paket modul Logistik di WaSigap' },
  { icon: '🏋️', label: 'Gym & Fitness', sub: 'Member & Kelas', query: 'Ceritakan tentang paket modul Gym di WaSigap' },
  { icon: '⚖️', label: 'Legal & Notaris', sub: 'Klien & Kasus', query: 'Ceritakan tentang paket modul Legal di WaSigap' },
  { icon: '📣', label: 'Marketing', sub: 'Campaign & A/B Test', query: 'Ceritakan tentang paket modul Marketing di WaSigap' },
  { icon: '🤝', label: 'Customer Success', sub: 'NPS & Retention', query: 'Ceritakan tentang paket modul Customer Success di WaSigap' },
  { icon: '💼', label: 'Sales Automation', sub: 'Lead & Quotation', query: 'Ceritakan tentang paket modul Sales di WaSigap' },
  { icon: '💊', label: 'Apotek', sub: 'Resep & BPJS', query: 'Ceritakan tentang paket modul Apotek di WaSigap' },
]
</script>

<template>
  <div class="min-h-full px-5 py-8 max-w-5xl mx-auto">

    <!-- Header -->
    <div class="mb-8">
      <p class="text-xs font-semibold tracking-widest uppercase mb-2" style="color: rgba(255,255,255,0.25);">Platform</p>
      <h1 class="text-2xl font-bold mb-2" style="color: #f0f0f0; letter-spacing: -0.02em;">Fitur Lengkap WaSigap</h1>
      <p class="text-sm" style="color: rgba(255,255,255,0.40);">Semua kemampuan yang tersedia — klik fitur untuk langsung tanya ke Autobot AI.</p>
    </div>

    <!-- Categories -->
    <div class="space-y-10">
      <section v-for="cat in categories" :key="cat.id">

        <!-- Category header -->
        <div class="flex items-center gap-3 mb-4">
          <div
            class="w-9 h-9 rounded-xl flex items-center justify-center text-[17px] shrink-0"
            :style="`background: ${cat.bgColor}; border: 1px solid ${cat.borderColor};`"
          >{{ cat.icon }}</div>
          <div>
            <h2 class="text-[15px] font-semibold" :style="`color: ${cat.labelColor};`">{{ cat.label }}</h2>
            <p class="text-[12px]" style="color: rgba(255,255,255,0.35);">{{ cat.description }}</p>
          </div>
        </div>

        <!-- Feature cards grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          <button
            v-for="feat in cat.features"
            :key="feat.label"
            class="group text-left p-4 rounded-xl transition-all duration-150"
            style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.07);"
            @click="ask(feat.query)"
            @mouseover="e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
              (e.currentTarget as HTMLElement).style.borderColor = cat.borderColor;
            }"
            @mouseleave="e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
            }"
          >
            <div class="flex items-start gap-3">
              <span class="text-[18px] leading-none shrink-0 mt-0.5">{{ feat.icon }}</span>
              <div class="min-w-0 flex-1">
                <p class="text-[13px] font-semibold mb-1" style="color: #e2e8f0;">{{ feat.label }}</p>
                <p class="text-[11.5px] leading-relaxed" style="color: rgba(255,255,255,0.38);">{{ feat.desc }}</p>
              </div>
            </div>
            <div class="mt-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
              <span class="text-[11px] font-medium" :style="`color: ${cat.labelColor};`">Tanya Autobot</span>
              <svg width="10" height="10" viewBox="0 0 20 20" fill="none" :style="`color: ${cat.labelColor};`">
                <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
      </section>

      <!-- Business Modules section -->
      <section>
        <div class="flex items-center gap-3 mb-4">
          <div class="w-9 h-9 rounded-xl flex items-center justify-center text-[17px] shrink-0"
               style="background: rgba(168,85,247,0.12); border: 1px solid rgba(168,85,247,0.25);">🏢</div>
          <div>
            <h2 class="text-[15px] font-semibold" style="color: #c4b5fd;">Paket Modul Bisnis</h2>
            <p class="text-[12px]" style="color: rgba(255,255,255,0.35);">20+ modul industri siap pakai — aktifkan sesuai jenis bisnis kamu</p>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          <button
            v-for="mod in businessModules"
            :key="mod.label"
            class="group text-left px-3.5 py-3 rounded-xl transition-all duration-150"
            style="background: rgba(168,85,247,0.05); border: 1px solid rgba(168,85,247,0.15);"
            @click="ask(mod.query)"
            @mouseover="e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(168,85,247,0.12)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(168,85,247,0.30)';
            }"
            @mouseleave="e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(168,85,247,0.05)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(168,85,247,0.15)';
            }"
          >
            <div class="flex items-center gap-2.5">
              <span class="text-[18px] leading-none shrink-0">{{ mod.icon }}</span>
              <div class="min-w-0">
                <p class="text-[12.5px] font-semibold truncate" style="color: #e2e8f0;">{{ mod.label }}</p>
                <p class="text-[11px] truncate" style="color: rgba(255,255,255,0.35);">{{ mod.sub }}</p>
              </div>
            </div>
          </button>
        </div>
      </section>
    </div>

    <!-- CTA bottom -->
    <div class="mt-10 p-5 rounded-2xl text-center" style="background: rgba(99,102,241,0.08); border: 1px solid rgba(99,102,241,0.18);">
      <p class="text-sm font-semibold mb-1" style="color: #a5b4fc;">Butuh fitur yang belum ada di daftar ini?</p>
      <p class="text-xs mb-3" style="color: rgba(255,255,255,0.40);">Autobot juga menerima pengembangan custom di luar paket yang tersedia.</p>
      <button
        class="px-5 py-2 rounded-xl text-[13px] font-semibold transition-all"
        style="background: rgba(99,102,241,0.25); border: 1px solid rgba(99,102,241,0.35); color: #c4b5fd;"
        @click="ask('Saya punya kebutuhan khusus yang ingin didiskusikan dengan tim Autobot')"
        @mouseover="e => (e.currentTarget as HTMLElement).style.background = 'rgba(99,102,241,0.35)'"
        @mouseleave="e => (e.currentTarget as HTMLElement).style.background = 'rgba(99,102,241,0.25)'"
      >
        Diskusikan Kebutuhan Kamu →
      </button>
    </div>

  </div>
</template>

