import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/data/siteConfig';
import { ProductDetailClient } from '@/components/ProductDetailClient';
import { createClient } from '@/utils/supabase/server';
import { supabase as supabaseAdmin } from '@/lib/supabase';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const { data } = await supabaseAdmin.from('products').select('slug');
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

  // Parse variants and bulk_pricing safely
  let parsedVariants = [];
  try {
    parsedVariants = typeof product.variants === 'string' ? JSON.parse(product.variants) : (product.variants || []);
  } catch (e) {
    parsedVariants = [];
  }

  let parsedBulk = [];
  try {
    parsedBulk = typeof product.bulk_pricing === 'string' ? JSON.parse(product.bulk_pricing) : (product.bulk_pricing || []);
  } catch (e) {
    parsedBulk = [];
  }

  const mappedProduct = {
    id: product.id,
    slug: product.slug,
    title: product.name,
    category: product.category_id,
    categoryLabel: product.categories?.name || 'Packaging Material',
    desc: product.description || 'Premium quality packaging material manufactured by AS Print Gallery.',
    image: product.images?.[0] || 'https://via.placeholder.com/600',
    price: product.selling_price || product.price || 0,
    startingAt: product.selling_price || product.price || 0,
    moq: product.moq || 50,
    sizes: product.sizes || [],
    variants: parsedVariants,
    allowLogoUpload: product.allow_logo_upload || false,
    specs: [
      `MRP: ₹${product.mrp || 0}`,
      `Selling Price: ₹${product.selling_price || product.price || 0}`,
      `Stock Available: ${product.stock_quantity ?? 1000}`,
      `Customization: Printing Available`
    ],
    tiers: parsedBulk.length > 0
      ? parsedBulk
      : [
          { qty: product.moq || 50, rate: product.selling_price || product.price || 10, label: `${product.moq || 50} pcs Pack` },
          { qty: 200, rate: Math.round((product.selling_price || product.price || 10) * 0.95), label: '200 pcs Pack' },
          { qty: 500, rate: Math.round((product.selling_price || product.price || 10) * 0.90), label: '500 pcs Pack' },
          { qty: 1000, rate: Math.round((product.selling_price || product.price || 10) * 0.85), label: '1000 pcs Pack' }
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
