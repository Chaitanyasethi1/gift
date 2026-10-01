'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PRODUCTS, Product } from '@/data/products';
import { ProductCard } from './ProductCard';
import { useCart } from '@/context/CartContext';
import { ShoppingCartIcon, WhatsAppIcon, XIcon, CheckCircleIcon } from './Icons';

interface ProductGridProps {
  initialFilter?: string;
  showAllButton?: boolean;
}

const CATEGORIES = [
  { id: 'all', label: `All ${PRODUCTS.length} Products` },
  { id: 'corrugated', label: '📦 Corrugated Cartons' },
  { id: 'food', label: '🍕 Food & Bakery Boxes' },
  { id: 'packaging', label: '👔 Garment Boxes' },
  { id: 'label', label: '🏷️ Labels & Hang Tags' },
  { id: 'sticker', label: '📄 Stickers & Rolls' },
  { id: 'bags', label: '🛍️ Bags & Envelopes' }
];

export const ProductGrid: React.FC<ProductGridProps> = ({ initialFilter = 'all', showAllButton = true }) => {
  const [selectedCategory, setSelectedCategory] = useState(initialFilter);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const { addToCart, setIsQuoteModalOpen, setSelectedQuoteProduct } = useCart();

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <>
      <div className="filter-tabs-wrapper">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`filter-tab-pill ${selectedCategory === cat.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="products-grid" id="products-grid-container">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={(p) => setQuickViewProduct(p)}
          />
        ))}
      </div>

      {showAllButton && (
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="/products" className="btn-primary-hero" style={{ display: 'inline-flex', padding: '14px 34px' }}>
            View Full {PRODUCTS.length}-Product Catalogue with Specs &rarr;
          </Link>
        </div>
      )}

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="modal-backdrop active" onClick={() => setQuickViewProduct(null)} style={{ display: 'flex' }}>
          <div className="modal-window" style={{ maxWidth: '780px' }} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setQuickViewProduct(null)}
              aria-label="Close Quick View"
            >
              <XIcon size={18} />
            </button>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', padding: '12px' }}>
              <div>
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.title}
                  style={{ width: '100%', borderRadius: 'var(--radius-md, 8px)', objectFit: 'cover', maxHeight: '340px' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary)', letterSpacing: '0.5px' }}>
                  {quickViewProduct.categoryLabel}
                </span>
                <h3 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--text-dark)' }}>{quickViewProduct.title}</h3>
                <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {quickViewProduct.desc}
                </p>

                <div style={{ background: '#F8FAFC', padding: '12px', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>Specifications:</div>
                  <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.8rem', color: '#64748B' }}>
                    {quickViewProduct.specs.map((s, idx) => (
                      <li key={idx} style={{ marginBottom: '4px' }}>{s}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Starting at:</span>
                  <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary)' }}>
                    ₹{(quickViewProduct.startingAt || quickViewProduct.price).toFixed(2)}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>/ pc (MOQ: {quickViewProduct.moq} pcs)</span>
                </div>

                <div style={{ display: 'flex', gap: '10px', marginTop: 'auto', paddingTop: '10px' }}>
                  <button
                    type="button"
                    className="btn-primary-hero"
                    onClick={() => {
                      addToCart({
                        id: quickViewProduct.id,
                        title: quickViewProduct.title,
                        price: quickViewProduct.price,
                        image: quickViewProduct.image,
                        specs: quickViewProduct.specs
                      }, quickViewProduct.moq || 1);
                      setQuickViewProduct(null);
                    }}
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    <ShoppingCartIcon size={16} /> Add to Cart
                  </button>
                  <button
                    type="button"
                    className="btn-outline-hero"
                    onClick={() => {
                      setSelectedQuoteProduct(quickViewProduct.title);
                      setQuickViewProduct(null);
                      setIsQuoteModalOpen(true);
                    }}
                    style={{ flex: 1, justifyContent: 'center', background: '#0F172A', color: '#FFF' }}
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
