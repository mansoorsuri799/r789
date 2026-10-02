import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_ORIGIN } from '@/lib/schemaImageLicensing';
import { BLOG_POSTS, CORE_ROUTES } from '@/lib/appFacts';
import BlogPostSchema from '@/components/BlogPostSchema';
import CtaButton from '@/components/CtaButton';

const POST = BLOG_POSTS[0];

export const metadata: Metadata = {
  title: `${POST.title} | R789 Pakistan`,
  description: POST.description,
  keywords: ['how to play R789', 'R789 crash game guide', 'cash out R789', 'R789 multiplier Pakistan', 'crash game strategy'],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: `${SITE_ORIGIN}${CORE_ROUTES.blog}/${POST.slug}` },
  openGraph: {
    title: `${POST.title} | R789`,
    description: POST.description,
    url: `${SITE_ORIGIN}${CORE_ROUTES.blog}/${POST.slug}`,
    siteName: 'R789',
    type: 'article',
    images: [{ url: `${SITE_ORIGIN}/r789-game.webp`, width: 856, height: 1514, alt: 'R789 crash multiplier live screen – cash out guide' }],
  },
};

export default function HowToPlayR789Page() {
  return (
    <article className="min-h-screen bg-primary">
      <BlogPostSchema
        title={POST.title}
        description={POST.description}
        slug={POST.slug}
        datePublished={POST.datePublished}
        image={`${SITE_ORIGIN}/r789-game.webp`}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-4 md:px-8 max-w-4xl mx-auto pt-6 pb-2">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-400">
          <li><Link href={CORE_ROUTES.home} className="hover:text-accent transition-colors">Home</Link></li>
          <li aria-hidden="true" className="text-gray-600">›</li>
          <li><Link href={CORE_ROUTES.blog} className="hover:text-accent transition-colors">Blog</Link></li>
          <li aria-hidden="true" className="text-gray-600">›</li>
          <li className="text-accent font-medium">How to Play R789</li>
        </ol>
      </nav>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        {/* Header */}
        <header className="mb-10">
          <div className="flex gap-3 mb-4 flex-wrap">
            <span className="bg-[#FFA500]/20 text-[#FFA500] text-xs font-bold px-3 py-1 rounded-full">{POST.category}</span>
            <span className="text-gray-400 text-sm">{POST.datePublished} · {POST.readTime} read</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">{POST.title}</h1>
          <p className="text-xl text-gray-300 leading-relaxed">{POST.description}</p>
        </header>

        {/* Gameplay image */}
        <div className="flex justify-center mb-10">
          <Image
            src="/r789-game.webp"
            alt="R789 crash game live multiplier screen – the plane climbs while a player decides when to cash out"
            width={428}
            height={757}
            className="rounded-2xl shadow-2xl w-full max-w-xs"
            priority
            sizes="(max-width: 640px) 100vw, 428px"
          />
        </div>

        {/* Intro */}
        <section className="bg-secondary rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">What Is the R789 Crash Game?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            <Link href={CORE_ROUTES.home} className="text-accent hover:underline font-semibold">R789</Link> is a
            R789 is available as a free Android APK for Pakistani players. Every round follows the same
            structure: a multiplier starts at 1× and climbs — sometimes to 2×, sometimes to 50× or beyond. At some
            unpredictable point the &ldquo;plane disappears&rdquo; (crash), and anyone who has not cashed out loses
            their stake.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The skill — and the gamble — lies entirely in your cash-out timing. Cash out early and you win a small,
            safe multiple. Hold longer and the reward grows, but so does the risk of losing everything when the round
            crashes.
          </p>
        </section>

        {/* Before you play */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Before You Play: Setup Checklist</h2>
          <div className="space-y-4">
            {[
              { icon: '📲', heading: 'Install R789', body: <>Download the APK from <a href={SITE_ORIGIN} className="text-accent hover:underline">r-789game.com.pk</a> and install it. See our <Link href={CORE_ROUTES.download} className="text-accent hover:underline">download guide</Link> for step-by-step instructions.</> },
              { icon: '📝', heading: 'Create an Account', body: 'Register with your Pakistani mobile number. Verify via SMS OTP.' },
              { icon: '💳', heading: 'Deposit Chips', body: <>Top up from PKR 100 via JazzCash, EasyPaisa, or Bank. Full instructions in our <Link href={CORE_ROUTES.deposit} className="text-accent hover:underline">deposit guide</Link>.</> },
              { icon: '⚙️', heading: 'Explore the Lobby', body: 'Open the main game screen. You will see the live crash multiplier display, chat, and recent round history.' },
            ].map(({ icon, heading, body }) => (
              <div key={heading} className="bg-secondary rounded-xl p-6 flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{heading}</h3>
                  <p className="text-gray-300">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How a round works */}
        <section className="bg-secondary rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-6">How a Crash Round Works – Step by Step</h2>
          <ol className="space-y-6 list-none">
            {[
              { n: 1, color: '#FFA500', heading: 'Betting Phase', body: 'Before the round starts there is a short window (usually 5–10 seconds) when you place your stake. Enter the amount of chips you want to risk and tap Bet. You can place up to two bets simultaneously at different amounts if the game version allows.' },
              { n: 2, color: '#4ade80', heading: 'Plane Takes Off', body: 'The round begins. A plane animation launches and the multiplier starts at 1×, climbing rapidly. At 1× you would get your stake back exactly. At 2× you double it. At 5× you receive five times your stake.' },
              { n: 3, color: '#60a5fa', heading: 'Cash Out Any Time', body: 'While the multiplier is climbing, tap Cash Out. You lock in the current multiplier and your winnings are credited immediately. This is the entire decision of the game — there is no other interaction.' },
              { n: 4, color: '#f97316', heading: 'Crash', body: 'At a random point the round crashes. Anyone who has not cashed out loses their stake for that round. The crash multiplier is shown, and a new betting window opens for the next round.' },
            ].map(({ n, color, heading, body }) => (
              <li key={n} className="bg-[#0A1029] rounded-xl p-6 border-l-4" style={{ borderColor: color }}>
                <h3 className="text-xl font-bold mb-3" style={{ color }}>Step {n}: {heading}</h3>
                <p className="text-gray-300 leading-relaxed">{body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Cash-out strategies */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Cash-Out Strategies (Bankroll-Safe Approach)</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            No strategy guarantees profit in a crash game — the crash point is determined by the server before the
            round starts. However, these approaches help Pakistani players manage their bankroll responsibly:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                heading: '🎯 Fixed Multiplier Target',
                body: 'Decide on a target (e.g., 1.5×) before each round. Cash out whenever the multiplier hits your target regardless of how fast it is climbing. Consistent, low-drama approach.',
                color: '#FFA500',
              },
              {
                heading: '📉 Low Stake, Moderate Target',
                body: 'Keep individual stakes small relative to your total balance (e.g., 2–5%). Aim for 1.5×–2×. This limits how fast one bad round drains your chips.',
                color: '#4ade80',
              },
              {
                heading: '⏱️ Time-Based Cash Out',
                body: 'Watch the round timer or animation speed. If the plane has been climbing for an unusually long time, the risk of imminent crash increases — but there is no mathematical guarantee.',
                color: '#60a5fa',
              },
              {
                heading: '❌ Avoid the Martingale Trap',
                body: 'Doubling your stake after each loss (Martingale) is popular but dangerous in crash games. A few consecutive crashes can wipe out a session quickly. It is not recommended.',
                color: '#f87171',
              },
            ].map(({ heading, body, color }) => (
              <div key={heading} className="bg-secondary rounded-xl p-6 border-t-4" style={{ borderColor: color }}>
                <h3 className="text-lg font-bold mb-3" style={{ color }}>{heading}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reading live data */}
        <section className="bg-secondary rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Reading the Live Multiplier &amp; History Panel</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            R789 displays recent crash multipliers in a history panel below the game screen. You can see the last
            10–20 rounds. Look for the range of multipliers rather than patterns — each round is independent.
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start"><span className="text-[#FFA500] mr-2 mt-1">•</span><span><strong className="text-white">Low history values (under 1.5×):</strong> Recent rounds crashed early. Keep stakes conservative.</span></li>
            <li className="flex items-start"><span className="text-[#FFA500] mr-2 mt-1">•</span><span><strong className="text-white">High recent values (5×+):</strong> Does not predict the next round — each is independent.</span></li>
            <li className="flex items-start"><span className="text-[#FFA500] mr-2 mt-1">•</span><span><strong className="text-white">Chat activity:</strong> Other players sometimes announce when they cash out — useful context, but not a strategy signal.</span></li>
          </ul>
        </section>

        {/* Responsible play */}
        <section className="mb-8">
          <div className="bg-red-900/20 border-l-4 border-red-500 rounded-r-xl p-6">
            <h2 className="text-xl font-bold text-red-400 mb-3">Responsible Play Reminder</h2>
            <p className="text-gray-300 leading-relaxed">
              R789 is a crash game involving real money. <strong className="text-white">No outcome is guaranteed.</strong>{' '}
              Set a hard session limit before you start (e.g., PKR 500) and stop when you hit it — whether winning or
              losing. Never borrow money to deposit. If gaming feels compulsive, step away and seek support.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: 'Can I cancel a bet after the round starts?', a: 'No. Once the betting window closes and the plane takes off, your stake is locked until you cash out or the round crashes.' },
              { q: 'What is the minimum bet per round?', a: 'Check the bet entry field when you open a round — the minimum stake is shown there and may vary by game version.' },
              { q: 'Can I use auto cash-out?', a: 'Some R789 versions offer an auto-cashout feature where you pre-set a target multiplier and the app cashes out automatically when reached. Check your app version.' },
              { q: 'Do crash rounds ever pay 100× or more?', a: 'Very high multipliers occur rarely but do happen. They do not happen on schedule. Do not stake large amounts chasing a high multiplier.' },
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
          <h2 className="text-xl font-bold text-white mb-4">Related Guides</h2>
          <ul className="space-y-2">
            <li><Link href={CORE_ROUTES.deposit} className="text-accent hover:underline">→ How to Deposit Money in R789 (from PKR 100)</Link></li>
            <li><Link href={CORE_ROUTES.withdraw} className="text-accent hover:underline">→ How to Withdraw Money from R789 (from PKR 200)</Link></li>
            <li><Link href={`${CORE_ROUTES.blog}/is-r789-safe-in-pakistan-2026`} className="text-accent hover:underline">→ Is R789 Safe in Pakistan? 2026 Honest Check</Link></li>
            <li><Link href={`${CORE_ROUTES.blog}/r789-bonuses-vip-rewards-explained`} className="text-accent hover:underline">→ R789 Bonuses & VIP Rewards Explained</Link></li>
          </ul>
        </section>

        {/* CTA */}
        <div className="text-center">
          <CtaButton icon="download">Download R789 &amp; Play Now</CtaButton>
        </div>
      </div>
    </article>
  );
}
