'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const posters = [
  { id: 1, img: '/assets/banner_woven_labels.png', alt: 'Woven Labels - AS Print Gallery', link: '/shop' },
  { id: 2, img: '/assets/banner_corrugated_box.png', alt: 'Corrugated Box - AS Print Gallery', link: '/shop' },
  { id: 3, img: '/assets/banner_custom_stickers.png', alt: 'Custom Stickers - AS Print Gallery', link: '/shop' },
  { id: 4, img: '/assets/banner_satin_labels.png', alt: 'Printed Satin Labels - AS Print Gallery', link: '/shop' },
  { id: 5, img: '/assets/banner_custom_packaging.png', alt: 'Custom Packaging Boxes - AS Print Gallery', link: '/shop' }
];

export const ComboSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % posters.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((currentIndex - 1 + posters.length) % posters.length);
  };

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((currentIndex + 1) % posters.length);
  };

  return (
    <section style={{ padding: 0, background: '#f8fafc', position: 'relative', width: '100%', overflow: 'hidden' }}>
      <div style={{ width: '100%', position: 'relative' }}>
        {posters.map((poster, idx) => (
          <Link
            key={poster.id}
            href={poster.link}
            style={{
              display: idx === currentIndex ? 'block' : 'none',
              width: '100%',
              textDecoration: 'none',
              animation: 'fadeSlide 0.4s ease-in-out'
            }}
          >
            <img
              src={poster.img}
              alt={poster.alt}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                maxHeight: '480px',
                objectFit: 'contain'
              }}
            />
          </Link>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prev}
          aria-label="Previous Slide"
          style={arrowStyle('left')}
          className="slider-arrow-btn"
        >
          &#10094;
        </button>
        <button
          onClick={next}
          aria-label="Next Slide"
          style={arrowStyle('right')}
          className="slider-arrow-btn"
        >
          &#10095;
        </button>

        {/* Indicators */}
        <div style={{ position: 'absolute', bottom: '15px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 10 }}>
          {posters.map((_, idx) => (
            <div
              key={idx}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              style={{
                width: idx === currentIndex ? '24px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: idx === currentIndex ? '#65A34A' : 'rgba(255, 255, 255, 0.7)',
                border: '1px solid rgba(0,0,0,0.15)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0.6; }
          to { opacity: 1; }
        }
        .slider-arrow-btn {
          opacity: 0.75;
          transition: all 0.2s ease;
        }
        .slider-arrow-btn:hover {
          opacity: 1 !important;
          transform: translateY(-50%) scale(1.1) !important;
          background: rgba(0, 0, 0, 0.75) !important;
        }
        @media (max-width: 768px) {
          .slider-arrow-btn {
            width: 32px !important;
            height: 32px !important;
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

function arrowStyle(position: 'left' | 'right'): React.CSSProperties {
  return {
    position: 'absolute',
    top: '50%',
    [position]: '15px',
    transform: 'translateY(-50%)',
    background: 'rgba(0,0,0,0.5)',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '42px',
    height: '42px',
    cursor: 'pointer',
    fontSize: '1.2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    boxShadow: '0 4px 10px rgba(0,0,0,0.25)'
  };
}


