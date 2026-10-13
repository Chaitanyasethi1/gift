import { NextResponse } from 'next/server';
import { validateCouponForCart, CartItemLike } from '@/lib/coupons';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { code, cart, customerPhone } = body;

    if (!code || typeof code !== 'string') {
      return NextResponse.json({
        valid: false,
        error: 'Please provide a coupon code.'
      }, { status: 400 });
    }

    if (!Array.isArray(cart) || cart.length === 0) {
      return NextResponse.json({
        valid: false,
        error: 'Your cart is empty. Add items to apply a coupon.'
      }, { status: 400 });
    }

    const result = await validateCouponForCart(code, cart as CartItemLike[], customerPhone);

    if (!result.isValid) {
      return NextResponse.json({
        valid: false,
        error: result.errorMessage || 'Invalid coupon code.'
      }, { status: 200 });
    }

    return NextResponse.json({
      valid: true,
      coupon: {
        code: result.coupon?.code,
        discount_type: result.coupon?.discount_type,
        discount_value: result.coupon?.discount_value,
        max_discount_cap: result.coupon?.max_discount_cap,
        applies_to: result.coupon?.applies_to,
        banner_text: result.coupon?.banner_text
      },
      discountTotal: result.discountTotal,
      subtotal: result.subtotal,
      discountedSubtotal: result.discountedSubtotal,
      eligibleItemIds: result.eligibleItemIds,
      itemDiscounts: result.itemDiscounts,
      gstAmount: result.gstAmount,
      finalTotal: result.finalTotal
    });
  } catch (error: any) {
    console.error('Coupon validation error:', error);
    return NextResponse.json({
      valid: false,
      error: error.message || 'Error validating coupon.'
    }, { status: 500 });
  }
}
