'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/utils/supabase/client';
import { siteConfig } from '@/data/siteConfig';

interface OrderItem {
  id?: string;
  product_name: string;
  quantity: number;
  unit_price: number;
  total_price: number;
  variant_details?: any;
}

interface OrderData {
  id: string;
  order_number: string;
  customer_name: string;
  customer_phone: string;
  customer_email?: string | null;
  shipping_address: any;
  gst_number?: string | null;
  subtotal: number;
  discount_amount: number;
  gst_amount: number;
  shipping_fee: number;
  total_amount: number;
  coupon_code?: string | null;
  status: string; // 'Pending' | 'Confirmed' | 'In Production' | 'Dispatched' | 'Delivered' | 'Cancelled'
  payment_status: string; // 'Paid' | 'Pending'
  courier_name?: string | null;
  tracking_number?: string | null;
  tracking_link?: string | null;
  internal_notes?: string | null;
  created_at: string;
  order_items?: OrderItem[];
}

export default function TrackOrderPage() {
  const [orderQuery, setOrderQuery] = useState('');
  const [phoneQuery, setPhoneQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [matchedOrders, setMatchedOrders] = useState<OrderData[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<OrderData | null>(null);
  const [copyFeedback, setCopyFeedback] = useState(false);

  // Generate real courier tracking link
  const getCourierUrl = (courierName: string = '', trackingNo: string = '', directLink: string = '') => {
    if (directLink && directLink.startsWith('http')) return directLink;
    if (!trackingNo) return null;

    const c = courierName.toLowerCase().trim();
    const t = trackingNo.trim();

    if (c === 'bl' || c.includes('blue') || c.includes('dart')) {
      return `https://www.bluedart.com/tracking?handler=tnt&action=custfind&awb=awb&numbers=${encodeURIComponent(t)}`;
    }
    if (c.includes('delhivery')) {
      return `https://www.delhivery.com/track/package/${encodeURIComponent(t)}`;
    }
    if (c.includes('dtdc')) {
      return `https://www.dtdc.in/tracking.asp`;
    }
    if (c.includes('safexpress') || c.includes('safe')) {
      return `https://www.safexpress.com/track-consignment?waybillNo=${encodeURIComponent(t)}`;
    }
    if (c.includes('post') || c.includes('speed')) {
      return `https://www.indiapost.gov.in/_layouts/15/dop.portal.tracking/trackconsignment.aspx`;
    }
    return directLink || null;
  };

  const parseAddress = (shippingAddress: any) => {
    if (!shippingAddress) return { address: 'Address on file', pincode: '' };
    if (typeof shippingAddress === 'string') {
      try {
        const parsed = JSON.parse(shippingAddress);
        if (typeof parsed === 'object' && parsed !== null) {
          return {
            address: parsed.address || parsed.street || shippingAddress,
            pincode: parsed.pincode || parsed.pin || ''
          };
        }
      } catch {
        return { address: shippingAddress, pincode: '' };
      }
    }
    if (typeof shippingAddress === 'object') {
      return {
        address: shippingAddress.address || shippingAddress.street || 'Address on file',
        pincode: shippingAddress.pincode || shippingAddress.pin || ''
      };
    }
    return { address: String(shippingAddress), pincode: '' };
  };

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMatchedOrders([]);
    setSelectedOrder(null);

    const rawOrder = orderQuery.trim().replace(/^#/, '');
    const rawPhone = phoneQuery.trim().replace(/\D/g, '');

    if (!rawOrder && !rawPhone) {
      setError('Kripya apna Order ID (jaise ORD-2026-6245 ya 6245) ya Mobile Number daliye.');
      return;
    }

    setIsLoading(true);

    try {
      const supabase = createClient();
      let req = supabase.from('orders').select('*, order_items(*)');

      // Case 1: Both Order ID & Phone provided
      if (rawOrder && rawPhone) {
        const upperOrder = rawOrder.toUpperCase();
        req = req
          .ilike('order_number', upperOrder.startsWith('ORD-') ? upperOrder : `%${upperOrder}`)
          .ilike('customer_phone', `%${rawPhone.slice(-10)}`);
      }
      // Case 2: Only Order Query provided
      else if (rawOrder) {
        const upper = rawOrder.toUpperCase();
        const digitsOnly = rawOrder.replace(/\D/g, '');

        if (upper.startsWith('ORD-')) {
          req = req.ilike('order_number', upper);
        } else if (digitsOnly.length === 10) {
          req = req.ilike('customer_phone', `%${digitsOnly}`);
        } else if (digitsOnly.length === 4) {
          // Last 4 digits of order number or tracking number
          req = req.or(`order_number.ilike.%${digitsOnly},tracking_number.ilike.%${digitsOnly}%`);
        } else {
          // Flexible match on order number, tracking number or phone
          req = req.or(`order_number.ilike.%${upper}%,tracking_number.ilike.%${rawOrder}%,customer_phone.ilike.%${digitsOnly || rawOrder}%`);
        }
      }
      // Case 3: Only Phone Query provided
      else if (rawPhone) {
        const last10 = rawPhone.slice(-10);
        req = req.ilike('customer_phone', `%${last10}`);
      }

      const { data, error: fetchError } = await req
        .order('created_at', { ascending: false })
        .limit(10);

      if (fetchError) {
        throw new Error(fetchError.message);
      }

      if (!data || data.length === 0) {
        setError('Koi order nahi mila. Kripya check karein ki Order ID ya Mobile Number sahi hai.');
        return;
      }

      setMatchedOrders(data);
      setSelectedOrder(data[0]); // Select latest by default
    } catch (err: any) {
      console.error('Error tracking order:', err);
      setError(err.message || 'Order track karne mein samasya aayi. Kripya dobara try karein.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyTracking = (num: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(num);
      setCopyFeedback(true);
      setTimeout(() => setCopyFeedback(false), 2000);
    }
  };

  // Helper for Stepper stages
  const getStepStatus = (orderStatus: string = '') => {
    const s = orderStatus.toLowerCase();
    if (s === 'cancelled') return { current: -1, label: 'Order Cancelled' };
    if (s === 'delivered') return { current: 4, label: 'Delivered' };
    if (s === 'dispatched') return { current: 3, label: 'Dispatched & In Transit' };
    if (s === 'in production') return { current: 2, label: 'In Production' };
    return { current: 1, label: 'Order Confirmed' };
  };

  return (
    <div style={{ background: '#F8FAFC', minHeight: '85vh', padding: '50px 16px 80px' }}>
      <div style={{ maxWidth: '820px', margin: '0 auto' }}>
        
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(16, 185, 129, 0.12)',
            color: '#059669',
            border: '1px solid #A7F3D0',
            padding: '5px 14px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            marginBottom: '12px'
          }}>
            🚚 Live Consignment &amp; Order Tracker
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: 900, color: '#0F172A', margin: '0 0 10px 0', letterSpacing: '-0.5px' }}>
            Track Your Order Status
          </h1>
          <p style={{ color: '#64748B', fontSize: '0.98rem', maxWidth: '580px', margin: '0 auto', lineHeight: 1.5 }}>
            Apna <strong>Order ID</strong> (jaise <em>ORD-2026-6245</em> ya sirf <em>6245</em>), <strong>Mobile Number</strong>, ya <strong>Courier AWB/Tracking number</strong> daal kar live status dekhein.
          </p>
        </div>

        {/* Search Card */}
        <div style={{
          background: '#FFFFFF',
          padding: '28px',
          borderRadius: '20px',
          border: '1px solid #E2E8F0',
          boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)',
          marginBottom: '32px'
        }}>
          <form onSubmit={handleTrack}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px',
              marginBottom: '20px'
            }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1E293B', marginBottom: '6px' }}>
                  📦 Order ID ya Courier Tracking No.
                </label>
                <input
                  type="text"
                  value={orderQuery}
                  onChange={(e) => setOrderQuery(e.target.value)}
                  placeholder="e.g. ORD-2026-6245 ya 6245"
                  style={{
                    width: '100%',
                    padding: '13px 16px',
                    borderRadius: '10px',
                    border: '1.5px solid #CBD5E1',
                    fontSize: '0.95rem',
                    outline: 'none',
                    background: '#F8FAFC'
                  }}
                />
                <span style={{ fontSize: '0.74rem', color: '#64748B', marginTop: '4px', display: 'block' }}>
                  Aap pura ID ya sirf last 4 digits bhi likh sakte hain
                </span>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1E293B', marginBottom: '6px' }}>
                  📱 Registered Mobile Number
                </label>
                <input
                  type="tel"
                  value={phoneQuery}
                  onChange={(e) => setPhoneQuery(e.target.value)}
                  placeholder="e.g. 9911678386"
                  maxLength={13}
                  style={{
                    width: '100%',
                    padding: '13px 16px',
                    borderRadius: '10px',
                    border: '1.5px solid #CBD5E1',
                    fontSize: '0.95rem',
                    outline: 'none',
                    background: '#F8FAFC'
                  }}
                />
                <span style={{ fontSize: '0.74rem', color: '#64748B', marginTop: '4px', display: 'block' }}>
                  Order karte waqt diya hua 10-digit number
                </span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                color: '#FFFFFF',
                padding: '14px 24px',
                borderRadius: '10px',
                fontWeight: 800,
                fontSize: '1rem',
                border: 'none',
                cursor: isLoading ? 'wait' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(15, 23, 42, 0.25)'
              }}
            >
              <span>{isLoading ? '⏳' : '🔍'}</span>
              <span>{isLoading ? 'Searching Order...' : 'Track My Order (ऑर्डर ट्रैक करें)'}</span>
            </button>
          </form>

          {/* Error Message */}
          {error && (
            <div style={{
              marginTop: '18px',
              padding: '14px 18px',
              background: '#FEF2F2',
              color: '#991B1B',
              borderRadius: '10px',
              border: '1px solid #FECACA',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span>⚠️</span>
              <div>{error}</div>
            </div>
          )}
        </div>

        {/* If Multiple Orders Matched Phone Number */}
        {matchedOrders.length > 1 && (
          <div style={{
            background: '#EFF6FF',
            border: '1px solid #BFDBFE',
            padding: '16px 20px',
            borderRadius: '14px',
            marginBottom: '24px'
          }}>
            <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#1E40AF', marginBottom: '10px' }}>
              📋 Aapke number par {matchedOrders.length} orders mile. Jis order ko dekhna hai select karein:
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {matchedOrders.map((ord) => (
                <button
                  key={ord.id}
                  onClick={() => setSelectedOrder(ord)}
                  style={{
                    background: selectedOrder?.id === ord.id ? '#1D4ED8' : '#FFFFFF',
                    color: selectedOrder?.id === ord.id ? '#FFFFFF' : '#1E293B',
                    border: '1px solid #CBD5E1',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    cursor: 'pointer'
                  }}
                >
                  {ord.order_number} ({ord.status})
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Selected Order Result Card */}
        {selectedOrder && (() => {
          const stepInfo = getStepStatus(selectedOrder.status);
          const isCancelled = selectedOrder.status === 'Cancelled';
          const courierLink = getCourierUrl(
            selectedOrder.courier_name || '',
            selectedOrder.tracking_number || '',
            selectedOrder.tracking_link || ''
          );
          const address = parseAddress(selectedOrder.shipping_address);

          return (
            <div style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 12px 30px -10px rgba(0,0,0,0.07)',
              padding: '32px 24px',
              overflow: 'hidden'
            }}>
              
              {/* Order Header Summary */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '14px',
                borderBottom: '1px solid #F1F5F9',
                paddingBottom: '20px',
                marginBottom: '24px'
              }}>
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Order Number
                  </div>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0F172A', margin: '2px 0 4px 0' }}>
                    {selectedOrder.order_number}
                  </h2>
                  <div style={{ fontSize: '0.84rem', color: '#64748B' }}>
                    Placed on: {selectedOrder.created_at ? new Date(selectedOrder.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '—'}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                  <span style={{
                    background: isCancelled ? '#FEE2E2' : selectedOrder.status === 'Dispatched' ? '#EDE9FE' : selectedOrder.status === 'Delivered' ? '#DCFCE7' : '#FEF3C7',
                    color: isCancelled ? '#991B1B' : selectedOrder.status === 'Dispatched' ? '#6B21A8' : selectedOrder.status === 'Delivered' ? '#166534' : '#92400E',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontWeight: 800,
                    fontSize: '0.85rem'
                  }}>
                    {isCancelled ? '❌ Cancelled' : `● ${selectedOrder.status}`}
                  </span>
                  <span style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: selectedOrder.payment_status === 'Paid' ? '#16A34A' : '#D97706'
                  }}>
                    {selectedOrder.payment_status === 'Paid' ? '💳 Payment Confirmed (Paid)' : '💵 Cash on Delivery'}
                  </span>
                </div>
              </div>

              {/* Progress Stepper */}
              {!isCancelled ? (
                <div style={{ marginBottom: '32px' }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    position: 'relative',
                    gap: '8px',
                    textAlign: 'center'
                  }}>
                    {[
                      { step: 1, title: 'Confirmed', sub: 'Order Placed' },
                      { step: 2, title: 'In Production', sub: 'Printing / Packing' },
                      { step: 3, title: 'Dispatched', sub: 'Handed to Courier' },
                      { step: 4, title: 'Delivered', sub: 'Reached Destination' }
                    ].map((st) => {
                      const isDone = stepInfo.current >= st.step;
                      const isCurrent = stepInfo.current === st.step;

                      return (
                        <div key={st.step} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <div style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            background: isDone ? '#10B981' : '#E2E8F0',
                            color: isDone ? '#FFFFFF' : '#94A3B8',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 800,
                            fontSize: '0.85rem',
                            marginBottom: '8px',
                            boxShadow: isCurrent ? '0 0 0 4px rgba(16, 185, 129, 0.25)' : 'none',
                            transition: 'all 0.2s ease'
                          }}>
                            {isDone ? '✓' : st.step}
                          </div>
                          <span style={{ fontSize: '0.82rem', fontWeight: 800, color: isDone ? '#0F172A' : '#94A3B8' }}>
                            {st.title}
                          </span>
                          <span style={{ fontSize: '0.7rem', color: '#64748B', display: 'none' }}>
                            {st.sub}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div style={{
                  background: '#FEF2F2',
                  border: '1px solid #FECACA',
                  padding: '16px',
                  borderRadius: '12px',
                  marginBottom: '24px',
                  color: '#991B1B',
                  fontSize: '0.88rem'
                }}>
                  Yeh order cancel kar diya gaya hai. Agar aapko koi query hai toh kripya factory desk se WhatsApp par sampark karein.
                </div>
              )}

              {/* Courier & Tracking Details Box */}
              {(selectedOrder.tracking_number || selectedOrder.courier_name) && (
                <div style={{
                  background: 'linear-gradient(135deg, #F8FAFC 0%, #EEF2F6 100%)',
                  border: '1.5px solid #CBD5E1',
                  borderRadius: '16px',
                  padding: '20px 24px',
                  marginBottom: '24px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>
                        🚚 Logistics &amp; Consignment Details
                      </span>
                      <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginTop: '2px' }}>
                        Courier: <strong>{selectedOrder.courier_name || 'Standard Courier'}</strong>
                      </div>
                      {selectedOrder.tracking_number && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                          <span style={{ fontSize: '0.85rem', color: '#475569' }}>AWB / Docket No:</span>
                          <strong style={{ fontSize: '0.95rem', color: '#0F172A', fontFamily: 'monospace' }}>
                            {selectedOrder.tracking_number}
                          </strong>
                          <button
                            type="button"
                            onClick={() => copyTracking(selectedOrder.tracking_number || '')}
                            style={{
                              background: copyFeedback ? '#DCFCE7' : '#FFFFFF',
                              color: copyFeedback ? '#166534' : '#334155',
                              border: '1px solid #CBD5E1',
                              padding: '2px 8px',
                              borderRadius: '6px',
                              fontSize: '0.72rem',
                              fontWeight: 700,
                              cursor: 'pointer'
                            }}
                          >
                            {copyFeedback ? '✓ Copied' : 'Copy'}
                          </button>
                        </div>
                      )}
                    </div>

                    {courierLink && (
                      <a
                        href={courierLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: '#2563EB',
                          color: '#FFFFFF',
                          padding: '10px 18px',
                          borderRadius: '8px',
                          textDecoration: 'none',
                          fontWeight: 800,
                          fontSize: '0.85rem',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          boxShadow: '0 4px 10px rgba(37, 99, 235, 0.25)'
                        }}
                      >
                        <span>🔗 Track on Courier Website →</span>
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Order Info & Delivery Address Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '16px',
                marginBottom: '24px'
              }}>
                <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', marginBottom: '6px' }}>
                    Delivery Recipient
                  </div>
                  <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.95rem' }}>
                    {selectedOrder.customer_name || 'Customer'}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#475569', marginTop: '2px' }}>
                    📞 {selectedOrder.customer_phone}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#64748B', marginTop: '6px', lineHeight: 1.4 }}>
                    📍 {address.address} {address.pincode ? ` - ${address.pincode}` : ''}
                  </div>
                </div>

                <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', marginBottom: '6px' }}>
                    Payment &amp; Invoice Total
                  </div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#059669' }}>
                    ₹{Number(selectedOrder.total_amount).toFixed(2)}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#64748B', marginTop: '2px' }}>
                    Payment Status: <strong>{selectedOrder.payment_status}</strong>
                  </div>
                  {selectedOrder.coupon_code && (
                    <div style={{ fontSize: '0.8rem', color: '#047857', marginTop: '4px' }}>
                      🏷️ Coupon Applied: <strong>{selectedOrder.coupon_code}</strong>
                    </div>
                  )}
                </div>
              </div>

              {/* Ordered Items List */}
              {selectedOrder.order_items && selectedOrder.order_items.length > 0 && (
                <div style={{ marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#1E293B', marginBottom: '12px' }}>
                    Items in this Order ({selectedOrder.order_items.length})
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {selectedOrder.order_items.map((item, idx) => (
                      <div
                        key={item.id || idx}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '12px 16px',
                          background: '#FFFFFF',
                          border: '1px solid #E2E8F0',
                          borderRadius: '10px'
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0F172A' }}>
                            {item.product_name}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: '#64748B' }}>
                            Quantity: <strong>{item.quantity}</strong> • Rate: ₹{Number(item.unit_price).toFixed(2)}
                          </div>
                        </div>
                        <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0F172A' }}>
                          ₹{Number(item.total_price).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* WhatsApp Support Button */}
              <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '20px', textAlign: 'center' }}>
                <a
                  href={`https://wa.me/${siteConfig.phones.whatsappRaw}?text=${encodeURIComponent(
                    `Hi AS Print Gallery! I need an update regarding my Order ID: ${selectedOrder.order_number}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#25D366',
                    color: '#FFFFFF',
                    padding: '12px 24px',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    boxShadow: '0 4px 12px rgba(37, 211, 102, 0.25)'
                  }}
                >
                  <span>💬</span>
                  <span>Need Help? Chat with Factory Dispatch Manager on WhatsApp</span>
                </a>
              </div>

            </div>
          );
        })()}

      </div>
    </div>
  );
}
