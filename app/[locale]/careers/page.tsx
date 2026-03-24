'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { Briefcase, MapPin, Clock, TrendingUp, Heart, Users, Zap, Gift, ArrowRight, Sparkles, Award, Target } from 'lucide-react';

const content = {
  en: {
    hero: {
      badge: 'Join Our Team',
      title: 'Build Your Career With Autobot',
      subtitle: 'Join a team of passionate technologists building innovative solutions for Indonesia\'s digital future.',
      cta: 'View Open Positions',
    },
    stats: [
      { number: '30+', label: 'Team Members' },
      { number: '12+', label: 'Technologies' },
      { number: '50+', label: 'Certifications' },
      { number: '4.8/5', label: 'Employee Rating' },
    ],
    benefitsTitle: 'Benefits & Perks',
    benefitsSubtitle: 'We take care of our team with comprehensive benefits and a great work environment.',
    benefits: [
      { title: 'Competitive Salary', description: 'Above-market compensation with performance bonuses' },
      { title: 'Health Insurance', description: 'Comprehensive health coverage for you and family' },
      { title: 'Learning Budget', description: 'Annual budget for courses, conferences, and certifications' },
      { title: 'Flexible Work', description: 'Remote work options and flexible hours' },
      { title: 'Career Growth', description: 'Clear career path and promotion opportunities' },
      { title: 'Work-Life Balance', description: '20 days annual leave plus public holidays' },
    ],
    positionsTitle: 'Open Positions',
    positionsSubtitle: 'Join our team and work on exciting projects with cutting-edge technologies.',
    positions: [
      {
        title: 'Senior Full Stack Developer',
        department: 'Engineering',
        location: 'Jakarta / Remote',
        type: 'Full-time',
        experience: '5+ years',
        description: 'Lead development of web applications using React, Node.js, and cloud technologies.',
        requirements: ['React/Next.js', 'Node.js/Express', 'AWS/Azure', 'Team Leadership'],
      },
      {
        title: 'AI/ML Engineer',
        department: 'AI & Data',
        location: 'Jakarta',
        type: 'Full-time',
        experience: '3+ years',
        description: 'Build and deploy AI models, LLM applications, and machine learning solutions.',
        requirements: ['Python/TensorFlow', 'LLM Experience', 'ML Algorithms', 'Model Deployment'],
      },
      {
        title: 'UI/UX Designer',
        department: 'Design',
        location: 'Jakarta / Remote',
        type: 'Full-time',
        experience: '3+ years',
        description: 'Create beautiful, user-friendly designs for web and mobile applications.',
        requirements: ['Figma/Adobe XD', 'User Research', 'Prototyping', 'Design Systems'],
      },
      {
        title: 'DevOps Engineer',
        department: 'Infrastructure',
        location: 'Jakarta',
        type: 'Full-time',
        experience: '4+ years',
        description: 'Manage cloud infrastructure, CI/CD pipelines, and deployment automation.',
        requirements: ['AWS/Azure/GCP', 'Docker/Kubernetes', 'CI/CD', 'Infra as Code'],
      },
      {
        title: 'Project Manager',
        department: 'Management',
        location: 'Jakarta',
        type: 'Full-time',
        experience: '5+ years',
        description: 'Lead IT projects from initiation to delivery, ensuring quality and timelines.',
        requirements: ['PMP Certified', 'Agile/Scrum', 'Stakeholder Mgmt', 'IT Projects'],
      },
      {
        title: 'Internship Program',
        department: 'Various',
        location: 'Jakarta',
        type: 'Internship',
        experience: 'Fresh Graduate',
        description: '3-6 month internship program across development, design, and business roles.',
        requirements: ['Relevant Education', 'Tech Passion', 'Quick Learner', 'Team Player'],
      },
    ],
    noFit: "Don't see a perfect fit? We're always looking for talented people.",
    spontaneous: 'Send Spontaneous Application',
    valuesTitle: 'What We Value',
    valuesSubtitle: 'Our values guide how we work and interact with each other.',
    values: [
      { title: 'Innovation First', description: 'We embrace new technologies and encourage creative problem-solving.' },
      { title: 'Collaboration', description: 'We work together as a team, supporting and learning from each other.' },
      { title: 'Continuous Learning', description: "We invest in our team's growth through training and development." },
      { title: 'Work-Life Harmony', description: 'We believe in sustainable productivity and personal well-being.' },
    ],
    ctaTitle: 'Ready to Join Our Team?',
    ctaSubtitle: 'Start your journey with Autobot Wijaya Solution today.',
    ctaBtn: 'View Open Positions',
    applyBtn: 'Apply Now',
    requirements: 'Requirements:',
  },
  id: {
    hero: {
      badge: 'Bergabung dengan Kami',
      title: 'Bangun Karier Anda Bersama Autobot',
      subtitle: 'Bergabunglah dengan tim teknolog bersemangat yang membangun solusi inovatif untuk masa depan digital Indonesia.',
      cta: 'Lihat Posisi Terbuka',
    },
    stats: [
      { number: '30+', label: 'Anggota Tim' },
      { number: '12+', label: 'Teknologi' },
      { number: '50+', label: 'Sertifikasi' },
      { number: '4.8/5', label: 'Rating Karyawan' },
    ],
    benefitsTitle: 'Benefit & Fasilitas',
    benefitsSubtitle: 'Kami menjaga tim kami dengan benefit komprehensif dan lingkungan kerja yang menyenangkan.',
    benefits: [
      { title: 'Gaji Kompetitif', description: 'Kompensasi di atas pasar dengan bonus kinerja' },
      { title: 'Asuransi Kesehatan', description: 'Perlindungan kesehatan komprehensif untuk Anda dan keluarga' },
      { title: 'Budget Belajar', description: 'Budget tahunan untuk kursus, konferensi, dan sertifikasi' },
      { title: 'Kerja Fleksibel', description: 'Opsi remote work dan jam kerja fleksibel' },
      { title: 'Pertumbuhan Karier', description: 'Jalur karier yang jelas dan peluang promosi' },
      { title: 'Work-Life Balance', description: '20 hari cuti tahunan plus hari libur nasional' },
    ],
    positionsTitle: 'Posisi Terbuka',
    positionsSubtitle: 'Bergabunglah dengan tim kami dan kerjakan proyek menarik dengan teknologi terkini.',
    positions: [
      {
        title: 'Senior Full Stack Developer',
        department: 'Engineering',
        location: 'Jakarta / Remote',
        type: 'Full-time',
        experience: '5+ tahun',
        description: 'Memimpin pengembangan aplikasi web menggunakan React, Node.js, dan teknologi cloud.',
        requirements: ['React/Next.js', 'Node.js/Express', 'AWS/Azure', 'Team Leadership'],
      },
      {
        title: 'AI/ML Engineer',
        department: 'AI & Data',
        location: 'Jakarta',
        type: 'Full-time',
        experience: '3+ tahun',
        description: 'Membangun dan mendeploy model AI, aplikasi LLM, dan solusi machine learning.',
        requirements: ['Python/TensorFlow', 'Pengalaman LLM', 'Algoritma ML', 'Model Deployment'],
      },
      {
        title: 'UI/UX Designer',
        department: 'Design',
        location: 'Jakarta / Remote',
        type: 'Full-time',
        experience: '3+ tahun',
        description: 'Membuat desain yang indah dan ramah pengguna untuk aplikasi web dan mobile.',
        requirements: ['Figma/Adobe XD', 'Riset Pengguna', 'Prototyping', 'Design Systems'],
      },
      {
        title: 'DevOps Engineer',
        department: 'Infrastructure',
        location: 'Jakarta',
        type: 'Full-time',
        experience: '4+ tahun',
        description: 'Mengelola infrastruktur cloud, pipeline CI/CD, dan otomatisasi deployment.',
        requirements: ['AWS/Azure/GCP', 'Docker/Kubernetes', 'CI/CD', 'Infra as Code'],
      },
      {
        title: 'Project Manager',
        department: 'Management',
        location: 'Jakarta',
        type: 'Full-time',
        experience: '5+ tahun',
        description: 'Memimpin proyek IT dari inisiasi hingga delivery, memastikan kualitas dan deadline.',
        requirements: ['PMP Certified', 'Agile/Scrum', 'Manajemen Stakeholder', 'Proyek IT'],
      },
      {
        title: 'Program Magang',
        department: 'Berbagai Divisi',
        location: 'Jakarta',
        type: 'Magang',
        experience: 'Fresh Graduate',
        description: 'Program magang 3-6 bulan di bidang pengembangan, desain, dan bisnis.',
        requirements: ['Pendidikan Relevan', 'Passion Teknologi', 'Cepat Belajar', 'Team Player'],
      },
    ],
    noFit: 'Tidak menemukan posisi yang cocok? Kami selalu mencari orang-orang berbakat.',
    spontaneous: 'Kirim Lamaran Spontan',
    valuesTitle: 'Nilai-Nilai Kami',
    valuesSubtitle: 'Nilai-nilai kami memandu cara kami bekerja dan berinteraksi satu sama lain.',
    values: [
      { title: 'Inovasi Pertama', description: 'Kami merangkul teknologi baru dan mendorong pemecahan masalah kreatif.' },
      { title: 'Kolaborasi', description: 'Kami bekerja sama sebagai tim, saling mendukung dan belajar satu sama lain.' },
      { title: 'Belajar Terus', description: 'Kami berinvestasi dalam pertumbuhan tim melalui pelatihan dan pengembangan.' },
      { title: 'Harmoni Kerja-Hidup', description: 'Kami percaya pada produktivitas berkelanjutan dan kesejahteraan pribadi.' },
    ],
    ctaTitle: 'Siap Bergabung dengan Tim Kami?',
    ctaSubtitle: 'Mulailah perjalanan Anda bersama Autobot Wijaya Solution hari ini.',
    ctaBtn: 'Lihat Posisi Terbuka',
    applyBtn: 'Lamar Sekarang',
    requirements: 'Persyaratan:',
  },
};

