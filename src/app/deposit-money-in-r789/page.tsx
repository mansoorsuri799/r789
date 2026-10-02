import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { imageObjectLicensing } from '@/lib/schemaImageLicensing';
import { SITE_ORIGIN } from '@/lib/schemaImageLicensing';
import { APP_MIN_DEPOSIT, CORE_ROUTES, SUPPORT_EMAIL } from '@/lib/appFacts';
import CtaButton from '@/components/CtaButton';

export const metadata: Metadata = {
  title: 'How to Deposit Money in R789 – JazzCash, EasyPaisa, and Bank Guide 2026',
  description: `Add funds to R789 from PKR 100 via JazzCash, EasyPaisa, or Bank. Step-by-step deposit guide for Pakistani players. Fast, secure, and beginner-friendly.`,
  keywords: 'deposit money R789, R789 JazzCash deposit, R789 EasyPaisa deposit, add funds R789, R789 recharge PKR 100',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: `${SITE_ORIGIN}${CORE_ROUTES.deposit}` },
  openGraph: {
    title: 'How to Deposit Money in R789 – JazzCash, EasyPaisa, and Bank Guide',
    description: `Deposit into R789 from ${APP_MIN_DEPOSIT} via JazzCash, EasyPaisa, or Bank. Step-by-step guide for Pakistan players.`,
    url: `${SITE_ORIGIN}${CORE_ROUTES.deposit}`,
    siteName: 'R789',
    type: 'article',
    images: [{ url: `${SITE_ORIGIN}/feature/og-image.webp`, width: 1200, height: 630, alt: 'How to Deposit Money in R789' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Deposit Money in R789 – JazzCash, EasyPaisa, and Bank Guide',
    description: `Deposit into R789 from ${APP_MIN_DEPOSIT}. Step-by-step guide for Pakistan players.`,
  },
};

function safeJson(obj: object) {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

export default function DepositMoneyInR789Page() {
  const pageUrl = `${SITE_ORIGIN}${CORE_ROUTES.deposit}`;

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${pageUrl}#article`,
        headline: 'How to Deposit Money in R789',
        description: `Step-by-step guide to deposit from PKR 100 into R789 via JazzCash, EasyPaisa, or Bank.`,
        url: pageUrl,
        image: `${SITE_ORIGIN}/r789-deposit-money.webp`,
        author: { '@type': 'Organization', name: 'R789', url: SITE_ORIGIN },
        publisher: {
          '@type': 'Organization',
          name: 'R789',
          logo: { '@type': 'ImageObject', url: `${SITE_ORIGIN}/r789.webp`, ...imageObjectLicensing, creditText: 'R789 logo' },
        },
        datePublished: '2026-10-02',
        dateModified: '2026-10-02',
        mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
        inLanguage: 'en-US',
      },
      {
        '@type': 'HowTo',
        '@id': `${pageUrl}#howto`,
        name: 'How to Deposit Money in R789',
        description: 'Step-by-step guide to deposit funds into R789 via JazzCash, EasyPaisa, or Bank.',
        url: pageUrl,
        totalTime: 'PT3M',
        estimatedCost: { '@type': 'MonetaryAmount', currency: 'PKR', value: '100' },
        step: [
          { '@type': 'HowToStep', name: 'Open R789 App', text: 'Launch the R789 app on your Android phone and log in with your registered mobile number and password.' },
          { '@type': 'HowToStep', name: 'Tap the Wallet / Shop Button', text: 'From the main lobby, tap the Wallet or Shop icon at the top of the screen to open the deposit section.' },
          { '@type': 'HowToStep', name: 'Choose a Payment Method', text: 'Select JazzCash, EasyPaisa, or Bank — whichever payment method you use.' },
          { '@type': 'HowToStep', name: 'Enter Deposit Amount', text: 'Type or choose the amount you want to add. The minimum is PKR 100.' },
          { '@type': 'HowToStep', name: 'Enter Payment Details', text: 'For JazzCash or EasyPaisa, enter your wallet number. For Bank, enter the account details shown in the app. Double-check before proceeding.' },
          { '@type': 'HowToStep', name: 'Confirm the Payment Request', text: 'Approve the payment in JazzCash, EasyPaisa, or your bank app. Keep the receipt until your R789 balance updates.' },
          { '@type': 'HowToStep', name: 'Verify Your R789 Balance', text: 'Return to R789. Wallet deposits are often quick; bank transfers may take longer before chips appear.' },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: [
          { '@type': 'Question', name: 'What is the minimum deposit in R789?', acceptedAnswer: { '@type': 'Answer', text: 'The minimum deposit is PKR 100 via JazzCash, EasyPaisa, or Bank.' } },
          { '@type': 'Question', name: 'Which payment methods does R789 support?', acceptedAnswer: { '@type': 'Answer', text: 'R789 supports JazzCash, EasyPaisa, and Bank for deposits.' } },
          { '@type': 'Question', name: 'How long does an R789 deposit take?', acceptedAnswer: { '@type': 'Answer', text: 'Deposits via JazzCash, EasyPaisa, or Bank are almost instant — usually under 60 seconds once you approve the payment request.' } },
          { '@type': 'Question', name: 'What if my deposit is deducted but chips did not appear?', acceptedAnswer: { '@type': 'Answer', text: `Wait 5 minutes and refresh the app. If chips still have not arrived, contact R789 support at ${SUPPORT_EMAIL} with your transaction reference.` } },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_ORIGIN },
          { '@type': 'ListItem', position: 2, name: 'Deposit Money in R789', item: pageUrl },
        ],
      },
    ],
  };

  return (
    <article itemScope itemType="https://schema.org/Article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(schemaGraph) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-4 md:px-8 max-w-7xl mx-auto pt-6 pb-2">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-400">
          <li><Link href={CORE_ROUTES.home} className="hover:text-accent transition-colors">Home</Link></li>
          <li aria-hidden="true" className="text-gray-600">›</li>
          <li className="text-accent font-medium">Deposit Money in R789</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              How to Deposit Money in <span className="text-accent">R789</span>?
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              From <strong className="text-white">PKR 100</strong> — JazzCash, EasyPaisa, and Bank Accepted
            </p>
            <CtaButton>Download R789 &amp; Deposit Now</CtaButton>
            <div className="mt-10 flex justify-center">
              <Image
                src="/r789-deposit-money.webp"
                alt="R789 deposit screen showing JazzCash, EasyPaisa, and Bank options for adding chips"
                width={320}
                height={320}
                className="rounded-2xl shadow-2xl object-cover w-[260px] h-auto md:w-[320px]"
                priority
                sizes="(max-width: 768px) 260px, 320px"
              />
            </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#0A1A33]/80 border border-gray-800 rounded-xl p-8 md:p-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                <Link href={CORE_ROUTES.home} className="text-accent hover:underline font-semibold">R789</Link> is
                R789, where your chips fuel every round. Adding funds is quick — the minimum
                deposit is just <strong className="text-white">{APP_MIN_DEPOSIT}</strong> via JazzCash, EasyPaisa, or Bank,
                both widely used across Pakistan. Once your balance is loaded, you can join crash rounds instantly.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                If you have not installed R789 yet,{' '}
                <Link href={CORE_ROUTES.download} className="text-accent hover:underline font-semibold">
                  download the R789 APK
                </Link>{' '}
                first. After you win, use our{' '}
                <Link href={CORE_ROUTES.withdraw} className="text-accent hover:underline font-semibold">
                  withdrawal guide
                </Link>{' '}
                to cash out from PKR 200.
              </p>
            </div>
          </div>
      </section>

      {/* Step-by-step */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-accent">
              Steps to Deposit Money in R789
            </h2>
            <ol className="space-y-8 list-none">
              {[
                {
                  n: 1,
                  heading: 'Open the R789 App',
                  body: 'Launch R789 on your Android device. Make sure you have a stable internet connection. Log in with your registered mobile number and password.',
                },
                {
                  n: 2,
                  heading: 'Tap the Wallet / Shop Button',
                  body: 'From the main game lobby, tap the Wallet or Shop icon (usually top-right). This opens the deposit and withdrawal centre.',
                },
                {
                  n: 3,
                  heading: 'Select Your Payment Method',
                  body: 'Choose JazzCash, EasyPaisa, or Bank. Mobile wallets usually credit quickly; bank transfers may take a little longer.',
                },
                {
                  n: 4,
                  heading: 'Enter the Deposit Amount',
                  body: `Type the amount you want to add. The minimum is ${APP_MIN_DEPOSIT}. Only deposit money you are comfortable spending on a game of chance.`,
                },
                {
                  n: 5,
                  heading: 'Enter Payment Details',
                  body: 'For JazzCash or EasyPaisa, provide the mobile number registered in your name. For Bank, enter the account details shown in the app. Using someone else\'s account can cause rejection or delay.',
                },
                {
                  n: 6,
                  heading: 'Confirm the Payment',
                  body: 'Approve the request in JazzCash, EasyPaisa, or your bank app. Keep the SMS or receipt until your R789 balance updates.',
                },
                {
                  n: 7,
                  heading: 'Check Your R789 Balance',
                  body: 'Switch back to R789. Wallet deposits often update within seconds; bank transfers can take longer. You are then ready to join crash rounds.',
                },
              ].map(({ n, heading, body }) => (
                <li key={n} className="bg-[#0A1A33]/80 border border-gray-800 rounded-xl p-8 transition-colors hover:border-accent/50">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#0A1A33] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6" aria-hidden="true">{n}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{heading}</h3>
                      <p className="text-gray-300 leading-relaxed">{body}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
      </section>

      {/* Payment method cards */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-accent">
              Supported Payment Methods
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#0A1A33]/80 border border-gray-800 rounded-xl p-8 border-t-4 border-[#FFA500]">
                <h3 className="text-2xl font-bold text-accent mb-4">JazzCash</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✅ Available on any Jazz SIM</li>
                  <li>✅ Approve via app or USSD</li>
                  <li>✅ Instant credit to R789</li>
                  <li>✅ Min deposit: PKR 100</li>
                </ul>
              </div>
              <div className="bg-[#0A1A33]/80 border border-gray-800 rounded-xl p-8 border-t-4 border-[#60a5fa]">
                <h3 className="text-2xl font-bold text-[#60a5fa] mb-4">EasyPaisa</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✅ Available on Telenor SIMs</li>
                  <li>✅ Approve via EasyPaisa app</li>
                  <li>✅ Instant credit to R789</li>
                  <li>✅ Min deposit: PKR 100</li>
                </ul>
              </div>
              <div className="bg-[#0A1A33]/80 border border-gray-800 rounded-xl p-8 border-t-4 border-[#34d399]">
                <h3 className="text-2xl font-bold text-[#34d399] mb-4">Bank</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✅ Pakistani bank transfer</li>
                  <li>✅ Use your own account name</li>
                  <li>✅ Keep the transfer receipt</li>
                  <li>✅ Min deposit: PKR 100</li>
                </ul>
              </div>
            </div>
          </div>
      </section>

      {/* Tips */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-accent">
              Tips for Safe Deposits
            </h2>
            <div className="bg-[#0A1A33]/80 border border-gray-800 rounded-xl p-8 md:p-12">
              <ul className="space-y-4">
                {[
                  'Always use your own JazzCash, EasyPaisa, or Bank account — not a shared or family number.',
                  'Keep a stable mobile data or Wi-Fi connection during the deposit to avoid timeouts.',
                  'Never share your MPIN or R789 password with anyone offering to deposit for you.',
                  'Start with the minimum (PKR 100) if you are new — learn the crash rounds first.',
                  'Only deposit money you can afford to lose. Crash games carry risk.',
                ].map((tip) => (
                  <li key={tip} className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg text-gray-300">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-accent">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: 'What is the minimum deposit in R789?', a: `The minimum deposit is ${APP_MIN_DEPOSIT} via JazzCash, EasyPaisa, or Bank.` },
                { q: 'Which payment methods does R789 support?', a: 'R789 supports JazzCash, EasyPaisa, and Bank for deposits and withdrawals in PKR.' },
                { q: 'How long does an R789 deposit take?', a: 'Deposits are almost instant — usually under 60 seconds once you approve the payment request in your mobile wallet.' },
                { q: 'What if my deposit was deducted but chips did not appear?', a: `Wait 5 minutes and refresh the app. If chips still have not arrived, contact R789 support at ${SUPPORT_EMAIL} with your JazzCash, EasyPaisa, or Bank transaction reference number.` },
              ].map(({ q, a }) => (
                <details key={q} className="group bg-[#0A1A33]/80 border border-gray-800 rounded-xl">
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="text-xl font-bold text-accent pr-4">{q}</h3>
                    <span className="transition group-open:rotate-180 flex-shrink-0">
                      <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6" /></svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-300 leading-relaxed">{a}</div>
                </details>
              ))}
            </div>
          </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto border-b border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6">Ready to Play?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Download R789 now, deposit from PKR 100, and join Pakistan's R789 community.
          </p>
          <CtaButton>Download R789 Now</CtaButton>
        </div>
      </section>
    </article>
  );
}
