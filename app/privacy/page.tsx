import React from 'react';
import { Metadata } from 'next';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Privacy Policy | AS Print Gallery',
  description:
    'Information regarding customer data handling, GST billing confidentiality, and communication protocols at AS Print Gallery.',
  alternates: {
    canonical: '/privacy'
  }
};

export default function PrivacyPage() {
  return (
    <div style={{ padding: '50px 0 70px', background: '#FAFAFC' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: 'var(--radius-xl, 16px)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
          
          <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '20px', marginBottom: '28px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary)', letterSpacing: '0.5px' }}>
              Data Protection &amp; Confidentiality
            </span>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-dark)', marginTop: '6px', marginBottom: 0 }}>
              Privacy Policy
            </h1>
          </div>

          <h2 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-dark)' }}>
            1. Information We Collect
          </h2>
          <p style={{ marginBottom: '20px', lineHeight: 1.6, color: 'var(--text-body)' }}>
            We collect information strictly necessary to process wholesale packaging orders and generate statutory tax invoices: contact name, business/company name, GSTIN (optional for B2B input tax credit), delivery address with PIN code, email address, and mobile phone number for courier tracking updates.
          </p>

          <h2 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-dark)' }}>
            2. Use of Information
          </h2>
          <p style={{ marginBottom: '20px', lineHeight: 1.6, color: 'var(--text-body)' }}>
            Collected information is utilized exclusively for: (a) generating formal quotations, (b) producing and dispatching custom packaging consignments, (c) sharing AWB tracking updates via SMS/WhatsApp, and (d) generating 100% compliant GST tax invoices under GSTIN: <strong>{siteConfig.gstin}</strong>.
          </p>

          <h2 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-dark)' }}>
            3. Data Sharing &amp; Third Parties
          </h2>
          <p style={{ marginBottom: '20px', lineHeight: 1.6, color: 'var(--text-body)' }}>
            <strong>We do not sell, rent, or trade client information to any third-party marketing brokers.</strong> Information is shared solely with our integrated courier logistics partners (e.g. BlueDart, Delhivery, SafeXpress, DTDC) to complete physical consignment delivery.
          </p>

          <h2 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-dark)' }}>
            4. Client Brand Artwork &amp; Design Confidentiality
          </h2>
          <p style={{ marginBottom: '20px', lineHeight: 1.6, color: 'var(--text-body)' }}>
            All proprietary vector files, logo dielines, and custom artwork provided by clients remain the exclusive intellectual property of the respective brand. We treat all client designs with strict commercial confidentiality.
          </p>

          <h2 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-dark)' }}>
            5. Contact Information
          </h2>
          <p style={{ margin: 0, lineHeight: 1.6, color: 'var(--text-body)' }}>
            For questions regarding our privacy practices or to request data modification, contact us at <strong>{siteConfig.emails.quotations}</strong> or call our administrative desk at <strong>{siteConfig.phones.salesDisplay}</strong>.
          </p>

        </div>
      </div>
    </div>
  );
}
