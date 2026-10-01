import React from 'react';
import dynamic from 'next/dynamic';
import { Hero } from '@/components/Hero';
import { StatsBar } from '@/components/StatsBar';
import { ProductGrid } from '@/components/ProductGrid';
import { FAQ } from '@/components/FAQ';
import { Testimonials } from '@/components/Testimonials';
import { FactoryGallery } from '@/components/FactoryGallery';
import { QuoteModal } from '@/components/QuoteModal';

// Lazy-load 3D box configurator (client-only dynamic import)
const DynamicBoxConfigurator = dynamic(
  () => import('@/components/BoxConfigurator').then((mod) => mod.BoxConfigurator),
  {
    loading: () => (
      <div style={{ minHeight: '420px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0B0F19', borderRadius: '12px', color: '#CBD5E1' }}>
        <p>Loading Interactive 3D Box Configurator...</p>
      </div>
    ),
    ssr: false
  }
);

export default function HomePage() {
  return (
    <>
      {/* 1. Dynamic Hero Slider & Quick Category Marquee Strip */}
      <Hero />

      {/* 2. Factory Trust & Metrics Strip */}
      <StatsBar />

      {/* 3. Bestseller Products & Shopping Grid */}
      <section className="products-section" id="featured-products">
        <div className="container">
          <div className="section-head">
            <span className="section-badge">Factory Direct Catalogue</span>
            <h2 className="section-title">Featured Packaging Solutions</h2>
            <p className="section-subtitle">
              Manufactured in-house with certified bursting strength, food-grade raw materials, and precision industrial finishing.
            </p>
          </div>

          <ProductGrid initialFilter="all" showAllButton={true} />
        </div>
      </section>

      {/* 4. Interactive 3D Box Builder & Live Cost Calculator */}
      <DynamicBoxConfigurator />

      {/* 5. How It Works (4 Steps) */}
      <section className="how-it-works-section">
        <div className="container">
          <div className="section-head">
            <span className="section-badge">🚀 Seamless Process</span>
            <h2 className="section-title">HOW TO ORDER PACKAGING IN 4 STEPS</h2>
            <p className="section-subtitle">
              In-stock standard items: 24-48 hrs. Custom printed orders: 3-5 working days. Delivery: Delhi NCR same/next day, other cities 2-4 days.
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="step-number">1</div>
                  <div className="step-icon">📐</div>
                  <h3 className="step-title">Choose Size &amp; Product</h3>
                </div>
                <div className="flip-card-back">
                  <div className="step-number">1</div>
                  <p className="step-desc">
                    Select from our 15 standard products or use our 3D customizer for your bespoke Length &times; Width &times; Height and ply strength.
                  </p>
                </div>
              </div>
            </div>

            <div className="step-card flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="step-number">2</div>
                  <div className="step-icon">🎨</div>
                  <h3 className="step-title">Free 3D Mockup &amp; Proof</h3>
                </div>
                <div className="flip-card-back">
                  <div className="step-number">2</div>
                  <p className="step-desc">
                    Share your brand logo or design file. Our pre-press design team shares an exact 3D proof and physical sample swatch for approval.
                  </p>
                </div>
              </div>
            </div>

            <div className="step-card flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="step-number">3</div>
                  <div className="step-icon">🏭</div>
                  <h3 className="step-title">High-Speed Production</h3>
                </div>
                <div className="flip-card-back">
                  <div className="step-number">3</div>
                  <p className="step-desc">
                    Manufactured in our Ghaziabad facility on automated corrugation, die-cutting, offset printing, and UV curing machines.
                  </p>
                </div>
              </div>
            </div>

            <div className="step-card flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="step-number">4</div>
                  <div className="step-icon">🚚</div>
                  <h3 className="step-title">Pan-India Dispatch</h3>
                </div>
                <div className="flip-card-back">
                  <div className="step-number">4</div>
                  <p className="step-desc">
                    Dispatched securely strapped on pallets via BlueDart, Delhivery, DTDC, or dedicated truckloads straight to your warehouse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Plant Machinery Infrastructure */}
      <FactoryGallery />

      {/* 7. Client Testimonials & Google Reviews */}
      <Testimonials />

      {/* 8. Inline Bulk Quote Form (placed right before FAQ) */}
      <QuoteModal isInline={true} />

      {/* 9. FAQ Accordion with Schema */}
      <FAQ />
    </>
  );
}
