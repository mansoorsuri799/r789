import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_ORIGIN } from '@/lib/schemaImageLicensing';
import { BLOG_POSTS, CORE_ROUTES } from '@/lib/appFacts';
import BlogPostSchema from '@/components/BlogPostSchema';
import CtaButton from '@/components/CtaButton';

const POST = BLOG_POSTS[2];

export const metadata: Metadata = {
  title: `${POST.title} | R789`,
  description: POST.description,
  keywords: ['R789 bonus', 'R789 VIP rewards', 'R789 welcome bonus Pakistan', 'R789 referral reward', 'R789 recharge rebate'],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: `${SITE_ORIGIN}${CORE_ROUTES.blog}/${POST.slug}` },
  openGraph: {
    title: `${POST.title} | R789`,
    description: POST.description,
    url: `${SITE_ORIGIN}${CORE_ROUTES.blog}/${POST.slug}`,
    siteName: 'R789',
    type: 'article',
    images: [{ url: `${SITE_ORIGIN}/r789-invite-friends.webp`, width: 800, height: 800, alt: 'R789 bonus and VIP rewards – invite friends screen' }],
  },
};

export default function R789BonusesVipRewardsPage() {
  return (
    <article className="min-h-screen bg-primary">
      <BlogPostSchema
        title={POST.title}
        description={POST.description}
        slug={POST.slug}
        datePublished={POST.datePublished}
        image={`${SITE_ORIGIN}/r789-invite-friends.webp`}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-4 md:px-8 max-w-4xl mx-auto pt-6 pb-2">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-400">
          <li><Link href={CORE_ROUTES.home} className="hover:text-accent transition-colors">Home</Link></li>
          <li aria-hidden="true" className="text-gray-600">›</li>
          <li><Link href={CORE_ROUTES.blog} className="hover:text-accent transition-colors">Blog</Link></li>
          <li aria-hidden="true" className="text-gray-600">›</li>
          <li className="text-accent font-medium">Bonuses &amp; VIP Rewards</li>
        </ol>
      </nav>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">

        {/* Header */}
        <header className="mb-10">
          <div className="flex gap-3 mb-4 flex-wrap">
            <span className="bg-[#60a5fa]/20 text-[#60a5fa] text-xs font-bold px-3 py-1 rounded-full">{POST.category}</span>
            <span className="text-gray-400 text-sm">{POST.datePublished} · {POST.readTime} read</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">{POST.title}</h1>
          <p className="text-xl text-gray-300 leading-relaxed">{POST.description}</p>
        </header>

        {/* Image */}
        <div className="flex justify-center mb-10">
          <Image
            src="/r789-invite-friends.webp"
            alt="R789 invite friends and referral bonus screen – earn rewards for bringing new players"
            width={320}
            height={320}
            className="rounded-2xl shadow-xl object-cover w-[260px] h-auto md:w-[320px]"
          />
        </div>

        {/* Intro */}
        <section className="bg-secondary rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#60a5fa] mb-4">Why Bonuses Matter in Crash Games</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Bonuses in R789 extend your playtime and give you more rounds to practice cash-out timing without
            spending proportionally more of your own PKR. They do <strong className="text-white">not</strong> change
            the crash game mechanics or guarantee wins. Understanding what each bonus is and what conditions are
            attached helps you decide whether to claim it.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Bonus structures can change with app updates. Always read the terms shown inside the R789 app when
            claiming any offer — what is described here reflects the general bonus types at launch (V1.0, October 2026).
          </p>
        </section>

        {/* Welcome bonus */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Welcome / First-Deposit Bonus</h2>
          <div className="bg-secondary rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl flex-shrink-0">🎁</span>
              <div>
                <h3 className="text-xl font-bold text-[#60a5fa] mb-3">What It Is</h3>
                <p className="text-gray-300 leading-relaxed">
                  New players who deposit for the first time typically receive a bonus added to their chip balance.
                  The specific percentage or amount is displayed in the app&apos;s promotion section at the time you
                  make your first deposit.
                </p>
              </div>
            </div>
            <div className="bg-[#0A1029] rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-3">Before You Claim — Key Questions to Ask</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• <strong className="text-white">Wagering requirement:</strong> How many times must you play through the bonus before withdrawing? (e.g., 10× means a PKR 200 bonus requires PKR 2,000 in total stakes)</li>
                <li>• <strong className="text-white">Game restrictions:</strong> Does the bonus apply only to crash rounds or other game modes?</li>
                <li>• <strong className="text-white">Expiry:</strong> Bonuses may expire if not used within a set number of days</li>
                <li>• <strong className="text-white">Minimum deposit to qualify:</strong> Check if a minimum deposit amount is required to unlock the bonus</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Daily login bonus */}
        <section className="bg-secondary rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#60a5fa] mb-6">Daily Login Gifts</h2>
          <div className="flex items-start gap-4">
            <span className="text-4xl flex-shrink-0">📅</span>
            <div>
              <p className="text-gray-300 leading-relaxed mb-4">
                R789 rewards players who log in consecutively. Opening the app daily — even without playing — builds
                a login streak that unlocks increasingly valuable gifts: bonus chips, free round tickets, or
                recharge credits.
              </p>
              <div className="bg-[#0A1029] rounded-xl p-4">
                <p className="text-gray-400 text-sm">
                  <strong className="text-white">Tip:</strong> The streak typically resets at midnight Pakistan Standard
                  Time (UTC+5). Log in before midnight to maintain it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recharge rebate */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Recharge Rebate</h2>
          <div className="bg-secondary rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-4xl flex-shrink-0">💰</span>
              <div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Active depositing players sometimes receive a percentage cashback on their recharge amount. For
                  example, a 5% rebate on a PKR 1,000 deposit adds PKR 50 in bonus chips.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  For the latest recharge offers, check the promotions tab inside R789 after{' '}
                  <Link href={CORE_ROUTES.download} className="text-accent hover:underline">downloading and installing</Link>{' '}
                  the app. Promotions are tied to your deposit activity and may change weekly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Referral */}
        <section className="bg-secondary rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#60a5fa] mb-6">Referral Program — Invite Friends</h2>
          <div className="flex items-start gap-4 mb-6">
            <span className="text-4xl flex-shrink-0">👥</span>
            <p className="text-gray-300 leading-relaxed">
              R789&apos;s referral system rewards you when a friend you invited downloads the app using your unique
              referral code, registers, and makes a qualifying deposit. Rewards may be a one-time bonus chip credit
              or an ongoing commission percentage on your referral&apos;s activity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0A1029] rounded-xl p-5">
              <h3 className="text-lg font-bold text-white mb-3">How to Share Your Code</h3>
              <ol className="space-y-1 text-gray-300 text-sm list-decimal pl-4">
                <li>Open R789 → tap your profile icon</li>
                <li>Find the Referral or Invite Friends section</li>
                <li>Copy your unique code or share link</li>
                <li>Send to friends via WhatsApp or SMS</li>
              </ol>
            </div>
            <div className="bg-[#0A1029] rounded-xl p-5">
              <h3 className="text-lg font-bold text-white mb-3">What Your Friend Must Do</h3>
              <ol className="space-y-1 text-gray-300 text-sm list-decimal pl-4">
                <li>Download R789 from r-789game.com.pk</li>
                <li>Register using your referral code</li>
                <li>Make a qualifying deposit</li>
                <li>Both of you receive the referral reward</li>
              </ol>
            </div>
          </div>
        </section>

        {/* VIP */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">VIP &amp; Loyalty Levels</h2>
          <div className="bg-secondary rounded-2xl p-8">
            <p className="text-gray-300 leading-relaxed mb-6">
              R789 operates a tiered VIP system. As your cumulative deposit or playtime grows, your account progresses
              through VIP levels. Higher levels typically unlock:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { level: 'VIP 1–3', perks: 'Higher daily withdrawal limits, basic weekly bonus' },
                { level: 'VIP 4–6', perks: 'Priority support, increased recharge rebate percentage' },
                { level: 'VIP 7+', perks: 'Dedicated account manager, exclusive promotions, top withdrawal speed' },
              ].map(({ level, perks }) => (
                <div key={level} className="bg-[#0A1029] rounded-xl p-5 text-center">
                  <h3 className="text-lg font-bold text-[#60a5fa] mb-2">{level}</h3>
                  <p className="text-gray-300 text-sm">{perks}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-4">
              VIP thresholds and exact perks are shown inside the app. Check the VIP / Reward section after logging in.
            </p>
          </div>
        </section>

        {/* Wagering rules */}
        <section className="bg-secondary rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#60a5fa] mb-4">Reading Wagering Rules — Do Not Skip This</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Every bonus comes with a wagering requirement. If you claim a PKR 200 bonus with a 10× wagering
            requirement, you must stake a total of PKR 2,000 across crash rounds before you can withdraw that bonus
            as real money. Here is a quick guide to interpreting wagering terms:
          </p>
          <div className="space-y-3">
            {[
              { term: 'Wagering: 10×', meaning: 'Stake 10 times the bonus amount in total crash rounds' },
              { term: 'Playthrough: 20× deposit+bonus', meaning: 'Stake 20 times the sum of your deposit and bonus' },
              { term: 'Validity: 7 days', meaning: 'You must complete wagering within 7 days or the bonus expires' },
              { term: 'Max bet: PKR 500', meaning: 'Individual stakes above this amount do not count toward wagering' },
            ].map(({ term, meaning }) => (
              <div key={term} className="bg-[#0A1029] rounded-xl p-4 flex flex-col md:flex-row md:items-center gap-2">
                <span className="text-white font-bold text-sm min-w-[200px]">{term}</span>
                <span className="text-gray-300 text-sm">{meaning}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Responsible note */}
        <section className="mb-8">
          <div className="bg-amber-900/20 border-l-4 border-amber-500 rounded-r-xl p-6">
            <h2 className="text-xl font-bold text-amber-400 mb-3">Bonus ≠ Profit Guarantee</h2>
            <p className="text-gray-300 leading-relaxed">
              Bonuses increase your chip balance but do not guarantee wins. Crash rounds are still governed by the
              game server, and losses can exceed bonus amounts. Never deposit additional funds primarily to chase or
              unlock a bonus.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: 'Can I withdraw a bonus immediately after receiving it?', a: 'No. All bonuses have wagering requirements that must be completed before the bonus amount can be converted to withdrawable funds.' },
              { q: 'Do bonuses expire?', a: 'Yes. Each bonus has an expiry period stated in the R789 promotion details. Uncompleted wagering after expiry means the bonus is forfeited.' },
              { q: 'How do I check my current VIP level?', a: 'Open R789 → tap your profile icon → find the VIP or Loyalty section. Your current level, progress bar, and next-level requirements will be shown.' },
              { q: 'Can I refer someone who already has an R789 account?', a: 'No. The referral reward is only triggered when a new user registers using your referral code for the first time.' },
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
            <li><Link href={CORE_ROUTES.deposit} className="text-accent hover:underline">→ How to Deposit Money in R789 (JazzCash, EasyPaisa, and Bank)</Link></li>
            <li><Link href={CORE_ROUTES.withdraw} className="text-accent hover:underline">→ How to Withdraw Winnings from R789</Link></li>
            <li><Link href={`${CORE_ROUTES.blog}/how-to-play-r789-crash-cash-out-guide`} className="text-accent hover:underline">→ How to Play R789 – Crash Cash-Out Guide</Link></li>
            <li><Link href={`${CORE_ROUTES.blog}/r789-login-account-fixes-otp-password`} className="text-accent hover:underline">→ R789 Login & Account Fixes</Link></li>
          </ul>
        </section>

        <div className="text-center">
          <CtaButton icon="download">Download R789 &amp; Claim Bonus</CtaButton>
        </div>
      </div>
    </article>
  );
}
