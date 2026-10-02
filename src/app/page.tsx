import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { imageObjectLicensing, SITE_ORIGIN } from "@/lib/schemaImageLicensing";
import {
  APP_AGGREGATE_RATING,
  APP_DOWNLOAD_URL,
  APP_SCREENSHOTS,
  APP_VERSION,
  APP_FILE_SIZE,
  APP_MIN_DEPOSIT,
  APP_MIN_WITHDRAW,
  SUPPORT_EMAIL,
  CORE_ROUTES,
} from "@/lib/appFacts";
import CtaButton from "@/components/CtaButton";
import R789Logo from "@/components/R789Logo";

export const metadata: Metadata = {
  title: "R789 APK Download Pakistan – Free Android Game 2026",
  description:
    "R789 is Pakistan's trusted new gaming platform for 2026. Download the 6.5 MB Android APK — JazzCash, EasyPaisa, and Bank from PKR 100, withdraw from PKR 200. No fixed earnings promised.",
  keywords: [
    "R789",
    "R789 APK",
    "R789 download",
    "R789 Pakistan",
    "R789 crash game",
    "R789 game",
    "download R789 APK",
    "R789 JazzCash",
    "R789 EasyPaisa",
    "R789 Bank",
  ],
  openGraph: {
    title: "R789 APK Download Pakistan – Free Android Game 2026",
    description:
      "Lightweight Android crash game for Pakistan. Stake, watch the plane climb, cash out. JazzCash, EasyPaisa, and Bank from PKR 100.",
    images: [
      {
        url: `${SITE_ORIGIN}/r789.webp`,
        width: 512,
        height: 512,
        alt: "R789 – Official R789 app icon for Pakistan",
      },
      {
        url: `${SITE_ORIGIN}/feature/og-image.webp`,
        width: 512,
        height: 512,
        alt: "R789 official app icon",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "R789 APK Download Pakistan – Free Android Game 2026",
    description:
      "R789 APK for Android in Pakistan. 6.5 MB · Free · JazzCash, EasyPaisa, and Bank.",
    images: [`${SITE_ORIGIN}/r789.webp`, `${SITE_ORIGIN}/feature/og-image.webp`],
  },
  alternates: {
    canonical: SITE_ORIGIN,
  },
};

const screenshots = [
  {
    src: "/r789-game.webp",
    alt: "R789 crash game screen on mobile",
    caption: "Crash Gameplay",
    w: 856,
    h: 1514,
  },
  {
    src: "/r789-invite-friends.webp",
    alt: "R789 lucky spin and invite screen on mobile",
    caption: "Lucky Spin",
    w: 860,
    h: 1528,
  },
  {
    src: "/r789-deposit-money.webp",
    alt: "R789 bonuses and deposit screen on mobile",
    caption: "Bonuses",
    w: 854,
    h: 1522,
  },
  {
    src: "/withdraw-amount-r789.webp",
    alt: "R789 rewards and withdraw amount screen on mobile",
    caption: "Rewards",
    w: 856,
    h: 1520,
  },
  {
    src: "/r789-profile.webp",
    alt: "R789 account screen on mobile",
    caption: "Account",
    w: 858,
    h: 1524,
  },
  {
    src: "/r789-withdraw-money.webp",
    alt: "R789 Pakistan wallet screen on mobile",
    caption: "Pakistan Wallets",
    w: 854,
    h: 1524,
  },
] as const;

const faqs = [
  {
    q: "What is R789?",
    a: "R789 is a crash-style Android game where a plane takes off and a multiplier rises in real time. You stake PKR, then cash out before the plane disappears. Pakistani players use JazzCash, EasyPaisa, and Bank for deposits from PKR 100 and withdrawals from PKR 200.",
  },
  {
    q: "How do I download the R789 APK?",
    a: "Open the official download guide on r-789game.com.pk, tap DOWNLOAD NOW, allow install unknown apps for your browser, then install the 6.5 MB APK and launch R789.",
  },
  {
    q: "Is R789 free to install?",
    a: "Yes. The R789 APK is free to download and install. Deposits are optional and start from PKR 100 when you fund a wallet for crash rounds.",
  },
  {
    q: "What is the minimum deposit and withdrawal?",
    a: "Funding starts from PKR 100. Cash-outs start from PKR 200 via JazzCash, EasyPaisa, or Bank using your own wallet.",
  },
  {
    q: "How does a crash round work?",
    a: "Enter a stake, confirm the bet, watch the multiplier climb from 1.00x, and tap cash out while the plane is still flying. If the crash happens first, that round stake is lost. There is no guaranteed multiplier.",
  },
  {
    q: "Can I earn guaranteed money on R789?",
    a: "No. R789 does not promise fixed earnings. Crash outcomes vary. Treat bonuses as optional extras and only stake money you can afford to lose.",
  },
  {
    q: "Which payment methods does R789 support?",
    a: "R789 supports JazzCash, EasyPaisa, and Bank for Pakistan. Use only your own wallet or bank account and match the name on your game profile when asked.",
  },
  {
    q: "How do I fix R789 login or OTP problems?",
    a: "Wait 60 seconds, check blocked SMS, confirm the number, then request OTP again. Bind email when available. Follow our login & OTP fixes guide before creating a second account.",
  },
] as const;

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}/#website`,
        url: `${SITE_ORIGIN}/`,
        name: "R789",
        description:
          "Pakistan's trusted R789 gaming platform with JazzCash, EasyPaisa, and Bank",
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_ORIGIN}/#webpage`,
        url: `${SITE_ORIGIN}/`,
        name: "R789 APK Download Pakistan – Free Android Game 2026",
        description:
          "R789 is a lightweight Android crash game for Pakistan. Stake, watch the plane climb, cash out. JazzCash, EasyPaisa, and Bank from PKR 100.",
        isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [
            "#what-is-r789",
            "#features",
            "#how-crash-works",
            "#bonuses",
            "#download",
            "#register-login",
            "#deposit-withdraw",
            "#safety",
            "#faq",
          ],
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_ORIGIN}/r789.webp`,
          width: 512,
          height: 512,
          name: "R789",
          description: "R789 – Official R789 app icon for Pakistan",
          ...imageObjectLicensing,
        },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_ORIGIN}/#organization`,
        name: "R789",
        url: `${SITE_ORIGIN}/`,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_ORIGIN}/r789.webp`,
          width: 512,
          height: 512,
          ...imageObjectLicensing,
          creditText: "R789 logo",
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: SUPPORT_EMAIL,
          contactType: "Customer Support",
          areaServed: "PK",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "R789",
        operatingSystem: "Android 5.0+",
        applicationCategory: "GameApplication",
        image: `${SITE_ORIGIN}/r789.webp`,
        logo: `${SITE_ORIGIN}/r789.webp`,
        aggregateRating: APP_AGGREGATE_RATING,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "PKR",
        },
        downloadUrl: APP_DOWNLOAD_URL,
        softwareVersion: APP_VERSION,
        fileSize: APP_FILE_SIZE,
        description:
          "R789 is a lightweight Android game for Pakistan. Players stake, watch a live multiplier climb, and cash out before the plane vanishes. Supports JazzCash, EasyPaisa, and Bank from PKR 100.",
        screenshot: [...APP_SCREENSHOTS],
        author: {
          "@type": "Organization",
          name: "R789",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
      {
        "@type": "HowTo",
        name: "How to download and install R789 on Android",
        description: "Install the official R789 APK safely on Android 5.0+",
        totalTime: "PT5M",
        step: [
          {
            "@type": "HowToStep",
            name: "Open the download guide",
            text: "Open the download guide on your phone browser.",
          },
          {
            "@type": "HowToStep",
            name: "Download the APK",
            text: "Tap DOWNLOAD NOW and wait for the 6.5 MB file to finish.",
          },
          {
            "@type": "HowToStep",
            name: "Allow unknown apps",
            text: 'Allow “Install unknown apps” for that browser in Android settings.',
          },
          {
            "@type": "HowToStep",
            name: "Install and launch",
            text: "Open the APK → Install → Launch R789.",
          },
          {
            "@type": "HowToStep",
            name: "Register",
            text: "Register with a valid Pakistani mobile number and save login details.",
          },
        ],
      },
    ],
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto" style={{ minHeight: "400px" }}>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-accent">R789</span>
            </h1>
            <p className="text-xl md:text-2xl text-white font-semibold mt-3 mb-4">
              Pakistan&apos;s Most Trusted New Gaming Platform 2026
            </p>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
              R789 is a lightweight Android crash game built around one clear loop: stake, watch the
              plane climb, and cash out before it vanishes. Pakistani players use JazzCash and
              EasyPaisa for deposits from PKR 100 and withdrawals from PKR 200. This page covers
              gameplay, install steps, bonuses, and wallet tips — without promising fixed earnings.
            </p>

            <div
              className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-300 mb-6"
              itemScope
              itemType="https://schema.org/SoftwareApplication"
            >
              <meta itemProp="name" content="R789" />
              <meta itemProp="operatingSystem" content="Android" />
              <meta itemProp="applicationCategory" content="GameApplication" />
              <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                <span className="text-accent font-bold text-lg" itemProp="ratingValue">
                  4.8
                </span>
                <span className="text-accent ml-1" aria-label="4.8 out of 5 stars">
                  ★★★★☆
                </span>
                <span className="ml-1">
                  (
                  <span itemProp="ratingCount">49,900</span>)
                </span>
                <meta itemProp="bestRating" content="5" />
              </div>
              <span aria-hidden="true">·</span>
              <span itemProp="offers" itemScope itemType="https://schema.org/Offer">
                <meta itemProp="price" content="0" />
                <meta itemProp="priceCurrency" content="PKR" />
                <span>Free</span>
              </span>
              <span aria-hidden="true">·</span>
              <span>Android</span>
              <span aria-hidden="true">·</span>
              <span>Game</span>
            </div>

            <CtaButton ariaLabel="Download R789 APK for Android">DOWNLOAD NOW</CtaButton>

            <div className="stats-grid mt-8 max-w-md">
              <div className="stat-card text-center">
                <p className="text-accent text-2xl font-bold">50K+</p>
                <p className="text-gray-400 text-sm mt-1">Downloads</p>
              </div>
              <div className="stat-card text-center">
                <p className="text-accent text-2xl font-bold">4.8</p>
                <p className="text-gray-400 text-sm mt-1">49,900+ Ratings</p>
              </div>
              <div className="stat-card text-center">
                <p className="text-accent text-2xl font-bold">6.5 MB</p>
                <p className="text-gray-400 text-sm mt-1">App Size</p>
              </div>
            </div>
            <p className="text-gray-500 text-xs mt-4">
              *Available for Android devices only (Android 5.0+)
            </p>
          </div>

          <figure
            className="flex justify-center md:justify-end md:pt-1 m-0"
            itemScope
            itemType="https://schema.org/ImageObject"
          >
            <meta itemProp="name" content="R789 official app icon" />
            <meta
              itemProp="description"
              content="R789 – Official R789 app icon for Pakistan"
            />
            <meta itemProp="url" content={`${SITE_ORIGIN}/r789.webp`} />
            <R789Logo
              variant="hero"
              alt="R789 – Official R789 app icon for Pakistan"
              title="R789 official app icon"
              priority
            />
            <figcaption className="sr-only">
              R789 official app icon for the Android game in Pakistan
            </figcaption>
          </figure>
        </div>
      </section>

      {/* APK Info Table */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent">R789 APK Download Info</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-800">
          <table className="w-full text-sm md:text-base">
            <tbody>
              {[
                ["Name", "R789"],
                ["Version", APP_VERSION],
                ["Size", APP_FILE_SIZE],
                ["Category", "Online Game"],
                ["Developer", "R789"],
                ["Rating", "4.8 / 5 (49,900 ratings) · Free · Android · Game"],
                ["Min deposit", APP_MIN_DEPOSIT],
                ["Min withdraw", APP_MIN_WITHDRAW],
                ["Payments", "JazzCash / EasyPaisa / Bank"],
                ["OS", "Android 5.0+"],
              ].map(([label, value]) => (
                <tr key={label} className="border-b border-gray-800 last:border-0">
                  <th className="py-3 px-4 md:px-6 text-left text-accent font-semibold bg-[#0A1A33]/60 w-1/3">
                    {label}
                  </th>
                  <td className="py-3 px-4 md:px-6 text-left text-white">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* What Is R789 */}
      <section id="what-is-r789" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">What Is R789?</h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            R789 is a crash-style mobile game where a plane takes off and a multiplier rises in real
            time. Your job is simple but tense: decide when to cash out. Leave too late and the round
            stake is gone; cash out earlier and the current multiplier is applied to your stake.
          </p>
          <p>
            That single mechanic is why many Pakistani players prefer crash apps over slower card
            tables. Sessions are short, the UI stays focused, and wallet actions sit next to JazzCash
            and EasyPaisa flows they already know. R789 packages that experience in a small{" "}
            {APP_FILE_SIZE} APK aimed at Android 5.0+ devices.
          </p>
          <p>
            This guide explains how rounds work, which bonuses to notice, how to install safely, and
            where to read deeper tips — including{" "}
            <Link
              href="/blog/how-to-play-r789-crash-cash-out-guide"
              className="text-accent hover:underline"
            >
              How to Play R789 – Crash Cash-Out Guide
            </Link>{" "}
            and our{" "}
            <Link href="/blog/is-r789-safe-in-pakistan-2026" className="text-accent hover:underline">
              safety checklist
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-accent text-center">
          R789 App Screenshots
        </h2>
        <p className="text-gray-400 text-center mb-10">
          Real mobile UI — swipe on phone to preview every screen
        </p>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 lg:grid-cols-6 md:overflow-visible">
          {screenshots.map((shot) => (
            <figure
              key={shot.src}
              className="flex-shrink-0 w-40 md:w-auto snap-center text-center"
            >
              <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-[#0A1A33]">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.w}
                  height={shot.h}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 160px, 180px"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-2 text-sm text-gray-400">{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent">
          R789 Features Players Actually Use
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Live multiplier board",
              body: "The flight board shows the rising multiplier clearly so you can react without digging through menus. Clear numbers help beginners learn timing faster. R789 keeps that board front and center every round.",
            },
            {
              title: "Manual cash-out control",
              body: "You choose when to lock the multiplier. That control is the skill layer of crash play — patience versus safety. Players who set a personal exit number before the round starts usually stay calmer.",
            },
            {
              title: "PKR wallet with local rails",
              body: (
                <>
                  Deposits and withdrawals are framed for Pakistan wallets. JazzCash, EasyPaisa, and Bank
                  keep transfers familiar. See the{" "}
                  <Link href={CORE_ROUTES.deposit} className="text-accent hover:underline">
                    deposit guide
                  </Link>{" "}
                  and{" "}
                  <Link href={CORE_ROUTES.withdraw} className="text-accent hover:underline">
                    withdraw guide
                  </Link>{" "}
                  for full steps.
                </>
              ),
            },
            {
              title: "Lightweight install",
              body: `At ${APP_FILE_SIZE}, R789 fits phones that cannot spare large multi-game APKs. Faster install means you reach the lobby sooner and can focus on understanding one crash mode well.`,
            },
            {
              title: "Bonus & referral panels",
              body: (
                <>
                  Welcome offers, login gifts, and referral rewards sit in dedicated panels so you
                  can check terms before claiming. Read{" "}
                  <Link
                    href="/blog/r789-bonuses-vip-rewards-explained"
                    className="text-accent hover:underline"
                  >
                    bonuses & VIP explained
                  </Link>{" "}
                  before stacking promotions.
                </>
              ),
            },
            {
              title: "Account recovery hooks",
              body: (
                <>
                  Binding a phone or email helps if you lose OTP access later. That small setup step
                  protects balances better than guest-only play. Our{" "}
                  <Link
                    href="/blog/r789-login-account-fixes-otp-password"
                    className="text-accent hover:underline"
                  >
                    login & OTP fixes article
                  </Link>{" "}
                  covers common recovery paths.
                </>
              ),
            },
          ].map((f) => (
            <div key={f.title} className="bg-[#0A1A33]/80 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-3">{f.title}</h3>
              <p className="text-gray-300 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How crash works */}
      <section id="how-crash-works" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
          How a R789 Crash Round Works
        </h2>
        <div className="space-y-4 text-gray-300 leading-relaxed mb-6">
          <p>
            Every round starts with a stake. After takeoff, the multiplier climbs from 1.00x upward.
            Your potential return is stake × current multiplier — but only if you cash out before
            the plane disappears.
          </p>
        </div>
        <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6">
          <li>Enter a stake you can afford to lose for that round.</li>
          <li>Confirm the bet and watch the flight animation begin.</li>
          <li>Track the live multiplier; decide your exit point early.</li>
          <li>Tap cash out while the plane is still flying to lock profit.</li>
          <li>If the crash happens first, that round stake is lost.</li>
        </ol>
        <p className="text-gray-300 leading-relaxed">
          There is no guaranteed multiplier. High numbers look exciting, yet they arrive less often.
          Steady players treat R789 as a timing game with bankroll limits, not a salary plan. For a
          deeper walkthrough, open{" "}
          <Link
            href="/blog/how-to-play-r789-crash-cash-out-guide"
            className="text-accent hover:underline"
          >
            How to Play R789 – Crash Cash-Out Guide
          </Link>
          .
        </p>
      </section>

      {/* Bonuses */}
      <section id="bonuses" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
          Bonuses & Extra Value on R789
        </h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            New accounts often see a welcome or first-deposit style boost. Daily login gifts and
            recharge rebates may appear after you fund the wallet. Referral rewards credit when
            invited friends register and meet the app’s conditions.
          </p>
          <p>
            Always read wagering or claim rules inside the offer screen. Bonus credits can expire or
            require play before withdraw. R789 promotions help stretch a session — they do not remove
            crash risk. Details and VIP notes are summarized in{" "}
            <Link
              href="/blog/r789-bonuses-vip-rewards-explained"
              className="text-accent hover:underline"
            >
              R789 Bonuses & VIP Rewards Explained
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Install */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
          Download & Install R789 on Android
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Use the official guide on this site so you avoid random APK mirrors. The dedicated page
          walks through permissions and first launch:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6">
          <li>
            Open the{" "}
            <Link href={CORE_ROUTES.download} className="text-accent hover:underline">
              download guide
            </Link>{" "}
            on your phone browser.
          </li>
          <li>Tap DOWNLOAD NOW and wait for the {APP_FILE_SIZE} file to finish.</li>
          <li>Allow “Install unknown apps” for that browser in Android settings.</li>
          <li>Open the APK → Install → Launch R789.</li>
          <li>Register with a valid Pakistani mobile number and save login details.</li>
        </ol>
        <CtaButton ariaLabel="Download R789 APK now">DOWNLOAD NOW</CtaButton>
      </section>

      {/* Register */}
      <section id="register-login" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
          Registration & Login
        </h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Create an account with your mobile number, verify the OTP, and set a password you will
            remember. Binding email when available adds a recovery path if SMS fails later.
          </p>
          <p>
            On return visits, log in with the same number and password. If OTP delays or password
            errors block you, follow{" "}
            <Link
              href="/blog/r789-login-account-fixes-otp-password"
              className="text-accent hover:underline"
            >
              R789 Login & Account Fixes (OTP, Password)
            </Link>{" "}
            before creating a second account — duplicate profiles can complicate withdrawals.
          </p>
        </div>
      </section>

      {/* Deposit withdraw */}
      <section id="deposit-withdraw" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
          Deposit & Withdraw in PKR
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Funding starts from PKR 100. Cash-outs start from PKR 200. Use only your own JazzCash,
          EasyPaisa, or Bank account and match the name on your game account when asked. Full
          screenshots and
          step lists live on dedicated pages so this homepage stays focused on crash gameplay.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={CORE_ROUTES.deposit}
            className="flex-1 bg-[#0A1A33] border border-gray-800 rounded-xl p-5 hover:border-accent transition-colors"
          >
            <h3 className="text-accent font-semibold mb-1">How to deposit money in R789</h3>
            <p className="text-gray-400 text-sm">Step-by-step JazzCash, EasyPaisa, and Bank deposits from PKR 100</p>
          </Link>
          <Link
            href={CORE_ROUTES.withdraw}
            className="flex-1 bg-[#0A1A33] border border-gray-800 rounded-xl p-5 hover:border-accent transition-colors"
          >
            <h3 className="text-accent font-semibold mb-1">How to withdraw money from R789</h3>
            <p className="text-gray-400 text-sm">Cash out from PKR 200 with wallet matching tips</p>
          </Link>
        </div>
      </section>

      {/* Payments */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
          Payment Methods for Pakistan
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-300">
          <div className="bg-[#0A1A33]/80 rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-3">JazzCash</h3>
            <p className="leading-relaxed">
              Enter the wallet number carefully, confirm the amount in PKR, and keep the SMS
              confirmation until the in-app balance updates.
            </p>
          </div>
          <div className="bg-[#0A1A33]/80 rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-3">EasyPaisa</h3>
            <p className="leading-relaxed">
              Same discipline: correct mobile number, amount check, and patience while the transfer
              clears. Avoid third-party “agent” deposits you cannot verify.
            </p>
          </div>
          <div className="bg-[#0A1A33]/80 rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-3">Bank</h3>
            <p className="leading-relaxed">
              Transfer from your own Pakistani bank account when the option appears in the wallet
              screen. Match the account name to your R789 profile and keep the receipt until the
              balance updates.
            </p>
          </div>
        </div>
        <p className="text-gray-400 mt-4 text-sm">
          Never share OTPs or wallet PINs with anyone claiming to be support. Real help channels are
          listed on our{" "}
          <Link href={CORE_ROUTES.contact} className="text-accent hover:underline">
            contact page
          </Link>
          .
        </p>
      </section>

      {/* Troubleshooting */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
          Troubleshooting Common Issues
        </h2>
        <ul className="space-y-3 text-gray-300">
          <li>
            <strong className="text-white">APK blocked:</strong> Re-enable install permission for the
            browser that downloaded the file, then retry.
          </li>
          <li>
            <strong className="text-white">App won’t open:</strong> Free storage, restart the phone,
            and reinstall from the official download link.
          </li>
          <li>
            <strong className="text-white">OTP missing:</strong> Wait 60 seconds, check spam/blocked
            SMS, confirm the number, then request again.
          </li>
          <li>
            <strong className="text-white">Deposit pending:</strong> Keep the wallet receipt and wait
            a few minutes before contacting support with the transaction ID.
          </li>
        </ul>
      </section>

      {/* Tips */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
          Practical Tips (No Income Guarantees)
        </h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Decide a session budget in PKR before the first round and stop when it is gone. Chasing
            losses after a late crash usually ends worse.
          </p>
          <p>
            Prefer smaller stakes while learning timing. Note a personal cash-out target (for example
            1.5x–2x) instead of waiting for extreme multipliers every flight.
          </p>
          <p>
            R789 can be entertaining and occasionally rewarding, but outcomes vary. Treat bonuses as
            optional extras, not as a promise of profit.
          </p>
        </div>
      </section>

      {/* Pros Cons */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent">Pros & Cons of R789</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#0A1A33]/80 rounded-xl p-6 border border-green-900/40">
            <h3 className="text-xl font-semibold text-green-400 mb-4">Pros</h3>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li>Focused crash gameplay that is quick to learn</li>
              <li>Small {APP_FILE_SIZE} APK for many Android phones</li>
              <li>JazzCash, EasyPaisa, and Bank wallet options in PKR</li>
              <li>Low entry deposit from PKR 100</li>
              <li>Bonus and referral panels for optional extras</li>
            </ul>
          </div>
          <div className="bg-[#0A1A33]/80 rounded-xl p-6 border border-red-900/40">
            <h3 className="text-xl font-semibold text-red-400 mb-4">Cons</h3>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li>Crash rounds can lose the stake instantly</li>
              <li>Not a Google Play Store listing — sideload carefully</li>
              <li>Android only; no native iPhone APK</li>
              <li>Bonuses may include wagering conditions</li>
              <li>Needs stable mobile data during live rounds</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section id="safety" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
          Safety Notes for Pakistani Players
        </h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Download only from this domain’s{" "}
            <Link href={CORE_ROUTES.download} className="text-accent hover:underline">
              download guide
            </Link>{" "}
            and the official DOWNLOAD NOW button. Random Telegram or Facebook APKs are a common
            malware risk.
          </p>
          <p>
            Keep wallet PINs private, enable account binding, and use stakes that fit your budget.
            Local laws and age rules still apply — check what is allowed where you live. More
            context:{" "}
            <Link href="/blog/is-r789-safe-in-pakistan-2026" className="text-accent hover:underline">
              Is R789 Safe in Pakistan? Honest 2026 Check
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Support */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Customer Support</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          For deposit delays, login blocks, or APK questions, reach the team via in-app chat when
          available or email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">
            {SUPPORT_EMAIL}
          </a>
          . Include your registered number and a clear screenshot of the error.
        </p>
        <CtaButton href={CORE_ROUTES.contact} icon="mail" ariaLabel="Open R789 contact form">
          Open the contact form →
        </CtaButton>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent">R789 FAQs</h2>
        <div className="space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group bg-[#0A1A33]/80 border border-gray-800 rounded-xl px-5 py-4"
            >
              <summary className="cursor-pointer list-none flex justify-between items-center font-semibold text-white">
                {item.q}
                <span className="text-accent text-xl leading-none group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 text-gray-300 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="pt-12 pb-8 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-accent">Ready to Try R789?</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Install the {APP_VERSION} APK, learn one cash-out habit, and use JazzCash, EasyPaisa, or Bank only
          with money you can afford to risk. Crash rounds are fast — play responsibly.
        </p>
        <CtaButton ariaLabel="Download R789 APK for Android">DOWNLOAD NOW</CtaButton>
      </section>
    </article>
  );
}
