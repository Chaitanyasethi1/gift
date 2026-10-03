import React from 'react';

export default function AdminDashboard() {
  return (
    <div>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#1e293b', marginBottom: '20px' }}>Dashboard Overview</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
          <h3 style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '8px' }}>Total Sales</h3>
          <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#10b981' }}>₹0.00</div>
        </div>
        <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
          <h3 style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '8px' }}>Total Purchases</h3>
          <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#ef4444' }}>₹0.00</div>
        </div>
        <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
          <h3 style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '8px' }}>Low Stock Items</h3>
          <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#f59e0b' }}>0</div>
        </div>
      </div>

      <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '20px' }}>Supabase Setup Guide</h2>
        <p style={{ color: '#475569', lineHeight: 1.6, marginBottom: '15px' }}>
          To connect this dashboard to your database, you need to create a project on Supabase and provide the following details:
        </p>
        <ul style={{ color: '#475569', lineHeight: 1.6, marginLeft: '20px', marginBottom: '20px' }}>
          <li>Go to <a href="https://supabase.com" target="_blank" style={{ color: '#3b82f6' }}>Supabase.com</a> and create a new project.</li>
          <li>Go to Settings {'>'} API and copy your <b>Project URL</b> and <b>anon public key</b>.</li>
          <li>Share these details with me or add them to your <code>.env.local</code> file as <code>NEXT_PUBLIC_SUPABASE_URL</code> and <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code>.</li>
        </ul>
        <p style={{ color: '#475569' }}>Once the database is connected, we will create tables for Stock, Sales, Purchases, and Billing.</p>
      </div>
    </div>
  );
}
