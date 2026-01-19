import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/sections/Container';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BackgroundPattern } from '@/components/ui/background-pattern';
import Link from 'next/link';
import { Github, Star, GitFork, Code, Users, Heart, ArrowRight, ExternalLink, Package } from 'lucide-react';

export default function OpenSourcePage() {
  const projects = [
    {
      name: 'Autobot UI Kit',
      description: 'React component library with Tailwind CSS for rapid application development.',
      stars: 1200,
      forks: 150,
      language: 'TypeScript',
      tags: ['React', 'Tailwind', 'Components', 'UI Library'],
      github: 'https://github.com/autobot/ui-kit',
      demo: '#',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      name: 'Autobot ERP Starter',
      description: 'Open-source ERP starter template based on ERPNext with Indonesian localization.',
      stars: 850,
      forks: 200,
      language: 'Python',
      tags: ['ERP', 'Business', 'Indonesia', 'ERPNext'],
      github: 'https://github.com/autobot/erp-starter',
      demo: '#',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      name: 'Autobot LLM Tools',
      description: 'Collection of tools and utilities for building LLM applications in Indonesian language.',
      stars: 650,
      forks: 80,
      language: 'Python',
      tags: ['AI', 'LLM', 'NLP', 'Indonesia'],
      github: 'https://github.com/autobot/llm-tools',
      demo: '#',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      name: 'Autobot DevOps Scripts',
      description: 'Automation scripts and tools for DevOps workflows and infrastructure management.',
      stars: 420,
      forks: 95,
      language: 'Shell',
      tags: ['DevOps', 'Automation', 'Infrastructure', 'CI/CD'],
      github: 'https://github.com/autobot/devops-scripts',
      demo: '#',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
  ];

  const stats = [
    { number: '15+', label: 'Open Source Projects', icon: <Package className="w-8 h-8 text-[#116366]" /> },
    { number: '5,000+', label: 'GitHub Stars', icon: <Star className="w-8 h-8 text-[#116366]" /> },
    { number: '500+', label: 'Contributors', icon: <Users className="w-8 h-8 text-[#116366]" /> },
    { number: '10,000+', label: 'Downloads', icon: <ArrowRight className="w-8 h-8 text-[#116366]" /> },
  ];

  const benefits = [
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: 'Quality Code',
      description: 'Production-ready, well-tested, and documented code you can trust.',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: 'Active Community',
      description: 'Join a vibrant community of developers contributing and learning together.',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: 'Free Forever',
      description: 'MIT licensed - use, modify, and distribute freely in your projects.',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
  ];

  const howToContribute = [
    {
      step: '1',
      title: 'Find a Project',
      description: 'Browse our projects and find one that interests you.',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      step: '2',
      title: 'Read Guidelines',
      description: 'Check the contribution guidelines and code of conduct.',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      step: '3',
      title: 'Pick an Issue',
      description: 'Look for "good first issue" labels or suggest improvements.',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      step: '4',
      title: 'Submit PR',
      description: 'Fork, make changes, and submit a pull request.',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
  ];

  return (
    <>
      <Hero
        subtitle="Open Source"
        title="Building in Public, Contributing to the Community"
        description="We believe in giving back to the community. Explore our open-source projects, contribute, and build amazing things together."
        primaryCTA={{ text: 'View Projects', href: '#projects' }}
        secondaryCTA={{ text: 'Contribute', href: '#contribute' }}
        image={
          <div className="relative">
            <div className="bg-gradient-to-br from-[#116366] to-[#14b8a6] rounded-2xl p-10 shadow-2xl">
              <div className="flex items-center justify-center">
                <div className="w-32 h-32 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Github className="w-20 h-20 text-white" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-white/15 backdrop-blur-sm rounded p-3 text-center">
                    <Star className="w-6 h-6 text-white mx-auto mb-2" />
                    <div className="h-2 bg-white/30 rounded"></div>
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
      <Section className="relative bg-white overflow-hidden">
        <Container className="relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* Projects */}
      <Section id="projects" className="relative bg-gray-50 overflow-hidden">
        <BackgroundPattern variant="dots" opacity={0.04} />
        <Container className="relative z-10">
          <SectionHeader
            subtitle="Our Projects"
            title="Open Source Projects"
            description="Explore our collection of open-source tools, libraries, and frameworks."
            centered
          />

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className={`h-3 bg-gradient-to-r ${project.gradient}`}></div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <Github className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="font-medium">{project.stars}</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full">
                        <GitFork className="w-4 h-4 text-blue-500" />
                        <span className="font-medium">{project.forks}</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-[#116366] transition-colors mb-2">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className={`px-3 py-1.5 bg-gradient-to-r ${project.gradient} bg-opacity-10 text-sm font-medium rounded-full border-2 border-transparent hover:border-current transition-all`}>
                        <span className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>{tag}</span>
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                      {project.language}
                    </div>
                    <div className="flex gap-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="border-2 border-[#116366] text-[#116366] hover:bg-[#116366] hover:text-white">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </Button>
                      </a>
                      <a href={project.demo}>
                        <Button size="sm" className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white`}>
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="https://github.com/autobot" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2 border-[#116366] text-[#116366] hover:bg-[#116366] hover:text-white">
                <Github className="w-5 h-5 mr-2" />
                View All on GitHub
              </Button>
            </a>
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section className="relative bg-white overflow-hidden">
        <Container className="relative z-10">
          <SectionHeader
            subtitle="Why Open Source"
            title="Our Commitment"
            description="We're committed to building quality open-source tools for the developer community."
            centered
          />

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group text-center border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <CardHeader className="relative">
                  <div className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-2xl`}>
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-2xl mb-3">{benefit.title}</CardTitle>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* How to Contribute */}
      <Section id="contribute" className="relative bg-gray-50 overflow-hidden">
        <BackgroundPattern variant="circuit" opacity={0.02} />
        <Container className="relative z-10">
          <SectionHeader
            subtitle="Get Involved"
            title="How to Contribute"
            description="Join our community and help us build better tools for everyone."
            centered
          />

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {howToContribute.map((item, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-bold text-3xl mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {item.step}
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-[#116366] transition-colors">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="https://github.com/autobot/contributing" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-[#116366] to-[#14b8a6] hover:from-[#0d4d50] hover:to-[#116366] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Read Contribution Guidelines <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="relative bg-gradient-to-br from-[#116366] via-[#14b8a6] to-[#5eead4] text-white overflow-hidden">
        <BackgroundPattern variant="circuit" opacity={0.1} className="text-white" />
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Github className="w-14 h-14 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Join Our Open Source Community
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Star our projects, contribute code, or join discussions on GitHub.
            </p>
            <a href="https://github.com/autobot" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-[#116366] hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <Github className="w-5 h-5 mr-2" />
                Follow on GitHub
              </Button>
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
