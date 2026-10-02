'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { siteConfig } from '@/data/siteConfig';
import { ShieldCheckIcon } from '@/components/Icons';
import Link from 'next/link';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, subtotal, discount, gstAmount, finalTotal, appliedCoupon, clearCart, isLoaded } = useCart();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [gstin, setGstin] = useState('');
  const [consent, setConsent] = useState(false);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Load Razorpay Script
    const scriptId = 'razorpay-checkout-js';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    // Redirect if cart is empty after context has loaded from local storage
    if (isLoaded && cart.length === 0 && !isProcessing) {
      router.push('/');
    }
  }, [cart.length, router, isProcessing, isLoaded]);

  if (!isLoaded || (cart.length === 0 && !isProcessing)) {
    return null; // or loading state, will redirect
  }

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
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, 
        amount: orderData.amount,
        currency: orderData.currency,
        name: siteConfig.name,
        description: 'Packaging Order Checkout',
        order_id: orderData.id,
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
                router.push('/');
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
          contact: phone,
          email: 'customer@example.com'
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
    <div style={{ background: '#F8FAFC', minHeight: '100vh', padding: '40px 0' }}>
      <div className="container">
        <div style={{ marginBottom: '30px' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0 }}>Secure Checkout</h1>
          <p style={{ color: 'var(--text-muted)' }}>Complete your order securely.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'start' }}>
          
          {/* Left Column: Form */}
          <div style={{ background: '#FFF', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '20px', borderBottom: '1px solid #E2E8F0', paddingBottom: '10px' }}>Delivery & Contact Information</h2>
            
            <form onSubmit={initiateRazorpayPayment} className="modal-form-grid">
              <div className="form-field-group">
                <label>Full Name <span style={{ color: '#EF4444' }}>*</span></label>
                <input
                  type="text"
                  placeholder="Contact Person / Company Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={isProcessing}
                  style={{ width: '100%', padding: '10px', border: '1px solid #CBD5E1', borderRadius: '6px' }}
                />
              </div>
              <div className="form-field-group">
                <label>Mobile Number <span style={{ color: '#EF4444' }}>*</span></label>
                <input
                  type="tel"
                  placeholder="10-digit Mobile Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  required
                  maxLength={10}
                  pattern="[0-9]{10}"
                  disabled={isProcessing}
                  style={{ width: '100%', padding: '10px', border: '1px solid #CBD5E1', borderRadius: '6px' }}
                />
              </div>
              <div className="form-field-group" style={{ gridColumn: '1 / -1' }}>
                <label>Delivery Address <span style={{ color: '#EF4444' }}>*</span></label>
                <textarea
                  rows={3}
                  placeholder="Building, Street, Industrial Area, Landmark, City, State"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  disabled={isProcessing}
                  style={{ width: '100%', padding: '10px', border: '1px solid #CBD5E1', borderRadius: '6px', resize: 'vertical' }}
                />
              </div>
              <div className="form-field-group">
                <label>Pincode <span style={{ color: '#EF4444' }}>*</span></label>
                <input
                  type="text"
                  placeholder="6-digit Pincode"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  required
                  disabled={isProcessing}
                  style={{ width: '100%', padding: '10px', border: '1px solid #CBD5E1', borderRadius: '6px' }}
                />
              </div>
              <div className="form-field-group">
                <label>GST Number (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. 09AWKPN5910E1ZG"
                  value={gstin}
                  onChange={(e) => setGstin(e.target.value)}
                  disabled={isProcessing}
                  style={{ width: '100%', padding: '10px', border: '1px solid #CBD5E1', borderRadius: '6px' }}
                />
              </div>
              <div className="form-field-group" style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'flex-start', gap: '8px', marginTop: '10px' }}>
                <input
                  type="checkbox"
                  id="chk-consent-checkout"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  style={{ marginTop: '4px' }}
                  disabled={isProcessing}
                />
                <label htmlFor="chk-consent-checkout" style={{ fontWeight: 400, fontSize: '0.85rem', color: 'var(--text-muted)', cursor: 'pointer' }}>
                  I consent to receive promotional updates, offers, and marketing communications from AS Print Gallery via email or SMS.
                </label>
              </div>
              
              {message && (
                <div style={{ gridColumn: '1 / -1', padding: '12px', marginTop: '10px', background: message.includes('failed') || message.includes('error') ? '#FEE2E2' : '#ECFDF5', color: message.includes('failed') || message.includes('error') ? '#B91C1C' : '#047857', borderRadius: '6px', fontSize: '0.9rem', textAlign: 'center', fontWeight: 600 }}>
                  {message}
                </div>
              )}
              
              <button
                type="submit"
                className="btn-primary-hero"
                style={{ gridColumn: '1 / -1', justifyContent: 'center', padding: '16px', marginTop: '16px', background: isProcessing ? '#94A3B8' : '#E11D48', fontSize: '1.1rem', borderRadius: '8px' }}
                disabled={isProcessing}
              >
                <ShieldCheckIcon size={20} color="#FFFFFF" /> {isProcessing ? 'Processing Payment...' : `Pay Securely ₹${finalTotal.toFixed(2)}`}
              </button>
            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div style={{ background: '#FFF', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E2E8F0', paddingBottom: '10px', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>Order Summary</h2>
              <Link href="/" style={{ color: 'var(--primary)', fontSize: '0.9rem', textDecoration: 'none' }}>Edit Cart</Link>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px', maxHeight: '400px', overflowY: 'auto', paddingRight: '10px' }}>
              {cart.map((item) => (
                <div key={item.id} style={{ display: 'flex', gap: '12px' }}>
                  <img src={item.image} alt={item.title} style={{ width: '60px', height: '60px', borderRadius: '6px', objectFit: 'cover' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#1E293B', lineHeight: 1.2, marginBottom: '4px' }}>{item.title}</div>
                    <div style={{ fontSize: '0.85rem', color: '#64748B' }}>Qty: {item.qty}</div>
                  </div>
                  <div style={{ fontWeight: 700, color: '#0F172A' }}>
                    ₹{(item.price * item.qty).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px dashed #CBD5E1', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569' }}>
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              
              {appliedCoupon && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#10B981', fontWeight: 600 }}>
                  <span>Discount ({appliedCoupon.code})</span>
                  <span>-₹{discount.toFixed(2)}</span>
                </div>
              )}
              
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569' }}>
                <span>GST (18%)</span>
                <span>₹{gstAmount.toFixed(2)}</span>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569' }}>
                <span>Shipping</span>
                <span style={{ color: subtotal >= 999 ? '#10B981' : '#475569' }}>
                  {subtotal >= 999 ? 'FREE' : 'Calculated next step'}
                </span>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #E2E8F0', paddingTop: '16px', marginTop: '8px', fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>
                <span>Total</span>
                <span style={{ color: 'var(--primary)' }}>₹{finalTotal.toFixed(2)}</span>
              </div>
            </div>
            
            <div style={{ marginTop: '24px', background: '#F8FAFC', padding: '12px', borderRadius: '8px', fontSize: '0.85rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <ShieldCheckIcon size={24} color="#10B981" />
              <span>Payments are 100% secure and encrypted by Razorpay.</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
