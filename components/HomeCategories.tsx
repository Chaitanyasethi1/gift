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
    <section style={{ padding: '40px 0', background: '#FFFFFF' }}>
      <div className="container">
        <div className="cat-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '30px' }}>
          <h2 className="section-title" style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0F172A', margin: 0, letterSpacing: '-0.5px' }}>
            Our Popular Categories
          </h2>
          <Link href="/shop" style={{ color: '#B91C1C', fontWeight: 600, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
            View All <span style={{ fontSize: '1.2rem' }}>&rarr;</span>
          </Link>
        </div>
        
        <div className="marquee-wrapper" style={{ overflow: 'hidden', whiteSpace: 'nowrap', padding: '10px 0 20px 0', position: 'relative' }}>
          <div className="marquee-content" style={{ display: 'inline-flex', gap: '20px' }}>
            {categories.map((cat, idx) => (
              <Link key={`${cat.title}-${idx}`} href={cat.link || '/shop'} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '70px', flexShrink: 0 }} className="circular-cat-item">
                <div style={{ width: '70px', height: '70px', borderRadius: '18px', background: cat.isSpecial ? '#FEE2E2' : '#F8FAFC', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', marginBottom: '8px', border: cat.isSpecial ? '2px solid #EF4444' : '1px solid #E2E8F0', transition: 'all 0.3s ease', fontSize: '2rem', boxShadow: '0 2px 6px rgba(0,0,0,0.03)' }} className="cat-img-wrapper">
                  {cat.image ? (
                    <img src={cat.image} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    cat.emoji || '📦'
                  )}
                </div>
                <h3 style={{ fontSize: '0.75rem', fontWeight: 600, color: cat.isSpecial ? '#B91C1C' : '#0F172A', margin: 0, textAlign: 'center', lineHeight: 1.2, whiteSpace: 'normal' }}>{cat.title}</h3>
              </Link>
            ))}
            {/* Duplicate for infinite marquee effect */}
            {categories.map((cat, idx) => (
              <Link key={`${cat.title}-dup-${idx}`} href={cat.link || '/shop'} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '70px', flexShrink: 0 }} className="circular-cat-item">
                <div style={{ width: '70px', height: '70px', borderRadius: '18px', background: cat.isSpecial ? '#FEE2E2' : '#F8FAFC', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', marginBottom: '8px', border: cat.isSpecial ? '2px solid #EF4444' : '1px solid #E2E8F0', transition: 'all 0.3s ease', fontSize: '2rem', boxShadow: '0 2px 6px rgba(0,0,0,0.03)' }} className="cat-img-wrapper">
                  {cat.image ? (
                    <img src={cat.image} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
    </section>
  );
};
