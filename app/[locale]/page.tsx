'use client';

import { Stats } from '@/components/sections/Stats';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/sections/Container';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BackgroundPattern } from '@/components/ui/background-pattern';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import {
  Code,
  Smartphone,
  Brain,
  Cloud,
  Shield,
  Cpu,
  CheckCircle,
  ArrowRight,
  Star,
  Building2,
  GraduationCap,
  Hospital,
  ShoppingCart,
  Globe,
  MapPin,
  Users,
  Award,
  TrendingUp,
  DollarSign,
  Headphones,
  Handshake,
  Lightbulb,
  Quote,
  User,
  Eye,
} from 'lucide-react';

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();
  const countries = [
    {
      flag: '🇮🇩',
      name: 'Indonesia',
      code: 'id',
      description: 'Headquartered in Indonesia, serving local businesses with deep market understanding',
      flagCode: 'id'
    },
    {
      flag: '🇲🇾',
      name: 'Malaysia',
      code: 'ms',
      description: 'Expanding services to Malaysian market with regional expertise',
      flagCode: 'my'
    },
    {
      flag: '🇺🇸',
      name: 'Global',
      code: 'en',
      description: 'International services with English support for global clients',
      flagCode: 'us'
    },
    {
      flag: '🇸🇦',
      name: 'Saudi Arabia',
      code: 'ar',
      description: 'Native Arabic support for Middle East markets',
      flagCode: 'sa'
    },
    {
      flag: '🇻🇳',
      name: 'Vietnam',
      code: 'vi',
      description: 'Growing presence in Vietnamese technology sector',
      flagCode: 'vn'
    },
    {
      flag: '🇯🇵',
      name: 'Japan',
      code: 'ja',
      description: 'Japanese language support for Asian markets',
      flagCode: 'jp'
    },
    {
      flag: '🇵🇭',
      name: 'Philippines',
      code: 'fil',
      description: 'Filipino and English support for Philippine clients',
      flagCode: 'ph'
    },
    {
      flag: '🇹🇭',
      name: 'Thailand',
      code: 'th',
      description: 'Thai language support for Southeast Asian expansion',
      flagCode: 'th'
    },
  ];

  const stats = [
    { number: '150', suffix: '+', label: t('home.stats.projects') },
    { number: '75', suffix: '+', label: t('home.stats.clients') },
    { number: '12', suffix: '+', label: t('home.stats.industries') },
    { number: '98', suffix: '%', label: t('home.stats.satisfaction') },
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: t('services.webDevelopment.name'),
      description: t('services.webDevelopment.shortDescription'),
      href: `/${locale}/services/web-development`,
    },
    {
      icon: <Smartphone className="w-8 h-8 text-white" />,
      title: t('services.mobileApp.name'),
      description: t('services.mobileApp.shortDescription'),
      href: `/${locale}/services/mobile-app-development`,
    },
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: t('services.aiSolutions.name'),
      description: t('services.aiSolutions.shortDescription'),
      href: `/${locale}/services/ai-solutions`,
    },
    {
      icon: <Cpu className="w-8 h-8 text-white" />,
      title: t('services.iot.name'),
      description: t('services.iot.shortDescription'),
      href: `/${locale}/services/iot-solutions`,
    },
    {
      icon: <Cloud className="w-8 h-8 text-white" />,
      title: t('services.cloud.name'),
      description: t('services.cloud.shortDescription'),
      href: `/${locale}/services/cloud-solutions`,
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: t('services.cybersecurity.name'),
      description: t('services.cybersecurity.shortDescription'),
      href: `/${locale}/services/cybersecurity`,
    },
  ];

  // Helper function for pricing based on locale
  const getPrice = (idrPrice: number) => {
    if (locale === 'id') {
      return `Mulai dari Rp ${(idrPrice / 1000000).toFixed(0)}.000.000`;
    } else {
      const usdPrice = Math.round(idrPrice / 15700 / 100) * 100; // Round to nearest 100
      return `From $${usdPrice.toLocaleString()}`;
    }
  };

  const solutions = [
    {
      icon: <Building2 className="w-12 h-12 text-[#116366]" />,
      title: t('solutions.corporate.name'),
      description: t('solutions.corporate.description'),
      features: [
        t('solutions.corporate.features.0'),
        t('solutions.corporate.features.1'),
        t('solutions.corporate.features.2'),
        t('solutions.corporate.features.3'),
      ],
      price: getPrice(15000000),
      href: `/${locale}/solutions/corporate`,
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-[#116366]" />,
      title: t('solutions.education.name'),
      description: t('solutions.education.description'),
      features: [
        t('solutions.education.features.0'),
        t('solutions.education.features.1'),
        t('solutions.education.features.2'),
        t('solutions.education.features.3'),
      ],
      price: getPrice(20000000),
      href: `/${locale}/solutions/education`,
    },
    {
      icon: <Hospital className="w-12 h-12 text-[#116366]" />,
      title: t('solutions.healthcare.name'),
      description: t('solutions.healthcare.description'),
      features: [
        t('solutions.healthcare.features.0'),
        t('solutions.healthcare.features.1'),
        t('solutions.healthcare.features.2'),
        t('solutions.healthcare.features.3'),
      ],
      price: getPrice(75000000),
      href: `/${locale}/solutions/healthcare`,
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-[#116366]" />,
      title: t('solutions.retail.name'),
      description: t('solutions.retail.description'),
      features: [
        t('solutions.retail.features.0'),
        t('solutions.retail.features.1'),
        t('solutions.retail.features.2'),
        t('solutions.retail.features.3'),
      ],
      price: getPrice(10000000),
      href: `/${locale}/solutions/retail`,
    },
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-7 h-7" />,
      title: 'Certified Professionals',
      description: 'Our team holds international certifications in various technologies and frameworks.',
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: 'Proven Track Record',
      description: '150+ successfully delivered projects across 12+ different industries.',
    },
    {
      icon: <DollarSign className="w-7 h-7" />,
      title: 'Cost-Effective Solutions',
      description: 'Open-source based solutions with no vendor lock-in and flexible pricing models.',
    },
    {
      icon: <Headphones className="w-7 h-7" />,
      title: 'Local Support',
      description: 'Indonesian team with fast response times and excellent communication.',
    },
    {
      icon: <Handshake className="w-7 h-7" />,
      title: 'Partnership Models',
      description: 'Flexible engagement including co-development, revenue sharing, and equity partnerships.',
    },
    {
      icon: <Lightbulb className="w-7 h-7" />,
      title: 'Continuous Innovation',
      description: 'We stay updated with the latest technologies including AI, IoT, and cloud solutions.',
    },
  ];

  const testimonials = [
    {
      name: 'Dr. Ahmad Santoso',
      position: 'Director, RS Sehat Sentosa',
      content: 'The SIMRS implementation by Autobot has transformed our hospital operations. The integration with BPJS is seamless and has significantly improved our efficiency.',
      rating: 5,
    },
    {
      name: 'Budi Hermawan',
      position: 'IT Manager, PT Maju Jaya',
      content: 'Excellent service and professional team. They delivered our ERP system on time and within budget. The training and support have been outstanding.',
      rating: 5,
    },
    {
      name: 'Siti Nurhaliza',
      position: 'Principal, SMA Nusantara',
      content: 'The school management system has made our administrative work so much easier. Parents love the mobile app for tracking their children\'s progress.',
      rating: 5,
    },
  ];

  return (
    <>
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
        {/* Advanced Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <BackgroundPattern variant="grid" opacity={1} className="text-gray-900" />
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#116366]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#14b8a6]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-[#116366]/5 to-[#14b8a6]/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Floating Abstract Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-20 left-10 w-20 h-20 border-2 border-[#116366] rounded-lg transform rotate-12 animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 border-2 border-[#14b8a6] rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-gradient-to-br from-[#116366]/20 to-transparent rounded-lg transform rotate-45 animate-float" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-20 right-1/3 w-24 h-24 border border-[#14b8a6] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Decorative SVG Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="heroPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="#116366" />
                <circle cx="10" cy="10" r="0.5" fill="#14b8a6" />
                <circle cx="90" cy="90" r="0.5" fill="#14b8a6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroPattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="fade-in-up space-y-8">
              {/* Badge with animation */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-default">
                <div className="w-2 h-2 rounded-full bg-[#14b8a6] animate-pulse"></div>
                <span className="text-[#116366] font-bold text-sm tracking-wide">
                  {t('home.hero.subtitle')}
                </span>
              </div>

              {/* Main Heading with gradient */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-[#116366] to-gray-900 animate-gradient">
                  {t('home.hero.title')}
                </span>
              </h1>

              {/* Description with better typography */}
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl font-light">
                {t('home.hero.description')}
              </p>

              {/* Stats Pills */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
                  <CheckCircle className="w-4 h-4 text-[#14b8a6]" />
                  <span className="text-sm font-semibold text-gray-700">150+ Projects</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
                  <CheckCircle className="w-4 h-4 text-[#14b8a6]" />
                  <span className="text-sm font-semibold text-gray-700">75+ Clients</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
                  <CheckCircle className="w-4 h-4 text-[#14b8a6]" />
                  <span className="text-sm font-semibold text-gray-700">12+ Industries</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href={`/${locale}/contact`}>
                  <Button size="lg" className="bg-gradient-to-r from-[#116366] to-[#0d4d50] hover:from-[#0d4d50] hover:to-[#116366] text-white shadow-lg hover:shadow-xl transition-all group">
                    {t('home.hero.primaryCTA')}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href={`/${locale}/services`}>
                  <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-[#116366] shadow-sm">
                    {t('home.hero.secondaryCTA')}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Enhanced Illustration */}
            <div className="hidden lg:block fade-in-up">
              <div className="relative">
                {/* Main card with glassmorphism */}
                <div className="relative w-full h-[500px] bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 overflow-hidden">
                  {/* Inner pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, #116366 1px, transparent 0)`,
                      backgroundSize: '40px 40px'
                    }}></div>
                  </div>

                  {/* Floating elements inside */}
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    {/* Tech icons floating */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-4 bg-gradient-to-br from-[#116366] to-[#14b8a6] rounded-xl shadow-lg animate-float">
                        <Code className="w-8 h-8 text-white" />
                      </div>
                      <div className="p-4 bg-gradient-to-br from-[#14b8a6] to-[#5eead4] rounded-xl shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                      <div className="p-4 bg-gradient-to-br from-[#116366] to-[#14b8a6] rounded-xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                        <Cloud className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Center decoration */}
                    <div className="flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#116366]/20 to-[#14b8a6]/20 flex items-center justify-center animate-pulse">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#116366]/40 to-[#14b8a6]/40 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center shadow-xl">
                            <Smartphone className="w-10 h-10 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom tech icons */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-gradient-to-br from-[#14b8a6] to-[#5eead4] rounded-xl shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <div className="p-4 bg-gradient-to-br from-[#116366] to-[#14b8a6] rounded-xl shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                        <Cpu className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements around card */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#14b8a6]/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#116366]/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Countries Section - Service Availability */}
      <Section className="relative bg-gradient-to-br from-[#116366] via-[#0d4d50] to-[#116366] text-white overflow-hidden">
        {/* Abstract Background Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#14b8a6" />
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="80" fill="none" stroke="url(#globeGradient)" strokeWidth="2" />
              <ellipse cx="100" cy="100" rx="80" ry="40" fill="none" stroke="url(#globeGradient)" strokeWidth="1.5" />
              <ellipse cx="100" cy="100" rx="40" ry="80" fill="none" stroke="url(#globeGradient)" strokeWidth="1.5" />
              <line x1="20" y1="100" x2="180" y2="100" stroke="url(#globeGradient)" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-72 h-72">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path d="M 20 100 Q 60 50, 100 100 T 180 100" fill="none" stroke="url(#globeGradient)" strokeWidth="2" />
              <path d="M 100 20 Q 50 60, 100 100 T 100 180" fill="none" stroke="url(#globeGradient)" strokeWidth="2" />
              <circle cx="100" cy="100" r="5" fill="#14b8a6" />
              <circle cx="60" cy="75" r="3" fill="#14b8a6" />
              <circle cx="140" cy="125" r="3" fill="#14b8a6" />
            </svg>
          </div>
        </div>

        {/* Decorative dots pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Layanan Tersedia di Negara-Negara Ini
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              We serve clients globally with multilingual support and local expertise across 8 countries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {countries.map((country, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 hover:border-white/40 hover:shadow-2xl"
              >
                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-bl-full"></div>

                <div className="relative z-10">
                  {/* Flag with real image using flagcdn API */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg ring-2 ring-white/30 group-hover:ring-white/50 transition-all group-hover:scale-110">
                      <img
                        src={`https://flagcdn.com/w160/${country.flagCode}.png`}
                        alt={`${country.name} flag`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to emoji if image fails
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center text-3xl bg-white/10">${country.flag}</div>`;
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#14b8a6] transition-colors">
                        {country.name}
                      </h3>
                      <div className="flex items-center gap-1 text-white/70 text-sm">
                        <MapPin className="w-3 h-3" />
                        <span>{country.code.toUpperCase()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-white/80 leading-relaxed">
                    {country.description}
                  </p>

                  {/* Hover arrow indicator */}
                  <div className="mt-4 flex items-center text-white/60 text-xs group-hover:text-white/90 transition-colors">
                    <Users className="w-3 h-3 mr-1" />
                    <span>Local Support Available</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom info */}
          <div className="text-center py-8 border-t border-white/20">
            <div className="flex flex-wrap items-center justify-center gap-4 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#14b8a6] animate-pulse"></div>
                <span>24/7 Support</span>
              </div>
              <div className="hidden md:block w-px h-4 bg-white/20"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#14b8a6] animate-pulse"></div>
                <span>Multilingual Teams</span>
              </div>
              <div className="hidden md:block w-px h-4 bg-white/20"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#14b8a6] animate-pulse"></div>
                <span>7 Languages Available</span>
              </div>
            </div>
            <p className="text-white/70 text-xs mt-4 max-w-2xl mx-auto">
              Full language support available in Indonesian, English, Arabic, Vietnamese, Japanese, Filipino, and Thai
            </p>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section className="bg-white border-t border-gray-100">
        <Container>
          <Stats stats={stats} />
        </Container>
      </Section>

      {/* Enhanced Services Overview */}
      <Section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <BackgroundPattern variant="grid" opacity={1} className="text-gray-900" />
          </div>

          {/* Gradient orbs */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-[#116366]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#14b8a6]/5 rounded-full blur-3xl"></div>

          {/* Floating shapes */}
          <div className="absolute top-40 left-20 w-16 h-16 border border-[#116366]/10 rounded-lg transform rotate-12 animate-float"></div>
          <div className="absolute bottom-40 right-32 w-12 h-12 border border-[#14b8a6]/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <Container className="relative z-10">
          {/* Enhanced Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm mb-6">
              <div className="w-2 h-2 rounded-full bg-[#14b8a6] animate-pulse"></div>
              <span className="text-[#116366] font-semibold text-sm">{t('home.services.subtitle')}</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-[#116366] to-gray-900">
              {t('home.services.title')}
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('home.services.description')}
            </p>
          </div>

          {/* Enhanced Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#116366]/20 to-[#14b8a6]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <Card className="relative h-full border-2 border-gray-200 bg-white hover:border-[#116366]/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <CardHeader>
                    {/* Animated icon container */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#116366] to-[#14b8a6] rounded-xl blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                        {service.icon}
                      </div>
                    </div>

                    <CardTitle className="text-2xl text-gray-900 mb-3 group-hover:text-[#116366] transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="text-gray-600 mb-6 leading-relaxed text-base">
                      {service.description}
                    </CardDescription>

                    <Link
                      href={service.href}
                      className="inline-flex items-center text-[#116366] font-semibold hover:text-[#14b8a6] transition-all group-hover:gap-3 gap-2"
                    >
                      {t('common.learnMore')}
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>

                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#116366]/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Card>
              </div>
            ))}
          </div>

          {/* Enhanced CTA */}
          <div className="text-center fade-in-up">
            <Link href={`/${locale}/services`}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#116366] to-[#14b8a6] hover:from-[#0d4d50] hover:to-[#116366] text-white shadow-lg hover:shadow-xl transition-all group px-8"
              >
                {t('common.viewAll')} {t('nav.services')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Enhanced Featured Solutions with Stacked Cards */}
      <Section className="relative bg-gradient-to-br from-gray-900 via-[#0d4d50] to-gray-900 overflow-hidden py-24">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#14b8a6 1px, transparent 1px), linear-gradient(90deg, #14b8a6 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#14b8a6]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#116366]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#14b8a6]/10 to-[#116366]/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-20 left-10 w-20 h-20 border-2 border-[#14b8a6] rounded-lg transform rotate-12 animate-float"></div>
          <div className="absolute top-1/3 right-20 w-16 h-16 border-2 border-[#14b8a6] rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-gradient-to-br from-[#14b8a6]/30 to-transparent rounded-lg transform rotate-45 animate-float" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <Container className="relative z-10">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20 fade-in-up">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full shadow-lg mb-6">
              <div className="w-2 h-2 rounded-full bg-[#14b8a6] animate-pulse shadow-lg shadow-[#14b8a6]/50"></div>
              <span className="text-white font-semibold text-sm tracking-wide">{t('home.solutions.subtitle')}</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              {t('home.solutions.title')}
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('home.solutions.description')}
            </p>
          </div>

          {/* Stacked Cards Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="relative group fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Stacked layers behind main card */}
                <div className="absolute inset-0 transform translate-x-3 translate-y-3 bg-gradient-to-br from-[#116366]/15 to-[#14b8a6]/15 rounded-3xl blur-sm group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>
                <div className="absolute inset-0 transform translate-x-1.5 translate-y-1.5 bg-gradient-to-br from-[#116366]/25 to-[#14b8a6]/25 rounded-3xl blur-sm group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>

                {/* Main Card */}
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg group-hover:shadow-[0_10px_40px_-10px_rgba(20,184,166,0.3)] transition-all duration-500 group-hover:-translate-y-2">
                  {/* Gradient overlay on top */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#116366] via-[#14b8a6] to-[#116366] bg-[length:200%_100%] group-hover:animate-gradient"></div>

                  {/* Decorative background elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#116366]/5 to-transparent rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#14b8a6]/5 to-transparent rounded-full blur-2xl"></div>

                  {/* Card Content */}
                  <div className="relative p-8 md:p-10">
                    {/* Icon with stacked effect */}
                    <div className="relative mb-8">
                      {/* Icon stack layers */}
                      <div className="absolute inset-0 transform translate-x-2 translate-y-2 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#116366]/10 to-[#14b8a6]/10 blur-sm"></div>
                      <div className="absolute inset-0 transform translate-x-1 translate-y-1 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#116366]/20 to-[#14b8a6]/20 blur-sm"></div>

                      {/* Main icon */}
                      <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                        <div className="text-white">
                          {solution.icon}
                        </div>
                      </div>

                      {/* Floating badge */}
                      {index === 0 && (
                        <div className="absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r from-[#14b8a6] to-[#5eead4] text-white text-xs font-bold rounded-full shadow-md animate-pulse">
                          Popular
                        </div>
                      )}
                      {index === 2 && (
                        <div className="absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r from-[#116366] to-[#14b8a6] text-white text-xs font-bold rounded-full shadow-md animate-pulse">
                          Enterprise
                        </div>
                      )}
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-[#116366] transition-colors">
                      {solution.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-8 text-base">
                      {solution.description}
                    </p>

                    {/* Features with enhanced design */}
                    <div className="space-y-4 mb-10">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 group/item">
                          <div className="relative flex-shrink-0">
                            {/* Checkmark background layers */}
                            <div className="absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#116366] to-[#14b8a6] blur-sm opacity-30 group-hover/item:opacity-60 transition-opacity"></div>
                            <div className="relative w-6 h-6 rounded-full bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center shadow-sm">
                              <CheckCircle className="h-3.5 w-3.5 text-white" />
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium group-hover/item:text-[#116366] group-hover/item:translate-x-1 transition-all">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Price Section with Stack Effect */}
                    <div className="relative">
                      {/* Price card stack layers */}
                      <div className="absolute inset-0 transform translate-y-1 bg-gray-100 rounded-2xl"></div>
                      <div className="absolute inset-0 transform translate-y-0.5 bg-gray-50 rounded-2xl"></div>

                      {/* Main price card */}
                      <div className="relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-6 group-hover:border-[#116366]/30 transition-all">
                        <div className="flex items-end justify-between">
                          <div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-semibold">
                              {locale === 'id' ? 'Mulai dari' : 'Starting from'}
                            </div>
                            <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#116366] to-[#14b8a6]">
                              {solution.price}
                            </div>
                          </div>

                          <Link href={solution.href}>
                            <Button className="bg-gradient-to-r from-[#116366] to-[#14b8a6] hover:from-[#0d4d50] hover:to-[#116366] text-white shadow-md hover:shadow-lg transition-all group/btn px-6 py-3">
                              <span className="font-semibold">{t('common.learnMore')}</span>
                              <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom gradient accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#14b8a6]/50 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA */}
          <div className="text-center fade-in-up">
            <Link href={`/${locale}/solutions`}>
              <Button
                size="lg"
                className="bg-white text-[#116366] hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all group px-10 py-6 text-lg font-bold"
              >
                {t('common.viewAll')} {t('nav.solutions')}
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Enhanced Why Choose Us */}
      <Section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <BackgroundPattern variant="grid" opacity={1} className="text-gray-900" />
          </div>

          {/* Floating orbs */}
          <div className="absolute top-20 right-20 w-72 h-72 bg-[#116366]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#14b8a6]/5 rounded-full blur-3xl"></div>

          {/* Decorative shapes */}
          <div className="absolute top-1/4 left-10 w-16 h-16 border border-[#116366]/10 rounded-full animate-float"></div>
          <div className="absolute bottom-1/3 right-16 w-12 h-12 bg-gradient-to-br from-[#14b8a6]/10 to-transparent rounded-lg transform rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <Container className="relative z-10">
          {/* Enhanced Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm mb-6">
              <div className="w-2 h-2 rounded-full bg-[#14b8a6] animate-pulse"></div>
              <span className="text-[#116366] font-semibold text-sm">{t('home.whyUs.subtitle')}</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-[#116366] to-gray-900">
              {t('home.whyUs.title')}
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('home.whyUs.description')}
            </p>
          </div>

          {/* Enhanced Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group relative fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card with hover effect */}
                <div className="relative h-full p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-[#116366]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#116366]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#14b8a6]/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  {/* Icon with stacked effect */}
                  <div className="relative mb-6">
                    {/* Icon shadow layers */}
                    <div className="absolute inset-0 flex items-start">
                      <div className="w-16 h-16 rounded-2xl bg-[#116366]/10 blur-sm transform translate-x-1 translate-y-1"></div>
                    </div>

                    {/* Main icon container */}
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center text-white shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      {item.icon}

                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                    </div>

                    {/* Number badge */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white border-2 border-[#14b8a6] flex items-center justify-center text-xs font-bold text-[#116366] shadow-sm">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#116366] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#14b8a6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  {/* Decorative dots */}
                  <div className="absolute bottom-4 right-4 flex gap-1 opacity-20 group-hover:opacity-40 transition-opacity">
                    <div className="w-1 h-1 rounded-full bg-[#116366]"></div>
                    <div className="w-1 h-1 rounded-full bg-[#14b8a6]"></div>
                    <div className="w-1 h-1 rounded-full bg-[#116366]"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Enhanced Testimonials */}
      <Section className="relative bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Dot pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <BackgroundPattern variant="dots" opacity={1} className="text-gray-900" />
          </div>

          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#14b8a6]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#116366]/5 rounded-full blur-3xl"></div>

          {/* Floating quotes */}
          <div className="absolute top-20 right-20 opacity-5">
            <Quote className="w-32 h-32 text-[#116366]" />
          </div>
          <div className="absolute bottom-20 left-20 opacity-5">
            <Quote className="w-24 h-24 text-[#14b8a6] transform rotate-180" />
          </div>
        </div>

        <Container className="relative z-10">
          {/* Enhanced Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm mb-6">
              <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
              <span className="text-[#116366] font-semibold text-sm">Client Stories</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-[#116366] to-gray-900">
              What Our Clients Say
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it – hear from some of our satisfied clients.
            </p>
          </div>

          {/* Enhanced Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Card with enhanced design */}
                <div className="relative h-full bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-[#116366]/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, #116366 1px, transparent 0)`,
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>

                  {/* Decorative gradient blob */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#14b8a6]/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  {/* Large quote icon */}
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="w-16 h-16 text-[#116366]" />
                  </div>

                  {/* Avatar and Stars Row */}
                  <div className="relative flex items-start justify-between mb-6">
                    {/* Avatar */}
                    <div className="relative">
                      {/* Avatar shadow */}
                      <div className="absolute inset-0 w-14 h-14 rounded-full bg-gradient-to-br from-[#116366]/20 to-[#14b8a6]/20 blur-sm transform translate-x-0.5 translate-y-0.5"></div>

                      {/* Main avatar */}
                      <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>

                    {/* Star rating */}
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <div key={i} className="relative">
                          {/* Star glow */}
                          <div className="absolute inset-0 blur-sm">
                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          </div>
                          {/* Main star */}
                          <Star className="relative h-5 w-5 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial content */}
                  <div className="relative mb-6">
                    <p className="text-gray-700 leading-relaxed italic text-base">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                  </div>

                  {/* Client info */}
                  <div className="relative pt-6 border-t-2 border-gray-100">
                    <div className="font-bold text-lg text-gray-900 mb-1 group-hover:text-[#116366] transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                      {testimonial.position}
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#14b8a6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  {/* Decorative dots */}
                  <div className="absolute bottom-6 right-6 flex gap-1 opacity-20 group-hover:opacity-40 transition-opacity">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#116366] animate-pulse"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="mt-16 text-center fade-in-up">
            <div className="inline-flex flex-wrap items-center justify-center gap-8 px-8 py-6 bg-white border-2 border-gray-200 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center">
                  <Star className="w-5 h-5 text-white fill-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-gray-900">5.0</div>
                  <div className="text-xs text-gray-500">Average Rating</div>
                </div>
              </div>

              <div className="hidden md:block w-px h-12 bg-gray-200"></div>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-gray-900">75+</div>
                  <div className="text-xs text-gray-500">Happy Clients</div>
                </div>
              </div>

              <div className="hidden md:block w-px h-12 bg-gray-200"></div>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-xs text-gray-500">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="relative bg-gradient-to-br from-[#116366] via-[#0d4d50] to-[#116366] text-white overflow-hidden">
        {/* Advanced Pattern Background */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Dot Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-48 -left-48 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-[#14b8a6]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5eead4]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top Left */}
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white/10 rounded-2xl rotate-12 animate-float"></div>
          <div className="absolute top-40 left-32 w-20 h-20 border-2 border-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>

          {/* Top Right */}
          <div className="absolute top-32 right-20 w-24 h-24 border-2 border-white/10 rounded-xl -rotate-12 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-60 right-40 w-16 h-16 bg-white/5 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1.5s' }}></div>

          {/* Bottom Left */}
          <div className="absolute bottom-32 left-24 w-28 h-28 border-2 border-[#14b8a6]/20 rounded-2xl -rotate-6 animate-float" style={{ animationDelay: '0.5s' }}></div>

          {/* Bottom Right */}
          <div className="absolute bottom-40 right-32 w-20 h-20 border-2 border-[#5eead4]/20 rounded-full animate-float" style={{ animationDelay: '1.8s' }}></div>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-0 left-0 w-32 h-1 bg-gradient-to-r from-white to-transparent"></div>
            <div className="absolute top-0 left-0 w-1 h-32 bg-gradient-to-b from-white to-transparent"></div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-full h-full opacity-10">
            <div className="absolute bottom-0 right-0 w-32 h-1 bg-gradient-to-l from-white to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-1 h-32 bg-gradient-to-t from-white to-transparent"></div>
          </div>
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto py-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8 group hover:bg-white/15 transition-all">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-[#5eead4] animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#5eead4] animate-ping"></div>
              </div>
              <span className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors">
                {t('home.cta.badge', { defaultValue: 'Ready to Transform?' })}
              </span>
            </div>

            {/* Title with Enhanced Styling */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              <span className="inline-block animate-gradient bg-gradient-to-r from-white via-[#5eead4] to-white bg-clip-text text-transparent">
                {t('home.cta.title')}
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl lg:text-2xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto">
              {t('home.cta.description')}
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href={`/${locale}/contact`}>
                <Button
                  size="lg"
                  className="group relative bg-white text-[#116366] hover:bg-gray-50 transition-all shadow-lg hover:shadow-2xl px-8 py-6 text-lg font-semibold overflow-hidden"
                >
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                  <span className="relative flex items-center gap-2">
                    {t('home.hero.primaryCTA')}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>

              <Link href={`/${locale}/portfolio`}>
                <Button
                  size="lg"
                  className="group relative border-2 border-white/80 text-white hover:bg-white hover:text-[#116366] transition-all px-8 py-6 text-lg font-semibold backdrop-blur-sm bg-white/5 hover:shadow-lg overflow-hidden"
                >
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                  <span className="relative flex items-center gap-2">
                    {t('nav.portfolio')}
                    <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </span>
                </Button>
              </Link>
            </div>

            {/* Decorative Bottom Elements */}
            <div className="mt-16 flex justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/40 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-white/40 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 rounded-full bg-white/40 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </Container>

        {/* Bottom Accent Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#5eead4] to-transparent"></div>
      </Section>
    </>
  );
}
