'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StarIcon } from './Icons';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  product: any;
  onQuickView?: (product: any) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, setIsCartOpen } = useCart();
  const router = useRouter();
  const sellingPrice = Number(product?.selling_price || product?.price || 0);
  const mrp = Number(product?.mrp || 0);
  const originalPrice = mrp > 0 ? mrp.toFixed(2) : (sellingPrice * 1.5).toFixed(2);
  const currentPrice = sellingPrice.toFixed(2);

  const parseGst = (val: any) => {
    if (val === null || val === undefined || val === '') return 18;
    const num = typeof val === 'number' ? val : parseFloat(String(val).replace(/[^0-9.]/g, ''));
    return isNaN(num) ? 18 : num;
  };

  const handleAddClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const gstRate = parseGst(product.gst_rate ?? product.gst_percentage);
    addToCart({
      id: String(product.id),
      title: product.name || product.title || 'Product',
      price: sellingPrice,
      image: product.images?.[0] || product.image || '',
      specs: product.specs || [],
      gstRate: gstRate
    }, product.moq || 1);
    setIsCartOpen(true);
  };

  const handleCardClick = () => {
    const targetSlug = product.slug || product.id;
    if (targetSlug) {
      router.push(`/products/${targetSlug}`);
    }
  };

  return (
    <div 
      onClick={handleCardClick}
      style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative', transition: 'box-shadow 0.2s', cursor: 'pointer' }} 
      className="minimal-product-card"
    >
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Image Area */}
        <div style={{ position: 'relative', width: '100%', paddingTop: '100%', background: '#F8FAFC', borderBottom: '1px solid #F1F5F9' }}>
          <Image
            src={product.images?.[0] || product.image || 'https://via.placeholder.com/400'}
            alt={product.name || product.title || 'Product'}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            loading="lazy"
            style={{ objectFit: 'contain', padding: '16px' }}
          />
          {/* Rating Badge */}
          {product.rating && (
            <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: '#166534', color: '#fff', padding: '2px 6px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '3px', zIndex: 2 }}>
              {Number(product.rating).toFixed(1)} <StarIcon size={10} filled={true} color="#fff" />
            </div>
          )}
        </div>

        {/* Text Area */}
        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1E293B', margin: '0 0 4px 0', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {product.name || product.title}
          </h3>
          <p style={{ fontSize: '0.8rem', color: '#64748B', margin: '0 0 16px 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {product.categories?.name || product.categoryLabel || 'AS Print Gallery'}
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A' }}>₹{currentPrice}</span>
              <span style={{ fontSize: '0.75rem', color: '#64748B', textDecoration: 'line-through' }}>₹{originalPrice}</span>
            </div>
            
            <button 
              type="button"
              onClick={handleAddClick}
              style={{ background: '#166534', color: '#fff', border: 'none', padding: '6px 16px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', transition: 'background 0.2s' }}
              className="btn-add-minimal"
              aria-label={`Add ${product.name || product.title} to cart`}
            >
              ADD
            </button>
          </div>
        </div>
      </div>
      
      <style>{`
        .minimal-product-card:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        .btn-add-minimal:hover {
          background: #4d8236 !important;
        }
      `}</style>
    </div>
  );
};
