'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: any;
  onQuickView?: (product: any) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, setIsCartOpen, showToast } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedPackIndex, setSelectedPackIndex] = useState(0);

  // 1. Extract image list
  const imageList: string[] = useMemo(() => {
    const raw = product?.images;
    if (Array.isArray(raw) && raw.length > 0) return raw.filter(Boolean);
    if (typeof raw === 'string') {
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed.filter(Boolean);
      } catch {}
      if (raw) return [raw];
    }
    return product?.image ? [product.image] : ['/assets/corrugated_box.jpg'];
  }, [product]);

  // 2. Extract pack variants
  const packs = useMemo(() => {
    // If product has size variants
    if (Array.isArray(product?.variants) && product.variants.length > 0) {
      return product.variants.map((v: any, i: number) => ({
        label: v.size || `Pack ${i + 1}`,
        price: Number(v.price || product.selling_price || product.price || 0),
        mrp: Number(v.mrp || 0),
        index: i
      }));
    }
    // If product has wholesale tiers / pack sizes
    if (Array.isArray(product?.tiers) && product.tiers.length > 0) {
      return product.tiers.map((t: any, i: number) => ({
        label: t.label || `${t.qty} pcs`,
        price: Number(t.rate || product.selling_price || product.price || 0),
        qty: t.qty,
        index: i
      }));
    }
    return [];
  }, [product]);

  // Show only as many packs as the product actually has packs or uploaded images
  const maxOptionsCount = Math.max(1, Math.min(
    packs.length > 0 ? packs.length : imageList.length,
    Math.max(packs.length, imageList.length)
  ));

  const availablePacks = useMemo(() => {
    if (packs.length > 0) {
      // Limit to whichever is higher or available
      return packs.slice(0, Math.max(packs.length, 1));
    }
    if (imageList.length > 1) {
      return imageList.map((_, i) => ({
        label: `Pack ${i + 1}`,
        price: Number(product?.selling_price || product?.price || 0),
        index: i
      }));
    }
    return [];
  }, [packs, imageList, product]);

  // Active image linked to selected pack
  // Selecting Pack 1 (index 0) shows 1st image, Pack 2 (index 1) shows 2nd image, etc.
  const activeImage = useMemo(() => {
    if (imageList.length === 0) return '/assets/corrugated_box.jpg';
    const targetIdx = selectedPackIndex % imageList.length;
    return imageList[targetIdx] || imageList[0];
  }, [imageList, selectedPackIndex]);

  const activePack = availablePacks[selectedPackIndex] || null;
  const sellingPrice = activePack ? activePack.price : Number(product?.selling_price || product?.price || 0);
  const mrp = Number(product?.mrp || 0);
  const originalPrice = mrp > 0 ? mrp.toFixed(2) : (sellingPrice * 1.5).toFixed(2);
  const currentPrice = sellingPrice.toFixed(2);
  const targetSlug = product.slug || product.id;

  const parseGst = (val: any) => {
    if (val === null || val === undefined || val === '') return 18;
    const num = typeof val === 'number' ? val : parseFloat(String(val).replace(/[^0-9.]/g, ''));
    return isNaN(num) ? 18 : num;
  };

  const handleAddClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const gstRate = parseGst(product.gst_rate ?? product.gst_percentage);
    const packLabel = activePack?.label ? ` (${activePack.label})` : '';
    addToCart({
      id: `${product.id}-${selectedPackIndex}`,
      title: `${product.name || product.title || 'Product'}${packLabel}`,
      price: sellingPrice,
      image: activeImage,
      specs: product.specs || [],
      gstRate: gstRate
    }, product.moq || 1);
    setIsCartOpen(true);
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    if (!isWishlisted) {
      showToast('❤️ Saved to your wishlist');
    }
  };

  const handlePackSelect = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedPackIndex(index);
  };

  // Subtitle / Specs line like reference photo ("Regular • Cherry Purple")
  const subtitle = useMemo(() => {
    if (product.specs && product.specs.length > 0) {
      return product.specs.slice(0, 2).join(' • ');
    }
    return product.categories?.name || product.categoryLabel || 'Factory Direct Packaging';
  }, [product]);

  return (
    <Link 
      href={`/products/${targetSlug}`}
      prefetch={true}
      className="gymshark-style-product-card"
      style={{ 
        background: 'transparent', 
        border: 'none', 
        borderRadius: '0', 
        overflow: 'hidden', 
        display: 'flex', 
        flexDirection: 'column', 
        position: 'relative', 
        textDecoration: 'none',
        color: 'inherit',
        cursor: 'pointer',
        touchAction: 'manipulation'
      }} 
    >
      {/* 1. Image Container (Matching Reference Layout) */}
      <div 
        style={{ 
          position: 'relative', 
          width: '100%', 
          paddingTop: '125%', // 4:5 elegant vertical portrait aspect ratio matching reference
          background: '#F4F4F5', 
          borderRadius: '4px',
          overflow: 'hidden'
        }}
      >
        <Image
          src={activeImage}
          alt={product.name || product.title || 'Product'}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          loading="lazy"
          style={{ objectFit: 'contain', padding: '14px', transition: 'transform 0.3s ease, opacity 0.2s ease' }}
        />

        {/* Top-Left: Quick Add To Bag Icon Button */}
        <button
          type="button"
          onClick={handleAddClick}
          aria-label="Quick Add to Bag"
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            zIndex: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.15s ease'
          }}
          className="card-quick-add-btn"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
            <line x1="12" y1="13" x2="12" y2="17" />
            <line x1="10" y1="15" x2="14" y2="15" />
          </svg>
        </button>

        {/* Top-Right: Wishlist Heart Icon Button */}
        <button
          type="button"
          onClick={handleWishlistClick}
          aria-label="Save to Wishlist"
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            zIndex: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.15s ease'
          }}
          className="card-wishlist-btn"
        >
          <svg 
            width="22" 
            height="22" 
            viewBox="0 0 24 24" 
            fill={isWishlisted ? "#E11D48" : "none"} 
            stroke={isWishlisted ? "#E11D48" : "#111827"} 
            strokeWidth="1.9" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </button>

        {/* Bottom-Left: "New" or Badge Pill (Exact Reference Style) */}
        <div 
          style={{ 
            position: 'absolute', 
            bottom: '10px', 
            left: '10px', 
            background: '#FFFFFF', 
            color: '#111827', 
            padding: '3px 8px', 
            borderRadius: '2px', 
            fontSize: '0.72rem', 
            fontWeight: 700, 
            letterSpacing: '0.2px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            zIndex: 2,
            textTransform: 'capitalize'
          }}
        >
          {product.badge || 'New'}
        </div>
      </div>

      {/* 2. Text Content (Left-Aligned, Minimal, Matching Reference) */}
      <div style={{ paddingTop: '10px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
        {/* Title */}
        <h3 
          style={{ 
            fontSize: '0.92rem', 
            fontWeight: 700, 
            color: '#111827', 
            margin: 0, 
            lineHeight: 1.35,
            display: '-webkit-box', 
            WebkitLineClamp: 1, 
            WebkitBoxOrient: 'vertical', 
            overflow: 'hidden' 
          }}
        >
          {product.name || product.title}
        </h3>

        {/* Subtitle / Spec Line */}
        <p 
          style={{ 
            fontSize: '0.8rem', 
            color: '#71717A', 
            margin: 0, 
            whiteSpace: 'nowrap', 
            overflow: 'hidden', 
            textOverflow: 'ellipsis',
            lineHeight: 1.3
          }}
        >
          {subtitle}
        </p>

        {/* Pack / Variant Selector Pills (Linked to Images - Requirement 1) */}
        {availablePacks.length > 1 && (
          <div 
            style={{ 
              display: 'flex', 
              gap: '6px', 
              margin: '4px 0 2px 0', 
              overflowX: 'auto', 
              scrollbarWidth: 'none',
              paddingBottom: '2px'
            }}
          >
            {availablePacks.map((packItem, idx) => {
              const isSelected = selectedPackIndex === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => handlePackSelect(e, idx)}
                  style={{
                    padding: '2px 8px',
                    borderRadius: '3px',
                    border: isSelected ? '1.5px solid #111827' : '1px solid #E4E4E7',
                    background: isSelected ? '#111827' : '#FFFFFF',
                    color: isSelected ? '#FFFFFF' : '#3F3F46',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.15s ease'
                  }}
                  title={`View image for ${packItem.label}`}
                >
                  {packItem.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Price Line */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '2px' }}>
          <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#111827' }}>
            ₹{currentPrice}
          </span>
          {mrp > sellingPrice && (
            <span style={{ fontSize: '0.78rem', color: '#A1A1AA', textDecoration: 'line-through' }}>
              ₹{originalPrice}
            </span>
          )}
        </div>
      </div>

      <style>{`
        .gymshark-style-product-card:hover .card-quick-add-btn,
        .gymshark-style-product-card:hover .card-wishlist-btn {
          transform: scale(1.1);
        }
        .card-quick-add-btn:active,
        .card-wishlist-btn:active {
          transform: scale(0.9);
        }
      `}</style>
    </Link>
  );
};
