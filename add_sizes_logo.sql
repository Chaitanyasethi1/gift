ALTER TABLE public.products ADD COLUMN sizes TEXT[] DEFAULT '{}';
ALTER TABLE public.products ADD COLUMN allow_logo_upload BOOLEAN DEFAULT false;
