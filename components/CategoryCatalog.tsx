'use client';

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ProductCard } from '@/components/ProductCard';
import { CategoryMeta } from '@/lib/catalog';
import { 
  ChevronRightIcon, 
  XIcon, 
  SlidersHorizontalIcon, 
  ArrowUpDownIcon, 
  PackageIcon, 
  CheckCircleIcon,
  CheckIcon,
  StarIcon
} from '@/components/Icons';

export interface CategoryCatalogProps {
  category?: CategoryMeta | null;
  initialProducts: any[];
  allCategories?: { id: string; name: string; slug: string; parent_id?: string | null }[];
  isShopAll?: boolean;
  pageTitle?: string;
  pageDescription?: string;
}

export const CategoryCatalog: React.FC<CategoryCatalogProps> = ({
  category,
  initialProducts,
  allCategories = [],
  isShopAll = false,
  pageTitle,
  pageDescription
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // 1. Parse initial filter & sort states from URL
  const initialSort = searchParams?.get('sort') || 'popular';
  const initialMinPrice = searchParams?.get('min_price') ? Number(searchParams.get('min_price')) : '';
  const initialMaxPrice = searchParams?.get('max_price') ? Number(searchParams.get('max_price')) : '';
  const initialSubcat = searchParams?.get('subcat') || '';
  const initialInStock = searchParams?.get('in_stock') === 'true';
  const initialDiscount = searchParams?.get('discount') ? Number(searchParams.get('discount')) : 0;
  const initialRating = searchParams?.get('rating') ? Number(searchParams.get('rating')) : 0;
  const initialSearch = searchParams?.get('q') || '';

  // State hooks
  const [sort, setSort] = useState<string>(initialSort);
  const [minPrice, setMinPrice] = useState<number | ''>(initialMinPrice);
  const [maxPrice, setMaxPrice] = useState<number | ''>(initialMaxPrice);
  const [selectedSubcat, setSelectedSubcat] = useState<string>(initialSubcat);
  const [inStockOnly, setInStockOnly] = useState<boolean>(initialInStock);
  const [minDiscount, setMinDiscount] = useState<number>(initialDiscount);
  const [minRating, setMinRating] = useState<number>(initialRating);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);

  // Mobile drawer state
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Sync state to URL without reloading page
  const syncUrlParams = useCallback((
    newSort: string,
    newMin: number | '',
    newMax: number | '',
    newSubcat: string,
    newStock: boolean,
    newDisc: number,
    newRate: number,
    newQ: string
  ) => {
    const params = new URLSearchParams();
    if (newSort && newSort !== 'popular') params.set('sort', newSort);
    if (newMin !== '') params.set('min_price', String(newMin));
    if (newMax !== '') params.set('max_price', String(newMax));
    if (newSubcat) params.set('subcat', newSubcat);
    if (newStock) params.set('in_stock', 'true');
    if (newDisc > 0) params.set('discount', String(newDisc));
    if (newRate > 0) params.set('rating', String(newRate));
    if (newQ) params.set('q', newQ);

    const queryString = params.toString();
    const currentPath = window.location.pathname;
    const newUrl = queryString ? `${currentPath}?${queryString}` : currentPath;

    window.history.replaceState({ ...window.history.state, as: newUrl, url: newUrl }, '', newUrl);
  }, []);

  // Update URL whenever filters or sort change
  useEffect(() => {
    syncUrlParams(sort, minPrice, maxPrice, selectedSubcat, inStockOnly, minDiscount, minRating, searchQuery);
  }, [sort, minPrice, maxPrice, selectedSubcat, inStockOnly, minDiscount, minRating, searchQuery, syncUrlParams]);

  // Determine subcategory options
  const subcategoryOptions = useMemo(() => {
    if (category?.subcategories && category.subcategories.length > 0) {
      return category.subcategories;
    }
    if (isShopAll && allCategories.length > 0) {
      return allCategories
        .filter(c => !c.parent_id)
        .map(c => ({ id: c.id, name: c.name, slug: c.slug }));
    }
    return [];
  }, [category, isShopAll, allCategories]);

  // Compute price boundaries from product dataset
  const { datasetMinPrice, datasetMaxPrice } = useMemo(() => {
    if (!initialProducts || initialProducts.length === 0) {
      return { datasetMinPrice: 0, datasetMaxPrice: 1000 };
    }
    const prices = initialProducts.map(p => Number(p.selling_price || p.price || 0));
    return {
      datasetMinPrice: Math.min(...prices),
      datasetMaxPrice: Math.max(...prices)
    };
  }, [initialProducts]);

  // Filter and sort products
  const processedProducts = useMemo(() => {
    let list = [...initialProducts];

    // 1. Text search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(p => {
        const name = String(p.name || p.title || '').toLowerCase();
        const desc = String(p.description || p.desc || '').toLowerCase();
        const cat = String(p.categoryLabel || p.category_slug || '').toLowerCase();
        return name.includes(q) || desc.includes(q) || cat.includes(q);
      });
    }

    // 2. Subcategory filter
    if (selectedSubcat) {
      list = list.filter(p => {
        const subSlug = selectedSubcat.toLowerCase();
        const pCatSlug = String(p.category_slug || '').toLowerCase();
        const pCatName = String(p.categoryLabel || '').toLowerCase();
        const pName = String(p.name || p.title || '').toLowerCase();
        return (
          pCatSlug === subSlug ||
          pCatName.includes(subSlug.replace(/-/g, ' ')) ||
          pName.includes(subSlug.replace(/-/g, ' ')) ||
          p.category_id === selectedSubcat
        );
      });
    }

    // 3. Price range filter
    if (minPrice !== '') {
      list = list.filter(p => Number(p.selling_price || p.price || 0) >= Number(minPrice));
    }
    if (maxPrice !== '') {
      list = list.filter(p => Number(p.selling_price || p.price || 0) <= Number(maxPrice));
    }

    // 4. In Stock Availability filter
    if (inStockOnly) {
      list = list.filter(p => (p.stock_quantity ?? 100) > 0);
    }

    // 5. Discount Percentage filter
    if (minDiscount > 0) {
      list = list.filter(p => {
        const mrp = Number(p.mrp || 0);
        const sp = Number(p.selling_price || p.price || 0);
        const disc = mrp > sp ? Math.round(((mrp - sp) / mrp) * 100) : 15;
        return disc >= minDiscount;
      });
    }

    // 6. Rating filter (4 stars and up)
    if (minRating > 0) {
      list = list.filter(p => {
        const r = Number(p.rating || 4.5);
        return r >= minRating;
      });
    }

    // 7. Apply Sorting
    list.sort((a, b) => {
      const priceA = Number(a.selling_price || a.price || 0);
      const priceB = Number(b.selling_price || b.price || 0);
      const nameA = String(a.name || a.title || '');
      const nameB = String(b.name || b.title || '');
      const mrpA = Number(a.mrp || priceA * 1.33);
      const mrpB = Number(b.mrp || priceB * 1.33);
      const discA = mrpA > priceA ? ((mrpA - priceA) / mrpA) * 100 : 0;
      const discB = mrpB > priceB ? ((mrpB - priceB) / mrpB) * 100 : 0;
      const reviewsA = Number(a.reviews || a.reviews_count || 50);
      const reviewsB = Number(b.reviews || b.reviews_count || 50);

      switch (sort) {
        case 'price_asc':
          return priceA - priceB;
        case 'price_desc':
          return priceB - priceA;
        case 'name_asc':
          return nameA.localeCompare(nameB);
        case 'discount_desc':
          return discB - discA;
        case 'newest':
          return (new Date(b.created_at || 0).getTime()) - (new Date(a.created_at || 0).getTime());
        case 'popular':
        default:
          return reviewsB - reviewsA;
      }
    });

    return list;
  }, [initialProducts, searchQuery, selectedSubcat, minPrice, maxPrice, inStockOnly, minDiscount, minRating, sort]);

  // Count active filters
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (selectedSubcat) count++;
    if (minPrice !== '') count++;
    if (maxPrice !== '') count++;
    if (inStockOnly) count++;
    if (minDiscount > 0) count++;
    if (minRating > 0) count++;
    if (searchQuery) count++;
    return count;
  }, [selectedSubcat, minPrice, maxPrice, inStockOnly, minDiscount, minRating, searchQuery]);

  const clearAllFilters = () => {
    setMinPrice('');
    setMaxPrice('');
    setSelectedSubcat('');
    setInStockOnly(false);
    setMinDiscount(0);
    setMinRating(0);
    setSearchQuery('');
    setSort('popular');
  };

  const titleText = pageTitle || category?.name || (isShopAll ? 'All Packaging Products' : 'Catalog');
  const descText = pageDescription || category?.description || 'Browse factory-direct industrial boxes, labels, stickers, and bags.';

  return (
    <div style={{ background: '#FAFAFC', minHeight: '80vh', paddingBottom: '70px' }}>
      {/* 1. Header & Breadcrumb Banner */}
      <div style={{ background: '#FFFFFF', borderBottom: '1px solid #E2E8F0', padding: '24px 0 20px 0' }}>
        <div className="container">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#64748B', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: '#64748B', textDecoration: 'none', transition: 'color 0.15s' }}>
              Home
            </Link>
            <span>/</span>
            {isShopAll ? (
              <span style={{ color: '#0F172A', fontWeight: 700 }}>All Products</span>
            ) : (
              <>
                {category?.parentSlug && (
                  <>
                    <Link href={`/category/${category.parentSlug}`} style={{ color: '#64748B', textDecoration: 'none' }}>
                      {category.parentName || 'Category'}
                    </Link>
                    <span>/</span>
                  </>
                )}
                <span style={{ color: '#0F172A', fontWeight: 700 }}>{category?.name || 'Category'}</span>
              </>
            )}
          </nav>

          {/* Title & Product Count */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h1 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#0F172A', margin: '0 0 6px 0', letterSpacing: '-0.5px' }}>
                {titleText}
              </h1>
              <p style={{ margin: 0, color: '#64748B', fontSize: '0.92rem', maxWidth: '750px', lineHeight: 1.5 }}>
                {descText}
              </p>
            </div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1D4ED8', background: '#EFF6FF', padding: '6px 14px', borderRadius: '20px', border: '1px solid #BFDBFE' }}>
              {processedProducts.length} {processedProducts.length === 1 ? 'Product' : 'Products'} Found
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Catalog Area (Sidebar + Grid) */}
      <div className="container" style={{ paddingTop: '24px' }}>
        {/* Top Control Bar: Active Filter Chips & Sort Selector */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', marginBottom: '20px', background: '#FFFFFF', padding: '14px 18px', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
          {/* Mobile Filter Button */}
          <button
            type="button"
            onClick={() => setIsMobileFilterOpen(true)}
            className="mobile-filter-trigger-btn"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '8px',
              padding: '9px 16px',
              background: '#1D4ED8',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.88rem',
              cursor: 'pointer'
            }}
          >
            <SlidersHorizontalIcon size={16} />
            <span>Filter &amp; Sort</span>
            {activeFiltersCount > 0 && (
              <span style={{ background: '#FFFFFF', color: '#1D4ED8', fontSize: '0.75rem', fontWeight: 800, padding: '2px 7px', borderRadius: '12px' }}>
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Active Filter Chips (Desktop & Mobile) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', flex: 1 }}>
            {activeFiltersCount > 0 ? (
              <>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#475569' }}>Active Filters:</span>
                {selectedSubcat && (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#EFF6FF', color: '#1D4ED8', border: '1px solid #BFDBFE', padding: '4px 10px', borderRadius: '16px', fontSize: '0.78rem', fontWeight: 700 }}>
                    {subcategoryOptions.find(s => s.slug === selectedSubcat)?.name || selectedSubcat}
                    <button type="button" onClick={() => setSelectedSubcat('')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1D4ED8', padding: 0, display: 'flex' }}>
                      <XIcon size={13} />
                    </button>
                  </span>
                )}
                {(minPrice !== '' || maxPrice !== '') && (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#EFF6FF', color: '#1D4ED8', border: '1px solid #BFDBFE', padding: '4px 10px', borderRadius: '16px', fontSize: '0.78rem', fontWeight: 700 }}>
                    ₹{minPrice || 0} – ₹{maxPrice || 'Max'}
                    <button type="button" onClick={() => { setMinPrice(''); setMaxPrice(''); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1D4ED8', padding: 0, display: 'flex' }}>
                      <XIcon size={13} />
                    </button>
                  </span>
                )}
                {inStockOnly && (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#EFF6FF', color: '#1D4ED8', border: '1px solid #BFDBFE', padding: '4px 10px', borderRadius: '16px', fontSize: '0.78rem', fontWeight: 700 }}>
                    In Stock Only
                    <button type="button" onClick={() => setInStockOnly(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1D4ED8', padding: 0, display: 'flex' }}>
                      <XIcon size={13} />
                    </button>
                  </span>
                )}
                {minDiscount > 0 && (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#EFF6FF', color: '#1D4ED8', border: '1px solid #BFDBFE', padding: '4px 10px', borderRadius: '16px', fontSize: '0.78rem', fontWeight: 700 }}>
                    {minDiscount}%+ OFF
                    <button type="button" onClick={() => setMinDiscount(0)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1D4ED8', padding: 0, display: 'flex' }}>
                      <XIcon size={13} />
                    </button>
                  </span>
                )}
                {minRating > 0 && (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#EFF6FF', color: '#1D4ED8', border: '1px solid #BFDBFE', padding: '4px 10px', borderRadius: '16px', fontSize: '0.78rem', fontWeight: 700 }}>
                    4★ &amp; Above
                    <button type="button" onClick={() => setMinRating(0)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1D4ED8', padding: 0, display: 'flex' }}>
                      <XIcon size={13} />
                    </button>
                  </span>
                )}
                <button
                  type="button"
                  onClick={clearAllFilters}
                  style={{ background: 'none', border: 'none', color: '#EF4444', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Clear All
                </button>
              </>
            ) : (
              <span style={{ fontSize: '0.85rem', color: '#64748B' }}>Showing verified factory packaging items</span>
            )}
          </div>

          {/* Desktop Sort Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label htmlFor="catalog-sort" style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569', whiteSpace: 'nowrap' }}>
              Sort by:
            </label>
            <select
              id="catalog-sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              style={{
                padding: '8px 12px',
                borderRadius: '8px',
                border: '1.5px solid #CBD5E1',
                background: '#FFFFFF',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: '#0F172A',
                cursor: 'pointer'
              }}
            >
              <option value="popular">Popularity / Best Sellers</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="newest">Newest First</option>
              <option value="name_asc">Name: A to Z</option>
              <option value="discount_desc">Discount: Highest First</option>
            </select>
          </div>
        </div>

        {/* Layout Grid: Desktop Sidebar + Product Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '270px 1fr', gap: '28px', alignItems: 'start' }} className="catalog-layout-grid">
          {/* Desktop Filter Sidebar */}
          <aside 
            className="catalog-desktop-sidebar" 
            style={{ 
              background: '#FFFFFF', 
              borderRadius: '16px', 
              border: '1px solid #E2E8F0', 
              boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.04), 0 1px 3px rgba(15, 23, 42, 0.02)',
              position: 'sticky',
              top: '90px',
              overflow: 'hidden'
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid #F1F5F9', background: '#FAFAFC' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <SlidersHorizontalIcon size={16} color="#1D4ED8" />
                </div>
                <div>
                  <h3 style={{ fontSize: '0.98rem', fontWeight: 800, color: '#0F172A', margin: 0, lineHeight: 1.2 }}>
                    Filters
                  </h3>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>
                    {processedProducts.length} items found
                  </div>
                </div>
              </div>
              {activeFiltersCount > 0 && (
                <button
                  type="button"
                  onClick={clearAllFilters}
                  style={{ 
                    background: '#FEF2F2', 
                    border: '1px solid #FECACA', 
                    color: '#DC2626', 
                    fontSize: '0.74rem', 
                    fontWeight: 700, 
                    padding: '4px 10px', 
                    borderRadius: '20px', 
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  title="Clear all active filters"
                >
                  Reset ({activeFiltersCount})
                </button>
              )}
            </div>

            <div style={{ padding: '20px' }}>
              {/* Subcategories (if any) */}
              {subcategoryOptions.length > 0 && (
                <div style={{ marginBottom: '22px', paddingBottom: '20px', borderBottom: '1px solid #F1F5F9' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <h4 style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>
                      {category ? 'Subcategories' : 'Categories'}
                    </h4>
                    {selectedSubcat && (
                      <span style={{ fontSize: '0.72rem', color: '#1D4ED8', fontWeight: 700, cursor: 'pointer' }} onClick={() => setSelectedSubcat('')}>
                        Clear
                      </span>
                    )}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div
                      onClick={() => setSelectedSubcat('')}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '8px 10px',
                        borderRadius: '8px',
                        background: !selectedSubcat ? '#EFF6FF' : 'transparent',
                        color: !selectedSubcat ? '#1D4ED8' : '#334155',
                        fontWeight: !selectedSubcat ? 700 : 500,
                        fontSize: '0.84rem',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <span>All {category?.name || 'Items'}</span>
                      {!selectedSubcat && <CheckIcon size={14} color="#1D4ED8" />}
                    </div>
                    {subcategoryOptions.map(sub => {
                      const isSelected = selectedSubcat === sub.slug;
                      return (
                        <div
                          key={sub.id}
                          onClick={() => setSelectedSubcat(isSelected ? '' : sub.slug)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '8px 10px',
                            borderRadius: '8px',
                            background: isSelected ? '#EFF6FF' : 'transparent',
                            color: isSelected ? '#1D4ED8' : '#334155',
                            fontWeight: isSelected ? 700 : 500,
                            fontSize: '0.84rem',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease'
                          }}
                        >
                          <span>{sub.name}</span>
                          {isSelected && <CheckIcon size={14} color="#1D4ED8" />}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Price Range Filter */}
              <div style={{ marginBottom: '22px', paddingBottom: '20px', borderBottom: '1px solid #F1F5F9' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <h4 style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>
                    Price Range
                  </h4>
                  {(minPrice !== '' || maxPrice !== '') && (
                    <span style={{ fontSize: '0.72rem', color: '#1D4ED8', fontWeight: 700, cursor: 'pointer' }} onClick={() => { setMinPrice(''); setMaxPrice(''); }}>
                      Reset
                    </span>
                  )}
                </div>

                {/* Min / Max Input Boxes with integrated ₹ currency */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '8px', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: '8px', padding: '0 10px', height: '36px' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#94A3B8', marginRight: '4px' }}>₹</span>
                    <input
                      type="number"
                      placeholder="Min"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : '')}
                      style={{ width: '100%', border: 'none', background: 'transparent', fontSize: '0.85rem', fontWeight: 600, color: '#0F172A', outline: 'none' }}
                    />
                  </div>
                  <span style={{ color: '#94A3B8', fontWeight: 600, fontSize: '0.8rem' }}>–</span>
                  <div style={{ display: 'flex', alignItems: 'center', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: '8px', padding: '0 10px', height: '36px' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#94A3B8', marginRight: '4px' }}>₹</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : '')}
                      style={{ width: '100%', border: 'none', background: 'transparent', fontSize: '0.85rem', fontWeight: 600, color: '#0F172A', outline: 'none' }}
                    />
                  </div>
                </div>

                {/* Quick Presets */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                  {[
                    { label: 'Under ₹50', min: 0, max: 50 },
                    { label: '₹50 – ₹200', min: 50, max: 200 },
                    { label: '₹200 – ₹500', min: 200, max: 500 },
                    { label: 'Above ₹500', min: 500, max: '' },
                  ].map((bracket, idx) => {
                    const isBracketActive = minPrice === bracket.min && maxPrice === bracket.max;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          if (isBracketActive) {
                            setMinPrice('');
                            setMaxPrice('');
                          } else {
                            setMinPrice(bracket.min);
                            setMaxPrice(bracket.max);
                          }
                        }}
                        style={{
                          padding: '6px 8px',
                          borderRadius: '8px',
                          border: isBracketActive ? '1.5px solid #1D4ED8' : '1px solid #E2E8F0',
                          background: isBracketActive ? '#1D4ED8' : '#F8FAFC',
                          color: isBracketActive ? '#FFFFFF' : '#334155',
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                          textAlign: 'center'
                        }}
                      >
                        {bracket.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* In Stock Availability - Custom Toggle Card */}
              <div style={{ marginBottom: '22px', paddingBottom: '20px', borderBottom: '1px solid #F1F5F9' }}>
                <div
                  onClick={() => setInStockOnly(!inStockOnly)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 12px',
                    background: inStockOnly ? '#F0FDF4' : '#F8FAFC',
                    border: inStockOnly ? '1.5px solid #86EFAC' : '1px solid #E2E8F0',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: inStockOnly ? '#16A34A' : '#94A3B8', boxShadow: inStockOnly ? '0 0 0 3px rgba(34, 197, 94, 0.2)' : 'none' }} />
                    <div>
                      <div style={{ fontSize: '0.84rem', fontWeight: 700, color: inStockOnly ? '#166534' : '#1E293B', lineHeight: 1.2 }}>In Stock Only</div>
                      <div style={{ fontSize: '0.7rem', color: '#64748B' }}>Exclude out of stock</div>
                    </div>
                  </div>
                  {/* Modern Toggle Switch */}
                  <div style={{ width: '34px', height: '20px', borderRadius: '12px', background: inStockOnly ? '#16A34A' : '#CBD5E1', padding: '2px', transition: 'all 0.2s ease', position: 'relative' }}>
                    <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#FFFFFF', transform: inStockOnly ? 'translateX(14px)' : 'translateX(0)', transition: 'transform 0.2s ease', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
                  </div>
                </div>
              </div>

              {/* Minimum Discount Filter - Custom Styled List */}
              <div style={{ marginBottom: '22px', paddingBottom: '20px', borderBottom: '1px solid #F1F5F9' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <h4 style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>
                    Discount
                  </h4>
                  {minDiscount > 0 && (
                    <span style={{ fontSize: '0.72rem', color: '#1D4ED8', fontWeight: 700, cursor: 'pointer' }} onClick={() => setMinDiscount(0)}>
                      Reset
                    </span>
                  )}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {[
                    { val: 0, label: 'All Items' },
                    { val: 10, label: '10% or more', badge: '10% OFF+' },
                    { val: 20, label: '20% or more', badge: '20% OFF+' },
                    { val: 30, label: '30% or more', badge: '30% OFF+' },
                    { val: 50, label: '50% or more', badge: '50% OFF+' }
                  ].map((d) => {
                    const isSelected = minDiscount === d.val;
                    return (
                      <div
                        key={d.val}
                        onClick={() => setMinDiscount(d.val)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '7px 10px',
                          borderRadius: '8px',
                          background: isSelected ? '#EFF6FF' : 'transparent',
                          border: isSelected ? '1px solid #BFDBFE' : '1px solid transparent',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: isSelected ? '5px solid #1D4ED8' : '2px solid #CBD5E1', background: '#FFFFFF', transition: 'all 0.15s ease', flexShrink: 0 }} />
                          <span style={{ fontSize: '0.84rem', color: isSelected ? '#1D4ED8' : '#334155', fontWeight: isSelected ? 700 : 500 }}>
                            {d.label}
                          </span>
                        </div>
                        {d.badge && (
                          <span style={{ fontSize: '0.68rem', fontWeight: 800, padding: '2px 6px', borderRadius: '4px', background: isSelected ? '#DBEAFE' : '#F1F5F9', color: isSelected ? '#1D4ED8' : '#64748B' }}>
                            {d.badge}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Customer Rating Filter - Star Card */}
              <div>
                <h4 style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px' }}>
                  Customer Rating
                </h4>
                <div
                  onClick={() => setMinRating(minRating === 4 ? 0 : 4)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 12px',
                    background: minRating === 4 ? '#FEFCE8' : '#F8FAFC',
                    border: minRating === 4 ? '1.5px solid #FDE047' : '1px solid #E2E8F0',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {[1, 2, 3, 4].map(s => (
                        <StarIcon key={s} size={14} color="#EAB308" filled={true} />
                      ))}
                      <StarIcon size={14} color="#CBD5E1" filled={false} />
                    </div>
                    <span style={{ fontSize: '0.84rem', fontWeight: 700, color: minRating === 4 ? '#854D0E' : '#1E293B' }}>
                      4.0 &amp; Above
                    </span>
                  </div>
                  <div style={{ width: '18px', height: '18px', borderRadius: '5px', border: minRating === 4 ? '2px solid #EAB308' : '2px solid #CBD5E1', background: minRating === 4 ? '#EAB308' : '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {minRating === 4 && <CheckIcon size={12} color="#FFFFFF" />}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Cards Grid Area */}
          <main>
            {processedProducts.length > 0 ? (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                  gap: '20px'
                }}
                className="catalog-products-grid"
              >
                {processedProducts.map(product => (
                  <ProductCard key={product.id || product.slug} product={product} />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  padding: '60px 24px',
                  textAlign: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                }}
              >
                <div style={{ fontSize: '3.5rem', marginBottom: '16px' }}>📦</div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  No Products Found
                </h3>
                <p style={{ color: '#64748B', fontSize: '0.95rem', maxWidth: '420px', margin: '0 auto 24px auto', lineHeight: 1.5 }}>
                  {activeFiltersCount > 0
                    ? 'No products match the selected filters. Please adjust your price or clear filters to see all available items.'
                    : 'Currently no products have been added to this category yet. Check back soon or browse our full shop catalogue.'}
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  {activeFiltersCount > 0 && (
                    <button
                      type="button"
                      onClick={clearAllFilters}
                      style={{
                        background: '#1D4ED8',
                        color: '#FFFFFF',
                        border: 'none',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        fontWeight: 700,
                        fontSize: '0.92rem',
                        cursor: 'pointer'
                      }}
                    >
                      Clear All Filters
                    </button>
                  )}
                  <Link
                    href="/shop"
                    style={{
                      background: '#F1F5F9',
                      color: '#0F172A',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      fontWeight: 700,
                      fontSize: '0.92rem',
                      textDecoration: 'none'
                    }}
                  >
                    Browse All Products &rarr;
                  </Link>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* 3. Mobile Filter & Sort Drawer / Bottom Sheet */}
      {isMobileFilterOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', justifyContent: 'flex-end', background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(3px)' }}>
          <div
            style={{
              width: '100%',
              maxWidth: '380px',
              height: '100%',
              background: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '-4px 0 24px rgba(0,0,0,0.15)',
              animation: 'slideInRight 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* Drawer Header */}
            <div style={{ padding: '16px 20px', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SlidersHorizontalIcon size={18} color="#1D4ED8" />
                <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 800, color: '#0F172A' }}>Filters &amp; Sort</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileFilterOpen(false)}
                style={{ background: 'none', border: 'none', padding: '6px', cursor: 'pointer', color: '#64748B' }}
                aria-label="Close filters"
              >
                <XIcon size={20} />
              </button>
            </div>

            {/* Drawer Scrollable Content */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
              {/* Mobile Sort */}
              <div style={{ marginBottom: '24px', paddingBottom: '18px', borderBottom: '1px solid #F1F5F9' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1E293B', marginBottom: '10px' }}>
                  Sort By
                </h4>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '0.9rem', fontWeight: 600 }}
                >
                  <option value="popular">Popularity / Best Sellers</option>
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                  <option value="name_asc">Name: A to Z</option>
                  <option value="discount_desc">Discount: Highest First</option>
                </select>
              </div>

              {/* Subcategories */}
              {subcategoryOptions.length > 0 && (
                <div style={{ marginBottom: '22px', paddingBottom: '18px', borderBottom: '1px solid #F1F5F9' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <h4 style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>
                      {category ? 'Subcategories' : 'Categories'}
                    </h4>
                    {selectedSubcat && (
                      <span style={{ fontSize: '0.72rem', color: '#1D4ED8', fontWeight: 700, cursor: 'pointer' }} onClick={() => setSelectedSubcat('')}>
                        Clear
                      </span>
                    )}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div
                      onClick={() => setSelectedSubcat('')}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '9px 12px',
                        borderRadius: '8px',
                        background: !selectedSubcat ? '#EFF6FF' : 'transparent',
                        color: !selectedSubcat ? '#1D4ED8' : '#334155',
                        fontWeight: !selectedSubcat ? 700 : 500,
                        fontSize: '0.86rem',
                        cursor: 'pointer'
                      }}
                    >
                      <span>All {category?.name || 'Items'}</span>
                      {!selectedSubcat && <CheckIcon size={14} color="#1D4ED8" />}
                    </div>
                    {subcategoryOptions.map(sub => {
                      const isSelected = selectedSubcat === sub.slug;
                      return (
                        <div
                          key={sub.id}
                          onClick={() => setSelectedSubcat(isSelected ? '' : sub.slug)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '9px 12px',
                            borderRadius: '8px',
                            background: isSelected ? '#EFF6FF' : 'transparent',
                            color: isSelected ? '#1D4ED8' : '#334155',
                            fontWeight: isSelected ? 700 : 500,
                            fontSize: '0.86rem',
                            cursor: 'pointer'
                          }}
                        >
                          <span>{sub.name}</span>
                          {isSelected && <CheckIcon size={14} color="#1D4ED8" />}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Price Range */}
              <div style={{ marginBottom: '22px', paddingBottom: '18px', borderBottom: '1px solid #F1F5F9' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <h4 style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>
                    Price Range
                  </h4>
                  {(minPrice !== '' || maxPrice !== '') && (
                    <span style={{ fontSize: '0.72rem', color: '#1D4ED8', fontWeight: 700, cursor: 'pointer' }} onClick={() => { setMinPrice(''); setMaxPrice(''); }}>
                      Reset
                    </span>
                  )}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '8px', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: '8px', padding: '0 10px', height: '38px' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#94A3B8', marginRight: '4px' }}>₹</span>
                    <input
                      type="number"
                      placeholder="Min"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : '')}
                      style={{ width: '100%', border: 'none', background: 'transparent', fontSize: '0.88rem', fontWeight: 600, color: '#0F172A', outline: 'none' }}
                    />
                  </div>
                  <span style={{ color: '#94A3B8', fontWeight: 600, fontSize: '0.8rem' }}>–</span>
                  <div style={{ display: 'flex', alignItems: 'center', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: '8px', padding: '0 10px', height: '38px' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#94A3B8', marginRight: '4px' }}>₹</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : '')}
                      style={{ width: '100%', border: 'none', background: 'transparent', fontSize: '0.88rem', fontWeight: 600, color: '#0F172A', outline: 'none' }}
                    />
                  </div>
                </div>

                {/* Mobile Quick Price Presets */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                  {[
                    { label: 'Under ₹50', min: 0, max: 50 },
                    { label: '₹50 – ₹200', min: 50, max: 200 },
                    { label: '₹200 – ₹500', min: 200, max: 500 },
                    { label: 'Above ₹500', min: 500, max: '' },
                  ].map((bracket, idx) => {
                    const isBracketActive = minPrice === bracket.min && maxPrice === bracket.max;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          if (isBracketActive) {
                            setMinPrice('');
                            setMaxPrice('');
                          } else {
                            setMinPrice(bracket.min);
                            setMaxPrice(bracket.max);
                          }
                        }}
                        style={{
                          padding: '7px 8px',
                          borderRadius: '8px',
                          border: isBracketActive ? '1.5px solid #1D4ED8' : '1px solid #E2E8F0',
                          background: isBracketActive ? '#1D4ED8' : '#F8FAFC',
                          color: isBracketActive ? '#FFFFFF' : '#334155',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          textAlign: 'center'
                        }}
                      >
                        {bracket.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Availability - Custom Toggle Card */}
              <div style={{ marginBottom: '22px', paddingBottom: '18px', borderBottom: '1px solid #F1F5F9' }}>
                <div
                  onClick={() => setInStockOnly(!inStockOnly)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 12px',
                    background: inStockOnly ? '#F0FDF4' : '#F8FAFC',
                    border: inStockOnly ? '1.5px solid #86EFAC' : '1px solid #E2E8F0',
                    borderRadius: '10px',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: inStockOnly ? '#16A34A' : '#94A3B8', boxShadow: inStockOnly ? '0 0 0 3px rgba(34, 197, 94, 0.2)' : 'none' }} />
                    <div>
                      <div style={{ fontSize: '0.86rem', fontWeight: 700, color: inStockOnly ? '#166534' : '#1E293B', lineHeight: 1.2 }}>In Stock Only</div>
                      <div style={{ fontSize: '0.72rem', color: '#64748B' }}>Exclude out of stock items</div>
                    </div>
                  </div>
                  <div style={{ width: '34px', height: '20px', borderRadius: '12px', background: inStockOnly ? '#16A34A' : '#CBD5E1', padding: '2px', position: 'relative' }}>
                    <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#FFFFFF', transform: inStockOnly ? 'translateX(14px)' : 'translateX(0)', transition: 'transform 0.2s ease', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
                  </div>
                </div>
              </div>

              {/* Discount - Custom Styled List */}
              <div style={{ marginBottom: '22px', paddingBottom: '18px', borderBottom: '1px solid #F1F5F9' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <h4 style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>
                    Discount
                  </h4>
                  {minDiscount > 0 && (
                    <span style={{ fontSize: '0.72rem', color: '#1D4ED8', fontWeight: 700, cursor: 'pointer' }} onClick={() => setMinDiscount(0)}>
                      Reset
                    </span>
                  )}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {[
                    { val: 0, label: 'All Items' },
                    { val: 10, label: '10% or more', badge: '10% OFF+' },
                    { val: 20, label: '20% or more', badge: '20% OFF+' },
                    { val: 30, label: '30% or more', badge: '30% OFF+' },
                    { val: 50, label: '50% or more', badge: '50% OFF+' }
                  ].map((d) => {
                    const isSelected = minDiscount === d.val;
                    return (
                      <div
                        key={d.val}
                        onClick={() => setMinDiscount(d.val)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '8px 12px',
                          borderRadius: '8px',
                          background: isSelected ? '#EFF6FF' : 'transparent',
                          border: isSelected ? '1px solid #BFDBFE' : '1px solid transparent',
                          cursor: 'pointer'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: isSelected ? '5px solid #1D4ED8' : '2px solid #CBD5E1', background: '#FFFFFF', flexShrink: 0 }} />
                          <span style={{ fontSize: '0.86rem', color: isSelected ? '#1D4ED8' : '#334155', fontWeight: isSelected ? 700 : 500 }}>
                            {d.label}
                          </span>
                        </div>
                        {d.badge && (
                          <span style={{ fontSize: '0.68rem', fontWeight: 800, padding: '2px 6px', borderRadius: '4px', background: isSelected ? '#DBEAFE' : '#F1F5F9', color: isSelected ? '#1D4ED8' : '#64748B' }}>
                            {d.badge}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Rating - Star Card */}
              <div>
                <h4 style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px' }}>
                  Customer Rating
                </h4>
                <div
                  onClick={() => setMinRating(minRating === 4 ? 0 : 4)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 12px',
                    background: minRating === 4 ? '#FEFCE8' : '#F8FAFC',
                    border: minRating === 4 ? '1.5px solid #FDE047' : '1px solid #E2E8F0',
                    borderRadius: '10px',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {[1, 2, 3, 4].map(s => (
                        <StarIcon key={s} size={14} color="#EAB308" filled={true} />
                      ))}
                      <StarIcon size={14} color="#CBD5E1" filled={false} />
                    </div>
                    <span style={{ fontSize: '0.86rem', fontWeight: 700, color: minRating === 4 ? '#854D0E' : '#1E293B' }}>
                      4.0 &amp; Above
                    </span>
                  </div>
                  <div style={{ width: '18px', height: '18px', borderRadius: '5px', border: minRating === 4 ? '2px solid #EAB308' : '2px solid #CBD5E1', background: minRating === 4 ? '#EAB308' : '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {minRating === 4 && <CheckIcon size={12} color="#FFFFFF" />}
                  </div>
                </div>
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div style={{ padding: '16px 20px', borderTop: '1px solid #E2E8F0', background: '#F8FAFC', display: 'flex', gap: '12px' }}>
              <button
                type="button"
                onClick={clearAllFilters}
                style={{ flex: 1, padding: '12px', borderRadius: '8px', background: '#FFFFFF', border: '1px solid #CBD5E1', fontWeight: 700, fontSize: '0.9rem', color: '#475569', cursor: 'pointer' }}
              >
                Reset All
              </button>
              <button
                type="button"
                onClick={() => setIsMobileFilterOpen(false)}
                style={{ flex: 2, padding: '12px', borderRadius: '8px', background: '#1D4ED8', border: 'none', fontWeight: 800, fontSize: '0.92rem', color: '#FFFFFF', cursor: 'pointer', boxShadow: '0 2px 8px rgba(29, 78, 216, 0.3)' }}
              >
                Apply ({processedProducts.length})
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 900px) {
          .catalog-layout-grid {
            grid-template-columns: 1fr !important;
          }
          .catalog-desktop-sidebar {
            display: none !important;
          }
          .mobile-filter-trigger-btn {
            display: inline-flex !important;
          }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};
