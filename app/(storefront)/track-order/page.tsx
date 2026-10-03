'use client';
import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { ShieldCheckIcon } from '@/components/Icons';

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [order, setOrder] = useState<any>(null);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setOrder(null);

    try {
      const supabase = createClient();
      const { data, error: fetchError } = await supabase
        .from('orders')
        .select('*, order_items(*)')
        .eq('order_number', orderNumber)
        .eq('customer_phone', phone)
        .single();

      if (fetchError || !data) {
        throw new Error('Order not found. Please check your details.');
      }

      setOrder(data);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ background: '#F8FAFC', minHeight: '80vh', padding: '60px 20px' }}>
      <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '10px' }}>Track Your Order</h1>
        <p style={{ textAlign: 'center', color: '#64748B', marginBottom: '40px' }}>Enter your Order ID and Phone Number to check status</p>

        <div style={{ background: '#FFF', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
          <form onSubmit={handleTrack} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Order ID (e.g. ORD-2026-1234)</label>
              <input
                type="text"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                placeholder="ORD-..."
                required
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #CBD5E1' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="10-digit number"
                required
                maxLength={10}
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #CBD5E1' }}
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              style={{ background: '#0F172A', color: '#FFF', padding: '14px', borderRadius: '8px', fontWeight: 700, marginTop: '10px' }}
            >
              {isLoading ? 'Tracking...' : 'Track Order'}
            </button>
          </form>

          {error && (
            <div style={{ marginTop: '20px', padding: '15px', background: '#FEE2E2', color: '#B91C1C', borderRadius: '8px', textAlign: 'center' }}>
              {error}
            </div>
          )}

          {order && (
            <div style={{ marginTop: '30px', borderTop: '2px dashed #E2E8F0', paddingTop: '30px' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '20px', color: '#0F172A' }}>Order Status: <span style={{ color: '#10B981' }}>{order.status}</span></h3>
              
              <div style={{ background: '#F1F5F9', padding: '20px', borderRadius: '12px', marginBottom: '20px' }}>
                <p style={{ margin: '0 0 10px 0', fontSize: '0.9rem' }}><strong>Order Date:</strong> {new Date(order.created_at).toLocaleDateString()}</p>
                <p style={{ margin: '0 0 10px 0', fontSize: '0.9rem' }}><strong>Payment Status:</strong> {order.payment_status}</p>
                <p style={{ margin: '0 0 10px 0', fontSize: '0.9rem' }}><strong>Total Amount:</strong> ₹{order.total_amount.toFixed(2)}</p>
                {order.tracking_number && (
                  <p style={{ margin: '0', fontSize: '0.9rem' }}>
                    <strong>Courier Tracking:</strong> {order.courier_name} - <a href={order.tracking_link || '#'} target="_blank" style={{ color: '#3B82F6', textDecoration: 'underline' }}>{order.tracking_number}</a>
                  </p>
                )}
              </div>

              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '15px' }}>Items Ordered</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {order.order_items?.map((item: any) => (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#FFF', border: '1px solid #E2E8F0', borderRadius: '8px' }}>
                    <div>
                      <p style={{ margin: 0, fontWeight: 600, fontSize: '0.9rem' }}>{item.product_name}</p>
                      <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748B' }}>Qty: {item.quantity}</p>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>₹{item.total_price.toFixed(2)}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
