import React from 'react';
import Link from 'next/link';

export function Header() {
  return (
    <>
      {/* Main Header */}
      <header style={{ background: '#F5F5F5', padding: '15px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', flexShrink: 0 }}>
             <div style={{ color: '#65A34A', fontSize: '2.5rem', fontWeight: 900, fontStyle: 'italic', lineHeight: 1 }}>AS</div>
             <div>
               <div style={{ color: '#0F172A', fontSize: '1.2rem', fontWeight: 800, lineHeight: 1 }}>Print Gallery</div>
             </div>
          </Link>

          {/* Center: Search & Bulk Order */}
          <div style={{ flex: 1, display: 'flex', gap: '15px', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ flex: 1, maxWidth: '500px', display: 'flex', background: '#fff', border: '1px solid #E2E8F0', borderRadius: '30px', overflow: 'hidden', padding: '4px 15px' }}>
              <span style={{ color: '#65A34A', padding: '8px 5px', fontSize: '1.1rem' }}>🔍</span>
              <input type="text" placeholder="Search..." style={{ flex: 1, padding: '8px 10px', border: 'none', outline: 'none', fontSize: '0.95rem' }} />
            </div>
            
            <a href="https://wa.me/919911678386?text=Hi,%20I%20need%20a%20bulk%20order%20quote" target="_blank" rel="noreferrer" style={{ background: '#73C86B', color: '#fff', padding: '10px 24px', borderRadius: '30px', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0, boxShadow: '0 4px 6px rgba(115, 200, 107, 0.2)' }}>
              💬 BULK ORDER
            </a>
          </div>

          {/* Icons */}
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center', flexShrink: 0 }}>
             <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
               <span style={{ fontSize: '1.4rem' }}>👤</span>
               <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#333' }}>My Account</span>
             </button>
             <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', position: 'relative' }}>
               <span style={{ fontSize: '1.4rem' }}>🛒</span>
               <span style={{ position: 'absolute', top: '-5px', right: '5px', background: '#65A34A', color: '#fff', fontSize: '0.65rem', fontWeight: 'bold', width: '18px', height: '18px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>0</span>
               <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#333' }}>Cart</span>
             </button>
          </div>
        </div>
      </header>

      {/* Dark Navigation Bar */}
      <nav style={{ background: '#222222', color: '#fff' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '40px', padding: '14px 0' }}>
          
          <div className="nav-item">
             <Link href="/shop" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
               Packing Material <span style={{ fontSize: '0.7rem' }}>▼</span>
             </Link>
          </div>

          <div className="nav-item">
             <Link href="/shop" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
               Paper Bags <span style={{ fontSize: '0.7rem' }}>▼</span>
             </Link>
          </div>

          <div className="nav-item">
             <Link href="/shop" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
               Labels & Stickers <span style={{ fontSize: '0.7rem' }}>▼</span>
             </Link>
          </div>

          <div className="nav-item">
             <Link href="/3d-box-builder" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700 }}>
               3D Box Builder
             </Link>
          </div>
          
          <div className="nav-item">
             <Link href="/track-order" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700 }}>
               Track Order
             </Link>
          </div>
          
        </div>
      </nav>
      
      <style>{`
        .nav-item {
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .nav-item:hover {
          opacity: 0.8;
        }
      `}</style>
    </>
  );
}
