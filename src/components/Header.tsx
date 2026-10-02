'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileNavigation from './MobileNavigation';
import R789Logo from '@/components/R789Logo';
import { CORE_ROUTES } from '@/lib/appFacts';

const navLinks = [
  { href: CORE_ROUTES.home, label: 'Home' },
  { href: CORE_ROUTES.download, label: 'Download' },
  { href: CORE_ROUTES.deposit, label: 'Deposit' },
  { href: CORE_ROUTES.withdraw, label: 'Withdraw' },
  { href: CORE_ROUTES.pc, label: 'PC Version' },
  { href: CORE_ROUTES.about, label: 'About Us' },
  { href: CORE_ROUTES.blog, label: 'Blog' },
  { href: CORE_ROUTES.contact, label: 'Contact Us' },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header className="bg-primary py-3 px-4 md:px-8 sticky top-0 z-30 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="mr-2">
            <R789Logo variant="header" alt="R789 logo" priority />
          </div>
          <span className="text-accent text-xl md:text-2xl font-bold">
            R789
          </span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative font-medium transition-colors pb-1 group ${
                isActive(href)
                  ? 'text-accent'
                  : 'text-white hover:text-accent'
              }`}
            >
              {label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-accent rounded-full transition-all duration-300 ${
                  isActive(href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </nav>

        <MobileNavigation />
      </div>
    </header>
  );
}
