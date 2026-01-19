'use client';

import { Section } from '@/components/sections/Section';
import { Container } from '@/components/sections/Container';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { ProcessFlow } from '@/components/sections/ProcessFlow';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BackgroundPattern, HeroBackground } from '@/components/ui/background-pattern';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import {
  Code,
  Zap,
  Smartphone,
  Globe,
  CheckCircle,
  ArrowRight,
  Layers,
  ShoppingCart,
  Database,
  Shield,
  TrendingUp,
  Users,
  MonitorSmartphone,
  Palette,
  Cog,
  TestTube,
  Rocket,
  Headphones,
} from 'lucide-react';

export default function WebDevelopmentPage() {
  const t = useTranslations();
  const locale = useLocale();

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: t('services.webDev.features.modernTech.title'),
      description: t('services.webDev.features.modernTech.desc'),
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t('services.webDev.features.lightning.title'),
      description: t('services.webDev.features.lightning.desc'),
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: t('services.webDev.features.responsive.title'),
      description: t('services.webDev.features.responsive.desc'),
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('services.webDev.features.secure.title'),
      description: t('services.webDev.features.secure.desc'),
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: t('services.webDev.features.scalable.title'),
      description: t('services.webDev.features.scalable.desc'),
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: t('services.webDev.features.seo.title'),
      description: t('services.webDev.features.seo.desc'),
    },
  ];

  const solutions = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: t('services.webDev.solutions.corporate.title'),
      description: t('services.webDev.solutions.corporate.desc'),
      price: locale === 'id' ? 'Mulai dari Rp 15.000.000' : 'From $1,000',
      features: [
        t('services.webDev.solutions.corporate.features.0'),
        t('services.webDev.solutions.corporate.features.1'),
        t('services.webDev.solutions.corporate.features.2'),
        t('services.webDev.solutions.corporate.features.3'),
        t('services.webDev.solutions.corporate.features.4'),
      ],
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: t('services.webDev.solutions.ecommerce.title'),
      description: t('services.webDev.solutions.ecommerce.desc'),
      price: locale === 'id' ? 'Mulai dari Rp 35.000.000' : 'From $2,300',
      features: [
        t('services.webDev.solutions.ecommerce.features.0'),
        t('services.webDev.solutions.ecommerce.features.1'),
        t('services.webDev.solutions.ecommerce.features.2'),
        t('services.webDev.solutions.ecommerce.features.3'),
        t('services.webDev.solutions.ecommerce.features.4'),
      ],
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: t('services.webDev.solutions.webapp.title'),
      description: t('services.webDev.solutions.webapp.desc'),
      price: locale === 'id' ? 'Mulai dari Rp 50.000.000' : 'From $3,200',
      features: [
        t('services.webDev.solutions.webapp.features.0'),
        t('services.webDev.solutions.webapp.features.1'),
        t('services.webDev.solutions.webapp.features.2'),
        t('services.webDev.solutions.webapp.features.3'),
        t('services.webDev.solutions.webapp.features.4'),
      ],
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: t('services.webDev.solutions.portal.title'),
      description: t('services.webDev.solutions.portal.desc'),
      price: locale === 'id' ? 'Mulai dari Rp 40.000.000' : 'From $2,600',
      features: [
        t('services.webDev.solutions.portal.features.0'),
        t('services.webDev.solutions.portal.features.1'),
        t('services.webDev.solutions.portal.features.2'),
        t('services.webDev.solutions.portal.features.3'),
        t('services.webDev.solutions.portal.features.4'),
      ],
    },
  ];

  const techStack = [
    {
      category: t('services.webDev.techStack.frontend'),
      techs: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      category: t('services.webDev.techStack.backend'),
      techs: ['Node.js', 'Python', 'Laravel', 'Express', 'NestJS']
    },
    {
      category: t('services.webDev.techStack.database'),
      techs: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase']
    },
    {
      category: t('services.webDev.techStack.cloud'),
      techs: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD']
    },
  ];

  const process = [
    {
      step: '01',
      title: t('services.webDev.process.discovery.title'),
      desc: t('services.webDev.process.discovery.desc'),
      icon: <MonitorSmartphone className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '02',
      title: t('services.webDev.process.design.title'),
      desc: t('services.webDev.process.design.desc'),
      icon: <Palette className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '03',
      title: t('services.webDev.process.development.title'),
      desc: t('services.webDev.process.development.desc'),
      icon: <Cog className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      step: '04',
      title: t('services.webDev.process.testing.title'),
      desc: t('services.webDev.process.testing.desc'),
      icon: <TestTube className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: '05',
      title: t('services.webDev.process.deployment.title'),
      desc: t('services.webDev.process.deployment.desc'),
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      step: '06',
      title: t('services.webDev.process.support.title'),
      desc: t('services.webDev.process.support.desc'),
      icon: <Headphones className="w-8 h-8" />,
      color: 'from-indigo-500 to-blue-500'
    },
  ];

  const projects = [
    {
      name: t('services.webDev.projects.0.name'),
      industry: t('services.webDev.projects.0.industry'),
      result: t('services.webDev.projects.0.result')
    },
    {
      name: t('services.webDev.projects.1.name'),
      industry: t('services.webDev.projects.1.industry'),
      result: t('services.webDev.projects.1.result')
    },
    {
      name: t('services.webDev.projects.2.name'),
      industry: t('services.webDev.projects.2.industry'),
      result: t('services.webDev.projects.2.result')
    },
  ];

  return (
    <>
      {/* Hero Section - Enhanced with Advanced Patterns */}
      <section className="relative min-h-[700px] flex items-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50/30">
        <HeroBackground />

        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, #116366 1px, transparent 1px),
              linear-gradient(to bottom, #116366 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#116366]/20 to-[#14b8a6]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-[#14b8a6]/15 to-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-40 left-10 w-20 h-20 border-2 border-[#116366]/10 rounded-lg rotate-12 animate-float"></div>
        <div className="absolute top-60 right-40 w-16 h-16 border-2 border-[#14b8a6]/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border-2 border-blue-500/10 rounded-lg -rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>

        {/* Code Illustration */}
        <div className="absolute top-32 right-10 text-6xl font-bold text-[#116366]/5 rotate-12 animate-float">{'<>'}</div>
        <div className="absolute bottom-32 left-10 text-6xl font-bold text-[#14b8a6]/5 -rotate-12 animate-float" style={{ animationDelay: '0.7s' }}>{'</>'}</div>

        <Container className="relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-5 py-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-[#116366]/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-[#14b8a6] animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#14b8a6] animate-ping"></div>
              </div>
              <Code className="w-5 h-5 text-[#116366]" />
              <span className="text-[#116366] font-semibold">{t('services.webDev.hero.badge')}</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t('services.webDev.hero.title')}{' '}
              <span className="inline-block animate-gradient bg-gradient-to-r from-[#116366] via-[#14b8a6] to-[#116366] bg-clip-text text-transparent bg-[length:200%_auto]">
                {t('services.webDev.hero.titleHighlight')}
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {t('services.webDev.hero.description')}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="relative bg-[#116366] hover:bg-[#0d4d50] text-white group overflow-hidden shadow-lg hover:shadow-2xl px-8 py-6 text-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative flex items-center gap-2">
                    {t('services.webDev.hero.primaryCTA')}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Link href={`/${locale}/portfolio`}>
                <Button size="lg" variant="outline" className="border-2 border-[#116366] text-[#116366] hover:bg-[#116366] hover:text-white px-8 py-6 text-lg shadow-md hover:shadow-xl transition-all">
                  {t('services.webDev.hero.secondaryCTA')}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Features Grid - Enhanced with Premium Design */}
      <Section className="relative bg-gradient-to-br from-white via-gray-50/50 to-white overflow-hidden">
        <BackgroundPattern variant="dots" opacity={0.03} />

        {/* Thin Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, #116366 1px, transparent 1px),
              linear-gradient(to bottom, #116366 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#116366]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-[#14b8a6]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

        {/* Floating Code Icons */}
        <div className="absolute left-10 top-1/3 w-48 h-48 opacity-[0.02] pointer-events-none">
          <Code className="w-full h-full text-[#116366] animate-float" />
        </div>
        <div className="absolute right-10 bottom-1/3 w-40 h-40 opacity-[0.02] pointer-events-none">
          <Zap className="w-full h-full text-[#14b8a6] animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <Container className="relative z-10">
          <SectionHeader
            subtitle={t('services.webDev.featuresSection.subtitle')}
            title={t('services.webDev.featuresSection.title')}
            description={t('services.webDev.featuresSection.description')}
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 hover:border-[#116366]/30 overflow-hidden h-full bg-white/80 backdrop-blur-sm">
                  {/* Hover Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#116366]/0 via-[#14b8a6]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                       style={{
                         background: 'linear-gradient(135deg, rgba(17,99,102,0.05) 0%, rgba(20,184,166,0.05) 100%)'
                       }}
                  />

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#14b8a6]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardHeader className="relative p-8">
                    <motion.div
                      className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center text-white mb-6 shadow-lg group-hover:shadow-2xl group-hover:shadow-[#116366]/20 transition-all duration-500"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6, type: "spring" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-2xl"></div>
                      {feature.icon}
                    </motion.div>
                    <CardTitle className="text-2xl mb-3 text-gray-900 group-hover:text-[#116366] transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Solutions & Pricing - Premium Design */}
      <Section className="relative bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-50 overflow-hidden">
        <BackgroundPattern variant="circuit" opacity={0.02} />

        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, #116366 1px, transparent 1px),
              linear-gradient(to bottom, #116366 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-bl from-[#14b8a6]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-[#116366]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Floating Shapes */}
        <div className="absolute top-20 left-1/4 w-32 h-32 border-2 border-[#14b8a6]/10 rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-1/4 w-24 h-24 border-2 border-[#116366]/10 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>

        {/* Icon Illustrations */}
        <div className="absolute right-10 top-1/3 w-56 h-56 opacity-[0.015] pointer-events-none">
          <Globe className="w-full h-full text-[#14b8a6] animate-float" />
        </div>
        <div className="absolute left-10 bottom-1/4 w-48 h-48 opacity-[0.015] pointer-events-none">
          <ShoppingCart className="w-full h-full text-[#116366] animate-float" style={{ animationDelay: '1.5s' }} />
        </div>

        <Container className="relative z-10">
          <SectionHeader
            subtitle={t('services.webDev.solutionsSection.subtitle')}
            title={t('services.webDev.solutionsSection.title')}
            description={t('services.webDev.solutionsSection.description')}
            centered
          />

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="group relative border-2 border-gray-200 hover:border-[#116366] transition-all duration-500 hover:shadow-2xl overflow-hidden h-full bg-white/90 backdrop-blur-sm">
                  {/* Top Decorative Pattern */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#116366]/10 to-transparent rounded-bl-full transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700" />

                  {/* Animated Border Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#116366]/20 via-[#14b8a6]/20 to-[#116366]/20 blur-xl"></div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  {/* Grid Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `
                        linear-gradient(to right, #116366 1px, transparent 1px),
                        linear-gradient(to bottom, #116366 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>

                  <CardHeader className="relative p-8">
                    <motion.div
                      className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-[#116366] via-[#14b8a6] to-[#116366] flex items-center justify-center text-white mb-6 shadow-xl group-hover:shadow-2xl group-hover:shadow-[#116366]/30 transition-all duration-500"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ duration: 0.5, type: "spring" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-3xl"></div>
                      <div className="absolute inset-0 rounded-3xl animate-pulse bg-gradient-to-br from-white/10 to-transparent"></div>
                      {solution.icon}
                    </motion.div>
                    <CardTitle className="text-2xl mb-3 text-gray-900 group-hover:text-[#116366] transition-colors duration-300">
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-base text-gray-600 leading-relaxed">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative p-8 pt-0">
                    <div className="space-y-3 mb-8">
                      {solution.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#116366]/10 flex items-center justify-center group-hover:bg-[#116366] transition-colors duration-300">
                            <CheckCircle className="h-4 w-4 text-[#116366] group-hover:text-white transition-colors duration-300" />
                          </div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t-2 border-gray-100">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">{t('services.webDev.startingFrom')}</div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-[#116366] to-[#14b8a6] bg-clip-text text-transparent">
                          {solution.price}
                        </div>
                      </div>
                      <Link href={`/${locale}/contact`}>
                        <Button className="relative bg-[#116366] hover:bg-[#0d4d50] text-white px-6 py-6 text-base shadow-lg hover:shadow-xl group overflow-hidden transition-all">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                          <span className="relative">{t('services.webDev.getQuote')}</span>
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Tech Stack - Enhanced Design */}
      <Section className="relative bg-white overflow-hidden">
        <BackgroundPattern variant="grid" opacity={0.03} />

        {/* Dot Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #116366 2px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-gradient-to-tl from-[#14b8a6]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

        {/* Floating Tech Icons */}
        <div className="absolute top-20 right-20 text-[#116366]/5 animate-float">
          <Database className="w-32 h-32" />
        </div>
        <div className="absolute bottom-20 left-20 text-[#14b8a6]/5 animate-float" style={{ animationDelay: '1s' }}>
          <Code className="w-40 h-40" />
        </div>

        <Container className="relative z-10">
          <SectionHeader
            subtitle={t('services.webDev.techSection.subtitle')}
            title={t('services.webDev.techSection.title')}
            description={t('services.webDev.techSection.description')}
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group relative border-2 border-gray-100 hover:border-[#116366]/30 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white/80 backdrop-blur-sm h-full">
                  {/* Top Gradient Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#116366] via-[#14b8a6] to-[#116366] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                  {/* Hover Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#116366]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  <CardHeader className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                      <CardTitle className="text-xl text-gray-900 group-hover:text-[#116366] transition-colors">
                        {stack.category}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="flex flex-wrap gap-2">
                      {stack.techs.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          className="px-3 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gradient-to-r hover:from-[#116366] hover:to-[#14b8a6] hover:text-white transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process - Enhanced with Premium Patterns */}
      <Section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        <BackgroundPattern variant="lines" opacity={0.02} />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, #14b8a6 1px, transparent 1px),
              linear-gradient(to bottom, #14b8a6 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Floating Shapes */}
        <div className="absolute top-40 right-1/4 w-32 h-32 border-2 border-purple-500/10 rounded-full animate-float"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 border-2 border-blue-500/10 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>

        {/* Process Icon Illustrations */}
        <div className="absolute top-20 left-10 text-[#116366]/5 animate-float">
          <Cog className="w-32 h-32" />
        </div>
        <div className="absolute bottom-20 right-10 text-[#14b8a6]/5 animate-float" style={{ animationDelay: '1.5s' }}>
          <Rocket className="w-36 h-36" />
        </div>

        <Container className="relative z-10">
          <SectionHeader
            subtitle={t('services.webDev.processSection.subtitle')}
            title={t('services.webDev.processSection.title')}
            description={t('services.webDev.processSection.description')}
            centered
          />

          <ProcessFlow steps={process} />
        </Container>
      </Section>

      {/* Success Stories - Enhanced Design */}
      <Section className="relative bg-gradient-to-br from-white via-blue-50/10 to-white overflow-hidden">
        <BackgroundPattern variant="dots" opacity={0.03} />

        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, #116366 1px, transparent 1px),
              linear-gradient(to bottom, #116366 1px, transparent 1px)
            `,
            backgroundSize: '45px 45px'
          }}></div>
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-green-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-tl from-[#14b8a6]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

        {/* Floating Shapes */}
        <div className="absolute top-1/3 left-10 w-28 h-28 border-2 border-green-500/10 rounded-lg rotate-12 animate-float"></div>
        <div className="absolute bottom-1/3 right-10 w-32 h-32 border-2 border-[#14b8a6]/10 rounded-full animate-float" style={{ animationDelay: '0.8s' }}></div>

        {/* Trophy Illustration */}
        <div className="absolute top-20 left-10 text-[#116366]/5 animate-float">
          <TrendingUp className="w-40 h-40" />
        </div>

        <Container className="relative z-10">
          <SectionHeader
            subtitle={t('services.webDev.successSection.subtitle')}
            title={t('services.webDev.successSection.title')}
            description={t('services.webDev.successSection.description')}
            centered
          />

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="group relative border-2 border-gray-100 hover:border-[#116366]/30 hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white/90 backdrop-blur-sm h-full">
                  {/* Left Accent Bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#116366] via-[#14b8a6] to-[#116366] transform scale-y-50 group-hover:scale-y-100 transition-transform duration-500"></div>

                  {/* Hover Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#116366]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  {/* Top Right Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `
                        linear-gradient(to right, #116366 1px, transparent 1px),
                        linear-gradient(to bottom, #116366 1px, transparent 1px)
                      `,
                      backgroundSize: '10px 10px'
                    }}></div>
                  </div>

                  <CardHeader className="relative p-8">
                    {/* Industry Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#116366]/10 to-[#14b8a6]/10 rounded-full mb-4">
                      <div className="w-2 h-2 rounded-full bg-[#14b8a6] animate-pulse"></div>
                      <span className="text-sm font-semibold text-[#116366]">{project.industry}</span>
                    </div>

                    {/* Project Name */}
                    <CardTitle className="text-2xl mb-6 text-gray-900 group-hover:text-[#116366] transition-colors duration-300">
                      {project.name}
                    </CardTitle>

                    {/* Result with Icon */}
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-[#116366]/20 transition-all duration-500">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Impact</div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-[#116366] to-[#14b8a6] bg-clip-text text-transparent">
                          {project.result}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA - Premium Design with Advanced Patterns */}
      <Section className="relative bg-gradient-to-br from-[#116366] via-[#0d4d50] to-[#116366] text-white overflow-hidden">
        {/* Circuit Pattern Background */}
        <div className="absolute inset-0">
          <BackgroundPattern variant="circuit" opacity={0.1} className="text-white" />
        </div>

        {/* Grid Pattern Background */}
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
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#14b8a6]/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tl from-white/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#14b8a6]/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-40 left-10 w-20 h-20 border-2 border-white/10 rounded-lg rotate-12 animate-float"></div>
        <div className="absolute top-60 right-40 w-16 h-16 border-2 border-[#14b8a6]/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border-2 border-white/10 rounded-lg -rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-60 left-40 w-18 h-18 border-2 border-[#14b8a6]/15 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>

        {/* Tech Icons Illustration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.08]">
          <div className="absolute top-10 left-1/4 text-7xl font-bold text-white rotate-12 animate-float">{'{ }'}</div>
          <div className="absolute bottom-10 right-1/4 text-7xl font-bold text-[#14b8a6] -rotate-12 animate-float" style={{ animationDelay: '1s' }}>{'< />'}</div>
          <div className="absolute top-1/3 right-10 text-3xl font-mono text-white opacity-50">
            <div className="animate-float">01010</div>
            <div className="animate-float" style={{ animationDelay: '0.5s' }}>10101</div>
          </div>
          <div className="absolute bottom-1/3 left-10 text-3xl font-mono text-[#14b8a6] opacity-50">
            <div className="animate-float" style={{ animationDelay: '0.7s' }}>11001</div>
            <div className="animate-float" style={{ animationDelay: '1.2s' }}>00110</div>
          </div>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-white/10"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-white/10"></div>

        <Container className="relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Enhanced Badge with pulse */}
            <motion.div
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-[#5eead4] animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#5eead4] animate-ping"></div>
              </div>
              <Rocket className="w-5 h-5" />
              <span className="font-semibold">Ready to Get Started?</span>
            </motion.div>

            {/* Gradient Animated Title */}
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="inline-block animate-gradient bg-gradient-to-r from-white via-[#5eead4] to-white bg-clip-text text-transparent bg-[length:200%_auto]">
                {t('services.webDev.cta.title')}
              </span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {t('services.webDev.cta.description')}
            </motion.p>

            {/* Enhanced Buttons with shine effects */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="group relative bg-white text-[#116366] hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl px-8 py-6 text-lg font-semibold overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative flex items-center gap-2">
                    {t('services.webDev.cta.primaryCTA')}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Link href={`/${locale}/portfolio`}>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#116366] px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                  {t('services.webDev.cta.secondaryCTA')}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
