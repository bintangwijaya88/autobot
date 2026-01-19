import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

/**
 * Generate metadata for service pages
 */
export async function generateServiceMetadata(
  service: string,
  locale: string
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: `services.${service}` });

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autobot.co.id';

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords').split(',').map((k) => k.trim()),
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      images: [
        {
          url: `${baseUrl}/og/${service}-${locale}.jpg`,
          width: 1200,
          height: 630,
          alt: t('meta.title'),
        },
      ],
      locale: locale,
      type: 'website',
      siteName: 'Autobot Wijaya Solution',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/services/${service}`,
      languages: {
        en: `${baseUrl}/en/services/${service}`,
        id: `${baseUrl}/id/services/${service}`,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: t('meta.title'),
      description: t('meta.description'),
    },
  };
}

/**
 * Generate metadata for solution pages
 */
export async function generateSolutionMetadata(
  solution: string,
  locale: string
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: `solutions.${solution}` });

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autobot.co.id';

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords').split(',').map((k) => k.trim()),
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      images: [
        {
          url: `${baseUrl}/og/${solution}-${locale}.jpg`,
          width: 1200,
          height: 630,
          alt: t('meta.title'),
        },
      ],
      locale: locale,
      type: 'website',
      siteName: 'Autobot Wijaya Solution',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/solutions/${solution}`,
      languages: {
        en: `${baseUrl}/en/solutions/${solution}`,
        id: `${baseUrl}/id/solutions/${solution}`,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: t('meta.title'),
      description: t('meta.description'),
    },
  };
}

/**
 * Generate metadata for portfolio page
 */
export async function generatePortfolioMetadata(
  locale: string
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'portfolio' });

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autobot.co.id';

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords').split(',').map((k) => k.trim()),
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      images: [
        {
          url: `${baseUrl}/og/portfolio-${locale}.jpg`,
          width: 1200,
          height: 630,
          alt: t('meta.title'),
        },
      ],
      locale: locale,
      type: 'website',
      siteName: 'Autobot Wijaya Solution',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/portfolio`,
      languages: {
        en: `${baseUrl}/en/portfolio`,
        id: `${baseUrl}/id/portfolio`,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: t('meta.title'),
      description: t('meta.description'),
    },
  };
}

/**
 * Generate metadata for careers page
 */
export async function generateCareerMetadata(
  locale: string
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'careers' });

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autobot.co.id';

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords').split(',').map((k) => k.trim()),
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      images: [
        {
          url: `${baseUrl}/og/careers-${locale}.jpg`,
          width: 1200,
          height: 630,
          alt: t('meta.title'),
        },
      ],
      locale: locale,
      type: 'website',
      siteName: 'Autobot Wijaya Solution',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/careers`,
      languages: {
        en: `${baseUrl}/en/careers`,
        id: `${baseUrl}/id/careers`,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: t('meta.title'),
      description: t('meta.description'),
    },
  };
}

/**
 * Generate metadata for blog page
 */
export async function generateBlogMetadata(
  locale: string
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'blog' });

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autobot.co.id';

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords').split(',').map((k) => k.trim()),
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      images: [
        {
          url: `${baseUrl}/og/blog-${locale}.jpg`,
          width: 1200,
          height: 630,
          alt: t('meta.title'),
        },
      ],
      locale: locale,
      type: 'website',
      siteName: 'Autobot Wijaya Solution',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/resources/blog`,
      languages: {
        en: `${baseUrl}/en/resources/blog`,
        id: `${baseUrl}/id/resources/blog`,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: t('meta.title'),
      description: t('meta.description'),
    },
  };
}

/**
 * Generate metadata for blog post detail page
 */
export async function generateBlogPostMetadata(
  title: string,
  description: string,
  imageUrl: string | undefined,
  locale: string,
  slug: string
): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autobot.co.id';

  return {
    title: `${title} | Autobot Blog`,
    description: description.slice(0, 155),
    openGraph: {
      title: title,
      description: description.slice(0, 155),
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : undefined,
      locale: locale,
      type: 'article',
      siteName: 'Autobot Wijaya Solution',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/resources/blog/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description.slice(0, 155),
    },
  };
}

/**
 * Generate metadata for manpower page
 */
export async function generateManpowerMetadata(
  locale: string
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'manpower' });

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autobot.co.id';

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords').split(',').map((k) => k.trim()),
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      images: [
        {
          url: `${baseUrl}/og/manpower-${locale}.jpg`,
          width: 1200,
          height: 630,
          alt: t('meta.title'),
        },
      ],
      locale: locale,
      type: 'website',
      siteName: 'Autobot Wijaya Solution',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/manpower`,
      languages: {
        en: `${baseUrl}/en/manpower`,
        id: `${baseUrl}/id/manpower`,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: t('meta.title'),
      description: t('meta.description'),
    },
  };
}

/**
 * Generate metadata for partnership page
 */
export async function generatePartnershipMetadata(
  locale: string
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'partnership' });

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autobot.co.id';

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords').split(',').map((k) => k.trim()),
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      images: [
        {
          url: `${baseUrl}/og/partnership-${locale}.jpg`,
          width: 1200,
          height: 630,
          alt: t('meta.title'),
        },
      ],
      locale: locale,
      type: 'website',
      siteName: 'Autobot Wijaya Solution',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/partnership`,
      languages: {
        en: `${baseUrl}/en/partnership`,
        id: `${baseUrl}/id/partnership`,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: t('meta.title'),
      description: t('meta.description'),
    },
  };
}
