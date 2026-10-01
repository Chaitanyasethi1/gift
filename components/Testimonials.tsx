'use client';

import React, { useState } from 'react';
import { TESTIMONIALS } from '@/data/testimonials';
import { siteConfig } from '@/data/siteConfig';
import { StarIcon, ExternalLinkIcon, CheckCircleIcon } from './Icons';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-head">
          <span className="section-badge">Client Trust &amp; Reviews</span>
          <h2 className="section-title">What Indian Businesses Say About Us</h2>
          <p className="section-subtitle">
            Reliable packaging partner for D2C brands, garment exporters, eCommerce sellers, and cloud kitchens across India.
          </p>
        </div>

        {/* TODO FOR OWNER: Replace with verified Google Business reviews once connected */}
        <div
          className="testimonials-slider-wrap"
          style={{ position: 'relative', overflow: 'hidden', maxWidth: '900px', margin: '0 auto', paddingBottom: '20px' }}
        >
          <div
            className="testimonials-slider-track"
            style={{
              display: 'flex',
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: 'transform 0.5s ease-in-out',
              alignItems: 'stretch'
            }}
          >
            {TESTIMONIALS.map((testi) => (
              <div
                key={testi.id}
                className="testimonial-card"
                style={{ minWidth: '100%', flex: '0 0 100%', boxSizing: 'border-box', margin: 0 }}
              >
                <div className="testi-stars" style={{ display: 'flex', gap: '3px', color: '#F59E0B', marginBottom: '14px' }}>
                  {[...Array(testi.rating)].map((_, i) => (
                    <StarIcon key={i} size={16} filled={true} />
                  ))}
                </div>

                <blockquote className="testi-quote" style={{ fontStyle: 'italic', margin: '0 0 16px 0', lineHeight: 1.6 }}>
                  &ldquo;{testi.quote}&rdquo;
                </blockquote>

                <div className="testi-author-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div className="testi-avatar" style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--primary)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem' }}>
                      {testi.name.charAt(0)}
                    </div>
                    <div className="testi-author-info">
                      <span className="testi-name" style={{ display: 'block', fontWeight: 700, color: 'var(--text-dark)' }}>
                        {testi.name}
                      </span>
                      <span className="testi-role" style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                        {testi.business} ({testi.city})
                      </span>
                      <span className="verified-buyer-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: '#10B981', fontWeight: 700, marginTop: '2px' }}>
                        <CheckCircleIcon size={12} color="#10B981" /> {testi.productOrdered}
                      </span>
                    </div>
                  </div>

                  {testi.googleReviewUrl ? (
                    <a
                      href={testi.googleReviewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '0.78rem', color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 700 }}
                    >
                      View on Google <ExternalLinkIcon size={12} />
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="slider-dots" style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                aria-label={`Testimonial ${i + 1}`}
                style={{
                  width: currentIndex === i ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: currentIndex === i ? 'var(--primary)' : '#CBD5E1',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>

        {/* Google Reviews link button */}
        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <a
            href={siteConfig.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-hero"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 22px', fontSize: '0.85rem' }}
          >
            <StarIcon size={16} color="#F59E0B" filled={true} /> Read Google Verified Reviews &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
