import React from 'react';

export default function RootLoading() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FAFAFC' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <div 
          style={{
            width: '40px',
            height: '40px',
            border: '3.5px solid #E2E8F0',
            borderTopColor: '#B81B54',
            borderRadius: '50%',
            animation: 'spinLoader 0.7s linear infinite'
          }}
        />
        <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#64748B' }}>Loading AS Print Gallery...</span>
      </div>
      <style>{`
        @keyframes spinLoader {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
