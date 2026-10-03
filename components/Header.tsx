import React from 'react';
import Link from 'next/link';

export function Header() {
  return (
    <>
      <style>{`
        /* Mobile Header Optimizations */
        @media (max-width: 768px) {
          .header-container { flex-direction: column !important; gap: 10px !important; padding: 10px !important; }
          .header-search-row { width: 100% !important; flex-direction: column !important; gap: 10px !important; }
          .header-icons { width: 100% !important; justify-content: space-around !important; margin-top: 5px !important; gap: 10px !important; }
          .top-socials { display: none !important; /* Hide socials on mobile header to save space, they are in footer */ }
          .dark-nav-container { overflow-x: auto !important; white-space: nowrap !important; justify-content: flex-start !important; padding: 12px 15px !important; gap: 20px !important; }
          .dark-nav-container::-webkit-scrollbar { display: none; }
          
          .logo-container { width: 200px !important; height: 60px !important; margin: 0 auto; }
          .bulk-order-btn { width: 100%; padding: 12px !important; font-size: 1rem !important; }
        }
        
        /* Premium Button & Marquee */
        .bulk-order-btn {
          background: linear-gradient(135deg, #10B981 0%, #047857 100%);
          color: #fff;
          padding: 10px 28px;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 800;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
          transition: all 0.3s ease;
          border: 1px solid rgba(255,255,255,0.2);
          width: max-content;
        }
        .bulk-order-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
          background: linear-gradient(135deg, #059669 0%, #065F46 100%);
        }
        
        .marquee {
          display: flex;
          white-space: nowrap;
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      
      {/* Top Announcement Bar */}
      <div style={{ background: '#E11D48', color: '#fff', fontSize: '0.85rem', fontWeight: 700, padding: '8px 0', overflow: 'hidden', display: 'flex', width: '100%' }}>
        <div className="marquee">
          <span style={{ padding: '0 40px', letterSpacing: '0.5px' }}>⚡ MEGA FACTORY SALE: Flat 20% OFF on all Corrugated Cartons! Use code AS20 ⚡</span>
          <span style={{ padding: '0 40px', letterSpacing: '0.5px' }}>⚡ MEGA FACTORY SALE: Flat 20% OFF on all Corrugated Cartons! Use code AS20 ⚡</span>
          <span style={{ padding: '0 40px', letterSpacing: '0.5px' }}>⚡ MEGA FACTORY SALE: Flat 20% OFF on all Corrugated Cartons! Use code AS20 ⚡</span>
          <span style={{ padding: '0 40px', letterSpacing: '0.5px' }}>⚡ MEGA FACTORY SALE: Flat 20% OFF on all Corrugated Cartons! Use code AS20 ⚡</span>
        </div>
      </div>
      
      {/* Main Header */}
      <header style={{ background: '#F5F5F5', padding: '15px 0' }}>
        <div className="container header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          
          {/* Logo (PNG Implementation) */}
          <Link href="/" className="logo-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, width: '220px', height: '70px', overflow: 'hidden' }}>
             <img src="/logo.png" alt="AS Print Gallery Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </Link>

          {/* Center: Search & Bulk Order */}
          <div className="header-search-row" style={{ flex: 1, display: 'flex', gap: '15px', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ flex: 1, width: '100%', maxWidth: '500px', display: 'flex', background: '#fff', border: '1px solid #E2E8F0', borderRadius: '30px', overflow: 'hidden', padding: '4px 15px' }}>
              <span style={{ color: '#65A34A', padding: '8px 5px', fontSize: '1.1rem' }}>🔍</span>
              <input type="text" placeholder="Search..." style={{ flex: 1, width: '100%', padding: '8px 10px', border: 'none', outline: 'none', fontSize: '0.95rem' }} />
            </div>
            
            <a href="https://wa.me/919911678386?text=Hi,%20I%20need%20a%20bulk%20order%20quote" target="_blank" rel="noreferrer" className="bulk-order-btn">
              💬 BULK ORDER
            </a>
          </div>

          {/* Icons & Socials */}
          <div className="header-icons" style={{ display: 'flex', gap: '25px', alignItems: 'center', flexShrink: 0 }}>
             {/* Top Socials */}
             <div className="top-socials" style={{ display: 'flex', gap: '12px', alignItems: 'center', paddingRight: '15px', borderRight: '2px solid #E2E8F0' }}>
               <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'flex' }} aria-label="Facebook">
                 <svg width="22" height="22" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
               </a>
               <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'flex' }} aria-label="Instagram">
                 <svg width="22" height="22" viewBox="0 0 24 24" fill="#E1306C"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
               </a>
               <a href="https://youtube.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'flex' }} aria-label="YouTube">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
               </a>
             </div>

             <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
               <span style={{ fontSize: '1.4rem' }}>👤</span>
               <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#333' }}>My Account</span>
             </button>
             <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', position: 'relative' }}>
               <span style={{ fontSize: '1.4rem' }}>🛒</span>
               <span style={{ position: 'absolute', top: '-5px', right: '5px', background: '#E11D48', color: '#fff', fontSize: '0.65rem', fontWeight: 'bold', width: '18px', height: '18px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>0</span>
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
               Paper Bags <span style={{ fontSize: '0.7rem' }}>▼</span>
             </Link>
             <div className="dropdown-menu">
               <Link href="/shop">Kraft Paper Bags</Link>
               <Link href="/shop">Printed Paper Bags</Link>
               <Link href="/shop">Handle Paper Bags</Link>
               <Link href="/shop">Pizza Paper Bags</Link>
             </div>
          </div>

          <div className="nav-item group">
             <Link href="/shop" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
               Packaging Boxes <span style={{ fontSize: '0.7rem' }}>▼</span>
             </Link>
             <div className="dropdown-menu">
               <Link href="/shop">Corrugated Boxes</Link>
               <Link href="/shop">Garment Boxes</Link>
               <Link href="/shop">Gift Boxes</Link>
               <Link href="/shop">Sweet Boxes</Link>
               <Link href="/shop">Pizza Boxes</Link>
               <Link href="/shop">Custom Printed Boxes</Link>
             </div>
          </div>

          <div className="nav-item group">
             <Link href="/shop" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
               Labels & Tags <span style={{ fontSize: '0.7rem' }}>▼</span>
             </Link>
             <div className="dropdown-menu">
               <Link href="/shop">Woven Labels</Link>
               <Link href="/shop">Satin Labels</Link>
               <Link href="/shop">Printed Labels</Link>
               <Link href="/shop">Hang Tags</Link>
               <Link href="/shop">Barcode Stickers</Link>
             </div>
          </div>

          <div className="nav-item group">
             <Link href="/shop" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
               Stickers <span style={{ fontSize: '0.7rem' }}>▼</span>
             </Link>
             <div className="dropdown-menu">
               <Link href="/shop">Product Stickers</Link>
               <Link href="/shop">Round Stickers</Link>
               <Link href="/shop">Custom Stickers</Link>
               <Link href="/shop">Packaging Labels</Link>
             </div>
          </div>

          <div className="nav-item group">
             <Link href="/shop" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
               Branding & Marketing <span style={{ fontSize: '0.7rem' }}>▼</span>
             </Link>
             <div className="dropdown-menu">
               <Link href="/shop">Visiting Cards</Link>
               <Link href="/shop">Thank You Cards</Link>
               <Link href="/shop">Rubber Stamps</Link>
               <Link href="/shop">Letterheads</Link>
               <Link href="/shop">QR Code Cards</Link>
             </div>
          </div>

          <div className="nav-item group">
             <Link href="/shop" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
               Disposable Products <span style={{ fontSize: '0.7rem' }}>▼</span>
             </Link>
             <div className="dropdown-menu">
               <Link href="/shop">Paper Dona</Link>
               <Link href="/shop">Paper Plates</Link>
               <Link href="/shop">Silver Dona</Link>
               <Link href="/shop">Silver Plates</Link>
             </div>
          </div>

          <div className="nav-item">
             <Link href="/3d-box-builder" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700 }}>
               Customize
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
