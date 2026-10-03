-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. PROFILES (Roles: owner, staff)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('owner', 'staff')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. CATEGORIES
CREATE TABLE public.categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  parent_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
  image_url TEXT,
  sort_order INTEGER DEFAULT 0,
  show_in_menu BOOLEAN DEFAULT true,
  show_in_home BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. PRODUCTS
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  images TEXT[] DEFAULT '{}',
  mrp DECIMAL(10,2) NOT NULL DEFAULT 0.0,
  selling_price DECIMAL(10,2) NOT NULL DEFAULT 0.0,
  sale_price DECIMAL(10,2),
  bulk_pricing JSONB, -- e.g. [{"min_qty": 100, "price": 40}]
  moq INTEGER DEFAULT 1,
  variants JSONB, -- e.g. [{"size": "10x10", "price": 45}]
  stock_quantity INTEGER DEFAULT 0,
  track_stock BOOLEAN DEFAULT true,
  is_active BOOLEAN DEFAULT true,
  rating DECIMAL(3,1),
  seo_title TEXT,
  seo_description TEXT,
  flag_hot_deal BOOLEAN DEFAULT false,
  flag_mega_sale BOOLEAN DEFAULT false,
  flag_new_arrival BOOLEAN DEFAULT false,
  flag_best_seller BOOLEAN DEFAULT false,
  flag_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. SALES & OFFERS
CREATE TABLE public.sales (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  discount_type TEXT CHECK (discount_type IN ('percentage', 'flat', 'fixed_price')),
  discount_value DECIMAL(10,2) NOT NULL,
  start_date TIMESTAMPTZ NOT NULL,
  end_date TIMESTAMPTZ NOT NULL,
  is_active BOOLEAN DEFAULT true,
  target_products UUID[], -- null means all, or array of product IDs
  target_categories UUID[],
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. BANNERS
CREATE TABLE public.banners (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  type TEXT NOT NULL CHECK (type IN ('announcement', 'hero', 'popular_strip')),
  title TEXT,
  image_url TEXT,
  price_text TEXT,
  bullet_points TEXT[],
  button_text TEXT,
  button_link TEXT,
  countdown_end TIMESTAMPTZ,
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  start_date TIMESTAMPTZ,
  end_date TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. COUPONS
CREATE TABLE public.coupons (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  code TEXT UNIQUE NOT NULL,
  discount_type TEXT CHECK (discount_type IN ('percentage', 'flat')),
  discount_value DECIMAL(10,2) NOT NULL,
  min_order_value DECIMAL(10,2) DEFAULT 0.0,
  max_discount_cap DECIMAL(10,2),
  usage_limit INTEGER,
  usage_count INTEGER DEFAULT 0,
  per_user_limit INTEGER DEFAULT 1,
  start_date TIMESTAMPTZ,
  expiry_date TIMESTAMPTZ,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. ORDERS
CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_number TEXT UNIQUE NOT NULL, -- e.g. ORD-2026-1001
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  customer_email TEXT,
  shipping_address JSONB NOT NULL,
  gst_number TEXT,
  subtotal DECIMAL(10,2) NOT NULL,
  discount_amount DECIMAL(10,2) DEFAULT 0.0,
  gst_amount DECIMAL(10,2) DEFAULT 0.0,
  shipping_fee DECIMAL(10,2) DEFAULT 0.0,
  total_amount DECIMAL(10,2) NOT NULL,
  coupon_code TEXT,
  status TEXT DEFAULT 'Pending' CHECK (status IN ('Pending', 'Confirmed', 'In Production', 'Dispatched', 'Delivered', 'Cancelled')),
  payment_status TEXT DEFAULT 'Pending' CHECK (payment_status IN ('Pending', 'Paid', 'Failed', 'Refunded')),
  courier_name TEXT,
  tracking_number TEXT,
  tracking_link TEXT,
  internal_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ORDER ITEMS
CREATE TABLE public.order_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE,
  product_id UUID REFERENCES public.products(id) ON DELETE SET NULL,
  product_name TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  unit_price DECIMAL(10,2) NOT NULL,
  total_price DECIMAL(10,2) NOT NULL,
  variant_details JSONB
);

-- 8. QUOTES / ENQUIRIES
CREATE TABLE public.quotes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  type TEXT CHECK (type IN ('quote', 'sample_kit')),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  details JSONB,
  status TEXT DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'Converted', 'Closed')),
  internal_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. SITE SETTINGS
CREATE TABLE public.site_settings (
  id INTEGER PRIMARY KEY DEFAULT 1 CHECK (id = 1), -- Single row table
  business_name TEXT DEFAULT 'AS Print Gallery',
  phone_sales TEXT,
  phone_whatsapp TEXT,
  email TEXT,
  address TEXT,
  gstin TEXT,
  gst_percentage DECIMAL(5,2) DEFAULT 18.0,
  free_shipping_threshold DECIMAL(10,2) DEFAULT 999.0,
  social_links JSONB,
  footer_text TEXT,
  google_reviews_url TEXT,
  maintenance_mode BOOLEAN DEFAULT false,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. AUDIT LOGS
CREATE TABLE public.audit_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  admin_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  action TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id UUID,
  details JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);


-- ==========================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==========================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sales ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.banners ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.coupons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- Helper Function for Admin Check
CREATE OR REPLACE FUNCTION is_admin() RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('owner', 'staff')
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Public read access for active data
CREATE POLICY "Public can read categories" ON public.categories FOR SELECT USING (true);
CREATE POLICY "Public can read active products" ON public.products FOR SELECT USING (is_active = true);
CREATE POLICY "Public can read active sales" ON public.sales FOR SELECT USING (is_active = true);
CREATE POLICY "Public can read active banners" ON public.banners FOR SELECT USING (is_active = true);
CREATE POLICY "Public can read site settings" ON public.site_settings FOR SELECT USING (true);

-- Admins can do everything
CREATE POLICY "Admins have full access to products" ON public.products FOR ALL USING (is_admin());
CREATE POLICY "Admins have full access to categories" ON public.categories FOR ALL USING (is_admin());
CREATE POLICY "Admins have full access to sales" ON public.sales FOR ALL USING (is_admin());
CREATE POLICY "Admins have full access to banners" ON public.banners FOR ALL USING (is_admin());
CREATE POLICY "Admins have full access to coupons" ON public.coupons FOR ALL USING (is_admin());
CREATE POLICY "Admins have full access to orders" ON public.orders FOR ALL USING (is_admin());
CREATE POLICY "Admins have full access to order_items" ON public.order_items FOR ALL USING (is_admin());
CREATE POLICY "Admins have full access to quotes" ON public.quotes FOR ALL USING (is_admin());
CREATE POLICY "Admins have full access to site_settings" ON public.site_settings FOR ALL USING (is_admin());
CREATE POLICY "Admins have full access to audit_logs" ON public.audit_logs FOR ALL USING (is_admin());
CREATE POLICY "Admins have full access to profiles" ON public.profiles FOR ALL USING (is_admin());

-- Customers can insert orders/quotes but cannot read them without auth (Track order uses Edge function/Server Action)
CREATE POLICY "Public can insert quotes" ON public.quotes FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can insert orders" ON public.orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can insert order items" ON public.order_items FOR INSERT WITH CHECK (true);
