/**
 * AS PRINT GALLERY — Enterprise E-Commerce & Logistics API Server
 * Node.js & Express REST Backend
 * Direct Factory Manufacturing Unit • Loni, Ghaziabad (U.P) - 201102
 * GSTIN: 09AWKPN5910E1ZG
 */

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets from standard directories
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname)));

// Mock Database of Products
const PRODUCTS = [
  {
    id: 'prod-1',
    title: '3-Ply Corrugated Shipping Boxes',
    category: 'corrugated',
    categoryLabel: 'Corrugated Boxes',
    image: 'assets/corrugated_box.jpg',
    price: 6.80,
    moq: 100,
    badge: 'BESTSELLER',
    badgeClass: 'bestseller',
    rating: 4.9,
    reviews: 428,
    specs: ['18-24 BF Kraft', 'Flute B/C', '100% Recyclable'],
    desc: 'High-bursting strength 3-ply brown corrugated cardboard shipping boxes for Amazon, Flipkart, eCommerce, and retail logistics dispatch.',
    tiers: [
      { qty: 100, rate: 8.50 },
      { qty: 500, rate: 7.20 },
      { qty: 1000, rate: 6.80 },
      { qty: 5000, rate: 5.40 }
    ]
  },
  {
    id: 'prod-2',
    title: '5-Ply Heavy-Duty Master Cartons',
    category: 'corrugated',
    categoryLabel: 'Corrugated Boxes',
    image: 'assets/boxes.jpg',
    price: 14.20,
    moq: 100,
    badge: 'HEAVY DUTY',
    badgeClass: 'heavy',
    rating: 4.95,
    reviews: 310,
    specs: ['24-28 BF High Burst', 'Double Wall AB Flute', '50kg+ Load'],
    desc: 'Double-wall 5-ply corrugated carton boxes engineered for heavy industrial goods, fragile electronics, automotive parts, and palletized bulk freight exports.',
    tiers: [
      { qty: 100, rate: 16.50 },
      { qty: 500, rate: 15.00 },
      { qty: 1000, rate: 14.20 },
      { qty: 5000, rate: 12.80 }
    ]
  },
  {
    id: 'prod-3',
    title: 'Custom Printed Pizza Packaging Boxes',
    category: 'food',
    categoryLabel: 'Food Packaging',
    image: 'assets/pizza_box.jpg',
    price: 4.80,
    moq: 200,
    badge: 'FOOD GRADE',
    badgeClass: 'eco',
    rating: 4.85,
    reviews: 580,
    specs: ['Food Grade Kraft', 'Steam Vent Holes', 'Custom Multi-Color Print'],
    desc: 'Oil & grease resistant corrugated pizza boxes with steam-release vents. Custom printed in 7", 8", 10", 12", and 14" sizes for cloud kitchens and pizzeria chains.',
    tiers: [
      { qty: 200, rate: 5.80 },
      { qty: 1000, rate: 5.10 },
      { qty: 3000, rate: 4.80 },
      { qty: 10000, rate: 3.90 }
    ]
  },
  {
    id: 'prod-4',
    title: 'Luxury Apparel & Shirt Packaging Boxes',
    category: 'packaging',
    categoryLabel: 'Apparel Packaging',
    image: 'assets/box_making.jpg',
    price: 18.50,
    moq: 150,
    badge: 'LUXURY FINISH',
    badgeClass: 'hot',
    rating: 4.9,
    reviews: 215,
    specs: ['Duplex Rigid Board', 'Matte Lamination', 'Magnetic / Ribbon Flap'],
    desc: 'Premium rigid cardboard and folding presentation boxes for boutique garment retail, shirts, sarees, lehengas, and corporate gifting.',
    tiers: [
      { qty: 150, rate: 22.00 },
      { qty: 500, rate: 19.50 },
      { qty: 1000, rate: 18.50 },
      { qty: 5000, rate: 16.00 }
    ]
  },
  {
    id: 'prod-5',
    title: 'High-Density Damask Woven Neck Labels',
    category: 'label',
    categoryLabel: 'Garment Trims',
    image: 'assets/woven_label.jpg',
    price: 0.42,
    moq: 1000,
    badge: 'OEKO-TEX CERTIFIED',
    badgeClass: 'eco',
    rating: 4.98,
    reviews: 620,
    specs: ['Ultrasonic Cut Edge', 'High-Density Damask', 'Zero Neck Itch'],
    desc: 'Super-soft high-density damask woven brand labels with ultrasonic sealed edges that will not scratch or fray. End-fold, center-fold, or miter-fold.',
    tiers: [
      { qty: 1000, rate: 0.65 },
      { qty: 5000, rate: 0.48 },
      { qty: 10000, rate: 0.42 },
      { qty: 50000, rate: 0.32 }
    ]
  },
  {
    id: 'prod-6',
    title: 'Satin & Cotton Wash-Care Labels',
    category: 'label',
    categoryLabel: 'Garment Trims',
    image: 'assets/printed_label.jpg',
    price: 0.28,
    moq: 1000,
    badge: 'HIGH FASTNESS',
    badgeClass: 'bestseller',
    rating: 4.88,
    reviews: 390,
    specs: ['Wash Fast Ink', 'Silk Satin / Pure Cotton', 'Multi-Language Symbols'],
    desc: 'Permanent-ink printed wash care labels and size tags. Resists 50+ commercial laundry washes without fading. Meets global export apparel compliance.',
    tiers: [
      { qty: 1000, rate: 0.40 },
      { qty: 5000, rate: 0.32 },
      { qty: 10000, rate: 0.28 },
      { qty: 50000, rate: 0.22 }
    ]
  },
  {
    id: 'prod-7',
    title: 'Embossed Brand Hang Tags & Tickets',
    category: 'label',
    categoryLabel: 'Garment Trims',
    image: 'assets/hang_tag.jpg',
    price: 0.85,
    moq: 500,
    badge: 'PREMIUM ARTBOARD',
    badgeClass: 'hot',
    rating: 4.92,
    reviews: 440,
    specs: ['350-450 GSM Art Board', 'Gold / Silver Foil Stamping', 'Eyelet & String Attached'],
    desc: 'Heavyweight brand price tags with metallic hot-foil stamping, raised spot UV, blind embossing, and eyelet cords for clothing, footwear, and accessories.',
    tiers: [
      { qty: 500, rate: 1.25 },
      { qty: 2000, rate: 0.95 },
      { qty: 5000, rate: 0.85 },
      { qty: 20000, rate: 0.65 }
    ]
  },
  {
    id: 'prod-8',
    title: 'Die-Cut Gumming Stickers & Product Labels',
    category: 'sticker',
    categoryLabel: 'Stickers & Decals',
    image: 'assets/stickers.jpg',
    price: 0.35,
    moq: 1000,
    badge: 'WATERPROOF OPTION',
    badgeClass: 'bestseller',
    rating: 4.87,
    reviews: 512,
    specs: ['Chromo Gumming / Vinyl', 'Gloss or Matte UV Coat', 'Precision Kiss-Cut Sheets'],
    desc: 'Self-adhesive chromo and PVC vinyl die-cut stickers for jars, cosmetics, cartons, bottles, and food packaging. High-tack permanent adhesive.',
    tiers: [
      { qty: 1000, rate: 0.55 },
      { qty: 5000, rate: 0.42 },
      { qty: 10000, rate: 0.35 },
      { qty: 50000, rate: 0.26 }
    ]
  }
];

