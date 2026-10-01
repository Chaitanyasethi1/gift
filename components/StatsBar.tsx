import React from 'react';
import { siteConfig } from '@/data/siteConfig';
import { FactoryIcon, PackageIcon, ZapIcon, StarIcon } from './Icons';

export const StatsBar: React.FC = () => {
  return (
    <section className="trust-metrics-section">
      <div className="container metrics-grid">
        <div className="metric-card">
          <div className="metric-icon-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FactoryIcon size={24} color="var(--primary)" />
          </div>
          <div className="metric-info">
            <span className="metric-number">{siteConfig.stats.inHouse.number}</span>
            <span className="metric-label">{siteConfig.stats.inHouse.label}</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <PackageIcon size={24} color="var(--primary)" />
          </div>
          <div className="metric-info">
            <span className="metric-number">{siteConfig.stats.monthlyVolume.number}</span>
            <span className="metric-label">{siteConfig.stats.monthlyVolume.label}</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ZapIcon size={24} color="var(--primary)" />
          </div>
          <div className="metric-info">
            <span className="metric-number">{siteConfig.stats.dispatchTime.number}</span>
            <span className="metric-label">{siteConfig.stats.dispatchTime.label}</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <StarIcon size={24} color="#F59E0B" filled={true} />
          </div>
          <div className="metric-info">
            <span className="metric-number">{siteConfig.stats.reviews.number}</span>
            <span className="metric-label">{siteConfig.stats.reviews.label}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
