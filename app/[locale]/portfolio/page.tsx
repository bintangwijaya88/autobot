import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/sections/Container';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BackgroundPattern } from '@/components/ui/background-pattern';
import Link from 'next/link';
import { ExternalLink, Github, Play, Briefcase, Award, Layers } from 'lucide-react';
import Image from 'next/image';

export default function PortfolioPage() {
  const projects = [
    {
      title: 'MediCare SIMRS',
      category: 'Healthcare',
      description: 'Comprehensive Hospital Information System for 300-bed hospital with BPJS integration.',
      image: '/placeholder-project.jpg',
      tags: ['React', 'Node.js', 'PostgreSQL', 'BPJS'],
      features: ['Patient Management', 'OPD/IPD', 'Pharmacy', 'Laboratory', 'BPJS Bridge'],
      client: 'RS Sehat Sentosa',
      liveDemo: '#',
      caseStudy: '/portfolio/medicare-simrs',
    },
    {
      title: 'EduPro School Management',
      category: 'Education',
      description: 'Complete school management system with LMS for 2000+ students.',
      image: '/placeholder-project.jpg',
      tags: ['Next.js', 'Moodle', 'MySQL', 'Mobile App'],
      features: ['Student Info System', 'LMS', 'Parent Portal', 'Mobile App', 'Finance'],
      client: 'SMA Nusantara',
      liveDemo: '#',
      caseStudy: '/portfolio/edupro-sms',
    },
    {
      title: 'RetailHub E-Commerce',
      category: 'Retail',
      description: 'Omnichannel retail platform with POS and marketplace integration.',
      image: '/placeholder-project.jpg',
      tags: ['Vue.js', 'Laravel', 'Redis', 'Payment Gateway'],
      features: ['E-Commerce', 'POS System', 'Inventory', 'Multi-vendor', 'Payment Integration'],
      client: 'PT Retail Maju',
      liveDemo: '#',
      caseStudy: '/portfolio/retailhub',
    },
    {
      title: 'AI ChatBot Assistant',
      category: 'AI & LLM',
      description: 'Custom LLM-powered chatbot for customer service automation.',
      image: '/placeholder-project.jpg',
      tags: ['Python', 'TensorFlow', 'GPT', 'NLP'],
      features: ['Natural Language Processing', 'Multi-language', 'Context Awareness', 'API Integration'],
      client: 'Bank Digital Indonesia',
      liveDemo: '#',
      caseStudy: '/portfolio/ai-chatbot',
    },
    {
      title: 'Smart Factory IoT',
      category: 'IoT',
      description: 'Industrial IoT platform for real-time factory monitoring and automation.',
      image: '/placeholder-project.jpg',
      tags: ['React', 'Node.js', 'MQTT', 'TimescaleDB'],
      features: ['Real-time Monitoring', 'Predictive Maintenance', 'Data Analytics', 'Alerts'],
      client: 'PT Industri Maju',
      liveDemo: '#',
      caseStudy: '/portfolio/smart-factory',
    },
    {
      title: 'FinTech Mobile App',
      category: 'Finance',
      description: 'Mobile banking application with advanced security features.',
      image: '/placeholder-project.jpg',
      tags: ['Flutter', 'Firebase', 'Encryption', 'Biometric'],
      features: ['Mobile Banking', 'Bill Payment', 'QR Payment', 'Biometric Auth'],
      client: 'Koperasi Digital',
      liveDemo: '#',
      caseStudy: '/portfolio/fintech-app',
    },
  ];

  const categories = ['All', 'Healthcare', 'Education', 'Retail', 'AI & LLM', 'IoT', 'Finance'];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '75+', label: 'Happy Clients' },
    { number: '12+', label: 'Industries' },
    { number: '98%', label: 'Success Rate' },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="Our Work"
        title="Portfolio & Case Studies"
        description="Explore our successful projects across various industries. From hospitals to schools, retail to AI – we've delivered excellence."
        primaryCTA={{ text: 'View All Projects', href: '#projects' }}
        secondaryCTA={{ text: 'Request Demo', href: '/contact' }}
        image={
          <div className="relative">
            <div className="bg-gradient-to-br from-[#116366] to-[#14b8a6] rounded-2xl p-8 shadow-2xl">
              <div className="flex flex-col items-center space-y-6">
                <div className="w-28 h-28 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Briefcase className="w-16 h-16 text-white" />
                </div>
                <div className="grid grid-cols-3 gap-4 w-full">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="bg-white/15 backdrop-blur-sm rounded-lg p-3 flex flex-col items-center">
                      <Layers className="w-6 h-6 text-white mb-2" />
                      <div className="h-2 bg-white/30 rounded w-full mb-1"></div>
                      <div className="h-1.5 bg-white/20 rounded w-3/4"></div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 w-full justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-white" />
                    <div className="h-2 bg-white/40 rounded w-12"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#14b8a6]/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#116366]/20 rounded-full blur-xl"></div>
          </div>
        }
      />

      {/* Stats */}
      <Section className="relative bg-white overflow-hidden">
        <Container className="relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* Filter & Projects */}
      <Section id="projects" className="relative bg-gray-50 overflow-hidden">
        <BackgroundPattern variant="dots" opacity={0.04} />
        <Container className="relative z-10">
          <SectionHeader
            subtitle="Featured Projects"
            title="Our Success Stories"
            description="Browse our portfolio of successful projects across different industries."
            centered
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                className={category === 'All' ? 'bg-[#116366] hover:bg-[#0d4d50]' : 'border-[#116366] text-[#116366] hover:bg-[#116366] hover:text-white'}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-[#116366] to-[#14b8a6] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold opacity-50">
                    {project.category.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a href={project.liveDemo} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#116366] hover:scale-110 transition-transform">
                      <Play className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <CardHeader>
                  <div className="text-sm text-[#116366] font-semibold mb-2">{project.category}</div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-1 mb-4 text-sm text-gray-600">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx}>• {feature}</div>
                    ))}
                  </div>

                  {/* Client */}
                  <div className="text-sm text-gray-500 mb-4">
                    Client: <span className="font-semibold">{project.client}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link href={project.caseStudy} className="flex-1">
                      <Button variant="outline" className="w-full border-[#116366] text-[#116366] hover:bg-[#116366] hover:text-white">
                        Case Study
                      </Button>
                    </Link>
                    <a href={project.liveDemo}>
                      <Button className="bg-[#116366] hover:bg-[#0d4d50]">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-[#116366] text-[#116366] hover:bg-[#116366] hover:text-white">
              Load More Projects
            </Button>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section className="relative bg-white overflow-hidden">
        <Container className="relative z-10">
          <SectionHeader
            subtitle="Client Feedback"
            title="What Our Clients Say"
            centered
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The SIMRS implementation exceeded our expectations. Highly recommended!",
                author: "Dr. Ahmad Santoso",
                position: "Director, RS Sehat Sentosa",
              },
              {
                quote: "Professional team, excellent delivery, and great ongoing support.",
                author: "Budi Hermawan",
                position: "IT Manager, PT Maju Jaya",
              },
              {
                quote: "Their school management system transformed how we operate.",
                author: "Siti Nurhaliza",
                position: "Principal, SMA Nusantara",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <p className="text-gray-600 italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.position}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="relative bg-gradient-to-br from-[#116366] via-[#14b8a6] to-[#5eead4] text-white overflow-hidden">
        <BackgroundPattern variant="circuit" opacity={0.1} className="text-white" />
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Let's discuss how we can help you achieve your goals.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#116366] hover:bg-gray-100">
                Get Started Today
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
