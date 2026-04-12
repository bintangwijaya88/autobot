'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/sections/Container';
import { BackgroundPattern } from '@/components/ui/background-pattern';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, QrCode,
  ShieldCheck, FileText, Zap, Users, BarChart3, Globe, Lock,
  ChevronRight, Star, Building2, Calendar, Tag, Award,
  Stethoscope, Database, Server, Code2, Layers, TrendingUp,
  AlertTriangle, Lightbulb, Target, RefreshCw,
} from 'lucide-react';

// ── Mock "browser" preview component ──────────────────────────────────────
function BrowserMockup({ children, url = 'suratmedis.co.id' }: { children: React.ReactNode; url?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
      {/* Browser chrome */}
      <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-500 border border-gray-200 flex items-center gap-2">
          <Lock className="w-3 h-3 text-green-500 flex-shrink-0" />
          {url}
        </div>
        <RefreshCw className="w-4 h-4 text-gray-400" />
      </div>
      {children}
    </div>
  );
}

// ── Dashboard mockup ───────────────────────────────────────────────────────
function DashboardMockup() {
  const certRows = [
    { id: 'SM-2024-089231', name: 'Ahmad Rasyid', type: 'Surat Sehat', date: '26 Mar 2024', status: 'valid' },
    { id: 'SM-2024-089230', name: 'Siti Rahayu', type: 'Surat Sakit', date: '26 Mar 2024', status: 'valid' },
    { id: 'SM-2024-089229', name: 'Budi Santoso', type: 'Medical Check-up', date: '25 Mar 2024', status: 'valid' },
    { id: 'SM-2024-089228', name: 'Dewi Lestari', type: 'Surat Sehat', date: '25 Mar 2024', status: 'expired' },
  ];
  return (
    <BrowserMockup>
      <div className="bg-gray-50 p-4 space-y-4">
        {/* Top stats */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { label: 'Total Sertifikat', value: '642,391', color: 'text-[#116366]', icon: FileText },
            { label: 'Bulan Ini', value: '12,840', color: 'text-blue-600', icon: TrendingUp },
            { label: 'Terverifikasi Hari Ini', value: '1,203', color: 'text-green-600', icon: ShieldCheck },
            { label: 'Klien Aktif', value: '148', color: 'text-purple-600', icon: Building2 },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs text-gray-500">{s.label}</p>
                  <Icon className={`w-3.5 h-3.5 ${s.color}`} />
                </div>
                <p className={`text-lg font-bold ${s.color}`}>{s.value}</p>
              </div>
            );
          })}
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
            <span className="text-sm font-semibold text-gray-800">Sertifikat Terbaru</span>
            <span className="text-xs text-[#116366] font-medium cursor-pointer">Lihat Semua →</span>
          </div>
          <table className="w-full text-xs">
            <thead className="bg-gray-50">
              <tr>
                {['ID Sertifikat', 'Nama Pasien', 'Jenis', 'Tanggal', 'Status'].map((h) => (
                  <th key={h} className="text-left px-4 py-2 text-gray-500 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {certRows.map((row) => (
                <tr key={row.id} className="border-t border-gray-50 hover:bg-gray-50">
                  <td className="px-4 py-2.5 font-mono text-[#116366]">{row.id}</td>
                  <td className="px-4 py-2.5 font-medium text-gray-800">{row.name}</td>
                  <td className="px-4 py-2.5 text-gray-600">{row.type}</td>
                  <td className="px-4 py-2.5 text-gray-500">{row.date}</td>
                  <td className="px-4 py-2.5">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                      row.status === 'valid'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {row.status === 'valid' ? '✓ Valid' : 'Kedaluwarsa'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </BrowserMockup>
  );
}

// ── QR Verification mockup ─────────────────────────────────────────────────
function VerificationMockup() {
  const [verified, setVerified] = useState(false);
  return (
    <BrowserMockup url="suratmedis.co.id/verify">
      <div className="bg-gradient-to-b from-[#116366]/5 to-white p-6">
        <div className="max-w-sm mx-auto text-center">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center mx-auto mb-4 shadow-lg">
            <QrCode className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-base font-bold text-gray-900 mb-1">Verifikasi Sertifikat</h3>
          <p className="text-xs text-gray-500 mb-5">Masukkan kode sertifikat atau scan QR code</p>

          <div className="flex gap-2 mb-4">
            <input
              readOnly
              value="SM-2024-089231"
              className="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-2.5 font-mono text-center text-gray-700 bg-white"
            />
            <button
              onClick={() => setVerified(true)}
              className="px-4 py-2.5 bg-gradient-to-r from-[#116366] to-[#14b8a6] text-white text-xs font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Verifikasi
            </button>
          </div>

          {verified ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-left">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-green-800">Sertifikat Valid & Terverifikasi</p>
                  <p className="text-xs text-green-600">Dilindungi blockchain — tidak dapat dipalsukan</p>
                </div>
              </div>
              <div className="space-y-1.5 text-xs">
                {[
                  ['Nama Pasien', 'Ahmad Rasyid'],
                  ['Jenis Surat', 'Surat Keterangan Sehat'],
                  ['Diterbitkan Oleh', 'Lab Kimia Farma – Jakarta Selatan'],
                  ['Tanggal Terbit', '26 Maret 2024'],
                  ['Berlaku Hingga', '26 April 2024'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between">
                    <span className="text-gray-500">{k}</span>
                    <span className="font-semibold text-gray-800">{v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-green-200 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#116366]" />
                <span className="text-xs text-[#116366] font-medium">Hash Blockchain: 0x4f3a…9b2e</span>
              </div>
            </div>
          ) : (
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center">
              <QrCode className="w-12 h-12 text-gray-300 mx-auto mb-2" />
              <p className="text-xs text-gray-400">Klik "Verifikasi" untuk melihat demo</p>
            </div>
          )}
        </div>
      </div>
    </BrowserMockup>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function SuratMedisPage() {
  const techStack = [
    { name: 'Laravel', category: 'Backend', icon: Server, color: 'text-red-600 bg-red-50' },
    { name: 'Vue.js', category: 'Frontend', icon: Code2, color: 'text-green-600 bg-green-50' },
    { name: 'QR Verification', category: 'Security', icon: QrCode, color: 'text-[#116366] bg-teal-50' },
    { name: 'Blockchain', category: 'Anti-Pemalsuan', icon: ShieldCheck, color: 'text-purple-600 bg-purple-50' },
    { name: 'PostgreSQL', category: 'Database', icon: Database, color: 'text-blue-600 bg-blue-50' },
    { name: 'REST API', category: 'Integration', icon: Layers, color: 'text-orange-600 bg-orange-50' },
  ];

  const features = [
    {
      icon: FileText,
      title: 'Penerbitan Sertifikat Digital',
      desc: 'Dokter dan laboran dapat menerbitkan surat keterangan kesehatan digital dalam hitungan detik. Surat langsung memiliki tanda tangan digital & QR code unik.',
      color: 'from-[#116366] to-[#14b8a6]',
    },
    {
      icon: QrCode,
      title: 'Verifikasi QR Anti-Pemalsuan',
      desc: 'Setiap sertifikat memiliki QR code unik yang terhubung ke blockchain. Siapa pun dapat memverifikasi keaslian dokumen secara instan melalui portal publik.',
      color: 'from-violet-500 to-purple-600',
    },
    {
      icon: ShieldCheck,
      title: 'Keamanan Berbasis Blockchain',
      desc: 'Hash setiap sertifikat disimpan di blockchain, memastikan integritas data tidak dapat diubah atau dipalsukan oleh pihak mana pun.',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Building2,
      title: 'Multi-Fasilitas Kesehatan',
      desc: 'Satu platform untuk semua cabang Kimia Farma Diagnostika di seluruh Indonesia. Manajemen terpusat dengan kontrol akses per fasilitas.',
      color: 'from-rose-500 to-pink-600',
    },
    {
      icon: Zap,
      title: 'Integrasi API Real-time',
      desc: 'API terbuka memungkinkan integrasi dengan sistem HIS, SIMRS, atau aplikasi pihak ketiga untuk penerbitan dan verifikasi otomatis.',
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: BarChart3,
      title: 'Dashboard & Analitik',
      desc: 'Dashboard eksekutif dengan statistik penerbitan, tren harian/bulanan, dan laporan komprehensif untuk manajemen enterprise.',
      color: 'from-emerald-500 to-teal-600',
    },
  ];

  const challenges = [
    {
      icon: AlertTriangle,
      title: 'Pemalsuan Surat Medis',
      desc: 'Banyak surat keterangan kesehatan kertas dipalsukan untuk kepentingan izin kerja, perjalanan, dan asuransi — merugikan institusi dan pasien.',
    },
    {
      icon: RefreshCw,
      title: 'Proses Manual & Lambat',
      desc: 'Penerbitan surat masih dilakukan manual dengan cap dan tanda tangan fisik. Verifikasi oleh pihak penerima sangat tidak praktis dan tidak reliabel.',
    },
    {
      icon: Globe,
      title: 'Skalabilitas Nasional',
      desc: 'Kimia Farma Diagnostika memiliki ratusan cabang di seluruh Indonesia. Dibutuhkan sistem terpusat yang dapat berjalan di skala enterprise.',
    },
  ];

  const results = [
    { number: '600K+', label: 'Sertifikat Diterbitkan', sublabel: 'Sejak go-live 2023', icon: FileText, color: 'from-[#116366] to-[#14b8a6]' },
    { number: '0', label: 'Insiden Pemalsuan', sublabel: 'Sejak platform berjalan', icon: ShieldCheck, color: 'from-green-500 to-emerald-600' },
    { number: '148+', label: 'Fasilitas Aktif', sublabel: 'Cabang Kimia Farma', icon: Building2, color: 'from-blue-500 to-indigo-600' },
    { number: '<3 dtk', label: 'Waktu Verifikasi', sublabel: 'Dari scan hingga hasil', icon: Zap, color: 'from-amber-500 to-orange-500' },
  ];

  const timeline = [
    { phase: 'Discovery & Scoping', duration: '2 minggu', desc: 'Analisis kebutuhan, audit proses existing, dan definisi arsitektur blockchain.' },
    { phase: 'UI/UX Design', duration: '3 minggu', desc: 'Desain antarmuka dashboard, portal verifikasi, dan mobile view.' },
    { phase: 'Development', duration: '10 minggu', desc: 'Backend Laravel, frontend Vue.js, integrasi blockchain, dan API.' },
    { phase: 'Testing & Security Audit', duration: '2 minggu', desc: 'Penetration testing, load testing 100K+ request, dan audit keamanan.' },
    { phase: 'Pilot & Go-Live', duration: '1 minggu', desc: 'Pilot di 10 cabang, training tim, lalu rollout ke seluruh fasilitas.' },
  ];

  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="bg-white border-b border-gray-100">
        <Container>
          <div className="flex items-center gap-2 py-4 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#116366] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/portfolio" className="hover:text-[#116366] transition-colors">Portfolio</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">SuratMedis.co.id</span>
          </div>
        </Container>
      </div>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-[#0a2e30] to-[#116366]">
        <BackgroundPattern variant="grid" opacity={0.06} className="text-white" />
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-[#14b8a6]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-[#116366]/20 rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <Link href="/portfolio" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm mb-6">
                <ArrowLeft className="w-4 h-4" />
                Kembali ke Portfolio
              </Link>

              <div className="flex flex-wrap gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-teal-500/20 border border-teal-400/30 rounded-full text-teal-300 text-xs font-semibold backdrop-blur-sm">
                  <QrCode className="w-3.5 h-3.5" /> MedTech
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-semibold backdrop-blur-sm">
                  <Award className="w-3.5 h-3.5 text-yellow-400" /> Enterprise
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-semibold backdrop-blur-sm">
                  <Calendar className="w-3.5 h-3.5" /> 2023
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                SuratMedis
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] to-[#5eead4]">.co.id</span>
              </h1>
              <p className="text-lg text-white/70 mb-2 font-medium">Platform Digital Surat Keterangan Kesehatan No.1 di Indonesia</p>
              <p className="text-white/60 mb-8 leading-relaxed">
                Solusi enterprise anti-pemalsuan berbasis blockchain untuk PT Kimia Farma Diagnostika.
                600K+ sertifikat medis diterbitkan & diverifikasi secara real-time di seluruh Indonesia.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="https://suratmedis.co.id" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-gradient-to-r from-[#14b8a6] to-[#116366] hover:opacity-90 text-white shadow-lg shadow-teal-900/30">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Kunjungi Website
                  </Button>
                </a>
                <a href="#demo">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    Lihat Demo Interaktif
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>

              {/* Client badge */}
              <div className="mt-8 inline-flex items-center gap-3 px-4 py-3 bg-white/10 border border-white/20 rounded-xl backdrop-blur-sm">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/50">Klien</p>
                  <p className="text-sm font-bold text-white">PT Kimia Farma Diagnostika</p>
                  <p className="text-xs text-teal-400 font-medium">MoU Aktif — Partnership Strategis</p>
                </div>
              </div>
            </div>

            {/* Right — verification mockup */}
            <div className="hidden lg:block">
              <VerificationMockup />
              <p className="text-center text-xs text-white/40 mt-3">Klik "Verifikasi" untuk demo interaktif</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Results / Key Numbers ── */}
      <section className="bg-white border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {results.map((r, i) => {
              const Icon = r.icon;
              return (
                <div key={i} className="flex flex-col items-center py-10 px-6 text-center group">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${r.color} flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{r.number}</div>
                  <div className="text-sm font-semibold text-gray-700 mb-0.5">{r.label}</div>
                  <div className="text-xs text-gray-400">{r.sublabel}</div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Problem & Solution ── */}
      <section className="bg-gray-50 py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Problem */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-100 text-red-700 rounded-full text-xs font-bold mb-6">
                <AlertTriangle className="w-3.5 h-3.5" /> Tantangan
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Masalah yang Harus Dipecahkan</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Industri kesehatan Indonesia menghadapi krisis kepercayaan dokumen — surat medis kertas sangat mudah dipalsukan.
              </p>
              <div className="space-y-5">
                {challenges.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <div key={i} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1 text-sm">{c.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Solution */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-100 text-teal-700 rounded-full text-xs font-bold mb-6">
                <Lightbulb className="w-3.5 h-3.5" /> Solusi Kami
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Platform Anti-Pemalsuan Berbasis Blockchain</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Autobot merancang ekosistem digital terpadu: setiap sertifikat medis mendapat hash unik yang disimpan di blockchain — tidak dapat diubah, tidak dapat dipalsukan.
              </p>

              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#116366] to-[#14b8a6]/30" />
                <div className="space-y-6 pl-12">
                  {[
                    { step: '01', title: 'Pasien datang ke fasilitas kesehatan', desc: 'Pemeriksaan dilakukan seperti biasa oleh tenaga medis.' },
                    { step: '02', title: 'Dokter menerbitkan sertifikat digital', desc: 'Input melalui dashboard SuratMedis — sertifikat langsung di-hash.' },
                    { step: '03', title: 'Hash disimpan ke blockchain', desc: 'Integritas data terjamin permanen, tidak bisa dimanipulasi.' },
                    { step: '04', title: 'Pasien menerima QR code unik', desc: 'Via email/WhatsApp, bisa dicetak atau ditampilkan digital.' },
                    { step: '05', title: 'Pihak penerima verifikasi instan', desc: 'Scan QR → hasil verifikasi lengkap dalam <3 detik.' },
                  ].map((s, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-8 w-8 h-8 rounded-full bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center text-white text-xs font-bold shadow">
                        {s.step}
                      </div>
                      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:border-[#14b8a6]/30 transition-colors">
                        <h3 className="font-semibold text-gray-900 text-sm mb-1">{s.title}</h3>
                        <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Dashboard Demo ── */}
      <section id="demo" className="bg-white py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#116366]/10 text-[#116366] rounded-full text-xs font-bold mb-4">
              <Layers className="w-3.5 h-3.5" /> Platform Preview
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Dashboard Enterprise</h2>
            <p className="text-gray-500">
              Tampilan antarmuka manajemen sertifikat untuk admin fasilitas kesehatan. Data real-time, audit trail lengkap.
            </p>
          </div>
          <DashboardMockup />
        </Container>
      </section>

      {/* ── Features ── */}
      <section className="bg-gray-50 py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#116366]/10 text-[#116366] rounded-full text-xs font-bold mb-4">
              <Target className="w-3.5 h-3.5" /> Fitur Unggulan
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Apa yang Kami Bangun</h2>
            <p className="text-gray-500">Sistem end-to-end dari penerbitan hingga verifikasi, dirancang untuk skala enterprise nasional.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Tech Stack ── */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#116366]/10 text-[#116366] rounded-full text-xs font-bold mb-6">
                <Code2 className="w-3.5 h-3.5" /> Technology Stack
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Teknologi yang Digunakan</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Stack dipilih untuk keandalan enterprise, keamanan tinggi, dan kemampuan skalabilitas nasional.
                Arsitektur monolith-first yang proven, dengan API layer siap untuk microservices di masa depan.
              </p>

              <div className="space-y-3">
                {[
                  { label: 'Backend (Laravel)', value: 90 },
                  { label: 'Blockchain Integration', value: 75 },
                  { label: 'Security & QR', value: 95 },
                  { label: 'API & Integrations', value: 85 },
                ].map((bar, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-gray-700 font-medium">{bar.label}</span>
                      <span className="text-[#116366] font-semibold">{bar.value}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#116366] to-[#14b8a6] rounded-full"
                        style={{ width: `${bar.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {techStack.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <div key={i} className={`flex items-center gap-3 p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white`}>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${tech.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{tech.name}</p>
                      <p className="text-xs text-gray-400">{tech.category}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-gray-50 py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#116366]/10 text-[#116366] rounded-full text-xs font-bold mb-4">
              <Calendar className="w-3.5 h-3.5" /> Timeline Proyek
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Dari Konsep ke Produksi</h2>
            <p className="text-gray-500">Selesai dalam 18 minggu — dari discovery hingga go-live di seluruh fasilitas Kimia Farma.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-6 mb-6 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center text-white font-bold text-sm shadow flex-shrink-0">
                    {i + 1}
                  </div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-gradient-to-b from-[#14b8a6] to-[#14b8a6]/20 mt-2" />}
                </div>
                <div className="pb-6 last:pb-0 flex-1">
                  <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-bold text-gray-900">{t.phase}</h3>
                      <span className="text-xs font-semibold text-[#116366] bg-teal-50 px-2.5 py-1 rounded-full flex-shrink-0">{t.duration}</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Testimonial ── */}
      <section className="bg-white py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-[#116366]/5 to-[#14b8a6]/5 border border-[#116366]/20 rounded-3xl p-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center mb-6 shadow-lg">
                <span className="text-white text-xl font-bold">"</span>
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                "SuratMedis.co.id memberikan solusi yang benar-benar kami butuhkan. Lebih dari 600 ribu sertifikat
                telah diterbitkan tanpa satu pun insiden pemalsuan yang terdeteksi. Tim Autobot memahami kebutuhan
                domain kesehatan dengan sangat baik — mulai dari keamanan data pasien hingga skalabilitas nasional.
                Partnership ini terus berlanjut dan kami berencana mengembangkan fitur lebih lanjut."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center text-white font-bold text-lg shadow">
                  KF
                </div>
                <div>
                  <p className="font-bold text-gray-900">Tim Manajemen</p>
                  <p className="text-gray-500 text-sm">PT Kimia Farma Diagnostika</p>
                  <p className="text-xs text-[#116366] font-semibold mt-0.5">MoU Aktif — Strategic Partner</p>
                </div>
                <div className="ml-auto hidden sm:flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center">
                    <Stethoscope className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold text-gray-700">Kimia Farma Diagnostika</p>
                    <p className="text-xs text-gray-400">BUMN Kesehatan Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-gradient-to-br from-gray-950 via-[#0a2e30] to-[#116366] py-20 overflow-hidden">
        <BackgroundPattern variant="circuit" opacity={0.07} className="text-white" />
        <Container className="relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm mb-6">
              <Sparkle className="w-4 h-4 text-[#14b8a6]" />
              <span className="text-[#14b8a6] text-sm font-semibold">Bangun Solusi Serupa</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Butuh Platform Anti-Pemalsuan atau Verifikasi Digital?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Kami siap merancang solusi enterprise yang tepat untuk industri Anda — dari healthcare hingga legal.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-[#14b8a6] to-[#116366] hover:opacity-90 text-white shadow-lg shadow-teal-900/30">
                  Konsultasi Gratis
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Lihat Proyek Lain
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function Sparkle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z" />
    </svg>
  );
}
