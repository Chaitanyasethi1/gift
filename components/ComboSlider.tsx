'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const posters = [
  { id: 1, img: '/assets/hero1.png', alt: 'AS Print Gallery Banner 1' },
  { id: 2, img: '/assets/hero2.png', alt: 'AS Print Gallery Banner 2' }
];

export const ComboSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % posters.length);
    }, 4000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ padding: '0', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <div style={{ width: '100%', position: 'relative' }}>
        
        {/* Animated Image Wrapper */}
        <div className="hero-slider-wrapper" style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
          {posters.map((poster, idx) => (
            <div 
              key={poster.id}
              style={{
                display: idx === currentIndex ? 'block' : 'none',
                width: '100%',
                animation: 'fadeIn 0.5s ease-in-out'
              }}
            >
              <img 
                src={poster.img} 
                alt={poster.alt} 
                className="hero-slider-img"
              />
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div style={{ position: 'absolute', bottom: '15px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px' }}>
          {posters.map((_, idx) => (
            <div 
              key={idx} 
              onClick={() => setCurrentIndex(idx)} 
              style={{ 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                background: idx === currentIndex ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)',
                border: '1px solid rgba(0,0,0,0.2)',
                cursor: 'pointer', 
                transition: 'all 0.3s' 
              }} 
            />
          ))}
        </div>

      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .hero-slider-wrapper {
          max-width: 1600px;
          margin: 0 auto;
        }
        .hero-slider-img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        @media (max-width: 768px) {
          .hero-slider-img {
            height: 180px;
          }
        }
      `}</style>
    </section>
  );
};
