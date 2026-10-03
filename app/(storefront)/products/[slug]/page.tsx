import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/data/siteConfig';
import { ProductDetailClient } from '@/components/ProductDetailClient';
import { createClient } from '@/utils/supabase/server';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const supabase = createClient();
  const { data } = await supabase.from('products').select('slug');
  return (data || []).map((product) => ({
    slug: product.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const supabase = createClient();
  const { data: product } = await supabase.from('products').select('*').eq('slug', params.slug).single();
  
  if (!product) {
    return {
      title: 'Product Not Found | AS Print Gallery'
    };
  }

  const title = `${product.name} Manufacturer | AS Print Gallery`;
  const description = `${product.description?.slice(0, 155) || product.name}... Factory direct rates, certified bursting strength, fast Pan-India dispatch from Ghaziabad.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/products/${product.slug}`
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/products/${product.slug}`,
      images: [
        {
          url: product.images?.[0] ? `${siteConfig.url}${product.images[0]}` : '',
          alt: product.name
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [product.images?.[0] ? `${siteConfig.url}${product.images[0]}` : '']
    }
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const supabase = createClient();
  const { data: product } = await supabase.from('products').select('*, categories(name)').eq('slug', params.slug).single();
  
  if (!product) {
    notFound();
  }

  // Map Supabase product to expected component shape
  const mappedProduct = {
    id: product.id,
    slug: product.slug,
    title: product.name,
    category: product.category_id,
    categoryLabel: product.categories?.name || 'Category',
    desc: product.description || 'Premium quality product manufactured by AS Print Gallery.',
    image: product.images?.[0] || 'https://via.placeholder.com/600',
    price: product.selling_price,
    startingAt: product.selling_price,
    moq: product.moq || 100,
    specs: [
      `MRP: ₹${product.mrp}`,
      `Selling Price: ₹${product.selling_price}`,
      `Stock Available: ${product.stock_quantity}`,
      `Customization: Printing Available`
    ],
    tiers: product.bulk_pricing || [
      { minQty: 100, price: product.selling_price },
      { minQty: 500, price: product.selling_price * 0.95 },
      { minQty: 1000, price: product.selling_price * 0.9 }
    ]
  };

  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: mappedProduct.title,
    image: mappedProduct.image,
    description: mappedProduct.desc,
    sku: mappedProduct.id,
    brand: {
      '@type': 'Brand',
      name: siteConfig.name
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: mappedProduct.startingAt || mappedProduct.price,
      highPrice: mappedProduct.price,
      offerCount: mappedProduct.tiers ? mappedProduct.tiers.length : 1,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: siteConfig.name
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <ProductDetailClient product={mappedProduct} />
    </>
  );
}
