import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_ORIGIN } from '@/lib/schemaImageLicensing';
import { SUPPORT_EMAIL, CORE_ROUTES } from '@/lib/appFacts';

export const metadata: Metadata = {
  title: 'Privacy Policy – R789 | r-789game.com.pk',
  description:
    'Read R789\'s privacy policy to understand what data r-789game.com.pk collects, how it is used, and how your information is protected.',
  keywords: ['R789 privacy policy', 'r-789game.com.pk privacy', 'data protection R789'],
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE_ORIGIN}${CORE_ROUTES.privacy}` },
  openGraph: {
    title: 'Privacy Policy – R789',
    description: 'How R789 collects, uses, and protects your personal information.',
    url: `${SITE_ORIGIN}${CORE_ROUTES.privacy}`,
    siteName: 'R789',
    type: 'website',
    images: [{ url: `${SITE_ORIGIN}/feature/og-image.webp`, width: 1200, height: 630, alt: 'R789 Privacy Policy' }],
  },
};

function safeJson(obj: object) {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

export default function PrivacyPolicyPage() {
  const pageUrl = `${SITE_ORIGIN}${CORE_ROUTES.privacy}`;

  const schemaBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_ORIGIN },
      { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: pageUrl },
    ],
  };

  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(schemaBreadcrumb) }} />

      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-400">
              <li><Link href={CORE_ROUTES.home} className="hover:text-accent transition-colors">Home</Link></li>
              <li aria-hidden="true" className="text-gray-600">›</li>
              <li className="text-accent font-medium">Privacy Policy</li>
            </ol>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Privacy Policy</h1>
            <p className="text-lg text-gray-400">Last Updated: October 2, 2026</p>
          </div>

          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">

              {/* Introduction */}
              <div className="bg-[#0A1029] border-l-4 border-accent rounded-r-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-white">Introduction</h2>
                <p className="text-gray-300 mb-4">
                  <Link href={CORE_ROUTES.home} className="text-accent hover:underline font-semibold">R789</Link>{' '}
                  (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates{' '}
                  <a href={SITE_ORIGIN} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                    r-789game.com.pk
                  </a>{' '}
                  and the R789 Android application (collectively the &ldquo;Service&rdquo;). This Privacy Policy explains
                  what data we collect, why we collect it, and how it is protected.
                </p>
                <p className="text-gray-300">
                  By accessing or using the Service you agree to this Privacy Policy. Please read it carefully.
                </p>
              </div>

              {/* What we collect */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Information We Collect</h2>

              <div className="bg-[#0A1029] rounded-xl p-6 mb-6">
                <h3 className="text-2xl font-semibold mb-4 text-accent">Account &amp; Registration Data</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Mobile phone number (required for account creation)</li>
                  <li>Email address (optional, used for account recovery)</li>
                  <li>Device model, operating system version, and unique device identifiers</li>
                  <li>IP address and approximate location (country/city level)</li>
                </ul>
              </div>

              <div className="bg-[#0A1029] rounded-xl p-6 mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-accent">Payment &amp; Transaction Data</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>JazzCash, EasyPaisa, or Bank mobile wallet number (for deposits and withdrawals)</li>
                  <li>Transaction amounts, timestamps, and reference IDs</li>
                  <li>Bonus and reward claim history</li>
                </ul>
                <p className="text-gray-300 mt-3 text-sm">
                  <strong className="text-white">Note:</strong> Your mobile wallet MPIN is never stored or transmitted to R789 servers. Authentication happens on your JazzCash, EasyPaisa, or Bank app.
                </p>
              </div>

              <div className="bg-[#0A1029] rounded-xl p-6 mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-accent">Usage Data</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Crash rounds played, stakes placed, cash-out timing</li>
                  <li>Features accessed within the app</li>
                  <li>App performance and crash/error reports</li>
                  <li>Referral activities</li>
                </ul>
              </div>

              {/* How we use it */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">How We Use Your Information</h2>
              <div className="bg-[#0A1029] rounded-xl p-6 mb-8">
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>To operate and maintain the R789 Service</li>
                  <li>To verify your identity and prevent fraud</li>
                  <li>To process deposits and withdrawals via JazzCash, EasyPaisa, and Bank</li>
                  <li>To send bonus notifications and important account updates</li>
                  <li>To monitor crash rounds for fairness and security</li>
                  <li>To provide customer support</li>
                  <li>To comply with applicable Pakistani laws and regulations</li>
                </ul>
              </div>

              {/* Payment security */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Payment Information Security</h2>
              <div className="bg-[#0A1029] rounded-xl p-6 mb-8">
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>All data in transit is protected with SSL/TLS encryption</li>
                  <li>Mobile wallet PINs are never stored on R789 servers</li>
                  <li>Transactions are processed through the JazzCash, EasyPaisa, and Bank payment gateways</li>
                  <li>Wallet numbers are stored in encrypted form</li>
                </ul>
              </div>

              {/* Disclosure */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Disclosure of Data</h2>

              <div className="bg-[#0A1029] rounded-xl p-6 mb-6">
                <h3 className="text-2xl font-semibold mb-4 text-accent">Legal Requirements</h3>
                <p className="text-gray-300">
                  We may disclose your data if required by law or in response to valid requests from Pakistani public
                  authorities (e.g., a court order or government investigation).
                </p>
              </div>

              <div className="bg-[#0A1029] rounded-xl p-6 mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-accent">Third-Party Service Providers</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Payment processors (JazzCash, EasyPaisa) — necessary for transactions</li>
                  <li>Analytics and crash-reporting tools — used only to improve app stability</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  We do not sell, rent, or trade your personal data to advertisers or unrelated third parties.
                </p>
              </div>

              {/* Data security */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Data Security</h2>
              <div className="bg-[#0A1029] rounded-xl p-6 mb-8">
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>SSL/TLS encryption for all data in transit</li>
                  <li>Secure servers with firewall protection</li>
                  <li>Regular security audits</li>
                  <li>Access controls and multi-factor authentication for staff systems</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  No method of electronic storage is 100% secure. We cannot guarantee absolute security, but we take
                  commercially reasonable steps to protect your information.
                </p>
              </div>

              {/* Your rights */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Your Rights</h2>
              <div className="bg-[#0A1029] rounded-xl p-6 mb-8">
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li><strong className="text-white">Access:</strong> Request a copy of your personal data</li>
                  <li><strong className="text-white">Rectification:</strong> Correct inaccurate information</li>
                  <li><strong className="text-white">Erasure:</strong> Request deletion of your account and data</li>
                  <li><strong className="text-white">Portability:</strong> Receive your data in a structured format</li>
                  <li><strong className="text-white">Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  To exercise any of these rights, email us at{' '}
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">{SUPPORT_EMAIL}</a>.
                </p>
              </div>

              {/* Age restriction */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Age Restriction</h2>
              <div className="bg-red-900/20 border-l-4 border-red-500 rounded-r-lg p-6 mb-8">
                <p className="text-gray-300 mb-4">
                  <strong className="text-white">R789 is intended for users aged 18 and older.</strong> We do not
                  knowingly collect data from anyone under 18. If you believe a minor has created an account, contact
                  us immediately at{' '}
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">{SUPPORT_EMAIL}</a>.
                </p>
              </div>

              {/* Cookies */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Cookies and Tracking</h2>
              <div className="bg-[#0A1029] rounded-xl p-6 mb-8">
                <p className="text-gray-300 mb-4">
                  r-789game.com.pk uses cookies and similar technologies to remember preferences and analyse site
                  traffic. You can disable cookies in your browser settings; some site features may not work fully
                  without them.
                </p>
              </div>

              {/* Policy changes */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Changes to This Policy</h2>
              <div className="bg-[#0A1029] rounded-xl p-6 mb-8">
                <p className="text-gray-300">
                  We may update this Privacy Policy from time to time. Changes are effective when posted on this page.
                  The &ldquo;Last Updated&rdquo; date at the top will always reflect the most recent revision. Continued
                  use of the Service after changes constitutes acceptance of the updated policy.
                </p>
              </div>

              {/* Contact */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Contact Us</h2>
              <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-6 mb-4">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <strong className="text-white mr-2">Email:</strong>
                    <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">{SUPPORT_EMAIL}</a>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                    </svg>
                    <strong className="text-white mr-2">Website:</strong>
                    <a href={SITE_ORIGIN} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">{SITE_ORIGIN}</a>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    </svg>
                    <strong className="text-white mr-2">Contact Form:</strong>
                    <Link href={CORE_ROUTES.contact} className="text-accent hover:underline">Visit Contact Us page</Link>
                  </li>
                </ul>
              </div>

              <div className="bg-[#0A1029] rounded-xl p-6 mt-8 text-center">
                <p className="text-gray-400 text-sm mb-4">
                  By using R789, you consent to this Privacy Policy and agree to its terms.
                </p>
                <p className="text-gray-400 text-sm">© 2026 R789. All rights reserved.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
