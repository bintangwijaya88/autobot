import { generateServiceMetadata } from '@/lib/metadata/generators';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/metadata/schemas';
import { StructuredData } from '@/components/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autobot.co.id';

  const title = locale === 'id'
    ? 'Sistem Informasi Rumah Sakit (SIMRS) | Autobot Indonesia'
    : 'Hospital Information System (SIMRS) | Autobot Indonesia';

  const description = locale === 'id'
    ? 'Solusi SIMRS lengkap untuk rumah sakit dan klinik. Manajemen pasien, EMR, integrasi BPJS, farmasi, laboratorium. Dipercaya 50+ rumah sakit.'
    : 'Complete SIMRS solution for hospitals and clinics. Patient management, EMR, BPJS integration, pharmacy, laboratory. Trusted by 50+ hospitals.';

  return {
    title,
    description,
    keywords: locale === 'id'
      ? 'SIMRS Indonesia, Sistem Informasi Rumah Sakit, Healthcare IT, EMR System, Medical Software, BPJS Integration, Hospital Management'
      : 'SIMRS Indonesia, Hospital Information System, Healthcare IT, EMR System, Medical Software, BPJS Integration, Hospital Management',
    openGraph: {
      title,
      description,
      images: [{
        url: `${baseUrl}/og/healthcare-${locale}.jpg`,
        width: 1200,
        height: 630,
        alt: title,
      }],
      locale: locale,
      type: 'website',
      siteName: 'Autobot Wijaya Solution',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/solutions/healthcare`,
      languages: {
        en: `${baseUrl}/en/solutions/healthcare`,
        id: `${baseUrl}/id/solutions/healthcare`,
      }
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function HealthcareLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autobot.co.id';

  const serviceSchema = generateServiceSchema({
    name: 'Hospital Information System (SIMRS)',
    type: 'Healthcare IT Solutions',
    description: 'Complete hospital management system including patient registration, EMR, BPJS integration, pharmacy management, and laboratory systems.',
    price: '75000000',
    rating: 4.9,
    reviewCount: 85,
  }, locale);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: `${baseUrl}/${locale}` },
    { name: 'Solutions', url: `${baseUrl}/${locale}/solutions` },
    { name: 'Healthcare SIMRS', url: `${baseUrl}/${locale}/solutions/healthcare` },
  ]);

  return (
    <>
      <StructuredData data={[serviceSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
