'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { initialHomepageConfig } from '@/data/homepageData';

interface NavCategory {
  title: string;
  link: string;
  items: { label: string; link: string; icon?: string }[];
}

const NAV_CATEGORIES: NavCategory[] = [
  {
    title: 'Carry Bags',
    link: '/shop',
    items: [
      { label: 'Kraft Paper Bags', link: '/shop', icon: '🛍️' },
      { label: 'Printed Carry Bags', link: '/shop', icon: '🎨' },
      { label: 'Handle Paper Bags', link: '/shop', icon: '👜' },
      { label: 'Paper Mailers & Lifafa', link: '/shop', icon: '✉️' }
    ]
  },
  {
    title: 'Packaging Material',
    link: '/shop',
    items: [
      { label: 'Corrugated Boxes (3 & 5 Ply)', link: '/corrugated-boxes-delhi', icon: '📦' },
      { label: 'Garment & Apparel Boxes', link: '/shop', icon: '👔' },
      { label: 'Gift & Luxury Boxes', link: '/shop', icon: '🎁' },
      { label: 'Sweet & Bakery Boxes', link: '/shop', icon: '🍰' },
      { label: 'Custom Printed Pizza Boxes', link: '/shop', icon: '🍕' },
      { label: 'Custom Master Cartons', link: '/corrugated-boxes-ghaziabad', icon: '🏭' }
    ]
  },
  {
    title: 'Labels & Tags',
    link: '/shop',
    items: [
      { label: 'Woven Brand Labels', link: '/shop', icon: '🧵' },
      { label: 'Printed Satin Labels', link: '/shop', icon: '🏷️' },
      { label: 'Clothing Hang Tags', link: '/shop', icon: '🔖' },
      { label: 'Wash Care Labels', link: '/shop', icon: '👕' },
      { label: 'Barcode & SKU Stickers', link: '/shop', icon: '📊' }
    ]
  },
  {
    title: 'Stickers',
    link: '/shop',
    items: [
      { label: 'Waterproof Vinyl Stickers', link: '/shop', icon: '💧' },
      { label: 'Custom Die-Cut Stickers', link: '/shop', icon: '✂️' },
      { label: 'Round Product Stickers', link: '/shop', icon: '⚪' },
      { label: 'Packaging Seal Labels', link: '/shop', icon: '🔒' }
    ]
  },
  {
    title: 'Advertising',
    link: '/shop',
    items: [
      { label: 'Visiting Cards & Cards', link: '/shop', icon: '📇' },
      { label: 'Custom Thank You Cards', link: '/shop', icon: '💌' },
      { label: 'Rubber Stamps & Seals', link: '/shop', icon: '💮' },
      { label: 'Letterheads & Stationery', link: '/shop', icon: '📄' },
      { label: 'QR Code Standees & Cards', link: '/shop', icon: '📱' }
    ]
  },
  {
    title: 'Disposable Products',
    link: '/shop',
    items: [
      { label: 'Paper Dona & Bowls', link: '/shop', icon: '🥣' },
      { label: 'Paper Plates & Platters', link: '/shop', icon: '🍽️' },
      { label: 'Silver Dona', link: '/shop', icon: '✨' },
      { label: 'Silver Laminated Plates', link: '/shop', icon: '🥈' }
    ]
  }
];

