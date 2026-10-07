import React from 'react';
import { ProductGrid } from '@/components/ProductGrid';
import { PRODUCTS } from '@/data/products';
import { createClient } from '@/utils/supabase/server';

export default async function ShopPage({
  searchParams
}: {
  searchParams?: Promise<{ category?: string; q?: string }>;
}) {
  const resolvedParams = searchParams ? await searchParams : {};
  const categorySlug = resolvedParams?.category;
  const searchQuery = resolvedParams?.q;

  let products: any[] = [];
  let categoryName = '';

  try {
    const supabase = createClient();
    let query = supabase.from('products').select('*').eq('is_active', true);

    if (categorySlug) {
      const { data: cat } = await supabase
        .from('categories')
        .select('id, name')
        .eq('slug', categorySlug)
        .maybeSingle();

      if (cat) {
        categoryName = cat.name;
        const { data: subCats } = await supabase
          .from('categories')
          .select('id')
          .eq('parent_id', cat.id);

        const catIds = [cat.id, ...(subCats || []).map((s: any) => s.id)];
        query = query.in('category_id', catIds);
      }
    }

    if (searchQuery) {
      query = query.or(`name.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%,slug.ilike.%${searchQuery}%`);
    }

    const { data: dbProducts, error } = await query;
    if (!error && dbProducts && dbProducts.length > 0) {
      products = dbProducts;
    }
  } catch (err) {
    console.warn('Supabase fetch in ShopPage fallback to local products:', err);
  }

  // Fallback to static catalog if DB returned nothing or error occurred
  if (products.length === 0) {
    if (searchQuery) {
      const qLower = searchQuery.toLowerCase();
      products = PRODUCTS.filter(p => 
        p.title?.toLowerCase().includes(qLower) || 
        p.desc?.toLowerCase().includes(qLower) ||
        p.categoryLabel?.toLowerCase().includes(qLower)
      );
    } else if (categorySlug) {
      const slugLower = categorySlug.toLowerCase().replace(/-/g, ' ');
      products = PRODUCTS.filter(p => 
        p.categoryLabel?.toLowerCase().includes(slugLower) ||
        p.slug?.toLowerCase().includes(categorySlug.toLowerCase())
      );
      if (products.length === 0) {
        products = PRODUCTS;
      }
    } else {
      products = PRODUCTS;
    }
  }

  const heading = categoryName
    ? categoryName
    : categorySlug
    ? `Category: ${categorySlug.replace(/-/g, ' ')}`
    : searchQuery
    ? `Search Results for "${searchQuery}"`
    : 'Shop All Products';

  return (
    <div style={{ padding: '40px 0 60px 0', background: '#FAFAFC', minHeight: '60vh' }}>
      <div className="container">
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '30px', textAlign: 'center', color: '#0F172A' }}>
          {heading}
        </h1>
        <ProductGrid products={products} hideTabs={false} showAllButton={false} />
      </div>
    </div>
  );
}
