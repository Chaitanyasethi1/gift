/**
 * AS PRINT GALLERY - Coupon Engine & Storage
 * 
 * Centralized coupon data structures, server-side validation, 
 * item-level discount calculations, and persistent synchronization.
 */

import { supabase as supabaseAdmin } from '@/lib/supabase';
import { initialCategories } from '@/data/categoriesData';
import { PRODUCTS } from '@/data/products';

export type DiscountType = 'percentage' | 'flat';
export type AppliesTo = 'all' | 'categories' | 'products';

export interface CouponRule {
  id: string;
  code: string; // unique, stored uppercase
  discount_type: DiscountType;
  discount_value: number; // e.g. 20 for 20%, or 100 for Rs. 100 flat
  max_discount_cap?: number | null; // Optional cap for percentage coupons
  applies_to: AppliesTo; // 'all' | 'categories' | 'products'
  applied_category_ids?: string[]; // Category IDs or slugs (including subcategories)
  applied_product_ids?: string[]; // Product IDs or slugs
  excluded_category_ids?: string[]; // Specific category exclusions
  excluded_product_ids?: string[]; // Specific product exclusions
  min_order_value?: number | null; // Optional minimum order value
  start_date?: string | null; // ISO string
  expiry_date?: string | null; // ISO string
  is_active: boolean;
  usage_limit?: number | null; // Total redemptions allowed
  usage_count: number; // Redemptions count
  per_user_limit?: number | null; // Limit per customer phone
  show_in_banner?: boolean; // Show in top header banner
  banner_text?: string | null; // Custom banner ticker text
  created_at?: string;
  updated_at?: string;
}

export interface CartItemLike {
  id: string;
  productId?: string;
  slug?: string;
  category?: string;
  categoryId?: string;
  categoryLabel?: string;
  title: string;
  price: number;
  qty: number;
  image?: string;
  gstRate?: number;
  isCustomBox?: boolean;
  dimensions?: string;
}

export interface DiscountCalculationResult {
  isValid: boolean;
  errorMessage?: string;
  coupon?: CouponRule;
  discountTotal: number;
  subtotal: number;
  discountedSubtotal: number;
  eligibleItemIds: string[];
  itemDiscounts: Record<string, number>;
  gstAmount: number;
  finalTotal: number;
}

export interface CachedCategoryItem {
  id: string;
  name: string;
  slug: string;
  parent_id: string | null;
}

export interface CachedProductItem {
  id: string;
  name: string;
  slug: string;
  category_id?: string;
  category?: string;
  categoryLabel?: string;
}

/**
 * Default Seed Coupons
 */
export const SEED_COUPONS: CouponRule[] = [
  {
    id: 'coupon-as20',
    code: 'AS20',
    discount_type: 'percentage',
    discount_value: 20,
    max_discount_cap: null,
    applies_to: 'categories',
    applied_category_ids: ['corrugated-boxes', 'corrugated', 'bx-1', 'packaging-material', 'packaging-boxes', '22222222-2222-2222-2222-222222222222'],
    applied_product_ids: [],
    excluded_category_ids: [],
    excluded_product_ids: [],
    min_order_value: 0,
    start_date: null,
    expiry_date: null,
    is_active: true,
    usage_limit: null,
    usage_count: 0,
    per_user_limit: null,
    show_in_banner: true,
    banner_text: '⚡ MEGA FACTORY SALE: Flat 20% OFF on all Corrugated Cartons! Use code AS20 ⚡',
    created_at: new Date('2026-10-01').toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'coupon-as10',
    code: 'AS10',
    discount_type: 'percentage',
    discount_value: 10,
    max_discount_cap: null,
    applies_to: 'all',
    applied_category_ids: [],
    applied_product_ids: [],
    excluded_category_ids: [],
    excluded_product_ids: [],
    min_order_value: 0,
    start_date: null,
    expiry_date: null,
    is_active: true,
    usage_limit: null,
    usage_count: 0,
    per_user_limit: null,
    show_in_banner: false,
    banner_text: '⚡ Flat 10% OFF site-wide on all packaging orders! Use code AS10 ⚡',
    created_at: new Date('2026-10-01').toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'coupon-welcome10',
    code: 'WELCOME10',
    discount_type: 'percentage',
    discount_value: 10,
    max_discount_cap: 500,
    applies_to: 'all',
    applied_category_ids: [],
    applied_product_ids: [],
    excluded_category_ids: [],
    excluded_product_ids: [],
    min_order_value: 499,
    start_date: null,
    expiry_date: null,
    is_active: true,
    usage_limit: 1000,
    usage_count: 0,
    per_user_limit: 1,
    show_in_banner: false,
    banner_text: '🎉 Welcome Offer: Flat 10% OFF on your first packaging consignment! Use code WELCOME10',
    created_at: new Date('2026-10-01').toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'coupon-bulk20',
    code: 'BULK20',
    discount_type: 'percentage',
    discount_value: 20,
    max_discount_cap: 2000,
    applies_to: 'all',
    applied_category_ids: [],
    applied_product_ids: [],
    excluded_category_ids: [],
    excluded_product_ids: [],
    min_order_value: 2000,
    start_date: null,
    expiry_date: null,
    is_active: true,
    usage_limit: 500,
    usage_count: 0,
    per_user_limit: 2,
    show_in_banner: false,
    banner_text: '🔥 Factory Bulk Special: 20% OFF on wholesale orders above ₹2000! Use code BULK20',
    created_at: new Date('2026-10-01').toISOString(),
    updated_at: new Date().toISOString()
  }
];

