import { PRODUCTS, Product } from '@/data/products';
import { initialCategories, CategoryItem } from '@/data/categoriesData';
import { supabase } from '@/lib/supabase';

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

// In-memory cache to eliminate multiple redundant remote Supabase round-trips
let cachedCategories: CategoryItem[] = [];
let categoriesCacheTime = 0;
let cachedProducts: any[] = [];
let productsCacheTime = 0;
const CACHE_TTL_MS = 60 * 1000; // 60 seconds

/**
 * Fetch all categories combining Supabase and fallback static categories.
 */
export async function getAllCategories(): Promise<CategoryItem[]> {
  const now = Date.now();
  if (cachedCategories.length > 0 && (now - categoriesCacheTime) < CACHE_TTL_MS) {
    return cachedCategories;
  }

  try {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('sort_order', { ascending: true });

    if (!error && data && data.length > 0) {
      cachedCategories = data.map(c => ({
        id: c.id,
        name: c.name,
        slug: c.slug,
        parent_id: c.parent_id,
        sort_order: c.sort_order || 0,
        show_in_menu: c.show_in_menu !== false,
        show_in_home: !!c.show_in_home
      }));
      categoriesCacheTime = now;
      return cachedCategories;
    }
  } catch (err) {
    console.warn('Supabase categories fetch fallback:', err);
  }

  if (cachedCategories.length > 0) return cachedCategories;
  return initialCategories;
}

/**
 * Fetch all active products combining Supabase and static PRODUCTS.
 */
export async function getAllProducts(): Promise<any[]> {
  const now = Date.now();
  if (cachedProducts.length > 0 && (now - productsCacheTime) < CACHE_TTL_MS) {
    return cachedProducts;
  }

  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    if (!error && data && data.length > 0) {
      cachedProducts = data;
      productsCacheTime = now;
      return cachedProducts;
    }
  } catch (err) {
    console.warn('Supabase products fetch fallback:', err);
  }

  if (cachedProducts.length > 0) return cachedProducts;
  return PRODUCTS;
}

