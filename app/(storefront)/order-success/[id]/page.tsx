import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';

export default async function OrderSuccessPage({
  params
}: {
  params: { id: string } | Promise<{ id: string }>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const rawId = resolvedParams?.id || '';

  let order: any = null;
  try {
    const supabase = createClient();
    // Try finding by UUID or by order_number
    const { data } = await supabase
      .from('orders')
      .select('*, order_items(*)')
      .or(`id.eq.${rawId},order_number.eq.${rawId}`)
      .maybeSingle();

    if (data) {
      order = data;
    }
  } catch (err) {
    console.warn('Failed to query order in order-success page:', err);
  }

  const orderNumber = order?.order_number || (rawId.startsWith('ORD-') ? rawId : `ORD-2026-${rawId.slice(0, 4)}`);
  const isPaid = order?.payment_status === 'Paid';
  const isCod = order?.payment_status === 'Pending' || order?.internal_notes?.includes('COD');
  const totalAmount = order?.total_amount ? `₹${Number(order.total_amount).toFixed(2)}` : null;

  const waMessage = `Hi AS Print Gallery! I have placed an order with Order ID: *${orderNumber}* on your website. Please share tracking docket details when dispatched!`;
  const waUrl = `https://wa.me/${siteConfig.phones.whatsappRaw}?text=${encodeURIComponent(waMessage)}`;

  return (
    <div style={{ minHeight: '85vh', background: '#FAFAFC', padding: '40px 16px 80px 16px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
      <div style={{
        background: '#FFFFFF',
        borderRadius: '20px',
        border: '1px solid #E2E8F0',
        boxShadow: '0 20px 40px -15px rgba(0,0,0,0.07)',
        maxWidth: '680px',
        width: '100%',
        padding: '40px 28px',
        textAlign: 'center'
      }}>
        
        {/* Animated Green Badge */}
        <div style={{
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px auto',
          boxShadow: '0 10px 25px rgba(16, 185, 129, 0.35)'
        }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#059669', textTransform: 'uppercase', letterSpacing: '1px' }}>
          🎉 Order Confirmed Successfully
        </span>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.3rem)', fontWeight: 900, color: '#0F172A', margin: '8px 0 10px 0', letterSpacing: '-0.5px' }}>
          Thank You For Your Order!
        </h1>
        <p style={{ color: '#64748B', fontSize: '1rem', maxWidth: '520px', margin: '0 auto 28px auto', lineHeight: 1.5 }}>
          Your packaging order has been received at our factory unit and is queued for priority manufacturing &amp; dispatch.
        </p>

        {/* PROMINENT ORDER NUMBER BOX */}
        <div style={{
          background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
          border: '2px dashed #CBD5E1',
          borderRadius: '16px',
          padding: '20px 24px',
          marginBottom: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          textAlign: 'left'
        }}>
          <div>
            <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Your Official Order Number
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0F172A', letterSpacing: '1px', marginTop: '2px' }}>
              {orderNumber}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {isPaid ? (
              <span style={{ background: '#DCFCE7', color: '#166534', padding: '6px 14px', borderRadius: '30px', fontWeight: 800, fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                💳 Paid Online
              </span>
            ) : isCod ? (
              <span style={{ background: '#FEF3C7', color: '#92400E', padding: '6px 14px', borderRadius: '30px', fontWeight: 800, fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                💵 Cash On Delivery
              </span>
            ) : (
              <span style={{ background: '#E0F2FE', color: '#0369A1', padding: '6px 14px', borderRadius: '30px', fontWeight: 800, fontSize: '0.85rem' }}>
                📦 Confirmed
              </span>
            )}
          </div>
        </div>

        {/* DETAILS GRID */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '14px',
          marginBottom: '28px',
          textAlign: 'left'
        }}>
          {totalAmount && (
            <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>Total Amount</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#0F172A', marginTop: '4px' }}>{totalAmount}</div>
            </div>
          )}
          
          <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
            <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>Dispatch Time</div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#059669', marginTop: '4px' }}>⚡ 24 - 48 Hours</div>
          </div>

          <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
            <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>Delivery Timeline</div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0284C7', marginTop: '4px' }}>🚚 2 - 4 Days</div>
          </div>
        </div>

        {/* ORDERED ITEMS LIST (IF AVAILABLE) */}
        {order?.order_items && order.order_items.length > 0 && (
          <div style={{ textAlign: 'left', background: '#F8FAFC', padding: '18px 20px', borderRadius: '14px', marginBottom: '28px', border: '1px solid #E2E8F0' }}>
            <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '12px' }}>
              Items in this Package:
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {order.order_items.map((it: any, idx: number) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem', borderBottom: idx !== order.order_items.length - 1 ? '1px dashed #CBD5E1' : 'none', paddingBottom: '8px' }}>
                  <div>
                    <span style={{ fontWeight: 700, color: '#0F172A' }}>{it.product_name}</span>
                    <span style={{ color: '#64748B', marginLeft: '8px' }}>&times; {it.quantity}</span>
                  </div>
                  <span style={{ fontWeight: 700, color: '#0F172A' }}>₹{Number(it.total_price || (it.unit_price * it.quantity)).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WHATSAPP INSTANT CONFIRMATION ASSISTANCE */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            background: '#25D366',
            color: '#FFFFFF',
            padding: '14px 20px',
            borderRadius: '12px',
            fontWeight: 800,
            fontSize: '0.95rem',
            textDecoration: 'none',
            marginBottom: '28px',
            boxShadow: '0 4px 14px rgba(37, 211, 102, 0.25)',
            transition: 'transform 0.15s ease'
          }}
        >
          <span>💬</span> Get Docket &amp; Tracking Updates on WhatsApp
        </a>

        {/* NAVIGATION BUTTONS: SHOP MORE & BACK TO HOME */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '12px',
          paddingTop: '20px',
          borderTop: '1px solid #E2E8F0'
        }}>
          <Link
            href="/products"
            style={{
              background: '#E11D48',
              color: '#FFFFFF',
              padding: '14px 24px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: 800,
              fontSize: '1rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 4px 12px rgba(225, 29, 72, 0.2)'
            }}
          >
            📦 Shop More Products
          </Link>

          <Link
            href="/"
            style={{
              background: '#F1F5F9',
              color: '#1E293B',
              padding: '14px 24px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              border: '1px solid #CBD5E1'
            }}
          >
            🏠 Back to Homepage
          </Link>

          <Link
            href="/track-order"
            style={{
              background: '#FFFFFF',
              color: '#0284C7',
              padding: '14px 24px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '0.95rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              border: '1.5px solid #BAE6FD'
            }}
          >
            📍 Track Your Order
          </Link>
        </div>

      </div>
    </div>
  );
}