// In-memory cache for fast server execution
let inMemoryCoupons: CouponRule[] = [...SEED_COUPONS];
let isInitialized = false;

// Dynamic taxonomy caches
let cachedCategories: CachedCategoryItem[] = [];
let categoriesLastFetched = 0;

let cachedProducts: CachedProductItem[] = [];
let productsLastFetched = 0;

/**
 * Fetch categories with 60s memory cache for instant resolution
 */
export async function getCachedCategories(): Promise<CachedCategoryItem[]> {
  const now = Date.now();
  if (cachedCategories.length > 0 && (now - categoriesLastFetched) < 60000) {
    return cachedCategories;
  }

  try {
    const { data, error } = await supabaseAdmin
      .from('categories')
      .select('id, name, slug, parent_id');

    if (!error && Array.isArray(data) && data.length > 0) {
      cachedCategories = data.map(c => ({
        id: String(c.id),
        name: String(c.name || ''),
        slug: String(c.slug || ''),
        parent_id: c.parent_id ? String(c.parent_id) : null
      }));
      categoriesLastFetched = now;
      return cachedCategories;
    }
  } catch {}

  cachedCategories = initialCategories.map(c => ({
    id: c.id,
    name: c.name,
    slug: c.slug,
    parent_id: c.parent_id
  }));
  categoriesLastFetched = now;
  return cachedCategories;
}

/**
 * Fetch products with 60s memory cache for instant resolution
 */
export async function getCachedProducts(): Promise<CachedProductItem[]> {
  const now = Date.now();
  if (cachedProducts.length > 0 && (now - productsLastFetched) < 60000) {
    return cachedProducts;
  }

  try {
    const { data, error } = await supabaseAdmin
      .from('products')
      .select('id, name, slug, category_id');

    if (!error && Array.isArray(data) && data.length > 0) {
      cachedProducts = data.map(p => ({
        id: String(p.id),
        name: String(p.name || ''),
        slug: String(p.slug || ''),
        category_id: p.category_id ? String(p.category_id) : undefined
      }));
      productsLastFetched = now;
      return cachedProducts;
    }
  } catch {}

  cachedProducts = PRODUCTS.map(p => ({
    id: String(p.id),
    name: (p as any).name || p.title || '',
    slug: p.slug,
    category: p.category,
    categoryLabel: p.categoryLabel
  }));
  productsLastFetched = now;
  return cachedProducts;
}

/**
 * Normalizes a coupon code for case-insensitive matching
 */
export function normalizeCouponCode(code: string): string {
  return (code || '').trim().toUpperCase();
}

/**
 * Resolves all category identifiers (ID, slug, parent slug, parent ID, and all child IDs/slugs)
 * Supports bidirectional matching: Child matches Parent, and Parent matches Child!
 */
