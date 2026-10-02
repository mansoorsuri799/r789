import { NextResponse } from 'next/server';
import { SITE_ORIGIN } from '@/lib/schemaImageLicensing';

/** Legacy endpoint — prefer /sitemap-index.xml */
export async function GET() {
  return NextResponse.redirect(`${SITE_ORIGIN}/sitemap-index.xml`, 308);
}
