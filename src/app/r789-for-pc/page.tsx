import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { imageObjectLicensing, SITE_ORIGIN } from '@/lib/schemaImageLicensing';
import { APP_VERSION, APP_FILE_SIZE, CORE_ROUTES } from '@/lib/appFacts';
import CtaButton from '@/components/CtaButton';

export const metadata: Metadata = {
  title: 'R789 for PC – Play Crash Game on Windows via Android Emulator 2026',
  description:
    'No native PC build for R789, but you can run the Android APK on Windows using BlueStacks, LD Player, or Nox. Step-by-step guide for Pakistan players.',
  keywords: [
    'R789 for PC',
    'R789 PC download',
    'R789 Windows emulator',
    'crash game PC Pakistan',
    'BlueStacks R789',
    'Android emulator crash game',
    'R789 on computer',
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: `${SITE_ORIGIN}${CORE_ROUTES.pc}` },
  openGraph: {
    title: 'R789 for PC – Play Crash Game on Windows via Android Emulator',
    description: 'Run R789 on Windows using BlueStacks, LD Player, or Nox Player. Full setup guide.',
    url: `${SITE_ORIGIN}${CORE_ROUTES.pc}`,
    siteName: 'R789',
    locale: 'en_US',
    type: 'website',
    images: [{ url: `${SITE_ORIGIN}/feature/og-image.webp`, width: 1200, height: 630, alt: 'R789 for PC – Crash Game on Windows' }],
  },
};

