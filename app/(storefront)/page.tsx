import React from 'react';
import Link from 'next/link';
import { ProductGrid } from '@/components/ProductGrid';
import { ComboSlider } from '@/components/ComboSlider';
import { CountdownTimer } from '@/components/CountdownTimer';
import { createClient } from '@/utils/supabase/server';

export default async function HomePage() {
  const supabase = createClient();
  const { data: products } = await supabase.from('products').select('*, categories(name)').eq('is_active', true);

  const hotDeals = products?.filter(p => p.flag_hot_deal) || [];
  const megaSale = products?.filter(p => p.flag_mega_sale) || [];
  const newArrivals = products?.filter(p => p.flag_new_arrival) || [];
  const bestSellers = products?.filter(p => p.flag_best_seller) || [];

  return (
    <>
      {/* 3. Hero Combo Banner */}
      <ComboSlider />

      {/* 5. Popular Categories */}
      <section style={{ padding: '40px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="cat-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '30px' }}>
            <h2 className="section-title" style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0F172A', margin: 0, letterSpacing: '-0.5px' }}>Our Popular Categories</h2>
            <Link href="/shop" style={{ color: '#B91C1C', fontWeight: 600, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>View All <span style={{ fontSize: '1.2rem' }}>&rarr;</span></Link>
          </div>
          <div className="marquee-wrapper" style={{ overflow: 'hidden', whiteSpace: 'nowrap', padding: '10px 0 20px 0', position: 'relative' }}>
            <div className="marquee-content" style={{ display: 'inline-flex', gap: '20px' }}>
              {[
                { id: 'hot-deals', title: 'Hot Deals', emoji: '🔥', isSpecial: true },
                { id: 'sale', title: 'Sale', emoji: '🏷️', isSpecial: true },
                { id: 'new-arrivals', title: 'New Arrivals', emoji: '🌟', isSpecial: true },
                { id: 'boxes', title: 'Packaging Boxes', image: '/assets/packaging_boxes_cat.jpg' },
                { id: 'bags', title: 'Paper Bags', emoji: '🛍️' },
                { id: 'lifafa', title: 'Paper Lifafa', emoji: '✉️' },
                { id: 'stickers', title: 'Stickers', emoji: '🏵️' },
                { id: 'printed-labels', title: 'Printed Labels', emoji: '🔖' },
                { id: 'woven-labels', title: 'Woven Labels', emoji: '🧵' },
                { id: 'hang-tags', title: 'Hang Tags', emoji: '🏷️' },
                { id: 'food-boxes', title: 'Food & Pizza', emoji: '🍕' },
                { id: 'custom-tape', title: 'Custom Tape', emoji: '📼' },
                { id: 'bubble-wrap', title: 'Bubble Wrap', emoji: '🫧' },
                { id: 'courier-bags', title: 'Courier Bags', emoji: '📨' }
              ].map((cat, idx) => (
                <Link key={`${cat.title}-${idx}`} href="/shop" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '70px', flexShrink: 0 }} className="circular-cat-item">
                  <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: cat.isSpecial ? '#FEE2E2' : '#F8FAFC', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', marginBottom: '8px', border: cat.isSpecial ? '2px solid #EF4444' : '1px solid #E2E8F0', transition: 'all 0.3s ease', fontSize: '2rem' }} className="cat-img-wrapper">
                    {cat.image ? (
                      <img src={cat.image} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      cat.emoji
                    )}
                  </div>
                  <h3 style={{ fontSize: '0.75rem', fontWeight: 600, color: cat.isSpecial ? '#B91C1C' : '#0F172A', margin: 0, textAlign: 'center', lineHeight: 1.2, whiteSpace: 'normal' }}>{cat.title}</h3>
                </Link>
              ))}
              {/* Duplicate for infinite marquee effect */}
              {[
                { id: 'hot-deals-2', title: 'Hot Deals', emoji: '🔥', isSpecial: true },
                { id: 'sale-2', title: 'Sale', emoji: '🏷️', isSpecial: true },
                { id: 'new-arrivals-2', title: 'New Arrivals', emoji: '🌟', isSpecial: true },
                { id: 'boxes-2', title: 'Packaging Boxes', image: '/assets/packaging_boxes_cat.jpg' },
                { id: 'bags-2', title: 'Paper Bags', emoji: '🛍️' },
                { id: 'lifafa-2', title: 'Paper Lifafa', emoji: '✉️' },
                { id: 'stickers-2', title: 'Stickers', emoji: '🏵️' },
                { id: 'printed-labels-2', title: 'Printed Labels', emoji: '🔖' },
                { id: 'woven-labels-2', title: 'Woven Labels', emoji: '🧵' },
                { id: 'hang-tags-2', title: 'Hang Tags', emoji: '🏷️' },
                { id: 'food-boxes-2', title: 'Food & Pizza', emoji: '🍕' },
                { id: 'custom-tape-2', title: 'Custom Tape', emoji: '📼' },
                { id: 'bubble-wrap-2', title: 'Bubble Wrap', emoji: '🫧' },
                { id: 'courier-bags-2', title: 'Courier Bags', emoji: '📨' }
              ].map((cat, idx) => (
                <Link key={`${cat.title}-dup-${idx}`} href="/shop" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '70px', flexShrink: 0 }} className="circular-cat-item">
                  <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: cat.isSpecial ? '#FEE2E2' : '#F8FAFC', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', marginBottom: '8px', border: cat.isSpecial ? '2px solid #EF4444' : '1px solid #E2E8F0', transition: 'all 0.3s ease', fontSize: '2rem' }} className="cat-img-wrapper">
                    {cat.image ? (
                      <img src={cat.image} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      cat.emoji
                    )}
                  </div>
                  <h3 style={{ fontSize: '0.75rem', fontWeight: 600, color: cat.isSpecial ? '#B91C1C' : '#0F172A', margin: 0, textAlign: 'center', lineHeight: 1.2, whiteSpace: 'normal' }}>{cat.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <style>{`
        .circular-cat-item:hover .cat-img-wrapper {
          transform: translateY(-3px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .marquee-content {
          animation: marquee 20s linear infinite;
        }
        .marquee-wrapper:hover .marquee-content {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Hot Deals */}
      <section style={{ padding: '20px 0', background: '#FAFAFC' }}>
        <div className="container">
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>🔥 Hot Deals</h2>
              <CountdownTimer days={3} />
            </div>
            <Link href="/shop" style={{ color: '#B81B54', fontWeight: 700, fontSize: '0.9rem' }}>View All &rarr;</Link>
          </div>
          <ProductGrid products={hotDeals} showAllButton={false} limit={4} hideTabs={true} />
        </div>
      </section>

      {/* Sale */}
      <section style={{ padding: '20px 0', background: '#FFFFFF' }}>
        <div className="container">
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>🏷️ Mega Sale</h2>
              <CountdownTimer days={12} />
            </div>
            <Link href="/shop" style={{ color: '#B81B54', fontWeight: 700, fontSize: '0.9rem' }}>View All &rarr;</Link>
          </div>
          <ProductGrid products={megaSale} showAllButton={false} limit={4} hideTabs={true} />
        </div>
      </section>

      {/* New Arrivals */}
      <section style={{ padding: '20px 0', background: '#FAFAFC' }}>
        <div className="container">
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>🌟 New Arrivals</h2>
            <Link href="/shop" style={{ color: '#B81B54', fontWeight: 700, fontSize: '0.9rem' }}>View All &rarr;</Link>
          </div>
          <ProductGrid products={newArrivals} showAllButton={false} limit={4} hideTabs={true} />
        </div>
      </section>

      {/* 6. Best Sellers */}
      <section style={{ padding: '20px 0 40px 0', background: '#FFFFFF' }}>
        <div className="container">
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0 }}>🏆 Best Sellers</h2>
            <Link href="/shop" style={{ color: '#B81B54', fontWeight: 700, fontSize: '0.9rem' }}>View All &rarr;</Link>
          </div>
          <ProductGrid products={bestSellers} showAllButton={false} limit={4} hideTabs={true} />
        </div>
      </section>

      {/* 7. Premium Brand Banner */}
      <section className="premium-brand-banner" style={{ padding: '80px 20px', background: '#0F172A', color: '#fff', textAlign: 'center', backgroundImage: 'radial-gradient(circle at center, #1E293B 0%, #0F172A 100%)' }}>
        <div className="container">
           <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px', color: '#FFFFFF', letterSpacing: '-0.5px' }}>Elevate Your Brand Identity With Premium Printing</h2>
           <p style={{ fontSize: '1.1rem', color: '#94A3B8', maxWidth: '700px', margin: '0 auto 35px auto', lineHeight: 1.6 }}>Discover an extensive range of paper bags, custom boxes, premium labels, and branded packaging solutions tailored to make your products stand out.</p>
           <Link href="/shop" style={{ display: 'inline-block', background: '#DC2626', color: '#fff', padding: '14px 36px', borderRadius: '6px', fontWeight: 600, fontSize: '1rem', transition: 'background 0.2s', boxShadow: '0 4px 6px -1px rgba(220, 38, 38, 0.2)' }}>Explore Products &rarr;</Link>
        </div>
      </section>
      
      {/* 8. Why Choose Us */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
         <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="section-title" style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '50px', letterSpacing: '-0.5px', color: '#0F172A' }}>Why Partner With Us?</h2>
            <div className="feature-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px' }}>
                {[
                  { title: 'Premium Quality', desc: 'Finest materials and inks', icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#B91C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg> },
                  { title: 'Custom Designs', desc: 'Tailored to your brand', icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#B91C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg> },
                  { title: 'Competitive Pricing', desc: 'Direct from factory rates', icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#B91C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M12 12h.01"/><path d="M16 9h.01"/><path d="M8 15h.01"/><path d="M22 10v4"/><path d="M2 10v4"/></svg> },
                  { title: 'On-Time Delivery', desc: 'Fast turnaround times', icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#B91C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> }
                ].map(w => (
                  <div key={w.title} style={{ padding: '30px 20px', background: '#F8FAFC', borderRadius: '16px', border: '1px solid #E2E8F0', transition: 'transform 0.2s', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }} className="feature-card">
                     <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>{w.icon}</div>
                     <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>{w.title}</h3>
                     <p style={{ color: '#64748B', fontSize: '0.9rem', margin: 0 }}>{w.desc}</p>
                  </div>
                ))}
            </div>
         </div>
      </section>
      
      <style>{`
        /* Global & Home Mobile Optimizations */
        @media (max-width: 768px) {
          .combo-hero-container {
            flex-direction: column !important;
            padding: 20px !important;
          }
          .combo-hero-text {
            text-align: center !important;
            flex: 1 1 100% !important;
          }
          .combo-hero-text h1 {
            font-size: 1.5rem !important;
          }
          .combo-hero-text ul {
            align-items: center !important;
          }
          .trust-strip-container {
            grid-template-columns: 1fr 1fr !important;
            display: grid !important;
            gap: 20px !important;
          }
          .premium-cat-card {
            margin-bottom: 0px !important;
          }
          .premium-brand-banner {
            padding: 40px 15px !important;
          }
          .premium-brand-banner h2 {
            font-size: 1.8rem !important;
          }
          .feature-grid {
            grid-template-columns: 1fr !important;
          }
          .section-title {
            font-size: 1.6rem !important;
            text-align: center;
            width: 100%;
          }
          .cat-header-row {
            flex-direction: column;
            align-items: center !important;
            gap: 15px;
          }
        }
        
        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </>
  );
}
