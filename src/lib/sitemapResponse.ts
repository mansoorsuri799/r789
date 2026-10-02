import { SITE_ORIGIN } from "@/lib/schemaImageLicensing";

/** Short browser cache; always revalidate at CDN so crawlers never stick on a stale miss/error. */
export const SITEMAP_CACHE_CONTROL =
  "public, max-age=0, s-maxage=300, must-revalidate";

export const SITEMAP_XML_HEADERS = {
  "Content-Type": "application/xml; charset=utf-8",
  "Cache-Control": SITEMAP_CACHE_CONTROL,
  "X-Robots-Tag": "noindex",
} as const;

/** Canonical sitemap index body (shared by /sitemap.xml and /sitemap-index.xml). */
export function sitemapIndexBody(lastMod = "2026-10-02") {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE_ORIGIN}/index.xml</loc>
    <lastmod>${lastMod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${SITE_ORIGIN}/image-sitemap.xml</loc>
    <lastmod>${lastMod}</lastmod>
  </sitemap>
</sitemapindex>`;
}
