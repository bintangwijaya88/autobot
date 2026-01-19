'use client';

import { PremiumHero } from '@/components/premium/PremiumHero';
import { PremiumSection } from '@/components/premium/PremiumSection';
import { PremiumCard } from '@/components/premium/PremiumCard';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  GraduationCap,
  BookOpen,
  Users,
  Calendar,
  FileText,
  DollarSign,
  CheckCircle,
  Smartphone,
  BarChart3,
  Library,
  Award,
  Sparkles
} from 'lucide-react';

export default function EducationSetupPage() {
  const params = useParams();
  const locale = params.locale as string;

  const packages = [
    {
      name: 'Basic School Package',
      subtitle: 'SD, SMP, TK (100-500 students)',
      price: 'Rp 20.000.000',
      yearlyFee: 'Rp 12.000.000/year',
      features: [
        'Student Information System (OpenSIS)',
        'Learning Management System (Moodle)',
        'Parent Portal Access',
        'Online Attendance',
        'Digital Report Cards',
        'Email for Staff',
        'File Sharing (Nextcloud)',
        'Finance & Billing',
        'SMS Notifications',
        'Mobile App (Android)',
      ],
      recommended: false,
    },
    {
      name: 'Professional School Package',
      subtitle: 'SMA, SMK, Private Schools (500-2000 students)',
      price: 'Rp 40.000.000',
      yearlyFee: 'Rp 24.000.000/year',
      features: [
        'Complete Student Lifecycle Management',
        'Advanced LMS with BigBlueButton',
        'Online Admission System',
        'Library Management (Koha)',
        'Digital Library & E-books',
        'Parent-Teacher Communication',
        'HR & Payroll for Staff',
        'Alumni Management',
        'WhatsApp Integration',
        'Mobile App (iOS + Android)',
        'Performance Analytics',
        'Custom Reports',
      ],
      recommended: true,
    },
    {
      name: 'University Package',
      subtitle: 'Perguruan Tinggi, Politeknik',
      price: 'Custom Pricing',
      yearlyFee: 'From Rp 40.000.000/year',
      features: [
        'Academic ERP (Fedena/ERPNext Education)',
        'Multi-Campus Support',
        'Course Registration System',
        'Exam Management',
        'Transcript Generation',
        'Research Management',
        'Publication Tracking',
        'Advanced LMS (Open edX)',
        'MOOC Capabilities',
        'Certification System',
        'Digital Library (DSpace)',
        'Student & Lecturer Portals',
      ],
      recommended: false,
    },
  ];

  const features = [
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Student Management',
      description: 'Complete student lifecycle management from admission to alumni with comprehensive tracking',
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: 'Learning Management',
      description: 'Full-featured LMS with online classes, assignments, quizzes, and interactive e-learning',
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: 'Attendance & Scheduling',
      description: 'Automated digital attendance tracking, class schedules, and smart timetable management',
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: 'Report Cards',
      description: 'Automated report generation, grade management, and academic performance tracking',
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: 'Finance & Billing',
      description: 'Comprehensive SPP payments, invoicing, financial reports, and payment gateway integration',
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Mobile Apps',
      description: 'Native mobile applications for parents, students, and teachers on iOS and Android',
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: 'Analytics & Reports',
      description: 'Advanced performance tracking, data insights, and customizable reporting dashboards',
    },
    {
      icon: <Library className="w-12 h-12" />,
      title: 'Library Management',
      description: 'Digital library system, book tracking, OPAC, and e-book integration',
    },
  ];

  return (
    <>
      <PremiumHero
        badge={{
          icon: <Sparkles className="w-5 h-5" />,
          text: 'Education Solutions'
        }}
        title="Smart School"
        titleHighlight="Management System"
        description="Transform your educational institution with our complete School Information System (SIS) and Learning Management System (LMS). From elementary to university level, we provide integrated solutions trusted by 95+ schools across Indonesia."
        primaryCTA={{
          text: 'Get Started',
          href: `/${locale}/contact`
        }}
        secondaryCTA={{
          text: 'Request Demo',
          href: '#packages'
        }}
        locale={locale}
      />

      {/* Features */}
      <PremiumSection variant="white" pattern="dots">
        <SectionHeader
          subtitle="Core Features"
          title="Everything Your School Needs"
          description="Comprehensive modules to manage all aspects of your educational institution."
          centered
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <PremiumCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </PremiumSection>

      {/* Packages */}
      <PremiumSection variant="gray" pattern="grid" id="packages">
        <SectionHeader
          subtitle="Our Packages"
          title="Choose Your Education Package"
          description="Flexible packages designed for institutions of all sizes."
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
                  + {pkg.yearlyFee} support
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

      {/* Benefits */}
      <PremiumSection variant="white" pattern="dots">
        <SectionHeader
          subtitle="Key Benefits"
          title="Why Schools Choose Us"
          description="Proven results that improve educational outcomes and operational efficiency."
          centered
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            { title: 'Paperless Administration', description: 'Eliminate paperwork and reduce administrative burden by 80%' },
            { title: 'Improved Communication', description: 'Real-time updates to parents through mobile apps and notifications' },
            { title: 'Academic Tracking', description: 'Monitor student progress and performance in real-time' },
            { title: 'Automated Billing', description: 'Streamlined payment processing with integrated payment gateways' },
            { title: 'Data-Driven Decisions', description: 'Make informed decisions with comprehensive analytics and insights' },
            { title: 'Enhanced Security', description: 'Protect sensitive student data with enterprise-grade security' },
            { title: 'Mobile Accessibility', description: 'Access the system anytime, anywhere from any device' },
            { title: 'Easy Integration', description: 'Connect with existing systems and third-party applications' },
          ].map((benefit, index) => (
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
            Ready to Modernize Your School?
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Join 95+ schools and universities that have transformed their operations with our solutions.
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
            <Link href={`/${locale}/portfolio`}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8"
              >
                View Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </PremiumSection>
    </>
  );
}