export function resolveCategoryIdentifiers(
  catRef: string, 
  allCats: CachedCategoryItem[] = cachedCategories.length > 0 ? cachedCategories : initialCategories
): string[] {
  if (!catRef) return [];
  const refLower = catRef.toLowerCase().trim();
  const set = new Set<string>([refLower]);

  // Find category in taxonomy
  const matched = allCats.find(c => 
    c.id.toLowerCase() === refLower || 
    c.slug.toLowerCase() === refLower || 
    c.name.toLowerCase() === refLower
  );

  if (matched) {
    set.add(matched.id.toLowerCase());
    set.add(matched.slug.toLowerCase());
    set.add(matched.name.toLowerCase());

    // 1. If this is a child, add its parent
    if (matched.parent_id) {
      set.add(matched.parent_id.toLowerCase());
      const parent = allCats.find(p => p.id.toLowerCase() === matched.parent_id?.toLowerCase());
      if (parent) {
        set.add(parent.slug.toLowerCase());
        set.add(parent.name.toLowerCase());
      }
    }

    // 2. If this is a parent, add all of its children!
    const children = allCats.filter(c => c.parent_id && c.parent_id.toLowerCase() === matched.id.toLowerCase());
    for (const child of children) {
      set.add(child.id.toLowerCase());
      set.add(child.slug.toLowerCase());
      set.add(child.name.toLowerCase());
    }
  }

  // Corrugated carton & packaging box synonyms
  if (
    refLower.includes('corrugat') || 
    refLower.includes('carton') || 
    refLower.includes('box') || 
    refLower.includes('packaging-boxes') ||
    refLower.includes('packaging-material')
  ) {
    set.add('corrugated');
    set.add('corrugated-boxes');
    set.add('bx-1');
    set.add('packaging-material');
    set.add('packaging-boxes');
    set.add('22222222-2222-2222-2222-222222222222');
  }

  // Carry Bag synonyms
  if (refLower.includes('bag') || refLower.includes('carry')) {
    set.add('carry-bags');
    set.add('11111111-1111-1111-1111-111111111111');
  }

  // Sticker synonyms
  if (refLower.includes('sticker')) {
    set.add('stickers');
    set.add('44444444-4444-4444-4444-444444444444');
  }

  // Labels & Tags synonyms
  if (refLower.includes('label') || refLower.includes('tag')) {
    set.add('labels-tags');
    set.add('33333333-3333-3333-3333-333333333333');
  }

  return Array.from(set);
}

/**
 * Determines whether a specific cart item matches a coupon's eligibility rules
 */
