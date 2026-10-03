import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';

export default async function OrderSuccessPage({ params }: { params: { id: string } }) {
  const supabase = createClient();
  const { data: order } = await supabase
    .from('orders')
    .select('*, order_items(*)')
    .eq('id', params.id)
    .single();

  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC', padding: '60px 20px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ background: '#FFF', padding: '40px', borderRadius: '16px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)', maxWidth: '700px', width: '100%', textAlign: 'center' }}>
        
        {/* Animated Checkmark */}
        <div style={{ width: '90px', height: '90px', background: '#10B981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 25px', boxShadow: '0 0 0 10px #D1FAE5' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '10px', letterSpacing: '-0.5px' }}>Order Confirmed! 🎉</h1>
        <p style={{ color: '#475569', fontSize: '1.2rem', marginBottom: '30px', fontWeight: 500 }}>
          Thank you for shopping with AS Print Gallery. Your order has been successfully placed.
        </p>

        {/* Delivery Estimates */}
        <div style={{ background: '#FFFBEB', border: '1px solid #FDE68A', padding: '20px', borderRadius: '12px', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '15px', textAlign: 'left' }}>
          <div style={{ background: '#F59E0B', padding: '12px', borderRadius: '50%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3" width="15" height="13"></rect>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
              <circle cx="5.5" cy="18.5" r="2.5"></circle>
              <circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
          </div>
          <div>
            <h3 style={{ margin: '0 0 5px 0', fontSize: '1.1rem', color: '#92400E', fontWeight: 800 }}>Delivery Timeline</h3>
            <p style={{ margin: 0, color: '#B45309', fontSize: '0.95rem', fontWeight: 500 }}>
              Your order will be <strong>dispatched in 2-3 business days</strong> and <strong>delivered within 7 days</strong>.
            </p>
          </div>
        </div>

        {order && (
          <div style={{ background: '#F8FAFC', padding: '25px', borderRadius: '12px', textAlign: 'left', marginBottom: '35px', border: '1px solid #E2E8F0' }}>
            <h2 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#64748B', fontWeight: 800, letterSpacing: '1px', marginBottom: '15px', borderBottom: '1px solid #CBD5E1', paddingBottom: '10px' }}>Order Details</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <p style={{ margin: '0 0 5px 0', fontSize: '0.85rem', color: '#94A3B8', fontWeight: 600 }}>Order ID</p>
                <p style={{ margin: 0, fontWeight: 800, color: '#0F172A', fontSize: '1.1rem' }}>{order.order_number}</p>
              </div>
              <div>
                <p style={{ margin: '0 0 5px 0', fontSize: '0.85rem', color: '#94A3B8', fontWeight: 600 }}>Total Amount</p>
                <p style={{ margin: 0, fontWeight: 800, color: '#0F172A', fontSize: '1.1rem' }}>₹{order.total_amount.toFixed(2)}</p>
              </div>
              <div>
                <p style={{ margin: '0 0 5px 0', fontSize: '0.85rem', color: '#94A3B8', fontWeight: 600 }}>Payment Status</p>
                <p style={{ margin: 0, fontWeight: 800, color: '#10B981', fontSize: '1.1rem' }}>✅ {order.payment_status}</p>
              </div>
              <div>
                <p style={{ margin: '0 0 5px 0', fontSize: '0.85rem', color: '#94A3B8', fontWeight: 600 }}>Tracking Info</p>
                <p style={{ margin: 0, fontWeight: 800, color: '#3B82F6', fontSize: '1.1rem' }}>
                  <Link href="/track-order" style={{ textDecoration: 'underline' }}>Track Here</Link>
                </p>
              </div>
            </div>
          </div>
        )}

        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <Link href="/" className="btn-primary-hero" style={{ background: '#E11D48', color: '#FFF', padding: '14px 30px', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem', transition: 'all 0.2s' }}>
            Continue Shopping
          </Link>
          <Link href="/track-order" style={{ background: '#F1F5F9', color: '#0F172A', padding: '14px 30px', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem', border: '1px solid #CBD5E1', transition: 'all 0.2s' }}>
            Track Order
          </Link>
        </div>
      </div>
    </div>
  );
}
