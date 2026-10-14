'use client';

import React, { useState, useEffect } from 'react';
import { CouponRule } from '@/lib/coupons';

interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  parent_id: string | null;
}

interface ProductItem {
  id: string | number;  
  title?: string;
  name?: string;
  slug?: string;
  categoryLabel?: string;
}

export default function AdminCouponsPage() {
  const [coupons, setCoupons] = useState<CouponRule[]>([]);
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'inactive' | 'banner'>('all');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCoupon, setEditingCoupon] = useState<CouponRule | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Form Fields
  const [code, setCode] = useState('');
  const [discountType, setDiscountType] = useState<'percentage' | 'flat'>('percentage');
  const [discountValue, setDiscountValue] = useState<number | ''>(20);
  const [maxDiscountCap, setMaxDiscountCap] = useState<number | ''>('');
  const [appliesTo, setAppliesTo] = useState<'all' | 'categories' | 'products'>('all');
  const [appliedCategoryIds, setAppliedCategoryIds] = useState<string[]>([]);
  const [appliedProductIds, setAppliedProductIds] = useState<(string | number)[]>([]);
  const [excludedCategoryIds, setExcludedCategoryIds] = useState<string[]>([]);
  const [excludedProductIds, setExcludedProductIds] = useState<(string | number)[]>([]);
  const [minOrderValue, setMinOrderValue] = useState<number | ''>('');
  const [startDate, setStartDate] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [usageLimit, setUsageLimit] = useState<number | ''>('');
  const [perUserLimit, setPerUserLimit] = useState<number | ''>('');
  const [showInBanner, setShowInBanner] = useState(false);
  const [bannerText, setBannerText] = useState('');

  // UI state for search inside product selection
  const [productSearch, setProductSearch] = useState('');
  const [exclusionOpen, setExclusionOpen] = useState(false);

  // Fetch initial data
  const loadCoupons = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/coupons');
      const data = await res.json();
      if (data.success && Array.isArray(data.coupons)) {
        setCoupons(data.coupons);
      }
    } catch (err) {
      console.error('Error fetching coupons:', err);
    } finally {
      setLoading(false);
    }
  };

  const loadCategoriesAndProducts = async () => {
    try {
      const [catRes, prodRes] = await fetch('/api/categories')
        .then(r => r.json())
        .catch(() => ({ categories: [] }))
        .then(cats => [cats, fetch('/api/products').then(r => r.json()).catch(() => [])]);
      
      const [catData, prodData] = await Promise.all([catRes, prodRes]);
      if (catData?.categories) setCategories(catData.categories);
      if (Array.isArray(prodData)) setProducts(prodData);
    } catch (err) {
      console.error('Error loading taxonomy:', err);
    }
  };

  useEffect(() => {
    loadCoupons();
    loadCategoriesAndProducts();
  }, []);

  const resetForm = () => {
    setEditingCoupon(null);
    setCode('');
    setDiscountType('percentage');
    setDiscountValue(20);
    setMaxDiscountCap('');
    setAppliesTo('all');
    setAppliedCategoryIds([]);
    setAppliedProductIds([]);
    setExcludedCategoryIds([]);
    setExcludedProductIds([]);
    setMinOrderValue('');
    setStartDate('');
    setExpiryDate('');
    setIsActive(true);
    setUsageLimit('');
    setPerUserLimit('');
    setShowInBanner(false);
    setBannerText('');
    setFormError(null);
    setProductSearch('');
    setExclusionOpen(false);
  };

  const openCreateModal = () => {
    resetForm();
    setIsModalOpen(true);
  };

  const openEditModal = (coupon: CouponRule) => {
    setEditingCoupon(coupon);
    setCode(coupon.code);
    setDiscountType(coupon.discount_type);
    setDiscountValue(coupon.discount_value);
    setMaxDiscountCap(coupon.max_discount_cap ?? '');
    setAppliesTo(coupon.applies_to);
    setAppliedCategoryIds(coupon.applied_category_ids || []);
    setAppliedProductIds(coupon.applied_product_ids || []);
    setExcludedCategoryIds(coupon.excluded_category_ids || []);
    setExcludedProductIds(coupon.excluded_product_ids || []);
    setMinOrderValue(coupon.min_order_value ?? '');
    setStartDate(coupon.start_date ? coupon.start_date.substring(0, 10) : '');
    setExpiryDate(coupon.expiry_date ? coupon.expiry_date.substring(0, 10) : '');
    setIsActive(coupon.is_active);
    setUsageLimit(coupon.usage_limit ?? '');
    setPerUserLimit(coupon.per_user_limit ?? '');
    setShowInBanner(coupon.show_in_banner ?? false);
    setBannerText(coupon.banner_text || '');
    setFormError(null);
    setProductSearch('');
    setExclusionOpen(
      (coupon.excluded_category_ids && coupon.excluded_category_ids.length > 0) ||
      (coupon.excluded_product_ids && coupon.excluded_product_ids.length > 0) ||
      false
    );
    setIsModalOpen(true);
  };

  const handleToggleActive = async (coupon: CouponRule) => {
    try {
      const res = await fetch('/api/admin/coupons', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: coupon.id,
          code: coupon.code,
          is_active: !coupon.is_active
        })
      });
      const data = await res.json();
      if (data.success) {
        setCoupons(prev => prev.map(c => c.id === coupon.id ? { ...c, is_active: !c.is_active } : c));
      } else {
        alert(data.error || 'Failed to update status');
      }
    } catch (err) {
      console.error(err);
      alert('Error updating status');
    }
  };

  const handleDelete = async (coupon: CouponRule) => {
    if (!window.confirm(`Are you sure you want to delete coupon "${coupon.code}"? This action cannot be undone.`)) {
      return;
    }
    try {
      const res = await fetch(`/api/admin/coupons?id=${encodeURIComponent(coupon.id)}`, {
        method: 'DELETE'
      });
      const data = await res.json();
      if (data.success) {
        setCoupons(prev => prev.filter(c => c.id !== coupon.id));
      } else {
        alert(data.error || 'Failed to delete coupon');
      }
    } catch (err) {
      console.error(err);
      alert('Error deleting coupon');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const cleanCode = code.trim().toUpperCase();
    if (!cleanCode) {
      setFormError('Please enter a coupon code.');
      return;
    }

    if (discountValue === '' || Number(discountValue) <= 0) {
      setFormError('Discount value must be greater than zero.');
      return;
    }

    if (appliesTo === 'categories' && appliedCategoryIds.length === 0) {
      setFormError('Please select at least one category, or change Applies To to "All products".');
      return;
    }

    if (appliesTo === 'products' && appliedProductIds.length === 0) {
      setFormError('Please select at least one product, or change Applies To to "All products".');
      return;
    }

    if (showInBanner && !bannerText.trim()) {
      setFormError('Please enter banner announcement text for this coupon.');
      return;
    }

    setIsSaving(true);

    const payload = {
      id: editingCoupon ? editingCoupon.id : undefined,
      code: cleanCode,
      discount_type: discountType,
      discount_value: Number(discountValue),
      max_discount_cap: discountType === 'percentage' && maxDiscountCap !== '' ? Number(maxDiscountCap) : null,
      applies_to: appliesTo,
      applied_category_ids: appliesTo === 'categories' ? appliedCategoryIds : [],
      applied_product_ids: appliesTo === 'products' ? appliedProductIds : [],
      excluded_category_ids: excludedCategoryIds,
      excluded_product_ids: excludedProductIds,
      min_order_value: minOrderValue !== '' ? Number(minOrderValue) : null,
      start_date: startDate ? new Date(startDate).toISOString() : null,
      expiry_date: expiryDate ? new Date(expiryDate).toISOString() : null,
      is_active: isActive,
      usage_limit: usageLimit !== '' ? Number(usageLimit) : null,
      per_user_limit: perUserLimit !== '' ? Number(perUserLimit) : null,
      show_in_banner: showInBanner,
      banner_text: showInBanner ? bannerText.trim() : null
    };

    try {
      const res = await fetch('/api/admin/coupons', {
        method: editingCoupon ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      if (data.success) {
        setIsModalOpen(false);
        resetForm();
        loadCoupons();
      } else {
        setFormError(data.error || 'Failed to save coupon.');
      }
    } catch (err: any) {
      console.error(err);
      setFormError(err.message || 'Network error while saving coupon.');
    } finally {
      setIsSaving(false);
    }
  };

  // Filtered coupons list
  const filteredCoupons = coupons.filter(c => {
    const matchesSearch = c.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (c.banner_text && c.banner_text.toLowerCase().includes(searchTerm.toLowerCase()));

    if (!matchesSearch) return false;

    if (filterStatus === 'active') return c.is_active;
    if (filterStatus === 'inactive') return !c.is_active;
    if (filterStatus === 'banner') return c.show_in_banner && c.is_active;
    return true;
  });

  // Calculate statistics
  const totalCoupons = coupons.length;
  const activeCoupons = coupons.filter(c => c.is_active).length;
  const totalRedemptions = coupons.reduce((sum, c) => sum + (c.usage_count || 0), 0);
  const activeBannerCoupon = coupons.find(c => c.is_active && c.show_in_banner);

  // Group categories into Main and Subcategories
  const mainCats = categories.filter(c => !c.parent_id);
  const getSubcats = (parentId: string) => categories.filter(c => c.parent_id === parentId);

  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
      {/* Page Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
            🏷️ Coupon Management System
          </h1>
          <p style={{ color: '#64748B', fontSize: '0.9rem', marginTop: '4px', margin: 0 }}>
            Manage discount codes, category-specific sales, top header banner announcements, and usage limits.
          </p>
        </div>
        <button
          type="button"
          onClick={openCreateModal}
          style={{
            background: '#2563EB',
            color: '#FFF',
            border: 'none',
            padding: '11px 20px',
            borderRadius: '8px',
            fontWeight: 700,
            fontSize: '0.95rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 2px 8px rgba(37,99,235,0.25)'
          }}
        >
          <span>+</span> Create Coupon
        </button>
      </div>

      {/* Metrics Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        <div style={{ background: '#FFF', padding: '18px 20px', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Total Coupons
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginTop: '4px' }}>
            {totalCoupons}
          </div>
        </div>

        <div style={{ background: '#FFF', padding: '18px 20px', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Active Coupons
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#059669', marginTop: '4px' }}>
            {activeCoupons}
          </div>
        </div>

        <div style={{ background: '#FFF', padding: '18px 20px', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Total Redemptions
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#2563EB', marginTop: '4px' }}>
            {totalRedemptions}
          </div>
        </div>

        <div style={{ background: '#FFF', padding: '18px 20px', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#D97706', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Header Banner Promo
          </div>
          <div style={{ fontSize: '0.92rem', fontWeight: 700, color: activeBannerCoupon ? '#0F172A' : '#94A3B8', marginTop: '6px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {activeBannerCoupon ? `📣 ${activeBannerCoupon.code}` : 'No active banner promo'}
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div style={{ background: '#FFF', padding: '16px 20px', borderRadius: '12px', border: '1px solid #E2E8F0', marginBottom: '20px', display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flex: 1, minWidth: '260px' }}>
          <input
            type="text"
            placeholder="Search coupon code or banner text..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '9px 14px',
              fontSize: '0.88rem',
              border: '1px solid #CBD5E1',
              borderRadius: '8px',
              width: '100%',
              maxWidth: '360px',
              outline: 'none'
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {(['all', 'active', 'inactive', 'banner'] as const).map(tab => (
            <button
              key={tab}
              type="button"
              onClick={() => setFilterStatus(tab)}
              style={{
                padding: '7px 14px',
                borderRadius: '6px',
                fontSize: '0.82rem',
                fontWeight: 600,
                border: filterStatus === tab ? '1px solid #2563EB' : '1px solid #E2E8F0',
                background: filterStatus === tab ? '#EFF6FF' : '#FFF',
                color: filterStatus === tab ? '#1D4ED8' : '#475569',
                cursor: 'pointer',
                textTransform: 'capitalize'
              }}
            >
              {tab === 'banner' ? '📣 Banner Active' : tab}
            </button>
          ))}
        </div>
      </div>

      {/* Coupons Table */}
      <div style={{ background: '#FFF', borderRadius: '12px', border: '1px solid #E2E8F0', overflow: 'hidden', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
        {loading ? (
          <div style={{ padding: '60px', textAlign: 'center', color: '#64748B' }}>
            Loading coupons...
          </div>
        ) : filteredCoupons.length === 0 ? (
          <div style={{ padding: '60px 20px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🎟️</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1E293B', marginBottom: '6px' }}>
              No coupons found
            </div>
            <div style={{ color: '#64748B', fontSize: '0.88rem', marginBottom: '20px' }}>
              {searchTerm ? 'Try adjusting your search criteria.' : 'Create your first coupon to offer discounts to customers.'}
            </div>
            <button
              type="button"
              onClick={openCreateModal}
              style={{
                padding: '9px 18px',
                background: '#2563EB',
                color: '#FFF',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.88rem',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              + Create First Coupon
            </button>
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', color: '#475569', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  <th style={{ padding: '14px 18px' }}>Coupon Code</th>
                  <th style={{ padding: '14px 18px' }}>Discount</th>
                  <th style={{ padding: '14px 18px' }}>Applies To</th>
                  <th style={{ padding: '14px 18px' }}>Rules / Limits</th>
                  <th style={{ padding: '14px 18px' }}>Redemptions</th>
                  <th style={{ padding: '14px 18px' }}>Banner</th>
                  <th style={{ padding: '14px 18px' }}>Status</th>
                  <th style={{ padding: '14px 18px', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCoupons.map((coupon) => (
                  <tr key={coupon.id} style={{ borderBottom: '1px solid #F1F5F9', verticalAlign: 'middle' }}>
                    {/* Code */}
                    <td style={{ padding: '16px 18px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{
                          fontFamily: 'monospace',
                          fontWeight: 800,
                          fontSize: '0.95rem',
                          background: '#F1F5F9',
                          padding: '4px 8px',
                          borderRadius: '6px',
                          border: '1px solid #CBD5E1',
                          color: '#0F172A'
                        }}>
                          {coupon.code}
                        </span>
                        {coupon.code.toUpperCase() === 'AS20' && (
                          <span style={{ fontSize: '0.72rem', background: '#FEF3C7', color: '#B45309', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>
                            Factory Sale
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Discount */}
                    <td style={{ padding: '16px 18px' }}>
                      <div style={{ fontWeight: 700, color: '#0F172A' }}>
                        {coupon.discount_type === 'percentage' ? `${coupon.discount_value}% OFF` : `Flat ₹${coupon.discount_value} OFF`}
                      </div>
                      {coupon.discount_type === 'percentage' && coupon.max_discount_cap && (
                        <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
                          Max cap: ₹{coupon.max_discount_cap}
                        </div>
                      )}
                    </td>

                    {/* Applies To */}
                    <td style={{ padding: '16px 18px' }}>
                      {coupon.applies_to === 'all' && (
                        <span style={{ display: 'inline-block', background: '#ECFDF5', color: '#065F46', padding: '3px 8px', borderRadius: '4px', fontWeight: 600, fontSize: '0.78rem' }}>
                          🌐 All Products
                        </span>
                      )}
                      {coupon.applies_to === 'categories' && (
                        <div>
                          <span style={{ display: 'inline-block', background: '#EFF6FF', color: '#1D4ED8', padding: '3px 8px', borderRadius: '4px', fontWeight: 600, fontSize: '0.78rem' }}>
                            📁 {coupon.applied_category_ids?.length || 0} Categories
                          </span>
                          {coupon.applied_category_ids && coupon.applied_category_ids.length > 0 && (
                            <div style={{ fontSize: '0.74rem', color: '#64748B', marginTop: '3px', maxWidth: '160px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              {coupon.applied_category_ids.slice(0, 2).join(', ')}
                              {coupon.applied_category_ids.length > 2 ? '...' : ''}
                            </div>
                          )}
                        </div>
                      )}
                      {coupon.applies_to === 'products' && (
                        <div>
                          <span style={{ display: 'inline-block', background: '#F5F3FF', color: '#6D28D9', padding: '3px 8px', borderRadius: '4px', fontWeight: 600, fontSize: '0.78rem' }}>
                            📦 {coupon.applied_product_ids?.length || 0} Products
                          </span>
                        </div>
                      )}
                      {((coupon.excluded_category_ids && coupon.excluded_category_ids.length > 0) ||
                        (coupon.excluded_product_ids && coupon.excluded_product_ids.length > 0)) && (
                        <div style={{ fontSize: '0.72rem', color: '#DC2626', marginTop: '3px', fontWeight: 600 }}>
                          (Has exclusions)
                        </div>
                      )}
                    </td>

                    {/* Rules */}
                    <td style={{ padding: '16px 18px' }}>
                      <div style={{ fontSize: '0.8rem', color: '#475569' }}>
                        {coupon.min_order_value ? `Min Order: ₹${coupon.min_order_value}` : 'No Min Order'}
                      </div>
                      {(coupon.start_date || coupon.expiry_date) && (
                        <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '2px' }}>
                          {coupon.expiry_date ? `Expires: ${new Date(coupon.expiry_date).toLocaleDateString()}` : 'No Expiry'}
                        </div>
                      )}
                    </td>

                    {/* Redemptions */}
                    <td style={{ padding: '16px 18px' }}>
                      <div style={{ fontWeight: 700, color: '#0F172A' }}>
                        {coupon.usage_count || 0}
                        {coupon.usage_limit ? <span style={{ color: '#64748B', fontWeight: 400 }}> / {coupon.usage_limit}</span> : ''}
                      </div>
                      {coupon.usage_limit && (
                        <div style={{ width: '80px', height: '5px', background: '#E2E8F0', borderRadius: '3px', marginTop: '4px', overflow: 'hidden' }}>
                          <div style={{
                            width: `${Math.min(100, Math.round(((coupon.usage_count || 0) / coupon.usage_limit) * 100))}%`,
                            height: '100%',
                            background: ((coupon.usage_count || 0) >= coupon.usage_limit) ? '#EF4444' : '#2563EB'
                          }} />
                        </div>
                      )}
                    </td>

                    {/* Banner */}
                    <td style={{ padding: '16px 18px' }}>
                      {coupon.show_in_banner ? (
                        <div>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#FEF3C7', color: '#92400E', padding: '3px 8px', borderRadius: '4px', fontWeight: 700, fontSize: '0.75rem' }}>
                            📣 Ticker Active
                          </span>
                          {coupon.banner_text && (
                            <div style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '4px', maxWidth: '180px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={coupon.banner_text}>
                              {coupon.banner_text}
                            </div>
                          )}
                        </div>
                      ) : (
                        <span style={{ color: '#94A3B8', fontSize: '0.8rem' }}>None</span>
                      )}
                    </td>

                    {/* Status Toggle */}
                    <td style={{ padding: '16px 18px' }}>
                      <button
                        type="button"
                        onClick={() => handleToggleActive(coupon)}
                        style={{
                          padding: '4px 10px',
                          borderRadius: '16px',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          border: 'none',
                          cursor: 'pointer',
                          background: coupon.is_active ? '#DCFCE7' : '#F1F5F9',
                          color: coupon.is_active ? '#15803D' : '#64748B'
                        }}
                      >
                        {coupon.is_active ? '● Active' : '○ Inactive'}
                      </button>
                    </td>

                    {/* Actions */}
                    <td style={{ padding: '16px 18px', textAlign: 'right' }}>
                      <div style={{ display: 'inline-flex', gap: '8px' }}>
                        <button
                          type="button"
                          onClick={() => openEditModal(coupon)}
                          style={{
                            background: '#F8FAFC',
                            border: '1px solid #CBD5E1',
                            padding: '6px 12px',
                            borderRadius: '6px',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            color: '#1E293B',
                            cursor: 'pointer'
                          }}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(coupon)}
                          style={{
                            background: '#FEF2F2',
                            border: '1px solid #FCA5A5',
                            padding: '6px 10px',
                            borderRadius: '6px',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            color: '#DC2626',
                            cursor: 'pointer'
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* CREATE / EDIT MODAL */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(15, 23, 42, 0.65)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px'
        }}>
          <div style={{
            background: '#FFF',
            borderRadius: '16px',
            maxWidth: '800px',
            width: '100%',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden'
          }}>
            {/* Modal Header */}
            <div style={{ padding: '20px 24px', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                  {editingCoupon ? `Edit Coupon: ${editingCoupon.code}` : 'Create New Coupon'}
                </h2>
                <p style={{ color: '#64748B', fontSize: '0.82rem', margin: '4px 0 0 0' }}>
                  Define discount rules, applicability scopes, limits, and marquee banner text.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                style={{ background: 'none', border: 'none', fontSize: '1.3rem', cursor: 'pointer', color: '#94A3B8' }}
              >
                ✕
              </button>
            </div>

            {/* Modal Form Scrollable Body */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', flex: 1, overflowY: 'auto' }}>
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                {formError && (
                  <div style={{ background: '#FEF2F2', border: '1px solid #F87171', color: '#B91C1C', padding: '10px 14px', borderRadius: '8px', fontSize: '0.88rem', fontWeight: 600 }}>
                    ⚠️ {formError}
                  </div>
                )}

                {/* 1. Code & Discount Row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                      Coupon Code <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <input
                      type="text"
                      value={code}
                      onChange={(e) => setCode(e.target.value.toUpperCase())}
                      placeholder="e.g. AS20"
                      required
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        border: '1px solid #CBD5E1',
                        borderRadius: '8px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                      Discount Type <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <select
                      value={discountType}
                      onChange={(e) => setDiscountType(e.target.value as any)}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        border: '1px solid #CBD5E1',
                        borderRadius: '8px',
                        fontWeight: 600
                      }}
                    >
                      <option value="percentage">Percentage (%)</option>
                      <option value="flat">Flat Amount (₹)</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                      Discount Value <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <input
                      type="number"
                      value={discountValue}
                      onChange={(e) => setDiscountValue(e.target.value === '' ? '' : Number(e.target.value))}
                      placeholder={discountType === 'percentage' ? '20' : '100'}
                      min={1}
                      max={discountType === 'percentage' ? 100 : 100000}
                      required
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        border: '1px solid #CBD5E1',
                        borderRadius: '8px',
                        fontWeight: 700
                      }}
                    />
                  </div>
                </div>

                {/* Optional Max Discount Cap for Percentage Coupons */}
                {discountType === 'percentage' && (
                  <div style={{ background: '#F8FAFC', padding: '12px 16px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                      Maximum Discount Cap (₹) <span style={{ color: '#64748B', fontWeight: 400 }}>(Optional)</span>
                    </label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <input
                        type="number"
                        value={maxDiscountCap}
                        onChange={(e) => setMaxDiscountCap(e.target.value === '' ? '' : Number(e.target.value))}
                        placeholder="e.g. 500 (limits max discount to ₹500)"
                        min={1}
                        style={{
                          width: '240px',
                          padding: '8px 12px',
                          border: '1px solid #CBD5E1',
                          borderRadius: '6px',
                          fontWeight: 600
                        }}
                      />
                      <span style={{ fontSize: '0.8rem', color: '#64748B' }}>
                        Leave blank for uncapped percentage discount.
                      </span>
                    </div>
                  </div>
                )}

                {/* 2. Applies To Scope */}
                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '16px' }}>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                    Applies To:
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '14px' }}>
                    {[
                      { key: 'all', label: '🌐 All Products', desc: 'Site-wide on every eligible item' },
                      { key: 'categories', label: '📁 Specific Categories', desc: 'Only items in chosen categories' },
                      { key: 'products', label: '📦 Specific Products', desc: 'Only chosen individual products' }
                    ].map(option => (
                      <button
                        key={option.key}
                        type="button"
                        onClick={() => setAppliesTo(option.key as any)}
                        style={{
                          padding: '12px',
                          borderRadius: '8px',
                          border: appliesTo === option.key ? '2px solid #2563EB' : '1px solid #CBD5E1',
                          background: appliesTo === option.key ? '#EFF6FF' : '#FFF',
                          color: appliesTo === option.key ? '#1E40AF' : '#334155',
                          textAlign: 'left',
                          cursor: 'pointer'
                        }}
                      >
                        <div style={{ fontWeight: 700, fontSize: '0.88rem' }}>{option.label}</div>
                        <div style={{ fontSize: '0.74rem', color: appliesTo === option.key ? '#3B82F6' : '#64748B', marginTop: '2px' }}>
                          {option.desc}
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Multi-Select Category Picker */}
                  {appliesTo === 'categories' && (
                    <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1E293B' }}>
                          Select Applicable Categories ({appliedCategoryIds.length} selected):
                        </span>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button
                            type="button"
                            onClick={() => {
                              const allIds = categories.flatMap(c => [c.id, c.slug]);
                              setAppliedCategoryIds(Array.from(new Set(allIds)));
                            }}
                            style={{ background: 'none', border: 'none', color: '#2563EB', fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer' }}
                          >
                            Select All
                          </button>
                          <span style={{ color: '#CBD5E1' }}>|</span>
                          <button
                            type="button"
                            onClick={() => setAppliedCategoryIds([])}
                            style={{ background: 'none', border: 'none', color: '#64748B', fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer' }}
                          >
                            Clear
                          </button>
                        </div>
                      </div>

                      <div style={{ maxHeight: '200px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '6px', paddingRight: '6px' }}>
                        {mainCats.map(parent => {
                          const subcats = getSubcats(parent.id);
                          const isParentChecked = appliedCategoryIds.includes(parent.id) || appliedCategoryIds.includes(parent.slug);

                          const toggleCategory = (cat: CategoryItem) => {
                            const has = appliedCategoryIds.includes(cat.id) || appliedCategoryIds.includes(cat.slug);
                            if (has) {
                              setAppliedCategoryIds(prev => prev.filter(x => x !== cat.id && x !== cat.slug));
                            } else {
                              setAppliedCategoryIds(prev => [...prev, cat.id, cat.slug]);
                            }
                          };

                          return (
                            <div key={parent.id} style={{ background: '#FFF', padding: '8px 12px', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer' }}>
                                <input
                                  type="checkbox"
                                  checked={isParentChecked}
                                  onChange={() => toggleCategory(parent)}
                                />
                                <span>{parent.name}</span>
                                <span style={{ fontSize: '0.72rem', color: '#94A3B8' }}>({parent.slug})</span>
                              </label>

                              {subcats.length > 0 && (
                                <div style={{ marginLeft: '24px', marginTop: '6px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '4px' }}>
                                  {subcats.map(sub => {
                                    const isSubChecked = appliedCategoryIds.includes(sub.id) || appliedCategoryIds.includes(sub.slug);
                                    return (
                                      <label key={sub.id} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#475569', cursor: 'pointer' }}>
                                        <input
                                          type="checkbox"
                                          checked={isSubChecked}
                                          onChange={() => toggleCategory(sub)}
                                        />
                                        <span>{sub.name}</span>
                                      </label>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Multi-Select Product Picker */}
                  {appliesTo === 'products' && (
                    <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1E293B' }}>
                          Select Applicable Products ({appliedProductIds.length} selected):
                        </span>
                        <input
                          type="text"
                          placeholder="Search product..."
                          value={productSearch}
                          onChange={(e) => setProductSearch(e.target.value)}
                          style={{ padding: '4px 10px', fontSize: '0.78rem', border: '1px solid #CBD5E1', borderRadius: '4px', width: '160px' }}
                        />
                      </div>

                      <div style={{ maxHeight: '200px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '4px', paddingRight: '6px' }}>
                        {products
                          .filter(p => !productSearch || (p.title || p.name || '').toLowerCase().includes(productSearch.toLowerCase()))
                          .map(p => {
                            const pId = String(p.id);
                            const isChecked = appliedProductIds.some(id => String(id) === pId);

                            return (
                              <label key={pId} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#FFF', padding: '6px 10px', borderRadius: '4px', border: '1px solid #E2E8F0', fontSize: '0.82rem', cursor: 'pointer' }}>
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => {
                                    if (isChecked) {
                                      setAppliedProductIds(prev => prev.filter(x => String(x) !== pId));
                                    } else {
                                      setAppliedProductIds(prev => [...prev, p.id]);
                                    }
                                  }}
                                />
                                <span style={{ fontWeight: 600, color: '#1E293B' }}>{p.title || p.name}</span>
                                {p.categoryLabel && <span style={{ fontSize: '0.72rem', color: '#64748B' }}>({p.categoryLabel})</span>}
                              </label>
                            );
                          })}
                      </div>
                    </div>
                  )}
                </div>

                {/* 3. Optional Exclusions Collapsible */}
                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '14px' }}>
                  <button
                    type="button"
                    onClick={() => setExclusionOpen(!exclusionOpen)}
                    style={{ background: 'none', border: 'none', padding: 0, color: '#475569', fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    <span>{exclusionOpen ? '▼' : '▶'}</span>
                    <span>Optional Exclusions (Exclude specific products or categories)</span>
                  </button>

                  {exclusionOpen && (
                    <div style={{ marginTop: '12px', background: '#FFF7ED', padding: '14px', borderRadius: '8px', border: '1px solid #FFEDD5', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#9A3412', marginBottom: '4px' }}>
                          Exclude Categories (Multi-select)
                        </label>
                        <div style={{ maxHeight: '120px', overflowY: 'auto', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {categories.map(c => {
                            const isExcluded = excludedCategoryIds.includes(c.id) || excludedCategoryIds.includes(c.slug);
                            return (
                              <button
                                key={c.id}
                                type="button"
                                onClick={() => {
                                  if (isExcluded) {
                                    setExcludedCategoryIds(prev => prev.filter(x => x !== c.id && x !== c.slug));
                                  } else {
                                    setExcludedCategoryIds(prev => [...prev, c.id, c.slug]);
                                  }
                                }}
                                style={{
                                  padding: '4px 8px',
                                  borderRadius: '4px',
                                  fontSize: '0.76rem',
                                  border: isExcluded ? '1px solid #EA580C' : '1px solid #FED7AA',
                                  background: isExcluded ? '#EA580C' : '#FFF',
                                  color: isExcluded ? '#FFF' : '#7C2D12',
                                  cursor: 'pointer'
                                }}
                              >
                                {c.name}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 4. Minimum Order, Usage Limits & Dates */}
                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '16px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                      Minimum Order Value (₹)
                    </label>
                    <input
                      type="number"
                      value={minOrderValue}
                      onChange={(e) => setMinOrderValue(e.target.value === '' ? '' : Number(e.target.value))}
                      placeholder="e.g. 500"
                      min={0}
                      style={{ width: '100%', padding: '9px 12px', border: '1px solid #CBD5E1', borderRadius: '6px', fontSize: '0.88rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                      Total Usage Limit
                    </label>
                    <input
                      type="number"
                      value={usageLimit}
                      onChange={(e) => setUsageLimit(e.target.value === '' ? '' : Number(e.target.value))}
                      placeholder="e.g. 100 uses"
                      min={1}
                      style={{ width: '100%', padding: '9px 12px', border: '1px solid #CBD5E1', borderRadius: '6px', fontSize: '0.88rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                      Per-Customer Limit
                    </label>
                    <input
                      type="number"
                      value={perUserLimit}
                      onChange={(e) => setPerUserLimit(e.target.value === '' ? '' : Number(e.target.value))}
                      placeholder="e.g. 1 use per customer"
                      min={1}
                      style={{ width: '100%', padding: '9px 12px', border: '1px solid #CBD5E1', borderRadius: '6px', fontSize: '0.88rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                      Start Date
                    </label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      style={{ width: '100%', padding: '9px 12px', border: '1px solid #CBD5E1', borderRadius: '6px', fontSize: '0.88rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                      End / Expiry Date
                    </label>
                    <input
                      type="date"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      style={{ width: '100%', padding: '9px 12px', border: '1px solid #CBD5E1', borderRadius: '6px', fontSize: '0.88rem' }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: 700, fontSize: '0.88rem', color: '#1E293B', marginTop: '16px' }}>
                      <input
                        type="checkbox"
                        checked={isActive}
                        onChange={(e) => setIsActive(e.target.checked)}
                      />
                      <span>Active / Enabled</span>
                    </label>
                  </div>
                </div>

                {/* 5. Header Marquee Banner Integration */}
                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '16px', background: '#FEF9C3', padding: '16px', borderRadius: '8px', border: '1px solid #FEF08A' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: 800, fontSize: '0.92rem', color: '#854D0E', marginBottom: '10px' }}>
                    <input
                      type="checkbox"
                      checked={showInBanner}
                      onChange={(e) => setShowInBanner(e.target.checked)}
                    />
                    <span>📢 Show in Header Sale Marquee Banner</span>
                  </label>

                  {showInBanner && (
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#713F12', marginBottom: '4px' }}>
                        Custom Banner Text (Displayed across top marquee)
                      </label>
                      <input
                        type="text"
                        value={bannerText}
                        onChange={(e) => setBannerText(e.target.value)}
                        placeholder="e.g. MEGA FACTORY SALE: Flat 20% OFF on all Corrugated Cartons! Use code AS20"
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          border: '1px solid #FDE047',
                          borderRadius: '6px',
                          fontSize: '0.88rem',
                          fontWeight: 600,
                          background: '#FFF'
                        }}
                      />
                      
                      {bannerText && (
                        <div style={{ marginTop: '10px', padding: '8px 12px', background: '#0F172A', color: '#FACC15', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span>Live Banner Preview:</span>
                          <span style={{ color: '#FFF' }}>{bannerText}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

              </div>

              {/* Modal Footer */}
              <div style={{ padding: '16px 24px', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    padding: '10px 18px',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    background: '#FFF',
                    color: '#475569',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  style={{
                    padding: '10px 24px',
                    borderRadius: '8px',
                    border: 'none',
                    background: isSaving ? '#94A3B8' : '#2563EB',
                    color: '#FFF',
                    fontWeight: 700,
                    cursor: isSaving ? 'not-allowed' : 'pointer',
                    boxShadow: '0 2px 8px rgba(37,99,235,0.25)'
                  }}
                >
                  {isSaving ? 'Saving...' : (editingCoupon ? 'Update Coupon' : 'Create Coupon')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
