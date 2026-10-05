import React from 'react';
import { ProductGrid } from '@/components/ProductGrid';
import { createClient } from '@/utils/supabase/server';

export default async function ShopPage() {
  const supabase = createClient();
  const { data: products } = await supabase.from('products').select('*').eq('is_active', true);
  
  return (
    <div style={{ padding: '60px 0', background: '#FAFAFC' }}>
      <div className="container">
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '40px', textAlign: 'center' }}>Shop All Products</h1>
        <ProductGrid products={products || []} hideTabs={false} showAllButton={false} />
      </div>
    </div>
  );
}
