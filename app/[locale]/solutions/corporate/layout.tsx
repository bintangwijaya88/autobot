import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/metadata/schemas';
import { StructuredData } from '@/components/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autobot.co.id';

  const title = locale === 'id'
    ? 'Solusi IT Korporat Lengkap - Email, ERP, BI Dashboard | Autobot'
    : 'Complete Corporate IT Solution - Email, ERP, BI Dashboard | Autobot';

  const description = locale === 'id'
    ? 'Paket lengkap infrastruktur IT korporat: Email Zimbra, ERP (ERPNext/Odoo), Manajemen Dokumen, Business Intelligence. Solusi open-source tanpa vendor lock-in.'
    : 'Complete corporate IT infrastructure: Email Zimbra, ERP (ERPNext/Odoo), Document Management, Business Intelligence. Open-source solutions with no vendor lock-in.';

  return {
    title,
    description,
    keywords: locale === 'id'
      ? 'Solusi IT Korporat, Email Zimbra Indonesia, ERP System, Odoo Indonesia, ERPNext, Business Intelligence, Document Management, Setup Kantor'
      : 'Corporate IT Solutions, Email Zimbra Indonesia, ERP System, Odoo Indonesia, ERPNext, Business Intelligence, Document Management, Office Setup',
    openGraph: {
      title,
      description,
      images: [{
        url: `${baseUrl}/og/corporate-${locale}.jpg`,
        width: 1200,
        height: 630,
        alt: title,
      }],
      locale: locale,
      type: 'website',
      siteName: 'Autobot Wijaya Solution',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/solutions/corporate`,
      languages: {
        en: `${baseUrl}/en/solutions/corporate`,
        id: `${baseUrl}/id/solutions/corporate`,
      }
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function CorporateLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autobot.co.id';

  const serviceSchema = generateServiceSchema({
    name: 'Corporate IT Infrastructure Setup',
    type: 'Complete Business Solutions',
    description: 'All-in-one corporate IT setup including Email Zimbra, ERP systems, Document Management, Business Intelligence, and more. Open-source based solutions.',
    price: '15000000',
    rating: 4.8,
    reviewCount: 140,
  }, locale);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: `${baseUrl}/${locale}` },
    { name: 'Solutions', url: `${baseUrl}/${locale}/solutions` },
    { name: 'Corporate Setup', url: `${baseUrl}/${locale}/solutions/corporate` },
  ]);

  return (
    <>
      <StructuredData data={[serviceSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
