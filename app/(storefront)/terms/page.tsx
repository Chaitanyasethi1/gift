import React from 'react';
import { Metadata } from 'next';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Terms of Sale & Supply Agreement | AS Print Gallery',
  description:
    'Commercial terms, payment policies, production tolerances, and GST billing guidelines for AS Print Gallery packaging manufacturing contracts.',
  alternates: {
    canonical: '/terms'
  }
};

export default function TermsPage() {
  return (
    <div style={{ padding: '50px 0 70px', background: '#FAFAFC' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: 'var(--radius-xl, 16px)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
          
          <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '20px', marginBottom: '28px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary)', letterSpacing: '0.5px' }}>
              Commercial Guidelines
            </span>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-dark)', marginTop: '6px', marginBottom: 0 }}>
              Terms of Sale &amp; Supply Agreement
            </h1>
          </div>

          <h2 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-dark)' }}>
            1. Scope of Agreement
          </h2>
          <p style={{ marginBottom: '20px', lineHeight: 1.6, color: 'var(--text-body)' }}>
            These terms govern all quotations, proforma invoices, and supply agreements between <strong>AS PRINT GALLERY</strong> (&ldquo;Manufacturer&rdquo;) and the purchasing business entity (&ldquo;Buyer&rdquo;) for manufactured corrugated boxes, master cartons, labels, stickers, and packaging materials.
          </p>

          <h2 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-dark)' }}>
            2. Artwork Approval &amp; Pre-Press Verification
          </h2>
          <p style={{ marginBottom: '20px', lineHeight: 1.6, color: 'var(--text-body)' }}>
            For all custom printed packaging, 3D visual proofs and dieline specifications are provided via WhatsApp or email for written customer sign-off. Once pre-press proofs are approved, cylinder/plate engraving and offset setup commence immediately.
          </p>

          <h2 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-dark)' }}>
            3. Pricing, GST &amp; Invoicing
          </h2>
          <p style={{ marginBottom: '20px', lineHeight: 1.6, color: 'var(--text-body)' }}>
            All catalog quotes are exclusive of statutory GST unless explicitly stated otherwise. Applicable Goods and Services Tax (18% under HSN 4819 for corrugated cartons, HSN 4821 for woven labels/tags) will be added to the final invoice. AS PRINT GALLERY provides official GST tax invoices under GSTIN: <strong>{siteConfig.gstin}</strong> for full Input Tax Credit eligibility.
          </p>

          <h2 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-dark)' }}>
            4. Manufacturing Quantity &amp; Dimension Tolerances
          </h2>
          <p style={{ marginBottom: '20px', lineHeight: 1.6, color: 'var(--text-body)' }}>
            Standard industrial corrugation production carries a quantity tolerance of &plusmn;5% due to high-speed reel reel setup and slitter creaser trim allowances. Dimensional tolerances for rotary die-cut cartons are maintained within &plusmn;1.5mm.
          </p>

          <h2 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-dark)' }}>
            5. Payment Terms
          </h2>
          <p style={{ marginBottom: '20px', lineHeight: 1.6, color: 'var(--text-body)' }}>
            Standard orders require a 50% production advance via RTGS/NEFT/UPI, with the remaining 50% payable upon generation of the dispatch invoice and AWB docket. Established corporate accounts with recurring volume may apply for credit terms subject to credit appraisal.
          </p>

          <h2 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-dark)' }}>
            6. Governing Jurisdiction
          </h2>
          <p style={{ margin: 0, lineHeight: 1.6, color: 'var(--text-body)' }}>
            Any commercial dispute arising out of transactions with AS PRINT GALLERY shall be subject to the exclusive jurisdiction of the competent courts of <strong>Ghaziabad, Uttar Pradesh, India</strong>.
          </p>

        </div>
      </div>
    </div>
  );
}
