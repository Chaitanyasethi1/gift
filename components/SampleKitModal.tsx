'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { siteConfig } from '@/data/siteConfig';
import { XIcon, PackageIcon } from './Icons';

export const SampleKitModal: React.FC = () => {
  const { isSampleModalOpen, setIsSampleModalOpen } = useCart();

  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [product, setProduct] = useState('Corrugated Shipping Boxes (3-Ply & 5-Ply)');
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    if (!isSampleModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSampleModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSampleModalOpen, setIsSampleModalOpen]);

  if (!isSampleModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let text = `📦 *PHYSICAL SAMPLE SWATCH KIT REQUEST*\n\n`;
    text += `• *Brand / Business:* ${company.trim()}\n`;
    text += `• *Mobile Number:* ${phone.trim()}\n`;
    text += `• *Products of Interest:* ${product}\n`;
    text += `• *Promotional Consent:* ${consent ? 'Yes' : 'No'}\n\n`;
    text += `Please arrange physical paper, corrugated flute, label and sticker swatches courier dispatch.`;

    const url = `https://wa.me/${siteConfig.phones.whatsappRaw}?text=${encodeURIComponent(text)}`;
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'sample_kit_submit', {
        event_category: 'Lead',
        event_label: product
      });
    }
    window.open(url, '_blank');
    setIsSampleModalOpen(false);
  };

  return (
    <div
      className="modal-backdrop active"
      onClick={() => setIsSampleModalOpen(false)}
      style={{ display: 'flex' }}
    >
      <div
        className="modal-window"
        style={{ maxWidth: '520px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={() => setIsSampleModalOpen(false)}
          aria-label="Close Sample Kit Request"
        >
          <XIcon size={18} />
        </button>
        <div className="form-modal-inner">
          <h3 className="form-modal-title">Request Physical Sample Swatch Kit</h3>
          <p className="form-modal-sub">
            We courier paper swatches, 3-ply/5-ply corrugation flutes, tags, and stickers for your evaluation.
          </p>

          <form onSubmit={handleSubmit} className="modal-form-grid">
            <div className="form-field-group">
              <label htmlFor="sample-company">Brand / Business Name <span style={{ color: '#EF4444' }}>*</span></label>
              <input
                type="text"
                id="sample-company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. Acme Apparels"
                required
              />
            </div>
            <div className="form-field-group">
              <label htmlFor="sample-phone">WhatsApp / Mobile Number <span style={{ color: '#EF4444' }}>*</span></label>
              <input
                type="tel"
                id="sample-phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 9876543210"
                required
              />
            </div>
            <div className="form-field-group">
              <label htmlFor="sample-products-select">Products You Are Interested In</label>
              <select
                id="sample-products-select"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              >
                <option value="Corrugated Shipping Boxes (3-Ply & 5-Ply)">Corrugated Shipping Boxes (3-Ply &amp; 5-Ply)</option>
                <option value="Pizza & Food Packaging Boxes">Pizza &amp; Food Packaging Boxes</option>
                <option value="Woven & Printed Garment Labels">Woven &amp; Printed Garment Labels</option>
                <option value="Hang Tags & Gumming Stickers">Hang Tags &amp; Gumming Stickers</option>
                <option value="Paper Bags & Envelopes">Paper Bags &amp; Envelopes</option>
                <option value="Complete Factory Sample Swatch">Complete Factory Swatch Kit (All Products)</option>
              </select>
            </div>
            <div className="form-field-group" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginTop: '10px' }}>
              <input
                type="checkbox"
                id="sample-marketing-consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                style={{ marginTop: '4px' }}
              />
              <label
                htmlFor="sample-marketing-consent"
                style={{ fontWeight: 400, fontSize: '0.85rem', color: 'var(--text-muted)', cursor: 'pointer' }}
              >
                I consent to receive promotional updates, offers, and marketing communications from AS Print Gallery via email or SMS. (Optional)
              </label>
            </div>
            <button
              type="submit"
              className="btn-primary-hero"
              style={{ justifyContent: 'center', padding: '12px', marginTop: '8px' }}
            >
              <PackageIcon size={16} /> Submit Sample Request 📦
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
