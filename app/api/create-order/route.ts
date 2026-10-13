import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { validateCouponForCart } from '@/lib/coupons';

export async function POST(req: Request) {
  try {
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return NextResponse.json(
        { error: 'Razorpay credentials not configured on server' },
        { status: 401 }
      );
    }

    const body = await req.json();
    let amount = Number(body?.amount);
    const currency = body?.currency || 'INR';
    const receipt = body?.receipt || `rcpt_${Date.now()}`;
    const couponCode = body?.coupon_code ? String(body.coupon_code).trim().toUpperCase() : null;
    const cart = Array.isArray(body?.cart) ? body.cart : null;

    // Server-side verification and recalculation if cart is provided
    if (cart && cart.length > 0) {
      if (couponCode) {
        const validation = await validateCouponForCart(couponCode, cart, body?.customer_phone);
        if (validation.isValid) {
          amount = Math.round(validation.finalTotal * 100);
        } else {
          // If coupon was provided but invalid/expired, reject to prevent mismatched payments
          return NextResponse.json(
            { error: validation.errorMessage || 'The applied coupon is invalid or no longer applicable.' },
            { status: 400 }
          );
        }
      } else {
        // Standard cart recalculation
        const subtotal = cart.reduce((acc: number, item: any) => acc + (Number(item.price) * Number(item.qty)), 0);
        const gst = cart.reduce((acc: number, item: any) => {
          const line = Number(item.price) * Number(item.qty);
          const rate = Number(item.gstRate ?? 18);
          return acc + (line * (rate / 100));
        }, 0);
        const serverTotalPaise = Math.round((subtotal + gst) * 100);
        if (serverTotalPaise > 0) {
          amount = serverTotalPaise;
        }
      }
    }

    // Minimum amount validation: 100 paise (₹1.00)
    if (!amount || isNaN(amount) || amount < 100) {
      return NextResponse.json(
        { error: 'Amount must be at least 100 paise (₹1.00)' },
        { status: 400 }
      );
    }

    const instance = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });

    const options = {
      amount: Math.round(amount),
      currency,
      receipt,
    };

    const order = await instance.orders.create(options);

    if (!order || !order.id) {
      return NextResponse.json(
        { error: 'Failed to create Razorpay order' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      order_id: order.id,
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      receipt: order.receipt,
      status: order.status,
      key_id: keyId,
    });
  } catch (error: any) {
    console.error('Error in create-order API:', error);
    const statusCode = error?.statusCode || 500;
    const errMessage = error?.error?.description || error?.message || 'Failed to create Razorpay order';
    return NextResponse.json({ error: errMessage }, { status: statusCode });
  }
}
