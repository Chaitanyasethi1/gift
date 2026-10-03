import React from 'react';
import Link from 'next/link';
import { FactoryIcon, WhatsAppIcon, MapPinIcon } from './Icons';
import { siteConfig } from '@/data/siteConfig';

export const FactoryGallery: React.FC = () => {
  return (
    <section className="factory-gallery-section" style={{ padding: '70px 0', background: '#FFFFFF' }}>
      <div className="container">
        <div className="section-head">
          <span className="section-badge">⚙️ Plant Infrastructure</span>
          <h2 className="section-title">INSIDE OUR GHAZIABAD MANUFACTURING FACILITY</h2>
          <p className="section-subtitle">
            Operating automated corrugation lines, precision offset presses, ultrasonic woven label looms, and heavy die-cutters under one roof.
          </p>
        </div>

        {/* Plant Highlights Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '40px' }}>
          <div style={{ background: 'var(--off-white)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg, 12px)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
            <img src="/assets/factory-machine.jpg" alt="High-Speed Slitting & Printing Machines" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', color: 'var(--text-dark)' }}>High-Speed Slitting & Printing</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                Advanced machinery for precise slitting, winding, and printing with razor-sharp accuracy for all your custom packaging needs.
              </p>
            </div>
          </div>

          <div style={{ background: 'var(--off-white)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg, 12px)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
            <img src="/assets/factory-rolls.jpg" alt="Raw Material Storage" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', color: 'var(--text-dark)' }}>Massive Raw Material Inventory</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                Bulk storage of high-GSM Kraft paper rolls ensuring uninterrupted production and consistent bursting strength for all corrugated boxes.
              </p>
            </div>
          </div>

          <div style={{ background: 'var(--off-white)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg, 12px)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
            <img src="/assets/woven_label.jpg" alt="Damask Label Looms" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', color: 'var(--text-dark)' }}>Damask Label Looms & Ultrasonic Cutters</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                High-density woven label looms with laser-guided ultrasonic slitting that seals fabric edges smoothly with zero skin irritation.
              </p>
            </div>
          </div>

          <div style={{ background: 'var(--off-white)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg, 12px)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '30px', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📄</div>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', color: 'var(--text-dark)' }}>Company Profile & Logo</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '20px' }}>
              Download our official company logo and profile for your records and vendor onboarding process.
            </p>
            <a href="/assets/LOGO.pdf" download="AS_Print_Gallery_LOGO.pdf" className="btn-primary-hero" style={{ padding: '10px 20px', borderRadius: '6px' }}>
              Download PDF
            </a>
          </div>
        </div>

        {/* Factory Visit CTA Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #0B0F19 0%, #111827 100%)',
            color: '#FFFFFF',
            borderRadius: 'var(--radius-xl, 16px)',
            padding: '36px 40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >
          <div>
            <span style={{ color: '#34D399', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase' }}>
              Direct Factory Visit
            </span>
            <h3 style={{ fontSize: '1.5rem', margin: '6px 0', color: '#FFFFFF' }}>
              Would You Like to Tour Our Facility?
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#94A3B8', margin: 0 }}>
              We welcome corporate buyers, brand managers, and purchase heads to inspect our plant in Loni, Ghaziabad.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary-hero">
              <MapPinIcon size={16} /> Get Factory Directions
            </Link>
            <a
              href={`https://wa.me/${siteConfig.phones.whatsappRaw}?text=Hi%20AS%20Print%20Gallery!%20I%20would%20like%20to%20schedule%20a%20factory%20visit.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass-hero"
            >
              <WhatsAppIcon size={16} color="#FFFFFF" /> Book Visit on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
