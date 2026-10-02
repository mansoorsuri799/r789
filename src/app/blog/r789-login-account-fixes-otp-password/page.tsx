import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_ORIGIN } from '@/lib/schemaImageLicensing';
import { BLOG_POSTS, CORE_ROUTES, SUPPORT_EMAIL } from '@/lib/appFacts';
import BlogPostSchema from '@/components/BlogPostSchema';
import CtaButton from '@/components/CtaButton';

const POST = BLOG_POSTS[3];

export const metadata: Metadata = {
  title: `${POST.title} | R789`,
  description: POST.description,
  keywords: ['R789 login fix', 'R789 OTP not received', 'R789 password reset', 'R789 account recovery', 'R789 login problems Pakistan'],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: `${SITE_ORIGIN}${CORE_ROUTES.blog}/${POST.slug}` },
  openGraph: {
    title: `${POST.title} | R789`,
    description: POST.description,
    url: `${SITE_ORIGIN}${CORE_ROUTES.blog}/${POST.slug}`,
    siteName: 'R789',
    type: 'article',
    images: [{ url: `${SITE_ORIGIN}/r789-profile.webp`, width: 800, height: 800, alt: 'R789 profile and account settings screen' }],
  },
};

export default function R789LoginAccountFixesPage() {
  return (
    <article className="min-h-screen bg-primary">
      <BlogPostSchema
        title={POST.title}
        description={POST.description}
        slug={POST.slug}
        datePublished={POST.datePublished}
        image={`${SITE_ORIGIN}/r789-profile.webp`}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-4 md:px-8 max-w-4xl mx-auto pt-6 pb-2">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-400">
          <li><Link href={CORE_ROUTES.home} className="hover:text-accent transition-colors">Home</Link></li>
          <li aria-hidden="true" className="text-gray-600">›</li>
          <li><Link href={CORE_ROUTES.blog} className="hover:text-accent transition-colors">Blog</Link></li>
          <li aria-hidden="true" className="text-gray-600">›</li>
          <li className="text-accent font-medium">Login &amp; Account Fixes</li>
        </ol>
      </nav>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">

        {/* Header */}
        <header className="mb-10">
          <div className="flex gap-3 mb-4 flex-wrap">
            <span className="bg-[#a855f7]/20 text-[#a855f7] text-xs font-bold px-3 py-1 rounded-full">{POST.category}</span>
            <span className="text-gray-400 text-sm">{POST.datePublished} · {POST.readTime} read</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">{POST.title}</h1>
          <p className="text-xl text-gray-300 leading-relaxed">{POST.description}</p>
        </header>

        {/* Profile image */}
        <div className="flex justify-center mb-10">
          <Image
            src="/r789-profile.webp"
            alt="R789 user profile screen showing account settings, phone binding, and security options"
            width={320}
            height={320}
            className="rounded-2xl shadow-xl object-cover w-[260px] h-auto md:w-[320px]"
          />
        </div>

        {/* Intro */}
        <section className="bg-secondary rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#a855f7] mb-4">Why Login Issues Happen</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Most R789 login problems fall into a few categories: OTP SMS not arriving on your number, a forgotten
            password with no recovery method bound, duplicate accounts created accidentally, or an account that
            has been flagged because of a mismatched wallet number. This guide addresses each one.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The fastest way to prevent all of these issues is to <strong className="text-white">bind both your
            phone number and email</strong> inside R789 immediately after registration — before your first
            deposit. This takes 2 minutes and eliminates most recovery headaches.
          </p>
        </section>

        {/* OTP fixes */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">OTP Not Received — Fix It Now</h2>
          <div className="space-y-4">
            {[
              {
                n: 1, color: '#a855f7',
                heading: 'Wait 60 Seconds and Retry',
                body: 'SMS OTPs can be delayed during peak hours or on congested Pakistani networks. Wait 60 seconds and tap Resend OTP. Do not tap resend multiple times — duplicate requests can cause all OTPs to fail for several minutes.',
              },
              {
                n: 2, color: '#4ade80',
                heading: 'Check Your Signal',
                body: 'R789 OTPs arrive via SMS, not data. Switch from mobile data to a Wi-Fi connection for the session if your mobile signal is weak — a Wi-Fi connection helps the data portion of the app while SMS still uses your cellular signal.',
              },
              {
                n: 3, color: '#60a5fa',
                heading: 'Check Spam or Blocked Messages',
                body: 'Some Android messaging apps filter unknown-number SMS as spam. Open your default SMS app, check the Spam or Blocked folder, and look for a message from R789 or a short code.',
              },
              {
                n: 4, color: '#FFA500',
                heading: 'Verify the Correct Number',
                body: 'Confirm the number displayed on the R789 OTP screen is exactly your registered Pakistani mobile number. A mistyped digit means the OTP went to the wrong SIM.',
              },
              {
                n: 5, color: '#f97316',
                heading: 'Contact Support',
                body: `If OTPs consistently fail to arrive on your verified number, email ${SUPPORT_EMAIL} with your registered mobile number and the approximate times you attempted. The support team can manually verify your account.`,
              },
            ].map(({ n, color, heading, body }) => (
              <div key={n} className="bg-secondary rounded-xl p-6 border-l-4" style={{ borderColor: color }}>
                <h3 className="text-lg font-bold mb-2" style={{ color }}>Fix {n}: {heading}</h3>
                <p className="text-gray-300 leading-relaxed text-sm">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Password reset */}
        <section className="bg-secondary rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#a855f7] mb-6">Forgotten Password — Reset Steps</h2>
          <ol className="space-y-4 list-none">
            {[
              { n: 1, body: 'Open R789 and tap Log In.' },
              { n: 2, body: 'Tap "Forgot Password" (usually below the password field).' },
              { n: 3, body: 'Choose your recovery method: phone OTP or email link, depending on what you have bound to the account.' },
              { n: 4, body: 'Enter the OTP received or click the link in your email.' },
              { n: 5, body: 'Create a new password. Use at least 8 characters combining letters and numbers — do not reuse your JazzCash, EasyPaisa, or Bank PIN.' },
              { n: 6, body: 'Log in with the new password.' },
            ].map(({ n, body }) => (
              <li key={n} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#0A1029] text-white rounded-full flex items-center justify-center text-sm font-bold">{n}</div>
                <p className="text-gray-300 leading-relaxed pt-1">{body}</p>
              </li>
            ))}
          </ol>
          <div className="bg-[#0A1029] rounded-xl p-4 mt-6">
            <p className="text-amber-400 text-sm">
              <strong>No recovery method bound?</strong> If you did not bind a phone number or email before being
              locked out, you will need to contact R789 support at {SUPPORT_EMAIL} for manual identity verification.
            </p>
          </div>
        </section>

        {/* Binding */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">How to Bind Your Phone &amp; Email (Do This Now)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary rounded-xl p-6 border-t-4 border-[#a855f7]">
              <h3 className="text-xl font-bold text-[#a855f7] mb-4">📱 Bind Phone Number</h3>
              <ol className="space-y-2 text-gray-300 text-sm list-decimal pl-4">
                <li>Open R789 → Tap your profile icon</li>
                <li>Go to Account Security or Settings</li>
                <li>Tap Bind Phone Number</li>
                <li>Enter your Pakistani mobile number</li>
                <li>Enter the OTP sent by SMS</li>
                <li>Confirm binding</li>
              </ol>
            </div>
            <div className="bg-secondary rounded-xl p-6 border-t-4 border-[#60a5fa]">
              <h3 className="text-xl font-bold text-[#60a5fa] mb-4">📧 Bind Email Address</h3>
              <ol className="space-y-2 text-gray-300 text-sm list-decimal pl-4">
                <li>Open R789 → Tap your profile icon</li>
                <li>Go to Account Security or Settings</li>
                <li>Tap Bind Email</li>
                <li>Enter a valid email address</li>
                <li>Check your inbox for a verification link</li>
                <li>Click the link to confirm</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Duplicate accounts */}
        <section className="bg-secondary rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#a855f7] mb-4">Duplicate Accounts — Why They Block Withdrawals</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Creating more than one R789 account on the same device or with the same mobile number violates the app&apos;s
            terms. Withdrawal requests from flagged accounts are often frozen. Common causes:
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2"><span className="text-[#f87171] font-bold">•</span><span>Registering a second account after forgetting the first one&apos;s credentials</span></li>
            <li className="flex items-start gap-2"><span className="text-[#f87171] font-bold">•</span><span>A family member registering on the same phone using a different number — device ID may flag both</span></li>
            <li className="flex items-start gap-2"><span className="text-[#f87171] font-bold">•</span><span>Using a VPN that assigns you the same IP as a flagged account</span></li>
          </ul>
          <div className="bg-[#0A1029] rounded-xl p-4 mt-6">
            <p className="text-gray-400 text-sm">
              <strong className="text-white">Resolution:</strong> Contact {SUPPORT_EMAIL} explaining the situation.
              Do not continue depositing into a second account if you suspect it conflicts with an existing one —
              both balances may be frozen during investigation.
            </p>
          </div>
        </section>

        {/* Security tips */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Account Security Best Practices</h2>
          <div className="bg-secondary rounded-2xl p-8">
            <ul className="space-y-4 text-gray-300">
              {[
                { icon: '🔐', tip: 'Use a unique password for R789 — not the same as your JazzCash, EasyPaisa, or Gmail password.' },
                { icon: '📲', tip: 'Enable any in-app 2FA or transaction PIN feature available in your R789 version.' },
                { icon: '🚫', tip: 'Never share your R789 login credentials with anyone, including people claiming to help you with deposits.' },
                { icon: '📵', tip: 'Log out of R789 if you share your phone with others. An open session allows anyone to see your balance.' },
                { icon: '🔄', tip: 'Change your password immediately if you suspect someone else has accessed your account.' },
              ].map(({ icon, tip }) => (
                <li key={tip} className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">{icon}</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: 'My OTP keeps saying "expired" — what should I do?', a: 'OTPs are valid for only 2–5 minutes. If the SMS arrives late and you enter it after expiry, tap Resend OTP and enter the new code immediately.' },
              { q: 'I changed my SIM — can I still log in?', a: 'If you bound an email to your account, use the email recovery method. Otherwise contact support with your old number and new number for verification.' },
              { q: 'My withdrawal is blocked — could it be a duplicate account issue?', a: 'Yes. If R789 detects multiple accounts on the same device or network, withdrawals may be frozen pending review. Email support with your account details.' },
              { q: 'Can I use a virtual number (non-SIM) to register?', a: 'Virtual or VOIP numbers typically fail OTP delivery in R789 because the system expects a Pakistani mobile carrier number. Use a physical SIM.' },
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
            <li><Link href={CORE_ROUTES.download} className="text-accent hover:underline">→ Download R789 APK (Official Link)</Link></li>
            <li><Link href={CORE_ROUTES.deposit} className="text-accent hover:underline">→ How to Deposit from PKR 100</Link></li>
            <li><Link href={CORE_ROUTES.withdraw} className="text-accent hover:underline">→ How to Withdraw from PKR 200</Link></li>
            <li><Link href={`${CORE_ROUTES.blog}/is-r789-safe-in-pakistan-2026`} className="text-accent hover:underline">→ Is R789 Safe in Pakistan? 2026 Check</Link></li>
          </ul>
        </section>

        <div className="text-center">
          <CtaButton icon="download">Download R789 &amp; Fix Account</CtaButton>
        </div>
      </div>
    </article>
  );
}
