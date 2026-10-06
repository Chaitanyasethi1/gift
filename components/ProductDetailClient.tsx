'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { siteConfig } from '@/data/siteConfig';
import { 
  ShoppingCartIcon, 
  WhatsAppIcon, 
  StarIcon, 
  TruckIcon, 
  ShieldCheckIcon, 
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
    selling_price?: number;
    gst_rate?: number;
    gst_percentage?: number;
  };
  similarProducts?: any[];
}

export const ProductDetailClient: React.FC<ProductDetailClientProps> = ({ product, similarProducts }) => {
  const { addToCart, setIsCartOpen, setIsQuoteModalOpen, setSelectedQuoteProduct } = useCart();
  
  // Extract and memoize variants
  const variantList: SizeVariantItem[] = useMemo(() => {
    if (Array.isArray(product.variants) && product.variants.length > 0) {
      return product.variants;
    }
    const sizes = ((product as any).sizes || []) as string[];
    if (sizes.length > 0) {
      const baseP = Number(product.selling_price || product.price || 10);
      return sizes.map((s: string) => ({
        size: s,
        price: baseP,
        mrp: (product as any).mrp || Math.round(baseP * 1.5)
      }));
    }
    return [];
  }, [product]);

  const [selectedVariantIndex, setSelectedVariantIndex] = useState<number>(0);
  const selectedVariant = variantList[selectedVariantIndex] || (variantList.length > 0 ? variantList[0] : null);

  // Active base price for the selected size
  const activeBasePrice = selectedVariant ? Number(selectedVariant.price || 0) : (Number(product.selling_price || product.price) || 10);

  // Memoize and Deduplicate quantity packs / tiers by qty
  const tiers = useMemo(() => {
    const raw = Array.isArray(product.tiers) && product.tiers.length > 0
      ? product.tiers
      : [
          { qty: product.moq || 50, rate: activeBasePrice, label: `${product.moq || 50} pcs Pack` },
          { qty: 200, rate: Math.round(activeBasePrice * 0.95), label: '200 pcs Pack' },
          { qty: 500, rate: Math.round(activeBasePrice * 0.90), label: '500 pcs Pack' },
          { qty: 1000, rate: Math.round(activeBasePrice * 0.85), label: 'Pack of 1000' }
        ];

    // Deduplicate by qty so duplicate buttons never appear
    const seen = new Set<number>();
    const list: typeof raw = [];
    for (const item of raw) {
      const q = Number(item.qty);
      if (!seen.has(q) && q > 0) {
        seen.add(q);
        list.push(item);
      }
    }
    return list.sort((a, b) => Number(a.qty) - Number(b.qty));
  }, [product.tiers, product.moq, activeBasePrice]);

  // Extract all images for multi-photo gallery
  const parsedImageList: string[] = useMemo(() => {
    const rawImages = (product as any).images;
    if (Array.isArray(rawImages) && rawImages.length > 0) {
      return rawImages.filter(Boolean);
    }
    if (typeof rawImages === 'string') {
      try {
        const p = JSON.parse(rawImages);
        if (Array.isArray(p) && p.length > 0) return p.filter(Boolean);
      } catch {}
      if (rawImages) return [rawImages];
    }
    return product.image ? [product.image] : ['/assets/corrugated_box.jpg'];
  }, [product]);

  const [activeImage, setActiveImage] = useState<string>(
    parsedImageList.length > 0 ? parsedImageList[0] : product.image
  );

  const initialQty = useMemo(() => {
    return tiers.length > 0 ? tiers[0].qty : (product.moq || 50);
  }, [tiers]);

  const [selectedPackQty, setSelectedPackQty] = useState<number>(initialQty);
  const [packCount, setPackCount] = useState<number>(1);
  const [uploadedLogo, setUploadedLogo] = useState<File | null>(null);

  const activeTier = useMemo(() => {
    return tiers.find((t) => t.qty === selectedPackQty) || tiers[0];
  }, [tiers, selectedPackQty]);

  // 💰 ROBUST ACCURATE PRICE CALCULATION ENGINE
  const unitPrice = useMemo(() => {
    if (selectedVariant && Number(selectedVariant.price) > 0) {
      return Number(selectedVariant.price);
    }
    if (activeTier && Number(activeTier.rate) > 0) {
      const r = Number(activeTier.rate);
      return (r > 40 && selectedPackQty >= 20) ? (r / selectedPackQty) : r;
    }
    return Number(product.selling_price || product.price) || 10;
  }, [selectedVariant, activeTier, selectedPackQty, product]);

  const singlePackPrice = unitPrice * selectedPackQty;
  const totalPieces = selectedPackQty * packCount;
  const subtotal = singlePackPrice * packCount;

  // Determine product-specific GST Rate with ultra-robust parsing
  const gstRate = useMemo(() => {
    const rawGst = (product as any).gst_rate ?? (product as any).gst_percentage;
    if (rawGst !== null && rawGst !== undefined && rawGst !== '') {
      return typeof rawGst === 'number' ? rawGst : (parseFloat(String(rawGst).replace(/[^0-9.]/g, '')) || 18);
    }
    return 18;
  }, [product]);

  const gst = subtotal * (gstRate / 100);
  const grandTotal = subtotal + gst;

  const handleAddToCart = () => {
    addToCart({
      id: `${product.id}-${selectedVariant ? `${selectedVariant.size}-${selectedVariant.price}` : 'std'}-${selectedPackQty}`,
      title: `${product.title} (Pack of ${selectedPackQty}${selectedVariant ? ` - ${selectedVariant.size}` : ''})`,
      price: singlePackPrice,
      image: activeImage || product.image,
      specs: product.specs,
      dimensions: product.dimensions,
      size: selectedVariant ? selectedVariant.size : null,
      logo: uploadedLogo ? uploadedLogo.name : null,
      gstRate: gstRate
    }, packCount);
    setIsCartOpen(true);
  };

  const handleGetQuote = () => {
    setSelectedQuoteProduct(product.title);
    setIsQuoteModalOpen(true);
  };

  const waMessage = useMemo(() => {
    return encodeURIComponent(
      `Hello AS Print Gallery! I want to order:
📦 *Product:* ${product.title}
• Selected Size: ${selectedVariant ? selectedVariant.size : 'Standard'}
• Pack Option: Pack of ${selectedPackQty}
• Number of Packs: ${packCount} pack(s) (${totalPieces} pcs total)
• Total Calculated Price: ₹${grandTotal.toFixed(2)} (Incl. ${gstRate}% GST)
Please confirm order and delivery timeline.`
    );
  }, [product.title, selectedVariant, selectedPackQty, packCount, totalPieces, grandTotal, gstRate]);

  return (
    <div style={{ padding: '30px 0 100px 0', background: '#FAFAFC', minHeight: '100vh' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#94A3B8', marginBottom: '20px' }}>
          <Link href="/" style={{ color: '#64748B', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <Link href="/shop" style={{ color: '#64748B', textDecoration: 'none' }}>Products</Link>
          <span>/</span>
          <span style={{ color: 'var(--primary)', fontWeight: 700 }}>{product.title}</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'start' }}>
          {/* Left Column: Multi-Image Gallery */}
          <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            
            {/* Main Active Image Display */}
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', minHeight: '340px', maxHeight: '460px', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={activeImage || product.image}
                alt={product.title}
                loading="eager"
                decoding="async"
                style={{ width: '100%', maxHeight: '440px', objectFit: 'contain', display: 'block', transition: 'opacity 0.2s' }}
              />
              {product.badge && (
                <div style={{ position: 'absolute', top: '14px', left: '14px' }}>
                  <span className={`badge-tag ${product.badgeClass || 'bestseller'}`}>{product.badge}</span>
                </div>
              )}
            </div>

            {/* Thumbnail Strip for Multi-photos */}
            {parsedImageList.length > 1 && (
              <div style={{ display: 'flex', gap: '10px', marginTop: '14px', overflowX: 'auto', paddingBottom: '6px' }}>
                {parsedImageList.map((img, idx) => {
                  const isActive = (activeImage || product.image) === img;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImage(img)}
                      style={{
                        flex: '0 0 65px',
                        height: '65px',
                        padding: '2px',
                        border: `2.5px solid ${isActive ? '#16A34A' : '#CBD5E1'}`,
                        borderRadius: '8px',
                        background: '#FFF',
                        cursor: 'pointer',
                        overflow: 'hidden',
                        boxShadow: isActive ? '0 2px 8px rgba(22, 163, 74, 0.25)' : 'none',
                        transition: 'all 0.15s ease',
                        touchAction: 'manipulation'
                      }}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
                    </button>
                  );
                })}
              </div>
            )}

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
          <div style={{ background: '#FFFFFF', padding: '28px', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: '#16A34A', letterSpacing: '0.5px' }}>
              {product.categoryLabel}
            </span>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', margin: '6px 0 10px 0', lineHeight: 1.3 }}>
              {product.title}
            </h1>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <div style={{ display: 'flex', gap: '2px', color: '#F59E0B' }}>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} size={15} filled={true} />
                ))}
              </div>
              <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155' }}>{product.rating ? product.rating.toFixed(1) : '4.9'}</span>
              <span style={{ fontSize: '0.82rem', color: '#64748B' }}>({product.reviews || 120} verified orders)</span>
            </div>

            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.55, marginBottom: '20px' }}>
              {product.fullDesc || product.desc}
            </p>

            {/* 1. SIZE SELECTION (Completely Independent from Pack Selection) */}
            {variantList.length > 0 && (
              <div style={{ marginBottom: '20px', background: '#F8FAFC', padding: '14px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.88rem', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
                  <span>📏 1. Choose Size:</span>
                  {selectedVariant && (
                    <span style={{ color: '#16A34A', fontWeight: 700, fontSize: '0.82rem' }}>
                      Base: ₹{selectedVariant.price} {selectedVariant.mrp ? `(MRP: ₹${selectedVariant.mrp})` : ''}
                    </span>
                  )}
                </label>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {variantList.map((v, idx) => {
                    const isSelected = selectedVariantIndex === idx;
                    return (
                      <button
                        key={`${v.size}-${v.price}-${idx}`}
                        type="button"
                        onClick={() => setSelectedVariantIndex(idx)}
                        style={{
                          padding: '8px 16px',
                          border: `2px solid ${isSelected ? '#16A34A' : '#CBD5E1'}`,
                          background: isSelected ? '#F0FDF4' : '#FFFFFF',
                          color: isSelected ? '#15803D' : '#334155',
                          borderRadius: '8px',
                          fontWeight: 700,
                          fontSize: '0.9rem',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '2px',
                          boxShadow: isSelected ? '0 2px 6px rgba(22, 163, 74, 0.18)' : 'none',
                          touchAction: 'manipulation'
                        }}
                      >
                        <span>{v.size}</span>
                        {v.price > 0 && (
                          <span style={{ fontSize: '0.75rem', color: isSelected ? '#16A34A' : '#64748B', fontWeight: 600 }}>
                            ₹{v.price}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 2. PACK OF SELECTION (Deduplicated, Clean & Independent) */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
                Pack Of
              </label>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {tiers.map((tier, tIdx) => {
                  const isSelected = selectedPackQty === tier.qty;
                  const labelText = tier.label && !tier.label.toLowerCase().includes('per pc') && !tier.label.toLowerCase().includes('rate')
                    ? tier.label
                    : `Pack of ${tier.qty}`;
                  return (
                    <button
                      key={`${tier.qty}-${tIdx}`}
                      type="button"
                      onClick={() => setSelectedPackQty(tier.qty)}
                      style={{
                        padding: '9px 18px',
                        borderRadius: '8px',
                        border: `2px solid ${isSelected ? '#16A34A' : '#CBD5E1'}`,
                        background: isSelected ? '#F0FDF4' : '#FFFFFF',
                        color: isSelected ? '#15803D' : '#334155',
                        fontWeight: isSelected ? 800 : 600,
                        fontSize: '0.92rem',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        boxShadow: isSelected ? '0 2px 6px rgba(22, 163, 74, 0.18)' : 'none',
                        touchAction: 'manipulation'
                      }}
                    >
                      {labelText}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. QUANTITY COUNTER & DIRECT TOTAL ADD BUTTON (Exact Screenshot Layout) */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '14px' }}>
              
              {/* - 1 + Pack Counter */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                border: '1.5px solid #86EFAC',
                borderRadius: '8px',
                background: '#F0FDF4',
                overflow: 'hidden',
                height: '50px'
              }}>
                <button
                  type="button"
                  onClick={() => setPackCount(Math.max(1, packCount - 1))}
                  style={{
                    width: '42px',
                    height: '100%',
                    border: 'none',
                    background: 'transparent',
                    color: '#16A34A',
                    fontSize: '1.4rem',
                    fontWeight: 900,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  aria-label="Decrease packs"
                >
                  −
                </button>
                <span style={{
                  minWidth: '38px',
                  textAlign: 'center',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  color: '#15803D'
                }}>
                  {packCount}
                </span>
                <button
                  type="button"
                  onClick={() => setPackCount(packCount + 1)}
                  style={{
                    width: '42px',
                    height: '100%',
                    border: 'none',
                    background: 'transparent',
                    color: '#16A34A',
                    fontSize: '1.4rem',
                    fontWeight: 900,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  aria-label="Increase packs"
                >
                  +
                </button>
              </div>

              {/* Add ₹ Total Direct Price Button */}
              <button
                type="button"
                onClick={handleAddToCart}
                style={{
                  flex: 1,
                  height: '50px',
                  background: '#2E7D32',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 12px rgba(46, 125, 50, 0.28)',
                  transition: 'background 0.2s'
                }}
              >
                Add ₹ {grandTotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </button>
            </div>

            {/* 4. BULK ORDER WHATSAPP BUTTON (Exact Screenshot Style) */}
            <a
              href={`https://wa.me/${siteConfig.phones.whatsappRaw}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                width: '100%',
                height: '48px',
                borderRadius: '8px',
                background: '#388E3C',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '1rem',
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(56, 142, 60, 0.22)',
                marginBottom: '16px',
                transition: 'all 0.2s'
              }}
            >
              <WhatsAppIcon size={20} color="#FFFFFF" /> Bulk order
            </a>

            {/* Optional Custom Quote Link */}
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <button
                type="button"
                onClick={handleGetQuote}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#64748B',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
              >
                Need custom sizes or specialized die cuts? Get a Custom Quote →
              </button>
            </div>

            {/* Logo / Design Upload */}
            {(product as any).allowLogoUpload && (
              <div style={{ marginBottom: '20px', padding: '14px', border: '1px dashed #94A3B8', borderRadius: '8px', background: '#F8FAFC' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1E293B', marginBottom: '6px' }}>
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

            {/* Price Breakdown Details Box */}
            <div style={{ background: '#F8FAFC', padding: '16px 18px', borderRadius: '10px', border: '1px solid #E2E8F0', marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '6px' }}>
                <span style={{ fontSize: '0.88rem', color: '#334155' }}>
                  Selected: <strong>Pack of {selectedPackQty}</strong> &times; <strong>{packCount} {packCount > 1 ? 'packs' : 'pack'}</strong> ({totalPieces} pcs)
                </span>
                {selectedVariant && (
                  <span style={{ fontSize: '0.82rem', color: '#16A34A', fontWeight: 700 }}>
                    Size: {selectedVariant.size}
                  </span>
                )}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingTop: '8px', borderTop: '1px dashed #CBD5E1', flexWrap: 'wrap', gap: '8px' }}>
                <div style={{ fontSize: '0.82rem', color: '#64748B' }}>
                  Subtotal: ₹{subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })} • GST ({gstRate}%): ₹{gst.toLocaleString('en-IN', { minimumFractionDigits: 2 })} • Shipping: <span style={{ color: '#16A34A', fontWeight: 700 }}>FREE</span>
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0F172A' }}>
                  Total: ₹{grandTotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
            </div>

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
        <ProductReviewsSection currentProduct={product} similarProducts={similarProducts} />

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
        boxShadow: '0 -4px 16px rgba(0,0,0,0.12)',
        zIndex: 1500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px'
      }}>
        <div style={{ maxWidth: '600px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <button
            type="button"
            onClick={handleAddToCart}
            style={{
              background: '#2E7D32',
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
              gap: '6px',
              boxShadow: '0 2px 8px rgba(46, 125, 50, 0.25)',
              touchAction: 'manipulation'
            }}
          >
            <ShoppingCartIcon size={18} color="#FFFFFF" />
            Add ₹{grandTotal.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
          </button>

          <a
            href={`https://wa.me/${siteConfig.phones.whatsappRaw}?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#388E3C',
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
              gap: '6px',
              textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(56, 142, 60, 0.25)',
              touchAction: 'manipulation'
            }}
          >
            <WhatsAppIcon size={18} color="#FFFFFF" />
            Bulk order
          </a>
        </div>
      </div>

    </div>
  );
};
