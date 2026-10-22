'use client';

import React from 'react';
import Link from 'next/link';
import { getProductDetailInfo } from '@/data/productDetailedDescriptions';

interface ProductDetailedDescriptionSectionProps {
  product: any;
}

export const ProductDetailedDescriptionSection: React.FC<ProductDetailedDescriptionSectionProps> = ({ product }) => {
  const detailInfo = getProductDetailInfo(product?.slug, product);

  return (
    <div style={{
      marginTop: '40px',
      marginBottom: '40px',
      background: '#FFFFFF',
      border: '1px solid #E2E8F0',
      borderRadius: '12px',
      padding: '36px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* 1. Main Header & Subhead (Screenshot 1 Match) */}
      <h2 style={{
        fontSize: '1.6rem',
        fontWeight: 800,
        color: '#111827',
        margin: '0 0 6px 0',
        lineHeight: 1.2
      }}>
        Detailed Description
      </h2>
      <div style={{
        fontSize: '1.3rem',
        fontWeight: 700,
        color: '#4B5563',
        marginBottom: '24px',
        lineHeight: 1.3
      }}>
        {detailInfo.subhead}
      </div>

      {/* 2. Specifications Table (Dark Header, Clean Rows - Screenshot 1 Match) */}
      <div style={{ overflowX: 'auto', marginBottom: '36px', borderRadius: '4px' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '0.94rem',
          textAlign: 'left'
        }}>
          <thead>
            <tr>
              <th style={{
                background: '#2B2B2B',
                color: '#FFFFFF',
                padding: '14px 20px',
                fontWeight: 700,
                fontSize: '0.96rem',
                borderTopLeftRadius: '4px',
                width: '30%'
              }}>
                Product Name
              </th>
              <th style={{
                background: '#2B2B2B',
                color: '#FFFFFF',
                padding: '14px 20px',
                fontWeight: 700,
                fontSize: '0.96rem',
                borderTopRightRadius: '4px'
              }}>
                {detailInfo.specs.find(s => s.label === 'Product Name')?.value || detailInfo.productName}
              </th>
            </tr>
          </thead>
          <tbody>
            {detailInfo.specs.filter(s => s.label !== 'Product Name').map((row, idx) => (
              <tr key={idx} style={{
                borderBottom: '1px solid #E5E7EB',
                backgroundColor: idx % 2 === 0 ? '#FFFFFF' : '#FAFAFA'
              }}>
                <td style={{
                  padding: '14px 20px',
                  fontWeight: 700,
                  color: '#1F2937',
                  whiteSpace: 'nowrap'
                }}>
                  {row.label}
                </td>
                <td style={{
                  padding: '14px 20px',
                  color: '#374151'
                }}>
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 3. Feature Breakdown (Screenshot 2 Match) */}
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: 700,
        color: '#4B5563',
        marginTop: '36px',
        marginBottom: '20px'
      }}>
        {detailInfo.featureHeadline}
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        {detailInfo.features.map((feat, idx) => (
          <div key={idx} style={{ lineHeight: 1.6 }}>
            <span style={{ fontWeight: 700, fontSize: '0.98rem', color: '#1F2937', display: 'block', marginBottom: '3px' }}>
              {feat.title}:
            </span>
            <p style={{ margin: 0, fontSize: '0.93rem', color: '#4B5563' }}>
              {feat.desc}
            </p>
          </div>
        ))}
      </div>

      {/* 4. Cross-Sell Callout (Screenshot 3 Match) */}
      {detailInfo.crossSell && (
        <div style={{
          background: '#F8FAFC',
          borderLeft: '4px solid #1D4ED8',
          padding: '16px 20px',
          margin: '32px 0 24px 0',
          borderRadius: '0 4px 4px 0',
          fontSize: '0.96rem'
        }}>
          <Link href={`/products/${detailInfo.crossSell.linkSlug}`} style={{
            fontWeight: 700,
            color: '#1F2937',
            textDecoration: 'underline'
          }}>
            {detailInfo.crossSell.text}
          </Link>
        </div>
      )}

      {/* 5. Deep Description Subsections (Screenshot 3 Match) */}
      {detailInfo.deepDescription && (
        <div style={{ marginTop: '28px' }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#374151',
            marginBottom: '18px'
          }}>
            {detailInfo.deepDescription.headline}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {detailInfo.deepDescription.sections.map((sec, idx) => (
              <div key={idx}>
                <div style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#1F2937',
                  marginBottom: '6px'
                }}>
                  {sec.title}.
                </div>
                <div style={{
                  fontSize: '0.93rem',
                  color: '#4B5563',
                  lineHeight: 1.65
                }}>
                  {sec.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. FAQs Section (Screenshot 4 & 5 Match) */}
      {detailInfo.faqs && detailInfo.faqs.length > 0 && (
        <div style={{ marginTop: '40px' }}>
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: 700,
            color: '#374151',
            marginBottom: '22px'
          }}>
            FAQs for {detailInfo.specs.find(s => s.label === 'Dimensions (inches)') ? `${detailInfo.productName} (${detailInfo.specs.find(s => s.label === 'Dimensions (inches)')?.value.split('(')[0].trim()})` : detailInfo.productName}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            {detailInfo.faqs.map((faq, idx) => (
              <div key={idx}>
                <div style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#111827',
                  marginBottom: '6px'
                }}>
                  {faq.q}
                </div>
                <div style={{
                  color: '#4B5563',
                  fontSize: '0.93rem',
                  lineHeight: 1.6,
                  paddingLeft: '16px',
                  position: 'relative'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    top: '-1px',
                    color: '#6B7280',
                    fontSize: '1.2rem'
                  }}>
                    •
                  </span>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 7. Available Offers Card (Screenshot 5 Match) */}
      {detailInfo.offers && detailInfo.offers.length > 0 && (
        <div style={{ marginTop: '36px', maxWidth: '460px' }}>
          <div style={{
            border: '1px solid #D1D5DB',
            borderRadius: '6px',
            background: '#FFFFFF',
            overflow: 'hidden',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
          }}>
            <div style={{
              background: '#F3F4F6',
              padding: '12px 18px',
              fontSize: '0.98rem',
              fontWeight: 700,
              color: '#111827',
              textAlign: 'center',
              borderBottom: '1px solid #E5E7EB'
            }}>
              Available offers
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <tbody>
                {detailInfo.offers.map((offer, oIdx) => (
                  <React.Fragment key={oIdx}>
                    <tr style={{ borderBottom: '1px solid #F3F4F6' }}>
                      <td style={{ padding: '14px 18px', fontWeight: 700, color: '#111827', width: '35%' }}>
                        Coupon Code :
                      </td>
                      <td style={{ padding: '14px 18px', color: '#111827' }}>
                        <span style={{
                          background: '#EFF6FF',
                          border: '1px dashed #1D4ED8',
                          color: '#1D4ED8',
                          padding: '3px 8px',
                          fontWeight: 800,
                          borderRadius: '4px',
                          fontFamily: 'monospace',
                          fontSize: '0.92rem'
                        }}>
                          {offer.code}
                        </span>
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #F3F4F6' }}>
                      <td style={{ padding: '14px 18px', fontWeight: 700, color: '#111827', verticalAlign: 'top' }}>
                        Description :
                      </td>
                      <td style={{ padding: '14px 18px', color: '#374151', lineHeight: 1.5 }}>
                        {offer.description}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '14px 18px', fontWeight: 700, color: '#111827' }}>
                        Coupon Type :
                      </td>
                      <td style={{ padding: '14px 18px', color: '#374151' }}>
                        {offer.type}
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
