'use client';

import { PremiumHero } from '@/components/premium/PremiumHero';
import { PremiumSection } from '@/components/premium/PremiumSection';
import { PremiumCard } from '@/components/premium/PremiumCard';
import { Container } from '@/components/sections/Container';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { ProcessFlow } from '@/components/sections/ProcessFlow';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  Building2,
  Mail,
  Database,
  FileText,
  BarChart3,
  Users,
  CheckCircle,
  Search,
  Palette,
  Cog,
  TestTube,
  Rocket,
  Headphones,
  Sparkles
} from 'lucide-react';

export default function CorporateSetupPage() {
  const params = useParams();
  const locale = params.locale as string;

  const packages = [
    {
      name: 'Starter Corporate',
      subtitle: 'For Startups & UKM (1-20 employees)',
      price: 'Rp 15.000.000',
      monthly: 'Rp 2.500.000/month',
      features: [
        'Email Zimbra (50GB/user)',
        'ERPNext - Accounting & Finance',
        'Inventory Management',
        'Sales & CRM Basic',
        'HR & Payroll Basic',
        'Nextcloud 500GB Storage',
        'Project Management Tools',
        'Basic Support (9x5)',
      ],
      recommended: false,
    },
    {
      name: 'Professional Corporate',
      subtitle: 'For Medium Business (20-100 employees)',
      price: 'Rp 45.000.000',
      monthly: 'Rp 7.500.000/month',
      features: [
        'Email Zimbra Enterprise (Unlimited)',
        'Odoo ERP - Full Suite',
        'Advanced Inventory & Warehouse',
        'Manufacturing Module',
        'Complete HR & Payroll',
        'CRM & Marketing Automation',
        'E-Commerce Integration',
        'Document Management (Alfresco)',
        'Business Intelligence (Metabase)',
        'Team Chat & Video Conference',
        'Priority Support (24x7)',
      ],
      recommended: true,
    },
    {
      name: 'Enterprise Corporate',
      subtitle: 'For Large Enterprises (100+ employees)',
      price: 'Custom Pricing',
      monthly: 'From Rp 20.000.000/month',
      features: [
        'Email Zimbra + Active Directory',
        'Enterprise ERP (Apache OFBiz)',
        'Supply Chain Management',
        'Multi-location Support',
        'Advanced Analytics & BI',
        'AI-Powered Chatbot',
        'Custom LLM Integration',
        'Security Suite (Firewall, IDS/IPS)',
        'Disaster Recovery Setup',
        'Dedicated Account Manager',
        '24x7 Premium Support',
        'Custom Development',
      ],
      recommended: false,
    },
  ];

  const included = [
    { icon: <Mail className="w-12 h-12" />, title: 'Email Zimbra', description: 'Professional email with custom domain, calendars, and collaboration tools' },
    { icon: <Database className="w-12 h-12" />, title: 'ERP System', description: 'Complete business management from accounting to manufacturing' },
    { icon: <FileText className="w-12 h-12" />, title: 'Document Management', description: 'Secure file storage, sharing, and version control with Nextcloud' },
    { icon: <BarChart3 className="w-12 h-12" />, title: 'Analytics & BI', description: 'Data-driven insights with real-time dashboards and reports' },
    { icon: <Users className="w-12 h-12" />, title: 'HR & Payroll', description: 'Employee management, attendance, and automated payroll processing' },
    { icon: <Building2 className="w-12 h-12" />, title: 'Setup & Training', description: 'Complete implementation with onsite training and documentation' },
  ];

  const implementationProcess = [
    {
      step: '01',
      title: 'Consultation',
      desc: 'Understand business needs and requirements',
      icon: <Search className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      step: '02',
      title: 'Planning',
      desc: 'Design infrastructure and system architecture',
      icon: <Palette className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
    },
    {
      step: '03',
      title: 'Setup',
      desc: 'Install and configure all systems',
      icon: <Cog className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
    },
    {
      step: '04',
      title: 'Testing',
      desc: 'Quality assurance and user acceptance',
      icon: <TestTube className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
    },
    {
      step: '05',
      title: 'Go-Live',
      desc: 'Deploy and launch to production',
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      step: '06',
      title: 'Support',
      desc: 'Ongoing maintenance and assistance',
      icon: <Headphones className="w-8 h-8" />,
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <>
      <PremiumHero
        badge={{
          icon: <Sparkles className="w-5 h-5" />,
          text: 'Corporate Solutions'
        }}
        title="Complete IT Infrastructure"
        titleHighlight="for Your Business"
        description="All-in-one corporate setup including Email Zimbra, ERP, Document Management, Business Intelligence, and more. Open-source based solutions with no vendor lock-in. Trusted by 140+ businesses."
        primaryCTA={{
          text: 'Get Started',
          href: `/${locale}/contact`
        }}
        secondaryCTA={{
          text: 'View Demo',
          href: `/${locale}/portfolio`
        }}
        locale={locale}
      />

      {/* What's Included */}
      <PremiumSection variant="white" pattern="dots">
        <SectionHeader
          subtitle="What You Get"
          title="Complete Corporate IT Suite"
          description="Everything your business needs to operate efficiently in one integrated package."
          centered
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {included.map((item, index) => (
            <PremiumCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </PremiumSection>

      {/* Implementation Process */}
      <PremiumSection variant="gray" pattern="grid">
        <SectionHeader
          subtitle="Implementation Process"
          title="How We Get You Started"
          description="Seamless implementation from consultation to go-live in 6 structured phases"
          centered
        />
        <ProcessFlow steps={implementationProcess} />
      </PremiumSection>

      {/* Packages */}
      <PremiumSection variant="white" pattern="dots" id="packages">
        <SectionHeader
          subtitle="Our Packages"
          title="Choose Your Corporate Package"
          description="Flexible packages designed for businesses of all sizes."
          centered
        />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ${
                pkg.recommended
                  ? 'border-[#116366] border-2 shadow-xl scale-105'
                  : 'border-gray-200 border'
              }`}
            >
              {pkg.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#116366] to-[#14b8a6] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    ⭐ Recommended
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  {pkg.subtitle}
                </CardDescription>
                <div className="text-4xl font-bold text-[#116366] mb-2">
                  {pkg.price}
                </div>
                <div className="text-sm text-gray-600">
                  + {pkg.monthly} support
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-[#14b8a6] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/${locale}/contact`}>
                  <Button
                    className={`w-full ${
                      pkg.recommended
                        ? 'bg-[#116366] hover:bg-[#0d4d50] text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </PremiumSection>

      {/* CTA */}
      <PremiumSection variant="gradient" pattern="circuit" patternOpacity={0.05}>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business Operations?
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Get your complete corporate IT infrastructure setup and start operating efficiently today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/contact`}>
              <Button
                size="lg"
                className="bg-white text-[#116366] hover:bg-gray-100 font-semibold px-8"
              >
                Get Started
              </Button>
            </Link>
            <Link href={`/${locale}/portfolio`}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8"
              >
                View Demo
              </Button>
            </Link>
          </div>
        </div>
      </PremiumSection>
    </>
  );
}