export const CATEGORY_ALIASES: Record<string, string> = {
  'packaging-boxes': 'packaging-material',
  'packaging-material': 'packaging-boxes',
  '3-ply-box': 'craft-3-ply-box',
  '3-ply-boxes': 'craft-3-ply-box',
  'corrugated-boxes': 'craft-3-ply-box',
  '3-ply-white-box': '3-ply-white-corrugated-boxes',
  'flap-box': 'brown-flap-box',
  'white-flap-box': 'white-flap-box',
  'rigid-boxes': 'rigid-boxes',
  'food-packaging': 'food-packaging',
  'disposable': 'disposable-products',
  'paper-courier-mailers': 'paper-bags-mailers',
  'pizza-packaging': 'pizza-boxes',
  'courier-polybags-mailer-bags': 'polybag',
  'courier-polybags': 'polybag',
  'polybags': 'polybag',
  'meesho-marketplace-polybags': 'meesho-polybags',
  'marketplace-polybags': 'meesho-polybags',
  'zip-lock-stand-up-pouches': 'zip-lock-pouch-bags',
  'zip-lock-pouches': 'zip-lock-pouch-bags',
  'stand-up-pouches': 'zip-lock-pouch-bags',
  'bopp-packaging-tape-fragile-tape': 'tape',
  'bopp-tape': 'tape',
  'packaging-tape': 'tape',
  'thermal-label-paper-barcode-rolls': 'thermal-label-paper',
  'thermal-labels': 'thermal-label-paper',
  'paper-bubble-wrap-honeycomb-rolls': 'paper-bubble-wrap-protection',
  'bubble-wrap': 'paper-bubble-wrap-protection',
  'multicolor-gift-boxes-hamper-boxes': 'multicolor-gift-box',
  'gift-box': 'multicolor-gift-box',
  'stickers-and-thank-you-cards': 'thank-you-stickers',
  'stickers-thank-you-cards': 'thank-you-stickers',
  'thank-you-stickers': 'thank-you-stickers',
  'thank-you-card': 'thank-you-cards',
  'thank-you-cards': 'thank-you-cards',
  'visiting-cards-thankyou-cards': 'visiting-cards',
  'visiting-card': 'visiting-cards',
  'visiting-cards': 'visiting-cards'
};

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

  // 1. Direct match by slug or id first
  let category = allCategories.find(c => c.slug.toLowerCase() === normalizedSlug || c.id === normalizedSlug);

  // 2. If not found, check known aliases
  if (!category) {
    const mapped = CATEGORY_ALIASES[normalizedSlug];
    if (mapped) {
      category = allCategories.find(c => c.slug.toLowerCase() === mapped || c.id === mapped);
    }
  }

  // 3. If not found directly, try fuzzy search by name
  if (!category) {
    const cleaned = normalizedSlug.replace(/-/g, ' ');
    category = allCategories.find(c => c.name.toLowerCase().includes(cleaned) || cleaned.includes(c.name.toLowerCase()));
  }

  if (!category) {
    // Generate a graceful fallback category if admin created product with custom slug
    const formattedName = normalizedSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return {
      id: `cat-${normalizedSlug}`,
      name: formattedName,
      slug: normalizedSlug,
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
      // Also provide sibling subcategories from parent so customer can navigate among them
      subcategories = allCategories
        .filter(c => c.parent_id === parent.id)
        .map(c => ({ id: c.id, name: c.name, slug: c.slug }));
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
 * Parent categories will return products from all their subcategories.
 * Specific subcategories will strictly return ONLY products assigned to that subcategory.
 */
export async function getProductsForCategory(categorySlug: string): Promise<any[]> {
  const allProducts = await getAllProducts();
  const allCategories = await getAllCategories();
  const normalizedSlug = categorySlug.toLowerCase().trim();

  // 1. Special collections
  if (normalizedSlug === 'hot-deals') {
    return allProducts.filter(p => {
      const mrp = Number(p.mrp || 0);
      const sp = Number(p.selling_price || p.price || 0);
      const discount = mrp > sp ? ((mrp - sp) / mrp) * 100 : 0;
      return p.flag_hot_deal || discount >= 20 || p.badge === 'BESTSELLER';
    });
  }

  if (normalizedSlug === 'sale' || normalizedSlug === 'mega-sale') {
    return allProducts.filter(p => {
      const mrp = Number(p.mrp || 0);
      const sp = Number(p.selling_price || p.price || 0);
      return p.flag_mega_sale || (mrp > sp);
    });
  }

  if (normalizedSlug === 'new-arrivals') {
    return allProducts.filter(p => p.flag_new_arrival || p.badgeClass === 'new');
  }

  if (normalizedSlug === 'best-sellers') {
    return allProducts.filter(p => p.flag_best_seller || p.badge === 'BESTSELLER' || (p.reviews && p.reviews > 300));
  }

  // 2. Database category resolution
  let category = allCategories.find(c => c.slug.toLowerCase() === normalizedSlug || c.id === normalizedSlug);
  if (!category) {
    const mapped = CATEGORY_ALIASES[normalizedSlug];
    if (mapped) {
      category = allCategories.find(c => c.slug.toLowerCase() === mapped || c.id === mapped);
    }
  }

  let targetCatIds: string[] = [];
  let childSlugs: string[] = [];

  if (category) {
    targetCatIds.push(category.id);
    childSlugs.push(category.slug.toLowerCase());

    // If it's a parent category, collect all subcategory IDs & slugs
    if (!category.parent_id) {
      const childCats = allCategories.filter(c => c.parent_id === category.id);
      childCats.forEach(c => {
        targetCatIds.push(c.id);
        childSlugs.push(c.slug.toLowerCase());
      });
    }
  } else {
    childSlugs.push(normalizedSlug);
  }

  // Filter products:
  // Products with category_id MUST strictly match targetCatIds.
  const filtered = allProducts.filter(p => {
    // A. Match by Supabase category_id (Strict assignment)
    if (p.category_id) {
      return targetCatIds.includes(p.category_id);
    }

    // B. Match by product's own slug or category_slug (legacy static items)
    const pCatSlug = String(p.category_slug || '').toLowerCase();
    if (pCatSlug && (pCatSlug === normalizedSlug || childSlugs.includes(pCatSlug))) {
      return true;
    }

    // C. Static fallback if no category_id is present
    const staticMap: Record<string, string[]> = {
      'corrugated': ['corrugated-boxes', 'packaging-material', 'packaging-boxes', 'craft-3-ply-box', '3-ply-white-corrugated-boxes', 'brown-flap-box', 'white-flap-box'],
      'food': ['food-pizza', 'pizza-boxes', 'sweet-boxes', 'packaging-material', 'packaging-boxes', 'food-packaging'],
      'packaging': ['packaging-material', 'packaging-boxes', 'garment-boxes', 'gift-boxes', 'rigid-boxes'],
      'label': ['labels-tags', 'woven-labels', 'satin-labels', 'printed-labels', 'hang-tags'],
      'sticker': ['stickers', 'product-stickers', 'round-stickers', 'custom-stickers', 'packaging-labels'],
      'bags': ['carry-bags', 'kraft-carry-bags', 'printed-carry-bags', 'handle-carry-bags', 'paper-bags-mailers', 'multi-colour-paper-bag']
    };

    if (p.category && staticMap[p.category]) {
      // Main category matches static category bucket
      if (category && !category.parent_id && staticMap[p.category].includes(normalizedSlug)) {
        return true;
      }
      // Subcategory matches specific static product slug
      if (p.slug && p.slug.toLowerCase().includes(normalizedSlug)) {
        return true;
      }
    }

    return false;
  });

  return filtered;
}
