import { generateServiceMetadata } from '@/lib/metadata/generators';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/metadata/schemas';
import { StructuredData } from '@/components/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generateServiceMetadata('aiSolutions', locale);
}

export default async function AISolutionsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autobot.co.id';

  // Service schema for AI Solutions
  const serviceSchema = generateServiceSchema(
    {
      name: 'AI & Machine Learning Solutions',
      type: 'Artificial Intelligence Development',
      description:
        'Custom AI & ML solutions including LLM development, chatbots, computer vision, and predictive analytics. Proven to increase efficiency by 95% and deliver 3.5x ROI in 12 months.',
      price: '25000000',
      rating: 4.8,
      reviewCount: 120,
    },
    locale
  );

  // Breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: `${baseUrl}/${locale}` },
    { name: 'Services', url: `${baseUrl}/${locale}/services` },
    { name: 'AI Solutions', url: `${baseUrl}/${locale}/services/ai-solutions` },
  ]);

  return (
    <>
      <StructuredData data={[serviceSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
