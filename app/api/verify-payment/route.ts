import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { createClient } from '@/utils/supabase/server';

export async function POST(req: Request) {
  try {
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature,
      customer_name,
      customer_phone,
      shipping_address,
      pincode,
      gstin,
      cart,
      subtotal,
      gstAmount,
      finalTotal,
      discount 
    } = await req.json();

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const sign = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(sign.toString())
      .digest('hex');

    if (expectedSignature === razorpay_signature) {
      // Payment Verified! Now create the order in Supabase
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
          subtotal: subtotal || 0,
          discount_amount: discount || 0,
          gst_amount: gstAmount || 0,
          shipping_fee: 0,
          total_amount: finalTotal || 0,
          status: 'Confirmed',
          payment_status: 'Paid',
          internal_notes: `Razorpay Payment ID: ${razorpay_payment_id}`
        })
        .select('id, order_number')
        .single();

      if (orderError || !order) {
        console.error('Error creating order in Supabase:', orderError);
        return NextResponse.json({ success: false, error: 'Payment verified but order creation failed' }, { status: 500 });
      }

      // Insert Order Items
      if (cart && Array.isArray(cart)) {
        const orderItems = cart.map((item: any) => ({
          order_id: order.id,
          product_id: item.id,
          product_name: item.title,
          quantity: item.qty,
          unit_price: item.price,
          total_price: item.price * item.qty,
          variant_details: { size: item.size, logo: item.logo }
        }));

        await supabase.from('order_items').insert(orderItems);
      }

      return NextResponse.json({ 
        success: true, 
        message: 'Payment verified and order created successfully',
        orderId: order.id,
        orderNumber: order.order_number
      });
    } else {
      return NextResponse.json({ success: false, error: 'Invalid signature sent!' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error verifying payment:', error);
    return NextResponse.json({ error: 'Verification failed' }, { status: 500 });
  }
}
