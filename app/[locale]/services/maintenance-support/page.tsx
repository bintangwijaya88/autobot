'use client';

import { useLocale } from 'next-intl';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/sections/Container';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BackgroundPattern, HeroBackground } from '@/components/ui/background-pattern';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Headphones,
  Activity,
  Shield,
  Zap,
  RefreshCw,
  Clock,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Lock,
  BarChart,
  Wrench,
  Server,
  Eye,
  Bell,
} from 'lucide-react';

const content = {
  en: {
    badge: 'Maintenance & Support',
    heroTitle: 'Always-On IT Support & System Maintenance',
    heroDesc: 'Your systems never sleep — neither do we. Proactive monitoring, rapid incident response, and ongoing maintenance to keep your business running at peak performance 24/7.',
    heroCta: 'Get Support Plan',
    heroSecondary: 'Talk to Expert',
    featuresSubtitle: 'What\'s Included',
    featuresTitle: 'Comprehensive Managed Support',
    featuresDesc: 'Everything you need to keep your IT running smoothly, securely, and reliably.',
    plansSubtitle: 'Support Plans',
    plansTitle: 'Choose Your Coverage Level',
    plansDesc: 'Flexible SLA-backed plans for every business size and need.',
    statsTitle: 'Our Service Commitment',
    benefitsSubtitle: 'Why Choose Us',
    benefitsTitle: 'Support You Can Count On',
    processSubtitle: 'How It Works',
    processTitle: 'Our Support Process',
    ctaTitle: 'Don\'t Wait for Systems to Break.',
    ctaDesc: 'Proactive maintenance prevents 80% of critical incidents. Start your support plan today.',
    ctaPrimary: 'Start Support Plan',
    ctaSecondary: 'Schedule Demo',
  },
  id: {
    badge: 'Maintenance & Support',
    heroTitle: 'Support IT & Maintenance Sistem Nonstop',
    heroDesc: 'Sistem Anda tidak pernah tidur — begitu juga kami. Monitoring proaktif, respons insiden cepat, dan pemeliharaan berkelanjutan untuk menjaga bisnis Anda berjalan optimal 24/7.',
    heroCta: 'Dapatkan Paket Support',
    heroSecondary: 'Bicara dengan Ahli',
    featuresSubtitle: 'Yang Termasuk',
    featuresTitle: 'Managed Support Komprehensif',
    featuresDesc: 'Semua yang Anda butuhkan untuk menjaga IT berjalan lancar, aman, dan andal.',
    plansSubtitle: 'Paket Support',
    plansTitle: 'Pilih Tingkat Cakupan Anda',
    plansDesc: 'Paket fleksibel bergaransi SLA untuk semua ukuran dan kebutuhan bisnis.',
    statsTitle: 'Komitmen Layanan Kami',
    benefitsSubtitle: 'Mengapa Kami',
    benefitsTitle: 'Support yang Bisa Diandalkan',
    processSubtitle: 'Cara Kerja',
    processTitle: 'Proses Support Kami',
    ctaTitle: 'Jangan Tunggu Sistem Rusak.',
    ctaDesc: 'Maintenance proaktif mencegah 80% insiden kritis. Mulai paket support Anda hari ini.',
    ctaPrimary: 'Mulai Paket Support',
    ctaSecondary: 'Jadwalkan Demo',
  },
};

