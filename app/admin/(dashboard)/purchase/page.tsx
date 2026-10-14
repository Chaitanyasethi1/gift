'use client';
import React, { useState, useEffect, useMemo } from 'react';

export interface PurchaseItem {
  id: string;
  bill_number: string;
  bill_date: string;
  vendor_name: string;
  vendor_phone: string;
  vendor_gst?: string;
  category: string;
  item_name: string;
  quantity: number;
  unit: string;
  unit_rate: number;
  gst_rate: number;
  total_amount: number;
  paid_amount: number;
  balance_due: number;
  payment_status: 'Paid' | 'Partial' | 'Unpaid';
  payment_mode: string;
  due_date?: string;
  notes?: string;
  created_at: string;
}

const STORAGE_KEY = 'as_factory_purchases_v1';

const RAW_MATERIAL_CATEGORIES = [
  { id: 'kraft_paper', name: '📜 Kraft Paper Reels / Fluting Medium', unit: 'Tons' },
  { id: 'duplex_board', name: '📦 Duplex Board / Grey / SBS Board', unit: 'Kg' },
  { id: 'adhesive_glue', name: '🧪 Corrugation Starch / Gum Adhesive', unit: 'Bags' },
  { id: 'printing_ink', name: '🎨 Printing Inks & Solvents (Flexo/Offset)', unit: 'Kg' },
  { id: 'stitching_wire', name: '🪡 Stitching Wire & Strapping Rolls', unit: 'Rolls' },
  { id: 'tapes_packing', name: '🏷️ Bopp Packing Tapes & Shrink Film', unit: 'Cartons' },
  { id: 'dies_plates', name: '✂️ Cutting Dies, Stereo Polymer Plates', unit: 'Pcs' },
  { id: 'machine_spares', name: '🔧 Machine Spares, Belts & Maintenance', unit: 'Pcs' },
  { id: 'transport_freight', name: '🚚 Raw Material Inward Transport / Freight', unit: 'Trip' },
  { id: 'misc_factory', name: '📦 Other Factory Consumables', unit: 'Pcs' }
];

