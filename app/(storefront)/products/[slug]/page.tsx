import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/data/siteConfig';
import { ProductDetailClient } from '@/components/ProductDetailClient';
import { createClient } from '@/utils/supabase/server';
import { supabase as supabaseAdmin } from '@/lib/supabase';
import { PRODUCTS } from '@/data/products';

export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  try {
    const { data } = await supabaseAdmin.from('products').select('slug');
    const dbSlugs = (data || []).map((product) => ({ slug: product.slug }));
    const staticSlugs = PRODUCTS.map((product) => ({ slug: product.slug }));
    const all = [...dbSlugs, ...staticSlugs];
    const unique = Array.from(new Set(all.map(s => s.slug))).map(slug => ({ slug }));
    return unique;
  } catch {
    return PRODUCTS.map((product) => ({ slug: product.slug }));
  }
}

export async function generateMetadata({ params }: { params: { slug: string } | Promise<{ slug: string }> }): Promise<Metadata> {
  try {
    const resolvedParams = await Promise.resolve(params);
    const slug = resolvedParams?.slug;
    let product: any = null;
    const supabase = createClient();

    try {
      const { data } = await supabase.from('products').select('*').eq('slug', slug).maybeSingle();
      if (data) product = data;
    } catch {}

    if (!product) {
      product = PRODUCTS.find(p => p.slug === slug || p.id === slug);
    }
    
    if (!product) {
      return {
        title: 'Product Not Found | AS Print Gallery'
      };
    }

    const titleText = product.name || product.title || 'Product';
    const descText = product.description || product.desc || titleText;
    const title = `${titleText} Manufacturer | AS Print Gallery`;
    const description = `${descText.slice(0, 155)}... Factory direct rates, certified bursting strength, fast Pan-India dispatch from Ghaziabad.`;

    let firstImage = '';
    if (Array.isArray(product.images) && product.images.length > 0) {
      firstImage = product.images[0];
    } else if (typeof product.images === 'string') {
      try {
        const p = JSON.parse(product.images);
        firstImage = Array.isArray(p) && p.length > 0 ? p[0] : product.images;
      } catch {
        firstImage = product.images;
      }
    } else if (product.image) {
      firstImage = product.image;
    }

    const imageUrl = firstImage ? (firstImage.startsWith('http') ? firstImage : `${siteConfig.url}${firstImage}`) : '';

    return {
      title,
      description,
      alternates: {
        canonical: `/products/${product.slug || slug}`
      },
      openGraph: {
        title,
        description,
        url: `${siteConfig.url}/products/${product.slug || slug}`,
        images: imageUrl ? [{ url: imageUrl, alt: titleText }] : []
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: imageUrl ? [imageUrl] : []
      }
    };
  } catch (e) {
    return {
      title: 'Product | AS Print Gallery'
    };
  }
}

export default async function ProductDetailPage({ params }: { params: { slug: string } | Promise<{ slug: string }> }) {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams?.slug;
  let product: any = null;
  const supabase = createClient();

  try {
    const { data } = await supabase.from('products').select('*').eq('slug', slug).maybeSingle();
    if (data) {
      product = data;
    }
  } catch (err) {
    // ignore
  }

  // Fallback to static catalogue if not found in database or if database offline
  if (!product) {
    const staticProd = PRODUCTS.find(p => p.slug === slug || p.id === slug);
    if (staticProd) {
      product = staticProd;
    }
  }

  if (!product) {
    notFound();
  }

  // Safely get category name if category_id exists
  let categoryName = 'Packaging Material';
  if (product.category_id) {
    try {
      const { data: cat } = await supabase.from('categories').select('name').eq('id', product.category_id).maybeSingle();
      if (cat?.name) categoryName = cat.name;
    } catch {
      // ignore
    }
  } else if (product.categoryLabel) {
    categoryName = product.categoryLabel;
  } else if (product.category) {
    categoryName = product.category;
  }

  // Parse variants and bulk_pricing safely
  let parsedVariants: any[] = [];
  if (Array.isArray(product.variants)) {
    parsedVariants = product.variants;
  } else if (typeof product.variants === 'string') {
    try {
      parsedVariants = JSON.parse(product.variants);
    } catch {
      parsedVariants = [];
    }
  }

  // Fallback to sizes string if variants is empty
  if ((!parsedVariants || parsedVariants.length === 0) && product.sizes) {
    const sizeArr = Array.isArray(product.sizes) ? product.sizes : (typeof product.sizes === 'string' ? product.sizes.split(',') : []);
    parsedVariants = sizeArr.map((s: string) => ({
      size: s.trim(),
      price: Number(product.selling_price || product.price || 0),
      mrp: Number(product.mrp || 0)
    })).filter((v: any) => v.size);
  }

  let parsedBulk: any[] = [];
  if (Array.isArray(product.bulk_pricing)) {
    parsedBulk = product.bulk_pricing;
  } else if (typeof product.bulk_pricing === 'string') {
    try {
      parsedBulk = JSON.parse(product.bulk_pricing);
    } catch {
      parsedBulk = [];
    }
  } else if (Array.isArray(product.tiers)) {
    parsedBulk = product.tiers;
  }

  let parsedImages: string[] = [];
  if (Array.isArray(product.images)) {
    parsedImages = product.images.filter(Boolean);
  } else if (typeof product.images === 'string') {
    try {
      const p = JSON.parse(product.images);
      parsedImages = Array.isArray(p) ? p.filter(Boolean) : [product.images];
    } catch {
      parsedImages = [product.images];
    }
  }
  if (parsedImages.length === 0 && product.image) {
    parsedImages = [product.image];
  }
  if (parsedImages.length === 0) {
    parsedImages = ['https://via.placeholder.com/600'];
  }

  const basePrice = Number(product.selling_price || product.price || 0);

  const mappedProduct = {
    id: product.id || slug,
    slug: product.slug || slug,
    title: product.name || product.title || 'Product',
    category: product.category_id || product.category || '',
    categoryLabel: categoryName,
    desc: product.description || product.desc || 'Premium quality packaging material manufactured by AS Print Gallery.',
    fullDesc: product.fullDesc || product.description || product.desc || '',
    image: parsedImages[0],
    images: parsedImages,
    price: basePrice,
    startingAt: basePrice,
    gst_rate: Number(product.gst_rate ?? product.gst_percentage ?? 18),
    moq: Number(product.moq || 50),
    sizes: product.sizes || [],
    variants: parsedVariants,
    allowLogoUpload: Boolean(product.allow_logo_upload),
    specs: Array.isArray(product.specs) && product.specs.length > 0
      ? product.specs
      : [
          `MRP: ₹${product.mrp || Math.round(basePrice * 1.5)}`,
          `Selling Price: ₹${basePrice}`,
          `GST: ${product.gst_rate ?? product.gst_percentage ?? 18}%`,
          `Stock Available: ${product.stock_quantity ?? 1000}`,
          `Customization: Printing Available`
        ],

    rating: Number(product.rating || 4.9),
    reviews: Number(product.reviews || 120),
    tiers: parsedBulk.length > 0
      ? parsedBulk
      : [
          { qty: Number(product.moq || 50), rate: basePrice, label: `${product.moq || 50} pcs Pack` },
          { qty: 200, rate: Math.round(basePrice * 0.95), label: '200 pcs Pack' },
          { qty: 500, rate: Math.round(basePrice * 0.90), label: '500 pcs Pack' },
          { qty: 1000, rate: Math.round(basePrice * 0.85), label: '1000 pcs Pack' }
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
