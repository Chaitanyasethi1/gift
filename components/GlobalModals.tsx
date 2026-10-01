'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Cart } from './Cart';
import { QuoteModal } from './QuoteModal';
import { SampleKitModal } from './SampleKitModal';
import { PincodeModal } from './PincodeModal';
import { CheckoutModal } from './CheckoutModal';

export const GlobalModals: React.FC = () => {
  const { toastMessage } = useCart();
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  return (
    <>
      {/* Slide-Out Shopping Cart Drawer */}
      <Cart onOpenCheckoutModal={() => setIsCheckoutModalOpen(true)} />

      {/* Bulk Quote Modal */}
      <QuoteModal />

      {/* Free Sample Swatch Kit Modal */}
      <SampleKitModal />

      {/* Pincode Serviceability Modal */}
      <PincodeModal />

      {/* Checkout Delivery Details Modal */}
      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div
          className="live-order-ticker-toast"
          style={{
            position: 'fixed',
            bottom: '80px',
            right: '24px',
            background: '#0F172A',
            color: '#FFFFFF',
            padding: '12px 18px',
            borderRadius: '8px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            zIndex: 9998,
            fontSize: '0.88rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            animation: 'fadeInUp 0.3s ease'
          }}
        >
          <span>✅</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </>
  );
};
