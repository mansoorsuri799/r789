import { NextResponse } from 'next/server';
import { SITE_ORIGIN } from '@/lib/schemaImageLicensing';

/** Legacy endpoint — prefer /sitemap.xml */
export async function GET() {
  return NextResponse.redirect(`${SITE_ORIGIN}/sitemap.xml`, 308);
}