// REST API Endpoints

// 1. Get all products
app.get('/api/products', (req, res) => {
  const { category } = req.query;
  if (category && category !== 'all') {
    return res.json({
      success: true,
      count: PRODUCTS.filter(p => p.category === category).length,
      data: PRODUCTS.filter(p => p.category === category)
    });
  }
  res.json({ success: true, count: PRODUCTS.length, data: PRODUCTS });
});

// 2. Get single product by ID
app.get('/api/products/:id', (req, res) => {
  const prod = PRODUCTS.find(p => p.id === req.params.id);
  if (!prod) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }
  res.json({ success: true, data: prod });
});

// 3. Live 3D Box Cost Calculator Algorithm
app.post('/api/calculate-box', (req, res) => {
  const { length = 10, width = 8, height = 6, ply = 3, qty = 500, printing = '1-color' } = req.body;
  
  const l = parseFloat(length) || 10;
  const w = parseFloat(width) || 8;
  const h = parseFloat(height) || 6;
  const q = parseInt(qty) || 500;
  const p = parseInt(ply) || 3;

  // Box sheet area in square inches (RSC Standard Layout formula)
  const sheetLength = (2 * l) + (2 * w) + 2; // +2 inch glue flap
  const sheetWidth = w + h + 1; // top & bottom flaps
  const totalAreaSqInches = sheetLength * sheetWidth;

  // Base rate per square inch in INR
  let ratePerSqInch = 0.0095;
  if (p === 5) ratePerSqInch = 0.0165;
  if (p === 7) ratePerSqInch = 0.0245;

  let unitBasePrice = totalAreaSqInches * ratePerSqInch;

  // Print multiplier
  if (printing === '2-color') unitBasePrice += 0.85;
  if (printing === 'multi-color') unitBasePrice += 1.80;

  // Volume discount tiers
  let discount = 0;
  if (q >= 500 && q < 1000) discount = 0.08;
  else if (q >= 1000 && q < 5000) discount = 0.15;
  else if (q >= 5000) discount = 0.25;

  const finalUnitPrice = Math.max(3.50, unitBasePrice * (1 - discount));
  const subtotal = finalUnitPrice * q;
  const gst = subtotal * 0.18;
  const grandTotal = subtotal + gst;

  res.json({
    success: true,
    dimensions: { length: l, width: w, height: h, unit: 'inches' },
    ply: `${p}-Ply`,
    sheetAreaSqInches: totalAreaSqInches.toFixed(1),
    unitPrice: parseFloat(finalUnitPrice.toFixed(2)),
    quantity: q,
    subtotal: parseFloat(subtotal.toFixed(2)),
    gst18: parseFloat(gst.toFixed(2)),
    grandTotal: parseFloat(grandTotal.toFixed(2)),
    discountPct: (discount * 100) + '%'
  });
});

