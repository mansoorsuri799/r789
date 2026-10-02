import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_ORIGIN } from '@/lib/schemaImageLicensing';
import { BLOG_POSTS, CORE_ROUTES, SUPPORT_EMAIL } from '@/lib/appFacts';
import BlogPostSchema from '@/components/BlogPostSchema';
import CtaButton from '@/components/CtaButton';
import R789Logo from '@/components/R789Logo';

const POST = BLOG_POSTS[1];

export const metadata: Metadata = {
  title: `${POST.title} | R789`,
  description: POST.description,
  keywords: ['is R789 safe Pakistan', 'R789 safe 2026', 'R789 sideload risk', 'crash game safety Pakistan', 'R789 wallet hygiene'],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: `${SITE_ORIGIN}${CORE_ROUTES.blog}/${POST.slug}` },
  openGraph: {
    title: `${POST.title} | R789`,
    description: POST.description,
    url: `${SITE_ORIGIN}${CORE_ROUTES.blog}/${POST.slug}`,
    siteName: 'R789',
    type: 'article',
    images: [{ url: `${SITE_ORIGIN}/r789.webp`, width: 512, height: 512, alt: 'R789 logo – safety review Pakistan 2026' }],
  },
};

export default function IsR789SafePakistanPage() {
  return (
    <article className="min-h-screen bg-primary">
      <BlogPostSchema
        title={POST.title}
        description={POST.description}
        slug={POST.slug}
        datePublished={POST.datePublished}
        image={`${SITE_ORIGIN}/r789.webp`}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-4 md:px-8 max-w-4xl mx-auto pt-6 pb-2">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-400">
          <li><Link href={CORE_ROUTES.home} className="hover:text-accent transition-colors">Home</Link></li>
          <li aria-hidden="true" className="text-gray-600">›</li>
          <li><Link href={CORE_ROUTES.blog} className="hover:text-accent transition-colors">Blog</Link></li>
          <li aria-hidden="true" className="text-gray-600">›</li>
          <li className="text-accent font-medium">Is R789 Safe in Pakistan?</li>
        </ol>
      </nav>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">

        {/* Header */}
        <header className="mb-10">
          <div className="flex gap-3 mb-4 flex-wrap">
            <span className="bg-[#4ade80]/20 text-[#4ade80] text-xs font-bold px-3 py-1 rounded-full">{POST.category}</span>
            <span className="text-gray-400 text-sm">{POST.datePublished} · {POST.readTime} read</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">{POST.title}</h1>
          <p className="text-xl text-gray-300 leading-relaxed">{POST.description}</p>
        </header>

        {/* Logo */}
        <div className="flex justify-center mb-10">
          <R789Logo
            variant="blog"
            alt="R789 logo – evaluating safety for Pakistani crash game players in 2026"
          />
        </div>

        {/* Intro */}
        <section className="bg-secondary rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#4ade80] mb-4">What Are We Evaluating?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            &ldquo;Is R789 safe?&rdquo; is a fair question for any Pakistani player considering depositing real money
            via JazzCash, EasyPaisa, or Bank into an app downloaded outside the Google Play Store. This article looks at
            four areas: APK download safety, in-app financial safety, wallet hygiene, and what you should
            independently verify before depositing.
          </p>
          <div className="bg-red-900/20 border-l-4 border-red-500 rounded-r-lg p-4">
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Honest caveat:</strong> This site is the official information site for R789.
              We describe the app accurately, but you should apply your own judgment to any real-money app.
            </p>
          </div>
        </section>

        {/* APK safety */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">1. APK Download Safety (Sideloading Risks)</h2>
          <div className="space-y-4">
            <div className="bg-secondary rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#4ade80] mb-3">✅ What Makes It Lower-Risk</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Download <strong className="text-white">only</strong> from the official URL at <a href={SITE_ORIGIN} className="text-accent hover:underline">r-789game.com.pk</a></li>
                <li>• The APK is small (6.5 MB) — malicious APKs are typically much larger with hidden payloads</li>
                <li>• After installing, scan it with Google Play Protect (Settings → Security → Play Protect → Scan) before opening</li>
              </ul>
            </div>
            <div className="bg-secondary rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#f87171] mb-3">⚠️ What You Should Watch Out For</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• APKs shared via WhatsApp groups, Telegram, or random websites may be modified (trojanised)</li>
                <li>• Always disable &ldquo;Unknown Sources&rdquo; again after installation to prevent other APKs auto-installing</li>
                <li>• R789 does <strong className="text-white">not</strong> have a Google Play Store listing — anyone claiming to link to a Play Store version is sharing a fake</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Financial safety */}
        <section className="bg-secondary rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#4ade80] mb-6">2. Financial Safety — Before You Deposit</h2>
          <div className="space-y-4">
            {[
              { heading: 'Minimum Deposit is PKR 100', body: `You do not need to deposit large amounts to try the game. Start with ${CORE_ROUTES.deposit ? 'PKR 100' : 'PKR 100'} to test whether deposits and withdrawals work smoothly for you.` },
              { heading: 'Minimum Withdrawal is PKR 200', body: 'Test a small withdrawal before building up a large in-app balance. Verify that funds reach your JazzCash, EasyPaisa, or Bank wallet before depositing more.' },
              { heading: 'Understand What You Are Depositing Into', body: 'R789 is a crash game. In-app chips are used to place bets on a live multiplier. There is no guarantee of getting deposited money back. Treat deposits as entertainment spending.' },
            ].map(({ heading, body }) => (
              <div key={heading} className="bg-[#0A1029] rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">{heading}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Wallet hygiene */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">3. JazzCash, EasyPaisa, and Bank Wallet Hygiene</h2>
          <div className="bg-secondary rounded-2xl p-8">
            <ul className="space-y-4 text-gray-300">
              {[
                { icon: '🔒', tip: 'Never share your MPIN or wallet PIN with anyone, including people claiming to be R789 support.' },
                { icon: '📱', tip: 'Use your own registered JazzCash, EasyPaisa, or Bank number — not a shared or borrowed account. Mismatched names can freeze your withdrawal.' },
                { icon: '📋', tip: 'Keep a record of your transaction reference numbers from JazzCash/EasyPaisa. You will need them if a deposit is delayed.' },
                { icon: '⚠️', tip: 'R789 will never call or WhatsApp you asking for your MPIN. Treat any such contact as a scam.' },
                { icon: '💰', tip: 'Be aware of JazzCash, EasyPaisa, and Bank daily transaction limits. Large withdrawals may be split across days.' },
              ].map(({ icon, tip }) => (
                <li key={tip} className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">{icon}</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What to verify */}
        <section className="bg-secondary rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#4ade80] mb-6">4. What to Independently Verify</h2>
          <p className="text-gray-300 mb-6">
            r-789game.com.pk is the official information site for R789 but cannot make legal guarantees on behalf of
            the game operator. Here is what you should verify yourself before depositing significant funds:
          </p>
          <div className="space-y-4">
            {[
              { heading: 'Local Legal Status', body: 'Online crash games fall into a grey area in Pakistan. Check whether playing cash-based games is legally permitted in your city or province before depositing.' },
              { heading: 'Test Withdrawal First', body: 'Deposit the minimum (PKR 100), play a few rounds, then request a withdrawal of PKR 200 or more. Confirm it arrives in your wallet before trusting the platform with larger amounts.' },
              { heading: 'Contact Support', body: `Email ${SUPPORT_EMAIL} before depositing if you have specific questions about account verification or withdrawal limits. A responsive support team is a positive signal.` },
            ].map(({ heading, body }) => (
              <div key={heading} className="bg-[#0A1029] rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">→ {heading}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Summary verdict */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Summary: Is R789 Safe?</h2>
          <div className="bg-[#0A1029] rounded-2xl p-8 border border-[#4ade80]/40">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-[#4ade80] mb-3">Lower-Risk If You:</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>✅ Download from r-789game.com.pk only</li>
                  <li>✅ Test with PKR 100 deposit first</li>
                  <li>✅ Withdraw small amount before depositing more</li>
                  <li>✅ Use your own JazzCash/EasyPaisa account</li>
                  <li>✅ Set a strict deposit limit per session</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#f87171] mb-3">Higher Risk If You:</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>❌ Download APK from unofficial sources</li>
                  <li>❌ Share your wallet PIN with anyone</li>
                  <li>❌ Deposit money you cannot afford to lose</li>
                  <li>❌ Chase losses with larger deposits</li>
                  <li>❌ Ignore local legal restrictions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: 'Does R789 have a Google Play Store listing?', a: 'No. R789 is distributed as an APK sideload from r-789game.com.pk. There is no legitimate Play Store version.' },
              { q: 'Can R789 see my JazzCash MPIN?', a: 'No. Your MPIN is entered in the JazzCash, EasyPaisa, or Bank app — R789 never handles your PIN directly. Only approve payment requests you initiated yourself.' },
              { q: 'What should I do if my withdrawal does not arrive?', a: `Wait 24 hours for network processing. If funds still have not arrived, email ${SUPPORT_EMAIL} with your deposit/withdrawal reference ID from JazzCash, EasyPaisa, or Bank.` },
              { q: 'Is R789 legal in Pakistan?', a: 'The legal status of online crash games in Pakistan is complex and varies by interpretation. We recommend consulting local regulations before depositing. This site does not provide legal advice.' },
            ].map(({ q, a }) => (
              <details key={q} className="group bg-secondary rounded-xl">
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
        </section>

        {/* Internal links */}
        <section className="bg-secondary rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Related Reading</h2>
          <ul className="space-y-2">
            <li><Link href={CORE_ROUTES.download} className="text-accent hover:underline">→ Download R789 APK (Official Link)</Link></li>
            <li><Link href={CORE_ROUTES.deposit} className="text-accent hover:underline">→ How to Deposit from PKR 100</Link></li>
            <li><Link href={`${CORE_ROUTES.blog}/how-to-play-r789-crash-cash-out-guide`} className="text-accent hover:underline">→ How to Play R789 – Crash Cash-Out Guide</Link></li>
            <li><Link href={`${CORE_ROUTES.blog}/r789-login-account-fixes-otp-password`} className="text-accent hover:underline">→ R789 Login & Account Fixes (OTP, Password)</Link></li>
          </ul>
        </section>

        <div className="text-center">
          <CtaButton icon="download">Download R789 APK</CtaButton>
        </div>
      </div>
    </article>
  );
}
