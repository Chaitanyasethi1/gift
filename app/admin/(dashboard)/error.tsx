'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function AdminDashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Admin Dashboard caught error:', error);
  }, [error]);

  return (
    <div style={{
      maxWidth: '680px',
      margin: '60px auto',
      background: '#ffffff',
      border: '1px solid #fee2e2',
      borderRadius: '16px',
      padding: '36px',
      boxShadow: '0 10px 25px -5px rgba(239, 68, 68, 0.1)',
      textAlign: 'center',
      fontFamily: 'inherit'
    }}>
      <div style={{
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: '#fee2e2',
        color: '#b91c1c',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.8rem',
        margin: '0 auto 18px auto'
      }}>
        ⚠️
      </div>

      <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: '0 0 8px 0' }}>
        Admin Panel Error
      </h2>
      <p style={{ color: '#64748b', fontSize: '0.9rem', margin: '0 0 20px 0', lineHeight: 1.5 }}>
        Dashboard load karne mein runtime problem aayi. Kripya niche diye buttons se try karein.
      </p>

      {error?.message && (
        <div style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '12px 16px',
          fontSize: '0.8rem',
          color: '#be123c',
          fontFamily: 'monospace',
          textAlign: 'left',
          marginBottom: '24px',
          wordBreak: 'break-word',
          maxHeight: '120px',
          overflowY: 'auto'
        }}>
          {error.message}
        </div>
      )}

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button
          onClick={() => reset()}
          style={{
            background: '#0f172a',
            color: '#fff',
            border: 'none',
            padding: '10px 22px',
            borderRadius: '8px',
            fontWeight: 700,
            fontSize: '0.88rem',
            cursor: 'pointer'
          }}
        >
          🔄 Try Again (Dobara Koshish)
        </button>

        <button
          onClick={() => {
            if (typeof window !== 'undefined') {
              window.location.reload();
            }
          }}
          style={{
            background: '#f1f5f9',
            color: '#334155',
            border: '1px solid #cbd5e1',
            padding: '10px 22px',
            borderRadius: '8px',
            fontWeight: 700,
            fontSize: '0.88rem',
            cursor: 'pointer'
          }}
        >
          🌐 Reload Page
        </button>

        <Link
          href="/admin"
          style={{
            background: '#e0f2fe',
            color: '#0369a1',
            padding: '10px 22px',
            borderRadius: '8px',
            fontWeight: 700,
            fontSize: '0.88rem',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center'
          }}
        >
          📊 Reset Dashboard
        </Link>
      </div>
    </div>
  );
}
