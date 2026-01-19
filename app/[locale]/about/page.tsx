'use client';

import { Section } from '@/components/sections/Section';
import { Container } from '@/components/sections/Container';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BackgroundPattern } from '@/components/ui/background-pattern';
import Link from 'next/link';
import Image from 'next/image';
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Zap,
  Shield,
  TrendingUp,
  ArrowRight,
  Building2,
  Lightbulb,
  Rocket,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        {/* Grid Pattern Background */}
        <BackgroundPattern variant="grid" opacity={0.08} className="text-gray-400" />

        {/* Subtle gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#116366]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#14b8a6]/5 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="fade-in-up">
              <div className="inline-block mb-6 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
                <span className="text-[#116366] font-semibold text-sm">
                  {t('hero.badge')}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {t('hero.title')}
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                {t('hero.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#116366] hover:bg-[#0d4d50] text-white group">
                    {t('hero.contactUs')}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                    {t('hero.viewPortfolio')}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Illustration */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Team/Company Illustration */}
                <div className="relative z-10 bg-gradient-to-br from-[#116366] to-[#14b8a6] rounded-2xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center">
                      <Building2 className="w-16 h-16 text-white" />
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center">
                      <Users className="w-16 h-16 text-white" />
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center">
                      <Lightbulb className="w-16 h-16 text-white" />
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center">
                      <Rocket className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#14b8a6]/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#116366]/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Company Profile */}
      <Section className="bg-white border-t border-gray-100">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Story */}
            <div>
              <SectionHeader
                subtitle={t('story.subtitle')}
                title={t('story.title')}
                description=""
              />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{t('story.paragraph1')}</p>
                <p>{t('story.paragraph2')}</p>
                <p>{t('story.paragraph3')}</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-[#116366]">150+</div>
                  <div className="text-sm text-gray-600 mt-1">{t('story.stats.projects')}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-[#116366]">75+</div>
                  <div className="text-sm text-gray-600 mt-1">{t('story.stats.clients')}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-[#116366]">12+</div>
                  <div className="text-sm text-gray-600 mt-1">{t('story.stats.industries')}</div>
                </div>
              </div>
            </div>

            {/* Right Column - Vision & Mission */}
            <div className="space-y-6">
              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-lg bg-[#116366] flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{t('vision.title')}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {t('vision.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-lg bg-[#14b8a6] flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{t('mission.title')}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    {t.raw('mission.items').map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Values */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeader
            subtitle={t('values.subtitle')}
            title={t('values.title')}
            description={t('values.description')}
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Target className="w-8 h-8" />, key: 'excellence' },
              { icon: <Heart className="w-8 h-8" />, key: 'clientCentric' },
              { icon: <Zap className="w-8 h-8" />, key: 'innovation' },
              { icon: <Shield className="w-8 h-8" />, key: 'integrity' },
            ].map((value, index) => (
              <Card key={index} className="text-center border border-gray-200 hover:shadow-lg transition-all bg-white">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto rounded-lg bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center mb-4">
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{t(`values.${value.key}.title`)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{t(`values.${value.key}.description`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Milestones */}
      <Section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Abstract Tree Background - Left */}
        <div className="absolute left-0 bottom-0 w-[400px] h-[600px] opacity-[0.07] pointer-events-none">
          <svg viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Tree trunk */}
            <rect x="180" y="400" width="40" height="200" fill="url(#treeGradient1)" rx="8"/>
            {/* Tree foliage - abstract geometric style */}
            <circle cx="200" cy="380" r="120" fill="url(#treeGradient1)" opacity="0.8"/>
            <circle cx="160" cy="340" r="80" fill="url(#treeGradient2)" opacity="0.7"/>
            <circle cx="240" cy="340" r="80" fill="url(#treeGradient2)" opacity="0.7"/>
            <circle cx="200" cy="280" r="90" fill="url(#treeGradient1)" opacity="0.6"/>
            <defs>
              <linearGradient id="treeGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#116366" />
                <stop offset="100%" stopColor="#14b8a6" />
              </linearGradient>
              <linearGradient id="treeGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#116366" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Abstract Tree Background - Right */}
        <div className="absolute right-0 top-0 w-[350px] h-[500px] opacity-[0.06] pointer-events-none">
          <svg viewBox="0 0 350 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Tree trunk */}
            <rect x="155" y="350" width="40" height="150" fill="url(#treeGradient3)" rx="8"/>
            {/* Tree foliage - abstract geometric style */}
            <polygon points="175,100 250,200 280,180 300,250 270,290 230,320 120,320 80,290 50,250 70,180 100,200" fill="url(#treeGradient3)" opacity="0.8"/>
            <circle cx="175" cy="200" r="70" fill="url(#treeGradient4)" opacity="0.6"/>
            <circle cx="140" cy="250" r="60" fill="url(#treeGradient3)" opacity="0.7"/>
            <circle cx="210" cy="250" r="60" fill="url(#treeGradient4)" opacity="0.7"/>
            <defs>
              <linearGradient id="treeGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#116366" />
              </linearGradient>
              <linearGradient id="treeGradient4" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#116366" />
                <stop offset="100%" stopColor="#14b8a6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Elegant decorative blur orbs */}
        <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-[#116366]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-[350px] h-[350px] bg-[#14b8a6]/5 rounded-full blur-3xl pointer-events-none"></div>

        <Container className="relative z-10">
          <SectionHeader
            subtitle={t('milestones.subtitle')}
            title={t('milestones.title')}
            description={t('milestones.description')}
            centered
          />
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline line - more prominent */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#116366] via-[#14b8a6] to-[#116366] opacity-20 hidden lg:block rounded-full"></div>

            <div className="space-y-12 lg:space-y-16">
              {t.raw('milestones.items').map((milestone: any, index: number) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Content Card - Left or Right */}
                  <div className={`w-full lg:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className={`relative bg-white border-2 border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-[#116366]/30 group ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      {/* Connecting line from card to center dot */}
                      <div className={`hidden lg:block absolute top-1/2 ${index % 2 === 0 ? '-right-8' : '-left-8'} w-8 h-0.5 bg-gradient-to-${index % 2 === 0 ? 'r' : 'l'} from-[#116366] to-transparent opacity-40 group-hover:opacity-70 transition-opacity`}></div>

                      {/* Year Badge */}
                      <div className={`inline-flex items-center justify-center mb-4 ${index % 2 === 0 ? 'lg:float-right lg:ml-4' : 'lg:float-left lg:mr-4'}`}>
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-[#116366] to-[#14b8a6] blur opacity-50"></div>
                          <div className="relative px-5 py-2 bg-gradient-to-r from-[#116366] to-[#14b8a6] text-white text-lg font-bold rounded-full shadow-lg">
                            {milestone.year}
                          </div>
                        </div>
                      </div>

                      {/* Event Title */}
                      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#116366] transition-colors clear-both">
                        {milestone.event}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed text-base">
                        {milestone.description}
                      </p>

                      {/* Decorative corner accent */}
                      <div className={`absolute ${index % 2 === 0 ? 'top-0 right-0' : 'top-0 left-0'} w-20 h-20 bg-gradient-to-br from-[#116366]/5 to-transparent ${index % 2 === 0 ? 'rounded-tr-2xl' : 'rounded-tl-2xl'}`}></div>
                    </div>
                  </div>

                  {/* Center Dot - Enhanced */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center z-20">
                    <div className="relative">
                      {/* Outer ring - animated pulse */}
                      <div className="absolute inset-0 w-6 h-6 rounded-full bg-[#116366]/20 animate-ping"></div>
                      {/* Middle ring */}
                      <div className="absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#116366] to-[#14b8a6] opacity-30"></div>
                      {/* Inner dot */}
                      <div className="relative w-6 h-6 rounded-full bg-gradient-to-br from-[#116366] to-[#14b8a6] border-4 border-white shadow-xl"></div>
                    </div>
                  </div>

                  {/* Empty space for opposite side */}
                  <div className="hidden lg:block w-[calc(50%-3rem)]"></div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeader
            subtitle={t('team.subtitle')}
            title={t('team.title')}
            description={t('team.description')}
            centered
          />

          {/* Team Illustration */}
          <div className="mb-12 flex justify-center">
            <div className="relative w-full max-w-4xl">
              <div className="bg-gradient-to-br from-[#116366] to-[#14b8a6] rounded-2xl p-12 shadow-xl">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
                  {/* Team members illustration */}
                  {['ceoFounder', 'cto', 'leadDeveloper', 'designer', 'projectManager', 'businessAnalyst'].map((role, index) => (
                    <div key={index} className="flex flex-col items-center group">
                      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:bg-white/30 transition-all group-hover:scale-105">
                        <Users className="w-12 h-12 md:w-14 md:h-14 text-white" />
                      </div>
                      <div className="text-center">
                        <div className="text-sm md:text-base font-semibold text-white mb-1">{t(`team.roles.${role}.title`)}</div>
                        <div className="text-xs text-white/70">{t(`team.roles.${role}.name`)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Team Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Users className="w-8 h-8" />, number: '30+', label: t('team.stats.teamMembers') },
              { icon: <Award className="w-8 h-8" />, number: '50+', label: t('team.stats.certifications') },
              { icon: <TrendingUp className="w-8 h-8" />, number: '10+', label: t('team.stats.experience') },
            ].map((stat, index) => (
              <Card key={index} className="text-center border border-gray-200 hover:shadow-lg transition-shadow bg-white">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto rounded-lg bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center text-white mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-[#116366] mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="relative bg-gradient-to-br from-[#116366] to-[#0d4d50] text-white overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#14b8a6]/10 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-lg mb-8 text-white/90 leading-relaxed">
              {t('cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#116366] hover:bg-gray-100 transition-all">
                  {t('cta.getInTouch')}
                </Button>
              </Link>
              <Link href="/careers">
                <Button size="lg" className="bg-white text-[#116366] hover:bg-gray-100 border-2 border-white transition-all">
                  {t('cta.joinTeam')}
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
