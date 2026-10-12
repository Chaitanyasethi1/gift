import { PRODUCTS, Product } from '@/data/products';
import { initialCategories, CategoryItem } from '@/data/categoriesData';
import { createClient } from '@/utils/supabase/server';

export interface CategoryMeta {
  id: string;
  name: string;
  slug: string;
  parentId: string | null;
  parentName?: string;
  parentSlug?: string;
  isSpecial?: boolean;
  subcategories: { id: string; name: string; slug: string; count?: number }[];
  description: string;
}

export const SPECIAL_COLLECTIONS: Record<string, { name: string; desc: string; icon: string }> = {
  'hot-deals': {
    name: 'Hot Deals',
    desc: 'Limited-time factory direct deals and highest discounted packaging products.',
    icon: '🔥'
  },
  'sale': {
    name: 'Mega Factory Sale',
    desc: 'Exclusive discounts on bulk shipping cartons, carry bags, and brand stickers.',
    icon: '🏷️'
  },
  'mega-sale': {
    name: 'Mega Factory Sale',
    desc: 'Exclusive discounts on bulk shipping cartons, carry bags, and brand stickers.',
    icon: '🏷️'
  },
  'new-arrivals': {
    name: 'New Arrivals',
    desc: 'Latest factory additions in premium custom boxes, eco-friendly mailers, and woven tags.',
    icon: '🌟'
  },
  'best-sellers': {
    name: 'Best Sellers',
    desc: 'Our most ordered packaging materials trusted by over 5,000+ businesses across India.',
    icon: '🏆'
  }
};

/**
 * Fetch all categories combining Supabase and fallback static categories.
 */
export async function getAllCategories(): Promise<CategoryItem[]> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('sort_order', { ascending: true });

    if (!error && data && data.length > 0) {
      // Merge with initialCategories ensuring no missing slugs
      const map = new Map<string, CategoryItem>();
      initialCategories.forEach(c => map.set(c.slug, c));
      data.forEach(c => {
        map.set(c.slug, {
          id: c.id,
          name: c.name,
          slug: c.slug,
          parent_id: c.parent_id,
          sort_order: c.sort_order || 0,
          show_in_menu: c.show_in_menu !== false,
          show_in_home: !!c.show_in_home
        });
      });
      return Array.from(map.values());
    }
  } catch (err) {
    console.warn('Supabase categories fetch fallback:', err);
  }
  return initialCategories;
}

/**
 * Fetch all active products combining Supabase and static PRODUCTS.
 */
export async function getAllProducts(): Promise<any[]> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    if (!error && data && data.length > 0) {
      // Return Supabase products combined with static catalog if needed
      // (deduplicating by slug or id)
      const slugSet = new Set(data.map(p => p.slug));
      const staticFallbacks = PRODUCTS.filter(sp => !slugSet.has(sp.slug));
      return [...data, ...staticFallbacks];
    }
  } catch (err) {
    console.warn('Supabase products fetch fallback:', err);
  }
  return PRODUCTS;
}

/**
 * Normalize and resolve category information by slug.
 * Supports main categories, subcategories, aliases, and special collections.
 */
export async function resolveCategory(slug: string): Promise<CategoryMeta | null> {
  const normalizedSlug = slug.toLowerCase().trim();

  // 1. Check special collections (hot-deals, sale, new-arrivals, best-sellers)
  if (SPECIAL_COLLECTIONS[normalizedSlug]) {
    const col = SPECIAL_COLLECTIONS[normalizedSlug];
    return {
      id: `col-${normalizedSlug}`,
      name: col.name,
      slug: normalizedSlug,
      parentId: null,
      isSpecial: true,
      subcategories: [],
      description: col.desc
    };
  }

  const allCategories = await getAllCategories();

  // Alias mappings (e.g. packaging-boxes -> packaging-material)
  const aliasMap: Record<string, string> = {
    'packaging-boxes': 'packaging-material',
    'disposable': 'disposable-products',
    'paper-courier-mailers': 'paper-bags-mailers',
    'craft-3-ply-box': 'corrugated-boxes',
    'pizza-packaging': 'pizza-boxes'
  };

  const targetSlug = aliasMap[normalizedSlug] || normalizedSlug;

  // Search category by slug or id
  let category = allCategories.find(c => c.slug.toLowerCase() === targetSlug || c.slug.toLowerCase() === normalizedSlug);

  // If not found directly, try fuzzy search by name
  if (!category) {
    const cleaned = targetSlug.replace(/-/g, ' ');
    category = allCategories.find(c => c.name.toLowerCase().includes(cleaned) || cleaned.includes(c.name.toLowerCase()));
  }

  if (!category) {
    // Generate a graceful fallback category if admin created product with custom slug
    const formattedName = targetSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return {
      id: `cat-${targetSlug}`,
      name: formattedName,
      slug: targetSlug,
      parentId: null,
      subcategories: [],
      description: `Factory direct quality ${formattedName} manufactured in-house by AS Print Gallery.`
    };
  }

  // Determine parent and subcategories
  let parentName: string | undefined = undefined;
  let parentSlug: string | undefined = undefined;
  let subcategories: { id: string; name: string; slug: string }[] = [];

  if (category.parent_id) {
    const parent = allCategories.find(c => c.id === category.parent_id);
    if (parent) {
      parentName = parent.name;
      parentSlug = parent.slug;
    }
  } else {
    // If it's a main category, find all child subcategories
    subcategories = allCategories
      .filter(c => c.parent_id === category.id)
      .map(c => ({ id: c.id, name: c.name, slug: c.slug }));
  }

  return {
    id: category.id,
    name: category.name,
    slug: category.slug,
    parentId: category.parent_id,
    parentName,
    parentSlug,
    subcategories,
    description: `Explore our wholesale catalog of ${category.name}. Heavy-duty materials, custom branding, and fast Pan-India factory dispatch.`
  };
}

