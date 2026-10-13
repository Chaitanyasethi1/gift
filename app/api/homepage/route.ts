import { NextResponse } from 'next/server';
import { initialHomepageConfig, HomepageConfig } from '@/data/homepageData';
import { supabase as supabaseAdmin } from '@/lib/supabase';
import { getActiveBannerCoupon } from '@/lib/coupons';

export const dynamic = 'force-dynamic';

// In-memory cache for fast instant reflection across server sessions
let cachedConfig: HomepageConfig = { ...initialHomepageConfig };

export async function GET() {
  try {
    let resolvedConfig = { ...cachedConfig };

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
      resolvedConfig = { ...resolvedConfig, ...cfg };
    } else {
      const { data: rowKey } = await supabaseAdmin
        .from('site_settings')
        .select('value')
        .eq('key', 'homepage_config')
        .maybeSingle();

      if (rowKey?.value) {
        const cfg = typeof rowKey.value === 'string' ? JSON.parse(rowKey.value) : rowKey.value;
        resolvedConfig = { ...resolvedConfig, ...cfg };
      }
    }

    // 2. Dynamic Coupon Banner Integration (Requirement 7)
    // The sale banner at the top reads its text from the active coupon (with show_in_banner: true).
    // Changing or disabling the coupon in admin updates or removes the banner automatically.
    try {
      const bannerCoupon = await getActiveBannerCoupon();
      if (bannerCoupon && bannerCoupon.banner_text) {
        resolvedConfig.tickerText = bannerCoupon.banner_text;
        resolvedConfig.tickerActive = true;
      } else {
        // If coupons are configured in homepage_config but none is active with show_in_banner:
        const storedCoupons = (resolvedConfig as any).coupons;
        if (Array.isArray(storedCoupons) && storedCoupons.length > 0) {
          // A coupon previously set the banner, but now no coupon is active for banner
          const anyActiveCouponBanner = storedCoupons.some((c: any) => c.is_active && c.show_in_banner);
          if (!anyActiveCouponBanner) {
            resolvedConfig.tickerActive = false;
          }
        }
      }
    } catch (couponErr) {
      console.warn('Could not check banner coupon:', couponErr);
    }

    cachedConfig = { ...resolvedConfig };
    return NextResponse.json(resolvedConfig);
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
