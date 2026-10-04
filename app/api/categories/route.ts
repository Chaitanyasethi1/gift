import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { initialCategories } from '@/data/categoriesData';

export async function GET() {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error || !data || data.length === 0) {
      return NextResponse.json({ categories: initialCategories, source: 'fallback' });
    }

    return NextResponse.json({ categories: data, source: 'database' });
  } catch (err: any) {
    return NextResponse.json({ categories: initialCategories, error: err.message });
  }
}

export async function POST(request: Request) {
  try {
    const supabase = createClient();
    const body = await request.json();
    const { name, slug, parent_id, sort_order, show_in_menu, show_in_home } = body;

    const generatedSlug = slug || name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    const { data, error } = await supabase.from('categories').insert([{
      name,
      slug: generatedSlug,
      parent_id: parent_id || null,
      sort_order: sort_order ?? 0,
      show_in_menu: show_in_menu !== false,
      show_in_home: !!show_in_home
    }]).select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, category: data?.[0] });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const supabase = createClient();
    const body = await request.json();
    const { id, name, slug, parent_id, sort_order, show_in_menu, show_in_home } = body;

    if (!id) {
      return NextResponse.json({ error: 'Category ID is required' }, { status: 400 });
    }

    const { data, error } = await supabase.from('categories').update({
      name,
      slug,
      parent_id: parent_id || null,
      sort_order: sort_order ?? 0,
      show_in_menu: show_in_menu !== false,
      show_in_home: !!show_in_home
    }).eq('id', id).select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, category: data?.[0] });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const supabase = createClient();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Category ID is required' }, { status: 400 });
    }

    // Delete subcategories first if any
    await supabase.from('categories').delete().eq('parent_id', id);
    const { error } = await supabase.from('categories').delete().eq('id', id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