export function isItemEligibleForCoupon(
  item: CartItemLike,
  coupon: CouponRule,
  allCats: CachedCategoryItem[] = cachedCategories.length > 0 ? cachedCategories : initialCategories,
  allProds: CachedProductItem[] = cachedProducts.length > 0 ? cachedProducts : []
): boolean {
  const itemId = String(item.id || '').toLowerCase();
  const itemSlug = String(item.slug || '').toLowerCase();
  const itemProdId = String(item.productId || '').toLowerCase();
  const itemTitle = String(item.title || '').toLowerCase();
  const itemCategory = String(item.category || '').toLowerCase();
  const itemCatId = String(item.categoryId || '').toLowerCase();

  // Extract base UUID or numeric ID if itemId is composite (e.g. "uuid-std-50")
  const uuidMatch = itemId.match(/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/i);
  const extractedId = uuidMatch ? uuidMatch[1].toLowerCase() : (itemId.split('-std-')[0] || itemId.split('-pack-')[0] || '').toLowerCase();

  // Lookup in DB products list first, then static PRODUCTS
  const dbProduct = allProds.find(p => 
    p.id.toLowerCase() === itemProdId ||
    p.id.toLowerCase() === itemId ||
    p.id.toLowerCase() === extractedId ||
    (itemSlug && p.slug.toLowerCase() === itemSlug) ||
    itemId.startsWith(p.id.toLowerCase())
  );

  const staticProduct = PRODUCTS.find(p => 
    p.id.toLowerCase() === itemProdId ||
    p.id.toLowerCase() === itemId ||
    p.id.toLowerCase() === extractedId ||
    (itemSlug && p.slug.toLowerCase() === itemSlug) ||
    itemId.startsWith(p.id.toLowerCase())
  );

  const effectiveCategory = 
    itemCategory || 
    dbProduct?.category_id || 
    staticProduct?.category || 
    '';

  const effectiveCategoryLabel = 
    item.categoryLabel?.toLowerCase() || 
    staticProduct?.categoryLabel?.toLowerCase() || 
    '';

  // 1. Check Product Exclusions
  if (Array.isArray(coupon.excluded_product_ids) && coupon.excluded_product_ids.length > 0) {
    const isExcluded = coupon.excluded_product_ids.some(ex => {
      const exLower = ex.toLowerCase();
      return (
        exLower === itemId ||
        exLower === itemSlug ||
        exLower === itemProdId ||
        exLower === extractedId ||
        (dbProduct && dbProduct.id.toLowerCase() === exLower) ||
        (staticProduct && (staticProduct.id.toLowerCase() === exLower || staticProduct.slug.toLowerCase() === exLower))
      );
    });
    if (isExcluded) return false;
  }

  // 2. Check Category Exclusions
  if (Array.isArray(coupon.excluded_category_ids) && coupon.excluded_category_ids.length > 0) {
    const itemCatIdentifiers = [
      ...resolveCategoryIdentifiers(effectiveCategory, allCats),
      ...resolveCategoryIdentifiers(itemCatId, allCats),
      effectiveCategoryLabel
    ].filter(Boolean);

    const isExcludedCat = coupon.excluded_category_ids.some(ex => {
      const exIdentifiers = resolveCategoryIdentifiers(ex, allCats);
      return itemCatIdentifiers.some(id => exIdentifiers.includes(id));
    });
    if (isExcludedCat) return false;
  }

  // 3. Check Inclusions
  // A. All Products (Site-Wide)
  if (coupon.applies_to === 'all') {
    return true;
  }

  // B. Specific Products
  if (coupon.applies_to === 'products') {
    if (!Array.isArray(coupon.applied_product_ids) || coupon.applied_product_ids.length === 0) {
      return false;
    }
    return coupon.applied_product_ids.some(appProd => {
      const appLower = appProd.toLowerCase();
      return (
        appLower === itemId ||
        appLower === itemSlug ||
        appLower === itemProdId ||
        appLower === extractedId ||
        itemId.startsWith(appLower) ||
        itemId.includes(appLower) ||
        (dbProduct && (dbProduct.id.toLowerCase() === appLower || dbProduct.slug.toLowerCase() === appLower)) ||
        (staticProduct && (staticProduct.id.toLowerCase() === appLower || staticProduct.slug.toLowerCase() === appLower))
      );
    });
  }

  // C. Specific Categories
  if (coupon.applies_to === 'categories') {
    if (!Array.isArray(coupon.applied_category_ids) || coupon.applied_category_ids.length === 0) {
      return false;
    }

    // Special handling for corrugated boxes / cartons
    const isCorrugated = 
      item.isCustomBox ||
      itemTitle.includes('corrugated') ||
      itemTitle.includes('carton') ||
      itemTitle.includes('shipping box') ||
      effectiveCategory.includes('corrugat') ||
      effectiveCategory === 'packaging-boxes' ||
      effectiveCategory === '22222222-2222-2222-2222-222222222222' ||
      effectiveCategoryLabel.includes('corrugated');

    const itemCatIdentifiers = [
      ...resolveCategoryIdentifiers(effectiveCategory, allCats),
      ...resolveCategoryIdentifiers(itemCatId, allCats),
      effectiveCategoryLabel,
      ...(isCorrugated ? ['corrugated', 'corrugated-boxes', 'bx-1', 'packaging-boxes', 'packaging-material', '22222222-2222-2222-2222-222222222222'] : [])
    ].filter(Boolean);

    return coupon.applied_category_ids.some(appCat => {
      const appIdentifiers = resolveCategoryIdentifiers(appCat, allCats);
      return itemCatIdentifiers.some(id => appIdentifiers.includes(id));
    });
  }

  return false;
}

/**
 * Calculates item-level discount and recalculates GST and grand total accurately
 */