// 4. Logistics Live Tracking API
app.get('/api/track/:orderId', (req, res) => {
  const { orderId } = req.params;
  const formattedId = orderId.toUpperCase().startsWith('AS-') ? orderId.toUpperCase() : `AS-${orderId}`;
  
  res.json({
    success: true,
    orderId: formattedId,
    carrier: 'BlueDart Express Surface',
    awb: `BLUEDART-${Math.floor(1000000 + Math.random() * 9000000)}`,
    currentStatus: 'In Transit • Moving to Destination Hub',
    origin: 'Loni Industrial Area, Ghaziabad (U.P) - 201102',
    destination: 'Customer Delivery Address',
    estimatedDelivery: 'Within 24-48 Hours',
    milestones: [
      { step: 1, title: 'Order Confirmed', date: 'Day 1 • 10:30 AM', completed: true },
      { step: 2, title: 'Pre-Press Proof Approved', date: 'Day 1 • 02:15 PM', completed: true },
      { step: 3, title: 'Corrugation & Die-Cutting Rerun', date: 'Day 2 • 09:00 AM', completed: true },
      { step: 4, title: 'Shrink-Wrapped & In Transit', date: 'Day 2 • 06:40 PM', completed: true },
      { step: 5, title: 'Out for Doorstep Delivery', date: 'Pending', completed: false }
    ]
  });
});

// 5. Pincode Serviceability Check API
app.post('/api/check-pincode', (req, res) => {
  const { pincode } = req.body;
  if (!pincode || pincode.length !== 6 || isNaN(pincode)) {
    return res.status(400).json({ success: false, message: 'Please provide a valid 6-digit Indian Pincode' });
  }

  const pin = parseInt(pincode);
  let zone = 'National Surface (2-4 Days)';
  let speed = 'Standard Express';
  let codAvailable = true;

  if (pin >= 110001 && pin <= 110099) {
    zone = 'Delhi Metro (Same-Day / Next-Day Delivery)';
    speed = 'Priority Local Dispatch';
  } else if (pin >= 201001 && pin <= 201310) {
    zone = 'Ghaziabad & Noida Factory Zone (Same-Day Direct Delivery)';
    speed = 'Factory Doorstep Van';
  } else if (pin >= 122001 && pin <= 122505) {
    zone = 'Gurgaon Industrial Zone (Next-Day Courier)';
    speed = 'NCR Express';
  }

  res.json({
    success: true,
    pincode: pincode,
    serviceable: true,
    deliveryZone: zone,
    speed: speed,
    codAvailable: codAvailable,
    carrierPartners: ['BlueDart', 'Delhivery', 'DTDC']
  });
});

// 6. Direct Order Submission Endpoint
app.post('/api/orders', (req, res) => {
  const orderId = `AS-${Math.floor(100000 + Math.random() * 900000)}`;
  const orderPayload = {
    orderId,
    timestamp: new Date().toISOString(),
    status: 'Received by Factory',
    ...req.body
  };
  
  res.json({
    success: true,
    message: 'Wholesale order logged into factory production queue',
    orderId,
    data: orderPayload
  });
});

// Fallback to static HTML files or index.html for SPA-style routes
app.use((req, res) => {
  const requestedPath = path.join(__dirname, req.path);
  if (req.path.endsWith('.html') && require('fs').existsSync(requestedPath)) {
    return res.sendFile(requestedPath);
  }
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server if invoked directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🏭 AS PRINT GALLERY Enterprise Server running at http://localhost:${PORT}`);
    console.log(`📦 REST API Endpoints active: /api/products, /api/calculate-box, /api/track/:id, /api/check-pincode`);
  });
}

module.exports = app;
