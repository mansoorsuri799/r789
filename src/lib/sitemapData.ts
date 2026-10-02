import { BLOG_POSTS, CORE_ROUTES } from "@/lib/appFacts";
import { SITE_ORIGIN } from "@/lib/schemaImageLicensing";

export type SitemapPage = {
  path: string;
  lastMod: string;
  changeFreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
  images?: Array<{
    loc: string;
    title: string;
    caption: string;
  }>;
};

const TODAY = "2026-10-02";

export const SITEMAP_PAGES: SitemapPage[] = [
  {
    path: CORE_ROUTES.home,
    lastMod: TODAY,
    changeFreq: "daily",
    priority: 1.0,
    images: [
      {
        loc: `${SITE_ORIGIN}/r789.webp`,
        title: "R789 – Official R789 app icon",
        caption: "R789 official Android R789 app icon for Pakistan",
      },
      {
        loc: `${SITE_ORIGIN}/r789-game.webp`,
        title: "R789 crash gameplay screenshot",
        caption: "R789 live multiplier crash game screen on mobile",
      },
      {
        loc: `${SITE_ORIGIN}/r789-invite-friends.webp`,
        title: "R789 lucky spin and invite screen",
        caption: "R789 referral and lucky spin mobile UI",
      },
      {
        loc: `${SITE_ORIGIN}/r789-deposit-money.webp`,
        title: "R789 deposit money screen",
        caption: "R789 JazzCash, EasyPaisa, and Bank deposit interface",
      },
      {
        loc: `${SITE_ORIGIN}/r789-withdraw-money.webp`,
        title: "R789 withdraw money screen",
        caption: "R789 Pakistan wallet withdrawal interface",
      },
      {
        loc: `${SITE_ORIGIN}/r789-profile.webp`,
        title: "R789 account profile screen",
        caption: "R789 account and profile settings on mobile",
      },
      {
        loc: `${SITE_ORIGIN}/withdraw-amount-r789.webp`,
        title: "R789 withdraw amount screen",
        caption: "R789 rewards and withdraw amount mobile UI",
      },
    ],
  },
  {
    path: CORE_ROUTES.download,
    lastMod: TODAY,
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: `${SITE_ORIGIN}/r789.webp`,
        title: "Download R789 APK",
        caption: "Download R789 APK for Android in Pakistan",
      },
    ],
  },
  {
    path: CORE_ROUTES.deposit,
    lastMod: TODAY,
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: `${SITE_ORIGIN}/r789-deposit-money.webp`,
        title: "Deposit money in R789",
        caption: "How to deposit with JazzCash, EasyPaisa, or Bank in R789",
      },
    ],
  },
  {
    path: CORE_ROUTES.withdraw,
    lastMod: TODAY,
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: `${SITE_ORIGIN}/r789-withdraw-money.webp`,
        title: "Withdraw money from R789",
        caption: "How to withdraw PKR from R789 via JazzCash, EasyPaisa, or Bank",
      },
      {
        loc: `${SITE_ORIGIN}/withdraw-amount-r789.webp`,
        title: "R789 withdraw amount",
        caption: "R789 withdraw amount confirmation screen",
      },
    ],
  },
  {
    path: CORE_ROUTES.pc,
    lastMod: TODAY,
    changeFreq: "weekly",
    priority: 0.8,
    images: [
      {
        loc: `${SITE_ORIGIN}/r789.webp`,
        title: "R789 for PC",
        caption: "Play R789 on PC using an Android emulator",
      },
    ],
  },
  {
    path: CORE_ROUTES.about,
    lastMod: TODAY,
    changeFreq: "monthly",
    priority: 0.7,
    images: [
      {
        loc: `${SITE_ORIGIN}/r789.webp`,
        title: "About R789",
        caption: "About the R789 crash game platform for Pakistan",
      },
    ],
  },
  {
    path: CORE_ROUTES.blog,
    lastMod: TODAY,
    changeFreq: "weekly",
    priority: 0.8,
  },
  {
    path: CORE_ROUTES.contact,
    lastMod: TODAY,
    changeFreq: "monthly",
    priority: 0.7,
  },
  {
    path: CORE_ROUTES.privacy,
    lastMod: TODAY,
    changeFreq: "yearly",
    priority: 0.5,
  },
  {
    path: CORE_ROUTES.disclaimer,
    lastMod: TODAY,
    changeFreq: "yearly",
    priority: 0.5,
  },
  ...BLOG_POSTS.map((post) => ({
    path: `/blog/${post.slug}`,
    lastMod: post.datePublished,
    changeFreq: "monthly" as const,
    priority: 0.75,
    images: [
      {
        loc: `${SITE_ORIGIN}/r789.webp`,
        title: post.title,
        caption: post.description,
      },
    ],
  })),
];

export function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
