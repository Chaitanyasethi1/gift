import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { BoxConfigurator } from '@/components/BoxConfigurator';
import { siteConfig } from '@/data/siteConfig';
import { ShieldCheckIcon, WhatsAppIcon, CheckCircleIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Custom 3D Corrugated Box Builder & Live Price Calculator | AS Print Gallery',
  description:
    'Build and customize your own 3-ply and 5-ply corrugated boxes in 3D. Calculate exact factory wholesale pricing, preview live branding, and order direct from our Ghaziabad plant.',
  alternates: {
    canonical: '/custom-box-builder'
  }
};

export default function CustomBoxBuilderPage() {
  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh', paddingBottom: '80px' }}>

      {/* Studio Header */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          color: '#FFFFFF',
          padding: '50px 0 40px',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '960px' }}>
          {/* Breadcrumb */}
          <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginBottom: '16px' }}>
            <Link href="/" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: '#F1F5F9' }}>Customize</span>
          </div>

          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '20px',
              background: 'rgba(184, 27, 84, 0.25)',
              border: '1px solid var(--primary)',
              color: '#F472B6',
              fontSize: '0.8rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}
          >
            📦 3D INTERACTIVE PACKAGING STUDIO
          </span>

          <h1
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 3rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              margin: '0 0 16px 0',
              lineHeight: 1.2
            }}
          >
            Custom Corrugated Box Builder &amp; <span style={{ color: 'var(--primary)' }}>Live Price Calculator</span>
          </h1>

          <p
            style={{
              fontSize: '1.05rem',
              color: '#CBD5E1',
              lineHeight: 1.6,
              maxWidth: '780px',
              margin: '0 auto 24px'
            }}
          >
            Enter your exact inner carton dimensions (L x W x H in inches), select kraft ply thickness, preview your logo in 3D, and calculate instant transparent factory rates with zero middleman markups.
          </p>

          <div style={{ display: 'inline-flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.82rem', padding: '6px 14px', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.08)', color: '#E2E8F0', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
              ✔ 3-Ply &amp; 5-Ply Industrial Kraft
            </span>
            <span style={{ fontSize: '0.82rem', padding: '6px 14px', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.08)', color: '#E2E8F0', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
              ✔ Tested 18-24 Bursting Factor
            </span>
            <span style={{ fontSize: '0.82rem', padding: '6px 14px', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.08)', color: '#E2E8F0', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
              ✔ Pan-India Courier &amp; Part-Truckload Dispatch
            </span>
          </div>
        </div>
      </section>

      {/* 3D Configurator Studio */}
      <section style={{ padding: '40px 0' }}>
        <div className="container" style={{ maxWidth: '1240px' }}>
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
              overflow: 'hidden'
            }}
          >
            <BoxConfigurator />
          </div>
        </div>
      </section>

      {/* How Custom Box Manufacturing Works */}
      <section style={{ padding: '40px 0' }}>
        <div className="container" style={{ maxWidth: '1160px' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', margin: '0 0 10px 0' }}>
              How Custom Box Production Works at AS Print Gallery
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#64748B', margin: 0 }}>
              From digital 3D model to mass rotary corrugation and door-step dispatch in 4 transparent stages.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px'
            }}
          >
            <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '24px', border: '1px solid #E2E8F0' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(184, 27, 84, 0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem', marginBottom: '14px' }}>
                1
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                Size &amp; Board Selection
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                Configure length, width, and height. Choose single-wall 3-ply for lightweight e-commerce or double-wall 5-ply for heavy shipping.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '24px', border: '1px solid #E2E8F0' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(184, 27, 84, 0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem', marginBottom: '14px' }}>
                2
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                Pre-Press Artwork &amp; 3D Proof
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                Upload your vector artwork or text. Our design engineers prepare zero-cost digital die-line proofs and Pantone color matches before manufacturing.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '24px', border: '1px solid #E2E8F0' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(184, 27, 84, 0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem', marginBottom: '14px' }}>
                3
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                Automated Plant Corrugation
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                High-speed rotary corrugation lines flute virgin kraft paper, rotary slotters die-cut the flaps, and flexo printers apply razor-sharp ink.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '24px', border: '1px solid #E2E8F0' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(184, 27, 84, 0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem', marginBottom: '14px' }}>
                4
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                B2B GST Dispatch &amp; Tracking
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                Strapped in weather-safe bundles, accompanied by genuine 18% GST invoices with ITC, and dispatched across Delhi NCR and all 28 Indian states.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flute & Ply Technical Reference Table */}
      <section style={{ padding: '30px 0' }}>
        <div className="container" style={{ maxWidth: '1160px' }}>
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid #E2E8F0',
              padding: '32px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
            }}
          >
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
              Ply Thickness &amp; Strength Selection Guide
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '24px' }}>
              Not sure whether 3-ply or 5-ply is right for your cargo? Review our engineering benchmarks:
            </p>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: '#F8FAFC', borderBottom: '2px solid #E2E8F0' }}>
                    <th style={{ padding: '12px 16px', color: '#334155', fontWeight: 700 }}>Wall Type</th>
                    <th style={{ padding: '12px 16px', color: '#334155', fontWeight: 700 }}>Flute Profile</th>
                    <th style={{ padding: '12px 16px', color: '#334155', fontWeight: 700 }}>Bursting Factor</th>
                    <th style={{ padding: '12px 16px', color: '#334155', fontWeight: 700 }}>Weight Capacity</th>
                    <th style={{ padding: '12px 16px', color: '#334155', fontWeight: 700 }}>Recommended Industry Application</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 700, color: '#0F172A' }}>3-Ply (Single Wall)</td>
                    <td style={{ padding: '14px 16px', color: '#64748B' }}>B-Flute / C-Flute</td>
                    <td style={{ padding: '14px 16px', color: '#64748B' }}>18 - 20 BF</td>
                    <td style={{ padding: '14px 16px', color: '#64748B' }}>Up to 8 - 12 kg</td>
                    <td style={{ padding: '14px 16px', color: '#334155' }}>E-commerce mailers, apparel, shoes, cosmetics, light consumer goods</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #F1F5F9', background: '#FAFCFF' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 700, color: 'var(--primary)' }}>5-Ply (Double Wall)</td>
                    <td style={{ padding: '14px 16px', color: '#64748B' }}>BC-Flute Combination</td>
                    <td style={{ padding: '14px 16px', color: '#64748B' }}>22 - 28 BF</td>
                    <td style={{ padding: '14px 16px', color: '#64748B' }}>Up to 25 - 35 kg</td>
                    <td style={{ padding: '14px 16px', color: '#334155' }}>Heavy logistics, glassware, auto parts, industrial exports, master cartons</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '14px 16px', fontWeight: 700, color: '#0F172A' }}>7-Ply (Triple Wall)</td>
                    <td style={{ padding: '14px 16px', color: '#64748B' }}>AAA / AAC-Flute</td>
                    <td style={{ padding: '14px 16px', color: '#64748B' }}>32+ BF</td>
                    <td style={{ padding: '14px 16px', color: '#64748B' }}>Up to 70+ kg</td>
                    <td style={{ padding: '14px 16px', color: '#334155' }}>Machinery parts, heavy industrial export freight, metal components</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Need Custom Die-Cuts or Odd Dimensions CTA */}
      <section style={{ padding: '30px 0 20px' }}>
        <div className="container" style={{ maxWidth: '1160px' }}>
          <div
            style={{
              background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
              color: '#FFFFFF',
              borderRadius: '20px',
              padding: '36px 40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '24px'
            }}
          >
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0 0 8px 0', color: '#FFFFFF' }}>
                Need Special Die-Cut Shapes or Odd Dimensions?
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#94A3B8', margin: 0, maxWidth: '650px' }}>
                If your carton requires specialized locks, handle cutouts, partition dividers, or custom Pantone spot colors, our design engineers can build a custom mold.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/${siteConfig.phones.whatsappRaw}?text=${encodeURIComponent('Hi AS Print Gallery! I need a custom quote for specialized corrugated box dimensions & die-cutting.')}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#25D366',
                  color: '#FFFFFF',
                  padding: '12px 22px',
                  borderRadius: '10px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  fontSize: '0.9rem'
                }}
              >
                <WhatsAppIcon size={18} /> Chat with Packaging Engineer
              </a>
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  padding: '12px 22px',
                  borderRadius: '10px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  fontSize: '0.9rem'
                }}
              >
                Request Plant Visit &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