export function calculateCouponDiscount(
  coupon: CouponRule,
  cart: CartItemLike[],
  allCats: CachedCategoryItem[] = cachedCategories.length > 0 ? cachedCategories : initialCategories,
  allProds: CachedProductItem[] = cachedProducts.length > 0 ? cachedProducts : []
): DiscountCalculationResult {
  const subtotal = cart.reduce((sum, it) => sum + (Number(it.price) * Number(it.qty)), 0);

  // 1. Min order value check
  if (coupon.min_order_value && coupon.min_order_value > 0) {
    if (subtotal < coupon.min_order_value) {
      return {
        isValid: false,
        errorMessage: `Minimum order value of ₹${coupon.min_order_value} is required for coupon ${coupon.code} (Current: ₹${subtotal.toFixed(2)})`,
        coupon,
        discountTotal: 0,
        subtotal,
        discountedSubtotal: subtotal,
        eligibleItemIds: [],
        itemDiscounts: {},
        gstAmount: calculateCartGst(cart, {}),
        finalTotal: subtotal + calculateCartGst(cart, {})
      };
    }
  }

  // 2. Determine eligible items
  const eligibleItems: CartItemLike[] = [];
  const eligibleItemIds: string[] = [];

  for (const item of cart) {
    if (isItemEligibleForCoupon(item, coupon, allCats, allProds)) {
      eligibleItems.push(item);
      eligibleItemIds.push(item.id);
    }
  }

  if (eligibleItems.length === 0) {
    let scopeDesc = 'eligible items';
    if (coupon.applies_to === 'categories') {
      const catNames = coupon.applied_category_ids && coupon.applied_category_ids.length > 0
        ? coupon.applied_category_ids
            .map(idOrSlug => {
              const found = allCats.find(c => c.id.toLowerCase() === idOrSlug.toLowerCase() || c.slug.toLowerCase() === idOrSlug.toLowerCase());
              return found ? found.name : idOrSlug;
            })
            .filter((v, i, a) => a.indexOf(v) === i)
            .slice(0, 3)
            .join(', ')
        : 'selected categories';
      scopeDesc = `selected categories (${catNames})`;
    } else if (coupon.applies_to === 'products') {
      scopeDesc = 'selected products';
    }

    return {
      isValid: false,
      errorMessage: `Coupon ${coupon.code} is not applicable to any items currently in your cart. It applies to ${scopeDesc}.`,
      coupon,
      discountTotal: 0,
      subtotal,
      discountedSubtotal: subtotal,
      eligibleItemIds: [],
      itemDiscounts: {},
      gstAmount: calculateCartGst(cart, {}),
      finalTotal: subtotal + calculateCartGst(cart, {})
    };
  }

  const eligibleSubtotal = eligibleItems.reduce((sum, it) => sum + (Number(it.price) * Number(it.qty)), 0);
  const itemDiscounts: Record<string, number> = {};
  let totalDiscount = 0;

  if (coupon.discount_type === 'percentage') {
    const pct = Math.max(0, Math.min(100, Number(coupon.discount_value)));
    let rawTotalDiscount = 0;

    for (const it of eligibleItems) {
      const itSub = Number(it.price) * Number(it.qty);
      const rawDisc = itSub * (pct / 100);
      rawTotalDiscount += rawDisc;
    }

    // Apply optional discount cap
    let effectiveTotalDiscount = rawTotalDiscount;
    if (coupon.max_discount_cap && coupon.max_discount_cap > 0 && rawTotalDiscount > coupon.max_discount_cap) {
      effectiveTotalDiscount = coupon.max_discount_cap;
    }

    // Allocate proportionally to each eligible item
    for (const it of eligibleItems) {
      const itSub = Number(it.price) * Number(it.qty);
      const rawDisc = itSub * (pct / 100);
      const allocated = rawTotalDiscount > 0 ? (rawDisc / rawTotalDiscount) * effectiveTotalDiscount : 0;
      itemDiscounts[it.id] = Math.min(itSub, Math.round(allocated * 100) / 100);
    }

    totalDiscount = Object.values(itemDiscounts).reduce((s, d) => s + d, 0);
  } else {
    // Flat amount discount
    const flatAmount = Math.max(0, Number(coupon.discount_value));
    const effectiveTotalDiscount = Math.min(flatAmount, eligibleSubtotal);

    for (const it of eligibleItems) {
      const itSub = Number(it.price) * Number(it.qty);
      const allocated = eligibleSubtotal > 0 ? (itSub / eligibleSubtotal) * effectiveTotalDiscount : 0;
      itemDiscounts[it.id] = Math.min(itSub, Math.round(allocated * 100) / 100);
    }

    totalDiscount = Object.values(itemDiscounts).reduce((s, d) => s + d, 0);
  }

  // Final sanity clamp: discount can never exceed subtotal and final total cannot be below 0
  totalDiscount = Math.min(subtotal, Math.max(0, totalDiscount));
  const discountedSubtotal = Math.max(0, subtotal - totalDiscount);

  // Recalculate dynamic item-wise GST on the discounted taxable amounts
  const gstAmount = calculateCartGst(cart, itemDiscounts);
  const finalTotal = Math.max(0, discountedSubtotal + gstAmount);

  return {
    isValid: true,
    coupon,
    discountTotal: Math.round(totalDiscount * 100) / 100,
    subtotal: Math.round(subtotal * 100) / 100,
    discountedSubtotal: Math.round(discountedSubtotal * 100) / 100,
    eligibleItemIds,
    itemDiscounts,
    gstAmount: Math.round(gstAmount * 100) / 100,
    finalTotal: Math.round(finalTotal * 100) / 100
  };
}