export default function MaintenanceSupportPage() {
  const locale = useLocale();
  const c = content[locale as keyof typeof content] ?? content.en;
  const isId = locale === 'id';

  const features = [
    { icon: <Eye className="w-8 h-8 text-white" />, title: isId ? 'Monitoring 24/7' : '24/7 Monitoring', desc: isId ? 'Pemantauan sistem real-time dengan alert otomatis sebelum masalah terjadi' : 'Real-time system monitoring with automated alerts before issues occur' },
    { icon: <Wrench className="w-8 h-8 text-white" />, title: isId ? 'Perbaikan Bug' : 'Bug Fixes', desc: isId ? 'Identifikasi dan perbaikan bug yang cepat dengan SLA yang terjamin' : 'Fast bug identification and fixing with guaranteed SLA response times' },
    { icon: <Shield className="w-8 h-8 text-white" />, title: isId ? 'Security Patch' : 'Security Patching', desc: isId ? 'Update keamanan rutin untuk melindungi dari kerentanan terbaru' : 'Regular security updates to protect against the latest vulnerabilities' },
    { icon: <Zap className="w-8 h-8 text-white" />, title: isId ? 'Optimasi Performa' : 'Performance Optimization', desc: isId ? 'Tuning database, cache, dan infrastruktur untuk kecepatan optimal' : 'Database, caching, and infrastructure tuning for peak speed' },
    { icon: <RefreshCw className="w-8 h-8 text-white" />, title: isId ? 'Update & Upgrade' : 'Updates & Upgrades', desc: isId ? 'Pembaruan dependency, framework, dan library secara terjadwal' : 'Scheduled dependency, framework, and library updates' },
    { icon: <BarChart className="w-8 h-8 text-white" />, title: isId ? 'Laporan Bulanan' : 'Monthly Reports', desc: isId ? 'Laporan performa, uptime, insiden, dan rekomendasi perbaikan' : 'Performance, uptime, incident, and improvement recommendation reports' },
  ];

  const plans = [
    {
      icon: <Bell className="w-12 h-12 text-white" />,
      title: isId ? 'Basic' : 'Basic',
      desc: isId ? 'Maintenance esensial untuk aplikasi non-kritis' : 'Essential maintenance for non-critical applications',
      price: isId ? 'Rp 5.000.000 / bulan' : '$320 / month',
      sla: isId ? 'Respons 24 jam' : '24h response',
      features: isId
        ? ['Monitoring uptime 24/7', 'Security patching bulanan', 'Update dependency', 'Backup mingguan', 'Laporan bulanan', 'Support via email']
        : ['24/7 uptime monitoring', 'Monthly security patching', 'Dependency updates', 'Weekly backups', 'Monthly reports', 'Email support'],
    },
    {
      icon: <Activity className="w-12 h-12 text-white" />,
      title: 'Professional',
      desc: isId ? 'Support lengkap untuk aplikasi bisnis utama' : 'Full support for primary business applications',
      price: isId ? 'Rp 15.000.000 / bulan' : '$950 / month',
      sla: isId ? 'Respons 4 jam' : '4h response',
      featured: true,
      features: isId
        ? ['Semua Basic +', 'Monitoring real-time + alerting', 'Bug fixes & hotfixes', 'Optimasi performa', 'Backup harian', 'Laporan mingguan', 'Support via WhatsApp & email', 'Dedicated engineer']
        : ['All Basic +', 'Real-time monitoring + alerting', 'Bug fixes & hotfixes', 'Performance optimization', 'Daily backups', 'Weekly reports', 'WhatsApp & email support', 'Dedicated engineer'],
    },
    {
      icon: <Server className="w-12 h-12 text-white" />,
      title: 'Enterprise',
      desc: isId ? 'Cakupan penuh untuk sistem mission-critical' : 'Full coverage for mission-critical systems',
      price: isId ? 'Rp 35.000.000 / bulan' : '$2,200 / month',
      sla: isId ? 'Respons 1 jam' : '1h response',
      features: isId
        ? ['Semua Professional +', 'SLA 99.9% uptime guarantee', 'On-call engineer 24/7', 'Disaster recovery testing', 'Penetration testing tahunan', 'Dedicated account manager', 'Review arsitektur kuartalan']
        : ['All Professional +', '99.9% uptime SLA guarantee', '24/7 on-call engineer', 'Disaster recovery testing', 'Annual penetration testing', 'Dedicated account manager', 'Quarterly architecture review'],
    },
  ];

  const stats = [
    { number: '99.9%', label: isId ? 'Uptime Terjamin' : 'Uptime Guaranteed' },
    { number: '< 1h', label: isId ? 'Respons Darurat' : 'Emergency Response' },
    { number: '200+', label: isId ? 'Sistem Dikelola' : 'Systems Managed' },
    { number: '5 tahun', label: isId ? 'Rata-rata Hubungan Klien' : 'Avg. Client Relationship' },
  ];

  const benefits = [
    { icon: <Clock className="w-6 h-6 text-[#116366]" />, title: isId ? 'Hemat Waktu' : 'Save Time', desc: isId ? 'Fokus pada bisnis inti, bukan perbaikan teknis' : 'Focus on core business, not technical firefighting' },
    { icon: <AlertTriangle className="w-6 h-6 text-[#116366]" />, title: isId ? 'Cegah Downtime' : 'Prevent Downtime', desc: isId ? 'Deteksi dan tangani masalah sebelum berdampak ke pengguna' : 'Detect and handle issues before they impact users' },
    { icon: <Lock className="w-6 h-6 text-[#116366]" />, title: isId ? 'Tetap Aman' : 'Stay Secure', desc: isId ? 'Patch keamanan rutin dan pemantauan ancaman' : 'Regular security patches and threat monitoring' },
    { icon: <BarChart className="w-6 h-6 text-[#116366]" />, title: isId ? 'Performa Optimal' : 'Peak Performance', desc: isId ? 'Sistem yang selalu dioptimasi untuk pengalaman terbaik' : 'Systems always optimized for the best experience' },
  ];

  const process = [
    { step: '01', title: isId ? 'Onboarding' : 'Onboarding', desc: isId ? 'Audit sistem, setup monitoring, dan penyerahan akses' : 'System audit, monitoring setup, and access handover', icon: <Wrench className="w-8 h-8" />, color: 'from-blue-500 to-cyan-500' },
    { step: '02', title: isId ? 'Monitoring Aktif' : 'Active Monitoring', desc: isId ? 'Pantau semua sistem 24/7 dengan tool enterprise-grade' : 'Watch all systems 24/7 with enterprise-grade tools', icon: <Eye className="w-8 h-8" />, color: 'from-purple-500 to-pink-500' },
    { step: '03', title: isId ? 'Deteksi Dini' : 'Early Detection', desc: isId ? 'Alert otomatis saat ada anomali atau potensi masalah' : 'Automated alerts when anomalies or potential issues arise', icon: <Bell className="w-8 h-8" />, color: 'from-orange-500 to-red-500' },
    { step: '04', title: isId ? 'Respons Cepat' : 'Fast Response', desc: isId ? 'Tim on-call segera menangani sesuai SLA yang disepakati' : 'On-call team acts immediately per agreed SLA', icon: <Zap className="w-8 h-8" />, color: 'from-green-500 to-emerald-500' },
    { step: '05', title: isId ? 'Resolusi & Root Cause' : 'Resolution & Root Cause', desc: isId ? 'Perbaikan tuntas dan analisis akar masalah' : 'Complete fix and root cause analysis', icon: <CheckCircle className="w-8 h-8" />, color: 'from-yellow-500 to-orange-500' },
    { step: '06', title: isId ? 'Laporan & Review' : 'Report & Review', desc: isId ? 'Laporan insiden dan rekomendasi pencegahan ke depan' : 'Incident reports and future prevention recommendations', icon: <BarChart className="w-8 h-8" />, color: 'from-indigo-500 to-blue-500' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <HeroBackground />
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              <span className="text-white font-semibold text-sm">{c.badge}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{c.heroTitle}</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">{c.heroDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="bg-[#116366] hover:bg-[#0d4d50] text-white group">
                  {c.heroCta} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href={`/${locale}/contact`}>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900">
                  {c.heroSecondary}
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Bar */}
      <div className="bg-[#116366] py-8">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-3xl font-black mb-1">{s.number}</div>
                <div className="text-sm text-white/70">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Features */}
      <Section className="bg-white border-t border-gray-100">
        <Container>
          <SectionHeader subtitle={c.featuresSubtitle} title={c.featuresTitle} description={c.featuresDesc} centered />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }}>
                <Card className="border border-gray-200 hover:shadow-xl transition-all h-full">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center">{f.icon}</div>
                    <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                    <p className="text-gray-500 text-sm">{f.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Plans */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeader subtitle={c.plansSubtitle} title={c.plansTitle} description={c.plansDesc} centered />
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                <Card className={`relative h-full flex flex-col ${(plan as any).featured ? 'border-2 border-[#116366] shadow-xl' : 'border border-gray-200'}`}>
                  {(plan as any).featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-[#116366] text-white text-xs font-bold px-3 py-1 rounded-full">{isId ? 'Paling Populer' : 'Most Popular'}</span>
                    </div>
                  )}
                  <CardHeader>
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center mb-4">{plan.icon}</div>
                    <CardTitle className="text-xl">{plan.title}</CardTitle>
                    <p className="text-gray-500 text-sm">{plan.desc}</p>
                    <div className="text-2xl font-bold text-[#116366] mt-2">{plan.price}</div>
                    <div className="inline-flex items-center gap-1 text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full w-fit">
                      <Clock className="w-3 h-3" /> {plan.sla}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-2 flex-1">
                      {plan.features.map((feat, fi) => (
                        <li key={fi} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#116366] shrink-0 mt-0.5" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/${locale}/contact`} className="mt-6 block">
                      <Button className="w-full" variant={(plan as any).featured ? 'default' : 'outline'}>
                        {isId ? 'Pilih Paket' : 'Choose Plan'}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section className="bg-white">
        <Container>
          <SectionHeader subtitle={c.benefitsSubtitle} title={c.benefitsTitle} description="" centered />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-[#116366]/10 flex items-center justify-center">{b.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeader subtitle={c.processSubtitle} title={c.processTitle} description="" centered />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shrink-0`}>{step.icon}</div>
                  <span className="text-3xl font-black text-gray-100">{step.step}</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="relative bg-gradient-to-br from-[#116366] to-[#0d4d50] text-white overflow-hidden">
        <BackgroundPattern variant="dots" opacity={0.1} className="text-white" />
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.ctaTitle}</h2>
            <p className="text-lg mb-8 text-white/80">{c.ctaDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="bg-white text-[#116366] hover:bg-gray-100">{c.ctaPrimary}</Button>
              </Link>
              <Link href={`/${locale}/contact`}>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#116366]">{c.ctaSecondary}</Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
