'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { initialHomepageConfig, PopularCategoryItem } from '@/data/homepageData';

export const HomeCategories: React.FC = () => {
  const [categories, setCategories] = useState<PopularCategoryItem[]>(initialHomepageConfig.popularCategories);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch('/api/homepage');
        if (res.ok) {
          const data = await res.json();
          if (data?.popularCategories && Array.isArray(data.popularCategories) && data.popularCategories.length > 0) {
            setCategories(data.popularCategories);
          }
        }
      } catch (err) {
        // Fallback already in place
      }
    }
    fetchCategories();
  }, []);

  return (
    <section className="home-categories-section" style={{ padding: '30px 0', background: '#FFFFFF' }}>
      <style>{`
        .home-categories-section .cat-section-inner {
          display: flex;
          flex-direction: column;
        }

        /* Desktop: Header Row on Top (order 1), Marquee on Bottom (order 2) */
        @media (min-width: 769px) {
          .cat-header-row {
            order: 1;
            margin-bottom: 25px;
          }
          .marquee-wrapper {
            order: 2;
          }
        }

        /* Mobile (<= 768px): Scrolling categories on top, Title & View All underneath */
        @media (max-width: 768px) {
          .home-categories-section {
            padding: 16px 0 20px 0 !important;
          }
          .marquee-wrapper {
            order: 1 !important;
            padding: 4px 0 12px 0 !important;
          }
          .cat-header-row {
            order: 2 !important;
            margin-bottom: 0 !important;
            margin-top: 10px !important;
            padding: 0 4px;
            display: flex !important;
            flex-direction: row !important;
            justify-content: space-between !important;
            align-items: center !important;
            gap: 8px !important;
          }
          .cat-header-row .section-title {
            font-size: 1.15rem !important;
            white-space: nowrap !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
          }
          .cat-view-all-link {
            white-space: nowrap !important;
            flex-shrink: 0 !important;
            font-size: 0.85rem !important;
          }
        }
      `}</style>
      <div className="container cat-section-inner">
        <div className="cat-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '30px' }}>
          <h2 className="section-title" style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0F172A', margin: 0, letterSpacing: '-0.5px' }}>
            Our Popular Categories
          </h2>
          <Link href="/shop" className="cat-view-all-link" style={{ color: '#B91C1C', fontWeight: 600, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
            View All <span style={{ fontSize: '1.2rem' }}>&rarr;</span>
          </Link>
        </div>
        
        <div className="marquee-wrapper" style={{ overflow: 'hidden', whiteSpace: 'nowrap', padding: '10px 0 20px 0', position: 'relative' }}>
          <div className="marquee-content" style={{ display: 'inline-flex', gap: '20px' }}>
            {categories.map((cat, idx) => (
              <Link key={`${cat.title}-${idx}`} href={cat.link || '/shop'} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '70px', flexShrink: 0 }} className="circular-cat-item">
                <div style={{ width: '70px', height: '70px', borderRadius: '18px', background: cat.isSpecial ? '#FEE2E2' : '#F8FAFC', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', marginBottom: '8px', border: cat.isSpecial ? '2px solid #EF4444' : '1px solid #E2E8F0', transition: 'all 0.3s ease', fontSize: '2rem', boxShadow: '0 2px 6px rgba(0,0,0,0.03)' }} className="cat-img-wrapper">
                  {cat.image ? (
                    <img src={cat.image} alt="" aria-hidden="true" width={70} height={70} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    cat.emoji || '📦'
                  )}
                </div>
                <h3 style={{ fontSize: '0.75rem', fontWeight: 600, color: cat.isSpecial ? '#B91C1C' : '#0F172A', margin: 0, textAlign: 'center', lineHeight: 1.2, whiteSpace: 'normal' }}>{cat.title}</h3>
              </Link>
            ))}
            {/* Duplicate for infinite marquee effect with aria-hidden to prevent redundant screen reader links */}
            <div aria-hidden="true" style={{ display: 'inline-flex', gap: '20px' }}>
              {categories.map((cat, idx) => (
                <Link key={`${cat.title}-dup-${idx}`} href={cat.link || '/shop'} tabIndex={-1} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '70px', flexShrink: 0 }} className="circular-cat-item">
                  <div style={{ width: '70px', height: '70px', borderRadius: '18px', background: cat.isSpecial ? '#FEE2E2' : '#F8FAFC', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', marginBottom: '8px', border: cat.isSpecial ? '2px solid #EF4444' : '1px solid #E2E8F0', transition: 'all 0.3s ease', fontSize: '2rem', boxShadow: '0 2px 6px rgba(0,0,0,0.03)' }} className="cat-img-wrapper">
                    {cat.image ? (
                      <img src={cat.image} alt="" aria-hidden="true" width={70} height={70} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      cat.emoji || '📦'
                    )}
                  </div>
                  <h3 style={{ fontSize: '0.75rem', fontWeight: 600, color: cat.isSpecial ? '#B91C1C' : '#0F172A', margin: 0, textAlign: 'center', lineHeight: 1.2, whiteSpace: 'normal' }}>{cat.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
