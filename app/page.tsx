import React from 'react';
import Link from 'next/link';
import { ProductGrid } from '@/components/ProductGrid';

export default function HomePage() {
  return (
    <>
      {/* 3. Hero Combo Banner */}
      <section style={{ padding: '30px 20px', background: 'linear-gradient(135deg, #FFF9F2 0%, #FFF5ED 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container combo-hero-container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '30px', background: '#fff', borderRadius: '16px', padding: '30px 40px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)' }}>
          <div className="combo-hero-text" style={{ flex: '1 1 350px' }}>
            <span style={{ background: '#DC2626', color: '#fff', padding: '4px 10px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Limited Time Offer</span>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0F172A', marginTop: '12px', lineHeight: 1.2, letterSpacing: '-0.5px' }}>Business Branding Combo<br/><span style={{ color: '#DC2626' }}>₹699 Only</span></h1>
            <ul style={{ margin: '15px 0', padding: 0, listStyle: 'none', gap: '8px', display: 'flex', flexDirection: 'column', color: '#334155' }}>
              <li style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#10B981' }}>✓</span> 1000 Premium Stickers</li>
              <li style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#10B981' }}>✓</span> 200 Thank You Cards</li>
              <li style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#10B981' }}>✓</span> 1 Custom Rubber Stamp</li>
            </ul>
            <p style={{ color: '#64748B', fontSize: '0.8rem', marginBottom: '20px' }}>Design Charges FREE • Shipping Charges Extra</p>
            <Link href="/shop" style={{ display: 'inline-block', background: '#B91C1C', color: '#fff', padding: '10px 24px', borderRadius: '6px', fontWeight: 600, fontSize: '0.95rem', transition: 'background 0.2s', boxShadow: '0 4px 6px -1px rgba(185, 28, 28, 0.2)' }}>Order Now &rarr;</Link>
          </div>
          <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
             <img src="/assets/combo_banner_new.jpg" alt="Combo Offer" style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
          </div>
        </div>
      </section>

      {/* 4. Trust Strip */}
      <section style={{ borderBottom: '1px solid #E2E8F0', padding: '20px 0', background: '#FAFAFC' }}>
        <div className="container trust-strip-container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '15px' }}>
          {[
            { icon: '✨', title: 'Custom Printing', sub: 'As per your needs' },
            { icon: '🏆', title: 'High Quality', sub: 'Premium finish' },
            { icon: '🚀', title: 'Fast Delivery', sub: 'On time delivery' },
            { icon: '💬', title: 'Support', sub: 'Call / WhatsApp' }
          ].map(t => (
            <div key={t.title} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ fontSize: '2rem' }}>{t.icon}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: '#0F172A' }}>{t.title}</div>
                <div style={{ fontSize: '0.85rem', color: '#64748B' }}>{t.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Popular Categories */}
      <section style={{ padding: '70px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="cat-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
            <h2 className="section-title" style={{ fontSize: '2.2rem', fontWeight: 700, color: '#0F172A', margin: 0, letterSpacing: '-0.5px' }}>Our Popular Categories</h2>
            <Link href="/shop" style={{ color: '#B91C1C', fontWeight: 600, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>View All <span style={{ fontSize: '1.2rem' }}>&rarr;</span></Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '24px' }}>
            {[
              { id: 'boxes', title: 'Packaging Boxes', sub: 'Corrugated 3/5/7 Ply', img: '/assets/corrugated_box.jpg' },
              { id: 'bags', title: 'Paper Bag', sub: 'Kraft & Imported', img: '/assets/kraft_bag.jpg' },
              { id: 'lifafa', title: 'Paper Lifafa', sub: 'Plain & Printed', img: '/assets/lifafa.jpg' },
              { id: 'stickers', title: 'Stickers', sub: 'Roll & Sheet Form', img: '/assets/stickers.jpg' },
              { id: 'printed-labels', title: 'Printed Labels', sub: 'Product Branding', img: '/assets/printed_labels.jpg' },
              { id: 'woven-labels', title: 'Woven Labels', sub: 'Clothing Tags', img: '/assets/woven_labels.jpg' },
              { id: 'hang-tags', title: 'Hang Tags', sub: 'Premium Tags', img: '/assets/hang_tags.jpg' },
              { id: 'food-boxes', title: 'Food & Pizza Boxes', sub: 'Food Safe', img: '/assets/pizza_box.jpg' }
            ].map(cat => (
              <Link key={cat.title} href="/shop" style={{ textDecoration: 'none', display: 'block', group: 'true' }} className="premium-cat-card">
                <div style={{ background: '#F8FAFC', borderRadius: '12px', padding: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', marginBottom: '16px', overflow: 'hidden', position: 'relative' }}>
                  {/* We use an image if it exists, else fallback to a premium placeholder text */}
                  <img src={cat.img} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 0.4s ease' }} className="cat-img" onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.nextElementSibling.style.display='block'; }} />
                  <div style={{ display: 'none', color: '#94A3B8', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '1px' }}>IMAGE PENDING</div>
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '4px', letterSpacing: '-0.3px' }}>{cat.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#64748B', margin: 0 }}>{cat.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <style>{`
        .premium-cat-card:hover .cat-img {
          transform: scale(1.08);
        }
      `}</style>

      {/* 6. Best Sellers */}
      <section style={{ padding: '40px 0 60px 0', background: '#FAFAFC' }}>
        <div className="container">
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Best Sellers</h2>
            <Link href="/shop" style={{ color: '#B81B54', fontWeight: 700 }}>View All &rarr;</Link>
          </div>
          <ProductGrid initialFilter="all" showAllButton={false} limit={4} hideTabs={true} />
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
