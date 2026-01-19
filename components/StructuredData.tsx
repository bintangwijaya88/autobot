'use client';
import Script from 'next/script';

interface StructuredDataProps {
  data: object | object[];
}

/**
 * StructuredData component for adding JSON-LD schemas to pages
 * Accepts either a single schema or an array of schemas
 */
export function StructuredData({ data }: StructuredDataProps) {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={index}
          id={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          strategy="afterInteractive"
        />
      ))}
    </>
  );
}

/**
 * Global StructuredData component for the site
 * This contains the base Organization, Website, LocalBusiness, and Service schemas
 * Use this in the root layout
 */
export default function GlobalStructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Autobot Wijaya Solution',
    alternateName: 'Autobot',
    url: 'https://autobot.co.id',
    logo: 'https://autobot.co.id/logo.png',
    description:
      'Leading IT solutions provider in Indonesia specializing in custom software development, AI/ML solutions, IoT implementation, cloud services, and cybersecurity.',
    email: 'info@autobot.co.id',
    telephone: '+62-21-XXXXXXX',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ID',
      addressLocality: 'Jakarta',
      addressRegion: 'DKI Jakarta',
    },
    sameAs: [
      'https://www.facebook.com/autobotwijaya',
      'https://www.linkedin.com/company/autobot-wijaya-solution',
      'https://twitter.com/autobotwijaya',
      'https://www.instagram.com/autobotwijaya',
      'https://github.com/autobotwijaya',
    ],
    founder: {
      '@type': 'Person',
      name: 'Autobot Founder',
    },
    foundingDate: '2020',
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'ID',
        addressLocality: 'Jakarta',
      },
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '50-100',
    },
    slogan: 'Digital Transformation Partner',
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia',
    },
    knowsAbout: [
      'Software Development',
      'Artificial Intelligence',
      'Machine Learning',
      'Internet of Things',
      'Cloud Computing',
      'Cybersecurity',
      'Mobile App Development',
      'Web Development',
      'ERP Systems',
      'Hospital Information Systems',
    ],
    memberOf: {
      '@type': 'Organization',
      name: 'Indonesian IT Industry Association',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Autobot Wijaya Solution',
    url: 'https://autobot.co.id',
    description:
      'Leading IT solutions provider in Indonesia. Custom software development, AI/ML solutions, IoT implementation, cloud services, and more.',
    publisher: {
      '@type': 'Organization',
      name: 'Autobot Wijaya Solution',
      logo: {
        '@type': 'ImageObject',
        url: 'https://autobot.co.id/logo.png',
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://autobot.co.id/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: ['id', 'en', 'ar', 'vi', 'ja', 'fil', 'th'],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://autobot.co.id/#localbusiness',
    name: 'Autobot Wijaya Solution',
    image: 'https://autobot.co.id/logo.png',
    url: 'https://autobot.co.id',
    telephone: '+62-21-XXXXXXX',
    email: 'info@autobot.co.id',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Street Address',
      addressLocality: 'Jakarta',
      addressRegion: 'DKI Jakarta',
      postalCode: 'XXXXX',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-6.200000',
      longitude: '106.816666',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '120',
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'IT Solutions & Software Development',
    provider: {
      '@type': 'Organization',
      name: 'Autobot Wijaya Solution',
      url: 'https://autobot.co.id',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'IT Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Web Development',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Custom Web Application Development',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Mobile App Development',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'iOS & Android App Development',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'AI & ML Solutions',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Artificial Intelligence & Machine Learning Implementation',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'IoT Solutions',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Internet of Things Implementation',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Cloud Solutions',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Cloud Migration & Infrastructure',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Cybersecurity',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Security Assessment & Implementation',
              },
            },
          ],
        },
      ],
    },
  };

  return (
    <>
      {/* Organization Schema */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
        strategy="afterInteractive"
      />

      {/* Website Schema */}
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
        strategy="afterInteractive"
      />

      {/* Local Business Schema */}
      <Script
        id="localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
        strategy="afterInteractive"
      />

      {/* Service Schema */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
        strategy="afterInteractive"
      />
    </>
  );
}
