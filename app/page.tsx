import React from 'react';
import Link from 'next/link';
import { ProductGrid } from '@/components/ProductGrid';

export default function HomePage() {
  return (
    <>
      {/* 3. Hero Combo Banner */}
      <section style={{ padding: '40px 20px', background: 'linear-gradient(135deg, #FFF9F2 0%, #FFF5ED 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '30px', background: '#fff', borderRadius: '24px', padding: '40px', boxShadow: 'var(--shadow-lg)' }}>
          <div style={{ flex: '1 1 400px' }}>
            <span style={{ background: '#DC2626', color: '#fff', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700 }}>LIMITED TIME OFFER</span>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginTop: '15px', lineHeight: 1.1 }}>BUSINESS BRANDING COMBO ₹699 ONLY</h1>
            <ul style={{ margin: '20px 0', padding: 0, listStyle: 'none', gap: '10px', display: 'flex', flexDirection: 'column' }}>
              <li style={{ fontSize: '1.1rem', fontWeight: 600 }}>✅ 1000 Stickers</li>
              <li style={{ fontSize: '1.1rem', fontWeight: 600 }}>✅ 200 Thank You Cards</li>
              <li style={{ fontSize: '1.1rem', fontWeight: 600 }}>✅ 1 Rubber Stamp</li>
            </ul>
            <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '25px' }}>Design Charges FREE • Shipping Charges Extra</p>
            <Link href="/shop" style={{ display: 'inline-block', background: '#DC2626', color: '#fff', padding: '14px 32px', borderRadius: '8px', fontWeight: 700, fontSize: '1.1rem' }}>Order Now &rarr;</Link>
          </div>
          <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
             <img src="/assets/combo_banner_new.jpg" alt="Combo Offer" style={{ maxWidth: '100%', borderRadius: '16px' }} />
          </div>
        </div>
      </section>

      {/* 4. Trust Strip */}
      <section style={{ borderBottom: '1px solid #E2E8F0', padding: '20px 0', background: '#FAFAFC' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '15px' }}>
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
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Our Popular Categories</h2>
            <Link href="/shop" style={{ color: '#B81B54', fontWeight: 700 }}>View All &rarr;</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
            {[
              { title: 'Packaging Boxes', sub: 'Corrugated 3/5/7 Ply', icon: '📦' },
              { title: 'Paper Bag', sub: 'Kraft & Imported', icon: '🛍️' },
              { title: 'Paper Lifafa', sub: 'Plain & Printed', icon: '✉️' },
              { title: 'Stickers', sub: 'Roll & Sheet Form', icon: '🏷️' },
              { title: 'Printed Labels', sub: 'Product Branding', icon: '🔖' },
              { title: 'Woven Labels', sub: 'Clothing Tags', icon: '🧵' },
              { title: 'Hang Tags', sub: 'Premium Tags', icon: '📎' },
              { title: 'Food & Pizza Boxes', sub: 'Food Safe', icon: '🍕' }
            ].map(cat => (
              <Link key={cat.title} href="/shop" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '30px 20px', background: '#FAFAFC', borderRadius: '16px', border: '1px solid #E2E8F0', transition: 'all 0.2s' }} className="category-card">
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{cat.icon}</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '5px' }}>{cat.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#64748B' }}>{cat.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

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

      {/* 7. Hindi Banner */}
      <section style={{ padding: '60px 20px', background: '#0F172A', color: '#fff', textAlign: 'center' }}>
        <div className="container">
           <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '15px', color: '#FDF2F5' }}>आपके ब्रांड की पहचान, हमारी प्रिंटिंग के साथ</h2>
           <p style={{ fontSize: '1.2rem', color: '#94A3B8', maxWidth: '700px', margin: '0 auto 30px auto' }}>Paper Bag, Lifafa, Stickers, Labels, Tags, Boxes और हर तरह की प्रिंटिंग सर्विस अब एक ही जगह!</p>
           <Link href="/shop" style={{ display: 'inline-block', background: '#DC2626', color: '#fff', padding: '14px 32px', borderRadius: '8px', fontWeight: 700, fontSize: '1.1rem' }}>Shop Now &rarr;</Link>
        </div>
      </section>
      
      {/* 8. Why Choose Us */}
      <section style={{ padding: '60px 0' }}>
         <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '40px' }}>Why Choose AS Print Gallery?</h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px' }}>
                {[
                  { title: 'Premium Quality Material', icon: '⭐' },
                  { title: 'Custom Designs Available', icon: '🎨' },
                  { title: 'Competitive Pricing', icon: '💰' },
                  { title: 'On-Time Delivery', icon: '⏱️' }
                ].map(w => (
                  <div key={w.title} style={{ width: '220px', padding: '20px', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                     <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{w.icon}</div>
                     <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{w.title}</h3>
                  </div>
                ))}
            </div>
         </div>
      </section>
      
      <style>{`
        .category-card:hover {
          background: #fff !important;
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }
      `}</style>
    </>
  );
}
