import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/sections/Container';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BackgroundPattern } from '@/components/ui/background-pattern';
import Link from 'next/link';
import { Package, CheckCircle, ArrowRight, Star, Users, Zap, Shield } from 'lucide-react';
import { notFound } from 'next/navigation';

// Product data
const productsData: Record<
  string,
  {
    name: string;
    tagline: string;
    description: string;
    category: string;
    features: string[];
    benefits: Array<{ icon: React.ReactNode; title: string; description: string }>;
    pricing: Array<{ name: string; price: string; features: string[]; recommended?: boolean }>;
  }
> = {
  mediwish: {
    name: 'MediWish',
    tagline: 'Sistem Informasi Rumah Sakit Terpadu',
    description:
      'Solusi SIMRS komprehensif untuk manajemen rumah sakit modern. Dari pendaftaran pasien hingga billing, semua terintegrasi dalam satu platform.',
    category: 'Healthcare',
    features: [
      'Registrasi & Rekam Medis Elektronik',
      'Manajemen Rawat Jalan & Rawat Inap',
      'Farmasi & Inventory Obat',
      'Laboratorium & Radiologi',
      'Billing & Kasir Terintegrasi',
      'Antrian Digital',
      'Integrasi BPJS',
      'Mobile App untuk Pasien',
    ],
    benefits: [
      {
        icon: <Zap className="w-8 h-8 text-white" />,
        title: 'Efisiensi Operasional',
        description: 'Otomasi proses untuk menghemat waktu dan mengurangi kesalahan manual.',
      },
      {
        icon: <Users className="w-8 h-8 text-white" />,
        title: 'Pengalaman Pasien Lebih Baik',
        description: 'Antrian digital dan rekam medis yang mudah diakses meningkatkan kepuasan pasien.',
      },
      {
        icon: <Shield className="w-8 h-8 text-white" />,
        title: 'Keamanan Data Terjamin',
        description: 'Enkripsi data dan backup otomatis untuk melindungi informasi sensitif.',
      },
    ],
    pricing: [
      {
        name: 'Basic',
        price: 'Rp 15.000.000',
        features: ['Up to 50 beds', 'Basic modules', 'Email support', '1 year updates'],
      },
      {
        name: 'Professional',
        price: 'Rp 35.000.000',
        features: [
          'Up to 200 beds',
          'All modules included',
          'Priority support',
          '2 years updates',
          'Mobile app',
          'BPJS integration',
        ],
        recommended: true,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        features: [
          'Unlimited beds',
          'Custom modules',
          '24/7 support',
          'Lifetime updates',
          'Custom integrations',
          'Dedicated server',
        ],
      },
    ],
  },
  wabotiq: {
    name: 'WabotIQ',
    tagline: 'WhatsApp Bot Cerdas Berbasis AI',
    description:
      'Otomasi customer service dan marketing di WhatsApp dengan AI. Tingkatkan engagement dan konversi dengan chatbot pintar.',
    category: 'Communication',
    features: [
      'AI-powered Chatbot',
      'Auto Reply 24/7',
      'Broadcast & Campaign',
      'Customer Segmentation',
      'Analytics & Reports',
      'Multi-agent Support',
      'Integration WhatsApp Business API',
      'Custom Flows & Templates',
    ],
    benefits: [
      {
        icon: <Zap className="w-8 h-8 text-white" />,
        title: 'Respon Instan',
        description: 'Bot menjawab pertanyaan customer 24/7 tanpa delay.',
      },
      {
        icon: <Users className="w-8 h-8 text-white" />,
        title: 'Skalabilitas Tinggi',
        description: 'Handle ribuan chat sekaligus tanpa tambah SDM.',
      },
      {
        icon: <Shield className="w-8 h-8 text-white" />,
        title: 'Data Customer Terorganisir',
        description: 'Semua chat dan data customer tersimpan rapi untuk follow-up.',
      },
    ],
    pricing: [
      {
        name: 'Basic',
        price: 'Rp 2.500.000',
        features: ['1 WhatsApp number', '1000 chats/month', 'Basic AI', 'Email support'],
      },
      {
        name: 'Pro',
        price: 'Rp 7.500.000',
        features: [
          '3 WhatsApp numbers',
          '10000 chats/month',
          'Advanced AI',
          'Broadcast features',
          'Priority support',
          'Custom flows',
        ],
        recommended: true,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        features: ['Unlimited numbers', 'Unlimited chats', 'Custom AI training', 'API access', 'Dedicated support'],
      },
    ],
  },
  'delivery-app': {
    name: 'AntarPro',
    tagline: 'Platform SaaS Monitoring Pengiriman & Kurir B2B',
    description:
      'Platform SaaS untuk monitoring dan manajemen pengiriman yang dirancang khusus untuk bisnis B2B. BUKAN jasa pengiriman - kami adalah penyedia platform teknologi untuk monitoring kurir internal perusahaan dengan GPS tracking real-time.',
    category: 'Logistics',
    features: [
      'GPS Tracking Real-Time (Update setiap 30 detik)',
      'QR Code Verification untuk Pickup & Delivery',
      'Manajemen Kurir & Absensi GPS',
      'Dashboard Real-Time & Analytics',
      'Multi-Outlet Support',
      'Push Notifications (Firebase FCM)',
      'Mobile App untuk Kurir (Android & iOS)',
      'API Integration & Webhook Support',
    ],
    benefits: [
      {
        icon: <Zap className="w-8 h-8 text-white" />,
        title: 'Monitoring Real-Time',
        description: 'Tracking GPS setiap 30 detik dengan battery-efficient technology untuk visibilitas penuh armada kurir.',
      },
      {
        icon: <Users className="w-8 h-8 text-white" />,
        title: 'Multi-Tenant & Skalabel',
        description: 'Platform SaaS dengan sistem multi-tenant untuk berbagai perusahaan dari berbagai industri.',
      },
      {
        icon: <Shield className="w-8 h-8 text-white" />,
        title: 'Keamanan & Verifikasi Ganda',
        description: 'QR Code verification, digital signature, dan photo proof untuk keamanan maksimal delivery.',
      },
    ],
    pricing: [
      {
        name: 'Free Plan',
        price: 'Gratis Selamanya',
        features: ['1 Outlet', '1 Kurir Aktif', '100 Pengiriman/bulan', '500 MB Storage', 'GPS Tracking Basic'],
      },
      {
        name: 'Starter',
        price: 'Rp 299.000/bulan',
        features: [
          '3 Outlet',
          '5 Kurir Aktif',
          '1,000 Pengiriman/bulan',
          '5 GB Storage',
          'WhatsApp Integration',
          'Priority Support',
        ],
        recommended: true,
      },
      {
        name: 'Professional',
        price: 'Rp 799.000/bulan',
        features: [
          '10 Outlet',
          '20 Kurir Aktif',
          '10,000 Pengiriman/bulan',
          '50 GB Storage',
          'API Access',
          'Advanced Analytics',
        ],
      },
      {
        name: 'Enterprise',
        price: 'Custom Pricing',
        features: [
          'Unlimited Outlet & Kurir',
          'Unlimited Pengiriman',
          '500 GB+ Storage',
          'White-label Solution',
          'Dedicated Support & SLA',
          'On-premise Deployment',
        ],
      },
    ],
  },
};

