import React from 'react';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { QuoteModal } from '@/components/QuoteModal';

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="categories-section" style={{ padding: '60px 0', background: '#FAFAFC' }}>
        <div className="container">
          <div className="section-head" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 className="section-title">Shop by Category</h2>
            <p className="section-subtitle">Browse our wide range of direct factory products</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {/* Category Cards */}
            {[
              { title: 'Corrugated Boxes', icon: '📦', filter: 'corrugated' },
              { title: 'Food & Pizza Packaging', icon: '🍕', filter: 'food' },
              { title: 'Woven Labels & Tags', icon: '🏷️', filter: 'label' },
              { title: 'Gumming Stickers', icon: '✨', filter: 'sticker' },
              { title: 'Kraft Paper Bags', icon: '🛍️', filter: 'bags' },
              { title: 'Garment Packaging', icon: '👕', filter: 'packaging' }
            ].map(cat => (
              <Link key={cat.title} href={`/products?filter=${cat.filter}`} style={{ background: '#FFF', padding: '30px 20px', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--border-light)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', textDecoration: 'none', color: 'var(--text-dark)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>{cat.icon}</div>
                <h3 style={{ fontSize: '1.2rem', margin: 0, fontWeight: 700 }}>{cat.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
