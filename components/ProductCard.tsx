'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ShoppingCartIcon, WhatsAppIcon, FileTextIcon, StarIcon, EyeIcon } from './Icons';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart, setIsQuoteModalOpen, setSelectedQuoteProduct } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleGetQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedQuoteProduct(product.title);
    setIsQuoteModalOpen(true);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      specs: product.specs,
      dimensions: product.dimensions
    }, product.moq || 1);
  };

  const waMessage = encodeURIComponent(
    `Hi AS Print Gallery! I want to get a direct factory quote for "${product.title}" (MOQ: ${product.moq} pcs). Please share pricing and dispatch timeline.`
  );

  return (
    <div className="product-card" data-id={product.id} data-category={product.category}>
      <div className="product-thumb-wrap">
        <Link href={`/products/${product.slug}`} aria-label={product.title}>
          <img
            src={product.image}
            alt={product.title}
            className="product-img"
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Link>

        {product.badge && (
          <div className="product-badge-overlay">
            <span className={`badge-tag ${product.badgeClass || 'bestseller'}`}>{product.badge}</span>
          </div>
        )}

        <button
          type="button"
          className={`btn-wishlist-toggle ${isWishlisted ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            setIsWishlisted(!isWishlisted);
          }}
          aria-label={isWishlisted ? 'Remove from Wishlist' : 'Save to Wishlist'}
        >
          {isWishlisted ? '❤️' : '🤍'}
        </button>

        {onQuickView && (
          <div
            className="product-quick-overlay"
            onClick={() => onQuickView(product)}
            style={{ cursor: 'pointer' }}
          >
            <button
              type="button"
              className="btn-quick-view"
              title="Quick View"
              aria-label={`Quick View ${product.title}`}
            >
              <EyeIcon size={16} />
            </button>
          </div>
        )}
      </div>

      <div className="product-details">
        <div className="product-cat-label">{product.categoryLabel}</div>
        <h3 className="product-title" title={product.title}>
          <Link href={`/products/${product.slug}`}>{product.title}</Link>
        </h3>

        <div className="product-rating-row">
          <span className="star-icons" style={{ display: 'inline-flex', gap: '2px', color: '#F59E0B' }}>
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} size={13} filled={true} />
            ))}
          </span>
          <span className="rating-score">{product.rating.toFixed(1)}</span>
          <span className="reviews-count">({product.reviews})</span>
        </div>

        {product.specs && product.specs.length > 0 && (
          <div className="product-specs-chips">
            {product.specs.slice(0, 3).map((s, idx) => (
              <span key={idx} className="spec-chip">
                {s}
              </span>
            ))}
          </div>
        )}

        <div className="product-pricing-row">
          <div className="price-main">
            <span className="price-from-label">Starting at</span>
            <div className="price-amount">
              ₹{(product.startingAt || product.price).toFixed(2)}{' '}
              <span className="unit">/ pc</span>
            </div>
          </div>
          <div className="moq-tag">MOQ: {product.moq} pcs</div>
        </div>

        <div className="product-card-actions" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          <button
            type="button"
            className="btn-card-cart"
            onClick={handleAddToCart}
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
          >
            <ShoppingCartIcon size={14} /> Add to Cart
          </button>
          <button
            type="button"
            className="btn-card-quote"
            onClick={handleGetQuote}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              background: '#0F172A',
              color: '#FFFFFF',
              border: '1px solid #334155',
              borderRadius: 'var(--radius-sm, 6px)',
              padding: '8px 10px',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            <FileTextIcon size={14} /> Get Quote
          </button>
        </div>

        <div style={{ marginTop: '8px' }}>
          <a
            className="btn-card-wa"
            href={`https://wa.me/919911678386?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              width: '100%',
              padding: '7px 0',
              borderRadius: 'var(--radius-sm, 6px)',
              background: 'rgba(37, 211, 102, 0.08)',
              color: '#16A34A',
              fontWeight: 700,
              fontSize: '0.82rem',
              border: '1px solid rgba(37, 211, 102, 0.3)',
              textDecoration: 'none'
            }}
          >
            <WhatsAppIcon size={14} color="#16A34A" /> WhatsApp Enquiry
          </a>
        </div>
      </div>
    </div>
  );
};
