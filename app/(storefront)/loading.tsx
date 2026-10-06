import React from 'react';

export default function StorefrontLoading() {
  return (
    <div className="container" style={{ padding: '40px 20px', minHeight: '70vh' }}>
      {/* Skeleton Top Banner / Header area */}
      <div style={{ height: '24px', width: '220px', background: '#E2E8F0', borderRadius: '6px', marginBottom: '24px', animation: 'skeletonPulse 1.5s infinite ease-in-out' }} />
      
      {/* Skeleton Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ width: '100%', height: '180px', background: '#F1F5F9', borderRadius: '8px', animation: 'skeletonPulse 1.5s infinite ease-in-out' }} />
            <div style={{ height: '18px', width: '75%', background: '#E2E8F0', borderRadius: '4px', animation: 'skeletonPulse 1.5s infinite ease-in-out' }} />
            <div style={{ height: '14px', width: '45%', background: '#F1F5F9', borderRadius: '4px', animation: 'skeletonPulse 1.5s infinite ease-in-out' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
              <div style={{ height: '20px', width: '60px', background: '#E2E8F0', borderRadius: '4px', animation: 'skeletonPulse 1.5s infinite ease-in-out' }} />
              <div style={{ height: '32px', width: '70px', background: '#E2E8F0', borderRadius: '6px', animation: 'skeletonPulse 1.5s infinite ease-in-out' }} />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes skeletonPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.45; }
        }
      `}</style>
    </div>
  );
}
