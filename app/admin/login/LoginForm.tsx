'use client';

import { useState } from 'react';
import { login } from './actions';

export default function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError(null);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('admin_tab_session', 'active');
      sessionStorage.setItem('admin_session_time', Date.now().toString());
    }
    const result = await login(formData);
    if (result?.error) {
      setError(result.error);
      setLoading(false);
      if (typeof window !== 'undefined') {
        sessionStorage.removeItem('admin_tab_session');
        sessionStorage.removeItem('admin_session_time');
      }
    }
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
      <div style={{ width: '400px', background: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1e293b', marginBottom: '10px', textAlign: 'center' }}>
          AS Print Gallery
        </h1>
        <p style={{ color: '#64748b', textAlign: 'center', marginBottom: '30px' }}>
          Admin Panel Login
        </p>

        {error && (
          <div style={{ padding: '10px', background: '#fee2e2', color: '#b91c1c', borderRadius: '6px', marginBottom: '20px', fontSize: '0.9rem', textAlign: 'center' }}>
            {error}
          </div>
        )}

        <form action={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', color: '#475569', marginBottom: '5px' }}>Email</label>
            <input 
              name="email" 
              type="email" 
              required 
              style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1' }} 
              placeholder="admin@asprintgallery.com"
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', color: '#475569', marginBottom: '5px' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <input 
                name="password" 
                type={showPassword ? 'text' : 'password'} 
                required 
                style={{ width: '100%', padding: '12px 42px 12px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} 
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#64748B',
                  display: 'flex',
                  alignItems: 'center',
                  padding: 0
                }}
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                )}
              </button>
            </div>
          </div>
          <button 
            type="submit" 
            disabled={loading}
            style={{ width: '100%', padding: '12px', background: '#1D4ED8', color: '#fff', borderRadius: '6px', border: 'none', fontWeight: 600, fontSize: '1rem', cursor: loading ? 'not-allowed' : 'pointer' }}
          >
            {loading ? 'Logging in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