/**
 * Calculates cart GST on item-level taxable amounts
 */
export function calculateCartGst(
  cart: CartItemLike[],
  itemDiscounts: Record<string, number>
): number {
  return cart.reduce((sum, item) => {
    const rawRate = item.gstRate as any;
    const rate = (rawRate !== null && rawRate !== undefined && rawRate !== '')
      ? (typeof rawRate === 'number' ? rawRate : (parseFloat(String(rawRate).replace(/[^0-9.]/g, '')) || 18))
      : 18;

    const itemGross = Number(item.price) * Number(item.qty);
    const itemDisc = itemDiscounts[item.id] || 0;
    const itemTaxable = Math.max(0, itemGross - itemDisc);

    return sum + (itemTaxable * (rate / 100));
  }, 0);
}

/**
 * Fetch all coupons directly from Supabase coupons table (Primary Source of Truth)
 */
export async function getAllCoupons(forceRefresh = false): Promise<CouponRule[]> {
  try {
    // 1. Primary Source: Supabase coupons table
    const { data: dbCoupons, error } = await supabaseAdmin
      .from('coupons')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && Array.isArray(dbCoupons) && dbCoupons.length > 0) {
      const mapped: CouponRule[] = dbCoupons.map(c => ({
        id: c.id,
        code: normalizeCouponCode(c.code),
        discount_type: c.discount_type || 'percentage',
        discount_value: Number(c.discount_value || 0),
        max_discount_cap: c.max_discount_cap ? Number(c.max_discount_cap) : null,
        applies_to: c.applies_to || 'all',
        applied_category_ids: Array.isArray(c.applied_category_ids) ? c.applied_category_ids : [],
        applied_product_ids: Array.isArray(c.applied_product_ids) ? c.applied_product_ids : [],
        excluded_category_ids: Array.isArray(c.excluded_category_ids) ? c.excluded_category_ids : [],
        excluded_product_ids: Array.isArray(c.excluded_product_ids) ? c.excluded_product_ids : [],
        min_order_value: c.min_order_value ? Number(c.min_order_value) : null,
        start_date: c.start_date || null,
        expiry_date: c.expiry_date || null,
        is_active: c.is_active !== false,
        usage_limit: c.usage_limit ? Number(c.usage_limit) : null,
        usage_count: Number(c.usage_count || 0),
        per_user_limit: c.per_user_limit ? Number(c.per_user_limit) : null,
        show_in_banner: !!c.show_in_banner,
        banner_text: c.banner_text || null,
        created_at: c.created_at,
        updated_at: c.updated_at
      }));

      inMemoryCoupons = mergeCoupons(SEED_COUPONS, mapped);
      isInitialized = true;
      return inMemoryCoupons;
    }

    // 2. Fallback: site_settings.homepage_config.coupons
    const { data: row } = await supabaseAdmin
      .from('site_settings')
      .select('homepage_config')
      .eq('id', 1)
      .maybeSingle();

    const storedCoupons = (row?.homepage_config as any)?.coupons;
    if (Array.isArray(storedCoupons) && storedCoupons.length > 0) {
      inMemoryCoupons = mergeCoupons(SEED_COUPONS, storedCoupons);
      isInitialized = true;
      return inMemoryCoupons;
    }
  } catch (err) {
    console.warn('Error reading coupons from Supabase:', err);
  }

  if (!isInitialized || forceRefresh) {
    inMemoryCoupons = [...SEED_COUPONS];
    isInitialized = true;
  }
  return inMemoryCoupons;
}

/**
 * Persists coupons list to both Supabase coupons table and site_settings
 */
