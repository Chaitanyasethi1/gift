'use client';

import React, { useState, useEffect } from 'react';
import { siteConfig } from '@/data/siteConfig';

export const CookiesClient: React.FC = () => {
  const [currentConsent, setCurrentConsent] = useState<string>('unselected');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('as_cookie_consent');
      if (saved) setCurrentConsent(saved);
    } catch (e) {}
  }, []);

  const handleUpdate = (choice: 'accepted' | 'rejected') => {
    try {
      localStorage.setItem('as_cookie_consent', choice);
      setCurrentConsent(choice);
      if (choice === 'accepted') {
        window.location.reload();
      } else {
        alert('Non-essential cookies have been rejected. Analytics tracking is blocked.');
      }
    } catch (e) {}
  };

  return (
    <div style={{ padding: '50px 0 70px', background: '#FAFAFC' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: 'var(--radius-xl, 16px)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
          
          <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '20px', marginBottom: '28px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary)', letterSpacing: '0.5px' }}>
              Transparency &amp; Preferences
            </span>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-dark)', marginTop: '6px', marginBottom: 0 }}>
              Cookie Policy
            </h1>
          </div>

          <h2 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-dark)' }}>
            1. What Are Cookies?
          </h2>
          <p style={{ marginBottom: '20px', lineHeight: 1.6, color: 'var(--text-body)' }}>
            Cookies and browser storage mechanisms are small data files stored in your web browser that allow web applications to remember your preferences and cart contents across pages.
          </p>

          <h2 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-dark)' }}>
            2. Strictly Essential Cookies &amp; Storage
          </h2>
          <p style={{ marginBottom: '14px', lineHeight: 1.6, color: 'var(--text-body)' }}>
            These keys are strictly required for our shopping cart and order forms to function properly:
          </p>
          <div style={{ background: 'var(--off-white)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border-light)', marginBottom: '24px' }}>
            <div style={{ marginBottom: '10px' }}>
              <code>as_cart</code> &mdash; Stores your selected packaging product items, customized box dimensions, and quantities in local storage so your cart is not lost when navigating between pages.
            </div>
            <div>
              <code>as_cookie_consent</code> &mdash; Remembers your privacy preference (&ldquo;accepted&rdquo; or &ldquo;rejected&rdquo;) so you do not see the consent banner repeatedly.
            </div>
          </div>

          <h2 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-dark)' }}>
            3. Non-Essential Analytics Cookies (GA4)
          </h2>
          <p style={{ marginBottom: '20px', lineHeight: 1.6, color: 'var(--text-body)' }}>
            We only load Google Analytics 4 (<code>_ga</code>, <code>_ga_*</code>) if you explicitly choose &ldquo;Accept All&rdquo; on our banner. If you choose &ldquo;Reject Non-Essential&rdquo;, no analytics scripts are loaded, and your activity is completely untracked. We do not use third-party advertising retargeting pixels (such as Meta or TikTok pixels).
          </p>

          <h2 style={{ fontSize: '1.2rem', marginBottom: '12px', color: 'var(--text-dark)' }}>
            4. Manage Your Current Cookie Preferences
          </h2>
          <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: '10px', border: '1px solid #E2E8F0', marginBottom: '24px' }}>
            <div style={{ fontSize: '0.9rem', marginBottom: '12px', color: '#334155' }}>
              Current Status:{' '}
              <strong style={{ color: currentConsent === 'accepted' ? '#10B981' : currentConsent === 'rejected' ? '#EF4444' : '#F59E0B' }}>
                {currentConsent.toUpperCase()}
              </strong>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn-primary-hero"
                onClick={() => handleUpdate('accepted')}
                style={{ padding: '8px 18px', fontSize: '0.85rem' }}
              >
                Accept All Cookies
              </button>
              <button
                type="button"
                className="btn-outline-hero"
                onClick={() => handleUpdate('rejected')}
                style={{ padding: '8px 18px', fontSize: '0.85rem' }}
              >
                Reject Non-Essential
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
