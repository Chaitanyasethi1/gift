'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { 
  ShoppingCartIcon, 
  XIcon, 
  Trash2Icon, 
  PlusIcon, 
  MinusIcon, 
  WhatsAppIcon, 
  PackageIcon 
} from './Icons';
import { PRODUCTS } from '@/data/products';

interface CartProps {
  onOpenCheckoutModal?: () => void;
}

export const Cart: React.FC<CartProps> = ({ onOpenCheckoutModal }) => {
  const router = useRouter();
  const {
    cart,
    cartCount,
    addToCart,
    updateQty,
    removeFromCart,
    clearCart,
    isCartOpen,
    setIsCartOpen,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    subtotal,
    discount,
    gstAmount,
    finalTotal
  } = useCart();

  const [couponCode, setCouponCode] = useState('');
  const [suggestedList, setSuggestedList] = useState<any[]>([]);

  // Fetch real database products for recommendations
  useEffect(() => {
    async function loadRealSuggestions() {
      try {
        const res = await fetch('/api/products');
        if (res.ok) {
          const list = await res.json();
          if (Array.isArray(list) && list.length > 0) {
            const mapped = list.map((p: any) => {
              let firstImg = p.image || '/assets/corrugated_box.jpg';
              if (Array.isArray(p.images) && p.images.length > 0 && p.images[0]) {
                firstImg = p.images[0];
              } else if (typeof p.images === 'string') {
                try {
                  const arr = JSON.parse(p.images);
                  if (Array.isArray(arr) && arr.length > 0 && arr[0]) firstImg = arr[0];
                } catch {
                  if (p.images.startsWith('http') || p.images.startsWith('/')) firstImg = p.images;
                }
              }
              const rate = Number(p.selling_price || p.price || 10);
              return {
                id: p.id,
                title: p.title || p.name || 'Packaging Product',
                price: rate,
                packQty: Number(p.moq || 50),
                image: firstImg,
                gstRate: Number(p.gst_rate ?? p.gst_percentage ?? 18),
                category: p.categoryLabel || 'Packaging'
              };
            });
            setSuggestedList(mapped.slice(0, 8));
            return;
          }
        }
      } catch {}

      // Fallback to static products catalogue
      const fallback = PRODUCTS.slice(0, 6).map(p => ({
        id: p.id,
        title: p.title,
        price: Number(p.price || 10),
        packQty: Number(p.moq || 50),
        image: p.image || '/assets/corrugated_box.jpg',
        gstRate: 18,
        category: p.categoryLabel
      }));
      setSuggestedList(fallback);
    }
    loadRealSuggestions();
  }, []);

  if (!isCartOpen) return null;

  const freeShippingThreshold = 999;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponCode.trim()) return;
    const ok = applyCoupon(couponCode);
    if (ok) {
      setCouponCode('');
    }
  };

  const handleAddSuggested = (item: any) => {
    addToCart({
      id: `${item.id}-suggested-${item.packQty || 50}`,
      title: `${item.title} (Pack of ${item.packQty || 50})`,
      price: item.price,
      image: item.image,
      gstRate: item.gstRate || 18,
      specs: []
    }, 1);
  };

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    let itemsList = cart
      .map(
        (item, i) =>
          `${i + 1}. *${item.title}*\n   Qty: ${item.qty} packs | Rate: ₹${item.price.toFixed(2)} | Total: ₹${(item.price * item.qty).toFixed(2)}${
            item.dimensions ? `\n   Size: ${item.dimensions}` : ''
          }`
      )
      .join('\n\n');

    let text = `📦 *NEW ORDER INQUIRY — AS PRINT GALLERY*\n\n${itemsList}\n\n`;
    text += `──────────────\n`;
    text += `Subtotal: ₹${subtotal.toFixed(2)}\n`;
    if (appliedCoupon) {
      text += `Discount (${appliedCoupon.code}): -₹${discount.toFixed(2)}\n`;
    }
    text += `Applied GST: ₹${gstAmount.toFixed(2)}\n`;
    text += `*Grand Total: ₹${finalTotal.toFixed(2)}*\n\n`;
    text += `Please verify stock & share payment details for dispatch!`;

    const url = `https://wa.me/919911678386?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <div
        className="cart-drawer-backdrop active"
        onClick={() => setIsCartOpen(false)}
        style={{ display: 'block' }}
      />
      <aside className="cart-drawer active" aria-label="Shopping Cart Drawer">
        {/* Cart Header */}
        <div className="cart-header" style={{ padding: '12px 16px' }}>
          <div className="cart-title" style={{ fontSize: '1rem', fontWeight: 800 }}>
            <ShoppingCartIcon size={18} /> Your Cart (
            <span className="cart-badge-count">{cartCount}</span>)
          </div>
          <button
            type="button"
            className="cart-close-btn"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close Cart"
            style={{ width: '28px', height: '28px' }}
          >
            <XIcon size={16} />
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div className="free-shipping-meter" style={{ padding: '6px 16px', fontSize: '0.74rem' }}>
          <div id="cart-shipping-text" style={{ fontWeight: 700 }}>
            {remainingForFreeShipping > 0
              ? `Add ₹${remainingForFreeShipping.toFixed(0)} more for FREE Shipping (Free on ₹999+)`
              : '🎉 You have qualified for 100% FREE Pan-India Shipping!'}
          </div>
          <div className="shipping-progress-track" style={{ height: '3.5px', marginTop: '4px' }}>
            <div
              className="shipping-progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Items Scrollable Body */}
        <div className="cart-items-body" id="cart-items-container" style={{ padding: '10px 16px', gap: '10px' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '24px 16px', color: 'var(--text-muted)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '6px' }}>📦</div>
              <p style={{ fontWeight: 700, fontSize: '0.95rem', margin: '0 0 4px 0', color: 'var(--text-dark)' }}>
                Your cart is empty
              </p>
              <p style={{ fontSize: '0.78rem', margin: 0 }}>
                Explore our factory direct corrugated boxes, labels, and packaging.
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item-row" style={{ display: 'flex', gap: '10px', padding: '8px 0', borderBottom: '1px solid var(--border-light)' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '50px', height: '50px', objectFit: 'contain', background: '#F8FAFC', borderRadius: '6px', border: '1px solid #E2E8F0', flexShrink: 0 }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '6px' }}>
                    <h4 style={{ margin: 0, fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-dark)', lineHeight: 1.25 }}>
                      {item.title}
                    </h4>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remove ${item.title}`}
                      style={{ background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer', padding: '2px' }}
                    >
                      <Trash2Icon size={14} />
                    </button>
                  </div>

                  {item.dimensions && (
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      Size: {item.dimensions}
                    </div>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
                    <div className="cart-qty-stepper" style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-light)', borderRadius: '4px', height: '24px' }}>
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, -1)}
                        aria-label="Decrease quantity"
                        style={{ padding: '0 6px', background: '#F1F5F9', border: 'none', cursor: 'pointer', height: '100%' }}
                      >
                        <MinusIcon size={10} />
                      </button>
                      <span style={{ padding: '0 6px', fontSize: '0.76rem', fontWeight: 700 }}>
                        {item.qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, 1)}
                        aria-label="Increase quantity"
                        style={{ padding: '0 6px', background: '#F1F5F9', border: 'none', cursor: 'pointer', height: '100%' }}
                      >
                        <PlusIcon size={10} />
                      </button>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--text-dark)' }}>
                        ₹{(item.price * item.qty).toFixed(2)}
                      </span>
                      <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                        <span style={{ color: '#0284C7', fontWeight: 600 }}>{item.gstRate ?? 18}% GST</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* 🌟 SUGGESTED PRODUCTS / REAL DATABASE PRODUCTS CAROUSEL */}
          {suggestedList.length > 0 && (
            <div style={{ padding: '10px 0 4px 0', borderTop: '1px dashed #CBD5E1', marginTop: cart.length > 0 ? '8px' : '2px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.4px' }}>
                  ✨ Suggested For You
                </span>
                <span style={{ fontSize: '0.68rem', color: '#16A34A', fontWeight: 700 }}>+ 1-Click Add</span>
              </div>
              <div style={{ display: 'flex', gap: '7px', overflowX: 'auto', paddingBottom: '4px', scrollbarWidth: 'thin' }}>
                {suggestedList.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      flex: '0 0 120px',
                      background: '#F8FAFC',
                      border: '1px solid #E2E8F0',
                      borderRadius: '6px',
                      padding: '6px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div style={{ width: '100%', height: '52px', background: '#FFFFFF', borderRadius: '4px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '4px' }}>
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        onError={(e: any) => { e.target.src = '/assets/corrugated_box.jpg'; }}
                      />
                    </div>
                    <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#1E293B', lineHeight: 1.15, marginBottom: '3px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', height: '24px' }}>
                      {item.title}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                      <div>
                        <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#0F172A' }}>₹{item.price.toFixed(2)}</span>
                        <span style={{ fontSize: '0.58rem', color: '#64748B' }}>/pc</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleAddSuggested(item)}
                        style={{
                          background: '#16A34A',
                          color: '#FFF',
                          border: 'none',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          fontSize: '0.64rem',
                          fontWeight: 800,
                          cursor: 'pointer',
                          touchAction: 'manipulation'
                        }}
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Compact Cart Footer / Checkout Box */}
        {cart.length > 0 && (
          <div className="cart-footer" style={{ padding: '10px 16px', background: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
            {/* Coupon Code */}
            <form onSubmit={handleApplyCoupon} className="coupon-row" style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
              <input
                type="text"
                className="coupon-input"
                placeholder="COUPON (E.G. WELCOME10)"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                style={{ flex: 1, border: '1px solid #CBD5E1', borderRadius: '5px', padding: '5px 8px', fontSize: '0.74rem', textTransform: 'uppercase', outline: 'none' }}
              />
              <button 
                type="submit" 
                className="coupon-apply-btn" 
                style={{ background: '#B81B54', color: '#FFF', border: 'none', borderRadius: '5px', padding: '5px 12px', fontSize: '0.74rem', fontWeight: 700, cursor: 'pointer' }}
              >
                Apply
              </button>
            </form>

            {appliedCoupon && (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.72rem', color: '#10B981', background: '#ECFDF5', padding: '3px 6px', borderRadius: '4px', marginBottom: '6px' }}>
                <span>Coupon <strong>{appliedCoupon.code}</strong> applied ({appliedCoupon.desc})</span>
                <button
                  type="button"
                  onClick={removeCoupon}
                  style={{ background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer', fontWeight: 700 }}
                >
                  ✕
                </button>
              </div>
            )}

            {/* Totals Breakdown */}
            <div className="cart-totals-breakdown" style={{ display: 'flex', flexDirection: 'column', gap: '3px', fontSize: '0.76rem', marginBottom: '8px' }}>
              <div className="cart-calc-row" style={{ display: 'flex', justifyContent: 'space-between', color: '#475569' }}>
                <span>Subtotal (Excl. GST)</span>
                <span style={{ fontWeight: 600 }}>₹{subtotal.toFixed(2)}</span>
              </div>
              {appliedCoupon && (
                <div className="cart-calc-row" style={{ display: 'flex', justifyContent: 'space-between', color: '#10B981', fontWeight: 700 }}>
                  <span>Discount ({appliedCoupon.code})</span>
                  <span>-₹{discount.toFixed(2)}</span>
                </div>
              )}
              <div className="cart-calc-row" style={{ display: 'flex', justifyContent: 'space-between', color: '#475569' }}>
                <span>Total Applied GST</span>
                <span style={{ fontWeight: 600 }}>₹{gstAmount.toFixed(2)}</span>
              </div>
              <div className="cart-calc-row" style={{ display: 'flex', justifyContent: 'space-between', color: '#475569' }}>
                <span>Shipping / Delivery Charges</span>
                <span style={{ color: '#16A34A', fontWeight: 800 }}>FREE (Pan-India)</span>
              </div>
              <div className="cart-calc-row final-total" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.96rem', fontWeight: 800, color: '#0F172A', borderTop: '1px dashed #CBD5E1', paddingTop: '4px', marginTop: '2px' }}>
                <span>Estimated Grand Total</span>
                <span style={{ color: '#B81B54', fontWeight: 900 }}>₹{finalTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="cart-checkout-actions" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <button
                type="button"
                className="btn-cart-whatsapp"
                onClick={handleWhatsAppCheckout}
                style={{
                  background: '#22C55E',
                  color: '#FFFFFF',
                  border: 'none',
                  fontWeight: 800,
                  fontSize: '0.82rem',
                  padding: '8px 12px',
                  borderRadius: '7px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  boxShadow: '0 2px 6px rgba(34, 197, 94, 0.2)',
                  touchAction: 'manipulation'
                }}
              >
                <WhatsAppIcon size={15} color="#FFFFFF" /> Instant WhatsApp Order Checkout
              </button>
              <button
                type="button"
                className="btn-cart-checkout"
                onClick={() => {
                  setIsCartOpen(false);
                  router.push('/checkout');
                }}
                style={{
                  background: '#9E1647',
                  color: '#FFFFFF',
                  border: 'none',
                  fontWeight: 800,
                  fontSize: '0.82rem',
                  padding: '8px 12px',
                  borderRadius: '7px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  boxShadow: '0 2px 6px rgba(158, 22, 71, 0.2)',
                  touchAction: 'manipulation'
                }}
              >
                <PackageIcon size={15} /> Checkout securely
              </button>
            </div>
          </div>
        )}
      </aside>
    </>
  );
};
