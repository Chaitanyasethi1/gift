'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Product, PRODUCTS } from '@/data/products';
import { StarIcon } from './Icons';

interface Review {
  id: string;
  author: string;
  rating: number;
  ratingLabel: string;
  comment: string;
  date: string;
  helpfulCount: number;
  verified: boolean;
}

const DEFAULT_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Vinita',
    rating: 5,
    ratingLabel: 'Very Good',
    comment: 'Product thik h pr chota h, quality wise bhot badhiya print finishing hai.',
    date: 'Posted 18 days ago',
    helpfulCount: 4,
    verified: true
  },
  {
    id: 'rev-2',
    author: 'A Jeya Roshini',
    rating: 5,
    ratingLabel: 'Very Good',
    comment: 'Superb packaging quality! Exact paper thickness and clean box folding.',
    date: 'Posted 11 days ago',
    helpfulCount: 7,
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Rajesh Kumar (Wholesale Buyer)',
    rating: 4,
    ratingLabel: 'Good',
    comment: 'Factory rates are genuinely cheaper than market. Delivered to Ghaziabad in 2 days.',
    date: 'Posted 5 days ago',
    helpfulCount: 2,
    verified: true
  }
];

interface ProductReviewsSectionProps {
  currentProduct: Product;
}

export const ProductReviewsSection: React.FC<ProductReviewsSectionProps> = ({ currentProduct }) => {
  const [reviews, setReviews] = useState<Review[]>(DEFAULT_REVIEWS);
  const [helpfulLiked, setHelpfulLiked] = useState<Record<string, boolean>>({});
  const [showAllReviews, setShowAllReviews] = useState(false);
  
  // Review submission state
  const [isAddingReview, setIsAddingReview] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');

  // Pincode Check state
  const [pincode, setPincode] = useState('201102');
  const [isChangingPincode, setIsChangingPincode] = useState(false);
  const [pincodeInput, setPincodeInput] = useState('201102');
  const [pincodeStatus, setPincodeStatus] = useState<{ serviceable: boolean; msg: string }>({
    serviceable: true,
    msg: 'Express Dispatch Available • 2-3 Days Delivery'
  });

  const handlePincodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pincodeInput || pincodeInput.trim().length !== 6) {
      setPincodeStatus({ serviceable: false, msg: 'Please enter a valid 6-digit Pincode' });
      return;
    }
    const pin = pincodeInput.trim();
    setPincode(pin);
    setIsChangingPincode(false);
    
    // Quick serviceability simulator
    if (pin.startsWith('11') || pin.startsWith('20') || pin.startsWith('12')) {
      setPincodeStatus({ serviceable: true, msg: 'Same / Next-Day Factory Dispatch in Delhi NCR' });
    } else {
      setPincodeStatus({ serviceable: true, msg: 'Standard Pan-India Delivery (3-5 Days)' });
    }
  };

  const handleHelpful = (id: string) => {
    if (helpfulLiked[id]) return;
    setHelpfulLiked(prev => ({ ...prev, [id]: true }));
    setReviews(prev => prev.map(r => r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r));
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) return;

    const labelMap: Record<number, string> = {
      5: 'Very Good',
      4: 'Good',
      3: 'Ok-Ok',
      2: 'Bad',
      1: 'Very Bad'
    };

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      author: newAuthor.trim(),
      rating: newRating,
      ratingLabel: labelMap[newRating] || 'Very Good',
      comment: newComment.trim(),
      date: 'Posted Just now',
      helpfulCount: 0,
      verified: true
    };

    setReviews([newRev, ...reviews]);
    setNewAuthor('');
    setNewComment('');
    setIsAddingReview(false);
  };

  // Distribution calculations
  const totalRatings = reviews.length;
  const ratingCounts = {
    veryGood: reviews.filter(r => r.rating === 5).length,
    good: reviews.filter(r => r.rating === 4).length,
    ok: reviews.filter(r => r.rating === 3).length,
    bad: reviews.filter(r => r.rating === 2).length,
    veryBad: reviews.filter(r => r.rating === 1).length
  };
  const averageScore = totalRatings > 0 
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / totalRatings).toFixed(1)
    : '4.7';

  // Similar Products list
  const similarProducts = PRODUCTS.filter(p => p.id !== currentProduct.id).slice(0, 6);

  return (
    <div style={{ marginTop: '40px' }}>
      
      {/* 1. SIMILAR / RELATED PRODUCTS HORIZONTAL CAROUSEL */}
      <div style={{ marginBottom: '36px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
            Similar Products You May Like
          </h3>
          <Link href="/shop" style={{ fontSize: '0.84rem', color: '#7C3AED', fontWeight: 700, textDecoration: 'none' }}>
            View All &rarr;
          </Link>
        </div>

        <div style={{
          display: 'flex',
          gap: '14px',
          overflowX: 'auto',
          paddingBottom: '12px',
          scrollbarWidth: 'thin'
        }}>
          {similarProducts.map((p) => {
            const mrp = Math.round(p.price * 1.25);
            const discount = Math.round(((mrp - p.price) / mrp) * 100);
            return (
              <Link
                key={p.id}
                href={`/products/${p.slug}`}
                style={{
                  flex: '0 0 200px',
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '10px',
                  padding: '12px',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ width: '100%', height: '140px', borderRadius: '8px', overflow: 'hidden', background: '#F8FAFC', marginBottom: '10px' }}>
                    <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#1E293B', margin: '0 0 6px 0', lineHeight: 1.3, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {p.title}
                  </h4>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '4px' }}>
                    <span style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A' }}>₹{p.price}</span>
                    <span style={{ fontSize: '0.75rem', color: '#94A3B8', textDecoration: 'line-through' }}>₹{mrp}</span>
                    <span style={{ fontSize: '0.75rem', color: '#16A34A', fontWeight: 700 }}>{discount}% off</span>
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#16A34A', color: '#FFFFFF', padding: '2px 7px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700 }}>
                    <span>{p.rating || 4.3}</span>
                    <span>★</span>
                    <span style={{ color: '#DCFCE7', fontSize: '0.7rem', marginLeft: '2px' }}>({p.reviews || 176})</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 2. PINCODE / DELIVERY SERVICEABILITY CHECK (Exact reference from screenshot) */}
      <div style={{
        background: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '12px',
        padding: '16px 20px',
        marginBottom: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <span style={{
            background: pincodeStatus.serviceable ? '#DCFCE7' : '#FEE2E2',
            color: pincodeStatus.serviceable ? '#166534' : '#991B1B',
            fontWeight: 700,
            fontSize: '0.8rem',
            padding: '4px 10px',
            borderRadius: '6px'
          }}>
            {pincodeStatus.serviceable ? 'Serviceable' : 'Unserviceable'}
          </span>
          <span style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }}>
            at <strong style={{ color: '#0F172A' }}>{pincode}</strong>
          </span>
          <span style={{ fontSize: '0.82rem', color: '#64748B' }}>
            ({pincodeStatus.msg})
          </span>
        </div>

        {isChangingPincode ? (
          <form onSubmit={handlePincodeCheck} style={{ display: 'flex', gap: '8px' }}>
            <input
              type="text"
              maxLength={6}
              value={pincodeInput}
              onChange={(e) => setPincodeInput(e.target.value.replace(/\D/g, ''))}
              placeholder="Enter 6-digit PIN"
              style={{
                padding: '6px 10px',
                border: '1.5px solid #8B5CF6',
                borderRadius: '6px',
                fontSize: '0.85rem',
                outline: 'none',
                width: '130px'
              }}
              autoFocus
            />
            <button
              type="submit"
              style={{
                background: '#7C3AED',
                color: '#FFF',
                border: 'none',
                padding: '6px 14px',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              Check
            </button>
            <button
              type="button"
              onClick={() => setIsChangingPincode(false)}
              style={{
                background: '#F1F5F9',
                color: '#64748B',
                border: 'none',
                padding: '6px 10px',
                borderRadius: '6px',
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>
          </form>
        ) : (
          <button
            type="button"
            onClick={() => setIsChangingPincode(true)}
            style={{
              border: '1.5px solid #7C3AED',
              background: '#FFFFFF',
              color: '#7C3AED',
              padding: '6px 16px',
              borderRadius: '6px',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Change
          </button>
        )}
      </div>

      {/* 3. CUSTOMER RATINGS & REVIEWS SECTION (Exact Screenshot UI) */}
      <div style={{
        background: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
            Customer Ratings &amp; Reviews
          </h2>
          <button
            type="button"
            onClick={() => setIsAddingReview(!isAddingReview)}
            style={{
              background: '#F3E8FF',
              color: '#7C3AED',
              border: '1px solid #C084FC',
              padding: '6px 14px',
              borderRadius: '6px',
              fontWeight: 700,
              fontSize: '0.82rem',
              cursor: 'pointer'
            }}
          >
            {isAddingReview ? 'Close Form' : '★ Write a Review'}
          </button>
        </div>

        {/* Add Review Form Dropdown */}
        {isAddingReview && (
          <form onSubmit={handleAddReview} style={{ background: '#FAF5FF', padding: '16px', borderRadius: '8px', border: '1px solid #E9D5FF', marginBottom: '24px' }}>
            <h4 style={{ margin: '0 0 12px 0', fontSize: '0.95rem', fontWeight: 800, color: '#581C87' }}>Rate this Product:</h4>
            
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '12px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#374151', marginBottom: '4px' }}>Your Name:</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vinita"
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.88rem', width: '220px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#374151', marginBottom: '4px' }}>Rating:</label>
                <select
                  value={newRating}
                  onChange={(e) => setNewRating(Number(e.target.value))}
                  style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.88rem', background: '#FFF' }}
                >
                  <option value={5}>⭐⭐⭐⭐⭐ 5 - Very Good</option>
                  <option value={4}>⭐⭐⭐⭐ 4 - Good</option>
                  <option value={3}>⭐⭐⭐ 3 - Ok-Ok</option>
                  <option value={2}>⭐⭐ 2 - Bad</option>
                  <option value={1}>⭐ 1 - Very Bad</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: '12px' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#374151', marginBottom: '4px' }}>Review Message:</label>
              <textarea
                required
                rows={3}
                placeholder="Write your feedback about paper quality, printing, box strength..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.88rem', boxSizing: 'border-box' }}
              />
            </div>

            <button
              type="submit"
              style={{
                background: '#7C3AED',
                color: '#FFF',
                border: 'none',
                padding: '8px 20px',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '0.88rem',
                cursor: 'pointer'
              }}
            >
              Submit Review
            </button>
          </form>
        )}

        {/* Rating Breakdown Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 160px) 1fr', gap: '24px', alignItems: 'center', marginBottom: '28px', paddingBottom: '24px', borderBottom: '1px solid #F1F5F9' }}>
          
          {/* Big Green Box on Left */}
          <div style={{
            background: '#16A34A',
            color: '#FFFFFF',
            borderRadius: '12px',
            padding: '18px 14px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 4px 12px rgba(22, 163, 74, 0.2)'
          }}>
            <div style={{ fontSize: '2.2rem', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '4px' }}>
              {averageScore} <span style={{ fontSize: '1.8rem' }}>★</span>
            </div>
            <div style={{ fontSize: '0.78rem', color: '#DCFCE7', marginTop: '6px', fontWeight: 600 }}>
              {totalRatings} ratings
            </div>
            <div style={{ fontSize: '0.75rem', color: '#DCFCE7' }}>
              {totalRatings} reviews
            </div>
          </div>

          {/* Progress Bars on Right */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            
            {/* Very Good (5 Star) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.82rem', color: '#475569' }}>
              <span style={{ width: '70px', fontWeight: 600 }}>Very Good</span>
              <div style={{ flex: 1, height: '6px', background: '#E2E8F0', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: `${totalRatings ? (ratingCounts.veryGood / totalRatings) * 100 : 80}%`, height: '100%', background: '#16A34A' }} />
              </div>
              <span style={{ width: '20px', textAlign: 'right', fontWeight: 700, color: '#334155' }}>{ratingCounts.veryGood}</span>
            </div>

            {/* Good (4 Star) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.82rem', color: '#475569' }}>
              <span style={{ width: '70px', fontWeight: 600 }}>Good</span>
              <div style={{ flex: 1, height: '6px', background: '#E2E8F0', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: `${totalRatings ? (ratingCounts.good / totalRatings) * 100 : 30}%`, height: '100%', background: '#22C55E' }} />
              </div>
              <span style={{ width: '20px', textAlign: 'right', fontWeight: 700, color: '#334155' }}>{ratingCounts.good}</span>
            </div>

            {/* Ok-Ok (3 Star) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.82rem', color: '#475569' }}>
              <span style={{ width: '70px', fontWeight: 600 }}>Ok-Ok</span>
              <div style={{ flex: 1, height: '6px', background: '#E2E8F0', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: `${totalRatings ? (ratingCounts.ok / totalRatings) * 100 : 0}%`, height: '100%', background: '#F59E0B' }} />
              </div>
              <span style={{ width: '20px', textAlign: 'right', fontWeight: 700, color: '#334155' }}>{ratingCounts.ok}</span>
            </div>

            {/* Bad (2 Star) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.82rem', color: '#475569' }}>
              <span style={{ width: '70px', fontWeight: 600 }}>Bad</span>
              <div style={{ flex: 1, height: '6px', background: '#E2E8F0', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: `${totalRatings ? (ratingCounts.bad / totalRatings) * 100 : 0}%`, height: '100%', background: '#EF4444' }} />
              </div>
              <span style={{ width: '20px', textAlign: 'right', fontWeight: 700, color: '#334155' }}>{ratingCounts.bad}</span>
            </div>

            {/* Very Bad (1 Star) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.82rem', color: '#475569' }}>
              <span style={{ width: '70px', fontWeight: 600 }}>Very Bad</span>
              <div style={{ flex: 1, height: '6px', background: '#E2E8F0', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: `${totalRatings ? (ratingCounts.veryBad / totalRatings) * 100 : 0}%`, height: '100%', background: '#DC2626' }} />
              </div>
              <span style={{ width: '20px', textAlign: 'right', fontWeight: 700, color: '#334155' }}>{ratingCounts.veryBad}</span>
            </div>

          </div>
        </div>

        {/* Individual Review Comments List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {(showAllReviews ? reviews : reviews.slice(0, 3)).map((rev) => (
            <div key={rev.id} style={{ borderBottom: '1px solid #F1F5F9', paddingBottom: '16px' }}>
              
              {/* Star Rating Badge + Date */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{
                  background: rev.rating >= 4 ? '#16A34A' : rev.rating === 3 ? '#F59E0B' : '#EF4444',
                  color: '#FFFFFF',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '3px'
                }}>
                  {rev.rating} ★ {rev.ratingLabel}
                </span>
                <span style={{ color: '#94A3B8', fontSize: '0.8rem' }}>•</span>
                <span style={{ color: '#64748B', fontSize: '0.8rem' }}>{rev.date}</span>
              </div>

              {/* Review Text */}
              <p style={{ margin: '0 0 8px 0', fontSize: '0.92rem', color: '#1E293B', lineHeight: 1.5 }}>
                {rev.comment}
              </p>

              {/* Author & Helpful Button */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontSize: '0.82rem', color: '#64748B', fontWeight: 600 }}>
                  ~{rev.author} {rev.verified && <span style={{ color: '#16A34A', marginLeft: '4px' }}>✓ Verified Order</span>}
                </span>

                <button
                  type="button"
                  onClick={() => handleHelpful(rev.id)}
                  style={{
                    background: helpfulLiked[rev.id] ? '#F1F5F9' : 'transparent',
                    border: '1px solid #E2E8F0',
                    borderRadius: '4px',
                    padding: '3px 10px',
                    fontSize: '0.78rem',
                    color: helpfulLiked[rev.id] ? '#16A34A' : '#475569',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <span>👍 Helpful</span>
                  {rev.helpfulCount > 0 && <span>({rev.helpfulCount})</span>}
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* VIEW ALL REVIEWS LINK */}
        {reviews.length > 2 && (
          <div style={{ marginTop: '16px' }}>
            <button
              type="button"
              onClick={() => setShowAllReviews(!showAllReviews)}
              style={{
                background: 'none',
                border: 'none',
                color: '#7C3AED',
                fontWeight: 800,
                fontSize: '0.9rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: 0
              }}
            >
              <span>{showAllReviews ? 'SHOW LESS REVIEWS' : 'VIEW ALL REVIEWS'}</span>
              <span style={{ fontSize: '1rem' }}>❯</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
