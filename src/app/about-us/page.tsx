import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_ORIGIN } from '@/lib/schemaImageLicensing';
import { SUPPORT_EMAIL, CORE_ROUTES } from '@/lib/appFacts';
import CtaButton from '@/components/CtaButton';
import R789Logo from '@/components/R789Logo';

export const metadata: Metadata = {
  title: 'About R789 – Pakistan Gaming Platform | r-789game.com.pk',
  description:
    "Learn about R789, R789 at r-789game.com.pk. Our mission: clear guides, honest facts, and responsible gaming info for Pakistani players.",
  keywords: ['about R789', 'R789 about us', 'R789 Pakistan crash game', 'r-789game.com.pk about'],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: `${SITE_ORIGIN}${CORE_ROUTES.about}` },
  openGraph: {
    title: 'About R789 – Pakistan Gaming Platform',
    description: "About r-789game.com.pk — R789 guide site.",
    url: `${SITE_ORIGIN}${CORE_ROUTES.about}`,
    siteName: 'R789',
    locale: 'en_US',
    type: 'website',
    images: [{ url: `${SITE_ORIGIN}/feature/og-image.webp`, width: 1200, height: 630, alt: 'About R789 – Pakistan Crash Game' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About R789 – Pakistan Gaming Platform',
    description: "About r-789game.com.pk — R789 guide site.",
    images: [`${SITE_ORIGIN}/feature/twitter-card.webp`],
  },
};

function safeJson(obj: object) {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

export default function AboutPage() {
  const pageUrl = `${SITE_ORIGIN}${CORE_ROUTES.about}`;

  const schemaAbout = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'Organization',
      name: 'R789',
      url: SITE_ORIGIN,
      logo: `${SITE_ORIGIN}/r789.webp`,
      description:
        'R789 is a lightweight Android game for Pakistan. Deposit from PKR 100, withdraw from PKR 200 via JazzCash, EasyPaisa, and Bank.',
      foundingDate: '2026',
      foundingLocation: { '@type': 'Country', name: 'Pakistan' },
      contactPoint: { '@type': 'ContactPoint', email: SUPPORT_EMAIL, contactType: 'Customer Support', availableLanguage: ['English', 'Urdu'] },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
  };

  const schemaBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_ORIGIN },
      { '@type': 'ListItem', position: 2, name: 'About Us', item: pageUrl },
    ],
  };

  return (
    <article className="min-h-screen bg-primary py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(schemaAbout) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(schemaBreadcrumb) }} />

      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-400">
              <li><Link href={CORE_ROUTES.home} className="hover:text-accent transition-colors">Home</Link></li>
              <li aria-hidden="true" className="text-gray-600">›</li>
              <li className="text-accent font-medium">About Us</li>
            </ol>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About R789</h1>
            <p className="text-lg text-gray-400">Pakistan's Trusted Gaming Platform – r-789game.com.pk</p>
          </div>

          {/* Main intro */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-8">
              <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center">
                <Link href={CORE_ROUTES.home} className="block">
                  <R789Logo
                    variant="about"
                    alt="R789 official logo for Android Pakistan"
                    title="R789 – Pakistan Gaming Platform"
                    priority
                  />
                </Link>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Welcome to{' '}
                  <a href={SITE_ORIGIN} className="text-accent hover:underline font-semibold">
                    r-789game.com.pk
                  </a>
                  , the official information site for{' '}
                  <Link href={CORE_ROUTES.home} className="text-accent hover:underline font-semibold">R789</Link> — a
                  lightweight game designed for Pakistani Android users. In R789, players stake chips on a
                  live multiplier that rises each round, then decide when to cash out before the plane disappears.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Deposits start from <strong className="text-white">PKR 100</strong> and withdrawals from{' '}
                  <strong className="text-white">PKR 200</strong>, paid via <strong className="text-white">JazzCash</strong>,{' '}
                  <strong className="text-white">EasyPaisa</strong>, or <strong className="text-white">Bank</strong> transfer.
                </p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">Our Mission</h2>
            <p className="text-lg md:text-xl text-white leading-relaxed text-center">
              r-789game.com.pk exists to give Pakistani players clear, accurate information about R789: how the crash
              mechanic works, how to deposit and withdraw safely, and what to expect from bonuses and account features —
              without hype or inflated income promises. Have a question?{' '}
              <Link href={CORE_ROUTES.contact} className="underline hover:text-orange-100 font-semibold">
                Contact us
              </Link>{' '}
              anytime.
            </p>
          </div>

          {/* What we cover */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white">What You&apos;ll Find on This Site</h2>
            <ul className="space-y-3 text-gray-300">
              {[
                { href: CORE_ROUTES.download, label: 'Download guide – APK link, install steps, version info.' },
                { href: CORE_ROUTES.deposit, label: 'Deposit guide – JazzCash, EasyPaisa, and Bank from PKR 100.' },
                { href: CORE_ROUTES.withdraw, label: 'Withdrawal guide – Cash out from PKR 200 step by step.' },
                { href: CORE_ROUTES.pc, label: 'PC guide – How to run R789 via Android emulator on Windows.' },
                { href: CORE_ROUTES.blog, label: 'Blog – Crash strategy, safety tips, bonus breakdowns, account fixes.' },
              ].map(({ href, label }) => (
                <li key={href} className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <Link href={href} className="text-accent hover:underline">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Have a Question?</h2>
            <p className="text-gray-300 mb-6 text-lg">
              Reach our support team at{' '}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline font-semibold">{SUPPORT_EMAIL}</a>{' '}
              or use the contact form.
            </p>
            <CtaButton href={CORE_ROUTES.contact} icon="arrow">Contact Us</CtaButton>
          </div>

        </div>
      </div>
    </article>
  );
}
