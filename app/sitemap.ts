import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://autobot.co.id';
  const locales = ['id', 'en', 'ar', 'vi', 'ja', 'fil', 'th'];

  const currentDate = new Date();

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/portfolio',
    '/careers',
    '/products',
    '/partnership',
    '/manpower',
    '/open-source',
  ];

  // Service pages
  const servicePages = [
    '/services',
    '/services/web-development',
    '/services/mobile-app-development',
    '/services/ai-solutions',
    '/services/iot-solutions',
    '/services/cloud-solutions',
    '/services/cybersecurity',
  ];

  // Solution pages
  const solutionPages = [
    '/solutions',
    '/solutions/corporate',
    '/solutions/education',
    '/solutions/healthcare',
    '/solutions/retail',
  ];

  // Resources pages
  const resourcePages = [
    '/resources/blog',
  ];

  // Combine all pages
  const allPages = [
    ...staticPages,
    ...servicePages,
    ...solutionPages,
    ...resourcePages,
  ];

  // Generate sitemap entries for all locales
  const sitemapEntries: MetadataRoute.Sitemap = [];

  allPages.forEach((page) => {
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: currentDate,
        changeFrequency: page === '' || page === '/resources/blog' ? 'daily' : 'weekly',
        priority: page === '' ? 1.0 : page.includes('/services') || page.includes('/solutions') ? 0.8 : 0.6,
        alternates: {
          languages: Object.fromEntries(
            locales.map((loc) => [loc, `${baseUrl}/${loc}${page}`])
          ),
        },
      });
    });
  });

  return sitemapEntries;
}