export async function persistCoupons(coupons: CouponRule[], deletedCoupon?: CouponRule): Promise<boolean> {
  inMemoryCoupons = [...coupons];
  isInitialized = true;

  // 1. Primary Sync: Supabase coupons table (Every attribute stored cleanly)
  try {
    if (deletedCoupon) {
      await supabaseAdmin
        .from('coupons')
        .delete()
        .or(`id.eq.${deletedCoupon.id},code.eq.${normalizeCouponCode(deletedCoupon.code)}`);
    }

    for (const c of coupons) {
      await supabaseAdmin
        .from('coupons')
        .upsert({
          code: normalizeCouponCode(c.code),
          discount_type: c.discount_type || 'percentage',
          discount_value: Number(c.discount_value || 0),
          min_order_value: c.min_order_value ? Number(c.min_order_value) : 0,
          max_discount_cap: c.max_discount_cap ? Number(c.max_discount_cap) : null,
          applies_to: c.applies_to || 'all',
          applied_category_ids: Array.isArray(c.applied_category_ids) ? c.applied_category_ids : [],
          applied_product_ids: Array.isArray(c.applied_product_ids) ? c.applied_product_ids : [],
          excluded_category_ids: Array.isArray(c.excluded_category_ids) ? c.excluded_category_ids : [],
          excluded_product_ids: Array.isArray(c.excluded_product_ids) ? c.excluded_product_ids : [],
          usage_limit: c.usage_limit ? Number(c.usage_limit) : null,
          usage_count: Number(c.usage_count || 0),
          per_user_limit: c.per_user_limit ? Number(c.per_user_limit) : 1,
          start_date: c.start_date || null,
          expiry_date: c.expiry_date || null,
          is_active: c.is_active !== false,
          show_in_banner: !!c.show_in_banner,
          banner_text: c.banner_text || null
        }, { onConflict: 'code' });
    }
  } catch (err) {
    console.warn('Could not persist coupons to coupons table:', err);
  }

  // 2. Secondary Sync: site_settings.homepage_config.coupons (Keeps home banner & ticker aligned)
  try {
    const { data: row } = await supabaseAdmin
      .from('site_settings')
      .select('homepage_config')
      .eq('id', 1)
      .maybeSingle();

    const currentConfig = (row?.homepage_config as any) || {};
    
    // Auto-update top banner if any coupon has show_in_banner
    const bannerCoupon = coupons.find(c => c.is_active && c.show_in_banner && c.banner_text);
    if (bannerCoupon) {
      currentConfig.tickerText = bannerCoupon.banner_text;
      currentConfig.tickerActive = true;
    }

    currentConfig.coupons = coupons;

    await supabaseAdmin
      .from('site_settings')
      .update({
        homepage_config: currentConfig,
        updated_at: new Date().toISOString()
      })
      .eq('id', 1);
  } catch (err) {
    console.warn('Could not persist coupons to site_settings:', err);
  }

  return true;
}

/**
 * Helper to merge coupons preserving updates
 */
function mergeCoupons(base: CouponRule[], incoming: CouponRule[]): CouponRule[] {
  const map = new Map<string, CouponRule>();
  base.forEach(c => map.set(normalizeCouponCode(c.code), c));
  incoming.forEach(c => map.set(normalizeCouponCode(c.code), c));
  return Array.from(map.values());
}

/**
 * Finds the currently active coupon that should be shown in the banner
 */
export async function getActiveBannerCoupon(): Promise<CouponRule | null> {
  const all = await getAllCoupons();
  const now = new Date();

  return all.find(c => {
    if (!c.is_active || !c.show_in_banner || !c.banner_text) return false;
    if (c.usage_limit && c.usage_count >= c.usage_limit) return false;
    if (c.start_date && new Date(c.start_date) > now) return false;
    if (c.expiry_date && new Date(c.expiry_date) < now) return false;
    return true;
  }) || null;
}

/**
 * Server-side coupon validator for cart and checkout
 */
