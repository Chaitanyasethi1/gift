-- SEED DATA for AS Print Gallery

-- Default Site Settings
INSERT INTO public.site_settings (id, business_name, phone_sales, phone_whatsapp, email, address, gstin, gst_percentage, free_shipping_threshold) 
VALUES (1, 'AS Print Gallery', '+91 9999999999', '+91 9999999999', 'hello@asprintgallery.com', 'Loni, Ghaziabad, UP', 'PENDING', 18.0, 999.0)
ON CONFLICT (id) DO NOTHING;

-- Initial Categories
INSERT INTO public.categories (id, name, slug, show_in_menu, show_in_home) VALUES 
('11111111-1111-1111-1111-111111111111', 'Paper Bags', 'paper-bags', true, true),
('22222222-2222-2222-2222-222222222222', 'Packaging Boxes', 'packaging-boxes', true, true),
('33333333-3333-3333-3333-333333333333', 'Labels & Tags', 'labels-tags', true, false),
('44444444-4444-4444-4444-444444444444', 'Stickers', 'stickers', true, false),
('55555555-5555-5555-5555-555555555555', 'Branding & Marketing', 'branding-marketing', true, false),
('66666666-6666-6666-6666-666666666666', 'Disposable Products', 'disposable-products', true, false)
ON CONFLICT (slug) DO NOTHING;

-- Initial Products (Placeholders to replace hardcoded site data)
INSERT INTO public.products (category_id, name, slug, description, mrp, selling_price, stock_quantity, flag_hot_deal, flag_mega_sale, flag_best_seller, is_active) VALUES
('22222222-2222-2222-2222-222222222222', 'Custom Corrugated Box', 'custom-corrugated-box', 'High quality 3-ply corrugated box for shipping.', 20.00, 15.00, 1000, true, true, true, true),
('11111111-1111-1111-1111-111111111111', 'Kraft Paper Bag', 'kraft-paper-bag', 'Eco-friendly brown kraft paper bag with handle.', 10.00, 8.50, 5000, true, false, true, true),
('33333333-3333-3333-3333-333333333333', 'Woven Brand Label', 'woven-brand-label', 'Premium woven clothing label for your garments.', 5.00, 3.50, 10000, false, false, true, true),
('44444444-4444-4444-4444-444444444444', 'Die-Cut Vinyl Sticker', 'die-cut-vinyl-sticker', 'Waterproof custom shape vinyl stickers.', 2.00, 1.50, 5000, false, true, false, true)
ON CONFLICT (slug) DO NOTHING;