const benefitIcons = [TrendingUp, Heart, Zap, Users, Gift, Clock];
const valueIcons = [Sparkles, Users, TrendingUp, Heart];

export default function CareersPage() {
  const locale = useLocale();
  const c = content[locale as keyof typeof content] ?? content.en;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0d4f52] via-[#116366] to-[#14b8a6] text-white overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-teal-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              {c.hero.badge}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {c.hero.title}
            </h1>
            <p className="text-lg text-white/85 mb-8 leading-relaxed">{c.hero.subtitle}</p>
            <a
              href="#positions"
              className="inline-flex items-center gap-2 bg-white text-[#116366] font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              {c.hero.cta}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[Briefcase, Users, Sparkles, TrendingUp].map((Icon, i) => (
              <div key={i} className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center gap-3">
                <Icon className="w-12 h-12 text-white" />
                <div className="h-2 bg-white/40 rounded-full w-16" />
                <div className="h-2 bg-white/25 rounded-full w-10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {c.stats.map((stat, i) => (
              <div key={i} className="group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#116366]/10 to-[#14b8a6]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {i === 0 && <Users className="w-8 h-8 text-[#116366]" />}
                  {i === 1 && <Zap className="w-8 h-8 text-[#116366]" />}
                  {i === 2 && <Award className="w-8 h-8 text-[#116366]" />}
                  {i === 3 && <Sparkles className="w-8 h-8 text-[#116366]" />}
                </div>
                <div className="text-4xl font-bold text-[#116366] mb-1">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#116366] font-semibold text-sm uppercase tracking-wider">Why Join Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">{c.benefitsTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{c.benefitsSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.benefits.map((benefit, i) => {
              const Icon = benefitIcons[i];
              return (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#116366] font-semibold text-sm uppercase tracking-wider">We&apos;re Hiring</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">{c.positionsTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{c.positionsSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {c.positions.map((position, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                <div className="h-1.5 bg-gradient-to-r from-[#116366] to-[#14b8a6]" />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-[#116366]/10 text-[#116366] text-sm font-semibold rounded-full">
                      {position.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#116366] transition-colors">
                    {position.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="flex items-center gap-1.5 text-xs text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
                      <Briefcase className="w-3.5 h-3.5" />
                      {position.department}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
                      <MapPin className="w-3.5 h-3.5" />
                      {position.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
                      <Clock className="w-3.5 h-3.5" />
                      {position.experience}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">{position.description}</p>

                  <div className="mb-5">
                    <p className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">{c.requirements}</p>
                    <div className="flex flex-wrap gap-2">
                      {position.requirements.map((req, idx) => (
                        <span key={idx} className="px-3 py-1 bg-[#116366]/10 text-[#116366] text-xs font-medium rounded-full border border-[#116366]/20">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href={`/${locale}/careers/spontaneous-application`}>
                    <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#116366] to-[#14b8a6] text-white font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition-opacity shadow-md">
                      {c.applyBtn}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">{c.noFit}</p>
            <Link
              href={`/${locale}/careers/spontaneous-application`}
              className="inline-flex items-center gap-2 border-2 border-[#116366] text-[#116366] font-semibold px-6 py-3 rounded-xl hover:bg-[#116366] hover:text-white transition-colors"
            >
              {c.spontaneous}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Culture / Values */}
      <section id="culture" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#116366] font-semibold text-sm uppercase tracking-wider">Our Culture</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">{c.valuesTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{c.valuesSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {c.values.map((value, i) => {
              const Icon = valueIcons[i];
              return (
                <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex gap-4 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#116366]/10 to-[#14b8a6]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-[#116366]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#116366] transition-colors">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#116366] via-[#14b8a6] to-[#5eead4] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{c.ctaTitle}</h2>
          <p className="text-lg text-white/85 mb-8">{c.ctaSubtitle}</p>
          <a
            href="#positions"
            className="inline-flex items-center gap-2 bg-white text-[#116366] font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
          >
            {c.ctaBtn}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  );
}
