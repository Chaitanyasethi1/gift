'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { PRODUCTS } from '@/data/products';
import { siteConfig } from '@/data/siteConfig';
import { XIcon, WhatsAppIcon, CheckCircleIcon } from './Icons';

interface QuoteModalProps {
  isInline?: boolean;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isInline = false }) => {
  const { isQuoteModalOpen, setIsQuoteModalOpen, selectedQuoteProduct, setSelectedQuoteProduct } = useCart();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [product, setProduct] = useState(selectedQuoteProduct || '');
  const [quantity, setQuantity] = useState('');
  const [size, setSize] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);

  const [phoneError, setPhoneError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [waLink, setWaLink] = useState('');

  // Sync selected product from context if updated
  useEffect(() => {
    if (selectedQuoteProduct) {
      setProduct(selectedQuoteProduct);
    }
  }, [selectedQuoteProduct]);

  // Handle Esc key to close modal
  useEffect(() => {
    if (isInline || !isQuoteModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsQuoteModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isQuoteModalOpen, isInline, setIsQuoteModalOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 10-digit Indian Mobile Validation
    const cleanPhone = phone.trim().replace(/\D/g, '');
    const isValidIndianPhone = /^[6-9]\d{9}$/.test(cleanPhone);

    if (!isValidIndianPhone) {
      setPhoneError('Please enter a valid 10-digit mobile number starting with 6-9.');
      return;
    }
    setPhoneError('');

    let text = `🏭 *DIRECT FACTORY BULK QUOTE REQUEST*\n\n`;
    text += `• *Name / Business:* ${name.trim()}\n`;
    text += `• *Mobile / WhatsApp:* +91 ${cleanPhone}\n`;
    text += `• *Product Required:* ${product || 'General Packaging Inquiry'}\n`;
    text += `• *Approx Quantity:* ${quantity.trim()}\n`;
    if (size.trim()) {
      text += `• *Dimensions (L×W×H):* ${size.trim()}\n`;
    }
    if (message.trim()) {
      text += `• *Specific Notes:* ${message.trim()}\n`;
    }
    text += `• *Marketing Updates:* ${consent ? 'Consented' : 'Not opted'}\n\n`;
    text += `Please share direct wholesale quotation and turnaround time!`;

    const url = `https://wa.me/${siteConfig.phones.whatsappRaw}?text=${encodeURIComponent(text)}`;
    setWaLink(url);
    setIsSuccess(true);

    // Trigger analytics event if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'quote_submit', {
        event_category: 'Lead',
        event_label: product
      });
    }

    // Open WhatsApp
    window.open(url, '_blank');
  };

  const formContent = (
    <div className="form-modal-inner">
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
        <span style={{ fontSize: '1.5rem' }}>🏭</span>
        <div>
          <h3 className="form-modal-title" style={{ margin: 0 }}>
            Get Direct Factory Bulk Quote
          </h3>
          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary)' }}>
            Direct Factory Rates • Bulk Tier Discounts up to 50%
          </span>
        </div>
      </div>
      <p className="form-modal-sub" style={{ marginBottom: '16px' }}>
        Direct pricing from our Ghaziabad manufacturing unit. Fill the details below to receive an instant quotation on WhatsApp.
      </p>

      <form onSubmit={handleSubmit} className="modal-form-grid">
        {/* Name Field */}
        <div className="form-field-group">
          <label htmlFor={`quote-name-${isInline ? 'inline' : 'modal'}`}>
            Full Name / Business Name <span style={{ color: '#EF4444' }}>*</span>
          </label>
          <input
            type="text"
            id={`quote-name-${isInline ? 'inline' : 'modal'}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Rahul Sharma / ABC Traders"
            required
          />
        </div>

        {/* Mobile Field (10-digit Indian validation) */}
        <div className="form-field-group">
          <label htmlFor={`quote-phone-${isInline ? 'inline' : 'modal'}`}>
            WhatsApp / Mobile Number <span style={{ color: '#EF4444' }}>*</span>
          </label>
          <div style={{ display: 'flex', gap: '8px' }}>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0 10px',
                background: '#F1F5F9',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: '#475569'
              }}
            >
              +91
            </span>
            <input
              type="tel"
              id={`quote-phone-${isInline ? 'inline' : 'modal'}`}
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (phoneError) setPhoneError('');
              }}
              placeholder="10-digit Indian Mobile"
              maxLength={10}
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

        {/* Product Dropdown */}
        <div className="form-field-group">
          <label htmlFor={`quote-product-${isInline ? 'inline' : 'modal'}`}>
            Select Packaging / Print Product <span style={{ color: '#EF4444' }}>*</span>
          </label>
          <select
            id={`quote-product-${isInline ? 'inline' : 'modal'}`}
            value={product}
            onChange={(e) => {
              setProduct(e.target.value);
              setSelectedQuoteProduct(e.target.value);
            }}
            required
          >
            <option value="" disabled>-- Choose Product Line --</option>
            <optgroup label="📦 Corrugated Boxes & Cartons">
              {PRODUCTS.filter((p) => p.category === 'corrugated').map((p) => (
                <option key={p.id} value={p.title}>{p.title}</option>
              ))}
            </optgroup>
            <optgroup label="🍕 Food & Bakery Boxes">
              {PRODUCTS.filter((p) => p.category === 'food').map((p) => (
                <option key={p.id} value={p.title}>{p.title}</option>
              ))}
            </optgroup>
            <optgroup label="🛍️ Bags & Envelopes">
              {PRODUCTS.filter((p) => p.category === 'bags').map((p) => (
                <option key={p.id} value={p.title}>{p.title}</option>
              ))}
            </optgroup>
            <optgroup label="🏷️ Labels, Tags & Stickers">
              {PRODUCTS.filter((p) => p.category === 'label' || p.category === 'sticker').map((p) => (
                <option key={p.id} value={p.title}>{p.title}</option>
              ))}
            </optgroup>
            <optgroup label="✨ Custom / Other">
              <option value="Custom Size 3-Ply/5-Ply Corrugated Box">Custom Size 3-Ply/5-Ply Corrugated Box</option>
              <option value="Business Branding Starter Combo (Rs. 699)">Business Branding Starter Combo (Rs. 699)</option>
              <option value="Complete Factory Sample Swatch Kit">Complete Factory Sample Swatch Kit</option>
              <option value="Other Custom Packaging Requirement">Other Custom Packaging Requirement</option>
            </optgroup>
          </select>
        </div>

        {/* Quantity Field */}
        <div className="form-field-group">
          <label htmlFor={`quote-qty-${isInline ? 'inline' : 'modal'}`}>
            Approx Quantity Required <span style={{ color: '#EF4444' }}>*</span>
          </label>
          <input
            type="text"
            id={`quote-qty-${isInline ? 'inline' : 'modal'}`}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="e.g. 500 pcs, 2000 pcs, 10,000 pcs"
            required
          />
        </div>

        {/* Size Field (Optional) */}
        <div className="form-field-group">
          <label htmlFor={`quote-size-${isInline ? 'inline' : 'modal'}`}>
            Dimensions (L × W × H in inches/cm){' '}
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>
              (Optional)
            </span>
          </label>
          <input
            type="text"
            id={`quote-size-${isInline ? 'inline' : 'modal'}`}
            value={size}
            onChange={(e) => setSize(e.target.value)}
            placeholder="e.g. 10 x 8 x 6 inches"
          />
        </div>

        {/* Message Field (Optional) */}
        <div className="form-field-group">
          <label htmlFor={`quote-msg-${isInline ? 'inline' : 'modal'}`}>
            Specific Requirements / Notes{' '}
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>
              (Optional)
            </span>
          </label>
          <textarea
            id={`quote-msg-${isInline ? 'inline' : 'modal'}`}
            rows={2}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="e.g. 1-color logo print, virgin kraft paper, delivery to Noida..."
          />
        </div>

        {/* Marketing Consent */}
        <div className="form-field-group" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginTop: '4px' }}>
          <input
            type="checkbox"
            id={`quote-consent-${isInline ? 'inline' : 'modal'}`}
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            style={{ marginTop: '4px' }}
          />
          <label
            htmlFor={`quote-consent-${isInline ? 'inline' : 'modal'}`}
            style={{ fontWeight: 400, fontSize: '0.82rem', color: 'var(--text-muted)', cursor: 'pointer' }}
          >
            I consent to receive promotional updates, offers, and wholesale rates from AS Print Gallery via WhatsApp or SMS. (Optional)
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn-primary-hero btn-quote-submit"
          style={{ justifyContent: 'center', padding: '12px', marginTop: '8px', minHeight: '48px', width: '100%', fontSize: '0.95rem' }}
        >
          <WhatsAppIcon size={16} color="#000000" /> Get Instant Quote on WhatsApp
        </button>

        {/* Success Banner */}
        {isSuccess && (
          <div
            style={{
              background: '#ECFDF5',
              border: '1px solid #10B981',
              borderRadius: 'var(--radius-sm)',
              padding: '12px',
              textAlign: 'center',
              marginTop: '12px'
            }}
          >
            <p style={{ color: '#065F46', fontWeight: 700, margin: '0 0 6px 0', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
              <CheckCircleIcon size={16} color="#10B981" /> Quote Request Forwarded!
            </p>
            <p style={{ color: '#047857', fontSize: '0.8rem', margin: '0 0 8px 0' }}>
              WhatsApp is opening with your prefilled details. If it did not open, click below:
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: '#25D366',
                color: '#fff',
                padding: '6px 14px',
                borderRadius: '4px',
                fontWeight: 700,
                fontSize: '0.8rem',
                textDecoration: 'none'
              }}
            >
              <WhatsAppIcon size={14} color="#FFFFFF" /> Open WhatsApp Chat
            </a>
          </div>
        )}
      </form>
    </div>
  );

  if (isInline) {
    return (
      <section className="inline-quote-section" style={{ background: '#F8FAFC', padding: '64px 0', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: 'var(--radius-md, 12px)', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid var(--border-light)' }}>
            {formContent}
          </div>
        </div>
      </section>
    );
  }

  if (!isQuoteModalOpen) return null;

  return (
    <div
      className="modal-backdrop active"
      onClick={() => setIsQuoteModalOpen(false)}
      style={{ display: 'flex' }}
    >
      <div
        className="modal-window"
        style={{ maxWidth: '540px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={() => setIsQuoteModalOpen(false)}
          aria-label="Close Bulk Quote Modal"
        >
          <XIcon size={18} />
        </button>
        {formContent}
      </div>
    </div>
  );
};
