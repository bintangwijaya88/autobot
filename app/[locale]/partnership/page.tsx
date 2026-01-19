import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/sections/Container';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BackgroundPattern } from '@/components/ui/background-pattern';
import Link from 'next/link';
import { Handshake, TrendingUp, Users, Target, CheckCircle, ArrowRight, Rocket, Heart } from 'lucide-react';

export default function PartnershipPage() {
  const models = [
    {
      title: 'Co-Development Partnership',
      subtitle: 'Joint venture for specific projects',
      description: 'Work together on projects with shared resources and expertise.',
      structure: 'Client 60% | Autobot 40%',
      features: [
        'Joint project ownership',
        'Shared profit & risk',
        'Resource pooling',
        'Knowledge transfer',
        'Long-term collaboration',
      ],
      benefits: [
        'Reduced upfront costs',
        'Access to expertise',
        'Shared market risk',
        'Faster time to market',
      ],
      idealFor: 'Startups with limited capital but strong business model',
    },
    {
      title: 'Equity Partnership',
      subtitle: 'Become part of your digital division',
      description: 'We become strategic partners with equity stake in your digital business.',
      structure: 'Client 70% | Autobot 30%',
      features: [
        'Equity-based collaboration',
        'Embedded development team',
        'Revenue sharing model',
        'Strategic advisory',
        'Long-term commitment',
      ],
      benefits: [
        'Aligned incentives',
        'Dedicated resources',
        'Skin in the game',
        'Strategic partnership',
      ],
      idealFor: 'High-growth potential digital products',
    },
    {
      title: 'Revenue Share Partnership',
      subtitle: 'Performance-based collaboration',
      description: 'Discounted setup with ongoing revenue sharing arrangement.',
      structure: '50% discount setup + 15-25% revenue share',
      features: [
        'Reduced initial investment',
        'Performance-based payment',
        'Ongoing optimization',
        'Growth-aligned model',
        'Monthly reporting',
      ],
      benefits: [
        'Lower upfront costs',
        'Pay for results',
        'Continuous improvement',
        'Transparent metrics',
      ],
      idealFor: 'Digital products with clear revenue model',
    },
  ];

  const requirements = [
    { text: 'Clear business plan and value proposition', icon: <Rocket className="w-5 h-5 text-[#116366]" /> },
    { text: 'Committed founding team', icon: <Users className="w-5 h-5 text-[#116366]" /> },
    { text: 'Scalable business model', icon: <TrendingUp className="w-5 h-5 text-[#116366]" /> },
    { text: 'Market potential and traction', icon: <Target className="w-5 h-5 text-[#116366]" /> },
    { text: 'Willingness for long-term partnership', icon: <Handshake className="w-5 h-5 text-[#116366]" /> },
    { text: 'Transparent communication', icon: <Heart className="w-5 h-5 text-[#116366]" /> },
  ];

  const process = [
    { step: '01', title: 'Initial Discussion', description: 'Share your business idea and goals with us' },
    { step: '02', title: 'Assessment', description: 'We evaluate market potential and technical feasibility' },
    { step: '03', title: 'Proposal', description: 'Customized partnership proposal with terms' },
    { step: '04', title: 'Agreement', description: 'Sign partnership agreement and legal documents' },
    { step: '05', title: 'Kickoff', description: 'Start development with dedicated team' },
  ];

  const successStories = [
    {
      company: 'HealthTech Startup',
      model: 'Equity Partnership',
      result: '500% revenue growth in first year',
      description: 'Telemedicine platform serving 10,000+ patients monthly',
    },
    {
      company: 'EdTech Platform',
      model: 'Revenue Share',
      result: '200+ schools onboarded',
      description: 'Learning management system with 50,000+ students',
    },
    {
      company: 'FinTech Solution',
      model: 'Co-Development',
      result: 'Successful Series A funding',
      description: 'Digital lending platform processing Rp 100B+',
    },
  ];

  return (
    <>
      <Hero
        subtitle="Partnership Opportunities"
        title="Let's Build Something Great Together"
        description="Beyond traditional client-vendor relationships. We offer flexible partnership models including co-development, equity stakes, and revenue sharing."
        primaryCTA={{ text: 'Apply for Partnership', href: '/partnership/apply' }}
        secondaryCTA={{ text: 'View Success Stories', href: '#success' }}
        image={
          <div className="relative">
            <div className="bg-gradient-to-br from-[#116366] to-[#14b8a6] rounded-2xl p-12 shadow-2xl">
              <div className="flex items-center justify-center gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <div className="h-3 w-16 bg-white/30 rounded mb-1"></div>
                  <div className="h-2 w-12 bg-white/20 rounded"></div>
                </div>
                <div className="flex flex-col items-center">
                  <Handshake className="w-16 h-16 text-white mb-4" />
                  <div className="w-20 h-2 bg-white/40 rounded"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                    <Target className="w-12 h-12 text-white" />
                  </div>
                  <div className="h-3 w-16 bg-white/30 rounded mb-1"></div>
                  <div className="h-2 w-12 bg-white/20 rounded"></div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#14b8a6]/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#116366]/20 rounded-full blur-xl"></div>
          </div>
        }
      />

      {/* Partnership Models */}
      <Section className="bg-white border-t border-gray-100">
        <Container>
          <SectionHeader
            subtitle="Partnership Models"
            title="Flexible Collaboration Options"
            description="Choose the partnership model that aligns with your business goals and stage."
            centered
          />

          <div className="space-y-8">
            {models.map((model, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all bg-white">
                <div className="grid lg:grid-cols-3 gap-8 p-8">
                  <div className="lg:col-span-1">
                    <h3 className="text-3xl font-bold mb-3">{model.title}</h3>
                    <p className="text-gray-600 mb-6 text-lg">{model.subtitle}</p>
                    <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                      <div className="text-sm font-semibold text-gray-700 mb-2">Structure</div>
                      <div className="font-bold text-lg text-[#116366]">{model.structure}</div>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <p className="text-gray-600 mb-8 text-lg">{model.description}</p>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-lg mb-4">Features</h4>
                        <ul className="space-y-3">
                          {model.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <CheckCircle className="h-5 w-5 text-[#14b8a6] mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-lg mb-4">Benefits</h4>
                        <ul className="space-y-3 mb-6">
                          {model.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <CheckCircle className="h-5 w-5 text-[#116366] mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <div className="text-xs font-bold text-gray-500 mb-2">IDEAL FOR</div>
                          <div className="text-base font-medium text-gray-800">{model.idealFor}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Requirements */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeader
            subtitle="What We Look For"
            title="Partnership Requirements"
            description="To ensure successful collaboration, we look for these key criteria."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {requirements.map((req, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all bg-white">
                <CardContent className="pt-6">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center text-white font-bold text-lg">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="mb-3">{req.icon}</div>
                      <p className="text-gray-700 font-medium">{req.text}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Application Process */}
      <Section className="bg-white">
        <Container>
          <SectionHeader
            subtitle="How to Apply"
            title="Partnership Application Process"
            description="From initial contact to partnership kickoff in 5 simple steps."
            centered
          />

          <div className="max-w-4xl mx-auto space-y-6">
            {process.map((item, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all bg-white">
                <div className="flex gap-6 p-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-lg bg-[#116366] flex items-center justify-center text-white font-bold text-2xl">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-lg">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/partnership/apply">
              <Button size="lg" className="bg-[#116366] hover:bg-[#0d4d50] text-white">
                Start Application <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Success Stories */}
      <Section id="success" className="bg-gray-50">
        <Container>
          <SectionHeader
            subtitle="Success Stories"
            title="Partnership Success Stories"
            description="Real results from our partnership collaborations."
            centered
          />

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all bg-white">
                <CardHeader>
                  <div className="inline-block px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-sm font-bold mb-4 text-[#116366]">
                    {story.model}
                  </div>
                  <CardTitle className="text-2xl mb-2">{story.company}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="text-3xl font-bold mb-3 text-[#116366]">{story.result}</div>
                    <p className="text-gray-600">{story.description}</p>
                  </div>
                </CardContent>
              </Card>
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
            <div className="w-20 h-20 mx-auto mb-6 rounded-lg bg-white/20 flex items-center justify-center">
              <Handshake className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Let's discuss how we can work together to build something amazing.
            </p>
            <Link href="/partnership/apply">
              <Button size="lg" className="bg-white text-[#116366] hover:bg-gray-100">
                Apply for Partnership
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
