import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/metadata/schemas';
import { StructuredData } from '@/components/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autobot.co.id';

  const title = locale === 'id'
    ? 'Sistem Informasi Sekolah (SIS) & LMS | Autobot Indonesia'
    : 'School Information System (SIS) & LMS | Autobot Indonesia';

  const description = locale === 'id'
    ? 'Solusi lengkap untuk sekolah dan universitas: SIS, LMS (Moodle), Sistem Pembayaran, Library Management. Dari SD hingga Perguruan Tinggi.'
    : 'Complete solution for schools and universities: SIS, LMS (Moodle), Payment System, Library Management. From elementary to higher education.';

  return {
    title,
    description,
    keywords: locale === 'id'
      ? 'Sistem Informasi Sekolah, SIS Indonesia, LMS Moodle, School Management System, Education Software, Library Management'
      : 'School Information System, SIS Indonesia, LMS Moodle, School Management System, Education Software, Library Management',
    openGraph: {
      title,
      description,
      images: [{
        url: `${baseUrl}/og/education-${locale}.jpg`,
        width: 1200,
        height: 630,
        alt: title,
      }],
      locale: locale,
      type: 'website',
      siteName: 'Autobot Wijaya Solution',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/solutions/education`,
      languages: {
        en: `${baseUrl}/en/solutions/education`,
        id: `${baseUrl}/id/solutions/education`,
      }
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function EducationLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autobot.co.id';

  const serviceSchema = generateServiceSchema({
    name: 'School Information System & LMS',
    type: 'Education Technology Solutions',
    description: 'Complete education management system including SIS, LMS (Moodle), payment system, library management, and parent portal for schools and universities.',
    price: '20000000',
    rating: 4.9,
    reviewCount: 95,
  }, locale);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: `${baseUrl}/${locale}` },
    { name: 'Solutions', url: `${baseUrl}/${locale}/solutions` },
    { name: 'Education Setup', url: `${baseUrl}/${locale}/solutions/education` },
  ]);

  return (
    <>
      <StructuredData data={[serviceSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
