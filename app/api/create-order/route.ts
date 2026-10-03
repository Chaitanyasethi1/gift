import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(req: Request) {
  try {
    const { amount, currency = 'INR', receipt = 'receipt_1' } = await req.json();

    if (!amount || amount < 100) {
      return NextResponse.json({ error: 'Amount must be at least 100 paise' }, { status: 400 });
    }

    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!
    });

    const options = {
      amount, // amount in smallest currency unit
      currency,
      receipt
    };

    const order = await instance.orders.create(options);

    if (!order) {
      return NextResponse.json({ error: 'Some error occurred' }, { status: 500 });
    }

    return NextResponse.json(order);
  } catch (error: any) {
    console.error('Error in create-order API:', error);
    const errMessage = error?.error?.description || error.message || 'Failed to create order';
    return NextResponse.json({ error: errMessage }, { status: 500 });
  }
}
