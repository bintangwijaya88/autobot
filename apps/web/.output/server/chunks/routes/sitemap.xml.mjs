import { c as defineEventHandler, e as setHeader } from '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const sitemap_xml = defineEventHandler((event) => {
  const baseUrl = "https://autobot.co.id";
  const now = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const staticPages = [
    { loc: "/", priority: "1.0", changefreq: "weekly" },
    { loc: "/about", priority: "0.8", changefreq: "monthly" },
    { loc: "/products", priority: "0.9", changefreq: "weekly" },
    { loc: "/features", priority: "0.8", changefreq: "monthly" },
    { loc: "/services", priority: "0.8", changefreq: "monthly" },
    { loc: "/partners", priority: "0.7", changefreq: "monthly" },
    { loc: "/resources", priority: "0.6", changefreq: "weekly" },
    { loc: "/contact", priority: "0.7", changefreq: "monthly" },
    { loc: "/pricing", priority: "0.9", changefreq: "monthly" },
    { loc: "/order", priority: "0.8", changefreq: "monthly" },
    { loc: "/privacy-policy", priority: "0.4", changefreq: "yearly" },
    { loc: "/terms-of-service", priority: "0.4", changefreq: "yearly" },
    { loc: "/refund-policy", priority: "0.4", changefreq: "yearly" }
  ];
  const productSlugs = [
    "wasigap",
    "wablast",
    "wabotiq",
    "ddl-klinik",
    "autobot-flow",
    "autobot-agent",
    "autobot-connect"
  ];
  const productPages = productSlugs.map((slug) => ({
    loc: `/products/${slug}`,
    priority: "0.8",
    changefreq: "weekly"
  }));
  const allPages = [...staticPages, ...productPages];
  const urls = allPages.map(
    (p) => `  <url>
    <loc>${baseUrl}${p.loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  ).join("\n");
  setHeader(event, "Content-Type", "application/xml");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
});

export { sitemap_xml as default };
//# sourceMappingURL=sitemap.xml.mjs.map
