import { createBrowserClient } from '@supabase/ssr';

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://hfkduzluulqkszhlsixa.supabase.co';
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhma2R1emx1dWxxa3N6aGxzaXhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEwMTY1MzgsImV4cCI6MjEwNjU5MjUzOH0.6cZOt9eT6RyPawIEJDPjoAgfYRl9VIX1e-7PqTVw-PQ';

  return createBrowserClient(url, anonKey);
}
