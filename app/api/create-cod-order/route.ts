import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export async function POST(req: Request) {
  try {
    const { 
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

    if (!customer_name || !customer_phone || !shipping_address || !pincode) {
      return NextResponse.json({ error: 'Please fill all required delivery details.' }, { status: 400 });
    }

    // Server-side COD threshold check
    if (finalTotal > 999) {
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
        subtotal: subtotal || 0,
        discount_amount: discount || 0,
        gst_amount: gstAmount || 0,
        shipping_fee: 0,
        total_amount: finalTotal || 0,
        status: 'Pending',
        payment_status: 'Pending (Cash On Delivery)',
        internal_notes: 'Payment Method: Cash On Delivery (COD - Max ₹999)'
      })
      .select('id, order_number')
      .single();

    if (orderError || !order) {
      console.error('Error creating COD order in Supabase:', orderError);
      return NextResponse.json({ success: false, error: 'Failed to create order: ' + orderError?.message }, { status: 500 });
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
        variant_details: { size: item.size, logo: item.logo, gstRate: item.gstRate }
      }));

      await supabase.from('order_items').insert(orderItems);
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Cash On Delivery order placed successfully!',
      orderId: order.id,
      orderNumber: order.order_number
    });
  } catch (error: any) {
    console.error('Error processing COD order:', error);
    return NextResponse.json({ error: error.message || 'COD order failed' }, { status: 500 });
  }
}
