'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { siteConfig } from '@/data/siteConfig';
import { XIcon, ShieldCheckIcon } from './Icons';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { cart, subtotal, discount, gstAmount, finalTotal, appliedCoupon, clearCart } = useCart();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [gstin, setGstin] = useState('');
  const [consent, setConsent] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !isProcessing) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, isProcessing]);

  useEffect(() => {
    if (isOpen) {
      const scriptId = 'razorpay-checkout-js';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const initiateRazorpayPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setMessage('');

    try {
      const amountPaise = Math.round(finalTotal * 100);
      
      const orderResponse = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: amountPaise, currency: 'INR', receipt: 'receipt_' + Date.now() })
      });
      
      const orderData = await orderResponse.json();
      
      if (!orderResponse.ok || orderData.error) {
        throw new Error(orderData.error || 'Failed to create order');
      }

      const options = {
        key: orderData.key_id || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_live_Tl2yywBxaa6BDT', 
        amount: orderData.amount,
        currency: orderData.currency || 'INR',
        name: siteConfig.name,
        description: 'Packaging Order Checkout',
        order_id: orderData.order_id || orderData.id,
        handler: async function (response: any) {
          try {
            setMessage('Verifying payment...');
            const verifyRes = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature
              })
            });
            const verifyData = await verifyRes.json();
            
            if (verifyRes.ok && verifyData.success) {
              setMessage('Payment successful! Your order has been placed.');
              setTimeout(() => {
                clearCart();
                onClose();
              }, 3000);
            } else {
              setMessage('Payment verification failed. Invalid signature.');
            }
          } catch (err) {
            console.error(err);
            setMessage('Payment verification error.');
          } finally {
            setIsProcessing(false);
          }
        },
        modal: {
          ondismiss: function() {
            setIsProcessing(false);
            setMessage('Payment cancelled by user.');
          }
        },
        prefill: {
          name: name,
          contact: phone
        },
        notes: {
          address: address,
          pincode: pincode
        },
        theme: {
          color: '#E11D48'
        }
      };

      const rzp1 = new (window as any).Razorpay(options);
      
      rzp1.on('payment.failed', function (response: any){
        console.error(response.error);
        setMessage(`Payment failed: ${response.error.description}`);
        setIsProcessing(false);
      });
      
      rzp1.open();
    } catch (err: any) {
      console.error(err);
      setMessage(err.message || 'Payment initiation failed.');
      setIsProcessing(false);
    }
  };

  return (
    <div
      className="modal-backdrop active"
      onClick={() => {
        if (!isProcessing) onClose();
      }}
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
          onClick={() => {
            if (!isProcessing) onClose();
          }}
          aria-label="Close Checkout Modal"
          disabled={isProcessing}
        >
          <XIcon size={18} />
        </button>
        <div className="form-modal-inner">
          <h3 className="form-modal-title">Secure Checkout</h3>
          <p className="form-modal-sub">
            Please enter your delivery details to proceed with the payment.
          </p>

          <form onSubmit={initiateRazorpayPayment} className="modal-form-grid">
            <div className="form-field-group">
              <label htmlFor="chk-name">Full Name <span style={{ color: '#EF4444' }}>*</span></label>
              <input
                type="text"
                id="chk-name"
                placeholder="Contact Person / Company Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isProcessing}
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
                disabled={isProcessing}
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
                disabled={isProcessing}
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
                disabled={isProcessing}
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
                disabled={isProcessing}
              />
            </div>
            <div className="form-field-group" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginTop: '10px' }}>
              <input
                type="checkbox"
                id="chk-consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                style={{ marginTop: '4px' }}
                disabled={isProcessing}
              />
              <label
                htmlFor="chk-consent"
                style={{ fontWeight: 400, fontSize: '0.85rem', color: 'var(--text-muted)', cursor: 'pointer' }}
              >
                I consent to receive promotional updates, offers, and marketing communications from AS Print Gallery via email or SMS. (Optional)
              </label>
            </div>
            
            {message && (
              <div style={{ padding: '10px', marginTop: '10px', background: message.includes('failed') || message.includes('error') ? '#FEE2E2' : '#ECFDF5', color: message.includes('failed') || message.includes('error') ? '#B91C1C' : '#047857', borderRadius: '4px', fontSize: '0.9rem', textAlign: 'center' }}>
                {message}
              </div>
            )}
            
            <button
              type="submit"
              className="btn-primary-hero"
              style={{ justifyContent: 'center', padding: '13px', marginTop: '8px', background: isProcessing ? '#94A3B8' : '#E11D48' }}
              disabled={isProcessing}
            >
              <ShieldCheckIcon size={16} color="#FFFFFF" /> {isProcessing ? 'Processing Payment...' : `Pay Securely ₹${finalTotal.toFixed(2)}`}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
