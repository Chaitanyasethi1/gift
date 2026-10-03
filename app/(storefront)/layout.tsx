import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GlobalModals } from '@/components/GlobalModals';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { CookieBanner } from '@/components/CookieBanner';

export default function StorefrontLayout({ children }: { children: React.ReactNode }) {
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
