'use client';

import { useState } from 'react';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/sections/Container';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BackgroundPattern } from '@/components/ui/background-pattern';
import Link from 'next/link';
import {
  ExternalLink, Star, CheckCircle2, ArrowRight, Sparkles,
  Activity, GraduationCap, Bot, Building2 as BuildingIcon,
  TrendingUp, Users, Globe, Award, Building2, Quote,
  ChevronDown, ShieldCheck, QrCode, Stethoscope,
} from 'lucide-react';

const categoryConfig: Record<string, { icon: React.ElementType; gradient: string; badge: string }> = {
  Healthcare: { icon: Stethoscope, gradient: 'from-rose-500 to-pink-600', badge: 'bg-rose-100 text-rose-700' },
  Education: { icon: GraduationCap, gradient: 'from-blue-500 to-indigo-600', badge: 'bg-blue-100 text-blue-700' },
  'AI & LLM': { icon: Bot, gradient: 'from-violet-500 to-purple-600', badge: 'bg-violet-100 text-violet-700' },
  Corporate: { icon: BuildingIcon, gradient: 'from-slate-500 to-gray-700', badge: 'bg-slate-100 text-slate-700' },
  MedTech: { icon: QrCode, gradient: 'from-[#116366] to-[#14b8a6]', badge: 'bg-teal-100 text-teal-700' },
  Government: { icon: ShieldCheck, gradient: 'from-green-600 to-emerald-700', badge: 'bg-green-100 text-green-700' },
};

const projects = [
  {
    title: 'SuratMedis.co.id',
    category: 'MedTech',
    description: 'Platform surat medis digital anti-pemalsuan dengan verifikasi berbasis blockchain. 600K+ sertifikat telah diterbitkan secara nasional.',
    tags: ['Laravel', 'QR Verification', 'Blockchain', 'API'],
    features: ['Verifikasi QR Code Anti-Pemalsuan', 'Integrasi Blockchain', 'Dashboard Enterprise', 'API untuk Klinik & Lab', 'Audit Trail Real-time'],
    client: 'PT Kimia Farma Diagnostika',
    clientNote: 'MoU Aktif',
    year: '2023',
    liveDemo: 'https://suratmedis.co.id',
    caseStudy: '/portfolio/suratmedis',
    featured: true,
    result: '600K+ sertifikat diterbitkan',
  },
  {
    title: 'SIAKAD / BINTANX',
    category: 'Education',
    description: 'SaaS manajemen akademik lengkap mencakup mahasiswa, penilaian, dan keuangan. Diterapkan di 10+ institusi pendidikan.',
    tags: ['Laravel', 'Vue.js', 'Flutter', 'SaaS'],
    features: ['Manajemen Mahasiswa & Nilai', 'Sistem Keuangan Akademik', 'Mobile App Flutter', 'Multi-institusi (SaaS)', 'Laporan & Akreditasi'],
    client: '10+ Institusi Pendidikan',
    clientNote: '🏆 Lumina Festival 2025',
    year: '2024',
    liveDemo: '#',
    caseStudy: '/portfolio/bintanx',
    featured: true,
    result: 'Penghargaan Danantara/Biofarma 2025',
  },
  {
    title: 'Portal Registrasi COVID-19',
    category: 'Government',
    description: 'Sistem web berskala tinggi untuk registrasi COVID-19 nasional, menangani 100K+ entri mingguan dengan pembuatan surat kesehatan otomatis.',
    tags: ['Laravel', 'MySQL', 'High-scale', 'Otomasi'],
    features: ['100K+ Entri per Minggu', 'Surat Kesehatan Otomatis', 'Skalabilitas Tinggi', 'Integrasi Lab Kimia Farma', 'Dashboard Nasional'],
    client: 'Kimia Farma (Nasional)',
    clientNote: 'Skala Nasional',
    year: '2021',
    liveDemo: '#',
    caseStudy: '/portfolio/covid-portal',
    featured: false,
    result: '100K+ entri/minggu',
  },
  {
    title: 'Chatbot Kesehatan AI',
    category: 'AI & LLM',
    description: 'Chatbot konsultasi kesehatan berbasis AI via WhatsApp, menyediakan layanan kesehatan dasar interaktif 24/7.',
    tags: ['Python', 'NLP', 'WhatsApp API', 'AI'],
    features: ['Konsultasi Kesehatan AI', 'WhatsApp Integration', 'Natural Language Processing', 'Multi-bahasa (ID/EN)', 'Triase Gejala Otomatis'],
    client: 'Aidiva',
    clientNote: 'Kolaborasi Strategis',
    year: '2023',
    liveDemo: '#',
    caseStudy: '/portfolio/chatbot-kesehatan',
    featured: false,
    result: 'Layanan 24/7 via WhatsApp',
  },
  {
    title: 'Sistem Integrasi BPJS',
    category: 'Healthcare',
    description: 'Integrasi real-time dengan sistem kesehatan nasional BPJS untuk validasi otomatis dan pemrosesan administratif fasilitas kesehatan.',
    tags: ['PHP', 'REST API', 'BPJS', 'Real-time'],
    features: ['Validasi BPJS Real-time', 'Pemrosesan Klaim Otomatis', 'Integrasi Faskes', 'Audit & Logging', 'Error Handling Robust'],
    client: 'Fasilitas Kesehatan Mitra',
    clientNote: 'Terstandarisasi BPJS',
    year: '2022',
    liveDemo: '#',
    caseStudy: '/portfolio/integrasi-bpjs',
    featured: false,
    result: 'Validasi otomatis real-time',
  },
  {
    title: 'Portal Properti Telkom',
    category: 'Corporate',
    description: 'Platform manajemen properti enterprise untuk Telkom Indonesia, mencakup inventaris aset, sewa, dan pelaporan internal.',
    tags: ['Laravel', 'PostgreSQL', 'Enterprise', 'Internal'],
    features: ['Inventaris Aset Properti', 'Manajemen Kontrak Sewa', 'Dashboard Eksekutif', 'Laporan Keuangan Aset', 'Role-based Access Control'],
    client: 'Telkom Indonesia',
    clientNote: 'Enterprise Internal',
    year: '2022',
    liveDemo: '#',
    caseStudy: '/portfolio/portal-telkom',
    featured: false,
    result: 'Aset enterprise terpusat',
  },
];

