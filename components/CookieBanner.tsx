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
        bottom: 0,
        left: 0,
        right: 0,
        background: '#0F172A',
        color: '#FFFFFF',
        padding: '20px',
        zIndex: 9999,
        boxShadow: '0 -4px 10px rgba(0,0,0,0.2)'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          maxWidth: '1200px'
        }}
      >
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', color: '#FFFFFF' }}>
            🍪 We value your privacy
          </h4>
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#CBD5E1', lineHeight: '1.5' }}>
            We use strictly essential cookies to maintain your shopping cart and session (e.g. <code>as_cart</code>).
            No third-party advertising trackers are used. Analytics is only enabled if you choose &ldquo;Accept All&rdquo;.
            Read our{' '}
            <Link href="/cookies" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
              Cookie Policy
            </Link>
            .
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button
            type="button"
            id="cookie-accept-all"
            onClick={handleAcceptAll}
            style={{
              background: 'var(--primary)',
              color: '#000',
              border: 'none',
              padding: '8px 16px',
              fontWeight: 700,
              borderRadius: 'var(--radius-sm, 6px)',
              cursor: 'pointer'
            }}
          >
            Accept All
          </button>
          <button
            type="button"
            id="cookie-reject-all"
            onClick={handleRejectAll}
            style={{
              background: 'transparent',
              color: '#FFFFFF',
              border: '1px solid #475569',
              padding: '8px 16px',
              fontWeight: 600,
              borderRadius: 'var(--radius-sm, 6px)',
              cursor: 'pointer'
            }}
          >
            Reject Non-Essential
          </button>
          <Link
            href="/cookies"
            style={{
              background: 'transparent',
              color: '#94A3B8',
              border: 'none',
              textDecoration: 'underline',
              padding: '8px',
              fontSize: '0.85rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center'
            }}
          >
            Customize
          </Link>
        </div>
      </div>
    </div>
  );
};
