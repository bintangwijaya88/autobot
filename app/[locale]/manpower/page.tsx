import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/sections/Container';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BackgroundPattern } from '@/components/ui/background-pattern';
import Link from 'next/link';
import {
  Users,
  Code,
  Brain,
  Shield,
  Palette,
  Server,
  CheckCircle,
  Award,
  TrendingUp,
  Clock,
  Target,
} from 'lucide-react';

export default function ManpowerPage() {
  const categories = [
    {
      icon: <Server className="w-8 h-8 text-white" />,
      title: 'Network & Infrastructure',
      roles: ['Network Engineer', 'System Admin', 'Cloud Architect', 'DevOps Engineer'],
      certifications: ['CCNA', 'CCNP', 'AWS Certified', 'Azure Administrator'],
      pricing: 'Rp 8jt - 35jt/month',
    },
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: 'Software Developers',
      roles: ['Full Stack Dev', 'Mobile Dev', 'Backend Engineer', 'Frontend Engineer'],
      certifications: ['AWS Dev', 'Google Cloud', 'Oracle Java', 'BNSP'],
      pricing: 'Rp 7jt - 30jt/month',
    },
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: 'Data & AI Specialists',
      roles: ['Data Analyst', 'Data Engineer', 'Data Scientist', 'AI Engineer'],
      certifications: ['AWS Data Analytics', 'TensorFlow', 'IBM Data Science'],
      pricing: 'Rp 9jt - 40jt/month',
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: 'Project Managers',
      roles: ['IT Project Manager', 'Scrum Master', 'Product Owner', 'Business Analyst'],
      certifications: ['PMP', 'CSM', 'PRINCE2', 'CBAP'],
      pricing: 'Rp 10jt - 45jt/month',
    },
    {
      icon: <Palette className="w-8 h-8 text-white" />,
      title: 'UI/UX Designers',
      roles: ['UI/UX Designer', 'Product Designer', 'Graphic Designer'],
      certifications: ['Adobe Certified', 'Google UX', 'BNSP'],
      pricing: 'Rp 6jt - 25jt/month',
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'QA & Testing',
      roles: ['QA Engineer', 'Test Automation', 'Performance Tester'],
      certifications: ['ISTQB', 'Selenium Certified', 'AWS DevOps'],
      pricing: 'Rp 7jt - 28jt/month',
    },
  ];

  const engagementModels = [
    {
      title: 'Staff Augmentation',
      description: 'Temporary staff to extend your team for specific projects.',
      features: [
        'Flexible 1-12 month contracts',
        'Ready in 1-2 weeks',
        'No recruitment overhead',
        'Scale up/down as needed',
      ],
      pricing: 'Monthly rate + 15% fee',
      ideal: 'Short-term projects',
    },
    {
      title: 'Dedicated Team',
      description: 'Full committed team exclusively for your projects.',
      features: [
        'Full commitment to your project',
        'Dedicated workspace',
        'Daily standup & reporting',
        'Experienced team lead',
      ],
      pricing: 'From Rp 35jt/month',
      ideal: '3-5 person teams',
    },
    {
      title: 'Project-Based',
      description: 'Complete team for specific deliverables with fixed price.',
      features: [
        'Fixed price & timeline',
        'Clear scope & deliverable',
        'Risk sharing',
        'Quality guarantee',
      ],
      pricing: 'Based on scope',
      ideal: 'Defined projects',
    },
    {
      title: 'Managed Services',
      description: 'We run your entire IT infrastructure and operations.',
      features: [
        '24/7 monitoring & support',
        'Proactive maintenance',
        'SLA guarantee',
        'Cost predictability',
      ],
      pricing: 'From Rp 15jt/month',
      ideal: 'Ongoing operations',
    },
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: 'Certified Professionals',
      description: 'All staff hold relevant international/national certifications',
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: 'Pre-Vetted Talent',
      description: 'Technical tests & background checks completed',
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: 'Quick Deployment',
      description: 'Staff ready within 1-2 weeks of request',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: 'Continuous Learning',
      description: 'Staff regularly updated with latest technologies',
    },
  ];

  return (
    <>
      <Hero
        subtitle="IT Manpower Services"
        title="Certified IT Professionals Ready to Join Your Team"
        description="Access certified developers, engineers, and IT specialists without the hassle of recruitment. Flexible engagement models from 1 month to full-time."
        primaryCTA={{ text: 'Find Talent', href: '/contact' }}
        secondaryCTA={{ text: 'View Packages', href: '#packages' }}
        image={
          <div className="relative">
            <div className="bg-gradient-to-br from-[#116366] to-[#14b8a6] rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="h-2 w-12 bg-white/20 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#14b8a6]/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#116366]/20 rounded-full blur-xl"></div>
          </div>
        }
      />

      {/* Stats */}
      <Section className="bg-white border-t border-gray-100">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '100+', label: 'IT Professionals' },
              { number: '50+', label: 'Certifications' },
              { number: '1-2 Weeks', label: 'Deployment Time' },
              { number: '98%', label: 'Client Retention' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#116366] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Categories */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeader
            subtitle="Available Talent"
            title="Expert IT Professionals by Category"
            description="Browse our pool of certified professionals across different specializations."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all bg-white">
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center mb-4">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Roles:</div>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {category.roles.map((role, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#116366]"></div>
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Certifications:</div>
                    <div className="flex flex-wrap gap-2">
                      {category.certifications.map((cert, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 border border-gray-200 text-xs rounded">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-lg font-bold text-[#116366]">{category.pricing}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Engagement Models */}
      <Section id="packages" className="bg-white">
        <Container>
          <SectionHeader
            subtitle="Engagement Models"
            title="Flexible Ways to Work With Us"
            description="Choose the engagement model that best fits your project needs."
            centered
          />

          <div className="grid md:grid-cols-2 gap-8">
            {engagementModels.map((model, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl">{model.title}</CardTitle>
                  <CardDescription className="text-base">{model.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="h-5 w-5 text-[#14b8a6] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Starting from</div>
                      <div className="text-xl font-bold text-[#116366]">{model.pricing}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-semibold text-gray-500 mb-1">IDEAL FOR</div>
                      <div className="text-sm font-medium text-gray-700">{model.ideal}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeader
            subtitle="Why Choose Us"
            title="Our Advantages"
            description="What makes our IT manpower services stand out."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border border-gray-200 hover:shadow-lg transition-all bg-white">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto rounded-lg bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
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

      {/* Onboarding Process */}
      <Section className="bg-white">
        <Container>
          <SectionHeader
            subtitle="How It Works"
            title="Simple Onboarding Process"
            description="From inquiry to deployment in just 7-14 days."
            centered
          />

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: '1', title: 'Consultation', time: '1-2 days' },
              { step: '2', title: 'Talent Matching', time: '3-5 days' },
              { step: '3', title: 'Interview', time: '1-2 days' },
              { step: '4', title: 'Contract', time: '1-2 days' },
              { step: '5', title: 'Kickoff', time: '1 day' },
            ].map((item, index) => (
              <div key={index} className="relative">
                {index < 4 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gray-200"></div>
                )}
                <div className="relative text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#116366] flex items-center justify-center text-white font-bold text-lg mb-2">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="relative bg-gradient-to-br from-[#116366] to-[#0d4d50] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#14b8a6]/10 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Dream Team?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Let us know your requirements and we'll find the perfect match for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#116366] hover:bg-gray-100">
                  Request Talent
                </Button>
              </Link>
              <Link href="/manpower/talent-marketplace">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#116366]">
                  Browse Talent
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
