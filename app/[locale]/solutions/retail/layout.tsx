import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/metadata/schemas';
import { StructuredData } from '@/components/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autobot.co.id';

  const title = locale === 'id'
    ? 'E-Commerce, POS & Sistem Inventory | Autobot Indonesia'
    : 'E-Commerce, POS & Inventory System | Autobot Indonesia';

  const description = locale === 'id'
    ? 'Solusi lengkap untuk retail dan e-commerce: POS System, E-Commerce Platform (WooCommerce/Magento), Inventory Management, Omnichannel. Tingkatkan penjualan 3x lipat.'
    : 'Complete retail and e-commerce solutions: POS System, E-Commerce Platform (WooCommerce/Magento), Inventory Management, Omnichannel. Increase sales by 3x.';

  return {
    title,
    description,
    keywords: locale === 'id'
      ? 'E-Commerce Indonesia, POS System, Sistem Kasir, Inventory Management, Omnichannel Retail, WooCommerce, Magento'
      : 'E-Commerce Indonesia, POS System, Point of Sale, Inventory Management, Omnichannel Retail, WooCommerce, Magento',
    openGraph: {
      title,
      description,
      images: [{
        url: `${baseUrl}/og/retail-${locale}.jpg`,
        width: 1200,
        height: 630,
        alt: title,
      }],
      locale: locale,
      type: 'website',
      siteName: 'Autobot Wijaya Solution',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/solutions/retail`,
      languages: {
        en: `${baseUrl}/en/solutions/retail`,
        id: `${baseUrl}/id/solutions/retail`,
      }
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function RetailLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autobot.co.id';

  const serviceSchema = generateServiceSchema({
    name: 'Retail & E-Commerce Solutions',
    type: 'Complete Retail Management System',
    description: 'Integrated retail solutions including e-commerce platforms, POS systems, inventory management, and omnichannel capabilities for modern businesses.',
    price: '25000000',
    rating: 4.8,
    reviewCount: 130,
  }, locale);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: `${baseUrl}/${locale}` },
    { name: 'Solutions', url: `${baseUrl}/${locale}/solutions` },
    { name: 'Retail & E-Commerce', url: `${baseUrl}/${locale}/solutions/retail` },
  ]);

  return (
    <>
      <StructuredData data={[serviceSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
