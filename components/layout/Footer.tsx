'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Github, CheckCircle, Clock } from 'lucide-react';

const Footer = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || t('footer.newsletter.error'));
      }

      setSuccess(true);
      setEmail('');
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : t('footer.newsletter.error'));
    } finally {
      setLoading(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 border-t border-gray-200 overflow-hidden">
      {/* Thin Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #116366 1px, transparent 1px),
            linear-gradient(to bottom, #116366 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #116366 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-[#116366]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-[#14b8a6]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#5eead4]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top shapes */}
        <div className="absolute top-20 left-10 w-24 h-24 border border-[#116366]/10 rounded-xl rotate-12 animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-[#14b8a6]/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>

        {/* Middle shapes */}
        <div className="absolute top-1/2 left-1/3 w-20 h-20 border border-[#116366]/10 rounded-lg -rotate-6 animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-[#14b8a6]/5 rounded-md rotate-45 animate-float" style={{ animationDelay: '1.5s' }}></div>

        {/* Bottom shapes */}
        <div className="absolute bottom-32 left-1/4 w-28 h-28 border border-[#116366]/10 rounded-2xl rotate-6 animate-float" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-16 h-16 border border-[#5eead4]/15 rounded-full animate-float" style={{ animationDelay: '1.8s' }}></div>
      </div>

      {/* Tech Icons Illustration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        {/* Code brackets */}
        <div className="absolute top-10 left-1/4 text-6xl font-bold text-[#116366] rotate-12 animate-float">{'{ }'}</div>
        <div className="absolute bottom-20 right-1/4 text-6xl font-bold text-[#14b8a6] -rotate-12 animate-float" style={{ animationDelay: '1s' }}>{'< />'}</div>

        {/* Binary pattern */}
        <div className="absolute top-1/3 right-10 text-2xl font-mono text-[#116366] opacity-50">
          <div className="animate-float">01010</div>
          <div className="animate-float" style={{ animationDelay: '0.5s' }}>10101</div>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-0 left-0 w-32 h-0.5 bg-gradient-to-r from-[#116366] to-transparent"></div>
          <div className="absolute top-0 left-0 w-0.5 h-32 bg-gradient-to-b from-[#116366] to-transparent"></div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-full h-full opacity-5">
          <div className="absolute bottom-0 right-0 w-32 h-0.5 bg-gradient-to-l from-[#14b8a6] to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-0.5 h-32 bg-gradient-to-t from-[#14b8a6] to-transparent"></div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href={`/${locale}`} className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                {/* Shadow layers */}
                <div className="absolute inset-0 w-14 h-14 rounded-lg bg-[#116366]/20 blur-sm transform translate-x-0.5 translate-y-0.5"></div>
                <div className="absolute inset-0 w-14 h-14 rounded-lg bg-[#14b8a6]/10 blur-md"></div>

                {/* Main logo */}
                <div className="relative w-14 h-14 rounded-lg gradient-primary flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-3xl">A</span>
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold bg-gradient-to-r from-[#116366] to-[#14b8a6] bg-clip-text text-transparent">Autobot</span>
                <span className="text-base text-gray-600">Wijaya Solution</span>
              </div>
            </Link>
            <p className="text-lg text-gray-600 mb-6 max-w-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-11 h-11 rounded-lg bg-[#116366]/5 flex items-center justify-center group-hover:bg-[#116366]/10 transition-colors flex-shrink-0">
                  <MapPin size={20} className="text-[#116366]" />
                </div>
                <span className="text-gray-600 group-hover:text-[#116366] transition-colors text-base leading-relaxed">Jl. Gg. Bina Warga III No. 36, Kel. Lubang Buaya, Kec. Cipayung, Jakarta Timur, DKI Jakarta 13810</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-11 h-11 rounded-lg bg-[#116366]/5 flex items-center justify-center group-hover:bg-[#116366]/10 transition-colors flex-shrink-0">
                  <Phone size={20} className="text-[#116366]" />
                </div>
                <a href="https://wa.me/628135000965" className="text-gray-600 group-hover:text-[#116366] transition-colors text-lg">+62 813-5000-0965</a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-11 h-11 rounded-lg bg-[#116366]/5 flex items-center justify-center group-hover:bg-[#116366]/10 transition-colors flex-shrink-0">
                  <Mail size={20} className="text-[#116366]" />
                </div>
                <a href="mailto:autobotwsolution@gmail.com" className="text-gray-600 group-hover:text-[#116366] transition-colors text-lg">autobotwsolution@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-11 h-11 rounded-lg bg-[#116366]/5 flex items-center justify-center group-hover:bg-[#116366]/10 transition-colors flex-shrink-0">
                  <Clock size={20} className="text-[#116366]" />
                </div>
                <span className="text-gray-600 group-hover:text-[#116366] transition-colors text-base">Senin - Jumat (09.00 - 17.00 WIB)</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="relative font-bold text-gray-900 mb-5 pb-2 text-xl">
              {t('footer.servicesTitle')}
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#116366] to-[#14b8a6] rounded-full"></div>
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li><Link href={`/${locale}/services/web-development`} className="hover:text-[#116366] transition-colors text-base leading-relaxed">{t('footer.services.webDev')}</Link></li>
              <li><Link href={`/${locale}/services/mobile-app-development`} className="hover:text-[#116366] transition-colors text-base leading-relaxed">{t('footer.services.mobileApps')}</Link></li>
              <li><Link href={`/${locale}/services/ai-solutions`} className="hover:text-[#116366] transition-colors text-base leading-relaxed">{t('footer.services.aiSolutions')}</Link></li>
              <li><Link href={`/${locale}/services/iot-solutions`} className="hover:text-[#116366] transition-colors text-base leading-relaxed">{t('footer.services.iotSolutions')}</Link></li>
              <li><Link href={`/${locale}/services/cloud-solutions`} className="hover:text-[#116366] transition-colors text-base leading-relaxed">{t('footer.services.cloudServices')}</Link></li>
              <li><Link href={`/${locale}/services/cybersecurity`} className="hover:text-[#116366] transition-colors text-base leading-relaxed">{t('footer.services.cybersecurity')}</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="relative font-bold text-gray-900 mb-5 pb-2 text-xl">
              {t('footer.solutionsTitle')}
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#116366] to-[#14b8a6] rounded-full"></div>
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li><Link href={`/${locale}/solutions/corporate`} className="hover:text-[#116366] transition-colors text-base leading-relaxed">{t('footer.solutions.corporate')}</Link></li>
              <li><Link href={`/${locale}/solutions/education`} className="hover:text-[#116366] transition-colors text-base leading-relaxed">{t('footer.solutions.education')}</Link></li>
              <li><Link href={`/${locale}/solutions/healthcare`} className="hover:text-[#116366] transition-colors text-base leading-relaxed">{t('footer.solutions.healthcare')}</Link></li>
              <li><Link href={`/${locale}/solutions/retail`} className="hover:text-[#116366] transition-colors text-base leading-relaxed">{t('footer.solutions.retail')}</Link></li>
              <li><Link href={`/${locale}/manpower`} className="hover:text-[#116366] transition-colors text-base leading-relaxed">{t('footer.solutions.manpower')}</Link></li>
              <li><Link href={`/${locale}/partnership`} className="hover:text-[#116366] transition-colors text-base leading-relaxed">{t('footer.solutions.partnership')}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="relative font-bold text-gray-900 mb-5 pb-2 text-xl">
              {t('footer.companyTitle')}
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#116366] to-[#14b8a6] rounded-full"></div>
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li><Link href={`/${locale}/about`} className="hover:text-[#116366] transition-colors text-base leading-relaxed">{t('footer.company.about')}</Link></li>
              <li><Link href={`/${locale}/portfolio`} className="hover:text-[#116366] transition-colors text-base leading-relaxed">{t('footer.company.portfolio')}</Link></li>
              <li><Link href={`/${locale}/careers`} className="hover:text-[#116366] transition-colors text-base leading-relaxed">{t('footer.company.careers')}</Link></li>
              <li><Link href={`/${locale}/resources/blog`} className="hover:text-[#116366] transition-colors text-base leading-relaxed">{t('footer.company.blog')}</Link></li>
              <li><Link href={`/${locale}/open-source`} className="hover:text-[#116366] transition-colors text-base leading-relaxed">{t('footer.company.openSource')}</Link></li>
              <li><Link href={`/${locale}/contact`} className="hover:text-[#116366] transition-colors text-base leading-relaxed">{t('footer.company.contact')}</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-14 pt-10 border-t border-gray-200">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="relative font-bold text-gray-900 pb-2 text-2xl">
                {t('footer.newsletter.title')}
                <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-gradient-to-r from-[#116366] to-[#14b8a6] rounded-full"></div>
              </h3>
              <div className="w-2.5 h-2.5 rounded-full bg-[#14b8a6] animate-pulse"></div>
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">{t('footer.newsletter.description')}</p>

            {success ? (
              <div className="relative flex items-center gap-3 p-5 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl text-green-800 overflow-hidden">
                {/* Success pattern background */}
                <div className="absolute inset-0 opacity-[0.05]">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                    backgroundSize: '16px 16px'
                  }}></div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-green-200 blur-md rounded-full animate-pulse"></div>
                  <CheckCircle className="relative w-7 h-7" />
                </div>
                <span className="relative text-lg font-medium">{t('footer.newsletter.success')}</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1 group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('footer.newsletter.placeholder')}
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#116366]/20 focus:border-[#116366] disabled:opacity-50 disabled:cursor-not-allowed transition-all bg-white group-hover:border-gray-300"
                  />
                  {/* Input decoration */}
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <Mail className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative px-8 py-3 bg-gradient-to-r from-[#116366] to-[#14b8a6] text-white rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px] overflow-hidden"
                >
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="relative">{t('footer.newsletter.subscribing')}</span>
                    </>
                  ) : (
                    <span className="relative font-semibold">{t('footer.newsletter.subscribe')}</span>
                  )}
                </button>
              </form>
            )}

            {error && (
              <p className="mt-3 text-sm text-red-600 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-red-600"></span>
                {error}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative border-t border-gray-200 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #116366 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#116366]/20 to-transparent"></div>

        <div className="container mx-auto px-4 py-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-base text-gray-600 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#116366]"></span>
              {t('footer.copyright', { year: currentYear })}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5">
              <a href="#" className="group relative w-11 h-11 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-600 hover:text-white hover:border-[#116366] transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#116366] to-[#14b8a6] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Facebook size={22} className="relative z-10" />
              </a>
              <a href="#" className="group relative w-11 h-11 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-600 hover:text-white hover:border-[#116366] transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#116366] to-[#14b8a6] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Twitter size={22} className="relative z-10" />
              </a>
              <a href="#" className="group relative w-11 h-11 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-600 hover:text-white hover:border-[#116366] transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#116366] to-[#14b8a6] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Linkedin size={22} className="relative z-10" />
              </a>
              <a href="#" className="group relative w-11 h-11 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-600 hover:text-white hover:border-[#116366] transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#116366] to-[#14b8a6] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Instagram size={22} className="relative z-10" />
              </a>
              <a href="#" className="group relative w-11 h-11 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-600 hover:text-white hover:border-[#116366] transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#116366] to-[#14b8a6] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Github size={22} className="relative z-10" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-base text-gray-600">
              <Link href={`/${locale}/legal/privacy-policy`} className="relative group">
                <span className="group-hover:text-[#116366] transition-colors">{t('footer.privacy')}</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#116366] to-[#14b8a6] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <span className="text-gray-400">•</span>
              <Link href={`/${locale}/legal/terms-of-service`} className="relative group">
                <span className="group-hover:text-[#116366] transition-colors">{t('footer.terms')}</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#116366] to-[#14b8a6] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <span className="text-gray-400">•</span>
              <Link href={`/${locale}/legal/cookie-policy`} className="relative group">
                <span className="group-hover:text-[#116366] transition-colors">{t('footer.cookies')}</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#116366] to-[#14b8a6] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
