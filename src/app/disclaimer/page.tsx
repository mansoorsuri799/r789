import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_ORIGIN } from '@/lib/schemaImageLicensing';
import { CORE_ROUTES } from '@/lib/appFacts';
import CtaButton from '@/components/CtaButton';

export const metadata: Metadata = {
  title: 'Disclaimer – R789 | r-789game.com.pk Legal Notice',
  description:
    'R789 disclaimer: r-789game.com.pk provides informational content only. Crash games involve financial risk. Users are responsible for verifying local laws.',
  keywords: ['R789 disclaimer', 'r-789game.com.pk disclaimer', 'crash game disclaimer Pakistan'],
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE_ORIGIN}${CORE_ROUTES.disclaimer}` },
  openGraph: {
    title: 'Disclaimer – R789',
    description: 'Legal notice for r-789game.com.pk. Crash game risk, user responsibility, and no-income-guarantee statement.',
    url: `${SITE_ORIGIN}${CORE_ROUTES.disclaimer}`,
    siteName: 'R789',
    type: 'website',
  },
};

function safeJson(obj: object) {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

export default function DisclaimerPage() {
  const pageUrl = `${SITE_ORIGIN}${CORE_ROUTES.disclaimer}`;

  const schemaWebPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Disclaimer – R789',
    description: 'Legal disclaimer for the R789 site at r-789game.com.pk.',
    url: pageUrl,
  };

  const schemaBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_ORIGIN },
      { '@type': 'ListItem', position: 2, name: 'Disclaimer', item: pageUrl },
    ],
  };

  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(schemaWebPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(schemaBreadcrumb) }} />

      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-400">
              <li><Link href={CORE_ROUTES.home} className="hover:text-accent transition-colors">Home</Link></li>
              <li aria-hidden="true" className="text-gray-600">›</li>
              <li className="text-accent font-medium">Disclaimer</li>
            </ol>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Disclaimer</h1>
            <p className="text-lg text-gray-400">Please read this notice carefully before using this site</p>
          </div>

          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">

              {/* Warning banner */}
              <div className="bg-[#0A1029] border-l-4 border-accent p-6 mb-8 rounded-r-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h2 className="text-xl font-bold text-accent mb-2">Important Notice</h2>
                    <p className="text-accent mb-0">
                      By using r-789game.com.pk you acknowledge and agree to the terms outlined on this page.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 text-gray-300">

                {/* Informational only */}
                <div className="bg-[#0A1029] rounded-xl p-6">
                  <h2 className="text-2xl font-bold mb-4 text-white">📋 Informational Purpose Only</h2>
                  <p className="leading-relaxed">
                    The content on{' '}
                    <a href={SITE_ORIGIN} className="text-accent hover:underline font-semibold" target="_blank" rel="noopener noreferrer">
                      r-789game.com.pk
                    </a>{' '}
                    is provided for <strong className="text-white">general informational purposes only</strong>. We
                    describe how the{' '}
                    <Link href={CORE_ROUTES.home} className="text-accent hover:underline font-semibold">R789</Link> crash
                    game works, how to install the APK, and how to use deposits and withdrawals. We do not operate the
                    game or control its outcome.
                  </p>
                </div>

                {/* No income guarantee */}
                <div className="bg-[#0A1029] rounded-xl p-6 border border-red-800">
                  <h2 className="text-2xl font-bold mb-4 text-red-400">🚫 No Income Guarantee</h2>
                  <p className="leading-relaxed mb-4">
                    <strong className="text-white">R789 is a crash game that involves real money and real financial
                    risk.</strong> Results in each crash round are determined by the game server and cannot be predicted
                    or guaranteed by this site or anyone else.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2 font-bold">•</span>
                      <span>Past game outcomes do not predict future results.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2 font-bold">•</span>
                      <span>Nothing on this site is financial advice, investment advice, or a guarantee of profit.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2 font-bold">•</span>
                      <span>Only deposit money you can afford to lose entirely.</span>
                    </li>
                  </ul>
                </div>

                {/* Legal responsibility */}
                <div className="bg-[#0A1029] rounded-xl p-6 border border-blue-800">
                  <h2 className="text-2xl font-bold mb-4 text-blue-400">⚖️ User Responsibility</h2>
                  <p className="leading-relaxed mb-4">
                    Online crash games may be subject to local laws in Pakistan. It is your responsibility to verify
                    whether playing R789 or similar games is permitted in your city, province, or community before
                    depositing funds.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">✓</span>
                      <span>Verify your local laws before depositing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">✓</span>
                      <span>Play within your personal financial means</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">✓</span>
                      <span>Recognise the risks of real-money crash games</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">✓</span>
                      <span>Seek help if gaming becomes a problem</span>
                    </li>
                  </ul>
                </div>

                {/* No liability */}
                <div className="bg-[#0A1029] rounded-xl p-6">
                  <h2 className="text-2xl font-bold mb-4 text-white">🛡️ No Liability</h2>
                  <p className="leading-relaxed">
                    r-789game.com.pk and its authors are <strong className="text-white">not liable</strong> for any
                    financial loss, legal consequence, or other harm arising from the use of the R789 application or
                    any third-party platform mentioned on this site. All actions you take based on content here are
                    strictly at your own risk.
                  </p>
                </div>

                {/* Trademarks */}
                <div className="bg-[#0A1029] rounded-xl p-6">
                  <h2 className="text-2xl font-bold mb-4 text-white">™️ Trademarks</h2>
                  <p className="leading-relaxed">
                    R789, JazzCash, EasyPaisa, and other brand names mentioned on this site belong to their respective
                    owners. r-789game.com.pk does not claim ownership of or affiliation with any third-party trademark
                    other than R789.
                  </p>
                </div>

                {/* Age */}
                <div className="bg-red-900/20 border-l-4 border-red-500 rounded-r-lg p-6">
                  <h2 className="text-2xl font-bold mb-3 text-red-400">🔞 Age Restriction</h2>
                  <p className="leading-relaxed">
                    R789 is intended <strong className="text-white">only for adults aged 18 or older</strong>. If you
                    are under 18, please leave this site and do not use the R789 application.
                  </p>
                </div>

              </div>

              {/* Contact */}
              <div className="mt-12 p-6 bg-secondary rounded-xl border-2 border-accent">
                <h2 className="text-2xl font-bold mb-4 text-white">Questions About This Disclaimer?</h2>
                <p className="text-gray-300 mb-4">
                  If you have questions about the content of this disclaimer, feel free to contact us.
                </p>
                <CtaButton href={CORE_ROUTES.contact} icon="arrow">Contact Us</CtaButton>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
