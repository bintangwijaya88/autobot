import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/metadata/schemas';
import { StructuredData } from '@/components/StructuredData';
import type { Metadata } from 'next';

const meta: Record<string, { title: string; description: string }> = {
  en: {
    title: 'IT Maintenance & Support Services | Autobot Indonesia',
    description: '24/7 IT maintenance and support services: system monitoring, bug fixes, performance optimization, security patches, and SLA-backed technical support.',
  },
  id: {
    title: 'Layanan Maintenance & Support IT | Autobot Indonesia',
    description: 'Maintenance dan support IT 24/7: monitoring sistem, perbaikan bug, optimasi performa, security patch, dan dukungan teknis bergaransi SLA.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = meta[locale] ?? meta.en;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autobot.co.id';
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: `${baseUrl}/${locale}/services/maintenance-support`,
      languages: { en: `${baseUrl}/en/services/maintenance-support`, id: `${baseUrl}/id/services/maintenance-support` },
    },
    openGraph: { title: m.title, description: m.description, type: 'website' },
  };
}

export default async function MaintenanceSupportLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autobot.co.id';

  const serviceSchema = generateServiceSchema(
    {
      name: 'IT Maintenance & Support',
      type: 'Managed IT Support',
      description: '24/7 IT maintenance and support including system monitoring, bug fixes, performance optimization, security patches, and SLA-backed technical support.',
      price: '5000000',
      rating: 4.9,
      reviewCount: 200,
    },
    locale
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: `${baseUrl}/${locale}` },
    { name: 'Services', url: `${baseUrl}/${locale}/services` },
    { name: 'Maintenance & Support', url: `${baseUrl}/${locale}/services/maintenance-support` },
  ]);

  return (
    <>
      <StructuredData data={[serviceSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
