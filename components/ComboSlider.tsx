'use client';
import React, { useState, useEffect, useRef } from 'react';
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
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % posters.length);
    }, 2000); // 2 seconds auto slide
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + posters.length) % posters.length);
    startTimer();
  };

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % posters.length);
    startTimer();
  };

  const goToSlide = (idx: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex(idx);
    startTimer();
  };

  return (
    <section
      style={{ padding: 0, background: '#f8fafc', position: 'relative', width: '100%', overflow: 'hidden' }}
      onMouseEnter={() => {
        if (timerRef.current) clearInterval(timerRef.current);
      }}
      onMouseLeave={() => {
        startTimer();
      }}
    >
      <div style={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
        
        {/* Horizontal Sliding Track */}
        <div
          style={{
            display: 'flex',
            width: `${posters.length * 100}%`,
            transform: `translateX(-${(currentIndex * 100) / posters.length}%)`,
            transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {posters.map((poster) => (
            <div
              key={poster.id}
              style={{
                width: `${100 / posters.length}%`,
                flexShrink: 0
              }}
            >
              <Link
                href={poster.link}
                style={{
                  display: 'block',
                  width: '100%',
                  textDecoration: 'none',
                  cursor: 'pointer'
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
            </div>
          ))}
        </div>

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
              onClick={(e) => goToSlide(idx, e)}
              style={{
                width: idx === currentIndex ? '26px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: idx === currentIndex ? '#65A34A' : 'rgba(255, 255, 255, 0.75)',
                border: '1px solid rgba(0,0,0,0.2)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 4px rgba(0,0,0,0.25)'
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        .slider-arrow-btn {
          opacity: 0.8;
          transition: all 0.2s ease;
        }
        .slider-arrow-btn:hover {
          opacity: 1 !important;
          transform: translateY(-50%) scale(1.1) !important;
          background: rgba(0, 0, 0, 0.85) !important;
        }
        @media (max-width: 768px) {
          .slider-arrow-btn {
            width: 34px !important;
            height: 34px !important;
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
    background: 'rgba(0,0,0,0.55)',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '44px',
    height: '44px',
    cursor: 'pointer',
    fontSize: '1.2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
  };
}



