import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/sections/Container';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BackgroundPattern } from '@/components/ui/background-pattern';
import Link from 'next/link';
import { Briefcase, MapPin, Clock, TrendingUp, Heart, Users, Zap, Gift, ArrowRight, Sparkles, Award, Target } from 'lucide-react';

export default function CareersPage() {
  const openPositions = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Jakarta / Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead development of web applications using React, Node.js, and cloud technologies.',
      requirements: ['React/Next.js expertise', 'Node.js/Express', 'AWS/Azure', 'Team leadership'],
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      title: 'AI/ML Engineer',
      department: 'AI & Data',
      location: 'Jakarta',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and deploy AI models, LLM applications, and machine learning solutions.',
      requirements: ['Python/TensorFlow', 'LLM experience', 'ML algorithms', 'Model deployment'],
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Jakarta / Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create beautiful, user-friendly designs for web and mobile applications.',
      requirements: ['Figma/Adobe XD', 'User research', 'Prototyping', 'Design systems'],
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Jakarta',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Manage cloud infrastructure, CI/CD pipelines, and deployment automation.',
      requirements: ['AWS/Azure/GCP', 'Docker/Kubernetes', 'CI/CD', 'Infrastructure as Code'],
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      title: 'Project Manager',
      department: 'Management',
      location: 'Jakarta',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead IT projects from initiation to delivery, ensuring quality and timelines.',
      requirements: ['PMP certified', 'Agile/Scrum', 'Stakeholder management', 'IT projects'],
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      title: 'Internship Program',
      department: 'Various',
      location: 'Jakarta',
      type: 'Internship',
      experience: 'Fresh Graduate',
      description: '3-6 month internship program across development, design, and business roles.',
      requirements: ['Relevant education', 'Passion for tech', 'Quick learner', 'Team player'],
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: 'Competitive Salary',
      description: 'Above-market compensation with performance bonuses',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: 'Health Insurance',
      description: 'Comprehensive health coverage for you and family',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Learning Budget',
      description: 'Annual budget for courses, conferences, and certifications',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      icon: <Gift className="w-8 h-8 text-white" />,
      title: 'Career Growth',
      description: 'Clear career path and promotion opportunities',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: 'Work-Life Balance',
      description: '20 days annual leave plus public holidays',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We embrace new technologies and encourage creative problem-solving.',
      icon: <Sparkles className="w-8 h-8 text-[#116366]" />,
    },
    {
      title: 'Collaboration',
      description: 'We work together as a team, supporting and learning from each other.',
      icon: <Users className="w-8 h-8 text-[#116366]" />,
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth through training and development.',
      icon: <TrendingUp className="w-8 h-8 text-[#116366]" />,
    },
    {
      title: 'Work-Life Harmony',
      description: 'We believe in sustainable productivity and personal well-being.',
      icon: <Heart className="w-8 h-8 text-[#116366]" />,
    },
  ];

  return (
    <>
      <Hero
        subtitle="Join Our Team"
        title="Build Your Career With Autobot"
        description="Join a team of passionate technologists building innovative solutions for Indonesia's digital future. We offer competitive compensation, continuous learning, and exciting projects."
        primaryCTA={{ text: 'View Open Positions', href: '#positions' }}
        secondaryCTA={{ text: 'Learn More', href: '#culture' }}
        image={
          <div className="relative">
            <div className="bg-gradient-to-br from-[#116366] to-[#14b8a6] rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center">
                  <Briefcase className="w-12 h-12 text-white mb-3" />
                  <div className="h-2 bg-white/40 rounded w-16 mb-2"></div>
                  <div className="h-2 bg-white/30 rounded w-12"></div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center">
                  <Users className="w-12 h-12 text-white mb-3" />
                  <div className="h-2 bg-white/40 rounded w-16 mb-2"></div>
                  <div className="h-2 bg-white/30 rounded w-12"></div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center">
                  <Sparkles className="w-12 h-12 text-white mb-3" />
                  <div className="h-2 bg-white/40 rounded w-16 mb-2"></div>
                  <div className="h-2 bg-white/30 rounded w-12"></div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center">
                  <TrendingUp className="w-12 h-12 text-white mb-3" />
                  <div className="h-2 bg-white/40 rounded w-16 mb-2"></div>
                  <div className="h-2 bg-white/30 rounded w-12"></div>
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
            {[
              { number: '30+', label: 'Team Members', icon: <Users className="w-8 h-8 text-[#116366]" /> },
              { number: '12+', label: 'Technologies', icon: <Zap className="w-8 h-8 text-[#116366]" /> },
              { number: '50+', label: 'Certifications', icon: <Award className="w-8 h-8 text-[#116366]" /> },
              { number: '4.8/5', label: 'Employee Rating', icon: <Sparkles className="w-8 h-8 text-[#116366]" /> },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#116366]/10 to-[#14b8a6]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#116366] to-[#14b8a6] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section className="relative bg-gray-50 overflow-hidden">
        <BackgroundPattern variant="dots" opacity={0.04} />
        <Container className="relative z-10">
          <SectionHeader
            subtitle="Why Join Us"
            title="Benefits & Perks"
            description="We take care of our team with comprehensive benefits and a great work environment."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br opacity-10 rounded-bl-full" style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>
                <CardHeader className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl`}>
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Open Positions */}
      <Section id="positions" className="relative bg-white overflow-hidden">
        <Container className="relative z-10">
          <SectionHeader
            subtitle="We're Hiring"
            title="Open Positions"
            description="Join our team and work on exciting projects with cutting-edge technologies."
            centered
          />

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {openPositions.map((position, index) => (
              <Card key={index} className="group border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${position.gradient}`}></div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${position.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <Briefcase className="w-7 h-7 text-white" />
                    </div>
                    <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${position.gradient} bg-opacity-10`}>
                      <span className={`text-sm font-bold bg-gradient-to-r ${position.gradient} bg-clip-text text-transparent`}>
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-3 group-hover:text-[#116366] transition-colors">
                    {position.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full">
                      <Briefcase className="w-4 h-4" />
                      {position.department}
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full">
                      <MapPin className="w-4 h-4" />
                      {position.location}
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full">
                      <Clock className="w-4 h-4" />
                      {position.experience}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{position.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Requirements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {position.requirements.map((req, idx) => (
                        <span key={idx} className={`px-3 py-1.5 bg-gradient-to-r ${position.gradient} bg-opacity-10 text-sm font-medium rounded-full`}>
                          <span className={`bg-gradient-to-r ${position.gradient} bg-clip-text text-transparent`}>
                            {req}
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button className={`w-full bg-gradient-to-r ${position.gradient} hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all`}>
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4 text-lg">
              Don't see a perfect fit? We're always looking for talented people.
            </p>
            <Link href="/careers/spontaneous-application">
              <Button variant="outline" className="border-2 border-[#116366] text-[#116366] hover:bg-[#116366] hover:text-white">
                Send Spontaneous Application
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Culture */}
      <Section id="culture" className="relative bg-gray-50 overflow-hidden">
        <BackgroundPattern variant="circuit" opacity={0.02} />
        <Container className="relative z-10">
          <SectionHeader
            subtitle="Our Culture"
            title="What We Value"
            description="Our values guide how we work and interact with each other."
            centered
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="group border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#116366]/10 to-[#14b8a6]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2 group-hover:text-[#116366] transition-colors">{value.title}</CardTitle>
                      <CardDescription className="text-base">{value.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
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
            <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Ready to Join Our Team?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Start your journey with Autobot Wijaya Solution today.
            </p>
            <Link href="#positions">
              <Button size="lg" className="bg-white text-[#116366] hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                View Open Positions
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
