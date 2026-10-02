import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";
import DeferredAnalytics from "@/components/DeferredAnalytics";
import { MobileMenuProvider } from "@/components/MobileMenuProvider";
import { ORGANIZATION_JSON_LD } from "@/lib/appFacts";
import { SITE_ORIGIN } from "@/lib/schemaImageLicensing";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#061428",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: "R789 APK Download Pakistan – Free Android Game 2026",
    template: "%s | R789",
  },
  description:
    "Download R789 APK for Android in Pakistan. R789 gameplay, JazzCash, EasyPaisa, and Bank from PKR 100, withdrawals from PKR 200. Free 6.5 MB install — no fixed earnings promised.",
  keywords: [
    "R789",
    "R789 APK",
    "R789 download",
    "R789 Pakistan",
    "R789 game",
    "R789 crash game",
    "R789 game",
    "download R789",
    "R789 JazzCash",
    "R789 EasyPaisa",
    "crash game Pakistan",
    "Android crash APK 2026",
  ],
  authors: [{ name: "R789 Team" }],
  creator: "R789",
  publisher: "R789",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "256x256" },
      { url: "/r789.webp?v=20261002", type: "image/webp", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
  alternates: {
    canonical: SITE_ORIGIN,
  },
  openGraph: {
    title: "R789 APK Download Pakistan – Free Android Game 2026",
    description:
      "R789 is a lightweight Android crash game for Pakistan. Stake, watch the plane climb, cash out. JazzCash, EasyPaisa, and Bank from PKR 100.",
    url: SITE_ORIGIN,
    siteName: "R789",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_ORIGIN}/feature/og-image.webp`,
        width: 512,
        height: 512,
        alt: "R789 – Official game for Pakistan",
      },
      {
        url: `${SITE_ORIGIN}/feature/og-image-square.webp`,
        width: 512,
        height: 512,
        alt: "R789 app icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "R789 APK Download Pakistan – Free Android Game 2026",
    description:
      "R789 APK for Android. JazzCash, EasyPaisa, and Bank. 6.5 MB · Free · Pakistan.",
    images: [
      {
        url: `${SITE_ORIGIN}/feature/twitter-card.webp`,
        width: 512,
        height: 512,
        alt: "R789 – Official game for Pakistan",
      },
    ],
  },
  applicationName: "R789",
  category: "Gaming",
  classification: "R789 Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="256x256" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/r789.webp?v=20261002" type="image/webp" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />

        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
      </head>
      <body
        className={`${poppins.className} antialiased bg-primary text-white min-h-screen flex flex-col`}
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(14, 165, 233, 0.12) 0%, rgba(6, 20, 40, 0.01) 90%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0 opacity-20"></div>
        <MobileMenuProvider>
          <Header />
          <main className="relative z-10">{children}</main>
          <DeferredStyles />
          <Footer />
          <ScrollToTopWrapper />
        </MobileMenuProvider>
        <WebVitalsTracker />
        <DeferredAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_JSON_LD),
          }}
        />
      </body>
    </html>
  );
}
