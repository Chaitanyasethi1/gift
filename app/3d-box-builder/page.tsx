'use client';

import React, { useState } from 'react';

type ProductType = 'box' | 'bag' | 'sticker' | 'card';

export default function BoxBuilderPage() {
  const [type, setType] = useState<ProductType>('box');
  const [text, setText] = useState('YOUR LOGO');
  const [width, setWidth] = useState(20);
  const [height, setHeight] = useState(15);
  const [depth, setDepth] = useState(10);
  const [quantity, setQuantity] = useState(100);

  // Simple pricing logic based on type and dimensions
  const getPrice = () => {
    let basePrice = 0;
    if (type === 'box') basePrice = ((width + height + depth) * 0.5);
    if (type === 'bag') basePrice = ((width + height) * 0.4);
    if (type === 'sticker') basePrice = ((width) * 0.1);
    if (type === 'card') basePrice = ((width + height) * 0.15);
    
    // Volume discount
    let total = basePrice * quantity;
    if (quantity >= 500) total *= 0.9;
    if (quantity >= 1000) total *= 0.8;
    return Math.max(total, 0).toFixed(2);
  };

  const renderVisualizer = () => {
    if (type === 'box') {
      return (
        <div className="scene">
          <div className="cube">
            <div className="face front">{text}</div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </div>
        </div>
      );
    }
    
    if (type === 'bag') {
      return (
        <div style={{ position: 'relative', width: '180px', height: '240px', background: '#D2B48C', borderRadius: '4px 4px 10px 10px', boxShadow: 'inset -10px -10px 20px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
           {/* Handle */}
           <div style={{ position: 'absolute', top: '-30px', width: '60px', height: '40px', border: '6px solid #8B4513', borderBottom: 'none', borderRadius: '30px 30px 0 0' }}></div>
           <div style={{ color: '#5C4033', fontWeight: 800, fontSize: '1.2rem', textAlign: 'center', padding: '10px' }}>{text}</div>
        </div>
      );
    }

    if (type === 'sticker') {
      return (
        <div style={{ width: '150px', height: '150px', background: '#FFF', borderRadius: '50%', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #E2E8F0' }}>
          <div style={{ color: '#0F172A', fontWeight: 800, fontSize: '1.2rem', textAlign: 'center', padding: '10px' }}>{text}</div>
        </div>
      );
    }

    if (type === 'card') {
      return (
        <div style={{ width: '220px', height: '140px', background: '#FFF', borderRadius: '8px', boxShadow: '0 8px 20px rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #E2E8F0', backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(216, 241, 230, 0.46) 0%, rgba(233, 226, 226, 0.28) 90.2%)' }}>
          <div style={{ color: '#0F172A', fontWeight: 800, fontSize: '1.4rem', textAlign: 'center', fontFamily: 'serif' }}>{text}</div>
        </div>
      );
    }
  };

  return (
    <div className="container" style={{ padding: '40px 0', minHeight: '80vh' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '20px', color: '#0F172A' }}>3D Product Visualizer</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
        
        {/* Visualizer Pane */}
        <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '16px', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
           <div style={{ position: 'absolute', top: '15px', left: '15px', background: '#fff', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
             Live Preview
           </div>
           {renderVisualizer()}
        </div>

        {/* Configurator Pane */}
        <div style={{ background: '#FFF', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)', border: '1px solid #F1F5F9' }}>
          
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '20px' }}>Customize Your Product</h2>
          
          <div style={{ display: 'flex', gap: '10px', marginBottom: '25px', flexWrap: 'wrap' }}>
             <button onClick={() => setType('box')} style={btnStyle(type === 'box')}>📦 Box</button>
             <button onClick={() => setType('bag')} style={btnStyle(type === 'bag')}>🛍️ Paper Bag</button>
             <button onClick={() => setType('sticker')} style={btnStyle(type === 'sticker')}>🔴 Sticker</button>
             <button onClick={() => setType('card')} style={btnStyle(type === 'card')}>✉️ Thank You Card</button>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: '#475569' }}>Custom Text / Brand Name</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} style={{ width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid #CBD5E1', outline: 'none' }} />
          </div>

          <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: '#475569' }}>Width (cm)</label>
              <input type="number" value={width} onChange={(e) => setWidth(Number(e.target.value))} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #CBD5E1', outline: 'none' }} />
            </div>
            {type !== 'sticker' && (
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: '#475569' }}>Height (cm)</label>
                <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #CBD5E1', outline: 'none' }} />
              </div>
            )}
            {type === 'box' && (
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: '#475569' }}>Depth (cm)</label>
                <input type="number" value={depth} onChange={(e) => setDepth(Number(e.target.value))} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #CBD5E1', outline: 'none' }} />
              </div>
            )}
          </div>

          <div style={{ marginBottom: '30px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: '#475569' }}>Quantity</label>
            <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} style={{ width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid #CBD5E1', outline: 'none' }} />
          </div>

          <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', border: '1px dashed #CBD5E1' }}>
             <div style={{ fontSize: '0.9rem', color: '#64748B', fontWeight: 600 }}>Estimated Total:</div>
             <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A' }}>₹{getPrice()}</div>
          </div>

          <button onClick={() => alert("Added to cart!")} style={{ width: '100%', background: '#65A34A', color: '#fff', border: 'none', padding: '14px', borderRadius: '8px', fontSize: '1rem', fontWeight: 700, cursor: 'pointer' }}>
            Add To Cart
          </button>

        </div>
      </div>

      <style>{`
        /* 3D Cube CSS */
        .scene {
          width: 200px;
          height: 200px;
          perspective: 600px;
        }
        .cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transform: translateZ(-100px) rotateX(-20deg) rotateY(-45deg);
          animation: rotate 15s infinite linear;
        }
        @keyframes rotate {
          0% { transform: translateZ(-100px) rotateX(-20deg) rotateY(0deg); }
          100% { transform: translateZ(-100px) rotateX(-20deg) rotateY(360deg); }
        }
        .face {
          position: absolute;
          width: 200px;
          height: 200px;
          border: 2px solid #8B4513;
          background: rgba(210, 180, 140, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: #5C4033;
          font-size: 1.5rem;
          box-shadow: inset 0 0 20px rgba(0,0,0,0.1);
        }
        .front  { transform: rotateY(  0deg) translateZ(100px); }
        .right  { transform: rotateY( 90deg) translateZ(100px); }
        .back   { transform: rotateY(180deg) translateZ(100px); }
        .left   { transform: rotateY(-90deg) translateZ(100px); }
        .top    { transform: rotateX( 90deg) translateZ(100px); background: rgba(222, 196, 161, 0.9); }
        .bottom { transform: rotateX(-90deg) translateZ(100px); background: rgba(139, 69, 19, 0.9); }
      `}</style>
    </div>
  );
}

const btnStyle = (active: boolean) => ({
  background: active ? '#0F172A' : '#F1F5F9',
  color: active ? '#FFF' : '#475569',
  border: '1px solid',
  borderColor: active ? '#0F172A' : '#CBD5E1',
  padding: '8px 16px',
  borderRadius: '20px',
  fontSize: '0.85rem',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'all 0.2s'
});
