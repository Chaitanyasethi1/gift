import React from 'react';
import { Metadata } from 'next';
import { CategoryCatalog } from '@/components/CategoryCatalog';
import { getAllProducts, getAllCategories } from '@/lib/catalog';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'All Packaging & Printing Products - Complete Catalog | AS Print Gallery',
  description:
    'Browse our complete direct factory packaging catalogue: 3-ply & 5-ply corrugated shipping boxes, food packaging, woven garment labels, hang tags, and waterproof stickers.',
  alternates: {
    canonical: '/products'
  }
};

export default async function ProductsPage() {
  const [allProducts, allCategories] = await Promise.all([
    getAllProducts(),
    getAllCategories()
  ]);

  return (
    <CategoryCatalog
      initialProducts={allProducts}
      allCategories={allCategories}
      isShopAll={true}
      pageTitle="All Packaging & Printing Products"
      pageDescription="Complete industrial catalog manufactured in-house. Certified bursting strength kraft paper, food-grade safe boards, and high-precision woven labels at direct factory wholesale rates."
    />
  );
}
