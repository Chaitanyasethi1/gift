'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { initialHomepageConfig } from '@/data/homepageData';
import { PRODUCTS } from '@/data/products';
import { MenuIcon, ShoppingCartIcon, UserIcon, WhatsAppIcon } from '@/components/Icons';

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
    link: '/category/carry-bags',
    items: [
      { label: 'Craft Paper Bag', link: '/category/kraft-carry-bags', icon: '🛍️' },
      { label: 'Non Woven Bag', link: '/category/printed-carry-bags', icon: '🎨' },
      { label: 'Jute Bag', link: '/category/handle-carry-bags', icon: '👜' },
      { label: 'Laminate Bag', link: '/category/paper-bags-mailers', icon: '✉️' },
      { label: 'Multi Colour Paper Bag', link: '/category/multi-colour-paper-bag', icon: '🛍️' }
    ]
  },
  {
    title: 'Packaging Material',
    link: '/category/packaging-boxes',
    items: [
      { label: '3 Ply Corrugated Boxes', link: '/category/craft-3-ply-box', icon: '📦' },
      { label: '3 Ply White Boxes', link: '/category/3-ply-white-corrugated-boxes', icon: '📦' },
      { label: 'Brown Flap Box', link: '/category/brown-flap-box', icon: '📦' },
      { label: 'White Flap Box', link: '/category/white-flap-box', icon: '📦' },
      { label: 'Garments Boxes', link: '/category/garment-boxes', icon: '👔' },
      { label: 'Hamper Boxes', link: '/category/gift-boxes', icon: '🎁' },
      { label: 'Sweet Boxes', link: '/category/sweet-boxes', icon: '🍰' },
      { label: 'Pizza Boxes', link: '/category/pizza-boxes', icon: '🍕' },
      { label: 'Rigid Luxury Boxes', link: '/category/rigid-boxes', icon: '🎁' },
      { label: 'Food Packaging Boxes & Containers', link: '/category/food-packaging', icon: '🍔' }
    ]
  },
  {
    title: 'Labels & Tags',
    link: '/category/labels-tags',
    items: [
      { label: 'Woven Labels', link: '/category/woven-labels', icon: '🧵' },
      { label: 'Satin Labels', link: '/category/satin-labels', icon: '🏷️' },
      { label: 'Hang Tags', link: '/category/hang-tags', icon: '🔖' }
    ]
  },
  {
    title: 'Stickers',
    link: '/category/stickers',
    items: [
      { label: 'Product & Packaging', link: '/category/product-stickers', icon: '💧' },
      { label: 'Thank You Stickers', link: '/category/thank-you-stickers', icon: '⭐' },
      { label: 'School & Stationery', link: '/category/round-stickers', icon: '⚪' },
      { label: 'Barcode & QR', link: '/category/custom-stickers', icon: '✂️' },
      { label: 'Food & Bakery', link: '/category/packaging-labels', icon: '🔒' },
      { label: 'Garment Stickers', link: '/category/garment-stickers', icon: '🏷️' }
    ]
  },
  {
    title: 'Advertising',
    link: '/category/advertising',
    items: [
      { label: 'Visiting Cards', link: '/category/visiting-cards', icon: '📇' },
      { label: 'Thank You Cards', link: '/category/thank-you-cards', icon: '💌' },
      { label: 'Rubber Stamps', link: '/category/rubber-stamps', icon: '💮' },
      { label: 'Letterheads', link: '/category/letterheads', icon: '📄' },
      { label: 'Bill Book', link: '/category/qr-code-cards', icon: '📖' }
    ]
  },
  {
    title: 'Disposable Products',
    link: '/category/disposable-products',
    items: [
      { label: 'Plastic Jar', link: '/category/paper-dona', icon: '🥣' },
      { label: 'Glass Jar', link: '/category/paper-plates', icon: '🍽️' },
      { label: 'Paper Cups & Glass', link: '/category/paper-cups-glass', icon: '🥤' },
      { label: 'Tissue & Napkins', link: '/category/silver-plates', icon: '🥈' },
      { label: 'Food Containers & Trays', link: '/category/food-containers-trays', icon: '🍱' },
      { label: 'Cutlery Set', link: '/category/silver-dona', icon: '✨' }
    ]
  }
];

