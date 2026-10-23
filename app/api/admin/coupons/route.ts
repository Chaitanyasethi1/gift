import { NextResponse } from 'next/server';
import { 
  getAllCoupons, 
  persistCoupons, 
  normalizeCouponCode, 
  CouponRule 
} from '@/lib/coupons';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const coupons = await getAllCoupons(true);
    return NextResponse.json({ success: true, coupons });
  } catch (error: any) {
    console.error('Error fetching admin coupons:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const rawCode = body.code ? normalizeCouponCode(body.code) : '';

    if (!rawCode) {
      return NextResponse.json({ success: false, error: 'Coupon code is required.' }, { status: 400 });
    }

    const all = await getAllCoupons(true);
    if (all.some(c => normalizeCouponCode(c.code) === rawCode)) {
      return NextResponse.json({ 
        success: false, 
        error: `Coupon code "${rawCode}" already exists. Please choose a unique code.` 
      }, { status: 400 });
    }

    const discountValue = Number(body.discount_value);
    if (isNaN(discountValue) || discountValue <= 0) {
      return NextResponse.json({ success: false, error: 'Please enter a valid discount value greater than 0.' }, { status: 400 });
    }

    const newCoupon: CouponRule = {
      id: body.id || 'coupon-' + Date.now(),
      code: rawCode,
      discount_type: body.discount_type === 'flat' ? 'flat' : 'percentage',
      discount_value: discountValue,
      max_discount_cap: body.max_discount_cap ? Number(body.max_discount_cap) : null,
      applies_to: ['all', 'categories', 'products'].includes(body.applies_to) ? body.applies_to : 'all',
      applied_category_ids: Array.isArray(body.applied_category_ids) ? body.applied_category_ids : [],
      applied_product_ids: Array.isArray(body.applied_product_ids) ? body.applied_product_ids : [],
      excluded_category_ids: Array.isArray(body.excluded_category_ids) ? body.excluded_category_ids : [],
      excluded_product_ids: Array.isArray(body.excluded_product_ids) ? body.excluded_product_ids : [],
      min_order_value: body.min_order_value ? Number(body.min_order_value) : null,
      start_date: body.start_date ? new Date(body.start_date).toISOString() : null,
      expiry_date: body.expiry_date ? new Date(body.expiry_date).toISOString() : null,
      is_active: body.is_active !== false,
      usage_limit: body.usage_limit ? Number(body.usage_limit) : null,
      usage_count: 0,
      per_user_limit: body.per_user_limit ? Number(body.per_user_limit) : null,
      show_in_banner: !!body.show_in_banner,
      banner_text: body.banner_text || null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    const updatedList = [newCoupon, ...all];
    await persistCoupons(updatedList);

    return NextResponse.json({ success: true, coupon: newCoupon });
  } catch (error: any) {
    console.error('Error creating coupon:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const id = body.id ? String(body.id) : '';
    const rawCode = body.code ? normalizeCouponCode(body.code) : '';

    if (!id && !rawCode) {
      return NextResponse.json({ success: false, error: 'Coupon ID or code is required.' }, { status: 400 });
    }

    const all = await getAllCoupons(true);
    const index = all.findIndex(c => 
      (id && String(c.id) === id) || 
      (rawCode && normalizeCouponCode(c.code) === rawCode)
    );

    if (index === -1) {
      return NextResponse.json({ success: false, error: 'Coupon not found.' }, { status: 404 });
    }

    const current = all[index];
    const targetCode = rawCode || normalizeCouponCode(current.code);

    // Check code uniqueness across other coupons
    const conflict = all.find(c => c.id !== current.id && normalizeCouponCode(c.code) === targetCode);
    if (conflict) {
      return NextResponse.json({ 
        success: false, 
        error: `Coupon code "${targetCode}" is already in use by another coupon.` 
      }, { status: 400 });
    }

    // Determine discount value (support partial toggle like is_active without discount_value)
    let discountValue = current.discount_value;
    if (body.discount_value !== undefined) {
      const parsed = Number(body.discount_value);
      if (isNaN(parsed) || parsed <= 0) {
        return NextResponse.json({ success: false, error: 'Please enter a valid discount value greater than 0.' }, { status: 400 });
      }
      discountValue = parsed;
    }

    const appliesTo = body.applies_to !== undefined
      ? (['all', 'categories', 'products'].includes(body.applies_to) ? body.applies_to : 'all')
      : current.applies_to;

    const updatedCoupon: CouponRule = {
      ...current,
      code: targetCode,
      discount_type: body.discount_type !== undefined ? (body.discount_type === 'flat' ? 'flat' : 'percentage') : current.discount_type,
      discount_value: discountValue,
      max_discount_cap: body.max_discount_cap !== undefined ? (body.max_discount_cap ? Number(body.max_discount_cap) : null) : current.max_discount_cap,
      applies_to: appliesTo,
      applied_category_ids: body.applied_category_ids !== undefined ? (Array.isArray(body.applied_category_ids) ? body.applied_category_ids : []) : current.applied_category_ids,
      applied_product_ids: body.applied_product_ids !== undefined ? (Array.isArray(body.applied_product_ids) ? body.applied_product_ids : []) : current.applied_product_ids,
      excluded_category_ids: body.excluded_category_ids !== undefined ? (Array.isArray(body.excluded_category_ids) ? body.excluded_category_ids : []) : current.excluded_category_ids,
      excluded_product_ids: body.excluded_product_ids !== undefined ? (Array.isArray(body.excluded_product_ids) ? body.excluded_product_ids : []) : current.excluded_product_ids,
      min_order_value: body.min_order_value !== undefined ? (body.min_order_value ? Number(body.min_order_value) : null) : current.min_order_value,
      start_date: body.start_date !== undefined ? (body.start_date ? new Date(body.start_date).toISOString() : null) : current.start_date,
      expiry_date: body.expiry_date !== undefined ? (body.expiry_date ? new Date(body.expiry_date).toISOString() : null) : current.expiry_date,
      is_active: body.is_active !== undefined ? !!body.is_active : current.is_active,
      usage_limit: body.usage_limit !== undefined ? (body.usage_limit ? Number(body.usage_limit) : null) : current.usage_limit,
      per_user_limit: body.per_user_limit !== undefined ? (body.per_user_limit ? Number(body.per_user_limit) : null) : current.per_user_limit,
      show_in_banner: body.show_in_banner !== undefined ? !!body.show_in_banner : current.show_in_banner,
      banner_text: body.banner_text !== undefined ? (body.banner_text || null) : current.banner_text,
      updated_at: new Date().toISOString()
    };

    all[index] = updatedCoupon;
    await persistCoupons(all);

    return NextResponse.json({ success: true, coupon: updatedCoupon });
  } catch (error: any) {
    console.error('Error updating coupon:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const code = searchParams.get('code');

    if (!id && !code) {
      return NextResponse.json({ success: false, error: 'Coupon ID or code is required.' }, { status: 400 });
    }

    const all = await getAllCoupons(true);
    const target = all.find(c => 
      (id && String(c.id) === id) || 
      (code && normalizeCouponCode(c.code) === normalizeCouponCode(code))
    );

    if (!target) {
      return NextResponse.json({ success: false, error: 'Coupon not found.' }, { status: 404 });
    }

    const filtered = all.filter(c => c.id !== target.id && normalizeCouponCode(c.code) !== normalizeCouponCode(target.code));
    await persistCoupons(filtered, target);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error deleting coupon:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
