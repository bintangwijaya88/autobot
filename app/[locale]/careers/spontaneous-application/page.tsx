'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { useState, useRef } from 'react';
import {
  ArrowLeft, Mail, Phone, User, MapPin, Briefcase,
  GraduationCap, Upload, Send, CheckCircle2, Linkedin,
  Github, Loader2, AlertCircle, FileText,
} from 'lucide-react';

const text = {
  en: {
    back: 'Back to Careers',
    title: 'Spontaneous Application',
    subtitle: "Don't see a position that fits? Send us your CV anyway! We're always looking for talented individuals to join our team.",
    personalInfo: 'Personal Information',
    personalDesc: 'Tell us about yourself and your professional background',
    fullName: 'Full Name',
    email: 'Email',
    phone: 'Phone',
    location: 'Location / City',
    positionInterest: 'Position of Interest',
    selectPosition: 'Select position category',
    experienceLevel: 'Experience Level',
    selectExperience: 'Select experience level',
    skills: 'Key Skills & Technologies',
    skillsPlaceholder: 'e.g., React, Next.js, Node.js, Python, AI/ML, AWS...',
    linkedin: 'LinkedIn Profile',
    github: 'GitHub Profile',
    coverLetter: 'Cover Letter / Introduction',
    coverPlaceholder: 'Tell us about yourself, your experience, and why you\'d like to join Autobot...',
    cv: 'Upload CV/Resume (PDF, max 5MB)',
    cvNote: 'Only PDF files accepted',
    salary: 'Expected Salary Range (IDR/month)',
    selectSalary: 'Select salary range',
    availability: 'Availability to Start',
    selectAvailability: 'Select availability',
    submit: 'Submit Application',
    submitting: 'Submitting...',
    privacy: 'By submitting, you agree to our privacy policy.',
    process: 'Application Process',
    steps: [
      'Your application will be reviewed by our HR team',
      'If selected, you\'ll receive an email for initial screening',
      'Technical test and interview rounds will follow',
      'Final decision and offer will be made within 2–4 weeks',
    ],
    successTitle: 'Application Submitted!',
    successMsg: 'Thank you for your interest in joining Autobot! We\'ve received your application and will review it carefully. If your profile matches our needs, we\'ll contact you within 1–2 weeks.',
    backCareers: 'Back to Careers',
    goHome: 'Go to Home',
    required: 'required',
    fileSelected: 'File selected',
    noFile: 'No file chosen',
    chooseFile: 'Choose PDF file',
  },
  id: {
    back: 'Kembali ke Karier',
    title: 'Lamaran Spontan',
    subtitle: 'Tidak menemukan posisi yang cocok? Kirim CV Anda tetap! Kami selalu mencari individu berbakat untuk bergabung.',
    personalInfo: 'Informasi Pribadi',
    personalDesc: 'Ceritakan tentang diri Anda dan latar belakang profesional Anda',
    fullName: 'Nama Lengkap',
    email: 'Email',
    phone: 'Telepon',
    location: 'Lokasi / Kota',
    positionInterest: 'Posisi yang Diminati',
    selectPosition: 'Pilih kategori posisi',
    experienceLevel: 'Level Pengalaman',
    selectExperience: 'Pilih level pengalaman',
    skills: 'Keahlian & Teknologi Utama',
    skillsPlaceholder: 'misal: React, Next.js, Node.js, Python, AI/ML, AWS...',
    linkedin: 'Profil LinkedIn',
    github: 'Profil GitHub',
    coverLetter: 'Cover Letter / Perkenalan',
    coverPlaceholder: 'Ceritakan tentang diri Anda, pengalaman, dan mengapa ingin bergabung dengan Autobot...',
    cv: 'Upload CV/Resume (PDF, maks 5MB)',
    cvNote: 'Hanya file PDF yang diterima',
    salary: 'Ekspektasi Gaji (IDR/bulan)',
    selectSalary: 'Pilih range gaji',
    availability: 'Ketersediaan Mulai Kerja',
    selectAvailability: 'Pilih ketersediaan',
    submit: 'Kirim Lamaran',
    submitting: 'Mengirim...',
    privacy: 'Dengan mengirimkan lamaran, Anda menyetujui kebijakan privasi kami.',
    process: 'Proses Lamaran',
    steps: [
      'Lamaran Anda akan ditinjau oleh tim HR kami',
      'Jika terpilih, Anda akan menerima email untuk screening awal',
      'Tes teknis dan ronde wawancara akan mengikuti',
      'Keputusan final dan penawaran dibuat dalam 2–4 minggu',
    ],
    successTitle: 'Lamaran Terkirim!',
    successMsg: 'Terima kasih atas minat Anda bergabung dengan Autobot! Kami telah menerima lamaran Anda dan akan meninjaunya dengan seksama. Jika profil Anda cocok, kami akan menghubungi Anda dalam 1–2 minggu.',
    backCareers: 'Kembali ke Karier',
    goHome: 'Ke Beranda',
    required: 'wajib',
    fileSelected: 'File dipilih',
    noFile: 'Belum ada file',
    chooseFile: 'Pilih file PDF',
  },
};

