import React from 'react';
import { createClient } from '@/utils/supabase/server';
import DashboardOverviewClient from '@/components/admin/DashboardOverviewClient';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function AdminDashboard() {
  const supabase = createClient();

  // Fetch orders with order items
  const { data: orders, error: ordersError } = await supabase
    .from('orders')
    .select('*, order_items(*)')
    .order('created_at', { ascending: false });

  if (ordersError) {
    console.error('Error fetching orders for dashboard:', ordersError.message);
  }

  // Fetch low stock count (products with stock_quantity < 5)
  const { count: lowStockCount } = await supabase
    .from('products')
    .select('*', { count: 'exact', head: true })
    .lt('stock_quantity', 5);

  return (
    <DashboardOverviewClient
      initialOrders={orders || []}
      lowStockCount={lowStockCount || 0}
    />
  );
}
