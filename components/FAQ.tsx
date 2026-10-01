'use client';

import React, { useState } from 'react';
import { FAQS } from '@/data/faqs';
import { ChevronDownIcon } from './Icons';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <section className="faq-section">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container">
        <div className="section-head">
          <span className="section-badge">Frequently Asked Questions</span>
          <h2 className="section-title">Common Packaging Questions</h2>
          <p className="section-subtitle">
            Everything you need to know regarding minimum orders, dispatch schedules, custom printing, and GST compliance.
          </p>
        </div>

        <div className="faq-accordion-wrap">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`faq-item ${isOpen ? 'active' : ''}`}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isOpen}
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', textAlign: 'left' }}
                >
                  <span>{faq.question}</span>
                  <span
                    className="faq-icon-arrow"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease'
                    }}
                  >
                    <ChevronDownIcon size={16} />
                  </span>
                </button>
                {isOpen && (
                  <div
                    className="faq-answer"
                    style={{ display: 'block' }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
