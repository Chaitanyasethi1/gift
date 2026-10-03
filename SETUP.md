# AS Print Gallery - Admin & Supabase Setup Guide

## STEP 1: Supabase Configuration
1. Go to your [Supabase Dashboard](https://app.supabase.com) and open the SQL Editor.
2. Open the file `supabase/migrations/20261003_initial_schema.sql` from the codebase, copy everything, and RUN it in the SQL Editor. This will create all tables and security policies.
3. Next, open `supabase/seed.sql`, copy it, and RUN it in the SQL editor to insert the initial categories, default products, and site settings.

## STEP 2: Auth Setup (Creating the Owner)
Since there is no "Sign Up" page for admins (for security), you must create your first account manually:
1. In Supabase, go to **Authentication > Users** and click **Add User** -> **Create New User**.
2. Enter your email and a strong password. (Disable "Auto Confirm" if asked, or just verify the email).
3. Once the user is created, copy the **User UID**.
4. Go to the SQL Editor and run this to make yourself the owner:
```sql
INSERT INTO public.profiles (id, email, role) 
VALUES ('YOUR-COPIED-UID-HERE', 'your-email@example.com', 'owner');
```

## STEP 3: Vercel Environment Variables
In your Vercel Dashboard, go to **Settings > Environment Variables** and add the following as **Config** visibility:
- `NEXT_PUBLIC_SUPABASE_URL` : (Found in Supabase -> Settings -> API)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` : (Found in Supabase -> Settings -> API)
*(Note: Do not expose the Service Role Key to Vercel yet unless specifically asked by me in the next steps).*

Redeploy the site on Vercel so it picks up the keys.

## STEP 4: Next Steps for the AI (Stage 2)
Once the above is done, reply to me and I will proceed with:
- Wiring up the Admin Auth Middleware.
- Building the UI for the Products/Categories CRUD operations.
