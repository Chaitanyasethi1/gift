'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ProductCard } from './ProductCard';
import { useCart } from '@/context/CartContext';
import { ShoppingCartIcon, WhatsAppIcon, XIcon, CheckCircleIcon } from './Icons';

interface ProductGridProps {
  products: any[];
  showAllButton?: boolean;
  limit?: number;
  hideTabs?: boolean;
}

const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'corrugated', label: '📦 Corrugated Cartons' },
  { id: 'food', label: '🍕 Food & Bakery Boxes' },
  { id: 'packaging', label: '👔 Garment Boxes' },
  { id: 'label', label: '🏷️ Labels & Hang Tags' },
  { id: 'sticker', label: '📄 Stickers & Rolls' },
  { id: 'bags', label: '🛍️ Bags & Envelopes' }
];

export const ProductGrid: React.FC<ProductGridProps> = ({ products = [], showAllButton = true, limit, hideTabs = false }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [quickViewProduct, setQuickViewProduct] = useState<any | null>(null);
  const { addToCart, setIsQuoteModalOpen, setSelectedQuoteProduct } = useCart();

  const filteredProducts = React.useMemo(() => {
    let list = products;
    if (selectedCategory !== 'all') {
      list = products.filter((p) => {
        const cat = String(p.category_slug || p.category || p.categories?.slug || p.categories?.name || '').toLowerCase();
        const name = String(p.name || p.title || '').toLowerCase();
        if (selectedCategory === 'corrugated') {
          return cat.includes('corrugat') || cat.includes('box') || name.includes('box') || name.includes('carton') || name.includes('corrugated');
        }
        if (selectedCategory === 'food') {
          return cat.includes('food') || cat.includes('pizza') || cat.includes('bakery') || name.includes('pizza') || name.includes('burger') || name.includes('sweet') || name.includes('food');
        }
        if (selectedCategory === 'packaging') {
          return cat.includes('packaging') || cat.includes('garment') || cat.includes('apparel') || name.includes('garment') || name.includes('apparel') || name.includes('box');
        }
        if (selectedCategory === 'label') {
          return cat.includes('label') || cat.includes('tag') || name.includes('label') || name.includes('tag') || name.includes('woven') || name.includes('satin');
        }
        if (selectedCategory === 'sticker') {
          return cat.includes('sticker') || cat.includes('roll') || name.includes('sticker') || name.includes('gumming') || name.includes('barcode');
        }
        if (selectedCategory === 'bags') {
          return cat.includes('bag') || cat.includes('envelope') || cat.includes('mailer') || name.includes('bag') || name.includes('mailer') || name.includes('lifafa');
        }
        return cat.includes(selectedCategory) || name.includes(selectedCategory);
      });
    }
    if (limit) {
      list = list.slice(0, limit);
    }
    return list;
  }, [products, selectedCategory, limit]);

  return (
    <>
      {!hideTabs && (
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
      )}

      {filteredProducts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#64748B' }}>
          No products found in this category yet.
        </div>
      ) : (
        <div className="products-grid" id="products-grid-container">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          ))}
        </div>
      )}

      {showAllButton && (
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="/shop" className="btn-primary-hero" style={{ display: 'inline-flex', padding: '14px 34px' }}>
            View Full Catalogue &rarr;
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
                  src={quickViewProduct.images?.[0] || 'https://via.placeholder.com/400'}
                  alt={quickViewProduct.name}
                  style={{ width: '100%', borderRadius: 'var(--radius-md, 8px)', objectFit: 'cover', maxHeight: '340px' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <h3 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--text-dark)' }}>{quickViewProduct.name}</h3>
                <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {quickViewProduct.description}
                </p>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Price:</span>
                  <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary)' }}>
                    ₹{quickViewProduct.selling_price}
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '10px', marginTop: 'auto', paddingTop: '10px' }}>
                  <button
                    type="button"
                    className="btn-primary-hero"
                    onClick={() => {
                      const gstVal = quickViewProduct.gst_rate ?? quickViewProduct.gst_percentage;
                      const parsedGst = (gstVal !== null && gstVal !== undefined && gstVal !== '')
                        ? (typeof gstVal === 'number' ? gstVal : (parseFloat(String(gstVal).replace(/[^0-9.]/g, '')) || 18))
                        : 18;
                      addToCart({
                        id: quickViewProduct.id,
                        title: quickViewProduct.name,
                        price: quickViewProduct.selling_price,
                        image: quickViewProduct.images?.[0] || '',
                        specs: [],
                        gstRate: parsedGst
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
                      setSelectedQuoteProduct(quickViewProduct.name);
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
