'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { ShoppingCartIcon, WhatsAppIcon, UploadCloudIcon, MoveIcon } from './Icons';

export const BoxConfigurator: React.FC = () => {
  const { addToCart } = useCart();

  // Inputs
  const [lengthStr, setLengthStr] = useState('10');
  const [widthStr, setWidthStr] = useState('8');
  const [heightStr, setHeightStr] = useState('6');

  const [ply, setPly] = useState<3 | 5 | 7>(3);
  const [plyMultiplier, setPlyMultiplier] = useState(1.0);

  const [color, setColor] = useState<'kraft' | 'white' | 'black' | 'custom'>('kraft');
  const [colorMultiplier, setColorMultiplier] = useState(1.0);
  const [customHexColor, setCustomHexColor] = useState('#C19A6B');

  const [print, setPrint] = useState<'plain' | 'single' | 'multicolor'>('plain');
  const [printAddon, setPrintAddon] = useState(0.0);

  const [selectedQty, setSelectedQty] = useState(500);
  const [flapsOpen, setFlapsOpen] = useState(false);

  // Custom text & logo
  const [brandText, setBrandText] = useState('YOUR LOGO HERE');
  const [logoSrc, setLogoSrc] = useState<string | null>(null);
  const [logoSize, setLogoSize] = useState(40);
  const [logoX, setLogoX] = useState(0);
  const [logoY, setLogoY] = useState(0);

  // 3D rotation state
  const [rotX, setRotX] = useState(-20);
  const [rotY, setRotY] = useState(35);
  const isDraggingRef = useRef(false);
  const startPosRef = useRef({ x: 0, y: 0 });

  const length = parseFloat(lengthStr);
  const width = parseFloat(widthStr);
  const height = parseFloat(heightStr);

  const isValidDimensions =
    !isNaN(length) && length >= 4 && length <= 30 &&
    !isNaN(width) && width >= 4 && width <= 24 &&
    !isNaN(height) && height >= 2 && height <= 20;

  // Calculation
  let baseRate = 0;
  if (isValidDimensions) {
    const sqInches = 2 * (length + width) * (width + height);
    baseRate = sqInches * 0.024;
    baseRate = Math.max(4.20, baseRate);
    baseRate *= plyMultiplier;
    baseRate *= colorMultiplier;
    baseRate += printAddon;
  }

  const tiers = [
    { qty: 100, discount: 0.0, label: '100 pcs' },
    { qty: 500, discount: 0.22, label: '500 pcs (Save 22%)' },
    { qty: 1000, discount: 0.36, label: '1,000 pcs (Save 36%)' },
    { qty: 5000, discount: 0.50, label: '5,000 pcs (Save 50%)' }
  ];

  const activeTier = tiers.find((t) => t.qty === selectedQty) || tiers[1];
  const currentUnitRate = isValidDimensions ? Math.max(2.80, baseRate * (1 - activeTier.discount)) : null;

  // Drag orbit controls
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    startPosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!e.touches[0]) return;
    isDraggingRef.current = true;
    startPosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - startPosRef.current.x;
      const deltaY = e.clientY - startPosRef.current.y;
      setRotY((prev) => prev + deltaX * 0.4);
      setRotX((prev) => Math.max(-80, Math.min(80, prev - deltaY * 0.4)));
      startPosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || !e.touches[0]) return;
      const deltaX = e.touches[0].clientX - startPosRef.current.x;
      const deltaY = e.touches[0].clientY - startPosRef.current.y;
      setRotY((prev) => prev + deltaX * 0.5);
      setRotX((prev) => Math.max(-80, Math.min(80, prev - deltaY * 0.5)));
      startPosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  // Compute 3D box CSS sizes
  const validL = isValidDimensions ? length : 10;
  const validW = isValidDimensions ? width : 8;
  const validH = isValidDimensions ? height : 6;

  const boxL = Math.min(260, Math.max(120, validL * 16));
  const boxW = Math.min(220, Math.max(100, validW * 16));
  const boxH = Math.min(200, Math.max(90, validH * 16));

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

  const handleAddToCart = () => {
    if (!isValidDimensions || !currentUnitRate) return;
    addToCart({
      id: `custom-box-${Date.now()}`,
      title: `Custom ${ply}-Ply Corrugated Box (${validL}"×${validW}"×${validH}")`,
      price: currentUnitRate,
      image: '/assets/corrugated_box.jpg',
      specs: [
        `${ply}-Ply Corrugated`,
        `Color: ${color === 'custom' ? customHexColor : color}`,
        `Print: ${print}`,
        `Dimensions: ${validL}" × ${validW}" × ${validH}"`
      ],
      dimensions: `${validL}" × ${validW}" × ${validH}"`,
      isCustomBox: true
    }, selectedQty);
  };

  const waMessage = isValidDimensions && currentUnitRate
    ? encodeURIComponent(
        `Hello AS Print Gallery! I configured a custom corrugated box on your website:
📦 *Custom Corrugated Box Specification*
• Dimensions: ${validL}" × ${validW}" × ${validH}" (Inches)
• Flute / Ply: ${ply}-Ply Corrugated
• Material/Color: ${color === 'custom' ? customHexColor : color.toUpperCase()}
• Printing: ${print.toUpperCase()}
• Order Quantity: ${selectedQty} pcs
• Estimated Unit Rate: ₹${currentUnitRate.toFixed(2)}/pc (Excl. GST)
• Estimated Total: ₹${(currentUnitRate * selectedQty).toFixed(0)} + 18% GST (ITC Eligible)
Please confirm sample swatch delivery and final factory invoice quote!`
      )
    : '';

  return (
    <section id="3d-customizer" className="box-builder-section">
      <div className="container">
        <div className="section-head">
          <span className="section-badge">3D Box Configurator</span>
          <h2 className="section-title">Configure Your Custom Box in 3D</h2>
          <p className="section-subtitle">
            Rotate 360°, customize Length, Width, Height, choose 3-ply or 5-ply kraft, and calculate live instant factory
            pricing with bulk tier discounts.
          </p>
        </div>

        <div className="builder-layout-grid" id="box-builder-container">
          {/* Left: 3D Visualizer Canvas */}
          <div className="builder-canvas-card">
            <div className="canvas-header">
              <div className="canvas-title-badge">
                <span>📦</span> 3D Interactive Viewport (Drag to Rotate 360°)
              </div>
              <div className="canvas-controls-strip">
                <button
                  type="button"
                  className="canvas-btn"
                  id="toggle-flaps-btn"
                  onClick={() => setFlapsOpen(!flapsOpen)}
                >
                  {flapsOpen ? '📦 Close Flaps' : '👐 Open Flaps'}
                </button>
              </div>
            </div>

            <div
              className="canvas-viewport"
              id="canvas-3d-viewport"
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              style={{ cursor: 'grab' }}
            >
              <div className="css-3d-scene">
                <div
                  className={`css-3d-box ${color !== 'custom' ? `theme-${color}` : ''}`}
                  id="css-3d-interactive-box"
                  style={{
                    transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`
                  }}
                >
                  {/* Front Face */}
                  <div
                    className="box-face face-front"
                    style={{
                      width: `${boxL}px`,
                      height: `${boxH}px`,
                      transform: `translateZ(${boxW / 2}px)`,
                      backgroundColor: color === 'custom' ? customHexColor : undefined
                    }}
                  >
                    <div
                      id="box-front-text-display"
                      style={{
                        fontSize: '0.72rem',
                        color: color === 'black' ? '#FFF' : '#111',
                        fontWeight: 800,
                        background: 'transparent',
                        textAlign: 'center',
                        maxWidth: '90%',
                        wordWrap: 'break-word',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '4px',
                        transform: `translate(${logoX}px, ${logoY}px)`
                      }}
                    >
                      {logoSrc && (
                        <img
                          id="box-front-logo-img"
                          src={logoSrc}
                          alt="Custom Uploaded Logo"
                          style={{
                            maxWidth: '100%',
                            maxHeight: `${logoSize}px`,
                            objectFit: 'contain'
                          }}
                        />
                      )}
                      <span id="box-front-text-span">{brandText}</span>
                    </div>
                  </div>

                  {/* Back Face */}
                  <div
                    className="box-face face-back"
                    style={{
                      width: `${boxL}px`,
                      height: `${boxH}px`,
                      transform: `rotateY(180deg) translateZ(${boxW / 2}px)`,
                      backgroundColor: color === 'custom' ? customHexColor : undefined
                    }}
                  >
                    BACK
                  </div>

                  {/* Right Face */}
                  <div
                    className="box-face face-right"
                    style={{
                      width: `${boxW}px`,
                      height: `${boxH}px`,
                      transform: `rotateY(90deg) translateZ(${boxL / 2}px)`,
                      backgroundColor: color === 'custom' ? customHexColor : undefined
                    }}
                  >
                    SIDE
                  </div>

                  {/* Left Face */}
                  <div
                    className="box-face face-left"
                    style={{
                      width: `${boxW}px`,
                      height: `${boxH}px`,
                      transform: `rotateY(-90deg) translateZ(${boxL / 2}px)`,
                      backgroundColor: color === 'custom' ? customHexColor : undefined
                    }}
                  >
                    SIDE
                  </div>

                  {/* Top Face */}
                  <div
                    className="box-face face-top"
                    style={{
                      width: `${boxL}px`,
                      height: `${boxW}px`,
                      transform: flapsOpen
                        ? `rotateX(170deg) translateZ(${boxH / 2}px)`
                        : `rotateX(90deg) translateZ(${boxH / 2}px)`,
                      backgroundColor: color === 'custom' ? customHexColor : undefined
                    }}
                  >
                    TOP FLAP
                  </div>

                  {/* Bottom Face */}
                  <div
                    className="box-face face-bottom"
                    style={{
                      width: `${boxL}px`,
                      height: `${boxW}px`,
                      transform: `rotateX(-90deg) translateZ(${boxH / 2}px)`,
                      backgroundColor: color === 'custom' ? customHexColor : undefined
                    }}
                  >
                    BOTTOM
                  </div>
                </div>
              </div>
            </div>

            <div className="canvas-footer">
              <span>🖱️ Click &amp; Drag to Orbit • Touch enabled on Mobile</span>
              <span style={{ color: '#34D399', fontWeight: 700 }}>100% Recyclable Kraft</span>
            </div>
          </div>

          {/* Right: Box Configuration Controls */}
          <div className="builder-controls-card">
            {/* 1. Dimension Inputs */}
            <div className="builder-group">
              <div className="builder-group-label">
                <span>1. Enter Dimensions (L × W × H)</span>
                <span className="note">Inches (Min: 4×4×2, Max: 30×24×20)</span>
              </div>
              <div className="dimensions-grid">
                <div className="dim-control-box">
                  <label htmlFor="box-len">Length</label>
                  <div className="dim-input-row">
                    <input
                      type="number"
                      id="box-len"
                      value={lengthStr}
                      onChange={(e) => setLengthStr(e.target.value)}
                      min="4"
                      max="30"
                      step="0.5"
                    />
                    <span className="unit">in</span>
                  </div>
                </div>
                <div className="dim-control-box">
                  <label htmlFor="box-width">Width</label>
                  <div className="dim-input-row">
                    <input
                      type="number"
                      id="box-width"
                      value={widthStr}
                      onChange={(e) => setWidthStr(e.target.value)}
                      min="4"
                      max="24"
                      step="0.5"
                    />
                    <span className="unit">in</span>
                  </div>
                </div>
                <div className="dim-control-box">
                  <label htmlFor="box-height">Height</label>
                  <div className="dim-input-row">
                    <input
                      type="number"
                      id="box-height"
                      value={heightStr}
                      onChange={(e) => setHeightStr(e.target.value)}
                      min="2"
                      max="20"
                      step="0.5"
                    />
                    <span className="unit">in</span>
                  </div>
                </div>
              </div>
              {!isValidDimensions && (
                <div style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: '6px', fontWeight: 600 }}>
                  ⚠️ Please enter valid dimensions: Length (4-30 in), Width (4-24 in), Height (2-20 in).
                </div>
              )}
            </div>

            {/* 2. Corrugation Ply Strength */}
            <div className="builder-group">
              <div className="builder-group-label">
                <span>2. Select Corrugation Flute &amp; Ply</span>
                <span className="note">Bursting Strength</span>
              </div>
              <div className="choice-pills-wrap">
                <button
                  type="button"
                  className={`choice-pill-btn ply-select-btn ${ply === 3 ? 'active' : ''}`}
                  onClick={() => {
                    setPly(3);
                    setPlyMultiplier(1.0);
                  }}
                >
                  <span className="choice-title">3-Ply Corrugated</span>
                  <span className="choice-desc">Up to 6 kg • E-Commerce</span>
                </button>
                <button
                  type="button"
                  className={`choice-pill-btn ply-select-btn ${ply === 5 ? 'active' : ''}`}
                  onClick={() => {
                    setPly(5);
                    setPlyMultiplier(1.55);
                  }}
                >
                  <span className="choice-title">5-Ply Double Wall</span>
                  <span className="choice-desc">Up to 22 kg • Heavy Freight</span>
                </button>
                <button
                  type="button"
                  className={`choice-pill-btn ply-select-btn ${ply === 7 ? 'active' : ''}`}
                  onClick={() => {
                    setPly(7);
                    setPlyMultiplier(2.15);
                  }}
                >
                  <span className="choice-title">7-Ply Export Grade</span>
                  <span className="choice-desc">Up to 40 kg • Heavy Machinery</span>
                </button>
              </div>
            </div>

            {/* 3. Material Color */}
            <div className="builder-group">
              <div className="builder-group-label">
                <span>3. Board Color &amp; Finish</span>
                <span className="note">Virgin / Kraft</span>
              </div>
              <div className="choice-pills-wrap">
                <button
                  type="button"
                  className={`choice-pill-btn color-select-btn ${color === 'kraft' ? 'active' : ''}`}
                  onClick={() => {
                    setColor('kraft');
                    setColorMultiplier(1.0);
                  }}
                >
                  <span className="choice-title">Natural Brown Kraft</span>
                  <span className="choice-desc">Standard Eco Kraft</span>
                </button>
                <button
                  type="button"
                  className={`choice-pill-btn color-select-btn ${color === 'white' ? 'active' : ''}`}
                  onClick={() => {
                    setColor('white');
                    setColorMultiplier(1.18);
                  }}
                >
                  <span className="choice-title">Bleached White Liner</span>
                  <span className="choice-desc">Clean Premium Finish</span>
                </button>
                <button
                  type="button"
                  className={`choice-pill-btn color-select-btn ${color === 'black' ? 'active' : ''}`}
                  onClick={() => {
                    setColor('black');
                    setColorMultiplier(1.30);
                  }}
                >
                  <span className="choice-title">Luxury Matte Black</span>
                  <span className="choice-desc">High-End D2C Brands</span>
                </button>
              </div>
            </div>

            {/* 3.5 Customization */}
            <div className="builder-group">
              <div className="builder-group-label">
                <span>3.5 Customization</span>
                <span className="note">Live 3D Preview</span>
              </div>
              <div className="dimensions-grid" style={{ gridTemplateColumns: '2fr 1fr 1fr' }}>
                <div className="dim-control-box">
                  <label htmlFor="custom-box-text">Brand Name</label>
                  <div className="dim-input-row" style={{ padding: 0 }}>
                    <input
                      type="text"
                      id="custom-box-text"
                      placeholder="Enter brand name"
                      value={brandText}
                      onChange={(e) => setBrandText(e.target.value)}
                      style={{
                        width: '100%',
                        border: 'none',
                        padding: '12px',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        outline: 'none',
                        background: 'transparent'
                      }}
                    />
                  </div>
                </div>
                <div className="dim-control-box">
                  <label>Upload Logo</label>
                  <div className="dim-input-row" style={{ padding: 0, position: 'relative' }}>
                    <input
                      type="file"
                      id="custom-box-logo-upload"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      style={{
                        opacity: 0,
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        cursor: 'pointer',
                        zIndex: 2
                      }}
                    />
                    <div
                      style={{
                        width: '100%',
                        height: '46px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--primary)'
                      }}
                    >
                      <UploadCloudIcon size={20} />
                    </div>
                  </div>
                </div>
                <div className="dim-control-box">
                  <label htmlFor="custom-box-color">Box Color</label>
                  <div className="dim-input-row" style={{ padding: 0 }}>
                    <input
                      type="color"
                      id="custom-box-color"
                      value={customHexColor}
                      onChange={(e) => {
                        setCustomHexColor(e.target.value);
                        setColor('custom');
                        setColorMultiplier(1.15);
                      }}
                      style={{
                        width: '100%',
                        height: '46px',
                        border: 'none',
                        padding: '2px',
                        cursor: 'pointer',
                        background: 'transparent'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Adjust Logo positioning sliders */}
              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  marginTop: '12px',
                  alignItems: 'center',
                  background: 'var(--off-white)',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-light)',
                  flexWrap: 'wrap'
                }}
              >
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: 'var(--text-dark)',
                    whiteSpace: 'nowrap',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <MoveIcon size={14} /> Adjust Logo:
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, minWidth: '110px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600 }}>Size</label>
                  <input
                    type="range"
                    min="10"
                    max="150"
                    value={logoSize}
                    onChange={(e) => setLogoSize(Number(e.target.value))}
                    style={{ flex: 1, cursor: 'pointer', accentColor: 'var(--primary)' }}
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, minWidth: '110px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600 }}>X</label>
                  <input
                    type="range"
                    min="-100"
                    max="100"
                    value={logoX}
                    onChange={(e) => setLogoX(Number(e.target.value))}
                    style={{ flex: 1, cursor: 'pointer', accentColor: 'var(--primary)' }}
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, minWidth: '110px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600 }}>Y</label>
                  <input
                    type="range"
                    min="-100"
                    max="100"
                    value={logoY}
                    onChange={(e) => setLogoY(Number(e.target.value))}
                    style={{ flex: 1, cursor: 'pointer', accentColor: 'var(--primary)' }}
                  />
                </div>
              </div>
            </div>

            {/* 4. Printing Selection */}
            <div className="builder-group">
              <div className="builder-group-label">
                <span>4. Custom Logo &amp; Branding Printing</span>
                <span className="note">Plate charges waived for 500+ pcs</span>
              </div>
              <div className="choice-pills-wrap">
                <button
                  type="button"
                  className={`choice-pill-btn print-select-btn ${print === 'plain' ? 'active' : ''}`}
                  onClick={() => {
                    setPrint('plain');
                    setPrintAddon(0.0);
                  }}
                >
                  <span className="choice-title">Plain (No Print)</span>
                  <span className="choice-desc">Standard unprinted</span>
                </button>
                <button
                  type="button"
                  className={`choice-pill-btn print-select-btn ${print === 'single' ? 'active' : ''}`}
                  onClick={() => {
                    setPrint('single');
                    setPrintAddon(0.85);
                  }}
                >
                  <span className="choice-title">1-Color Screen Print</span>
                  <span className="choice-desc">+₹0.85 / pc</span>
                </button>
                <button
                  type="button"
                  className={`choice-pill-btn print-select-btn ${print === 'multicolor' ? 'active' : ''}`}
                  onClick={() => {
                    setPrint('multicolor');
                    setPrintAddon(1.80);
                  }}
                >
                  <span className="choice-title">Full CMYK Offset Print</span>
                  <span className="choice-desc">+₹1.80 / pc</span>
                </button>
              </div>
            </div>

            {/* 5. Live Wholesale Pricing Summary */}
            <div className="builder-price-summary-box">
              <div className="price-summary-header">
                <div className="unit-price-display">
                  <span className="price-label">Live Unit Rate (Excl. GST)</span>
                  <div className="price-val" id="builder-live-price">
                    {isValidDimensions && currentUnitRate
                      ? `₹${currentUnitRate.toFixed(2)}`
                      : 'Starting from ₹4.40'}
                  </div>
                </div>
                <span
                  style={{
                    fontSize: '0.8rem',
                    background: 'rgba(52, 211, 153, 0.15)',
                    color: '#34D399',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-full)'
                  }}
                >
                  ⚡ Direct Factory Rate
                </span>
              </div>

              {/* GST Compliance Note */}
              <div style={{ fontSize: '0.76rem', color: '#CBD5E1', marginBottom: '12px', background: 'rgba(255,255,255,0.05)', padding: '6px 10px', borderRadius: '4px' }}>
                🛡️ <strong>Excl. GST, +18% GST extra, full ITC on GST invoice.</strong>
              </div>

              {/* Tier Discounts */}
              <div
                style={{
                  fontSize: '0.72rem',
                  color: '#94A3B8',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginBottom: '8px'
                }}
              >
                Select Quantity Tier for Best Wholesale Savings:
              </div>
              <div className="bulk-tiers-grid">
                {tiers.map((t) => {
                  const rate = isValidDimensions
                    ? Math.max(2.80, baseRate * (1 - t.discount))
                    : 4.40;
                  return (
                    <div
                      key={t.qty}
                      className={`tier-item builder-tier-card ${selectedQty === t.qty ? 'active' : ''}`}
                      onClick={() => setSelectedQty(t.qty)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="tier-qty">{t.label}</div>
                      <div className="tier-rate">
                        {isValidDimensions ? `₹${rate.toFixed(2)}` : '—'}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="builder-action-btns">
                <button
                  type="button"
                  className="btn-add-custom-cart"
                  onClick={handleAddToCart}
                  disabled={!isValidDimensions}
                  style={{ opacity: isValidDimensions ? 1 : 0.6 }}
                >
                  <ShoppingCartIcon size={16} /> Add to Cart
                </button>
                <a
                  className="btn-custom-wa-order"
                  href={isValidDimensions ? `https://wa.me/919911678386?text=${waMessage}` : '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    pointerEvents: isValidDimensions ? 'auto' : 'none',
                    opacity: isValidDimensions ? 1 : 0.6
                  }}
                >
                  <WhatsAppIcon size={16} color="#FFFFFF" /> WhatsApp Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
