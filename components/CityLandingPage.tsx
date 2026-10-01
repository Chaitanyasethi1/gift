'use client';

import React from 'react';
import Link from 'next/link';
import { CityData } from '@/data/citiesData';
import { siteConfig } from '@/data/siteConfig';
import { useCart } from '@/context/CartContext';
import { QuoteModal } from '@/components/QuoteModal';
import { FAQ } from '@/components/FAQ';
import { 
  TruckIcon, 
  ShieldCheckIcon, 
  ZapIcon, 
  MapPinIcon, 
  PackageIcon, 
  PhoneIcon, 
  WhatsAppIcon 
} from './Icons';

interface CityLandingPageProps {
  city: CityData;
}

export const CityLandingPage: React.FC<CityLandingPageProps> = ({ city }) => {
  const { setIsQuoteModalOpen, setIsSampleModalOpen } = useCart();

  return (
    <>
      {/* City Hero Section */}
      <section className="hero-section" style={{ background: '#0F172A', color: '#FFFFFF', padding: '60px 0 50px' }}>
        <div className="container" style={{ maxWidth: '960px', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.82rem', color: '#94A3B8', marginBottom: '14px' }}>
            <Link href="/" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--primary)', fontWeight: 700 }}>NCR Factory Hubs</span>
            <span>/</span>
            <span style={{ color: '#FFFFFF' }}>{city.cityName}</span>
          </div>

          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '20px',
              background: 'rgba(184, 27, 84, 0.2)',
              border: '1px solid var(--primary)',
              color: 'var(--primary)',
              fontSize: '0.8rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}
          >
            <MapPinIcon size={14} /> Direct Factory Hub: {city.regionLabel}
          </span>

          <h1 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 800, lineHeight: 1.2, margin: '0 0 16px 0', color: '#FFFFFF' }}>
            {city.heroH1}
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#CBD5E1', lineHeight: 1.6, maxWidth: '780px', margin: '0 auto 28px' }}>
            {city.heroSubheading}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '24px' }}>
            <button
              type="button"
              className="btn-hero-quote"
              onClick={() => setIsQuoteModalOpen(true)}
              style={{ padding: '14px 28px', fontSize: '1rem' }}
            >
              Get {city.cityName} Wholesale Quote
            </button>
            <button
              type="button"
              className="btn-hero-sample"
              onClick={() => setIsSampleModalOpen(true)}
              style={{ padding: '14px 28px', fontSize: '1rem' }}
            >
              Request Free Sample Kit
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '18px', flexWrap: 'wrap', fontSize: '0.85rem', color: '#94A3B8' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <ZapIcon size={14} color="#F59E0B" /> {city.deliveryTime}
            </span>
            <span>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheckIcon size={14} color="#10B981" /> 100% ITC on GST 09AWKPN5910E1ZG
            </span>
            <span>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <TruckIcon size={14} color="#3B82F6" /> Zero Broker Margins
            </span>
          </div>
        </div>
      </section>

      {/* Local Advantage & Logistics Section */}
      <section style={{ padding: '60px 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ background: '#F8FAFC', padding: '36px', borderRadius: 'var(--radius-xl, 16px)', border: '1px solid #E2E8F0', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--text-dark)', marginBottom: '14px' }}>
              Why {city.cityName} Businesses Choose AS Print Gallery
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.7, margin: '0 0 24px 0' }}>
              {city.localAdvantage}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              <div style={{ background: '#FFFFFF', padding: '18px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                <strong style={{ color: '#0F172A', display: 'block', marginBottom: '6px' }}>📍 Fast Direct Vans</strong>
                <span style={{ fontSize: '0.85rem', color: '#64748B' }}>Dedicated transit vehicles avoiding third-party courier bottlenecks.</span>
              </div>
              <div style={{ background: '#FFFFFF', padding: '18px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                <strong style={{ color: '#0F172A', display: 'block', marginBottom: '6px' }}>⚡ Urgent 24-Hr Batches</strong>
                <span style={{ fontSize: '0.85rem', color: '#64748B' }}>Stock replenishment in hours for high-velocity seasonal sales.</span>
              </div>
              <div style={{ background: '#FFFFFF', padding: '18px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                <strong style={{ color: '#0F172A', display: 'block', marginBottom: '6px' }}>💰 Direct Factory Pricing</strong>
                <span style={{ fontSize: '0.85rem', color: '#64748B' }}>Wholesale rates directly from our Loni manufacturing plant.</span>
              </div>
            </div>
          </div>

          {/* Key Industrial Hubs Served */}
          <div style={{ marginBottom: '56px' }}>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-dark)', marginBottom: '16px' }}>
              Industrial Areas &amp; Commercial Sectors We Deliver To Daily in {city.cityName}:
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
              {city.keyHubs.map((hub, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 18px',
                    background: '#FFFFFF',
                    borderRadius: '8px',
                    border: '1px solid #E2E8F0',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#334155'
                  }}
                >
                  <MapPinIcon size={16} color="var(--primary)" />
                  <span>{hub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Products in City */}
          <div style={{ marginBottom: '56px' }}>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-dark)', marginBottom: '16px' }}>
              High-Demand Packaging Products in {city.cityName}:
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {city.popularProducts.map((prod, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '18px',
                    background: '#F8FAFC',
                    borderRadius: '8px',
                    border: '1px solid #E2E8F0'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <PackageIcon size={18} color="var(--primary)" />
                    <strong style={{ color: '#0F172A', fontSize: '0.95rem' }}>{prod}</strong>
                  </div>
                  <span style={{ fontSize: '0.82rem', color: '#64748B' }}>
                    Manufactured in-house with certified burst factor and custom branding options.
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Sales Hotline */}
          <div
            style={{
              background: 'linear-gradient(135deg, #0B0F19 0%, #111827 100%)',
              color: '#FFFFFF',
              borderRadius: '16px',
              padding: '32px 36px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px'
            }}
          >
            <div>
              <span style={{ color: '#34D399', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase' }}>
                Dedicated {city.cityName} Accounts Desk
              </span>
              <h3 style={{ fontSize: '1.4rem', margin: '6px 0', color: '#FFFFFF' }}>
                Need Fast Turnaround or Regular Monthly Supply?
              </h3>
              <p style={{ margin: 0, fontSize: '0.88rem', color: '#94A3B8' }}>
                Talk to our senior packaging engineer for custom sizing, die lines, and volume contracts.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href={siteConfig.phones.salesTel} className="btn-primary-hero">
                <PhoneIcon size={16} /> Call Sales: {siteConfig.phones.salesDisplay}
              </a>
              <a
                href={`https://wa.me/${siteConfig.phones.whatsappRaw}?text=${encodeURIComponent(`Hi AS Print Gallery! I am located in ${city.cityName} and need a wholesale packaging quotation.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass-hero"
              >
                <WhatsAppIcon size={16} color="#FFFFFF" /> WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Inline Quote Form */}
      <QuoteModal isInline={true} />

      {/* FAQ */}
      <FAQ />
    </>
  );
};
