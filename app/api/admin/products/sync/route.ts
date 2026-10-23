import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { supabase as supabaseAdmin } from '@/lib/supabase';
import { PRODUCTS } from '@/data/products';
import { DETAILED_DESCRIPTIONS } from '@/data/productDetailedDescriptions';
import { combineProductDescription, DETAILED_DESC_DELIMITER } from '@/lib/productDescription';

export const dynamic = 'force-dynamic';

function formatDetailedSectionFromData(detailInfo: any): string {
  if (!detailInfo) return '';

  const sections: string[] = [];

  // 1. Key Specs
  if (Array.isArray(detailInfo.specs) && detailInfo.specs.length > 0) {
    const specLines = detailInfo.specs
      .map((s: any) => `• ${s.label}: ${s.value}`)
      .join('\n');
    sections.push(`📋 Technical Specifications:\n${specLines}`);
  }

  // 2. Features
  if (Array.isArray(detailInfo.features) && detailInfo.features.length > 0) {
    const featLines = detailInfo.features
      .map((f: any) => `✔ ${f.title}: ${f.desc}`)
      .join('\n\n');
    sections.push(`⚡ Key Features & Benefits:\n${featLines}`);
  }

  // 3. Deep description sections
  if (detailInfo.deepDescription?.sections) {
    const deepLines = detailInfo.deepDescription.sections
      .map((s: any) => `📦 ${s.title}:\n${s.content}`)
      .join('\n\n');
    sections.push(`🏭 Material & Manufacturing:\n${deepLines}`);
  }

  // 4. FAQs
  if (Array.isArray(detailInfo.faqs) && detailInfo.faqs.length > 0) {
    const faqLines = detailInfo.faqs
      .map((faq: any) => `Q: ${faq.q}\nA: ${faq.a}`)
      .join('\n\n');
    sections.push(`❓ Frequently Asked Questions:\n${faqLines}`);
  }

  return sections.join('\n\n');
}

export async function POST() {
  try {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ success: false, error: 'Unauthorized. Admin login required.' }, { status: 401 });
    }

    // 1. Get existing DB products
    const { data: dbProducts } = await supabaseAdmin.from('products').select('*');
    const existingBySlug = new Map<string, any>();
    (dbProducts || []).forEach((p: any) => {
      if (p.slug) existingBySlug.set(p.slug, p);
    });

    // 2. Get categories map for mapping
    const { data: dbCategories } = await supabaseAdmin.from('categories').select('id, slug, name');
    const catMap = new Map<string, string>();
    (dbCategories || []).forEach((c: any) => {
      catMap.set(c.slug, c.id);
    });

    let syncedCount = 0;
    let updatedCount = 0;

    for (const prod of PRODUCTS) {
      const existing = existingBySlug.get(prod.slug);
      const detailInfo = DETAILED_DESCRIPTIONS[prod.slug];
      const generatedDetailed = formatDetailedSectionFromData(detailInfo);

      const shortSummary = [
        `📦 ${prod.title}`,
        prod.dimensions ? `📐 Standard Dimensions: ${prod.dimensions}` : null,
        `💪 Bursting Factor: 18-24 BF Tested Kraft Liner`,
        `🚚 Pan-India Factory Doorstep Dispatch`,
        `💰 Direct Factory Wholesale Rates`
      ].filter(Boolean).join('\n');

      let finalDescription = '';
      if (existing?.description && existing.description.includes(DETAILED_DESC_DELIMITER)) {
        // Keep existing custom description if delimiter is present
        finalDescription = existing.description;
      } else if (existing?.description && existing.description.length > 100) {
        // Append generated detailed section to existing short description
        finalDescription = combineProductDescription(existing.description, generatedDetailed);
      } else {
        finalDescription = combineProductDescription(shortSummary, generatedDetailed);
      }

      const defaultCategory = catMap.get('packaging-boxes') || catMap.get('craft-3-ply-box') || null;

      if (!existing) {
        // Insert new
        const newProduct = {
          name: prod.title,
          slug: prod.slug,
          category_id: defaultCategory,
          description: finalDescription,
          selling_price: prod.price || 10,
          mrp: prod.price ? Math.round(prod.price * 1.4) : 15,
          stock_quantity: 1000,
          is_active: true,
          images: [prod.image],
          moq: prod.moq || 50,
          bulk_pricing: prod.tiers || [
            { qty: 50, rate: prod.price || 10, label: '50 pcs Pack' },
            { qty: 200, rate: Math.round((prod.price || 10) * 0.95), label: '200 pcs Pack' },
            { qty: 500, rate: Math.round((prod.price || 10) * 0.90), label: '500 pcs Pack' }
          ]
        };

        const { error: insErr } = await supabaseAdmin.from('products').insert([newProduct]);
        if (!insErr) syncedCount++;
      } else {
        // Update description if it was missing detailed section
        if (!existing.description?.includes(DETAILED_DESC_DELIMITER) && generatedDetailed) {
          await supabaseAdmin
            .from('products')
            .update({
              description: finalDescription,
              updated_at: new Date().toISOString()
            })
            .eq('id', existing.id);
          updatedCount++;
        }
      }
    }

    return NextResponse.json({
      success: true,
      message: `Sync complete! ${syncedCount} new catalog products inserted into database, ${updatedCount} existing products updated with detailed specifications.`,
      syncedCount,
      updatedCount,
      inserted: syncedCount,
      updated: updatedCount,
      total: PRODUCTS.length
    });

  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
