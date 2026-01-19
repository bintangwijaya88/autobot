'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import {
  Menu,
  X,
  ChevronDown,
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
  Bot,
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesMenu = [
    {
      icon: Code,
      title: t('menu.services.webDev.title'),
      description: t('menu.services.webDev.description'),
      href: `/${locale}/services/web-development`,
    },
    {
      icon: Smartphone,
      title: t('menu.services.mobileDev.title'),
      description: t('menu.services.mobileDev.description'),
      href: `/${locale}/services/mobile-app-development`,
    },
    {
      icon: Brain,
      title: t('menu.services.aiSolutions.title'),
      description: t('menu.services.aiSolutions.description'),
      href: `/${locale}/services/ai-solutions`,
    },
    {
      icon: Cpu,
      title: t('menu.services.iotSolutions.title'),
      description: t('menu.services.iotSolutions.description'),
      href: `/${locale}/services/iot-solutions`,
    },
    {
      icon: Cloud,
      title: t('menu.services.cloudServices.title'),
      description: t('menu.services.cloudServices.description'),
      href: `/${locale}/services`,
    },
    {
      icon: Shield,
      title: t('menu.services.cybersecurity.title'),
      description: t('menu.services.cybersecurity.description'),
      href: `/${locale}/services`,
    },
  ];

  const solutionsMenu = [
    {
      icon: Building2,
      title: t('menu.solutions.corporate.title'),
      description: t('menu.solutions.corporate.description'),
      badge: t('menu.solutions.corporate.badge'),
      href: `/${locale}/solutions/corporate`,
    },
    {
      icon: GraduationCap,
      title: t('menu.solutions.education.title'),
      description: t('menu.solutions.education.description'),
      badge: null,
      href: `/${locale}/solutions/education`,
    },
    {
      icon: Hospital,
      title: t('menu.solutions.healthcare.title'),
      description: t('menu.solutions.healthcare.description'),
      badge: t('menu.solutions.healthcare.badge'),
      href: `/${locale}/solutions/healthcare`,
    },
    {
      icon: ShoppingCart,
      title: t('menu.solutions.retail.title'),
      description: t('menu.solutions.retail.description'),
      badge: null,
      href: `/${locale}/solutions/retail`,
    },
  ];

  const productsMenuCategories = [
    {
      name: t('menu.products.coreServices'),
      items: [
        {
          icon: Code,
          title: t('menu.products.items.webDev.title'),
          description: t('menu.products.items.webDev.description'),
          badge: null,
          href: `/${locale}/services/web-development`,
        },
        {
          icon: Smartphone,
          title: t('menu.products.items.mobileDev.title'),
          description: t('menu.products.items.mobileDev.description'),
          badge: null,
          href: `/${locale}/services/mobile-app-development`,
        },
        {
          icon: Brain,
          title: t('menu.products.items.aiLlm.title'),
          description: t('menu.products.items.aiLlm.description'),
          badge: t('menu.products.items.aiLlm.badge'),
          href: `/${locale}/services/ai-solutions`,
        },
        {
          icon: Cpu,
          title: t('menu.products.items.iot.title'),
          description: t('menu.products.items.iot.description'),
          badge: null,
          href: `/${locale}/services/iot-solutions`,
        },
        {
          icon: Cloud,
          title: t('menu.products.items.cloud.title'),
          description: t('menu.products.items.cloud.description'),
          badge: null,
          href: `/${locale}/services/cloud-solutions`,
        },
        {
          icon: Shield,
          title: t('menu.products.items.cybersecurity.title'),
          description: t('menu.products.items.cybersecurity.description'),
          badge: null,
          href: `/${locale}/services/cybersecurity`,
        },
      ],
    },
    {
      name: t('menu.products.softwareProducts'),
      items: [
        {
          icon: Mail,
          title: t('menu.products.items.emailZimbra.title'),
          description: t('menu.products.items.emailZimbra.description'),
          badge: null,
          href: `/${locale}/solutions/corporate`,
        },
        {
          icon: BarChart,
          title: t('menu.products.items.erpOdoo.title'),
          description: t('menu.products.items.erpOdoo.description'),
          badge: null,
          href: `/${locale}/solutions/corporate`,
        },
        {
          icon: BookOpen,
          title: t('menu.products.items.lmsMoodle.title'),
          description: t('menu.products.items.lmsMoodle.description'),
          badge: null,
          href: `/${locale}/solutions/education`,
        },
        {
          icon: FileText,
          title: t('menu.products.items.hrManagement.title'),
          description: t('menu.products.items.hrManagement.description'),
          badge: null,
          href: `/${locale}/solutions/corporate`,
        },
        {
          icon: ShoppingCart,
          title: t('menu.products.items.posSystem.title'),
          description: t('menu.products.items.posSystem.description'),
          badge: null,
          href: `/${locale}/solutions/retail`,
        },
        {
          icon: Users,
          title: t('menu.products.items.crmSystem.title'),
          description: t('menu.products.items.crmSystem.description'),
          badge: null,
          href: `/${locale}/solutions/corporate`,
        },
        {
          icon: Hospital,
          title: t('menu.products.items.bpjsIntegration.title'),
          description: t('menu.products.items.bpjsIntegration.description'),
          badge: null,
          href: `/${locale}/solutions/healthcare`,
        },
        {
          icon: Building2,
          title: t('menu.products.items.inventorySystem.title'),
          description: t('menu.products.items.inventorySystem.description'),
          badge: null,
          href: `/${locale}/solutions/retail`,
        },
      ],
    },
    {
      name: t('menu.products.saasProducts'),
      items: [
        {
          icon: DollarSign,
          title: t('menu.products.items.matchfinance.title'),
          description: t('menu.products.items.matchfinance.description'),
          badge: t('menu.products.items.matchfinance.badge'),
          href: `/${locale}/products/matchfinance`,
        },
        {
          icon: School,
          title: t('menu.products.items.mabda.title'),
          description: t('menu.products.items.mabda.description'),
          badge: null,
          href: `/${locale}/products/mabda`,
        },
        {
          icon: Truck,
          title: t('menu.products.items.deliveryApp.title'),
          description: t('menu.products.items.deliveryApp.description'),
          badge: null,
          href: `/${locale}/products/delivery-app`,
        },
        {
          icon: Sparkles,
          title: t('menu.products.items.mediWish.title'),
          description: t('menu.products.items.mediWish.description'),
          badge: null,
          href: `/${locale}/products/mediwish`,
        },
        {
          icon: Brain,
          title: t('menu.products.items.medixMind.title'),
          description: t('menu.products.items.medixMind.description'),
          badge: t('menu.products.items.medixMind.badge'),
          href: `/${locale}/products/medixmind`,
        },
        {
          icon: Router,
          title: t('menu.products.items.ryugate.title'),
          description: t('menu.products.items.ryugate.description'),
          badge: null,
          href: `/${locale}/products/ryugate`,
        },
        {
          icon: MessageSquare,
          title: t('menu.products.items.wabotiq.title'),
          description: t('menu.products.items.wabotiq.description'),
          badge: null,
          href: `/${locale}/products/wabotiq`,
        },
        {
          icon: Scan,
          title: t('menu.products.items.ocrFile.title'),
          description: t('menu.products.items.ocrFile.description'),
          badge: null,
          href: `/${locale}/products/ocrfile`,
        },
      ],
    },
  ];

  const resourcesMenu = [
    {
      icon: BookOpen,
      title: t('menu.resources.blogArticles.title'),
      description: t('menu.resources.blogArticles.description'),
      href: `/${locale}/resources/blog`,
    },
    {
      icon: FileText,
      title: t('menu.resources.caseStudies.title'),
      description: t('menu.resources.caseStudies.description'),
      href: `/${locale}/portfolio`,
    },
    {
      icon: Briefcase,
      title: t('menu.resources.careers.title'),
      description: t('menu.resources.careers.description'),
      href: `/${locale}/careers`,
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[#116366]">Autobot</span>
              <span className="text-xs text-gray-600">Wijaya Solution</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href={`/${locale}/about`} className="text-gray-700 hover:text-[#116366] transition-colors font-medium">
              {t('nav.about')}
            </Link>

            {/* Services Mega Menu */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-[#116366] transition-colors font-medium flex items-center">
                {t('nav.services')} <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-6 border border-gray-100">
                <div className="grid grid-cols-2 gap-4">
                  {servicesMenu.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={index}
                        href={service.href}
                        className="group/item flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 group-hover/item:text-[#116366] transition-colors">
                            {service.title}
                          </div>
                          <div className="text-sm text-gray-500 mt-0.5">
                            {service.description}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link
                    href={`/${locale}/services`}
                    className="flex items-center justify-between text-[#116366] font-semibold hover:text-[#0d4d50] transition-colors group/all"
                  >
                    <span>{t('menu.services.viewAll')}</span>
                    <ArrowRight className="w-4 h-4 group-hover/all:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Solutions Mega Menu */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-[#116366] transition-colors font-medium flex items-center">
                {t('nav.solutions')} <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-6 border border-gray-100">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{t('menu.solutions.title')}</h3>
                  <p className="text-sm text-gray-500">
                    {t('menu.solutions.subtitle')}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {solutionsMenu.map((solution, index) => {
                    const Icon = solution.icon;
                    return (
                      <Link
                        key={index}
                        href={solution.href}
                        className="group/item relative flex items-start space-x-3 p-4 rounded-lg hover:bg-gradient-to-br hover:from-gray-50 hover:to-white transition-all border border-gray-100 hover:border-[#116366]/30 hover:shadow-md"
                      >
                        {/* Badge */}
                        {solution.badge && (
                          <div className="absolute -top-1.5 -right-1.5 z-10">
                            <span className="px-2 py-0.5 bg-gradient-to-r from-[#116366] to-[#14b8a6] text-white text-[10px] font-bold rounded-full shadow">
                              {solution.badge}
                            </span>
                          </div>
                        )}
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 group-hover/item:text-[#116366] transition-colors">
                            {solution.title}
                          </div>
                          <div className="text-sm text-gray-500 mt-0.5">
                            {solution.description}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link
                    href={`/${locale}/solutions`}
                    className="flex items-center justify-between text-[#116366] font-semibold hover:text-[#0d4d50] transition-colors group/all"
                  >
                    <span>{t('menu.solutions.viewAll')}</span>
                    <ArrowRight className="w-4 h-4 group-hover/all:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Products Mega Menu - 14 Products */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-[#116366] transition-colors font-medium flex items-center">
                {t('nav.products')} <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-[850px] max-h-[600px] overflow-y-auto bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-6 border border-gray-100">
                <div className="mb-5 sticky top-0 bg-white pb-4 border-b border-gray-100 z-10 -mx-6 px-6 pt-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 flex items-center">
                    {t('menu.products.title')}
                    <span className="ml-3 px-2 py-0.5 bg-gradient-to-r from-[#116366] to-[#14b8a6] text-white text-xs font-bold rounded-full">
                      {t('menu.products.badge')}
                    </span>
                  </h3>
                  <p className="text-sm text-gray-500">
                    {t('menu.products.subtitle')}
                  </p>
                </div>

                {/* Group by Category */}
                {productsMenuCategories.map((category, catIndex) => (
                  <div key={catIndex} className="mb-6 last:mb-0">
                    <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-3 flex items-center">
                      <div className="w-1 h-4 bg-gradient-to-b from-[#116366] to-[#14b8a6] rounded mr-2"></div>
                      {category.name}
                      <span className="ml-2 text-xs font-normal text-gray-400">({category.items.length})</span>
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {category.items.map((product, index) => {
                        const Icon = product.icon;
                        return (
                          <Link
                            key={index}
                            href={product.href}
                            className="group/item relative flex items-start gap-3 p-4 rounded-lg hover:bg-gradient-to-br hover:from-gray-50 hover:to-white transition-all border border-gray-100 hover:border-[#116366]/30 hover:shadow-md"
                          >
                            {/* Badge */}
                            {product.badge && (
                              <div className="absolute -top-1.5 -right-1.5 z-10">
                                <span className="px-2 py-0.5 bg-gradient-to-r from-[#116366] to-[#14b8a6] text-white text-[10px] font-bold rounded-full shadow">
                                  {product.badge}
                                </span>
                              </div>
                            )}

                            {/* Icon */}
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform shadow-sm">
                              <Icon className="w-6 h-6 text-white" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="font-bold text-sm text-gray-900 group-hover/item:text-[#116366] transition-colors mb-0.5">
                                {product.title}
                              </div>
                              <div className="text-xs text-gray-500 line-clamp-2">
                                {product.description}
                              </div>
                            </div>

                            {/* Arrow */}
                            <div className="flex-shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity">
                              <ArrowRight className="w-4 h-4 text-[#116366]" />
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {/* Footer */}
                <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <strong>{t('menu.products.needCustom')}</strong> {t('menu.products.needCustomDesc')}
                  </div>
                  <Link
                    href={`/${locale}/contact`}
                    className="flex items-center text-[#116366] font-bold hover:text-[#0d4d50] transition-colors group/all"
                  >
                    <span>{t('common.requestQuote')}</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/all:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            <Link href={`/${locale}/portfolio`} className="text-gray-700 hover:text-[#116366] transition-colors font-medium">
              {t('nav.portfolio')}
            </Link>

            {/* Resources Mega Menu */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-[#116366] transition-colors font-medium flex items-center">
                {t('nav.resources')} <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full right-0 mt-2 w-[360px] bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-6 border border-gray-100">
                <div className="space-y-2">
                  {resourcesMenu.map((resource, index) => {
                    const Icon = resource.icon;
                    return (
                      <Link
                        key={index}
                        href={resource.href}
                        className="group/item flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 group-hover/item:text-[#116366] transition-colors">
                            {resource.title}
                          </div>
                          <div className="text-sm text-gray-500 mt-0.5">
                            {resource.description}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                  <Link
                    href={`/${locale}/manpower`}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-all group/item"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-[#116366] group-hover/item:to-[#14b8a6] transition-all">
                        <Users className="w-5 h-5 text-[#116366] group-hover/item:text-white transition-colors" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover/item:text-[#116366] transition-colors">
                          {t('menu.resources.manpower.title')}
                        </div>
                        <div className="text-sm text-gray-500">
                          {t('menu.resources.manpower.description')}
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    href={`/${locale}/partnership`}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-all group/item"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-[#116366] group-hover/item:to-[#14b8a6] transition-all">
                        <Handshake className="w-5 h-5 text-[#116366] group-hover/item:text-white transition-colors" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover/item:text-[#116366] transition-colors">
                          {t('menu.resources.partnership.title')}
                        </div>
                        <div className="text-sm text-gray-500">
                          {t('menu.resources.partnership.description')}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <CurrencySwitcher />
            <LanguageSwitcher />
            <Link href={`/${locale}/contact`}>
              <Button variant="outline" className="border-[#116366] text-[#116366] hover:bg-[#116366] hover:text-white">
                {t('common.contactUs')}
              </Button>
            </Link>
            <Link href={`/${locale}/contact`}>
              <Button className="bg-[#116366] hover:bg-[#0d4d50] text-white">
                {t('common.getStarted')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-[#116366]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t animate-in slide-in-from-top bg-white rounded-b-lg">
            <nav className="flex flex-col space-y-4">
              <Link href={`/${locale}/about`} className="text-gray-700 hover:text-[#116366] transition-colors font-medium px-4">
                {t('nav.about')}
              </Link>
              <Link href={`/${locale}/services`} className="text-gray-700 hover:text-[#116366] transition-colors font-medium px-4">
                {t('nav.services')}
              </Link>
              <Link href={`/${locale}/solutions`} className="text-gray-700 hover:text-[#116366] transition-colors font-medium px-4">
                {t('nav.solutions')}
              </Link>
              <Link href={`/${locale}/products`} className="text-gray-700 hover:text-[#116366] transition-colors font-medium px-4">
                {t('nav.products')}
              </Link>
              <Link href={`/${locale}/portfolio`} className="text-gray-700 hover:text-[#116366] transition-colors font-medium px-4">
                {t('nav.portfolio')}
              </Link>
              <Link href={`/${locale}/manpower`} className="text-gray-700 hover:text-[#116366] transition-colors font-medium px-4">
                {t('nav.manpower')}
              </Link>
              <Link href={`/${locale}/partnership`} className="text-gray-700 hover:text-[#116366] transition-colors font-medium px-4">
                {t('nav.partnership')}
              </Link>
              <Link href={`/${locale}/resources/blog`} className="text-gray-700 hover:text-[#116366] transition-colors font-medium px-4">
                {t('nav.resources')}
              </Link>
              <Link href={`/${locale}/careers`} className="text-gray-700 hover:text-[#116366] transition-colors font-medium px-4">
                {t('nav.careers')}
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t px-4">
                <div className="flex gap-2 mb-2">
                  <div className="flex-1">
                    <CurrencySwitcher />
                  </div>
                  <div className="flex-1">
                    <LanguageSwitcher />
                  </div>
                </div>
                <Link href={`/${locale}/contact`}>
                  <Button variant="outline" className="w-full border-[#116366] text-[#116366] hover:bg-[#116366] hover:text-white">
                    {t('common.contactUs')}
                  </Button>
                </Link>
                <Link href={`/${locale}/contact`}>
                  <Button className="w-full bg-[#116366] hover:bg-[#0d4d50] text-white">
                    {t('common.getStarted')}
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
