-- ==============================================================================
-- AS PRINT GALLERY - SUPABASE ALL-IN-ONE DATABASE & PERMISSIONS SETUP (FIXED)
-- Run this in Supabase SQL Editor to make everything 100% smooth & error-free!
-- ==============================================================================

-- 1. Ensure Storage Bucket for Product Images & Public Access
INSERT INTO storage.buckets (id, name, public) 
VALUES ('product-images', 'product-images', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Drop and recreate storage policies to prevent duplicate errors
DROP POLICY IF EXISTS "Public Read Images" ON storage.objects;
CREATE POLICY "Public Read Images" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'product-images');

DROP POLICY IF EXISTS "Admin Upload Images" ON storage.objects;
CREATE POLICY "Admin Upload Images" 
ON storage.objects FOR INSERT 
WITH CHECK (bucket_id = 'product-images');

DROP POLICY IF EXISTS "Admin Update Images" ON storage.objects;
CREATE POLICY "Admin Update Images" 
ON storage.objects FOR UPDATE 
USING (bucket_id = 'product-images');

DROP POLICY IF EXISTS "Admin Delete Images" ON storage.objects;
CREATE POLICY "Admin Delete Images" 
ON storage.objects FOR DELETE 
USING (bucket_id = 'product-images');


-- 2. Ensure Categories Table & Columns
CREATE TABLE IF NOT EXISTS public.categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT NOT NULL,
    parent_id UUID REFERENCES public.categories(id) ON DELETE CASCADE,
    image_url TEXT,
    sort_order INT DEFAULT 0,
    show_in_menu BOOLEAN DEFAULT true,
    show_in_home BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Ensure slug has unique constraint if not already present
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'categories_slug_key'
    ) THEN
        ALTER TABLE public.categories ADD CONSTRAINT categories_slug_key UNIQUE (slug);
    END IF;
END $$;

-- Enable RLS and add full access policies for categories
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read categories" ON public.categories;
CREATE POLICY "Public read categories" ON public.categories FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow all insert categories" ON public.categories;
CREATE POLICY "Allow all insert categories" ON public.categories FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow all update categories" ON public.categories;
CREATE POLICY "Allow all update categories" ON public.categories FOR UPDATE USING (true);

DROP POLICY IF EXISTS "Allow all delete categories" ON public.categories;
CREATE POLICY "Allow all delete categories" ON public.categories FOR DELETE USING (true);


-- 3. Ensure Products Table has all columns for Sizes, Variations & Bulk Packs
CREATE TABLE IF NOT EXISTS public.products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    category TEXT,
    price NUMERIC DEFAULT 0,
    mrp NUMERIC,
    description TEXT,
    image TEXT,
    images JSONB DEFAULT '[]'::jsonb,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.products ADD COLUMN IF NOT EXISTS variants JSONB DEFAULT '[]'::jsonb;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS bulk_pricing JSONB DEFAULT '[]'::jsonb;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS sizes TEXT;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS moq INT DEFAULT 50;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS allow_logo_upload BOOLEAN DEFAULT false;

-- Enable RLS and add full access policies for products
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read products" ON public.products;
CREATE POLICY "Public read products" ON public.products FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow all insert products" ON public.products;
CREATE POLICY "Allow all insert products" ON public.products FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow all update products" ON public.products;
CREATE POLICY "Allow all update products" ON public.products FOR UPDATE USING (true);

DROP POLICY IF EXISTS "Allow all delete products" ON public.products;
CREATE POLICY "Allow all delete products" ON public.products FOR DELETE USING (true);


-- 4. Seed / Update Main Categories (Using ON CONFLICT ON ID to never fail)
INSERT INTO public.categories (id, name, slug, parent_id, sort_order, show_in_menu, show_in_home)
VALUES 
  ('11111111-1111-1111-1111-111111111111', 'Carry Bags', 'carry-bags', NULL, 1, true, true),
  ('22222222-2222-2222-2222-222222222222', 'Packaging Material', 'packaging-material', NULL, 2, true, true),
  ('33333333-3333-3333-3333-333333333333', 'Labels & Tags', 'labels-tags', NULL, 3, true, false),
  ('44444444-4444-4444-4444-444444444444', 'Stickers', 'stickers', NULL, 4, true, false),
  ('55555555-5555-5555-5555-555555555555', 'Advertising', 'advertising', NULL, 5, true, false),
  ('66666666-6666-6666-6666-666666666666', 'Disposable Products', 'disposable-products', NULL, 6, true, false)
ON CONFLICT (id) DO UPDATE 
SET name = EXCLUDED.name, 
    slug = EXCLUDED.slug,
    sort_order = EXCLUDED.sort_order,
    show_in_menu = EXCLUDED.show_in_menu,
    show_in_home = EXCLUDED.show_in_home;


