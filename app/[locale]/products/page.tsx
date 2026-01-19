import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/sections/Container';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BackgroundPattern } from '@/components/ui/background-pattern';
import Link from 'next/link';
import { Package, ArrowRight, Sparkles } from 'lucide-react';

export default function ProductsPage() {
  const products = [
    {
      name: 'MediWish',
      slug: 'mediwish',
      category: 'Healthcare',
      description: 'Sistem informasi rumah sakit yang komprehensif untuk manajemen pasien dan layanan medis.',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      name: 'Deliveroto',
      slug: 'deliveroto',
      category: 'Logistics',
      description: 'Platform manajemen pengiriman dan tracking untuk bisnis logistik dan kurir.',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      name: 'WabotIQ',
      slug: 'wabotiq',
      category: 'Communication',
      description: 'WhatsApp bot cerdas berbasis AI untuk otomasi customer service dan marketing.',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      name: 'SuratSehat',
      slug: 'suratsehat',
      category: 'Healthcare',
      description: 'Sistem pengelolaan surat keterangan sehat digital untuk klinik dan rumah sakit.',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      name: 'Bintanx Edu',
      slug: 'bintanx-edu',
      category: 'Education',
      description: 'Platform pembelajaran online dengan fitur kelas virtual dan manajemen siswa.',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      name: 'Ryugate Sistem',
      slug: 'ryugate-sistem',
      category: 'Security',
      description: 'Sistem keamanan dan access control untuk gedung dan area terbatas.',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      name: 'MatchFinance',
      slug: 'matchfinance',
      category: 'Finance',
      description: 'Platform peer-to-peer lending dan matchmaking finansial untuk UMKM.',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      name: 'Warehouse Pro',
      slug: 'warehouse-pro',
      category: 'Logistics',
      description: 'Sistem manajemen gudang dengan tracking inventory real-time dan barcode.',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      name: 'Koperasi Pro',
      slug: 'koperasi-pro',
      category: 'Finance',
      description: 'Software manajemen koperasi lengkap dengan simpan pinjam dan pembukuan.',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      name: 'AeteraChat',
      slug: 'aeterachat',
      category: 'Communication',
      description: 'Platform live chat dan customer support dengan AI assistant terintegrasi.',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      name: 'AmanahTrip',
      slug: 'amanahtrip',
      category: 'Travel',
      description: 'Sistem manajemen travel umroh dan haji dengan booking dan CRM.',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      name: 'Letter Pro',
      slug: 'letter-pro',
      category: 'Office',
      description: 'Sistem pengelolaan surat menyurat dan arsip digital untuk perkantoran.',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      name: 'SimRS X1',
      slug: 'simrs-x1',
      category: 'Healthcare',
      description: 'Sistem Informasi Manajemen Rumah Sakit generasi terbaru dengan fitur canggih.',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      name: 'Tenangin',
      slug: 'tenangin',
      category: 'Healthcare',
      description: 'Aplikasi kesehatan mental dan konseling online dengan psikolog profesional.',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      name: 'ShipTracker',
      slug: 'shiptracker',
      category: 'Logistics',
      description: 'Sistem pelacakan pengiriman real-time untuk logistik dan ekspedisi.',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      name: 'PanganCap',
      slug: 'pangancap',
      category: 'Food & Beverage',
      description: 'Platform supply chain management untuk industri pangan dan F&B.',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      name: 'OCRFile',
      slug: 'ocrfile',
      category: 'Office',
      description: 'Sistem OCR dan digitalisasi dokumen dengan AI untuk pengarsipan otomatis.',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
    {
      name: 'GPS Tracker X1',
      slug: 'gps-tracker-x1',
      category: 'Logistics',
      description: 'Solusi tracking GPS real-time untuk armada kendaraan dan aset bergerak.',
      gradient: 'from-[#116366] to-[#14b8a6]',
    },
  ];

  const categories = [
    'All',
    'Healthcare',
    'Logistics',
    'Finance',
    'Communication',
    'Education',
    'Office',
    'Travel',
    'Food & Beverage',
    'Security',
  ];

  return (
    <>
      <Hero
        subtitle="Our Products"
        title="Solusi Software Siap Pakai untuk Berbagai Industri"
        description="Jelajahi portfolio produk software kami yang telah terbukti membantu ratusan bisnis di Indonesia. Dari healthcare hingga logistics, kami punya solusinya."
        primaryCTA={{ text: 'Lihat Semua Produk', href: '#products' }}
        secondaryCTA={{ text: 'Konsultasi Gratis', href: '/contact' }}
        image={
          <div className="relative">
            <div className="bg-gradient-to-br from-[#116366] to-[#14b8a6] rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center">
                    <Package className="w-10 h-10 text-white mb-2" />
                    <div className="h-2 bg-white/40 rounded w-16 mb-1"></div>
                    <div className="h-1.5 bg-white/30 rounded w-12"></div>
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
            {[
              { number: '18+', label: 'Produk Siap Pakai' },
              { number: '500+', label: 'Klien Aktif' },
              { number: '10+', label: 'Industri Dilayani' },
              { number: '99%', label: 'Kepuasan Klien' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#116366] to-[#14b8a6] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Category Filter */}
      <Section id="products" className="relative bg-gray-50 overflow-hidden">
        <BackgroundPattern variant="dots" opacity={0.04} />
        <Container className="relative z-10">
          <SectionHeader
            subtitle="Katalog Produk"
            title="Pilih Solusi yang Sesuai dengan Kebutuhan Anda"
            description="Filter berdasarkan kategori industri untuk menemukan produk yang tepat."
            centered
          />

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                className={
                  category === 'All'
                    ? 'bg-[#116366] hover:bg-[#0d4d50]'
                    : 'border-[#116366] text-[#116366] hover:bg-[#116366] hover:text-white'
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="group border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className={`h-3 bg-gradient-to-r ${product.gradient}`}></div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                    >
                      <Package className="w-8 h-8 text-white" />
                    </div>
                    <div className="px-3 py-1.5 bg-gray-100 rounded-full">
                      <span className="text-sm font-medium text-gray-700">{product.category}</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-[#116366] transition-colors mb-2">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <Link href={`/products/${product.slug}`}>
                    <Button
                      className={`w-full bg-gradient-to-r ${product.gradient} hover:opacity-90 text-white shadow-lg`}
                    >
                      Lihat Detail
                      <ArrowRight className="w-4 h-4 ml-2" />
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
            <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Sparkles className="w-14 h-14 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Tidak Menemukan Produk yang Sesuai?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Kami juga menyediakan custom development untuk kebutuhan spesifik bisnis Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-[#116366] hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Konsultasi Gratis
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm"
                >
                  Lihat Custom Development
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
