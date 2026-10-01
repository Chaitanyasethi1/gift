'use client';

import React, { useState } from 'react';
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

interface CartProps {
  onOpenCheckoutModal?: () => void;
}

export const Cart: React.FC<CartProps> = ({ onOpenCheckoutModal }) => {
  const {
    cart,
    cartCount,
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

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    let itemsList = cart
      .map(
        (item, i) =>
          `${i + 1}. *${item.title}*\n   Qty: ${item.qty} pcs | Rate: ₹${item.price.toFixed(2)}/pc | Total: ₹${(item.price * item.qty).toFixed(2)}${
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
    text += `GST (18%): ₹${gstAmount.toFixed(2)}\n`;
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
        <div className="cart-header">
          <div className="cart-title">
            <ShoppingCartIcon size={20} /> Your Packaging Cart (
            <span className="cart-badge-count">{cartCount}</span>)
          </div>
          <button
            type="button"
            className="cart-close-btn"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close Cart"
          >
            <XIcon size={18} />
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div className="free-shipping-meter">
          <div id="cart-shipping-text">
            {remainingForFreeShipping > 0
              ? `Add ₹${remainingForFreeShipping.toFixed(0)} more for FREE Pan-India Shipping`
              : '🎉 You have qualified for FREE Shipping!'}
          </div>
          <div className="shipping-progress-track">
            <div
              className="shipping-progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Items Scrollable Body */}
        <div className="cart-items-body" id="cart-items-container">
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '48px 20px', color: 'var(--text-muted)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '12px' }}>📦</div>
              <p style={{ fontWeight: 700, fontSize: '1.1rem', margin: '0 0 6px 0', color: 'var(--text-dark)' }}>
                Your cart is empty
              </p>
              <p style={{ fontSize: '0.85rem', margin: 0 }}>
                Explore our factory direct corrugated boxes, labels, and packaging.
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item-row" style={{ display: 'flex', gap: '12px', padding: '14px 0', borderBottom: '1px solid var(--border-light)' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: 'var(--radius-sm, 6px)', flexShrink: 0 }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                    <h4 style={{ margin: 0, fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-dark)', lineHeight: 1.3 }}>
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
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      Size: {item.dimensions}
                    </div>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                    <div className="cart-qty-stepper" style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-light)', borderRadius: '4px' }}>
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, -1)}
                        aria-label="Decrease quantity"
                        style={{ padding: '3px 8px', background: '#F1F5F9', border: 'none', cursor: 'pointer' }}
                      >
                        <MinusIcon size={12} />
                      </button>
                      <span style={{ padding: '0 10px', fontSize: '0.85rem', fontWeight: 700 }}>
                        {item.qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, 1)}
                        aria-label="Increase quantity"
                        style={{ padding: '3px 8px', background: '#F1F5F9', border: 'none', cursor: 'pointer' }}
                      >
                        <PlusIcon size={12} />
                      </button>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-dark)' }}>
                        ₹{(item.price * item.qty).toFixed(2)}
                      </span>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        ₹{item.price.toFixed(2)}/pc
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Footer */}
        {cart.length > 0 && (
          <div className="cart-footer">
            {/* Coupon Code */}
            <form onSubmit={handleApplyCoupon} className="coupon-row">
              <input
                type="text"
                className="coupon-input"
                placeholder="Coupon (e.g. WELCOME10)"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button type="submit" className="coupon-apply-btn">
                Apply
              </button>
            </form>

            {appliedCoupon && (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: '#10B981', background: '#ECFDF5', padding: '6px 10px', borderRadius: '4px', marginBottom: '10px' }}>
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
            <div className="cart-totals-breakdown">
              <div className="cart-calc-row">
                <span>Subtotal (Excl. GST)</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              {appliedCoupon && (
                <div className="cart-calc-row" style={{ color: '#10B981', fontWeight: 700 }}>
                  <span>Discount ({appliedCoupon.code})</span>
                  <span>-₹{discount.toFixed(2)}</span>
                </div>
              )}
              <div className="cart-calc-row">
                <span>Estimated GST (18%)</span>
                <span>₹{gstAmount.toFixed(2)}</span>
              </div>
              <div className="cart-calc-row final-total">
                <span>Estimated Grand Total</span>
                <span style={{ color: 'var(--primary)' }}>₹{finalTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="cart-checkout-actions">
              <button
                type="button"
                className="btn-cart-whatsapp"
                onClick={handleWhatsAppCheckout}
              >
                <WhatsAppIcon size={16} color="#FFFFFF" /> Instant WhatsApp Order Checkout
              </button>
              <button
                type="button"
                className="btn-cart-checkout"
                onClick={() => {
                  setIsCartOpen(false);
                  if (onOpenCheckoutModal) onOpenCheckoutModal();
                }}
              >
                <PackageIcon size={16} /> Enter Delivery Details &amp; Order
              </button>
            </div>
          </div>
        )}
      </aside>
    </>
  );
};
