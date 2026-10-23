import React from 'react';
import { Metadata } from 'next';
import { CategoryCatalog } from '@/components/CategoryCatalog';
import { getAllProducts, getAllCategories, resolveCategory, getProductsForCategory } from '@/lib/catalog';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'All Packaging & Printing Products — Factory Direct Catalog | AS Print Gallery',
  description:
    'Explore our complete catalog of corrugated shipping cartons, kraft paper bags, woven garment labels, food packaging, and custom stickers at direct factory wholesale rates from Ghaziabad.',
  keywords: [
    'packaging products',
    'corrugated boxes wholesale',
    'kraft paper carry bags',
    'woven labels manufacturer',
    'custom packaging catalog',
    'as print gallery',
    'asprintgallery'
  ],
  alternates: {
    canonical: '/shop'
  },
  openGraph: {
    title: 'All Packaging Products — Factory Direct Catalog | AS Print Gallery',
    description:
      'Direct factory catalog for corrugated shipping cartons, kraft bags, woven labels, food packaging & stickers in Loni, Ghaziabad & Delhi NCR.',
    url: 'https://asprintgallery.com/shop',
    images: ['https://asprintgallery.com/assets/combo_banner_new.jpg']
  }
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
