import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function OrderSuccessPage({ params }: { params: { id: string } }) {
  const supabase = createClient();
  const { data: order } = await supabase
    .from('orders')
    .select('*, order_items(*)')
    .eq('id', params.id)
    .single();

  if (!order) {
    notFound();
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC', padding: '60px 20px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ background: '#FFF', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', maxWidth: '600px', width: '100%', textAlign: 'center' }}>
        <div style={{ width: '80px', height: '80px', background: '#10B981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>Order Placed Successfully!</h1>
        <p style={{ color: '#64748B', fontSize: '1.1rem', marginBottom: '30px' }}>
          Thank you for shopping with us. We've received your order and are getting it ready.
        </p>

        <div style={{ background: '#F1F5F9', padding: '20px', borderRadius: '12px', textAlign: 'left', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#64748B', fontWeight: 700, letterSpacing: '1px', marginBottom: '10px' }}>Order Details</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#94A3B8' }}>Order ID</p>
              <p style={{ margin: 0, fontWeight: 700, color: '#0F172A' }}>{order.order_number}</p>
            </div>
            <div>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#94A3B8' }}>Total Amount</p>
              <p style={{ margin: 0, fontWeight: 700, color: '#0F172A' }}>₹{order.total_amount.toFixed(2)}</p>
            </div>
            <div>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#94A3B8' }}>Payment Status</p>
              <p style={{ margin: 0, fontWeight: 700, color: '#10B981' }}>{order.payment_status}</p>
            </div>
            <div>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#94A3B8' }}>Tracking Info</p>
              <p style={{ margin: 0, fontWeight: 700, color: '#3B82F6' }}>
                <Link href="/track-order" style={{ textDecoration: 'underline' }}>Track Here</Link>
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <Link href="/" className="btn-primary-hero" style={{ background: '#E11D48', color: '#FFF', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>
            Continue Shopping
          </Link>
          <Link href="/track-order" style={{ background: '#E2E8F0', color: '#0F172A', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>
            Track Order
          </Link>
        </div>
      </div>
    </div>
  );
}
