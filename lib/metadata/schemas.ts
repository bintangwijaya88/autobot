/**
 * JSON-LD Schema Generators for SEO
 * Based on Schema.org specifications
 */

interface ServiceSchemaInput {
  name: string;
  type: string;
  description: string;
  price?: string;
  rating?: number;
  reviewCount?: number;
}

/**
 * Generate Service schema for service pages
 */
export function generateServiceSchema(service: ServiceSchemaInput, locale: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autobot.co.id';

  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    provider: {
      '@type': 'Organization',
      name: 'Autobot Wijaya Solution',
      url: baseUrl,
    },
    serviceType: service.type,
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia',
    },
    description: service.description,
  };

  // Add pricing if provided
  if (service.price) {
    schema.offers = {
      '@type': 'Offer',
      priceCurrency: locale === 'id' ? 'IDR' : 'USD',
      price: service.price,
    };
  }

  // Add rating if provided
  if (service.rating && service.reviewCount) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: service.rating.toString(),
      reviewCount: service.reviewCount.toString(),
    };
  }

  return schema;
}

interface JobPostingSchemaInput {
  title: string;
  description: string;
  datePosted: string;
  location: string;
  type: string; // FULL_TIME, PART_TIME, CONTRACT, etc.
  salaryMin?: number;
  salaryMax?: number;
  experience?: string;
  department?: string;
}

/**
 * Generate JobPosting schema for career pages
 */
export function generateJobPostingSchema(job: JobPostingSchemaInput) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autobot.co.id';

  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    datePosted: job.datePosted,
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Autobot Wijaya Solution',
      sameAs: baseUrl,
      logo: `${baseUrl}/logo.png`,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location,
        addressCountry: 'ID',
      },
    },
    employmentType: job.type,
  };

  // Add salary if provided
  if (job.salaryMin && job.salaryMax) {
    schema.baseSalary = {
      '@type': 'MonetaryAmount',
      currency: 'IDR',
      value: {
        '@type': 'QuantitativeValue',
        minValue: job.salaryMin,
        maxValue: job.salaryMax,
        unitText: 'MONTH',
      },
    };
  }

  // Add experience requirements if provided
  if (job.experience) {
    schema.experienceRequirements = job.experience;
  }

  // Add job start date (30 days from posting)
  const validThrough = new Date();
  validThrough.setDate(validThrough.getDate() + 30);
  schema.validThrough = validThrough.toISOString();

  return schema;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Generate BreadcrumbList schema for navigation
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

interface BlogPostingSchemaInput {
  headline: string;
  description: string;
  imageUrl?: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  url: string;
}

/**
 * Generate BlogPosting schema for blog articles
 */
export function generateBlogPostingSchema(blog: BlogPostingSchemaInput) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autobot.co.id';

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.headline,
    description: blog.description,
    image: blog.imageUrl || `${baseUrl}/og-image.jpg`,
    datePublished: blog.datePublished,
    dateModified: blog.dateModified || blog.datePublished,
    author: {
      '@type': 'Organization',
      name: blog.authorName || 'Autobot Wijaya Solution',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Autobot Wijaya Solution',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': blog.url,
    },
  };
}

interface ProductSchemaInput {
  name: string;
  description: string;
  category: string;
  client?: string;
  rating?: number;
  reviewCount?: number;
  imageUrl?: string;
}

/**
 * Generate Product/SoftwareApplication schema for portfolio projects
 */
export function generateProductSchema(project: ProductSchemaInput) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autobot.co.id';

  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.name,
    description: project.description,
    applicationCategory: project.category,
    creator: {
      '@type': 'Organization',
      name: 'Autobot Wijaya Solution',
    },
  };

  // Add image if provided
  if (project.imageUrl) {
    schema.image = project.imageUrl;
  }

  // Add rating if provided
  if (project.rating && project.reviewCount) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: project.rating.toString(),
      reviewCount: project.reviewCount.toString(),
    };
  }

  // Add client mention if provided
  if (project.client) {
    schema.offers = {
      '@type': 'Offer',
      seller: {
        '@type': 'Organization',
        name: project.client,
      },
    };
  }

  return schema;
}

interface FAQSchemaInput {
  question: string;
  answer: string;
}

/**
 * Generate FAQPage schema
 */
export function generateFAQSchema(faqs: FAQSchemaInput[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

interface ReviewSchemaInput {
  itemName: string;
  reviewBody: string;
  ratingValue: number;
  authorName: string;
  datePublished: string;
}

/**
 * Generate Review schema for testimonials
 */
export function generateReviewSchema(review: ReviewSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Organization',
      name: review.itemName || 'Autobot Wijaya Solution',
    },
    reviewBody: review.reviewBody,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.ratingValue,
      bestRating: '5',
    },
    author: {
      '@type': 'Person',
      name: review.authorName,
    },
    datePublished: review.datePublished,
  };
}

/**
 * Generate Organization schema (for company pages)
 */
export function generateOrganizationSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autobot.co.id';

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Autobot Wijaya Solution',
    alternateName: 'Autobot',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description:
      'Leading IT solutions provider in Indonesia specializing in custom software development, ERP systems, AI solutions, and digital transformation.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ID',
      addressLocality: 'Jakarta',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+62-21-xxx-xxxx',
      contactType: 'customer service',
      areaServed: 'ID',
      availableLanguage: ['en', 'id'],
    },
    sameAs: [
      'https://www.linkedin.com/company/autobot-wijaya',
      'https://twitter.com/autobotwijaya',
      'https://www.facebook.com/autobotwijaya',
    ],
  };
}
