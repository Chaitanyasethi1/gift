import React from 'react';
import { ProductGrid } from '@/components/ProductGrid';
import { createClient } from '@/utils/supabase/server';

export default async function ShopPage({
  searchParams
}: {
  searchParams?: Promise<{ category?: string; q?: string }>;
}) {
  const resolvedParams = searchParams ? await searchParams : {};
  const categorySlug = resolvedParams.category;
  const searchQuery = resolvedParams.q;

  const supabase = createClient();
  let query = supabase.from('products').select('*').eq('is_active', true);

  let categoryName = '';
  if (categorySlug) {
    // Look up category by slug
    const { data: cat } = await supabase
      .from('categories')
      .select('id, name')
      .eq('slug', categorySlug)
      .maybeSingle();

    if (cat) {
      categoryName = cat.name;
      // Also fetch any subcategories if this is a parent category
      const { data: subCats } = await supabase
        .from('categories')
        .select('id')
        .eq('parent_id', cat.id);

      const catIds = [cat.id, ...(subCats || []).map((s: any) => s.id)];
      query = query.in('category_id', catIds);
    }
  }

  if (searchQuery) {
    query = query.ilike('name', `%${searchQuery}%`);
  }

  const { data: products } = await query;
  
  return (
    <div style={{ padding: '60px 0', background: '#FAFAFC' }}>
      <div className="container">
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '40px', textAlign: 'center' }}>
          {categoryName ? categoryName : categorySlug ? `Category: ${categorySlug.replace(/-/g, ' ')}` : searchQuery ? `Search Results for "${searchQuery}"` : 'Shop All Products'}
        </h1>
        <ProductGrid products={products || []} hideTabs={false} showAllButton={false} />
      </div>
    </div>
  );
}
