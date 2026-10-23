import React from 'react';
import { Metadata } from 'next';
import { CategoryCatalog } from '@/components/CategoryCatalog';
import { getAllProducts, getAllCategories } from '@/lib/catalog';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'All Packaging & Printing Products — Complete Factory Catalog | AS Print Gallery',
  description:
    'Browse our complete direct factory packaging catalogue: 3-ply & 5-ply corrugated shipping boxes, food packaging, woven garment labels, hang tags, and waterproof stickers from Ghaziabad.',
  keywords: [
    'packaging products ghaziabad',
    'corrugated box factory',
    'garment labels manufacturer',
    'custom packaging solutions',
    'as print gallery',
    'asprintgallery'
  ],
  alternates: {
    canonical: '/products'
  },
  openGraph: {
    title: 'All Packaging Products — Complete Factory Catalog | AS Print Gallery',
    description:
      'Direct factory catalog for 3-ply & 5-ply corrugated boxes, woven labels & packaging from our Ghaziabad plant.',
    url: 'https://asprintgallery.com/products',
    images: ['https://asprintgallery.com/assets/combo_banner_new.jpg']
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
