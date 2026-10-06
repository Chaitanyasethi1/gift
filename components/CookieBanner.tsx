'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('as_cookie_consent');
      if (!consent) {
        setIsVisible(true);
      } else if (consent === 'accepted') {
        loadGA4();
      }
    } catch (e) {
      // localStorage might be unavailable in some private windows
    }
  }, []);

  const loadGA4 = () => {
    if (!siteConfig.gaMeasurementId || typeof window === 'undefined') return;
    if (document.getElementById('ga-script')) return; // Already loaded

    const script = document.createElement('script');
    script.id = 'ga-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaMeasurementId}`;
    document.head.appendChild(script);

    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    (window as any).gtag = gtag;
    gtag('js', new Date());
    gtag('config', siteConfig.gaMeasurementId, {
      anonymize_ip: true
    });
  };

  const handleAcceptAll = () => {
    try {
      localStorage.setItem('as_cookie_consent', 'accepted');
    } catch (e) {}
    setIsVisible(false);
    loadGA4();
  };

  const handleRejectAll = () => {
    try {
      localStorage.setItem('as_cookie_consent', 'rejected');
    } catch (e) {}
    setIsVisible(false);
    // Truly block analytics - do not inject GA script
  };

  if (!isVisible) return null;

  return (
    <div
      id="cookie-consent-banner"
      style={{
        position: 'fixed',
        bottom: '80px',
        right: '16px',
        maxWidth: '380px',
        background: '#0F172A',
        color: '#FFFFFF',
        padding: '16px 18px',
        borderRadius: '12px',
        zIndex: 2000,
        boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)',
        border: '1px solid #334155',
        touchAction: 'manipulation'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div>
          <h4 style={{ margin: '0 0 4px 0', fontSize: '0.95rem', color: '#FFFFFF', fontWeight: 700 }}>
            🍪 Cookie Settings
          </h4>
          <p style={{ margin: 0, fontSize: '0.8rem', color: '#94A3B8', lineHeight: '1.4' }}>
            We use essential cookies for your shopping cart. Analytics cookies help us improve our factory store.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          <button
            type="button"
            id="cookie-accept-all"
            onClick={handleAcceptAll}
            style={{
              background: '#B81B54',
              color: '#FFFFFF',
              border: 'none',
              padding: '6px 14px',
              fontSize: '0.8rem',
              fontWeight: 700,
              borderRadius: '6px',
              cursor: 'pointer',
              touchAction: 'manipulation'
            }}
          >
            Accept
          </button>
          <button
            type="button"
            id="cookie-reject-all"
            onClick={handleRejectAll}
            style={{
              background: 'transparent',
              color: '#94A3B8',
              border: '1px solid #475569',
              padding: '6px 12px',
              fontSize: '0.8rem',
              fontWeight: 600,
              borderRadius: '6px',
              cursor: 'pointer',
              touchAction: 'manipulation'
            }}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};
