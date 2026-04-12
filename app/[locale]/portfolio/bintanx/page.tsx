'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/sections/Container';
import { BackgroundPattern } from '@/components/ui/background-pattern';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft, ArrowRight, ChevronRight, ExternalLink, Star,
  CheckCircle2, GraduationCap, Users, BarChart3, BookOpen,
  Smartphone, DollarSign, FileText, Award, Calendar, Building2,
  Code2, Database, Layers, Server, TrendingUp, Globe,
  ClipboardList, CreditCard, Bell, Lock, RefreshCw, Trophy,
  LayoutDashboard, UserCheck, BookMarked, PieChart,
} from 'lucide-react';

// ─── Browser Mockup Shell ─────────────────────────────────────────────────
function BrowserMockup({ children, url = 'bintanx.id' }: { children: React.ReactNode; url?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
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

// ─── Dashboard Mockup ─────────────────────────────────────────────────────
function DashboardMockup() {
  const [activeTab, setActiveTab] = useState<'mahasiswa' | 'nilai' | 'keuangan'>('mahasiswa');

  const mahasiswaRows = [
    { nim: '2024001001', nama: 'Andi Pratama', prodi: 'Teknik Informatika', semester: '4', ipk: '3.87', status: 'Aktif' },
    { nim: '2024001002', nama: 'Rina Sari', prodi: 'Manajemen', semester: '2', ipk: '3.72', status: 'Aktif' },
    { nim: '2024001003', nama: 'Doni Setiawan', prodi: 'Akuntansi', semester: '6', ipk: '3.91', status: 'Aktif' },
    { nim: '2023001004', nama: 'Maya Putri', prodi: 'Teknik Sipil', semester: '8', ipk: '3.65', status: 'Cuti' },
  ];

  const nilaiRows = [
    { matkul: 'Algoritma & Pemrograman', sks: '3', uts: '85', uas: '90', tugas: '88', nilai: 'A' },
    { matkul: 'Basis Data', sks: '3', uts: '78', uas: '82', tugas: '80', nilai: 'B+' },
    { matkul: 'Jaringan Komputer', sks: '2', uts: '90', uas: '87', tugas: '92', nilai: 'A' },
    { matkul: 'Kalkulus', sks: '3', uts: '72', uas: '75', tugas: '70', nilai: 'B' },
  ];

  const keuanganRows = [
    { nim: '2024001001', nama: 'Andi Pratama', tagihan: 'SPP Semester 4', nominal: 'Rp 3.500.000', status: 'Lunas', tgl: '01 Mar 2024' },
    { nim: '2024001002', nama: 'Rina Sari', tagihan: 'SPP Semester 2', nominal: 'Rp 3.500.000', status: 'Lunas', tgl: '28 Feb 2024' },
    { nim: '2024001003', nama: 'Doni Setiawan', tagihan: 'SPP Semester 6', nominal: 'Rp 3.500.000', status: 'Belum Lunas', tgl: '-' },
    { nim: '2023001004', nama: 'Maya Putri', tagihan: 'SPP Semester 8', nominal: 'Rp 3.500.000', status: 'Cicilan', tgl: '15 Mar 2024' },
  ];

  return (
    <BrowserMockup url="app.bintanx.id/dashboard">
      <div className="bg-gray-50">
        {/* Sidebar + Content layout */}
        <div className="flex">
          {/* Mini sidebar */}
          <div className="w-14 bg-gradient-to-b from-blue-700 to-indigo-800 flex flex-col items-center py-4 gap-4 flex-shrink-0">
            {[LayoutDashboard, Users, BookOpen, DollarSign, BarChart3, Bell].map((Icon, i) => (
              <div key={i} className={`w-9 h-9 rounded-xl flex items-center justify-center cursor-pointer transition-colors ${i === 0 ? 'bg-white/20 text-white' : 'text-white/50 hover:text-white'}`}>
                <Icon className="w-4 h-4" />
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 p-4 space-y-4 overflow-hidden">
            {/* Stats row */}
            <div className="grid grid-cols-4 gap-3">
              {[
                { label: 'Total Mahasiswa', value: '4,821', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
                { label: 'Mata Kuliah', value: '186', icon: BookOpen, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                { label: 'Tagihan Pending', value: '47', icon: CreditCard, color: 'text-amber-600', bg: 'bg-amber-50' },
                { label: 'IPK Rata-rata', value: '3.72', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50' },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs text-gray-500">{s.label}</p>
                      <div className={`w-7 h-7 rounded-lg ${s.bg} flex items-center justify-center`}>
                        <Icon className={`w-3.5 h-3.5 ${s.color}`} />
                      </div>
                    </div>
                    <p className={`text-lg font-bold ${s.color}`}>{s.value}</p>
                  </div>
                );
              })}
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="flex border-b border-gray-100">
                {(['mahasiswa', 'nilai', 'keuangan'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2.5 text-xs font-semibold capitalize transition-colors ${
                      activeTab === tab
                        ? 'text-blue-700 border-b-2 border-blue-600 bg-blue-50/50'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab === 'mahasiswa' ? 'Data Mahasiswa' : tab === 'nilai' ? 'Penilaian' : 'Keuangan'}
                  </button>
                ))}
              </div>

              <div className="overflow-x-auto">
                {activeTab === 'mahasiswa' && (
                  <table className="w-full text-xs">
                    <thead className="bg-gray-50">
                      <tr>{['NIM', 'Nama', 'Prodi', 'Smt', 'IPK', 'Status'].map(h => <th key={h} className="text-left px-3 py-2 text-gray-500 font-medium">{h}</th>)}</tr>
                    </thead>
                    <tbody>
                      {mahasiswaRows.map((r, i) => (
                        <tr key={i} className="border-t border-gray-50 hover:bg-gray-50">
                          <td className="px-3 py-2.5 font-mono text-blue-600">{r.nim}</td>
                          <td className="px-3 py-2.5 font-semibold text-gray-800">{r.nama}</td>
                          <td className="px-3 py-2.5 text-gray-600">{r.prodi}</td>
                          <td className="px-3 py-2.5 text-center text-gray-600">{r.semester}</td>
                          <td className="px-3 py-2.5 font-semibold text-green-600">{r.ipk}</td>
                          <td className="px-3 py-2.5">
                            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${r.status === 'Aktif' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{r.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                {activeTab === 'nilai' && (
                  <table className="w-full text-xs">
                    <thead className="bg-gray-50">
                      <tr>{['Mata Kuliah', 'SKS', 'UTS', 'UAS', 'Tugas', 'Nilai'].map(h => <th key={h} className="text-left px-3 py-2 text-gray-500 font-medium">{h}</th>)}</tr>
                    </thead>
                    <tbody>
                      {nilaiRows.map((r, i) => (
                        <tr key={i} className="border-t border-gray-50 hover:bg-gray-50">
                          <td className="px-3 py-2.5 font-medium text-gray-800">{r.matkul}</td>
                          <td className="px-3 py-2.5 text-center text-gray-600">{r.sks}</td>
                          <td className="px-3 py-2.5 text-center text-gray-600">{r.uts}</td>
                          <td className="px-3 py-2.5 text-center text-gray-600">{r.uas}</td>
                          <td className="px-3 py-2.5 text-center text-gray-600">{r.tugas}</td>
                          <td className="px-3 py-2.5">
                            <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${r.nilai === 'A' ? 'bg-green-100 text-green-700' : r.nilai === 'B+' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}`}>{r.nilai}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                {activeTab === 'keuangan' && (
                  <table className="w-full text-xs">
                    <thead className="bg-gray-50">
                      <tr>{['NIM', 'Nama', 'Tagihan', 'Nominal', 'Status', 'Tgl Bayar'].map(h => <th key={h} className="text-left px-3 py-2 text-gray-500 font-medium">{h}</th>)}</tr>
                    </thead>
                    <tbody>
                      {keuanganRows.map((r, i) => (
                        <tr key={i} className="border-t border-gray-50 hover:bg-gray-50">
                          <td className="px-3 py-2.5 font-mono text-blue-600">{r.nim}</td>
                          <td className="px-3 py-2.5 font-semibold text-gray-800">{r.nama}</td>
                          <td className="px-3 py-2.5 text-gray-600">{r.tagihan}</td>
                          <td className="px-3 py-2.5 font-semibold text-gray-800">{r.nominal}</td>
                          <td className="px-3 py-2.5">
                            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                              r.status === 'Lunas' ? 'bg-green-100 text-green-700'
                              : r.status === 'Cicilan' ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-red-100 text-red-700'
                            }`}>{r.status}</span>
                          </td>
                          <td className="px-3 py-2.5 text-gray-500">{r.tgl}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserMockup>
  );
}

// ─── Mobile App Mockup ────────────────────────────────────────────────────
function MobileMockup() {
  return (
    <div className="w-56 mx-auto">
      <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
        <div className="bg-white rounded-[2rem] overflow-hidden">
          {/* Status bar */}
          <div className="bg-gradient-to-r from-blue-700 to-indigo-700 px-5 pt-3 pb-5">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white/80 text-xs">9:41</span>
              <div className="w-20 h-4 bg-black rounded-full mx-auto" />
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-white/60 rounded-sm" />
                <div className="w-3 h-3 bg-white/60 rounded-sm" />
              </div>
            </div>
            <p className="text-white/70 text-xs mb-1">Selamat Datang,</p>
            <p className="text-white font-bold text-sm">Andi Pratama</p>
            <p className="text-white/60 text-xs">NIM: 2024001001 • Sem. 4</p>
            {/* IPK badge */}
            <div className="mt-3 inline-flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1">
              <TrendingUp className="w-3 h-3 text-white" />
              <span className="text-white text-xs font-bold">IPK: 3.87</span>
            </div>
          </div>

          {/* Quick menu */}
          <div className="px-3 py-3 grid grid-cols-4 gap-2">
            {[
              { icon: BookOpen, label: 'KRS', color: 'bg-blue-100 text-blue-600' },
              { icon: ClipboardList, label: 'Nilai', color: 'bg-green-100 text-green-600' },
              { icon: CreditCard, label: 'SPP', color: 'bg-amber-100 text-amber-600' },
              { icon: Bell, label: 'Info', color: 'bg-purple-100 text-purple-600' },
            ].map((m, i) => {
              const Icon = m.icon;
              return (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div className={`w-10 h-10 rounded-xl ${m.color} flex items-center justify-center`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-gray-600 font-medium">{m.label}</span>
                </div>
              );
            })}
          </div>

          {/* Jadwal hari ini */}
          <div className="px-3 pb-3">
            <p className="text-xs font-bold text-gray-700 mb-2">Jadwal Hari Ini</p>
            <div className="space-y-2">
              {[
                { time: '08:00', matkul: 'Algoritma', ruang: 'R.201', status: 'selesai' },
                { time: '10:00', matkul: 'Basis Data', ruang: 'Lab 1', status: 'berlangsung' },
                { time: '13:00', matkul: 'Jaringan', ruang: 'R.305', status: 'upcoming' },
              ].map((j, i) => (
                <div key={i} className={`flex items-center gap-2 p-2 rounded-lg ${j.status === 'berlangsung' ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'}`}>
                  <div className="text-center w-10">
                    <p className="text-xs font-bold text-gray-700">{j.time}</p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-gray-800 truncate">{j.matkul}</p>
                    <p className="text-xs text-gray-400">{j.ruang}</p>
                  </div>
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${j.status === 'berlangsung' ? 'bg-blue-500 animate-pulse' : j.status === 'selesai' ? 'bg-green-400' : 'bg-gray-300'}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────
export default function BintanxPage() {
  const techStack = [
    { name: 'Laravel', category: 'Backend Framework', icon: Server, color: 'text-red-600 bg-red-50' },
    { name: 'Vue.js', category: 'Frontend SPA', icon: Code2, color: 'text-green-600 bg-green-50' },
    { name: 'Flutter', category: 'Mobile App', icon: Smartphone, color: 'text-blue-600 bg-blue-50' },
    { name: 'MySQL', category: 'Database', icon: Database, color: 'text-orange-600 bg-orange-50' },
    { name: 'SaaS Multi-tenant', category: 'Arsitektur', icon: Layers, color: 'text-purple-600 bg-purple-50' },
    { name: 'REST API', category: 'Integration', icon: Globe, color: 'text-indigo-600 bg-indigo-50' },
  ];

  const features = [
    {
      icon: Users,
      title: 'Manajemen Mahasiswa',
      desc: 'Data lengkap mahasiswa: biodata, riwayat akademik, KRS, transkrip, dan status kemahasiswaan dalam satu tampilan terpadu.',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: ClipboardList,
      title: 'Sistem Penilaian & KRS',
      desc: 'Input nilai UTS, UAS, tugas oleh dosen, konversi otomatis ke huruf mutu, penghitungan IPK real-time, dan pengelolaan KRS online.',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: DollarSign,
      title: 'Keuangan Akademik',
      desc: 'Manajemen tagihan SPP, pembayaran cicilan, laporan keuangan per periode, dan integrasi payment gateway untuk bayar online.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Flutter',
      desc: 'Aplikasi mobile cross-platform (iOS & Android) untuk mahasiswa — cek nilai, jadwal, tagihan, KRS, dan notifikasi akademik.',
      color: 'from-violet-500 to-purple-600',
    },
    {
      icon: Building2,
      title: 'Multi-Institusi SaaS',
      desc: 'Arsitektur multi-tenant memungkinkan satu deployment melayani 10+ institusi secara terpisah dengan data terisolasi dan branding sendiri.',
      color: 'from-rose-500 to-pink-600',
    },
    {
      icon: FileText,
      title: 'Laporan & Akreditasi',
      desc: 'Generate laporan evaluasi pembelajaran, laporan akreditasi BAN-PT, transkrip resmi, dan ijazah digital secara otomatis.',
      color: 'from-cyan-500 to-sky-600',
    },
  ];

  const results = [
    { number: '10+', label: 'Institusi Aktif', sublabel: 'Tersebar di Indonesia', icon: Building2, color: 'from-blue-500 to-indigo-600' },
    { number: '50K+', label: 'Mahasiswa Terdaftar', sublabel: 'Di semua institusi', icon: Users, color: 'from-green-500 to-emerald-600' },
    { number: '🏆', label: 'Lumina Festival 2025', sublabel: 'Danantara / Biofarma Group', icon: Trophy, color: 'from-amber-500 to-orange-500' },
    { number: '70%', label: 'Hemat Waktu Admin', sublabel: 'Vs proses manual', icon: TrendingUp, color: 'from-violet-500 to-purple-600' },
  ];

  const modules = [
    { icon: UserCheck, title: 'PMB Online', desc: 'Pendaftaran Mahasiswa Baru digital dengan seleksi & pengumuman otomatis' },
    { icon: BookMarked, title: 'KRS & Jadwal', desc: 'Pengisian KRS online, penjadwalan mata kuliah, dan manajemen ruang kelas' },
    { icon: ClipboardList, title: 'Penilaian', desc: 'Input nilai oleh dosen, validasi, publikasi, dan penghitungan IPK/IPS otomatis' },
    { icon: CreditCard, title: 'Keuangan', desc: 'Tagihan SPP, pembayaran online, cicilan, dan laporan keuangan institusi' },
    { icon: FileText, title: 'Dokumen & Ijazah', desc: 'Surat keterangan, transkrip, dan ijazah digital dengan QR verifikasi' },
    { icon: BarChart3, title: 'Laporan & Analitik', desc: 'Dashboard eksekutif, laporan akreditasi BAN-PT, dan evaluasi pembelajaran' },
    { icon: Bell, title: 'Notifikasi', desc: 'Push notification mobile, email, dan WhatsApp untuk pengumuman & tagihan' },
    { icon: Lock, title: 'RBAC & Keamanan', desc: 'Role-based access: Rektor, Dekan, Dosen, Mahasiswa, Keuangan, dan Admin' },
  ];

  const timeline = [
    { phase: 'Analisis & Scoping', duration: '3 minggu', desc: 'Studi proses akademik existing, pemetaan modul, dan desain arsitektur multi-tenant SaaS.' },
    { phase: 'UI/UX Design', duration: '4 minggu', desc: 'Desain dashboard admin, portal dosen, portal mahasiswa, dan desain mobile app Flutter.' },
    { phase: 'Core Development', duration: '14 minggu', desc: 'Backend Laravel, SPA Vue.js, API layer, multi-tenant isolation, dan seluruh modul akademik.' },
    { phase: 'Mobile App Flutter', duration: '6 minggu', desc: 'Pengembangan aplikasi mobile iOS & Android dengan fitur offline-capable dan push notification.' },
    { phase: 'UAT & Pilot', duration: '3 minggu', desc: 'User acceptance testing bersama 2 institusi pilot, training admin dan dosen, penyempurnaan UI.' },
    { phase: 'Go-Live & Skalabilitas', duration: '2 minggu', desc: 'Onboarding 8 institusi berikutnya, optimasi performa multi-tenant, dan monitoring produksi.' },
  ];

  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="bg-white border-b border-gray-100">
        <Container>
          <div className="flex items-center gap-2 py-4 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/portfolio" className="hover:text-blue-600 transition-colors">Portfolio</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">SIAKAD / BINTANX</span>
          </div>
        </Container>
      </div>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-blue-950 to-indigo-900">
        <BackgroundPattern variant="grid" opacity={0.06} className="text-white" />
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-indigo-500/15 rounded-full blur-3xl" />
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
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-xs font-semibold">
                  <GraduationCap className="w-3.5 h-3.5" /> Education SaaS
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/20 border border-amber-400/30 rounded-full text-amber-300 text-xs font-semibold">
                  <Trophy className="w-3.5 h-3.5" /> Lumina Festival 2025
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-semibold">
                  <Calendar className="w-3.5 h-3.5" /> 2024
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                SIAKAD{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">BINTANX</span>
              </h1>
              <p className="text-lg text-white/70 mb-2 font-medium">SaaS Manajemen Akademik untuk Perguruan Tinggi Indonesia</p>
              <p className="text-white/60 mb-8 leading-relaxed">
                Platform akademik all-in-one yang mengintegrasikan manajemen mahasiswa, penilaian, keuangan, dan mobile app dalam satu ekosistem SaaS multi-institusi.
                Peraih penghargaan <span className="text-amber-400 font-semibold">Lumina Festival 2025</span> dari Danantara/Biofarma Group.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#demo">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 text-white shadow-lg shadow-blue-900/30">
                    Lihat Demo Interaktif
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    Request Demo Institusi
                  </Button>
                </Link>
              </div>

              {/* Award badge */}
              <div className="mt-8 inline-flex items-center gap-3 px-4 py-3 bg-amber-500/10 border border-amber-400/30 rounded-xl backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-amber-300/70">Penghargaan</p>
                  <p className="text-sm font-bold text-white">Lumina Festival 2025</p>
                  <p className="text-xs text-amber-400 font-medium">Danantara / Biofarma Group — Best EdTech</p>
                </div>
              </div>
            </div>

            {/* Right — mobile mockup */}
            <div className="hidden lg:flex flex-col items-center gap-6">
              <MobileMockup />
              <p className="text-xs text-white/40">Mobile App BINTANX — Flutter (iOS & Android)</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Results ── */}
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

      {/* ── Dashboard Demo ── */}
      <section id="demo" className="bg-gray-50 py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-4">
              <LayoutDashboard className="w-3.5 h-3.5" /> Platform Preview
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Dashboard Akademik Interaktif</h2>
            <p className="text-gray-500">Klik tab untuk berpindah antara modul — Mahasiswa, Penilaian, dan Keuangan.</p>
          </div>
          <DashboardMockup />
        </Container>
      </section>

      {/* ── Modules ── */}
      <section className="bg-white py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-4">
              <Layers className="w-3.5 h-3.5" /> Modul Lengkap
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">8 Modul Terintegrasi</h2>
            <p className="text-gray-500">Satu platform mencakup seluruh siklus operasional perguruan tinggi — dari PMB hingga kelulusan.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {modules.map((m, i) => {
              const Icon = m.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 shadow group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1.5 text-sm">{m.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{m.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Features Deep Dive ── */}
      <section className="bg-gray-50 py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-4">
              <BookOpen className="w-3.5 h-3.5" /> Fitur Unggulan
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Dibangun untuk Skala Nasional</h2>
            <p className="text-gray-500">Arsitektur SaaS multi-tenant yang scalable — satu institusi atau seratus, performa tetap optimal.</p>
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

      {/* ── Mobile + Web side by side ── */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-6">
                <Smartphone className="w-3.5 h-3.5" /> Mobile First
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Akses dari Mana Saja</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Mahasiswa, dosen, dan staf akademik dapat mengakses seluruh layanan melalui aplikasi mobile Flutter yang ringan dan responsif — tersedia di App Store dan Google Play.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Cek Nilai & IPK Real-time', desc: 'Nilai diupdate dosen langsung tampil di aplikasi mahasiswa.' },
                  { title: 'Bayar SPP via Mobile', desc: 'Integrasi payment gateway: transfer bank, QRIS, e-wallet.' },
                  { title: 'Jadwal & Absensi', desc: 'Lihat jadwal kuliah, konfirmasi absensi, dan notifikasi perubahan kelas.' },
                  { title: 'Notifikasi Push', desc: 'Pengumuman akademik, tagihan jatuh tempo, dan info beasiswa real-time.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <MobileMockup />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Tech Stack ── */}
      <section className="bg-gray-50 py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-6">
                <Code2 className="w-3.5 h-3.5" /> Technology Stack
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Stack Teknologi</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Dipilih untuk stabilitas jangka panjang, kemudahan maintenance oleh tim institusi, dan skalabilitas dari puluhan hingga ribuan mahasiswa per tenant.
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Backend Laravel (API + Admin)', value: 92 },
                  { label: 'Frontend Vue.js SPA', value: 85 },
                  { label: 'Flutter Mobile (iOS & Android)', value: 88 },
                  { label: 'Multi-tenant Architecture', value: 80 },
                ].map((bar, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-gray-700 font-medium">{bar.label}</span>
                      <span className="text-blue-600 font-semibold">{bar.value}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
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
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white">
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
      <section className="bg-white py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-4">
              <Calendar className="w-3.5 h-3.5" /> Timeline Proyek
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Dari Ide ke 10+ Institusi</h2>
            <p className="text-gray-500">Selesai dalam 32 minggu — web, mobile, dan onboarding multi-institusi.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-6 mb-6 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow flex-shrink-0">
                    {i + 1}
                  </div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-gradient-to-b from-indigo-400 to-indigo-100 mt-2" />}
                </div>
                <div className="pb-6 last:pb-0 flex-1">
                  <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-bold text-gray-900">{t.phase}</h3>
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full flex-shrink-0">{t.duration}</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Award Highlight ── */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 border-y border-amber-100 py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-amber-200">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Penghargaan Lumina Festival 2025</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              BINTANX meraih penghargaan di <span className="font-bold text-amber-700">Lumina Festival 2025</span>, kompetisi inovasi teknologi yang diselenggarakan oleh <span className="font-bold">Danantara / Biofarma Group</span> — BUMN strategis Indonesia.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: 'Kategori', value: 'Best EdTech Innovation' },
                { label: 'Penyelenggara', value: 'Danantara / Biofarma Group' },
                { label: 'Tahun', value: '2025' },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-amber-200 rounded-xl px-6 py-4 shadow-sm text-center">
                  <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                  <p className="font-bold text-gray-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Testimonial ── */}
      <section className="bg-white py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-3xl p-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg">
                <span className="text-white text-xl font-bold">"</span>
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                "BINTANX merevolusi cara kami mengelola akademik. Dulu butuh 3 sistem berbeda untuk mahasiswa, nilai, dan keuangan — sekarang semuanya dalam satu platform. Mahasiswa sangat antusias dengan mobile app-nya. Tim Autobot tidak hanya membangun software, mereka memahami kebutuhan dunia pendidikan tinggi secara mendalam."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow">
                  AK
                </div>
                <div>
                  <p className="font-bold text-gray-900">Tim Akademik</p>
                  <p className="text-gray-500 text-sm">Institusi Pengguna BINTANX</p>
                  <p className="text-xs text-blue-600 font-semibold mt-0.5">Salah satu dari 10+ institusi aktif</p>
                </div>
                <div className="ml-auto hidden sm:flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold text-gray-700">SIAKAD BINTANX</p>
                    <p className="text-xs text-gray-400">Education SaaS Platform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-gradient-to-br from-gray-950 via-blue-950 to-indigo-900 py-20 overflow-hidden">
        <BackgroundPattern variant="circuit" opacity={0.07} className="text-white" />
        <Container className="relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm mb-6">
              <GraduationCap className="w-4 h-4 text-blue-300" />
              <span className="text-blue-300 text-sm font-semibold">Untuk Institusi Pendidikan</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Institusi Anda Butuh SIAKAD Modern?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Bergabung dengan 10+ institusi yang telah mempercayakan manajemen akademik mereka ke BINTANX.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 text-white shadow-lg shadow-blue-900/30">
                  Request Demo Gratis
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