const stats = [
  { number: '600K+', label: 'Sertifikat Medis Diterbitkan', icon: ShieldCheck },
  { number: '100K+', label: 'Entri COVID/Minggu', icon: Activity },
  { number: '10+', label: 'Institusi Akademik', icon: GraduationCap },
  { number: '2025', label: 'Lumina Festival Winner', icon: Award },
];

const testimonials = [
  {
    quote: 'SuratMedis.co.id memberikan solusi anti-pemalsuan yang benar-benar kami butuhkan. Lebih dari 600 ribu sertifikat telah diterbitkan tanpa satu pun insiden pemalsuan.',
    author: 'Tim Kimia Farma Diagnostika',
    position: 'PT Kimia Farma Diagnostika — MoU Aktif',
    category: 'MedTech',
    rating: 5,
    initials: 'KF',
  },
  {
    quote: 'BINTANX merevolusi cara kami mengelola akademik. Dari nilai mahasiswa hingga keuangan, semuanya terintegrasi dalam satu platform yang intuitif.',
    author: 'Tim Akademik',
    position: 'Institusi Pendidikan — Pengguna BINTANX',
    category: 'Education',
    rating: 5,
    initials: 'AK',
  },
  {
    quote: 'Kolaborasi dengan Autobot untuk chatbot AI kami berjalan luar biasa. Tim mereka memahami kebutuhan domain kesehatan dengan sangat baik.',
    author: 'Tim Aidiva',
    position: 'Aidiva — Kolaborasi AI Kesehatan',
    category: 'AI & LLM',
    rating: 5,
    initials: 'AI',
  },
];

