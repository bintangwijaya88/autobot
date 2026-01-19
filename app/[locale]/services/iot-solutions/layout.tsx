import { generateServiceMetadata } from '@/lib/metadata/generators';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/metadata/schemas';
import { StructuredData } from '@/components/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generateServiceMetadata('iotSolutions', locale);
}

export default async function IoTSolutionsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autobot.co.id';

  // Service schema for IoT Solutions
  const serviceSchema = generateServiceSchema(
    {
      name: 'IoT Solutions & Smart System Development',
      type: 'Internet of Things Implementation',
      description:
        'End-to-end IoT solutions including smart sensors, real-time monitoring, predictive maintenance, and industrial automation systems.',
      price: '35000000',
      rating: 4.7,
      reviewCount: 85,
    },
    locale
  );

  // Breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: `${baseUrl}/${locale}` },
    { name: 'Services', url: `${baseUrl}/${locale}/services` },
    { name: 'IoT Solutions', url: `${baseUrl}/${locale}/services/iot-solutions` },
  ]);

  return (
    <>
      <StructuredData data={[serviceSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
