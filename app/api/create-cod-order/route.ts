import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { validateCouponForCart, recordCouponUsage } from '@/lib/coupons';
import { deductStockForOrder, extractProductUuid } from '@/lib/inventory';

export async function POST(req: Request) {
  try {
    const { 
      customer_name,
      customer_phone,
      shipping_address,
      pincode,
      gstin,
      cart,
      subtotal: rawSubtotal,
      gstAmount: rawGstAmount,
      finalTotal: rawFinalTotal,
      discount: rawDiscount,
      coupon_code: rawCouponCode
    } = await req.json();

    if (!customer_name || !customer_phone || !shipping_address || !pincode) {
      return NextResponse.json({ error: 'Please fill all required delivery details.' }, { status: 400 });
    }

    if (!Array.isArray(cart) || cart.length === 0) {
      return NextResponse.json({ error: 'Cart is empty.' }, { status: 400 });
    }

    const couponCode = rawCouponCode ? String(rawCouponCode).trim().toUpperCase() : null;

    let serverSubtotal = Number(rawSubtotal || 0);
    let serverDiscount = 0;
    let serverGstAmount = Number(rawGstAmount || 0);
    let serverFinalTotal = Number(rawFinalTotal || 0);
    let itemDiscounts: Record<string, number> = {};

    // Server-side recalculation & coupon verification to prevent tampering
    if (couponCode) {
      const validation = await validateCouponForCart(couponCode, cart, customer_phone);
      if (!validation.isValid) {
        return NextResponse.json({
          error: validation.errorMessage || 'The applied coupon is invalid or conditions are no longer met.'
        }, { status: 400 });
      }

      serverSubtotal = validation.subtotal;
      serverDiscount = validation.discountTotal;
      serverGstAmount = validation.gstAmount;
      serverFinalTotal = validation.finalTotal;
      itemDiscounts = validation.itemDiscounts;
    } else {
      // Recalculate without coupon
      serverSubtotal = cart.reduce((acc: number, item: any) => acc + (Number(item.price) * Number(item.qty)), 0);
      serverDiscount = 0;
      serverGstAmount = cart.reduce((acc: number, item: any) => {
        const line = Number(item.price) * Number(item.qty);
        const rate = Number(item.gstRate ?? 18);
        return acc + (line * (rate / 100));
      }, 0);
      serverFinalTotal = Math.max(0, serverSubtotal + serverGstAmount);
    }

    // Server-side COD threshold check (Max ₹999)
    if (serverFinalTotal > 999) {
      return NextResponse.json({ 
        error: 'Cash on Delivery is not available for orders above ₹999. Please choose Online Payment.' 
      }, { status: 400 });
    }

    const supabase = createClient();
    const orderNumber = `ORD-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert({
        order_number: orderNumber,
        customer_name: customer_name || 'Guest',
        customer_phone: customer_phone || '',
        shipping_address: { address: shipping_address, pincode: pincode },
        gst_number: gstin || null,
        subtotal: serverSubtotal,
        discount_amount: serverDiscount,
        coupon_code: couponCode,
        gst_amount: serverGstAmount,
        shipping_fee: 0,
        total_amount: serverFinalTotal,
        status: 'Pending',
        payment_status: 'Pending',
        internal_notes: `Payment Method: Cash On Delivery (COD - Max ₹999)${couponCode ? ` | Coupon: ${couponCode} (-₹${serverDiscount.toFixed(2)})` : ''}`
      })
      .select('id, order_number')
      .single();

    if (orderError || !order) {
      console.error('Error creating COD order in Supabase:', orderError);
      return NextResponse.json({ success: false, error: 'Failed to create order: ' + orderError?.message }, { status: 500 });
    }

    // Insert Order Items with item-level discount annotations
    const orderItems = cart.map((item: any) => {
      const itDiscount = itemDiscounts[item.id] || 0;
      return {
        order_id: order.id,
        product_id: extractProductUuid(item),
        product_name: item.title,
        quantity: item.qty,
        unit_price: item.price,
        total_price: Math.max(0, (item.price * item.qty) - itDiscount),
        variant_details: { 
          size: item.size || item.dimensions, 
          logo: item.logo, 
          gstRate: item.gstRate,
          piecesPerPack: Number(item.piecesPerPack || (item.title?.match(/Pack\s+of\s+(\d+)/i)?.[1] ? parseInt(item.title.match(/Pack\s+of\s+(\d+)/i)[1], 10) : 1)),
          discount_amount: itDiscount,
          coupon_applied: itDiscount > 0 ? (couponCode || true) : false
        }
      };
    });

    await supabase.from('order_items').insert(orderItems);

    // Automatically deduct product stock
    try {
      await deductStockForOrder(cart);
    } catch (invErr) {
      console.error('[Inventory] Error deducting stock on COD order:', invErr);
    }

    // Record coupon usage in persistent storage
    if (couponCode) {
      await recordCouponUsage(couponCode, order.order_number, customer_phone);
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Cash On Delivery order placed successfully!',
      orderId: order.id,
      orderNumber: order.order_number,
      coupon_code: couponCode,
      discount_amount: serverDiscount,
      total_amount: serverFinalTotal
    });
  } catch (error: any) {
    console.error('Error processing COD order:', error);
    return NextResponse.json({ error: error.message || 'COD order failed' }, { status: 500 });
  }
}
