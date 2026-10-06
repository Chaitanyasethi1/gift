import React from 'react';

export default function AdminLoading() {
  return (
    <div style={{ padding: '30px', minHeight: '60vh', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ height: '32px', width: '200px', background: '#E2E8F0', borderRadius: '6px', animation: 'adminPulse 1.4s infinite ease-in-out' }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
        {[...Array(4)].map((_, i) => (
          <div key={i} style={{ height: '100px', background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '10px', animation: 'adminPulse 1.4s infinite ease-in-out' }} />
        ))}
      </div>
      <div style={{ height: '260px', background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '10px', animation: 'adminPulse 1.4s infinite ease-in-out' }} />

      <style>{`
        @keyframes adminPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