const INITIAL_SHOW = 6;

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const categories = ['All', 'MedTech', 'Healthcare', 'Education', 'AI & LLM', 'Government', 'Corporate'];

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_SHOW);
  const hasMore = filtered.length > INITIAL_SHOW && !showAll;

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[560px] flex items-center overflow-hidden bg-gradient-to-br from-gray-950 via-[#0a2e30] to-gray-900">
        <BackgroundPattern variant="grid" opacity={0.05} className="text-white" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#14b8a6]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#116366]/15 rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm">
              <Award className="w-4 h-4 text-[#14b8a6]" />
              <span className="text-[#14b8a6] font-semibold text-sm">Portfolio & Case Studies</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Karya Nyata,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] to-[#5eead4]">
                Hasil Terbukti
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Lebih dari 150 proyek berhasil di berbagai industri — dari rumah sakit, sekolah, retail, hingga AI dan IoT.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects">
                <Button size="lg" className="bg-gradient-to-r from-[#116366] to-[#14b8a6] hover:from-[#0d4d50] hover:to-[#116366] text-white shadow-lg shadow-[#116366]/30">
                  Lihat Semua Proyek
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                  Konsultasi Gratis
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Stats ── */}
      <section className="bg-white border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex flex-col items-center justify-center py-10 px-6 text-center group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Projects ── */}
      <Section id="projects" className="bg-gray-50">
        <BackgroundPattern variant="dots" opacity={0.04} />
        <Container className="relative z-10">
          <SectionHeader
            subtitle="Featured Projects"
            title="Kisah Sukses Kami"
            description="Jelajahi portofolio proyek lintas industri yang telah kami selesaikan dengan hasil terukur."
            centered
          />

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              const cfg = categoryConfig[cat];
              return (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setShowAll(false); }}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                    isActive
                      ? 'bg-gradient-to-r from-[#116366] to-[#14b8a6] text-white border-transparent shadow-md shadow-[#116366]/20'
                      : 'bg-white border-gray-200 text-gray-600 hover:border-[#116366] hover:text-[#116366]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Result count */}
          <p className="text-center text-sm text-gray-400 mb-10">
            Menampilkan <span className="font-semibold text-gray-600">{visible.length}</span> dari{' '}
            <span className="font-semibold text-gray-600">{filtered.length}</span> proyek
            {activeCategory !== 'All' && <> dalam <span className="font-semibold text-[#116366]">{activeCategory}</span></>}
          </p>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visible.map((project, index) => {
              const cfg = categoryConfig[project.category];
              const Icon = cfg.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col"
                >
                  {/* Thumbnail */}
                  <div className={`relative h-52 bg-gradient-to-br ${cfg.gradient} overflow-hidden flex-shrink-0`}>
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute rounded-full bg-white"
                          style={{
                            width: `${20 + (i % 4) * 15}px`,
                            height: `${20 + (i % 4) * 15}px`,
                            top: `${(i * 23) % 80}%`,
                            left: `${(i * 31) % 90}%`,
                          }}
                        />
                      ))}
                    </div>

                    {/* Main icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 text-gray-800 text-xs font-bold px-2.5 py-1 rounded-full shadow">
                        <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                        Featured
                      </div>
                    )}

                    {/* Year */}
                    <div className="absolute top-3 right-3 bg-black/30 text-white text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                      {project.year}
                    </div>

                    {/* Result overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-[#5eead4] flex-shrink-0" />
                        <span className="text-white text-sm font-semibold">{project.result}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    {/* Category badge */}
                    <span className={`inline-flex self-start items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold mb-3 ${cfg.badge}`}>
                      <Icon className="w-3 h-3" />
                      {project.category}
                    </span>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#116366] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">{project.description}</p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-1.5 mb-4">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#14b8a6] flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                      {project.features.length > 3 && (
                        <div className="text-xs text-gray-400 pl-5">+{project.features.length - 3} fitur lainnya</div>
                      )}
                    </div>

                    {/* Client */}
                    <div className="flex items-center gap-2 mb-5 mt-auto">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-sm font-semibold text-gray-700 block truncate">{project.client}</span>
                        {'clientNote' in project && project.clientNote && (
                          <span className="text-xs text-[#116366] font-medium">{project.clientNote}</span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Link href={project.caseStudy} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full border-[#116366] text-[#116366] hover:bg-[#116366] hover:text-white transition-colors">
                          Case Study
                        </Button>
                      </Link>
                      <a href={project.liveDemo}>
                        <Button size="sm" className="bg-gradient-to-r from-[#116366] to-[#14b8a6] hover:from-[#0d4d50] hover:to-[#116366] text-white px-3">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load more */}
          {hasMore && (
            <div className="text-center mt-12">
              <Button
                size="lg"
                variant="outline"
                onClick={() => setShowAll(true)}
                className="border-[#116366] text-[#116366] hover:bg-[#116366] hover:text-white gap-2"
              >
                <ChevronDown className="w-4 h-4" />
                Tampilkan Lebih Banyak ({filtered.length - INITIAL_SHOW} proyek lagi)
              </Button>
            </div>
          )}
        </Container>
      </Section>

      {/* ── Testimonials ── */}
      <Section className="bg-white">
        <Container className="relative z-10">
          <SectionHeader
            subtitle="Kata Klien"
            title="Kepercayaan Mereka, Kebanggaan Kami"
            centered
          />
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => {
              const cfg = categoryConfig[t.category];
              return (
                <div key={i} className={`relative bg-white border-2 border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1`}>
                  {/* Quote icon */}
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cfg.gradient} flex items-center justify-center mb-4 shadow-sm`}>
                    <Quote className="w-5 h-5 text-white" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${cfg.gradient} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow`}>
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{t.author}</div>
                      <div className="text-gray-400 text-xs">{t.position}</div>
                    </div>
                    <span className={`ml-auto text-xs font-semibold px-2 py-0.5 rounded-full ${cfg.badge}`}>
                      {t.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ── CTA ── */}
      <Section className="relative bg-gradient-to-br from-[#0a2e30] via-[#116366] to-[#14b8a6] text-white overflow-hidden">
        <BackgroundPattern variant="circuit" opacity={0.08} className="text-white" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-3xl" />
        </div>
        <Container className="relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#5eead4]" />
              <span className="text-[#5eead4] font-semibold text-sm">Jadilah Bagian dari Kisah Sukses Kami</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Siap Memulai Proyek Anda?
            </h2>
            <p className="text-lg mb-8 text-white/80">
              Konsultasikan kebutuhan Anda dengan tim ahli kami — gratis dan tanpa komitmen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#116366] hover:bg-gray-100 font-semibold shadow-lg">
                  Konsultasi Sekarang
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Lihat Layanan
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
