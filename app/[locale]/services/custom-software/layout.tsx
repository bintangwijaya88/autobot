import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/metadata/schemas';
import { StructuredData } from '@/components/StructuredData';
import type { Metadata } from 'next';

const meta: Record<string, { title: string; description: string }> = {
  en: {
    title: 'Custom Software Development Services | Autobot Indonesia',
    description: 'Bespoke software development tailored to your business needs. ERP, CRM, internal tools, API integrations, and enterprise applications built from scratch.',
  },
  id: {
    title: 'Pengembangan Software Custom | Autobot Indonesia',
    description: 'Pengembangan perangkat lunak sesuai kebutuhan bisnis Anda. ERP, CRM, tools internal, integrasi API, dan aplikasi enterprise dari nol.',
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
      canonical: `${baseUrl}/${locale}/services/custom-software`,
      languages: { en: `${baseUrl}/en/services/custom-software`, id: `${baseUrl}/id/services/custom-software` },
    },
    openGraph: { title: m.title, description: m.description, type: 'website' },
  };
}

export default async function CustomSoftwareLayout({
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
      name: 'Custom Software Development',
      type: 'Bespoke Software Engineering',
      description: 'Tailored software solutions including ERP, CRM, internal tools, and enterprise applications built specifically for your business requirements.',
      price: '30000000',
      rating: 4.9,
      reviewCount: 140,
    },
    locale
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: `${baseUrl}/${locale}` },
    { name: 'Services', url: `${baseUrl}/${locale}/services` },
    { name: 'Custom Software', url: `${baseUrl}/${locale}/services/custom-software` },
  ]);

  return (
    <>
      <StructuredData data={[serviceSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
