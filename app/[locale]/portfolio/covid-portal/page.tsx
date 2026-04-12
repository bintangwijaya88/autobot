'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/sections/Container';
import { BackgroundPattern } from '@/components/ui/background-pattern';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft, ArrowRight, ChevronRight, Star, CheckCircle2,
  ShieldCheck, FileText, Zap, Users, BarChart3, Globe, Lock,
  RefreshCw, Calendar, Building2, Code2, Database, Server,
  TrendingUp, AlertTriangle, Layers, Activity, ClipboardCheck,
  MapPin, Clock, Printer, Search, Download, Filter,
} from 'lucide-react';

// ─── Browser Shell ────────────────────────────────────────────────────────
function BrowserMockup({ children, url = 'covid.kimiafarma.co.id' }: { children: React.ReactNode; url?: string }) {
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

// ─── Registration Dashboard Mockup ───────────────────────────────────────
function DashboardMockup() {
  const [activeTab, setActiveTab] = useState<'registrasi' | 'surat' | 'lab'>('registrasi');

  const registrasiRows = [
    { id: 'REG-2021-089231', nama: 'Ahmad Rasyid', nik: '3174****1002', tgl: '26 Jul 2021', jenis: 'PCR', lokasi: 'Jakarta Selatan', status: 'Selesai' },
    { id: 'REG-2021-089230', nama: 'Siti Rahayu', nik: '3175****2201', tgl: '26 Jul 2021', jenis: 'Antigen', lokasi: 'Jakarta Pusat', status: 'Diproses' },
    { id: 'REG-2021-089229', nama: 'Budi Santoso', nik: '3173****3301', tgl: '26 Jul 2021', jenis: 'PCR', lokasi: 'Bandung', status: 'Selesai' },
    { id: 'REG-2021-089228', nama: 'Dewi Lestari', nik: '3271****4401', tgl: '25 Jul 2021', jenis: 'Antigen', lokasi: 'Surabaya', status: 'Menunggu' },
    { id: 'REG-2021-089227', nama: 'Rudi Hermawan', nik: '3172****5501', tgl: '25 Jul 2021', jenis: 'PCR', lokasi: 'Medan', status: 'Selesai' },
  ];

  const suratRows = [
    { id: 'SKS-2021-044120', nama: 'Ahmad Rasyid', jenis: 'Surat Sehat', hasil: 'Negatif', diterbitkan: '26 Jul 2021 14:32', berlaku: '28 Jul 2021' },
    { id: 'SKS-2021-044119', nama: 'Budi Santoso', jenis: 'Surat Sehat', hasil: 'Negatif', diterbitkan: '26 Jul 2021 13:15', berlaku: '28 Jul 2021' },
    { id: 'SKS-2021-044118', nama: 'Rudi Hermawan', jenis: 'Surat Sehat', hasil: 'Negatif', diterbitkan: '25 Jul 2021 18:40', berlaku: '27 Jul 2021' },
    { id: 'SKS-2021-044117', nama: 'Maya Putri', jenis: 'Surat Karantina', hasil: 'Positif', diterbitkan: '25 Jul 2021 16:22', berlaku: '10 Agu 2021' },
  ];

  const labRows = [
    { kode: 'KF-JKT-001', nama: 'Lab Kimia Farma Jakarta Pusat', kapasitas: '500/hari', antrian: 287, status: 'Normal' },
    { kode: 'KF-JKT-002', nama: 'Lab Kimia Farma Sudirman', kapasitas: '400/hari', antrian: 391, status: 'Padat' },
    { kode: 'KF-BDG-001', nama: 'Lab Kimia Farma Bandung', kapasitas: '350/hari', antrian: 142, status: 'Normal' },
    { kode: 'KF-SBY-001', nama: 'Lab Kimia Farma Surabaya', kapasitas: '450/hari', antrian: 203, status: 'Normal' },
  ];

  return (
    <BrowserMockup url="covid.kimiafarma.co.id/admin">
      <div className="bg-gray-50">
        <div className="flex">
          {/* Mini sidebar */}
          <div className="w-14 bg-gradient-to-b from-green-700 to-emerald-800 flex flex-col items-center py-4 gap-4 flex-shrink-0">
            {[BarChart3, ClipboardCheck, FileText, MapPin, Users, Activity].map((Icon, i) => (
              <div key={i} className={`w-9 h-9 rounded-xl flex items-center justify-center ${i === 0 ? 'bg-white/20 text-white' : 'text-white/50 hover:text-white'}`}>
                <Icon className="w-4 h-4" />
              </div>
            ))}
          </div>

          <div className="flex-1 p-4 space-y-4 overflow-hidden">
            {/* Stats */}
            <div className="grid grid-cols-4 gap-3">
              {[
                { label: 'Registrasi Hari Ini', value: '14,832', icon: ClipboardCheck, color: 'text-green-700', bg: 'bg-green-50' },
                { label: 'Surat Diterbitkan', value: '12,401', icon: FileText, color: 'text-blue-700', bg: 'bg-blue-50' },
                { label: 'Lab Aktif', value: '148', icon: MapPin, color: 'text-purple-700', bg: 'bg-purple-50' },
                { label: 'Positif Rate', value: '4.2%', icon: Activity, color: 'text-red-600', bg: 'bg-red-50' },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-1">
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
              <div className="flex items-center justify-between border-b border-gray-100 px-1">
                <div className="flex">
                  {([
                    { key: 'registrasi', label: 'Registrasi' },
                    { key: 'surat', label: 'Surat Kesehatan' },
                    { key: 'lab', label: 'Lab & Klinik' },
                  ] as const).map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`px-4 py-2.5 text-xs font-semibold transition-colors ${
                        activeTab === tab.key
                          ? 'text-green-700 border-b-2 border-green-600 bg-green-50/40'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 pr-3">
                  <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-lg px-2 py-1">
                    <Search className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-400">Cari...</span>
                  </div>
                  <div className="w-6 h-6 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                    <Filter className="w-3 h-3 text-gray-400" />
                  </div>
                  <div className="w-6 h-6 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                    <Download className="w-3 h-3 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                {activeTab === 'registrasi' && (
                  <table className="w-full text-xs">
                    <thead className="bg-gray-50">
                      <tr>{['ID', 'Nama', 'NIK', 'Tanggal', 'Jenis Tes', 'Lokasi', 'Status'].map(h => (
                        <th key={h} className="text-left px-3 py-2 text-gray-500 font-medium">{h}</th>
                      ))}</tr>
                    </thead>
                    <tbody>
                      {registrasiRows.map((r, i) => (
                        <tr key={i} className="border-t border-gray-50 hover:bg-gray-50">
                          <td className="px-3 py-2.5 font-mono text-green-700 text-xs">{r.id}</td>
                          <td className="px-3 py-2.5 font-semibold text-gray-800">{r.nama}</td>
                          <td className="px-3 py-2.5 font-mono text-gray-500">{r.nik}</td>
                          <td className="px-3 py-2.5 text-gray-500">{r.tgl}</td>
                          <td className="px-3 py-2.5">
                            <span className={`px-1.5 py-0.5 rounded text-xs font-semibold ${r.jenis === 'PCR' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>{r.jenis}</span>
                          </td>
                          <td className="px-3 py-2.5 text-gray-600">{r.lokasi}</td>
                          <td className="px-3 py-2.5">
                            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                              r.status === 'Selesai' ? 'bg-green-100 text-green-700'
                              : r.status === 'Diproses' ? 'bg-blue-100 text-blue-700'
                              : 'bg-yellow-100 text-yellow-700'
                            }`}>{r.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}

                {activeTab === 'surat' && (
                  <table className="w-full text-xs">
                    <thead className="bg-gray-50">
                      <tr>{['ID Surat', 'Nama', 'Jenis', 'Hasil', 'Diterbitkan', 'Berlaku Hingga'].map(h => (
                        <th key={h} className="text-left px-3 py-2 text-gray-500 font-medium">{h}</th>
                      ))}</tr>
                    </thead>
                    <tbody>
                      {suratRows.map((r, i) => (
                        <tr key={i} className="border-t border-gray-50 hover:bg-gray-50">
                          <td className="px-3 py-2.5 font-mono text-green-700">{r.id}</td>
                          <td className="px-3 py-2.5 font-semibold text-gray-800">{r.nama}</td>
                          <td className="px-3 py-2.5 text-gray-600">{r.jenis}</td>
                          <td className="px-3 py-2.5">
                            <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${r.hasil === 'Negatif' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{r.hasil}</span>
                          </td>
                          <td className="px-3 py-2.5 text-gray-500">{r.diterbitkan}</td>
                          <td className="px-3 py-2.5 text-gray-500">{r.berlaku}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}

                {activeTab === 'lab' && (
                  <table className="w-full text-xs">
                    <thead className="bg-gray-50">
                      <tr>{['Kode', 'Nama Lab / Klinik', 'Kapasitas', 'Antrian', 'Status'].map(h => (
                        <th key={h} className="text-left px-3 py-2 text-gray-500 font-medium">{h}</th>
                      ))}</tr>
                    </thead>
                    <tbody>
                      {labRows.map((r, i) => (
                        <tr key={i} className="border-t border-gray-50 hover:bg-gray-50">
                          <td className="px-3 py-2.5 font-mono text-green-700">{r.kode}</td>
                          <td className="px-3 py-2.5 font-semibold text-gray-800">{r.nama}</td>
                          <td className="px-3 py-2.5 text-gray-600">{r.kapasitas}</td>
                          <td className="px-3 py-2.5">
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden w-16">
                                <div
                                  className={`h-full rounded-full ${r.antrian / 500 > 0.7 ? 'bg-red-500' : 'bg-green-500'}`}
                                  style={{ width: `${Math.min((r.antrian / 500) * 100, 100)}%` }}
                                />
                              </div>
                              <span className="text-gray-700 font-semibold">{r.antrian}</span>
                            </div>
                          </td>
                          <td className="px-3 py-2.5">
                            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${r.status === 'Normal' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{r.status}</span>
                          </td>
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

// ─── Certificate Mockup ───────────────────────────────────────────────────
function CertificateMockup() {
  const [generated, setGenerated] = useState(false);
  return (
    <BrowserMockup url="covid.kimiafarma.co.id/surat/generate">
      <div className="bg-gray-50 p-5">
        {!generated ? (
          <div className="max-w-sm mx-auto space-y-4">
            <div className="text-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center mx-auto mb-3 shadow">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm font-bold text-gray-800">Generate Surat Kesehatan</p>
              <p className="text-xs text-gray-500">Otomatis dari hasil lab</p>
            </div>
            <div className="space-y-2.5">
              {[
                { label: 'ID Registrasi', value: 'REG-2021-089231', mono: true },
                { label: 'Nama Pasien', value: 'Ahmad Rasyid' },
                { label: 'Jenis Tes', value: 'PCR (Swab)' },
                { label: 'Hasil Lab', value: 'Negatif COVID-19', highlight: true },
                { label: 'Lab Pemeriksa', value: 'KF Jakarta Selatan' },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-3">
                  <span className="text-xs text-gray-500 w-28 flex-shrink-0">{f.label}</span>
                  <span className={`text-xs font-semibold flex-1 ${f.mono ? 'font-mono text-green-700' : f.highlight ? 'text-green-700 bg-green-50 px-2 py-0.5 rounded' : 'text-gray-800'}`}>{f.value}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setGenerated(true)}
              className="w-full py-2.5 bg-gradient-to-r from-green-600 to-emerald-700 text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-md"
            >
              <Zap className="w-4 h-4" />
              Generate Otomatis
            </button>
          </div>
        ) : (
          /* Surat preview */
          <div className="bg-white rounded-xl border-2 border-green-200 shadow-md p-5 max-w-sm mx-auto">
            {/* Header surat */}
            <div className="text-center border-b-2 border-green-700 pb-3 mb-3">
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-green-800 leading-tight">PT KIMIA FARMA DIAGNOSTIKA</p>
                  <p className="text-xs text-green-600 leading-tight">Laboratorium Klinik</p>
                </div>
              </div>
              <p className="text-xs font-bold text-gray-800 uppercase tracking-wider mt-2">Surat Keterangan Hasil Pemeriksaan</p>
              <p className="text-xs text-gray-500">COVID-19 (SARS-CoV-2)</p>
            </div>

            <div className="space-y-1.5 mb-4 text-xs">
              {[
                ['Nomor Surat', 'SKS-2021-044120'],
                ['Tanggal Terbit', '26 Juli 2021, 14:32 WIB'],
                ['Nama', 'Ahmad Rasyid'],
                ['NIK', '3174****1002'],
                ['Tanggal Lahir', '15 Agustus 1990'],
                ['Jenis Pemeriksaan', 'RT-PCR (Nasopharyngeal Swab)'],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-2">
                  <span className="text-gray-500 w-32 flex-shrink-0">{k}</span>
                  <span className="font-semibold text-gray-800 flex-1">: {v}</span>
                </div>
              ))}
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4 text-center">
              <p className="text-xs text-gray-600 mb-1">Hasil Pemeriksaan</p>
              <p className="text-lg font-bold text-green-700">NEGATIF</p>
              <p className="text-xs text-green-600">Tidak Terdeteksi COVID-19</p>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-100 pt-3">
              <div className="flex items-center gap-1.5">
                <div className="w-14 h-14 border border-gray-200 rounded flex items-center justify-center bg-gray-50">
                  <div className="grid grid-cols-5 gap-0.5">
                    {[...Array(25)].map((_, i) => (
                      <div key={i} className={`w-1.5 h-1.5 ${Math.random() > 0.5 ? 'bg-gray-800' : 'bg-white'} rounded-sm`} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">QR Verifikasi</p>
                  <p className="text-gray-400">Scan untuk validasi</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Printer className="w-4 h-4" />
                <button onClick={() => setGenerated(false)} className="text-green-600 font-semibold hover:underline">Reset</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </BrowserMockup>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────
export default function CovidPortalPage() {
  const challenges = [
    {
      icon: TrendingUp,
      title: 'Lonjakan Permintaan Masif',
      desc: 'Di puncak pandemi, permintaan tes COVID-19 meledak hingga 100.000+ per minggu. Sistem lama berbasis spreadsheet dan kertas total kolaps.',
    },
    {
      icon: Clock,
      title: 'Antrean & Surat Manual',
      desc: 'Proses manual dari registrasi, pengambilan sampel, hingga penerbitan surat memakan 2–3 hari. Pasien menunggu terlalu lama di tengah urgensi perjalanan dan pekerjaan.',
    },
    {
      icon: Globe,
      title: 'Koordinasi 148+ Lab Nasional',
      desc: 'Kimia Farma memiliki ratusan laboratorium dan klinik di seluruh Indonesia. Tanpa sistem terpusat, tidak ada visibilitas kapasitas, antrian, atau status hasil secara real-time.',
    },
    {
      icon: AlertTriangle,
      title: 'Integritas Data & Pemalsuan',
      desc: 'Surat keterangan kesehatan kertas rawan dipalsukan untuk menghindari karantina, memperburuk penyebaran virus dan merusak kepercayaan sistem.',
    },
  ];

  const solutions = [
    { step: '01', title: 'Registrasi Online Mandiri', desc: 'Pasien daftar via web dengan NIK, pilih lokasi lab, tanggal & jenis tes. Antrian otomatis terdistribusi ke lab terdekat dengan kapasitas tersedia.' },
    { step: '02', title: 'Notifikasi & Manajemen Antrian', desc: 'Konfirmasi registrasi via email/SMS. Sistem reminder H-1 dan H hari pemeriksaan. Manajemen antrian digital per lab.' },
    { step: '03', title: 'Input Hasil Lab Digital', desc: 'Petugas lab input hasil PCR/Antigen langsung di sistem. Validasi dua tahap oleh dokter PJ lab sebelum surat diterbitkan.' },
    { step: '04', title: 'Generate Surat Otomatis', desc: 'Begitu hasil divalidasi, sistem otomatis generate surat PDF resmi dengan kop Kimia Farma, QR code anti-pemalsuan, dan tanda tangan digital dokter.' },
    { step: '05', title: 'Distribusi & Verifikasi', desc: 'Surat dikirim ke email pasien + tersedia di portal. Pihak ketiga (maskapai, kantor, bandara) bisa verifikasi keaslian via scan QR.' },
  ];

  const techStack = [
    { name: 'Laravel', category: 'Backend Framework', icon: Server, color: 'text-red-600 bg-red-50' },
    { name: 'MySQL', category: 'Database', icon: Database, color: 'text-orange-600 bg-orange-50' },
    { name: 'Queue Worker', category: 'Async Processing', icon: Zap, color: 'text-yellow-600 bg-yellow-50' },
    { name: 'Redis', category: 'Cache & Session', icon: Layers, color: 'text-red-500 bg-red-50' },
    { name: 'PDF Generator', category: 'Surat Otomatis', icon: FileText, color: 'text-green-600 bg-green-50' },
    { name: 'REST API', category: 'Integrasi Lab', icon: Globe, color: 'text-blue-600 bg-blue-50' },
  ];

  const results = [
    { number: '100K+', label: 'Entri per Minggu', sublabel: 'Di puncak pandemi', icon: ClipboardCheck, color: 'from-green-600 to-emerald-700' },
    { number: '148+', label: 'Lab & Klinik', sublabel: 'Se-Indonesia', icon: MapPin, color: 'from-blue-500 to-indigo-600' },
    { number: '<2 jam', label: 'Terbit Surat', sublabel: 'Dari hasil lab masuk', icon: Zap, color: 'from-amber-500 to-orange-500' },
    { number: '0', label: 'Downtime Kritis', sublabel: 'Selama periode pandemi', icon: ShieldCheck, color: 'from-violet-500 to-purple-600' },
  ];

  const timeline = [
    { phase: 'Emergency Kickoff', duration: '3 hari', desc: 'Briefing darurat dengan tim Kimia Farma. Scoping cepat, prioritas fitur MVP, dan pembagian tim developer.' },
    { phase: 'MVP Development', duration: '3 minggu', desc: 'Registrasi online, manajemen antrian, input hasil lab, dan generate surat PDF otomatis — sprint penuh tanpa henti.' },
    { phase: 'Pilot 10 Lab', duration: '1 minggu', desc: 'Uji coba di 10 laboratorium Jakarta. Rapid bugfix berdasarkan feedback petugas lab dan pasien nyata.' },
    { phase: 'Rollout Nasional', duration: '2 minggu', desc: 'Deploy bertahap ke 148+ lab dan klinik di seluruh Indonesia. Training petugas via video call dan modul online.' },
    { phase: 'Optimasi Skala', duration: 'Ongoing', desc: 'Optimasi query database, penambahan queue worker, caching agresif untuk menangani lonjakan 100K+ request/minggu.' },
  ];

  const features = [
    { icon: ClipboardCheck, title: 'Registrasi Online', desc: 'Form registrasi cepat dengan validasi NIK, pilih lokasi, tanggal, dan jenis tes. Antrian otomatis terdistribusi.', color: 'from-green-600 to-emerald-700' },
    { icon: FileText, title: 'Surat Otomatis', desc: 'Generate surat keterangan kesehatan PDF resmi secara otomatis saat hasil lab divalidasi — tanpa intervensi manual.', color: 'from-blue-500 to-indigo-600' },
    { icon: ShieldCheck, title: 'QR Anti-Pemalsuan', desc: 'Setiap surat memiliki QR code unik. Pihak ketiga bisa verifikasi keaslian dokumen secara instan via portal publik.', color: 'from-violet-500 to-purple-600' },
    { icon: MapPin, title: 'Manajemen Lab Nasional', desc: 'Dashboard kapasitas dan antrian real-time untuk 148+ lab. Distribusi otomatis ke lab dengan slot tersedia.', color: 'from-amber-500 to-orange-500' },
    { icon: Activity, title: 'Monitoring Real-time', desc: 'Dashboard nasional: positivity rate, kapasitas lab, tren harian, dan alert otomatis jika lab mendekati kapasitas penuh.', color: 'from-rose-500 to-pink-600' },
    { icon: BarChart3, title: 'Laporan & Epidemiologi', desc: 'Laporan harian untuk manajemen Kimia Farma dan data agregat untuk kebutuhan pelaporan ke Kemenkes.', color: 'from-cyan-500 to-sky-600' },
  ];

  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="bg-white border-b border-gray-100">
        <Container>
          <div className="flex items-center gap-2 py-4 text-sm text-gray-500">
            <Link href="/" className="hover:text-green-700 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/portfolio" className="hover:text-green-700 transition-colors">Portfolio</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Portal Registrasi COVID-19</span>
          </div>
        </Container>
      </div>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-green-950 to-emerald-900">
        <BackgroundPattern variant="grid" opacity={0.06} className="text-white" />
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link href="/portfolio" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm mb-6">
                <ArrowLeft className="w-4 h-4" />
                Kembali ke Portfolio
              </Link>

              <div className="flex flex-wrap gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500/20 border border-green-400/30 rounded-full text-green-300 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" /> Government Health
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-semibold">
                  <Globe className="w-3.5 h-3.5" /> Skala Nasional
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-semibold">
                  <Calendar className="w-3.5 h-3.5" /> 2021
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Portal Registrasi{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                  COVID-19
                </span>
              </h1>
              <p className="text-lg text-white/70 mb-2 font-medium">Sistem Nasional Pemeriksaan & Sertifikasi COVID-19 Kimia Farma</p>
              <p className="text-white/60 mb-8 leading-relaxed">
                Dibangun dalam kondisi darurat pandemi, sistem ini menangani
                <span className="text-green-400 font-bold"> 100.000+ registrasi per minggu</span> di seluruh Indonesia —
                dari antrean digital hingga penerbitan surat kesehatan otomatis untuk 148+ laboratorium Kimia Farma.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#demo">
                  <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-700 hover:opacity-90 text-white shadow-lg shadow-green-900/30">
                    Lihat Demo Interaktif
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    Diskusi Proyek Serupa
                  </Button>
                </Link>
              </div>

              {/* Client badge */}
              <div className="mt-8 inline-flex items-center gap-3 px-4 py-3 bg-white/10 border border-white/20 rounded-xl backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center flex-shrink-0 shadow">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/50">Klien</p>
                  <p className="text-sm font-bold text-white">PT Kimia Farma Diagnostika</p>
                  <p className="text-xs text-green-400 font-medium">148+ Lab & Klinik — Skala Nasional</p>
                </div>
              </div>
            </div>

            {/* Right — certificate mockup */}
            <div className="hidden lg:block">
              <CertificateMockup />
              <p className="text-center text-xs text-white/40 mt-3">Klik "Generate Otomatis" untuk demo penerbitan surat</p>
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

      {/* ── Context Banner ── */}
      <section className="bg-gradient-to-r from-red-700 to-rose-800 py-8">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-4 text-white">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-bold text-lg">Dibangun di Tengah Krisis Pandemi</p>
              <p className="text-white/80 text-sm">
                Proyek ini dieksekusi dalam kondisi darurat nasional. Dari kickoff hingga go-live hanya <strong>4 minggu</strong> —
                saat permintaan tes COVID-19 meledak dan sistem lama total tidak mampu menangani beban.
              </p>
            </div>
            <div className="flex-shrink-0 ml-auto hidden md:flex items-center gap-6 text-center">
              <div>
                <p className="text-2xl font-bold">4</p>
                <p className="text-xs text-white/70">Minggu ke Go-live</p>
              </div>
              <div className="w-px h-12 bg-white/30" />
              <div>
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-xs text-white/70">Development Sprint</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Challenges ── */}
      <section className="bg-gray-50 py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-100 text-red-700 rounded-full text-xs font-bold mb-4">
              <AlertTriangle className="w-3.5 h-3.5" /> Tantangan
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">4 Masalah Kritis yang Harus Dipecahkan</h2>
            <p className="text-gray-500">Di puncak pandemi, setiap jam keterlambatan berdampak langsung pada ribuan pasien dan pengendalian wabah nasional.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {challenges.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Dashboard Demo ── */}
      <section id="demo" className="bg-white py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-bold mb-4">
              <BarChart3 className="w-3.5 h-3.5" /> Platform Preview
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Dashboard Nasional Interaktif</h2>
            <p className="text-gray-500">Klik tab untuk menjelajahi modul Registrasi, Surat Kesehatan, dan Manajemen Lab.</p>
          </div>
          <DashboardMockup />
        </Container>
      </section>

      {/* ── Solution Flow ── */}
      <section className="bg-gray-50 py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-bold mb-4">
              <CheckCircle2 className="w-3.5 h-3.5" /> Alur Solusi
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Dari Registrasi ke Surat — Otomatis</h2>
            <p className="text-gray-500">5 langkah alur yang memotong waktu proses dari 3 hari menjadi kurang dari 2 jam.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {solutions.map((s, i) => (
              <div key={i} className="flex gap-6 mb-6 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center text-white font-bold text-sm shadow flex-shrink-0">
                    {s.step}
                  </div>
                  {i < solutions.length - 1 && <div className="w-px flex-1 bg-gradient-to-b from-emerald-400 to-emerald-100 mt-2" />}
                </div>
                <div className="pb-6 last:pb-0 flex-1">
                  <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all">
                    <h3 className="font-bold text-gray-900 mb-1.5">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Features ── */}
      <section className="bg-white py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-bold mb-4">
              <Layers className="w-3.5 h-3.5" /> Fitur Sistem
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Fitur yang Dibangun</h2>
            <p className="text-gray-500">Didesain untuk high-availability — sistem tidak boleh down saat jutaan orang bergantung padanya.</p>
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
      <section className="bg-gray-50 py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-bold mb-6">
                <Code2 className="w-3.5 h-3.5" /> Technology Stack
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Stack untuk High-Scale</h2>
              <p className="text-gray-500 mb-4 leading-relaxed">
                Dipilih berdasarkan kemampuan menangani beban ekstrem dengan tim kecil dalam waktu singkat.
                Laravel + MySQL + Redis menjadi kombinasi yang terbukti stabil di skala nasional.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-green-700" />
                  <p className="text-sm font-bold text-green-800">Performa di Puncak Beban</p>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    ['Peak request/menit', '~8,000'],
                    ['Rata-rata response time', '<200ms'],
                    ['Queue jobs/hari', '~150,000'],
                    ['Uptime selama pandemi', '99.94%'],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <p className="text-gray-500 text-xs">{k}</p>
                      <p className="font-bold text-green-800">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Backend Laravel + Queues', value: 95 },
                  { label: 'MySQL Optimization', value: 88 },
                  { label: 'Redis Caching', value: 85 },
                  { label: 'PDF Generation & QR', value: 90 },
                ].map((bar) => (
                  <div key={bar.label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-gray-700 font-medium">{bar.label}</span>
                      <span className="text-green-700 font-semibold">{bar.value}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-600 to-emerald-600 rounded-full" style={{ width: `${bar.value}%` }} />
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-bold mb-4">
              <Calendar className="w-3.5 h-3.5" /> Timeline Darurat
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Go-live dalam 4 Minggu</h2>
            <p className="text-gray-500">Pengembangan sprint mode — tidak ada luxury perencanaan panjang saat pandemi menunggu.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-6 mb-6 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center text-white font-bold text-sm shadow flex-shrink-0">
                    {i + 1}
                  </div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-gradient-to-b from-emerald-400 to-emerald-100 mt-2" />}
                </div>
                <div className="pb-6 last:pb-0 flex-1">
                  <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-bold text-gray-900">{t.phase}</h3>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${t.duration === 'Ongoing' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-700'}`}>{t.duration}</span>
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
      <section className="bg-gray-50 py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-green-100 rounded-3xl p-10 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center mb-6 shadow-lg">
                <span className="text-white text-xl font-bold">"</span>
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                "Di tengah tekanan pandemi, Autobot berhasil membangun sistem yang kami butuhkan dalam waktu yang mustahil — 4 minggu.
                Sistem ini berjalan tanpa downtime kritis selama periode paling sibuk, menangani ratusan ribu pasien Kimia Farma
                di seluruh Indonesia. Kami tidak bisa membayangkan bagaimana kami mengelola ini tanpa platform tersebut."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center text-white font-bold text-lg shadow">
                  KF
                </div>
                <div>
                  <p className="font-bold text-gray-900">Tim IT & Operasional</p>
                  <p className="text-gray-500 text-sm">PT Kimia Farma Diagnostika</p>
                  <p className="text-xs text-green-700 font-semibold mt-0.5">148+ Lab Nasional — Pandemi COVID-19</p>
                </div>
                <div className="ml-auto hidden sm:flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center">
                    <Activity className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold text-gray-700">Kimia Farma Diagnostika</p>
                    <p className="text-xs text-gray-400">BUMN Farmasi Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-gradient-to-br from-gray-950 via-green-950 to-emerald-900 py-20 overflow-hidden">
        <BackgroundPattern variant="circuit" opacity={0.07} className="text-white" />
        <Container className="relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm mb-6">
              <Zap className="w-4 h-4 text-green-400" />
              <span className="text-green-300 text-sm font-semibold">High-Scale Government & Enterprise</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Butuh Sistem Berskala Tinggi dengan Deadline Ketat?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Kami berpengalaman membangun sistem kritikal dalam kondisi tekanan tinggi. Dari healthcare hingga government — kami siap.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-700 hover:opacity-90 text-white shadow-lg shadow-green-900/30">
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
