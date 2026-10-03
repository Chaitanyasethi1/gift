import React from 'react';
import { createClient } from '@/utils/supabase/server';

export default async function SalesPage() {
  const supabase = createClient();
  const { data: orders, error } = await supabase
    .from('orders')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div>
      <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1e293b', marginBottom: '20px' }}>📦 Orders & Sales</h1>
      <div style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
        
        {error ? (
          <div style={{ padding: '20px', color: 'red' }}>Error loading orders: {error.message}</div>
        ) : orders && orders.length > 0 ? (
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0', color: '#475569', fontSize: '0.9rem' }}>
                <th style={{ padding: '16px' }}>Order ID</th>
                <th style={{ padding: '16px' }}>Date</th>
                <th style={{ padding: '16px' }}>Customer</th>
                <th style={{ padding: '16px' }}>Amount</th>
                <th style={{ padding: '16px' }}>Payment</th>
                <th style={{ padding: '16px' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order: any) => (
                <tr key={order.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '16px', fontWeight: 600, color: '#0f172a' }}>{order.order_number}</td>
                  <td style={{ padding: '16px', color: '#64748b' }}>{new Date(order.created_at).toLocaleDateString()}</td>
                  <td style={{ padding: '16px' }}>
                    <div style={{ fontWeight: 600, color: '#334155' }}>{order.customer_name}</div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{order.customer_phone}</div>
                  </td>
                  <td style={{ padding: '16px', fontWeight: 700, color: '#10b981' }}>₹{order.total_amount.toFixed(2)}</td>
                  <td style={{ padding: '16px' }}>
                    <span style={{ background: order.payment_status === 'Paid' ? '#d1fae5' : '#fef3c7', color: order.payment_status === 'Paid' ? '#047857' : '#b45309', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600 }}>
                      {order.payment_status}
                    </span>
                  </td>
                  <td style={{ padding: '16px' }}>
                    <span style={{ background: '#e0e7ff', color: '#4338ca', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600 }}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>No orders found.</div>
        )}
      </div>
    </div>
  );
}
