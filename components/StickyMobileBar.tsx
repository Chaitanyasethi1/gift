'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { siteConfig } from '@/data/siteConfig';
import { 
  HomeIcon, 
  PackageIcon, 
  FileTextIcon, 
  BoxIcon, 
  ShoppingCartIcon, 
  WhatsAppIcon, 
  ChevronUpIcon 
} from './Icons';

export const StickyMobileBar: React.FC = () => {
  const pathname = usePathname();
  const { cartCount, setIsCartOpen, setIsQuoteModalOpen } = useCart();
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

      {/* Mobile Bottom Sticky Navigation Bar (Hidden on Product Detail to allow full Action Bar) */}
      {!isProductDetailPage && (
        <nav className="mobile-bottom-nav" aria-label="Mobile Bottom Navigation">
          <div className="mobile-bottom-nav-inner">
            <Link
              href="/"
              className={`mobile-nav-item ${pathname === '/' ? 'active' : ''}`}
            >
              <span className="icon" style={{ display: 'inline-flex' }}>
                <HomeIcon size={18} />
              </span>
              <span>Home</span>
            </Link>

            <Link
              href="/products"
              className={`mobile-nav-item ${pathname.startsWith('/products') ? 'active' : ''}`}
            >
              <span className="icon" style={{ display: 'inline-flex' }}>
                <PackageIcon size={18} />
              </span>
              <span>Shop</span>
            </Link>

            <button
              type="button"
              className="mobile-nav-item mobile-quote-nav-btn"
              onClick={() => setIsQuoteModalOpen(true)}
              aria-label="Get Bulk Quote"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                minHeight: '44px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <span className="icon" style={{ color: 'var(--primary)', display: 'inline-flex' }}>
                <FileTextIcon size={18} />
              </span>
              <span style={{ color: 'var(--primary)', fontWeight: 800 }}>Get Quote</span>
            </button>

            <Link
              href="/#3d-customizer"
              className="mobile-nav-item"
            >
              <span className="icon" style={{ display: 'inline-flex' }}>
                <BoxIcon size={18} />
              </span>
              <span>Customize</span>
            </Link>

            <button
              type="button"
              className="mobile-nav-item"
              onClick={() => setIsCartOpen(true)}
              aria-label="Open Shopping Cart"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              <span className="icon" style={{ display: 'inline-flex' }}>
                <ShoppingCartIcon size={18} />
              </span>
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="mobile-cart-badge cart-badge-count">{cartCount}</span>
              )}
            </button>

            <a
              href={`https://wa.me/${siteConfig.phones.whatsappRaw}?text=Hi%20AS%20Print%20Gallery!%20I%20have%20an%20inquiry%20from%20your%20website.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-nav-item"
              onClick={handleWhatsAppClick}
              style={{ color: '#25D366' }}
              aria-label="Chat on WhatsApp"
            >
              <span className="icon" style={{ display: 'inline-flex' }}>
                <WhatsAppIcon size={18} color="#25D366" />
              </span>
              <span>Chat</span>
            </a>
          </div>
        </nav>
      )}
    </>
  );
};
