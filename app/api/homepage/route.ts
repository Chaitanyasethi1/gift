import { NextResponse } from 'next/server';
import { initialHomepageConfig, HomepageConfig } from '@/data/homepageData';
import { supabase as supabaseAdmin } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

// In-memory cache for fast instant reflection across server sessions
let cachedConfig: HomepageConfig = { ...initialHomepageConfig };

export async function GET() {
  try {
    // 1. Try to fetch from site_settings (row id=1, column homepage_config or key='homepage_config')
    const { data: row1 } = await supabaseAdmin
      .from('site_settings')
      .select('*')
      .eq('id', 1)
      .maybeSingle();

    if (row1 && (row1 as any).homepage_config) {
      const cfg = typeof (row1 as any).homepage_config === 'string'
        ? JSON.parse((row1 as any).homepage_config)
        : (row1 as any).homepage_config;
      cachedConfig = { ...cachedConfig, ...cfg };
      return NextResponse.json(cachedConfig);
    }

    // 2. Try generic key-value store if present
    const { data: rowKey } = await supabaseAdmin
      .from('site_settings')
      .select('value')
      .eq('key', 'homepage_config')
      .maybeSingle();

    if (rowKey?.value) {
      const cfg = typeof rowKey.value === 'string' ? JSON.parse(rowKey.value) : rowKey.value;
      cachedConfig = { ...cachedConfig, ...cfg };
      return NextResponse.json(cachedConfig);
    }

    // Return cached in-memory / initial config
    return NextResponse.json(cachedConfig);
  } catch (err: any) {
    return NextResponse.json(cachedConfig);
  }
}

export async function POST(req: Request) {
  try {
    const body: HomepageConfig = await req.json();

    // Instantly update server in-memory cache so website reflects changes without delay
    cachedConfig = { ...body };

    // Also persist to Supabase site_settings table
    try {
      await supabaseAdmin
        .from('site_settings')
        .update({
          homepage_config: body,
          updated_at: new Date().toISOString()
        })
        .eq('id', 1);
    } catch (dbErr) {
      console.warn('Could not update site_settings id=1:', dbErr);
    }

    return NextResponse.json({ success: true, config: cachedConfig });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
