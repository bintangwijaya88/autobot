export default defineEventHandler((event) => {
  const baseUrl = 'https://autobot.co.id'
  const now = new Date().toISOString().split('T')[0]

  const staticPages = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/platforms', priority: '0.95', changefreq: 'weekly' },
    { loc: '/solutions', priority: '0.85', changefreq: 'monthly' },
    { loc: '/technology', priority: '0.8', changefreq: 'monthly' },
    { loc: '/company', priority: '0.8', changefreq: 'monthly' },
    { loc: '/blog', priority: '0.75', changefreq: 'weekly' },

    { loc: '/products', priority: '0.9', changefreq: 'weekly' },
    { loc: '/features', priority: '0.8', changefreq: 'monthly' },
    { loc: '/services', priority: '0.8', changefreq: 'monthly' },
    { loc: '/partners', priority: '0.7', changefreq: 'monthly' },
    { loc: '/resources', priority: '0.6', changefreq: 'weekly' },
    { loc: '/contact', priority: '0.7', changefreq: 'monthly' },
    { loc: '/pricing', priority: '0.9', changefreq: 'monthly' },
    { loc: '/order', priority: '0.8', changefreq: 'monthly' },
    { loc: '/privacy-policy', priority: '0.4', changefreq: 'yearly' },
    { loc: '/terms-of-service', priority: '0.4', changefreq: 'yearly' },
    { loc: '/refund-policy', priority: '0.4', changefreq: 'yearly' },
  ]

  const productSlugs = [
    'wasigap',
    'antarpro',
    'bintanx',
    'klopdana',
    'suratmedis',
    'sanyclean',
  ]

  const productPages = productSlugs.map(slug => ({
    loc: `/platforms/${slug}`,
    priority: '0.8',
    changefreq: 'weekly',
  }))

  const blogSlugs = [
    'automation-ecosystem-bukan-sekadar-chatbot',
    'mendesain-ai-agent-untuk-operasional-bisnis',
    'workflow-automation-untuk-perusahaan-bertumbuh',
  ]

  const blogPages = blogSlugs.map(slug => ({
    loc: `/blog/${slug}`,
    priority: '0.65',
    changefreq: 'monthly',
  }))

  const allPages = [...staticPages, ...productPages, ...blogPages]

  const urls = allPages
    .map(
      (p) =>
        `  <url>\n    <loc>${baseUrl}${p.loc}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`,
    )
    .join('\n')

  setHeader(event, 'Content-Type', 'application/xml')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
})
