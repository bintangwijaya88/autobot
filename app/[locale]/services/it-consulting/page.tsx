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
  Lightbulb,
  BarChart,
  Target,
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Layers,
  Search,
  FileText,
  Zap,
  Headphones,
  Rocket,
  Map,
  RefreshCw,
} from 'lucide-react';

const content = {
  en: {
    badge: 'IT Consulting',
    heroTitle: 'Expert IT Strategy & Digital Transformation',
    heroDesc: 'We help businesses design and execute winning technology strategies. From IT audits to full digital transformation roadmaps — we guide you every step of the way.',
    heroCta: 'Book Free Consultation',
    heroSecondary: 'View Portfolio',
    featuresSubtitle: 'What We Offer',
    featuresTitle: 'Comprehensive IT Consulting Services',
    featuresDesc: 'End-to-end advisory services tailored to your business goals and technology landscape.',
    packagesSubtitle: 'Consulting Packages',
    packagesTitle: 'Choose the Right Engagement',
    packagesDesc: 'Flexible packages designed for businesses at every stage of digital maturity.',
    techSubtitle: 'Our Expertise',
    techTitle: 'Frameworks & Methodologies',
    benefitsSubtitle: 'Why Choose Us',
    benefitsTitle: 'The Autobot Consulting Advantage',
    processSubtitle: 'Our Process',
    processTitle: 'How We Work With You',
    ctaTitle: 'Ready to Transform Your IT Strategy?',
    ctaDesc: 'Book a free 1-hour consultation with our senior IT consultants. No obligation, pure value.',
    ctaPrimary: 'Book Free Consultation',
    ctaSecondary: 'View Case Studies',
  },
  id: {
    badge: 'Konsultasi IT',
    heroTitle: 'Strategi IT & Transformasi Digital Profesional',
    heroDesc: 'Kami membantu bisnis merancang dan mengeksekusi strategi teknologi yang tepat. Dari audit IT hingga roadmap transformasi digital lengkap — kami membimbing setiap langkah Anda.',
    heroCta: 'Konsultasi Gratis',
    heroSecondary: 'Lihat Portofolio',
    featuresSubtitle: 'Layanan Kami',
    featuresTitle: 'Layanan Konsultasi IT Komprehensif',
    featuresDesc: 'Layanan advisory end-to-end yang disesuaikan dengan tujuan bisnis dan lanskap teknologi Anda.',
    packagesSubtitle: 'Paket Konsultasi',
    packagesTitle: 'Pilih Keterlibatan yang Tepat',
    packagesDesc: 'Paket fleksibel yang dirancang untuk bisnis di setiap tahap kematangan digital.',
    techSubtitle: 'Keahlian Kami',
    techTitle: 'Framework & Metodologi',
    benefitsSubtitle: 'Mengapa Kami',
    benefitsTitle: 'Keunggulan Konsultasi Autobot',
    processSubtitle: 'Proses Kami',
    processTitle: 'Cara Kami Bekerja Bersama Anda',
    ctaTitle: 'Siap Mentransformasi Strategi IT Anda?',
    ctaDesc: 'Booking konsultasi gratis 1 jam dengan konsultan IT senior kami. Tanpa kewajiban, murni value.',
    ctaPrimary: 'Booking Konsultasi Gratis',
    ctaSecondary: 'Lihat Studi Kasus',
  },
};

