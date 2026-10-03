'use client';

import React, { useState, useRef } from 'react';

type ProductType = 'box' | 'bag' | 'sticker' | 'card';

export default function BoxBuilderPage() {
  const [type, setType] = useState<ProductType>('box');
  const [text, setText] = useState('YOUR LOGO');
  const [width, setWidth] = useState(20);
  const [height, setHeight] = useState(15);
  const [depth, setDepth] = useState(10);
  const [quantity, setQuantity] = useState(100);

  const [logoSrc, setLogoSrc] = useState<string | null>(null);
  const [logoSize, setLogoSize] = useState(50);
  const [logoX, setLogoX] = useState(0);
  const [logoY, setLogoY] = useState(0);

  // Rotation state
  const [rotX, setRotX] = useState(-20);
  const [rotY, setRotY] = useState(-45);
  const isDraggingRef = useRef(false);
  const startPosRef = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    isDraggingRef.current = true;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    startPosRef.current = { x: clientX, y: clientY };
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    
    const deltaX = clientX - startPosRef.current.x;
    const deltaY = clientY - startPosRef.current.y;
    
    setRotY((prev) => prev + deltaX * 0.5);
    setRotX((prev) => Math.max(-90, Math.min(90, prev - deltaY * 0.5)));
    
    startPosRef.current = { x: clientX, y: clientY };
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

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

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        if (typeof evt.target?.result === 'string') {
          setLogoSrc(evt.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const renderVisualizer = () => {
    if (type === 'box') {
      const scale = 8; // pixel multiplier
      const wPx = Math.max(40, width * scale);
      const hPx = Math.max(40, height * scale);
      const dPx = Math.max(40, depth * scale);
      
      return (
        <div className="scene" style={{ width: wPx, height: hPx }}>
          <div className="cube" style={{ transformOrigin: 'center center', transform: `translateZ(-100px) rotateX(${rotX}deg) rotateY(${rotY}deg)` }}>
            {/* Front */}
            <div className="face front" style={{ width: wPx, height: hPx, transform: `rotateY(0deg) translateZ(${dPx/2}px)` }}>
              <div style={{ transform: `translate(${logoX}px, ${logoY}px)`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                {logoSrc && <img src={logoSrc} alt="Logo" style={{ maxWidth: '100%', maxHeight: '100%', width: `${logoSize}px`, objectFit: 'contain' }} />}
                <div style={{ fontSize: '1rem', textAlign: 'center' }}>{text}</div>
              </div>
            </div>
            {/* Back */}
            <div className="face back" style={{ width: wPx, height: hPx, transform: `rotateY(180deg) translateZ(${dPx/2}px)` }}></div>
            {/* Right */}
            <div className="face right" style={{ width: dPx, height: hPx, transform: `rotateY(90deg) translateZ(${wPx/2}px)` }}></div>
            {/* Left */}
            <div className="face left" style={{ width: dPx, height: hPx, transform: `rotateY(-90deg) translateZ(${wPx/2}px)` }}></div>
            {/* Top */}
            <div className="face top" style={{ width: wPx, height: dPx, transform: `rotateX(90deg) translateZ(${hPx/2}px)` }}></div>
            {/* Bottom */}
            <div className="face bottom" style={{ width: wPx, height: dPx, transform: `rotateX(-90deg) translateZ(${hPx/2}px)` }}></div>
          </div>
        </div>
      );
    }
    
    if (type === 'bag') {
      const scale = 8;
      const wPx = Math.max(80, width * scale);
      const hPx = Math.max(100, height * scale);
      return (
        <div style={{ position: 'relative', width: wPx, height: hPx, background: '#D2B48C', borderRadius: '4px 4px 10px 10px', boxShadow: 'inset -10px -10px 20px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', overflow: 'hidden' }}>
           <div style={{ position: 'absolute', top: '-30px', width: '60%', height: '40px', border: '6px solid #8B4513', borderBottom: 'none', borderRadius: '30px 30px 0 0' }}></div>
           <div style={{ transform: `translate(${logoX}px, ${logoY}px)`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
             {logoSrc && <img src={logoSrc} alt="Logo" style={{ width: `${logoSize}px`, objectFit: 'contain' }} />}
             <div style={{ color: '#5C4033', fontWeight: 800, fontSize: '1.2rem', textAlign: 'center', padding: '10px' }}>{text}</div>
           </div>
        </div>
      );
    }

    if (type === 'sticker') {
      const scale = 10;
      const wPx = Math.max(60, width * scale);
      return (
        <div style={{ width: wPx, height: wPx, background: '#FFF', borderRadius: '50%', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #E2E8F0', overflow: 'hidden' }}>
           <div style={{ transform: `translate(${logoX}px, ${logoY}px)`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
             {logoSrc && <img src={logoSrc} alt="Logo" style={{ width: `${logoSize}px`, objectFit: 'contain' }} />}
             <div style={{ color: '#0F172A', fontWeight: 800, fontSize: '1rem', textAlign: 'center', padding: '10px' }}>{text}</div>
           </div>
        </div>
      );
    }

    if (type === 'card') {
      const scale = 12;
      const wPx = Math.max(100, width * scale);
      const hPx = Math.max(60, height * scale);
      return (
        <div style={{ width: wPx, height: hPx, background: '#FFF', borderRadius: '8px', boxShadow: '0 8px 20px rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #E2E8F0', backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(216, 241, 230, 0.46) 0%, rgba(233, 226, 226, 0.28) 90.2%)', overflow: 'hidden' }}>
           <div style={{ transform: `translate(${logoX}px, ${logoY}px)`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
             {logoSrc && <img src={logoSrc} alt="Logo" style={{ width: `${logoSize}px`, objectFit: 'contain' }} />}
             <div style={{ color: '#0F172A', fontWeight: 800, fontSize: '1.2rem', textAlign: 'center', fontFamily: 'serif' }}>{text}</div>
           </div>
        </div>
      );
    }
  };

  return (
    <div className="container" style={{ padding: '40px 0', minHeight: '80vh' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '20px', color: '#0F172A' }}>3D Product Visualizer</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
        
        {/* Visualizer Pane */}
        <div 
          style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '16px', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', cursor: 'grab' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
        >
           <div style={{ position: 'absolute', top: '15px', left: '15px', background: '#fff', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, boxShadow: '0 2px 4px rgba(0,0,0,0.05)', zIndex: 10 }}>
             Live Preview (Drag to Rotate)
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

          <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '150px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: '#475569' }}>Custom Text / Brand Name</label>
              <input type="text" value={text} onChange={(e) => setText(e.target.value)} style={{ width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid #CBD5E1', outline: 'none' }} />
            </div>
            <div style={{ flex: 1, minWidth: '150px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: '#475569' }}>Upload Logo</label>
              <input type="file" accept="image/*" onChange={handleLogoUpload} style={{ width: '100%', padding: '7px 10px', borderRadius: '8px', border: '1px dashed #CBD5E1', outline: 'none', background: '#F8FAFC', cursor: 'pointer', fontSize: '0.85rem' }} />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', background: '#FAFAFC', padding: '15px', borderRadius: '8px', border: '1px solid #E2E8F0', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '100px' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px' }}>Logo Size: {logoSize}px</label>
              <input type="range" min="10" max="200" value={logoSize} onChange={(e) => setLogoSize(Number(e.target.value))} style={{ width: '100%' }} />
            </div>
            <div style={{ flex: 1, minWidth: '100px' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px' }}>Move X</label>
              <input type="range" min="-100" max="100" value={logoX} onChange={(e) => setLogoX(Number(e.target.value))} style={{ width: '100%' }} />
            </div>
            <div style={{ flex: 1, minWidth: '100px' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px' }}>Move Y</label>
              <input type="range" min="-100" max="100" value={logoY} onChange={(e) => setLogoY(Number(e.target.value))} style={{ width: '100%' }} />
            </div>
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
          perspective: 1200px;
        }
        .cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
        }
        .face {
          position: absolute;
          border: 2px solid #8B4513;
          background: rgba(210, 180, 140, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: #5C4033;
          box-shadow: inset 0 0 20px rgba(0,0,0,0.1);
        }
        .top { background: rgba(222, 196, 161, 0.9); }
        .bottom { background: rgba(139, 69, 19, 0.9); }
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
