import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CERTIFICATIONS_DATA } from '@/data/certificationsData';
import { siteConfig } from '@/data/siteConfig';
import { ShieldCheckIcon, FileTextIcon, WhatsAppIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Factory Certifications & Quality Reports | AS Print Gallery',
  description:
    'Official GST registration, ISO quality management protocols, FSC kraft paper compliance, and certified bursting strength test reports for AS Print Gallery.',
  alternates: {
    canonical: '/certifications'
  }
};

export default function CertificationsPage() {
  return (
    <div style={{ padding: '50px 0 70px', background: '#FAFAFC' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
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
              marginBottom: '14px'
            }}
          >
            🛡️ INDUSTRIAL QUALITY ASSURANCE
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: 'var(--text-dark)', margin: '0 0 16px 0' }}>
            Official Certifications &amp; Quality Test Reports
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
            Every carton, label, and packaging material leaving our Ghaziabad plant conforms to rigorous national and international quality parameters with verified documentation.
          </p>
        </div>

        {/* GST Notice Callout */}
        <div
          style={{
            background: '#ECFDF5',
            border: '1.5px solid #10B981',
            borderRadius: 'var(--radius-lg, 12px)',
            padding: '24px 30px',
            marginBottom: '40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#065F46', fontWeight: 800, fontSize: '1.1rem' }}>
              <ShieldCheckIcon size={20} color="#10B981" /> Verified GSTIN: {siteConfig.gstin}
            </div>
            <p style={{ margin: '6px 0 0 0', fontSize: '0.88rem', color: '#047857' }}>
              100% genuine B2B invoices generated for every transaction. Pass through your 18% Input Tax Credit seamlessly.
            </p>
          </div>
          <a
            href={`https://wa.me/${siteConfig.phones.whatsappRaw}?text=${encodeURIComponent('Hi AS Print Gallery! Please share your official GST certificate and company bank details for vendor onboarding.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-hero"
            style={{ padding: '10px 20px', fontSize: '0.85rem' }}
          >
            Request Vendor Registration Pack &rarr;
          </a>
        </div>

        {/* Certifications Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-lg, 12px)',
                border: '1px solid var(--border-light)',
                padding: '28px',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px', marginBottom: '14px' }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: '4px',
                      background: 'rgba(16, 185, 129, 0.1)',
                      color: '#059669',
                      border: '1px solid rgba(16, 185, 129, 0.2)'
                    }}
                  >
                    {cert.statusBadge}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {cert.dateOrValidity}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-dark)', margin: '0 0 8px 0' }}>
                  {cert.title}
                </h3>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '12px' }}>
                  Issuing Authority: {cert.issuingBody}
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {cert.desc}
                </p>

                {/* Key Verification Parameters */}
                <div style={{ background: '#F8FAFC', padding: '14px', borderRadius: '8px', border: '1px solid #E2E8F0', marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569', marginBottom: '8px', textTransform: 'uppercase' }}>
                    Specification Details:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {cert.meta.map((m, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                        <span style={{ color: '#64748B' }}>{m.label}:</span>
                        <strong style={{ color: '#1E293B', textAlign: 'right' }}>{m.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '10px' }}>
                {cert.isUploaded ? (
                  <a
                    href={cert.docPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-hero"
                    style={{ flex: 1, justifyContent: 'center', padding: '10px', fontSize: '0.82rem' }}
                  >
                    <FileTextIcon size={14} /> Download Document
                  </a>
                ) : (
                  <a
                    href={`https://wa.me/${siteConfig.phones.whatsappRaw}?text=${encodeURIComponent(`Hi AS Print Gallery! Please share copy of "${cert.title}" for our procurement team.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-hero"
                    style={{ flex: 1, justifyContent: 'center', padding: '10px', fontSize: '0.82rem' }}
                  >
                    <WhatsAppIcon size={14} color="#16A34A" /> Request Copy on WhatsApp
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
