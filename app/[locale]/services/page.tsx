'use client';

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
  Wrench,
  Database,
  TrendingUp,
  GitBranch,
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  Rocket,
} from 'lucide-react';

export default function ServicesPage() {
  const t = useTranslations();
  const locale = useLocale();
  const services = [
    {
      icon: <Code className="w-12 h-12 text-white" />,
      title: t('services.webDevelopment.name'),
      description: t('services.webDevelopment.shortDescription'),
      features: t.raw('services.webDevelopment.features') as string[],
      href: `/${locale}/services/web-development`,
    },
    {
      icon: <Smartphone className="w-12 h-12 text-white" />,
      title: t('services.mobileApp.name'),
      description: t('services.mobileApp.shortDescription'),
      features: t.raw('services.mobileApp.features') as string[],
      href: `/${locale}/services/mobile-app-development`,
    },
    {
      icon: <Brain className="w-12 h-12 text-white" />,
      title: t('services.aiSolutions.name'),
      description: t('services.aiSolutions.shortDescription'),
      features: t.raw('services.aiSolutions.features') as string[],
      href: `/${locale}/services/ai-solutions`,
    },
    {
      icon: <Cpu className="w-12 h-12 text-white" />,
      title: t('services.iot.name'),
      description: t('services.iot.shortDescription'),
      features: t.raw('services.iot.features') as string[],
      href: `/${locale}/services/iot-solutions`,
    },
    {
      icon: <Cloud className="w-12 h-12 text-white" />,
      title: t('services.cloud.name'),
      description: t('services.cloud.shortDescription'),
      features: t.raw('services.cloud.features') as string[],
      href: `/${locale}/services/cloud-solutions`,
    },
    {
      icon: <Shield className="w-12 h-12 text-white" />,
      title: t('services.cybersecurity.name'),
      description: t('services.cybersecurity.shortDescription'),
      features: t.raw('services.cybersecurity.features') as string[],
      href: `/${locale}/services/cybersecurity`,
    },
    {
      icon: <Database className="w-12 h-12 text-white" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions for your specific business needs.',
      features: [
        'Enterprise software development',
        'Legacy system modernization',
        'System architecture design',
        'Microservices development',
        'Third-party integrations',
      ],
      href: `/${locale}/services/custom-software`,
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-white" />,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to drive your business forward.',
      features: [
        'Digital transformation strategy',
        'Technology assessment',
        'IT roadmap planning',
        'Business process optimization',
        'Vendor selection & management',
      ],
      href: `/${locale}/services/it-consulting`,
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: 'Maintenance & Support',
      description: 'Ongoing support and maintenance for your IT systems.',
      features: [
        '24/7 technical support',
        'System monitoring',
        'Regular updates & patches',
        'Performance optimization',
        'SLA-backed service',
      ],
      href: `/${locale}/services/maintenance-support`,
    },
  ];

  const process = [
    {
      step: '01',
      title: t('services.process.discovery.title'),
      description: t('services.process.discovery.description'),
    },
    {
      step: '02',
      title: t('services.process.planning.title'),
      description: t('services.process.planning.description'),
    },
    {
      step: '03',
      title: t('services.process.development.title'),
      description: t('services.process.development.description'),
    },
    {
      step: '04',
      title: t('services.process.testing.title'),
      description: t('services.process.testing.description'),
    },
    {
      step: '05',
      title: t('services.process.deployment.title'),
      description: t('services.process.deployment.description'),
    },
    {
      step: '06',
      title: t('services.process.support.title'),
      description: t('services.process.support.description'),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        {/* Grid Pattern Background */}
        <BackgroundPattern variant="grid" opacity={0.08} className="text-gray-400" />

        {/* Subtle gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#116366]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#14b8a6]/5 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="fade-in-up">
              <div className="inline-block mb-6 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
                <span className="text-[#116366] font-semibold text-sm">
                  {t('services.hero.subtitle')}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {t('services.hero.title')}
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                {t('services.hero.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`/${locale}/contact`}>
                  <Button size="lg" className="bg-[#116366] hover:bg-[#0d4d50] text-white group">
                    {t('services.hero.primaryCTA')}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href={`/${locale}/portfolio`}>
                  <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                    {t('nav.portfolio')}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Illustration */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Services Illustration */}
                <div className="relative z-10 bg-gradient-to-br from-[#116366] to-[#14b8a6] rounded-2xl p-8 shadow-2xl">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center">
                      <Code className="w-10 h-10 text-white" />
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center">
                      <Brain className="w-10 h-10 text-white" />
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center">
                      <Cloud className="w-10 h-10 text-white" />
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center">
                      <Smartphone className="w-10 h-10 text-white" />
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center">
                      <Cpu className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#14b8a6]/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#116366]/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <Section className="bg-white border-t border-gray-100">
        <Container>
          <SectionHeader
            subtitle={t('services.whatWeOffer')}
            title={t('services.ourServices')}
            description={t('services.exploreDescription')}
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-gray-200 bg-white">
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-[#116366] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={service.href} className="text-[#116366] font-medium flex items-center hover:text-[#14b8a6] transition-colors">
                    {t('common.learnMore')} <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Our Process */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeader
            subtitle={t('services.howWeWork')}
            title={t('services.processTitle')}
            description={t('services.processDescription')}
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-[#116366] flex items-center justify-center text-white font-bold text-lg">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Technologies */}
      <Section className="bg-white">
        <Container>
          <SectionHeader
            subtitle="Tech Stack"
            title="Technologies We Use"
            description="We work with modern, industry-standard technologies and frameworks."
            centered
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'Python',
              'Laravel', 'Flutter', 'React Native', 'TensorFlow', 'AWS', 'Azure',
              'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL',
            ].map((tech, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 p-4 rounded-lg text-center hover:shadow-md hover:border-[#116366]/30 transition-all">
                <span className="font-semibold text-gray-800">{tech}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="relative bg-gradient-to-br from-[#116366] to-[#0d4d50] text-white overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#14b8a6]/10 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto py-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-lg md:text-xl mb-10 text-white/90 leading-relaxed">
              Ready to get started? Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="bg-white text-[#116366] hover:bg-gray-100 transition-all">
                  Schedule Free Consultation
                </Button>
              </Link>
              <Link href={`/${locale}/portfolio`}>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#116366] transition-all">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
