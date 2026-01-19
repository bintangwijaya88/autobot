'use client';

import { Section } from '@/components/sections/Section';
import { Container } from '@/components/sections/Container';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { ProcessFlow } from '@/components/sections/ProcessFlow';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BackgroundPattern, HeroBackground } from '@/components/ui/background-pattern';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Zap,
  Users,
  Shield,
  CheckCircle,
  ArrowRight,
  Globe,
  ShoppingBag,
  Gamepad2,
  HeartPulse,
  GraduationCap,
  Wallet,
  Palette,
  Cog,
  TestTube,
  Rocket,
  Headphones,
  Sparkles,
  Target,
  Clock,
  DollarSign,
  Award,
  Star,
  TrendingUp,
  Download,
  ChevronDown,
  Code,
  Layers,
  Database,
  Cloud,
} from 'lucide-react';
import { useState } from 'react';

export default function MobileAppDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    {
      icon: <Smartphone className="w-8 h-8 text-white" />,
      value: '200+',
      label: 'Apps Diluncurkan',
      description: 'Mobile apps sukses di App Store & Play Store',
    },
    {
      icon: <Star className="w-8 h-8 text-white" />,
      value: '4.8/5',
      label: 'Rating Rata-rata',
      description: 'User satisfaction dari apps yang kami develop',
    },
    {
      icon: <Download className="w-8 h-8 text-white" />,
      value: '5M+',
      label: 'Total Downloads',
      description: 'Gabungan downloads dari semua apps klien',
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      value: '60%',
      label: 'Lebih Cepat',
      description: 'Development time dengan cross-platform approach',
    },
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6 text-[#116366]" />,
      title: 'Reach Wider Audience',
      description: 'Jangkau pengguna iOS dan Android sekaligus dengan satu codebase, hemat waktu dan biaya development hingga 60%.',
    },
    {
      icon: <Zap className="w-6 h-6 text-[#116366]" />,
      title: 'Faster Time to Market',
      description: 'Launching lebih cepat dengan agile methodology dan cross-platform framework seperti Flutter & React Native.',
    },
    {
      icon: <DollarSign className="w-6 h-6 text-[#116366]" />,
      title: 'Cost Effective',
      description: 'Hemat hingga 40% biaya development dengan pendekatan cross-platform tanpa mengorbankan kualitas dan performa.',
    },
    {
      icon: <Users className="w-6 h-6 text-[#116366]" />,
      title: 'Better User Engagement',
      description: 'Push notifications, offline mode, dan native features meningkatkan user engagement hingga 3x lipat.',
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#116366]" />,
      title: 'Scalable Architecture',
      description: 'Arsitektur yang solid dan scalable memastikan app Anda siap berkembang seiring pertumbuhan bisnis.',
    },
    {
      icon: <Shield className="w-6 h-6 text-[#116366]" />,
      title: 'Enterprise Security',
      description: 'Implementasi security best practices: encryption, secure APIs, authentication, dan compliance standards.',
    },
  ];

  const caseStudies = [
    {
      industry: 'E-Commerce',
      company: 'Fashion Marketplace',
      challenge: 'Website conversion rate rendah, user prefer mobile shopping',
      solution: 'Flutter E-Commerce App dengan AR Try-On',
      results: [
        '250% peningkatan mobile conversion',
        '85% user retention dalam 3 bulan',
        '4.9/5 rating di App Store & Play Store',
        '500K downloads dalam 6 bulan',
      ],
      icon: <ShoppingBag className="w-12 h-12 text-white" />,
    },
    {
      industry: 'Healthcare',
      company: 'Telemedicine Platform',
      challenge: 'Butuh video consultation yang stable dan HIPAA compliant',
      solution: 'React Native Telemedicine App',
      results: [
        '50K+ konsultasi per bulan',
        '95% video call success rate',
        'HIPAA & compliance certified',
        'Integration dengan 100+ hospitals',
      ],
      icon: <HeartPulse className="w-12 h-12 text-white" />,
    },
    {
      industry: 'Fintech',
      company: 'Digital Wallet',
      challenge: 'User trust dan security concerns untuk financial app',
      solution: 'Native iOS & Android Banking App',
      results: [
        'Bank-grade security implementation',
        '1M+ active users',
        'OJK certified & compliant',
        '99.9% uptime achievement',
      ],
      icon: <Wallet className="w-12 h-12 text-white" />,
    },
  ];

  const faqs = [
    {
      question: 'Berapa lama waktu yang dibutuhkan untuk develop mobile app?',
      answer: 'Waktu development bervariasi tergantung kompleksitas. Simple app (MVP) dapat diselesaikan dalam 2-3 bulan. Medium complexity app membutuhkan 3-5 bulan, sementara complex app dengan banyak fitur bisa 6-9 bulan. Kami akan provide timeline detail setelah requirement analysis.',
    },
    {
      question: 'Lebih baik Native atau Cross-Platform untuk app saya?',
      answer: 'Cross-Platform (Flutter/React Native) cocok untuk mayoritas use cases, menghemat 40-60% biaya dan waktu. Native development (Swift/Kotlin) recommended jika app membutuhkan performance ekstrim, akses ke native APIs yang belum support di cross-platform, atau jika hanya target 1 platform. Kami akan advise pendekatan terbaik based on requirements Anda.',
    },
    {
      question: 'Apakah harga sudah termasuk publish ke App Store & Play Store?',
      answer: 'Ya, harga development kami include: UI/UX design, development, testing, App Store & Play Store submission, dan 3 bulan post-launch support. Yang tidak include: Apple Developer Account ($99/year) dan Google Play Developer Account ($25 one-time) yang harus didaftarkan atas nama Anda.',
    },
    {
      question: 'Bagaimana jika saya ingin update atau tambah fitur setelah launch?',
      answer: 'Kami menyediakan beberapa opsi: (1) Hourly rate untuk minor updates & bug fixes, (2) Monthly retainer untuk continuous development, (3) Project-based untuk major features. Semua apps dibuat dengan clean architecture untuk memudahkan future enhancements. Kami juga provide documentation lengkap.',
    },
    {
      question: 'Apakah saya akan mendapat source code aplikasinya?',
      answer: 'Ya, tentu saja! Setelah full payment, Anda akan mendapatkan: complete source code, design files (Figma), documentation, dan full ownership rights. Kami juga provide knowledge transfer session jika Anda punya internal team yang akan maintain app tersebut.',
    },
    {
      question: 'Bagaimana dengan maintenance dan bug fixing setelah launch?',
      answer: 'Semua project include 3 bulan post-launch support gratis untuk bug fixing dan minor adjustments. Setelah itu, kami offer maintenance packages mulai dari Rp 5jt/bulan yang include: monitoring, bug fixes, OS updates compatibility, minor enhancements, dan monthly reports.',
    },
  ];

  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Cross-Platform Development',
      description: 'Build once, deploy everywhere with Flutter and React Native',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Native Performance',
      description: 'Lightning-fast apps with native-like performance and smooth animations',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Reliable',
      description: 'Industry-standard security with encrypted data and secure authentication',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'User-Centric Design',
      description: 'Intuitive UI/UX following iOS and Android design guidelines',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Offline Capability',
      description: 'Apps that work seamlessly even without internet connection',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'App Store Ready',
      description: 'Full support for App Store and Play Store submission',
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  const solutions = [
    {
      icon: <ShoppingBag className="w-12 h-12 text-white" />,
      title: 'E-Commerce Mobile App',
      description: 'Full-featured shopping app with payment integration',
      price: 'From Rp 45.000.000',
      features: ['Product Catalog', 'Shopping Cart', 'Payment Gateway', 'Order Tracking', 'Push Notifications'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Gamepad2 className="w-12 h-12 text-white" />,
      title: 'Social & Entertainment',
      description: 'Social networking, gaming, and entertainment apps',
      price: 'From Rp 60.000.000',
      features: ['User Profiles', 'Social Feed', 'Real-time Chat', 'Media Sharing', 'In-app Purchases'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <HeartPulse className="w-12 h-12 text-white" />,
      title: 'Health & Fitness',
      description: 'Healthcare, telemedicine, and fitness tracking apps',
      price: 'From Rp 50.000.000',
      features: ['Appointment Booking', 'Health Tracking', 'Prescription Management', 'Video Consultation', 'Wearable Integration'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-white" />,
      title: 'Education & E-Learning',
      description: 'Interactive learning platforms and course management',
      price: 'From Rp 40.000.000',
      features: ['Course Catalog', 'Video Lessons', 'Quizzes & Tests', 'Progress Tracking', 'Certificates'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Wallet className="w-12 h-12 text-white" />,
      title: 'Fintech & Banking',
      description: 'Mobile banking, payment, and financial management apps',
      price: 'From Rp 75.000.000',
      features: ['Account Management', 'Transfers', 'Bill Payments', 'Investment Tracking', 'Security Features'],
      gradient: 'from-indigo-500 to-blue-500',
    },
  ];

  const techStack = [
    { category: 'Cross-Platform', techs: ['Flutter', 'React Native', 'Dart', 'TypeScript', 'JavaScript'] },
    { category: 'Native iOS', techs: ['Swift', 'SwiftUI', 'Objective-C', 'Xcode', 'CocoaPods'] },
    { category: 'Native Android', techs: ['Kotlin', 'Jetpack Compose', 'Java', 'Android Studio', 'Gradle'] },
    { category: 'Backend & Cloud', techs: ['Firebase', 'AWS', 'Node.js', 'REST APIs', 'GraphQL'] },
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      desc: 'Discuss your app idea and requirements',
      icon: <Users className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '02',
      title: 'UI/UX Design',
      desc: 'Create wireframes and interactive prototypes',
      icon: <Palette className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '03',
      title: 'Development',
      desc: 'Build the app with agile methodology',
      icon: <Cog className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      step: '04',
      title: 'Testing',
      desc: 'Rigorous testing on multiple devices',
      icon: <TestTube className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: '05',
      title: 'Deployment',
      desc: 'App Store and Play Store submission',
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      step: '06',
      title: 'Maintenance',
      desc: 'Ongoing support and updates',
      icon: <Headphones className="w-8 h-8" />,
      color: 'from-indigo-500 to-blue-500'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <HeroBackground />
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#116366]/10 to-[#14b8a6]/10 rounded-full mb-6 border border-[#116366]/20">
                <Sparkles className="w-4 h-4 text-[#116366]" />
                <span className="text-[#116366] font-semibold text-sm">Mobile App Development</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                Aplikasi Mobile
                <span className="bg-gradient-to-r from-[#116366] to-[#14b8a6] bg-clip-text text-transparent"> iOS & Android</span> yang Powerful
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Dari konsep hingga App Store - kami develop mobile apps berkualitas tinggi dengan
                <strong> Flutter</strong>, <strong>React Native</strong>, dan <strong>Native</strong> development.
                Sudah <strong>200+ apps</strong> diluncurkan dengan rating rata-rata <strong>4.8/5</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#116366] hover:bg-[#0d4d50] text-white group">
                    Konsultasi Gratis
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline" className="border-[#116366] text-[#116366] hover:bg-[#116366] hover:text-white">
                    Lihat Portfolio Apps
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#14b8a6]" />
                  <span>200+ Apps Launched</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#14b8a6]" />
                  <span>4.8/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#14b8a6]" />
                  <span>5M+ Downloads</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#116366]/20 to-[#14b8a6]/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                        <Smartphone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Cross-Platform</h3>
                        <p className="text-sm text-gray-600">Flutter & React Native - 1 code, 2 platform</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Native Development</h3>
                        <p className="text-sm text-gray-600">Swift & Kotlin untuk performa maksimal</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                        <Rocket className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">App Store Ready</h3>
                        <p className="text-sm text-gray-600">Full support hingga publish & marketing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section className="bg-gradient-to-br from-[#116366] via-[#14b8a6] to-[#0d9488] text-white">
        <Container>
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Angka Bicara Lebih Keras
              </h2>
              <p className="text-xl text-white/90">
                Track record kami dalam mobile app development
              </p>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <p className="text-white/80 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-white">
        <BackgroundPattern variant="dots" opacity={0.04} />
        <Container className="relative z-10">
          <SectionHeader
            subtitle="Keuntungan"
            title="Kenapa Pilih Mobile App Development Kami?"
            description="Manfaat yang Anda dapatkan dengan mengembangkan mobile app bersama kami."
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-[#116366]/10 flex items-center justify-center mb-3 group-hover:bg-[#116366] group-hover:scale-110 transition-all duration-300">
                      <div className="group-hover:text-white transition-colors">
                        {benefit.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg mb-2">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Features */}
      <Section className="bg-gray-50">
        <BackgroundPattern variant="dots" opacity={0.04} />
        <Container className="relative z-10">
          <SectionHeader
            subtitle="Why Choose Us"
            title="Mobile Development Excellence"
            description="We combine technical expertise with user-centric design to create apps that users love."
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 border-none h-full">
                  <CardHeader>
                    <motion.div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 text-white`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Solutions & Packages */}
      <Section className="bg-white">
        <BackgroundPattern variant="grid" opacity={0.03} />
        <Container className="relative z-10">
          <SectionHeader
            subtitle="Our Packages"
            title="Mobile App Solutions"
            description="Choose from our pre-designed packages or request a custom solution tailored to your needs."
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-2xl transition-all duration-300 border-none h-full">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-4`}>
                      {solution.icon}
                    </div>
                    <CardTitle className="text-xl mb-2">{solution.title}</CardTitle>
                    <CardDescription className="text-gray-600 mb-4">{solution.description}</CardDescription>
                    <div className="text-2xl font-bold text-[#116366]">{solution.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-5 h-5 text-[#14b8a6] flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Case Studies */}
      <Section className="bg-gray-50">
        <BackgroundPattern variant="circuit" opacity={0.025} />
        <Container className="relative z-10">
          <SectionHeader
            subtitle="Success Stories"
            title="Aplikasi Mobile yang Sukses di Market"
            description="Kisah sukses klien yang telah meluncurkan apps bersama kami."
            centered
          />
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  <div className="bg-gradient-to-br from-[#116366] to-[#14b8a6] p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        {study.icon}
                      </div>
                      <span className="text-white/90 text-sm font-semibold px-3 py-1 bg-white/20 rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">{study.company}</h3>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 font-semibold uppercase mb-2">Tantangan</p>
                      <p className="text-gray-700 text-sm">{study.challenge}</p>
                    </div>
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 font-semibold uppercase mb-2">Solusi</p>
                      <p className="text-[#116366] font-semibold text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase mb-3">Hasil</p>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <Sparkles className="w-4 h-4 text-[#14b8a6] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Tech Stack */}
      <Section className="bg-white">
        <BackgroundPattern variant="circuit" opacity={0.025} />
        <Container className="relative z-10">
          <SectionHeader
            subtitle="Technologies"
            title="Our Tech Stack"
            description="We use the latest and most reliable technologies for mobile app development."
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-[#116366]">{stack.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {stack.techs.map((tech, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#14b8a6]" />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="bg-gray-50">
        <BackgroundPattern variant="lines" opacity={0.02} />
        <Container className="relative z-10">
          <SectionHeader
            subtitle="Our Process"
            title="How We Work"
            description="From idea to App Store, we follow a proven process to deliver exceptional mobile apps."
            centered
          />

          <ProcessFlow steps={process} />
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-white">
        <BackgroundPattern variant="dots" opacity={0.03} />
        <Container className="relative z-10">
          <SectionHeader
            subtitle="FAQ"
            title="Pertanyaan yang Sering Diajukan"
            description="Jawaban untuk pertanyaan umum tentang mobile app development."
            centered
          />
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className="border-none shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-lg font-semibold text-gray-900 flex-1">
                        {faq.question}
                      </CardTitle>
                      <motion.div
                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="w-5 h-5 text-[#116366]" />
                      </motion.div>
                    </div>
                  </CardHeader>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? 'auto' : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <CardContent className="pt-0 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-gray-900 via-[#116366] to-[#0d4d50] text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Siap Luncurkan Mobile App Anda?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Mari diskusikan project Anda dan ciptakan sesuatu yang luar biasa bersama-sama.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-[#116366] hover:bg-gray-100">
                    Mulai Project Sekarang
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#116366]">
                    Lihat Portfolio Apps
                  </Button>
                </Link>
              </div>
              <p className="mt-8 text-white/70 text-sm">
                💡 Free Consultation & UI/UX Design Preview untuk project pertama Anda
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  );
}
