'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { FileTextIcon, PackageIcon, ZapIcon, ShieldCheckIcon, TruckIcon } from './Icons';

interface Slide {
  image: string;
  alt: string;
  linkType: 'whatsapp' | 'scroll' | 'none';
  target?: string;
}

const slides: Slide[] = [
  {
    image: '/assets/combo_banner_new.jpg',
    alt: 'Business Branding Combo for Rs.699',
    linkType: 'whatsapp',
    target: 'https://wa.me/919911678386?text=Hi!%20I%20want%20to%20order%20the%20BUSINESS%20BRANDING%20COMBO%20for%20Rs.699'
  },
  {
    image: '/assets/hero1.jpg',
    alt: 'Premium Custom Rigid Boxes & Packaging',
    linkType: 'scroll',
    target: 'featured-products'
  },
  {
    image: '/assets/hero2.jpg',
    alt: 'Industrial Corrugated Box Factory Ghaziabad',
    linkType: 'whatsapp',
    target: 'https://wa.me/919911678386'
  },
  {
    image: '/assets/hero3.jpg',
    alt: 'Custom Hang Tags, Garment Labels & Stickers',
    linkType: 'scroll',
    target: '3d-customizer'
  }
];

export const Hero: React.FC = () => {
  const { setIsQuoteModalOpen, setIsSampleModalOpen } = useCart();

  return (
    <>
      <section className="hero-section" style={{ padding: 0, position: 'relative' }}>
        <div
          id="main-hero-slider"
          className="main-hero-wrapper"
          style={{ position: 'relative', width: '100%', overflow: 'hidden', background: '#0F172A', minHeight: '480px' }}
        >
          {/* Static Background instead of slider */}
          <div style={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
             <img src="/assets/hero2.jpg" alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          {/* Crawlable Hero Content Overlay */}
          <div className="hero-content-overlay" style={{ position: 'relative', zIndex: 10, background: 'transparent' }}>
            <div className="container hero-content-container" style={{ justifyContent: 'flex-start' }}>
              <div className="hero-conversion-card" style={{ maxWidth: '600px', margin: '40px 0' }}>
                <div className="hero-factory-badge">
                  <span className="live-dot-pulse"></span> Direct Manufacturing Unit • Ghaziabad
                </div>
                <h1 className="hero-main-title">Direct Factory Corrugated Boxes, Labels &amp; Stickers</h1>
                <p className="hero-main-subheading">
                  Custom sizes • 3-ply &amp; 5-ply • Pan-India dispatch from Ghaziabad
                </p>
                <div className="hero-actions-group">
                  <button
                    type="button"
                    className="btn-hero-quote"
                    onClick={() => setIsQuoteModalOpen(true)}
                    aria-label="Get Bulk Quote"
                  >
                    <span className="btn-icon" style={{ display: 'inline-flex' }}>
                      <FileTextIcon size={16} />
                    </span>{' '}
                    Get Bulk Quote
                  </button>
                  <button
                    type="button"
                    className="btn-hero-sample"
                    onClick={() => setIsSampleModalOpen(true)}
                    aria-label="Free Sample Kit"
                  >
                    <span className="btn-icon" style={{ display: 'inline-flex' }}>
                      <PackageIcon size={16} />
                    </span>{' '}
                    Free Sample Kit
                  </button>
                </div>
                <div className="hero-trust-chips">
                  <span className="chip-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <ZapIcon size={13} color="#F59E0B" /> 24-48 Hr Dispatch
                  </span>
                  <span className="chip-dot">•</span>
                  <span className="chip-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <ShieldCheckIcon size={13} color="#10B981" /> 100% GST Compliant
                  </span>
                  <span className="chip-dot">•</span>
                  <span className="chip-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <TruckIcon size={13} color="#3B82F6" /> Pan-India Delivery
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Quick-Nav Strip (Underneath Hero) */}
      <div className="category-quicknav-strip">
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '12px',
              flexWrap: 'wrap',
              gap: '8px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  letterSpacing: '0.5px',
                  color: 'var(--primary)',
                  textTransform: 'uppercase'
                }}
              >
                📦 Explore Product Lines
              </span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                • Direct Corrugated, Food &amp; Trims
              </span>
            </div>
            <Link href="/products" style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--primary)' }}>
              All 15 Products Catalogue &rarr;
            </Link>
          </div>

          <div className="category-marquee-container">
            <div className="category-scroll-wrapper">
              <Link href="/products?filter=corrugated" className="category-pill-card active">
                <div className="category-icon-bubble">📦</div>
                <span className="category-name">Corrugated Boxes</span>
              </Link>
              <Link href="/products?filter=food" className="category-pill-card">
                <div className="category-icon-bubble">🍕</div>
                <span className="category-name">Food &amp; Pizza Boxes</span>
              </Link>
              <Link href="/products?filter=packaging" className="category-pill-card">
                <div className="category-icon-bubble">👕</div>
                <span className="category-name">Garment Boxes</span>
              </Link>
              <Link href="/products?filter=label" className="category-pill-card">
                <div className="category-icon-bubble">🏷️</div>
                <span className="category-name">Woven &amp; Printed Labels</span>
              </Link>
              <Link href="/products?filter=label" className="category-pill-card">
                <div className="category-icon-bubble">🎫</div>
                <span className="category-name">Hang Tags &amp; Tickets</span>
              </Link>
              <Link href="/products?filter=sticker" className="category-pill-card">
                <div className="category-icon-bubble">✨</div>
                <span className="category-name">Gumming Stickers</span>
              </Link>
              <Link href="/products?filter=bags" className="category-pill-card">
                <div className="category-icon-bubble">🛍️</div>
                <span className="category-name">Kraft Paper Bags</span>
              </Link>
              <Link href="/products?filter=bags" className="category-pill-card">
                <div className="category-icon-bubble">✉️</div>
                <span className="category-name">Courier Envelopes</span>
              </Link>
              <Link href="/products?filter=food" className="category-pill-card">
                <div className="category-icon-bubble">🧁</div>
                <span className="category-name">Sweet &amp; Bakery Boxes</span>
              </Link>
              <Link href="/products?filter=sticker" className="category-pill-card">
                <div className="category-icon-bubble">🍾</div>
                <span className="category-name">Bottle &amp; Jar Labels</span>
              </Link>
              <Link href="/products?filter=corrugated" className="category-pill-card">
                <div className="category-icon-bubble">📫</div>
                <span className="category-name">E-Com Mailers</span>
              </Link>
              <Link href="/products?filter=packaging" className="category-pill-card">
                <div className="category-icon-bubble">💎</div>
                <span className="category-name">Rigid Luxury Boxes</span>
              </Link>
              <Link href="/products?filter=packaging" className="category-pill-card">
                <div className="category-icon-bubble">📏</div>
                <span className="category-name">Custom BOPP Tapes</span>
              </Link>
              <Link href="/products?filter=packaging" className="category-pill-card">
                <div className="category-icon-bubble">💊</div>
                <span className="category-name">Mono Cartons</span>
              </Link>
              <Link href="/products?filter=packaging" className="category-pill-card">
                <div className="category-icon-bubble">📜</div>
                <span className="category-name">Wrapping Tissue</span>
              </Link>

              {/* Duplicated set for seamless infinite scroll */}
              <Link href="/products?filter=corrugated" className="category-pill-card">
                <div className="category-icon-bubble">📦</div>
                <span className="category-name">Corrugated Boxes</span>
              </Link>
              <Link href="/products?filter=food" className="category-pill-card">
                <div className="category-icon-bubble">🍕</div>
                <span className="category-name">Food &amp; Pizza Boxes</span>
              </Link>
              <Link href="/products?filter=packaging" className="category-pill-card">
                <div className="category-icon-bubble">👕</div>
                <span className="category-name">Garment Boxes</span>
              </Link>
              <Link href="/products?filter=label" className="category-pill-card">
                <div className="category-icon-bubble">🏷️</div>
                <span className="category-name">Woven &amp; Printed Labels</span>
              </Link>
              <Link href="/products?filter=label" className="category-pill-card">
                <div className="category-icon-bubble">🎫</div>
                <span className="category-name">Hang Tags &amp; Tickets</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
