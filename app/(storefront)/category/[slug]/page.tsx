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
      description: 'Explore factory direct packaging boxes, labels, stickers, and bags from AS Print Gallery in Ghaziabad.'
    };
  }

  const title = `${category.name} at Factory Wholesale Rates | AS Print Gallery`;
  const description = category.description
    ? `${category.description} Factory wholesale prices, custom printing, certified bursting strength & fast Pan-India dispatch from Ghaziabad.`
    : `Buy ${category.name} online at direct factory wholesale rates from AS Print Gallery in Ghaziabad. Custom sizes, certified kraft paper, fast Pan-India shipping.`;

  return {
    title,
    description,
    keywords: [
      category.name,
      `${category.name} manufacturer`,
      `${category.name} wholesale`,
      `${category.name} ghaziabad`,
      `${category.name} delhi ncr`,
      'as print gallery',
      'asprintgallery',
      'asprintgallery.com'
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://asprintgallery.com/category/${category.slug}`,
      images: [
        {
          url: 'https://asprintgallery.com/assets/combo_banner_new.jpg',
          width: 1200,
          height: 630,
          alt: `${category.name} - AS Print Gallery`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://asprintgallery.com/assets/combo_banner_new.jpg']
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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://asprintgallery.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Categories',
        item: 'https://asprintgallery.com/shop'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: category.name,
        item: `https://asprintgallery.com/category/${category.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CategoryCatalog
        category={category}
        initialProducts={products}
        allCategories={allCategories}
      />
    </>
  );
}