/**
 * Filter products belonging to a given category or collection.
 * Parent categories will also return products from all their subcategories.
 */
export async function getProductsForCategory(categorySlug: string): Promise<any[]> {
  const allProducts = await getAllProducts();
  const allCategories = await getAllCategories();
  const normalizedSlug = categorySlug.toLowerCase().trim();

  // 1. Special collections
  if (normalizedSlug === 'hot-deals') {
    const deals = allProducts.filter(p => {
      const mrp = Number(p.mrp || 0);
      const sp = Number(p.selling_price || p.price || 0);
      const discount = mrp > sp ? ((mrp - sp) / mrp) * 100 : 0;
      return p.flag_hot_deal || discount >= 20 || p.badge === 'BESTSELLER';
    });
    return deals.length > 0 ? deals : allProducts.slice(0, 8);
  }

  if (normalizedSlug === 'sale' || normalizedSlug === 'mega-sale') {
    const saleItems = allProducts.filter(p => {
      const mrp = Number(p.mrp || 0);
      const sp = Number(p.selling_price || p.price || 0);
      return p.flag_mega_sale || (mrp > sp);
    });
    return saleItems.length > 0 ? saleItems : allProducts.slice(2, 10);
  }

  if (normalizedSlug === 'new-arrivals') {
    const newItems = allProducts.filter(p => p.flag_new_arrival || p.badgeClass === 'new');
    return newItems.length > 0 ? newItems : allProducts.slice(4, 12);
  }

  if (normalizedSlug === 'best-sellers') {
    const bestItems = allProducts.filter(p => p.flag_best_seller || p.badge === 'BESTSELLER' || (p.reviews && p.reviews > 300));
    return bestItems.length > 0 ? bestItems : allProducts.slice(0, 8);
  }

  // 2. Database category resolution
  const category = allCategories.find(c => c.slug.toLowerCase() === normalizedSlug);

  let targetCatIds: string[] = [];
  let childSlugs: string[] = [];

  if (category) {
    targetCatIds.push(category.id);
    // If it's a parent category, collect all subcategory IDs & slugs
    const childCats = allCategories.filter(c => c.parent_id === category.id);
    childCats.forEach(c => {
      targetCatIds.push(c.id);
      childSlugs.push(c.slug.toLowerCase());
    });
  }

  // Filter products matching either ID, slug, or semantic category
  const filtered = allProducts.filter(p => {
    // A. Match by Supabase category_id
    if (p.category_id && targetCatIds.includes(p.category_id)) {
      return true;
    }

    // B. Match by product's own slug or category_slug
    const pCatSlug = String(p.category_slug || '').toLowerCase();
    if (pCatSlug && (pCatSlug === normalizedSlug || childSlugs.includes(pCatSlug))) {
      return true;
    }

    // C. Match static product category codes
    // Map category slugs to static categories
    const staticMap: Record<string, string[]> = {
      'corrugated': ['corrugated-boxes', 'packaging-material', 'craft-3-ply-box', '3-ply-white-corrugated-boxes', 'brown-flap-box', 'white-flap-box'],
      'food': ['food-pizza', 'pizza-boxes', 'sweet-boxes', 'packaging-material', 'packaging-labels'],
      'packaging': ['packaging-material', 'garment-boxes', 'gift-boxes', 'luxury-boxes', 'custom-printed-boxes'],
      'label': ['labels-tags', 'woven-labels', 'satin-labels', 'printed-labels', 'hang-tags', 'wash-care-labels'],
      'sticker': ['stickers', 'product-stickers', 'round-stickers', 'custom-stickers', 'barcode-stickers', 'vinyl-stickers'],
      'bags': ['carry-bags', 'kraft-carry-bags', 'printed-carry-bags', 'handle-carry-bags', 'paper-bags-mailers', 'courier-bags', 'paper-courier-mailers']
    };

    if (p.category && staticMap[p.category]) {
      if (staticMap[p.category].includes(normalizedSlug) || staticMap[p.category].some(s => childSlugs.includes(s))) {
        return true;
      }
    }

    // D. Semantic fallback on product title or category label
    const titleLower = String(p.name || p.title || '').toLowerCase();
    const labelLower = String(p.categoryLabel || '').toLowerCase();
    const slugKeywords = normalizedSlug.replace(/-/g, ' ').split(' ').filter(w => w.length > 2);

    for (const kw of slugKeywords) {
      if (titleLower.includes(kw) || labelLower.includes(kw)) {
        return true;
      }
    }

    return false;
  });

  return filtered;
}
