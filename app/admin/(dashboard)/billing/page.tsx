import React from 'react';

export default function BillingPage() {
  return (
    <div>
      <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1e293b', marginBottom: '20px' }}>🧾 Billing & Invoices</h1>
      <div style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', color: '#64748b' }}>
        Supabase connected! You can now create an 'invoices' table in Supabase and display data here.
      </div>
    </div>
  );
}