// Generate static params for all products
export function generateStaticParams() {
  return Object.keys(productsData).map((slug) => ({
    slug,
  }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = productsData[params.slug];

  if (!product) {
    notFound();
  }

  return (
    <>
      <Hero
        subtitle={product.category}
        title={product.name}
        description={product.description}
        primaryCTA={{ text: 'Mulai Sekarang', href: '/contact' }}
        secondaryCTA={{ text: 'Lihat Demo', href: '#demo' }}
        image={
          <div className="relative">
            <div className="bg-gradient-to-br from-[#116366] to-[#14b8a6] rounded-2xl p-10 shadow-2xl">
              <div className="w-32 h-32 mx-auto rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                <Package className="w-20 h-20 text-white" />
              </div>
              <div className="grid grid-cols-3 gap-3">
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

      {/* Features */}
      <Section className="relative bg-white overflow-hidden">
        <Container className="relative z-10">
          <SectionHeader
            subtitle="Fitur Unggulan"
            title={`Apa yang Membuat ${product.name} Istimewa`}
            description="Fitur-fitur lengkap yang dirancang untuk memenuhi kebutuhan bisnis Anda."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.features.map((feature, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section className="relative bg-gray-50 overflow-hidden">
        <BackgroundPattern variant="dots" opacity={0.04} />
        <Container className="relative z-10">
          <SectionHeader subtitle="Manfaat" title="Keuntungan untuk Bisnis Anda" centered />

          <div className="grid md:grid-cols-3 gap-8">
            {product.benefits.map((benefit, index) => (
              <Card key={index} className="text-center border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-[#116366] to-[#14b8a6] flex items-center justify-center mb-6 shadow-xl">
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

      {/* Pricing */}
      <Section className="relative bg-white overflow-hidden">
        <Container className="relative z-10">
          <SectionHeader subtitle="Harga" title="Pilih Paket yang Sesuai" centered />

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {product.pricing.map((plan, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                  plan.recommended ? 'border-2 border-[#116366] shadow-2xl scale-105' : 'border border-gray-200'
                }`}
              >
                <div className="h-3 bg-gradient-to-r from-[#116366] to-[#14b8a6]"></div>
                {plan.recommended && (
                  <div className="absolute -top-0 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-[#116366] to-[#14b8a6] text-white px-6 py-2 rounded-b-xl text-sm font-bold shadow-lg">
                      Rekomendasi
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-3xl mb-6">{plan.name}</CardTitle>
                  <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-[#116366] to-[#14b8a6] bg-clip-text text-transparent">
                    {plan.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#14b8a6] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button
                      className={`w-full ${
                        plan.recommended
                          ? 'bg-gradient-to-r from-[#116366] to-[#14b8a6] hover:opacity-90 text-white shadow-xl'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                      }`}
                    >
                      Pilih Paket Ini
                    </Button>
                  </Link>
                </CardContent>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">Siap Mulai dengan {product.name}?</h2>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Konsultasi gratis dengan tim kami untuk mendapatkan solusi terbaik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-[#116366] hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Hubungi Sales
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm"
                >
                  Lihat Produk Lain
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
