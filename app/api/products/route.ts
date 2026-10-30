import { NextResponse } from 'next/server';
import { supabase as supabaseAdmin } from '@/lib/supabase';
import { PRODUCTS } from '@/data/products';

export const dynamic = 'force-dynamic';

let cachedDbProducts: any[] = [];
let lastFetchTime = 0;
const CACHE_TTL_MS = 60 * 1000; // 60 seconds

export async function GET() {
  const now = Date.now();
  if (cachedDbProducts.length > 0 && (now - lastFetchTime) < CACHE_TTL_MS) {
    return NextResponse.json(cachedDbProducts, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
      },
    });
  }

  try {
    const { data: dbProducts, error } = await supabaseAdmin
      .from('products')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    if (!error && dbProducts && dbProducts.length > 0) {
      cachedDbProducts = dbProducts;
      lastFetchTime = now;
      return NextResponse.json(dbProducts, {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        },
      });
    }

    if (cachedDbProducts.length > 0) {
      return NextResponse.json(cachedDbProducts);
    }
    return NextResponse.json(PRODUCTS);
  } catch (err: any) {
    if (cachedDbProducts.length > 0) {
      return NextResponse.json(cachedDbProducts);
    }
    return NextResponse.json(PRODUCTS);
  }
}
