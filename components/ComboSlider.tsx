'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const combos = [
  {
    id: 1,
    title: 'Starter Branding Combo',
    price: '₹999 Only',
    features: [
      '1000 Premium Custom Stickers',
      '200 Thank You Cards',
      '1 Custom Rubber Stamp',
    ],
    img: '/assets/combo_999.jpg'
  },
  {
    id: 2,
    title: 'E-commerce Shipping Combo',
    price: '₹1299 Only',
    features: [
      '500 Polymailers & 100 Corrugated Boxes',
      '100m Bubble Wrap Roll',
      '500 Brand Seal Stickers',
    ],
    img: '/assets/combo_1299.jpg'
  },
  {
    id: 3,
    title: 'Luxury Retail Combo',
    price: '₹1499 Only',
    features: [
      '100 Premium Rigid Boxes',
      '500 Golden Foil Labels',
      'Custom Branded Satin Ribbon',
    ],
    img: '/assets/combo_1499.jpg'
  }
];

export const ComboSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % combos.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const currentCombo = combos[currentIndex];

  return (
    <section style={{ padding: '30px 20px', background: 'linear-gradient(135deg, #FFF9F2 0%, #FFF5ED 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <div className="container combo-hero-container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '30px', background: '#fff', borderRadius: '16px', padding: '30px 40px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)', minHeight: '350px', position: 'relative' }}>
        
        {/* Animated Content Wrapper */}
        <div key={currentCombo.id} className="combo-slide-in" style={{ display: 'flex', flexWrap: 'wrap', width: '100%', gap: '30px', alignItems: 'center' }}>
          <div className="combo-hero-text" style={{ flex: '1 1 350px' }}>
            <span style={{ background: '#DC2626', color: '#fff', padding: '4px 10px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Limited Time Offer</span>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0F172A', marginTop: '12px', lineHeight: 1.2, letterSpacing: '-0.5px' }}>
              {currentCombo.title}<br/>
              <span style={{ color: '#DC2626' }}>{currentCombo.price}</span>
            </h1>
            <ul style={{ margin: '15px 0', padding: 0, listStyle: 'none', gap: '8px', display: 'flex', flexDirection: 'column', color: '#334155' }}>
              {currentCombo.features.map((feature, i) => (
                <li key={i} style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#10B981' }}>✓</span> {feature}
                </li>
              ))}
            </ul>
            <p style={{ color: '#64748B', fontSize: '0.8rem', marginBottom: '20px' }}>Design Charges FREE • Shipping Charges Extra</p>
            <Link href="/shop" style={{ display: 'inline-block', background: '#B91C1C', color: '#fff', padding: '10px 24px', borderRadius: '6px', fontWeight: 600, fontSize: '0.95rem', transition: 'background 0.2s', boxShadow: '0 4px 6px -1px rgba(185, 28, 28, 0.2)' }}>Order Now &rarr;</Link>
          </div>
          <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
             <img src={currentCombo.img} alt={currentCombo.title} style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', objectFit: 'cover', height: '280px', width: '100%' }} />
          </div>
        </div>

        {/* Indicators */}
        <div style={{ position: 'absolute', bottom: '15px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px' }}>
          {combos.map((_, idx) => (
            <div key={idx} onClick={() => setCurrentIndex(idx)} style={{ width: '10px', height: '10px', borderRadius: '50%', background: idx === currentIndex ? '#B91C1C' : '#CBD5E1', cursor: 'pointer', transition: 'background 0.3s' }} />
          ))}
        </div>

      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .combo-slide-in {
          animation: slideIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};