export function Header() {
  const router = useRouter();
  const { cartCount, setIsCartOpen } = useCart();
  const [tickerText, setTickerText] = useState(initialHomepageConfig.tickerText);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    fetch('/api/homepage')
      .then(res => res.json())
      .then(data => {
        if (data?.tickerText) {
          setTickerText(data.tickerText);
        }
      })
      .catch(() => {});
  }, []);

  const handleMouseEnter = (title: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 120);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/shop');
    }
  };

  return (
    <>
      <style>{`
        /* Mobile Header Optimizations */
        @media (max-width: 768px) {
          .header-container { flex-direction: column !important; gap: 12px !important; padding: 10px !important; }
          .header-search-row { width: 100% !important; flex-direction: column !important; gap: 10px !important; }
          .header-icons { width: 100% !important; justify-content: space-around !important; margin-top: 5px !important; gap: 10px !important; }
          .top-socials { display: none !important; }
          .dark-nav-container { overflow-x: auto !important; white-space: nowrap !important; justify-content: flex-start !important; padding: 12px 15px !important; gap: 20px !important; }
          .dark-nav-container::-webkit-scrollbar { display: none; }
          .logo-container { width: 200px !important; height: 56px !important; margin: 0 auto; }
          .bulk-order-btn { width: 100%; padding: 10px !important; font-size: 0.95rem !important; }
        }
        
        /* Button & Ticker Animation */
        .bulk-order-btn {
          background: linear-gradient(135deg, #10B981 0%, #047857 100%);
          color: #fff;
          padding: 10px 24px;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 800;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
          transition: all 0.25s ease;
          border: 1px solid rgba(255,255,255,0.2);
          width: max-content;
          cursor: pointer;
        }
        .bulk-order-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
          background: linear-gradient(135deg, #059669 0%, #065F46 100%);
        }
        
        .header-marquee {
          display: flex;
          white-space: nowrap;
          animation: headerMarqueeAnim 22s linear infinite;
        }
        @keyframes headerMarqueeAnim {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .header-marquee-box:hover .header-marquee {
          animation-play-state: paused;
        }

        /* Navigation Item & Dropdown Bridge */
        .nav-item-root {
          position: relative;
          padding: 12px 0;
        }

        .nav-link-btn {
          color: #ffffff;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: color 0.2s ease;
          background: none;
          border: none;
          padding: 0;
        }
        .nav-link-btn:hover,
        .nav-item-root.active-menu .nav-link-btn {
          color: #FBBF24;
        }

        /* Invisible bridge above dropdown to guarantee hover never breaks */
        .nav-dropdown-panel {
          position: absolute;
          top: 100%;
          left: 0;
          background: #ffffff;
          min-width: 260px;
          box-shadow: 0 14px 30px rgba(0,0,0,0.18), 0 4px 10px rgba(0,0,0,0.06);
          padding: 8px 0;
          z-index: 999;
          border-radius: 10px;
          border: 1px solid #E2E8F0;
          animation: dropSlideDown 0.15s ease-out;
        }

        /* Hover bridge overlay connecting trigger to panel */
        .nav-dropdown-panel::before {
          content: '';
          position: absolute;
          top: -14px;
          left: 0;
          right: 0;
          height: 14px;
          background: transparent;
        }

        @keyframes dropSlideDown {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dropdown-sub-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 18px;
          color: #1E293B;
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 600;
          transition: all 0.15s ease;
          border-left: 3px solid transparent;
          cursor: pointer;
        }
        .dropdown-sub-link:hover {
          background: #F1F5F9;
          color: #E11D48;
          border-left: 3px solid #E11D48;
          padding-left: 22px;
        }

        /* Direct click button styles */
        .header-icon-action {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          text-decoration: none;
          color: inherit;
          padding: 0;
          transition: transform 0.15s ease;
        }
        .header-icon-action:hover {
          transform: translateY(-1px);
        }
      `}</style>
      
      {/* 1. Top Announcement Bar */}
      <div className="header-marquee-box" style={{ background: '#E11D48', color: '#fff', fontSize: '0.85rem', fontWeight: 700, padding: '8px 0', overflow: 'hidden', display: 'flex', width: '100%' }}>
        <div className="header-marquee">
          <span style={{ padding: '0 40px', letterSpacing: '0.5px' }}>{tickerText}</span>
          <span style={{ padding: '0 40px', letterSpacing: '0.5px' }}>{tickerText}</span>
          <span style={{ padding: '0 40px', letterSpacing: '0.5px' }}>{tickerText}</span>
          <span style={{ padding: '0 40px', letterSpacing: '0.5px' }}>{tickerText}</span>
        </div>
      </div>
      
      {/* 2. Main Header */}
      <header style={{ background: '#F8FAFC', padding: '14px 0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          
          {/* Logo with Direct Home Redirect on Single Click */}
          <Link 
            href="/" 
            className="logo-container" 
            title="AS Print Gallery - Home"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              flexShrink: 0, 
              width: '210px', 
              height: '65px', 
              overflow: 'hidden',
              cursor: 'pointer'
            }}
          >
            <img 
              src="/logo.png" 
              alt="AS Print Gallery Logo" 
              style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', pointerEvents: 'none' }} 
            />
          </Link>

          {/* Center: Search & Bulk Order Button */}
          <div className="header-search-row" style={{ flex: 1, display: 'flex', gap: '14px', alignItems: 'center', justifyContent: 'center', maxWidth: '650px' }}>
            <form onSubmit={handleSearchSubmit} style={{ flex: 1, width: '100%', display: 'flex', background: '#fff', border: '1.5px solid #CBD5E1', borderRadius: '30px', overflow: 'hidden', padding: '2px 8px 2px 14px', boxShadow: '0 2px 4px rgba(0,0,0,0.03)' }}>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search boxes, labels, tags, stickers..." 
                style={{ flex: 1, width: '100%', padding: '9px 6px', border: 'none', outline: 'none', fontSize: '0.92rem', color: '#1E293B', background: 'transparent' }} 
              />
              <button 
                type="submit" 
                style={{ background: 'none', border: 'none', color: '#65A34A', padding: '6px 10px', fontSize: '1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                aria-label="Search"
              >
                🔍
              </button>
            </form>
            
            <a 
              href="https://wa.me/919911678386?text=Hi%20AS%20Print%20Gallery,%20I%20need%20a%20bulk%20order%20quotation" 
              target="_blank" 
              rel="noreferrer" 
              className="bulk-order-btn"
            >
              💬 BULK ORDER
            </a>
          </div>

          {/* Icons & Socials */}
          <div className="header-icons" style={{ display: 'flex', gap: '22px', alignItems: 'center', flexShrink: 0 }}>
             {/* Social Links */}
             <div className="top-socials" style={{ display: 'flex', gap: '12px', alignItems: 'center', paddingRight: '15px', borderRight: '1.5px solid #E2E8F0' }}>
               <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'flex' }} aria-label="Facebook">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
               </a>
               <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'flex' }} aria-label="Instagram">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="#E1306C"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
               </a>
               <a href="https://youtube.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'flex' }} aria-label="YouTube">
                 <svg width="22" height="22" viewBox="0 0 24 24" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
               </a>
             </div>

             {/* Admin / Account Direct Click Link */}
             <Link 
               href="/admin/login" 
               className="header-icon-action"
               title="Admin & Account"
             >
               <span style={{ fontSize: '1.3rem', pointerEvents: 'none' }}>👤</span>
               <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#334155', pointerEvents: 'none' }}>Account</span>
             </Link>

             {/* Cart Button with Count Badge */}
             <button 
               type="button" 
               onClick={() => setIsCartOpen(true)}
               className="header-icon-action"
               style={{ position: 'relative' }}
               aria-label="Open Cart"
             >
               <span style={{ fontSize: '1.3rem', pointerEvents: 'none' }}>🛒</span>
               <span style={{ 
                 position: 'absolute', 
                 top: '-6px', 
                 right: '-4px', 
                 background: '#E11D48', 
                 color: '#fff', 
                 fontSize: '0.65rem', 
                 fontWeight: 800, 
                 width: '19px', 
                 height: '19px', 
                 borderRadius: '50%', 
                 display: 'flex', 
                 alignItems: 'center', 
                 justifyContent: 'center',
                 boxShadow: '0 2px 4px rgba(225, 29, 72, 0.4)',
                 pointerEvents: 'none'
               }}>
                 {cartCount}
               </span>
               <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#334155', pointerEvents: 'none' }}>Cart</span>
             </button>
          </div>
        </div>
      </header>

      {/* 3. Dark Navigation Bar with 1-Click Smooth Dropdowns */}
      <nav style={{ background: '#1E293B', color: '#fff', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container dark-nav-container" style={{ display: 'flex', justifyContent: 'center', gap: '32px', padding: '0' }}>
          
          {NAV_CATEGORIES.map((category) => {
            const isOpen = activeDropdown === category.title;
            return (
              <div 
                key={category.title}
                className={`nav-item-root ${isOpen ? 'active-menu' : ''}`}
                onMouseEnter={() => handleMouseEnter(category.title)}
                onMouseLeave={handleMouseLeave}
              >
                <Link 
                  href={category.link}
                  className="nav-link-btn"
                  onClick={() => setActiveDropdown(null)}
                >
                  <span style={{ pointerEvents: 'none' }}>{category.title}</span>
                  <span style={{ fontSize: '0.65rem', opacity: 0.8, transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', pointerEvents: 'none' }}>▼</span>
                </Link>

                {isOpen && (
                  <div 
                    className="nav-dropdown-panel"
                    onMouseEnter={() => handleMouseEnter(category.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {category.items.map((subItem) => (
                      <Link 
                        key={subItem.label} 
                        href={subItem.link}
                        className="dropdown-sub-link"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {subItem.icon && <span style={{ fontSize: '1rem', pointerEvents: 'none' }}>{subItem.icon}</span>}
                        <span style={{ pointerEvents: 'none' }}>{subItem.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Customize link */}
          <div className="nav-item-root">
             <Link 
               href="/3d-box-builder" 
               className="nav-link-btn"
               style={{ color: '#38BDF8' }}
             >
               <span style={{ pointerEvents: 'none' }}>✨ 3D Box Builder</span>
             </Link>
          </div>
          
          {/* Track Order link */}
          <div className="nav-item-root">
             <Link 
               href="/track-order" 
               className="nav-link-btn"
             >
               <span style={{ pointerEvents: 'none' }}>🚚 Track Order</span>
             </Link>
          </div>
          
        </div>
      </nav>
    </>
  );
}
