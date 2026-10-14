'use client';
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { createClient } from '@/utils/supabase/client';

interface OrderItem {
  id?: string;
  product_name: string;
  quantity: number;
  unit_price: number;
  total_price: number;
  variant_details?: any;
}

interface Order {
  id: string;
  order_number: string;
  customer_name: string;
  customer_phone: string;
  customer_email?: string | null;
  shipping_address: any;
  gst_number?: string | null;
  subtotal: number;
  discount_amount: number;
  gst_amount: number;
  shipping_fee: number;
  total_amount: number;
  coupon_code?: string | null;
  status: string; // 'Confirmed' | 'In Production' | 'Dispatched' | 'Delivered' | 'Pending' | 'Cancelled'
  payment_status: string; // 'Paid' | 'Pending'
  courier_name?: string | null;
  tracking_number?: string | null;
  tracking_link?: string | null;
  internal_notes?: string | null;
  created_at: string;
  order_items?: OrderItem[];
}

interface DashboardOverviewClientProps {
  initialOrders: Order[];
  lowStockCount?: number;
}

export default function DashboardOverviewClient({
  initialOrders,
  lowStockCount = 0
}: DashboardOverviewClientProps) {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<string>('ALL'); // 'ALL' | 'TODAY' | 'YYYY-MM'
  const [activeTab, setActiveTab] = useState<string>('ALL'); // 'ALL' | 'DAILY' | 'CONFIRMED' | 'DISPATCHED' | 'PENDING' | 'PAID' | 'PAYMENT_PENDING'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [offlineOrders, setOfflineOrders] = useState<any[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('as_offline_orders_v1');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setOfflineOrders(parsed);
        }
      }
    } catch (e) {
      console.warn('Could not load offline orders in dashboard:', e);
    }
  }, []);

  const supabase = createClient();

  // Refresh data live
  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*, order_items(*)')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error refreshing orders:', error);
      } else if (data) {
        setOrders(data);
      }
    } catch (err) {
      console.error('Refresh failed:', err);
    } finally {
      setIsRefreshing(false);
    }
  };

  // Helper: Address parser
  const parseAddress = (shippingAddress: any) => {
    if (!shippingAddress) return { address: 'No Address Provided', pincode: '', fullText: '' };
    let rawAddress = '';
    let rawPincode = '';

    if (typeof shippingAddress === 'string') {
      try {
        const parsed = JSON.parse(shippingAddress);
        if (typeof parsed === 'object' && parsed !== null) {
          rawAddress = String(parsed.address || parsed.street || parsed.line1 || '');
          rawPincode = String(parsed.pincode || parsed.pin || parsed.postal_code || '');
          if (parsed.city && !rawAddress.includes(String(parsed.city))) rawAddress += `, ${parsed.city}`;
          if (parsed.state && !rawAddress.includes(String(parsed.state))) rawAddress += `, ${parsed.state}`;
        } else {
          rawAddress = shippingAddress;
        }
      } catch {
        rawAddress = shippingAddress;
      }
    } else if (typeof shippingAddress === 'object') {
      rawAddress = String(shippingAddress.address || shippingAddress.street || shippingAddress.line1 || '');
      rawPincode = String(shippingAddress.pincode || shippingAddress.pin || shippingAddress.postal_code || '');
      if (shippingAddress.city && !rawAddress.includes(String(shippingAddress.city))) rawAddress += `, ${shippingAddress.city}`;
      if (shippingAddress.state && !rawAddress.includes(String(shippingAddress.state))) rawAddress += `, ${shippingAddress.state}`;
    } else {
      rawAddress = String(shippingAddress);
    }

    return {
      address: rawAddress || 'No Address Provided',
      pincode: rawPincode || '',
      fullText: `${rawAddress}${rawPincode ? ` - ${rawPincode}` : ''}`
    };
  };

  // Date Check: Is Today (Local Time)
  const isToday = (dateStr: string) => {
    if (!dateStr) return false;
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return false;
    const today = new Date();
    return (
      d.getDate() === today.getDate() &&
      d.getMonth() === today.getMonth() &&
      d.getFullYear() === today.getFullYear()
    );
  };

  // Format Month-Year key (e.g. "2026-10")
  const getMonthKey = (dateStr: string) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return '';
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    return `${y}-${m}`;
  };

  // Format month for display (e.g. "October 2026")
  const formatMonthDisplay = (monthKey: string) => {
    if (!monthKey || monthKey === 'ALL') return 'All Months';
    if (monthKey === 'Other') return 'Other Period';
    const parts = monthKey.split('-').map(Number);
    if (parts.length < 2 || isNaN(parts[0]) || isNaN(parts[1])) return monthKey;
    const d = new Date(parts[0], parts[1] - 1, 1);
    if (isNaN(d.getTime())) return monthKey;
    return d.toLocaleString('en-IN', { month: 'long', year: 'numeric' });
  };

  // Currency Formatter (INR)
  const formatINR = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2
    }).format(amount || 0);
  };

  // Extract all unique months present in orders
  const availableMonths = useMemo(() => {
    const monthSet = new Set<string>();
    orders.forEach((o) => {
      const key = getMonthKey(o.created_at);
      if (key) monthSet.add(key);
    });
    return Array.from(monthSet).sort().reverse();
  }, [orders]);

  // Orders filtered by the selected period (ALL, TODAY, or YYYY-MM)
  const periodFilteredOrders = useMemo(() => {
    if (selectedMonth === 'ALL') return orders;
    if (selectedMonth === 'TODAY') {
      return orders.filter((o) => isToday(o.created_at));
    }
    return orders.filter((o) => getMonthKey(o.created_at) === selectedMonth);
  }, [orders, selectedMonth]);

  // -------------------------------------------------------------
  // SECTION 1 & 2 CALCULATIONS (Directly from handwritten note)
  // -------------------------------------------------------------

  // 1. Total Order (Daily) - specifically orders placed today
  const dailyOrders = useMemo(() => orders.filter((o) => isToday(o.created_at)), [orders]);
  const dailyOrdersCount = dailyOrders.length;
  const dailySalesTotal = dailyOrders.reduce((acc, o) => acc + (Number(o.total_amount) || 0), 0);

  // Filtered orders metrics based on currently selected period
  const totalOrdersCount = periodFilteredOrders.length;

  // 2. Confirmed Order
  const confirmedOrders = useMemo(
    () => periodFilteredOrders.filter((o) => o.status === 'Confirmed' || o.status === 'In Production'),
    [periodFilteredOrders]
  );
  const confirmedOrdersCount = confirmedOrders.length;
  const confirmedOrdersTotal = confirmedOrders.reduce((acc, o) => acc + (Number(o.total_amount) || 0), 0);

  // 3. Order Dispatch
  const dispatchedOrders = useMemo(
    () => periodFilteredOrders.filter((o) => o.status === 'Dispatched' || o.status === 'Delivered'),
    [periodFilteredOrders]
  );
  const dispatchedOrdersCount = dispatchedOrders.length;
  const dispatchedOrdersTotal = dispatchedOrders.reduce((acc, o) => acc + (Number(o.total_amount) || 0), 0);

  // 4. Pending Order
  const pendingOrders = useMemo(
    () => periodFilteredOrders.filter((o) => o.status === 'Pending'),
    [periodFilteredOrders]
  );
  const pendingOrdersCount = pendingOrders.length;
  const pendingOrdersTotal = pendingOrders.reduce((acc, o) => acc + (Number(o.total_amount) || 0), 0);

  // 5. Total Sale
  const totalSaleAmount = useMemo(
    () => periodFilteredOrders.reduce((acc, o) => acc + (Number(o.total_amount) || 0), 0),
    [periodFilteredOrders]
  );

  // 6. Payment Confirmed (Paid)
  const paymentConfirmedOrders = useMemo(
    () => periodFilteredOrders.filter((o) => o.payment_status === 'Paid'),
    [periodFilteredOrders]
  );
  const paymentConfirmedAmount = paymentConfirmedOrders.reduce(
    (acc, o) => acc + (Number(o.total_amount) || 0),
    0
  );
  const paymentConfirmedCount = paymentConfirmedOrders.length;

  // 7. Payment Pending (Pending / COD)
  const paymentPendingOrders = useMemo(
    () => periodFilteredOrders.filter((o) => o.payment_status !== 'Paid'),
    [periodFilteredOrders]
  );
  const paymentPendingAmount = paymentPendingOrders.reduce(
    (acc, o) => acc + (Number(o.total_amount) || 0),
    0
  );
  const paymentPendingCount = paymentPendingOrders.length;

  // -------------------------------------------------------------
  // SECTION 3: "LISTING MONTHLY" (Monthly Financial Breakdown Table)
  // -------------------------------------------------------------
  interface MonthlyRow {
    monthKey: string;
    monthName: string;
    totalOrders: number;
    totalSale: number;
    paymentConfirmedAmount: number;
    paymentConfirmedCount: number;
    paymentPendingAmount: number;
    paymentPendingCount: number;
    dispatchedCount: number;
    confirmedCount: number;
    collectionRate: number;
  }

  const monthlyListingData: MonthlyRow[] = useMemo(() => {
    const map = new Map<string, Order[]>();

    orders.forEach((order) => {
      const key = getMonthKey(order.created_at) || 'Other';
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(order);
    });

    const rows: MonthlyRow[] = [];
    map.forEach((monthOrders, key) => {
      const totalOrders = monthOrders.length;
      const totalSale = monthOrders.reduce((acc, o) => acc + (Number(o.total_amount) || 0), 0);
      
      const paidOrders = monthOrders.filter((o) => o.payment_status === 'Paid');
      const paymentConfirmedAmount = paidOrders.reduce((acc, o) => acc + (Number(o.total_amount) || 0), 0);
      const paymentConfirmedCount = paidOrders.length;

      const pendingOrders = monthOrders.filter((o) => o.payment_status !== 'Paid');
      const paymentPendingAmount = pendingOrders.reduce((acc, o) => acc + (Number(o.total_amount) || 0), 0);
      const paymentPendingCount = pendingOrders.length;

      const dispatchedCount = monthOrders.filter(
        (o) => o.status === 'Dispatched' || o.status === 'Delivered'
      ).length;
      const confirmedCount = monthOrders.filter(
        (o) => o.status === 'Confirmed' || o.status === 'In Production'
      ).length;

      const collectionRate = totalSale > 0 ? (paymentConfirmedAmount / totalSale) * 100 : 0;

      rows.push({
        monthKey: key,
        monthName: formatMonthDisplay(key),
        totalOrders,
        totalSale,
        paymentConfirmedAmount,
        paymentConfirmedCount,
        paymentPendingAmount,
        paymentPendingCount,
        dispatchedCount,
        confirmedCount,
        collectionRate
      });
    });

    return rows.sort((a, b) => b.monthKey.localeCompare(a.monthKey));
  }, [orders]);

  // -------------------------------------------------------------
  // SECTION 4: TABLE FILTERING (Tabs + Search)
  // -------------------------------------------------------------
  const filteredOrders = useMemo(() => {
    let list = periodFilteredOrders;

    // Apply active tab
    if (activeTab === 'DAILY') {
      list = list.filter((o) => isToday(o.created_at));
    } else if (activeTab === 'CONFIRMED') {
      list = list.filter((o) => o.status === 'Confirmed' || o.status === 'In Production');
    } else if (activeTab === 'DISPATCHED') {
      list = list.filter((o) => o.status === 'Dispatched' || o.status === 'Delivered');
    } else if (activeTab === 'PENDING') {
      list = list.filter((o) => o.status === 'Pending');
    } else if (activeTab === 'PAID') {
      list = list.filter((o) => o.payment_status === 'Paid');
    } else if (activeTab === 'PAYMENT_PENDING') {
      list = list.filter((o) => o.payment_status !== 'Paid');
    }

    // Apply search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((o) => {
        const addr = parseAddress(o.shipping_address);
        const orderNum = String(o.order_number || '').toLowerCase();
        const custName = String(o.customer_name || '').toLowerCase();
        const custPhone = String(o.customer_phone || '');
        const addrText = String(addr.address || '').toLowerCase();
        const pinText = String(addr.pincode || '');
        const gstText = String(o.gst_number || '').toLowerCase();
        const amountText = String(o.total_amount || '');

        return (
          orderNum.includes(q) ||
          custName.includes(q) ||
          custPhone.includes(q) ||
          addrText.includes(q) ||
          pinText.includes(q) ||
          gstText.includes(q) ||
          amountText.includes(q)
        );
      });
    }

    return list;
  }, [periodFilteredOrders, activeTab, searchQuery]);

  return (
    <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '28px' }}>
      
      {/* ─────────────────────────────────────────────────────────
          HEADER & SCOPE CONTROLS
      ───────────────────────────────────────────────────────── */}
      <div style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        padding: '28px 32px',
        borderRadius: '16px',
        color: '#fff',
        boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.3)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.6rem' }}>📊</span>
            <h1 style={{ fontSize: '1.85rem', fontWeight: 900, margin: 0, letterSpacing: '-0.5px', color: '#ffffff' }}>
              Dashboard Overview
            </h1>
            <span style={{ background: '#3b82f6', color: '#fff', fontSize: '0.72rem', fontWeight: 800, padding: '3px 10px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Live
            </span>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '0.92rem', margin: '6px 0 0 0' }}>
            Direct Factory Analytics • Total Orders, Dispatch Tracker &amp; Monthly Financial Statement
          </p>
        </div>

        {/* Action Buttons & Period Selector */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          
          {/* Period Selector Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', background: '#334155', borderRadius: '10px', padding: '4px 10px', border: '1px solid #475569' }}>
            <span style={{ fontSize: '0.82rem', color: '#cbd5e1', fontWeight: 700, marginRight: '8px' }}>
              📅 Period:
            </span>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              style={{
                background: 'transparent',
                color: '#fff',
                border: 'none',
                fontWeight: 800,
                fontSize: '0.9rem',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="ALL" style={{ background: '#1e293b', color: '#fff' }}>All Time (All Records)</option>
              <option value="TODAY" style={{ background: '#1e293b', color: '#fff' }}>📅 Today (Daily Orders)</option>
              {availableMonths.map((m) => (
                <option key={m} value={m} style={{ background: '#1e293b', color: '#fff' }}>
                  🗓️ {formatMonthDisplay(m)}
                </option>
              ))}
            </select>
          </div>

          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            style={{
              background: '#3b82f6',
              color: '#fff',
              border: 'none',
              padding: '10px 16px',
              borderRadius: '10px',
              fontWeight: 800,
              fontSize: '0.88rem',
              cursor: isRefreshing ? 'wait' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
            }}
          >
            <span>{isRefreshing ? '⏳' : '🔄'}</span>
            <span>{isRefreshing ? 'Refreshing...' : 'Refresh'}</span>
          </button>

          {/* Go to Sales Page */}
          <Link
            href="/admin/sales"
            style={{
              background: '#fff',
              color: '#0f172a',
              textDecoration: 'none',
              padding: '10px 18px',
              borderRadius: '10px',
              fontWeight: 800,
              fontSize: '0.88rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 12px rgba(255, 255, 255, 0.15)'
            }}
          >
            <span>📦 Sales &amp; Dispatch →</span>
          </Link>

          {/* Go to Offline Orders */}
          <Link
            href="/admin/offline-orders"
            style={{
              background: '#10b981',
              color: '#fff',
              textDecoration: 'none',
              padding: '10px 18px',
              borderRadius: '10px',
              fontWeight: 800,
              fontSize: '0.88rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
            }}
          >
            <span>🏬 Offline Orders →</span>
          </Link>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────
          SECTION 1: ORDER FLOW METRICS (From User Note)
          1. Total Order (daily)
          2. Confirmed Order
          3. Order dispatch
          4. Pending order
      ───────────────────────────────────────────────────────── */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>📦</span> Orders &amp; Dispatch Status Overview
            </h2>
            <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
              Daily inflow, confirmation status, dispatches in transit, and pending orders
            </span>
          </div>
          {selectedMonth !== 'ALL' && (
            <button
              onClick={() => setSelectedMonth('ALL')}
              style={{ background: '#e2e8f0', border: 'none', padding: '4px 10px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 700, color: '#334155', cursor: 'pointer' }}
            >
              Reset to All Time ✕
            </button>
          )}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '18px'
        }}>

          {/* CARD 1: Total Order (daily) */}
          <div
            onClick={() => { setActiveTab('DAILY'); }}
            style={{
              background: activeTab === 'DAILY' ? '#eff6ff' : '#ffffff',
              padding: '22px',
              borderRadius: '14px',
              border: activeTab === 'DAILY' ? '2px solid #3b82f6' : '1px solid #e2e8f0',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
              cursor: 'pointer',
              transition: 'all 0.18s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Total Order (Daily)
                </span>
                <div style={{ fontSize: '2.1rem', fontWeight: 900, color: '#1e3a8a', marginTop: '4px', lineHeight: 1.1 }}>
                  {dailyOrdersCount}
                </div>
              </div>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#dbeafe', color: '#1d4ed8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>
                📅
              </div>
            </div>

            <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem' }}>
              <span style={{ color: '#64748b', fontWeight: 600 }}>Today's Sale Value:</span>
              <strong style={{ color: '#0f172a' }}>{formatINR(dailySalesTotal)}</strong>
            </div>

            <div style={{ marginTop: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: '#64748b' }}>
              <span>Total Overall Orders:</span>
              <span style={{ fontWeight: 800, color: '#334155' }}>{orders.length} total</span>
            </div>

            <div style={{ marginTop: '10px' }}>
              <span style={{ background: '#dbeafe', color: '#1e40af', padding: '3px 8px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 800 }}>
                {isToday(new Date().toISOString()) ? `Today: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}` : 'Daily Metric'}
              </span>
            </div>
          </div>

          {/* CARD 2: Confirmed Order */}
          <div
            onClick={() => { setActiveTab('CONFIRMED'); }}
            style={{
              background: activeTab === 'CONFIRMED' ? '#f0fdf4' : '#ffffff',
              padding: '22px',
              borderRadius: '14px',
              border: activeTab === 'CONFIRMED' ? '2px solid #10b981' : '1px solid #e2e8f0',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
              cursor: 'pointer',
              transition: 'all 0.18s ease'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Confirmed Order
                </span>
                <div style={{ fontSize: '2.1rem', fontWeight: 900, color: '#065f46', marginTop: '4px', lineHeight: 1.1 }}>
                  {confirmedOrdersCount}
                </div>
              </div>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#d1fae5', color: '#047857', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>
                ✅
              </div>
            </div>

            <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem' }}>
              <span style={{ color: '#64748b', fontWeight: 600 }}>Confirmed Value:</span>
              <strong style={{ color: '#065f46' }}>{formatINR(confirmedOrdersTotal)}</strong>
            </div>

            <div style={{ marginTop: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: '#64748b' }}>
              <span>Status:</span>
              <span style={{ fontWeight: 800, color: '#059669' }}>Confirmed &amp; In Production</span>
            </div>

            <div style={{ marginTop: '10px' }}>
              <span style={{ background: '#dcfce7', color: '#15803d', padding: '3px 8px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 800 }}>
                Ready to Print / Pack
              </span>
            </div>
          </div>

          {/* CARD 3: Order dispatch */}
          <div
            onClick={() => { setActiveTab('DISPATCHED'); }}
            style={{
              background: activeTab === 'DISPATCHED' ? '#faf5ff' : '#ffffff',
              padding: '22px',
              borderRadius: '14px',
              border: activeTab === 'DISPATCHED' ? '2px solid #8b5cf6' : '1px solid #e2e8f0',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
              cursor: 'pointer',
              transition: 'all 0.18s ease'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#7c3aed', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Order Dispatch
                </span>
                <div style={{ fontSize: '2.1rem', fontWeight: 900, color: '#5b21b6', marginTop: '4px', lineHeight: 1.1 }}>
                  {dispatchedOrdersCount}
                </div>
              </div>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#ede9fe', color: '#6d28d9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>
                🚚
              </div>
            </div>

            <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem' }}>
              <span style={{ color: '#64748b', fontWeight: 600 }}>Dispatched Value:</span>
              <strong style={{ color: '#5b21b6' }}>{formatINR(dispatchedOrdersTotal)}</strong>
            </div>

            <div style={{ marginTop: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: '#64748b' }}>
              <span>Logistics:</span>
              <span style={{ fontWeight: 800, color: '#7c3aed' }}>In Transit / Handed Over</span>
            </div>

            <div style={{ marginTop: '10px' }}>
              <span style={{ background: '#f3e8ff', color: '#6b21a8', padding: '3px 8px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 800 }}>
                Dispatched / Tracking Linked
              </span>
            </div>
          </div>

          {/* CARD 4: Pending order */}
          <div
            onClick={() => { setActiveTab('PENDING'); }}
            style={{
              background: activeTab === 'PENDING' ? '#fffbeb' : '#ffffff',
              padding: '22px',
              borderRadius: '14px',
              border: activeTab === 'PENDING' ? '2px solid #f59e0b' : '1px solid #e2e8f0',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
              cursor: 'pointer',
              transition: 'all 0.18s ease'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Pending Order
                </span>
                <div style={{ fontSize: '2.1rem', fontWeight: 900, color: '#92400e', marginTop: '4px', lineHeight: 1.1 }}>
                  {pendingOrdersCount}
                </div>
              </div>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#fef3c7', color: '#b45309', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>
                ⏳
              </div>
            </div>

            <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem' }}>
              <span style={{ color: '#64748b', fontWeight: 600 }}>Pending Value:</span>
              <strong style={{ color: '#b45309' }}>{formatINR(pendingOrdersTotal)}</strong>
            </div>

            <div style={{ marginTop: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: '#64748b' }}>
              <span>Action:</span>
              <span style={{ fontWeight: 800, color: '#d97706' }}>Verification Required</span>
            </div>

            <div style={{ marginTop: '10px' }}>
              <span style={{ background: '#fef3c7', color: '#92400e', padding: '3px 8px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 800 }}>
                Awaiting Confirmation
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────
          SECTION 2: SALES & FINANCIAL METRICS (From User Note)
          1. Total Sale
          2. Payment Confirmed
          3. Payment Pending
          Bracketed with: "Listing Monthly"
      ───────────────────────────────────────────────────────── */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>💰</span> Revenue, Payments &amp; Financial Collection
            </h2>
            <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
              {selectedMonth === 'ALL' ? 'All-Time Financial Breakdown' : `Breakdown for ${formatMonthDisplay(selectedMonth)}`}
            </span>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px'
        }}>

          {/* CARD 5: Total Sale */}
          <div
            onClick={() => setActiveTab('ALL')}
            style={{
              background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
              padding: '24px',
              borderRadius: '16px',
              border: activeTab === 'ALL' && selectedMonth === 'ALL' ? '2px solid #0f172a' : '1px solid #cbd5e1',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.04)',
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Total Sale
                </span>
                <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#0f172a', marginTop: '4px', letterSpacing: '-0.5px' }}>
                  {formatINR(totalSaleAmount)}
                </div>
              </div>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#0f172a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
                ₹
              </div>
            </div>

            <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
              <span style={{ color: '#64748b' }}>Orders Count:</span>
              <strong style={{ color: '#0f172a' }}>{totalOrdersCount} Orders</strong>
            </div>

            <div style={{ marginTop: '6px', display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
              <span style={{ color: '#64748b' }}>Avg. Order Value (AOV):</span>
              <strong style={{ color: '#0284c7' }}>
                {totalOrdersCount > 0 ? formatINR(totalSaleAmount / totalOrdersCount) : '₹0.00'}
              </strong>
            </div>

            <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ background: '#f1f5f9', color: '#334155', border: '1px solid #cbd5e1', padding: '3px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800 }}>
                Gross Revenue (GST Included)
              </span>
            </div>
          </div>

          {/* CARD 6: Payment Confirmed */}
          <div
            onClick={() => setActiveTab('PAID')}
            style={{
              background: activeTab === 'PAID' ? '#f0fdf4' : '#ffffff',
              padding: '24px',
              borderRadius: '16px',
              border: activeTab === 'PAID' ? '2px solid #16a34a' : '1px solid #bbf7d0',
              boxShadow: '0 4px 10px rgba(22, 163, 74, 0.08)',
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#15803d', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Payment Confirmed
                </span>
                <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#166534', marginTop: '4px', letterSpacing: '-0.5px' }}>
                  {formatINR(paymentConfirmedAmount)}
                </div>
              </div>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#dcfce7', color: '#166534', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
                💳
              </div>
            </div>

            <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid #dcfce7', display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
              <span style={{ color: '#15803d', fontWeight: 600 }}>Paid Orders Count:</span>
              <strong style={{ color: '#166534' }}>{paymentConfirmedCount} Orders Paid</strong>
            </div>

            <div style={{ marginTop: '6px', display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
              <span style={{ color: '#15803d', fontWeight: 600 }}>Collection Ratio:</span>
              <strong style={{ color: '#166534' }}>
                {totalSaleAmount > 0 ? `${(Number((paymentConfirmedAmount / totalSaleAmount) * 100) || 0).toFixed(1)}%` : '0%'}
              </strong>
            </div>

            <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ background: '#dcfce7', color: '#166534', padding: '3px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800 }}>
                ✓ Razorpay Online Captured
              </span>
            </div>
          </div>

          {/* CARD 7: Payment Pending */}
          <div
            onClick={() => setActiveTab('PAYMENT_PENDING')}
            style={{
              background: activeTab === 'PAYMENT_PENDING' ? '#fff1f2' : '#ffffff',
              padding: '24px',
              borderRadius: '16px',
              border: activeTab === 'PAYMENT_PENDING' ? '2px solid #e11d48' : '1px solid #fecdd3',
              boxShadow: '0 4px 10px rgba(225, 29, 72, 0.08)',
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#be123c', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Payment Pending
                </span>
                <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#9f1239', marginTop: '4px', letterSpacing: '-0.5px' }}>
                  {formatINR(paymentPendingAmount)}
                </div>
              </div>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#ffe4e6', color: '#be123c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
                ⚠️
              </div>
            </div>

            <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid #ffe4e6', display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
              <span style={{ color: '#be123c', fontWeight: 600 }}>Pending Orders Count:</span>
              <strong style={{ color: '#9f1239' }}>{paymentPendingCount} Orders COD / Unpaid</strong>
            </div>

            <div style={{ marginTop: '6px', display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
              <span style={{ color: '#be123c', fontWeight: 600 }}>Pending Ratio:</span>
              <strong style={{ color: '#9f1239' }}>
                {totalSaleAmount > 0 ? `${(Number((paymentPendingAmount / totalSaleAmount) * 100) || 0).toFixed(1)}%` : '0%'}
              </strong>
            </div>

            <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ background: '#ffe4e6', color: '#9f1239', padding: '3px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800 }}>
                Collect on Delivery (COD) / Pending
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────
          SECTION 3: "LISTING MONTHLY" (From Handwritten Note)
          Note bracket: Total Sale, Payment Confirmed, Payment Pending } Listing Monthly.
      ───────────────────────────────────────────────────────── */}
      <div style={{
        background: '#ffffff',
        borderRadius: '16px',
        border: '1.5px solid #e2e8f0',
        padding: '24px 28px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '1.3rem' }}>🗓️</span>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Listing Monthly (मासिक बिक्री और भुगतान विवरण)
              </h2>
              <span style={{ background: '#f1f5f9', color: '#475569', fontSize: '0.75rem', fontWeight: 800, padding: '3px 8px', borderRadius: '6px' }}>
                Month-by-Month Statement
              </span>
            </div>
            <p style={{ color: '#64748b', fontSize: '0.85rem', margin: '4px 0 0 0' }}>
              Monthly breakdown of Total Sales, Payment Confirmed (Paid) vs Payment Pending (COD)
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <span style={{ fontSize: '0.82rem', color: '#64748b', alignSelf: 'center' }}>
              Showing {monthlyListingData.length} recorded months
            </span>
          </div>
        </div>

        {monthlyListingData.length === 0 ? (
          <div style={{ padding: '30px', textAlign: 'center', color: '#64748b', background: '#f8fafc', borderRadius: '10px' }}>
            No monthly data recorded yet.
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '850px' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0', color: '#475569', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  <th style={{ padding: '14px 16px' }}>📅 Month / Year</th>
                  <th style={{ padding: '14px 16px' }}>📦 Orders</th>
                  <th style={{ padding: '14px 16px' }}>💰 Total Sale</th>
                  <th style={{ padding: '14px 16px' }}>💳 Payment Confirmed</th>
                  <th style={{ padding: '14px 16px' }}>⏳ Payment Pending</th>
                  <th style={{ padding: '14px 16px' }}>🚚 Dispatched</th>
                  <th style={{ padding: '14px 16px' }}>📊 Collection %</th>
                  <th style={{ padding: '14px 16px', textAlign: 'center' }}>⚡ Filter</th>
                </tr>
              </thead>
              <tbody>
                {monthlyListingData.map((row) => {
                  const isSelected = selectedMonth === row.monthKey;
                  return (
                    <tr
                      key={row.monthKey}
                      style={{
                        borderBottom: '1px solid #f1f5f9',
                        background: isSelected ? '#f0fdf4' : 'transparent',
                        transition: 'background 0.15s ease'
                      }}
                    >
                      {/* Month Name */}
                      <td style={{ padding: '14px 16px', fontWeight: 800, color: '#0f172a' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontSize: '1rem' }}>🗓️</span>
                          <span>{row.monthName}</span>
                          {isSelected && (
                            <span style={{ background: '#16a34a', color: '#fff', fontSize: '0.68rem', padding: '2px 6px', borderRadius: '4px', fontWeight: 800 }}>
                              SELECTED
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Orders Count */}
                      <td style={{ padding: '14px 16px', fontWeight: 700, color: '#1e293b' }}>
                        <span style={{ background: '#f1f5f9', padding: '4px 8px', borderRadius: '6px', fontSize: '0.85rem' }}>
                          {row.totalOrders} Orders
                        </span>
                      </td>

                      {/* Total Sale */}
                      <td style={{ padding: '14px 16px', fontWeight: 900, color: '#0f172a', fontSize: '0.98rem' }}>
                        {formatINR(row.totalSale)}
                      </td>

                      {/* Payment Confirmed */}
                      <td style={{ padding: '14px 16px' }}>
                        <div style={{ fontWeight: 800, color: '#16a34a' }}>
                          {formatINR(row.paymentConfirmedAmount)}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                          {row.paymentConfirmedCount} paid online
                        </div>
                      </td>

                      {/* Payment Pending */}
                      <td style={{ padding: '14px 16px' }}>
                        <div style={{ fontWeight: 800, color: row.paymentPendingAmount > 0 ? '#dc2626' : '#64748b' }}>
                          {formatINR(row.paymentPendingAmount)}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                          {row.paymentPendingCount} COD / pending
                        </div>
                      </td>

                      {/* Dispatched */}
                      <td style={{ padding: '14px 16px' }}>
                        <span style={{ background: '#f3e8ff', color: '#7c3aed', padding: '4px 8px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 800 }}>
                          {row.dispatchedCount} Shipped
                        </span>
                      </td>

                      {/* Collection Rate Bar */}
                      <td style={{ padding: '14px 16px', minWidth: '130px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <div style={{ flex: 1, background: '#e2e8f0', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                            <div
                              style={{
                                width: `${Math.min(100, Math.max(0, row.collectionRate))}%`,
                                background: row.collectionRate >= 75 ? '#16a34a' : row.collectionRate >= 40 ? '#f59e0b' : '#ef4444',
                                height: '100%',
                                borderRadius: '4px'
                              }}
                            />
                          </div>
                          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569' }}>
                            {(Number(row.collectionRate) || 0).toFixed(0)}%
                          </span>
                        </div>
                      </td>

                      {/* Filter Button */}
                      <td style={{ padding: '14px 16px', textAlign: 'center' }}>
                        {isSelected ? (
                          <button
                            onClick={() => setSelectedMonth('ALL')}
                            style={{ background: '#e2e8f0', color: '#334155', border: 'none', padding: '6px 12px', borderRadius: '6px', fontWeight: 700, fontSize: '0.78rem', cursor: 'pointer' }}
                          >
                            Clear
                          </button>
                        ) : (
                          <button
                            onClick={() => setSelectedMonth(row.monthKey)}
                            style={{ background: '#0f172a', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', fontWeight: 700, fontSize: '0.78rem', cursor: 'pointer' }}
                          >
                            View Month
                          </button>
                        )}
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
          SECTION 4: INTERACTIVE ORDERS LISTING TABLE
          Filter by: All, Daily, Confirmed, Dispatched, Pending, Paid, COD
      ───────────────────────────────────────────────────────── */}
      <div style={{
        background: '#ffffff',
        borderRadius: '16px',
        border: '1.5px solid #e2e8f0',
        padding: '24px 28px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
      }}>
        {/* Header & Tabs */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', flexWrap: 'wrap', gap: '14px' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>📋</span> Detailed Orders Listing
            </h2>
            <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
              Showing {filteredOrders.length} order records based on active filters
            </span>
          </div>

          {/* Quick Search */}
          <div style={{ display: 'flex', alignItems: 'center', background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '8px', padding: '6px 12px', minWidth: '280px' }}>
            <span style={{ marginRight: '6px' }}>🔍</span>
            <input
              type="text"
              placeholder="Search by order ID, name, phone, PIN..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '0.85rem', width: '100%', fontWeight: 500 }}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontWeight: 800 }}>✕</button>
            )}
          </div>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '12px', marginBottom: '14px', borderBottom: '1px solid #f1f5f9' }}>
          <button
            onClick={() => setActiveTab('ALL')}
            style={{
              padding: '8px 14px',
              borderRadius: '8px',
              border: activeTab === 'ALL' ? '2px solid #0f172a' : '1px solid #cbd5e1',
              background: activeTab === 'ALL' ? '#0f172a' : '#fff',
              color: activeTab === 'ALL' ? '#fff' : '#475569',
              fontWeight: 700,
              fontSize: '0.82rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            All Orders ({periodFilteredOrders.length})
          </button>

          <button
            onClick={() => setActiveTab('DAILY')}
            style={{
              padding: '8px 14px',
              borderRadius: '8px',
              border: activeTab === 'DAILY' ? '2px solid #2563eb' : '1px solid #cbd5e1',
              background: activeTab === 'DAILY' ? '#2563eb' : '#fff',
              color: activeTab === 'DAILY' ? '#fff' : '#2563eb',
              fontWeight: 800,
              fontSize: '0.82rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            📅 Daily Orders ({orders.filter((o) => isToday(o.created_at)).length})
          </button>

          <button
            onClick={() => setActiveTab('CONFIRMED')}
            style={{
              padding: '8px 14px',
              borderRadius: '8px',
              border: activeTab === 'CONFIRMED' ? '2px solid #059669' : '1px solid #cbd5e1',
              background: activeTab === 'CONFIRMED' ? '#059669' : '#fff',
              color: activeTab === 'CONFIRMED' ? '#fff' : '#059669',
              fontWeight: 800,
              fontSize: '0.82rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            ✅ Confirmed ({confirmedOrdersCount})
          </button>

          <button
            onClick={() => setActiveTab('DISPATCHED')}
            style={{
              padding: '8px 14px',
              borderRadius: '8px',
              border: activeTab === 'DISPATCHED' ? '2px solid #7c3aed' : '1px solid #cbd5e1',
              background: activeTab === 'DISPATCHED' ? '#7c3aed' : '#fff',
              color: activeTab === 'DISPATCHED' ? '#fff' : '#7c3aed',
              fontWeight: 800,
              fontSize: '0.82rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            🚚 Dispatched ({dispatchedOrdersCount})
          </button>

          <button
            onClick={() => setActiveTab('PENDING')}
            style={{
              padding: '8px 14px',
              borderRadius: '8px',
              border: activeTab === 'PENDING' ? '2px solid #d97706' : '1px solid #cbd5e1',
              background: activeTab === 'PENDING' ? '#d97706' : '#fff',
              color: activeTab === 'PENDING' ? '#fff' : '#d97706',
              fontWeight: 800,
              fontSize: '0.82rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            ⏳ Pending Orders ({pendingOrdersCount})
          </button>

          <button
            onClick={() => setActiveTab('PAID')}
            style={{
              padding: '8px 14px',
              borderRadius: '8px',
              border: activeTab === 'PAID' ? '2px solid #16a34a' : '1px solid #cbd5e1',
              background: activeTab === 'PAID' ? '#16a34a' : '#fff',
              color: activeTab === 'PAID' ? '#fff' : '#16a34a',
              fontWeight: 800,
              fontSize: '0.82rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            💳 Paid Online ({paymentConfirmedCount})
          </button>

          <button
            onClick={() => setActiveTab('PAYMENT_PENDING')}
            style={{
              padding: '8px 14px',
              borderRadius: '8px',
              border: activeTab === 'PAYMENT_PENDING' ? '2px solid #be123c' : '1px solid #cbd5e1',
              background: activeTab === 'PAYMENT_PENDING' ? '#be123c' : '#fff',
              color: activeTab === 'PAYMENT_PENDING' ? '#fff' : '#be123c',
              fontWeight: 800,
              fontSize: '0.82rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            ⚠️ Payment Pending ({paymentPendingCount})
          </button>
        </div>

        {/* Orders Table */}
        {filteredOrders.length === 0 ? (
          <div style={{ padding: '45px', textAlign: 'center', color: '#64748b', background: '#f8fafc', borderRadius: '10px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🔍</div>
            No orders match the selected filter. Try selecting "All Orders" or clearing search.
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '950px' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0', color: '#475569', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  <th style={{ padding: '14px' }}>Order ID &amp; Date</th>
                  <th style={{ padding: '14px' }}>👤 Customer &amp; Phone</th>
                  <th style={{ padding: '14px' }}>📍 Delivery Address</th>
                  <th style={{ padding: '14px' }}>💰 Amount</th>
                  <th style={{ padding: '14px' }}>💳 Payment Status</th>
                  <th style={{ padding: '14px' }}>📦 Order Status</th>
                  <th style={{ padding: '14px', textAlign: 'center' }}>⚡ Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => {
                  const addr = parseAddress(order.shipping_address);
                  const isPaid = order.payment_status === 'Paid';
                  const orderDate = order.created_at ? new Date(order.created_at) : null;
                  const isValidDate = orderDate && !isNaN(orderDate.getTime());
                  const isOrderToday = isToday(order.created_at);
                  const rawPhone = String(order.customer_phone || '').trim();
                  const cleanPhone = rawPhone.replace(/\D/g, '');

                  return (
                    <tr
                      key={order.id}
                      onClick={() => setSelectedOrder(order)}
                      style={{
                        borderBottom: '1px solid #f1f5f9',
                        cursor: 'pointer',
                        transition: 'background 0.15s ease'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f8fafc'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                    >
                      {/* Order Number & Timestamp */}
                      <td style={{ padding: '14px', whiteSpace: 'nowrap' }}>
                        <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.92rem' }}>
                          {order.order_number}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          {isValidDate
                            ? orderDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
                            : '—'}
                          {isOrderToday && (
                            <span style={{ background: '#dbeafe', color: '#1d4ed8', padding: '1px 5px', borderRadius: '4px', fontSize: '0.68rem', fontWeight: 800 }}>
                              TODAY
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Customer & Phone */}
                      <td style={{ padding: '14px', whiteSpace: 'nowrap' }}>
                        <div style={{ fontWeight: 800, color: '#1e293b', fontSize: '0.9rem' }}>
                          {order.customer_name || 'Guest'}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '3px' }}>
                          <a
                            href={rawPhone ? `tel:${rawPhone}` : '#'}
                            onClick={(e) => e.stopPropagation()}
                            style={{ color: '#0284c7', fontSize: '0.82rem', fontWeight: 700, textDecoration: 'none' }}
                          >
                            📞 {rawPhone || 'N/A'}
                          </a>
                          {cleanPhone.length >= 10 && (
                            <a
                              href={`https://wa.me/91${cleanPhone.slice(-10)}?text=Hi%20${encodeURIComponent(order.customer_name || 'Customer')},%20we%20have%20an%20update%20regarding%20your%20Order%20${order.order_number}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              style={{ background: '#dcfce7', color: '#166534', padding: '1px 6px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 800, textDecoration: 'none' }}
                              title="Chat on WhatsApp"
                            >
                              WA
                            </a>
                          )}
                        </div>
                      </td>

                      {/* Delivery Address */}
                      <td style={{ padding: '14px', maxWidth: '280px' }}>
                        <div style={{ fontSize: '0.82rem', color: '#334155', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {addr.address}
                        </div>
                        {addr.pincode && (
                          <div style={{ fontSize: '0.72rem', color: '#0284c7', fontWeight: 800, marginTop: '2px' }}>
                            PIN: {addr.pincode}
                          </div>
                        )}
                      </td>

                      {/* Amount */}
                      <td style={{ padding: '14px', whiteSpace: 'nowrap' }}>
                        <div style={{ fontWeight: 900, color: '#0f172a', fontSize: '0.98rem' }}>
                          {formatINR(Number(order.total_amount))}
                        </div>
                      </td>

                      {/* Payment Status */}
                      <td style={{ padding: '14px', whiteSpace: 'nowrap' }}>
                        {isPaid ? (
                          <span style={{ background: '#dcfce7', color: '#166534', padding: '3px 8px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800 }}>
                            💳 Paid Online
                          </span>
                        ) : (
                          <span style={{ background: '#fef3c7', color: '#92400e', padding: '3px 8px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800 }}>
                            💵 Cash On Delivery
                          </span>
                        )}
                      </td>

                      {/* Order Status */}
                      <td style={{ padding: '14px', whiteSpace: 'nowrap' }}>
                        <span style={{
                          background: order.status === 'Delivered' ? '#dcfce7' : order.status === 'Dispatched' ? '#ede9fe' : order.status === 'Confirmed' ? '#e0f2fe' : '#fef3c7',
                          color: order.status === 'Delivered' ? '#166534' : order.status === 'Dispatched' ? '#6d28d9' : order.status === 'Confirmed' ? '#0369a1' : '#92400e',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          fontSize: '0.78rem',
                          fontWeight: 800
                        }}>
                          {order.status || 'Confirmed'}
                        </span>
                        {order.courier_name && (
                          <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '2px' }}>
                            {order.courier_name}
                          </div>
                        )}
                      </td>

                      {/* Action */}
                      <td style={{ padding: '14px', textAlign: 'center', whiteSpace: 'nowrap' }}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedOrder(order);
                          }}
                          style={{
                            background: '#0f172a',
                            color: '#fff',
                            border: 'none',
                            padding: '6px 10px',
                            borderRadius: '6px',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            cursor: 'pointer'
                          }}
                        >
                          👁️ View
                        </button>
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
          SECTION 5: OFFLINE FACTORY ORDERS & DIRECT CLIENTS
      ───────────────────────────────────────────────────────── */}
      <div style={{
        background: '#ffffff',
        borderRadius: '16px',
        border: '1.5px solid #e2e8f0',
        padding: '24px 28px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '1.4rem' }}>🏬</span>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Offline Factory Orders &amp; Direct Jobs (ऑफलाइन ग्राहक व जॉब वर्क)
              </h2>
              <span style={{ background: '#dcfce7', color: '#166534', fontSize: '0.72rem', fontWeight: 800, padding: '3px 8px', borderRadius: '6px' }}>
                Walk-in &amp; B2B Tracker
              </span>
            </div>
            <p style={{ color: '#64748b', fontSize: '0.85rem', margin: '4px 0 0 0' }}>
              Customer contact, kaam details, advance received, baki payment aur payment terms
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <Link
              href="/admin/offline-orders"
              style={{
                background: '#10b981',
                color: '#fff',
                textDecoration: 'none',
                padding: '8px 16px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 2px 6px rgba(16, 185, 129, 0.25)'
              }}
            >
              <span>➕ Naya Offline Order</span>
            </Link>
            <Link
              href="/admin/offline-orders"
              style={{
                background: '#0f172a',
                color: '#fff',
                textDecoration: 'none',
                padding: '8px 16px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.85rem'
              }}
            >
              Open Full Manager →
            </Link>
          </div>
        </div>

        {/* 4 Mini Summary Cards */}
        {(() => {
          const safeOfflineOrders = Array.isArray(offlineOrders) ? offlineOrders : [];
          return (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', marginBottom: '18px' }}>
                <div style={{ background: '#f8fafc', padding: '14px 16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Offline Orders</span>
                  <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0f172a', marginTop: '2px' }}>{safeOfflineOrders.length}</div>
                </div>
                <div style={{ background: '#f8fafc', padding: '14px 16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Total Offline Value</span>
                  <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0f172a', marginTop: '2px' }}>
                    {formatINR(safeOfflineOrders.reduce((sum, o) => sum + (Number(o.total_amount) || 0), 0))}
                  </div>
                </div>
                <div style={{ background: '#f0fdf4', padding: '14px 16px', borderRadius: '10px', border: '1px solid #bbf7d0' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#166534', textTransform: 'uppercase' }}>Advance Received</span>
                  <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#15803d', marginTop: '2px' }}>
                    {formatINR(safeOfflineOrders.reduce((sum, o) => sum + (Number(o.paid_amount) || 0), 0))}
                  </div>
                </div>
                <div style={{ background: '#fff1f2', padding: '14px 16px', borderRadius: '10px', border: '1px solid #fecdd3' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9f1239', textTransform: 'uppercase' }}>Total Baki Due</span>
                  <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#be123c', marginTop: '2px' }}>
                    {formatINR(safeOfflineOrders.reduce((sum, o) => sum + (Number(o.balance_amount) || 0), 0))}
                  </div>
                </div>
              </div>

              {/* Offline Orders Table Preview */}
              {safeOfflineOrders.length === 0 ? (
                <div style={{ padding: '24px', textAlign: 'center', color: '#64748b', background: '#f8fafc', borderRadius: '8px', fontSize: '0.9rem' }}>
                  Koi offline order abhi save nahi hai. Factory walk-in ya direct customer order add karne ke liye upar "+ Naya Offline Order" par click karein.
                </div>
              ) : (
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '850px' }}>
                    <thead>
                      <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0', color: '#475569', fontSize: '0.76rem', textTransform: 'uppercase' }}>
                        <th style={{ padding: '10px 12px' }}>Customer &amp; Phone</th>
                        <th style={{ padding: '10px 12px' }}>Kaam Kya Hai</th>
                        <th style={{ padding: '10px 12px' }}>Aaya Kisse</th>
                        <th style={{ padding: '10px 12px' }}>Total Amount</th>
                        <th style={{ padding: '10px 12px' }}>Kitne Aa Gaye</th>
                        <th style={{ padding: '10px 12px' }}>Baki (Due)</th>
                        <th style={{ padding: '10px 12px' }}>Payment Terms</th>
                      </tr>
                    </thead>
                    <tbody>
                      {safeOfflineOrders.slice(0, 5).map((ord) => {
                        const total = Number(ord.total_amount) || 0;
                        const paid = Number(ord.paid_amount) || 0;
                        const balance = Number(ord.balance_amount) || 0;

                        return (
                          <tr key={ord.id || ord.order_number} style={{ borderBottom: '1px solid #f1f5f9' }}>
                            <td style={{ padding: '10px 12px', whiteSpace: 'nowrap' }}>
                              <strong style={{ color: '#0f172a', fontSize: '0.88rem' }}>{ord.customer_name || 'Walk-in Customer'}</strong>
                              <div style={{ fontSize: '0.75rem', color: '#0284c7', marginTop: '2px' }}>
                                📞 {ord.customer_phone || 'N/A'}
                              </div>
                            </td>
                            <td style={{ padding: '10px 12px', fontSize: '0.85rem', color: '#334155', maxWidth: '240px' }}>
                              {ord.work_description || 'Printing Job'}
                            </td>
                            <td style={{ padding: '10px 12px', whiteSpace: 'nowrap' }}>
                              <span style={{ background: '#f1f5f9', padding: '3px 6px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, color: '#475569' }}>
                                {ord.source || 'Direct'}
                              </span>
                            </td>
                            <td style={{ padding: '10px 12px', fontWeight: 800, color: '#0f172a', whiteSpace: 'nowrap', fontSize: '0.9rem' }}>
                              {formatINR(total)}
                            </td>
                            <td style={{ padding: '10px 12px', fontWeight: 800, color: '#16a34a', whiteSpace: 'nowrap', fontSize: '0.88rem' }}>
                              {formatINR(paid)}
                            </td>
                            <td style={{ padding: '10px 12px', whiteSpace: 'nowrap' }}>
                              {balance > 0 ? (
                                <span style={{ background: '#fee2e2', color: '#b91c1c', padding: '3px 6px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 900 }}>
                                  ₹{balance.toFixed(2)} Baki
                                </span>
                              ) : (
                                <span style={{ color: '#16a34a', fontSize: '0.8rem', fontWeight: 800 }}>✓ Full Paid</span>
                              )}
                            </td>
                            <td style={{ padding: '10px 12px', fontSize: '0.78rem', color: '#475569', fontWeight: 600 }}>
                              {ord.payment_terms || 'Payment on Delivery'}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          );
        })()}
      </div>

      {/* ─────────────────────────────────────────────────────────
          QUICK ACTIONS & INVENTORY HEALTH
      ───────────────────────────────────────────────────────── */}
      <div style={{
        background: '#ffffff',
        borderRadius: '16px',
        border: '1px solid #e2e8f0',
        padding: '24px 28px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#fef3c7', color: '#b45309', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
            📦
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#0f172a' }}>
              Inventory &amp; Low Stock Status
            </h3>
            <p style={{ margin: '2px 0 0 0', fontSize: '0.85rem', color: '#64748b' }}>
              {lowStockCount > 0 ? `${lowStockCount} items running critically low in factory stock` : 'Factory inventory levels healthy (>5 units in stock)'}
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <Link
            href="/admin/stock"
            style={{
              background: '#0f172a',
              color: '#fff',
              padding: '10px 18px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '0.85rem'
            }}
          >
            Manage Products &amp; Stock →
          </Link>
          <Link
            href="/admin/sales"
            style={{
              background: '#f1f5f9',
              color: '#0f172a',
              padding: '10px 18px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '0.85rem',
              border: '1px solid #cbd5e1'
            }}
          >
            Print Invoices &amp; Slips →
          </Link>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────
          ORDER QUICK PREVIEW MODAL
      ───────────────────────────────────────────────────────── */}
      {selectedOrder && (
        <div
          onClick={() => setSelectedOrder(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.65)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#fff',
              padding: '28px',
              borderRadius: '16px',
              width: '100%',
              maxWidth: '650px',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)'
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid #e2e8f0', paddingBottom: '14px', marginBottom: '16px' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0284c7', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Quick Order Preview
                </span>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0f172a', margin: '2px 0 0 0' }}>
                  {selectedOrder.order_number}
                </h2>
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                  Placed: {selectedOrder.created_at && !isNaN(new Date(selectedOrder.created_at).getTime())
                    ? new Date(selectedOrder.created_at).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })
                    : '—'}
                </span>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                style={{ background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '32px', height: '32px', fontSize: '1.1rem', cursor: 'pointer', color: '#64748b' }}
              >
                ✕
              </button>
            </div>

            {/* Customer Details */}
            <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748b', fontSize: '0.82rem' }}>Customer Name:</span>
                <strong style={{ color: '#0f172a' }}>{selectedOrder.customer_name || 'Guest'}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748b', fontSize: '0.82rem' }}>Mobile:</span>
                <strong>{selectedOrder.customer_phone || 'N/A'}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748b', fontSize: '0.82rem' }}>Address:</span>
                <span style={{ fontWeight: 600, color: '#0f172a', maxWidth: '65%', textAlign: 'right', fontSize: '0.85rem' }}>
                  {parseAddress(selectedOrder.shipping_address).address}
                </span>
              </div>
              {parseAddress(selectedOrder.shipping_address).pincode && (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748b', fontSize: '0.82rem' }}>Pincode:</span>
                  <span style={{ background: '#0284c7', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.78rem', fontWeight: 800 }}>
                    {parseAddress(selectedOrder.shipping_address).pincode}
                  </span>
                </div>
              )}
            </div>

            {/* Financial Details */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '12px', marginBottom: '18px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b' }}>
                <span>Payment Status:</span>
                <span style={{ fontWeight: 800, color: selectedOrder.payment_status === 'Paid' ? '#16a34a' : '#d97706' }}>
                  {selectedOrder.payment_status === 'Paid' ? '💳 Paid Online' : '💵 Cash on Delivery'}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b' }}>
                <span>Order Status:</span>
                <span style={{ fontWeight: 800, color: '#0f172a' }}>{selectedOrder.status}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: 900, color: '#0f172a', borderTop: '1px dashed #cbd5e1', paddingTop: '8px', marginTop: '4px' }}>
                <span>Final Total Amount:</span>
                <span style={{ color: '#059669' }}>{formatINR(Number(selectedOrder.total_amount))}</span>
              </div>
            </div>

            {/* Modal Buttons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <Link
                href="/admin/sales"
                style={{
                  flex: 1,
                  textAlign: 'center',
                  background: '#0f172a',
                  color: '#fff',
                  padding: '12px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 800,
                  fontSize: '0.9rem'
                }}
              >
                Go to Full Order &amp; Dispatch Manager →
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
