import { generateServiceMetadata } from '@/lib/metadata/generators';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/metadata/schemas';
import { StructuredData } from '@/components/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generateServiceMetadata('cloudSolutions', locale);
}

export default async function CloudSolutionsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autobot.co.id';

  // Service schema for Cloud Solutions
  const serviceSchema = generateServiceSchema(
    {
      name: 'Cloud Solutions & Infrastructure Services',
      type: 'Cloud Migration & Management',
      description:
        'Comprehensive cloud services including AWS, Google Cloud, and Azure. Cloud migration, infrastructure setup, DevOps, and managed cloud services.',
      price: '45000000',
      rating: 4.8,
      reviewCount: 110,
    },
    locale
  );

  // Breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: `${baseUrl}/${locale}` },
    { name: 'Services', url: `${baseUrl}/${locale}/services` },
    { name: 'Cloud Solutions', url: `${baseUrl}/${locale}/services/cloud-solutions` },
  ]);

  return (
    <>
      <StructuredData data={[serviceSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
