'use client';

import React, { useState } from 'react';
import { updateAdminPassword } from '@/app/admin/login/actions';

interface AdminPasswordModalProps {
  userEmail?: string;
}

export function AdminPasswordModal({ userEmail }: AdminPasswordModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState('Kenet@asprint');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  async function handleUpdate(targetPassword?: string) {
    const pwdToSet = targetPassword || password;
    if (!pwdToSet || pwdToSet.length < 6) {
      setMessage({ type: 'error', text: 'Password must be at least 6 characters long.' });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      // Try server action first
      const res = await updateAdminPassword(pwdToSet);
      if (res?.error) {
        // Fallback to fetch API
        const apiRes = await fetch('/api/admin/change-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ newPassword: pwdToSet })
        });
        const apiData = await apiRes.json();
        if (!apiRes.ok || !apiData.success) {
          throw new Error(apiData.error || res.error);
        }
      }

      setMessage({
        type: 'success',
        text: `Success! Password changed to "${pwdToSet}". Anyone using the old password will not be able to log in again.`
      });
    } catch (err: any) {
      setMessage({
        type: 'error',
        text: err.message || 'Failed to update password. Please check Supabase connection.'
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
          setMessage(null);
        }}
        title="Change Admin Password"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 12px',
          background: '#FEF3C7',
          color: '#92400E',
          border: '1px solid #FDE68A',
          borderRadius: '6px',
          fontWeight: 700,
          fontSize: '0.82rem',
          cursor: 'pointer',
          transition: 'all 0.15s ease'
        }}
      >
        <span>🔐</span>
        <span>Change Password</span>
      </button>

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(15, 23, 42, 0.65)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            padding: '20px'
          }}
        >
          <div
            style={{
              background: '#fff',
              borderRadius: '14px',
              padding: '24px 28px',
              maxWidth: '460px',
              width: '100%',
              boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
              border: '1px solid #E2E8F0'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.4rem' }}>🔐</span>
                <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800, color: '#0F172A' }}>
                  Change Admin Password
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  color: '#94A3B8',
                  padding: '4px'
                }}
              >
                ✕
              </button>
            </div>

            {userEmail && (
              <div style={{ fontSize: '0.82rem', color: '#64748B', marginBottom: '14px', background: '#F8FAFC', padding: '8px 12px', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                Logged in account: <strong style={{ color: '#0F172A' }}>{userEmail}</strong>
              </div>
            )}

            {message && (
              <div
                style={{
                  padding: '12px 14px',
                  borderRadius: '8px',
                  marginBottom: '16px',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  background: message.type === 'success' ? '#DCFCE7' : '#FEE2E2',
                  color: message.type === 'success' ? '#15803D' : '#DC2626',
                  border: message.type === 'success' ? '1px solid #BBF7D0' : '1px solid #FECDD3'
                }}
              >
                {message.type === 'success' ? '✅ ' : '⚠️ '}
                {message.text}
              </div>
            )}

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                New Password
              </label>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter new password"
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '6px',
                  border: '1.5px solid #CBD5E1',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* Quick 1-Click Action for Kenet@asprint */}
            <div style={{ marginBottom: '18px' }}>
              <button
                type="button"
                disabled={isLoading}
                onClick={() => {
                  setPassword('Kenet@asprint');
                  handleUpdate('Kenet@asprint');
                }}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: '#DC2626',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  boxShadow: '0 4px 6px -1px rgba(220, 38, 38, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  opacity: isLoading ? 0.7 : 1
                }}
              >
                <span>⚡</span>
                <span>{isLoading ? 'Updating Password...' : 'Set Password to "Kenet@asprint" NOW'}</span>
              </button>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                style={{
                  flex: 1,
                  padding: '9px 14px',
                  background: '#F1F5F9',
                  color: '#475569',
                  border: '1px solid #CBD5E1',
                  borderRadius: '6px',
                  fontWeight: 700,
                  fontSize: '0.84rem',
                  cursor: 'pointer'
                }}
              >
                Close
              </button>
              <button
                type="button"
                disabled={isLoading}
                onClick={() => handleUpdate(password)}
                style={{
                  flex: 1,
                  padding: '9px 14px',
                  background: '#1D4ED8',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: 700,
                  fontSize: '0.84rem',
                  cursor: isLoading ? 'not-allowed' : 'pointer'
                }}
              >
                Save Custom
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