export default function SpontaneousApplicationPage() {
  const locale = useLocale();
  const t = text[locale as keyof typeof text] ?? text.en;

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [cvFile, setCvFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setCvFile(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (cvFile) {
      formData.set('cv', cvFile);
    }

    try {
      const res = await fetch('/api/careers/apply', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        setSubmitting(false);
        return;
      }

      setSubmitted(true);
    } catch {
      setError('Network error. Please check your connection and try again.');
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center shadow-xl">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.successTitle}</h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">{t.successMsg}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/careers`}
              className="inline-flex items-center justify-center gap-2 border-2 border-[#116366] text-[#116366] font-semibold px-6 py-3 rounded-xl hover:bg-[#116366] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.backCareers}
            </Link>
            <Link
              href={`/${locale}`}
              className="inline-flex items-center justify-center gap-2 bg-[#116366] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#0d4d50] transition-colors"
            >
              {t.goHome}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-50 to-white pt-28 pb-12 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href={`/${locale}/careers`}
            className="inline-flex items-center gap-2 text-[#116366] hover:text-[#0d4d50] mb-6 font-medium text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.back}
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.title}</h1>
          <p className="text-lg text-gray-600 leading-relaxed">{t.subtitle}</p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          {error && (
            <div className="mb-6 flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-5 py-4">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden mb-6">
              <div className="px-6 py-5 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900">{t.personalInfo}</h2>
                <p className="text-sm text-gray-500 mt-1">{t.personalDesc}</p>
              </div>
              <div className="p-6 space-y-5">

                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <User className="w-4 h-4 text-[#116366]" />
                    {t.fullName} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Budi Santoso"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#116366] focus:border-transparent transition"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="w-4 h-4 text-[#116366]" />
                      {t.email} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="budi@example.com"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#116366] focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <Phone className="w-4 h-4 text-[#116366]" />
                      {t.phone} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+62 812 3456 7890"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#116366] focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label htmlFor="location" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 text-[#116366]" />
                    {t.location} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="Jakarta, Indonesia"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#116366] focus:border-transparent transition"
                  />
                </div>

                {/* Position */}
                <div>
                  <label htmlFor="position" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Briefcase className="w-4 h-4 text-[#116366]" />
                    {t.positionInterest} <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#116366] focus:border-transparent transition"
                  >
                    <option value="">{t.selectPosition}</option>
                    <option value="frontend">Frontend Developer</option>
                    <option value="backend">Backend Developer</option>
                    <option value="fullstack">Fullstack Developer</option>
                    <option value="mobile">Mobile Developer</option>
                    <option value="devops">DevOps Engineer</option>
                    <option value="ai-ml">AI/ML Engineer</option>
                    <option value="ui-ux">UI/UX Designer</option>
                    <option value="project-manager">Project Manager</option>
                    <option value="business-analyst">Business Analyst</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Experience */}
                <div>
                  <label htmlFor="experience" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <GraduationCap className="w-4 h-4 text-[#116366]" />
                    {t.experienceLevel} <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#116366] focus:border-transparent transition"
                  >
                    <option value="">{t.selectExperience}</option>
                    <option value="Fresh Graduate">Fresh Graduate</option>
                    <option value="1-2 Years">1–2 Years</option>
                    <option value="3-5 Years">3–5 Years</option>
                    <option value="5-10 Years">5–10 Years</option>
                    <option value="10+ Years">10+ Years</option>
                  </select>
                </div>

                {/* Skills */}
                <div>
                  <label htmlFor="skills" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.skills} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="skills"
                    name="skills"
                    placeholder={t.skillsPlaceholder}
                    required
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#116366] focus:border-transparent transition resize-none"
                  />
                </div>

                {/* LinkedIn & GitHub */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="linkedin" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <Linkedin className="w-4 h-4 text-[#116366]" />
                      {t.linkedin}
                    </label>
                    <input
                      id="linkedin"
                      name="linkedin"
                      type="url"
                      placeholder="https://linkedin.com/in/yourprofile"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#116366] focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="github" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <Github className="w-4 h-4 text-[#116366]" />
                      {t.github}
                    </label>
                    <input
                      id="github"
                      name="github"
                      type="url"
                      placeholder="https://github.com/yourusername"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#116366] focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Cover Letter */}
                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.coverLetter} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    placeholder={t.coverPlaceholder}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#116366] focus:border-transparent transition resize-none"
                  />
                </div>

                {/* CV Upload */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Upload className="w-4 h-4 text-[#116366]" />
                    {t.cv} <span className="text-red-500">*</span>
                  </label>
                  <div
                    className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors ${cvFile ? 'border-[#116366] bg-[#116366]/5' : 'border-gray-300 hover:border-[#116366] hover:bg-gray-50'}`}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      name="cv"
                      accept=".pdf,application/pdf"
                      required
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    {cvFile ? (
                      <div className="flex items-center justify-center gap-3 text-[#116366]">
                        <FileText className="w-6 h-6" />
                        <div className="text-left">
                          <p className="font-semibold text-sm">{cvFile.name}</p>
                          <p className="text-xs text-gray-500">{(cvFile.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                      </div>
                    ) : (
                      <div className="text-gray-500">
                        <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                        <p className="text-sm font-medium">{t.chooseFile}</p>
                        <p className="text-xs text-gray-400 mt-1">{t.cvNote} · max 5MB</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Salary */}
                <div>
                  <label htmlFor="salary" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.salary}
                  </label>
                  <select
                    id="salary"
                    name="salary"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#116366] focus:border-transparent transition"
                  >
                    <option value="">{t.selectSalary}</option>
                    <option value="5-10m">Rp 5–10 Juta</option>
                    <option value="10-15m">Rp 10–15 Juta</option>
                    <option value="15-20m">Rp 15–20 Juta</option>
                    <option value="20-30m">Rp 20–30 Juta</option>
                    <option value="30m+">Rp 30 Juta+</option>
                    <option value="negotiable">Negotiable</option>
                  </select>
                </div>

                {/* Availability */}
                <div>
                  <label htmlFor="availability" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.availability}
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#116366] focus:border-transparent transition"
                  >
                    <option value="">{t.selectAvailability}</option>
                    <option value="immediate">Immediate</option>
                    <option value="2weeks">2 Weeks Notice</option>
                    <option value="1month">1 Month Notice</option>
                    <option value="2months">2 Months Notice</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#116366] to-[#14b8a6] text-white font-semibold py-4 px-8 rounded-xl hover:opacity-90 transition-opacity shadow-lg disabled:opacity-60 disabled:cursor-not-allowed text-base"
                  >
                    {submitting
                      ? <><Loader2 className="w-5 h-5 animate-spin" />{t.submitting}</>
                      : <><Send className="w-5 h-5" />{t.submit}</>
                    }
                  </button>
                  <p className="text-xs text-gray-400 mt-3 text-center">{t.privacy}</p>
                </div>

              </div>
            </div>
          </form>

          {/* Process info */}
          <div className="bg-gradient-to-br from-[#116366]/5 to-[#14b8a6]/5 border border-[#116366]/20 rounded-2xl p-6">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#116366]" />
              {t.process}
            </h3>
            <ol className="space-y-3">
              {t.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#116366] text-white flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm text-gray-600">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
