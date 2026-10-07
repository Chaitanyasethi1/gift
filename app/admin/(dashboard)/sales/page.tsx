'use client';
import React, { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';

export default function SalesPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  
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
      .select('*, order_items(*)')
      .order('created_at', { ascending: false });
    
    if (error) setError(error.message);
    else setOrders(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleOpenDetails = (order: any) => {
    setSelectedOrder(order);
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
      .eq('id', selectedOrder.id);

    if (error) {
      alert('Error updating order: ' + error.message);
    } else {
      alert('Order status & tracking updated successfully!');
      setSelectedOrder(null);
      fetchOrders();
    }
    setIsUpdating(false);
  };

  const parseAddress = (shippingAddress: any) => {
    if (!shippingAddress) return 'No Address Provided';
    if (typeof shippingAddress === 'string') {
      try {
        const parsed = JSON.parse(shippingAddress);
        return `${parsed.address || shippingAddress} ${parsed.pincode ? `(PIN: ${parsed.pincode})` : ''}`;
      } catch {
        return shippingAddress;
      }
    }
    if (typeof shippingAddress === 'object') {
      return `${shippingAddress.address || ''} ${shippingAddress.pincode ? `• PIN: ${shippingAddress.pincode}` : ''}`.trim() || 'No Address Provided';
    }
    return String(shippingAddress);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1e293b', margin: 0 }}>📦 Orders & Dispatch Manager</h1>
          <p style={{ color: '#64748b', fontSize: '0.9rem', margin: '4px 0 0 0' }}>Manage customer orders, view complete delivery addresses, and update courier tracking.</p>
        </div>
        <button 
          onClick={fetchOrders}
          style={{ background: '#f1f5f9', color: '#0f172a', border: '1px solid #cbd5e1', padding: '8px 16px', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          🔄 Refresh Orders
        </button>
      </div>

      <div style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
        
        {loading ? (
          <div style={{ padding: '60px', textAlign: 'center', color: '#64748b' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>⏳</div>
            Loading orders from database...
          </div>
        ) : error ? (
          <div style={{ padding: '20px', color: '#b91c1c', background: '#fef2f2' }}>Error loading orders: {error}</div>
        ) : orders && orders.length > 0 ? (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '1050px' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0', color: '#475569', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  <th style={{ padding: '16px' }}>Order ID &amp; Date</th>
                  <th style={{ padding: '16px' }}>Customer Contact</th>
                  <th style={{ padding: '16px', minWidth: '240px' }}>📍 Delivery Address</th>
                  <th style={{ padding: '16px' }}>Items &amp; Amount</th>
                  <th style={{ padding: '16px' }}>Payment</th>
                  <th style={{ padding: '16px' }}>Status</th>
                  <th style={{ padding: '16px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order: any) => {
                  const addrText = parseAddress(order.shipping_address);
                  const isCod = order.payment_status === 'Pending' || order.internal_notes?.includes('COD');
                  const isPaid = order.payment_status === 'Paid';

                  return (
                    <tr key={order.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '16px' }}>
                        <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.95rem' }}>{order.order_number}</div>
                        <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '2px' }}>
                          {new Date(order.created_at).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}
                        </div>
                      </td>

                      <td style={{ padding: '16px' }}>
                        <div style={{ fontWeight: 700, color: '#1e293b' }}>{order.customer_name || 'Guest'}</div>
                        <div style={{ fontSize: '0.85rem', color: '#0284c7', fontWeight: 600, marginTop: '2px' }}>
                          📞 {order.customer_phone || 'N/A'}
                        </div>
                        {order.gst_number && (
                          <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px' }}>
                            GST: <span style={{ fontWeight: 600 }}>{order.gst_number}</span>
                          </div>
                        )}
                      </td>

                      {/* COMPLETE DELIVERY ADDRESS COLUMN */}
                      <td style={{ padding: '16px', fontSize: '0.88rem', color: '#334155', lineHeight: 1.4 }}>
                        <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                          <span style={{ fontWeight: 600 }}>{addrText}</span>
                        </div>
                      </td>

                      <td style={{ padding: '16px' }}>
                        <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '1rem' }}>
                          ₹{Number(order.total_amount || 0).toFixed(2)}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '2px' }}>
                          {order.order_items?.length || 1} item(s)
                        </div>
                      </td>

                      <td style={{ padding: '16px' }}>
                        {isPaid ? (
                          <span style={{ background: '#dcfce7', color: '#166534', padding: '4px 10px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                            ✅ Paid
                          </span>
                        ) : isCod ? (
                          <span style={{ background: '#fef3c7', color: '#92400E', padding: '4px 10px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                            💵 COD Pending
                          </span>
                        ) : (
                          <span style={{ background: '#f1f5f9', color: '#475569', padding: '4px 10px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>
                            {order.payment_status || 'Pending'}
                          </span>
                        )}
                      </td>

                      <td style={{ padding: '16px' }}>
                        <span style={{ 
                          background: order.status === 'Delivered' ? '#dcfce7' : order.status === 'Dispatched' ? '#e0f2fe' : '#fef3c7', 
                          color: order.status === 'Delivered' ? '#166534' : order.status === 'Dispatched' ? '#0369a1' : '#92400e', 
                          padding: '4px 10px', 
                          borderRadius: '6px', 
                          fontSize: '0.82rem', 
                          fontWeight: 700 
                        }}>
                          {order.status || 'Confirmed'}
                        </span>
                      </td>

                      <td style={{ padding: '16px' }}>
                        <button 
                          onClick={() => handleOpenDetails(order)}
                          style={{ background: '#0f172a', color: '#fff', padding: '8px 14px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 700, border: 'none', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                        >
                          👁️ View / Update
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div style={{ padding: '60px', textAlign: 'center', color: '#64748b' }}>
            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📭</div>
            No customer orders found yet.
          </div>
        )}
      </div>

      {/* DETAILED ORDER & ADDRESS MODAL */}
      {selectedOrder && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px' }}>
          <div style={{ background: '#fff', padding: '30px', borderRadius: '16px', width: '100%', maxWidth: '640px', maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '14px', marginBottom: '20px' }}>
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Consignment Docket</span>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: '2px 0 0 0' }}>Order #{selectedOrder.order_number}</h2>
              </div>
              <button 
                onClick={() => setSelectedOrder(null)}
                style={{ background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '36px', height: '36px', fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}
              >
                ✕
              </button>
            </div>

            {/* CUSTOMER & DELIVERY ADDRESS CARD */}
            <div style={{ background: '#f8fafc', padding: '18px 20px', borderRadius: '12px', border: '1px solid #cbd5e1', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: '#0f172a', fontWeight: 800, margin: '0 0 10px 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                📍 Shipping &amp; Delivery Information
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '0.9rem' }}>
                <div>
                  <span style={{ color: '#64748b', fontSize: '0.8rem', display: 'block' }}>Customer Name:</span>
                  <strong style={{ color: '#0f172a' }}>{selectedOrder.customer_name || 'Guest'}</strong>
                </div>
                <div>
                  <span style={{ color: '#64748b', fontSize: '0.8rem', display: 'block' }}>Mobile / Phone:</span>
                  <a href={`tel:${selectedOrder.customer_phone}`} style={{ color: '#0284c7', fontWeight: 700, textDecoration: 'none' }}>
                    {selectedOrder.customer_phone || 'N/A'}
                  </a>
                </div>
                <div style={{ gridColumn: '1 / -1', borderTop: '1px dashed #e2e8f0', paddingTop: '10px' }}>
                  <span style={{ color: '#64748b', fontSize: '0.8rem', display: 'block' }}>Full Street Address:</span>
                  <p style={{ margin: '4px 0 0 0', fontWeight: 700, color: '#1e293b', lineHeight: 1.4 }}>
                    {parseAddress(selectedOrder.shipping_address)}
                  </p>
                </div>
                {selectedOrder.gst_number && (
                  <div style={{ gridColumn: '1 / -1', background: '#fff', padding: '8px 12px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                    <span style={{ color: '#64748b', fontSize: '0.8rem' }}>GSTIN Number: </span>
                    <strong style={{ color: '#0f172a' }}>{selectedOrder.gst_number}</strong>
                  </div>
                )}
              </div>
            </div>

            {/* ORDER ITEMS LIST */}
            {selectedOrder.order_items && selectedOrder.order_items.length > 0 && (
              <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '16px', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: '#475569', fontWeight: 800, margin: '0 0 10px 0' }}>
                  📦 Ordered Packaging Products
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {selectedOrder.order_items.map((item: any, idx: number) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.88rem', borderBottom: idx !== selectedOrder.order_items.length - 1 ? '1px solid #f1f5f9' : 'none', paddingBottom: '6px' }}>
                      <div>
                        <span style={{ fontWeight: 700, color: '#0f172a' }}>{item.product_name}</span>
                        <span style={{ color: '#64748b', marginLeft: '8px' }}>&times; {item.quantity} pcs</span>
                        {item.variant_details?.size && (
                          <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Size: {item.variant_details.size}</div>
                        )}
                      </div>
                      <span style={{ fontWeight: 800, color: '#0f172a' }}>₹{Number(item.total_price || (item.unit_price * item.quantity)).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '2px solid #e2e8f0', paddingTop: '10px', marginTop: '10px', fontWeight: 800, fontSize: '1rem', color: '#0f172a' }}>
                  <span>Total Amount</span>
                  <span style={{ color: '#16a34a' }}>₹{Number(selectedOrder.total_amount).toFixed(2)}</span>
                </div>
              </div>
            )}

            {/* TRACKING & DISPATCH UPDATE FORM */}
            <form onSubmit={handleUpdate} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: '#475569', fontWeight: 800, margin: 0 }}>
                🚚 Dispatch &amp; Tracking Update
              </h3>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>Order Status</label>
                <select 
                  value={status} 
                  onChange={(e) => setStatus(e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontWeight: 600, background: '#fff' }}
                >
                  <option value="Confirmed">Confirmed</option>
                  <option value="In Production">In Production</option>
                  <option value="Dispatched">Dispatched</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>Courier Partner</label>
                  <input 
                    type="text" 
                    value={courierName} 
                    onChange={(e) => setCourierName(e.target.value)}
                    placeholder="e.g. Delhivery, Bluedart, SafeXpress"
                    style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1.5px solid #cbd5e1', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>AWB / Docket Number</label>
                  <input 
                    type="text" 
                    value={trackingNumber} 
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="e.g. 1234567890"
                    style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1.5px solid #cbd5e1', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>Tracking URL / Link</label>
                <input 
                  type="url" 
                  value={trackingLink} 
                  onChange={(e) => setTrackingLink(e.target.value)}
                  placeholder="https://delhivery.com/track/package/..."
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1.5px solid #cbd5e1', boxSizing: 'border-box' }}
                />
              </div>

              {selectedOrder.internal_notes && (
                <div style={{ background: '#f1f5f9', padding: '10px', borderRadius: '6px', fontSize: '0.8rem', color: '#475569' }}>
                  ℹ️ <strong>Notes:</strong> {selectedOrder.internal_notes}
                </div>
              )}

              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button 
                  type="button" 
                  onClick={() => setSelectedOrder(null)}
                  style={{ flex: 1, padding: '12px', background: '#f1f5f9', color: '#334155', borderRadius: '8px', fontWeight: 700, border: '1px solid #cbd5e1', cursor: 'pointer' }}
                >
                  Close
                </button>
                <button 
                  type="submit" 
                  disabled={isUpdating}
                  style={{ flex: 1, padding: '12px', background: '#0f172a', color: '#fff', borderRadius: '8px', fontWeight: 800, border: 'none', cursor: 'pointer' }}
                >
                  {isUpdating ? 'Saving...' : '💾 Save & Update Customer'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
