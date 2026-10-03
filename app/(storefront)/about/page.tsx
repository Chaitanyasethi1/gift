import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';
import { FactoryGallery } from '@/components/FactoryGallery';
import { FounderVisionary } from '@/components/FounderVisionary';
import { QuoteModal } from '@/components/QuoteModal';
import { MapPinIcon, ShieldCheckIcon, PhoneIcon, WhatsAppIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'About Our Manufacturing Facility in Ghaziabad | AS Print Gallery',
  description:
    'Inside our 15,000+ sq.ft in-house corrugated box, food packaging, and garment label manufacturing plant in Loni, Ghaziabad. Direct factory supply without middlemen.',
  alternates: {
    canonical: '/about'
  }
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" style={{ padding: '60px 0', background: '#0F172A', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '6px 14px',
              borderRadius: '20px',
              background: 'rgba(184, 27, 84, 0.2)',
              border: '1px solid var(--primary)',
              color: 'var(--primary)',
              fontSize: '0.8rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}
          >
            🏭 MANUFACTURING PLANT OVERVIEW
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', fontWeight: 800, margin: '0 0 16px 0', color: '#FFFFFF' }}>
            INSIDE OUR <span style={{ color: 'var(--primary)' }}>IN-HOUSE PACKAGING</span> FACILITY
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#CBD5E1', lineHeight: 1.6, maxWidth: '750px', margin: '0 auto 28px' }}>
            Operating automated corrugation lines, precision high-definition offset presses, ultrasonic woven label looms, and die-cutting machines in Ghaziabad (Delhi NCR).
          </p>
          <div style={{ display: 'inline-flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span
              style={{
                fontSize: '0.85rem',
                padding: '8px 16px',
                borderRadius: '20px',
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#34D399',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                fontWeight: 700
              }}
            >
              ✔ GSTIN: {siteConfig.gstin}
            </span>
            <span
              style={{
                fontSize: '0.85rem',
                padding: '8px 16px',
                borderRadius: '20px',
                background: '#FEF3C7',
                color: '#92400E',
                border: '1px solid #FDE68A',
                fontWeight: 700
              }}
            >
              ⭐ Active &amp; Verified Industrial Unit
            </span>
          </div>
        </div>
      </section>

      {/* Factory Metrics */}
      <section className="trust-metrics-section">
        <div className="container metrics-grid">
          <div className="metric-card">
            <div className="metric-icon-wrap">🏭</div>
            <div className="metric-info">
              <span className="metric-number">15,000+ Sq.Ft</span>
              <span className="metric-label">Factory Floor Area</span>
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-icon-wrap">⚡</div>
            <div className="metric-info">
              <span className="metric-number">50,000 Pcs/Day</span>
              <span className="metric-label">Corrugation &amp; Box Capacity</span>
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-icon-wrap">🏷️</div>
            <div className="metric-info">
              <span className="metric-number">1,00,000+</span>
              <span className="metric-label">Daily Label Weaving &amp; Printing</span>
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-icon-wrap">🚚</div>
            <div className="metric-info">
              <span className="metric-number">28 States</span>
              <span className="metric-label">Pan-India Courier Network</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Visionary / Founder Section */}
      <FounderVisionary />

      {/* Story & Philosophy */}
      <section id="factory-story" style={{ padding: '70px 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ background: 'var(--off-white)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-xl, 16px)', padding: '40px', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '16px', color: 'var(--text-dark)' }}>
              The Story Behind AS PRINT GALLERY
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '20px' }}>
              Established with the founding mission of providing <em>&ldquo;A Complete Designing &amp; Printing Solutions&rdquo;</em>,{' '}
              <strong>AS PRINT GALLERY</strong> has evolved into one of North India&apos;s most dependable direct manufacturing centers for industrial corrugated boxes, custom food packaging, retail paper bags, garment trims, woven labels, and waterproof stickers.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
              Unlike online middlemen, brokers, or retail traders who add heavy markups and sub-contract production, we own and control the complete end-to-end production cycle under one roof in Loni, Ghaziabad. From kraft reel corrugation and flute bonding to 6-color offset printing, hot-foil stamping, automated die-cutting, and ultrasonic label sealing, our plant ensures flawless consistency.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              <div style={{ background: '#FFFFFF', padding: '18px', borderRadius: 'var(--radius-md, 8px)', border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: '1.6rem', marginBottom: '6px' }}>📐</div>
                <strong style={{ color: 'var(--text-dark)' }}>Zero Volumetric Waste</strong>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                  Custom sized boxes tailored to your products eliminate dead-air courier freight charges.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', padding: '18px', borderRadius: 'var(--radius-md, 8px)', border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: '1.6rem', marginBottom: '6px' }}>💪</div>
                <strong style={{ color: 'var(--text-dark)' }}>Tested Bursting Strength</strong>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                  Every batch of 3-ply and 5-ply cartons is calibrated to 18-24 BF for zero transit shipping damage.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', padding: '18px', borderRadius: 'var(--radius-md, 8px)', border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: '1.6rem', marginBottom: '6px' }}>🎨</div>
                <strong style={{ color: 'var(--text-dark)' }}>Complimentary Pre-Press Proofs</strong>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                  Our in-house design studio creates 3D visual proofs and die-line guides at zero extra charge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Machinery Infrastructure */}
      <FactoryGallery />

      {/* Direct Plant Query & Contact Form inside About Us */}
      <section style={{ background: '#FAF8F5', padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            📩 DIRECT FACTORY INQUIRY
          </span>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-dark)', margin: '8px 0 12px 0' }}>
            Have a Specific Packaging Query for Our Plant?
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '32px' }}>
            Fill in your packaging requirement details below. Our factory desk will prepare an instant customized wholesale quote.
          </p>
        </div>
        <QuoteModal isInline={true} />
      </section>
    </>
  );
}

