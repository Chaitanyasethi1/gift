'use client';
import { usePathname } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GlobalModals } from '@/components/GlobalModals';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { CookieBanner } from '@/components/CookieBanner';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return <main id="main-content">{children}</main>;
  }

  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <GlobalModals />
      <StickyMobileBar />
      <CookieBanner />
    </>
  );
}
