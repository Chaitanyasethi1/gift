import React from 'react';
import Link from 'next/link';

export function Header() {
  return (
    <>
      {/* Top Strip */}
      <div style={{ background: '#0F172A', color: '#fff', padding: '6px 0', fontSize: '0.8rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '15px' }}>
            <span>Quality Printing</span>
            <span>|</span>
            <span>Custom Design</span>
            <span>|</span>
            <span>Fast Delivery</span>
          </div>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <span>📞 9911678386</span>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span>🟢</span>
              <span>🔵</span>
              <span>🔴</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header style={{ background: '#fff', borderBottom: '1px solid #E2E8F0', padding: '15px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
             <div style={{ color: '#B91C1C', fontSize: '2.5rem', fontWeight: 900, fontStyle: 'italic', lineHeight: 1 }}>AS</div>
             <div>
               <div style={{ color: '#0F172A', fontSize: '1.4rem', fontWeight: 800, lineHeight: 1 }}>Print Gallery</div>
               <div style={{ color: '#64748B', fontSize: '0.7rem' }}>Your Ideas • Our Print</div>
             </div>
          </Link>

          {/* Search */}
          <div style={{ flex: 1, maxWidth: '500px', display: 'flex', border: '1px solid #CBD5E1', borderRadius: '4px', overflow: 'hidden' }}>
            <input type="text" placeholder="Search products..." style={{ flex: 1, padding: '10px 15px', border: 'none', outline: 'none' }} />
            <button style={{ background: '#0F172A', color: '#fff', padding: '0 20px', border: 'none', cursor: 'pointer' }}>🔍</button>
          </div>

          {/* Icons */}
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
             <button style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>👤</button>
             <button style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', position: 'relative' }}>
               🛒
               <span style={{ position: 'absolute', top: '-5px', right: '-10px', background: '#B91C1C', color: '#fff', fontSize: '0.7rem', width: '18px', height: '18px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>0</span>
             </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav style={{ background: '#fff', borderBottom: '1px solid #E2E8F0', padding: '12px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '25px', fontSize: '0.9rem', fontWeight: 600 }}>
            <Link href="/" style={{ textDecoration: 'none', color: '#0F172A' }}>Home</Link>
            <Link href="/shop" style={{ textDecoration: 'none', color: '#0F172A' }}>Shop</Link>
            <Link href="/3d-box-builder" style={{ textDecoration: 'none', color: '#0F172A' }}>3D Box Builder</Link>
            <Link href="/certifications" style={{ textDecoration: 'none', color: '#0F172A' }}>Certifications</Link>
            <Link href="/track-order" style={{ textDecoration: 'none', color: '#0F172A' }}>Track Order</Link>
            <Link href="/about" style={{ textDecoration: 'none', color: '#0F172A' }}>About Us</Link>
            <Link href="/contact" style={{ textDecoration: 'none', color: '#0F172A' }}>Contact</Link>
          </div>
          <button style={{ background: '#B91C1C', color: '#fff', border: 'none', padding: '8px 20px', borderRadius: '4px', fontWeight: 600, cursor: 'pointer' }}>Get Quote</button>
        </div>
      </nav>
    </>
  );
}
