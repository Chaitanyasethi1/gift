const Razorpay = require('razorpay');

async function test() {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const order = await instance.orders.create({
      amount: 100,
      currency: 'INR',
      receipt: 'receipt_123'
    });

    console.log('Order created successfully:', order);
  } catch (err) {
    console.error('Error creating order:', err);
  }
}
test();
