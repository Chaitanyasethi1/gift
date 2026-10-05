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
import { ProductReviewsSection } from './ProductReviewsSection';

interface SizeVariantItem {
  size: string;
  price: number;
  mrp?: number;
}

interface ProductDetailClientProps {
  product: Product & {
    variants?: SizeVariantItem[];
    allowLogoUpload?: boolean;
  };
}

export const ProductDetailClient: React.FC<ProductDetailClientProps> = ({ product }) => {
  const { addToCart, setIsQuoteModalOpen, setSelectedQuoteProduct } = useCart();
  
  // Extract variants if available
  const variantList: SizeVariantItem[] = Array.isArray((product as any).variants) && (product as any).variants.length > 0
    ? (product as any).variants
    : (product.sizes || []).map((s: string) => ({ size: s, price: product.price, mrp: (product as any).mrp || product.price * 1.5 }));

  const [selectedVariant, setSelectedVariant] = useState<SizeVariantItem | null>(
    variantList.length > 0 ? variantList[0] : null
  );

  // Active base price for the selected size
  const activeBasePrice = selectedVariant ? selectedVariant.price : (product.price || 10);

  // Determine admin-configured quantity packs / tiers
  const tiers = Array.isArray(product.tiers) && product.tiers.length > 0
    ? product.tiers
    : [
        { qty: product.moq || 50, rate: activeBasePrice, label: `${product.moq || 50} pcs Pack` },
        { qty: 200, rate: Math.round(activeBasePrice * 0.95), label: '200 pcs Pack' },
        { qty: 500, rate: Math.round(activeBasePrice * 0.90), label: '500 pcs Pack' },
        { qty: 1000, rate: Math.round(activeBasePrice * 0.85), label: '1000 pcs Bulk Rate' }
      ];

  const [selectedQty, setSelectedQty] = useState(
    tiers.length > 0 ? tiers[0].qty : (product.moq || 50)
  );
  const [uploadedLogo, setUploadedLogo] = useState<File | null>(null);

  const activeTier = [...tiers].reverse().find((t) => selectedQty >= t.qty) || tiers[0];

  // Base price proportion for size variants
  const baseProductPrice = product.price > 0 ? product.price : (tiers[0]?.rate || 1);
  const sizeRatio = activeBasePrice > 0 && baseProductPrice > 0 ? (activeBasePrice / baseProductPrice) : 1;
  const currentRate = activeTier ? (activeTier.rate * (sizeRatio > 0 ? sizeRatio : 1)) : activeBasePrice;

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
      size: selectedVariant ? selectedVariant.size : null,
      logo: uploadedLogo ? uploadedLogo.name : null
    }, selectedQty);
  };

  const handleGetQuote = () => {
    setSelectedQuoteProduct(product.title);
    setIsQuoteModalOpen(true);
  };

  const waMessage = encodeURIComponent(
    `Hello AS Print Gallery! I want to order:
📦 *Product:* ${product.title}
• Selected Size: ${selectedVariant ? selectedVariant.size : 'Standard'}
• Quantity / Pack: ${selectedQty} pcs
• Applied Unit Rate: ₹${currentRate.toFixed(2)} / pc
• Estimated Subtotal: ₹${subtotal.toFixed(2)} (Excl. GST)
Please confirm order and delivery timeline.`
  );

  return (
    <div style={{ padding: '40px 0', background: '#FAFAFC' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#94A3B8', marginBottom: '24px' }}>
          <Link href="/" style={{ color: '#64748B', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <Link href="/shop" style={{ color: '#64748B', textDecoration: 'none' }}>Products</Link>
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
              <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155' }}>{product.rating ? product.rating.toFixed(1) : '4.9'}</span>
              <span style={{ fontSize: '0.82rem', color: '#64748B' }}>({product.reviews || 120} verified orders)</span>
            </div>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '24px' }}>
              {product.fullDesc || product.desc}
            </p>

            {/* 1. SIZE SELECTION (Size ke hisab se rate) */}
            {variantList.length > 0 && (
              <div style={{ marginBottom: '24px', background: '#F8FAFC', padding: '16px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.88rem', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
                  <span>📏 1. Choose Size:</span>
                  {selectedVariant && (
                    <span style={{ color: '#10B981', fontWeight: 700, fontSize: '0.82rem' }}>
                      Base: ₹{selectedVariant.price} {selectedVariant.mrp ? `(MRP: ₹${selectedVariant.mrp})` : ''}
                    </span>
                  )}
                </label>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {variantList.map((v) => {
                    const isSelected = selectedVariant?.size === v.size;
                    return (
                      <button
                        key={v.size}
                        type="button"
                        onClick={() => setSelectedVariant(v)}
                        style={{
                          padding: '10px 16px',
                          border: `2px solid ${isSelected ? '#10B981' : '#CBD5E1'}`,
                          background: isSelected ? '#ECFDF5' : '#FFFFFF',
                          color: isSelected ? '#065F46' : '#334155',
                          borderRadius: '8px',
                          fontWeight: 700,
                          fontSize: '0.9rem',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '2px',
                          boxShadow: isSelected ? '0 2px 8px rgba(16, 185, 129, 0.2)' : 'none'
                        }}
                      >
                        <span>{v.size}</span>
                        {v.price > 0 && (
                          <span style={{ fontSize: '0.75rem', color: isSelected ? '#059669' : '#64748B', fontWeight: 600 }}>
                            ₹{v.price}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 2. PACK SIZES & BULK TIER PRICING */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                📦 2. Select Pack Quantity:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(125px, 1fr))', gap: '10px' }}>
                {tiers.map((tier) => {
                  const isTierActive = selectedQty === tier.qty;
                  const tierEffectiveRate = (tier.rate || activeBasePrice) * (sizeRatio > 0 ? sizeRatio : 1);
                  return (
                    <div
                      key={tier.qty}
                      onClick={() => setSelectedQty(tier.qty)}
                      style={{
                        padding: '12px 10px',
                        borderRadius: '8px',
                        border: `2px solid ${isTierActive ? '#7C3AED' : '#E2E8F0'}`,
                        background: isTierActive ? '#F5F3FF' : '#FFFFFF',
                        cursor: 'pointer',
                        textAlign: 'center',
                        transition: 'all 0.2s',
                        boxShadow: isTierActive ? '0 4px 12px rgba(124, 58, 237, 0.15)' : '0 1px 3px rgba(0,0,0,0.03)'
                      }}
                    >
                      <div style={{ fontSize: '0.85rem', color: '#1E293B', fontWeight: 800 }}>
                        {tier.label || `${tier.qty} pcs Pack`}
                      </div>
                      <div style={{ fontSize: '1.2rem', fontWeight: 900, color: isTierActive ? '#7C3AED' : '#0F172A', marginTop: '3px' }}>
                        ₹{tierEffectiveRate.toFixed(2)}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>per pc</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quantity Custom Adjuster */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155' }}>Custom Qty:</span>
              <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid #CBD5E1', borderRadius: '8px', background: '#fff' }}>
                <button
                  type="button"
                  onClick={() => setSelectedQty(Math.max(product.moq || 10, selectedQty - 50))}
                  style={{ padding: '8px 14px', background: '#F1F5F9', border: 'none', cursor: 'pointer', borderRadius: '6px 0 0 6px' }}
                  aria-label="Decrease quantity"
                >
                  <MinusIcon size={14} />
                </button>
                <input
                  type="number"
                  value={selectedQty}
                  onChange={(e) => setSelectedQty(Math.max(1, parseInt(e.target.value) || product.moq || 10))}
                  style={{ width: '90px', textAlign: 'center', border: 'none', fontWeight: 800, fontSize: '1rem', outline: 'none' }}
                />
                <button
                  type="button"
                  onClick={() => setSelectedQty(selectedQty + 50)}
                  style={{ padding: '8px 14px', background: '#F1F5F9', border: 'none', cursor: 'pointer', borderRadius: '0 6px 6px 0' }}
                  aria-label="Increase quantity"
                >
                  <PlusIcon size={14} />
                </button>
              </div>
              <span style={{ fontSize: '0.82rem', color: '#64748B' }}>
                MOQ: <strong>{product.moq || 50} pcs</strong>
              </span>
            </div>

            {/* Logo / Design Upload */}
            {(product as any).allowLogoUpload && (
              <div style={{ marginBottom: '24px', padding: '16px', border: '1px dashed #94A3B8', borderRadius: '8px', background: '#F8FAFC' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1E293B', marginBottom: '8px' }}>
                  🎨 Upload Your Brand Logo/Design (Optional):
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

            {/* Live Subtotal Display */}
            <div style={{ background: '#F8FAFC', padding: '18px 20px', borderRadius: '10px', border: '1.5px solid #E2E8F0', marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <div style={{ fontSize: '0.9rem', color: '#475569' }}>
                    Rate: <strong style={{ color: '#0F172A' }}>₹{currentRate.toFixed(2)}/pc</strong> &times; {selectedQty} pcs
                  </div>
                  {selectedVariant && (
                    <div style={{ fontSize: '0.8rem', color: '#10B981', fontWeight: 700, marginTop: '2px' }}>
                      Size: {selectedVariant.size}
                    </div>
                  )}
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#B91C1C' }}>
                    ₹{subtotal.toFixed(2)}
                  </span>
                  <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '2px' }}>
                    +18% GST: ₹{gst.toFixed(2)} | <strong>Total: ₹{grandTotal.toFixed(2)}</strong>
                  </div>
                </div>
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

        {/* 🌟 CUSTOMER RATINGS & REVIEWS + SIMILAR PRODUCTS + PINCODE CHECK (FROM SCREENSHOT) */}
        <ProductReviewsSection currentProduct={product} />

      </div>

      {/* 📱 STICKY BOTTOM ACTION BAR (Exact Screenshot Style: White Add to Cart + Purple Buy Now) */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        padding: '10px 16px',
        boxShadow: '0 -4px 16px rgba(0,0,0,0.08)',
        zIndex: 90,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px'
      }}>
        <div style={{ maxWidth: '600px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <button
            type="button"
            onClick={handleAddToCart}
            style={{
              background: '#FFFFFF',
              color: '#7C3AED',
              border: '1.5px solid #7C3AED',
              borderRadius: '8px',
              padding: '12px',
              fontWeight: 800,
              fontSize: '0.95rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'all 0.2s'
            }}
          >
            <ShoppingCartIcon size={18} color="#7C3AED" />
            Add to Cart
          </button>

          <button
            type="button"
            onClick={() => {
              handleAddToCart();
              window.location.href = '/cart';
            }}
            style={{
              background: 'linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              padding: '12px',
              fontWeight: 800,
              fontSize: '0.95rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 4px 12px rgba(124, 58, 237, 0.3)',
              transition: 'all 0.2s'
            }}
          >
            <span>⏩</span>
            Buy Now
          </button>
        </div>
      </div>

    </div>
  );
};
