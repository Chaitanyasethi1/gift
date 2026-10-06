'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { initialHomepageConfig, HeroBanner } from '@/data/homepageData';

interface ComboSliderProps {
  initialBanners?: HeroBanner[];
  slideInterval?: number;
}

export const ComboSlider: React.FC<ComboSliderProps> = ({ initialBanners, slideInterval }) => {
  const [banners, setBanners] = useState<HeroBanner[]>(
    initialBanners && initialBanners.length > 0
      ? initialBanners.filter(b => b.active)
      : initialHomepageConfig.heroBanners.filter(b => b.active)
  );
  const [intervalMs, setIntervalMs] = useState<number>(slideInterval || initialHomepageConfig.slideIntervalMs || 2000);

  // Fetch dynamic banners from Admin API
  useEffect(() => {
    async function fetchBanners() {
      try {
        const res = await fetch('/api/homepage');
        if (res.ok) {
          const data = await res.json();
          if (data?.heroBanners && Array.isArray(data.heroBanners)) {
            const activeOnly = data.heroBanners.filter((b: HeroBanner) => b.active);
            if (activeOnly.length > 0) {
              setBanners(activeOnly);
            }
          }
          if (data?.slideIntervalMs) {
            setIntervalMs(data.slideIntervalMs);
          }
        }
      } catch (err) {
        // Fallback already in place
      }
    }
    fetchBanners();
  }, []);

  const basePosters = banners.length > 0 ? banners : initialHomepageConfig.heroBanners;

  // Infinite loop slides: [cloneLast, ...basePosters, cloneFirst]
  const extendedSlides = [
    { ...basePosters[basePosters.length - 1], uniqueKey: 'clone-last' },
    ...basePosters.map((p) => ({ ...p, uniqueKey: `real-${p.id}` })),
    { ...basePosters[0], uniqueKey: 'clone-first' }
  ];

  // Start at index 1 (the first real slide)
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, intervalMs);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [basePosters.length, intervalMs]);

  // Handle seamless infinite loop jump when animation ends
  const handleTransitionEnd = () => {
    if (currentIndex === extendedSlides.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
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

  // Compute active real dot index
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
      {/* Viewport & Horizontal Sliding Track */}
      <div style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
        <div
          onTransitionEnd={handleTransitionEnd}
          style={{
            display: 'flex',
            width: '100%',
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
            willChange: 'transform'
          }}
        >
          {extendedSlides.map((poster, idx) => (
            <div
              key={poster.uniqueKey}
              style={{
                flex: '0 0 100%',
                width: '100%',
                position: 'relative',
                lineHeight: 0
              }}
            >
              <Link
                href={poster.link || '/shop'}
                style={{ display: 'block', width: '100%', textDecoration: 'none', cursor: 'pointer' }}
              >
                <img
                  src={poster.img}
                  alt={poster.alt || 'AS Print Gallery Factory Packaging & Printing'}
                  width={1200}
                  height={450}
                  loading={idx === 1 ? 'eager' : 'lazy'}
                  // @ts-ignore
                  fetchPriority={idx === 1 ? 'high' : 'auto'}
                  decoding="async"
                  style={{
                    width: '100%',
                    height: 'auto',
                    minHeight: '180px',
                    maxHeight: '620px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </Link>
            </div>
          ))}
        </div>

        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous Banner"
          style={{
            position: 'absolute',
            top: '50%',
            left: '16px',
            transform: 'translateY(-50%)',
            background: 'rgba(0, 0, 0, 0.45)',
            color: '#FFFFFF',
            border: 'none',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all 0.2s ease',
            backdropFilter: 'blur(4px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.25)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.45)';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next Banner"
          style={{
            position: 'absolute',
            top: '50%',
            right: '16px',
            transform: 'translateY(-50%)',
            background: 'rgba(0, 0, 0, 0.45)',
            color: '#FFFFFF',
            border: 'none',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all 0.2s ease',
            backdropFilter: 'blur(4px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.25)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.45)';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Dot Indicators with Accessible Touch Targets */}
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
            zIndex: 10,
            background: 'rgba(0, 0, 0, 0.35)',
            padding: '2px 8px',
            borderRadius: '24px',
            backdropFilter: 'blur(4px)'
          }}
        >
          {basePosters.map((_, dotIdx) => {
            const isActive = activeDotIndex === dotIdx;
            return (
              <button
                key={dotIdx}
                type="button"
                onClick={(e) => handleDotClick(dotIdx, e)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                style={{
                  minWidth: '40px',
                  minHeight: '40px',
                  padding: '10px 4px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span
                  style={{
                    display: 'block',
                    width: isActive ? '22px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.55)',
                    transition: 'all 0.25s ease'
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