export async function validateCouponForCart(
  rawCode: string,
  cart: CartItemLike[],
  customerPhone?: string
): Promise<DiscountCalculationResult> {
  const code = normalizeCouponCode(rawCode);

  if (!code) {
    return {
      isValid: false,
      errorMessage: 'Please enter a valid coupon code.',
      discountTotal: 0,
      subtotal: 0,
      discountedSubtotal: 0,
      eligibleItemIds: [],
      itemDiscounts: {},
      gstAmount: 0,
      finalTotal: 0
    };
  }

  if (!cart || cart.length === 0) {
    return {
      isValid: false,
      errorMessage: 'Your cart is empty. Please add items before applying a coupon.',
      discountTotal: 0,
      subtotal: 0,
      discountedSubtotal: 0,
      eligibleItemIds: [],
      itemDiscounts: {},
      gstAmount: 0,
      finalTotal: 0
    };
  }

  // Load fresh coupons and taxonomy in parallel
  const [allCoupons, allCats, allProds] = await Promise.all([
    getAllCoupons(true),
    getCachedCategories(),
    getCachedProducts()
  ]);

  const coupon = allCoupons.find(c => normalizeCouponCode(c.code) === code);

  if (!coupon) {
    return {
      isValid: false,
      errorMessage: `Coupon "${code}" is invalid or does not exist.`,
      discountTotal: 0,
      subtotal: 0,
      discountedSubtotal: 0,
      eligibleItemIds: [],
      itemDiscounts: {},
      gstAmount: 0,
      finalTotal: 0
    };
  }

  // Active status check
  if (!coupon.is_active) {
    return {
      isValid: false,
      errorMessage: `Coupon "${code}" is currently disabled or inactive.`,
      coupon,
      discountTotal: 0,
      subtotal: 0,
      discountedSubtotal: 0,
      eligibleItemIds: [],
      itemDiscounts: {},
      gstAmount: 0,
      finalTotal: 0
    };
  }

  // Date validity check
  const now = new Date();
  if (coupon.start_date && new Date(coupon.start_date) > now) {
    return {
      isValid: false,
      errorMessage: `Coupon "${code}" is scheduled for a future date and is not yet active.`,
      coupon,
      discountTotal: 0,
      subtotal: 0,
      discountedSubtotal: 0,
      eligibleItemIds: [],
      itemDiscounts: {},
      gstAmount: 0,
      finalTotal: 0
    };
  }

  if (coupon.expiry_date && new Date(coupon.expiry_date) < now) {
    return {
      isValid: false,
      errorMessage: `Coupon "${code}" has expired on ${new Date(coupon.expiry_date).toLocaleDateString('en-IN')}.`,
      coupon,
      discountTotal: 0,
      subtotal: 0,
      discountedSubtotal: 0,
      eligibleItemIds: [],
      itemDiscounts: {},
      gstAmount: 0,
      finalTotal: 0
    };
  }

  // Total usage limit check
  if (coupon.usage_limit && coupon.usage_count >= coupon.usage_limit) {
    return {
      isValid: false,
      errorMessage: `Coupon "${code}" has reached its maximum total redemption limit.`,
      coupon,
      discountTotal: 0,
      subtotal: 0,
      discountedSubtotal: 0,
      eligibleItemIds: [],
      itemDiscounts: {},
      gstAmount: 0,
      finalTotal: 0
    };
  }

  // Per-customer usage limit check (if customer phone is provided)
  if (customerPhone && coupon.per_user_limit) {
    try {
      const cleanPhone = customerPhone.replace(/\D/g, '').slice(-10);
      if (cleanPhone) {
        const { count } = await supabaseAdmin
          .from('orders')
          .select('id', { count: 'exact', head: true })
          .eq('coupon_code', coupon.code)
          .ilike('customer_phone', `%${cleanPhone}%`);

        if (typeof count === 'number' && count >= coupon.per_user_limit) {
          return {
            isValid: false,
            errorMessage: `You have already redeemed coupon "${code}" the maximum allowable times (${coupon.per_user_limit}x).`,
            coupon,
            discountTotal: 0,
            subtotal: 0,
            discountedSubtotal: 0,
            eligibleItemIds: [],
            itemDiscounts: {},
            gstAmount: 0,
            finalTotal: 0
          };
        }
      }
    } catch {}
  }

  // Run calculation and item eligibility check
  return calculateCouponDiscount(coupon, cart, allCats, allProds);
}

/**
 * Increments coupon usage count when an order is successfully confirmed
 */
export async function recordCouponUsage(rawCode: string, orderNumber: string, customerPhone?: string): Promise<void> {
  const code = normalizeCouponCode(rawCode);
  if (!code) return;

  try {
    const all = await getAllCoupons(true);
    const index = all.findIndex(c => normalizeCouponCode(c.code) === code);
    if (index >= 0) {
      all[index].usage_count = (all[index].usage_count || 0) + 1;
      all[index].updated_at = new Date().toISOString();
      await persistCoupons(all);
    }
  } catch (err) {
    console.warn(`Could not increment usage for coupon ${code}:`, err);
  }
}
