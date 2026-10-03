import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Pan-India Shipping & Logistics Policy | AS Print Gallery',
  description:
    'Dispatch schedules, shipping timelines, packaging standards, and courier partners for AS Print Gallery. Delhi NCR same/next day, pan-India 2-4 days.',
  alternates: {
    canonical: '/shipping-policy'
  }
};

export default function ShippingPolicyPage() {
  return (
    <div style={{ padding: '50px 0 70px', background: '#FAFAFC' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: 'var(--radius-xl, 16px)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', borderBottom: '1px solid var(--border-light)', paddingBottom: '20px', marginBottom: '28px' }}>
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary)', letterSpacing: '0.5px' }}>
                Pan-India Logistics &amp; Transit Policy
              </span>
              <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-dark)', marginTop: '6px', marginBottom: 0 }}>
                Standard Logistics Operating Procedures
              </h1>
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textAlign: 'right' }}>
              Factory Unit: <strong>Loni, Ghaziabad (U.P)</strong><br />
              GSTIN: <strong>{siteConfig.gstin}</strong>
            </div>
          </div>

          <h2 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-dark)' }}>
            ⚡ 1. Dispatch Turnaround Times
          </h2>
          <p style={{ marginBottom: '24px', lineHeight: 1.6, color: 'var(--text-body)' }}>
            In-stock standard items: <strong>24-48 hrs</strong>. Custom printed orders: <strong>3-5 working days</strong>. Delivery: <strong>Delhi NCR same/next day</strong>, other cities <strong>2-4 days</strong>.
          </p>

          <h2 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--text-dark)' }}>
            📍 2. Regional Delivery Windows
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', marginBottom: '28px' }}>
            <div style={{ background: 'var(--off-white)', padding: '16px', borderRadius: 'var(--radius-md, 8px)', border: '1px solid var(--border-light)' }}>
              <strong style={{ color: 'var(--text-dark)', display: 'block', marginBottom: '4px' }}>Delhi NCR Zone</strong>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Same-Day or Next-Day express delivery (Ghaziabad, Noida, Delhi, Gurgaon, Faridabad).</span>
            </div>
            <div style={{ background: 'var(--off-white)', padding: '16px', borderRadius: 'var(--radius-md, 8px)', border: '1px solid var(--border-light)' }}>
              <strong style={{ color: 'var(--text-dark)', display: 'block', marginBottom: '4px' }}>North India Hubs</strong>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>1 to 2 business days via road express (Punjab, Haryana, Rajasthan, UP, Uttarakhand).</span>
            </div>
            <div style={{ background: 'var(--off-white)', padding: '16px', borderRadius: 'var(--radius-md, 8px)', border: '1px solid var(--border-light)' }}>
              <strong style={{ color: 'var(--text-dark)', display: 'block', marginBottom: '4px' }}>Tier 1 Metros</strong>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>2 to 3 business days via Air Cargo / Surface Express (Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata).</span>
            </div>
            <div style={{ background: 'var(--off-white)', padding: '16px', borderRadius: 'var(--radius-md, 8px)', border: '1px solid var(--border-light)' }}>
              <strong style={{ color: 'var(--text-dark)', display: 'block', marginBottom: '4px' }}>Rest of India</strong>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>3 to 5 business days via SafeXpress Cargo, Delhivery Surface, or DTDC Air.</span>
            </div>
          </div>

          <h2 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-dark)' }}>
            🛡️ 3. Packaging &amp; Moisture Protection Standards
          </h2>
          <p style={{ marginBottom: '24px', lineHeight: 1.6, color: 'var(--text-body)' }}>
            All corrugated boxes are bundled in counts of 25 or 50 pieces, strapped using heavy-duty polypropylene banding, edge-protected with corner guards, and wrapped in <strong>50-micron waterproof LDPE shrink film</strong>. This ensures consignments remain unaffected by rain, humidity, or rough transport handling.
          </p>

          <h2 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-dark)' }}>
            🔍 4. Real-Time Tracking &amp; Proof of Delivery (POD)
          </h2>
          <p style={{ marginBottom: '24px', lineHeight: 1.6, color: 'var(--text-body)' }}>
            Every outbound consignment is assigned an official Air Waybill (AWB) number generated from BlueDart, Delhivery, DTDC, or SafeXpress. Live tracking links are automatically shared via SMS and WhatsApp. You can also monitor your shipment on our <Link href="/track-order" style={{ color: 'var(--primary)', fontWeight: 700 }}>Track Order Page</Link>.
          </p>

          <h2 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-dark)' }}>
            💼 5. Bulk Palletized &amp; Full Truckload (FTL) Dispatches
          </h2>
          <p style={{ margin: 0, lineHeight: 1.6, color: 'var(--text-body)' }}>
            For corporate orders of 5,000+ cartons, we arrange dedicated palletized consignments with shrink-wrap stretch film on heavy wooden pallets, loading directly onto 14ft / 19ft / 32ft commercial container trucks for direct factory-to-warehouse delivery.
          </p>

        </div>
      </div>
    </div>
  );
}
