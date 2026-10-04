'use client';
import React, { useEffect, useState } from 'react';

interface Category {
  id: string;
  name: string;
  slug: string;
  parent_id: string | null;
  sort_order: number;
  show_in_menu: boolean;
  show_in_home: boolean;
}

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const defaultForm = {
    name: '',
    slug: '',
    parent_id: '',
    sort_order: 1,
    show_in_menu: true,
    show_in_home: false
  };
  const [formData, setFormData] = useState(defaultForm);
  const [isSaving, setIsSaving] = useState(false);

  async function fetchCategories() {
    try {
      setLoading(true);
      const res = await fetch('/api/categories');
      const data = await res.json();
      if (data.categories) {
        setCategories(data.categories);
      }
    } catch (err) {
      console.error('Error fetching categories:', err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  const mainCategories = categories.filter((c) => !c.parent_id);
  const getSubcategories = (parentId: string) => categories.filter((c) => c.parent_id === parentId);

  function handleAddNew(parentId: string = '') {
    setEditingId(null);
    setFormData({
      ...defaultForm,
      parent_id: parentId,
      sort_order: parentId ? getSubcategories(parentId).length + 1 : mainCategories.length + 1
    });
    setIsModalOpen(true);
  }

  function handleEdit(cat: Category) {
    setEditingId(cat.id);
    setFormData({
      name: cat.name,
      slug: cat.slug,
      parent_id: cat.parent_id || '',
      sort_order: cat.sort_order || 1,
      show_in_menu: cat.show_in_menu !== false,
      show_in_home: !!cat.show_in_home
    });
    setIsModalOpen(true);
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setIsSaving(true);
    try {
      const payload = {
        ...formData,
        id: editingId,
        parent_id: formData.parent_id || null,
        slug: formData.slug || formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
      };

      const res = await fetch('/api/categories', {
        method: editingId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await res.json();
      if (result.error) {
        alert('Error: ' + result.error);
      } else {
        setIsModalOpen(false);
        fetchCategories();
      }
    } catch (err: any) {
      alert('Error saving category: ' + err.message);
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDelete(id: string, name: string) {
    if (!confirm(`Are you sure you want to delete "${name}"?`)) return;
    try {
      const res = await fetch(`/api/categories?id=${encodeURIComponent(id)}`, {
        method: 'DELETE'
      });
      const result = await res.json();
      if (result.error) {
        alert('Error deleting: ' + result.error);
      } else {
        fetchCategories();
      }
    } catch (err: any) {
      alert('Error: ' + err.message);
    }
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', flexWrap: 'wrap', gap: '15px' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
            🗂️ Category & Menu Management
          </h1>
          <p style={{ color: '#64748B', margin: '4px 0 0 0', fontSize: '0.95rem' }}>
            Website ke header dropdown aur storefront categories ko manage aur rename karein.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => handleAddNew('')}
            style={{
              background: '#0F172A',
              color: '#fff',
              padding: '10px 18px',
              borderRadius: '8px',
              border: 'none',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            + Add Main Category
          </button>
        </div>
      </div>

      {/* Categories Cards List */}
      {loading ? (
        <div style={{ padding: '40px', textAlign: 'center', background: '#fff', borderRadius: '12px', border: '1px solid #E2E8F0', color: '#64748B' }}>
          Loading categories...
        </div>
      ) : mainCategories.length === 0 ? (
        <div style={{ padding: '40px', textAlign: 'center', background: '#fff', borderRadius: '12px', border: '1px solid #E2E8F0', color: '#64748B' }}>
          No categories found. Click "+ Add Main Category" to create one.
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {mainCategories.map((mainCat, index) => {
            const subs = getSubcategories(mainCat.id);
            return (
              <div
                key={mainCat.id || index}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                  overflow: 'hidden'
                }}
              >
                {/* Main Category Bar */}
                <div
                  style={{
                    padding: '18px 24px',
                    background: '#F8FAFC',
                    borderBottom: '1px solid #E2E8F0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '12px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '1.4rem' }}>📁</span>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                          {mainCat.name}
                        </h3>
                        <span style={{ fontSize: '0.75rem', background: '#E2E8F0', color: '#475569', padding: '2px 8px', borderRadius: '12px', fontWeight: 600 }}>
                          Slug: /{mainCat.slug}
                        </span>
                        {mainCat.show_in_menu && (
                          <span style={{ fontSize: '0.75rem', background: '#DCFCE7', color: '#166534', padding: '2px 8px', borderRadius: '12px', fontWeight: 600 }}>
                            ✓ In Menu
                          </span>
                        )}
                      </div>
                      <span style={{ fontSize: '0.85rem', color: '#64748B' }}>
                        {subs.length} Subcategories
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => handleAddNew(mainCat.id)}
                      style={{
                        background: '#10B981',
                        color: '#fff',
                        padding: '6px 14px',
                        borderRadius: '6px',
                        border: 'none',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      + Add Subcategory
                    </button>
                    <button
                      onClick={() => handleEdit(mainCat)}
                      style={{
                        background: '#3B82F6',
                        color: '#fff',
                        padding: '6px 14px',
                        borderRadius: '6px',
                        border: 'none',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => handleDelete(mainCat.id, mainCat.name)}
                      style={{
                        background: '#EF4444',
                        color: '#fff',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        border: 'none',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      🗑️
                    </button>
                  </div>
                </div>

                {/* Subcategories Table */}
                <div style={{ padding: '0 24px' }}>
                  {subs.length === 0 ? (
                    <div style={{ padding: '20px 0', color: '#94A3B8', fontSize: '0.9rem', fontStyle: 'italic' }}>
                      No subcategories added yet. Click "+ Add Subcategory" to add dropdown items.
                    </div>
                  ) : (
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid #F1F5F9', color: '#94A3B8', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                          <th style={{ padding: '12px 10px' }}>Subcategory Name</th>
                          <th style={{ padding: '12px 10px' }}>Link / Slug</th>
                          <th style={{ padding: '12px 10px' }}>Order</th>
                          <th style={{ padding: '12px 10px', textAlign: 'right' }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {subs.map((sub) => (
                          <tr key={sub.id} style={{ borderBottom: '1px solid #F8FAFC' }}>
                            <td style={{ padding: '12px 10px', fontWeight: 600, color: '#1E293B' }}>
                              ↳ {sub.name}
                            </td>
                            <td style={{ padding: '12px 10px', color: '#64748B', fontSize: '0.85rem' }}>
                              /shop?category={sub.slug}
                            </td>
                            <td style={{ padding: '12px 10px', color: '#64748B', fontSize: '0.85rem' }}>
                              #{sub.sort_order}
                            </td>
                            <td style={{ padding: '12px 10px', textAlign: 'right' }}>
                              <button
                                onClick={() => handleEdit(sub)}
                                style={{
                                  background: 'none',
                                  border: '1px solid #CBD5E1',
                                  padding: '4px 10px',
                                  borderRadius: '4px',
                                  color: '#3B82F6',
                                  fontSize: '0.8rem',
                                  fontWeight: 600,
                                  cursor: 'pointer',
                                  marginRight: '6px'
                                }}
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(sub.id, sub.name)}
                                style={{
                                  background: 'none',
                                  border: '1px solid #FECDD3',
                                  padding: '4px 8px',
                                  borderRadius: '4px',
                                  color: '#EF4444',
                                  fontSize: '0.8rem',
                                  fontWeight: 600,
                                  cursor: 'pointer'
                                }}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Add / Edit Category Modal */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px'
          }}
        >
          <div
            style={{
              background: '#fff',
              padding: '30px',
              borderRadius: '14px',
              width: '540px',
              maxWidth: '100%',
              boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 800, color: '#0F172A' }}>
                {editingId ? 'Edit Category' : 'Add New Category'}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{ background: 'none', border: 'none', fontSize: '1.3rem', cursor: 'pointer', color: '#94A3B8' }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              {/* Category Name */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                  Category / Subcategory Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kraft Paper Bags or Garment Boxes"
                  value={formData.name}
                  onChange={(e) => {
                    const name = e.target.value;
                    const autoSlug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                    setFormData({
                      ...formData,
                      name,
                      slug: editingId ? formData.slug : autoSlug
                    });
                  }}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    border: '1px solid #CBD5E1',
                    borderRadius: '8px',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              {/* Parent Category */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                  Parent Category (Leave empty for Main Category)
                </label>
                <select
                  value={formData.parent_id}
                  onChange={(e) => setFormData({ ...formData, parent_id: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    border: '1px solid #CBD5E1',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    background: '#fff'
                  }}
                >
                  <option value="">None (This is a Main Category)</option>
                  {mainCategories.filter(c => c.id !== editingId).map((c) => (
                    <option key={c.id} value={c.id}>
                      📁 {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Slug & Order */}
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ flex: 2 }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    URL Slug (Identifier)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="kraft-paper-bags"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      border: '1px solid #CBD5E1',
                      borderRadius: '8px',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    Order
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={formData.sort_order}
                    onChange={(e) => setFormData({ ...formData, sort_order: parseInt(e.target.value) || 1 })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      border: '1px solid #CBD5E1',
                      borderRadius: '8px',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>
              </div>

              {/* Display Toggles */}
              <div style={{ background: '#F8FAFC', padding: '12px 16px', borderRadius: '8px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={formData.show_in_menu}
                    onChange={(e) => setFormData({ ...formData, show_in_menu: e.target.checked })}
                  />
                  <span style={{ fontSize: '0.9rem', color: '#1E293B', fontWeight: 600 }}>
                    Show in Navigation Header Menu
                  </span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={formData.show_in_home}
                    onChange={(e) => setFormData({ ...formData, show_in_home: e.target.checked })}
                  />
                  <span style={{ fontSize: '0.9rem', color: '#1E293B', fontWeight: 600 }}>
                    Show in Homepage Popular Categories
                  </span>
                </label>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    flex: 1,
                    padding: '12px',
                    border: '1px solid #CBD5E1',
                    background: '#fff',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 700
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  style={{
                    flex: 1,
                    padding: '12px',
                    border: 'none',
                    background: '#10B981',
                    color: '#fff',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 700
                  }}
                >
                  {isSaving ? 'Saving...' : 'Save Category'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}
