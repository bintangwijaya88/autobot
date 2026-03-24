'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Code,
  Smartphone,
  Brain,
  Cpu,
  Cloud,
  Shield,
  Building2,
  GraduationCap,
  Hospital,
  ShoppingCart,
  Users,
  Handshake,
  BookOpen,
  Briefcase,
  FileText,
  ArrowRight,
  Mail,
  BarChart,
  DollarSign,
  School,
  Truck,
  Sparkles,
  Scan,
  Router,
  MessageSquare,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import CurrencySwitcher from '@/components/CurrencySwitcher';

const Header = () => {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/');

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  const servicesMenu = [
    { icon: Code, title: t('menu.services.webDev.title'), description: t('menu.services.webDev.description'), href: `/${locale}/services/web-development` },
    { icon: Smartphone, title: t('menu.services.mobileDev.title'), description: t('menu.services.mobileDev.description'), href: `/${locale}/services/mobile-app-development` },
    { icon: Brain, title: t('menu.services.aiSolutions.title'), description: t('menu.services.aiSolutions.description'), href: `/${locale}/services/ai-solutions` },
    { icon: Cpu, title: t('menu.services.iotSolutions.title'), description: t('menu.services.iotSolutions.description'), href: `/${locale}/services/iot-solutions` },
    { icon: Cloud, title: t('menu.services.cloudServices.title'), description: t('menu.services.cloudServices.description'), href: `/${locale}/services/cloud-solutions` },
    { icon: Shield, title: t('menu.services.cybersecurity.title'), description: t('menu.services.cybersecurity.description'), href: `/${locale}/services/cybersecurity` },
  ];

  const solutionsMenu = [
    { icon: Building2, title: t('menu.solutions.corporate.title'), description: t('menu.solutions.corporate.description'), badge: t('menu.solutions.corporate.badge'), href: `/${locale}/solutions/corporate` },
    { icon: GraduationCap, title: t('menu.solutions.education.title'), description: t('menu.solutions.education.description'), badge: null, href: `/${locale}/solutions/education` },
    { icon: Hospital, title: t('menu.solutions.healthcare.title'), description: t('menu.solutions.healthcare.description'), badge: t('menu.solutions.healthcare.badge'), href: `/${locale}/solutions/healthcare` },
    { icon: ShoppingCart, title: t('menu.solutions.retail.title'), description: t('menu.solutions.retail.description'), badge: null, href: `/${locale}/solutions/retail` },
  ];

  const productsMenuCategories = [
    {
      name: t('menu.products.coreServices'),
      items: [
        { icon: Code, title: t('menu.products.items.webDev.title'), badge: null, href: `/${locale}/services/web-development` },
        { icon: Smartphone, title: t('menu.products.items.mobileDev.title'), badge: null, href: `/${locale}/services/mobile-app-development` },
        { icon: Brain, title: t('menu.products.items.aiLlm.title'), badge: t('menu.products.items.aiLlm.badge'), href: `/${locale}/services/ai-solutions` },
        { icon: Cpu, title: t('menu.products.items.iot.title'), badge: null, href: `/${locale}/services/iot-solutions` },
        { icon: Cloud, title: t('menu.products.items.cloud.title'), badge: null, href: `/${locale}/services/cloud-solutions` },
        { icon: Shield, title: t('menu.products.items.cybersecurity.title'), badge: null, href: `/${locale}/services/cybersecurity` },
      ],
    },
    {
      name: t('menu.products.softwareProducts'),
      items: [
        { icon: Mail, title: t('menu.products.items.emailZimbra.title'), badge: null, href: `/${locale}/solutions/corporate` },
        { icon: BarChart, title: t('menu.products.items.erpOdoo.title'), badge: null, href: `/${locale}/solutions/corporate` },
        { icon: BookOpen, title: t('menu.products.items.lmsMoodle.title'), badge: null, href: `/${locale}/solutions/education` },
        { icon: FileText, title: t('menu.products.items.hrManagement.title'), badge: null, href: `/${locale}/solutions/corporate` },
        { icon: ShoppingCart, title: t('menu.products.items.posSystem.title'), badge: null, href: `/${locale}/solutions/retail` },
        { icon: Users, title: t('menu.products.items.crmSystem.title'), badge: null, href: `/${locale}/solutions/corporate` },
        { icon: Hospital, title: t('menu.products.items.bpjsIntegration.title'), badge: null, href: `/${locale}/solutions/healthcare` },
        { icon: Building2, title: t('menu.products.items.inventorySystem.title'), badge: null, href: `/${locale}/solutions/retail` },
      ],
    },
    {
      name: t('menu.products.saasProducts'),
      items: [
        { icon: DollarSign, title: t('menu.products.items.klopdana.title'), badge: t('menu.products.items.klopdana.badge'), href: `/${locale}/products/klopdana` },
        { icon: School, title: t('menu.products.items.bintanx.title'), badge: null, href: `/${locale}/products/bintanx` },
        { icon: Truck, title: t('menu.products.items.deliveryApp.title'), badge: null, href: `/${locale}/products/delivery-app` },
        { icon: Sparkles, title: t('menu.products.items.kiloKelola.title'), badge: null, href: `/${locale}/products/kilokelola` },
        { icon: Brain, title: t('menu.products.items.medixMind.title'), badge: t('menu.products.items.medixMind.badge'), href: `/${locale}/products/medixmind` },
        { icon: Router, title: t('menu.products.items.ryugate.title'), badge: null, href: `/${locale}/products/ryugate` },
        { icon: MessageSquare, title: t('menu.products.items.wabotiq.title'), badge: null, href: `/${locale}/products/wabotiq` },
        { icon: Scan, title: t('menu.products.items.ocrFile.title'), badge: null, href: `/${locale}/products/ocrfile` },
      ],
    },
  ];

  const resourcesMenu = [
    { icon: BookOpen, title: t('menu.resources.blogArticles.title'), description: t('menu.resources.blogArticles.description'), href: `/${locale}/resources/blog` },
    { icon: FileText, title: t('menu.resources.caseStudies.title'), description: t('menu.resources.caseStudies.description'), href: `/${locale}/portfolio` },
    { icon: Briefcase, title: t('menu.resources.careers.title'), description: t('menu.resources.careers.description'), href: `/${locale}/careers` },
    { icon: Users, title: t('menu.resources.manpower.title'), description: t('menu.resources.manpower.description'), href: `/${locale}/manpower` },
    { icon: Handshake, title: t('menu.resources.partnership.title'), description: t('menu.resources.partnership.description'), href: `/${locale}/partnership` },
  ];

  const navLinkClass = (active: boolean) =>
    `relative text-sm font-medium transition-colors duration-200 py-1 ${
      active
        ? 'text-[#116366] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#116366] after:rounded-full'
        : 'text-gray-600 hover:text-[#116366]'
    }`;

  const dropdownLinkClass =
    'flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#116366]/5 transition-colors group';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-md border-b border-gray-100'
            : 'bg-white/90 backdrop-blur-sm border-b border-gray-100'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center gap-2.5 shrink-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-base">A</span>
              </div>
              <div className="leading-tight">
                <div className="text-[15px] font-bold text-[#116366]">Autobot</div>
                <div className="text-[10px] text-gray-500 -mt-0.5">Wijaya Solution</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-1">

              <Link href={`/${locale}/about`} className={`px-3 ${navLinkClass(isActive(`/${locale}/about`))}`}>
                {t('nav.about')}
              </Link>

              {/* Services */}
              <div className="relative group/nav">
                <button className={`flex items-center gap-1 px-3 ${navLinkClass(isActive(`/${locale}/services`))}`}>
                  {t('nav.services')}
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover/nav:rotate-180" />
                </button>
                <div className="absolute top-full left-0 pt-3 invisible opacity-0 group-hover/nav:visible group-hover/nav:opacity-100 transition-all duration-200">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-4 w-[580px]">
                    <div className="grid grid-cols-2 gap-1">
                      {servicesMenu.map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <Link key={i} href={item.href} className={dropdownLinkClass}>
                            <div className="w-9 h-9 rounded-lg bg-[#116366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#116366] transition-colors">
                              <Icon className="w-4 h-4 text-[#116366] group-hover:text-white transition-colors" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-800 group-hover:text-[#116366] transition-colors">{item.title}</div>
                              <div className="text-xs text-gray-400 line-clamp-1">{item.description}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <Link href={`/${locale}/services`} className="flex items-center justify-between text-sm font-semibold text-[#116366] hover:text-[#0d4d50] group/all">
                        <span>{t('menu.services.viewAll')}</span>
                        <ArrowRight className="w-4 h-4 group-hover/all:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div className="relative group/nav">
                <button className={`flex items-center gap-1 px-3 ${navLinkClass(isActive(`/${locale}/solutions`))}`}>
                  {t('nav.solutions')}
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover/nav:rotate-180" />
                </button>
                <div className="absolute top-full left-0 pt-3 invisible opacity-0 group-hover/nav:visible group-hover/nav:opacity-100 transition-all duration-200">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-4 w-[480px]">
                    <div className="grid grid-cols-2 gap-1">
                      {solutionsMenu.map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <Link key={i} href={item.href} className={`${dropdownLinkClass} relative`}>
                            {item.badge && (
                              <span className="absolute top-1.5 right-1.5 text-[9px] font-bold bg-[#116366] text-white px-1.5 py-0.5 rounded-full">
                                {item.badge}
                              </span>
                            )}
                            <div className="w-9 h-9 rounded-lg bg-[#116366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#116366] transition-colors">
                              <Icon className="w-4 h-4 text-[#116366] group-hover:text-white transition-colors" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-800 group-hover:text-[#116366] transition-colors">{item.title}</div>
                              <div className="text-xs text-gray-400 line-clamp-1">{item.description}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <Link href={`/${locale}/solutions`} className="flex items-center justify-between text-sm font-semibold text-[#116366] hover:text-[#0d4d50] group/all">
                        <span>{t('menu.solutions.viewAll')}</span>
                        <ArrowRight className="w-4 h-4 group-hover/all:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Products — full-width panel anchored to header */}
              <div className="relative group/nav">
                <button className={`flex items-center gap-1 px-3 ${navLinkClass(isActive(`/${locale}/products`))}`}>
                  {t('nav.products')}
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover/nav:rotate-180" />
                </button>
                <div className="fixed left-0 right-0 top-16 pt-0 invisible opacity-0 group-hover/nav:visible group-hover/nav:opacity-100 transition-all duration-200 z-50">
                  <div className="bg-white border-t border-b border-gray-100 shadow-xl">
                    <div className="max-w-screen-xl mx-auto px-6 py-6">
                      <div className="grid grid-cols-3 gap-8">
                        {productsMenuCategories.map((cat, ci) => (
                          <div key={ci}>
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-1 h-4 bg-gradient-to-b from-[#116366] to-[#14b8a6] rounded-full" />
                              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{cat.name}</span>
                            </div>
                            <div className="space-y-0.5">
                              {cat.items.map((item, ii) => {
                                const Icon = item.icon;
                                return (
                                  <Link key={ii} href={item.href} className="flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-[#116366]/5 group transition-colors">
                                    <div className="w-7 h-7 rounded-md bg-[#116366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#116366] transition-colors">
                                      <Icon className="w-3.5 h-3.5 text-[#116366] group-hover:text-white transition-colors" />
                                    </div>
                                    <span className="text-sm text-gray-700 group-hover:text-[#116366] font-medium transition-colors flex-1">{item.title}</span>
                                    {item.badge && (
                                      <span className="text-[9px] font-bold bg-[#116366] text-white px-1.5 py-0.5 rounded-full shrink-0">{item.badge}</span>
                                    )}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                          <span className="font-semibold text-gray-700">{t('menu.products.needCustom')}</span>{' '}
                          {t('menu.products.needCustomDesc')}
                        </p>
                        <Link href={`/${locale}/contact`} className="flex items-center gap-1.5 text-sm font-semibold text-[#116366] hover:text-[#0d4d50] group/cta">
                          {t('common.requestQuote')}
                          <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link href={`/${locale}/portfolio`} className={`px-3 ${navLinkClass(isActive(`/${locale}/portfolio`))}`}>
                {t('nav.portfolio')}
              </Link>

              {/* Resources */}
              <div className="relative group/nav">
                <button className={`flex items-center gap-1 px-3 ${navLinkClass(
                  isActive(`/${locale}/resources`) || isActive(`/${locale}/careers`) ||
                  isActive(`/${locale}/manpower`) || isActive(`/${locale}/partnership`)
                )}`}>
                  {t('nav.resources')}
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover/nav:rotate-180" />
                </button>
                <div className="absolute top-full right-0 pt-3 invisible opacity-0 group-hover/nav:visible group-hover/nav:opacity-100 transition-all duration-200">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-4 w-[320px]">
                    <div className="space-y-0.5">
                      {resourcesMenu.map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <Link key={i} href={item.href} className={dropdownLinkClass}>
                            <div className="w-9 h-9 rounded-lg bg-[#116366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#116366] transition-colors">
                              <Icon className="w-4 h-4 text-[#116366] group-hover:text-white transition-colors" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-800 group-hover:text-[#116366] transition-colors">{item.title}</div>
                              <div className="text-xs text-gray-400">{item.description}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

            </nav>

            {/* Right: CTA + Lang + Currency */}
            <div className="hidden xl:flex items-center gap-2 shrink-0">
              <CurrencySwitcher />
              <LanguageSwitcher />
              <Link href={`/${locale}/contact`}>
                <Button variant="outline" size="sm" className="border-[#116366] text-[#116366] hover:bg-[#116366] hover:text-white h-8 text-xs px-3">
                  {t('common.contactUs')}
                </Button>
              </Link>
              <Link href={`/${locale}/contact`}>
                <Button size="sm" className="bg-[#116366] hover:bg-[#0d4d50] text-white h-8 text-xs px-3">
                  {t('common.getStarted')}
                </Button>
              </Link>
            </div>

            {/* Mobile burger */}
            <button
              className="xl:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu — slide-down panel */}
      <div
        className={`fixed inset-0 z-40 xl:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />

        {/* Panel */}
        <div
          className={`absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto transition-transform duration-300 ${
            mobileOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <div className="px-4 py-3 space-y-1">

            <Link href={`/${locale}/about`} className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive(`/${locale}/about`) ? 'bg-[#116366]/10 text-[#116366]' : 'text-gray-700 hover:bg-gray-50'}`}>
              {t('nav.about')}
            </Link>

            {/* Mobile accordion items */}
            {[
              { key: 'services', label: t('nav.services'), active: isActive(`/${locale}/services`), items: servicesMenu.map(s => ({ icon: s.icon, title: s.title, href: s.href })) },
              { key: 'solutions', label: t('nav.solutions'), active: isActive(`/${locale}/solutions`), items: solutionsMenu.map(s => ({ icon: s.icon, title: s.title, href: s.href })) },
              { key: 'resources', label: t('nav.resources'), active: false, items: resourcesMenu.map(r => ({ icon: r.icon, title: r.title, href: r.href })) },
            ].map(({ key, label, active, items }) => (
              <div key={key}>
                <button
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${active ? 'bg-[#116366]/10 text-[#116366]' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setMobileExpanded(mobileExpanded === key ? null : key)}
                >
                  {label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === key ? 'rotate-180' : ''}`} />
                </button>
                {mobileExpanded === key && (
                  <div className="ml-3 mt-1 space-y-0.5 border-l-2 border-[#116366]/20 pl-3">
                    {items.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <Link key={i} href={item.href} className="flex items-center gap-2.5 px-2 py-2 rounded-lg text-sm text-gray-600 hover:text-[#116366] hover:bg-[#116366]/5 transition-colors">
                          <Icon className="w-4 h-4 shrink-0" />
                          {item.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}

            {/* Products accordion */}
            <div>
              <button
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive(`/${locale}/products`) ? 'bg-[#116366]/10 text-[#116366]' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setMobileExpanded(mobileExpanded === 'products' ? null : 'products')}
              >
                {t('nav.products')}
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === 'products' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpanded === 'products' && (
                <div className="ml-3 mt-1 border-l-2 border-[#116366]/20 pl-3 space-y-3">
                  {productsMenuCategories.map((cat, ci) => (
                    <div key={ci}>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-2 mb-1">{cat.name}</div>
                      <div className="space-y-0.5">
                        {cat.items.map((item, ii) => {
                          const Icon = item.icon;
                          return (
                            <Link key={ii} href={item.href} className="flex items-center gap-2.5 px-2 py-2 rounded-lg text-sm text-gray-600 hover:text-[#116366] hover:bg-[#116366]/5 transition-colors">
                              <Icon className="w-4 h-4 shrink-0" />
                              <span className="flex-1">{item.title}</span>
                              {item.badge && <span className="text-[9px] font-bold bg-[#116366] text-white px-1.5 py-0.5 rounded-full">{item.badge}</span>}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href={`/${locale}/portfolio`} className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive(`/${locale}/portfolio`) ? 'bg-[#116366]/10 text-[#116366]' : 'text-gray-700 hover:bg-gray-50'}`}>
              {t('nav.portfolio')}
            </Link>

          </div>

          {/* Mobile bottom CTAs */}
          <div className="px-4 py-4 border-t border-gray-100 space-y-3">
            <div className="flex gap-2">
              <div className="flex-1"><CurrencySwitcher /></div>
              <div className="flex-1"><LanguageSwitcher /></div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Link href={`/${locale}/contact`}>
                <Button variant="outline" className="w-full border-[#116366] text-[#116366] hover:bg-[#116366] hover:text-white text-sm">
                  {t('common.contactUs')}
                </Button>
              </Link>
              <Link href={`/${locale}/contact`}>
                <Button className="w-full bg-[#116366] hover:bg-[#0d4d50] text-white text-sm">
                  {t('common.getStarted')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
