import { Metadata } from 'next';
import Link from 'next/link';
import { CORE_ROUTES } from '@/lib/appFacts';
import CtaButton from '@/components/CtaButton';

export const metadata: Metadata = {
  title: 'Page Not Found – R789',
  description: 'The page you are looking for does not exist. Return to the R789 crash game homepage.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-accent">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Page Not Found</h2>
      <p className="text-lg mb-8 text-gray-300 max-w-lg mx-auto">
        The page you are looking for might have been removed, renamed, or is temporarily unavailable on R789.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <CtaButton href={CORE_ROUTES.home} icon="arrow">Back to R789 Homepage</CtaButton>
      </div>
      <div className="flex flex-wrap justify-center gap-6 text-sm">
        <Link href={CORE_ROUTES.download} className="text-accent hover:underline">Download R789</Link>
        <Link href={CORE_ROUTES.deposit} className="text-accent hover:underline">How to Deposit</Link>
        <Link href={CORE_ROUTES.withdraw} className="text-accent hover:underline">How to Withdraw</Link>
        <Link href={CORE_ROUTES.blog} className="text-accent hover:underline">Blog</Link>
      </div>
    </div>
  );
}
