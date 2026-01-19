import { generateServiceMetadata } from '@/lib/metadata/generators';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/metadata/schemas';
import { StructuredData } from '@/components/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generateServiceMetadata('webDevelopment', locale);
}

export default async function WebDevelopmentLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autobot.co.id';

  // Service schema for Web Development
  const serviceSchema = generateServiceSchema(
    {
      name: 'Web Development & Custom Web Application',
      type: 'Web Application Development',
      description:
        'Custom web development services including corporate websites, web applications, e-commerce platforms, and progressive web apps (PWA) with modern technologies.',
      price: '20000000',
      rating: 4.9,
      reviewCount: 200,
    },
    locale
  );

  // Breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: `${baseUrl}/${locale}` },
    { name: 'Services', url: `${baseUrl}/${locale}/services` },
    { name: 'Web Development', url: `${baseUrl}/${locale}/services/web-development` },
  ]);

  return (
    <>
      <StructuredData data={[serviceSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
