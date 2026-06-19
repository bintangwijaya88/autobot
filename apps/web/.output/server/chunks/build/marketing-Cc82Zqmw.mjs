import { Code2, Layers3, Smartphone, Boxes, Bot, MessageSquareText, Workflow, MailCheck, Database, Link2, PlugZap, BarChart3, CloudCog, Headphones, GitBranch, FileText, WalletCards, LineChart, ShieldCheck, Network, CircuitBoard, Zap, Sparkles, BrainCircuit, Building2 } from 'lucide-vue-next';

const companyProfile = {
  legalName: "CV Autobot Wijaya Solution",
  brandName: "autobotws",
  shortName: "autobotws",
  website: "https://autobot.co.id",
  foundedYear: "2022",
  experienceYears: "9+",
  productionRecords: "600K+",
  founder: "Bintang Wijaya",
  businessField: "Software Development, AI Automation, System Integration",
  legalPlaceholder: "[Nomor Legalitas/NIB]",
  address: "Gg. Bina Warga III Desa No.36, Lubang Buaya, Cipayung, Kota Jakarta Timur, DKI Jakarta 13810, Indonesia",
  email: "support@autobot.co.id",
  whatsapp: "+62 821-6486-7681",
  hours: "Senin\u2013Jumat, 09.00\u201317.00 WIB"
};
const businessProblems = [
  { title: "Proses manual berulang", desc: "Pekerjaan seperti input data, follow-up, dan approval masih dikerjakan manual sehingga lambat dan rawan salah." },
  { title: "Komunikasi pelanggan tidak terstruktur", desc: "Percakapan WhatsApp, chat, dan request pelanggan sulit dilacak tanpa CRM dan workflow yang jelas." },
  { title: "Sistem tidak terintegrasi", desc: "Data tersebar di spreadsheet, marketplace, payment, dan tools internal sehingga operasional tidak selaras." },
  { title: "Sulit scale operasional", desc: "Saat volume bisnis naik, proses manual dan tools terpisah membuat tim kewalahan dan kurang terukur." }
];
const businessSolutions = [
  { title: "Otomasi proses bisnis", desc: "Workflow, reminder, approval, dan tugas berulang diotomasi agar tim fokus pada pekerjaan yang lebih penting." },
  { title: "WhatsApp & AI customer service", desc: "WaSigap membantu merespons pelanggan lebih cepat dengan AI auto-reply, CRM, broadcast, dan follow-up terstruktur." },
  { title: "Sistem digital terintegrasi", desc: "Web, mobile, desktop agent, dan API dihubungkan dengan proses bisnis yang sudah berjalan." },
  { title: "Produk siap pakai + custom development", desc: "Mulai dari produk autobotws atau bangun solusi khusus sesuai kebutuhan operasional Anda." }
];
const cloudCreditUses = [
  "Hosting backend",
  "Infrastruktur database",
  "Queue dan background jobs",
  "AI inference",
  "File dan media storage",
  "Monitoring dan logging",
  "CDN dan security",
  "Testing produk dan staging environment",
  "Scaling infrastruktur SaaS multi-tenant"
];
const advantagePoints = [
  "Product-oriented technology brand",
  "Fokus pada AI dan otomasi proses bisnis",
  "Mampu membangun web, mobile, desktop, dan cloud-based system",
  "Fleksibel untuk custom development",
  "Memiliki produk internal yang terus dikembangkan",
  "Cocok untuk bisnis yang ingin naik kelas secara digital",
  "Mendukung integrasi WhatsApp, marketplace, AI, dan API pihak ketiga"
];
const platformGroups = [
  {
    slug: "core",
    eyebrow: "Core Products",
    title: "Empat produk unggulan autobotws",
    desc: "Solusi inti untuk otomasi WhatsApp berbasis AI, rekonsiliasi bank, layanan kebersihan digital, dan sistem informasi akademik.",
    color: "blue",
    products: [
      {
        slug: "wasigap",
        icon: MessageSquareText,
        name: "WaSigap",
        tier: "core",
        tagline: "AI-powered WhatsApp automation platform.",
        desc: "WaSigap membantu bisnis mengelola percakapan WhatsApp melalui AI auto-reply, CRM, broadcast terjadwal, follow-up pelanggan, dan otomasi alur kerja dalam satu dashboard.",
        url: "https://wa.autobot.co.id",
        domain: "wa.autobot.co.id",
        targetUsers: "Klinik, toko online, bisnis jasa, dan tim customer service dengan volume chat tinggi.",
        features: [
          "AI auto-reply WhatsApp",
          "Broadcast dan scheduler",
          "CRM pelanggan",
          "Chat log",
          "Multi-agent customer service",
          "Flow builder",
          "AI follow-up",
          "Marketplace integration",
          "Customer data collection",
          "Reminder dan automation workflow"
        ]
      },
      {
        slug: "klopdana",
        icon: WalletCards,
        name: "KlopDana",
        tier: "core",
        tagline: "Bank reconciliation system.",
        desc: "KlopDana membantu tim keuangan mempercepat rekonsiliasi bank melalui pencocokan transaksi otomatis, validasi terstruktur, dan jejak audit yang lebih rapi.",
        url: "https://klopdana.com",
        domain: "klopdana.com",
        targetUsers: "Tim keuangan, finance/admin operation, dan bisnis dengan volume transaksi tinggi.",
        features: [
          "Parsing mutasi bank",
          "Pencocokan transaksi otomatis",
          "Validasi transaksi suggested match",
          "Deteksi potensi duplikasi",
          "Audit trail",
          "Dashboard rekonsiliasi",
          "Efisiensi proses keuangan"
        ]
      },
      {
        slug: "sanyclean",
        icon: Sparkles,
        name: "SanyClean",
        tier: "core",
        tagline: "Cleaning service management platform.",
        desc: "SanyClean adalah platform digital untuk membantu pengelolaan layanan kebersihan, pemesanan, data pelanggan, dan alur operasional agar lebih tertata.",
        url: "https://sanyclean.co.id",
        domain: "sanyclean.co.id",
        targetUsers: "Penyedia jasa kebersihan, facility management, dan bisnis layanan berbasis booking.",
        features: [
          "Manajemen layanan cleaning service",
          "Pemesanan layanan",
          "Pengelolaan mitra/klien",
          "Digitalisasi operasional jasa kebersihan"
        ]
      },
      {
        slug: "bintanx",
        icon: BrainCircuit,
        name: "Bintanx",
        tier: "core",
        tagline: "Academic information system.",
        desc: "Bintanx membantu institusi pendidikan mengelola data akademik dan proses administrasi melalui sistem informasi yang terstruktur.",
        url: "https://bintanx.com",
        domain: "bintanx.com",
        targetUsers: "Sekolah, kampus, dan institusi pendidikan yang ingin merapikan administrasi akademik.",
        features: [
          "Pengelolaan data akademik",
          "Manajemen sekolah/kampus",
          "Sistem administrasi pendidikan",
          "Digitalisasi proses akademik"
        ]
      }
    ]
  },
  {
    slug: "vertical",
    eyebrow: "Vertical Solutions",
    title: "Solusi vertikal pendukung",
    desc: "Produk turunan untuk kebutuhan operasional spesifik yang dapat diintegrasikan dengan ekosistem autobotws.",
    color: "emerald",
    products: [
      {
        slug: "antarpro",
        icon: Building2,
        name: "AntarPro",
        tier: "vertical",
        tagline: "Platform layanan bisnis profesional.",
        desc: "AntarPro mendukung digitalisasi alur layanan bisnis profesional, operasional harian, dan perjalanan pelanggan untuk perusahaan jasa.",
        url: "https://antarpro.com",
        domain: "antarpro.com",
        targetUsers: "Perusahaan jasa profesional yang membutuhkan platform operasional terstruktur.",
        features: [
          "Alur layanan profesional",
          "Dukungan operasional bisnis",
          "Perjalanan pelanggan digital",
          "Integrasi ke ekosistem autobotws"
        ]
      },
      {
        slug: "suratmedis",
        icon: FileText,
        name: "SuratMedis",
        tier: "vertical",
        tagline: "Platform dokumen dan administrasi kesehatan.",
        desc: "SuratMedis mendukung alur dokumen medis, surat kesehatan, formulir pasien, dan administrasi klinik yang lebih rapi secara digital.",
        url: "https://suratmedis.co.id",
        domain: "suratmedis.co.id",
        targetUsers: "Klinik, praktik dokter, dan fasilitas kesehatan yang membutuhkan administrasi dokumen terstruktur.",
        features: [
          "Alur surat dan dokumen medis",
          "Template dokumen kesehatan",
          "Dukungan administrasi klinik",
          "Formulir permintaan pasien"
        ]
      }
    ]
  }
];
const platforms = platformGroups.flatMap(
  (group) => group.products.map((product) => ({
    ...product,
    group: group.eyebrow,
    groupSlug: group.slug,
    color: group.color
  }))
);
const corePlatforms = platforms.filter((platform) => platform.tier === "core");
const services = [
  {
    slug: "custom-software",
    icon: Code2,
    title: "Custom Software Development",
    desc: "Kami membangun sistem sesuai proses bisnis Anda agar solusi yang dibuat relevan, mudah dipakai, dan dapat dikembangkan berkelanjutan."
  },
  {
    slug: "web-app",
    icon: Layers3,
    title: "Web Application Development",
    desc: "Aplikasi web modern yang stabil untuk portal, dashboard, SaaS, dan operasional internal yang perlu diakses dari mana saja."
  },
  {
    slug: "mobile-app",
    icon: Smartphone,
    title: "Mobile Application Development",
    desc: "Aplikasi mobile untuk mendukung layanan lapangan, pelanggan, maupun tim internal dengan pengalaman yang konsisten."
  },
  {
    slug: "desktop-agent",
    icon: Boxes,
    title: "Desktop Application & Agent Development",
    desc: "Aplikasi desktop dan local agent untuk integrasi perangkat, workflow lokal, dan operasional yang membutuhkan akses langsung ke sistem."
  },
  {
    slug: "ai-chatbot",
    icon: Bot,
    title: "AI Chatbot & AI Agent",
    desc: "Chatbot dan AI agent yang membantu tim merespons lebih cepat, mengumpulkan kebutuhan pelanggan, dan menjalankan tugas berulang."
  },
  {
    slug: "whatsapp-automation",
    icon: MessageSquareText,
    title: "WhatsApp Automation",
    desc: "Otomasi percakapan WhatsApp untuk customer service, follow-up, broadcast, dan integrasi dengan proses bisnis lainnya."
  },
  {
    slug: "bpa",
    icon: Workflow,
    title: "Business Process Automation",
    desc: "Mengurangi pekerjaan manual dengan mengotomasi approval, reminder, routing tugas, dan alur operasional yang sering terjadi."
  },
  {
    slug: "crm-cs",
    icon: MailCheck,
    title: "CRM & Customer Service System",
    desc: "Sistem CRM dan customer service untuk melacak percakapan, data pelanggan, status layanan, dan handoff antar tim."
  },
  {
    slug: "data-processing",
    icon: Database,
    title: "Data Processing & Reporting",
    desc: "Membantu tim mengolah data operasional dan menghasilkan laporan yang lebih rapi untuk keputusan bisnis harian."
  },
  {
    slug: "system-integration",
    icon: Link2,
    title: "System Integration",
    desc: "Menghubungkan WhatsApp, CRM, pembayaran, marketplace, dan sistem internal agar data tidak terputus antar platform."
  },
  {
    slug: "marketplace-integration",
    icon: PlugZap,
    title: "Marketplace Integration",
    desc: "Integrasi dengan marketplace dan channel penjualan agar order, stok, dan data pelanggan lebih mudah disinkronkan."
  },
  {
    slug: "dashboard-tools",
    icon: BarChart3,
    title: "Dashboard & Internal Tools",
    desc: "Dashboard dan tools internal untuk memantau performa, status pekerjaan, dan aktivitas operasional secara real-time."
  },
  {
    slug: "cloud-deployment",
    icon: CloudCog,
    title: "Cloud Deployment",
    desc: "Deployment ke cloud server, VPS, atau infrastruktur terkelola agar sistem stabil, aman, dan siap scale."
  },
  {
    slug: "maintenance-support",
    icon: Headphones,
    title: "Maintenance & Technical Support",
    desc: "Dukungan teknis berkelanjutan untuk perbaikan, penyesuaian fitur, dan pengembangan sistem sesuai kebutuhan operasional."
  }
];
const companyAdvantages = [
  {
    title: "Product-oriented technology brand",
    desc: "autobotws membangun produk nyata seperti WaSigap, KlopDana, SanyClean, dan Bintanx \u2014 bukan sekadar jasa pembuatan aplikasi."
  },
  {
    title: "Software engineering + AI + automation",
    desc: "autobotws menggabungkan software engineering, integrasi AI, workflow automation, dan pemahaman proses bisnis."
  },
  {
    title: "Web, mobile, desktop, dan cloud",
    desc: "Mampu membangun sistem lintas platform sesuai kebutuhan operasional dan rencana scale jangka panjang."
  },
  {
    title: "Pengalaman produksi nyata",
    desc: "Lebih dari 9 tahun membangun sistem bisnis dengan ratusan ribu record operasional di production."
  }
];
const missionItems = [
  "Mengembangkan software yang sesuai dengan kebutuhan operasional bisnis.",
  "Membantu perusahaan mengurangi proses manual melalui otomasi digital.",
  "Menyediakan solusi AI yang mudah digunakan dan bermanfaat secara nyata.",
  "Mendukung UMKM, institusi, dan organisasi agar lebih siap menghadapi transformasi digital.",
  "Membangun produk teknologi yang fleksibel, terjangkau, dan dapat dikembangkan secara berkelanjutan."
];
const workflowSteps = [
  {
    step: "01",
    title: "Konsultasi kebutuhan",
    desc: "Memahami masalah operasional, proses manual, dan tujuan bisnis yang ingin dicapai."
  },
  {
    step: "02",
    title: "Analisis & rekomendasi solusi",
    desc: "Memetakan alur kerja, menentukan produk atau custom development yang paling relevan."
  },
  {
    step: "03",
    title: "Proposal & perencanaan",
    desc: "Menyusun ruang lingkup, prioritas fitur, jadwal, dan pendekatan implementasi yang realistis."
  },
  {
    step: "04",
    title: "Pengembangan & integrasi",
    desc: "Membangun sistem, menghubungkan data, dan menyiapkan dashboard atau workflow yang dibutuhkan."
  },
  {
    step: "05",
    title: "Deployment & pelatihan",
    desc: "Meluncurkan sistem, menyiapkan SOP operasional, dan memastikan tim klien siap menggunakan solusi."
  },
  {
    step: "06",
    title: "Support & pengembangan lanjutan",
    desc: "Memberikan maintenance, penyesuaian, dan pengembangan berkelanjutan sesuai kebutuhan operasional."
  }
];
const teamMembers = [
  { name: "Bintang Wijaya", role: "Founder & Lead Developer", img: "/bintang-aws.png" },
  { name: "Sharaztasya Aulia Nurdi", role: "Direktur", img: "/sharaztasya-aws.png" },
  { name: "Irvan Eko Prasetyo", role: "DevOps Master", img: "/len-aws.png" },
  { name: "Tim AI", role: "LLM Integration Specialist", img: "/claude-aws.png" }
];
const useCases = [
  { slug: "ai-sales-assistant", icon: Bot, title: "AI sales assistant", desc: "Qualify inbound WhatsApp leads, recommend products, collect requirements, and sync to CRM." },
  { slug: "approval-workflow", icon: GitBranch, title: "Approval workflow", desc: "Route requests, documents, or operational tickets to the right owner with status visibility." },
  { slug: "document-automation", icon: FileText, title: "Document automation", desc: "Create proposal, invoice, contract, and report templates from structured business data." },
  { slug: "payment-follow-up", icon: WalletCards, title: "Payment follow-up", desc: "Send payment links, reminders, receipts, and renewal prompts automatically." },
  { slug: "executive-dashboard", icon: LineChart, title: "Executive dashboard", desc: "Summarize sales, campaign, support, and operational metrics in one clean command center." },
  { slug: "system-integration", icon: Link2, title: "System integration", desc: "Connect marketplace, CRM, WhatsApp, Google Workspace, internal tools, and custom backends." }
];
const industries = [
  "UMKM & bisnis lokal",
  "Klinik & layanan kesehatan",
  "Toko online & e-commerce",
  "Bisnis jasa & layanan kebersihan",
  "Institusi pendidikan",
  "Tim keuangan & administrasi",
  "Tim customer service",
  "Organisasi yang butuh otomasi digital"
];
const technologyStack = [
  { icon: ShieldCheck, label: "Secure & scalable architecture", desc: "Arsitektur yang mempertimbangkan isolasi data, keamanan, dan kemampuan scale sesuai kebutuhan produk." },
  { icon: CloudCog, label: "Cloud & infrastructure", desc: "Deployment ke VPS, cloud server, Docker, queue, monitoring, dan lingkungan staging/production." },
  { icon: Network, label: "API-first integration", desc: "Integrasi WhatsApp, marketplace, payment gateway, Google Workspace, email, dan API pihak ketiga." },
  { icon: CircuitBoard, label: "AI & automation layer", desc: "AI chatbot, AI agent, OCR, workflow automation, dan AI follow-up terintegrasi ke produk bisnis." },
  { icon: Zap, label: "Multi-platform development", desc: "Pengembangan web, mobile, desktop agent, dan backend yang dipilih berdasarkan kebutuhan produk." },
  { icon: Sparkles, label: "Long-term maintainability", desc: "Stack dipilih berdasarkan kebutuhan produk, skala sistem, keamanan data, integrasi, dan rencana pengembangan jangka panjang." }
];
const technologyCategories = [
  { slug: "backend", title: "Backend", desc: "Laravel, Golang, Java, Node.js, REST API, dan arsitektur microservices untuk sistem yang stabil dan mudah diintegrasikan." },
  { slug: "frontend", title: "Frontend", desc: "Vue.js, React.js, Inertia.js, Tailwind CSS, dan modern web UI untuk dashboard dan aplikasi operasional." },
  { slug: "mobile", title: "Mobile", desc: "Flutter, Android native, dan cross-platform mobile app untuk layanan pelanggan dan operasional lapangan." },
  { slug: "desktop", title: "Desktop", desc: "Rust, Tauri, desktop agent, dan local device integration untuk workflow yang membutuhkan akses perangkat lokal." },
  { slug: "database", title: "Database & Storage", desc: "MySQL, PostgreSQL, Redis, cloud storage, local storage, dan data synchronization." },
  { slug: "ai", title: "AI & Automation", desc: "AI chatbot, AI agent, WhatsApp automation, OCR processing, AI follow-up, dan workflow automation." },
  { slug: "infra", title: "Infrastructure", desc: "VPS, cloud server, Docker, queue system, background jobs, monitoring, logging, CDN, dan security layer." },
  { slug: "integration", title: "Integration", desc: "WhatsApp gateway, marketplace API, Google Calendar/Drive/Sheets, email SMTP, payment gateway, dan third-party API." }
];
const blogFallbackPosts = [
  {
    id: "1",
    slug: "automation-ecosystem-bukan-sekadar-chatbot",
    title: "Automation Ecosystem: Kenapa Bisnis Tidak Cukup Hanya Punya Chatbot",
    excerpt: "Chatbot membantu respons cepat, tetapi bisnis butuh sistem yang menghubungkan lead, CRM, dokumen, pembayaran, dan dashboard.",
    content: `## Chatbot hanya pintu masuk

Chatbot adalah channel engagement. Nilainya naik ketika percakapan pelanggan langsung terhubung ke CRM, workflow internal, dokumen, pembayaran, dan dashboard keputusan.

## Yang seharusnya dibangun

Bisnis modern membutuhkan automation ecosystem: sistem yang menangkap data, menjalankan proses, memberi konteks ke tim, dan mengukur hasil.

## Contoh implementasi

- Lead dari WhatsApp masuk ke WaSigap.
- Data customer disimpan di CRM internal.
- Proposal dibuat melalui workflow dokumen.
- Follow-up pembayaran dikirim otomatis.
- Manajemen melihat performa lewat dashboard operasional.

Dengan pendekatan ini, AI bukan gimmick. AI menjadi bagian dari operating system bisnis.`,
    cover_image: "",
    author: "autobotws Team",
    category: "Automation",
    tags: ["automation", "chatbot", "crm"],
    is_published: true,
    published_at: "2026-06-01T08:00:00Z",
    read_time_minutes: 4
  },
  {
    id: "2",
    slug: "mendesain-ai-agent-untuk-operasional-bisnis",
    title: "Mendesain AI Agent Untuk Operasional Bisnis, Bukan Sekadar Menjawab Pertanyaan",
    excerpt: "AI agent yang baik harus punya konteks, batasan, tools, escalation path, dan ukuran keberhasilan yang jelas.",
    content: `## AI agent perlu batas kerja

AI agent bisnis tidak boleh hanya "pintar bicara". Agent harus memahami role, data yang boleh dipakai, aksi yang boleh dilakukan, dan kapan harus eskalasi ke manusia.

## Komponen penting

- Knowledge base yang terkurasi.
- Tool untuk membaca atau menulis data.
- Workflow approval untuk aksi sensitif.
- Audit log agar keputusan bisa ditelusuri.
- Dashboard untuk mengukur performa.

## Tujuan akhirnya

AI agent yang matang membantu tim bekerja lebih cepat tanpa menghilangkan kontrol bisnis.`,
    cover_image: "",
    author: "autobotws Team",
    category: "AI Agent",
    tags: ["ai-agent", "operations", "workflow"],
    is_published: true,
    published_at: "2026-05-24T08:00:00Z",
    read_time_minutes: 5
  },
  {
    id: "3",
    slug: "workflow-automation-untuk-perusahaan-bertumbuh",
    title: "Workflow Automation Untuk Perusahaan Yang Mulai Bertumbuh",
    excerpt: "Saat order, request, approval, dan follow-up mulai sulit dilacak manual, workflow automation menjadi fondasi operasional.",
    content: `## Tanda proses mulai perlu diautomasi

Workflow automation dibutuhkan ketika status pekerjaan tersebar di chat pribadi, approval terlambat, data double input, dan laporan dibuat manual setiap minggu.

## Prioritas awal

Mulai dari proses yang sering terjadi, punya dampak langsung ke revenue atau pelayanan, dan melibatkan banyak handoff antar tim.

## Output yang dicari

Automation yang baik membuat proses lebih terlihat: siapa owner-nya, statusnya apa, apa bottleneck-nya, dan apa langkah berikutnya.`,
    cover_image: "",
    author: "autobotws Team",
    category: "Workflow",
    tags: ["workflow", "operations", "business"],
    is_published: true,
    published_at: "2026-05-12T08:00:00Z",
    read_time_minutes: 3
  }
];
const wasigapProblems = [
  { title: "Respons WhatsApp lambat dan tidak konsisten", desc: "Tim CS kewalahan saat volume chat naik, sehingga pelanggan menunggu lama dan conversion turun." },
  { title: "Data pelanggan tersebar di chat pribadi", desc: "Riwayat percakapan, status follow-up, dan data pelanggan sulit dilacak tanpa CRM terstruktur." },
  { title: "Broadcast dan follow-up masih manual", desc: "Promo, reminder, dan follow-up penjualan dikerjakan satu per satu sehingga tidak scalable." },
  { title: "Sulit scale multi-agent customer service", desc: "Handoff antar agent, jam operasional, dan prioritas chat tidak terkelola dengan baik." }
];
const wasigapUseCases = [
  { title: "Klinik & layanan kesehatan", desc: "Jadwal konsultasi, reminder pasien, FAQ layanan, dan follow-up otomatis via WhatsApp." },
  { title: "Toko online & e-commerce", desc: "Balas pertanyaan produk, cek stok, broadcast promo, dan follow-up order tertunda." },
  { title: "Bisnis jasa & layanan", desc: "Kualifikasi lead, booking layanan, reminder pembayaran, dan CRM pelanggan terpusat." },
  { title: "Tim customer service", desc: "Multi-agent inbox, AI auto-reply, operator takeover, dan chat log untuk audit layanan." }
];
const wasigapBusinessModel = [
  "Paket lifetime",
  "Paket subscription",
  "Add-on kredit AI",
  "Setup custom untuk bisnis dan enterprise",
  "Add-on khusus industri seperti klinik, e-commerce, dan bisnis jasa"
];
const wasigapTraction = [
  { label: "Status produk", value: "[Status Produk]" },
  { label: "Pengguna aktif", value: "[Jumlah User]" },
  { label: "Klien / mitra", value: "[Jumlah Client]" },
  { label: "Wilayah operasional", value: "Indonesia" }
];
function getPlatformBySlug(slug) {
  return platforms.find((platform) => platform.slug === slug);
}
function getBlogFallbackBySlug(slug) {
  return blogFallbackPosts.find((post) => post.slug === slug);
}

export { businessSolutions as a, businessProblems as b, corePlatforms as c, companyAdvantages as d, advantagePoints as e, cloudCreditUses as f, companyProfile as g, blogFallbackPosts as h, industries as i, technologyStack as j, technologyCategories as k, getBlogFallbackBySlug as l, missionItems as m, platformGroups as n, getPlatformBySlug as o, platforms as p, wasigapProblems as q, wasigapUseCases as r, services as s, teamMembers as t, useCases as u, wasigapBusinessModel as v, workflowSteps as w, wasigapTraction as x };
//# sourceMappingURL=marketing-Cc82Zqmw.mjs.map
