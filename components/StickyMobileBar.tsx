'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { siteConfig } from '@/data/siteConfig';
import { 
  HomeIcon, 
  CategoriesIcon,
  ShoppingBagIcon, 
  FileTextIcon, 
  UserIcon,
  WhatsAppIcon, 
  ChevronUpIcon 
} from './Icons';

export const StickyMobileBar: React.FC = () => {
  const pathname = usePathname();
  const { isCategoryDrawerOpen, setIsCategoryDrawerOpen, setIsQuoteModalOpen } = useCart();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'Contact',
        event_label: 'Floating WhatsApp'
      });
    }
  };

  const isProductDetailPage = pathname.startsWith('/products/') && pathname !== '/products';

  return (
    <>
      <style>{`
        /* Desktop Mode: Completely hide mobile bottom navigation */
        .mobile-bottom-nav {
          display: none !important;
        }

        .floating-actions-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 1500;
        }

        /* Mobile Viewport Mode (<= 768px) */
        @media (max-width: 768px) {
          .mobile-bottom-nav {
            display: block !important;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: #FFFFFF;
            border-top: 1px solid #E2E8F0;
            box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.06);
            z-index: 1400;
            padding: 6px 4px calc(6px + env(safe-area-inset-bottom, 0px)) 4px;
          }

          .floating-actions-container {
            bottom: 76px !important;
            right: 16px !important;
          }

          body {
            padding-bottom: 64px;
          }
        }
      `}</style>

      {/* Floating Action Buttons */}
      <div 
        className="floating-actions-container"
        style={isProductDetailPage ? { bottom: '72px' } : undefined}
      >
        {showScrollTop && (
          <button
            type="button"
            className="floating-scrolltop-btn"
            id="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll to Top"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <ChevronUpIcon size={18} />
          </button>
        )}
        <a
          href={`https://wa.me/${siteConfig.phones.whatsappRaw}?text=Hi%20AS%20Print%20Gallery!%20I%20have%20an%20inquiry%20from%20your%20website.`}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-wa-btn"
          aria-label="Direct WhatsApp Chat"
          onClick={handleWhatsAppClick}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <WhatsAppIcon size={24} color="#FFFFFF" />
        </a>
      </div>

      {/* Meesho-Style Mobile Bottom Sticky Navigation Bar */}
      {!isProductDetailPage && (
        <nav 
          className="mobile-bottom-nav" 
          aria-label="Mobile Bottom Navigation"
        >
          <div 
            className="mobile-bottom-nav-inner"
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              maxWidth: '540px',
              margin: '0 auto'
            }}
          >
            {/* 1. Home */}
            <Link
              href="/"
              className={`mobile-nav-item ${pathname === '/' ? 'active' : ''}`}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '3px',
                textDecoration: 'none',
                color: pathname === '/' ? '#E11D48' : '#64748B',
                padding: '4px 0',
                transition: 'color 0.15s ease'
              }}
            >
              <span className="icon" style={{ display: 'inline-flex' }}>
                <HomeIcon size={20} color={pathname === '/' ? '#E11D48' : '#64748B'} />
              </span>
              <span style={{ fontSize: '0.72rem', fontWeight: pathname === '/' ? 700 : 500 }}>Home</span>
            </Link>

            {/* 2. Categories (Opens Left Drawer) */}
            <button
              type="button"
              onClick={() => setIsCategoryDrawerOpen(true)}
              className={`mobile-nav-item ${isCategoryDrawerOpen ? 'active' : ''}`}
              aria-label="Browse All Categories"
              style={{
                flex: 1,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '3px',
                color: isCategoryDrawerOpen ? '#E11D48' : '#64748B',
                padding: '4px 0',
                transition: 'color 0.15s ease'
              }}
            >
              <span className="icon" style={{ display: 'inline-flex' }}>
                <CategoriesIcon size={20} color={isCategoryDrawerOpen ? '#E11D48' : '#64748B'} />
              </span>
              <span style={{ fontSize: '0.72rem', fontWeight: isCategoryDrawerOpen ? 700 : 500 }}>Categories</span>
            </button>

            {/* 3. Shop */}
            <Link
              href="/shop"
              className={`mobile-nav-item ${pathname === '/shop' || pathname === '/products' ? 'active' : ''}`}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '3px',
                textDecoration: 'none',
                color: (pathname === '/shop' || pathname === '/products') ? '#E11D48' : '#64748B',
                padding: '4px 0',
                transition: 'color 0.15s ease'
              }}
            >
              <span className="icon" style={{ display: 'inline-flex' }}>
                <ShoppingBagIcon size={20} color={(pathname === '/shop' || pathname === '/products') ? '#E11D48' : '#64748B'} />
              </span>
              <span style={{ fontSize: '0.72rem', fontWeight: (pathname === '/shop' || pathname === '/products') ? 700 : 500 }}>Shop</span>
            </Link>

            {/* 4. Get Quote */}
            <button
              type="button"
              className="mobile-nav-item"
              onClick={() => setIsQuoteModalOpen(true)}
              aria-label="Get Wholesale Quote"
              style={{
                flex: 1,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '3px',
                color: '#64748B',
                padding: '4px 0',
                transition: 'color 0.15s ease'
              }}
            >
              <span className="icon" style={{ display: 'inline-flex', color: '#E11D48' }}>
                <FileTextIcon size={20} color="#E11D48" />
              </span>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#E11D48' }}>Get Quote</span>
            </button>

            {/* 5. Account */}
            <Link
              href="/admin/login"
              className={`mobile-nav-item ${pathname.startsWith('/admin') ? 'active' : ''}`}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '3px',
                textDecoration: 'none',
                color: pathname.startsWith('/admin') ? '#E11D48' : '#64748B',
                padding: '4px 0',
                transition: 'color 0.15s ease'
              }}
            >
              <span className="icon" style={{ display: 'inline-flex' }}>
                <UserIcon size={20} color={pathname.startsWith('/admin') ? '#E11D48' : '#64748B'} />
              </span>
              <span style={{ fontSize: '0.72rem', fontWeight: pathname.startsWith('/admin') ? 700 : 500 }}>Account</span>
            </Link>
          </div>
        </nav>
      )}
    </>
  );
};