-- 5. Seed Subcategories under each Main Category
-- Subcategories under Carry Bags
INSERT INTO public.categories (name, slug, parent_id, sort_order, show_in_menu, show_in_home)
VALUES 
  ('Kraft Carry Bags', 'kraft-carry-bags', '11111111-1111-1111-1111-111111111111', 1, true, false),
  ('Printed Carry Bags', 'printed-carry-bags', '11111111-1111-1111-1111-111111111111', 2, true, false),
  ('Handle Carry Bags', 'handle-carry-bags', '11111111-1111-1111-1111-111111111111', 3, true, false),
  ('Paper Bags & Mailers', 'paper-bags-mailers', '11111111-1111-1111-1111-111111111111', 4, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, parent_id = EXCLUDED.parent_id;

-- Subcategories under Packaging Boxes
INSERT INTO public.categories (name, slug, parent_id, sort_order, show_in_menu, show_in_home)
VALUES 
  ('Corrugated Boxes', 'corrugated-boxes', '22222222-2222-2222-2222-222222222222', 1, true, false),
  ('Garment Boxes', 'garment-boxes', '22222222-2222-2222-2222-222222222222', 2, true, false),
  ('Gift Boxes', 'gift-boxes', '22222222-2222-2222-2222-222222222222', 3, true, false),
  ('Sweet Boxes', 'sweet-boxes', '22222222-2222-2222-2222-222222222222', 4, true, false),
  ('Pizza Boxes', 'pizza-boxes', '22222222-2222-2222-2222-222222222222', 5, true, false),
  ('Custom Printed Boxes', 'custom-printed-boxes', '22222222-2222-2222-2222-222222222222', 6, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, parent_id = EXCLUDED.parent_id;

-- Subcategories under Labels & Tags
INSERT INTO public.categories (name, slug, parent_id, sort_order, show_in_menu, show_in_home)
VALUES 
  ('Woven Labels', 'woven-labels', '33333333-3333-3333-3333-333333333333', 1, true, false),
  ('Satin Labels', 'satin-labels', '33333333-3333-3333-3333-333333333333', 2, true, false),
  ('Printed Labels', 'printed-labels', '33333333-3333-3333-3333-333333333333', 3, true, false),
  ('Hang Tags', 'hang-tags', '33333333-3333-3333-3333-333333333333', 4, true, false),
  ('Barcode Stickers', 'barcode-stickers', '33333333-3333-3333-3333-333333333333', 5, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, parent_id = EXCLUDED.parent_id;

-- Subcategories under Stickers
INSERT INTO public.categories (name, slug, parent_id, sort_order, show_in_menu, show_in_home)
VALUES 
  ('Product Stickers', 'product-stickers', '44444444-4444-4444-4444-444444444444', 1, true, false),
  ('Round Stickers', 'round-stickers', '44444444-4444-4444-4444-444444444444', 2, true, false),
  ('Custom Stickers', 'custom-stickers', '44444444-4444-4444-4444-444444444444', 3, true, false),
  ('Packaging Labels', 'packaging-labels', '44444444-4444-4444-4444-444444444444', 4, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, parent_id = EXCLUDED.parent_id;

-- Subcategories under Advertising
INSERT INTO public.categories (name, slug, parent_id, sort_order, show_in_menu, show_in_home)
VALUES 
  ('Visiting Cards', 'visiting-cards', '55555555-5555-5555-5555-555555555555', 1, true, false),
  ('Thank You Cards', 'thank-you-cards', '55555555-5555-5555-5555-555555555555', 2, true, false),
  ('Rubber Stamps', 'rubber-stamps', '55555555-5555-5555-5555-555555555555', 3, true, false),
  ('Letterheads', 'letterheads', '55555555-5555-5555-5555-555555555555', 4, true, false),
  ('QR Code Cards', 'qr-code-cards', '55555555-5555-5555-5555-555555555555', 5, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, parent_id = EXCLUDED.parent_id;

-- Subcategories under Disposable Products
INSERT INTO public.categories (name, slug, parent_id, sort_order, show_in_menu, show_in_home)
VALUES 
  ('Paper Dona', 'paper-dona', '66666666-6666-6666-6666-666666666666', 1, true, false),
  ('Paper Plates', 'paper-plates', '66666666-6666-6666-6666-666666666666', 2, true, false),
  ('Silver Dona', 'silver-dona', '66666666-6666-6666-6666-666666666666', 3, true, false),
  ('Silver Plates', 'silver-plates', '66666666-6666-6666-6666-666666666666', 4, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, parent_id = EXCLUDED.parent_id;
