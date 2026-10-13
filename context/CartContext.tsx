'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

export interface CartItem {
  id: string;
  productId?: string;
  slug?: string;
  category?: string;
  categoryId?: string;
  title: string;
  price: number;
  qty: number;
  image: string;
  specs?: string[];
  dimensions?: string;
  size?: string | null;
  logo?: string | null;
  isCustomBox?: boolean;
  gstRate?: number;
}

export interface AppliedCoupon {
  code: string;
  discountType: 'percentage' | 'flat';
  discountValue: number;
  maxDiscountCap?: number | null;
  appliesTo: 'all' | 'categories' | 'products';
  discountTotal: number;
  eligibleItemIds: string[];
  itemDiscounts: Record<string, number>;
  desc?: string;
  bannerText?: string | null;
}

// Backward compatibility alias for Coupon
export type Coupon = AppliedCoupon;

interface CartContextType {
  cart: CartItem[];
  cartCount: number;
  addToCart: (item: Omit<CartItem, 'qty'>, quantity?: number) => void;
  updateQty: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  appliedCoupon: AppliedCoupon | null;
  applyCoupon: (code: string) => Promise<{ success: boolean; message?: string; error?: string }>;
  removeCoupon: () => void;
  eligibleItemIds: string[];
  itemDiscounts: Record<string, number>;
  subtotal: number;
  discount: number;
  gstAmount: number;
  finalTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCategoryDrawerOpen: boolean;
  setIsCategoryDrawerOpen: (open: boolean) => void;
  isQuoteModalOpen: boolean;
  setIsQuoteModalOpen: (open: boolean) => void;
  isSampleModalOpen: boolean;
  setIsSampleModalOpen: (open: boolean) => void;
  isPincodeModalOpen: boolean;
  setIsPincodeModalOpen: (open: boolean) => void;
  selectedQuoteProduct: string;
  setSelectedQuoteProduct: (product: string) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  isLoaded: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [appliedCoupon, setAppliedCoupon] = useState<AppliedCoupon | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCategoryDrawerOpen, setIsCategoryDrawerOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const [isPincodeModalOpen, setIsPincodeModalOpen] = useState(false);
  const [selectedQuoteProduct, setSelectedQuoteProduct] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on client mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('as_cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }

      const savedCoupon = localStorage.getItem('as_applied_coupon');
      if (savedCoupon) {
        setAppliedCoupon(JSON.parse(savedCoupon));
      }
    } catch (e) {
      console.error('Error loading cart/coupon from localStorage', e);
    }
    setIsLoaded(true);
  }, []);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem('as_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Error saving cart to localStorage', e);
    }
  }, [cart, isLoaded]);

  // Save coupon to localStorage whenever appliedCoupon changes
  useEffect(() => {
    if (!isLoaded) return;
    try {
      if (appliedCoupon) {
        localStorage.setItem('as_applied_coupon', JSON.stringify(appliedCoupon));
      } else {
        localStorage.removeItem('as_applied_coupon');
      }
    } catch (e) {
      console.error('Error saving coupon to localStorage', e);
    }
  }, [appliedCoupon, isLoaded]);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  }, []);

  const addToCart = (item: Omit<CartItem, 'qty'>, quantity = 1) => {
    const rawGst = item.gstRate as any;
    const parsedItemGst = (rawGst !== null && rawGst !== undefined && rawGst !== '')
      ? (typeof rawGst === 'number' ? rawGst : (parseFloat(String(rawGst).replace(/[^0-9.]/g, '')) || 18))
      : 18;

    setCart(prev => {
      const existing = prev.find(c => c.id === item.id);
      if (existing) {
        return prev.map(c => c.id === item.id ? { 
          ...c, 
          qty: c.qty + quantity, 
          gstRate: parsedItemGst,
          category: item.category || c.category,
          categoryId: item.categoryId || c.categoryId,
          slug: item.slug || c.slug
        } : c);
      }
      return [...prev, { ...item, qty: quantity, gstRate: parsedItemGst }];
    });
    showToast(`Added ${item.title} to cart!`);
    setIsCartOpen(true);
  };

  const updateQty = (id: string, delta: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === id) {
          const newQty = item.qty + delta;
          return newQty > 0 ? { ...item, qty: newQty } : null;
        }
        return item;
      }).filter(Boolean) as CartItem[];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(c => c.id !== id));
    showToast('Item removed from cart');
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
  };

  // Re-validate coupon whenever cart items change to keep discounts strictly synchronized
  useEffect(() => {
    if (!isLoaded) return;
    if (cart.length === 0) {
      if (appliedCoupon) setAppliedCoupon(null);
      return;
    }

    if (appliedCoupon && appliedCoupon.code) {
      // Background re-validation against current cart
      fetch('/api/coupons/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: appliedCoupon.code, cart })
      })
        .then(res => res.json())
        .then(data => {
          if (data.valid) {
            setAppliedCoupon(prev => prev ? {
              ...prev,
              discountTotal: data.discountTotal,
              eligibleItemIds: data.eligibleItemIds || [],
              itemDiscounts: data.itemDiscounts || {}
            } : null);
          } else {
            // Coupon no longer valid (e.g. min order no longer met or no eligible items)
            setAppliedCoupon(null);
            showToast(`Coupon ${appliedCoupon.code} removed: ${data.error}`);
          }
        })
        .catch(() => {});
    }
  }, [cart, isLoaded]); // eslint-disable-line react-hooks/exhaustive-deps

  const applyCoupon = async (rawCode: string): Promise<{ success: boolean; message?: string; error?: string }> => {
    const code = (rawCode || '').trim().toUpperCase();
    if (!code) {
      const err = 'Please enter a coupon code.';
      showToast(err);
      return { success: false, error: err };
    }

    if (cart.length === 0) {
      const err = 'Your cart is empty. Add products to apply a coupon.';
      showToast(err);
      return { success: false, error: err };
    }

    try {
      const res = await fetch('/api/coupons/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, cart })
      });

      const data = await res.json();

      if (res.ok && data.valid) {
        const couponData: AppliedCoupon = {
          code: data.coupon.code,
          discountType: data.coupon.discount_type,
          discountValue: data.coupon.discount_value,
          maxDiscountCap: data.coupon.max_discount_cap,
          appliesTo: data.coupon.applies_to,
          discountTotal: data.discountTotal,
          eligibleItemIds: data.eligibleItemIds || [],
          itemDiscounts: data.itemDiscounts || {},
          desc: data.coupon.discount_type === 'percentage' 
            ? `${data.coupon.discount_value}% OFF`
            : `Flat ₹${data.coupon.discount_value} OFF`,
          bannerText: data.coupon.banner_text
        };

        setAppliedCoupon(couponData);
        const successMsg = `🎉 Coupon ${couponData.code} applied! (-₹${data.discountTotal.toFixed(2)})`;
        showToast(successMsg);
        return { success: true, message: successMsg };
      } else {
        const errorMsg = data.error || `Invalid coupon "${code}".`;
        showToast(errorMsg);
        return { success: false, error: errorMsg };
      }
    } catch (err: any) {
      const errorMsg = err.message || 'Failed to validate coupon. Please try again.';
      showToast(errorMsg);
      return { success: false, error: errorMsg };
    }
  };

  const removeCoupon = () => {
    if (appliedCoupon) {
      const code = appliedCoupon.code;
      setAppliedCoupon(null);
      showToast(`Coupon ${code} removed`);
    }
  };

  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.qty, 0), [cart]);
  const subtotal = useMemo(() => cart.reduce((sum, item) => sum + (item.price * item.qty), 0), [cart]);

  const eligibleItemIds = useMemo(() => appliedCoupon?.eligibleItemIds || [], [appliedCoupon]);
  const itemDiscounts = useMemo(() => appliedCoupon?.itemDiscounts || {}, [appliedCoupon]);
  const discount = useMemo(() => {
    if (!appliedCoupon) return 0;
    return appliedCoupon.discountTotal || 0;
  }, [appliedCoupon]);

  // Exact Item-Wise Dynamic GST calculation based on each product's specific GST Rate (0%, 5%, 12%, 18%, 28%)
  // calculated accurately on post-discount taxable amounts
  const gstAmount = useMemo(() => {
    return cart.reduce((sum, item) => {
      const rawRate = item.gstRate as any;
      const rate = (rawRate !== null && rawRate !== undefined && rawRate !== '')
        ? (typeof rawRate === 'number' ? rawRate : (parseFloat(String(rawRate).replace(/[^0-9.]/g, '')) ?? 18))
        : 18;

      const itemGross = item.price * item.qty;
      const itemDisc = itemDiscounts[item.id] || 0;
      const itemTaxable = Math.max(0, itemGross - itemDisc);

      return sum + (itemTaxable * (rate / 100));
    }, 0);
  }, [cart, itemDiscounts]);

  // Grand total can never go below 0
  const finalTotal = useMemo(() => {
    return Math.max(0, subtotal - discount + gstAmount);
  }, [subtotal, discount, gstAmount]);

  return (
    <CartContext.Provider value={{
      cart,
      cartCount,
      addToCart,
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
      finalTotal,
      isCartOpen,
      setIsCartOpen,
      isCategoryDrawerOpen,
      setIsCategoryDrawerOpen,
      isQuoteModalOpen,
      setIsQuoteModalOpen,
      isSampleModalOpen,
      setIsSampleModalOpen,
      isPincodeModalOpen,
      setIsPincodeModalOpen,
      selectedQuoteProduct,
      setSelectedQuoteProduct,
      toastMessage,
      showToast,
      isLoaded
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
