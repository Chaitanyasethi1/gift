import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Admin Panel | AS Print Gallery',
  robots: 'noindex, nofollow'
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', background: '#1e293b', color: '#fff', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '20px', fontSize: '1.2rem', fontWeight: 800, borderBottom: '1px solid #334155' }}>
          AS Admin Panel
        </div>
        <nav style={{ flex: 1, padding: '20px 0', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <Link href="/admin" style={{ padding: '12px 20px', color: '#cbd5e1', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
            📊 Dashboard
          </Link>
          <Link href="/admin/stock" style={{ padding: '12px 20px', color: '#cbd5e1', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
            📦 Stock
          </Link>
          <Link href="/admin/sales" style={{ padding: '12px 20px', color: '#cbd5e1', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
            💰 Sales
          </Link>
          <Link href="/admin/purchase" style={{ padding: '12px 20px', color: '#cbd5e1', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
            🛒 Purchase
          </Link>
          <Link href="/admin/billing" style={{ padding: '12px 20px', color: '#cbd5e1', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
            🧾 Billing
          </Link>
        </nav>
        <div style={{ padding: '20px', borderTop: '1px solid #334155' }}>
          <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>
            ← Back to Website
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <header style={{ background: '#fff', padding: '15px 30px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ fontWeight: 600, color: '#475569' }}>Admin User</div>
        </header>
        <div style={{ padding: '30px', overflowY: 'auto', flex: 1 }}>
          {children}
        </div>
      </main>

      <style>{`
        aside nav a:hover {
          background: #334155;
          color: #fff !important;
        }
      `}</style>
    </div>
  );
}
