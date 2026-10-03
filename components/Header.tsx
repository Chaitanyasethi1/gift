import React from 'react';
import Link from 'next/link';

export function Header() {
  return (
    <>
      <style>{`
        /* Mobile Header Optimizations */
        @media (max-width: 768px) {
          .header-container { flex-direction: column !important; gap: 15px !important; padding: 15px !important; }
          .header-search-row { width: 100% !important; flex-direction: column !important; gap: 10px !important; }
          .header-icons { width: 100% !important; justify-content: center !important; margin-top: 5px !important; }
          .dark-nav-container { overflow-x: auto !important; white-space: nowrap !important; justify-content: flex-start !important; padding: 12px 15px !important; gap: 20px !important; }
          .dark-nav-container::-webkit-scrollbar { display: none; }
        }
      `}</style>
      
      {/* Main Header */}
      <header style={{ background: '#F5F5F5', padding: '15px 0' }}>
        <div className="container header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', flexShrink: 0 }}>
             <div style={{ color: '#65A34A', fontSize: '2.2rem', fontWeight: 900, fontStyle: 'italic', lineHeight: 1 }}>AS</div>
             <div>
               <div style={{ color: '#0F172A', fontSize: '1.1rem', fontWeight: 800, lineHeight: 1 }}>Print Gallery</div>
             </div>
          </Link>

          {/* Center: Search & Bulk Order */}
          <div className="header-search-row" style={{ flex: 1, display: 'flex', gap: '15px', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ flex: 1, width: '100%', maxWidth: '500px', display: 'flex', background: '#fff', border: '1px solid #E2E8F0', borderRadius: '30px', overflow: 'hidden', padding: '4px 15px' }}>
              <span style={{ color: '#65A34A', padding: '8px 5px', fontSize: '1.1rem' }}>🔍</span>
              <input type="text" placeholder="Search..." style={{ flex: 1, width: '100%', padding: '8px 10px', border: 'none', outline: 'none', fontSize: '0.95rem' }} />
            </div>
            
            <a href="https://wa.me/919911678386?text=Hi,%20I%20need%20a%20bulk%20order%20quote" target="_blank" rel="noreferrer" style={{ background: '#73C86B', color: '#fff', padding: '10px 24px', borderRadius: '30px', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', flexShrink: 0, boxShadow: '0 4px 6px rgba(115, 200, 107, 0.2)', width: 'max-content' }}>
              💬 BULK ORDER
            </a>
          </div>

          {/* Icons */}
          <div className="header-icons" style={{ display: 'flex', gap: '30px', alignItems: 'center', flexShrink: 0 }}>
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
        <div className="container dark-nav-container" style={{ display: 'flex', justifyContent: 'center', gap: '40px', padding: '14px 0' }}>
          
          <div className="nav-item group">
             <Link href="/shop" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
               Packing Material <span style={{ fontSize: '0.7rem' }}>▼</span>
             </Link>
             <div className="dropdown-menu">
               <Link href="/shop">Corrugated Boxes</Link>
               <Link href="/shop">Pizza & Food Boxes</Link>
               <Link href="/shop">Courier Bags</Link>
               <Link href="/shop">Bubble Wrap & Tapes</Link>
             </div>
          </div>

          <div className="nav-item group">
             <Link href="/shop" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
               Paper Bags <span style={{ fontSize: '0.7rem' }}>▼</span>
             </Link>
             <div className="dropdown-menu">
               <Link href="/shop">Kraft Paper Bags</Link>
               <Link href="/shop">Imported Paper Bags</Link>
               <Link href="/shop">Printed Carrier Bags</Link>
               <Link href="/shop">Custom Logo Bags</Link>
             </div>
          </div>

          <div className="nav-item group">
             <Link href="/shop" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
               Labels & Stickers <span style={{ fontSize: '0.7rem' }}>▼</span>
             </Link>
             <div className="dropdown-menu">
               <Link href="/shop">Roll Form Stickers</Link>
               <Link href="/shop">Sheet Form Stickers</Link>
               <Link href="/shop">Die-Cut Labels</Link>
               <Link href="/shop">Holographic Stickers</Link>
               <Link href="/shop">Woven Labels & Tags</Link>
             </div>
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
          position: relative;
          cursor: pointer;
        }
        .nav-item .dropdown-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background: #ffffff;
          min-width: 200px;
          box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
          padding: 10px 0;
          z-index: 50;
          border-radius: 6px;
          border: 1px solid #e5e7eb;
          margin-top: 14px;
        }
        .nav-item.group:hover .dropdown-menu {
          display: block;
          animation: fadeIn 0.2s ease;
        }
        .dropdown-menu a {
          display: block;
          padding: 8px 20px;
          color: #374151;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: background 0.2s, color 0.2s;
        }
        .dropdown-menu a:hover {
          background: #f3f4f6;
          color: #65A34A;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
