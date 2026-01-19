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
  CheckCircle,
  ArrowRight,
  Building2,
  GraduationCap,
  Hospital,
  ShoppingCart,
  Factory,
  Wrench,
} from 'lucide-react';

export default function SolutionsPage() {
  const t = useTranslations();
  const locale = useLocale();
  const solutions = [
    {
      icon: <Building2 className="w-12 h-12 text-[#116366]" />,
      title: t('menu.solutions.corporate.title'),
      description: t('solutions.corporate.description'),
      features: ['Email Zimbra', 'ERPNext/Odoo', 'Document Management', 'BI Dashboard'],
      price: 'From Rp 15.000.000',
      href: `/${locale}/solutions/corporate`,
      category: 'Enterprise',
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-[#116366]" />,
      title: t('menu.solutions.education.title'),
      description: t('solutions.education.description'),
      features: ['Student Information System', 'LMS (Moodle)', 'Library Management', 'Finance Module'],
      price: 'From Rp 20.000.000',
      href: `/${locale}/solutions/education`,
      category: 'Education',
    },
    {
      icon: <Hospital className="w-12 h-12 text-[#116366]" />,
      title: t('menu.solutions.healthcare.title'),
      description: t('solutions.healthcare.description'),
      features: ['Patient Management', 'OPD/IPD', 'BPJS Integration', 'Laboratory & Radiology'],
      price: 'From Rp 75.000.000',
      href: `/${locale}/solutions/healthcare`,
      category: 'Healthcare',
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-[#116366]" />,
      title: t('menu.solutions.retail.title'),
      description: t('solutions.retail.description'),
      features: ['E-Commerce Platform', 'POS System', 'Inventory Management', 'Payment Gateway'],
      price: 'From Rp 10.000.000',
      href: `/${locale}/solutions/retail`,
      category: 'Retail',
    },
  ];

  const benefits = [
    {
      title: 'Ready-to-Deploy',
      description: 'Pre-configured solutions that can be deployed quickly with minimal customization.',
    },
    {
      title: 'Transparent Pricing',
      description: 'Clear pricing packages with no hidden costs. Pay only for what you need.',
    },
    {
      title: 'Industry-Specific',
      description: 'Solutions tailored for specific industries with best practices built-in.',
    },
    {
      title: 'Full Support',
      description: 'Comprehensive training, documentation, and ongoing technical support.',
    },
    {
      title: 'Scalable',
      description: 'Solutions that grow with your business. Start small, scale as needed.',
    },
    {
      title: 'Open Source',
      description: 'Built on open-source technologies. No vendor lock-in, full ownership.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <BackgroundPattern variant="grid" opacity={0.08} className="text-gray-400" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#116366]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#14b8a6]/5 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
              <span className="text-[#116366] font-semibold text-sm">
                Ready-to-Deploy Solutions
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('menu.solutions.title')}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('menu.solutions.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="bg-[#116366] hover:bg-[#0d4d50] text-white group">
                  {t('common.requestQuote')}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href={`/${locale}/portfolio`}>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Solutions Grid */}
      <Section className="bg-white">
        <Container>
          <SectionHeader
            subtitle={t('nav.solutions')}
            title="Choose Your Solution Package"
            description="Industry-specific solutions with transparent pricing and comprehensive features."
            centered
          />

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="group border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg bg-white">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:bg-[#116366]/5 transition-colors">
                      {solution.icon}
                    </div>
                    <span className="px-3 py-1 bg-[#116366]/10 text-[#116366] text-sm font-medium rounded-full">
                      {solution.category}
                    </span>
                  </div>
                  <CardTitle className="text-2xl text-gray-900 mb-2">{solution.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-5 w-5 text-[#116366] mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div>
                      <div className="text-sm text-gray-500">Starting from</div>
                      <div className="text-2xl font-bold text-[#116366]">{solution.price}</div>
                    </div>
                    <Link href={solution.href}>
                      <Button className="bg-[#116366] hover:bg-[#0d4d50] text-white">
                        {t('common.learnMore')}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeader
            subtitle="Why Choose Our Solutions"
            title="Built for Your Success"
            description="Our solutions are designed to deliver maximum value with minimum hassle."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow bg-white">
                <CardHeader>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="relative bg-gradient-to-br from-[#116366] to-[#0d4d50] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#14b8a6]/10 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 text-white/90 leading-relaxed">
              Contact us today for a free consultation and quote. Let's discuss how our solutions
              can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="bg-white text-[#116366] hover:bg-gray-100 transition-all">
                  {t('common.requestQuote')}
                </Button>
              </Link>
              <Link href={`/${locale}/partnership`}>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#116366] transition-all">
                  Partnership Opportunities
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
