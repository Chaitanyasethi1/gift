import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';

interface FounderVisionaryProps {
  id?: string;
}

export function FounderVisionary({ id = 'visionary-section' }: FounderVisionaryProps) {
  const { founder } = siteConfig;

  return (
    <section
      id={id}
      style={{
        padding: '60px 0',
        background: '#FAF8F5'
      }}
    >
      <div className="container" style={{ maxWidth: '1160px' }}>
        <div
          style={{
            position: 'relative',
            background: '#FAF8F5',
            borderRadius: '24px',
            border: '1px solid #EFE8DE',
            padding: 'clamp(36px, 5vw, 68px) clamp(24px, 4.5vw, 64px)',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.03)',
            overflow: 'hidden'
          }}
        >
          {/* Main 2-Column Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(280px, 340px) 1fr',
              gap: 'clamp(36px, 5vw, 64px)',
              alignItems: 'center'
            }}
            className="visionary-grid-responsive"
          >
            {/* Left: Arch Photo Frame */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '320px'
                }}
              >
                {/* Thin Gold Outer Border Frame */}
                <div
                  style={{
                    padding: '10px',
                    borderRadius: '170px 170px 18px 18px',
                    border: '1.5px solid #C5A059',
                    background: '#FAF8F5',
                    boxShadow: '0 12px 32px -8px rgba(197, 160, 89, 0.18)'
                  }}
                >
                  {/* Photo Container with Arch Top */}
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '420px',
                      borderRadius: '160px 160px 12px 12px',
                      overflow: 'hidden',
                      background: '#E2E8F0'
                    }}
                  >
                    <Image
                      src={founder.image || '/assets/founder.jpg'}
                      alt={`${founder.name} - ${founder.role}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 320px"
                      priority
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center top'
                      }}
                    />
                  </div>
                </div>

                {/* Overlapping Bottom-Right Quotation Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-8px',
                    right: '-8px',
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    border: '1px solid #E8DFD0',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#C5A059',
                    zIndex: 2
                  }}
                  aria-hidden="true"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right: Visionary Story & Typography */}
            <div>
              {/* Eyebrow */}
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.22em',
                  color: '#C5A059',
                  textTransform: 'uppercase',
                  marginBottom: '16px'
                }}
              >
                {founder.eyebrow}
              </div>

              {/* Serif Headline with Italic Accent */}
              <h2
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(1.75rem, 3.2vw, 2.65rem)',
                  lineHeight: 1.25,
                  fontWeight: 500,
                  color: '#1A202C',
                  margin: '0 0 22px 0',
                  letterSpacing: '-0.01em'
                }}
              >
                &ldquo;{founder.quotePrefix}
                <span
                  style={{
                    fontStyle: 'italic',
                    color: '#C5A059',
                    fontWeight: 500
                  }}
                >
                  {founder.quoteAccent}
                </span>
                {founder.quoteSuffix}&rdquo;
              </h2>

              {/* Bio Narrative */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1rem',
                  lineHeight: 1.85,
                  color: '#4A5568',
                  maxWidth: '640px',
                  margin: '0 0 36px 0'
                }}
              >
                {founder.bio}
              </p>

              {/* Signature / Author Row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '24px'
                }}
              >
                {/* Name & Role */}
                <div>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: '1.45rem',
                      fontWeight: 600,
                      color: '#1A202C',
                      lineHeight: 1.2,
                      letterSpacing: '0.01em'
                    }}
                  >
                    {founder.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.7rem',
                      letterSpacing: '0.2em',
                      fontWeight: 700,
                      color: '#8C95A0',
                      textTransform: 'uppercase',
                      marginTop: '4px'
                    }}
                  >
                    {founder.role}
                  </div>
                </div>

                {/* Horizontal Divider */}
                <div
                  style={{
                    width: '54px',
                    height: '1px',
                    background: '#D1D5DB'
                  }}
                  aria-hidden="true"
                />

                {/* Action Link */}
                <Link
                  href={founder.ctaLink}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#1A202C',
                    textDecoration: 'underline',
                    textUnderlineOffset: '6px',
                    transition: 'color 0.2s ease'
                  }}
                  className="visionary-cta-link"
                >
                  {founder.ctaText}
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative Gold Floral/Mandala Watermark Emblem in Bottom Right */}
          <div
            style={{
              position: 'absolute',
              bottom: '18px',
              right: '24px',
              width: '48px',
              height: '48px',
              color: '#C5A059',
              opacity: 0.85,
              pointerEvents: 'none'
            }}
            aria-hidden="true"
          >
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
              <circle cx="50" cy="50" r="44" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="16" strokeWidth="2" />
              <path d="M50 6 C50 30, 70 50, 94 50 C70 50, 50 70, 50 94 C50 70, 30 50, 6 50 C30 50, 50 30, 50 6 Z" strokeWidth="2" fill="none" />
              <path d="M19 19 C35 35, 65 35, 81 19 C65 35, 65 65, 81 81 C65 65, 35 65, 19 81 C35 65, 35 35, 19 19 Z" strokeWidth="1.5" strokeDasharray="2 3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
