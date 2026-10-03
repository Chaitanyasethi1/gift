import React from 'react';
import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';

export default async function AdminDashboard() {
  const supabase = createClient();
  
  // Fetch metrics
  const { data: orders } = await supabase.from('orders').select('total_amount, payment_status');
  const { count: lowStockCount } = await supabase.from('products').select('*', { count: 'exact', head: true }).lt('stock', 5);

  let totalSales = 0;
  let totalOrders = 0;

  if (orders) {
    totalOrders = orders.length;
    totalSales = orders
      .filter((o: any) => o.payment_status === 'Paid')
      .reduce((sum: number, o: any) => sum + (o.total_amount || 0), 0);
  }

  return (
    <div>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#1e293b', marginBottom: '20px' }}>Dashboard Overview</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
          <h3 style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '8px' }}>Total Revenue (Paid)</h3>
          <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#10b981' }}>₹{totalSales.toFixed(2)}</div>
        </div>
        <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
          <h3 style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '8px' }}>Total Orders</h3>
          <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#3b82f6' }}>{totalOrders}</div>
        </div>
        <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
          <h3 style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '8px' }}>Low Stock Items</h3>
          <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#f59e0b' }}>{lowStockCount || 0}</div>
        </div>
      </div>

      <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '20px' }}>Quick Actions</h2>
        <div style={{ display: 'flex', gap: '15px' }}>
          <Link href="/admin/sales" style={{ background: '#0f172a', color: '#fff', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>
            View All Orders
          </Link>
          <Link href="/admin/stock" style={{ background: '#f1f5f9', color: '#0f172a', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, border: '1px solid #cbd5e1' }}>
            Manage Inventory
          </Link>
        </div>
      </div>
    </div>
  );
}
