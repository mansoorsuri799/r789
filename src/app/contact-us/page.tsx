import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_ORIGIN } from '@/lib/schemaImageLicensing';
import { SUPPORT_EMAIL, CORE_ROUTES } from '@/lib/appFacts';
import CtaButton from '@/components/CtaButton';

export const metadata: Metadata = {
  title: 'Contact R789 – Support & Enquiries | r-789game.com.pk',
  description: `Reach R789 support at ${SUPPORT_EMAIL}. Get help with the app, deposits, withdrawals, privacy policy, and more.`,
  keywords: 'contact R789, R789 support email, r-789game.com.pk contact, R789 help',
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE_ORIGIN}${CORE_ROUTES.contact}` },
  openGraph: {
    title: 'Contact R789 – Support & Enquiries',
    description: `Get in touch with R789 support at ${SUPPORT_EMAIL}.`,
    url: `${SITE_ORIGIN}${CORE_ROUTES.contact}`,
    siteName: 'R789',
    type: 'website',
  },
};

function safeJson(obj: object) {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

export default function ContactPage() {
  const pageUrl = `${SITE_ORIGIN}${CORE_ROUTES.contact}`;

  const schemaContact = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    mainEntity: {
      '@type': 'Organization',
      name: 'R789',
      url: SITE_ORIGIN,
      contactPoint: {
        '@type': 'ContactPoint',
        email: SUPPORT_EMAIL,
        contactType: 'Customer Support',
        availableLanguage: ['English', 'Urdu'],
      },
    },
  };

  const schemaBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_ORIGIN },
      { '@type': 'ListItem', position: 2, name: 'Contact Us', item: pageUrl },
    ],
  };

  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(schemaContact) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(schemaBreadcrumb) }} />

      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-400">
              <li><Link href={CORE_ROUTES.home} className="hover:text-accent transition-colors">Home</Link></li>
              <li aria-hidden="true" className="text-gray-600">›</li>
              <li className="text-accent font-medium">Contact Us</li>
            </ol>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact R789</h1>
            <p className="text-lg text-gray-400">We&apos;re here to help with any questions about the app or this site.</p>
          </div>

          {/* Main panel */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              This is the contact page for{' '}
              <Link href={CORE_ROUTES.home} className="text-accent hover:underline font-semibold">R789</Link> at{' '}
              <a href={SITE_ORIGIN} className="text-accent hover:underline font-semibold">r-789game.com.pk</a>.
              Reach out if you have questions about app content, the{' '}
              <Link href={CORE_ROUTES.privacy} className="text-accent hover:underline font-semibold">privacy policy</Link>,{' '}
              deposit or withdrawal guides, or anything else on the site.
            </p>

            {/* Email */}
            <div className="bg-secondary rounded-xl p-6 md:p-8 border-2 border-orange-200 overflow-hidden mb-6">
              <div className="flex items-center justify-center mb-4">
                <svg aria-hidden="true" className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-white">Email R789 Support</h2>
              <p className="text-center mb-6 text-gray-400">For app issues, payment queries, or site content feedback:</p>
              <div className="flex justify-center w-full min-w-0 overflow-hidden px-4">
                <CtaButton
                  href={`mailto:${SUPPORT_EMAIL}`}
                  icon="mail"
                  ariaLabel="Send email to R789 support"
                  className="max-w-full text-sm sm:text-base md:text-lg px-4 md:px-8"
                >
                  {SUPPORT_EMAIL}
                </CtaButton>
              </div>
            </div>

            {/* Response time note */}
            <div className="bg-[#0A1029] rounded-xl p-4 text-center">
              <p className="text-gray-400 text-sm">
                We typically reply within 24–48 hours. Please include your registered mobile number and a
                short description of the issue in your email.
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
                heading: 'App Guides',
                body: 'Download, deposit & withdrawal guides',
                href: CORE_ROUTES.download,
                cta: 'View Guides →',
              },
              {
                icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
                heading: 'Privacy Policy',
                body: 'How we handle your data',
                href: CORE_ROUTES.privacy,
                cta: 'Read Policy →',
              },
              {
                icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                heading: 'About Us',
                body: 'Learn about R789 and this site',
                href: CORE_ROUTES.about,
                cta: 'About Us →',
              },
            ].map(({ icon, heading, body, href, cta }) => (
              <div key={heading} className="bg-secondary rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-[#0A1029] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{heading}</h3>
                <p className="text-gray-400 mb-4">{body}</p>
                <Link href={href} className="text-accent hover:text-accent font-semibold">{cta}</Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
