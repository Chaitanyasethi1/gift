-- ==============================================================================
-- AS PRINT GALLERY - SUPABASE ALL-IN-ONE DATABASE & PERMISSIONS SETUP (ULTIMATE)
-- Run this ONCE in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/hfkduzluulqkszhlsixa/sql
-- ==============================================================================

-- 1. Ensure Storage Bucket for Product Images & Public Access
INSERT INTO storage.buckets (id, name, public) 
VALUES ('product-images', 'product-images', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Drop and recreate storage policies to guarantee upload & delete permissions
DROP POLICY IF EXISTS "Public Read Images" ON storage.objects;
CREATE POLICY "Public Read Images" ON storage.objects FOR SELECT USING (bucket_id = 'product-images');

DROP POLICY IF EXISTS "Admin Upload Images" ON storage.objects;
CREATE POLICY "Admin Upload Images" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'product-images');

DROP POLICY IF EXISTS "Admin Update Images" ON storage.objects;
CREATE POLICY "Admin Update Images" ON storage.objects FOR UPDATE USING (bucket_id = 'product-images');

DROP POLICY IF EXISTS "Admin Delete Images" ON storage.objects;
CREATE POLICY "Admin Delete Images" ON storage.objects FOR DELETE USING (bucket_id = 'product-images');


-- 2. Unlock Banners Table for Admin Panel
CREATE TABLE IF NOT EXISTS public.banners (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    type TEXT NOT NULL DEFAULT 'hero',
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
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.banners ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow all read banners" ON public.banners;
CREATE POLICY "Allow all read banners" ON public.banners FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow all insert banners" ON public.banners;
CREATE POLICY "Allow all insert banners" ON public.banners FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow all update banners" ON public.banners;
CREATE POLICY "Allow all update banners" ON public.banners FOR UPDATE USING (true);

DROP POLICY IF EXISTS "Allow all delete banners" ON public.banners;
CREATE POLICY "Allow all delete banners" ON public.banners FOR DELETE USING (true);


-- 3. Unlock Site Settings Table for Dynamic Homepage & Ticker
CREATE TABLE IF NOT EXISTS public.site_settings (
    id SERIAL PRIMARY KEY,
    business_name TEXT DEFAULT 'AS Print Gallery',
    phone_sales TEXT,
    phone_whatsapp TEXT,
    email TEXT,
    address TEXT,
    gstin TEXT,
    gst_percentage NUMERIC DEFAULT 18,
    free_shipping_threshold NUMERIC DEFAULT 999,
    social_links JSONB,
    footer_text TEXT,
    google_reviews_url TEXT,
    maintenance_mode BOOLEAN DEFAULT false,
    homepage_config JSONB,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Ensure homepage_config column exists on site_settings
ALTER TABLE public.site_settings ADD COLUMN IF NOT EXISTS homepage_config JSONB;

-- Ensure default row id=1 exists
INSERT INTO public.site_settings (id, business_name)
VALUES (1, 'AS Print Gallery')
ON CONFLICT (id) DO NOTHING;

ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow all read site_settings" ON public.site_settings;
CREATE POLICY "Allow all read site_settings" ON public.site_settings FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow all write site_settings" ON public.site_settings;
CREATE POLICY "Allow all write site_settings" ON public.site_settings FOR ALL USING (true) WITH CHECK (true);


-- 4. Unlock Categories Table
CREATE TABLE IF NOT EXISTS public.categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    parent_id UUID REFERENCES public.categories(id) ON DELETE CASCADE,
    image_url TEXT,
    sort_order INT DEFAULT 0,
    show_in_menu BOOLEAN DEFAULT true,
    show_in_home BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow all read categories" ON public.categories;
CREATE POLICY "Allow all read categories" ON public.categories FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow all insert categories" ON public.categories;
CREATE POLICY "Allow all insert categories" ON public.categories FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow all update categories" ON public.categories;
CREATE POLICY "Allow all update categories" ON public.categories FOR UPDATE USING (true);

DROP POLICY IF EXISTS "Allow all delete categories" ON public.categories;
CREATE POLICY "Allow all delete categories" ON public.categories FOR DELETE USING (true);


-- 5. Unlock Products Table
CREATE TABLE IF NOT EXISTS public.products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    price NUMERIC DEFAULT 0,
    mrp NUMERIC,
    selling_price NUMERIC DEFAULT 0,
    sale_price NUMERIC,
    image TEXT,
    images TEXT[] DEFAULT '{}',
    is_active BOOLEAN DEFAULT true,
    stock_quantity INT DEFAULT 1000,
    moq INT DEFAULT 50,
    allow_logo_upload BOOLEAN DEFAULT false,
    sizes TEXT,
    variants JSONB DEFAULT '[]'::jsonb,
    bulk_pricing JSONB DEFAULT '[]'::jsonb,
    flag_hot_deal BOOLEAN DEFAULT false,
    flag_mega_sale BOOLEAN DEFAULT false,
    flag_new_arrival BOOLEAN DEFAULT false,
    flag_best_seller BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Ensure all optional columns exist on products
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS variants JSONB DEFAULT '[]'::jsonb;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS bulk_pricing JSONB DEFAULT '[]'::jsonb;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS sizes TEXT;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS moq INT DEFAULT 50;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS allow_logo_upload BOOLEAN DEFAULT false;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS mrp NUMERIC;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS selling_price NUMERIC DEFAULT 0;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS stock_quantity INT DEFAULT 1000;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS flag_hot_deal BOOLEAN DEFAULT false;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS flag_mega_sale BOOLEAN DEFAULT false;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS flag_new_arrival BOOLEAN DEFAULT false;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS flag_best_seller BOOLEAN DEFAULT false;

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow all read products" ON public.products;
CREATE POLICY "Allow all read products" ON public.products FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow all insert products" ON public.products;
CREATE POLICY "Allow all insert products" ON public.products FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow all update products" ON public.products;
CREATE POLICY "Allow all update products" ON public.products FOR UPDATE USING (true);

DROP POLICY IF EXISTS "Allow all delete products" ON public.products;
CREATE POLICY "Allow all delete products" ON public.products FOR DELETE USING (true);
