'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ProductCard } from './ProductCard';
import { useCart } from '@/context/CartContext';
import { ShoppingCartIcon, WhatsAppIcon, XIcon, CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface ProductGridProps {
  products: any[];
  showAllButton?: boolean;
  limit?: number;
  hideTabs?: boolean;
  isCarousel?: boolean;
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

export const ProductGrid: React.FC<ProductGridProps> = ({ 
  products = [], 
  showAllButton = true, 
  limit, 
  hideTabs = false,
  isCarousel = false 
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [quickViewProduct, setQuickViewProduct] = useState<any | null>(null);
  const { addToCart, setIsQuoteModalOpen, setSelectedQuoteProduct } = useCart();
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const enableCarousel = isCarousel || hideTabs;

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

  const checkScroll = React.useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  React.useEffect(() => {
    if (!enableCarousel) return;
    const el = scrollRef.current;
    if (el) {
      // Delay check slightly for items to measure
      const timer = setTimeout(checkScroll, 100);
      el.addEventListener('scroll', checkScroll, { passive: true });
      window.addEventListener('resize', checkScroll);
      return () => {
        clearTimeout(timer);
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, [filteredProducts, enableCarousel, checkScroll]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.75;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <style>{`
        .product-carousel-track::-webkit-scrollbar {
          display: none;
        }
        .product-carousel-item {
          scroll-snap-align: start;
          flex: 0 0 calc(25% - 12px);
          min-width: 230px;
        }
        .carousel-btn {
          position: absolute;
          top: 45%;
          transform: translateY(-50%);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          color: #0F172A;
          transition: all 0.2s ease;
        }
        .carousel-btn:hover {
          background: #0F172A;
          color: #FFFFFF;
          border-color: #0F172A;
          transform: translateY(-50%) scale(1.08);
        }
        .carousel-btn-prev {
          left: -14px;
        }
        .carousel-btn-next {
          right: -14px;
        }
        @media (max-width: 768px) {
          .product-carousel-track {
            gap: 10px !important;
            padding: 4px 2px 8px 2px !important;
          }
          .product-carousel-item {
            flex: 0 0 calc(50% - 5px) !important;
            min-width: 155px !important;
            max-width: 190px !important;
          }
          .carousel-btn {
            width: 32px;
            height: 32px;
          }
          .carousel-btn-prev {
            left: -6px;
          }
          .carousel-btn-next {
            right: -6px;
          }
        }
      `}</style>

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
      ) : enableCarousel ? (
        <div className="product-carousel-wrapper" style={{ position: 'relative' }}>
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => scroll('left')}
              aria-label="Previous products"
              className="carousel-btn carousel-btn-prev"
            >
              <ChevronLeftIcon size={18} />
            </button>
          )}

          <div
            ref={scrollRef}
            className="product-carousel-track"
            style={{
              display: 'flex',
              gap: '16px',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              padding: '6px 4px 12px 4px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-carousel-item">
                <ProductCard
                  product={product}
                  onQuickView={(p) => setQuickViewProduct(p)}
                />
              </div>
            ))}
          </div>

          {canScrollRight && (
            <button
              type="button"
              onClick={() => scroll('right')}
              aria-label="Next products"
              className="carousel-btn carousel-btn-next"
            >
              <ChevronRightIcon size={18} />
            </button>
          )}
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
