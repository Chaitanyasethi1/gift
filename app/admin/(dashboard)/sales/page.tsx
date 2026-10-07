'use client';
import React, { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';

export default function SalesPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
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
    if (!shippingAddress) return { address: 'No Address Provided', pincode: '' };
    if (typeof shippingAddress === 'string') {
      try {
        const parsed = JSON.parse(shippingAddress);
        return {
          address: parsed.address || shippingAddress,
          pincode: parsed.pincode || ''
        };
      } catch {
        return { address: shippingAddress, pincode: '' };
      }
    }
    if (typeof shippingAddress === 'object') {
      return {
        address: shippingAddress.address || 'No Address Provided',
        pincode: shippingAddress.pincode || ''
      };
    }
    return { address: String(shippingAddress), pincode: '' };
  };

  const filteredOrders = orders.filter((o) => {
    const term = searchTerm.toLowerCase();
    const addr = parseAddress(o.shipping_address);
    const matchesSearch = 
      (o.order_number && o.order_number.toLowerCase().includes(term)) ||
      (o.customer_name && o.customer_name.toLowerCase().includes(term)) ||
      (o.customer_phone && o.customer_phone.includes(term)) ||
      (o.gst_number && o.gst_number.toLowerCase().includes(term)) ||
      (addr.address && addr.address.toLowerCase().includes(term)) ||
      (addr.pincode && addr.pincode.includes(term));

    const matchesStatus = statusFilter === 'ALL' || o.status === statusFilter || (statusFilter === 'Paid' && o.payment_status === 'Paid');
    return matchesSearch && matchesStatus;
  });

  const printDocket = (order: any) => {
    const addr = parseAddress(order.shipping_address);
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>Packing Slip - ${order.order_number}</title>
          <style>
            body { font-family: system-ui, -apple-system, sans-serif; padding: 20px; color: #111; }
            .header { display: flex; justify-content: space-between; border-bottom: 2px solid #000; padding-bottom: 12px; margin-bottom: 20px; }
            .badge { display: inline-block; padding: 4px 8px; border: 1px solid #000; font-weight: bold; font-size: 12px; }
            .section { margin-bottom: 20px; }
            table { width: 100%; border-collapse: collapse; margin-top: 10px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background: #f5f5f5; }
          </style>
        </head>
        <body>
          <div class="header">
            <div>
              <h2 style="margin:0;">AS PRINT GALLERY</h2>
              <div style="font-size:12px;color:#555;">Plot No. 12, Industrial Area, Loni, Ghaziabad, UP - 201102</div>
              <div style="font-size:12px;color:#555;">GSTIN: 09AWKPN5910E1ZG | Phone: +91 9911678386</div>
            </div>
            <div style="text-align:right;">
              <h3 style="margin:0;">PACKING &amp; DISPATCH DOCKET</h3>
              <div style="font-size:16px;font-weight:bold;margin-top:4px;">${order.order_number}</div>
              <div style="font-size:12px;">Date: ${new Date(order.created_at).toLocaleDateString('en-IN')}</div>
            </div>
          </div>

          <div class="section" style="background:#f9f9f9;padding:15px;border:1px solid #ddd;">
            <div style="font-weight:bold;font-size:13px;text-transform:uppercase;margin-bottom:6px;">DELIVER TO (CUSTOMER):</div>
            <div style="font-size:15px;font-weight:bold;">${order.customer_name || 'Guest'}</div>
            <div style="font-size:14px;margin-top:2px;">Phone: <strong>${order.customer_phone || 'N/A'}</strong></div>
            <div style="font-size:14px;margin-top:4px;line-height:1.4;"><strong>Address:</strong> ${addr.address}</div>
            <div style="font-size:14px;margin-top:4px;"><strong>PIN Code:</strong> ${addr.pincode}</div>
            ${order.gst_number ? `<div style="font-size:13px;margin-top:4px;"><strong>GSTIN:</strong> ${order.gst_number}</div>` : ''}
          </div>

          <div class="section">
            <div style="font-weight:bold;font-size:13px;text-transform:uppercase;">ORDER ITEMS:</div>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Description</th>
                  <th>Qty</th>
                  <th>Rate</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                ${(order.order_items || []).map((it: any, i: number) => `
                  <tr>
                    <td>${i + 1}</td>
                    <td><strong>${it.product_name}</strong> ${it.variant_details?.size ? `<br><small style="color:#666;">Size: ${it.variant_details.size}</small>` : ''}</td>
                    <td><strong>${it.quantity} pcs</strong></td>
                    <td>₹${Number(it.unit_price).toFixed(2)}</td>
                    <td>₹${Number(it.total_price || (it.unit_price * it.quantity)).toFixed(2)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <div style="display:flex;justify-content:space-between;margin-top:20px;border-top:2px solid #000;padding-top:10px;">
            <div>
              <div class="badge">${order.payment_status === 'Paid' ? 'PAID ONLINE (RAZORPAY)' : 'CASH ON DELIVERY (COLLECT CASH)'}</div>
            </div>
            <div style="text-align:right;">
              <div style="font-size:16px;font-weight:bold;">Total Amount: ₹${Number(order.total_amount).toFixed(2)}</div>
            </div>
          </div>

          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '15px' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>📦 Orders, Customer Details &amp; Dispatch</h1>
          <p style={{ color: '#64748b', fontSize: '0.9rem', margin: '4px 0 0 0' }}>Complete customer details: Full Name, Phone, Delivery Address, Pincode, GSTIN, and Ordered Items.</p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={fetchOrders}
            style={{ background: '#0f172a', color: '#fff', border: 'none', padding: '10px 18px', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            🔄 Refresh List
          </button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div style={{ background: '#fff', padding: '16px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '20px', display: 'flex', gap: '15px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ flex: 1, minWidth: '280px', display: 'flex', alignItems: 'center', background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '8px', padding: '8px 14px' }}>
          <span style={{ fontSize: '1.1rem', marginRight: '8px' }}>🔍</span>
          <input 
            type="text" 
            placeholder="Search by Order ID, Customer Name, Phone, Pincode, GSTIN, Address..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none', fontSize: '0.92rem', fontWeight: 500 }}
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontWeight: 800 }}>✕</button>
          )}
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569' }}>Filter Status:</span>
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            style={{ padding: '8px 14px', borderRadius: '8px', border: '1.5px solid #cbd5e1', background: '#fff', fontWeight: 700, fontSize: '0.88rem' }}
          >
            <option value="ALL">All Orders ({orders.length})</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending / COD</option>
            <option value="In Production">In Production</option>
            <option value="Dispatched">Dispatched</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      </div>

      {/* Main Table */}
      <div style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
        {loading ? (
          <div style={{ padding: '60px', textAlign: 'center', color: '#64748b' }}>
            <div style={{ fontSize: '1.8rem', marginBottom: '10px' }}>⏳</div>
            Loading orders from database...
          </div>
        ) : error ? (
          <div style={{ padding: '20px', color: '#b91c1c', background: '#fef2f2' }}>Error loading orders: {error}</div>
        ) : filteredOrders && filteredOrders.length > 0 ? (
          <div style={{ overflowX: 'auto' }}>
            <style>{`
              .order-row:hover {
                background-color: #f8fafc !important;
              }
            `}</style>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '1150px' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0', color: '#475569', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  <th style={{ padding: '16px' }}>Order ID &amp; Time</th>
                  <th style={{ padding: '16px' }}>👤 Customer &amp; Phone</th>
                  <th style={{ padding: '16px', width: '280px' }}>📍 Complete Delivery Address</th>
                  <th style={{ padding: '16px' }}>🏷️ GSTIN</th>
                  <th style={{ padding: '16px' }}>💰 Payment &amp; Total</th>
                  <th style={{ padding: '16px' }}>📦 Order Status</th>
                  <th style={{ padding: '16px', textAlign: 'center' }}>⚡ Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order: any) => {
                  const addr = parseAddress(order.shipping_address);
                  const isPaid = order.payment_status === 'Paid';
                  const isCod = order.payment_status === 'Pending' || order.internal_notes?.includes('COD');

                  return (
                    <tr 
                      key={order.id} 
                      className="order-row"
                      onClick={() => handleOpenDetails(order)}
                      style={{ borderBottom: '1px solid #f1f5f9', cursor: 'pointer', transition: 'background 0.15s ease' }}
                    >
                      {/* Order Number & Timestamp */}
                      <td style={{ padding: '16px' }}>
                        <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.98rem' }}>{order.order_number}</div>
                        <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '3px' }}>
                          {new Date(order.created_at).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}
                        </div>
                      </td>

                      {/* Customer Name & Phone */}
                      <td style={{ padding: '16px' }}>
                        <div style={{ fontWeight: 800, color: '#1e293b', fontSize: '0.95rem' }}>
                          {order.customer_name || 'Guest'}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
                          <a 
                            href={`tel:${order.customer_phone}`}
                            style={{ color: '#0284c7', fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none' }}
                          >
                            📞 {order.customer_phone || 'N/A'}
                          </a>
                          {order.customer_phone && (
                            <a 
                              href={`https://wa.me/91${order.customer_phone.replace(/\D/g, '').slice(-10)}?text=Hi%20${encodeURIComponent(order.customer_name || 'Customer')},%20this%20is%20regarding%20your%20AS%20Print%20Gallery%20Order%20${order.order_number}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ background: '#dcfce7', color: '#166534', padding: '2px 6px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 800, textDecoration: 'none' }}
                              title="Chat with Customer on WhatsApp"
                            >
                              💬 WA
                            </a>
                          )}
                        </div>
                      </td>

                      {/* Full Delivery Address & Pincode */}
                      <td style={{ padding: '16px' }}>
                        <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.88rem', color: '#1e293b', lineHeight: 1.4 }}>
                          <div>{addr.address}</div>
                          {addr.pincode && (
                            <div style={{ marginTop: '4px' }}>
                              <span style={{ background: '#e0f2fe', color: '#0369a1', padding: '2px 6px', borderRadius: '4px', fontSize: '0.78rem', fontWeight: 800 }}>
                                PIN: {addr.pincode}
                              </span>
                            </div>
                          )}
                        </div>
                      </td>

                      {/* GST Number */}
                      <td style={{ padding: '16px' }}>
                        {order.gst_number ? (
                          <span style={{ background: '#f1f5f9', color: '#0f172a', padding: '4px 8px', borderRadius: '6px', fontSize: '0.82rem', fontWeight: 700, border: '1px solid #cbd5e1' }}>
                            {order.gst_number}
                          </span>
                        ) : (
                          <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>None</span>
                        )}
                      </td>

                      {/* Payment & Amount */}
                      <td style={{ padding: '16px' }}>
                        <div style={{ fontWeight: 900, color: '#0f172a', fontSize: '1.05rem' }}>
                          ₹{Number(order.total_amount || 0).toFixed(2)}
                        </div>
                        <div style={{ marginTop: '4px' }}>
                          {isPaid ? (
                            <span style={{ background: '#dcfce7', color: '#166534', padding: '3px 8px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800 }}>
                              💳 Paid Online
                            </span>
                          ) : isCod ? (
                            <span style={{ background: '#fef3c7', color: '#92400e', padding: '3px 8px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800 }}>
                              💵 Cash On Delivery
                            </span>
                          ) : (
                            <span style={{ background: '#f1f5f9', color: '#475569', padding: '3px 8px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700 }}>
                              {order.payment_status || 'Pending'}
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Order Status */}
                      <td style={{ padding: '16px' }}>
                        <span style={{ 
                          background: order.status === 'Delivered' ? '#dcfce7' : order.status === 'Dispatched' ? '#e0f2fe' : '#fef3c7', 
                          color: order.status === 'Delivered' ? '#166534' : order.status === 'Dispatched' ? '#0369a1' : '#92400e', 
                          padding: '4px 10px', 
                          borderRadius: '6px', 
                          fontSize: '0.82rem', 
                          fontWeight: 800 
                        }}>
                          {order.status || 'Confirmed'}
                        </span>
                        {order.courier_name && (
                          <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '4px' }}>
                            {order.courier_name} {order.tracking_number ? `(${order.tracking_number})` : ''}
                          </div>
                        )}
                      </td>

                      {/* Actions */}
                      <td style={{ padding: '16px', textAlign: 'center' }}>
                        <div style={{ display: 'flex', gap: '6px', justifyContent: 'center' }}>
                          <button 
                            onClick={() => handleOpenDetails(order)}
                            style={{ background: '#0f172a', color: '#fff', padding: '8px 12px', borderRadius: '6px', fontSize: '0.82rem', fontWeight: 700, border: 'none', cursor: 'pointer' }}
                            title="View all details and update tracking"
                          >
                            👁️ View
                          </button>
                          <button 
                            onClick={() => printDocket(order)}
                            style={{ background: '#f1f5f9', color: '#0f172a', border: '1px solid #cbd5e1', padding: '8px 10px', borderRadius: '6px', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer' }}
                            title="Print Packing & Dispatch Docket"
                          >
                            🖨️ Slip
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div style={{ padding: '60px', textAlign: 'center', color: '#64748b' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>📭</div>
            No orders matching your search.
          </div>
        )}
      </div>

      {/* COMPLETE ORDER DETAILS & DISPATCH MODAL */}
      {selectedOrder && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.65)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px' }}>
          <div style={{ background: '#fff', padding: '32px', borderRadius: '16px', width: '100%', maxWidth: '720px', maxHeight: '92vh', overflowY: 'auto', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
            
            {/* Modal Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid #e2e8f0', paddingBottom: '16px', marginBottom: '20px' }}>
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0284c7', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Customer Order Dossier
                </span>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0f172a', margin: '2px 0 0 0' }}>
                  {selectedOrder.order_number}
                </h2>
                <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
                  Placed on {new Date(selectedOrder.created_at).toLocaleString('en-IN', { dateStyle: 'full', timeStyle: 'short' })}
                </span>
              </div>
              
              <div style={{ display: 'flex', gap: '8px' }}>
                <button 
                  onClick={() => printDocket(selectedOrder)}
                  style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', padding: '8px 14px', borderRadius: '8px', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  🖨️ Print Packing Slip
                </button>
                <button 
                  onClick={() => setSelectedOrder(null)}
                  style={{ background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '36px', height: '36px', fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}
                >
                  ✕
                </button>
              </div>
            </div>

            {/* SECTION 1: CUSTOMER & DELIVERY ADDRESS */}
            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '14px', border: '1.5px solid #cbd5e1', marginBottom: '20px' }}>
              <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: '#0f172a', fontWeight: 900, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                📍 Complete Customer &amp; Shipping Details
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', fontSize: '0.92rem' }}>
                <div>
                  <span style={{ color: '#64748b', fontSize: '0.78rem', display: 'block', fontWeight: 600 }}>Customer Name:</span>
                  <strong style={{ color: '#0f172a', fontSize: '1.05rem' }}>{selectedOrder.customer_name || 'Guest'}</strong>
                </div>

                <div>
                  <span style={{ color: '#64748b', fontSize: '0.78rem', display: 'block', fontWeight: 600 }}>Mobile Number:</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
                    <a href={`tel:${selectedOrder.customer_phone}`} style={{ color: '#0284c7', fontWeight: 800, textDecoration: 'none', fontSize: '1.05rem' }}>
                      📞 {selectedOrder.customer_phone || 'N/A'}
                    </a>
                    {selectedOrder.customer_phone && (
                      <a 
                        href={`https://wa.me/91${selectedOrder.customer_phone.replace(/\D/g, '').slice(-10)}?text=Hi%20${encodeURIComponent(selectedOrder.customer_name || 'Customer')},%20we%20have%20received%20your%20order%20${selectedOrder.order_number}%20at%20AS%20Print%20Gallery.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ background: '#25D366', color: '#fff', padding: '3px 8px', borderRadius: '4px', fontSize: '0.78rem', fontWeight: 800, textDecoration: 'none' }}
                      >
                        💬 WhatsApp
                      </a>
                    )}
                  </div>
                </div>

                <div style={{ gridColumn: '1 / -1', borderTop: '1px dashed #cbd5e1', paddingTop: '10px' }}>
                  <span style={{ color: '#64748b', fontSize: '0.78rem', display: 'block', fontWeight: 600 }}>Street &amp; Shipping Address:</span>
                  <p style={{ margin: '4px 0 0 0', fontWeight: 700, color: '#0f172a', fontSize: '1rem', lineHeight: 1.5 }}>
                    {parseAddress(selectedOrder.shipping_address).address}
                  </p>
                </div>

                <div>
                  <span style={{ color: '#64748b', fontSize: '0.78rem', display: 'block', fontWeight: 600 }}>Pincode (Postal Code):</span>
                  <span style={{ background: '#e0f2fe', color: '#0369a1', padding: '3px 10px', borderRadius: '6px', fontSize: '0.95rem', fontWeight: 900, display: 'inline-block', marginTop: '3px' }}>
                    {parseAddress(selectedOrder.shipping_address).pincode || 'N/A'}
                  </span>
                </div>

                <div>
                  <span style={{ color: '#64748b', fontSize: '0.78rem', display: 'block', fontWeight: 600 }}>GSTIN (Tax Invoice):</span>
                  {selectedOrder.gst_number ? (
                    <span style={{ background: '#f1f5f9', color: '#0f172a', padding: '3px 10px', borderRadius: '6px', fontSize: '0.95rem', fontWeight: 900, display: 'inline-block', marginTop: '3px', border: '1px solid #cbd5e1' }}>
                      {selectedOrder.gst_number}
                    </span>
                  ) : (
                    <span style={{ color: '#94a3b8', fontSize: '0.9rem', fontStyle: 'italic', display: 'inline-block', marginTop: '3px' }}>Not Provided</span>
                  )}
                </div>
              </div>
            </div>

            {/* SECTION 2: ORDERED ITEMS & FINANCIAL BREAKDOWN */}
            <div style={{ background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '18px 20px', marginBottom: '20px' }}>
              <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: '#475569', fontWeight: 900, marginBottom: '12px' }}>
                📦 Ordered Items &amp; Pricing Breakdown
              </div>

              {selectedOrder.order_items && selectedOrder.order_items.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {selectedOrder.order_items.map((item: any, idx: number) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.92rem', borderBottom: idx !== selectedOrder.order_items.length - 1 ? '1px solid #f1f5f9' : 'none', paddingBottom: '8px' }}>
                      <div>
                        <div style={{ fontWeight: 800, color: '#0f172a' }}>{item.product_name}</div>
                        <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '2px' }}>
                          Qty: <strong>{item.quantity} pcs</strong> • Rate: ₹{Number(item.unit_price).toFixed(2)}/pc
                          {item.variant_details?.size && ` • Size: ${item.variant_details.size}`}
                        </div>
                      </div>
                      <div style={{ fontWeight: 900, color: '#0f172a', fontSize: '1rem' }}>
                        ₹{Number(item.total_price || (item.unit_price * item.quantity)).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ color: '#64748b', fontSize: '0.9rem' }}>Standard package consignment.</div>
              )}

              {/* Totals Breakdown */}
              <div style={{ borderTop: '2px solid #e2e8f0', paddingTop: '12px', marginTop: '14px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.88rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b' }}>
                  <span>Subtotal (Excl. Tax):</span>
                  <span>₹{Number(selectedOrder.subtotal || selectedOrder.total_amount).toFixed(2)}</span>
                </div>
                {selectedOrder.discount_amount > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#16a34a', fontWeight: 700 }}>
                    <span>Discount Applied:</span>
                    <span>-₹{Number(selectedOrder.discount_amount).toFixed(2)}</span>
                  </div>
                )}
                {selectedOrder.gst_amount > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b' }}>
                    <span>GST (18%):</span>
                    <span>₹{Number(selectedOrder.gst_amount).toFixed(2)}</span>
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.15rem', fontWeight: 900, color: '#0f172a', borderTop: '1px dashed #cbd5e1', paddingTop: '8px', marginTop: '4px' }}>
                  <span>Final Total Amount:</span>
                  <span style={{ color: '#059669' }}>₹{Number(selectedOrder.total_amount).toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* SECTION 3: DISPATCH & TRACKING UPDATE FORM */}
            <form onSubmit={handleUpdate} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: '#475569', fontWeight: 900 }}>
                🚚 Dispatch &amp; Tracking Update
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>Update Order Status</label>
                <select 
                  value={status} 
                  onChange={(e) => setStatus(e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontWeight: 700, background: '#fff' }}
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
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>Courier Partner Name</label>
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
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>Live Tracking Link</label>
                <input 
                  type="url" 
                  value={trackingLink} 
                  onChange={(e) => setTrackingLink(e.target.value)}
                  placeholder="https://delhivery.com/track/package/..."
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1.5px solid #cbd5e1', boxSizing: 'border-box' }}
                />
              </div>

              {selectedOrder.internal_notes && (
                <div style={{ background: '#f1f5f9', padding: '10px 14px', borderRadius: '8px', fontSize: '0.82rem', color: '#475569', border: '1px solid #e2e8f0' }}>
                  ℹ️ <strong>System &amp; Payment Notes:</strong> {selectedOrder.internal_notes}
                </div>
              )}

              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button 
                  type="button" 
                  onClick={() => setSelectedOrder(null)}
                  style={{ flex: 1, padding: '13px', background: '#f1f5f9', color: '#334155', borderRadius: '8px', fontWeight: 700, border: '1px solid #cbd5e1', cursor: 'pointer' }}
                >
                  Close
                </button>
                <button 
                  type="submit" 
                  disabled={isUpdating}
                  style={{ flex: 2, padding: '13px', background: '#0f172a', color: '#fff', borderRadius: '8px', fontWeight: 800, border: 'none', cursor: 'pointer', boxShadow: '0 4px 12px rgba(15, 23, 42, 0.2)' }}
                >
                  {isUpdating ? 'Saving...' : '💾 Save & Update Order Status'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
