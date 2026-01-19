'use client';

import { PremiumHero } from '@/components/premium/PremiumHero';
import { PremiumSection } from '@/components/premium/PremiumSection';
import { PremiumCard } from '@/components/premium/PremiumCard';
import { Container } from '@/components/sections/Container';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  Hospital,
  Users,
  Activity,
  FileText,
  Calendar,
  Pill,
  TestTube,
  Heart,
  CheckCircle,
  Sparkles
} from 'lucide-react';

export default function HealthcarePage() {
  const params = useParams();
  const locale = params.locale as string;

  const packages = [
    {
      name: 'SIMRS Basic',
      subtitle: 'For Clinics & Small Hospitals',
      price: 'Rp 75.000.000',
      monthly: 'Rp 15.000.000/month',
      features: [
        'Patient Registration',
        'Outpatient Management (OPD)',
        'Pharmacy Management',
        'Laboratory Module',
        'Medical Records',
        'Billing & Invoicing',
        'Basic Reporting',
        'User Management (5 users)',
        'Training & Setup',
        'Standard Support (9x5)',
      ],
      recommended: false,
    },
    {
      name: 'SIMRS Professional',
      subtitle: 'For Medium Hospitals',
      price: 'Rp 150.000.000',
      monthly: 'Rp 25.000.000/month',
      features: [
        'All Basic Features',
        'Inpatient Management (IPD)',
        'Emergency Room Module',
        'Radiology & Imaging',
        'Operation Theater Management',
        'BPJS Integration',
        'Electronic Medical Records (EMR)',
        'Appointment Scheduling',
        'Inventory Management',
        'Advanced Analytics & Reports',
        'Mobile App for Doctors',
        'Priority Support (24x7)',
      ],
      recommended: true,
    },
    {
      name: 'SIMRS Enterprise',
      subtitle: 'For Large Hospitals & Networks',
      price: 'Rp 300.000.000',
      monthly: 'Rp 50.000.000/month',
      features: [
        'All Professional Features',
        'Multi-branch Support',
        'Telemedicine Platform',
        'Clinical Decision Support',
        'ICU Monitoring',
        'Blood Bank Management',
        'Pathology Lab Information System',
        'Queue Management System',
        'Patient Portal & Mobile App',
        'HL7 & FHIR Integration',
        'AI-powered Diagnostics',
        'Custom Modules & Integration',
        'Dedicated Support Team',
        'Onsite Training',
      ],
      recommended: false,
    },
  ];

  const modules = [
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Patient Management',
      description: 'Complete patient registration, demographics, and medical history tracking with intelligent workflows',
    },
    {
      icon: <Activity className="w-12 h-12" />,
      title: 'OPD & IPD',
      description: 'Outpatient and Inpatient department management with real-time bed allocation and queue management',
    },
    {
      icon: <Pill className="w-12 h-12" />,
      title: 'Pharmacy',
      description: 'Advanced drug inventory, prescription management, and automated pharmacy billing system',
    },
    {
      icon: <TestTube className="w-12 h-12" />,
      title: 'Laboratory & Radiology',
      description: 'Comprehensive lab test management, sample tracking, and digital result reporting',
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: 'Appointment System',
      description: 'Smart online booking, automated scheduling, and intelligent patient reminders',
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: 'Electronic Medical Records',
      description: 'Secure digital health records with complete audit trail and advanced security features',
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'BPJS Integration',
      description: 'Seamless integration with Indonesian national health insurance for automated claims',
    },
    {
      icon: <Hospital className="w-12 h-12" />,
      title: 'Multi-department Support',
      description: 'Centralized management of multiple departments, specializations, and workflows',
    },
  ];

  const benefits = [
    {
      title: 'Improve Patient Care',
      description: 'Enhanced patient management and faster service delivery with intelligent automation',
    },
    {
      title: 'Regulatory Compliance',
      description: 'Full compliance with Indonesian healthcare standards and international regulations',
    },
    {
      title: 'Reduce Operational Costs',
      description: 'Streamlined processes and paperless workflows reduce costs by up to 40%',
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Advanced analytics and real-time reports for better hospital management',
    },
    {
      title: 'Scalable Solution',
      description: 'Flexible architecture that grows from small clinic to multi-branch hospital network',
    },
    {
      title: 'Local Support',
      description: '24/7 support from Indonesian team with deep healthcare industry expertise',
    },
  ];

  return (
    <>
      <PremiumHero
        badge={{
          icon: <Sparkles className="w-5 h-5" />,
          text: 'Healthcare SIMRS'
        }}
        title="Complete Hospital"
        titleHighlight="Information System"
        description="Transform your healthcare facility with our comprehensive Hospital Information System (SIMRS). From patient registration to BPJS integration, we provide end-to-end solutions trusted by 50+ hospitals across Indonesia."
        primaryCTA={{
          text: 'Request Demo',
          href: `/${locale}/contact`
        }}
        secondaryCTA={{
          text: 'View Packages',
          href: '#packages'
        }}
        locale={locale}
      />

      {/* Packages */}
      <PremiumSection variant="white" pattern="dots" id="packages">
        <SectionHeader
          subtitle="Our Packages"
          title="Choose Your SIMRS Package"
          description="Flexible packages designed for healthcare facilities of all sizes."
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
                  + {pkg.monthly} maintenance
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
                    Request Demo
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </PremiumSection>

      {/* Modules */}
      <PremiumSection variant="gray" pattern="grid">
        <SectionHeader
          subtitle="Features"
          title="SIMRS Modules"
          description="Comprehensive modules to manage all aspects of your healthcare facility."
          centered
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {modules.map((module, index) => (
            <PremiumCard
              key={index}
              icon={module.icon}
              title={module.title}
              description={module.description}
              index={index}
            />
          ))}
        </div>
      </PremiumSection>

      {/* Benefits */}
      <PremiumSection variant="white" pattern="dots">
        <SectionHeader
          subtitle="Why Choose Our SIMRS"
          title="Benefits for Your Healthcare Facility"
          description="Proven solutions that improve patient care and operational efficiency."
          centered
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
            >
              <CardHeader>
                <CardTitle className="text-lg flex items-start gap-2">
                  <CheckCircle className="w-6 h-6 text-[#14b8a6] flex-shrink-0 mt-1" />
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </PremiumSection>

      {/* CTA */}
      <PremiumSection variant="gradient" pattern="circuit" patternOpacity={0.05}>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Healthcare Facility?
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Schedule a demo and see how our SIMRS can improve your hospital operations and patient care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/contact`}>
              <Button
                size="lg"
                className="bg-white text-[#116366] hover:bg-gray-100 font-semibold px-8"
              >
                Request Demo
              </Button>
            </Link>
            <Link href={`/${locale}/contact`}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </PremiumSection>
    </>
  );
}
