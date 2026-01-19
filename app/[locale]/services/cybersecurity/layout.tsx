import { generateServiceMetadata } from '@/lib/metadata/generators';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/metadata/schemas';
import { StructuredData } from '@/components/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generateServiceMetadata('cybersecurity', locale);
}

export default async function CybersecurityLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autobot.co.id';

  // Service schema for Cybersecurity
  const serviceSchema = generateServiceSchema(
    {
      name: 'Cybersecurity & Information Security Services',
      type: 'Security Assessment & Implementation',
      description:
        'Comprehensive cybersecurity services including penetration testing, security audits, threat monitoring, and security implementation for enterprises.',
      price: '50000000',
      rating: 4.9,
      reviewCount: 95,
    },
    locale
  );

  // Breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: `${baseUrl}/${locale}` },
    { name: 'Services', url: `${baseUrl}/${locale}/services` },
    { name: 'Cybersecurity', url: `${baseUrl}/${locale}/services/cybersecurity` },
  ]);

  return (
    <>
      <StructuredData data={[serviceSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
