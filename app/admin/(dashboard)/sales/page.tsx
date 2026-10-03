'use client';
import React, { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';

export default function SalesPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingOrder, setEditingOrder] = useState<any>(null);
  
  // Edit Form State
  const [status, setStatus] = useState('');
  const [courierName, setCourierName] = useState('');
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingLink, setTrackingLink] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  const supabase = createClient();

  const fetchOrders = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) setError(error.message);
    else setOrders(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleEditClick = (order: any) => {
    setEditingOrder(order);
    setStatus(order.status || 'Confirmed');
    setCourierName(order.courier_name || '');
    setTrackingNumber(order.tracking_number || '');
    setTrackingLink(order.tracking_link || '');
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    
    const { error } = await supabase
      .from('orders')
      .update({
        status,
        courier_name: courierName,
        tracking_number: trackingNumber,
        tracking_link: trackingLink
      })
      .eq('id', editingOrder.id);

    if (error) {
      alert('Error updating order: ' + error.message);
    } else {
      alert('Order updated successfully!');
      setEditingOrder(null);
      fetchOrders();
    }
    setIsUpdating(false);
  };

  return (
    <div>
      <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1e293b', marginBottom: '20px' }}>📦 Orders & Sales</h1>
      <div style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
        
        {loading ? (
          <div style={{ padding: '40px', textAlign: 'center' }}>Loading orders...</div>
        ) : error ? (
          <div style={{ padding: '20px', color: 'red' }}>Error loading orders: {error}</div>
        ) : orders && orders.length > 0 ? (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '900px' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0', color: '#475569', fontSize: '0.9rem' }}>
                  <th style={{ padding: '16px' }}>Order ID</th>
                  <th style={{ padding: '16px' }}>Date</th>
                  <th style={{ padding: '16px' }}>Customer</th>
                  <th style={{ padding: '16px' }}>Amount</th>
                  <th style={{ padding: '16px' }}>Payment</th>
                  <th style={{ padding: '16px' }}>Status</th>
                  <th style={{ padding: '16px' }}>Tracking</th>
                  <th style={{ padding: '16px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order: any) => (
                  <tr key={order.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '16px', fontWeight: 600, color: '#0f172a' }}>{order.order_number}</td>
                    <td style={{ padding: '16px', color: '#64748b' }}>{new Date(order.created_at).toLocaleDateString()}</td>
                    <td style={{ padding: '16px' }}>
                      <div style={{ fontWeight: 600, color: '#334155' }}>{order.customer_name}</div>
                      <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{order.customer_phone}</div>
                    </td>
                    <td style={{ padding: '16px', fontWeight: 700, color: '#10b981' }}>₹{order.total_amount.toFixed(2)}</td>
                    <td style={{ padding: '16px' }}>
                      <span style={{ background: order.payment_status === 'Paid' ? '#d1fae5' : '#fef3c7', color: order.payment_status === 'Paid' ? '#047857' : '#b45309', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600 }}>
                        {order.payment_status}
                      </span>
                    </td>
                    <td style={{ padding: '16px' }}>
                      <span style={{ background: '#e0e7ff', color: '#4338ca', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600 }}>
                        {order.status}
                      </span>
                    </td>
                    <td style={{ padding: '16px', fontSize: '0.85rem' }}>
                      {order.courier_name ? (
                        <>
                          <div>{order.courier_name}</div>
                          <a href={order.tracking_link || '#'} target="_blank" style={{ color: '#3b82f6', textDecoration: 'underline' }}>{order.tracking_number}</a>
                        </>
                      ) : (
                        <span style={{ color: '#94a3b8' }}>Not updated</span>
                      )}
                    </td>
                    <td style={{ padding: '16px' }}>
                      <button 
                        onClick={() => handleEditClick(order)}
                        style={{ background: '#3b82f6', color: '#fff', padding: '6px 12px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600, border: 'none', cursor: 'pointer' }}
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>No orders found.</div>
        )}
      </div>

      {/* Edit Modal */}
      {editingOrder && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px' }}>
          <div style={{ background: '#fff', padding: '30px', borderRadius: '12px', width: '100%', maxWidth: '500px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '20px' }}>Update Order: {editingOrder.order_number}</h2>
            
            <form onSubmit={handleUpdate} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '5px' }}>Order Status</label>
                <select 
                  value={status} 
                  onChange={(e) => setStatus(e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                >
                  <option value="Confirmed">Confirmed</option>
                  <option value="Processing">Processing</option>
                  <option value="Dispatched">Dispatched</option>
                  <option value="In Transit">In Transit</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '5px' }}>Courier Name</label>
                <input 
                  type="text" 
                  value={courierName} 
                  onChange={(e) => setCourierName(e.target.value)}
                  placeholder="e.g. Delhivery, Bluedart"
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '5px' }}>Tracking Number (AWB)</label>
                <input 
                  type="text" 
                  value={trackingNumber} 
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Tracking Number"
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '5px' }}>Tracking Link</label>
                <input 
                  type="url" 
                  value={trackingLink} 
                  onChange={(e) => setTrackingLink(e.target.value)}
                  placeholder="https://..."
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                <button 
                  type="button" 
                  onClick={() => setEditingOrder(null)}
                  style={{ flex: 1, padding: '12px', background: '#e2e8f0', color: '#0f172a', borderRadius: '6px', fontWeight: 600, border: 'none', cursor: 'pointer' }}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={isUpdating}
                  style={{ flex: 1, padding: '12px', background: '#0f172a', color: '#fff', borderRadius: '6px', fontWeight: 600, border: 'none', cursor: 'pointer' }}
                >
                  {isUpdating ? 'Saving...' : 'Save Updates'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
