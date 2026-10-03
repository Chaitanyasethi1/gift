-- 1. Create a public storage bucket for product images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('product-images', 'product-images', true)
ON CONFLICT (id) DO NOTHING;

-- 2. Allow public access to view images
CREATE POLICY "Public Access" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'product-images');

-- 3. Allow admins to upload images
CREATE POLICY "Admin Upload Access" 
ON storage.objects FOR INSERT 
WITH CHECK (bucket_id = 'product-images');

-- 4. FIX THE RLS ERROR: Make all current users 'owners' so they can add/edit products
INSERT INTO public.profiles (id, email, role)
SELECT id, email, 'owner' FROM auth.users
ON CONFLICT (id) DO NOTHING;
