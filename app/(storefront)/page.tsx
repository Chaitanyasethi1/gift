import React from 'react';
import Link from 'next/link';
import { ProductGrid } from '@/components/ProductGrid';
import { ComboSlider } from '@/components/ComboSlider';
import { CountdownTimer } from '@/components/CountdownTimer';
import { createClient } from '@/utils/supabase/server';
import { PRODUCTS } from '@/data/products';
import { HomeCategories } from '@/components/HomeCategories';
import { siteConfig } from '@/data/siteConfig';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  let productsList = PRODUCTS;
  let serverBanners = undefined;
  let serverSlideInterval = undefined;

  try {
    const supabase = createClient();
    const { data: dbProducts } = await supabase.from('products').select('*').eq('is_active', true);
    if (dbProducts && dbProducts.length > 0) {
      productsList = dbProducts;
    }

    const { data: siteSettings } = await supabase
      .from('site_settings')
      .select('homepage_config')
      .eq('id', 1)
      .maybeSingle();

    if (siteSettings?.homepage_config) {
      const cfg = typeof siteSettings.homepage_config === 'string'
        ? JSON.parse(siteSettings.homepage_config)
        : siteSettings.homepage_config;
      if (cfg?.heroBanners && Array.isArray(cfg.heroBanners)) {
        serverBanners = cfg.heroBanners.filter((b: any) => b.active);
      }
      if (cfg?.slideIntervalMs) {
        serverSlideInterval = cfg.slideIntervalMs;
      }
    }
  } catch (err) {
    console.warn('Supabase fetch in HomePage fallback:', err);
  }

  const hotDeals = productsList.filter(p => (p as any).flag_hot_deal) || [];
  const megaSale = productsList.filter(p => (p as any).flag_mega_sale) || [];
  const newArrivals = productsList.filter(p => (p as any).flag_new_arrival) || [];
  const bestSellers = productsList.filter(p => (p as any).flag_best_seller) || [];

  // If no flags are set, gracefully distribute products across sections with 8 items each
  const finalHotDeals = hotDeals.length > 0 ? hotDeals : productsList.slice(0, 8);
  const finalMegaSale = megaSale.length > 0 ? megaSale : productsList.slice(4, 12);
  const finalNewArrivals = newArrivals.length > 0 ? newArrivals : productsList.slice(8, 16);
  const finalBestSellers = bestSellers.length > 0 ? bestSellers : productsList.slice(12, 20);

  return (
    <>
      {/* 3. Hero Combo Banner (Dynamic Admin Managed) */}
      <ComboSlider initialBanners={serverBanners} slideInterval={serverSlideInterval} />

      {/* SEO Authority & Factory Identity H1 Section */}
      <section style={{ background: '#FFFFFF', borderBottom: '1px solid #E2E8F0', padding: '24px 0 20px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '980px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#EFF6FF', border: '1px solid #BFDBFE', color: '#1E40AF', padding: '4px 14px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '10px' }}>
              <span>🏭 Direct Packaging Factory • Loni, Ghaziabad (Delhi NCR)</span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.35rem, 2.8vw, 2rem)', fontWeight: 900, color: '#0F172A', lineHeight: 1.28, margin: '0 0 10px 0', letterSpacing: '-0.5px' }}>
              AS Print Gallery — Corrugated Box Manufacturer &amp; Custom Packaging Factory in Ghaziabad, Delhi NCR
            </h1>
            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, margin: '0 auto 16px auto', maxWidth: '850px' }}>
              Welcome to <strong>AS Print Gallery (asprintgallery.com)</strong>. We are a direct manufacturing unit based in <strong>Loni, Ghaziabad</strong>, delivering high-bursting strength 3-ply &amp; 5-ply corrugated shipping boxes, waterproof vinyl stickers, garment woven labels, kraft paper bags, and pizza cartons across <strong>Ghaziabad, Delhi NCR, Noida, Gurgaon</strong>, and Pan-India with direct wholesale factory prices.
            </p>
            {/* Quick Geo-Action Pills */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <Link href="/corrugated-boxes-ghaziabad" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', color: '#1E293B', padding: '6px 14px', borderRadius: '6px', fontSize: '0.82rem', fontWeight: 700, textDecoration: 'none' }}>
                📍 Boxes in Ghaziabad &rarr;
              </Link>
              <Link href="/corrugated-boxes-delhi" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', color: '#1E293B', padding: '6px 14px', borderRadius: '6px', fontSize: '0.82rem', fontWeight: 700, textDecoration: 'none' }}>
                🚚 Boxes in Delhi NCR &rarr;
              </Link>
              <Link href="/corrugated-boxes-noida" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', color: '#1E293B', padding: '6px 14px', borderRadius: '6px', fontSize: '0.82rem', fontWeight: 700, textDecoration: 'none' }}>
                📦 Boxes in Noida &rarr;
              </Link>
              <Link href="/3d-box-builder" style={{ background: '#EFF6FF', border: '1px solid #93C5FD', color: '#1D4ED8', padding: '6px 14px', borderRadius: '6px', fontSize: '0.82rem', fontWeight: 700, textDecoration: 'none' }}>
                📐 Custom 3D Box Builder &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Popular Categories (Dynamic Admin Managed) */}
      <HomeCategories />
      
      <style>{`
        .circular-cat-item:hover .cat-img-wrapper {
          transform: translateY(-3px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .marquee-content {
          animation: marquee 20s linear infinite;
          will-change: transform;
        }
        .marquee-wrapper:hover .marquee-content {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>

      {/* Hot Deals */}
      <section style={{ padding: '20px 0', background: '#FAFAFC' }}>
        <div className="container">
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>🔥 Hot Deals</h2>
              <CountdownTimer days={3} />
            </div>
            <Link href="/category/hot-deals" style={{ color: '#1D4ED8', fontWeight: 700, fontSize: '0.9rem', whiteSpace: 'nowrap', flexShrink: 0 }}>View All &rarr;</Link>
          </div>
          <ProductGrid products={finalHotDeals} showAllButton={false} limit={8} hideTabs={true} isCarousel={true} />
        </div>
      </section>

      {/* Sale */}
      <section style={{ padding: '20px 0', background: '#FFFFFF' }}>
        <div className="container">
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>🏷️ Mega Sale</h2>
              <CountdownTimer days={12} />
            </div>
            <Link href="/category/sale" style={{ color: '#1D4ED8', fontWeight: 700, fontSize: '0.9rem', whiteSpace: 'nowrap', flexShrink: 0 }}>View All &rarr;</Link>
          </div>
          <ProductGrid products={finalMegaSale} showAllButton={false} limit={8} hideTabs={true} isCarousel={true} />
        </div>
      </section>

      {/* New Arrivals */}
      <section style={{ padding: '20px 0', background: '#FAFAFC' }}>
        <div className="container">
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>🌟 New Arrivals</h2>
            <Link href="/category/new-arrivals" style={{ color: '#1D4ED8', fontWeight: 700, fontSize: '0.9rem', whiteSpace: 'nowrap', flexShrink: 0 }}>View All &rarr;</Link>
          </div>
          <ProductGrid products={finalNewArrivals} showAllButton={false} limit={8} hideTabs={true} isCarousel={true} />
        </div>
      </section>

      {/* 6. Best Sellers */}
      <section style={{ padding: '20px 0 40px 0', background: '#FFFFFF' }}>
        <div className="container">
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0 }}>🏆 Best Sellers</h2>
            <Link href="/category/best-sellers" style={{ color: '#1D4ED8', fontWeight: 700, fontSize: '0.9rem', whiteSpace: 'nowrap', flexShrink: 0 }}>View All &rarr;</Link>
          </div>
          <ProductGrid products={finalBestSellers} showAllButton={false} limit={8} hideTabs={true} isCarousel={true} />
        </div>
      </section>

      {/* 7. Premium Brand Banner */}
      <section className="premium-brand-banner" style={{ padding: '80px 20px', background: '#0F172A', color: '#fff', textAlign: 'center', backgroundImage: 'radial-gradient(circle at center, #1E293B 0%, #0F172A 100%)' }}>
        <div className="container">
           <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px', color: '#FFFFFF', letterSpacing: '-0.5px' }}>Elevate Your Brand Identity With Premium Printing</h2>
           <p style={{ fontSize: '1.1rem', color: '#94A3B8', maxWidth: '700px', margin: '0 auto 35px auto', lineHeight: 1.6 }}>Discover an extensive range of paper bags, custom boxes, premium labels, and branded packaging solutions tailored to make your products stand out.</p>
           <Link href="/shop" style={{ display: 'inline-block', background: '#1D4ED8', color: '#fff', padding: '14px 36px', borderRadius: '8px', fontWeight: 700, fontSize: '1rem', transition: 'all 0.2s', boxShadow: '0 4px 14px rgba(29, 78, 216, 0.3)' }}>Explore Products &rarr;</Link>
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

      {/* Local Industrial Hubs & Delivery Network Section */}
      <section style={{ padding: '60px 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#1D4ED8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              📍 Local Factory Dispatch Network
            </span>
            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 800, color: '#0F172A', margin: '8px 0' }}>
              Direct Corrugated Box Delivery Across Your Area in Delhi NCR
            </h2>
            <p style={{ fontSize: '0.92rem', color: '#64748B', maxWidth: '750px', margin: '0 auto', lineHeight: 1.55 }}>
              From our manufacturing plant on the Loni border, AS Print Gallery delivers daily to factories, eCommerce sellers, apparel exporters, and cloud kitchens with zero middleman freight.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 2px 6px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '1.4rem', marginBottom: '8px' }}>🏭</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                Ghaziabad &amp; Loni (Home Plant)
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.5, marginBottom: '12px' }}>
                Supplying Loni Industrial Area, Tronica City, Sahibabad Sites 1-4, Kavi Nagar &amp; Raj Nagar. Same-day factory gate pickup &amp; local fleet delivery.
              </p>
              <Link href="/corrugated-boxes-ghaziabad" style={{ color: '#1D4ED8', fontWeight: 700, fontSize: '0.84rem', textDecoration: 'none' }}>
                View Ghaziabad Factory Hub &rarr;
              </Link>
            </div>

            <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 2px 6px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '1.4rem', marginBottom: '8px' }}>🚚</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                Delhi (Okhla, Naraina &amp; Gandhi Nagar)
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.5, marginBottom: '12px' }}>
                Daily dispatch to Okhla Industrial Area, Naraina, Kirti Nagar, Gandhi Nagar garment exporters, and Chandni Chowk wholesale markets.
              </p>
              <Link href="/corrugated-boxes-delhi" style={{ color: '#1D4ED8', fontWeight: 700, fontSize: '0.84rem', textDecoration: 'none' }}>
                View Delhi Delivery Hub &rarr;
              </Link>
            </div>

            <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 2px 6px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '1.4rem', marginBottom: '8px' }}>📦</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                Noida &amp; Greater Noida (D2C Hubs)
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.5, marginBottom: '12px' }}>
                Priority 24-hr fulfillment for D2C brands and warehousing across Noida Sector 57, 59, 62, 63, 65, 80 and Greater Noida Ecotech.
              </p>
              <Link href="/corrugated-boxes-noida" style={{ color: '#1D4ED8', fontWeight: 700, fontSize: '0.84rem', textDecoration: 'none' }}>
                View Noida Delivery Hub &rarr;
              </Link>
            </div>

            <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 2px 6px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '1.4rem', marginBottom: '8px' }}>⚡</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                Gurgaon &amp; Pan-India Dispatch
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.5, marginBottom: '12px' }}>
                Supplying Udyog Vihar, Manesar IMT, Faridabad, and pan-India business consignments via express surface cargo partners.
              </p>
              <Link href="/corrugated-boxes-gurgaon" style={{ color: '#1D4ED8', fontWeight: 700, fontSize: '0.84rem', textDecoration: 'none' }}>
                View Gurgaon Delivery Hub &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ Section with Structured Data) */}
      <section style={{ padding: '60px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', fontWeight: 800, color: '#0F172A', margin: '0 0 8px 0' }}>
                Frequently Asked Questions About AS Print Gallery
              </h2>
              <p style={{ fontSize: '0.9rem', color: '#64748B', margin: 0 }}>
                Got questions about our manufacturing plant, box sizes, or delivery near your area? Here are quick answers.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <details style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '16px 20px', cursor: 'pointer' }} open>
                <summary style={{ fontWeight: 700, fontSize: '0.98rem', color: '#0F172A' }}>
                  Where is AS Print Gallery located?
                </summary>
                <p style={{ fontSize: '0.9rem', color: '#475569', marginTop: '10px', lineHeight: 1.6, margin: '10px 0 0 0' }}>
                  AS Print Gallery manufacturing unit is located at <strong>Kh No. 2326/2, Shankar Garden, Ashok Vihar, Loni, Ghaziabad, Uttar Pradesh - 201102</strong>, right on the Delhi-UP border near Tronica City Industrial Area. Clients are welcome to visit our plant for direct sample inspection and factory gate pickups.
                </p>
              </details>

              <details style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '16px 20px', cursor: 'pointer' }}>
                <summary style={{ fontWeight: 700, fontSize: '0.98rem', color: '#0F172A' }}>
                  Can I get corrugated boxes delivered near me in Ghaziabad or Delhi NCR?
                </summary>
                <p style={{ fontSize: '0.9rem', color: '#475569', marginTop: '10px', lineHeight: 1.6, margin: '10px 0 0 0' }}>
                  Yes, we provide direct factory doorstep delivery across Ghaziabad, Loni, Tronica City, Sahibabad, Delhi, Noida, Greater Noida, and Gurgaon with same-day and 24-48 hours delivery schedules.
                </p>
              </details>

              <details style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '16px 20px', cursor: 'pointer' }}>
                <summary style={{ fontWeight: 700, fontSize: '0.98rem', color: '#0F172A' }}>
                  What is the minimum order quantity (MOQ) for corrugated boxes?
                </summary>
                <p style={{ fontSize: '0.9rem', color: '#475569', marginTop: '10px', lineHeight: 1.6, margin: '10px 0 0 0' }}>
                  For plain standard corrugated shipping boxes in stock, the MOQ is just <strong>50 pieces</strong>. For custom branded logo-printed boxes, MOQ is 500 to 1,000 pieces at direct factory wholesale rates.
                </p>
              </details>

              <details style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '16px 20px', cursor: 'pointer' }}>
                <summary style={{ fontWeight: 700, fontSize: '0.98rem', color: '#0F172A' }}>
                  Do you provide custom logo printing on shipping boxes and stickers?
                </summary>
                <p style={{ fontSize: '0.9rem', color: '#475569', marginTop: '10px', lineHeight: 1.6, margin: '10px 0 0 0' }}>
                  Yes, 100%! We provide single-color, two-color, and full-color multi-color custom printing on corrugated boxes, die-cut pizza boxes, waterproof vinyl stickers, and woven clothing labels. You can upload your artwork directly on the product page or use our 3D Box Builder.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* FAQPage JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Where is AS Print Gallery located?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AS Print Gallery manufacturing unit is located at Kh No. 2326/2, Shankar Garden, Ashok Vihar, Loni, Ghaziabad, Uttar Pradesh - 201102, right on the Delhi-UP border near Tronica City Industrial Area.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can I get corrugated boxes delivered near me in Ghaziabad or Delhi NCR?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, we provide direct factory doorstep delivery across Ghaziabad, Loni, Tronica City, Sahibabad, Delhi, Noida, Greater Noida, and Gurgaon with same-day and 24-48 hours delivery schedules.'
                }
              },
              {
                '@type': 'Question',
                name: 'What is the minimum order quantity (MOQ) for corrugated boxes?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'For plain standard corrugated shipping boxes in stock, the MOQ is just 50 pieces. For custom branded logo-printed boxes, MOQ is 500 to 1,000 pieces at direct factory wholesale rates.'
                }
              },
              {
                '@type': 'Question',
                name: 'Do you provide custom logo printing on shipping boxes and stickers?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, 100%! We provide single-color, two-color, and full-color multi-color custom printing on corrugated boxes, die-cut pizza boxes, waterproof vinyl stickers, and woven clothing labels.'
                }
              }
            ]
          })
        }}
      />
      
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
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(-50%, 0, 0);
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
