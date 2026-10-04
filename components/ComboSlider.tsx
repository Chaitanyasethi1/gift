'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const basePosters = [
  { id: 1, img: '/assets/banner_woven_labels.png', alt: 'Woven Labels - AS Print Gallery', link: '/shop' },
  { id: 2, img: '/assets/banner_corrugated_box.png', alt: 'Corrugated Box - AS Print Gallery', link: '/shop' },
  { id: 3, img: '/assets/banner_custom_stickers.png', alt: 'Custom Stickers - AS Print Gallery', link: '/shop' },
  { id: 4, img: '/assets/banner_satin_labels.png', alt: 'Printed Satin Labels - AS Print Gallery', link: '/shop' },
  { id: 5, img: '/assets/banner_custom_packaging.png', alt: 'Custom Packaging Boxes - AS Print Gallery', link: '/shop' }
];

// Infinite loop slides: [cloneLast, ...basePosters, cloneFirst]
const extendedSlides = [
  { ...basePosters[basePosters.length - 1], uniqueKey: 'clone-last' },
  ...basePosters.map((p) => ({ ...p, uniqueKey: `real-${p.id}` })),
  { ...basePosters[0], uniqueKey: 'clone-first' }
];

export const ComboSlider: React.FC = () => {
  // Start at index 1 (the first real slide)
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 2000); // Continuous auto slide every 2 seconds
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Handle seamless infinite loop jump when animation ends
  const handleTransitionEnd = () => {
    if (currentIndex === extendedSlides.length - 1) {
      // Reached clone of first slide -> snap instantly back to real first slide
      setIsTransitioning(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      // Reached clone of last slide -> snap instantly back to real last slide
      setIsTransitioning(false);
      setCurrentIndex(basePosters.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
    startAutoSlide();
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
    startAutoSlide();
  };

  const handleDotClick = (targetRealIdx: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsTransitioning(true);
    setCurrentIndex(targetRealIdx + 1);
    startAutoSlide();
  };

  // Compute active real dot index (0 to 4)
  const activeDotIndex =
    currentIndex === 0
      ? basePosters.length - 1
      : currentIndex === extendedSlides.length - 1
      ? 0
      : currentIndex - 1;

  return (
    <section
      style={{
        padding: 0,
        background: '#f8fafc',
        position: 'relative',
        width: '100%',
        overflow: 'hidden'
      }}
      onMouseEnter={() => {
        if (timerRef.current) clearInterval(timerRef.current);
      }}
      onMouseLeave={() => {
        startAutoSlide();
      }}
    >
      <div style={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
        
        {/* Continuous Horizontal Sliding Track */}
        <div
          onTransitionEnd={handleTransitionEnd}
          style={{
            display: 'flex',
            width: `${extendedSlides.length * 100}%`,
            transform: `translateX(-${(currentIndex * 100) / extendedSlides.length}%)`,
            transition: isTransitioning
              ? 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
              : 'none'
          }}
        >
          {extendedSlides.map((slide, idx) => (
            <div
              key={`${slide.uniqueKey}-${idx}`}
              style={{
                width: `${100 / extendedSlides.length}%`,
                flexShrink: 0
              }}
            >
              <Link
                href={slide.link}
                style={{
                  display: 'block',
                  width: '100%',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                <img
                  src={slide.img}
                  alt={slide.alt}
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
          onClick={handlePrev}
          aria-label="Previous Slide"
          style={arrowStyle('left')}
          className="slider-arrow-btn"
        >
          &#10094;
        </button>
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          style={arrowStyle('right')}
          className="slider-arrow-btn"
        >
          &#10095;
        </button>

        {/* Indicators */}
        <div
          style={{
            position: 'absolute',
            bottom: '15px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '8px',
            zIndex: 10
          }}
        >
          {basePosters.map((_, idx) => (
            <div
              key={idx}
              onClick={(e) => handleDotClick(idx, e)}
              style={{
                width: idx === activeDotIndex ? '26px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background:
                  idx === activeDotIndex
                    ? '#65A34A'
                    : 'rgba(255, 255, 255, 0.75)',
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




