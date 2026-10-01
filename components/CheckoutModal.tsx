'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { siteConfig } from '@/data/siteConfig';
import { XIcon, WhatsAppIcon, ShieldCheckIcon } from './Icons';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { cart, subtotal, discount, gstAmount, finalTotal, appliedCoupon } = useCart();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [gstin, setGstin] = useState('');
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let itemsList = cart
      .map(
        (item, i) =>
          `${i + 1}. *${item.title}*\n   Qty: ${item.qty} pcs | ₹${(item.price * item.qty).toFixed(2)}${
            item.dimensions ? `\n   Dimensions: ${item.dimensions}` : ''
          }`
      )
      .join('\n\n');

    let text = `📦 *FACTORY ORDER & DISPATCH DETAILS — AS PRINT GALLERY*\n\n`;
    text += `*CUSTOMER & DISPATCH ADDRESS:*\n`;
    text += `• Name: ${name.trim()}\n`;
    text += `• Phone: +91 ${phone.trim()}\n`;
    text += `• Delivery Address: ${address.trim()}\n`;
    text += `• Pincode: ${pincode.trim()}\n`;
    if (gstin.trim()) {
      text += `• GSTIN (Tax Invoice): ${gstin.trim().toUpperCase()}\n`;
    }
    text += `\n*ORDER ITEMS:*\n${itemsList}\n\n`;
    text += `──────────────\n`;
    text += `Subtotal: ₹${subtotal.toFixed(2)}\n`;
    if (appliedCoupon) {
      text += `Discount (${appliedCoupon.code}): -₹${discount.toFixed(2)}\n`;
    }
    text += `GST (18%): ₹${gstAmount.toFixed(2)}\n`;
    text += `*Final Amount: ₹${finalTotal.toFixed(2)}*\n\n`;
    text += `Please share bank transfer / UPI invoice payment details to initiate production dispatch.`;

    const url = `https://wa.me/${siteConfig.phones.whatsappRaw}?text=${encodeURIComponent(text)}`;
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'checkout_submit', {
        event_category: 'Ecommerce',
        value: finalTotal
      });
    }
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div
      className="modal-backdrop active"
      onClick={onClose}
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
          onClick={onClose}
          aria-label="Close Checkout Modal"
        >
          <XIcon size={18} />
        </button>
        <div className="form-modal-inner">
          <h3 className="form-modal-title">Complete Delivery Information</h3>
          <p className="form-modal-sub">
            Submit your dispatch address. Our logistics coordinator will call to confirm dispatch.
          </p>

          <form onSubmit={handleSubmit} className="modal-form-grid">
            <div className="form-field-group">
              <label htmlFor="chk-name">Full Name <span style={{ color: '#EF4444' }}>*</span></label>
              <input
                type="text"
                id="chk-name"
                placeholder="Contact Person / Company Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-field-group">
              <label htmlFor="chk-phone">Mobile Number (For Courier Updates) <span style={{ color: '#EF4444' }}>*</span></label>
              <input
                type="tel"
                id="chk-phone"
                placeholder="10-digit Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="form-field-group">
              <label htmlFor="chk-address">Delivery Address <span style={{ color: '#EF4444' }}>*</span></label>
              <textarea
                id="chk-address"
                rows={3}
                placeholder="Building, Street, Industrial Area, Landmark, City, State"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="form-field-group">
              <label htmlFor="chk-pincode">Pincode <span style={{ color: '#EF4444' }}>*</span></label>
              <input
                type="text"
                id="chk-pincode"
                placeholder="6-digit Pincode"
                maxLength={6}
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                required
              />
            </div>
            <div className="form-field-group">
              <label htmlFor="chk-gst">GST Number (Optional for Tax Invoice)</label>
              <input
                type="text"
                id="chk-gst"
                placeholder="e.g. 09AWKPN5910E1ZG"
                value={gstin}
                onChange={(e) => setGstin(e.target.value)}
              />
            </div>
            <div className="form-field-group" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginTop: '10px' }}>
              <input
                type="checkbox"
                id="chk-consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                style={{ marginTop: '4px' }}
              />
              <label
                htmlFor="chk-consent"
                style={{ fontWeight: 400, fontSize: '0.85rem', color: 'var(--text-muted)', cursor: 'pointer' }}
              >
                I consent to receive promotional updates, offers, and marketing communications from AS Print Gallery via email or SMS. (Optional)
              </label>
            </div>
            <button
              type="submit"
              className="btn-primary-hero"
              style={{ justifyContent: 'center', padding: '13px', marginTop: '8px' }}
            >
              <WhatsAppIcon size={16} color="#000000" /> Confirm &amp; Send to Factory WhatsApp &rarr;
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