export function Header() {
  const router = useRouter();
  const { cartCount, setIsCartOpen, setIsCategoryDrawerOpen } = useCart();
  const [tickerText, setTickerText] = useState(initialHomepageConfig.tickerText);
  const [tickerActive, setTickerActive] = useState(initialHomepageConfig.tickerActive);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [allProducts, setAllProducts] = useState<any[]>(PRODUCTS);
  const [navCategories, setNavCategories] = useState<NavCategory[]>(NAV_CATEGORIES);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownEnterTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navWrapperRef = useRef<HTMLElement | null>(null);
  const searchContainerRef = useRef<HTMLDivElement | null>(null);
  const mobileSearchContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 1. Fetch Ticker Text & Active Products for Instant Search Indexing
    fetch('/api/homepage')
      .then(res => res.json())
      .then(data => {
        if (data) {
          if (data.tickerText !== undefined) setTickerText(data.tickerText);
          if (data.tickerActive !== undefined) setTickerActive(data.tickerActive);
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
                link: `/category/${m.slug}`,
                items: subs.length > 0
                  ? subs.map(s => ({
                      label: s.name,
                      link: `/category/${s.slug}`,
                      icon: '📦'
                    }))
                  : [{ label: `All ${m.name}`, link: `/category/${m.slug}`, icon: '🛍️' }]
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

  // Click Outside to Close Search Autocomplete & Nav Dropdowns
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      const insideDesktop = searchContainerRef.current && searchContainerRef.current.contains(target);
      const insideMobile = mobileSearchContainerRef.current && mobileSearchContainerRef.current.contains(target);
      if (!insideDesktop && !insideMobile) {
        setIsSearchFocused(false);
      }

      const insideNav = navWrapperRef.current && navWrapperRef.current.contains(target);
      if (!insideNav) {
        setActiveDropdown(null);
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
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleCategoryToggle = (e: React.MouseEvent, category: NavCategory) => {
    if (category.items && category.items.length > 0) {
      e.preventDefault();
      e.stopPropagation();
      setActiveDropdown(prev => prev === category.title ? null : category.title);
    }
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
            let displayPrice = Number(prod.selling_price || prod.price || 10);
            let packLabel = '';
            if (prod.price_tiers && Array.isArray(prod.price_tiers) && prod.price_tiers.length > 0) {
              const firstTier = prod.price_tiers[0];
              displayPrice = Number(firstTier.packPrice || firstTier.price || displayPrice);
              if (firstTier.pack) packLabel = `Pack of ${firstTier.pack}`;
            } else if (prod.bulk_pricing && Array.isArray(prod.bulk_pricing) && prod.bulk_pricing.length > 0) {
              const first = prod.bulk_pricing[0];
              if (first.price) displayPrice = Number(first.price);
              if (first.label) {
                const m = first.label.match(/₹([\d,]+)/);
                if (m) displayPrice = Number(m[1].replace(/,/g, ''));
                packLabel = first.label.split('(')[0].trim();
              }
            } else if (prod.pack_qty) {
              packLabel = `Pack of ${prod.pack_qty}`;
            }
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
                    <span style={{ color: '#16A34A', fontWeight: 800 }}>₹{Math.round(displayPrice)}</span>
                    {packLabel ? <span style={{ color: '#64748B', fontSize: '0.68rem', fontWeight: 600 }}>({packLabel})</span> : null}
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
          background: #16A34A;
          color: #ffffff;
          padding: 8px 18px;
          border-radius: 24px;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(22, 163, 74, 0.25);
          transition: all 0.2s ease;
          border: none;
          width: max-content;
          cursor: pointer;
        }
        .bulk-order-btn:hover {
          background: #15803D;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(22, 163, 74, 0.35);
        }
        
        .header-marquee {
          display: flex;
          white-space: nowrap;
          animation: headerMarqueeAnim 22s linear infinite;
          will-change: transform;
        }
        @keyframes headerMarqueeAnim {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .header-marquee-box:hover .header-marquee {
          animation-play-state: paused;
        }

        .dark-nav-wrapper {
          overflow: visible !important;
          position: relative;
          z-index: 999;
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
          color: #FDBA74;
        }

        .nav-dropdown-panel {
          position: absolute;
          top: 100%;
          left: 0;
          background: #ffffff;
          min-width: 260px;
          box-shadow: 0 16px 36px rgba(0,0,0,0.22), 0 4px 12px rgba(0,0,0,0.08);
          padding: 8px 0;
          z-index: 99999;
          border-radius: 10px;
          border: 1px solid #E2E8F0;
          display: none;
          pointer-events: none;
        }

        .nav-item-root:hover .nav-dropdown-panel,
        .nav-item-root.active-menu .nav-dropdown-panel,
        .nav-dropdown-panel.is-open {
          display: block !important;
          pointer-events: auto !important;
        }

        .nav-item-root:hover .nav-link-btn,
        .nav-item-root.active-menu .nav-link-btn {
          color: #FDBA74;
        }

        .nav-item-root:hover .nav-arrow,
        .nav-item-root.active-menu .nav-arrow {
          transform: rotate(180deg) !important;
        }

        .nav-item-root:nth-last-child(-n+3) .nav-dropdown-panel {
          left: auto;
          right: 0;
        }

        .nav-dropdown-panel::before {
          content: '';
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          height: 24px;
          background: transparent;
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
          background: #EFF6FF;
          color: #1D4ED8;
          border-left: 3px solid #1D4ED8;
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
      
      {/* 1. Top Announcement Marquee Bar (Dynamically driven by active coupon/banner) */}
      {tickerActive && tickerText ? (
        <div className="header-marquee-box" style={{ background: '#1D4ED8', color: '#fff', fontSize: '0.85rem', fontWeight: 700, padding: '7px 0', overflow: 'hidden', display: 'flex', width: '100%' }}>
          <div className="header-marquee">
            <span style={{ padding: '0 40px', letterSpacing: '0.5px' }}>{tickerText}</span>
            <span style={{ padding: '0 40px', letterSpacing: '0.5px' }}>{tickerText}</span>
            <span style={{ padding: '0 40px', letterSpacing: '0.5px' }}>{tickerText}</span>
            <span style={{ padding: '0 40px', letterSpacing: '0.5px' }}>{tickerText}</span>
          </div>
        </div>
      ) : null}
      
      {/* STICKY HEADER & CATEGORY TASKBAR CONTAINER */}
      <div 
        className="site-sticky-header-wrapper" 
        style={{ 
          position: 'sticky', 
          top: 0, 
          zIndex: 1000, 
          background: '#FFFFFF',
          boxShadow: '0 2px 10px rgba(0,0,0,0.06)'
        }}
      >
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
                  gap: '4px',
                  border: '1px solid #A7F3D0'
                }}
              >
                <WhatsAppIcon size={14} color="#047857" />
                <span>Bulk Order</span>
              </a>

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
                    background: '#1D4ED8',
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
                    boxShadow: '0 2px 4px rgba(29, 78, 216, 0.4)'
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
              border: isSearchFocused ? '1.5px solid #1D4ED8' : '1.5px solid #CBD5E1',
              borderRadius: '24px',
              padding: '2px 10px 2px 12px',
              transition: 'all 0.2s ease',
              boxShadow: isSearchFocused ? '0 0 0 3px rgba(29, 78, 216, 0.12)' : 'none'
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
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <WhatsAppIcon size={18} color="#FFFFFF" />
              <span>BULK ORDER</span>
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
                 background: '#1D4ED8', 
                 color: '#fff', 
                 fontSize: '0.65rem', 
                 fontWeight: 800, 
                 width: '19px', 
                 height: '19px', 
                 borderRadius: '50%', 
                 display: 'flex', 
                 alignItems: 'center', 
                 justifyContent: 'center',
                 boxShadow: '0 2px 4px rgba(29, 78, 216, 0.4)'
               }}>
                 {cartCount}
               </span>
               <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#334155' }}>Cart</span>
             </button>
          </div>
        </div>
      </header>

      {/* 4. Desktop Dark Navigation Bar with Smooth Dropdowns (Hidden on Mobile) */}
      <nav ref={navWrapperRef} className="dark-nav-wrapper" style={{ background: '#1E293B', color: '#fff', borderTop: '1px solid rgba(255,255,255,0.06)', overflow: 'visible', position: 'relative', zIndex: 999 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'clamp(14px, 2vw, 28px)', padding: '0 15px', flexWrap: 'nowrap', overflow: 'visible' }}>
          
          {navCategories.map((category) => {
            const isOpen = activeDropdown === category.title;
            const hasItems = category.items && category.items.length > 0;
            const isWide = (category.items?.length || 0) > 7;
            return (
              <div 
                key={category.title}
                className={`nav-item-root ${isOpen ? 'active-menu' : ''}`}
                onMouseEnter={() => handleMouseEnter(category.title)}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  type="button"
                  className="nav-link-btn"
                  onClick={(e) => handleCategoryToggle(e, category)}
                  aria-expanded={isOpen}
                >
                  <span>{category.title}</span>
                  {hasItems && (
                    <span className="nav-arrow" style={{ fontSize: '0.65rem', opacity: 0.8, transition: 'transform 0.15s ease' }}>▼</span>
                  )}
                </button>

                {hasItems && (
                  <div 
                    className={`nav-dropdown-panel ${isOpen ? 'is-open' : ''}`}
                    style={isWide ? { minWidth: '520px', width: 'max-content', maxWidth: '640px', padding: '10px' } : undefined}
                  >
                    <div style={isWide ? { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4px' } : undefined}>
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
                    <div style={{ borderTop: '1px solid #F1F5F9', marginTop: 6, paddingTop: 6 }}>
                      <Link
                        href={category.link}
                        className="dropdown-sub-link"
                        style={{ color: '#EA580C', fontWeight: 600 }}
                        onClick={() => setActiveDropdown(null)}
                      >
                        <span style={{ fontSize: '0.9rem' }}>📂</span>
                        <span>View All {category.title} →</span>
                      </Link>
                    </div>
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
      </div>
    </>
  );
}
