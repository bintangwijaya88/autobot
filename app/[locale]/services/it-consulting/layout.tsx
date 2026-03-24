import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/metadata/schemas';
import { StructuredData } from '@/components/StructuredData';
import type { Metadata } from 'next';

const meta: Record<string, { title: string; description: string }> = {
  en: {
    title: 'IT Consulting Services - Digital Transformation & Strategy | Autobot',
    description: 'Expert IT consulting services: digital transformation strategy, IT audit, technology roadmap, and business process optimization for Indonesian enterprises.',
  },
  id: {
    title: 'Konsultasi IT - Strategi Transformasi Digital | Autobot Indonesia',
    description: 'Layanan konsultasi IT profesional: strategi transformasi digital, audit IT, roadmap teknologi, dan optimasi proses bisnis untuk perusahaan Indonesia.',
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
      canonical: `${baseUrl}/${locale}/services/it-consulting`,
      languages: { en: `${baseUrl}/en/services/it-consulting`, id: `${baseUrl}/id/services/it-consulting` },
    },
    openGraph: { title: m.title, description: m.description, type: 'website' },
  };
}

export default async function ITConsultingLayout({
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
      name: 'IT Consulting & Digital Transformation',
      type: 'IT Consulting',
      description: 'Expert IT consulting services including digital transformation strategy, IT audit, technology roadmap, and business process optimization.',
      price: '15000000',
      rating: 4.9,
      reviewCount: 85,
    },
    locale
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: `${baseUrl}/${locale}` },
    { name: 'Services', url: `${baseUrl}/${locale}/services` },
    { name: 'IT Consulting', url: `${baseUrl}/${locale}/services/it-consulting` },
  ]);

  return (
    <>
      <StructuredData data={[serviceSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
