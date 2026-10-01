import React from 'react';
import { Metadata } from 'next';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Quality Assurance & Replacement Policy | AS Print Gallery',
  description:
    'Our factory defect replacement guarantee, 7-day inspection window, and quality control procedures for corrugated boxes and custom printed materials.',
  alternates: {
    canonical: '/returns-refunds'
  }
};

export default function ReturnsRefundsPage() {
  return (
    <div style={{ padding: '50px 0 70px', background: '#FAFAFC' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: 'var(--radius-xl, 16px)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
          
          <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '20px', marginBottom: '28px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary)', letterSpacing: '0.5px' }}>
              Quality Assurance &amp; Replacement
            </span>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-dark)', marginTop: '6px', marginBottom: 0 }}>
              QC Standard &amp; Return Policy
            </h1>
          </div>

          <h2 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-dark)' }}>
            1. Zero-Defect Manufacturing Guarantee
          </h2>
          <p style={{ marginBottom: '20px', lineHeight: 1.6, color: 'var(--text-body)' }}>
            At <strong>AS PRINT GALLERY</strong>, each batch of corrugated cardboard boxes, master cartons, labels, and stickers undergoes strict quality inspection (GSM validation, bursting index calibration, starch adhesion bond test, and barcode scan testing) before pallet packing.
          </p>

          <h2 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-dark)' }}>
            2. 7-Day Material Inspection Window
          </h2>
          <p style={{ marginBottom: '20px', lineHeight: 1.6, color: 'var(--text-body)' }}>
            Upon receiving your consignment via courier or factory van, please inspect the strapped bundles. If any item exhibits a manufacturing flaw (e.g. delamination, misprinting contrary to signed proof, or incorrect dimensions exceeding &plusmn;2mm), notify us within <strong>7 business days</strong> of delivery.
          </p>

          <h2 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-dark)' }}>
            3. Free Replacement of Defective Stock
          </h2>
          <p style={{ marginBottom: '20px', lineHeight: 1.6, color: 'var(--text-body)' }}>
            In the rare event of a verified manufacturing defect, AS PRINT GALLERY will arrange expedited reproduction and doorstep replacement of the defective units at 100% factory expense, with zero freight charges to the buyer.
          </p>

          <h2 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-dark)' }}>
            4. Custom Branded &amp; Die-Cut Packaging
          </h2>
          <p style={{ marginBottom: '20px', lineHeight: 1.6, color: 'var(--text-body)' }}>
            Because custom-printed corrugated boxes, personalized brand tape, and woven garment labels are manufactured exclusively to client-provided branding specifications, orders cannot be cancelled once production plates have run. We recommend requesting a physical sample swatch or digital proof prior to mass production.
          </p>

          <h2 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-dark)' }}>
            5. Initiating a QC Claim
          </h2>
          <p style={{ margin: 0, lineHeight: 1.6, color: 'var(--text-body)' }}>
            To initiate a quality claim, email photos/videos of the consignment batch along with your invoice number to <strong>{siteConfig.emails.quotations}</strong> or send them via WhatsApp to <strong>{siteConfig.phones.whatsappDisplay}</strong>. Our quality manager will respond within 24 hours.
          </p>

        </div>
      </div>
    </div>
  );
}
