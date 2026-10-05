import { MetadataRoute } from 'next';
import { PRODUCTS } from '@/data/products';
import { initialCategories } from '@/data/categoriesData';
import { siteConfig } from '@/data/siteConfig';
import { supabase as supabaseAdmin } from '@/lib/supabase';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url || 'https://asprintgallery.com';

  // 1. Core Static Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.95
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9
    },
    {
      url: `${baseUrl}/custom-box-builder`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/3d-box-builder`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75
    },
    {
      url: `${baseUrl}/certifications`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/track-order`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/corrugated-boxes-delhi`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85
    },
    {
      url: `${baseUrl}/corrugated-boxes-noida`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85
    },
    {
      url: `${baseUrl}/corrugated-boxes-ghaziabad`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85
    },
    {
      url: `${baseUrl}/corrugated-boxes-gurgaon`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85
    },
    {
      url: `${baseUrl}/shipping-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4
    },
    {
      url: `${baseUrl}/returns-refunds`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4
    }
  ];

  // 2. Dynamic Categories Routes
  const categoryRoutes: MetadataRoute.Sitemap = initialCategories.map((cat) => ({
    url: `${baseUrl}/shop?category=${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8
  }));

  // 3. Dynamic Products Routes (Fetch live from Supabase + fallback to PRODUCTS)
  let productSlugs = new Set<string>();
  try {
    const { data: dbProducts } = await supabaseAdmin.from('products').select('slug, updated_at');
    if (dbProducts && dbProducts.length > 0) {
      dbProducts.forEach(p => {
        if (p.slug) productSlugs.add(p.slug);
      });
    }
  } catch (err) {
    // fallback
  }

  // Add default static products
  PRODUCTS.forEach(p => productSlugs.add(p.slug));

  const productRoutes: MetadataRoute.Sitemap = Array.from(productSlugs).map((slug) => ({
    url: `${baseUrl}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.9
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
