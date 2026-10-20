'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { createClient } from '@/utils/supabase/client';

export interface OfflineOrder {
  id: string;
  order_number: string;
  customer_name: string;
  customer_phone: string;
  work_description: string; // "Kam kya hai"
  source: string; // "Aaya kisse"
  payment_terms: string; // "Payment terms kya hai"
  total_amount: number;
  paid_amount: number; // "Kitne aa gaye"
  balance_amount: number; // Balance due
  payment_mode: string;
  status: string; // Confirmed, In Production, Ready for Pickup, Delivered/Completed, Cancelled
  delivery_date?: string;
  notes?: string;
  created_at: string;
}

const STORAGE_KEY = 'as_offline_orders_v1';

export default function OfflineOrdersPage() {
  const [orders, setOrders] = useState<OfflineOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  
  // New Order Modal
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Quick Payment Modal
  const [paymentModalOrder, setPaymentModalOrder] = useState<OfflineOrder | null>(null);
  const [additionalPayment, setAdditionalPayment] = useState<number>(0);
  const [additionalPaymentMode, setAdditionalPaymentMode] = useState<string>('Cash');

  // Edit Order Modal
  const [editingOrder, setEditingOrder] = useState<OfflineOrder | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Form Fields
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [workDescription, setWorkDescription] = useState('');
  const [source, setSource] = useState('Walk-in (Factory)');
  const [customSource, setCustomSource] = useState('');
  const [paymentTerms, setPaymentTerms] = useState('50% Advance + 50% on Delivery');
  const [totalAmount, setTotalAmount] = useState<number | ''>('');
  const [paidAmount, setPaidAmount] = useState<number | ''>('');
  const [paymentMode, setPaymentMode] = useState('Cash');
  const [status, setStatus] = useState('Confirmed');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [notes, setNotes] = useState('');

  const supabase = createClient();

  // Helper to deduplicate orders by order number or customer signature
  const deduplicateOrders = (list: OfflineOrder[]): OfflineOrder[] => {
    const map = new Map<string, OfflineOrder>();
    list.forEach((item) => {
      const key = (item.order_number || item.id || '').trim().toUpperCase();
      if (key && !map.has(key)) {
        map.set(key, item);
      }
    });

    const values = Array.from(map.values());
    const result: OfflineOrder[] = [];
    const seenContent = new Set<string>();

    values.forEach((ord) => {
      const phone = (ord.customer_phone || '').replace(/\D/g, '');
      const work = (ord.work_description || '').trim().toLowerCase();
      const contentKey = `${phone}|${work}|${ord.total_amount}`;
      if (phone && work && seenContent.has(contentKey)) {
        return; // Skip duplicate customer + work description + amount
      }
      if (phone && work) seenContent.add(contentKey);
      result.push(ord);
    });

    return result;
  };

  // Load orders from Supabase & localStorage fallback
  useEffect(() => {
    async function loadData() {
      setLoading(true);
      let localData: OfflineOrder[] = [];
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          localData = deduplicateOrders(JSON.parse(saved));
        }
      } catch (e) {
        console.warn('Could not read local offline orders:', e);
      }

      // Also fetch from Supabase to merge
      try {
        const { data: supaOrders, error } = await supabase
          .from('orders')
          .select('*')
          .like('order_number', 'OFF-%')
          .order('created_at', { ascending: false });

        if (!error && supaOrders && supaOrders.length > 0) {
          const parsedSupa: OfflineOrder[] = supaOrders.map((so: any) => {
            let work = 'Custom Factory Job';
            let src = 'Direct Walk-in';
            let terms = 'Payment on Delivery';
            let paid = so.payment_status === 'Paid' ? Number(so.total_amount) : 0;
            let mode = 'Cash';

            if (so.internal_notes) {
              const notesStr = String(so.internal_notes);
              const workMatch = notesStr.match(/Work:\s*([^|]+)/i);
              const srcMatch = notesStr.match(/Source:\s*([^|]+)/i);
              const termsMatch = notesStr.match(/Terms:\s*([^|]+)/i);
              const paidMatch = notesStr.match(/Paid:\s*₹?([\d.]+)/i);
              const modeMatch = notesStr.match(/Mode:\s*([^|]+)/i);

              if (workMatch) work = workMatch[1].trim();
              if (srcMatch) src = srcMatch[1].trim();
              if (termsMatch) terms = termsMatch[1].trim();
              if (paidMatch) paid = parseFloat(paidMatch[1]) || paid;
              if (modeMatch) mode = modeMatch[1].trim();
            }

            const total = Number(so.total_amount || 0);
            const balance = Math.max(0, total - paid);

            return {
              id: so.id,
              order_number: so.order_number,
              customer_name: so.customer_name || 'Direct Customer',
              customer_phone: so.customer_phone || '',
              work_description: work,
              source: src,
              payment_terms: terms,
              total_amount: total,
              paid_amount: paid,
              balance_amount: balance,
              payment_mode: mode,
              status: so.status || 'Confirmed',
              created_at: so.created_at,
              notes: so.internal_notes || ''
            };
          });

          // Merge: Put localData first, then Supabase overrides so Supabase ID & data are source of truth
          const combinedMap = new Map<string, OfflineOrder>();
          localData.forEach(item => {
            const k = (item.order_number || item.id).trim().toUpperCase();
            combinedMap.set(k, item);
          });
          parsedSupa.forEach(item => {
            const k = (item.order_number || item.id).trim().toUpperCase();
            const existing = combinedMap.get(k);
            combinedMap.set(k, {
              ...existing,
              ...item,
              id: item.id // Keep Supabase UUID
            });
          });

          const merged = deduplicateOrders(Array.from(combinedMap.values())).sort(
            (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );

          // AUTO-SEQUENCE serial numbers if any order has legacy random numbers >= 1000
          // Makes order numbers serial-wise: OFF-2026-001, OFF-2026-002, etc.
          const needsRenumbering = merged.some(o => {
            const m = String(o.order_number || '').match(/OFF(?:-\d{4})?-(\d+)/i);
            return m && parseInt(m[1], 10) >= 1000;
          });

          if (needsRenumbering) {
            const chronoSorted = [...merged].sort(
              (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
            );
            chronoSorted.forEach((ord, index) => {
              const year = new Date(ord.created_at || Date.now()).getFullYear();
              ord.order_number = `OFF-${year}-${String(index + 1).padStart(3, '0')}`;
            });
          }

          setOrders(merged);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
        } else {
          // Check localData for legacy random numbers
          const cleanLocal = deduplicateOrders(localData);
          const needsRenumbering = cleanLocal.some(o => {
            const m = String(o.order_number || '').match(/OFF(?:-\d{4})?-(\d+)/i);
            return m && parseInt(m[1], 10) >= 1000;
          });

          if (needsRenumbering && cleanLocal.length > 0) {
            const chronoSorted = [...cleanLocal].sort(
              (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
            );
            chronoSorted.forEach((ord, index) => {
              const year = new Date(ord.created_at || Date.now()).getFullYear();
              ord.order_number = `OFF-${year}-${String(index + 1).padStart(3, '0')}`;
            });
            cleanLocal.splice(0, cleanLocal.length, ...chronoSorted.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()));
          }
          setOrders(cleanLocal);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(cleanLocal));
        }
      } catch (err) {
        console.warn('Error loading offline orders from Supabase:', err);
        const cleanLocal = deduplicateOrders(localData);
        setOrders(cleanLocal);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cleanLocal));
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  // Save changes to localStorage & state
  const persistOrders = (updatedList: OfflineOrder[]) => {
    setOrders(updatedList);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  };

  // Reset form
  const resetForm = () => {
    setCustomerName('');
    setCustomerPhone('');
    setWorkDescription('');
    setSource('Walk-in (Factory)');
    setCustomSource('');
    setPaymentTerms('50% Advance + 50% on Delivery');
    setTotalAmount('');
    setPaidAmount('');
    setPaymentMode('Cash');
    setStatus('Confirmed');
    setDeliveryDate('');
    setNotes('');
  };

  // Create New Offline Order
  const handleCreateOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim() || !workDescription.trim() || totalAmount === '') {
      alert('Kripya Customer Name, Phone, Kaam (Work) aur Total Amount bharein.');
      return;
    }

    setIsSaving(true);
    
    // Generate next strictly sequential serial order number (OFF-YYYY-001, OFF-YYYY-002, etc.)
    const year = new Date().getFullYear();
    let maxSerial = 0;
    orders.forEach((o) => {
      const match = String(o.order_number || '').match(/OFF-(?:20\d\d-)?(\d+)/i);
      if (match) {
        const n = parseInt(match[1], 10);
        if (!isNaN(n) && n < 1000 && n > maxSerial) {
          maxSerial = n;
        }
      }
    });
    const nextSerial = maxSerial > 0 ? maxSerial + 1 : orders.length + 1;
    const orderNum = `OFF-${year}-${String(nextSerial).padStart(3, '0')}`;
    const finalSource = source === 'Other' && customSource.trim() ? customSource.trim() : source;
    const finalTotal = Number(totalAmount || 0);
    const finalPaid = Number(paidAmount || 0);
    const finalBalance = Math.max(0, finalTotal - finalPaid);

    const newOrder: OfflineOrder = {
      id: `off-${Date.now()}-${Math.random().toString(36).substring(7)}`,
      order_number: orderNum,
      customer_name: customerName.trim(),
      customer_phone: customerPhone.trim(),
      work_description: workDescription.trim(),
      source: finalSource,
      payment_terms: paymentTerms,
      total_amount: finalTotal,
      paid_amount: finalPaid,
      balance_amount: finalBalance,
      payment_mode: paymentMode,
      status: status,
      delivery_date: deliveryDate || undefined,
      notes: notes.trim(),
      created_at: new Date().toISOString()
    };

    // Save locally first for instant feedback
    const updated = deduplicateOrders([newOrder, ...orders]);
    persistOrders(updated);

    // Save to Supabase orders table
    try {
      const { data: inserted, error: insertErr } = await supabase.from('orders').insert({
        order_number: orderNum,
        customer_name: newOrder.customer_name,
        customer_phone: newOrder.customer_phone,
        total_amount: finalTotal,
        subtotal: finalTotal,
        status: status,
        payment_status: finalPaid >= finalTotal ? 'Paid' : 'Pending',
        shipping_address: { address: 'Offline / Factory Order Pickup', pincode: '201102' },
        internal_notes: `Offline Order | Work: ${newOrder.work_description} | Source: ${finalSource} | Paid: ₹${finalPaid} | Balance: ₹${finalBalance} | Terms: ${paymentTerms} | Mode: ${paymentMode} | Notes: ${notes}`
      }).select('id, created_at').single();

      if (!insertErr && inserted?.id) {
        newOrder.id = inserted.id;
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed: OfflineOrder[] = JSON.parse(saved);
          const updatedWithId = parsed.map(o => o.order_number === orderNum ? { ...o, id: inserted.id } : o);
          persistOrders(deduplicateOrders(updatedWithId));
        }
      }
    } catch (err) {
      console.warn('Supabase offline order sync bypassed:', err);
    }

    setIsSaving(false);
    setIsAddModalOpen(false);
    resetForm();
  };

  // Add Payment / Clear Dues
  const handleRecordPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!paymentModalOrder || additionalPayment <= 0) return;

    const newPaid = Number(paymentModalOrder.paid_amount) + Number(additionalPayment);
    const newBalance = Math.max(0, Number(paymentModalOrder.total_amount) - newPaid);

    const updated = orders.map((o) => {
      if (o.id === paymentModalOrder.id) {
        return {
          ...o,
          paid_amount: newPaid,
          balance_amount: newBalance,
          payment_mode: additionalPaymentMode,
          notes: `${o.notes ? o.notes + ' | ' : ''}Payment Recd: +₹${additionalPayment} via ${additionalPaymentMode}`
        };
      }
      return o;
    });

    persistOrders(updated);

    // Update in Supabase if exists
    try {
      await supabase
        .from('orders')
        .update({
          payment_status: newPaid >= paymentModalOrder.total_amount ? 'Paid' : 'Pending',
          internal_notes: `Offline Order | Work: ${paymentModalOrder.work_description} | Source: ${paymentModalOrder.source} | Paid: ₹${newPaid} | Balance: ₹${newBalance} | Terms: ${paymentModalOrder.payment_terms} | Updated Payment: +₹${additionalPayment} via ${additionalPaymentMode}`
        })
        .eq('order_number', paymentModalOrder.order_number);
    } catch (err) {
      console.warn('Supabase payment sync skipped:', err);
    }

    setPaymentModalOrder(null);
    setAdditionalPayment(0);
  };

  // Quick Status Change from Row Dropdown
  const handleQuickStatusChange = async (order: OfflineOrder, newStatus: string) => {
    const updated = orders.map(o => o.id === order.id ? { ...o, status: newStatus } : o);
    persistOrders(updated);

    try {
      await supabase
        .from('orders')
        .update({
          status: newStatus,
          updated_at: new Date().toISOString()
        })
        .eq('order_number', order.order_number);
    } catch (err) {
      console.warn('Status update sync error:', err);
    }
  };

  // Open Edit Modal with order data
  const handleOpenEditModal = (order: OfflineOrder) => {
    setEditingOrder({ ...order });
    setIsEditModalOpen(true);
  };

  // Save Edit Order
  const handleSaveEditOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingOrder) return;

    const finalTotal = Number(editingOrder.total_amount) || 0;
    const finalPaid = Number(editingOrder.paid_amount) || 0;
    const finalBalance = Math.max(0, finalTotal - finalPaid);

    const updatedOrder: OfflineOrder = {
      ...editingOrder,
      total_amount: finalTotal,
      paid_amount: finalPaid,
      balance_amount: finalBalance
    };

    const updated = orders.map(o => o.id === updatedOrder.id ? updatedOrder : o);
    persistOrders(updated);

    try {
      await supabase
        .from('orders')
        .update({
          customer_name: updatedOrder.customer_name,
          customer_phone: updatedOrder.customer_phone,
          total_amount: finalTotal,
          subtotal: finalTotal,
          status: updatedOrder.status,
          payment_status: finalPaid >= finalTotal ? 'Paid' : 'Pending',
          internal_notes: `Offline Order | Work: ${updatedOrder.work_description} | Source: ${updatedOrder.source} | Paid: ₹${finalPaid} | Balance: ₹${finalBalance} | Terms: ${updatedOrder.payment_terms} | Mode: ${updatedOrder.payment_mode} | Notes: ${updatedOrder.notes || ''}`
        })
        .eq('order_number', updatedOrder.order_number);
    } catch (err) {
      console.warn('Supabase update offline order failed:', err);
    }

    setIsEditModalOpen(false);
    setEditingOrder(null);
  };

  // Delete Order
  const handleDeleteOrder = async (id: string, orderNum: string) => {
    if (!confirm(`Kya aap sure hain ki Order ${orderNum} delete karna chahte hain?`)) return;
    const updated = orders.filter((o) => o.id !== id && o.order_number !== orderNum);
    persistOrders(updated);

    try {
      await supabase.from('orders').delete().or(`id.eq.${id},order_number.eq.${orderNum}`);
    } catch (e) {
      console.warn('Supabase delete skipped:', e);
    }
  };

  // Print Job Card / Estimate Slip
  const handlePrintSlip = (order: OfflineOrder) => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>Offline Job Work Slip - ${order.order_number}</title>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 25px; color: #111; line-height: 1.5; font-size: 14px; }
            .box { max-width: 650px; margin: auto; border: 2px solid #000; padding: 20px; }
            .header { border-bottom: 2px solid #000; padding-bottom: 12px; margin-bottom: 15px; display: flex; justify-content: space-between; }
            .title { font-size: 22px; font-weight: 800; color: #1a365d; margin: 0; }
            .meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 15px; background: #f8fafc; padding: 12px; border: 1px solid #cbd5e1; }
            .section { margin-bottom: 15px; }
            .table { width: 100%; border-collapse: collapse; margin-top: 8px; }
            .table th, .table td { border: 1px solid #333; padding: 8px; text-align: left; }
            .table th { background: #e2e8f0; }
            .badge { display: inline-block; padding: 4px 8px; background: #000; color: #fff; font-weight: bold; font-size: 11px; border-radius: 4px; }
            .footer { margin-top: 30px; display: flex; justify-content: space-between; border-top: 1px dashed #666; padding-top: 25px; }
          </style>
        </head>
        <body>
          <div class="box">
            <div class="header">
              <div>
                <h1 class="title">AS PRINT GALLERY</h1>
                <div style="font-size: 12px; color: #555;">Manufacturers &amp; Printers of Corrugated Boxes &amp; Packaging</div>
                <div style="font-size: 12px;">Kh No. 2326/2, Shankar Garden, Ashok Vihar, Loni, Ghaziabad - 201102</div>
                <div style="font-size: 12px;">Phone: +91 9911678386 / 8851627221</div>
              </div>
              <div style="text-align: right;">
                <div class="badge">OFFLINE JOB WORK SLIP</div>
                <div style="font-size: 16px; font-weight: 800; margin-top: 5px;">${order.order_number}</div>
                <div style="font-size: 12px;">Date: ${new Date(order.created_at).toLocaleDateString('en-IN')}</div>
              </div>
            </div>

            <div class="meta-grid">
              <div>
                <strong>Customer Name:</strong> ${order.customer_name}<br>
                <strong>Contact Phone:</strong> ${order.customer_phone}
              </div>
              <div>
                <strong>Source / Referred By:</strong> ${order.source}<br>
                <strong>Payment Terms:</strong> ${order.payment_terms}
              </div>
            </div>

            <div class="section">
              <strong style="text-transform: uppercase;">Job Work / Requirement Details:</strong>
              <div style="background: #fff; border: 1px solid #cbd5e1; padding: 12px; margin-top: 4px; white-space: pre-wrap; font-size: 15px; font-weight: 600;">
                ${order.work_description}
              </div>
            </div>

            <div class="section">
              <table class="table">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th style="text-align: right; width: 140px;">Amount (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Total Order Value</td>
                    <td style="text-align: right; font-weight: bold;">₹${(Number(order.total_amount) || 0).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>Advance / Amount Received (${order.payment_mode})</td>
                    <td style="text-align: right; font-weight: bold; color: green;">₹${(Number(order.paid_amount) || 0).toFixed(2)}</td>
                  </tr>
                  <tr style="background: #fff1f2;">
                    <td><strong style="color: #be123c;">Balance Due (Baki)</strong></td>
                    <td style="text-align: right; font-weight: 900; color: #be123c; font-size: 16px;">₹${(Number(order.balance_amount) || 0).toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            ${order.notes ? `
            <div style="font-size: 12px; color: #555; margin-top: 10px;">
              <strong>Special Instructions / Notes:</strong> ${order.notes}
            </div>` : ''}

            <div class="footer">
              <div>Customer Signature</div>
              <div>Authorized Signatory (AS Print Gallery)</div>
            </div>
          </div>
          <script>window.onload = function() { window.print(); }</script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  // Currency Formatter
  const formatINR = (amt: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(amt || 0);
  };

  // Metrics
  const totalOfflineOrders = orders.length;
  const totalOfflineSales = orders.reduce((sum, o) => sum + (Number(o.total_amount) || 0), 0);
  const totalAdvanceReceived = orders.reduce((sum, o) => sum + (Number(o.paid_amount) || 0), 0);
  const totalBalanceDue = orders.reduce((sum, o) => sum + (Number(o.balance_amount) || 0), 0);

  // Filtered Orders
  const filteredOrders = useMemo(() => {
    return orders.filter((o) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        o.customer_name.toLowerCase().includes(q) ||
        o.customer_phone.includes(q) ||
        o.work_description.toLowerCase().includes(q) ||
        o.order_number.toLowerCase().includes(q) ||
        o.source.toLowerCase().includes(q);

      const matchesStatus =
        statusFilter === 'ALL' ||
        (statusFilter === 'DUE' && o.balance_amount > 0) ||
        (statusFilter === 'PAID' && o.balance_amount <= 0) ||
        (statusFilter === 'PRODUCTION' && o.status === 'In Production') ||
        (statusFilter === 'DISPATCHED' && o.status === 'Dispatched') ||
        (statusFilter === 'COMPLETED' && (o.status === 'Completed' || o.status === 'Delivered'));

      return matchesSearch && matchesStatus;
    });
  }, [orders, searchQuery, statusFilter]);

  return (
    <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        padding: '24px 30px',
        borderRadius: '16px',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
        boxShadow: '0 8px 20px -4px rgba(15, 23, 42, 0.25)'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.6rem' }}>🏬</span>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0, color: '#ffffff' }}>
              Offline Orders &amp; Direct Customer Manager
            </h1>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: '6px 0 0 0' }}>
            Factory walk-in customers, direct job work, advance amount, balance due &amp; payment terms tracker.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {orders.length > 0 && (
            <button
              onClick={async () => {
                if (window.confirm('Kya aap sure hain ki Offline Orders ka sara data zero (0) karna chahte hain?')) {
                  persistOrders([]);
                  try {
                    await supabase.from('orders').delete().like('order_number', 'OFF-%');
                  } catch (e) {
                    console.warn('Supabase offline reset error:', e);
                  }
                }
              }}
              style={{
                background: '#ef4444',
                color: '#fff',
                border: 'none',
                padding: '12px 18px',
                borderRadius: '10px',
                fontWeight: 800,
                fontSize: '0.88rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 12px rgba(239, 68, 68, 0.25)'
              }}
            >
              <span>🗑️</span>
              <span>Reset Offline Orders (0)</span>
            </button>
          )}

          <button
            onClick={() => { resetForm(); setIsAddModalOpen(true); }}
            style={{
              background: '#10b981',
              color: '#fff',
              border: 'none',
              padding: '12px 22px',
              borderRadius: '10px',
              fontWeight: 800,
              fontSize: '0.95rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
            }}
          >
            <span>➕</span>
            <span>Naya Offline Order Add Karein</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
        
        {/* Total Orders */}
        <div style={{ background: '#fff', padding: '20px', borderRadius: '14px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.04)' }}>
          <span style={{ color: '#64748b', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase' }}>Total Offline Orders</span>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0f172a', marginTop: '4px' }}>{totalOfflineOrders}</div>
          <span style={{ fontSize: '0.78rem', color: '#64748b' }}>Direct &amp; Walk-in Jobs</span>
        </div>

        {/* Total Offline Sales */}
        <div style={{ background: '#fff', padding: '20px', borderRadius: '14px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.04)' }}>
          <span style={{ color: '#475569', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase' }}>Total Offline Business</span>
          <div style={{ fontSize: '1.9rem', fontWeight: 900, color: '#0f172a', marginTop: '4px' }}>{formatINR(totalOfflineSales)}</div>
          <span style={{ fontSize: '0.78rem', color: '#64748b' }}>Gross Job Work Value</span>
        </div>

        {/* Advance Received */}
        <div style={{ background: '#f0fdf4', padding: '20px', borderRadius: '14px', border: '1px solid #bbf7d0', boxShadow: '0 2px 4px rgba(22,163,74,0.05)' }}>
          <span style={{ color: '#166534', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase' }}>Advance Payment</span>
          <div style={{ fontSize: '1.9rem', fontWeight: 900, color: '#15803d', marginTop: '4px' }}>{formatINR(totalAdvanceReceived)}</div>
          <span style={{ fontSize: '0.78rem', color: '#166534' }}>Cash / UPI / Bank Captured</span>
        </div>

        {/* Pending Balance Due */}
        <div style={{ background: '#fff1f2', padding: '20px', borderRadius: '14px', border: '1px solid #fecdd3', boxShadow: '0 2px 4px rgba(225,29,72,0.05)' }}>
          <span style={{ color: '#9f1239', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase' }}>Total Balance Due</span>
          <div style={{ fontSize: '1.9rem', fontWeight: 900, color: '#be123c', marginTop: '4px' }}>{formatINR(totalBalanceDue)}</div>
          <span style={{ fontSize: '0.78rem', color: '#9f1239' }}>To be collected on delivery</span>
        </div>

      </div>

      {/* Filter & Search Bar */}
      <div style={{ background: '#fff', padding: '16px 20px', borderRadius: '14px', border: '1px solid #e2e8f0', display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ flex: 1, minWidth: '280px', display: 'flex', alignItems: 'center', background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '8px', padding: '8px 12px' }}>
          <span style={{ marginRight: '8px' }}>🔍</span>
          <input
            type="text"
            placeholder="Search by customer name, phone, work details, order ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none', fontSize: '0.88rem', fontWeight: 500 }}
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontWeight: 800 }}>✕</button>
          )}
        </div>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => setStatusFilter('ALL')}
            style={{ padding: '6px 12px', borderRadius: '6px', border: statusFilter === 'ALL' ? '2px solid #0f172a' : '1px solid #cbd5e1', background: statusFilter === 'ALL' ? '#0f172a' : '#fff', color: statusFilter === 'ALL' ? '#fff' : '#334155', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer' }}
          >
            All Orders ({orders.length})
          </button>
          <button
            onClick={() => setStatusFilter('DUE')}
            style={{ padding: '6px 12px', borderRadius: '6px', border: statusFilter === 'DUE' ? '2px solid #be123c' : '1px solid #cbd5e1', background: statusFilter === 'DUE' ? '#be123c' : '#fff', color: statusFilter === 'DUE' ? '#fff' : '#be123c', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer' }}
          >
            ⚠️ Baki / Due Balance ({orders.filter(o => o.balance_amount > 0).length})
          </button>
          <button
            onClick={() => setStatusFilter('PAID')}
            style={{ padding: '6px 12px', borderRadius: '6px', border: statusFilter === 'PAID' ? '2px solid #16a34a' : '1px solid #cbd5e1', background: statusFilter === 'PAID' ? '#16a34a' : '#fff', color: statusFilter === 'PAID' ? '#fff' : '#16a34a', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer' }}
          >
            ✓ Fully Paid ({orders.filter(o => o.balance_amount <= 0).length})
          </button>
          <button
            onClick={() => setStatusFilter('PRODUCTION')}
            style={{ padding: '6px 12px', borderRadius: '6px', border: statusFilter === 'PRODUCTION' ? '2px solid #0284c7' : '1px solid #cbd5e1', background: statusFilter === 'PRODUCTION' ? '#0284c7' : '#fff', color: statusFilter === 'PRODUCTION' ? '#fff' : '#0284c7', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer' }}
          >
            ⚙️ In Production ({orders.filter(o => o.status === 'In Production').length})
          </button>
          <button
            onClick={() => setStatusFilter('DISPATCHED')}
            style={{ padding: '6px 12px', borderRadius: '6px', border: statusFilter === 'DISPATCHED' ? '2px solid #4f46e5' : '1px solid #cbd5e1', background: statusFilter === 'DISPATCHED' ? '#4f46e5' : '#fff', color: statusFilter === 'DISPATCHED' ? '#fff' : '#4f46e5', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer' }}
          >
            🚚 Dispatched ({orders.filter(o => o.status === 'Dispatched').length})
          </button>
        </div>
      </div>

      {/* Main Table */}
      <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        {loading ? (
          <div style={{ padding: '50px', textAlign: 'center', color: '#64748b' }}>⏳ Loading offline orders...</div>
        ) : filteredOrders.length === 0 ? (
          <div style={{ padding: '60px', textAlign: 'center', color: '#64748b' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🏬</div>
            <h3 style={{ margin: '0 0 6px 0', color: '#1e293b' }}>Koi Offline Order Nahi Mila</h3>
            <p style={{ margin: 0, fontSize: '0.88rem' }}>Factory walk-in ya direct customer order add karne ke liye upar "+ Naya Offline Order Add Karein" par click karein.</p>
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '1100px' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0', color: '#475569', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  <th style={{ padding: '14px 16px' }}>Order ID &amp; Date</th>
                  <th style={{ padding: '14px 16px' }}>👤 Customer Details</th>
                  <th style={{ padding: '14px 16px', width: '280px' }}>📦 Job Work / Order Description</th>
                  <th style={{ padding: '14px 16px' }}>📍 Order Source</th>
                  <th style={{ padding: '14px 16px' }}>💰 Total Amount</th>
                  <th style={{ padding: '14px 16px' }}>✅ Advance Paid</th>
                  <th style={{ padding: '14px 16px' }}>⚠️ Balance Due</th>
                  <th style={{ padding: '14px 16px' }}>📋 Payment Terms</th>
                  <th style={{ padding: '14px 16px', textAlign: 'center' }}>⚡ Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => {
                  const hasDue = order.balance_amount > 0;
                  return (
                    <tr
                      key={order.id}
                      style={{ borderBottom: '1px solid #f1f5f9', transition: 'background 0.15s ease' }}
                    >
                      {/* Order Number & Date */}
                      <td style={{ padding: '14px 16px', whiteSpace: 'nowrap' }}>
                        <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.92rem' }}>{order.order_number}</div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px' }}>
                          {new Date(order.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </div>
                      </td>

                      {/* Customer & Phone */}
                      <td style={{ padding: '14px 16px', whiteSpace: 'nowrap' }}>
                        <div style={{ fontWeight: 800, color: '#1e293b', fontSize: '0.92rem' }}>{order.customer_name}</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '3px' }}>
                          <a href={`tel:${order.customer_phone}`} style={{ color: '#0284c7', fontSize: '0.82rem', fontWeight: 700, textDecoration: 'none' }}>
                            📞 {order.customer_phone}
                          </a>
                          {order.customer_phone && (
                            <a
                              href={`https://wa.me/91${order.customer_phone.replace(/\D/g, '').slice(-10)}?text=Namaste%20${encodeURIComponent(order.customer_name)},%20this%20is%20regarding%20your%20AS%20Print%20Gallery%20Order%20${order.order_number}.%20Total:%20₹${order.total_amount},%20Balance%20Due:%20₹${order.balance_amount}.`}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ background: '#dcfce7', color: '#166534', padding: '1px 6px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 800, textDecoration: 'none' }}
                              title="Chat on WhatsApp"
                            >
                              WA
                            </a>
                          )}
                        </div>
                      </td>

                      {/* Kaam Kya Hai */}
                      <td style={{ padding: '14px 16px' }}>
                        <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.88rem', whiteSpace: 'pre-wrap', lineHeight: 1.4 }}>
                          {order.work_description}
                        </div>
                        {order.delivery_date && (
                          <div style={{ fontSize: '0.72rem', color: '#0284c7', fontWeight: 700, marginTop: '3px' }}>
                            Target Delivery: {order.delivery_date}
                          </div>
                        )}
                      </td>

                      {/* Aaya Kisse (Source) */}
                      <td style={{ padding: '14px 16px', whiteSpace: 'nowrap' }}>
                        <span style={{ background: '#f1f5f9', color: '#334155', padding: '4px 8px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 700, border: '1px solid #cbd5e1' }}>
                          📍 {order.source}
                        </span>
                      </td>

                      {/* Total Amount */}
                      <td style={{ padding: '14px 16px', whiteSpace: 'nowrap' }}>
                        <div style={{ fontWeight: 900, color: '#0f172a', fontSize: '0.98rem' }}>
                          {formatINR(order.total_amount)}
                        </div>
                      </td>

                      {/* Kitne Aa Gaye */}
                      <td style={{ padding: '14px 16px', whiteSpace: 'nowrap' }}>
                        <div style={{ fontWeight: 800, color: '#16a34a', fontSize: '0.92rem' }}>
                          {formatINR(order.paid_amount)}
                        </div>
                        <div style={{ fontSize: '0.7rem', color: '#64748b' }}>via {order.payment_mode}</div>
                      </td>

                      {/* Balance Due */}
                      <td style={{ padding: '14px 16px', whiteSpace: 'nowrap' }}>
                        {hasDue ? (
                          <span style={{ background: '#fee2e2', color: '#b91c1c', padding: '4px 8px', borderRadius: '6px', fontSize: '0.88rem', fontWeight: 900, border: '1px solid #fca5a5', display: 'inline-block' }}>
                            ₹{(Number(order.balance_amount) || 0).toFixed(2)} Balance Due
                          </span>
                        ) : (
                          <span style={{ background: '#dcfce7', color: '#166534', padding: '3px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800 }}>
                            ✓ Nil (Full Paid)
                          </span>
                        )}
                      </td>

                      {/* Payment Terms & Interactive Status Selector */}
                      <td style={{ padding: '14px 16px' }}>
                        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                          {order.payment_terms}
                        </div>
                        <select
                          value={order.status}
                          onChange={(e) => handleQuickStatusChange(order, e.target.value)}
                          style={{
                            padding: '4px 8px',
                            borderRadius: '6px',
                            fontSize: '0.78rem',
                            fontWeight: 800,
                            border: '1.5px solid #cbd5e1',
                            background: order.status === 'Dispatched' ? '#e0e7ff' : order.status === 'Completed' || order.status === 'Delivered' ? '#dcfce7' : order.status === 'In Production' ? '#e0f2fe' : order.status === 'Cancelled' ? '#fee2e2' : '#fef3c7',
                            color: order.status === 'Dispatched' ? '#3730a3' : order.status === 'Completed' || order.status === 'Delivered' ? '#166534' : order.status === 'In Production' ? '#0369a1' : order.status === 'Cancelled' ? '#991b1b' : '#92400e',
                            cursor: 'pointer',
                            outline: 'none'
                          }}
                        >
                          <option value="Confirmed">🟡 Confirmed</option>
                          <option value="In Production">⚙️ In Production</option>
                          <option value="Dispatched">🚚 Dispatched</option>
                          <option value="Ready for Pickup">📦 Ready for Pickup</option>
                          <option value="Delivered">✅ Delivered</option>
                          <option value="Completed">✅ Completed</option>
                          <option value="Cancelled">❌ Cancelled</option>
                        </select>
                      </td>

                      {/* Actions */}
                      <td style={{ padding: '14px 16px', textAlign: 'center', whiteSpace: 'nowrap' }}>
                        <div style={{ display: 'flex', gap: '6px', justifyContent: 'center' }}>
                          <button
                            onClick={() => handleOpenEditModal(order)}
                            style={{ background: '#3b82f6', color: '#fff', border: 'none', padding: '5px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
                            title="Edit offline order details"
                          >
                            ✏️ Edit
                          </button>
                          {hasDue && (
                            <button
                              onClick={() => { setPaymentModalOrder(order); setAdditionalPayment(order.balance_amount); }}
                              style={{ background: '#10b981', color: '#fff', border: 'none', padding: '5px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
                              title="Record balance payment"
                            >
                              + Jama
                            </button>
                          )}
                          <button
                            onClick={() => handlePrintSlip(order)}
                            style={{ background: '#0f172a', color: '#fff', border: 'none', padding: '5px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
                            title="Print Job Slip / Estimate"
                          >
                            🖨️ Slip
                          </button>
                          <button
                            onClick={() => handleDeleteOrder(order.id, order.order_number)}
                            style={{ background: '#fee2e2', color: '#dc2626', border: '1px solid #fecdd3', padding: '5px 7px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
                            title="Delete entry"
                          >
                            ✕
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ─────────────────────────────────────────────────────────
          MODAL: ADD NEW OFFLINE ORDER
      ───────────────────────────────────────────────────────── */}
      {isAddModalOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.65)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px' }}>
          <div style={{ background: '#fff', padding: '28px', borderRadius: '16px', width: '100%', maxWidth: '680px', maxHeight: '92vh', overflowY: 'auto', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '12px', marginBottom: '18px' }}>
              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0f172a', margin: 0 }}>
                  ➕ Create Offline / Factory Order
                </h2>
                <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
                  Walk-in customer details, job work description, advance payment, and balance due
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                style={{ background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '32px', height: '32px', fontSize: '1.1rem', cursor: 'pointer', color: '#64748b' }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateOrder} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              {/* Row 1: Customer Name & Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Customer / Party Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Ramesh Kumar / Sharma Enterprises"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Customer Mobile No. *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="e.g. 9876543210"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              {/* Row 2: Work description */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                  📦 Order Description &amp; Specifications *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="e.g. 1000 pcs 5-ply Corrugated Box 12x10x8 inch with 1-color logo print, Kraft paper 180 GSM..."
                  value={workDescription}
                  onChange={(e) => setWorkDescription(e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem', boxSizing: 'border-box', lineHeight: 1.4 }}
                />
              </div>

              {/* Row 3: Source & Payment Terms */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    📍 Order Source / Reference
                  </label>
                  <select
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.88rem', background: '#fff', boxSizing: 'border-box' }}
                  >
                    <option value="Walk-in (Factory)">Walk-in (Factory Direct)</option>
                    <option value="Direct Phone Call">Direct Phone Call</option>
                    <option value="WhatsApp Enquiry">WhatsApp Enquiry</option>
                    <option value="Old / Regular Client">Old / Regular Client</option>
                    <option value="IndiaMart / B2B Portal">IndiaMart / B2B Portal</option>
                    <option value="Client Reference">Client Reference</option>
                    <option value="Broker / Agent">Broker / Agent</option>
                    <option value="Other">Other Reference</option>
                  </select>
                  {source === 'Other' && (
                    <input
                      type="text"
                      placeholder="Enter source name / reference..."
                      value={customSource}
                      onChange={(e) => setCustomSource(e.target.value)}
                      style={{ width: '100%', padding: '8px 12px', marginTop: '6px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.85rem', boxSizing: 'border-box' }}
                    />
                  )}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    📋 Payment Terms
                  </label>
                  <select
                    value={paymentTerms}
                    onChange={(e) => setPaymentTerms(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.88rem', background: '#fff', boxSizing: 'border-box' }}
                  >
                    <option value="50% Advance + 50% on Delivery">50% Advance + 50% on Delivery</option>
                    <option value="100% Full Advance Paid">100% Full Advance Paid</option>
                    <option value="30% Advance + 70% on Delivery">30% Advance + 70% on Delivery</option>
                    <option value="Full Payment on Delivery (COD)">Full Payment on Delivery (COD)</option>
                    <option value="Credit (15 Days / Baki Khata)">Credit (15 Days Credit Period)</option>
                    <option value="Credit (30 Days / Baki Khata)">Credit (30 Days Credit Period)</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Financials (Total, Advance, Balance Due) */}
              <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1.5px solid #cbd5e1' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                      Total Order Amount (₹) *
                    </label>
                    <input
                      required
                      type="number"
                      step="0.01"
                      placeholder="e.g. 15000"
                      value={totalAmount}
                      onChange={(e) => setTotalAmount(parseFloat(e.target.value) || '')}
                      style={{ width: '100%', padding: '10px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '1rem', fontWeight: 800, boxSizing: 'border-box' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#16a34a', marginBottom: '4px' }}>
                      Advance Payment (₹)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      placeholder="e.g. 5000"
                      value={paidAmount}
                      onChange={(e) => setPaidAmount(parseFloat(e.target.value) || '')}
                      style={{ width: '100%', padding: '10px', border: '1.5px solid #86efac', borderRadius: '8px', fontSize: '1rem', fontWeight: 800, color: '#166534', boxSizing: 'border-box' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#be123c', marginBottom: '4px' }}>
                      Balance Due (₹)
                    </label>
                    <div style={{ width: '100%', padding: '10px', background: '#fee2e2', border: '1.5px solid #fca5a5', borderRadius: '8px', fontSize: '1.05rem', fontWeight: 900, color: '#9f1239', boxSizing: 'border-box' }}>
                      ₹{Math.max(0, Number(totalAmount || 0) - Number(paidAmount || 0)).toFixed(2)}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>Payment Mode</label>
                    <select
                      value={paymentMode}
                      onChange={(e) => setPaymentMode(e.target.value)}
                      style={{ width: '100%', padding: '8px 10px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.85rem', background: '#fff' }}
                    >
                      <option value="Cash">Cash</option>
                      <option value="UPI (GPay / PhonePe / Paytm)">UPI (GPay / PhonePe / QR)</option>
                      <option value="Bank Transfer (NEFT/RTGS)">Bank Transfer (NEFT / RTGS / IMPS)</option>
                      <option value="Cheque">Cheque</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>Order / Production Status</label>
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      style={{ width: '100%', padding: '8px 10px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.85rem', background: '#fff' }}
                    >
                      <option value="Confirmed">Confirmed</option>
                      <option value="In Production">In Production</option>
                      <option value="Ready for Pickup">Ready for Pickup / Dispatch</option>
                      <option value="Completed">Completed (Delivered)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 5: Delivery Target & Notes */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                    Estimated Delivery Date (Optional)
                  </label>
                  <input
                    type="date"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    style={{ width: '100%', padding: '9px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.88rem', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                    Order Notes / Remarks (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Red ink shade, bundle of 50 pcs..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    style={{ width: '100%', padding: '9px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.88rem', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              {/* Submit Buttons */}
              <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  style={{ flex: 1, padding: '12px', border: '1px solid #cbd5e1', background: '#f1f5f9', color: '#334155', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  style={{ flex: 2, padding: '12px', border: 'none', background: '#0f172a', color: '#fff', borderRadius: '8px', fontWeight: 800, fontSize: '0.95rem', cursor: 'pointer', boxShadow: '0 4px 12px rgba(15, 23, 42, 0.25)' }}
                >
                  {isSaving ? 'Saving...' : '💾 Save Offline Order'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────
          MODAL: RECORD QUICK BALANCE PAYMENT
      ───────────────────────────────────────────────────────── */}
      {paymentModalOrder && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.65)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px' }}>
          <div style={{ background: '#fff', padding: '24px', borderRadius: '14px', width: '100%', maxWidth: '440px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
            <h3 style={{ margin: '0 0 6px 0', fontSize: '1.2rem', fontWeight: 800, color: '#0f172a' }}>
              💳 Baki Payment Jama Karein
            </h3>
            <p style={{ margin: '0 0 16px 0', fontSize: '0.85rem', color: '#64748b' }}>
              {paymentModalOrder.customer_name} ({paymentModalOrder.order_number})
            </p>

            <form onSubmit={handleRecordPayment} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span>Total Order:</span>
                  <strong>₹{(Number(paymentModalOrder.total_amount) || 0).toFixed(2)}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', color: '#166534' }}>
                  <span>Already Received:</span>
                  <strong>₹{(Number(paymentModalOrder.paid_amount) || 0).toFixed(2)}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#be123c', fontWeight: 800 }}>
                  <span>Current Balance Due:</span>
                  <span>₹{(Number(paymentModalOrder.balance_amount) || 0).toFixed(2)}</span>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                  Kitna Amount Aaya? (₹)
                </label>
                <input
                  required
                  type="number"
                  step="0.01"
                  min="1"
                  max={paymentModalOrder.balance_amount}
                  value={additionalPayment || ''}
                  onChange={(e) => setAdditionalPayment(parseFloat(e.target.value) || 0)}
                  style={{ width: '100%', padding: '10px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 800, boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                  Payment Mode
                </label>
                <select
                  value={additionalPaymentMode}
                  onChange={(e) => setAdditionalPaymentMode(e.target.value)}
                  style={{ width: '100%', padding: '10px', border: '1.5px solid #cbd5e1', borderRadius: '8px', background: '#fff', fontSize: '0.88rem', boxSizing: 'border-box' }}
                >
                  <option value="Cash">Cash (Nagad)</option>
                  <option value="UPI (GPay / PhonePe)">UPI (GPay / PhonePe / Paytm)</option>
                  <option value="Bank Transfer">Bank Transfer (NEFT/RTGS)</option>
                  <option value="Cheque">Cheque</option>
                </select>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
                <button
                  type="button"
                  onClick={() => setPaymentModalOrder(null)}
                  style={{ flex: 1, padding: '10px', border: '1px solid #cbd5e1', background: '#f1f5f9', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{ flex: 2, padding: '10px', border: 'none', background: '#10b981', color: '#fff', borderRadius: '8px', fontWeight: 800, cursor: 'pointer' }}
                >
                  ✓ Update Balance
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────
          MODAL: EDIT OFFLINE ORDER
      ───────────────────────────────────────────────────────── */}
      {isEditModalOpen && editingOrder && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.65)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px' }}>
          <div style={{ background: '#fff', padding: '28px', borderRadius: '16px', width: '100%', maxWidth: '680px', maxHeight: '92vh', overflowY: 'auto', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '12px', marginBottom: '18px' }}>
              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0f172a', margin: 0 }}>
                  ✏️ Edit Order: {editingOrder.order_number}
                </h2>
                <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
                  Update customer info, work details, dispatch status, amount and notes
                </span>
              </div>
              <button
                type="button"
                onClick={() => { setIsEditModalOpen(false); setEditingOrder(null); }}
                style={{ background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '32px', height: '32px', fontSize: '1.1rem', cursor: 'pointer', color: '#64748b' }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveEditOrder} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Customer Details */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Customer / Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={editingOrder.customer_name}
                    onChange={(e) => setEditingOrder({ ...editingOrder, customer_name: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Customer Mobile / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={editingOrder.customer_phone}
                    onChange={(e) => setEditingOrder({ ...editingOrder, customer_phone: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              {/* Work Description */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                  Job Work Description (Kam kya hai) *
                </label>
                <textarea
                  required
                  rows={3}
                  value={editingOrder.work_description}
                  onChange={(e) => setEditingOrder({ ...editingOrder, work_description: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem', boxSizing: 'border-box', resize: 'vertical' }}
                />
              </div>

              {/* Source & Payment Terms */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Order Source
                  </label>
                  <input
                    type="text"
                    value={editingOrder.source}
                    onChange={(e) => setEditingOrder({ ...editingOrder, source: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Payment Terms
                  </label>
                  <input
                    type="text"
                    value={editingOrder.payment_terms}
                    onChange={(e) => setEditingOrder({ ...editingOrder, payment_terms: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              {/* Total & Paid Amounts */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Total Job Amount (₹) *
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    required
                    value={editingOrder.total_amount}
                    onChange={(e) => setEditingOrder({ ...editingOrder, total_amount: parseFloat(e.target.value) || 0 })}
                    style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.95rem', fontWeight: 800, boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#166534', marginBottom: '4px' }}>
                    Paid Amount (₹) *
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    required
                    value={editingOrder.paid_amount}
                    onChange={(e) => setEditingOrder({ ...editingOrder, paid_amount: parseFloat(e.target.value) || 0 })}
                    style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #86efac', borderRadius: '8px', fontSize: '0.95rem', fontWeight: 800, color: '#166534', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#991b1b', marginBottom: '4px' }}>
                    Calculated Balance Due
                  </label>
                  <div style={{ padding: '10px 12px', background: '#fee2e2', borderRadius: '8px', fontWeight: 900, color: '#991b1b', fontSize: '0.95rem', border: '1px solid #fecdd3' }}>
                    ₹{Math.max(0, (Number(editingOrder.total_amount) || 0) - (Number(editingOrder.paid_amount) || 0)).toFixed(2)}
                  </div>
                </div>
              </div>

              {/* Status & Delivery Date */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#1d4ed8', marginBottom: '4px' }}>
                    🚚 Order Status
                  </label>
                  <select
                    value={editingOrder.status}
                    onChange={(e) => setEditingOrder({ ...editingOrder, status: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', border: '2px solid #3b82f6', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 700, background: '#eff6ff', boxSizing: 'border-box' }}
                  >
                    <option value="Confirmed">🟡 Confirmed</option>
                    <option value="In Production">⚙️ In Production</option>
                    <option value="Dispatched">🚚 Dispatched</option>
                    <option value="Ready for Pickup">📦 Ready for Pickup</option>
                    <option value="Delivered">✅ Delivered</option>
                    <option value="Completed">✅ Completed</option>
                    <option value="Cancelled">❌ Cancelled</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Promised Delivery Date
                  </label>
                  <input
                    type="date"
                    value={editingOrder.delivery_date || ''}
                    onChange={(e) => setEditingOrder({ ...editingOrder, delivery_date: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                  Internal Notes &amp; Updates
                </label>
                <textarea
                  rows={2}
                  value={editingOrder.notes || ''}
                  onChange={(e) => setEditingOrder({ ...editingOrder, notes: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem', boxSizing: 'border-box', resize: 'vertical' }}
                />
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px', marginTop: '10px', borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
                <button
                  type="button"
                  onClick={() => { setIsEditModalOpen(false); setEditingOrder(null); }}
                  style={{ flex: 1, padding: '12px', border: '1px solid #cbd5e1', background: '#f1f5f9', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', fontSize: '0.95rem' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{ flex: 2, padding: '12px', border: 'none', background: '#10b981', color: '#fff', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', fontSize: '0.95rem', boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)' }}
                >
                  ✓ Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
