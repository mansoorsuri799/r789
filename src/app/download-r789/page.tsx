import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  APP_AGGREGATE_RATING,
  APP_DOWNLOAD_URL,
  APP_SCREENSHOTS,
  APP_VERSION,
  APP_FILE_SIZE,
  CORE_ROUTES,
} from '@/lib/appFacts';
import { SITE_ORIGIN, imageObjectLicensing } from '@/lib/schemaImageLicensing';
import CtaButton from '@/components/CtaButton';
import R789Logo from '@/components/R789Logo';

export const metadata: Metadata = {
  title: 'Download R789 APK Free for Android – Pakistan 2026',
  description:
    'Download R789 APK free for Android (6.5 MB, V1.0). Pakistan R789 game with JazzCash, EasyPaisa, and Bank. Min deposit PKR 100. Rated 4.8 by 49,900 players.',
  keywords: [
    'Download R789',
    'R789 APK download',
    'R789 Android',
    'R789 crash game Pakistan',
    'R789 game APK',
    'R789 latest version',
    'R789 game download',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: `${SITE_ORIGIN}${CORE_ROUTES.download}` },
  openGraph: {
    title: 'Download R789 APK Free for Android – Pakistan 2026',
    description:
      'Download R789 APK (6.5 MB) free. Pakistan R789 game. Deposit from PKR 100 via JazzCash, EasyPaisa, or Bank.',
    url: `${SITE_ORIGIN}${CORE_ROUTES.download}`,
    siteName: 'R789',
    locale: 'en_US',
    type: 'website',
    images: [{ url: `${SITE_ORIGIN}/feature/og-image.webp`, width: 1200, height: 630, alt: 'Download R789 APK – Pakistan' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Download R789 APK Free for Android – Pakistan 2026',
    description: 'Download R789 APK (6.5 MB) free. R789 game with JazzCash, EasyPaisa, and Bank. Rated 4.8 by 49,900 players.',
    images: [`${SITE_ORIGIN}/feature/twitter-card.webp`],
  },
};

function safeJson(obj: object) {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

export default function DownloadR789Page() {
  const schemaApp = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'R789',
    operatingSystem: 'Android 5.0+',
    applicationCategory: 'GameApplication',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'PKR', availability: 'https://schema.org/InStock' },
    aggregateRating: APP_AGGREGATE_RATING,
    downloadUrl: APP_DOWNLOAD_URL,
    softwareVersion: APP_VERSION,
    fileSize: APP_FILE_SIZE,
    datePublished: '2026-10-02',
    description:
      'R789 is a crash-style game for Android. Watch the multiplier climb and cash out before the plane disappears. Deposit from PKR 100 via JazzCash, EasyPaisa, or Bank.',
    screenshot: [...APP_SCREENSHOTS],
    image: `${SITE_ORIGIN}/r789.webp`,
    author: { '@type': 'Organization', name: 'R789', url: SITE_ORIGIN },
    inLanguage: ['en', 'ur'],
    countriesSupported: 'PK',
  };

  const schemaBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_ORIGIN },
      { '@type': 'ListItem', position: 2, name: 'Download R789', item: `${SITE_ORIGIN}${CORE_ROUTES.download}` },
    ],
  };

  const schemaHowTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Download and Install R789 APK on Android',
    description: 'Step-by-step guide to download the R789 APK and install it on an Android device.',
    totalTime: 'PT5M',
    step: [
      { '@type': 'HowToStep', name: 'Download the APK', text: 'Tap the DOWNLOAD NOW button on r-789game.com.pk. The R789 APK file (6.5 MB) will save to your Android Downloads folder.' },
      { '@type': 'HowToStep', name: 'Allow Unknown Sources', text: 'Open Settings → Security (or Privacy) and enable "Install from Unknown Sources" or "Install Unknown Apps" for your browser or file manager.' },
      { '@type': 'HowToStep', name: 'Locate and Tap the APK', text: 'Open your file manager or notification shade and tap the downloaded r789.apk file to launch the installer.' },
      { '@type': 'HowToStep', name: 'Complete Installation', text: 'Tap Install and wait a few seconds for the system to finish. The R789 icon will appear on your home screen.' },
      { '@type': 'HowToStep', name: 'Register and Deposit', text: 'Open R789, register with your mobile number, and deposit from PKR 100 via JazzCash, EasyPaisa, or Bank to start playing crash rounds.' },
    ],
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(schemaApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(schemaHowTo) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-4 md:px-8 max-w-7xl mx-auto pt-6 pb-2">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-400">
          <li><Link href={CORE_ROUTES.home} className="hover:text-accent transition-colors">Home</Link></li>
          <li aria-hidden="true" className="text-gray-600">›</li>
          <li className="text-accent font-medium">Download R789</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">Download </span>
            <span className="text-[#FFA500]">R789 APK</span>
            <span className="text-white"> Free</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
            R789 for Android – Pakistan 2026
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            <Link href={CORE_ROUTES.home} className="text-accent hover:underline font-semibold">R789</Link> is
            R789, where you stake chips, watch the multiplier climb, and cash out before the
            plane vanishes. At just {APP_FILE_SIZE}, it runs on Android 5.0+ without hogging storage.
          </p>
        </div>

        <div className="flex justify-center my-10">
          <CtaButton icon="download">DOWNLOAD R789 NOW</CtaButton>
        </div>

        <div className="flex justify-center mb-4">
          <span className="bg-[#0A1029] text-[#4ade80] px-6 py-2 rounded-full text-sm font-semibold">
            ⚡ Fast Download – {APP_FILE_SIZE} APK
          </span>
        </div>

        {/* Rating stars */}
        <div className="flex justify-center items-center gap-3 mt-4 mb-8">
          <span className="text-[#FFA500] text-2xl tracking-wider">★★★★★</span>
          <span className="text-white font-bold text-lg">4.8</span>
          <span className="text-gray-400 text-sm">(49,900 ratings)</span>
        </div>

        <div className="flex justify-center mb-12">
          <R789Logo
            variant="download"
            alt="R789 logo – Download APK for Android Pakistan"
            title="R789 – Download Official APK"
            priority
          />
        </div>
      </section>

      {/* Download Info Table */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download-info">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">R789 App Information</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800 max-w-3xl mx-auto">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
                {[
                  ['App Name', 'R789'],
                  ['Category', 'Online Game'],
                  ['Version', APP_VERSION],
                  ['Size', APP_FILE_SIZE],
                  ['Required OS', 'Android 5.0+'],
                  ['Price', 'Free'],
                  ['Min Deposit', 'PKR 100'],
                  ['Min Withdrawal', 'PKR 200'],
                  ['Payments', 'JazzCash, EasyPaisa, and Bank'],
                  ['Rating', '4.8 / 5 (49,900 users)'],
                ].map(([label, value], i) => (
                  <tr key={label} className={i % 2 === 0 ? 'bg-[#0a1029]/50' : 'bg-[#06091F]/50'}>
                    <td className="py-4 px-6 font-medium text-white">{label}</td>
                    <td className="py-4 px-6 text-white">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <CtaButton icon="download">DOWNLOAD NOW – FREE</CtaButton>
        </div>
      </section>

      {/* Install Steps */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="install-steps">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">
            How to Download &amp; Install R789 on Android
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              { color: '#FFA500', title: 'Step 1 — Tap Download', body: 'Hit the DOWNLOAD NOW button above. Your browser will save the R789 APK file (6.5 MB) directly to your Android Downloads folder. No account or sign-up needed to get the file.' },
              { color: '#4ade80', title: 'Step 2 — Allow Unknown Sources', body: 'Go to Settings → Security → Install Unknown Apps (or "Unknown Sources" on older Android). Toggle it on for your browser. This lets Android sideload apps not from the Play Store.' },
              { color: '#60a5fa', title: 'Step 3 — Open the APK', body: 'Swipe down your notification shade and tap the completed download, or open your file manager and navigate to Downloads. Tap the R789 APK file to start the installer.' },
              { color: '#f97316', title: 'Step 4 — Install', body: 'Tap Install on the Android install screen. The process takes under 10 seconds on most devices. Once complete you\'ll see the R789 icon on your home screen.' },
              { color: '#a855f7', title: 'Step 5 — Register &amp; Play', body: 'Open R789, register with your Pakistani mobile number, and top up from PKR 100 via JazzCash, EasyPaisa, or Bank. Then join a crash round, set your stake, and cash out before the plane flies away.' },
            ].map(({ color, title, body }) => (
              <div key={title} className="bg-[#0A1029] rounded-lg p-6 border-l-4" style={{ borderColor: color }}>
                <h3 className="text-xl font-bold mb-3" style={{ color }}>{title}</h3>
                <p className="text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gameplay image */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex justify-center">
          <Image
            src="/r789-game.webp"
            alt="R789 crash game live multiplier screen – watch the plane and cash out before it crashes"
            width={428}
            height={757}
            className="rounded-2xl shadow-2xl w-full max-w-sm"
            sizes="(max-width: 640px) 100vw, 428px"
          />
        </div>
      </section>

      {/* Why Download */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">Why Download R789?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '✈️', heading: 'Pure Crash Gameplay', text: 'One game mode done right: stake, watch the multiplier rise, cash out in time. No filler.' },
            { icon: '⚡', heading: 'Lightweight APK', text: `Only ${APP_FILE_SIZE} — installs in seconds and runs without lag on Android 5.0+.` },
            { icon: '💳', heading: 'PKR Wallets', text: 'JazzCash, EasyPaisa, and Bank deposits from PKR 100. Withdrawals from PKR 200 straight to your wallet.' },
            { icon: '🎁', heading: 'Welcome Bonus', text: 'New players receive a first-deposit bonus. Check the app for current offer details.' },
            { icon: '🔒', heading: 'Secure Transactions', text: 'Encrypted payment flow keeps your JazzCash, EasyPaisa, and Bank credentials safe.' },
            { icon: '📱', heading: 'Android-First', text: 'Designed for Android 5.0 and up. Play on PC via emulator — see our PC guide.' },
          ].map(({ icon, heading, text }) => (
            <div key={heading} className="bg-secondary px-8 py-8 rounded-lg text-center">
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">{heading}</h3>
              <p className="text-gray-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Is R789 free to download?',
                a: 'Yes. The R789 APK is 100% free to download. You only spend money when you choose to deposit into the app.',
              },
              {
                q: 'Which Android version does R789 need?',
                a: 'R789 requires Android 5.0 (Lollipop) or higher. Most smartphones sold in Pakistan since 2016 will run it without issue.',
              },
              {
                q: 'Why do I need to allow Unknown Sources?',
                a: 'R789 is distributed as an APK outside the Google Play Store. Android blocks third-party APKs by default — enabling Unknown Sources for your browser lets you install it safely.',
              },
              {
                q: 'What is the minimum deposit in R789?',
                a: 'The minimum deposit is PKR 100 via JazzCash, EasyPaisa, or Bank. See our deposit guide for full steps.',
              },
              {
                q: 'Can I play R789 on a PC?',
                a: 'There is no native Windows build, but you can use an Android emulator (BlueStacks, LD Player, Nox) to run the APK on a PC. See our R789 for PC guide.',
              },
            ].map(({ q, a }) => (
              <details key={q} className="group bg-[#0a1029]/50 rounded-xl">
                <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
                  {q}
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <div className="p-4 pt-0 text-gray-300">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="pt-6 pb-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={CORE_ROUTES.deposit} className="text-[#0ea5e9] hover:text-[#6366f1] font-medium transition-colors">
            How to Deposit Money →
          </Link>
          <Link href={CORE_ROUTES.withdraw} className="text-[#0ea5e9] hover:text-[#6366f1] font-medium transition-colors">
            How to Withdraw Money →
          </Link>
          <Link href={CORE_ROUTES.pc} className="text-[#0ea5e9] hover:text-[#6366f1] font-medium transition-colors">
            R789 for PC →
          </Link>
        </div>
      </section>
    </article>
  );
}
