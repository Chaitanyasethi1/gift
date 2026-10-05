'use client';
import React, { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';

interface SizeVariant {
  size: string;
  price: number;
  mrp: number;
}

interface BulkTier {
  qty: number;
  rate: number;
  label?: string;
}

export default function StockProductsPage() {
  const supabase = createClient();
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const defaultItem = { 
    name: '', slug: '', category_id: '', description: '', mrp: 0, selling_price: 0, stock_quantity: 1000, is_active: true, images: [] as string[],
    gst_rate: 18,
    flag_hot_deal: false, flag_mega_sale: false, flag_new_arrival: false, flag_best_seller: false,
    moq: 50,
    allow_logo_upload: false,
    variants: [] as SizeVariant[],
    bulk_pricing: [] as BulkTier[]
  };
  const [newItem, setNewItem] = useState(defaultItem);
  const [newImageUrl, setNewImageUrl] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  async function fetchData() {
    setLoading(true);
    const [prodRes, catRes] = await Promise.all([
      supabase.from('products').select('*').order('created_at', { ascending: false }),
      supabase.from('categories').select('*').order('sort_order', { ascending: true })
    ]);
    if (prodRes.error) console.error(prodRes.error);
    else setProducts(prodRes.data || []);
    
    if (catRes.error) console.error(catRes.error);
    else setCategories(catRes.data || []);
    
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleEdit(item: any) {
    setEditingId(item.id);
    
    let parsedVariants: SizeVariant[] = [];
    if (Array.isArray(item.variants)) {
      parsedVariants = item.variants;
    } else if (item.sizes) {
      const sizeArr = Array.isArray(item.sizes) ? item.sizes : (typeof item.sizes === 'string' ? item.sizes.split(',') : []);
      parsedVariants = sizeArr.map((s: string) => ({
        size: s.trim(),
        price: item.selling_price || 0,
        mrp: item.mrp || 0
      })).filter((v: any) => v.size);
    }

    let parsedBulk: BulkTier[] = [];
    if (Array.isArray(item.bulk_pricing)) {
      parsedBulk = item.bulk_pricing;
    } else {
      parsedBulk = [
        { qty: 50, rate: item.selling_price || 0, label: '50 pcs Pack' },
        { qty: 200, rate: Math.round((item.selling_price || 0) * 0.95), label: '200 pcs Pack (5% OFF)' },
        { qty: 500, rate: Math.round((item.selling_price || 0) * 0.90), label: '500 pcs Pack (10% OFF)' },
        { qty: 1000, rate: Math.round((item.selling_price || 0) * 0.85), label: '1000 pcs Pack (Bulk Rate)' }
      ];
    }

    // Parse images array safely
    let parsedImages: string[] = [];
    if (Array.isArray(item.images)) {
      parsedImages = item.images;
    } else if (typeof item.images === 'string') {
      try {
        const p = JSON.parse(item.images);
        parsedImages = Array.isArray(p) ? p : [item.images];
      } catch {
        parsedImages = [item.images];
      }
    } else if (item.image) {
      parsedImages = [item.image];
    }

    const itemGst = typeof item.gst_rate === 'number' ? item.gst_rate : (typeof item.gst_percentage === 'number' ? item.gst_percentage : 18);

    setNewItem({
      name: item.name,
      slug: item.slug,
      category_id: item.category_id || '',
      description: item.description || '',
      mrp: item.mrp || 0,
      selling_price: item.selling_price || 0,
      stock_quantity: item.stock_quantity ?? 1000,
      is_active: item.is_active !== false,
      images: parsedImages,
      gst_rate: itemGst,
      flag_hot_deal: item.flag_hot_deal || false,
      flag_mega_sale: item.flag_mega_sale || false,
      flag_new_arrival: item.flag_new_arrival || false,
      flag_best_seller: item.flag_best_seller || false,
      moq: item.moq || 50,
      allow_logo_upload: item.allow_logo_upload || false,
      variants: parsedVariants,
      bulk_pricing: parsedBulk
    });
    setIsModalOpen(true);
  }


  function handleAddNew() {
    setEditingId(null);
    setNewItem({
      ...defaultItem,
      variants: [
        { size: 'Small (6x6 inch)', price: 10, mrp: 20 },
        { size: 'Medium (10x10 inch)', price: 18, mrp: 30 },
        { size: 'Large (14x14 inch)', price: 26, mrp: 45 }
      ],
      bulk_pricing: [
        { qty: 50, rate: 10, label: '50 pcs Sample Pack' },
        { qty: 200, rate: 9, label: '200 pcs Pack' },
        { qty: 500, rate: 8, label: '500 pcs Pack' },
        { qty: 1000, rate: 7, label: '1000 pcs Bulk Factory Rate' }
      ]
    });
    setIsModalOpen(true);
  }

  // Add Size Row
  const addSizeRow = () => {
    setNewItem({
      ...newItem,
      variants: [...newItem.variants, { size: '', price: newItem.selling_price || 0, mrp: newItem.mrp || 0 }]
    });
  };

  const updateSizeRow = (index: number, field: keyof SizeVariant, value: any) => {
    const updated = [...newItem.variants];
    updated[index] = { ...updated[index], [field]: value };
    setNewItem({ ...newItem, variants: updated });
  };

  const removeSizeRow = (index: number) => {
    setNewItem({
      ...newItem,
      variants: newItem.variants.filter((_, i) => i !== index)
    });
  };

  // Add Bulk Tier Row
  const addBulkRow = (presetQty?: number) => {
    const qty = presetQty || 100;
    setNewItem({
      ...newItem,
      bulk_pricing: [...newItem.bulk_pricing, { qty, rate: newItem.selling_price || 0, label: `${qty} pcs Pack` }]
    });
  };

  const updateBulkRow = (index: number, field: keyof BulkTier, value: any) => {
    const updated = [...newItem.bulk_pricing];
    updated[index] = { ...updated[index], [field]: value };
    setNewItem({ ...newItem, bulk_pricing: updated });
  };

  const removeBulkRow = (index: number) => {
    setNewItem({
      ...newItem,
      bulk_pricing: newItem.bulk_pricing.filter((_, i) => i !== index)
    });
  };

  // Handle Multi-file upload
  async function handleMultipleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    try {
      if (!e.target.files || e.target.files.length === 0) return;
      setUploadingImage(true);
      const files = Array.from(e.target.files);
      const uploadedUrls: string[] = [];

      for (const file of files) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage.from('product-images').upload(filePath, file);
        if (uploadError) {
          console.error('Upload error:', uploadError);
          continue;
        }

        const { data } = supabase.storage.from('product-images').getPublicUrl(filePath);
        if (data?.publicUrl) {
          uploadedUrls.push(data.publicUrl);
        }
      }

      setNewItem(prev => ({
        ...prev,
        images: [...prev.images, ...uploadedUrls]
      }));
    } catch (error: any) {
      alert('Error uploading images: ' + error.message);
    } finally {
      setUploadingImage(false);
    }
  }

  // Add Image via direct URL
  const handleAddImageUrl = () => {
    if (!newImageUrl.trim()) return;
    setNewItem(prev => ({
      ...prev,
      images: [...prev.images, newImageUrl.trim()]
    }));
    setNewImageUrl('');
  };

  // Remove Image
  const handleRemoveImage = (index: number) => {
    setNewItem(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  // Set as Main Photo (Move to index 0)
  const handleSetMainPhoto = (index: number) => {
    const selected = newItem.images[index];
    const rest = newItem.images.filter((_, i) => i !== index);
    setNewItem(prev => ({
      ...prev,
      images: [selected, ...rest]
    }));
  };

  async function handleSaveItem(e: React.FormEvent) {
    e.preventDefault();
    setIsSaving(true);
    const slug = newItem.slug || newItem.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    
    // Also build a simple size string for backward compatibility
    const sizeNames = newItem.variants.map(v => v.size).filter(Boolean);
    const sizesString = sizeNames.join(', ');

    const payload = { 
      name: newItem.name,
      slug,
      category_id: newItem.category_id ? newItem.category_id : null,
      description: newItem.description,
      mrp: newItem.mrp,
      selling_price: newItem.selling_price,
      gst_rate: Number(newItem.gst_rate ?? 18),
      gst_percentage: Number(newItem.gst_rate ?? 18),
      stock_quantity: newItem.stock_quantity,
      is_active: newItem.is_active,
      images: newItem.images,
      flag_hot_deal: newItem.flag_hot_deal,
      flag_mega_sale: newItem.flag_mega_sale,
      flag_new_arrival: newItem.flag_new_arrival,
      flag_best_seller: newItem.flag_best_seller,
      moq: newItem.moq,
      allow_logo_upload: newItem.allow_logo_upload,
      sizes: sizesString,
      variants: newItem.variants,
      bulk_pricing: newItem.bulk_pricing
    };


    let error;
    if (editingId) {
      const res = await supabase.from('products').update(payload).eq('id', editingId);
      error = res.error;
    } else {
      const res = await supabase.from('products').insert([payload]);
      error = res.error;
    }
    
    setIsSaving(false);
    
    if (error) {
      alert('Error saving product: ' + error.message);
    } else {
      setIsModalOpen(false);
      fetchData(); // refresh list
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this product?')) return;
    const { error } = await supabase.from('products').delete().eq('id', id);
    if (error) {
      alert('Error deleting product: ' + error.message);
    } else {
      fetchData();
    }
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '15px' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1e293b', margin: 0 }}>
            📦 Products & Stock Management
          </h1>
          <p style={{ color: '#64748B', margin: '4px 0 0 0', fontSize: '0.95rem' }}>
            Product prices, size variations, and pack quantity tiers manage karein.
          </p>
        </div>
        <button 
          onClick={handleAddNew}
          style={{ background: '#10b981', color: '#fff', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 700, cursor: 'pointer', fontSize: '0.95rem', boxShadow: '0 4px 6px -1px rgba(16, 185, 129, 0.2)' }}
        >
          + Add New Product
        </button>
      </div>

      {/* Product Form Modal */}
      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: '20px' }}>
          <div style={{ background: '#fff', padding: '30px', borderRadius: '14px', width: '750px', maxWidth: '100%', maxHeight: '92vh', overflowY: 'auto', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #e2e8f0', paddingBottom: '15px' }}>
              <div>
                <h2 style={{ margin: 0, color: '#1e293b', fontSize: '1.4rem', fontWeight: 800 }}>
                  {editingId ? 'Edit Product' : 'Add New Product'}
                </h2>
                <span style={{ fontSize: '0.85rem', color: '#64748B' }}>Configure product details, sizes & pack tier rates</span>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                style={{ background: 'none', border: 'none', fontSize: '1.4rem', cursor: 'pointer', color: '#94A3B8' }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveItem} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Basic Info */}
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <div style={{ flex: 2, minWidth: '240px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.85rem', fontWeight: 700, color: '#334155' }}>Product Name *</label>
                  <input required type="text" placeholder="e.g. 3-Ply Corrugated Shipping Box" value={newItem.name} onChange={e => setNewItem({...newItem, name: e.target.value})} style={{ width: '100%', padding: '10px 14px', border: '1px solid #cbd5e1', borderRadius: '8px' }} />
                </div>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.85rem', fontWeight: 700, color: '#334155' }}>Category *</label>
                  <select required value={newItem.category_id} onChange={e => setNewItem({...newItem, category_id: e.target.value})} style={{ width: '100%', padding: '10px 14px', border: '1px solid #cbd5e1', borderRadius: '8px', background: '#fff' }}>
                    <option value="" disabled>Select Category</option>
                    {categories.filter(c => !c.parent_id).map(mainCat => {
                      const subs = categories.filter(c => c.parent_id === mainCat.id);
                      return (
                        <optgroup key={mainCat.id} label={`📁 ${mainCat.name}`}>
                          <option value={mainCat.id}>{mainCat.name} (Main)</option>
                          {subs.map(sub => (
                            <option key={sub.id} value={sub.id}>&nbsp;&nbsp;↳ {sub.name}</option>
                          ))}
                        </optgroup>
                      );
                    })}
                  </select>
                </div>
              </div>
              
              {/* Product Description */}
              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.85rem', fontWeight: 700, color: '#334155' }}>
                  Product Description &amp; Details *
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe product quality, material (e.g. Virgin Kraft / Fluting type / GSM / Adhesive), printing, dimensions, uses, etc."
                  value={newItem.description}
                  onChange={e => setNewItem({...newItem, description: e.target.value})}
                  style={{ width: '100%', padding: '10px 14px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem', lineHeight: 1.5, boxSizing: 'border-box' }}
                />
              </div>

              {/* Multi-Photo Gallery & Upload */}
              <div style={{ background: '#FAF5FF', padding: '18px', borderRadius: '10px', border: '1px solid #E9D5FF' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap', gap: '6px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 800, color: '#6B21A8' }}>
                      📸 Product Photos (Multiple Photos Upload &amp; Gallery)
                    </label>
                    <span style={{ fontSize: '0.8rem', color: '#7E22CE' }}>
                      Aap ek se zyada photos upload kar sakte hain. Pehli photo main preview photo banegi.
                    </span>
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#6B21A8', background: '#F3E8FF', padding: '3px 8px', borderRadius: '6px' }}>
                    {newItem.images.length} Photos Added
                  </span>
                </div>

                {/* Upload Buttons Row */}
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '14px' }}>
                  <label style={{
                    background: '#7C3AED',
                    color: '#FFF',
                    padding: '9px 16px',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: uploadingImage ? 'not-allowed' : 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <span>📁 Choose Multiple Photos</span>
                    <input 
                      type="file" 
                      multiple 
                      accept="image/*" 
                      onChange={handleMultipleImageUpload} 
                      disabled={uploadingImage}
                      style={{ display: 'none' }} 
                    />
                  </label>

                  {/* Add Image by URL */}
                  <div style={{ display: 'flex', gap: '6px', flex: 1, minWidth: '240px' }}>
                    <input
                      type="text"
                      placeholder="Or paste Image URL (https://...)"
                      value={newImageUrl}
                      onChange={(e) => setNewImageUrl(e.target.value)}
                      style={{ flex: 1, padding: '8px 12px', border: '1px solid #C084FC', borderRadius: '6px', fontSize: '0.85rem' }}
                    />
                    <button
                      type="button"
                      onClick={handleAddImageUrl}
                      style={{ background: '#9333EA', color: '#FFF', border: 'none', padding: '8px 14px', borderRadius: '6px', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer' }}
                    >
                      + Add URL
                    </button>
                  </div>
                </div>

                {uploadingImage && (
                  <div style={{ fontSize: '0.85rem', color: '#7C3AED', fontWeight: 700, marginBottom: '12px' }}>
                    ⏳ Uploading photos to secure Supabase storage... please wait
                  </div>
                )}

                {/* Preview Thumbnails Grid */}
                {newItem.images.length > 0 && (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: '10px' }}>
                    {newItem.images.map((imgUrl, idx) => (
                      <div key={idx} style={{
                        position: 'relative',
                        background: '#FFF',
                        border: idx === 0 ? '2px solid #7C3AED' : '1px solid #CBD5E1',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
                      }}>
                        <div style={{ width: '100%', height: '80px', background: '#F8FAFC' }}>
                          <img src={imgUrl} alt={`Photo ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        {idx === 0 && (
                          <div style={{ position: 'absolute', top: '4px', left: '4px', background: '#7C3AED', color: '#FFF', fontSize: '0.65rem', fontWeight: 800, padding: '2px 6px', borderRadius: '4px' }}>
                            MAIN
                          </div>
                        )}
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 6px', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
                          {idx !== 0 ? (
                            <button
                              type="button"
                              onClick={() => handleSetMainPhoto(idx)}
                              title="Make Main Image"
                              style={{ background: 'none', border: 'none', color: '#7C3AED', fontSize: '0.7rem', fontWeight: 700, cursor: 'pointer', padding: 0 }}
                            >
                              ★ Set Main
                            </button>
                          ) : <span style={{ fontSize: '0.7rem', color: '#64748B' }}>Primary</span>}
                          <button
                            type="button"
                            onClick={() => handleRemoveImage(idx)}
                            title="Delete Photo"
                            style={{ background: 'none', border: 'none', color: '#DC2626', fontSize: '0.8rem', fontWeight: 800, cursor: 'pointer', padding: 0 }}
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Base Pricing, GST & MOQ */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px', background: '#F8FAFC', padding: '15px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.8rem', fontWeight: 700, color: '#475569' }}>Base Selling Price (₹)</label>
                  <input required type="number" min="0" step="0.01" value={newItem.selling_price} onChange={e => setNewItem({...newItem, selling_price: parseFloat(e.target.value) || 0})} style={{ width: '100%', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '6px' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.8rem', fontWeight: 700, color: '#475569' }}>Base MRP (₹)</label>
                  <input required type="number" min="0" step="0.01" value={newItem.mrp} onChange={e => setNewItem({...newItem, mrp: parseFloat(e.target.value) || 0})} style={{ width: '100%', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '6px' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.8rem', fontWeight: 800, color: '#0369A1' }}>🏛️ Product GST Rate (%)</label>
                  <select 
                    value={newItem.gst_rate} 
                    onChange={e => setNewItem({...newItem, gst_rate: parseFloat(e.target.value) || 0})}
                    style={{ width: '100%', padding: '8px 10px', border: '1.5px solid #38BDF8', borderRadius: '6px', background: '#F0F9FF', fontWeight: 700, color: '#0369A1' }}
                  >
                    <option value={18}>18% (Standard Rate)</option>
                    <option value={12}>12% (Corrugated / Apparel)</option>
                    <option value={5}>5% (Essential Goods)</option>
                    <option value={28}>28% (Luxury / Special)</option>
                    <option value={0}>0% (Exempt / Nil)</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.8rem', fontWeight: 700, color: '#475569' }}>Minimum Order (MOQ)</label>
                  <input required type="number" min="1" value={newItem.moq} onChange={e => setNewItem({...newItem, moq: parseInt(e.target.value) || 1})} style={{ width: '100%', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '6px' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.8rem', fontWeight: 700, color: '#475569' }}>Stock Quantity</label>
                  <input required type="number" min="0" value={newItem.stock_quantity} onChange={e => setNewItem({...newItem, stock_quantity: parseInt(e.target.value) || 0})} style={{ width: '100%', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '6px' }} />
                </div>
              </div>


              {/* 1. SIZE VARIATIONS & INDIVIDUAL SIZE RATES */}
              <div style={{ background: '#F0FDF4', padding: '18px', borderRadius: '10px', border: '1px solid #BBF7D0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 800, color: '#166534' }}>
                      📏 1. Sizes & Size-wise Pricing (Size ke hisab se rate)
                    </h3>
                    <p style={{ margin: '2px 0 0 0', fontSize: '0.8rem', color: '#15803D' }}>
                      Har size ka naam aur uska rate yahan dalein. Customer jo size chunega uska price apply hoga.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={addSizeRow}
                    style={{ background: '#16A34A', color: '#fff', border: 'none', padding: '6px 14px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer' }}
                  >
                    + Add Size
                  </button>
                </div>

                {newItem.variants.length === 0 ? (
                  <div style={{ fontSize: '0.85rem', color: '#15803D', fontStyle: 'italic', padding: '8px 0' }}>
                    No specific sizes added. Base selling price will be used. Click "+ Add Size" to create size variants.
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {newItem.variants.map((v, i) => (
                      <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center', background: '#fff', padding: '8px 12px', borderRadius: '8px', border: '1px solid #DCFCE7' }}>
                        <div style={{ flex: 3 }}>
                          <input
                            type="text"
                            placeholder="Size Name (e.g. 10x10x5 inch)"
                            value={v.size}
                            onChange={(e) => updateSizeRow(i, 'size', e.target.value)}
                            style={{ width: '100%', padding: '6px 10px', border: '1px solid #CBD5E1', borderRadius: '6px', fontSize: '0.9rem' }}
                          />
                        </div>
                        <div style={{ flex: 2, display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <span style={{ fontSize: '0.8rem', color: '#64748B' }}>₹</span>
                          <input
                            type="number"
                            step="0.01"
                            placeholder="Selling Price"
                            value={v.price}
                            onChange={(e) => updateSizeRow(i, 'price', parseFloat(e.target.value) || 0)}
                            style={{ width: '100%', padding: '6px 10px', border: '1px solid #CBD5E1', borderRadius: '6px', fontSize: '0.9rem' }}
                          />
                        </div>
                        <div style={{ flex: 2, display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <span style={{ fontSize: '0.8rem', color: '#64748B' }}>MRP</span>
                          <input
                            type="number"
                            step="0.01"
                            placeholder="MRP"
                            value={v.mrp}
                            onChange={(e) => updateSizeRow(i, 'mrp', parseFloat(e.target.value) || 0)}
                            style={{ width: '100%', padding: '6px 10px', border: '1px solid #CBD5E1', borderRadius: '6px', fontSize: '0.9rem' }}
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => removeSizeRow(i)}
                          style={{ background: '#FEE2E2', border: 'none', color: '#DC2626', width: '30px', height: '30px', borderRadius: '6px', cursor: 'pointer', fontWeight: 800 }}
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 2. PACK SIZES & BULK QUANTITY TIERS */}
              <div style={{ background: '#EFF6FF', padding: '18px', borderRadius: '10px', border: '1px solid #BFDBFE' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 800, color: '#1E40AF' }}>
                      📦 2. Pack Quantities & Wholesale Tier Rates (200 pc, 500 pc, 1000 pc)
                    </h3>
                    <p style={{ margin: '2px 0 0 0', fontSize: '0.8rem', color: '#1D4ED8' }}>
                      Different pack quantities ke liye per-piece rate aur discount yahan configure karein.
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button type="button" onClick={() => addBulkRow(50)} style={{ background: '#DBEAFE', color: '#1E40AF', border: '1px solid #BFDBFE', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}>+ 50 pc</button>
                    <button type="button" onClick={() => addBulkRow(200)} style={{ background: '#DBEAFE', color: '#1E40AF', border: '1px solid #BFDBFE', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}>+ 200 pc</button>
                    <button type="button" onClick={() => addBulkRow(500)} style={{ background: '#DBEAFE', color: '#1E40AF', border: '1px solid #BFDBFE', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}>+ 500 pc</button>
                    <button type="button" onClick={() => addBulkRow(1000)} style={{ background: '#DBEAFE', color: '#1E40AF', border: '1px solid #BFDBFE', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}>+ 1000 pc</button>
                    <button type="button" onClick={() => addBulkRow()} style={{ background: '#2563EB', color: '#fff', border: 'none', padding: '4px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer' }}>+ Custom Pack</button>
                  </div>
                </div>

                {newItem.bulk_pricing.length === 0 ? (
                  <div style={{ fontSize: '0.85rem', color: '#1D4ED8', fontStyle: 'italic', padding: '8px 0' }}>
                    No bulk tiers configured. Standard base rate will apply to all quantities. Click "+ Custom Pack" to add.
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {newItem.bulk_pricing.map((b, i) => (
                      <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center', background: '#fff', padding: '8px 12px', borderRadius: '8px', border: '1px solid #DBEAFE' }}>
                        <div style={{ width: '110px' }}>
                          <input
                            type="number"
                            min="1"
                            placeholder="Qty (e.g. 200)"
                            value={b.qty}
                            onChange={(e) => updateBulkRow(i, 'qty', parseInt(e.target.value) || 1)}
                            style={{ width: '100%', padding: '6px 10px', border: '1px solid #CBD5E1', borderRadius: '6px', fontSize: '0.9rem' }}
                          />
                        </div>
                        <div style={{ width: '130px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <span style={{ fontSize: '0.8rem', color: '#64748B' }}>₹/pc</span>
                          <input
                            type="number"
                            step="0.01"
                            placeholder="Rate/pc"
                            value={b.rate}
                            onChange={(e) => updateBulkRow(i, 'rate', parseFloat(e.target.value) || 0)}
                            style={{ width: '100%', padding: '6px 10px', border: '1px solid #CBD5E1', borderRadius: '6px', fontSize: '0.9rem' }}
                          />
                        </div>
                        <div style={{ flex: 1 }}>
                          <input
                            type="text"
                            placeholder="Label (e.g. 200 pcs Pack - 10% OFF)"
                            value={b.label || ''}
                            onChange={(e) => updateBulkRow(i, 'label', e.target.value)}
                            style={{ width: '100%', padding: '6px 10px', border: '1px solid #CBD5E1', borderRadius: '6px', fontSize: '0.9rem' }}
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => removeBulkRow(i)}
                          style={{ background: '#FEE2E2', border: 'none', color: '#DC2626', width: '30px', height: '30px', borderRadius: '6px', cursor: 'pointer', fontWeight: 800 }}
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Badges & Options */}
              <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.9rem', fontWeight: 800, color: '#1e293b' }}>Display Badges & Sections</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input type="checkbox" checked={newItem.flag_hot_deal} onChange={e => setNewItem({...newItem, flag_hot_deal: e.target.checked})} />
                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>🔥 Hot Deal</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input type="checkbox" checked={newItem.flag_mega_sale} onChange={e => setNewItem({...newItem, flag_mega_sale: e.target.checked})} />
                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>🏷️ Mega Sale</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input type="checkbox" checked={newItem.flag_new_arrival} onChange={e => setNewItem({...newItem, flag_new_arrival: e.target.checked})} />
                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>🌟 New Arrival</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input type="checkbox" checked={newItem.flag_best_seller} onChange={e => setNewItem({...newItem, flag_best_seller: e.target.checked})} />
                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>🏆 Best Seller</span>
                  </label>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', background: '#f8fafc', padding: '15px', borderRadius: '10px', border: '1px solid #e2e8f0', flexWrap: 'wrap' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input type="checkbox" checked={newItem.allow_logo_upload} onChange={e => setNewItem({...newItem, allow_logo_upload: e.target.checked})} />
                  <span style={{ fontSize: '0.95rem', color: '#2563EB', fontWeight: 700 }}>Enable Customer Logo/Design Upload</span>
                </label>
                
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input type="checkbox" checked={newItem.is_active} onChange={e => setNewItem({...newItem, is_active: e.target.checked})} />
                  <span style={{ fontSize: '0.95rem', color: '#16A34A', fontWeight: 700 }}>Active on Website</span>
                </label>
              </div>

              {/* Submit Buttons */}
              <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                <button type="button" onClick={() => setIsModalOpen(false)} style={{ flex: 1, padding: '12px', border: '1px solid #cbd5e1', background: '#fff', borderRadius: '8px', cursor: 'pointer', fontWeight: 700 }}>Cancel</button>
                <button type="submit" disabled={isSaving || uploadingImage} style={{ flex: 2, padding: '12px', border: 'none', background: '#10b981', color: '#fff', borderRadius: '8px', cursor: 'pointer', fontWeight: 800, fontSize: '1rem' }}>
                  {isSaving ? 'Saving Product...' : 'Save Product & Pricing'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Products Table */}
      <div style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.85rem', textTransform: 'uppercase' }}>
              <th style={{ padding: '15px 20px' }}>Image</th>
              <th style={{ padding: '15px 20px' }}>Product Name</th>
              <th style={{ padding: '15px 20px' }}>Category</th>
              <th style={{ padding: '15px 20px' }}>Sizes Configured</th>
              <th style={{ padding: '15px 20px' }}>Base Price</th>
              <th style={{ padding: '15px 20px' }}>Pack Tiers</th>
              <th style={{ padding: '15px 20px' }}>Status</th>
              <th style={{ padding: '15px 20px' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={8} style={{ padding: '30px', textAlign: 'center', color: '#64748b' }}>Loading products...</td></tr>
            ) : products.length === 0 ? (
              <tr><td colSpan={8} style={{ padding: '30px', textAlign: 'center', color: '#64748b' }}>No products found. Click "+ Add New Product" to create one.</td></tr>
            ) : (
              products.map((item) => {
                const variantsCount = Array.isArray(item.variants) ? item.variants.length : (item.sizes ? (typeof item.sizes === 'string' ? item.sizes.split(',').length : item.sizes.length) : 0);
                const tiersCount = Array.isArray(item.bulk_pricing) ? item.bulk_pricing.length : 0;
                return (
                  <tr key={item.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '15px 20px' }}>
                      {item.images?.[0] ? (
                        <img src={item.images[0]} alt={item.name} style={{ width: '45px', height: '45px', objectFit: 'cover', borderRadius: '6px' }} />
                      ) : (
                        <div style={{ width: '45px', height: '45px', background: '#f1f5f9', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>No Img</div>
                      )}
                    </td>
                    <td style={{ padding: '15px 20px' }}>
                      <strong style={{ color: '#0F172A', display: 'block' }}>{item.name}</strong>
                      <span style={{ fontSize: '0.78rem', color: '#64748B' }}>MOQ: {item.moq || 50} pcs</span>
                    </td>
                    <td style={{ padding: '15px 20px', color: '#64748b', fontSize: '0.9rem' }}>{item.categories?.name || '-'}</td>
                    <td style={{ padding: '15px 20px' }}>
                      <span style={{ background: '#DCFCE7', color: '#166534', padding: '3px 8px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 700 }}>
                        {variantsCount > 0 ? `${variantsCount} Sizes` : 'Default Size'}
                      </span>
                    </td>
                    <td style={{ padding: '15px 20px' }}>
                      <strong style={{ color: '#0F172A', fontSize: '0.95rem' }}>₹{item.selling_price || 0}</strong>
                      <div style={{ fontSize: '0.72rem', color: '#64748B' }}>MRP: ₹{item.mrp || 0}</div>
                      <span style={{ background: '#E0F2FE', color: '#0369A1', padding: '2px 6px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 800, display: 'inline-block', marginTop: '2px' }}>
                        {item.gst_rate ?? item.gst_percentage ?? 18}% GST
                      </span>
                    </td>

                    <td style={{ padding: '15px 20px' }}>
                      <span style={{ background: '#DBEAFE', color: '#1E40AF', padding: '3px 8px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 700 }}>
                        {tiersCount > 0 ? `${tiersCount} Packs` : 'Standard'}
                      </span>
                    </td>
                    <td style={{ padding: '15px 20px' }}>
                      <span style={{ background: item.is_active ? '#dcfce7' : '#fee2e2', color: item.is_active ? '#166534' : '#991b1b', padding: '4px 10px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700 }}>
                        {item.is_active ? 'Active' : 'Draft'}
                      </span>
                    </td>
                    <td style={{ padding: '15px 20px', display: 'flex', gap: '8px' }}>
                      <button onClick={() => handleEdit(item)} style={{ padding: '6px 14px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 700, fontSize: '0.85rem' }}>Edit</button>
                      <button onClick={() => handleDelete(item.id)} style={{ padding: '6px 12px', background: '#ef4444', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 700, fontSize: '0.85rem' }}>Delete</button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

