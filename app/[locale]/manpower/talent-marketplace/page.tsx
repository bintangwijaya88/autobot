import { Section } from '@/components/sections/Section';
import { Container } from '@/components/sections/Container';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BackgroundPattern } from '@/components/ui/background-pattern';
import Link from 'next/link';
import {
  Search,
  Filter,
  Code,
  Brain,
  Smartphone,
  Server,
  Database,
  Cloud,
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  MapPin,
  Calendar,
  DollarSign,
} from 'lucide-react';

export default function TalentMarketplacePage() {
  const talents = [
    {
      name: 'Ahmad Santoso',
      role: 'Senior Full Stack Developer',
      avatar: 'AS',
      skills: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
      experience: '7 years',
      rating: 4.9,
      reviews: 28,
      location: 'Jakarta',
      availability: 'Available',
      rate: 'Rp 15M/month',
      certifications: ['AWS Certified', 'React Professional'],
    },
    {
      name: 'Siti Nurhaliza',
      role: 'AI/ML Engineer',
      avatar: 'SN',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'LLM'],
      experience: '5 years',
      rating: 5.0,
      reviews: 15,
      location: 'Bandung',
      availability: 'Available',
      rate: 'Rp 18M/month',
      certifications: ['Google ML Certified', 'TensorFlow Developer'],
    },
    {
      name: 'Budi Hermawan',
      role: 'Mobile App Developer',
      avatar: 'BH',
      skills: ['Flutter', 'React Native', 'iOS', 'Android'],
      experience: '6 years',
      rating: 4.8,
      reviews: 22,
      location: 'Surabaya',
      availability: 'Available in 2 weeks',
      rate: 'Rp 14M/month',
      certifications: ['Google Flutter', 'iOS Development'],
    },
    {
      name: 'Diana Putri',
      role: 'DevOps Engineer',
      avatar: 'DP',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      experience: '8 years',
      rating: 4.9,
      reviews: 31,
      location: 'Jakarta',
      availability: 'Available',
      rate: 'Rp 16M/month',
      certifications: ['AWS Solutions Architect', 'Kubernetes Admin'],
    },
    {
      name: 'Rudi Prasetyo',
      role: 'UI/UX Designer',
      avatar: 'RP',
      skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
      experience: '5 years',
      rating: 4.7,
      reviews: 19,
      location: 'Yogyakarta',
      availability: 'Available',
      rate: 'Rp 12M/month',
      certifications: ['Google UX Design', 'Adobe Certified'],
    },
    {
      name: 'Linda Wijaya',
      role: 'Backend Developer',
      avatar: 'LW',
      skills: ['Java', 'Spring Boot', 'Microservices', 'MySQL'],
      experience: '6 years',
      rating: 4.8,
      reviews: 24,
      location: 'Jakarta',
      availability: 'Available in 1 week',
      rate: 'Rp 13M/month',
      certifications: ['Oracle Certified', 'Spring Professional'],
    },
  ];

  const categories = [
    { icon: Code, name: 'Full Stack', count: 45 },
    { icon: Smartphone, name: 'Mobile Dev', count: 28 },
    { icon: Brain, name: 'AI/ML', count: 18 },
    { icon: Server, name: 'Backend', count: 52 },
    { icon: Database, name: 'Database', count: 31 },
    { icon: Cloud, name: 'DevOps', count: 22 },
    { icon: Shield, name: 'Security', count: 15 },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <BackgroundPattern variant="grid" opacity={0.08} className="text-gray-400" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#116366]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#14b8a6]/5 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
              <span className="text-[#116366] font-semibold text-sm">
                IT Talent Marketplace
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Find Certified IT Professionals
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Access pre-vetted, certified IT professionals ready to join your team. From developers
              to DevOps engineers, find the perfect match for your project needs.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by skill, role, or technology..."
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:border-[#116366] focus:outline-none"
                  />
                </div>
                <Button size="lg" className="bg-[#116366] hover:bg-[#0d4d50] px-8">
                  <Filter className="mr-2 h-5 w-5" />
                  Filter
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact">
                <Button className="bg-[#116366] hover:bg-[#0d4d50] text-white">
                  Request Talent Consultation
                </Button>
              </Link>
              <Link href="/manpower">
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Categories */}
      <Section className="bg-white border-t border-gray-100">
        <Container>
          <SectionHeader
            subtitle="Browse by Category"
            title="Find Experts in Every Field"
            description="Select a category to see available professionals"
            centered
          />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={index}
                  className="group p-4 rounded-lg border-2 border-gray-200 hover:border-[#116366] hover:shadow-md transition-all text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-[#116366] group-hover:to-[#14b8a6] flex items-center justify-center transition-all">
                    <Icon className="w-6 h-6 text-[#116366] group-hover:text-white transition-colors" />
                  </div>
                  <div className="font-semibold text-gray-900 text-sm mb-1">{category.name}</div>
                  <div className="text-xs text-gray-500">{category.count} talents</div>
                </button>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Talent Cards */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeader
            subtitle="Available Talents"
            title="Pre-Vetted IT Professionals"
            description="All talents are certified and background-checked"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {talents.map((talent, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all border-gray-200 bg-white">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center text-white font-bold">
                        {talent.avatar}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{talent.name}</CardTitle>
                        <CardDescription className="text-sm">{talent.role}</CardDescription>
                      </div>
                    </div>
                  </div>

                  {/* Rating & Reviews */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="ml-1 font-semibold text-sm">{talent.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">({talent.reviews} reviews)</span>
                    <span className="ml-auto px-2 py-1 bg-green-50 text-green-700 border border-green-200 rounded-md text-xs font-medium">
                      {talent.availability}
                    </span>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {talent.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardHeader>

                <CardContent>
                  {/* Info Grid */}
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-[#116366]" />
                      {talent.experience} experience
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-[#116366]" />
                      {talent.location}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <DollarSign className="w-4 h-4 mr-2 text-[#116366]" />
                      {talent.rate}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="mb-4">
                    <div className="text-xs text-gray-500 mb-2">Certifications:</div>
                    <div className="flex flex-wrap gap-1">
                      {talent.certifications.map((cert, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-2 py-1 bg-[#116366]/10 text-[#116366] text-xs rounded-md"
                        >
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button className="w-full bg-[#116366] hover:bg-[#0d4d50] text-white group-hover:shadow-md">
                    View Full Profile
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Showing 6 of 200+ certified professionals
            </p>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
              Load More Talents
            </Button>
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
              Need Help Finding the Right Talent?
            </h2>
            <p className="text-lg mb-8 text-white/90 leading-relaxed">
              Our team can help you find and onboard the perfect IT professionals for your project.
              Let's discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#116366] hover:bg-gray-100">
                  Request Consultation
                </Button>
              </Link>
              <Link href="/manpower">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#116366]"
                >
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
