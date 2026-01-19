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
  Cpu,
  Wifi,
  Shield,
  Database,
  Zap,
  Activity,
  CheckCircle,
  ArrowRight,
  Home,
  Factory,
  Thermometer,
  Camera,
  MapPin,
  TrendingUp,
  Users,
  Palette,
  Cog,
  Rocket,
  Headphones,
  TestTube,
  Sparkles,
  Target,
  Clock,
  DollarSign,
  Award,
  Globe,
  Building2,
  Lightbulb,
  BarChart,
  ChevronDown,
  Gauge,
  Cloud,
  Radio,
} from 'lucide-react';
import { useState } from 'react';

export default function IoTSolutionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    {
      icon: <Cpu className="w-8 h-8 text-white" />,
      value: '10K+',
      label: 'Devices Terkoneksi',
      description: 'IoT devices yang kami manage untuk klien',
    },
    {
      icon: <Gauge className="w-8 h-8 text-white" />,
      value: '99.8%',
      label: 'Uptime',
      description: 'Availability rate sistem IoT yang kami develop',
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      value: '<100ms',
      label: 'Latency',
      description: 'Average response time real-time monitoring',
    },
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      value: '45%',
      label: 'Cost Reduction',
      description: 'Rata-rata penghematan operational cost klien',
    },
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6 text-[#116366]" />,
      title: 'Real-time Monitoring & Control',
      description: 'Monitor dan kontrol devices dari mana saja, kapan saja dengan dashboard yang intuitif dan mobile apps.',
    },
    {
      icon: <BarChart className="w-6 h-6 text-[#116366]" />,
      title: 'Data-Driven Decisions',
      description: 'Transformasi data sensor menjadi actionable insights dengan analytics dan reporting yang comprehensive.',
    },
    {
      icon: <DollarSign className="w-6 h-6 text-[#116366]" />,
      title: 'Operational Efficiency',
      description: 'Hemat biaya operasional hingga 45% dengan automation, predictive maintenance, dan optimasi resource.',
    },
    {
      icon: <Zap className="w-6 h-6 text-[#116366]" />,
      title: 'Scalable Infrastructure',
      description: 'Architecture yang siap scale dari 10 devices sampai 100K+ devices tanpa bottleneck performance.',
    },
    {
      icon: <Shield className="w-6 h-6 text-[#116366]" />,
      title: 'Enterprise Security',
      description: 'End-to-end encryption, secure authentication, dan compliance dengan industrial security standards.',
    },
    {
      icon: <Globe className="w-6 h-6 text-[#116366]" />,
      title: 'Edge & Cloud Computing',
      description: 'Kombinasi edge computing untuk low-latency dan cloud untuk storage & advanced analytics.',
    },
  ];

  const caseStudies = [
    {
      industry: 'Manufacturing',
      company: 'Automotive Parts Factory',
      challenge: 'Unplanned downtime menyebabkan kerugian Rp 200jt/bulan',
      solution: 'Industrial IoT dengan Predictive Maintenance',
      results: [
        '78% reduction in unplanned downtime',
        'Rp 150jt/bulan cost savings',
        '25% increase in OEE (Overall Equipment Effectiveness)',
        'ROI achieved in 8 months',
      ],
      icon: <Factory className="w-12 h-12 text-white" />,
    },
    {
      industry: 'Smart Building',
      company: 'Commercial Office Complex',
      challenge: 'Energy costs tinggi dan tidak ada visibility untuk optimasi',
      solution: 'Smart Building Management System',
      results: [
        '35% reduction in energy consumption',
        'Rp 80jt/tahun savings on electricity',
        'Automated climate & lighting control',
        'Real-time energy monitoring dashboard',
      ],
      icon: <Building2 className="w-12 h-12 text-white" />,
    },
    {
      industry: 'Agriculture',
      company: 'Greenhouse Farming',
      challenge: 'Manual monitoring tidak konsisten, crop yield tidak optimal',
      solution: 'Smart Agriculture IoT System',
      results: [
        '40% increase in crop yield',
        'Automated climate & irrigation control',
        '90% reduction in water waste',
        'Remote monitoring via mobile app',
      ],
      icon: <Thermometer className="w-12 h-12 text-white" />,
    },
  ];

  const faqs = [
    {
      question: 'Berapa biaya untuk implementasi IoT solution?',
      answer: 'Biaya bervariasi tergantung skala dan kompleksitas. Simple monitoring system (10-50 sensors) mulai dari Rp 25-50jt. Medium scale (50-200 devices) Rp 50-150jt. Industrial/enterprise scale (200+ devices) Rp 150jt+. Biaya include: hardware, software development, cloud infrastructure setup, dan deployment. Kami provide detail quotation setelah assessment.',
    },
    {
      question: 'Apa perbedaan Edge Computing vs Cloud Computing untuk IoT?',
      answer: 'Edge Computing: processing di local devices/gateway, low latency (<100ms), works offline, cocok untuk real-time critical applications (manufacturing, autonomous systems). Cloud Computing: processing di cloud server, unlimited storage & computing power, cocok untuk advanced analytics dan ML. Best practice: hybrid approach - edge untuk real-time decisions, cloud untuk storage & analytics.',
    },
    {
      question: 'Bagaimana dengan security IoT devices?',
      answer: 'Security adalah prioritas utama. Kami implement: (1) Device authentication dengan PKI/certificate, (2) Encrypted communication (TLS 1.3, AES-256), (3) Secure OTA updates, (4) Network segmentation & firewall, (5) Regular security audits. Comply dengan IEC 62443 untuk industrial IoT dan ISO 27001 untuk information security.',
    },
    {
      question: 'Apakah bisa integrasi dengan sistem existing kami?',
      answer: 'Ya, tentu. Kami punya experience integrasi dengan: ERP systems (SAP, Oracle), SCADA/MES untuk manufacturing, Building Management Systems (BMS), berbagai databases (SQL, NoSQL, TimeSeries), dan third-party APIs. Kami provide RESTful APIs, MQTT broker, dan webhooks untuk kemudahan integrasi.',
    },
    {
      question: 'Berapa lama waktu implementasi IoT project?',
      answer: 'Timeline tergantung scope: (1) POC/Pilot: 1-2 bulan untuk 5-10 devices, (2) Small deployment: 2-4 bulan untuk <50 devices, (3) Medium scale: 4-6 bulan untuk 50-200 devices, (4) Large enterprise: 6-12 bulan untuk 200+ devices. Include: planning, development, hardware procurement, deployment, testing, dan training.',
    },
    {
      question: 'Apa yang include dalam maintenance & support?',
      answer: 'Maintenance package include: (1) 24/7 monitoring & alerting, (2) Monthly system health reports, (3) Firmware/software updates, (4) Security patches, (5) Technical support (email/phone), (6) SLA guarantee 99.5%+ uptime, (7) Data backup & disaster recovery. Pricing typically 15-20% dari project value per tahun.',
    },
  ];

  const features = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Smart Device Integration',
      description: 'Connect and manage sensors, controllers, and IoT devices seamlessly',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Real-time Connectivity',
      description: 'MQTT, CoAP, and HTTP protocols for reliable device communication',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Analytics',
      description: 'Process and analyze IoT data for actionable insights',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure by Design',
      description: 'End-to-end encryption and secure device authentication',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Remote Monitoring',
      description: 'Monitor and control devices from anywhere, anytime',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Edge Computing',
      description: 'Process data locally for faster response and reduced latency',
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  const solutions = [
    {
      icon: <Home className="w-12 h-12 text-white" />,
      title: 'Smart Home & Building',
      description: 'Intelligent automation for residential and commercial buildings',
      price: 'From Rp 30.000.000',
      features: ['Lighting Control', 'Climate Management', 'Security Systems', 'Energy Monitoring', 'Mobile App'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Factory className="w-12 h-12 text-white" />,
      title: 'Industrial IoT (IIoT)',
      description: 'Smart manufacturing and industrial automation',
      price: 'From Rp 100.000.000',
      features: ['Machine Monitoring', 'Predictive Maintenance', 'Production Analytics', 'Quality Control', 'OEE Tracking'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Thermometer className="w-12 h-12 text-white" />,
      title: 'Environmental Monitoring',
      description: 'Track temperature, humidity, air quality and more',
      price: 'From Rp 25.000.000',
      features: ['Multi-sensor Support', 'Real-time Alerts', 'Historical Data', 'Custom Reports', 'API Access'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: <MapPin className="w-12 h-12 text-white" />,
      title: 'Asset Tracking',
      description: 'GPS-based tracking for vehicles and valuable assets',
      price: 'From Rp 35.000.000',
      features: ['Real-time Location', 'Geofencing', 'Route Optimization', 'Movement History', 'Alerts & Notifications'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Camera className="w-12 h-12 text-white" />,
      title: 'Smart Surveillance',
      description: 'AI-powered video surveillance and security',
      price: 'From Rp 50.000.000',
      features: ['Face Recognition', 'Motion Detection', 'Cloud Recording', 'Mobile Alerts', 'Analytics'],
      gradient: 'from-indigo-500 to-blue-500',
    },
  ];

  const techStack = [
    { category: 'Protocols', techs: ['MQTT', 'CoAP', 'HTTP/HTTPS', 'WebSocket', 'LoRaWAN'] },
    { category: 'Platforms', techs: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'ThingsBoard', 'Node-RED'] },
    { category: 'Hardware', techs: ['Arduino', 'Raspberry Pi', 'ESP32/ESP8266', 'LoRa', 'Zigbee'] },
    { category: 'Database & Analytics', techs: ['InfluxDB', 'TimescaleDB', 'MongoDB', 'Grafana', 'Kibana'] },
  ];

  const useCases = [
    {
      icon: <Factory className="w-8 h-8 text-[#116366]" />,
      title: 'Manufacturing',
      description: 'Production monitoring, quality control, and predictive maintenance',
    },
    {
      icon: <Home className="w-8 h-8 text-[#116366]" />,
      title: 'Smart Buildings',
      description: 'Energy management, security, and building automation',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#116366]" />,
      title: 'Agriculture',
      description: 'Precision farming, climate control, and crop monitoring',
    },
    {
      icon: <Zap className="w-8 h-8 text-[#116366]" />,
      title: 'Energy Management',
      description: 'Smart grid, renewable energy monitoring, and optimization',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      desc: 'Assess your IoT requirements and use cases',
      icon: <Users className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '02',
      title: 'Design',
      desc: 'Architecture design and device selection',
      icon: <Palette className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '03',
      title: 'Prototyping',
      desc: 'Proof of concept and testing',
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      step: '04',
      title: 'Development',
      desc: 'Platform and firmware development',
      icon: <Cog className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: '05',
      title: 'Deployment',
      desc: 'Device installation and configuration',
      icon: <Rocket className="w-8 h-8" />,
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
      <Section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <HeroBackground />
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#116366]/10 to-[#14b8a6]/10 rounded-full mb-6 border border-[#116366]/20">
                <Sparkles className="w-4 h-4 text-[#116366]" />
                <span className="text-[#116366] font-semibold text-sm">Internet of Things Solutions</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                Koneksikan Dunia Anda dengan
                <span className="bg-gradient-to-r from-[#116366] to-[#14b8a6] bg-clip-text text-transparent"> Internet of Things</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Bangun ekosistem IoT yang intelligent - dari Smart Home, Industrial IoT, hingga Smart Agriculture.
                Sudah mengelola <strong>10K+ devices</strong> dengan <strong>99.8% uptime</strong> dan latency <strong>&lt;100ms</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#116366] hover:bg-[#0d4d50] text-white group">
                    Konsultasi IoT Gratis
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline" className="border-[#116366] text-[#116366] hover:bg-[#116366] hover:text-white">
                    Lihat Portfolio IoT
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#14b8a6]" />
                  <span>10K+ Devices Connected</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#14b8a6]" />
                  <span>99.8% Uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#14b8a6]" />
                  <span>45% Cost Reduction</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#116366]/20 to-[#14b8a6]/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                        <Cpu className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Smart Devices</h3>
                        <p className="text-sm text-gray-600">Connect & manage 10K+ IoT devices</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                        <Radio className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Real-time Data</h3>
                        <p className="text-sm text-gray-600">MQTT, CoAP, WebSocket protocols</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                        <Cloud className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Edge & Cloud</h3>
                        <p className="text-sm text-gray-600">Hybrid computing untuk optimal performance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section className="bg-gradient-to-br from-[#116366] via-[#14b8a6] to-[#0d9488] text-white">
        <Container>
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                IoT Solutions dengan Performa Terbukti
              </h2>
              <p className="text-xl text-white/90">
                Data real dari implementasi IoT kami
              </p>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <p className="text-white/80 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-white">
        <BackgroundPattern variant="dots" opacity={0.04} />
        <Container className="relative z-10">
          <SectionHeader
            subtitle="Keuntungan"
            title="Mengapa Implementasi IoT itu Penting?"
            description="Manfaat konkret yang Anda dapatkan dengan implementasi IoT."
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-[#116366]/10 flex items-center justify-center mb-3 group-hover:bg-[#116366] group-hover:scale-110 transition-all duration-300">
                      <div className="group-hover:text-white transition-colors">
                        {benefit.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg mb-2">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Features */}
      <Section className="bg-gray-50">
        <BackgroundPattern variant="dots" opacity={0.04} />
        <Container className="relative z-10">
          <SectionHeader
            subtitle="Our Expertise"
            title="IoT Capabilities"
            description="Comprehensive IoT services from device to cloud."
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
                <Card className="group hover:shadow-xl transition-all duration-300 border-none h-full">
                  <CardHeader>
                    <motion.div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 text-white`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Solutions & Packages */}
      <Section className="bg-white">
        <BackgroundPattern variant="grid" opacity={0.03} />
        <Container className="relative z-10">
          <SectionHeader
            subtitle="Our Packages"
            title="IoT Solution Packages"
            description="Ready-to-deploy IoT solutions for various industries."
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-2xl transition-all duration-300 border-none h-full">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-4`}>
                      {solution.icon}
                    </div>
                    <CardTitle className="text-xl mb-2">{solution.title}</CardTitle>
                    <CardDescription className="text-gray-600 mb-4">{solution.description}</CardDescription>
                    <div className="text-2xl font-bold text-[#116366]">{solution.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-5 h-5 text-[#14b8a6] flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Case Studies */}
      <Section className="bg-gray-50">
        <BackgroundPattern variant="circuit" opacity={0.025} />
        <Container className="relative z-10">
          <SectionHeader
            subtitle="Success Stories"
            title="IoT Implementation yang Sukses"
            description="Kisah nyata transformasi bisnis dengan IoT."
            centered
          />
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  <div className="bg-gradient-to-br from-[#116366] to-[#14b8a6] p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        {study.icon}
                      </div>
                      <span className="text-white/90 text-sm font-semibold px-3 py-1 bg-white/20 rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">{study.company}</h3>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 font-semibold uppercase mb-2">Tantangan</p>
                      <p className="text-gray-700 text-sm">{study.challenge}</p>
                    </div>
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 font-semibold uppercase mb-2">Solusi</p>
                      <p className="text-[#116366] font-semibold text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase mb-3">Hasil</p>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <Sparkles className="w-4 h-4 text-[#14b8a6] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Use Cases */}
      <Section className="bg-white">
        <BackgroundPattern variant="circuit" opacity={0.025} />
        <Container className="relative z-10">
          <SectionHeader
            subtitle="Industries"
            title="IoT Use Cases"
            description="IoT applications across different sectors."
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-[#116366]/10 flex items-center justify-center mb-3">
                    {useCase.icon}
                  </div>
                  <CardTitle className="text-lg">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Tech Stack */}
      <Section className="bg-gray-50">
        <BackgroundPattern variant="dots" opacity={0.04} />
        <Container className="relative z-10">
          <SectionHeader
            subtitle="Technologies"
            title="Our IoT Tech Stack"
            description="Industry-standard IoT technologies and platforms."
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-[#116366]">{stack.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {stack.techs.map((tech, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#14b8a6]" />
                        {tech}
                      </li>
                    ))}
                  </ul>
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
            title="IoT Development Process"
            description="From concept to deployment, a proven methodology for IoT success."
            centered
          />

          <ProcessFlow steps={process} />
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-white">
        <BackgroundPattern variant="dots" opacity={0.03} />
        <Container className="relative z-10">
          <SectionHeader
            subtitle="FAQ"
            title="Pertanyaan yang Sering Diajukan"
            description="Jawaban untuk pertanyaan umum tentang IoT implementation."
            centered
          />
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className="border-none shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-lg font-semibold text-gray-900 flex-1">
                        {faq.question}
                      </CardTitle>
                      <motion.div
                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="w-5 h-5 text-[#116366]" />
                      </motion.div>
                    </div>
                  </CardHeader>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? 'auto' : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <CardContent className="pt-0 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-gray-900 via-[#116366] to-[#0d4d50] text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Siap Koneksikan Devices Anda?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Mari bangun ekosistem IoT yang powerful dan unlock new possibilities untuk bisnis Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-[#116366] hover:bg-gray-100">
                    Mulai Project IoT
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#116366]">
                    Lihat Portfolio IoT
                  </Button>
                </Link>
              </div>
              <p className="mt-8 text-white/70 text-sm">
                💡 Free Consultation & POC Development untuk project IoT pertama Anda
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  );
}
