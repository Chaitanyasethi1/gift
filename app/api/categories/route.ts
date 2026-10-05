import { NextResponse } from 'next/server';
import { supabase as supabaseAdmin } from '@/lib/supabase';
import { initialCategories } from '@/data/categoriesData';

export const dynamic = 'force-dynamic';

// In-memory cache for ultra-fast instant synchronization
let cachedCategories: any[] = [];

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from('categories')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error || !data || data.length === 0) {
      if (cachedCategories.length > 0) {
        return NextResponse.json({ categories: cachedCategories, source: 'cache' });
      }
      return NextResponse.json({ categories: initialCategories, source: 'fallback' });
    }

    cachedCategories = [...data];
    return NextResponse.json({ categories: data, source: 'database' });
  } catch (err: any) {
    if (cachedCategories.length > 0) {
      return NextResponse.json({ categories: cachedCategories, source: 'cache' });
    }
    return NextResponse.json({ categories: initialCategories, error: err.message });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, slug, parent_id, sort_order, show_in_menu, show_in_home } = body;

    const generatedSlug = slug || name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    const { data, error } = await supabaseAdmin.from('categories').insert([{
      name,
      slug: generatedSlug,
      parent_id: parent_id || null,
      sort_order: sort_order ?? 0,
      show_in_menu: show_in_menu !== false,
      show_in_home: !!show_in_home
    }]).select();

    if (error) {
      // Local fallback in memory if DB is restricted
      const newCat = {
        id: 'cat-' + Date.now(),
        name,
        slug: generatedSlug,
        parent_id: parent_id || null,
        sort_order: sort_order ?? 0,
        show_in_menu: show_in_menu !== false,
        show_in_home: !!show_in_home
      };
      cachedCategories = [...cachedCategories, newCat];
      return NextResponse.json({ success: true, category: newCat, warning: error.message });
    }

    if (data?.[0]) {
      cachedCategories = [...cachedCategories.filter(c => c.id !== data[0].id), data[0]];
    }

    return NextResponse.json({ success: true, category: data?.[0] });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, name, slug, parent_id, sort_order, show_in_menu, show_in_home } = body;

    if (!id) {
      return NextResponse.json({ error: 'Category ID is required' }, { status: 400 });
    }

    const { data, error } = await supabaseAdmin.from('categories').update({
      name,
      slug,
      parent_id: parent_id || null,
      sort_order: sort_order ?? 0,
      show_in_menu: show_in_menu !== false,
      show_in_home: !!show_in_home
    }).eq('id', id).select();

    // Update in-memory cache
    cachedCategories = cachedCategories.map(c => c.id === id ? {
      ...c,
      name,
      slug,
      parent_id: parent_id || null,
      sort_order: sort_order ?? 0,
      show_in_menu: show_in_menu !== false,
      show_in_home: !!show_in_home
    } : c);

    if (error) {
      return NextResponse.json({ success: true, category: { id, name, slug, parent_id }, warning: error.message });
    }

    return NextResponse.json({ success: true, category: data?.[0] });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Category ID is required' }, { status: 400 });
    }

    // Remove from in-memory cache
    cachedCategories = cachedCategories.filter(c => c.id !== id && c.parent_id !== id);

    // Delete subcategories first if any
    try {
      await supabaseAdmin.from('categories').delete().eq('parent_id', id);
      await supabaseAdmin.from('categories').delete().eq('id', id);
    } catch {}

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
