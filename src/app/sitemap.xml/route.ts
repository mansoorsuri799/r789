import { sitemapIndexBody, SITEMAP_XML_HEADERS } from "@/lib/sitemapResponse";

/** Primary sitemap URL Google / Search Console expect — serve index directly (no redirect). */
export function GET() {
  return new Response(sitemapIndexBody(), { headers: SITEMAP_XML_HEADERS });
}
