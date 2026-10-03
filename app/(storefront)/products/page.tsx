import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { PRODUCTS } from '@/data/products';
import { ProductGrid } from '@/components/ProductGrid';
import { BoxIcon, WhatsAppIcon } from '@/components/Icons';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: `All ${PRODUCTS.length} Packaging & Printing Products`,
  description:
    'Browse our complete direct factory packaging catalogue: 3-ply & 5-ply corrugated shipping boxes, food packaging, woven garment labels, hang tags, and waterproof stickers.',
  alternates: {
    canonical: '/products'
  }
};

export default function ProductsPage() {
  return (
    <>
      {/* Shop Header Banner */}
      <section className="shop-header-banner" style={{ background: '#0F172A', padding: '40px 0', borderBottom: '1px solid #1E293B' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#94A3B8', marginBottom: '12px' }}>
            <Link href="/" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--primary)', fontWeight: 700 }}>Packaging Catalogue</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#FFFFFF', margin: '0 0 10px 0' }}>
            ALL {PRODUCTS.length} PACKAGING &amp; PRINTING PRODUCTS
          </h1>
          <p style={{ color: '#CBD5E1', maxWidth: '720px', fontSize: '1rem', lineHeight: 1.5, margin: 0 }}>
            Complete industrial catalog manufactured in-house. Certified bursting strength kraft paper, food-grade safe boards, and high-precision woven labels at direct factory wholesale rates.
          </p>
        </div>
      </section>

      {/* Main Shop Grid */}
      <section style={{ padding: '48px 0', background: '#FAFAFC' }}>
        <div className="container">
          <ProductGrid initialFilter="all" showAllButton={false} />

          {/* Custom Size Banner */}
          <div
            className="shop-custom-banner"
            style={{
              background: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)',
              border: '1.5px dashed #059669',
              borderRadius: 'var(--radius-lg, 12px)',
              padding: '28px 32px',
              marginTop: '56px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px'
            }}
          >
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#065F46', textTransform: 'uppercase' }}>
                Bespoke Manufacturing
              </span>
              <h3 style={{ fontSize: '1.4rem', color: '#064E3B', margin: '4px 0 8px 0' }}>
                Need a Custom Box Size or Specialized Bulk Run?
              </h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#047857', maxWidth: '580px' }}>
                We make custom dies for any dimension (L &times; W &times; H) in 3-ply, 5-ply, or 7-ply with customized logo printing.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link href="/custom-box-builder" className="btn-primary-hero">
                <BoxIcon size={16} /> Open 3D Configurator
              </Link>
              <a
                href={`https://wa.me/${siteConfig.phones.whatsappRaw}?text=${encodeURIComponent('Hi AS Print Gallery! I need a custom box size that is not in the standard catalogue.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-custom-wa-order"
              >
                <WhatsAppIcon size={16} color="#FFFFFF" /> WhatsApp Custom Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
