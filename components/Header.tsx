'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/data/siteConfig';
import { PRODUCTS, Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import {
  IconFactory,
  IconZap,
  IconMapPin,
  IconPhone,
  IconWhatsApp,
  IconSearch,
  IconCart,
  IconPackage,
  IconClose
} from './Icons';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { cartCount, setIsCartOpen, setIsSampleModalOpen, setIsPincodeModalOpen } = useCart();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Live search handler
  useEffect(() => {
    const q = searchQuery.trim().toLowerCase();
    if (q.length < 2) {
      setSearchResults([]);
      setIsSearchOpen(false);
      return;
    }

    const matches = PRODUCTS.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.specs.some(s => s.toLowerCase().includes(q))
    ).slice(0, 6);

    setSearchResults(matches);
    setIsSearchOpen(true);
  }, [searchQuery]);

  // Click outside to close search dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Customize Print', href: '/custom-box-builder', badge: '3D' },
    { label: 'Track Order', href: '/track-order' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' }
  ];

  return (
    <>
      {/* 0. Sale Marquee Top Bar */}
      <div style={{ background: '#E11D48', color: '#FFF', fontSize: '0.85rem', fontWeight: 600, padding: '6px 0', overflow: 'hidden', display: 'flex' }}>
        <div style={{ display: 'flex', whiteSpace: 'nowrap', animation: 'marquee 25s linear infinite' }}>
          {[...Array(6)].map((_, i) => (
            <span key={i} style={{ padding: '0 40px' }}>⚡ MEGA FACTORY SALE: Flat 20% OFF on all Corrugated Cartons! Use code AS20 ⚡</span>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      {/* 1. Sleek Top Bar (Single clean row, zero clutter) */}
      <div className="announcement-bar">
        <div className="container announcement-inner">
          <div className="announcement-left">
            <span className="trust-badge">
              <IconFactory size={14} className="inline mr-1" /> DIRECT FACTORY
            </span>
            <span className="trust-text">Direct Factory Rates • Bulk Tier Discounts up to 50%</span>
            <span className="trust-sep">•</span>
            <span className="trust-text">
              <IconZap size={13} className="inline mr-1 text-yellow-400" /> Pan-India Free Delivery over ₹{siteConfig.dispatchPolicy.freeShippingThreshold}
            </span>
            <span className="trust-sep">•</span>
            <span className="trust-text">GST: <strong>{siteConfig.gstin}</strong></span>
          </div>

          <div className="announcement-right">
            <button
              type="button"
              className="top-pincode-btn"
              onClick={() => setIsPincodeModalOpen(true)}
              title="Check Delivery Availability"
            >
              <IconMapPin size={14} className="inline mr-1" />
              <span>Check Pincode</span>
            </button>
            <span className="top-sep">|</span>
            <a href={`tel:${siteConfig.contact.salesPhoneRaw}`} className="announcement-link">
              <IconPhone size={13} className="inline mr-1" />
              <span>Sales: {siteConfig.contact.salesPhone}</span>
            </a>
            <span className="top-sep">|</span>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappPhoneRaw}?text=${encodeURIComponent('Hi AS Print Gallery! I have an urgent packaging inquiry.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="announcement-link"
            >
              <IconWhatsApp size={13} className="inline mr-1 text-emerald-400" />
              <span>WhatsApp: {siteConfig.contact.whatsappPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Header */}
      <header className="site-header">
        <div className="container header-inner">
          {/* Brand Logo */}
          <Link href="/" className="brand" aria-label="AS Print Gallery Home">
            <img
              src="/assets/logo.png"
              alt="AS Print Gallery Logo"
              className="brand-logo-img"
              width={140}
              height={44}
            />
            <div className="brand-text">
              <div className="brand-name" style={{ fontFamily: "'Swiss 721 BT', 'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 800 }}>AS PRINT <span>GALLERY</span></div>
              <span className="brand-tagline">All types of Printing and packaging solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="nav-container" aria-label="Primary Navigation">
            <ul className="nav-links">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link href={link.href} className={isActive ? 'active' : ''}>
                      {link.label}
                      {link.badge && <span className="nav-badge-pill-inline">{link.badge}</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Header Action Buttons */}
          <div className="header-actions">
            {/* Live Search Bar with Dropdown */}
            <div className="header-search-wrap" ref={searchRef}>
              <div className="search-input-box">
                <span className="search-icon"><IconSearch size={16} /></span>
                <input
                  type="text"
                  placeholder="Search boxes, labels..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => {
                    if (searchResults.length > 0) setIsSearchOpen(true);
                  }}
                  autoComplete="off"
                  aria-label="Search packaging products"
                />
              </div>

              {isSearchOpen && (
                <div className="search-results-dropdown active" id="search-dropdown">
                  {searchResults.length > 0 ? (
                    searchResults.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.slug}`}
                        className="search-result-item"
                        onClick={() => setIsSearchOpen(false)}
                      >
                        <img
                          src={product.image}
                          alt={product.title}
                          className="search-result-thumb"
                        />
                        <div className="search-result-info">
                          <div className="search-result-title">{product.title}</div>
                          <div className="search-result-meta">
                            <span>{product.categoryLabel}</span> • <span>MOQ: {product.moq} pcs</span>
                          </div>
                        </div>
                        <div className="search-result-price">
                          ₹{product.price.toFixed(2)}/pc
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div style={{ padding: '16px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                      No matching packaging products found for "{searchQuery}"
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Shopping Cart Drawer Trigger */}
            <button
              type="button"
              className="header-action-btn"
              onClick={() => setIsCartOpen(true)}
              aria-label={`View Shopping Cart (${cartCount} items)`}
            >
              <IconCart size={20} />
              <span className="action-badge cart-badge-count">{cartCount}</span>
            </button>

            {/* Free Sample Kit CTA */}
            <button
              type="button"
              className="btn-header-quote"
              onClick={() => setIsSampleModalOpen(true)}
            >
              <IconPackage size={16} />
              <span>Free Sample Kit</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="hamburger-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div
            style={{
              background: '#FFFFFF',
              borderBottom: '1px solid var(--border-light)',
              padding: '16px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: pathname === link.href ? 'var(--primary)' : 'var(--text-dark)',
                  padding: '8px 0',
                  borderBottom: '1px solid #F1F5F9'
                }}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
              <button
                type="button"
                className="btn-primary-hero"
                style={{ flex: 1, padding: '10px', fontSize: '0.88rem', justifyContent: 'center' }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsSampleModalOpen(true);
                }}
              >
                <IconPackage size={16} /> Free Sample Kit
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
