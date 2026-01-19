'use client';

import { PremiumHero } from '@/components/premium/PremiumHero';
import { PremiumSection } from '@/components/premium/PremiumSection';
import { PremiumCard } from '@/components/premium/PremiumCard';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ShoppingCart,
  Store,
  Package,
  CreditCard,
  BarChart3,
  Smartphone,
  Globe,
  Warehouse,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Users
} from 'lucide-react';

export default function RetailPage() {
  const params = useParams();
  const locale = params.locale as string;

  const packages = [
    {
      name: 'E-Commerce Starter',
      subtitle: 'For Online Store Startups',
      price: 'Rp 10.000.000',
      monthly: 'Rp 1.500.000/month',
      features: [
        'E-Commerce Website (WooCommerce/Shopify)',
        'Product Catalog (up to 500 products)',
        'Shopping Cart & Checkout',
        'Payment Gateway Integration',
        'Order Management',
        'Basic Inventory',
        'Customer Management',
        'Email Notifications',
        'Basic Analytics',
        'Standard Support (9x5)',
      ],
      recommended: false,
    },
    {
      name: 'Omnichannel Retail',
      subtitle: 'For Multi-channel Retailers',
      price: 'Rp 35.000.000',
      monthly: 'Rp 5.000.000/month',
      features: [
        'All Starter Features',
        'Point of Sale (POS) System',
        'Multi-store Management',
        'Advanced Inventory Management',
        'Warehouse Management',
        'Marketplace Integration (Tokopedia, Shopee)',
        'Mobile POS App',
        'Loyalty & Promotion Engine',
        'Advanced Analytics & Reports',
        'Multi-payment Gateway',
        'WhatsApp Integration',
        'Priority Support (24x7)',
      ],
      recommended: true,
    },
    {
      name: 'Enterprise Retail',
      subtitle: 'For Large Retail Chains',
      price: 'Rp 100.000.000',
      monthly: 'Rp 15.000.000/month',
      features: [
        'All Omnichannel Features',
        'Multi-branch & Multi-warehouse',
        'Supply Chain Management',
        'Franchise Management',
        'Advanced WMS',
        'B2B & B2C E-Commerce',
        'Custom ERP Integration',
        'AI-Powered Inventory Forecasting',
        'Dynamic Pricing Engine',
        'Advanced CRM',
        'Custom Development',
        'Dedicated Account Manager',
      ],
      recommended: false,
    },
  ];

  const features = [
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: 'E-Commerce Platform',
      description: 'Full-featured online store with responsive design, product management, and seamless checkout',
    },
    {
      icon: <Store className="w-12 h-12" />,
      title: 'POS System',
      description: 'Modern cloud-based point of sale for retail stores with offline capability',
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: 'Inventory Management',
      description: 'Real-time stock tracking, automated reordering, and multi-location inventory',
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: 'Payment Integration',
      description: 'Multiple payment gateways: credit cards, e-wallets, QRIS, and bank transfers',
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Marketplace Integration',
      description: 'Sync with Tokopedia, Shopee, Lazada, and other marketplaces automatically',
    },
    {
      icon: <Warehouse className="w-12 h-12" />,
      title: 'Warehouse Management',
      description: 'Optimize warehouse operations with advanced WMS and barcode scanning',
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: 'Analytics & Reports',
      description: 'Comprehensive sales reports, inventory insights, and customer analytics',
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Mobile Commerce',
      description: 'Native mobile apps for customers and mobile POS for staff',
    },
  ];

  return (
    <>
      <PremiumHero
        badge={{
          icon: <Sparkles className="w-5 h-5" />,
          text: 'Retail & E-Commerce'
        }}
        title="Complete Omnichannel"
        titleHighlight="Retail Solution"
        description="Transform your retail business with our integrated e-commerce platform, POS system, and inventory management. Sell online and offline seamlessly. Trusted by 130+ retail businesses with proven 3x sales increase."
        primaryCTA={{
          text: 'Get Started',
          href: `/${locale}/contact`
        }}
        secondaryCTA={{
          text: 'View Demo',
          href: '#packages'
        }}
        locale={locale}
      />

      {/* Features */}
      <PremiumSection variant="white" pattern="dots">
        <SectionHeader
          subtitle="Core Features"
          title="Everything You Need to Sell"
          description="Complete retail management from online store to physical POS."
          centered
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <PremiumCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </PremiumSection>

      {/* Packages */}
      <PremiumSection variant="gray" pattern="grid" id="packages">
        <SectionHeader
          subtitle="Our Packages"
          title="Choose Your Retail Package"
          description="Flexible packages from startups to enterprise retail chains."
          centered
        />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ${
                pkg.recommended
                  ? 'border-[#116366] border-2 shadow-xl scale-105'
                  : 'border-gray-200 border'
              }`}
            >
              {pkg.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#116366] to-[#14b8a6] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    ⭐ Recommended
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  {pkg.subtitle}
                </CardDescription>
                <div className="text-4xl font-bold text-[#116366] mb-2">
                  {pkg.price}
                </div>
                <div className="text-sm text-gray-600">
                  + {pkg.monthly} support
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-[#14b8a6] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/${locale}/contact`}>
                  <Button
                    className={`w-full ${
                      pkg.recommended
                        ? 'bg-[#116366] hover:bg-[#0d4d50] text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </PremiumSection>

      {/* Benefits */}
      <PremiumSection variant="white" pattern="dots">
        <SectionHeader
          subtitle="Key Benefits"
          title="Why Retailers Choose Us"
          description="Proven results that drive sales and improve operations."
          centered
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[
            { title: '3x Sales Growth', description: 'Average sales increase within first year of implementation' },
            { title: 'Omnichannel Ready', description: 'Sell seamlessly across online, offline, and marketplace channels' },
            { title: 'Real-time Inventory', description: 'Never oversell with synchronized inventory across all channels' },
            { title: 'Fast Checkout', description: 'Lightning-fast POS system reduces checkout time by 60%' },
            { title: 'Customer Loyalty', description: 'Build loyalty with integrated rewards and promotion engine' },
            { title: '24/7 Operations', description: 'Cloud-based system accessible anytime, anywhere' },
          ].map((benefit, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
            >
              <CardHeader>
                <CardTitle className="text-lg flex items-start gap-2">
                  <CheckCircle className="w-6 h-6 text-[#14b8a6] flex-shrink-0 mt-1" />
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </PremiumSection>

      {/* CTA */}
      <PremiumSection variant="gradient" pattern="circuit" patternOpacity={0.05}>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Scale Your Retail Business?
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Join 130+ successful retailers who increased their sales by 3x with our omnichannel solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/contact`}>
              <Button
                size="lg"
                className="bg-white text-[#116366] hover:bg-gray-100 font-semibold px-8"
              >
                Get Started
              </Button>
            </Link>
            <Link href={`/${locale}/portfolio`}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8"
              >
                View Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </PremiumSection>
    </>
  );
}
