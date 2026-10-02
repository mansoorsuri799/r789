import Link from 'next/link';
import CtaButton from '@/components/CtaButton';
import { CORE_ROUTES } from '@/lib/appFacts';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-8 pb-2 px-4 md:px-8 border-t border-gray-800 relative z-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold text-accent mb-4">R789</h2>
            <p className="text-sm text-gray-300 mb-4">
              R789 is a lightweight Android game for Pakistan. Stake, watch the multiplier climb, and cash out with JazzCash, EasyPaisa, and Bank.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={CORE_ROUTES.home} className="text-gray-300 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href={CORE_ROUTES.download} className="text-gray-300 hover:text-accent transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <Link href={CORE_ROUTES.pc} className="text-gray-300 hover:text-accent transition-colors">
                  PC Version
                </Link>
              </li>
              <li>
                <Link href={CORE_ROUTES.blog} className="text-gray-300 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href={CORE_ROUTES.about} className="text-gray-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={CORE_ROUTES.contact} className="text-gray-300 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">Resources</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={CORE_ROUTES.deposit} className="text-gray-300 hover:text-accent transition-colors">
                  Deposit Guide
                </Link>
              </li>
              <li>
                <Link href={CORE_ROUTES.withdraw} className="text-gray-300 hover:text-accent transition-colors">
                  Withdraw Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/r789-login-account-fixes-otp-password" className="text-gray-300 hover:text-accent transition-colors">
                  Login & OTP Fixes
                </Link>
              </li>
              <li>
                <Link href="/blog/how-to-play-r789-crash-cash-out-guide" className="text-gray-300 hover:text-accent transition-colors">
                  Crash Cash-Out Guide
                </Link>
              </li>
              <li>
                <Link href={CORE_ROUTES.privacy} className="text-gray-300 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={CORE_ROUTES.disclaimer} className="text-gray-300 hover:text-accent transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">Download App</h2>
            <p className="text-sm text-gray-300 mb-4">
              Install the official R789 V1.0 APK (6.5 MB) for Android 5.0+ and learn one clear cash-out habit before you raise stakes.
            </p>
            <CtaButton ariaLabel="Download R789 APK for Android">DOWNLOAD NOW</CtaButton>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-4 pb-3 text-center text-sm text-gray-400">
          <p className="mb-0">
            © 2026 R789. All rights reserved. |{' '}
            <Link href="/" className="hover:text-accent">
              r-789game.com.pk
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
