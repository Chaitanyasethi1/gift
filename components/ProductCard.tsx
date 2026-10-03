'use client';

import React from 'react';
import Link from 'next/link';
import { StarIcon } from './Icons';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: any;
  onQuickView?: (product: any) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const originalPrice = product.mrp ? product.mrp.toFixed(2) : (product.selling_price * 1.5).toFixed(2);
  const currentPrice = (product.selling_price || 0).toFixed(2);

  const handleAddClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      title: product.name,
      price: product.selling_price,
      image: product.images?.[0] || '',
      specs: []
    }, product.moq || 1);
    
    // Show a visual confirmation (optional, but good for UX)
    const btn = e.currentTarget as HTMLButtonElement;
    const originalText = btn.innerText;
    btn.innerText = "ADDED ✓";
    btn.style.background = "#0F172A";
    setTimeout(() => {
      btn.innerText = originalText;
      btn.style.background = "#65A34A";
    }, 1500);
  };

  return (
    <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative', transition: 'box-shadow 0.2s' }} className="minimal-product-card">
      <Link href={`/products/${product.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Image Area */}
        <div style={{ position: 'relative', width: '100%', paddingTop: '100%', background: '#F8FAFC', borderBottom: '1px solid #F1F5F9' }}>
          <img
            src={product.images?.[0] || 'https://via.placeholder.com/400'}
            alt={product.name}
            loading="lazy"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', padding: '16px' }}
          />
          {/* Rating Badge */}
          {product.rating && (
            <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: '#65A34A', color: '#fff', padding: '2px 6px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '3px' }}>
              {Number(product.rating).toFixed(1)} <StarIcon size={10} filled={true} color="#fff" />
            </div>
          )}
        </div>

        {/* Text Area */}
        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1E293B', margin: '0 0 4px 0', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {product.name}
          </h3>
          <p style={{ fontSize: '0.8rem', color: '#64748B', margin: '0 0 16px 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {product.categories?.name || 'AS Print Gallery'}
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A' }}>₹{currentPrice}</span>
              <span style={{ fontSize: '0.75rem', color: '#94A3B8', textDecoration: 'line-through' }}>₹{originalPrice}</span>
            </div>
            
            <button 
              onClick={handleAddClick}
              style={{ background: '#65A34A', color: '#fff', border: 'none', padding: '6px 16px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', transition: 'background 0.2s' }}
              className="btn-add-minimal"
            >
              ADD
            </button>
          </div>
        </div>
      </Link>
      
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
