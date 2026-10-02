import { SITE_ORIGIN } from "@/lib/schemaImageLicensing";
import { SITEMAP_PAGES, escapeXml } from "@/lib/sitemapData";
import { SITEMAP_XML_HEADERS } from "@/lib/sitemapResponse";

export function GET() {
  const urls = SITEMAP_PAGES.map((page) => {
    const loc = page.path === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${page.path}`;
    return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${page.lastMod}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
  </url>`;
  }).join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(body, { headers: SITEMAP_XML_HEADERS });
}
