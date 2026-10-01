'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { XIcon, TruckIcon, CheckCircleIcon } from './Icons';

export const PincodeModal: React.FC = () => {
  const { isPincodeModalOpen, setIsPincodeModalOpen } = useCart();
  const [pincode, setPincode] = useState('');
  const [result, setResult] = useState<{ serviceable: boolean; message: string; timeline: string } | null>(null);

  useEffect(() => {
    if (!isPincodeModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsPincodeModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPincodeModalOpen, setIsPincodeModalOpen]);

  if (!isPincodeModalOpen) return null;

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPin = pincode.trim().replace(/\D/g, '');
    if (cleanPin.length !== 6) {
      setResult({
        serviceable: false,
        message: 'Please enter a valid 6-digit Indian postal code.',
        timeline: ''
      });
      return;
    }

    const firstTwo = cleanPin.substring(0, 2);
    // Delhi NCR (11, 20)
    if (['11', '20'].includes(firstTwo)) {
      setResult({
        serviceable: true,
        message: 'Direct Factory Dispatch: Delhi NCR Express Zone (Delhi, Noida, Ghaziabad, Gurgaon, Faridabad).',
        timeline: '⚡ Same-Day / Next-Day Factory Delivery'
      });
    } else if (['12', '13', '14', '15', '16', '24', '30', '31', '32'].includes(firstTwo)) {
      // North India
      setResult({
        serviceable: true,
        message: 'Pan-India Surface & Air Logistics: Haryana, Punjab, Rajasthan, U.P.',
        timeline: '🚚 1 - 2 Business Days via BlueDart / Delhivery Surface'
      });
    } else {
      // Rest of India
      setResult({
        serviceable: true,
        message: 'Pan-India Delivery: Covered under SafeXpress, DTDC Air, and Delhivery Cargo.',
        timeline: '📦 2 - 4 Business Days with Live Tracking'
      });
    }
  };

  return (
    <div
      className="modal-backdrop active"
      onClick={() => setIsPincodeModalOpen(false)}
      style={{ display: 'flex' }}
    >
      <div
        className="modal-window"
        style={{ maxWidth: '480px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={() => setIsPincodeModalOpen(false)}
          aria-label="Close Delivery Checker"
        >
          <XIcon size={18} />
        </button>
        <div className="form-modal-inner">
          <h3 className="form-modal-title">Check Delivery Availability</h3>
          <p className="form-modal-sub">
            Enter your 6-digit Indian PIN code to view delivery speed and courier transit times from our Ghaziabad unit.
          </p>

          <form onSubmit={handleVerify} className="modal-form-grid">
            <div className="form-field-group">
              <label htmlFor="pincode-input">Delivery Pincode</label>
              <input
                type="text"
                id="pincode-input"
                placeholder="e.g. 110001, 201001 or 400001"
                maxLength={6}
                value={pincode}
                onChange={(e) => {
                  setPincode(e.target.value);
                  if (result) setResult(null);
                }}
                required
              />
            </div>
            <button
              type="submit"
              className="btn-primary-hero"
              style={{ justifyContent: 'center', padding: '12px' }}
            >
              <TruckIcon size={16} /> Verify Serviceability &rarr;
            </button>

            {result && (
              <div
                style={{
                  marginTop: '14px',
                  padding: '14px',
                  borderRadius: 'var(--radius-sm)',
                  background: result.serviceable ? '#ECFDF5' : '#FEF2F2',
                  border: `1px solid ${result.serviceable ? '#10B981' : '#EF4444'}`
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  {result.serviceable ? (
                    <CheckCircleIcon size={18} color="#10B981" />
                  ) : (
                    <XIcon size={18} />
                  )}
                  <strong style={{ color: result.serviceable ? '#065F46' : '#991B1B', fontSize: '0.9rem' }}>
                    {result.serviceable ? 'Pincode Serviceable!' : 'Invalid Pincode'}
                  </strong>
                </div>
                <p style={{ margin: '4px 0 0 0', fontSize: '0.82rem', color: result.serviceable ? '#047857' : '#B91C1C' }}>
                  {result.message}
                </p>
                {result.timeline && (
                  <p style={{ margin: '6px 0 0 0', fontSize: '0.85rem', fontWeight: 700, color: '#065F46' }}>
                    {result.timeline}
                  </p>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
