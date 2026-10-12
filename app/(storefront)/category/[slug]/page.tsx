import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CategoryCatalog } from '@/components/CategoryCatalog';
import { resolveCategory, getProductsForCategory, getAllCategories } from '@/lib/catalog';

interface CategoryPageProps {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = await resolveCategory(params.slug);

  if (!category) {
    return {
      title: 'Packaging Category | AS Print Gallery',
      description: 'Explore factory direct packaging boxes, labels, stickers, and bags from AS Print Gallery.'
    };
  }

  const title = `${category.name} - Buy Online at Best Factory Direct Rates | AS Print Gallery`;
  const description = category.description || `Buy ${category.name} online at wholesale factory rates from AS Print Gallery. Custom branding, premium corrugated boxes, labels, and fast shipping.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://asprintgallery.com/category/${category.slug}`
    },
    alternates: {
      canonical: `https://asprintgallery.com/category/${category.slug}`
    }
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = await resolveCategory(params.slug);

  if (!category) {
    notFound();
  }

  const [products, allCategories] = await Promise.all([
    getProductsForCategory(params.slug),
    getAllCategories()
  ]);

  return (
    <CategoryCatalog
      category={category}
      initialProducts={products}
      allCategories={allCategories}
    />
  );
}
