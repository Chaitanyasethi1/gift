'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { ShoppingCartIcon, Trash2Icon, PlusIcon, MinusIcon, ArrowRightIcon, ShieldCheckIcon } from '@/components/Icons';

export default function CartPage() {
  const router = useRouter();
  const {
    cart,
    cartCount,
    updateQty,
    removeFromCart,
    clearCart,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    eligibleItemIds,
    itemDiscounts,
    subtotal,
    discount,
    gstAmount,
    finalTotal
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState<string | null>(null);
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);

  const handleApplyCoupon = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    setIsApplyingCoupon(true);
    setCouponError(null);
    const res = await applyCoupon(couponInput);
    setIsApplyingCoupon(false);
    if (res.success) {
      setCouponInput('');
      setCouponError(null);
    } else {
      setCouponError(res.error || 'Invalid coupon code.');
    }
  };

  if (cart.length === 0) {
    return (
      <div style={{ maxWidth: '800px', margin: '60px auto', padding: '0 20px', textAlign: 'center' }}>
        <div style={{
          background: '#FFF',
          padding: '60px 30px',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          border: '1px solid #E2E8F0'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: '#F1F5F9',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px auto',
            color: '#94A3B8'
          }}>
            <ShoppingCartIcon size={40} />
          </div>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
            Your Cart is Empty
          </h1>
          <p style={{ color: '#64748B', fontSize: '0.95rem', marginBottom: '24px' }}>
            Looks like you haven&apos;t added any packaging materials to your cart yet.
          </p>
          <Link
            href="/shop"
            className="btn-primary-hero"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 28px',
              borderRadius: '8px',
              fontWeight: 700,
              textDecoration: 'none'
            }}
          >
            Browse Products <ArrowRightIcon size={18} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: '#F8FAFC', minHeight: '85vh', padding: '40px 16px' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
        {/* Breadcrumb / Title */}
        <div style={{ marginBottom: '28px' }}>
          <div style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '8px' }}>
            <Link href="/" style={{ color: '#64748B', textDecoration: 'none' }}>Home</Link> / <span>Shopping Cart ({cartCount} items)</span>
          </div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
            Shopping Cart
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'start' }}>
          {/* Left Column: Cart Items List */}
          <div style={{
            background: '#FFF',
            borderRadius: '14px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
            padding: '24px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #F1F5F9', paddingBottom: '16px', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, color: '#1E293B' }}>
                Cart Items ({cart.length})
              </h2>
              <button
                type="button"
                onClick={clearCart}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#94A3B8',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Clear Cart
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {cart.map((item) => {
                const itemDiscount = itemDiscounts[item.id] || 0;
                const isEligible = eligibleItemIds.includes(item.id);
                const originalTotal = item.price * item.qty;
                const discountedTotal = Math.max(0, originalTotal - itemDiscount);

                return (
                  <div
                    key={item.id}
                    style={{
                      display: 'flex',
                      gap: '16px',
                      paddingBottom: '20px',
                      borderBottom: '1px solid #F8FAFC',
                      alignItems: 'flex-start'
                    }}
                  >
                    <img
                      src={item.image || '/assets/corrugated_box.jpg'}
                      alt={item.title}
                      style={{
                        width: '76px',
                        height: '76px',
                        borderRadius: '8px',
                        objectFit: 'cover',
                        border: '1px solid #F1F5F9',
                        flexShrink: 0
                      }}
                    />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#1E293B', marginBottom: '4px', lineHeight: 1.3 }}>
                        {item.title}
                      </h3>
                      <div style={{ fontSize: '0.82rem', color: '#64748B', marginBottom: '8px' }}>
                        Unit Price: ₹{item.price.toFixed(2)} • <span style={{ color: '#0284C7', fontWeight: 600 }}>{item.gstRate ?? 18}% GST</span>
                      </div>

                      {appliedCoupon && isEligible && itemDiscount > 0 && (
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          background: '#ECFDF5',
                          color: '#065F46',
                          border: '1px solid #A7F3D0',
                          borderRadius: '6px',
                          padding: '3px 8px',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          marginBottom: '8px'
                        }}>
                          🏷️ Coupon {appliedCoupon.code} applied: -₹{itemDiscount.toFixed(2)}
                        </div>
                      )}

                      {/* Quantity Controls */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '6px' }}>
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          border: '1px solid #CBD5E1',
                          borderRadius: '6px',
                          background: '#F8FAFC'
                        }}>
                          <button
                            type="button"
                            onClick={() => updateQty(item.id, item.qty - ((item as any).packQty || 1))}
                            disabled={item.qty <= ((item as any).packQty || 1)}
                            style={{
                              padding: '6px 10px',
                              background: 'none',
                              border: 'none',
                              cursor: item.qty <= ((item as any).packQty || 1) ? 'not-allowed' : 'pointer',
                              color: item.qty <= ((item as any).packQty || 1) ? '#CBD5E1' : '#475569'
                            }}
                          >
                            <MinusIcon size={14} />
                          </button>
                          <span style={{ minWidth: '36px', textAlign: 'center', fontWeight: 700, fontSize: '0.88rem' }}>
                            {item.qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQty(item.id, item.qty + ((item as any).packQty || 1))}
                            style={{
                              padding: '6px 10px',
                              background: 'none',
                              border: 'none',
                              cursor: 'pointer',
                              color: '#475569'
                            }}
                          >
                            <PlusIcon size={14} />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#EF4444',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '0.82rem',
                            fontWeight: 600,
                            cursor: 'pointer'
                          }}
                        >
                          <Trash2Icon size={14} /> Remove
                        </button>
                      </div>
                    </div>

                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      {appliedCoupon && isEligible && itemDiscount > 0 ? (
                        <>
                          <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0F172A' }}>
                            ₹{discountedTotal.toFixed(2)}
                          </div>
                          <div style={{ fontSize: '0.82rem', color: '#94A3B8', textDecoration: 'line-through' }}>
                            ₹{originalTotal.toFixed(2)}
                          </div>
                        </>
                      ) : (
                        <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0F172A' }}>
                          ₹{originalTotal.toFixed(2)}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Order Summary & Coupon */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Coupon Card */}
            <div style={{
              background: '#FFF',
              borderRadius: '14px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
              padding: '20px'
            }}>
              <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#1E293B', marginBottom: '12px' }}>
                Have a coupon code?
              </h3>

              {appliedCoupon ? (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  background: '#ECFDF5',
                  border: '1px solid #A7F3D0',
                  borderRadius: '8px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '1.2rem' }}>🎉</span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#065F46' }}>
                        Coupon <span style={{ fontFamily: 'monospace', letterSpacing: '0.5px' }}>{appliedCoupon.code}</span> Applied
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#047857' }}>
                        {(appliedCoupon.discountType || (appliedCoupon as any).discount_type) === 'percentage'
                          ? `${appliedCoupon.discountValue || (appliedCoupon as any).discount_value}% OFF`
                          : `Flat ₹${appliedCoupon.discountValue || (appliedCoupon as any).discount_value} OFF`}
                        {' '}(Saved ₹{discount.toFixed(2)})
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={removeCoupon}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#DC2626',
                      fontWeight: 700,
                      fontSize: '0.82rem',
                      cursor: 'pointer',
                      padding: '4px 8px',
                      borderRadius: '4px'
                    }}
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '8px' }}>
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => {
                      setCouponInput(e.target.value.toUpperCase());
                      if (couponError) setCouponError(null);
                    }}
                    placeholder="Enter code (e.g. AS20)"
                    style={{
                      flex: 1,
                      padding: '10px 14px',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      border: couponError ? '1.5px solid #EF4444' : '1px solid #CBD5E1',
                      borderRadius: '8px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      outline: 'none'
                    }}
                  />
                  <button
                    type="submit"
                    disabled={isApplyingCoupon || !couponInput.trim()}
                    style={{
                      padding: '10px 20px',
                      background: isApplyingCoupon || !couponInput.trim() ? '#94A3B8' : '#1E293B',
                      color: '#FFF',
                      border: 'none',
                      borderRadius: '8px',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      cursor: isApplyingCoupon || !couponInput.trim() ? 'not-allowed' : 'pointer',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {isApplyingCoupon ? 'Applying...' : 'Apply'}
                  </button>
                </form>
              )}

              {couponError && (
                <div style={{ marginTop: '10px', color: '#DC2626', fontSize: '0.82rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span>⚠️</span> {couponError}
                </div>
              )}
            </div>

            {/* Price Summary Card */}
            <div style={{
              background: '#FFF',
              borderRadius: '14px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
              padding: '24px'
            }}>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0 0 16px 0', color: '#1E293B' }}>
                Order Summary
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569', fontSize: '0.92rem' }}>
                  <span>Subtotal (Excl. Tax)</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>

                {appliedCoupon && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#10B981', fontWeight: 700, fontSize: '0.92rem' }}>
                    <span>Coupon {appliedCoupon.code} (-₹{discount.toFixed(2)})</span>
                    <span>-₹{discount.toFixed(2)}</span>
                  </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569', fontSize: '0.92rem' }}>
                  <span>Total Applied GST</span>
                  <span>₹{gstAmount.toFixed(2)}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569', fontSize: '0.92rem' }}>
                  <span>Shipping Charges</span>
                  <span style={{ color: '#16A34A', fontWeight: 700 }}>FREE (Pan-India)</span>
                </div>

                <div style={{
                  borderTop: '1px solid #E2E8F0',
                  paddingTop: '16px',
                  marginTop: '8px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline'
                }}>
                  <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A' }}>Grand Total</span>
                  <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A' }}>₹{finalTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => router.push('/checkout')}
                className="btn-primary-hero"
                style={{
                  width: '100%',
                  marginTop: '20px',
                  padding: '14px',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  border: 'none',
                  boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)'
                }}
              >
                Proceed to Checkout <ArrowRightIcon size={18} />
              </button>

              <div style={{
                marginTop: '16px',
                background: '#F8FAFC',
                padding: '10px 14px',
                borderRadius: '8px',
                fontSize: '0.8rem',
                color: '#64748B',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <ShieldCheckIcon size={20} color="#10B981" />
                <span>Safe & Secure Pan-India Checkout with GST Invoice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
