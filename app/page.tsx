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

      {/* 2. Bestsellers & New Arrivals */}
      <section className="products-section" id="featured-products">
        <div className="container">
          <div className="section-head" style={{ position: 'relative' }}>
            <span className="section-badge">New Arrivals & Bestsellers</span>
            <h2 className="section-title">Trending Packaging Solutions</h2>
            
            {/* Spinning Sale Badge */}
            <div style={{ 
              position: 'absolute', 
              right: '20px', 
              top: '-20px', 
              width: '80px', 
              height: '80px', 
              animation: 'spin 8s linear infinite', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              background: 'var(--primary)', 
              color: '#FFF', 
              borderRadius: '50%', 
              fontWeight: 'bold', 
              fontSize: '14px', 
              boxShadow: '0 4px 10px rgba(169, 21, 59, 0.4)' 
            }}>
              SALE!
            </div>
            
            <style>{`
              @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
            `}</style>
          </div>
          <ProductGrid initialFilter="all" showAllButton={true} />
        </div>
      </section>

      {/* 3. Zero Plastic Envelopes Auto-Scroll */}
      <section style={{ padding: '60px 0', background: '#0F172A', overflow: 'hidden' }}>
        <div className="container" style={{ textAlign: 'center', marginBottom: '30px' }}>
          <span className="section-badge" style={{ background: '#10B981', color: '#FFF', border: 'none' }}>Zero Plastic</span>
          <h2 className="section-title" style={{ color: '#FFF' }}>Eco-Friendly Envelopes & Bags</h2>
          <p className="section-subtitle" style={{ color: '#94A3B8' }}>100% Recyclable and Biodegradable Packaging Options</p>
        </div>
        
        <div style={{ width: '100%', display: 'flex', overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: '20px', padding: '0 20px', animation: 'scroll 15s linear infinite', width: 'max-content' }}>
            {/* Duplicate for infinite effect */}
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

      {/* 4. Track / About links */}
      <section style={{ padding: '40px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <Link href="/track-order" style={{ background: '#0F172A', color: '#FFF', padding: '30px', borderRadius: '12px', textAlign: 'center', textDecoration: 'none' }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🚚</div>
              <h3 style={{ margin: 0, fontWeight: 700, color: '#FFF' }}>Track Your Order</h3>
            </Link>
            <Link href="/about" style={{ background: 'var(--primary)', color: '#FFF', padding: '30px', borderRadius: '12px', textAlign: 'center', textDecoration: 'none' }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🏭</div>
              <h3 style={{ margin: 0, fontWeight: 700, color: '#FFF' }}>About Our Factory</h3>
            </Link>
          </div>
        </div>
      </section>
      
      <QuoteModal isInline={true} />
    </>
  );
}
