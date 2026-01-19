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
  Brain,
  MessageSquare,
  Eye,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Bot,
  FileText,
  Headphones,
  ShoppingCart,
  Users,
  BarChart,
  Search,
  Database,
  Network,
  TestTube,
  Cog,
  Sparkles,
  Target,
  Clock,
  DollarSign,
  Award,
  Globe,
  Cpu,
  LineChart,
  Building2,
  Rocket,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useState } from 'react';

export default function AISolutionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    {
      icon: <Rocket className="w-8 h-8 text-white" />,
      value: '95%',
      label: 'Peningkatan Efisiensi',
      description: 'Rata-rata peningkatan efisiensi operasional klien',
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      value: '70%',
      label: 'Penghematan Waktu',
      description: 'Pengurangan waktu proses manual dengan AI automation',
    },
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      value: '3.5x',
      label: 'ROI dalam 12 Bulan',
      description: 'Return on investment rata-rata untuk implementasi AI',
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      value: '99.2%',
      label: 'Akurasi Model',
      description: 'Tingkat akurasi rata-rata model AI yang kami kembangkan',
    },
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6 text-[#116366]" />,
      title: 'Pengambilan Keputusan Lebih Baik',
      description: 'AI memberikan insights berbasis data untuk keputusan bisnis yang lebih akurat dan tepat waktu.',
    },
    {
      icon: <Zap className="w-6 h-6 text-[#116366]" />,
      title: 'Otomasi Proses Bisnis',
      description: 'Kurangi tugas manual repetitif dan tingkatkan produktivitas tim hingga 10x lipat.',
    },
    {
      icon: <Users className="w-6 h-6 text-[#116366]" />,
      title: 'Pengalaman Pelanggan Superior',
      description: 'Personalisasi layanan 24/7 dengan chatbot AI dan rekomendasi cerdas.',
    },
    {
      icon: <LineChart className="w-6 h-6 text-[#116366]" />,
      title: 'Prediksi Akurat',
      description: 'Forecast penjualan, demand, dan tren pasar dengan machine learning yang presisi.',
    },
    {
      icon: <DollarSign className="w-6 h-6 text-[#116366]" />,
      title: 'Efisiensi Biaya',
      description: 'Hemat biaya operasional hingga 40% dengan otomasi dan optimasi berbasis AI.',
    },
    {
      icon: <Shield className="w-6 h-6 text-[#116366]" />,
      title: 'Keamanan & Deteksi Fraud',
      description: 'Deteksi anomali dan ancaman keamanan secara real-time dengan AI.',
    },
  ];

  const caseStudies = [
    {
      industry: 'E-Commerce',
      company: 'Marketplace Terkemuka',
      challenge: 'Tingkat customer churn tinggi dan response time lambat',
      solution: 'AI Chatbot & Recommendation Engine',
      results: [
        '45% pengurangan customer churn',
        '60% peningkatan conversion rate',
        '24/7 customer support otomatis',
        '3x peningkatan average order value',
      ],
      icon: <ShoppingCart className="w-12 h-12 text-white" />,
    },
    {
      industry: 'Manufaktur',
      company: 'Pabrik Elektronik',
      challenge: 'Quality control manual memakan waktu dan biaya tinggi',
      solution: 'Computer Vision untuk Quality Control',
      results: [
        '99.8% akurasi deteksi defect',
        '80% pengurangan waktu inspeksi',
        '50% pengurangan waste production',
        'ROI 4.2x dalam 8 bulan',
      ],
      icon: <Eye className="w-12 h-12 text-white" />,
    },
    {
      industry: 'Perbankan',
      company: 'Bank Digital',
      challenge: 'Fraud detection tidak optimal, banyak false positive',
      solution: 'AI Fraud Detection System',
      results: [
        '95% akurasi deteksi fraud',
        '70% pengurangan false positives',
        '$2.5M penghematan dari pencegahan fraud',
        'Real-time monitoring 24/7',
      ],
      icon: <Shield className="w-12 h-12 text-white" />,
    },
  ];

  const faqs = [
    {
      question: 'Berapa lama waktu yang dibutuhkan untuk mengimplementasikan solusi AI?',
      answer: 'Waktu implementasi bervariasi tergantung kompleksitas proyek. AI Chatbot sederhana dapat diselesaikan dalam 4-6 minggu, sementara sistem Computer Vision atau Predictive Analytics kompleks dapat memakan waktu 3-6 bulan. Kami akan memberikan timeline detail setelah assessment awal.',
    },
    {
      question: 'Apakah saya perlu memiliki data dalam jumlah besar?',
      answer: 'Tidak selalu. Untuk beberapa solusi seperti chatbot dengan pre-trained LLM, Anda tidak perlu data besar. Namun untuk custom ML models, idealnya memiliki dataset yang cukup (minimum 1000-5000 data points tergantung use case). Kami juga dapat membantu dengan data augmentation dan synthetic data generation.',
    },
    {
      question: 'Bagaimana dengan keamanan data dan privasi?',
      answer: 'Keamanan data adalah prioritas utama kami. Semua data dienkripsi end-to-end, disimpan di server Indonesia (jika diperlukan), dan kami comply dengan regulasi GDPR dan UU PDP. Kami juga menawarkan on-premise deployment untuk data yang sangat sensitif. NDA dan security audit tersedia.',
    },
    {
      question: 'Apakah AI solution bisa diintegrasikan dengan sistem existing kami?',
      answer: 'Ya, tentu saja. Kami memiliki pengalaman mengintegrasikan AI dengan berbagai sistem seperti ERP (SAP, Oracle), CRM (Salesforce, HubSpot), database (PostgreSQL, MongoDB, MySQL), dan custom applications. Kami menyediakan RESTful API, webhooks, dan SDK untuk kemudahan integrasi.',
    },
    {
      question: 'Apa perbedaan Custom LLM dengan menggunakan ChatGPT langsung?',
      answer: 'Custom LLM di-fine-tune dengan data bisnis Anda, menghasilkan respons yang lebih akurat dan relevan untuk domain spesifik Anda. Anda juga punya kontrol penuh atas data, bisa deploy on-premise, dan customize behavior sesuai brand guidelines. Cocok untuk use case dengan kebutuhan spesifik seperti legal, medical, atau technical support.',
    },
    {
      question: 'Berapa biaya maintenance setelah implementasi?',
      answer: 'Biaya maintenance biasanya 15-20% dari biaya development per tahun, mencakup: monitoring 24/7, model retraining, bug fixes, security updates, dan minor enhancements. Kami juga menawarkan paket managed services dengan SLA guarantee untuk peace of mind Anda.',
    },
  ];

  const industryExamples = [
    {
      icon: <Building2 className="w-8 h-8 text-[#116366]" />,
      title: 'Retail & E-Commerce',
      examples: [
        'Product recommendation engine',
        'Visual search & image recognition',
        'Inventory forecasting',
        'Dynamic pricing optimization',
        'Customer sentiment analysis',
      ],
    },
    {
      icon: <Shield className="w-8 h-8 text-[#116366]" />,
      title: 'Perbankan & Fintech',
      examples: [
        'Fraud detection & prevention',
        'Credit scoring models',
        'Robo-advisors untuk investment',
        'KYC automation dengan OCR',
        'Anti-money laundering (AML)',
      ],
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#116366]" />,
      title: 'Manufaktur',
      examples: [
        'Predictive maintenance',
        'Quality control automation',
        'Supply chain optimization',
        'Defect detection',
        'Production yield prediction',
      ],
    },
    {
      icon: <Users className="w-8 h-8 text-[#116366]" />,
      title: 'Healthcare',
      examples: [
        'Medical image analysis',
        'Patient risk prediction',
        'Drug discovery assistance',
        'Telemedicine chatbots',
        'Hospital resource optimization',
      ],
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-[#116366]" />,
      title: 'Logistik & Supply Chain',
      examples: [
        'Route optimization',
        'Demand forecasting',
        'Warehouse automation',
        'Delivery time prediction',
        'Fleet management',
      ],
    },
    {
      icon: <Globe className="w-8 h-8 text-[#116366]" />,
      title: 'Media & Marketing',
      examples: [
        'Content personalization',
        'Ad targeting optimization',
        'Social media sentiment tracking',
        'Automated content generation',
        'Customer segmentation',
      ],
    },
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Custom LLM Development',
      description: 'Fine-tuned large language models tailored to your business needs',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'AI Chatbots',
      description: 'Intelligent conversational AI for customer support and engagement',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Computer Vision',
      description: 'Image recognition, object detection, and visual AI solutions',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Predictive Analytics',
      description: 'Machine learning models for forecasting and decision support',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'NLP & Text Analysis',
      description: 'Natural language processing for document analysis and insights',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Process Automation',
      description: 'Intelligent automation with RPA and AI-powered workflows',
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  const solutions = [
    {
      icon: <Bot className="w-12 h-12 text-white" />,
      title: 'AI Customer Service Bot',
      description: 'Intelligent chatbot for 24/7 customer support',
      price: 'From Rp 25.000.000',
      features: ['Multi-language Support', 'Intent Recognition', 'Context Awareness', 'CRM Integration', 'Analytics Dashboard'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FileText className="w-12 h-12 text-white" />,
      title: 'Document Intelligence',
      description: 'AI-powered document processing and analysis',
      price: 'From Rp 40.000.000',
      features: ['OCR & Text Extraction', 'Document Classification', 'Data Extraction', 'Sentiment Analysis', 'Summarization'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Eye className="w-12 h-12 text-white" />,
      title: 'Computer Vision System',
      description: 'Visual AI for quality control and monitoring',
      price: 'From Rp 60.000.000',
      features: ['Object Detection', 'Image Classification', 'Face Recognition', 'Anomaly Detection', 'Real-time Processing'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: <BarChart className="w-12 h-12 text-white" />,
      title: 'Predictive Analytics Platform',
      description: 'ML-powered forecasting and business intelligence',
      price: 'From Rp 50.000.000',
      features: ['Sales Forecasting', 'Demand Prediction', 'Customer Churn Analysis', 'Risk Assessment', 'Custom Dashboards'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Headphones className="w-12 h-12 text-white" />,
      title: 'Voice AI Assistant',
      description: 'Speech recognition and voice-controlled systems',
      price: 'From Rp 45.000.000',
      features: ['Speech-to-Text', 'Text-to-Speech', 'Voice Commands', 'Multi-language', 'Custom Wake Words'],
      gradient: 'from-indigo-500 to-blue-500',
    },
  ];

  const techStack = [
    { category: 'LLM & NLP', techs: ['OpenAI GPT', 'Claude', 'LangChain', 'Hugging Face', 'BERT'] },
    { category: 'ML Frameworks', techs: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'XGBoost'] },
    { category: 'Computer Vision', techs: ['OpenCV', 'YOLO', 'TensorFlow Vision', 'Detectron2', 'MediaPipe'] },
    { category: 'Cloud & Infrastructure', techs: ['AWS SageMaker', 'Google AI Platform', 'Azure ML', 'Docker', 'Kubernetes'] },
  ];

  const useCases = [
    {
      icon: <ShoppingCart className="w-8 h-8 text-[#116366]" />,
      title: 'E-Commerce',
      description: 'Product recommendations, chatbots, visual search, and personalization',
    },
    {
      icon: <Users className="w-8 h-8 text-[#116366]" />,
      title: 'Customer Service',
      description: 'Automated support, ticket classification, and sentiment analysis',
    },
    {
      icon: <Shield className="w-8 h-8 text-[#116366]" />,
      title: 'Security & Fraud',
      description: 'Anomaly detection, fraud prevention, and threat intelligence',
    },
    {
      icon: <BarChart className="w-8 h-8 text-[#116366]" />,
      title: 'Business Intelligence',
      description: 'Forecasting, trend analysis, and automated reporting',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      desc: 'Understand your AI needs and use cases',
      icon: <Search className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '02',
      title: 'Data Assessment',
      desc: 'Evaluate data quality and requirements',
      icon: <Database className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '03',
      title: 'Model Development',
      desc: 'Train and fine-tune AI models',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      step: '04',
      title: 'Integration',
      desc: 'Integrate AI into your systems',
      icon: <Network className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: '05',
      title: 'Testing',
      desc: 'Validate accuracy and performance',
      icon: <TestTube className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      step: '06',
      title: 'Optimization',
      desc: 'Continuous improvement and monitoring',
      icon: <TrendingUp className="w-8 h-8" />,
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
                <span className="text-[#116366] font-semibold text-sm">AI & Machine Learning Solutions</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                Transformasi Bisnis dengan
                <span className="bg-gradient-to-r from-[#116366] to-[#14b8a6] bg-clip-text text-transparent"> Artificial Intelligence</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Dari Custom LLM Development, Computer Vision, hingga Predictive Analytics -
                kami menghadirkan solusi AI yang terbukti meningkatkan efisiensi hingga <strong>95%</strong> dan
                menghasilkan <strong>ROI 3.5x</strong> dalam 12 bulan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#116366] hover:bg-[#0d4d50] text-white group">
                    Konsultasi AI Gratis
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline" className="border-[#116366] text-[#116366] hover:bg-[#116366] hover:text-white">
                    Lihat Portfolio AI
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#14b8a6]" />
                  <span>99.2% Akurasi Model</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#14b8a6]" />
                  <span>70% Hemat Waktu</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#14b8a6]" />
                  <span>40% Efisiensi Biaya</span>
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
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Custom LLM</h3>
                        <p className="text-sm text-gray-600">Fine-tuned untuk domain spesifik Anda</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Computer Vision</h3>
                        <p className="text-sm text-gray-600">Deteksi objek & quality control otomatis</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Predictive Analytics</h3>
                        <p className="text-sm text-gray-600">Forecasting akurat untuk keputusan tepat</p>
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
                Dampak Nyata AI untuk Bisnis Anda
              </h2>
              <p className="text-xl text-white/90">
                Statistik keberhasilan dari implementasi AI kami
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
            subtitle="Keuntungan Bisnis"
            title="Mengapa Investasi AI adalah Keharusan?"
            description="Manfaat konkret yang akan Anda dapatkan dari implementasi AI."
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
            subtitle="Our Capabilities"
            title="AI Solutions We Offer"
            description="Comprehensive AI services to solve complex business challenges."
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
      <Section className="bg-gray-50">
        <BackgroundPattern variant="grid" opacity={0.03} />
        <Container className="relative z-10">
          <SectionHeader
            subtitle="Our Packages"
            title="AI Solution Packages"
            description="Pre-built AI solutions that can be customized to your specific needs."
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
      <Section className="bg-white">
        <BackgroundPattern variant="circuit" opacity={0.025} />
        <Container className="relative z-10">
          <SectionHeader
            subtitle="Success Stories"
            title="Studi Kasus: AI yang Mengubah Bisnis"
            description="Kisah sukses implementasi AI dari berbagai industri."
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

      {/* Enhanced Industry Examples */}
      <Section className="bg-gray-50">
        <BackgroundPattern variant="circuit" opacity={0.025} />
        <Container className="relative z-10">
          <SectionHeader
            subtitle="Aplikasi Per Industri"
            title="Solusi AI untuk Setiap Industri"
            description="AI use cases spesifik yang dapat diterapkan di berbagai sektor bisnis."
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryExamples.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-[#116366]/10 flex items-center justify-center mb-4">
                      {industry.icon}
                    </div>
                    <CardTitle className="text-xl mb-4">{industry.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {industry.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#14b8a6] flex-shrink-0 mt-0.5" />
                          <span>{example}</span>
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

      {/* Tech Stack */}
      <Section className="bg-gray-50">
        <BackgroundPattern variant="dots" opacity={0.04} />
        <Container className="relative z-10">
          <SectionHeader
            subtitle="Technologies"
            title="Our AI Tech Stack"
            description="We use the latest AI frameworks and technologies."
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
            title="AI Development Process"
            description="A structured approach to delivering successful AI solutions."
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
            description="Jawaban untuk pertanyaan umum tentang implementasi AI."
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
                Siap Implementasi AI di Bisnis Anda?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Mari diskusikan bagaimana AI dapat mentransformasi operasi dan mendorong pertumbuhan bisnis Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-[#116366] hover:bg-gray-100">
                    Jadwalkan Konsultasi Gratis
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#116366]">
                    Lihat Proyek AI Kami
                  </Button>
                </Link>
              </div>
              <p className="mt-8 text-white/70 text-sm">
                💡 Free AI Consultation & POC Development untuk proyek pertama Anda
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  );
}
