import React from 'react';
import Link from 'next/link';
import { ProductGrid } from '@/components/ProductGrid';
import { ComboSlider } from '@/components/ComboSlider';
import { CountdownTimer } from '@/components/CountdownTimer';
import { createClient } from '@/utils/supabase/server';

import { PRODUCTS } from '@/data/products';
import { HomeCategories } from '@/components/HomeCategories';

export default async function HomePage() {
  let productsList = PRODUCTS;
  try {
    const supabase = createClient();
    const { data: dbProducts } = await supabase.from('products').select('*').eq('is_active', true);
    if (dbProducts && dbProducts.length > 0) {
      productsList = dbProducts;
    }
  } catch (err) {
    console.warn('Supabase fetch in HomePage fallback to static products:', err);
  }

  const hotDeals = productsList.filter(p => (p as any).flag_hot_deal) || [];
  const megaSale = productsList.filter(p => (p as any).flag_mega_sale) || [];
  const newArrivals = productsList.filter(p => (p as any).flag_new_arrival) || [];
  const bestSellers = productsList.filter(p => (p as any).flag_best_seller) || [];

  // If no flags are set, gracefully distribute products across sections
  const finalHotDeals = hotDeals.length > 0 ? hotDeals : productsList.slice(0, 4);
  const finalMegaSale = megaSale.length > 0 ? megaSale : productsList.slice(4, 8);
  const finalNewArrivals = newArrivals.length > 0 ? newArrivals : productsList.slice(8, 12);
  const finalBestSellers = bestSellers.length > 0 ? bestSellers : productsList.slice(12, 16);

  return (
    <>
      {/* 3. Hero Combo Banner (Dynamic Admin Managed) */}
      <ComboSlider />

      {/* 5. Popular Categories (Dynamic Admin Managed) */}
      <HomeCategories />
      
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
          <ProductGrid products={finalHotDeals} showAllButton={false} limit={4} hideTabs={true} />
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
          <ProductGrid products={finalMegaSale} showAllButton={false} limit={4} hideTabs={true} />
        </div>
      </section>

      {/* New Arrivals */}
      <section style={{ padding: '20px 0', background: '#FAFAFC' }}>
        <div className="container">
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>🌟 New Arrivals</h2>
            <Link href="/shop" style={{ color: '#B81B54', fontWeight: 700, fontSize: '0.9rem' }}>View All &rarr;</Link>
          </div>
          <ProductGrid products={finalNewArrivals} showAllButton={false} limit={4} hideTabs={true} />
        </div>
      </section>

      {/* 6. Best Sellers */}
      <section style={{ padding: '20px 0 40px 0', background: '#FFFFFF' }}>
        <div className="container">
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0 }}>🏆 Best Sellers</h2>
            <Link href="/shop" style={{ color: '#B81B54', fontWeight: 700, fontSize: '0.9rem' }}>View All &rarr;</Link>
          </div>
          <ProductGrid products={finalBestSellers} showAllButton={false} limit={4} hideTabs={true} />
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
      <section className="partner-section" style={{ padding: '80px 0', background: '#FFFFFF', overflow: 'hidden' }}>
         <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="section-title partner-section-title" style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '50px', letterSpacing: '-0.5px', color: '#0F172A' }}>
              Why Partner With Us?
            </h2>

            {/* Desktop: 4-Column Grid (Untouched on Desktop) */}
            <div className="feature-grid desktop-feature-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px' }}>
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

         {/* Mobile: 1 Line Infinite Rotating Loop (Gol Gol Chalu) */}
         <div className="mobile-partner-marquee-wrapper">
           <div className="mobile-partner-track">
             <div className="mobile-partner-group">
               {[
                 { title: 'Premium Quality', desc: 'Finest materials and inks', icon: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#B91C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg> },
                 { title: 'Custom Designs', desc: 'Tailored to your brand', icon: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#B91C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg> },
                 { title: 'Competitive Pricing', desc: 'Direct from factory rates', icon: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#B91C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M12 12h.01"/><path d="M16 9h.01"/><path d="M8 15h.01"/><path d="M22 10v4"/><path d="M2 10v4"/></svg> },
                 { title: 'On-Time Delivery', desc: 'Fast turnaround times', icon: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#B91C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> }
               ].map((w, idx) => (
                 <div key={`m1-${idx}`} className="mobile-partner-card">
                   <div className="mobile-partner-icon">{w.icon}</div>
                   <h3 className="mobile-partner-title">{w.title}</h3>
                   <p className="mobile-partner-desc">{w.desc}</p>
                 </div>
               ))}
             </div>
             {/* Duplicate group for continuous seamless infinite loop */}
             <div className="mobile-partner-group" aria-hidden="true">
               {[
                 { title: 'Premium Quality', desc: 'Finest materials and inks', icon: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#B91C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg> },
                 { title: 'Custom Designs', desc: 'Tailored to your brand', icon: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#B91C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg> },
                 { title: 'Competitive Pricing', desc: 'Direct from factory rates', icon: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#B91C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M12 12h.01"/><path d="M16 9h.01"/><path d="M8 15h.01"/><path d="M22 10v4"/><path d="M2 10v4"/></svg> },
                 { title: 'On-Time Delivery', desc: 'Fast turnaround times', icon: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#B91C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> }
               ].map((w, idx) => (
                 <div key={`m2-${idx}`} className="mobile-partner-card">
                   <div className="mobile-partner-icon">{w.icon}</div>
                   <h3 className="mobile-partner-title">{w.title}</h3>
                   <p className="mobile-partner-desc">{w.desc}</p>
                 </div>
               ))}
             </div>
           </div>
         </div>
      </section>
      
      <style>{`
        /* Global & Home Mobile Optimizations */
        .mobile-partner-marquee-wrapper {
          display: none;
        }

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
          
          /* Partner Section Mobile Marquee Loop */
          .partner-section {
            padding: 40px 0 30px 0 !important;
          }
          .partner-section-title {
            font-size: 1.45rem !important;
            margin-bottom: 24px !important;
          }
          .desktop-feature-grid {
            display: none !important;
          }
          .mobile-partner-marquee-wrapper {
            display: block !important;
            overflow: hidden;
            width: 100%;
            position: relative;
            padding: 6px 0 16px 0;
            -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
            mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
          }
          .mobile-partner-track {
            display: flex;
            width: max-content;
            animation: partnerMarqueeAnim 16s linear infinite;
            will-change: transform;
          }
          .mobile-partner-track:hover,
          .mobile-partner-track:active {
            animation-play-state: paused;
          }
          .mobile-partner-group {
            display: flex;
            gap: 16px;
            padding-right: 16px;
          }
          .mobile-partner-card {
            width: 210px;
            min-width: 210px;
            flex-shrink: 0;
            padding: 22px 16px;
            background: #F8FAFC;
            border-radius: 16px;
            border: 1px solid #E2E8F0;
            box-shadow: 0 4px 8px -2px rgba(0, 0, 0, 0.04);
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .mobile-partner-icon {
            margin-bottom: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .mobile-partner-title {
            font-size: 1rem !important;
            font-weight: 700 !important;
            color: #0F172A !important;
            margin: 0 0 6px 0 !important;
            line-height: 1.25 !important;
          }
          .mobile-partner-desc {
            color: #64748B !important;
            font-size: 0.82rem !important;
            margin: 0 !important;
            line-height: 1.35 !important;
          }

          @keyframes partnerMarqueeAnim {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
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

          /* 2-Column Product Grid on Mobile (Matching Gymshark Reference) */
          .products-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
          .minimal-product-card div[style*="padding: 16px"] {
            padding: 10px !important;
          }
          .minimal-product-card h3 {
            font-size: 0.85rem !important;
            margin-bottom: 2px !important;
          }
          .minimal-product-card p {
            font-size: 0.72rem !important;
            margin-bottom: 8px !important;
          }
          .btn-add-minimal {
            padding: 4px 10px !important;
            font-size: 0.72rem !important;
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
