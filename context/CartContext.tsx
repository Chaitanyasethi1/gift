'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
  id: string;
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

export interface Coupon {
  code: string;
  rate: number;
  desc: string;
}

interface CartContextType {
  cart: CartItem[];
  cartCount: number;
  addToCart: (item: Omit<CartItem, 'qty'>, quantity?: number) => void;
  updateQty: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  appliedCoupon: Coupon | null;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
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
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
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
      const saved = localStorage.getItem('as_cart');
      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Error loading cart from localStorage', e);
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem('as_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Error saving cart to localStorage', e);
    }
  }, [cart, isLoaded]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const addToCart = (item: Omit<CartItem, 'qty'>, quantity = 1) => {
    const rawGst = item.gstRate as any;
    const parsedItemGst = (rawGst !== null && rawGst !== undefined && rawGst !== '')
      ? (typeof rawGst === 'number' ? rawGst : (parseFloat(String(rawGst).replace(/[^0-9.]/g, '')) || 18))
      : 18;

    setCart(prev => {
      const existing = prev.find(c => c.id === item.id);
      if (existing) {
        return prev.map(c => c.id === item.id ? { ...c, qty: c.qty + quantity, gstRate: parsedItemGst } : c);
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
  };

  const applyCoupon = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'WELCOME10') {
      const c = { code: 'WELCOME10', rate: 0.10, desc: '10% Welcome Discount' };
      setAppliedCoupon(c);
      showToast('🎉 Coupon WELCOME10 applied! 10% discount added.');
      return true;
    } else if (cleanCode === 'BULK20') {
      const c = { code: 'BULK20', rate: 0.20, desc: '20% Bulk Order Discount' };
      setAppliedCoupon(c);
      showToast('🔥 Coupon BULK20 applied! 20% discount added.');
      return true;
    }
    showToast('Invalid coupon. Try WELCOME10 or BULK20');
    return false;
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast('Coupon removed');
  };

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discount = appliedCoupon ? subtotal * appliedCoupon.rate : 0;
  const discountMultiplier = appliedCoupon ? (1 - appliedCoupon.rate) : 1;

  // Exact Item-Wise Dynamic GST calculation based on each product's specific GST Rate (0%, 5%, 12%, 18%, 28%)
  const gstAmount = cart.reduce((sum, item) => {
    const rawRate = item.gstRate as any;
    const rate = (rawRate !== null && rawRate !== undefined && rawRate !== '')
      ? (typeof rawRate === 'number' ? rawRate : (parseFloat(String(rawRate).replace(/[^0-9.]/g, '')) ?? 18))
      : 18;
    const itemSubtotal = item.price * item.qty * discountMultiplier;
    return sum + (itemSubtotal * (rate / 100));
  }, 0);

  const finalTotal = subtotal - discount + gstAmount;


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
