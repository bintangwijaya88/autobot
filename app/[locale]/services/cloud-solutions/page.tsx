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
  Cloud,
  Server,
  Database,
  Zap,
  Shield,
  Globe,
  CheckCircle,
  ArrowRight,
  HardDrive,
  Network,
  Lock,
  TrendingUp,
  Users,
  FileText,
  Search,
  Palette,
  Upload,
  Rocket,
  Headphones,
  Settings,
} from 'lucide-react';

export default function CloudSolutionsPage() {
  const features = [
    {
      icon: <Server className="w-8 h-8 text-white" />,
      title: 'Cloud Migration',
      description: 'Seamless migration of your infrastructure to the cloud',
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: 'Cloud Storage',
      description: 'Scalable and secure cloud storage solutions',
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: 'CDN & Edge Computing',
      description: 'Fast content delivery and edge computing services',
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Cloud Security',
      description: 'Advanced security and compliance for cloud infrastructure',
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Auto-Scaling',
      description: 'Dynamic resource allocation based on demand',
    },
    {
      icon: <Network className="w-8 h-8 text-white" />,
      title: 'Hybrid Cloud',
      description: 'Seamless integration between on-premise and cloud',
    },
  ];

  const solutions = [
    {
      icon: <Cloud className="w-12 h-12 text-white" />,
      title: 'AWS Cloud Setup',
      description: 'Complete AWS infrastructure setup and management',
      price: 'From Rp 30.000.000',
      features: ['EC2 & Load Balancers', 'S3 & CloudFront CDN', 'RDS Database Setup', 'Auto-Scaling Groups', 'CloudWatch Monitoring'],
    },
    {
      icon: <Server className="w-12 h-12 text-white" />,
      title: 'Google Cloud Platform',
      description: 'GCP infrastructure and application deployment',
      price: 'From Rp 35.000.000',
      features: ['Compute Engine', 'Cloud Storage', 'Cloud SQL', 'Kubernetes Engine', 'BigQuery Analytics'],
    },
    {
      icon: <Globe className="w-12 h-12 text-white" />,
      title: 'Azure Cloud Services',
      description: 'Microsoft Azure enterprise cloud solutions',
      price: 'From Rp 32.000.000',
      features: ['Virtual Machines', 'Azure SQL', 'App Services', 'Active Directory', 'DevOps Integration'],
    },
    {
      icon: <HardDrive className="w-12 h-12 text-white" />,
      title: 'Private Cloud Setup',
      description: 'On-premise private cloud infrastructure',
      price: 'From Rp 75.000.000',
      features: ['OpenStack/VMware', 'Storage Cluster', 'Network Virtualization', 'High Availability', 'Disaster Recovery'],
    },
    {
      icon: <Database className="w-12 h-12 text-white" />,
      title: 'Cloud Backup & DR',
      description: 'Automated backup and disaster recovery',
      price: 'From Rp 20.000.000',
      features: ['Automated Backups', 'Point-in-time Recovery', 'Geo-redundancy', 'Encryption', 'Recovery Testing'],
    },
  ];

  const techStack = [
    { category: 'Cloud Platforms', techs: ['AWS', 'Google Cloud', 'Microsoft Azure', 'DigitalOcean', 'Alibaba Cloud'] },
    { category: 'Container & Orchestration', techs: ['Docker', 'Kubernetes', 'Docker Swarm', 'OpenShift', 'Rancher'] },
    { category: 'Infrastructure as Code', techs: ['Terraform', 'Ansible', 'CloudFormation', 'Pulumi', 'Chef'] },
    { category: 'Monitoring & Logging', techs: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'New Relic'] },
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-[#116366]" />,
      title: 'Cost Optimization',
      description: 'Pay only for what you use with auto-scaling',
    },
    {
      icon: <Zap className="w-6 h-6 text-[#116366]" />,
      title: 'High Performance',
      description: 'Fast and reliable infrastructure worldwide',
    },
    {
      icon: <Shield className="w-6 h-6 text-[#116366]" />,
      title: 'Enhanced Security',
      description: 'Enterprise-grade security and compliance',
    },
    {
      icon: <Users className="w-6 h-6 text-[#116366]" />,
      title: 'Easy Collaboration',
      description: 'Team access and resource sharing',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Assessment',
      desc: 'Evaluate current infrastructure and requirements',
      icon: <Search className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '02',
      title: 'Planning',
      desc: 'Design cloud architecture and migration strategy',
      icon: <Palette className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '03',
      title: 'Migration',
      desc: 'Move applications and data to the cloud',
      icon: <Upload className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      step: '04',
      title: 'Deployment',
      desc: 'Configure and deploy cloud services',
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: '05',
      title: 'Optimization',
      desc: 'Fine-tune performance and costs',
      icon: <Settings className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      step: '06',
      title: 'Support',
      desc: 'Ongoing monitoring and maintenance',
      icon: <Headphones className="w-8 h-8" />,
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
                Cloud Solutions
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Scalable Cloud Infrastructure for Modern Businesses
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Migrate, deploy, and manage your applications on secure, high-performance cloud infrastructure.
              AWS, Google Cloud, Azure, and private cloud solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#116366] hover:bg-[#0d4d50] text-white group">
                  Get Cloud Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900">
                  View Projects
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
            subtitle="Our Capabilities"
            title="Comprehensive Cloud Services"
            description="From migration to optimization, we handle all aspects of cloud infrastructure"
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

      {/* Solutions */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeader
            subtitle="Cloud Solutions"
            title="Ready-to-Deploy Cloud Packages"
            description="Pre-configured cloud setups with transparent pricing"
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
            subtitle="Technology Stack"
            title="Industry-Leading Cloud Technologies"
            description="We work with the best cloud platforms and tools"
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
            subtitle="Our Process"
            title="Cloud Migration Process"
            description="A proven methodology for successful cloud transformation"
            centered
          />

          <ProcessFlow steps={process} />
        </Container>
      </Section>

      {/* Benefits */}
      <Section className="bg-white">
        <Container>
          <SectionHeader
            subtitle="Why Cloud?"
            title="Benefits of Cloud Migration"
            description="Transform your business with cloud infrastructure"
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
              Ready to Move to the Cloud?
            </h2>
            <p className="text-lg mb-8 text-white/90 leading-relaxed">
              Our cloud experts will help you design, migrate, and optimize your cloud infrastructure.
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#116366] hover:bg-gray-100">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#116366]">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
