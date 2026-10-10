'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { siteConfig } from '@/data/siteConfig';
import { 
  XIcon, 
  ChevronDownIcon, 
  ChevronUpIcon, 
  PackageIcon, 
  BoxIcon, 
  TruckIcon, 
  WhatsAppIcon, 
  PhoneIcon, 
  UserIcon 
} from './Icons';

interface NavCategory {
  title: string;
  link: string;
  items: { label: string; link: string; icon?: string }[];
}

const DEFAULT_CATEGORIES: NavCategory[] = [
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
    title: 'Advertising & Office',
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

export const CategoryDrawer: React.FC = () => {
  const pathname = usePathname();
  const { isCategoryDrawerOpen, setIsCategoryDrawerOpen, setIsQuoteModalOpen } = useCart();
  const [categories, setCategories] = useState<NavCategory[]>(DEFAULT_CATEGORIES);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First open by default

  // Sync categories dynamically if updated from admin API
  useEffect(() => {
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
              setCategories(mapped);
            }
          }
        }
      })
      .catch(() => {});
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isCategoryDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCategoryDrawerOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCategoryDrawerOpen) {
        setIsCategoryDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCategoryDrawerOpen, setIsCategoryDrawerOpen]);

  if (!isCategoryDrawerOpen) return null;

  const toggleCategory = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  const closeDrawer = () => {
    setIsCategoryDrawerOpen(false);
  };

  return (
    <>
      <style>{`
        .category-drawer-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(4px);
          z-index: 99990;
          animation: fadeInDrawerBackdrop 0.25s ease-out;
        }

        .category-drawer-panel {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          width: 86vw;
          max-width: 360px;
          background: #FFFFFF;
          z-index: 99999;
          display: flex;
          flex-direction: column;
          box-shadow: 4px 0 30px rgba(0, 0, 0, 0.25);
          animation: slideInDrawerPanel 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        @keyframes fadeInDrawerBackdrop {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInDrawerPanel {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }

        .drawer-accordion-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 18px;
          background: #FFFFFF;
          border: none;
          border-bottom: 1px solid #F1F5F9;
          font-size: 0.92rem;
          font-weight: 700;
          color: #0F172A;
          cursor: pointer;
          transition: background 0.15s ease;
          text-align: left;
        }

        .drawer-accordion-btn:hover,
        .drawer-accordion-btn.expanded {
          background: #F8FAFC;
        }

        .drawer-sub-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 18px 10px 32px;
          color: #334155;
          text-decoration: none;
          font-size: 0.86rem;
          font-weight: 500;
          border-bottom: 1px solid #F8FAFC;
          transition: all 0.15s ease;
        }

        .drawer-sub-item:hover {
          background: #F1F5F9;
          color: #E11D48;
          padding-left: 36px;
        }

        .drawer-quick-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 12px;
          border-radius: 20px;
          font-size: 0.78rem;
          font-weight: 700;
          text-decoration: none;
          background: #F1F5F9;
          color: #0F172A;
          border: 1px solid #E2E8F0;
          white-space: nowrap;
          transition: all 0.15s ease;
        }

        .drawer-quick-chip:hover {
          background: #E2E8F0;
        }
      `}</style>

      {/* Backdrop Overlay */}
      <div 
        className="category-drawer-backdrop" 
        onClick={closeDrawer}
        aria-hidden="true" 
      />

      {/* Slide-out Left Drawer */}
      <aside 
        className="category-drawer-panel" 
        role="dialog" 
        aria-label="Category Navigation Menu"
      >
        {/* Drawer Header */}
        <div style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          color: '#FFFFFF',
          padding: '16px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <Link 
            href="/" 
            onClick={closeDrawer}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
          >
            <div style={{
              background: '#FFFFFF',
              borderRadius: '8px',
              padding: '4px 8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '36px'
            }}>
              <img 
                src="/logo.png" 
                alt="AS Print Gallery" 
                style={{ height: '28px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
            <div>
              <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.1 }}>
                AS PRINT GALLERY
              </div>
              <div style={{ fontSize: '0.68rem', color: '#94A3B8', marginTop: '2px' }}>
                Factory Direct Packaging
              </div>
            </div>
          </Link>

          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Close Categories Menu"
            style={{
              background: 'rgba(255, 255, 255, 0.12)',
              border: 'none',
              color: '#FFFFFF',
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background 0.15s ease'
            }}
          >
            <XIcon size={18} color="#FFFFFF" />
          </button>
        </div>

        {/* Quick Action Chips Bar */}
        <div style={{
          padding: '12px 14px',
          background: '#F8FAFC',
          borderBottom: '1px solid #E2E8F0',
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          whiteSpace: 'nowrap'
        }}>
          <Link 
            href="/shop" 
            onClick={closeDrawer} 
            className="drawer-quick-chip"
          >
            <PackageIcon size={14} color="#0F172A" />
            <span>All Products</span>
          </Link>

          <Link 
            href="/3d-box-builder" 
            onClick={closeDrawer} 
            className="drawer-quick-chip"
            style={{ background: '#EFF6FF', borderColor: '#BFDBFE', color: '#1D49B8' }}
          >
            <BoxIcon size={14} color="#1D49B8" />
            <span>3D Box Builder</span>
          </Link>

          <Link 
            href="/track-order" 
            onClick={closeDrawer} 
            className="drawer-quick-chip"
          >
            <TruckIcon size={14} color="#0F172A" />
            <span>Track Order</span>
          </Link>
        </div>

        {/* Drawer Scrollable Content: Categories Tree */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
          <div style={{
            padding: '12px 18px 8px',
            fontSize: '0.72rem',
            fontWeight: 800,
            color: '#64748B',
            textTransform: 'uppercase',
            letterSpacing: '0.8px',
            background: '#FAFAFC'
          }}>
            Explore Categories
          </div>

          <div>
            {categories.map((cat, idx) => {
              const isExpanded = expandedIndex === idx;
              return (
                <div key={cat.title}>
                  <button
                    type="button"
                    className={`drawer-accordion-btn ${isExpanded ? 'expanded' : ''}`}
                    onClick={() => toggleCategory(idx)}
                    aria-expanded={isExpanded}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '1.1rem' }}>
                        {cat.items[0]?.icon || '📦'}
                      </span>
                      <span>{cat.title}</span>
                    </div>
                    <div style={{ color: '#94A3B8' }}>
                      {isExpanded ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />}
                    </div>
                  </button>

                  {/* Subcategories Dropdown */}
                  {isExpanded && (
                    <div style={{ background: '#F8FAFC', padding: '4px 0' }}>
                      {cat.items.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.link}
                          onClick={closeDrawer}
                          className="drawer-sub-item"
                        >
                          <span style={{ fontSize: '0.95rem' }}>{sub.icon || '•'}</span>
                          <span>{sub.label}</span>
                        </Link>
                      ))}

                      {/* Direct View All in Category Link */}
                      <Link
                        href={cat.link}
                        onClick={closeDrawer}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '8px 18px 10px 32px',
                          color: '#E11D48',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          textDecoration: 'none'
                        }}
                      >
                        <span>View all in {cat.title}</span>
                        <span>&rarr;</span>
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Additional Factory Services */}
          <div style={{
            padding: '16px 18px 8px',
            fontSize: '0.72rem',
            fontWeight: 800,
            color: '#64748B',
            textTransform: 'uppercase',
            letterSpacing: '0.8px',
            background: '#FAFAFC',
            marginTop: '10px',
            borderTop: '1px solid #E2E8F0'
          }}>
            Factory Services & Tools
          </div>

          <div style={{ padding: '4px 0' }}>
            <button
              type="button"
              onClick={() => {
                closeDrawer();
                setIsQuoteModalOpen(true);
              }}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 18px',
                background: 'none',
                border: 'none',
                borderBottom: '1px solid #F1F5F9',
                fontSize: '0.88rem',
                fontWeight: 700,
                color: '#E11D48',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <span>📋</span>
              <span>Get Wholesale Price Quotation</span>
            </button>

            <Link
              href="/about"
              onClick={closeDrawer}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 18px',
                borderBottom: '1px solid #F1F5F9',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: '#334155',
                textDecoration: 'none'
              }}
            >
              <span>🏭</span>
              <span>Our Ghaziabad Factory</span>
            </Link>

            <Link
              href="/contact"
              onClick={closeDrawer}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 18px',
                borderBottom: '1px solid #F1F5F9',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: '#334155',
                textDecoration: 'none'
              }}
            >
              <span>📍</span>
              <span>Contact & Plant Location</span>
            </Link>

            <Link
              href="/admin/login"
              onClick={closeDrawer}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 18px',
                borderBottom: '1px solid #F1F5F9',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: '#334155',
                textDecoration: 'none'
              }}
            >
              <UserIcon size={18} color="#64748B" />
              <span>Admin / Staff Portal</span>
            </Link>
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div style={{
          padding: '14px 18px',
          background: '#F8FAFC',
          borderTop: '1px solid #E2E8F0',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <a
            href={`https://wa.me/${siteConfig.phones.whatsappRaw}?text=Hi%20AS%20Print%20Gallery!%20I%20want%20a%20bulk%20factory%20quote.`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeDrawer}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '10px 16px',
              background: '#25D366',
              color: '#FFFFFF',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.88rem',
              textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(37, 211, 102, 0.3)'
            }}
          >
            <WhatsAppIcon size={18} color="#FFFFFF" />
            <span>Instant WhatsApp Inquiry</span>
          </a>

          <a
            href={`tel:${siteConfig.phones.salesRaw}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '8px 16px',
              background: '#FFFFFF',
              color: '#0F172A',
              border: '1px solid #CBD5E1',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.82rem',
              textDecoration: 'none'
            }}
          >
            <PhoneIcon size={14} color="#64748B" />
            <span>Call Support: {siteConfig.phones.salesDisplay}</span>
          </a>
        </div>
      </aside>
    </>
  );
};
