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
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  FileText,
  Server,
  CheckCircle,
  ArrowRight,
  Search,
  UserCheck,
  Key,
  Network,
  Bug,
  ShieldCheck,
  Activity,
  TestTube,
  Palette,
  Settings,
} from 'lucide-react';

export default function CybersecurityPage() {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Security Audit',
      description: 'Comprehensive security assessment and vulnerability testing',
    },
    {
      icon: <Lock className="w-8 h-8 text-white" />,
      title: 'Penetration Testing',
      description: 'Ethical hacking to identify security weaknesses',
    },
    {
      icon: <Eye className="w-8 h-8 text-white" />,
      title: 'Security Monitoring',
      description: '24/7 threat detection and incident response',
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: 'Compliance & Certification',
      description: 'ISO 27001, SOC 2, GDPR compliance support',
    },
    {
      icon: <UserCheck className="w-8 h-8 text-white" />,
      title: 'Identity & Access Management',
      description: 'Secure authentication and authorization systems',
    },
    {
      icon: <Network className="w-8 h-8 text-white" />,
      title: 'Network Security',
      description: 'Firewall, VPN, and network segmentation',
    },
  ];

  const solutions = [
    {
      icon: <Search className="w-12 h-12 text-white" />,
      title: 'Security Assessment',
      description: 'Complete security audit and risk analysis',
      price: 'From Rp 25.000.000',
      features: ['Vulnerability Scanning', 'Risk Assessment', 'Security Gaps Analysis', 'Compliance Review', 'Detailed Report'],
    },
    {
      icon: <Bug className="w-12 h-12 text-white" />,
      title: 'Penetration Testing',
      description: 'Ethical hacking and security testing',
      price: 'From Rp 40.000.000',
      features: ['Web App Testing', 'Network Penetration', 'API Security Testing', 'Mobile App Testing', 'Remediation Guide'],
    },
    {
      icon: <Eye className="w-12 h-12 text-white" />,
      title: 'Security Operations Center',
      description: '24/7 monitoring and incident response',
      price: 'From Rp 60.000.000',
      features: ['Real-time Monitoring', 'Threat Detection', 'Incident Response', 'Log Management', 'Monthly Reports'],
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-white" />,
      title: 'Compliance & Certification',
      description: 'ISO 27001, SOC 2, GDPR preparation',
      price: 'From Rp 50.000.000',
      features: ['Gap Analysis', 'Policy Development', 'Implementation Support', 'Audit Preparation', 'Certification Support'],
    },
    {
      icon: <Lock className="w-12 h-12 text-white" />,
      title: 'Security Infrastructure',
      description: 'Complete security infrastructure setup',
      price: 'From Rp 75.000.000',
      features: ['Firewall Setup', 'IDS/IPS', 'WAF Configuration', 'VPN Setup', 'SIEM Integration'],
    },
  ];

  const threats = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
      title: 'Data Breaches',
      description: 'Unauthorized access to sensitive information',
      impact: 'High',
    },
    {
      icon: <Bug className="w-6 h-6 text-red-500" />,
      title: 'Ransomware',
      description: 'Malware that encrypts your data',
      impact: 'Critical',
    },
    {
      icon: <Network className="w-6 h-6 text-red-500" />,
      title: 'DDoS Attacks',
      description: 'Overwhelming your services with traffic',
      impact: 'High',
    },
    {
      icon: <Key className="w-6 h-6 text-red-500" />,
      title: 'Credential Theft',
      description: 'Stolen passwords and authentication tokens',
      impact: 'High',
    },
  ];

  const techStack = [
    { category: 'Security Tools', techs: ['Burp Suite', 'Metasploit', 'Nmap', 'Wireshark', 'OWASP ZAP'] },
    { category: 'SIEM & Monitoring', techs: ['Splunk', 'ELK Stack', 'Wazuh', 'Suricata', 'Snort'] },
    { category: 'Endpoint Protection', techs: ['CrowdStrike', 'SentinelOne', 'Carbon Black', 'Sophos', 'Kaspersky'] },
    { category: 'Compliance', techs: ['ISO 27001', 'SOC 2', 'GDPR', 'PCI DSS', 'HIPAA'] },
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6 text-[#116366]" />,
      title: 'Protect Assets',
      description: 'Safeguard your digital assets and data',
    },
    {
      icon: <FileText className="w-6 h-6 text-[#116366]" />,
      title: 'Ensure Compliance',
      description: 'Meet regulatory and industry standards',
    },
    {
      icon: <UserCheck className="w-6 h-6 text-[#116366]" />,
      title: 'Build Trust',
      description: 'Demonstrate security commitment to customers',
    },
    {
      icon: <Lock className="w-6 h-6 text-[#116366]" />,
      title: 'Prevent Losses',
      description: 'Avoid costly breaches and downtime',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Assessment',
      desc: 'Security audit and vulnerability scanning',
      icon: <Search className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '02',
      title: 'Analysis',
      desc: 'Identify risks and security gaps',
      icon: <FileText className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '03',
      title: 'Planning',
      desc: 'Design security architecture and policies',
      icon: <Palette className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      step: '04',
      title: 'Implementation',
      desc: 'Deploy security controls and solutions',
      icon: <ShieldCheck className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: '05',
      title: 'Testing',
      desc: 'Penetration testing and validation',
      icon: <TestTube className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      step: '06',
      title: 'Monitoring',
      desc: '24/7 security monitoring and response',
      icon: <Activity className="w-8 h-8" />,
      color: 'from-indigo-500 to-blue-500'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <HeroBackground />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              <span className="text-white font-semibold text-sm">
                Cybersecurity Services
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Protect Your Business from Cyber Threats
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive cybersecurity services including security audits, penetration testing,
              compliance certification, and 24/7 monitoring to keep your business secure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#116366] hover:bg-[#0d4d50] text-white group">
                  Get Security Assessment
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Grid */}
      <Section className="bg-white border-t border-gray-100">
        <Container>
          <SectionHeader
            subtitle="Our Services"
            title="Complete Cybersecurity Solutions"
            description="From assessment to implementation, we protect your digital assets"
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
                <Card className="border border-gray-200 hover:shadow-xl transition-all group bg-white h-full">
                  <CardContent className="pt-6">
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-center mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Threat Landscape */}
      <Section className="bg-red-50 border-t border-red-100">
        <Container>
          <SectionHeader
            subtitle="Threat Landscape"
            title="Common Cyber Threats"
            description="Understanding the risks your business faces"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {threats.map((threat, index) => (
              <Card key={index} className="border-2 border-red-200 hover:shadow-lg transition-shadow bg-white">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-red-100 flex items-center justify-center">
                    {threat.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2 text-gray-900">{threat.title}</h3>
                  <p className="text-gray-600 text-center text-sm mb-3">{threat.description}</p>
                  <div className="text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      threat.impact === 'Critical'
                        ? 'bg-red-100 text-red-700 border border-red-300'
                        : 'bg-orange-100 text-orange-700 border border-orange-300'
                    }`}>
                      {threat.impact} Impact
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Solutions */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeader
            subtitle="Security Solutions"
            title="Ready-to-Deploy Security Packages"
            description="Professional security services with transparent pricing"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-2xl transition-all bg-white">
                <CardHeader>
                  <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-center text-xl">{solution.title}</CardTitle>
                  <CardDescription className="text-center">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-sm text-gray-500 mb-1">Starting from</div>
                    <div className="text-2xl font-bold text-[#116366]">{solution.price}</div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#14b8a6] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact">
                    <Button className="w-full bg-[#116366] hover:bg-[#0d4d50] text-white">
                      Request Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Tech Stack */}
      <Section className="bg-white">
        <Container>
          <SectionHeader
            subtitle="Security Technologies"
            title="Industry-Leading Security Tools"
            description="We use enterprise-grade security tools and frameworks"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <CardTitle className="text-lg">{stack.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {stack.techs.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-[#116366]/10 to-[#14b8a6]/10 text-[#116366] text-sm rounded-full border border-[#116366]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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
            subtitle="Our Approach"
            title="Security Implementation Process"
            description="A comprehensive approach to protecting your business"
            centered
          />

          <ProcessFlow steps={process} />
        </Container>
      </Section>

      {/* Benefits */}
      <Section className="bg-white">
        <Container>
          <SectionHeader
            subtitle="Why Invest in Security?"
            title="Benefits of Strong Cybersecurity"
            description="Protect your business and build customer trust"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border border-gray-200 hover:shadow-lg transition-shadow bg-white">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-[#116366]/10 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
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
              Is Your Business Secure?
            </h2>
            <p className="text-lg mb-8 text-white/90 leading-relaxed">
              Get a free security assessment from our cybersecurity experts. We'll identify vulnerabilities
              and provide actionable recommendations to protect your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#116366] hover:bg-gray-100">
                  Schedule Free Assessment
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#116366]">
                  View Security Projects
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
