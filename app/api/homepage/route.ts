import { NextResponse } from 'next/server';
import { initialHomepageConfig, HomepageConfig } from '@/data/homepageData';
import { supabase as supabaseAdmin } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from('site_settings')
      .select('value')
      .eq('key', 'homepage_config')
      .single();

    if (error || !data?.value) {
      return NextResponse.json(initialHomepageConfig);
    }

    const config: HomepageConfig = typeof data.value === 'string' ? JSON.parse(data.value) : data.value;
    return NextResponse.json(config);
  } catch (err: any) {
    return NextResponse.json(initialHomepageConfig);
  }
}

export async function POST(req: Request) {
  try {
    const body: HomepageConfig = await req.json();

    const { error } = await supabaseAdmin
      .from('site_settings')
      .upsert({
        key: 'homepage_config',
        value: body,
        updated_at: new Date().toISOString()
      }, { onConflict: 'key' });

    if (error) {
      // If table does not exist or fails, return success with body so local/admin state works
      console.error('Supabase site_settings upsert error:', error);
      return NextResponse.json({ success: true, config: body, warning: error.message });
    }

    return NextResponse.json({ success: true, config: body });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
