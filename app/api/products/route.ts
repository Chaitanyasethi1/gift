import { NextResponse } from 'next/server';
import { supabase as supabaseAdmin } from '@/lib/supabase';
import { PRODUCTS } from '@/data/products';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { data: dbProducts, error } = await supabaseAdmin
      .from('products')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false })
      .limit(12);

    if (!error && dbProducts && dbProducts.length > 0) {
      return NextResponse.json(dbProducts, {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        },
      });
    }

    return NextResponse.json(PRODUCTS.slice(0, 10));
  } catch (err: any) {
    return NextResponse.json(PRODUCTS.slice(0, 10));
  }
}
