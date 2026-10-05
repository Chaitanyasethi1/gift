'use client';

import React, { useState, useEffect } from 'react';
import { initialHomepageConfig, HomepageConfig, HeroBanner, PopularCategoryItem } from '@/data/homepageData';
import { supabase } from '@/lib/supabase';

export default function BannersAndHomepageAdmin() {
  const [config, setConfig] = useState<HomepageConfig>(initialHomepageConfig);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingBanner, setUploadingBanner] = useState(false);
  const [uploadingCatIcon, setUploadingCatIcon] = useState<string | null>(null);

  // New Banner Form State
  const [newBannerImg, setNewBannerImg] = useState('');
  const [newBannerAlt, setNewBannerAlt] = useState('');
  const [newBannerLink, setNewBannerLink] = useState('/shop');

  // New Category Form State
  const [newCatTitle, setNewCatTitle] = useState('');
  const [newCatEmoji, setNewCatEmoji] = useState('📦');
  const [newCatImg, setNewCatImg] = useState('');
  const [newCatLink, setNewCatLink] = useState('/shop');
  const [newCatSpecial, setNewCatSpecial] = useState(false);

  // Active Tab
  const [activeTab, setActiveTab] = useState<'banners' | 'ticker' | 'categories'>('banners');

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch('/api/homepage');
        if (res.ok) {
          const data = await res.json();
          if (data && data.heroBanners) {
            setConfig(data);
          }
        }
      } catch (e) {
        console.error('Error loading homepage config:', e);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleSaveAll = async (newConfig?: HomepageConfig) => {
    setSaving(true);
    const toSave = newConfig || config;
    try {
      const res = await fetch('/api/homepage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(toSave)
      });
      if (res.ok) {
        alert('✅ Changes saved & live on website!');
      } else {
        alert('⚠️ Error saving to database.');
      }
    } catch (e: any) {
      alert('Error: ' + e.message);
    } finally {
      setSaving(false);
    }
  };

  // Upload Banner to Supabase
  const handleBannerFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (!e.target.files || e.target.files.length === 0) return;
      setUploadingBanner(true);
      const file = e.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `banner-${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage.from('product-images').upload(fileName, file);
      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from('product-images').getPublicUrl(fileName);
      if (data?.publicUrl) {
        setNewBannerImg(data.publicUrl);
      }
    } catch (err: any) {
      alert('Error uploading banner: ' + err.message);
    } finally {
      setUploadingBanner(false);
    }
  };

  // Add Banner
  const handleAddBanner = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBannerImg.trim()) {
      alert('Please provide banner image file or URL');
      return;
    }

    const newBanner: HeroBanner = {
      id: `banner-${Date.now()}`,
      img: newBannerImg.trim(),
      alt: newBannerAlt.trim() || 'Hero Banner - AS Print Gallery',
      link: newBannerLink.trim() || '/shop',
      active: true,
      order: config.heroBanners.length + 1
    };

    const updated = {
      ...config,
      heroBanners: [...config.heroBanners, newBanner]
    };
    setConfig(updated);
    setNewBannerImg('');
    setNewBannerAlt('');
    setNewBannerLink('/shop');
    handleSaveAll(updated);
  };

  // Delete Banner
  const handleDeleteBanner = (id: string) => {
    if (!confirm('Are you sure you want to delete this banner?')) return;
    const updated = {
      ...config,
      heroBanners: config.heroBanners.filter(b => b.id !== id)
    };
    setConfig(updated);
    handleSaveAll(updated);
  };

  // Toggle Banner Active
  const handleToggleBanner = (id: string) => {
    const updated = {
      ...config,
      heroBanners: config.heroBanners.map(b => b.id === id ? { ...b, active: !b.active } : b)
    };
    setConfig(updated);
    handleSaveAll(updated);
  };

  // Add Popular Category
  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatTitle.trim()) return;

    const newCat: PopularCategoryItem = {
      id: `cat-${Date.now()}`,
      title: newCatTitle.trim(),
      emoji: newCatEmoji.trim() || '📦',
      image: newCatImg.trim() || undefined,
      link: newCatLink.trim() || '/shop',
      isSpecial: newCatSpecial,
      order: config.popularCategories.length + 1
    };

    const updated = {
      ...config,
      popularCategories: [...config.popularCategories, newCat]
    };
    setConfig(updated);
    setNewCatTitle('');
    setNewCatEmoji('📦');
    setNewCatImg('');
    setNewCatLink('/shop');
    setNewCatSpecial(false);
    handleSaveAll(updated);
  };

  // Delete Popular Category
  const handleDeleteCategory = (id: string) => {
    if (!confirm('Are you sure you want to delete this category item?')) return;
    const updated = {
      ...config,
      popularCategories: config.popularCategories.filter(c => c.id !== id)
    };
    setConfig(updated);
    handleSaveAll(updated);
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '15px' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1E293B', margin: 0 }}>
            🎨 Homepage, Banners &amp; Category Manager
          </h1>
          <p style={{ color: '#64748B', margin: '4px 0 0 0', fontSize: '0.95rem' }}>
            Hero slider banners, top announcement sale ticker, aur popular category icons yahan se change karein.
          </p>
        </div>
        <button
          onClick={() => handleSaveAll()}
          disabled={saving}
          style={{
            background: '#7C3AED',
            color: '#FFF',
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            fontWeight: 800,
            fontSize: '0.95rem',
            cursor: saving ? 'not-allowed' : 'pointer',
            boxShadow: '0 4px 12px rgba(124, 58, 237, 0.3)'
          }}
        >
          {saving ? 'Saving...' : '💾 Save All Changes'}
        </button>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '24px', borderBottom: '2px solid #E2E8F0', paddingBottom: '10px' }}>
        <button
          type="button"
          onClick={() => setActiveTab('banners')}
          style={{
            padding: '10px 20px',
            borderRadius: '8px',
            border: 'none',
            background: activeTab === 'banners' ? '#7C3AED' : '#F1F5F9',
            color: activeTab === 'banners' ? '#FFF' : '#475569',
            fontWeight: 800,
            fontSize: '0.9rem',
            cursor: 'pointer'
          }}
        >
          🎠 1. Hero Slider Banners ({config.heroBanners.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('ticker')}
          style={{
            padding: '10px 20px',
            borderRadius: '8px',
            border: 'none',
            background: activeTab === 'ticker' ? '#7C3AED' : '#F1F5F9',
            color: activeTab === 'ticker' ? '#FFF' : '#475569',
            fontWeight: 800,
            fontSize: '0.9rem',
            cursor: 'pointer'
          }}
        >
          ⚡ 2. Top Marquee Sale Ticker
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('categories')}
          style={{
            padding: '10px 20px',
            borderRadius: '8px',
            border: 'none',
            background: activeTab === 'categories' ? '#7C3AED' : '#F1F5F9',
            color: activeTab === 'categories' ? '#FFF' : '#475569',
            fontWeight: 800,
            fontSize: '0.9rem',
            cursor: 'pointer'
          }}
        >
          🌟 3. Popular Categories ({config.popularCategories.length})
        </button>
      </div>

      {/* TAB 1: HERO SLIDER BANNERS */}
      {activeTab === 'banners' && (
        <div>
          {/* Add New Banner Card */}
          <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '12px', border: '1px solid #E2E8F0', marginBottom: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <h3 style={{ margin: '0 0 14px 0', fontSize: '1.1rem', fontWeight: 800, color: '#0F172A' }}>
              + Upload / Add New Hero Banner
            </h3>

            <form onSubmit={handleAddBanner} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', alignItems: 'flex-end' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                  Upload Banner Image (1920x600 px recommended):
                </label>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleBannerFileUpload}
                    disabled={uploadingBanner}
                    style={{ fontSize: '0.85rem' }}
                  />
                  {uploadingBanner && <span style={{ fontSize: '0.78rem', color: '#7C3AED', fontWeight: 700 }}>Uploading...</span>}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                  Or Banner Image URL:
                </label>
                <input
                  type="text"
                  placeholder="https://... or /assets/banner.png"
                  value={newBannerImg}
                  onChange={(e) => setNewBannerImg(e.target.value)}
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid #CBD5E1', borderRadius: '6px', fontSize: '0.88rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                  Banner Title / Alt Text:
                </label>
                <input
                  type="text"
                  placeholder="e.g. Corrugated Box Sale"
                  value={newBannerAlt}
                  onChange={(e) => setNewBannerAlt(e.target.value)}
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid #CBD5E1', borderRadius: '6px', fontSize: '0.88rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                  Target Link (Click karne par kahan jaye):
                </label>
                <input
                  type="text"
                  placeholder="/shop or /products/slug"
                  value={newBannerLink}
                  onChange={(e) => setNewBannerLink(e.target.value)}
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid #CBD5E1', borderRadius: '6px', fontSize: '0.88rem' }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                <button
                  type="submit"
                  style={{
                    background: '#10B981',
                    color: '#FFF',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '6px',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    width: '100%'
                  }}
                >
                  + Add Slide
                </button>
              </div>
            </form>
          </div>

          {/* Slider Speed Setting */}
          <div style={{ background: '#F8FAFC', padding: '16px 20px', borderRadius: '10px', border: '1px solid #E2E8F0', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <strong style={{ color: '#0F172A', fontSize: '0.9rem' }}>⏱️ Auto-Slide Interval Speed:</strong>
              <span style={{ color: '#64748B', fontSize: '0.82rem', marginLeft: '6px' }}>Kitne seconds baad banner automatically slide ho</span>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[1500, 2000, 3000, 4000].map((ms) => (
                <button
                  key={ms}
                  type="button"
                  onClick={() => {
                    const updated = { ...config, slideIntervalMs: ms };
                    setConfig(updated);
                    handleSaveAll(updated);
                  }}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '6px',
                    border: `1.5px solid ${config.slideIntervalMs === ms ? '#7C3AED' : '#CBD5E1'}`,
                    background: config.slideIntervalMs === ms ? '#EDE9FE' : '#FFF',
                    color: config.slideIntervalMs === ms ? '#6D28D9' : '#475569',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: 'pointer'
                  }}
                >
                  {ms / 1000}s {ms === 2000 ? '(Default)' : ''}
                </button>
              ))}
            </div>
          </div>

          {/* Active Banners List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {config.heroBanners.map((banner, index) => (
              <div
                key={banner.id}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '10px',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
                }}
              >
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#94A3B8', width: '25px' }}>
                  #{index + 1}
                </div>

                <div style={{ width: '180px', height: '80px', borderRadius: '6px', overflow: 'hidden', background: '#F1F5F9', flexShrink: 0, border: '1px solid #CBD5E1' }}>
                  <img src={banner.img} alt={banner.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.95rem', marginBottom: '4px' }}>
                    {banner.alt || 'Hero Slide'}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <span>🔗 Link: <strong>{banner.link}</strong></span>
                    <span>🖼️ Path: <code style={{ background: '#F1F5F9', padding: '1px 4px', borderRadius: '4px' }}>{banner.img}</code></span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <button
                    type="button"
                    onClick={() => handleToggleBanner(banner.id)}
                    style={{
                      background: banner.active ? '#DCFCE7' : '#FEE2E2',
                      color: banner.active ? '#166534' : '#991B1B',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    {banner.active ? '✓ Active' : '✕ Disabled'}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDeleteBanner(banner.id)}
                    style={{
                      background: '#FEE2E2',
                      color: '#DC2626',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: TOP MARQUEE SALE TICKER */}
      {activeTab === 'ticker' && (
        <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: 800, color: '#0F172A' }}>
            ⚡ Top Mega Factory Sale Marquee Ticker
          </h3>
          <p style={{ color: '#64748B', fontSize: '0.85rem', marginBottom: '20px' }}>
            Website ke header ke top par chalne wala red announcement bar.
          </p>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
              Announcement / Offer Text:
            </label>
            <input
              type="text"
              value={config.tickerText}
              onChange={(e) => setConfig({ ...config, tickerText: e.target.value })}
              placeholder="⚡ MEGA FACTORY SALE: Flat 20% OFF on all Corrugated Cartons! Use code AS20 ⚡"
              style={{ width: '100%', padding: '12px 14px', border: '1.5px solid #CBD5E1', borderRadius: '8px', fontSize: '0.95rem', fontWeight: 600 }}
            />
          </div>

          {/* Live Preview */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
              Live Bar Preview:
            </label>
            <div style={{ background: '#991B1B', color: '#FFF', padding: '10px 20px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 700, textAlign: 'center', overflow: 'hidden' }}>
              {config.tickerText}
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleSaveAll()}
            style={{
              background: '#7C3AED',
              color: '#FFF',
              border: 'none',
              padding: '10px 24px',
              borderRadius: '6px',
              fontWeight: 800,
              fontSize: '0.9rem',
              cursor: 'pointer'
            }}
          >
            Update Top Ticker
          </button>
        </div>
      )}

      {/* TAB 3: POPULAR CATEGORIES */}
      {activeTab === 'categories' && (
        <div>
          {/* Add Category Form */}
          <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '12px', border: '1px solid #E2E8F0', marginBottom: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <h3 style={{ margin: '0 0 14px 0', fontSize: '1.1rem', fontWeight: 800, color: '#0F172A' }}>
              + Add Popular Category Bubble
            </h3>

            <form onSubmit={handleAddCategory} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', alignItems: 'flex-end' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>Title *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Gift Boxes"
                  value={newCatTitle}
                  onChange={(e) => setNewCatTitle(e.target.value)}
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid #CBD5E1', borderRadius: '6px', fontSize: '0.85rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>Emoji (if no image)</label>
                <input
                  type="text"
                  placeholder="🎁"
                  value={newCatEmoji}
                  onChange={(e) => setNewCatEmoji(e.target.value)}
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid #CBD5E1', borderRadius: '6px', fontSize: '0.85rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>Image URL (Optional)</label>
                <input
                  type="text"
                  placeholder="/assets/image.png or URL"
                  value={newCatImg}
                  onChange={(e) => setNewCatImg(e.target.value)}
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid #CBD5E1', borderRadius: '6px', fontSize: '0.85rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>Target Link</label>
                <input
                  type="text"
                  placeholder="/shop"
                  value={newCatLink}
                  onChange={(e) => setNewCatLink(e.target.value)}
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid #CBD5E1', borderRadius: '6px', fontSize: '0.85rem' }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', paddingBottom: '10px' }}>
                <label style={{ fontSize: '0.82rem', color: '#334155', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <input
                    type="checkbox"
                    checked={newCatSpecial}
                    onChange={(e) => setNewCatSpecial(e.target.checked)}
                  />
                  Highlight / Special
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  style={{
                    background: '#10B981',
                    color: '#FFF',
                    border: 'none',
                    padding: '10px 18px',
                    borderRadius: '6px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    width: '100%'
                  }}
                >
                  + Add Item
                </button>
              </div>
            </form>
          </div>

          {/* Grid of Category Bubbles */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '14px' }}>
            {config.popularCategories.map((cat) => (
              <div
                key={cat.id}
                style={{
                  background: cat.isSpecial ? '#FEF2F2' : '#FFFFFF',
                  border: `1.5px solid ${cat.isSpecial ? '#EF4444' : '#E2E8F0'}`,
                  borderRadius: '12px',
                  padding: '14px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative'
                }}
              >
                <button
                  type="button"
                  onClick={() => handleDeleteCategory(cat.id)}
                  style={{ position: 'absolute', top: '6px', right: '6px', background: 'none', border: 'none', color: '#DC2626', fontSize: '0.85rem', cursor: 'pointer', fontWeight: 800 }}
                >
                  ✕
                </button>

                <div style={{
                  width: '55px',
                  height: '55px',
                  borderRadius: '14px',
                  background: cat.isSpecial ? '#FEE2E2' : '#F8FAFC',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                  overflow: 'hidden',
                  marginBottom: '8px',
                  border: '1px solid #CBD5E1'
                }}>
                  {cat.image ? (
                    <img src={cat.image} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    cat.emoji || '📦'
                  )}
                </div>

                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: cat.isSpecial ? '#B91C1C' : '#0F172A', lineHeight: 1.2 }}>
                  {cat.title}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '4px' }}>
                  {cat.link}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
