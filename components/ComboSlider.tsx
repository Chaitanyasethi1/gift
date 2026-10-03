'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { CountdownTimer } from './CountdownTimer';

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
    }, 4000); // Increased time slightly for better readability
    return () => clearInterval(timer);
  }, []);

  const currentCombo = combos[currentIndex];

  return (
    <section style={{ padding: '20px 15px', background: 'linear-gradient(135deg, #FFF9F2 0%, #FFF5ED 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <div className="container combo-hero-container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px', background: '#fff', borderRadius: '12px', padding: '20px 30px', boxShadow: '0 4px 15px -5px rgba(0, 0, 0, 0.05)', minHeight: '300px', position: 'relative' }}>
        
        {/* Animated Content Wrapper */}
        <div key={currentCombo.id} className="combo-slide-in" style={{ display: 'flex', flexWrap: 'wrap', width: '100%', gap: '20px', alignItems: 'center' }}>
          <div className="combo-hero-text" style={{ flex: '1 1 300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
              <span style={{ background: '#DC2626', color: '#fff', padding: '4px 10px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Limited Time Offer</span>
              <CountdownTimer days={20} />
            </div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', marginTop: '4px', lineHeight: 1.2, letterSpacing: '-0.5px' }}>
              {currentCombo.title}<br/>
              <span style={{ color: '#DC2626' }}>{currentCombo.price}</span>
            </h1>
            <ul style={{ margin: '10px 0', padding: 0, listStyle: 'none', gap: '6px', display: 'flex', flexDirection: 'column', color: '#334155' }}>
              {currentCombo.features.map((feature, i) => (
                <li key={i} style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#10B981' }}>✓</span> {feature}
                </li>
              ))}
            </ul>
            <p style={{ color: '#64748B', fontSize: '0.75rem', marginBottom: '15px' }}>Design Charges FREE • Shipping Charges Extra</p>
            <Link href="/shop" style={{ display: 'inline-block', background: '#B91C1C', color: '#fff', padding: '8px 20px', borderRadius: '6px', fontWeight: 600, fontSize: '0.9rem', transition: 'background 0.2s', boxShadow: '0 4px 6px -1px rgba(185, 28, 28, 0.2)' }}>Order Now &rarr;</Link>
          </div>
          <div style={{ flex: '1 1 250px', textAlign: 'center' }}>
             <img src={currentCombo.img} alt={currentCombo.title} style={{ maxWidth: '100%', borderRadius: '10px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', objectFit: 'cover', height: '220px', width: '100%' }} />
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
