import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const envContent = fs.readFileSync('.env.local', 'utf-8');
const envVars = Object.fromEntries(envContent.split('\n').filter(Boolean).map(line => {
  const i = line.indexOf('=');
  return [line.slice(0, i), line.slice(i + 1)];
}));

const supabaseUrl = envVars['NEXT_PUBLIC_SUPABASE_URL']?.trim()?.replace(/["']/g, '');
const supabaseKey = envVars['SUPABASE_SERVICE_ROLE_KEY']?.trim()?.replace(/["']/g, '') || envVars['NEXT_PUBLIC_SUPABASE_ANON_KEY']?.trim()?.replace(/["']/g, '');
const supabase = createClient(supabaseUrl, supabaseKey);

const products = [
  { slug: '3-ply-corrugated-shipping-boxes', title: '3-Ply Corrugated Shipping Boxes', category: 'packaging-boxes', image: '/assets/corrugated_box.jpg', price: 1, stock: 1000 },
  { slug: '5-ply-heavy-duty-master-cartons', title: '5-Ply Heavy-Duty Master Cartons', category: 'packaging-boxes', image: '/assets/boxes.jpg', price: 1, stock: 1000 },
  { slug: 'custom-printed-pizza-boxes', title: 'Custom Printed Pizza Packaging Boxes', category: 'packaging-boxes', image: '/assets/pizza_box.jpg', price: 1, stock: 1000 },
  { slug: 'luxury-sweet-boxes', title: 'Luxury Sweet & Confectionery Boxes', category: 'packaging-boxes', image: '/assets/sweet_box.jpg', price: 1, stock: 1000 },
  { slug: 'garment-apparel-boxes', title: 'Garment & Apparel Packaging Boxes', category: 'packaging-boxes', image: '/assets/factory_hero.jpg', price: 1, stock: 1000 },
  { slug: 'kraft-paper-carry-bags', title: 'Eco-Friendly Kraft Paper Carry Bags', category: 'paper-bags', image: '/assets/bags.jpg', price: 1, stock: 5000 },
  { slug: 'paper-courier-mailers', title: 'Tamper-Evident Paper Envelopes & Mailers', category: 'paper-bags', image: '/assets/paper_envelope.jpg', price: 1, stock: 5000 },
  { slug: 'woven-damask-labels', title: 'High-Density Woven Garment Labels', category: 'labels-tags', image: '/assets/woven_label.jpg', price: 1, stock: 10000 },
  { slug: 'satin-wash-care-labels', title: 'Printed Satin & Cotton Wash-Care Labels', category: 'labels-tags', image: '/assets/labels.jpg', price: 1, stock: 10000 },
  { slug: 'brand-hang-tags', title: 'Custom Brand Hang Tags & Swing Tickets', category: 'labels-tags', image: '/assets/tags.jpg', price: 1, stock: 10000 },
  { slug: 'chromo-gumming-stickers', title: 'Custom Die-Cut Gumming Paper Stickers', category: 'stickers', image: '/assets/gumming.jpg', price: 1, stock: 10000 },
  { slug: 'waterproof-vinyl-stickers', title: 'Waterproof Vinyl & Branding Stickers', category: 'stickers', image: '/assets/stickers.jpg', price: 1, stock: 10000 },
  { slug: 'barcode-thermal-roll-labels', title: 'Industrial Barcode & Thermal Roll Labels', category: 'stickers', image: '/assets/barcode_sticker.jpg', price: 1, stock: 10000 },
  { slug: 'bottle-jar-packaging-labels', title: 'Custom Bottle & Jar Packaging Labels', category: 'labels-tags', image: '/assets/bottle_label.jpg', price: 1, stock: 10000 },
  { slug: 'tagless-heat-transfer-labels', title: 'Tagless Heat Transfer Garment Labels', category: 'labels-tags', image: '/assets/heat_transfer.jpg', price: 1, stock: 10000 }
];

async function migrate() {
  console.log("Migrating products to Supabase...");
  const { data: categories } = await supabase.from('categories').select('*');
  const catMap = {};
  if (categories) {
    categories.forEach(c => catMap[c.slug] = c.id);
  }

  for (const p of products) {
    const category_id = catMap[p.category] || null;
    const { error } = await supabase.from('products').upsert({
      name: p.title,
      slug: p.slug,
      category_id: category_id,
      mrp: p.price * 2,
      selling_price: p.price,
      stock_quantity: p.stock,
      images: [p.image],
      is_active: true
    }, { onConflict: 'slug' });
    if (error) console.error("Error with", p.slug, error.message);
    else console.log("Added", p.title);
  }
  console.log("Done");
}

migrate();
