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
    const coupons = await getAllCoupons();
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

    const all = await getAllCoupons();
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
      id: 'coupon-' + Date.now(),
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
    const id = body.id;
    if (!id) {
      return NextResponse.json({ success: false, error: 'Coupon ID is required.' }, { status: 400 });
    }

    const rawCode = body.code ? normalizeCouponCode(body.code) : '';
    if (!rawCode) {
      return NextResponse.json({ success: false, error: 'Coupon code is required.' }, { status: 400 });
    }

    const all = await getAllCoupons();
    const index = all.findIndex(c => c.id === id);

    if (index === -1) {
      return NextResponse.json({ success: false, error: 'Coupon not found.' }, { status: 404 });
    }

    // Check code uniqueness across other coupons
    const conflict = all.find(c => c.id !== id && normalizeCouponCode(c.code) === rawCode);
    if (conflict) {
      return NextResponse.json({ 
        success: false, 
        error: `Coupon code "${rawCode}" is already in use by another coupon.` 
      }, { status: 400 });
    }

    const discountValue = Number(body.discount_value);
    if (isNaN(discountValue) || discountValue <= 0) {
      return NextResponse.json({ success: false, error: 'Please enter a valid discount value greater than 0.' }, { status: 400 });
    }

    const updatedCoupon: CouponRule = {
      ...all[index],
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
      per_user_limit: body.per_user_limit ? Number(body.per_user_limit) : null,
      show_in_banner: !!body.show_in_banner,
      banner_text: body.banner_text || null,
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

    if (!id) {
      return NextResponse.json({ success: false, error: 'Coupon ID is required.' }, { status: 400 });
    }

    const all = await getAllCoupons();
    const filtered = all.filter(c => c.id !== id);

    if (filtered.length === all.length) {
      return NextResponse.json({ success: false, error: 'Coupon not found.' }, { status: 404 });
    }

    await persistCoupons(filtered);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error deleting coupon:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
