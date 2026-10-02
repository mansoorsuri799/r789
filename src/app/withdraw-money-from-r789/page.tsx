import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { imageObjectLicensing, SITE_ORIGIN } from '@/lib/schemaImageLicensing';
import { APP_MIN_WITHDRAW, CORE_ROUTES, SUPPORT_EMAIL } from '@/lib/appFacts';
import CtaButton from '@/components/CtaButton';

export const metadata: Metadata = {
  title: 'How to Withdraw Money from R789 – Fast PKR Cashout Guide 2026',
  description: `Cash out your R789 winnings from PKR 200 via JazzCash, EasyPaisa, or Bank. Step-by-step withdrawal guide for Pakistani players. Secure and straightforward.`,
  keywords: 'withdraw money R789, R789 withdrawal, R789 JazzCash cashout, R789 EasyPaisa payout, R789 minimum withdrawal PKR 200',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: `${SITE_ORIGIN}${CORE_ROUTES.withdraw}` },
  openGraph: {
    title: 'How to Withdraw Money from R789 – Fast PKR Cashout Guide',
    description: `Withdraw R789 winnings from ${APP_MIN_WITHDRAW} via JazzCash, EasyPaisa, or Bank. Step-by-step guide for Pakistan.`,
    url: `${SITE_ORIGIN}${CORE_ROUTES.withdraw}`,
    siteName: 'R789',
    type: 'article',
    images: [{ url: `${SITE_ORIGIN}/feature/og-image.webp`, width: 1200, height: 630, alt: 'How to Withdraw Money from R789' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Withdraw Money from R789 – Fast PKR Cashout Guide',
    description: `Withdraw R789 winnings from ${APP_MIN_WITHDRAW} via JazzCash, EasyPaisa, or Bank.`,
  },
};

function safeJson(obj: object) {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

export default function WithdrawMoneyFromR789Page() {
  const pageUrl = `${SITE_ORIGIN}${CORE_ROUTES.withdraw}`;

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${pageUrl}#article`,
        headline: 'How to Withdraw Money from R789',
        description: `Step-by-step guide to cash out winnings from R789 via JazzCash, EasyPaisa, or Bank from PKR 200.`,
        url: pageUrl,
        image: `${SITE_ORIGIN}/r789-withdraw-money.webp`,
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
        name: 'How to Withdraw Money from R789',
        description: 'Step-by-step guide to cash out winnings from R789 via JazzCash, EasyPaisa, or Bank.',
        url: pageUrl,
        totalTime: 'PT5M',
        step: [
          { '@type': 'HowToStep', name: 'Open R789 App', text: 'Launch R789 on your phone and log in with your credentials.' },
          { '@type': 'HowToStep', name: 'Tap Wallet', text: 'From the lobby, tap the Wallet icon to view your balance and cash-out options.' },
          { '@type': 'HowToStep', name: 'Choose Withdraw', text: 'Tap the Withdraw button inside the Wallet section.' },
          { '@type': 'HowToStep', name: 'Select Payment Method', text: 'Choose JazzCash, EasyPaisa, or Bank — use the same account linked at registration.' },
          { '@type': 'HowToStep', name: 'Enter Amount', text: `Type the amount to withdraw. The minimum is ${APP_MIN_WITHDRAW}.` },
          { '@type': 'HowToStep', name: 'Confirm Account Details', text: 'Enter your wallet number and verify all details are correct.' },
          { '@type': 'HowToStep', name: 'Submit Withdrawal Request', text: 'Tap Submit. R789 will process the request typically within a few hours.' },
          { '@type': 'HowToStep', name: 'Check Your Wallet or Bank', text: 'Open JazzCash, EasyPaisa, or your bank app to confirm the funds have arrived.' },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: [
          { '@type': 'Question', name: 'What is the minimum withdrawal from R789?', acceptedAnswer: { '@type': 'Answer', text: `The minimum withdrawal is ${APP_MIN_WITHDRAW} via JazzCash, EasyPaisa, or Bank.` } },
          { '@type': 'Question', name: 'How long does R789 take to process withdrawals?', acceptedAnswer: { '@type': 'Answer', text: 'Most withdrawals are processed within a few hours. Bank delays or high traffic can occasionally extend this to 24 hours.' } },
          { '@type': 'Question', name: 'My withdrawal was rejected — what should I do?', acceptedAnswer: { '@type': 'Answer', text: `Ensure your wallet number is correct and your account is verified. If the issue persists, contact R789 support at ${SUPPORT_EMAIL}.` } },
          { '@type': 'Question', name: 'Do I need to verify my account before withdrawing?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. R789 may require phone or email verification before processing the first withdrawal. Bind your contact details in the profile section.' } },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_ORIGIN },
          { '@type': 'ListItem', position: 2, name: 'Withdraw Money from R789', item: pageUrl },
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
          <li className="text-accent font-medium">Withdraw Money from R789</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              How to Withdraw Money from <span className="text-accent">R789</span>?
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Cash Out from <strong className="text-white">{APP_MIN_WITHDRAW}</strong> – JazzCash, EasyPaisa, and Bank
            </p>
            <CtaButton>Download R789 &amp; Start Playing</CtaButton>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6">
              <Image
                src="/r789-withdraw-money.webp"
                alt="R789 withdrawal screen showing payout options for JazzCash, EasyPaisa, and Bank"
                width={280}
                height={280}
                className="rounded-2xl shadow-2xl object-cover w-[230px] h-auto md:w-[280px]"
                priority
                sizes="(max-width: 768px) 230px, 280px"
              />
              <Image
                src="/withdraw-amount-r789.webp"
                alt="R789 withdraw amount entry field showing minimum PKR 200 cash-out"
                width={280}
                height={280}
                className="rounded-2xl shadow-2xl object-cover w-[230px] h-auto md:w-[280px]"
                sizes="(max-width: 768px) 230px, 280px"
              />
            </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#0A1A33]/80 border border-gray-800 rounded-xl p-8 md:p-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Winning at{' '}
                <Link href={CORE_ROUTES.home} className="text-accent hover:underline font-semibold">R789</Link>{' '}
                crash rounds is satisfying — and cashing out your winnings is straightforward. The minimum withdrawal is{' '}
                <strong className="text-white">{APP_MIN_WITHDRAW}</strong>, paid directly to your JazzCash, EasyPaisa, or Bank
                wallet. No complicated bank links required for most Pakistani players.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Before withdrawing, make sure your R789 account is verified (phone or email bound) and that you are
                using the same wallet number registered when you{' '}
                <Link href={CORE_ROUTES.deposit} className="text-accent hover:underline font-semibold">
                  deposited
                </Link>
                . Mismatched details are the most common reason withdrawals are delayed.
              </p>
            </div>
          </div>
      </section>

      {/* Steps */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-accent">
              Step-by-Step Withdrawal Guide
            </h2>
            <ol className="space-y-8 list-none">
              {[
                { n: 1, h: 'Open R789 App', b: 'Launch R789 on your phone and log in. Ensure you have a stable internet connection before starting.' },
                { n: 2, h: 'Tap the Wallet Icon', b: 'From the main lobby, tap Wallet. You will see your current chip balance alongside Deposit and Withdraw buttons.' },
                { n: 3, h: 'Tap Withdraw', b: 'Select the Withdraw option. The withdrawal screen will display available methods and a field to enter your payout amount.' },
                { n: 4, h: 'Select Payment Method', b: 'Choose JazzCash, EasyPaisa, or Bank. Always select the same wallet you used when depositing to avoid verification issues.' },
                { n: 5, h: 'Enter the Amount', b: `Type the amount you want to cash out. The minimum is ${APP_MIN_WITHDRAW}. Do not exceed the balance shown in your R789 account.` },
                { n: 6, h: 'Enter Wallet or Bank Details', b: 'For JazzCash or EasyPaisa, enter your mobile number. For Bank, enter the account details shown in the app. Double-check every digit — a wrong number means the money goes elsewhere.' },
                { n: 7, h: 'Submit the Request', b: 'Tap Confirm or Submit. R789 queues your request and begins processing. You will receive an in-app notification once approved.' },
                { n: 8, h: 'Check Your Wallet or Bank', b: 'Open JazzCash, EasyPaisa, or your bank app to confirm the incoming transfer. Most withdrawals arrive within a few hours; bank transfers can occasionally take longer.' },
              ].map(({ n, h, b }) => (
                <li key={n} className="bg-[#0A1A33]/80 border border-gray-800 rounded-xl p-8 transition-colors hover:border-accent/50">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#0A1A33] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6" aria-hidden="true">{n}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{h}</h3>
                      <p className="text-gray-300 leading-relaxed">{b}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
      </section>

      {/* Tips */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-accent">Tips for Smooth Withdrawals</h2>
            <div className="bg-[#0A1A33]/80 border border-gray-800 rounded-xl p-8 md:p-12">
              <ul className="space-y-4">
                {[
                  'Use the same wallet number you used when depositing. Mismatches can trigger fraud checks.',
                  'Bind your phone number or email in the R789 profile before your first withdrawal.',
                  'Avoid batching many tiny withdrawals — larger single requests often process faster.',
                  'Check that your JazzCash, EasyPaisa, or Bank account is not frozen or limit-reached before requesting a payout.',
                  `If funds do not arrive within 24 hours, email ${SUPPORT_EMAIL} with your withdrawal reference ID.`,
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
                { q: 'What is the minimum withdrawal from R789?', a: `The minimum withdrawal is ${APP_MIN_WITHDRAW} via JazzCash, EasyPaisa, or Bank.` },
                { q: 'How long does R789 take to process withdrawals?', a: 'Most withdrawals process within a few hours. Occasionally network congestion can push this toward 24 hours.' },
                { q: 'My withdrawal was rejected — what should I do?', a: `Ensure your wallet number is correct and your account is verified. If the issue persists, contact support at ${SUPPORT_EMAIL}.` },
                { q: 'Do I need to verify my account before withdrawing?', a: 'Yes. Bind your phone number or email in the R789 profile settings before your first cash-out to avoid delays.' },
                { q: 'Can I withdraw to a bank account?', a: 'Yes. Choose Bank in the Withdraw screen, enter your own account details that match your R789 profile, and submit. Processing can take longer than JazzCash or EasyPaisa.' },
              ].map(({ q, a }) => (
                <details key={q} className="group bg-[#0A1A33]/80 border border-gray-800 rounded-xl">
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="text-lg font-bold text-accent pr-4">{q}</h3>
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
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6">Ready to Cash Out Your Winnings?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Download R789 now, play crash rounds, and withdraw your earnings straight to JazzCash, EasyPaisa, or Bank.
            </p>
            <CtaButton>Download R789 Now</CtaButton>
          </div>
      </section>
    </article>
  );
}
