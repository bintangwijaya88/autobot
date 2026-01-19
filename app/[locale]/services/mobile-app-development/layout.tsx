import { generateServiceMetadata } from '@/lib/metadata/generators';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/metadata/schemas';
import { StructuredData } from '@/components/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generateServiceMetadata('mobileAppDevelopment', locale);
}

export default async function MobileAppDevelopmentLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autobot.co.id';

  // Service schema for Mobile App Development
  const serviceSchema = generateServiceSchema(
    {
      name: 'Mobile App Development Services',
      type: 'iOS & Android App Development',
      description:
        'Native and cross-platform mobile app development for iOS and Android. React Native, Flutter, and native development with seamless UX and performance.',
      price: '30000000',
      rating: 4.9,
      reviewCount: 150,
    },
    locale
  );

  // Breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: `${baseUrl}/${locale}` },
    { name: 'Services', url: `${baseUrl}/${locale}/services` },
    { name: 'Mobile App Development', url: `${baseUrl}/${locale}/services/mobile-app-development` },
  ]);

  return (
    <>
      <StructuredData data={[serviceSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
