'use client';
import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function StockPage() {
  const [stock, setStock] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStock() {
      // Assuming a table named 'stock_items'
      const { data, error } = await supabase.from('stock_items').select('*');
      if (error) console.error(error);
      else setStock(data || []);
      setLoading(false);
    }
    fetchStock();
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1e293b' }}>📦 Stock Inventory</h1>
        <button style={{ background: '#10b981', color: '#fff', padding: '10px 20px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
          + Add New Item
        </button>
      </div>

      <div style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.9rem' }}>
              <th style={{ padding: '15px 20px' }}>Item Name</th>
              <th style={{ padding: '15px 20px' }}>Category</th>
              <th style={{ padding: '15px 20px' }}>Quantity</th>
              <th style={{ padding: '15px 20px' }}>Unit Price</th>
              <th style={{ padding: '15px 20px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={5} style={{ padding: '20px', textAlign: 'center', color: '#64748b' }}>Loading...</td></tr>
            ) : stock.length === 0 ? (
              <tr><td colSpan={5} style={{ padding: '20px', textAlign: 'center', color: '#64748b' }}>No stock items found. (Create table 'stock_items' in Supabase)</td></tr>
            ) : (
              stock.map((item) => (
                <tr key={item.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '15px 20px', fontWeight: 600 }}>{item.name}</td>
                  <td style={{ padding: '15px 20px', color: '#475569' }}>{item.category}</td>
                  <td style={{ padding: '15px 20px', color: '#475569' }}>{item.quantity}</td>
                  <td style={{ padding: '15px 20px', color: '#475569' }}>₹{item.price}</td>
                  <td style={{ padding: '15px 20px' }}>
                    <span style={{ background: item.quantity > 10 ? '#dcfce7' : '#fee2e2', color: item.quantity > 10 ? '#166534' : '#991b1b', padding: '4px 8px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>
                      {item.quantity > 10 ? 'In Stock' : 'Low Stock'}
                    </span>
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
