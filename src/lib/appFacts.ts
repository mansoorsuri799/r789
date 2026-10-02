import { SITE_ORIGIN } from "@/lib/schemaImageLicensing";

/** Matches the homepage hero rating claim. */
export const APP_AGGREGATE_RATING = {
  "@type": "AggregateRating",
  ratingValue: "4.8",
  ratingCount: "49900",
  bestRating: "5",
  worstRating: "1",
} as const;

export const APP_DOWNLOAD_URL =
  "https://dsqa78kxyi03z.cloudfront.net/?dl=g91c4x";

export const APP_VERSION = "V1.0";
export const APP_FILE_SIZE = "6.5 MB";
export const APP_MIN_DEPOSIT = "PKR 100";
export const APP_MIN_WITHDRAW = "PKR 200";
export const APP_PAYMENTS = "JazzCash / EasyPaisa / Bank / Bank";
export const APP_PAYMENTS_AND = "JazzCash, EasyPaisa, and Bank";
export const APP_PAYMENTS_OR = "JazzCash, EasyPaisa, or Bank";
export const SUPPORT_EMAIL = "support@r-789game.com.pk";

export const ORGANIZATION_SAME_AS = [] as const;

export const APP_SCREENSHOTS = [
  `${SITE_ORIGIN}/r789-game.webp`,
  `${SITE_ORIGIN}/r789-invite-friends.webp`,
  `${SITE_ORIGIN}/r789-deposit-money.webp`,
  `${SITE_ORIGIN}/r789-withdraw-money.webp`,
  `${SITE_ORIGIN}/r789-profile.webp`,
  `${SITE_ORIGIN}/withdraw-amount-r789.webp`,
] as const;

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "R789",
  url: SITE_ORIGIN,
  logo: `${SITE_ORIGIN}/r789.webp`,
  description:
    "R789 is a lightweight Android game for Pakistan with JazzCash, EasyPaisa, and Bank payments, deposits from PKR 100, and withdrawals from PKR 200.",
  email: SUPPORT_EMAIL,
  sameAs: [...ORGANIZATION_SAME_AS],
};

export const CORE_ROUTES = {
  home: "/",
  download: "/download-r789",
  deposit: "/deposit-money-in-r789",
  withdraw: "/withdraw-money-from-r789",
  pc: "/r789-for-pc",
  about: "/about-us",
  blog: "/blog",
  contact: "/contact-us",
  privacy: "/privacy",
  disclaimer: "/disclaimer",
} as const;

export const BLOG_POSTS = [
  {
    slug: "how-to-play-r789-crash-cash-out-guide",
    title: "How to Play R789 – Crash Cash-Out Guide",
    description:
      "Learn R789 crash rounds step by step: staking, reading the live multiplier, and cashing out before the plane disappears — with bankroll tips for Pakistan.",
    datePublished: "2026-10-02",
    readTime: "8 min",
    category: "Guides",
  },
  {
    slug: "is-r789-safe-in-pakistan-2026",
    title: "Is R789 Safe in Pakistan? Honest 2026 Check",
    description:
      "An honest look at R789 download safety, sideloading risks, wallet hygiene, and what Pakistani players should verify before depositing.",
    datePublished: "2026-10-02",
    readTime: "7 min",
    category: "Safety",
  },
  {
    slug: "r789-bonuses-vip-rewards-explained",
    title: "R789 Bonuses & VIP Rewards Explained",
    description:
      "Welcome offers, login gifts, recharge rebates, and referral rewards on R789 — plus how to read wagering rules before you claim.",
    datePublished: "2026-10-02",
    readTime: "6 min",
    category: "Bonuses",
  },
  {
    slug: "r789-login-account-fixes-otp-password",
    title: "R789 Login & Account Fixes (OTP, Password)",
    description:
      "Fix R789 OTP delays, password errors, and account recovery. Bind phone or email and avoid duplicate profiles that block withdrawals.",
    datePublished: "2026-10-02",
    readTime: "6 min",
    category: "Account",
  },
] as const;
