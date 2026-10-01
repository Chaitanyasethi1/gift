import React from 'react';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { ProductGrid } from '@/components/ProductGrid';
import { QuoteModal } from '@/components/QuoteModal';

export default function HomePage() {
  return (
    <>
      <Hero />
      
      {/* 1. Filter-like Categories */}
      <section className="categories-section" style={{ padding: '30px 0', background: '#FAFAFC' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { title: 'Corrugated Boxes', icon: '📦', filter: 'corrugated' },
              { title: 'Food & Pizza Packaging', icon: '🍕', filter: 'food' },
              { title: 'Woven Labels & Tags', icon: '🏷️', filter: 'label' },
              { title: 'Gumming Stickers', icon: '✨', filter: 'sticker' },
              { title: 'Kraft Paper Bags', icon: '🛍️', filter: 'bags' },
              { title: 'Garment Packaging', icon: '👕', filter: 'packaging' }
            ].map(cat => (
              <Link 
                key={cat.title} 
                href={`/products?filter=${cat.filter}`} 
                style={{ 
                  background: '#FFF', 
                  padding: '10px 20px', 
                  borderRadius: '30px', 
                  border: '1px solid var(--border-light)', 
                  textDecoration: 'none', 
                  color: 'var(--text-dark)', 
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.03)'
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>{cat.icon}</span>
                {cat.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Trending Now */}
      <section className="products-section" style={{ paddingBottom: '20px' }}>
        <div className="container">
          <div className="section-head" style={{ textAlign: 'left', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <h2 className="section-title" style={{ fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
                🔥 Trending Now
              </h2>
            </div>
            <Link href="/products" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}>
              View All &rarr;
            </Link>
          </div>
          <ProductGrid initialFilter="all" showAllButton={false} limit={4} hideTabs={true} />
        </div>
      </section>

      {/* 3. Best Deals */}
      <section className="products-section" style={{ paddingTop: '20px', paddingBottom: '40px', background: '#FAFAFC' }}>
        <div className="container">
          <div className="section-head" style={{ textAlign: 'left', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <h2 className="section-title" style={{ fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
                🎁 Best Deals
              </h2>
            </div>
            <Link href="/products" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}>
              View All &rarr;
            </Link>
          </div>
          <ProductGrid initialFilter="corrugated" showAllButton={false} limit={4} hideTabs={true} />
        </div>
      </section>

      {/* 4. Zero Plastic Envelopes Auto-Scroll */}
      <section style={{ padding: '60px 0', background: '#0F172A', overflow: 'hidden' }}>
        <div className="container" style={{ textAlign: 'center', marginBottom: '30px' }}>
          <span className="section-badge" style={{ background: '#10B981', color: '#FFF', border: 'none' }}>Zero Plastic</span>
          <h2 className="section-title" style={{ color: '#FFF' }}>Eco-Friendly Envelopes & Bags</h2>
          <p className="section-subtitle" style={{ color: '#94A3B8' }}>100% Recyclable and Biodegradable Packaging Options</p>
        </div>
        
        <div style={{ width: '100%', display: 'flex', overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: '20px', padding: '0 20px', animation: 'scroll 15s linear infinite', width: 'max-content' }}>
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <Link href="/products?filter=bags" style={{ display: 'block', width: '280px', background: '#1E293B', borderRadius: '12px', padding: '20px', textDecoration: 'none', color: '#FFF', flexShrink: 0, border: '1px solid #334155' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🛍️</div>
                  <h3 style={{ fontSize: '1.1rem', margin: '0 0 10px 0', fontWeight: 600 }}>Kraft Paper Carry Bags</h3>
                  <p style={{ color: '#94A3B8', fontSize: '0.85rem', margin: 0 }}>Available in multiple sizes.</p>
                </Link>
                <Link href="/products?filter=bags" style={{ display: 'block', width: '280px', background: '#1E293B', borderRadius: '12px', padding: '20px', textDecoration: 'none', color: '#FFF', flexShrink: 0, border: '1px solid #334155' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '15px' }}>✉️</div>
                  <h3 style={{ fontSize: '1.1rem', margin: '0 0 10px 0', fontWeight: 600 }}>Tamper-Proof Paper Envelopes</h3>
                  <p style={{ color: '#94A3B8', fontSize: '0.85rem', margin: 0 }}>Secure document transit.</p>
                </Link>
                <Link href="/products?filter=bags" style={{ display: 'block', width: '280px', background: '#1E293B', borderRadius: '12px', padding: '20px', textDecoration: 'none', color: '#FFF', flexShrink: 0, border: '1px solid #334155' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🌿</div>
                  <h3 style={{ fontSize: '1.1rem', margin: '0 0 10px 0', fontWeight: 600 }}>Eco Mailing Bags</h3>
                  <p style={{ color: '#94A3B8', fontSize: '0.85rem', margin: 0 }}>Zero plastic alternative.</p>
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>
      
      <QuoteModal isInline={true} />
    </>
  );
}