function safeJson(obj: object) {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

export default function R789ForPCPage() {
  const pageUrl = `${SITE_ORIGIN}${CORE_ROUTES.pc}`;

  const schemaTechArticle = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'R789 for PC – Play Crash Game on Windows via Android Emulator',
    description: 'Complete guide to running the R789 APK on a Windows PC using an Android emulator.',
    image: `${SITE_ORIGIN}/r789-game.webp`,
    author: { '@type': 'Organization', name: 'R789', url: SITE_ORIGIN },
    publisher: {
      '@type': 'Organization',
      name: 'R789',
      logo: { '@type': 'ImageObject', url: `${SITE_ORIGIN}/r789.webp`, ...imageObjectLicensing, creditText: 'R789 logo' },
    },
    datePublished: '2026-10-02',
    dateModified: '2026-10-02',
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    about: { '@type': 'SoftwareApplication', name: 'R789', operatingSystem: 'Android 5.0+', applicationCategory: 'GameApplication' },
    articleSection: 'Gaming',
    inLanguage: 'en-US',
  };

  const schemaBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_ORIGIN },
      { '@type': 'ListItem', position: 2, name: 'R789 for PC', item: pageUrl },
    ],
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(schemaTechArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(schemaBreadcrumb) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-4 md:px-8 max-w-7xl mx-auto pt-6 pb-2">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-400">
          <li><Link href={CORE_ROUTES.home} className="hover:text-accent transition-colors">Home</Link></li>
          <li aria-hidden="true" className="text-gray-600">›</li>
          <li className="text-accent font-medium">R789 for PC</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-[#FFA500]">R789 for PC</span>
            <br />
            <span className="text-white">Play Crash Game on Windows</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
            Android Emulator Guide – Pakistan 2026
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            <Link href={CORE_ROUTES.home} className="text-accent hover:underline font-semibold">R789</Link> is a
            native Android app — there is no official Windows or iOS build. However, Pakistani players
            regularly run the Android APK on a PC using emulators like BlueStacks, LD Player, or Nox Player,
            enjoying a larger screen and mouse control.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <Image
            src="/r789-game.webp"
            alt="R789 crash game multiplier screen as it would appear in an Android emulator on PC"
            title="R789 for PC – Play via Android Emulator"
            width={428}
            height={757}
            className="rounded-2xl shadow-2xl w-full max-w-xs md:max-w-sm"
            priority
            sizes="(max-width: 640px) 100vw, 428px"
          />
        </div>
      </section>

      {/* App info table */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">R789 App Details</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800 max-w-3xl mx-auto">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
                {[
                  ['App Name', 'R789'],
                  ['Category', 'Online Game'],
                  ['Version', APP_VERSION],
                  ['APK Size', APP_FILE_SIZE],
                  ['Native Platform', 'Android 5.0+'],
                  ['PC Support', 'Via Android Emulator (No Native Build)'],
                  ['Price', 'Free to Download'],
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
      </section>

      {/* What is R789 */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">What Is R789?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            R789 is a lightweight Android game built for Android. Each round, a plane takes off and a live
            multiplier climbs — 1×, 2×, 10× and beyond. You decide when to cash out. Wait too long and the plane
            disappears, taking your stake. Cash out in time and you lock in that multiplier as profit.
          </p>
          <p className="text-gray-300 leading-relaxed">
            There is no native Windows or macOS application. R789 is distributed as an Android APK and works
            only through an emulator on a desktop.
          </p>
        </div>
      </section>

      {/* PC Features */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Advantages of Playing R789 on PC</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { color: '#FFA500', icon: '🖥️', heading: 'Larger Screen', body: 'Watch the crash multiplier on a full monitor — easier to react and cash out at the right moment.' },
              { color: '#4ade80', icon: '⚡', heading: 'Stable Performance', body: 'PC hardware reduces the stuttering or lag that lower-end Android phones can cause.' },
              { color: '#60a5fa', icon: '🖱️', heading: 'Mouse Precision', body: 'Click the Cash Out button with a mouse for faster, more reliable timing than tapping a touchscreen.' },
              { color: '#f97316', icon: '🔋', heading: 'No Battery Drain', body: 'Run long gaming sessions without worrying about your phone battery.' },
            ].map(({ color, icon, heading, body }) => (
              <div key={heading} className="bg-[#0A1029] p-6 rounded-lg border-l-4" style={{ borderColor: color }}>
                <h3 className="text-xl font-bold mb-3" style={{ color }}>{icon} {heading}</h3>
                <p className="text-gray-300">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to run on PC */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">How to Run R789 on PC (Step-by-Step)</h2>
          <div className="space-y-4">
            {[
              { color: '#FFA500', n: 1, body: 'Download the R789 APK from the official site at r-789game.com.pk. Save the APK file on your PC.' },
              { color: '#4ade80', n: 2, body: 'Download and install an Android emulator on your Windows PC. BlueStacks is the most popular; LD Player is a lightweight alternative.' },
              { color: '#60a5fa', n: 3, body: 'Open the emulator. Look for an "Install APK" button (usually in the side toolbar or a file menu). Click it and select the R789 APK file you downloaded.' },
              { color: '#a855f7', n: 4, body: 'Wait for the installation to complete inside the emulator — usually 10–30 seconds. The R789 icon will appear in the emulator\'s app drawer.' },
              { color: '#f97316', n: 5, body: 'Launch R789 inside the emulator. Register or log in, deposit from PKR 100 via JazzCash, EasyPaisa, or Bank, and start playing crash rounds.' },
            ].map(({ color, n, body }) => (
              <div key={n} className="bg-[#0A1029] rounded-lg p-6 border-l-4" style={{ borderColor: color }}>
                <h3 className="text-lg font-bold text-white mb-2">Step {n}</h3>
                <p className="text-gray-300">{body}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <CtaButton icon="download">Download R789 APK</CtaButton>
          </div>
        </div>
      </section>

      {/* Emulators */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Recommended Android Emulators</h2>
          <div className="space-y-6">
            {[
              { name: '💎 BlueStacks', body: 'The most widely used emulator. High performance, beginner-friendly interface, and excellent compatibility with Android 5.0 APKs. Best for most Pakistani PCs.' },
              { name: '⚡ LD Player', body: 'Lightweight and fast. Ideal for older or low-RAM machines. Supports Android 9 and runs crash games without notable lag.' },
              { name: '🎯 Nox Player', body: 'Easy APK installation workflow. Good compatibility with Pakistani mobile wallet apps running concurrently for quick deposits.' },
            ].map(({ name, body }) => (
              <div key={name} className="bg-[#0A1029] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">{name}</h3>
                <p className="text-gray-300">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">PC System Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#FFA500] mb-4">Minimum</h3>
              <ul className="space-y-3 text-gray-300">
                {['Windows 7 or higher', 'Intel / AMD Dual-Core processor', '4 GB RAM', '5 GB free storage', 'Virtualization (VT-x) enabled in BIOS'].map((r) => (
                  <li key={r} className="flex items-start"><span className="text-[#FFA500] mr-2">•</span><span>{r}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#4ade80] mb-4">Recommended</h3>
              <ul className="space-y-3 text-gray-300">
                {['Windows 10 or 11', 'Intel Core i5 / Ryzen 5 or better', '8 GB RAM', 'SSD storage for fast load', 'Stable broadband internet'].map((r) => (
                  <li key={r} className="flex items-start"><span className="text-[#4ade80] mr-2">•</span><span>{r}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pros Cons */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Pros &amp; Cons of PC Play</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#4ade80]">Pros</h3>
              <div className="bg-[#0A1029] p-6 rounded-lg">
                <ul className="space-y-3 text-gray-300">
                  {['Bigger screen for crash rounds', 'Mouse click for faster cash-out', 'No phone battery concern', 'Multitasking alongside other apps'].map((p) => (
                    <li key={p} className="flex items-start"><span className="text-[#4ade80] mr-2">✓</span><span>{p}</span></li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#f87171]">Cons</h3>
              <div className="bg-[#0A1029] p-6 rounded-lg">
                <ul className="space-y-3 text-gray-300">
                  {['Requires emulator setup (extra step)', 'Emulator may not support all Android features', 'Not portable like a phone'].map((c) => (
                    <li key={c} className="flex items-start"><span className="text-[#f87171] mr-2">✗</span><span>{c}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'Is there a native Windows version of R789?', a: 'No. R789 is an Android-only app. To play on PC you must use an Android emulator.' },
              { q: 'Is using an emulator safe?', a: 'Yes, as long as you download emulators from their official websites (bluestacks.com, ldplayer.net, bignox.com) and the R789 APK from r-789game.com.pk.' },
              { q: 'Which emulator runs R789 best?', a: 'BlueStacks is the top recommendation for most PCs. If your machine has limited RAM (under 6 GB), try LD Player instead.' },
              { q: 'Can I use JazzCash on PC?', a: 'You can access JazzCash via the mobile browser inside the emulator, or simply approve the payment request on your phone while R789 runs on PC.' },
            ].map(({ q, a }) => (
              <details key={q} className="group bg-[#0a1029]/50 rounded-xl">
                <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
                  {q}
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6" /></svg>
                  </span>
                </summary>
                <div className="p-4 pt-0 text-gray-300">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#0ea5e9] to-[#6366f1] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Play on PC?</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Download the R789 APK, load it in your emulator, and join crash rounds on a big screen.
          </p>
          <CtaButton icon="download">Download R789 APK Now</CtaButton>
        </div>
      </section>

      <section className="pt-6 pb-4 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <Link href={CORE_ROUTES.home} className="text-[#0ea5e9] hover:text-[#6366f1] font-medium transition-colors">
          ← Back to Home
        </Link>
      </section>
    </article>
  );
}