export default function ITConsultingPage() {
  const locale = useLocale();
  const c = (content[locale as keyof typeof content] ?? content.en);
  const isId = locale === 'id';

  const features = [
    { icon: <Search className="w-8 h-8 text-white" />, title: isId ? 'Audit IT' : 'IT Audit', desc: isId ? 'Evaluasi menyeluruh infrastruktur, keamanan, dan proses IT Anda' : 'Comprehensive evaluation of your IT infrastructure, security, and processes' },
    { icon: <Map className="w-8 h-8 text-white" />, title: isId ? 'Roadmap Teknologi' : 'Technology Roadmap', desc: isId ? 'Perencanaan strategis 1–5 tahun untuk investasi teknologi' : '1–5 year strategic planning for technology investments' },
    { icon: <Layers className="w-8 h-8 text-white" />, title: isId ? 'Arsitektur Enterprise' : 'Enterprise Architecture', desc: isId ? 'Desain arsitektur sistem yang scalable dan future-proof' : 'Scalable, future-proof system architecture design' },
    { icon: <RefreshCw className="w-8 h-8 text-white" />, title: isId ? 'Transformasi Digital' : 'Digital Transformation', desc: isId ? 'Strategi dan eksekusi modernisasi bisnis berbasis teknologi' : 'Technology-driven business modernization strategy and execution' },
    { icon: <BarChart className="w-8 h-8 text-white" />, title: isId ? 'Optimasi Proses' : 'Process Optimization', desc: isId ? 'Streamlining proses bisnis dengan otomasi dan best practices' : 'Streamlining business processes with automation and best practices' },
    { icon: <Shield className="w-8 h-8 text-white" />, title: isId ? 'Governance & Compliance' : 'IT Governance & Compliance', desc: isId ? 'Penerapan framework tata kelola IT sesuai regulasi' : 'Implementing IT governance frameworks aligned with regulations' },
  ];

  const packages = [
    {
      icon: <FileText className="w-12 h-12 text-white" />,
      title: isId ? 'Audit IT' : 'IT Health Check',
      desc: isId ? 'Penilaian cepat kondisi IT Anda saat ini' : 'Quick assessment of your current IT state',
      price: isId ? 'Mulai Rp 10.000.000' : 'From $650',
      features: isId
        ? ['Audit infrastruktur (2 minggu)', 'Laporan gap analysis', 'Rekomendasi prioritas', 'Sesi presentasi eksekutif']
        : ['Infrastructure audit (2 weeks)', 'Gap analysis report', 'Priority recommendations', 'Executive presentation'],
    },
    {
      icon: <Map className="w-12 h-12 text-white" />,
      title: isId ? 'Roadmap Digital' : 'Digital Roadmap',
      desc: isId ? 'Perencanaan transformasi digital 12–24 bulan' : '12–24 month digital transformation planning',
      price: isId ? 'Mulai Rp 25.000.000' : 'From $1,600',
      featured: true,
      features: isId
        ? ['Audit IT + analisis bisnis', 'Roadmap 12–24 bulan', 'Business case & ROI', 'Workshop tim internal', 'Review bulanan 3 bulan']
        : ['IT audit + business analysis', '12–24 month roadmap', 'Business case & ROI', 'Internal team workshops', '3-month monthly reviews'],
    },
    {
      icon: <Rocket className="w-12 h-12 text-white" />,
      title: isId ? 'Pendampingan Transformasi' : 'Transformation Advisory',
      desc: isId ? 'Pendampingan penuh selama eksekusi transformasi' : 'Full advisory during transformation execution',
      price: isId ? 'Mulai Rp 60.000.000' : 'From $3,800',
      features: isId
        ? ['Semua paket Roadmap', 'Program Office (PMO)', 'Change management', 'Vendor selection', 'Quarterly business review']
        : ['All Roadmap package items', 'Program Office (PMO)', 'Change management', 'Vendor selection support', 'Quarterly business review'],
    },
  ];

  const frameworks = [
    { category: 'IT Governance', items: ['COBIT 2019', 'ITIL v4', 'ISO 27001', 'ISO 20000', 'TOGAF'] },
    { category: 'Agile & DevOps', items: ['SAFe', 'Scrum', 'Kanban', 'DevSecOps', 'SRE'] },
    { category: 'Cloud Strategy', items: ['AWS Well-Architected', 'Google Cloud CAF', 'Azure CAF', 'Multi-Cloud', 'FinOps'] },
    { category: 'Data & Analytics', items: ['DAMA-DMBOK', 'Data Mesh', 'DataOps', 'Power BI', 'Looker'] },
  ];

  const benefits = [
    { icon: <TrendingUp className="w-6 h-6 text-[#116366]" />, title: isId ? 'ROI Terukur' : 'Measurable ROI', desc: isId ? 'Setiap rekomendasi disertai proyeksi ROI yang realistis' : 'Every recommendation comes with realistic ROI projections' },
    { icon: <Users className="w-6 h-6 text-[#116366]" />, title: isId ? 'Konsultan Senior' : 'Senior Consultants', desc: isId ? 'Tim konsultan berpengalaman 10+ tahun di berbagai industri' : 'Consultants with 10+ years across multiple industries' },
    { icon: <Target className="w-6 h-6 text-[#116366]" />, title: isId ? 'Fokus Lokal' : 'Local Market Focus', desc: isId ? 'Pemahaman mendalam ekosistem bisnis Indonesia' : 'Deep understanding of the Indonesian business ecosystem' },
    { icon: <Zap className="w-6 h-6 text-[#116366]" />, title: isId ? 'Eksekusi Cepat' : 'Fast Execution', desc: isId ? 'Dari assessment ke rekomendasi dalam 2–4 minggu' : 'From assessment to recommendations in 2–4 weeks' },
  ];

  const process = [
    { step: '01', title: isId ? 'Discovery' : 'Discovery', desc: isId ? 'Memahami bisnis, tantangan, dan tujuan Anda' : 'Understand your business, challenges, and goals', icon: <Search className="w-8 h-8" />, color: 'from-blue-500 to-cyan-500' },
    { step: '02', title: isId ? 'Audit & Analisis' : 'Audit & Analysis', desc: isId ? 'Evaluasi mendalam kondisi IT dan gap saat ini' : 'Deep evaluation of current IT state and gaps', icon: <BarChart className="w-8 h-8" />, color: 'from-purple-500 to-pink-500' },
    { step: '03', title: isId ? 'Perancangan Strategi' : 'Strategy Design', desc: isId ? 'Merancang roadmap dan rekomendasi terukur' : 'Design roadmap and measurable recommendations', icon: <Lightbulb className="w-8 h-8" />, color: 'from-orange-500 to-red-500' },
    { step: '04', title: isId ? 'Presentasi' : 'Presentation', desc: isId ? 'Menyampaikan temuan dan rencana ke stakeholder' : 'Deliver findings and plan to stakeholders', icon: <FileText className="w-8 h-8" />, color: 'from-green-500 to-emerald-500' },
    { step: '05', title: isId ? 'Pendampingan' : 'Accompaniment', desc: isId ? 'Mendampingi tim internal selama implementasi' : 'Support internal team during implementation', icon: <Users className="w-8 h-8" />, color: 'from-yellow-500 to-orange-500' },
    { step: '06', title: isId ? 'Review & Iterasi' : 'Review & Iteration', desc: isId ? 'Evaluasi berkala dan penyesuaian strategi' : 'Periodic evaluation and strategy adjustments', icon: <RefreshCw className="w-8 h-8" />, color: 'from-indigo-500 to-blue-500' },
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
              <Link href={`/${locale}/portfolio`}>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900">
                  {c.heroSecondary}
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <Section className="bg-white border-t border-gray-100">
        <Container>
          <SectionHeader subtitle={c.featuresSubtitle} title={c.featuresTitle} description={c.featuresDesc} centered />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }}>
                <Card className="border border-gray-200 hover:shadow-xl transition-all h-full">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center">
                      {f.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                    <p className="text-gray-500 text-sm">{f.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Packages */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeader subtitle={c.packagesSubtitle} title={c.packagesTitle} description={c.packagesDesc} centered />
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                <Card className={`relative h-full flex flex-col ${(pkg as any).featured ? 'border-2 border-[#116366] shadow-xl' : 'border border-gray-200'}`}>
                  {(pkg as any).featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-[#116366] text-white text-xs font-bold px-3 py-1 rounded-full">{isId ? 'Paling Populer' : 'Most Popular'}</span>
                    </div>
                  )}
                  <CardHeader>
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center mb-4">{pkg.icon}</div>
                    <CardTitle className="text-xl">{pkg.title}</CardTitle>
                    <p className="text-gray-500 text-sm">{pkg.desc}</p>
                    <div className="text-2xl font-bold text-[#116366] mt-2">{pkg.price}</div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-2 flex-1">
                      {pkg.features.map((feat, fi) => (
                        <li key={fi} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#116366] shrink-0 mt-0.5" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/${locale}/contact`} className="mt-6 block">
                      <Button className={`w-full ${(pkg as any).featured ? 'bg-[#116366] hover:bg-[#0d4d50] text-white' : 'border-[#116366] text-[#116366] hover:bg-[#116366] hover:text-white'}`} variant={(pkg as any).featured ? 'default' : 'outline'}>
                        {isId ? 'Mulai Sekarang' : 'Get Started'}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Frameworks */}
      <Section className="bg-white">
        <Container>
          <SectionHeader subtitle={c.techSubtitle} title={c.techTitle} description="" centered />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {frameworks.map((stack, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h4 className="font-bold text-gray-800 mb-3 text-sm">{stack.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((tech, ti) => (
                    <span key={ti} className="text-xs bg-white border border-gray-200 text-gray-600 px-2 py-1 rounded-md">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeader subtitle={c.benefitsSubtitle} title={c.benefitsTitle} description="" centered />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-[#116366]/10 flex items-center justify-center">{b.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="bg-white">
        <Container>
          <SectionHeader subtitle={c.processSubtitle} title={c.processTitle} description="" centered />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, i) => (
              <div key={i} className="relative bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
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
              <Link href={`/${locale}/portfolio`}>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#116366]">{c.ctaSecondary}</Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
