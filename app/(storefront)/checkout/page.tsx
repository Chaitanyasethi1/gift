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
  
  // Payment Method Selection: 'cod' | 'online'
  const isCodDisabled = finalTotal > 999;
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'online'>('online');

  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // If total exceeds 999, auto-switch to online payment
    if (isCodDisabled) {
      setPaymentMethod('online');
    }
  }, [isCodDisabled]);

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
    return null;
  }

  // Handle Cash On Delivery (COD) Order Submission
  const handleCodSubmit = async () => {
    try {
      setIsProcessing(true);
      setMessage('Placing Cash On Delivery Order...');

      const res = await fetch('/api/create-cod-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_name: name,
          customer_phone: phone,
          shipping_address: address,
          pincode: pincode,
          gstin: gstin,
          cart: cart,
          subtotal: subtotal,
          gstAmount: gstAmount,
          finalTotal: finalTotal,
          discount: discount
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setMessage(`Order Placed Successfully! Your Order ID: ${data.orderNumber}`);
        setTimeout(() => {
          clearCart();
          router.push(`/order-success/${data.orderId}`);
        }, 1500);
      } else {
        setMessage(data.error || 'Failed to place COD order.');
        setIsProcessing(false);
      }
    } catch (err: any) {
      console.error(err);
      setMessage(err.message || 'Error processing COD order.');
      setIsProcessing(false);
    }
  };

  // Handle Online Payment (Razorpay) Submission
  const initiateRazorpayPayment = async () => {
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
                razorpay_signature: response.razorpay_signature,
                customer_name: name,
                customer_phone: phone,
                shipping_address: address,
                pincode: pincode,
                gstin: gstin,
                cart: cart,
                subtotal: subtotal,
                gstAmount: gstAmount,
                finalTotal: finalTotal,
                discount: discount
              })
            });
            const verifyData = await verifyRes.json();
            
            if (verifyRes.ok && verifyData.success) {
              setMessage(`Payment successful! Your Order ID is: ${verifyData.orderNumber}`);
              setTimeout(() => {
                clearCart();
                router.push(`/order-success/${verifyData.orderId}`);
              }, 2000);
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

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (paymentMethod === 'cod') {
      if (isCodDisabled) {
        alert('Cash on Delivery is not available for orders above ₹999. Please choose Online Payment.');
        return;
      }
      await handleCodSubmit();
    } else {
      await initiateRazorpayPayment();
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
          
          {/* Left Column: Form & Payment Methods */}
          <div style={{ background: '#FFF', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '20px', borderBottom: '1px solid #E2E8F0', paddingBottom: '10px' }}>
              Delivery & Contact Information
            </h2>
            
            <form onSubmit={handleCheckoutSubmit} className="modal-form-grid">
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

              {/* PAYMENT METHOD SELECTION (COD & Online) */}
              <div style={{ gridColumn: '1 / -1', marginTop: '16px' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>
                  Payment Method
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  
                  {/* Option 1: Cash On Delivery */}
                  <div
                    onClick={() => {
                      if (!isCodDisabled) setPaymentMethod('cod');
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '16px 20px',
                      borderRadius: '14px',
                      border: paymentMethod === 'cod' && !isCodDisabled ? '2px solid #16A34A' : '1.5px solid #E2E8F0',
                      background: isCodDisabled ? '#F8FAFC' : (paymentMethod === 'cod' ? '#F0FDF4' : '#FFFFFF'),
                      cursor: isCodDisabled ? 'not-allowed' : 'pointer',
                      opacity: isCodDisabled ? 0.6 : 1,
                      transition: 'all 0.2s ease',
                      boxShadow: paymentMethod === 'cod' && !isCodDisabled ? '0 4px 12px rgba(22, 163, 74, 0.12)' : '0 1px 3px rgba(0,0,0,0.02)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: '#16A34A',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        fontSize: '1.2rem'
                      }}>
                        💵
                      </div>
                      <div>
                        <div style={{ fontSize: '1rem', fontWeight: 700, color: isCodDisabled ? '#94A3B8' : '#1E293B' }}>
                          Cash On Delivery
                        </div>
                        <div style={{ fontSize: '0.78rem', color: isCodDisabled ? '#94A3B8' : '#64748B' }}>
                          Pay cash upon package arrival (Up to ₹999)
                        </div>
                      </div>
                    </div>

                    <div style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      border: paymentMethod === 'cod' && !isCodDisabled ? '6px solid #3B82F6' : '2px solid #CBD5E1',
                      background: '#FFFFFF'
                    }} />
                  </div>

                  {/* Option 2: Online Payment (UPI, Cards, Netbanking) */}
                  <div
                    onClick={() => setPaymentMethod('online')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '16px 20px',
                      borderRadius: '14px',
                      border: paymentMethod === 'online' ? '2px solid #16A34A' : '1.5px solid #E2E8F0',
                      background: paymentMethod === 'online' ? '#F0FDF4' : '#FFFFFF',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: paymentMethod === 'online' ? '0 4px 12px rgba(22, 163, 74, 0.12)' : '0 1px 3px rgba(0,0,0,0.02)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: '#F1F5F9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#1E293B',
                        fontSize: '1.2rem',
                        border: '1px solid #E2E8F0'
                      }}>
                        💳
                      </div>
                      <div>
                        <div style={{ fontSize: '1rem', fontWeight: 700, color: '#1E293B' }}>
                          Online
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#64748B' }}>
                          Instant UPI, Cards, NetBanking, Razorpay Secure
                        </div>
                      </div>
                    </div>

                    <div style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      border: paymentMethod === 'online' ? '6px solid #3B82F6' : '2px solid #CBD5E1',
                      background: '#FFFFFF'
                    }} />
                  </div>

                  {/* Warning Notice when COD is disabled */}
                  {isCodDisabled && (
                    <div style={{
                      color: '#EF4444',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      marginTop: '4px',
                      textAlign: 'center',
                      padding: '6px 12px',
                      background: '#FEF2F2',
                      borderRadius: '6px',
                      border: '1px solid #FEE2E2'
                    }}>
                      Cash on Delivery is not available for orders above 999.
                    </div>
                  )}

                </div>
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
                  I consent to receive order updates, delivery dockets, and promotional offers from AS Print Gallery via SMS / WhatsApp.
                </label>
              </div>
              
              {message && (
                <div style={{ gridColumn: '1 / -1', padding: '12px', marginTop: '10px', background: (message.toLowerCase().includes('fail') || message.toLowerCase().includes('error')) ? '#FEE2E2' : '#ECFDF5', color: (message.toLowerCase().includes('fail') || message.toLowerCase().includes('error')) ? '#B91C1C' : '#047857', borderRadius: '6px', fontSize: '0.9rem', textAlign: 'center', fontWeight: 600 }}>
                  {message}
                </div>
              )}
              
              <button
                type="submit"
                className="btn-primary-hero"
                style={{
                  gridColumn: '1 / -1',
                  justifyContent: 'center',
                  padding: '16px',
                  marginTop: '16px',
                  background: isProcessing ? '#94A3B8' : (paymentMethod === 'cod' ? '#16A34A' : '#E11D48'),
                  fontSize: '1.1rem',
                  borderRadius: '10px',
                  fontWeight: 800,
                  boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
                  cursor: isProcessing ? 'not-allowed' : 'pointer',
                  border: 'none'
                }}
                disabled={isProcessing}
              >
                <ShieldCheckIcon size={20} color="#FFFFFF" />{' '}
                {isProcessing
                  ? (paymentMethod === 'cod' ? 'Placing Order...' : 'Processing Payment...')
                  : (paymentMethod === 'cod' ? 'PLACE ORDER' : `Pay Securely ₹${finalTotal.toFixed(2)}`)}
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
                    <div style={{ fontSize: '0.82rem', color: '#64748B' }}>
                      Qty: {item.qty} • <span style={{ color: '#0284C7', fontWeight: 600 }}>{item.gstRate ?? 18}% GST</span>
                    </div>
                  </div>
                  <div style={{ fontWeight: 700, color: '#0F172A' }}>
                    ₹{(item.price * item.qty).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px dashed #CBD5E1', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569' }}>
                <span>Subtotal (Excl. Tax)</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              
              {appliedCoupon && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#10B981', fontWeight: 600 }}>
                  <span>Discount ({appliedCoupon.code})</span>
                  <span>-₹{discount.toFixed(2)}</span>
                </div>
              )}
              
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569' }}>
                <span>Total Applied GST</span>
                <span>₹{gstAmount.toFixed(2)}</span>
              </div>

              
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569' }}>
                <span>Shipping / Delivery Charges</span>
                <span style={{ color: '#16A34A', fontWeight: 700 }}>
                  FREE (Pan-India)
                </span>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #E2E8F0', paddingTop: '16px', marginTop: '8px', fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>
                <span>Amount Payable</span>
                <span style={{ color: '#0F172A' }}>₹{finalTotal.toFixed(2)}</span>
              </div>
            </div>
            
            <div style={{ marginTop: '24px', background: '#F8FAFC', padding: '12px', borderRadius: '8px', fontSize: '0.85rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <ShieldCheckIcon size={24} color="#10B981" />
              <span>100% Encrypted & Safe Payments (COD / UPI / Razorpay).</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
