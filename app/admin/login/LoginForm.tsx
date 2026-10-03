'use client';

import { useState } from 'react';
import { login } from './actions';

export default function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError(null);
    const result = await login(formData);
    if (result?.error) {
      setError(result.error);
      setLoading(false);
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
            <input 
              name="password" 
              type="password" 
              required 
              style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1' }} 
              placeholder="••••••••"
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            style={{ width: '100%', padding: '12px', background: '#e11d48', color: '#fff', borderRadius: '6px', border: 'none', fontWeight: 600, fontSize: '1rem', cursor: loading ? 'not-allowed' : 'pointer' }}
          >
            {loading ? 'Logging in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
