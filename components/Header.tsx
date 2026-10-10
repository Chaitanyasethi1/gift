'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { initialHomepageConfig } from '@/data/homepageData';
import { PRODUCTS } from '@/data/products';
import { MenuIcon, ShoppingCartIcon, UserIcon } from '@/components/Icons';

interface NavCategory {
  title: string;
  link: string;
  items: { label: string; link: string; icon?: string }[];
}

const POPULAR_SEARCH_TERMS = [
  'Corrugated Boxes',
  '3-Ply Shipping Box',
  '5-Ply Heavy Duty Cartons',
  'Kraft Paper Bags',
  'Printed Carry Bags',
  'Handle Paper Bags',
  'Woven Brand Labels',
  'Printed Satin Labels',
  'Clothing Hang Tags',
  'Waterproof Vinyl Stickers',
  'Custom Die-Cut Stickers',
  'Custom Pizza Boxes',
  'Paper Mailers Lifafa',
  'Garment & Apparel Boxes',
  'Sweet & Bakery Boxes',
  'Visiting Cards',
  'Barcode Stickers'
];

const NAV_CATEGORIES: NavCategory[] = [
  {
    title: 'Carry Bags',
    link: '/shop?category=carry-bags',
    items: [
      { label: 'Kraft Paper Bags', link: '/shop?category=kraft-paper-bags', icon: '🛍️' },
      { label: 'Printed Carry Bags', link: '/shop?category=printed-carry-bags', icon: '🎨' },
      { label: 'Handle Paper Bags', link: '/shop?category=handle-paper-bags', icon: '👜' },
      { label: 'Paper Mailers & Lifafa', link: '/shop?category=paper-courier-mailers', icon: '✉️' }
    ]
  },
  {
    title: 'Packaging Material',
    link: '/shop?category=packaging-material',
    items: [
      { label: 'Corrugated Boxes (3 & 5 Ply)', link: '/corrugated-boxes-delhi', icon: '📦' },
      { label: 'Garment & Apparel Boxes', link: '/shop?category=garment-boxes', icon: '👔' },
      { label: 'Gift & Luxury Boxes', link: '/shop?category=luxury-boxes', icon: '🎁' },
      { label: 'Sweet & Bakery Boxes', link: '/shop?category=sweet-bakery-boxes', icon: '🍰' },
      { label: 'Custom Printed Pizza Boxes', link: '/shop?category=pizza-boxes', icon: '🍕' },
      { label: 'Custom Master Cartons', link: '/corrugated-boxes-ghaziabad', icon: '🏭' }
    ]
  },
  {
    title: 'Labels & Tags',
    link: '/shop?category=labels-tags',
    items: [
      { label: 'Woven Brand Labels', link: '/shop?category=woven-labels', icon: '🧵' },
      { label: 'Printed Satin Labels', link: '/shop?category=satin-labels', icon: '🏷️' },
      { label: 'Clothing Hang Tags', link: '/shop?category=hang-tags', icon: '🔖' },
      { label: 'Wash Care Labels', link: '/shop?category=wash-care-labels', icon: '👕' },
      { label: 'Barcode & SKU Stickers', link: '/shop?category=barcode-stickers', icon: '📊' }
    ]
  },
  {
    title: 'Stickers',
    link: '/shop?category=stickers',
    items: [
      { label: 'Waterproof Vinyl Stickers', link: '/shop?category=vinyl-stickers', icon: '💧' },
      { label: 'Custom Die-Cut Stickers', link: '/shop?category=die-cut-stickers', icon: '✂️' },
      { label: 'Round Product Stickers', link: '/shop?category=round-stickers', icon: '⚪' },
      { label: 'Packaging Seal Labels', link: '/shop?category=seal-labels', icon: '🔒' }
    ]
  },
  {
    title: 'Advertising',
    link: '/shop?category=advertising',
    items: [
      { label: 'Visiting Cards & Cards', link: '/shop?category=visiting-cards', icon: '📇' },
      { label: 'Custom Thank You Cards', link: '/shop?category=thank-you-cards', icon: '💌' },
      { label: 'Rubber Stamps & Seals', link: '/shop?category=rubber-stamps', icon: '💮' },
      { label: 'Letterheads & Stationery', link: '/shop?category=stationery', icon: '📄' },
      { label: 'QR Code Standees & Cards', link: '/shop?category=qr-standees', icon: '📱' }
    ]
  },
  {
    title: 'Disposable Products',
    link: '/shop?category=disposable',
    items: [
      { label: 'Paper Dona & Bowls', link: '/shop?category=paper-dona', icon: '🥣' },
      { label: 'Paper Plates & Platters', link: '/shop?category=paper-plates', icon: '🍽️' },
      { label: 'Silver Dona', link: '/shop?category=silver-dona', icon: '✨' },
      { label: 'Silver Laminated Plates', link: '/shop?category=silver-plates', icon: '🥈' }
    ]
  }
];

