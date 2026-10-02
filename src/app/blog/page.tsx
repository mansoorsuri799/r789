import Link from 'next/link';
import { Metadata } from 'next';
import { BLOG_POSTS, CORE_ROUTES } from '@/lib/appFacts';
import { SITE_ORIGIN } from '@/lib/schemaImageLicensing';

export const metadata: Metadata = {
  title: 'R789 Blog – Crash Game Guides, Safety Tips & Bonus Guides 2026',
  description:
    'R789 blog 2026: crash round strategy, safety tips for Pakistan, bonus walkthroughs, and account fixes. Honest guides for JazzCash, EasyPaisa, and Bank players.',
  keywords: [
    'R789 blog',
    'R789 guide',
    'crash game tips Pakistan',
    'R789 bonus guide',
    'R789 safety Pakistan 2026',
    'R789 login fix',
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: `${SITE_ORIGIN}${CORE_ROUTES.blog}` },
  openGraph: {
    title: 'R789 Blog – Crash Game Guides, Safety Tips & Bonus Guides 2026',
    description: 'R789 blog: crash strategy, Pakistan safety, bonuses, account fixes.',
    url: `${SITE_ORIGIN}${CORE_ROUTES.blog}`,
    siteName: 'R789',
    locale: 'en_US',
    type: 'website',
    images: [{ url: `${SITE_ORIGIN}/feature/og-image.webp`, width: 1200, height: 630, alt: 'R789 Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'R789 Blog – Crash Game Guides, Safety Tips & Bonus Guides 2026',
    description: 'R789 blog: crash strategy, Pakistan safety, bonuses, account fixes.',
    images: [`${SITE_ORIGIN}/feature/twitter-card.webp`],
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  Guides: '#FFA500',
  Safety: '#4ade80',
  Bonuses: '#60a5fa',
  Account: '#a855f7',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-400">
          <li><Link href={CORE_ROUTES.home} className="hover:text-accent transition-colors">Home</Link></li>
          <li aria-hidden="true" className="text-gray-600">›</li>
          <li className="text-accent font-medium">Blog</li>
        </ol>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-accent">R789 Blog</h1>
      <p className="text-gray-300 mb-10 text-lg max-w-3xl">
        Crash round strategy, safety checks for Pakistani players, bonus walkthroughs, and account fix guides — all
        written for R789 at <a href={SITE_ORIGIN} className="text-accent hover:underline font-semibold">r-789game.com.pk</a>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {BLOG_POSTS.map((post, i) => {
          const color = CATEGORY_COLORS[post.category] ?? '#FFA500';
          return (
            <div
              key={post.slug}
              className={`bg-secondary px-8 py-8 rounded-lg hover:shadow-lg transition-all border-2 ${i === 0 ? 'border-[#FFA500]' : 'border-gray-700 hover:border-accent'}`}
            >
              {i === 0 && (
                <div className="inline-block bg-[#FFA500] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  ⭐ FEATURED
                </div>
              )}
              <div
                className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                style={{ backgroundColor: `${color}22`, color }}
              >
                {post.category}
              </div>
              <h2 className="text-2xl font-bold mb-4 text-white">{post.title}</h2>
              <p className="text-gray-300 mb-4">{post.description}</p>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                <span>📅 {post.datePublished}</span>
                <span>•</span>
                <span>{post.readTime} read</span>
              </div>
              <Link
                href={`${CORE_ROUTES.blog}/${post.slug}`}
                className="text-accent hover:underline font-semibold"
              >
                Read More →
              </Link>
            </div>
          );
        })}
      </div>

    </div>
  );
}
