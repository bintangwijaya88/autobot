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
  Code,
  Database,
  Layers,
  Zap,
  Shield,
  Users,
  CheckCircle,
  ArrowRight,
  Cog,
  BarChart,
  GitBranch,
  TestTube,
  Rocket,
  Headphones,
  Search,
  Palette,
} from 'lucide-react';

const content = {
  en: {
    badge: 'Custom Software',
    heroTitle: 'Software Built Exactly for Your Business',
    heroDesc: 'Off-the-shelf software doesn\'t fit your unique workflows. We build bespoke applications — from internal tools to full enterprise platforms — precisely tailored to how you work.',
    heroCta: 'Discuss Your Project',
    heroSecondary: 'View Portfolio',
    featuresSubtitle: 'Our Capabilities',
    featuresTitle: 'Full-Cycle Custom Development',
    featuresDesc: 'From requirements to deployment and beyond, we own every phase of your software.',
    packagesSubtitle: 'Project Types',
    packagesTitle: 'What We Build',
    packagesDesc: 'From internal tools to complex enterprise platforms — all custom-built to your specs.',
    techSubtitle: 'Tech Stack',
    techTitle: 'Technologies We Use',
    benefitsSubtitle: 'Why Custom?',
    benefitsTitle: 'The Custom Software Advantage',
    processSubtitle: 'How We Build',
    processTitle: 'Our Development Process',
    ctaTitle: 'Have a Software Idea? Let\'s Build It.',
    ctaDesc: 'Share your requirements and get a detailed proposal with timeline and cost estimate within 48 hours.',
    ctaPrimary: 'Get Free Proposal',
    ctaSecondary: 'View Case Studies',
  },
  id: {
    badge: 'Software Custom',
    heroTitle: 'Software yang Dibangun Tepat untuk Bisnis Anda',
    heroDesc: 'Software off-the-shelf tidak cocok untuk workflow unik Anda. Kami membangun aplikasi bespoke — dari tools internal hingga platform enterprise penuh — yang disesuaikan persis dengan cara kerja Anda.',
    heroCta: 'Diskusikan Proyek Anda',
    heroSecondary: 'Lihat Portofolio',
    featuresSubtitle: 'Kemampuan Kami',
    featuresTitle: 'Pengembangan Custom Full-Cycle',
    featuresDesc: 'Dari requirements hingga deployment dan seterusnya, kami mengelola setiap fase software Anda.',
    packagesSubtitle: 'Tipe Proyek',
    packagesTitle: 'Apa yang Kami Bangun',
    packagesDesc: 'Dari tools internal hingga platform enterprise kompleks — semua dibangun custom sesuai spesifikasi Anda.',
    techSubtitle: 'Tech Stack',
    techTitle: 'Teknologi yang Kami Gunakan',
    benefitsSubtitle: 'Mengapa Custom?',
    benefitsTitle: 'Keunggulan Software Custom',
    processSubtitle: 'Cara Kami Membangun',
    processTitle: 'Proses Pengembangan Kami',
    ctaTitle: 'Punya Ide Software? Mari Bangun Bersama.',
    ctaDesc: 'Bagikan kebutuhan Anda dan dapatkan proposal detail dengan timeline dan estimasi biaya dalam 48 jam.',
    ctaPrimary: 'Dapatkan Proposal Gratis',
    ctaSecondary: 'Lihat Studi Kasus',
  },
};