export default function PurchasePage() {
  const [purchases, setPurchases] = useState<PurchaseItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');

  // Modals
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [payModalItem, setPayModalItem] = useState<PurchaseItem | null>(null);
  const [additionalPayment, setAdditionalPayment] = useState<number>(0);
  const [additionalPaymentMode, setAdditionalPaymentMode] = useState<string>('Bank Transfer (NEFT/RTGS)');

  // Form State
  const [vendorName, setVendorName] = useState('');
  const [vendorPhone, setVendorPhone] = useState('');
  const [vendorGst, setVendorGst] = useState('');
  const [billNumber, setBillNumber] = useState('');
  const [billDate, setBillDate] = useState(new Date().toISOString().split('T')[0]);
  const [category, setCategory] = useState(RAW_MATERIAL_CATEGORIES[0].name);
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState<number | ''>('');
  const [unit, setUnit] = useState('Kg');
  const [unitRate, setUnitRate] = useState<number | ''>('');
  const [gstRate, setGstRate] = useState<number>(18);
  const [paidAmount, setPaidAmount] = useState<number | ''>('');
  const [paymentMode, setPaymentMode] = useState('Bank Transfer (NEFT/RTGS)');
  const [dueDate, setDueDate] = useState('');
  const [notes, setNotes] = useState('');

  // Load from local storage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setPurchases(JSON.parse(saved));
      } else {
        // Seed some sample factory raw materials if empty so it looks lively
        const initialSample: PurchaseItem[] = [
          {
            id: 'pur-1',
            bill_number: 'INV-KP-892',
            bill_date: new Date(Date.now() - 3 * 86400000).toISOString().split('T')[0],
            vendor_name: 'Shree Krishna Paper Mills Ltd',
            vendor_phone: '9810234567',
            vendor_gst: '07AAACS1429B1Z4',
            category: '📜 Kraft Paper Reels / Fluting Medium',
            item_name: '180 GSM Virgin Kraft Paper Reels (Deckle 44")',
            quantity: 4.5,
            unit: 'Tons',
            unit_rate: 34000,
            gst_rate: 12,
            total_amount: 171360,
            paid_amount: 100000,
            balance_due: 71360,
            payment_status: 'Partial',
            payment_mode: 'Bank Transfer (NEFT/RTGS)',
            due_date: new Date(Date.now() + 10 * 86400000).toISOString().split('T')[0],
            notes: 'Advance given. Balance due on 15 days credit term.',
            created_at: new Date(Date.now() - 3 * 86400000).toISOString()
          },
          {
            id: 'pur-2',
            bill_number: 'INV-GL-441',
            bill_date: new Date(Date.now() - 5 * 86400000).toISOString().split('T')[0],
            vendor_name: 'Apex Adhesives & Starches',
            vendor_phone: '9911456789',
            category: '🧪 Corrugation Starch / Gum Adhesive',
            item_name: 'Modified Maize Starch Corrugation Gum (50kg Bags)',
            quantity: 30,
            unit: 'Bags',
            unit_rate: 1100,
            gst_rate: 5,
            total_amount: 34650,
            paid_amount: 34650,
            balance_due: 0,
            payment_status: 'Paid',
            payment_mode: 'UPI',
            created_at: new Date(Date.now() - 5 * 86400000).toISOString()
          }
        ];
        setPurchases(initialSample);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initialSample));
      }
    } catch (e) {
      console.warn('Storage read error:', e);
    } finally {
      setLoading(false);
    }
  }, []);

  const persistPurchases = (list: PurchaseItem[]) => {
    setPurchases(list);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
      console.warn('Storage write error:', e);
    }
  };

  // Calculation helpers
  const calculatedSubtotal = useMemo(() => {
    return Number(quantity || 0) * Number(unitRate || 0);
  }, [quantity, unitRate]);

  const calculatedGst = useMemo(() => {
    return calculatedSubtotal * (Number(gstRate || 0) / 100);
  }, [calculatedSubtotal, gstRate]);

  const calculatedTotal = useMemo(() => {
    return calculatedSubtotal + calculatedGst;
  }, [calculatedSubtotal, calculatedGst]);

  const calculatedBalance = useMemo(() => {
    return Math.max(0, calculatedTotal - Number(paidAmount || 0));
  }, [calculatedTotal, paidAmount]);

  // Form Submit
  const handleAddPurchase = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vendorName.trim() || !itemName.trim() || !quantity || !unitRate) {
      alert('Kripya Vendor Name, Material Name, Quantity aur Rate bharein.');
      return;
    }

    const total = calculatedTotal;
    const paid = Number(paidAmount || 0);
    const balance = Math.max(0, total - paid);
    const pStatus: 'Paid' | 'Partial' | 'Unpaid' =
      paid >= total ? 'Paid' : paid > 0 ? 'Partial' : 'Unpaid';

    const newPurchase: PurchaseItem = {
      id: `pur-${Date.now()}`,
      bill_number: billNumber.trim() || `BILL-${Date.now().toString().slice(-4)}`,
      bill_date: billDate,
      vendor_name: vendorName.trim(),
      vendor_phone: vendorPhone.trim(),
      vendor_gst: vendorGst.trim() || undefined,
      category,
      item_name: itemName.trim(),
      quantity: Number(quantity),
      unit,
      unit_rate: Number(unitRate),
      gst_rate: Number(gstRate),
      total_amount: total,
      paid_amount: paid,
      balance_due: balance,
      payment_status: pStatus,
      payment_mode: paymentMode,
      due_date: dueDate || undefined,
      notes: notes.trim() || undefined,
      created_at: new Date().toISOString()
    };

    const updated = [newPurchase, ...purchases];
    persistPurchases(updated);
    setIsAddModalOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setVendorName('');
    setVendorPhone('');
    setVendorGst('');
    setBillNumber('');
    setBillDate(new Date().toISOString().split('T')[0]);
    setCategory(RAW_MATERIAL_CATEGORIES[0].name);
    setItemName('');
    setQuantity('');
    setUnitRate('');
    setPaidAmount('');
    setDueDate('');
    setNotes('');
  };

  // Record payment to supplier
  const handleRecordSupplierPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!payModalItem || additionalPayment <= 0) return;

    const newPaid = Number(payModalItem.paid_amount) + Number(additionalPayment);
    const newBal = Math.max(0, Number(payModalItem.total_amount) - newPaid);
    const pStatus: 'Paid' | 'Partial' | 'Unpaid' =
      newBal <= 0 ? 'Paid' : 'Partial';

    const updated = purchases.map((item) => {
      if (item.id === payModalItem.id) {
        return {
          ...item,
          paid_amount: newPaid,
          balance_due: newBal,
          payment_status: pStatus,
          notes: `${item.notes ? item.notes + ' | ' : ''}Paid +₹${additionalPayment} via ${additionalPaymentMode}`
        };
      }
      return item;
    });

    persistPurchases(updated);
    setPayModalItem(null);
    setAdditionalPayment(0);
  };

  // Delete purchase
  const handleDeletePurchase = (id: string, name: string) => {
    if (!confirm(`Kya aap sure hain ki "${name}" ka purchase record delete karna chahte hain?`)) return;
    const updated = purchases.filter((p) => p.id !== id);
    persistPurchases(updated);
  };

  // Currency
  const formatINR = (amt: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(amt || 0);
  };

  // Metrics
  const totalPurchasesAmount = purchases.reduce((sum, p) => sum + (Number(p.total_amount) || 0), 0);
  const totalPaidToSuppliers = purchases.reduce((sum, p) => sum + (Number(p.paid_amount) || 0), 0);
  const totalBalanceDueToSuppliers = purchases.reduce((sum, p) => sum + (Number(p.balance_due) || 0), 0);
  const uniqueVendorsCount = new Set(purchases.map(p => p.vendor_name.toLowerCase())).size;

  // Filtered List
  const filteredPurchases = useMemo(() => {
    return purchases.filter((p) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.vendor_name.toLowerCase().includes(q) ||
        p.item_name.toLowerCase().includes(q) ||
        p.bill_number.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);

      const matchesCat = categoryFilter === 'ALL' || p.category.includes(categoryFilter);
      const matchesStatus =
        statusFilter === 'ALL' ||
        (statusFilter === 'DUE' && p.balance_due > 0) ||
        (statusFilter === 'PAID' && p.balance_due <= 0);

      return matchesSearch && matchesCat && matchesStatus;
    });
  }, [purchases, searchQuery, categoryFilter, statusFilter]);

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
            <span style={{ fontSize: '1.6rem' }}>🛒</span>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0, color: '#ffffff' }}>
              Factory Purchase &amp; Raw Material Management
            </h1>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: '6px 0 0 0' }}>
            Kraft Paper Reels, Duplex Board, Gum, Inks, Wire, Tapes, Supplier Bills &amp; Dues Tracker.
          </p>
        </div>

        <button
          onClick={() => { resetForm(); setIsAddModalOpen(true); }}
          style={{
            background: '#3b82f6',
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
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
          }}
        >
          <span>➕</span>
          <span>Naya Purchase Bill Dalein</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
        
        {/* Total Purchases */}
        <div style={{ background: '#fff', padding: '20px', borderRadius: '14px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.04)' }}>
          <span style={{ color: '#475569', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase' }}>Total Purchases</span>
          <div style={{ fontSize: '1.9rem', fontWeight: 900, color: '#0f172a', marginTop: '4px' }}>{formatINR(totalPurchasesAmount)}</div>
          <span style={{ fontSize: '0.78rem', color: '#64748b' }}>{purchases.length} Raw Material Bills</span>
        </div>

        {/* Paid to Suppliers */}
        <div style={{ background: '#f0fdf4', padding: '20px', borderRadius: '14px', border: '1px solid #bbf7d0', boxShadow: '0 2px 4px rgba(22,163,74,0.05)' }}>
          <span style={{ color: '#166534', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase' }}>Paid to Suppliers (Diye Hue)</span>
          <div style={{ fontSize: '1.9rem', fontWeight: 900, color: '#15803d', marginTop: '4px' }}>{formatINR(totalPaidToSuppliers)}</div>
          <span style={{ fontSize: '0.78rem', color: '#166534' }}>Cleared Supplier Invoices</span>
        </div>

        {/* Supplier Dues (Baki Dena Hai) */}
        <div style={{ background: '#fff1f2', padding: '20px', borderRadius: '14px', border: '1px solid #fecdd3', boxShadow: '0 2px 4px rgba(225,29,72,0.05)' }}>
          <span style={{ color: '#9f1239', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase' }}>Supplier Balance Due (Baki Dena Hai)</span>
          <div style={{ fontSize: '1.9rem', fontWeight: 900, color: '#be123c', marginTop: '4px' }}>{formatINR(totalBalanceDueToSuppliers)}</div>
          <span style={{ fontSize: '0.78rem', color: '#9f1239' }}>Payable to Raw Material Vendors</span>
        </div>

        {/* Active Vendors */}
        <div style={{ background: '#fff', padding: '20px', borderRadius: '14px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.04)' }}>
          <span style={{ color: '#475569', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase' }}>Active Mill / Vendors</span>
          <div style={{ fontSize: '1.9rem', fontWeight: 900, color: '#0284c7', marginTop: '4px' }}>{uniqueVendorsCount}</div>
          <span style={{ fontSize: '0.78rem', color: '#64748b' }}>Paper Mills &amp; Ink Suppliers</span>
        </div>

      </div>

      {/* Filter & Search Bar */}
      <div style={{ background: '#fff', padding: '16px 20px', borderRadius: '14px', border: '1px solid #e2e8f0', display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ flex: 1, minWidth: '280px', display: 'flex', alignItems: 'center', background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '8px', padding: '8px 12px' }}>
          <span style={{ marginRight: '8px' }}>🔍</span>
          <input
            type="text"
            placeholder="Search vendor name, kraft paper, ink, bill no..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none', fontSize: '0.88rem', fontWeight: 500 }}
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontWeight: 800 }}>✕</button>
          )}
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            style={{ padding: '8px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', background: '#fff', fontSize: '0.85rem', fontWeight: 700 }}
          >
            <option value="ALL">All Status</option>
            <option value="DUE">⚠️ Baki Dues Only ({purchases.filter(p => p.balance_due > 0).length})</option>
            <option value="PAID">✓ Fully Paid</option>
          </select>
        </div>
      </div>

      {/* Main Table */}
      <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        {loading ? (
          <div style={{ padding: '50px', textAlign: 'center', color: '#64748b' }}>⏳ Loading purchases...</div>
        ) : filteredPurchases.length === 0 ? (
          <div style={{ padding: '60px', textAlign: 'center', color: '#64748b' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🛒</div>
            <h3 style={{ margin: '0 0 6px 0', color: '#1e293b' }}>Koi Purchase Record Nahi Mila</h3>
            <p style={{ margin: 0, fontSize: '0.88rem' }}>Kraft paper reels, inks ya raw materials ka bill add karne ke liye upar "+ Naya Purchase Bill Dalein" par click karein.</p>
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '1100px' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0', color: '#475569', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  <th style={{ padding: '14px 16px' }}>Date &amp; Bill No.</th>
                  <th style={{ padding: '14px 16px' }}>🏭 Mill / Supplier</th>
                  <th style={{ padding: '14px 16px', width: '280px' }}>📦 Raw Material Details</th>
                  <th style={{ padding: '14px 16px' }}>Quantity &amp; Rate</th>
                  <th style={{ padding: '14px 16px' }}>💰 Bill Amount</th>
                  <th style={{ padding: '14px 16px' }}>✅ Paid</th>
                  <th style={{ padding: '14px 16px' }}>⚠️ Baki (Dues)</th>
                  <th style={{ padding: '14px 16px' }}>Status</th>
                  <th style={{ padding: '14px 16px', textAlign: 'center' }}>⚡ Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPurchases.map((item) => {
                  const hasDue = item.balance_due > 0;
                  return (
                    <tr key={item.id} style={{ borderBottom: '1px solid #f1f5f9', transition: 'background 0.15s ease' }}>
                      
                      {/* Bill & Date */}
                      <td style={{ padding: '14px 16px', whiteSpace: 'nowrap' }}>
                        <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.9rem' }}>{item.bill_number}</div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px' }}>
                          {new Date(item.bill_date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </div>
                      </td>

                      {/* Supplier */}
                      <td style={{ padding: '14px 16px', whiteSpace: 'nowrap' }}>
                        <div style={{ fontWeight: 800, color: '#1e293b', fontSize: '0.92rem' }}>{item.vendor_name}</div>
                        {item.vendor_phone && (
                          <div style={{ fontSize: '0.78rem', color: '#0284c7', marginTop: '2px' }}>
                            📞 {item.vendor_phone}
                          </div>
                        )}
                      </td>

                      {/* Item Details */}
                      <td style={{ padding: '14px 16px' }}>
                        <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.88rem' }}>{item.item_name}</div>
                        <span style={{ background: '#f1f5f9', color: '#475569', fontSize: '0.72rem', padding: '2px 6px', borderRadius: '4px', fontWeight: 700, display: 'inline-block', marginTop: '4px' }}>
                          {item.category}
                        </span>
                      </td>

                      {/* Qty & Rate */}
                      <td style={{ padding: '14px 16px', whiteSpace: 'nowrap' }}>
                        <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.9rem' }}>
                          {item.quantity} {item.unit}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                          @ ₹{item.unit_rate}/{item.unit} ({item.gst_rate}% GST)
                        </div>
                      </td>

                      {/* Total Amount */}
                      <td style={{ padding: '14px 16px', whiteSpace: 'nowrap' }}>
                        <div style={{ fontWeight: 900, color: '#0f172a', fontSize: '0.98rem' }}>
                          {formatINR(item.total_amount)}
                        </div>
                      </td>

                      {/* Paid */}
                      <td style={{ padding: '14px 16px', whiteSpace: 'nowrap' }}>
                        <div style={{ fontWeight: 800, color: '#16a34a', fontSize: '0.9rem' }}>
                          {formatINR(item.paid_amount)}
                        </div>
                        <div style={{ fontSize: '0.7rem', color: '#64748b' }}>{item.payment_mode}</div>
                      </td>

                      {/* Baki Dues */}
                      <td style={{ padding: '14px 16px', whiteSpace: 'nowrap' }}>
                        {hasDue ? (
                          <span style={{ background: '#fee2e2', color: '#b91c1c', padding: '4px 8px', borderRadius: '6px', fontSize: '0.88rem', fontWeight: 900, border: '1px solid #fca5a5', display: 'inline-block' }}>
                            ₹{item.balance_due.toFixed(2)} Dues
                          </span>
                        ) : (
                          <span style={{ background: '#dcfce7', color: '#166534', padding: '3px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800 }}>
                            ✓ Cleared
                          </span>
                        )}
                      </td>

                      {/* Status */}
                      <td style={{ padding: '14px 16px' }}>
                        <span style={{
                          background: item.payment_status === 'Paid' ? '#dcfce7' : item.payment_status === 'Partial' ? '#fef3c7' : '#fee2e2',
                          color: item.payment_status === 'Paid' ? '#166534' : item.payment_status === 'Partial' ? '#92400e' : '#b91c1c',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          fontSize: '0.75rem',
                          fontWeight: 800
                        }}>
                          {item.payment_status}
                        </span>
                        {item.due_date && hasDue && (
                          <div style={{ fontSize: '0.7rem', color: '#dc2626', marginTop: '3px', fontWeight: 700 }}>
                            Due: {item.due_date}
                          </div>
                        )}
                      </td>

                      {/* Actions */}
                      <td style={{ padding: '14px 16px', textAlign: 'center', whiteSpace: 'nowrap' }}>
                        <div style={{ display: 'flex', gap: '6px', justifyContent: 'center' }}>
                          {hasDue && (
                            <button
                              onClick={() => { setPayModalItem(item); setAdditionalPayment(item.balance_due); }}
                              style={{ background: '#10b981', color: '#fff', border: 'none', padding: '5px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
                              title="Pay supplier balance"
                            >
                              + Pay Due
                            </button>
                          )}
                          <button
                            onClick={() => handleDeletePurchase(item.id, item.item_name)}
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
          MODAL: ADD NEW RAW MATERIAL PURCHASE BILL
      ───────────────────────────────────────────────────────── */}
      {isAddModalOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.65)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px' }}>
          <div style={{ background: '#fff', padding: '28px', borderRadius: '16px', width: '100%', maxWidth: '720px', maxHeight: '92vh', overflowY: 'auto', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '12px', marginBottom: '18px' }}>
              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0f172a', margin: 0 }}>
                  🛒 Naya Purchase Bill Add Karein
                </h2>
                <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
                  Kraft Paper Reels, Duplex Board, Corrugation Gum, Printing Inks &amp; Factory Material Bill
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

            <form onSubmit={handleAddPurchase} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              {/* Row 1: Vendor Name, Phone & GST */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Mill / Supplier Ka Naam *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Century Paper Mills / Star Traders"
                    value={vendorName}
                    onChange={(e) => setVendorName(e.target.value)}
                    style={{ width: '100%', padding: '9px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.88rem', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Supplier Mobile No.
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 9811223344"
                    value={vendorPhone}
                    onChange={(e) => setVendorPhone(e.target.value)}
                    style={{ width: '100%', padding: '9px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.88rem', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Supplier GSTIN (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 07AAACS1429B1Z4"
                    value={vendorGst}
                    onChange={(e) => setVendorGst(e.target.value)}
                    style={{ width: '100%', padding: '9px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.88rem', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              {/* Row 2: Category & Item Details */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.8fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Material Category *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                      const matched = RAW_MATERIAL_CATEGORIES.find(c => c.name === e.target.value);
                      if (matched) setUnit(matched.unit);
                    }}
                    style={{ width: '100%', padding: '9px 10px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.85rem', background: '#fff', boxSizing: 'border-box' }}
                  >
                    {RAW_MATERIAL_CATEGORIES.map((c) => (
                      <option key={c.id} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Material Name &amp; Quality Specifications *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. 180 GSM Virgin Kraft Reel 44 inch deckle, BF 18"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    style={{ width: '100%', padding: '9px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.88rem', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              {/* Row 3: Bill Number & Bill Date */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Bill / Invoice Number
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. INV-2026-894"
                    value={billNumber}
                    onChange={(e) => setBillNumber(e.target.value)}
                    style={{ width: '100%', padding: '9px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.88rem', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Bill Date
                  </label>
                  <input
                    type="date"
                    value={billDate}
                    onChange={(e) => setBillDate(e.target.value)}
                    style={{ width: '100%', padding: '9px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.88rem', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              {/* Row 4: Quantity, Rate, Unit & GST */}
              <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1.5px solid #cbd5e1' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1.2fr 1fr', gap: '10px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                      Quantity *
                    </label>
                    <input
                      required
                      type="number"
                      step="0.01"
                      placeholder="e.g. 5"
                      value={quantity}
                      onChange={(e) => setQuantity(parseFloat(e.target.value) || '')}
                      style={{ width: '100%', padding: '9px', border: '1.5px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem', boxSizing: 'border-box' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                      Unit
                    </label>
                    <select
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
                      style={{ width: '100%', padding: '9px', border: '1.5px solid #cbd5e1', borderRadius: '6px', fontSize: '0.85rem', background: '#fff' }}
                    >
                      <option value="Tons">Tons</option>
                      <option value="Kg">Kg</option>
                      <option value="Bags">Bags (50kg)</option>
                      <option value="Reels">Reels</option>
                      <option value="Pcs">Pcs</option>
                      <option value="Rolls">Rolls</option>
                      <option value="Cartons">Cartons</option>
                      <option value="Litres">Litres</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                      Rate per {unit} (₹) *
                    </label>
                    <input
                      required
                      type="number"
                      step="0.01"
                      placeholder="e.g. 34000"
                      value={unitRate}
                      onChange={(e) => setUnitRate(parseFloat(e.target.value) || '')}
                      style={{ width: '100%', padding: '9px', border: '1.5px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem', boxSizing: 'border-box' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                      GST Rate (%)
                    </label>
                    <select
                      value={gstRate}
                      onChange={(e) => setGstRate(parseFloat(e.target.value) || 0)}
                      style={{ width: '100%', padding: '9px', border: '1.5px solid #cbd5e1', borderRadius: '6px', fontSize: '0.85rem', background: '#fff' }}
                    >
                      <option value={18}>18% (Standard)</option>
                      <option value={12}>12% (Kraft Paper)</option>
                      <option value={5}>5% (Starch/Gum)</option>
                      <option value={0}>0% (Exempt)</option>
                    </select>
                  </div>
                </div>

                {/* Calculation Summary Preview */}
                <div style={{ marginTop: '14px', borderTop: '1px solid #cbd5e1', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.88rem' }}>
                  <div>
                    <span style={{ color: '#64748b' }}>Subtotal: ₹{calculatedSubtotal.toFixed(2)} + GST: ₹{calculatedGst.toFixed(2)}</span>
                  </div>
                  <div>
                    <strong style={{ fontSize: '1.1rem', color: '#0f172a' }}>
                      Total Bill Amount: {formatINR(calculatedTotal)}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Row 5: Payment (Paid vs Balance) */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#16a34a', marginBottom: '4px' }}>
                    Kitne Paise Diye? (Paid ₹)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    placeholder="e.g. 50000"
                    value={paidAmount}
                    onChange={(e) => setPaidAmount(parseFloat(e.target.value) || '')}
                    style={{ width: '100%', padding: '9px 12px', border: '1.5px solid #86efac', borderRadius: '8px', fontSize: '0.95rem', fontWeight: 800, color: '#166534', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#be123c', marginBottom: '4px' }}>
                    Baki Dena Hai (Due ₹)
                  </label>
                  <div style={{ width: '100%', padding: '9px 12px', background: '#fee2e2', border: '1.5px solid #fca5a5', borderRadius: '8px', fontSize: '1rem', fontWeight: 900, color: '#9f1239', boxSizing: 'border-box' }}>
                    ₹{calculatedBalance.toFixed(2)}
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                    Payment Mode
                  </label>
                  <select
                    value={paymentMode}
                    onChange={(e) => setPaymentMode(e.target.value)}
                    style={{ width: '100%', padding: '9px 10px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.85rem', background: '#fff' }}
                  >
                    <option value="Bank Transfer (NEFT/RTGS)">Bank Transfer (NEFT/RTGS)</option>
                    <option value="Cheque">Cheque</option>
                    <option value="UPI">UPI / GPay</option>
                    <option value="Cash">Cash (Nagad)</option>
                  </select>
                </div>
              </div>

              {/* Row 6: Due Date & Notes */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                    Payment Due Date (Kab Tak Dena Hai)
                  </label>
                  <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    style={{ width: '100%', padding: '9px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.88rem', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                    Remark / Notes (Truck No., Quality, etc.)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Delivered by Truck UP14-XX-1234, moisture tested OK..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    style={{ width: '100%', padding: '9px 12px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.88rem', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              {/* Submit Buttons */}
              <div style={{ display: 'flex', gap: '12px', marginTop: '6px' }}>
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  style={{ flex: 1, padding: '12px', border: '1px solid #cbd5e1', background: '#f1f5f9', color: '#334155', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{ flex: 2, padding: '12px', border: 'none', background: '#0f172a', color: '#fff', borderRadius: '8px', fontWeight: 800, fontSize: '0.95rem', cursor: 'pointer', boxShadow: '0 4px 12px rgba(15, 23, 42, 0.25)' }}
                >
                  💾 Save Raw Material Purchase Bill
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────
          MODAL: PAY SUPPLIER DUES
      ───────────────────────────────────────────────────────── */}
      {payModalItem && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.65)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px' }}>
          <div style={{ background: '#fff', padding: '24px', borderRadius: '14px', width: '100%', maxWidth: '440px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
            <h3 style={{ margin: '0 0 6px 0', fontSize: '1.2rem', fontWeight: 800, color: '#0f172a' }}>
              💳 Supplier Ko Payment Karein
            </h3>
            <p style={{ margin: '0 0 16px 0', fontSize: '0.85rem', color: '#64748b' }}>
              {payModalItem.vendor_name} ({payModalItem.bill_number})
            </p>

            <form onSubmit={handleRecordSupplierPayment} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span>Total Bill:</span>
                  <strong>₹{payModalItem.total_amount.toFixed(2)}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', color: '#166534' }}>
                  <span>Already Paid:</span>
                  <strong>₹{payModalItem.paid_amount.toFixed(2)}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#be123c', fontWeight: 800 }}>
                  <span>Current Dues (Baki):</span>
                  <span>₹{payModalItem.balance_due.toFixed(2)}</span>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                  Kitna Payment Kar Rahe Hain? (₹)
                </label>
                <input
                  required
                  type="number"
                  step="0.01"
                  min="1"
                  max={payModalItem.balance_due}
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
                  <option value="Bank Transfer (NEFT/RTGS)">Bank Transfer (NEFT/RTGS)</option>
                  <option value="Cheque">Cheque</option>
                  <option value="UPI">UPI / GPay</option>
                  <option value="Cash">Cash</option>
                </select>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
                <button
                  type="button"
                  onClick={() => setPayModalItem(null)}
                  style={{ flex: 1, padding: '10px', border: '1px solid #cbd5e1', background: '#f1f5f9', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{ flex: 2, padding: '10px', border: 'none', background: '#10b981', color: '#fff', borderRadius: '8px', fontWeight: 800, cursor: 'pointer' }}
                >
                  ✓ Record Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
