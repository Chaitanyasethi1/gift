import React from 'react';
import { Metadata } from 'next';
import { CategoryCatalog } from '@/components/CategoryCatalog';
import { getAllProducts, getAllCategories, resolveCategory, getProductsForCategory } from '@/lib/catalog';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Shop All Packaging Products - Factory Direct Catalog | AS Print Gallery',
  description: 'Explore our complete catalog of corrugated shipping cartons, kraft paper bags, woven labels, food boxes, and custom stickers at factory-direct wholesale prices.'
};

export default async function ShopPage({
  searchParams
}: {
  searchParams?: Promise<{ category?: string; collection?: string; q?: string; sub?: string; subcat?: string }>;
}) {
  const resolvedParams = searchParams ? await searchParams : {};
  const categorySlug = resolvedParams?.subcat || resolvedParams?.sub || resolvedParams?.category || resolvedParams?.collection;
  const searchQuery = resolvedParams?.q;

  const [allProducts, allCategories] = await Promise.all([
    getAllProducts(),
    getAllCategories()
  ]);

  if (categorySlug) {
    const category = await resolveCategory(categorySlug);
    const categoryProducts = await getProductsForCategory(categorySlug);

    return (
      <CategoryCatalog
        category={category}
        initialProducts={categoryProducts}
        allCategories={allCategories}
        isShopAll={false}
        pageTitle={category?.name}
        pageDescription={category?.description}
      />
    );
  }

  return (
    <CategoryCatalog
      initialProducts={allProducts}
      allCategories={allCategories}
      isShopAll={true}
      pageTitle={searchQuery ? `Search Results for "${searchQuery}"` : 'Shop All Products'}
      pageDescription={searchQuery ? `Products matching your search query "${searchQuery}".` : 'Discover our extensive selection of corrugated cartons, bags, labels, tags, and industrial packaging.'}
    />
  );
}