export function Header() {
  const router = useRouter();
  const { cartCount, setIsCartOpen, setIsCategoryDrawerOpen } = useCart();
  const [tickerText, setTickerText] = useState(initialHomepageConfig.tickerText);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [allProducts, setAllProducts] = useState<any[]>(PRODUCTS);
  const [navCategories, setNavCategories] = useState<NavCategory[]>(NAV_CATEGORIES);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const searchContainerRef = useRef<HTMLDivElement | null>(null);
  const mobileSearchContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 1. Fetch Ticker Text & Active Products for Instant Search Indexing
    fetch('/api/homepage')
      .then(res => res.json())
      .then(data => {
        if (data?.tickerText) {
          setTickerText(data.tickerText);
        }
      })
      .catch(() => {});

    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setAllProducts(data);
        }
      })
      .catch(() => {});

    // 2. Dynamically Fetch Categories & Subcategories from Admin
    fetch('/api/categories')
      .then(res => res.json())
      .then(data => {
        if (data?.categories && Array.isArray(data.categories) && data.categories.length > 0) {
          const all: any[] = data.categories;
          const main = all
            .filter(c => (!c.parent_id || c.parent_id === 'null' || c.parent_id === '') && c.show_in_menu !== false)
            .sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));
          
          if (main.length > 0) {
            const mapped: NavCategory[] = main.map(m => {
              const subs = all
                .filter(s => s.parent_id === m.id && s.show_in_menu !== false)
                .sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));
              
              return {
                title: m.name,
                link: `/shop?category=${m.slug}`,
                items: subs.length > 0
                  ? subs.map(s => ({
                      label: s.name,
                      link: `/shop?category=${s.slug}`,
                      icon: '📦'
                    }))
                  : [{ label: `All ${m.name}`, link: `/shop?category=${m.slug}`, icon: '🛍️' }]
              };
            });

            if (mapped.length > 0) {
              setNavCategories(mapped);
            }
          }
        }
      })
      .catch(() => {});
  }, []);

  // Click Outside to Close Search Autocomplete
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      const insideDesktop = searchContainerRef.current && searchContainerRef.current.contains(target);
      const insideMobile = mobileSearchContainerRef.current && mobileSearchContainerRef.current.contains(target);
      if (!insideDesktop && !insideMobile) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Real-Time Live Search Suggestions Calculation
  const { suggestedTerms, matchingProducts } = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) {
      return {
        suggestedTerms: POPULAR_SEARCH_TERMS.slice(0, 6),
        matchingProducts: allProducts.slice(0, 4)
      };
    }

    const terms = POPULAR_SEARCH_TERMS.filter(t => t.toLowerCase().includes(q));
    
    const productTitles = allProducts
      .map(p => p.title || p.name)
      .filter(Boolean)
      .filter(t => t.toLowerCase().includes(q));

    const combinedTerms = Array.from(new Set([...terms, ...productTitles])).slice(0, 6);

    const prods = allProducts.filter(p => {
      const name = (p.title || p.name || '').toLowerCase();
      const desc = (p.description || p.desc || '').toLowerCase();
      const cat = (p.categoryLabel || p.category || '').toLowerCase();
      return name.includes(q) || desc.includes(q) || cat.includes(q);
    }).slice(0, 4);

    return {
      suggestedTerms: combinedTerms,
      matchingProducts: prods
    };
  }, [searchQuery, allProducts]);

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

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsSearchFocused(false);
    if (searchQuery.trim()) {
      router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/shop');
    }
  };

  const handleSelectTerm = (term: string) => {
    setSearchQuery(term);
    setIsSearchFocused(false);
    router.push(`/shop?q=${encodeURIComponent(term)}`);
  };

  const handleSelectProduct = (prod: any) => {
    setIsSearchFocused(false);
    const slug = prod.slug || prod.id;
    router.push(`/products/${slug}`);
  };

  // Reusable Live Autocomplete Suggestions Box
  const renderSearchDropdown = () => (
    <div 
      style={{
        position: 'absolute',
        top: 'calc(100% + 6px)',
        left: 0,
        right: 0,
        background: '#FFFFFF',
        borderRadius: '12px',
        border: '1px solid #E2E8F0',
        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.16)',
        zIndex: 99999,
        overflow: 'hidden',
        maxHeight: '420px',
        overflowY: 'auto'
      }}
    >
      {/* Header Title */}
      <div style={{ padding: '8px 14px', background: '#F8FAFC', borderBottom: '1px solid #F1F5F9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {searchQuery.trim() ? 'Search Suggestions' : '🔥 Popular Searches'}
        </span>
        <span style={{ fontSize: '0.68rem', color: '#94A3B8' }}>Tap to select</span>
      </div>

      {/* 1. Suggested Query Keywords */}
      {suggestedTerms.length > 0 && (
        <div style={{ padding: '4px 0', borderBottom: matchingProducts.length > 0 ? '1px solid #F1F5F9' : 'none' }}>
          {suggestedTerms.map((term, idx) => {
            const qLower = searchQuery.trim().toLowerCase();
            const termLower = term.toLowerCase();
            const matchIndex = qLower ? termLower.indexOf(qLower) : -1;

            return (
              <div
                key={idx}
                onClick={() => handleSelectTerm(term)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  fontSize: '0.88rem',
                  color: '#1E293B',
                  transition: 'background 0.12s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#F1F5F9')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <span style={{ color: '#94A3B8', fontSize: '0.85rem' }}>🔍</span>
                <div style={{ flex: 1 }}>
                  {matchIndex >= 0 ? (
                    <span>
                      {term.substring(0, matchIndex)}
                      <strong style={{ color: '#0F172A', fontWeight: 800 }}>
                        {term.substring(matchIndex, matchIndex + qLower.length)}
                      </strong>
                      {term.substring(matchIndex + qLower.length)}
                    </span>
                  ) : (
                    <span>{term}</span>
                  )}
                </div>
                <span style={{ color: '#CBD5E1', fontSize: '0.75rem' }}>↗</span>
              </div>
            );
          })}
        </div>
      )}

      {/* 2. Direct Matching Products with Thumbnails & Rates */}
      {matchingProducts.length > 0 && (
        <div style={{ padding: '6px 0', background: '#FAFAFC' }}>
          <div style={{ padding: '4px 16px 6px', fontSize: '0.72rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase' }}>
            📦 Products Matching &quot;{searchQuery.trim() || 'Catalog'}&quot;
          </div>
          {matchingProducts.map((prod) => {
            let firstImg = prod.image || '/assets/corrugated_box.jpg';
            if (Array.isArray(prod.images) && prod.images.length > 0 && prod.images[0]) firstImg = prod.images[0];
            const price = Number(prod.selling_price || prod.price || 10);
            const title = prod.title || prod.name || 'Product';

            return (
              <div
                key={prod.id}
                onClick={() => handleSelectProduct(prod)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  background: '#FFFFFF',
                  borderBottom: '1px solid #F1F5F9',
                  transition: 'background 0.12s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#F8FAFC')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#FFFFFF')}
              >
                <img
                  src={firstImg}
                  alt={title}
                  style={{ width: '40px', height: '40px', objectFit: 'contain', borderRadius: '6px', background: '#F8FAFC', border: '1px solid #E2E8F0', flexShrink: 0 }}
                  onError={(e: any) => { e.target.src = '/assets/corrugated_box.jpg'; }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {title}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span>{prod.categoryLabel || 'Packaging'}</span>
                    <span>•</span>
                    <span style={{ color: '#16A34A', fontWeight: 800 }}>₹{price.toFixed(2)}/pc</span>
                  </div>
                </div>
                <button
                  type="button"
                  style={{
                    background: '#F1F5F9',
                    border: '1px solid #CBD5E1',
                    borderRadius: '4px',
                    padding: '3px 8px',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: '#0F172A'
                  }}
                >
                  View
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* 3. See All Results Footer Row */}
      {searchQuery.trim() && (
        <div
          onClick={() => handleSearchSubmit()}
          style={{
            padding: '10px 16px',
            background: '#F0FDF4',
            borderTop: '1px solid #DCFCE7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            fontSize: '0.82rem',
            fontWeight: 700,
            color: '#15803D'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#DCFCE7')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#F0FDF4')}
        >
          <span>See all results for &ldquo;<strong>{searchQuery}</strong>&rdquo;</span>
          <span>➔</span>
        </div>
      )}
    </div>
  );

  return (
    <>
      <style>{`
        /* Responsive Visibility Switches */
        @media (max-width: 768px) {
          .desktop-only-header {
            display: none !important;
          }
          .mobile-only-header {
            display: block !important;
          }
          .dark-nav-wrapper {
            display: none !important;
          }
          .header-marquee-box {
            padding: 5px 0 !important;
            font-size: 0.76rem !important;
          }
        }

        @media (min-width: 769px) {
          .mobile-only-header {
            display: none !important;
          }
          .desktop-only-header {
            display: block !important;
          }
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

        /* Desktop Navigation Item & Dropdown Bridge */
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
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
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
      
      {/* 1. Top Announcement Marquee Bar */}
      <div className="header-marquee-box" style={{ background: '#E11D48', color: '#fff', fontSize: '0.85rem', fontWeight: 700, padding: '7px 0', overflow: 'hidden', display: 'flex', width: '100%' }}>
        <div className="header-marquee">
          <span style={{ padding: '0 40px', letterSpacing: '0.5px' }}>{tickerText}</span>
          <span style={{ padding: '0 40px', letterSpacing: '0.5px' }}>{tickerText}</span>
          <span style={{ padding: '0 40px', letterSpacing: '0.5px' }}>{tickerText}</span>
          <span style={{ padding: '0 40px', letterSpacing: '0.5px' }}>{tickerText}</span>
        </div>
      </div>
      
      {/* 2. MEESHO-STYLE MOBILE HEADER (Shown on Mobile screens <= 768px) */}
      <div className="mobile-only-header" style={{ background: '#FFFFFF', borderBottom: '1px solid #E2E8F0', padding: '10px 14px' }}>
        {/* Top Row: Hamburger (Left) + Logo | Quick WhatsApp + Account + Cart (Right) */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
          
          {/* Left: ☰ Hamburger Button & Brand Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              type="button"
              onClick={() => setIsCategoryDrawerOpen(true)}
              aria-label="Open Categories Left Drawer"
              style={{
                background: 'none',
                border: 'none',
                padding: '6px',
                margin: '-6px 0 -6px -4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#0F172A',
                borderRadius: '8px'
              }}
            >
              <MenuIcon size={24} color="#0F172A" />
            </button>

            <Link 
              href="/" 
              title="AS Print Gallery Home"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <img 
                src="/logo.png" 
                alt="AS Print Gallery" 
                style={{ height: '36px', width: 'auto', maxHeight: '36px', objectFit: 'contain' }}
              />
            </Link>
          </div>

          {/* Right: Bulk Inquiry + Account + Cart */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Quick Bulk Inquiry Pill */}
            <a
              href="https://wa.me/919911678386?text=Hi%20AS%20Print%20Gallery,%20I%20need%20a%20bulk%20quote"
              target="_blank"
              rel="noreferrer"
              style={{
                background: '#ECFDF5',
                color: '#047857',
                padding: '4px 8px',
                borderRadius: '16px',
                fontSize: '0.72rem',
                fontWeight: 800,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '3px',
                border: '1px solid #A7F3D0'
              }}
            >
              <span>💬</span>
              <span>Bulk</span>
            </a>

            {/* Account Icon */}
            <Link
              href="/admin/login"
              aria-label="Account Login"
              style={{
                display: 'flex',
                alignItems: 'center',
                color: '#334155',
                textDecoration: 'none',
                padding: '4px'
              }}
            >
              <UserIcon size={21} color="#334155" />
            </Link>

            {/* Cart Icon with Counter Badge */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              aria-label="View Shopping Cart"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                position: 'relative',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                color: '#334155'
              }}
            >
              <ShoppingCartIcon size={22} color="#334155" />
              {cartCount > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-3px',
                    right: '-3px',
                    background: '#E11D48',
                    color: '#FFFFFF',
                    fontSize: '0.62rem',
                    fontWeight: 800,
                    minWidth: '17px',
                    height: '17px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 3px',
                    boxShadow: '0 2px 4px rgba(225, 29, 72, 0.4)'
                  }}
                >
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Second Row: Clean Search Bar */}
        <div ref={mobileSearchContainerRef} style={{ marginTop: '10px', position: 'relative' }}>
          <form
            onSubmit={handleSearchSubmit}
            style={{
              display: 'flex',
              alignItems: 'center',
              background: '#F8FAFC',
              border: isSearchFocused ? '1.5px solid #E11D48' : '1.5px solid #CBD5E1',
              borderRadius: '24px',
              padding: '2px 10px 2px 12px',
              transition: 'all 0.2s ease',
              boxShadow: isSearchFocused ? '0 0 0 3px rgba(225, 29, 72, 0.12)' : 'none'
            }}
          >
            <span style={{ color: '#94A3B8', fontSize: '0.92rem', marginRight: '6px' }}>🔍</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchFocused(true);
              }}
              onFocus={() => setIsSearchFocused(true)}
              placeholder="Search boxes, labels, tags, stickers..."
              style={{
                flex: 1,
                border: 'none',
                background: 'transparent',
                outline: 'none',
                padding: '7px 2px',
                fontSize: '0.86rem',
                color: '#0F172A'
              }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                style={{ background: 'none', border: 'none', color: '#94A3B8', padding: '0 6px', cursor: 'pointer', fontSize: '0.85rem' }}
                aria-label="Clear Search"
              >
                ✕
              </button>
            )}
          </form>

          {isSearchFocused && renderSearchDropdown()}
        </div>
      </div>

      {/* 3. DESKTOP MAIN HEADER (Shown on Desktop screens > 768px) */}
      <header className="desktop-only-header" style={{ background: '#F8FAFC', padding: '14px 0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          
          {/* Logo with Direct Home Redirect */}
          <Link 
            href="/" 
            title="AS Print Gallery - Home"
            prefetch={true}
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
              width={210}
              height={65}
              // @ts-ignore
              fetchPriority="high"
              decoding="async"
              style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} 
            />
          </Link>

          {/* Center: Search & Bulk Order Button */}
          <div style={{ flex: 1, display: 'flex', gap: '14px', alignItems: 'center', justifyContent: 'center', maxWidth: '650px', position: 'relative' }}>
            <div ref={searchContainerRef} style={{ flex: 1, width: '100%', position: 'relative' }}>
              <form onSubmit={handleSearchSubmit} style={{ width: '100%', display: 'flex', background: '#fff', border: isSearchFocused ? '1.5px solid #16A34A' : '1.5px solid #CBD5E1', borderRadius: '30px', overflow: 'hidden', padding: '2px 8px 2px 14px', boxShadow: isSearchFocused ? '0 0 0 3px rgba(22, 163, 74, 0.15)' : '0 2px 4px rgba(0,0,0,0.03)', transition: 'all 0.2s ease' }}>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchFocused(true);
                  }}
                  onFocus={() => setIsSearchFocused(true)}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') setIsSearchFocused(false);
                  }}
                  placeholder="Search boxes, labels, tags, stickers..." 
                  style={{ flex: 1, width: '100%', padding: '9px 6px', border: 'none', outline: 'none', fontSize: '0.92rem', color: '#1E293B', background: 'transparent' }} 
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    style={{ background: 'none', border: 'none', color: '#94A3B8', padding: '0 6px', cursor: 'pointer', fontSize: '0.9rem' }}
                    aria-label="Clear Search"
                  >
                    ✕
                  </button>
                )}
                <button 
                  type="submit" 
                  style={{ background: 'none', border: 'none', color: '#16A34A', padding: '6px 10px', fontSize: '1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                  aria-label="Search"
                >
                  🔍
                </button>
              </form>

              {isSearchFocused && renderSearchDropdown()}
            </div>
            
            <a 
              href="https://wa.me/919911678386?text=Hi%20AS%20Print%20Gallery,%20I%20need%20a%20bulk%20order%20quotation" 
              target="_blank" 
              rel="noreferrer" 
              className="bulk-order-btn"
            >
              💬 BULK ORDER
            </a>
          </div>

          {/* Desktop Right Icons */}
          <div style={{ display: 'flex', gap: '22px', alignItems: 'center', flexShrink: 0 }}>
             {/* Social Links */}
             <div style={{ display: 'flex', gap: '12px', alignItems: 'center', paddingRight: '15px', borderRight: '1.5px solid #E2E8F0' }}>
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
               prefetch={true}
             >
               <span style={{ fontSize: '1.3rem' }}>👤</span>
               <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#334155' }}>Account</span>
             </Link>

             {/* Cart Button with Count Badge */}
             <button 
               type="button" 
               onClick={() => setIsCartOpen(true)}
               className="header-icon-action"
               style={{ position: 'relative' }}
               aria-label="Open Cart"
             >
               <span style={{ fontSize: '1.3rem' }}>🛒</span>
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
                 boxShadow: '0 2px 4px rgba(225, 29, 72, 0.4)'
               }}>
                 {cartCount}
               </span>
               <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#334155' }}>Cart</span>
             </button>
          </div>
        </div>
      </header>

      {/* 4. Desktop Dark Navigation Bar with Smooth Dropdowns (Hidden on Mobile) */}
      <nav className="dark-nav-wrapper" style={{ background: '#1E293B', color: '#fff', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '32px', padding: '0' }}>
          
          {navCategories.map((category) => {
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
                  <span>{category.title}</span>
                  <span style={{ fontSize: '0.65rem', opacity: 0.8, transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>▼</span>
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
                        {subItem.icon && <span style={{ fontSize: '1rem' }}>{subItem.icon}</span>}
                        <span>{subItem.label}</span>
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
             >
               <span>Customize</span>
             </Link>
          </div>
          
          {/* Track Order link */}
          <div className="nav-item-root">
             <Link 
               href="/track-order" 
               className="nav-link-btn"
             >
               <span>🚚 Track Order</span>
             </Link>
          </div>
          
        </div>
      </nav>
    </>
  );
}
