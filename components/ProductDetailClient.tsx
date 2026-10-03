'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { siteConfig } from '@/data/siteConfig';
import { 
  ShoppingCartIcon, 
  WhatsAppIcon, 
  FileTextIcon, 
  StarIcon, 
  TruckIcon, 
  ShieldCheckIcon, 
  ZapIcon,
  MinusIcon,
  PlusIcon
} from './Icons';

interface ProductDetailClientProps {
  product: Product;
}

export const ProductDetailClient: React.FC<ProductDetailClientProps> = ({ product }) => {
  const { addToCart, setIsQuoteModalOpen, setSelectedQuoteProduct } = useCart();
  const [selectedQty, setSelectedQty] = useState(product.moq || 100);
  const [selectedSize, setSelectedSize] = useState<string | null>(product.sizes && product.sizes.length > 0 ? product.sizes[0] : null);
  const [uploadedLogo, setUploadedLogo] = useState<File | null>(null);

  // Determine current unit rate based on tiers
  const activeTier = product.tiers && product.tiers.length > 0
    ? [...product.tiers].reverse().find((t) => selectedQty >= t.qty) || product.tiers[0]
    : { rate: product.price, qty: product.moq };

  const currentRate = activeTier ? activeTier.rate : product.price;
  const subtotal = currentRate * selectedQty;
  const gst = subtotal * 0.18;
  const grandTotal = subtotal + gst;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: currentRate,
      image: product.image,
      specs: product.specs,
      dimensions: product.dimensions,
      size: selectedSize,
      logo: uploadedLogo ? uploadedLogo.name : null
    }, selectedQty);
  };

  const handleGetQuote = () => {
    setSelectedQuoteProduct(product.title);
    setIsQuoteModalOpen(true);
  };

  const waMessage = encodeURIComponent(
    `Hello AS Print Gallery! I am interested in purchasing:
📦 *Product:* ${product.title}
• Quantity: ${selectedQty} pcs
• Quoted Tier Rate: ₹${currentRate.toFixed(2)}/pc
• Estimated Subtotal: ₹${subtotal.toFixed(2)} (Excl. GST)
Please confirm stock availability, GST invoice details, and dispatch timeline.`
  );

  return (
    <div style={{ padding: '40px 0', background: '#FAFAFC' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#94A3B8', marginBottom: '24px' }}>
          <Link href="/" style={{ color: '#64748B', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <Link href="/products" style={{ color: '#64748B', textDecoration: 'none' }}>Products</Link>
          <span>/</span>
          <span style={{ color: 'var(--primary)', fontWeight: 700 }}>{product.title}</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'start' }}>
          {/* Left Column: Image */}
          <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: 'var(--radius-lg, 12px)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', maxHeight: '480px' }}>
              <img
                src={product.image}
                alt={product.title}
                style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }}
              />
              {product.badge && (
                <div style={{ position: 'absolute', top: '14px', left: '14px' }}>
                  <span className={`badge-tag ${product.badgeClass || 'bestseller'}`}>{product.badge}</span>
                </div>
              )}
            </div>

            <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div style={{ background: '#F8FAFC', padding: '12px', borderRadius: '6px', border: '1px solid #E2E8F0', fontSize: '0.82rem' }}>
                <strong style={{ display: 'block', color: '#334155' }}>🏭 In-House Factory</strong>
                <span style={{ color: '#64748B' }}>Direct dispatch from Loni, Ghaziabad</span>
              </div>
              <div style={{ background: '#F8FAFC', padding: '12px', borderRadius: '6px', border: '1px solid #E2E8F0', fontSize: '0.82rem' }}>
                <strong style={{ display: 'block', color: '#334155' }}>🛡️ 100% ITC Eligible</strong>
                <span style={{ color: '#64748B' }}>Official GSTIN B2B Tax Invoice</span>
              </div>
            </div>
          </div>

          {/* Right Column: Product Config & Details */}
          <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: 'var(--radius-lg, 12px)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary)', letterSpacing: '0.5px' }}>
              {product.categoryLabel}
            </span>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-dark)', margin: '8px 0 12px 0', lineHeight: 1.3 }}>
              {product.title}
            </h1>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', gap: '2px', color: '#F59E0B' }}>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} size={15} filled={true} />
                ))}
              </div>
              <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155' }}>{product.rating.toFixed(1)}</span>
              <span style={{ fontSize: '0.82rem', color: '#64748B' }}>({product.reviews} verified orders)</span>
            </div>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '24px' }}>
              {product.fullDesc || product.desc}
            </p>

            {/* Wholesale Pricing Tiers */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1E293B', marginBottom: '8px' }}>
                Wholesale Quantity Tier Pricing (Direct Factory Rates):
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '10px' }}>
                {product.tiers.map((tier) => {
                  const isTierActive = activeTier.qty === tier.qty;
                  return (
                    <div
                      key={tier.qty}
                      onClick={() => setSelectedQty(tier.qty)}
                      style={{
                        padding: '10px',
                        borderRadius: '6px',
                        border: `1.5px solid ${isTierActive ? 'var(--primary)' : '#CBD5E1'}`,
                        background: isTierActive ? 'rgba(184, 27, 84, 0.05)' : '#FFFFFF',
                        cursor: 'pointer',
                        textAlign: 'center',
                        transition: 'all 0.2s'
                      }}
                    >
                      <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>{tier.qty}+ pcs</div>
                      <div style={{ fontSize: '1.05rem', fontWeight: 800, color: isTierActive ? 'var(--primary)' : '#0F172A', marginTop: '2px' }}>
                        ₹{tier.rate.toFixed(2)}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>/ pc</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quantity Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid #CBD5E1', borderRadius: '6px' }}>
                <button
                  type="button"
                  onClick={() => setSelectedQty(Math.max(product.moq || 10, selectedQty - 50))}
                  style={{ padding: '8px 12px', background: '#F1F5F9', border: 'none', cursor: 'pointer' }}
                  aria-label="Decrease quantity"
                >
                  <MinusIcon size={14} />
                </button>
                <input
                  type="number"
                  value={selectedQty}
                  onChange={(e) => setSelectedQty(Math.max(1, parseInt(e.target.value) || product.moq || 10))}
                  style={{ width: '80px', textAlign: 'center', border: 'none', fontWeight: 800, fontSize: '0.95rem', outline: 'none' }}
                />
                <button
                  type="button"
                  onClick={() => setSelectedQty(selectedQty + 50)}
                  style={{ padding: '8px 12px', background: '#F1F5F9', border: 'none', cursor: 'pointer' }}
                  aria-label="Increase quantity"
                >
                  <PlusIcon size={14} />
                </button>
              </div>
              <span style={{ fontSize: '0.82rem', color: '#64748B' }}>
                MOQ: <strong>{product.moq} pcs</strong>
              </span>
            </div>

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1E293B', marginBottom: '8px' }}>
                  Select Size:
                </label>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {product.sizes.map((size: string) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      style={{
                        padding: '8px 16px',
                        border: `2px solid ${selectedSize === size ? 'var(--primary)' : '#CBD5E1'}`,
                        background: selectedSize === size ? 'rgba(184, 27, 84, 0.05)' : '#fff',
                        color: selectedSize === size ? 'var(--primary)' : '#475569',
                        borderRadius: '6px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Logo / Design Upload */}
            {(product as any).allowLogoUpload && (
              <div style={{ marginBottom: '24px', padding: '16px', border: '1px dashed #94A3B8', borderRadius: '8px', background: '#F8FAFC' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1E293B', marginBottom: '8px' }}>
                  Upload Your Logo/Design (Optional):
                </label>
                <input 
                  type="file" 
                  accept="image/*,.pdf,.ai,.eps" 
                  onChange={(e) => setUploadedLogo(e.target.files ? e.target.files[0] : null)}
                  style={{ fontSize: '0.85rem', width: '100%' }}
                />
                <p style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '6px', marginBottom: 0 }}>Supported formats: PNG, JPG, PDF, AI. We will send a digital proof before printing.</p>
              </div>
            )}

            {/* Subtotal Display */}
            <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '8px', border: '1px solid #E2E8F0', marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontSize: '0.9rem', color: '#475569' }}>Rate: <strong>₹{currentRate.toFixed(2)}/pc</strong> &times; {selectedQty} pcs</span>
                <span style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary)' }}>
                  ₹{subtotal.toFixed(2)}
                </span>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '4px', textAlign: 'right' }}>
                +18% GST: ₹{gst.toFixed(2)} | Total: ₹{grandTotal.toFixed(2)}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
              <button
                type="button"
                className="btn-primary-hero"
                onClick={handleAddToCart}
                style={{ justifyContent: 'center', padding: '14px', fontSize: '0.95rem' }}
              >
                <ShoppingCartIcon size={18} /> Add to Cart
              </button>
              <button
                type="button"
                className="btn-outline-hero"
                onClick={handleGetQuote}
                style={{ justifyContent: 'center', padding: '14px', fontSize: '0.95rem', background: '#0F172A', color: '#FFF' }}
              >
                <FileTextIcon size={18} /> Get Custom Quote
              </button>
            </div>

            <a
              href={`https://wa.me/${siteConfig.phones.whatsappRaw}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                width: '100%',
                padding: '12px 0',
                borderRadius: 'var(--radius-sm, 6px)',
                background: '#25D366',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '0.9rem',
                textDecoration: 'none'
              }}
            >
              <WhatsAppIcon size={18} color="#FFFFFF" /> Order on WhatsApp Instantly
            </a>

            {/* Product Specifications Table */}
            <div style={{ marginTop: '32px', borderTop: '1px solid #E2E8F0', paddingTop: '24px' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1E293B', marginBottom: '12px' }}>
                Technical Specifications:
              </h3>
              <ul style={{ margin: 0, paddingLeft: '20px', color: '#475569', fontSize: '0.88rem', lineHeight: 1.8 }}>
                {product.specs.map((spec, idx) => (
                  <li key={idx}>{spec}</li>
                ))}
                {product.dimensions && (
                  <li><strong>Standard Dimensions:</strong> {product.dimensions}</li>
                )}
              </ul>
            </div>

            {/* Standard Dispatch Commitments */}
            <div style={{ marginTop: '24px', background: '#EFF6FF', padding: '14px', borderRadius: '6px', border: '1px solid #BFDBFE', fontSize: '0.82rem', color: '#1E40AF' }}>
              <div style={{ fontWeight: 700, marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <TruckIcon size={14} color="#1E40AF" /> Dispatch &amp; Delivery Commitments:
              </div>
              <div>• In-stock standard items: <strong>24-48 hrs</strong></div>
              <div>• Custom printed orders: <strong>3-5 working days</strong></div>
              <div>• Delivery: <strong>Delhi NCR same/next day</strong>, other cities 2-4 days</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
