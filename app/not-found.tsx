import React from 'react';
import Link from 'next/link';
import { PackageIcon, HomeIcon, BoxIcon } from '@/components/Icons';

export default function NotFound() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 20px', background: '#FAFAFC' }}>
      <div style={{ maxWidth: '580px', textAlign: 'center', background: '#FFFFFF', padding: '48px 36px', borderRadius: '16px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ fontSize: '3.5rem', marginBottom: '12px' }}>📦</div>
        <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          404 &bull; Page Not Found
        </span>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-dark)', margin: '8px 0 12px 0' }}>
          Consignment Address Not Found
        </h1>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '28px' }}>
          The packaging specification or page you requested does not exist or has been relocated in our factory catalog.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn-primary-hero">
            <HomeIcon size={16} /> Back to Homepage
          </Link>
          <Link href="/products" className="btn-outline-hero" style={{ background: '#0F172A', color: '#FFFFFF' }}>
            <PackageIcon size={16} /> View All 15 Products
          </Link>
          <Link href="/#3d-customizer" className="btn-outline-hero">
            <BoxIcon size={16} /> 3D Box Builder
          </Link>
        </div>
      </div>
    </div>
  );
}
