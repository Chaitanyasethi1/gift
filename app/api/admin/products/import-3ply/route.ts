import { NextResponse } from 'next/server';
import { supabase as supabaseAdmin } from '@/lib/supabase';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function POST() {
  try {
    const filePath = path.join(process.cwd(), 'scratch', 'scraped_3ply_boxes.json');
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ success: false, error: 'Scraped products file not found.' }, { status: 404 });
    }

    const items = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Fetch existing products
    const { data: existingProds } = await supabaseAdmin.from('products').select('id, slug, name');
    const existingBySlug = new Map<string, any>();
    (existingProds || []).forEach((p: any) => {
      if (p.slug) existingBySlug.set(p.slug, p);
    });

    let inserted = 0;
    let updated = 0;

    for (const item of items) {
      const existing = existingBySlug.get(item.slug);

      if (existing) {
        await supabaseAdmin
          .from('products')
          .update({
            name: item.name,
            category_id: item.category_id,
            description: item.description,
            selling_price: item.selling_price,
            mrp: item.mrp,
            moq: item.moq,
            stock_quantity: item.stock_quantity || 10000,
            is_active: true,
            images: item.images,
            sizes: item.sizes,
            bulk_pricing: item.bulk_pricing,
            variants: item.variants,
            gst_rate: 18,
            gst_percentage: 18,
            updated_at: new Date().toISOString()
          })
          .eq('id', existing.id);
        updated++;
      } else {
        await supabaseAdmin
          .from('products')
          .insert([{
            name: item.name,
            slug: item.slug,
            category_id: item.category_id,
            description: item.description,
            selling_price: item.selling_price,
            mrp: item.mrp,
            moq: item.moq,
            stock_quantity: item.stock_quantity || 10000,
            is_active: true,
            images: item.images,
            sizes: item.sizes,
            bulk_pricing: item.bulk_pricing,
            variants: item.variants,
            gst_rate: 18,
            gst_percentage: 18,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }]);
        inserted++;
      }
    }

    return NextResponse.json({
      success: true,
      message: `Sync complete! ${inserted} new 3-ply boxes added, ${updated} existing boxes updated.`,
      inserted,
      updated,
      total: items.length
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
