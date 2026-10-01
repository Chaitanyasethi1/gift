'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/data/siteConfig';
import { 
  PhoneIcon, 
  WhatsAppIcon, 
  MailIcon, 
  MapPinIcon, 
  ShieldCheckIcon 
} from '@/components/Icons';

export const ContactClient: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [purpose, setPurpose] = useState('Corrugated Shipping Boxes Wholesale');
  const [message, setMessage] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = phone.trim().replace(/\D/g, '');
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setPhoneError('Please enter a valid 10-digit Indian mobile number.');
      return;
    }
    setPhoneError('');

    let text = `🏭 *FACTORY INQUIRY VIA CONTACT PAGE*\n\n`;
    text += `• *Name / Company:* ${name.trim()}\n`;
    text += `• *Mobile:* +91 ${cleanPhone}\n`;
    if (email.trim()) text += `• *Email:* ${email.trim()}\n`;
    text += `• *Inquiry Type:* ${purpose}\n`;
    text += `• *Message:* ${message.trim()}\n\n`;
    text += `Please get in touch with quotation and factory dispatch details.`;

    const url = `https://wa.me/${siteConfig.phones.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div style={{ padding: '50px 0', background: '#FAFAFC' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          
          {/* Left Column: Direct Factory Contacts */}
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary)', letterSpacing: '0.5px' }}>
              Direct Factory Access
            </span>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-dark)', margin: '8px 0 16px 0' }}>
              Connect with Our Production Team
            </h1>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '28px' }}>
              We welcome client visits, wholesale inquiries, and contract manufacturing partnerships. Contact our sales engineers directly:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '16px', background: '#FFFFFF', padding: '20px', borderRadius: '10px', border: '1px solid var(--border-light)' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '8px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                  <PhoneIcon size={20} />
                </div>
                <div>
                  <strong style={{ display: 'block', color: 'var(--text-dark)', fontSize: '0.95rem' }}>Factory Sales Hotline</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>For bulk quotes, pricing &amp; purchase orders</span>
                  <a href={siteConfig.phones.salesTel} style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'none' }}>
                    {siteConfig.phones.salesDisplay}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', background: '#FFFFFF', padding: '20px', borderRadius: '10px', border: '1px solid var(--border-light)' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '8px', background: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981', flexShrink: 0 }}>
                  <WhatsAppIcon size={20} color="#10B981" />
                </div>
                <div>
                  <strong style={{ display: 'block', color: 'var(--text-dark)', fontSize: '0.95rem' }}>WhatsApp Helpline &amp; Proofs</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Send artwork, dielines &amp; get instant quote</span>
                  <a href={`https://wa.me/${siteConfig.phones.whatsappRaw}`} target="_blank" rel="noopener noreferrer" style={{ color: '#16A34A', fontWeight: 700, textDecoration: 'none' }}>
                    {siteConfig.phones.whatsappDisplay}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', background: '#FFFFFF', padding: '20px', borderRadius: '10px', border: '1px solid var(--border-light)' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '8px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B82F6', flexShrink: 0 }}>
                  <MailIcon size={20} />
                </div>
                <div>
                  <strong style={{ display: 'block', color: 'var(--text-dark)', fontSize: '0.95rem' }}>Official Quotation Email</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Formal RFQs, vendor registration &amp; POs</span>
                  <a href={`mailto:${siteConfig.emails.quotations}`} style={{ color: '#2563EB', fontWeight: 600, textDecoration: 'none' }}>
                    {siteConfig.emails.quotations}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', background: '#FFFFFF', padding: '20px', borderRadius: '10px', border: '1px solid var(--border-light)' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '8px', background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D97706', flexShrink: 0 }}>
                  <MapPinIcon size={20} />
                </div>
                <div>
                  <strong style={{ display: 'block', color: 'var(--text-dark)', fontSize: '0.95rem' }}>Manufacturing Unit Address</strong>
                  <p style={{ margin: '4px 0 6px 0', fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: 1.4 }}>
                    {siteConfig.address.full}
                  </p>
                  <span style={{ fontSize: '0.8rem', color: '#64748B', display: 'block' }}>
                    <strong>GSTIN:</strong> {siteConfig.gstin} (Uttar Pradesh)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div style={{ background: '#FFFFFF', padding: '36px', borderRadius: 'var(--radius-xl, 16px)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', margin: '0 0 6px 0' }}>
              Send an Instant Inquiry
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: '0 0 24px 0' }}>
              Fill in your requirement. Our logistics and production coordinator will contact you immediately.
            </p>

            <form onSubmit={handleSubmit} className="modal-form-grid">
              <div className="form-field-group">
                <label htmlFor="ct-name">Your Name / Business Name <span style={{ color: '#EF4444' }}>*</span></label>
                <input
                  type="text"
                  id="ct-name"
                  placeholder="e.g. Vikas Sharma / Sunrise Retail"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="ct-phone">Mobile / WhatsApp Number <span style={{ color: '#EF4444' }}>*</span></label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', padding: '0 10px', background: '#F1F5F9', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', fontSize: '0.88rem', fontWeight: 600, color: '#475569' }}>
                    +91
                  </span>
                  <input
                    type="tel"
                    id="ct-phone"
                    placeholder="10-digit Indian Mobile"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (phoneError) setPhoneError('');
                    }}
                    required
                    style={{ flex: 1 }}
                  />
                </div>
                {phoneError && (
                  <span style={{ color: '#DC2626', fontSize: '0.78rem', marginTop: '4px', display: 'block' }}>
                    {phoneError}
                  </span>
                )}
              </div>

              <div className="form-field-group">
                <label htmlFor="ct-email">Email Address <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>(Optional)</span></label>
                <input
                  type="email"
                  id="ct-email"
                  placeholder="e.g. procurement@brand.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="ct-purpose">Requirement Category</label>
                <select
                  id="ct-purpose"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                >
                  <option value="Corrugated Shipping Boxes Wholesale">Corrugated Shipping Boxes (3-Ply &amp; 5-Ply)</option>
                  <option value="Custom Printed Pizza & Food Packaging">Custom Printed Pizza &amp; Food Packaging</option>
                  <option value="Garment Woven Labels & Hang Tags">Garment Woven Labels &amp; Hang Tags</option>
                  <option value="Stickers, Decals & Barcode Rolls">Stickers, Decals &amp; Barcode Rolls</option>
                  <option value="Paper Bags & Tamper-Evident Mailers">Paper Bags &amp; Tamper-Evident Mailers</option>
                  <option value="Contract Manufacturing / Factory Visit">Contract Manufacturing / Factory Visit</option>
                </select>
              </div>

              <div className="form-field-group">
                <label htmlFor="ct-msg">Order Quantity &amp; Specifications <span style={{ color: '#EF4444' }}>*</span></label>
                <textarea
                  id="ct-msg"
                  rows={4}
                  placeholder="Please specify box dimensions (L×W×H), approx quantity, and delivery city..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary-hero"
                style={{ justifyContent: 'center', padding: '14px', marginTop: '8px' }}
              >
                <WhatsAppIcon size={16} color="#000000" /> Submit Inquiry to Factory WhatsApp &rarr;
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};
