import { SITE_ORIGIN } from "@/lib/schemaImageLicensing";
import { SITEMAP_PAGES, escapeXml } from "@/lib/sitemapData";

export function GET() {
  const entries = SITEMAP_PAGES.filter((page) => page.images && page.images.length > 0)
    .map((page) => {
      const loc = page.path === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${page.path}`;
      const images = page.images!
        .map(
          (img) => `    <image:image>
      <image:loc>${escapeXml(img.loc)}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
      <image:caption>${escapeXml(img.caption)}</image:caption>
    </image:image>`
        )
        .join("\n");
      return `  <url>
    <loc>${escapeXml(loc)}</loc>
${images}
  </url>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
