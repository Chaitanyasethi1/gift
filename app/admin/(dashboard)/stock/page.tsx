'use client';
import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function StockProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newItem, setNewItem] = useState({ name: '', slug: '', mrp: 0, selling_price: 0, stock_quantity: 0, is_active: true, images: [] as string[] });
  const [isSaving, setIsSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  async function fetchProducts() {
    setLoading(true);
    const { data, error } = await supabase.from('products').select('*').order('created_at', { ascending: false });
    if (error) console.error(error);
    else setProducts(data || []);
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  function handleEdit(item: any) {
    setEditingId(item.id);
    setNewItem({
      name: item.name,
      slug: item.slug,
      mrp: item.mrp,
      selling_price: item.selling_price,
      stock_quantity: item.stock_quantity,
      is_active: item.is_active,
      images: item.images || []
    });
    setIsModalOpen(true);
  }

  function handleAddNew() {
    setEditingId(null);
    setNewItem({ name: '', slug: '', mrp: 0, selling_price: 0, stock_quantity: 0, is_active: true, images: [] });
    setIsModalOpen(true);
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    try {
      setUploadingImage(true);
      if (!e.target.files || e.target.files.length === 0) return;
      const file = e.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage.from('product-images').upload(filePath, file);
      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from('product-images').getPublicUrl(filePath);
      
      setNewItem({ ...newItem, images: [data.publicUrl] });
    } catch (error: any) {
      alert('Error uploading image: ' + error.message);
    } finally {
      setUploadingImage(false);
    }
  }

  async function handleSaveItem(e: React.FormEvent) {
    e.preventDefault();
    setIsSaving(true);
    const slug = newItem.slug || newItem.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    
    const payload = { ...newItem, slug };

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
      fetchProducts(); // refresh list
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1e293b' }}>📦 Products & Stock</h1>
        <button 
          onClick={handleAddNew}
          style={{ background: '#10b981', color: '#fff', padding: '10px 20px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
        >
          + Add New Product
        </button>
      </div>

      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
          <div style={{ background: '#fff', padding: '30px', borderRadius: '12px', width: '500px', maxWidth: '90%', maxHeight: '90vh', overflowY: 'auto' }}>
            <h2 style={{ marginBottom: '20px', color: '#1e293b' }}>{editingId ? 'Edit Product' : 'Add New Product'}</h2>
            <form onSubmit={handleSaveItem} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', color: '#64748b' }}>Product Name</label>
                <input required type="text" value={newItem.name} onChange={e => setNewItem({...newItem, name: e.target.value})} style={{ width: '100%', padding: '10px', border: '1px solid #e2e8f0', borderRadius: '6px' }} />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', color: '#64748b' }}>Product Image</label>
                {newItem.images[0] && (
                  <img src={newItem.images[0]} alt="Preview" style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px', marginBottom: '10px' }} />
                )}
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageUpload} 
                  disabled={uploadingImage}
                  style={{ width: '100%', padding: '10px', border: '1px solid #e2e8f0', borderRadius: '6px', background: '#f8fafc' }} 
                />
                {uploadingImage && <span style={{ fontSize: '0.8rem', color: '#3b82f6' }}>Uploading...</span>}
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', color: '#64748b' }}>MRP (₹)</label>
                  <input required type="number" min="0" step="0.01" value={newItem.mrp} onChange={e => setNewItem({...newItem, mrp: parseFloat(e.target.value) || 0})} style={{ width: '100%', padding: '10px', border: '1px solid #e2e8f0', borderRadius: '6px' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', color: '#64748b' }}>Selling Price (₹)</label>
                  <input required type="number" min="0" step="0.01" value={newItem.selling_price} onChange={e => setNewItem({...newItem, selling_price: parseFloat(e.target.value) || 0})} style={{ width: '100%', padding: '10px', border: '1px solid #e2e8f0', borderRadius: '6px' }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', color: '#64748b' }}>Stock Quantity</label>
                <input required type="number" min="0" value={newItem.stock_quantity} onChange={e => setNewItem({...newItem, stock_quantity: parseInt(e.target.value) || 0})} style={{ width: '100%', padding: '10px', border: '1px solid #e2e8f0', borderRadius: '6px' }} />
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input type="checkbox" checked={newItem.is_active} onChange={e => setNewItem({...newItem, is_active: e.target.checked})} />
                  <span style={{ fontSize: '0.9rem', color: '#64748b' }}>Active on Website</span>
                </label>
              </div>
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button type="button" onClick={() => setIsModalOpen(false)} style={{ flex: 1, padding: '10px', border: '1px solid #e2e8f0', background: '#fff', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Cancel</button>
                <button type="submit" disabled={isSaving || uploadingImage} style={{ flex: 1, padding: '10px', border: 'none', background: '#10b981', color: '#fff', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
                  {isSaving ? 'Saving...' : 'Save Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.9rem' }}>
              <th style={{ padding: '15px 20px' }}>Image</th>
              <th style={{ padding: '15px 20px' }}>Product Name</th>
              <th style={{ padding: '15px 20px' }}>MRP</th>
              <th style={{ padding: '15px 20px' }}>Selling Price</th>
              <th style={{ padding: '15px 20px' }}>Stock</th>
              <th style={{ padding: '15px 20px' }}>Status</th>
              <th style={{ padding: '15px 20px' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={7} style={{ padding: '20px', textAlign: 'center', color: '#64748b' }}>Loading products...</td></tr>
            ) : products.length === 0 ? (
              <tr><td colSpan={7} style={{ padding: '20px', textAlign: 'center', color: '#64748b' }}>No products found in the database.</td></tr>
            ) : (
              products.map((item) => (
                <tr key={item.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '15px 20px' }}>
                    {item.images?.[0] ? (
                      <img src={item.images[0]} alt={item.name} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '6px' }} />
                    ) : (
                      <div style={{ width: '40px', height: '40px', background: '#f1f5f9', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>No Img</div>
                    )}
                  </td>
                  <td style={{ padding: '15px 20px', fontWeight: 600 }}>{item.name}</td>
                  <td style={{ padding: '15px 20px', color: '#475569', textDecoration: 'line-through' }}>₹{item.mrp}</td>
                  <td style={{ padding: '15px 20px', color: '#10b981', fontWeight: 'bold' }}>₹{item.selling_price}</td>
                  <td style={{ padding: '15px 20px', color: '#475569' }}>{item.stock_quantity}</td>
                  <td style={{ padding: '15px 20px' }}>
                    <span style={{ background: item.is_active ? '#dcfce7' : '#fee2e2', color: item.is_active ? '#166534' : '#991b1b', padding: '4px 8px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>
                      {item.is_active ? 'Active' : 'Draft'}
                    </span>
                  </td>
                  <td style={{ padding: '15px 20px' }}>
                    <button onClick={() => handleEdit(item)} style={{ padding: '5px 10px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Edit</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