export default function CustomSoftwarePage() {
  const locale = useLocale();
  const c = content[locale as keyof typeof content] ?? content.en;
  const isId = locale === 'id';

  const features = [
    { icon: <Search className="w-8 h-8 text-white" />, title: isId ? 'Analisis Requirements' : 'Requirements Analysis', desc: isId ? 'Penggalian kebutuhan mendalam untuk memastikan solusi tepat sasaran' : 'Deep requirements gathering to ensure the solution hits the mark' },
    { icon: <Palette className="w-8 h-8 text-white" />, title: isId ? 'Desain UI/UX' : 'UI/UX Design', desc: isId ? 'Antarmuka yang intuitif dan pengalaman pengguna yang menyenangkan' : 'Intuitive interfaces and delightful user experiences' },
    { icon: <Code className="w-8 h-8 text-white" />, title: isId ? 'Pengembangan Agile' : 'Agile Development', desc: isId ? 'Sprint 2 mingguan dengan demo rutin dan umpan balik berkelanjutan' : 'Bi-weekly sprints with regular demos and continuous feedback' },
    { icon: <Database className="w-8 h-8 text-white" />, title: isId ? 'Integrasi & API' : 'Integration & APIs', desc: isId ? 'Koneksi mulus dengan sistem dan layanan pihak ketiga yang ada' : 'Seamless connections to existing systems and third-party services' },
    { icon: <TestTube className="w-8 h-8 text-white" />, title: isId ? 'QA & Testing' : 'QA & Testing', desc: isId ? 'Pengujian otomatis dan manual yang komprehensif sebelum rilis' : 'Comprehensive automated and manual testing before release' },
    { icon: <Shield className="w-8 h-8 text-white" />, title: isId ? 'Security-First' : 'Security-First', desc: isId ? 'Praktik keamanan bawaan di setiap lapisan aplikasi' : 'Built-in security practices at every layer of the application' },
  ];

  const packages = [
    {
      icon: <Cog className="w-12 h-12 text-white" />,
      title: isId ? 'Tools Internal' : 'Internal Tools',
      desc: isId ? 'Dashboard, alat manajemen, dan otomasi internal' : 'Dashboards, management tools, and internal automation',
      price: isId ? 'Mulai Rp 30.000.000' : 'From $2,000',
      features: isId
        ? ['Dashboard admin kustom', 'Manajemen data & pelaporan', 'Notifikasi & workflow', 'Role-based access control', 'Integrasi dengan sistem yang ada']
        : ['Custom admin dashboard', 'Data management & reporting', 'Notifications & workflows', 'Role-based access control', 'Integration with existing systems'],
    },
    {
      icon: <BarChart className="w-12 h-12 text-white" />,
      title: isId ? 'Platform Bisnis' : 'Business Platform',
      desc: isId ? 'CRM, ERP, atau platform operasional kustom' : 'Custom CRM, ERP, or operational platform',
      price: isId ? 'Mulai Rp 75.000.000' : 'From $5,000',
      featured: true,
      features: isId
        ? ['Modul kustom sesuai proses bisnis', 'Multi-user & multi-role', 'Laporan & analytics canggih', 'Mobile app companion', 'Integrasi payment & third-party']
        : ['Custom modules matching your processes', 'Multi-user & multi-role', 'Advanced reports & analytics', 'Mobile app companion', 'Payment & third-party integrations'],
    },
    {
      icon: <Layers className="w-12 h-12 text-white" />,
      title: isId ? 'Platform Enterprise' : 'Enterprise Platform',
      desc: isId ? 'Solusi berskala besar untuk organisasi kompleks' : 'Large-scale solution for complex organizations',
      price: isId ? 'Mulai Rp 200.000.000' : 'From $13,000',
      features: isId
        ? ['Arsitektur microservices', 'Multi-tenant capability', 'High availability & DR', 'Advanced security & audit trail', 'Dedicated scrum team']
        : ['Microservices architecture', 'Multi-tenant capability', 'High availability & DR', 'Advanced security & audit trail', 'Dedicated scrum team'],
    },
  ];

  const techStack = [
    { category: 'Backend', items: ['Node.js', 'Python / Django', 'Go', 'Java / Spring', 'PHP / Laravel'] },
    { category: 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Database', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'] },
    { category: 'DevOps & Cloud', items: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions', 'Terraform'] },
  ];

  const benefits = [
    { icon: <Zap className="w-6 h-6 text-[#116366]" />, title: isId ? 'Fit 100%' : '100% Fit', desc: isId ? 'Dibangun persis untuk proses bisnis Anda, bukan workaround' : 'Built exactly for your business processes, no workarounds' },
    { icon: <Layers className="w-6 h-6 text-[#116366]" />, title: isId ? 'Scalable' : 'Scalable', desc: isId ? 'Arsitektur yang tumbuh bersama bisnis Anda' : 'Architecture that grows with your business' },
    { icon: <GitBranch className="w-6 h-6 text-[#116366]" />, title: isId ? 'Kode Milik Anda' : 'You Own the Code', desc: isId ? 'Source code sepenuhnya milik Anda, tanpa vendor lock-in' : 'Source code fully yours, zero vendor lock-in' },
    { icon: <Users className="w-6 h-6 text-[#116366]" />, title: isId ? 'Tim Dedicated' : 'Dedicated Team', desc: isId ? 'Satu tim yang memahami bisnis dan sistem Anda secara mendalam' : 'One team that deeply understands your business and system' },
  ];

  const process = [
    { step: '01', title: isId ? 'Discovery & Scoping' : 'Discovery & Scoping', desc: isId ? 'Workshop requirements dan definisi ruang lingkup proyek' : 'Requirements workshop and project scope definition', icon: <Search className="w-8 h-8" />, color: 'from-blue-500 to-cyan-500' },
    { step: '02', title: isId ? 'Desain & Prototyping' : 'Design & Prototyping', desc: isId ? 'Wireframe dan prototype interaktif untuk validasi awal' : 'Wireframes and interactive prototype for early validation', icon: <Palette className="w-8 h-8" />, color: 'from-purple-500 to-pink-500' },
    { step: '03', title: isId ? 'Development Agile' : 'Agile Development', desc: isId ? 'Sprint 2 mingguan dengan demo dan feedback loop' : 'Bi-weekly sprints with demos and feedback loops', icon: <Code className="w-8 h-8" />, color: 'from-orange-500 to-red-500' },
    { step: '04', title: 'QA & Testing', desc: isId ? 'Pengujian menyeluruh sebelum setiap rilis ke produksi' : 'Thorough testing before every production release', icon: <TestTube className="w-8 h-8" />, color: 'from-green-500 to-emerald-500' },
    { step: '05', title: isId ? 'Deployment' : 'Deployment', desc: isId ? 'Peluncuran terkontrol dengan monitoring dan rollback plan' : 'Controlled launch with monitoring and rollback plan', icon: <Rocket className="w-8 h-8" />, color: 'from-yellow-500 to-orange-500' },
    { step: '06', title: isId ? 'Support & Evolusi' : 'Support & Evolution', desc: isId ? 'Pemeliharaan berkelanjutan dan pengembangan fitur baru' : 'Ongoing maintenance and new feature development', icon: <Headphones className="w-8 h-8" />, color: 'from-indigo-500 to-blue-500' },
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
                      <Button className="w-full" variant={(pkg as any).featured ? 'default' : 'outline'}>
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

      {/* Tech Stack */}
      <Section className="bg-white">
        <Container>
          <SectionHeader subtitle={c.techSubtitle} title={c.techTitle} description="" centered />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, i) => (
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
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
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
