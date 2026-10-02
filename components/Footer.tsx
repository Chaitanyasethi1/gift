import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';
import { 
  PhoneIcon, 
  WhatsAppIcon, 
  MailIcon, 
  MapPinIcon, 
  InstagramIcon, 
  FacebookIcon, 
  YoutubeIcon 
} from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">

          {/* Brand Summary */}
          <div className="footer-brand-col">
            <div className="footer-brand-title">
              AS PRINT <span>GALLERY</span>
            </div>
            <p className="footer-brand-desc">
              A Complete Designing &amp; Printing Solutions — Direct manufacturing unit for heavy-duty corrugated shipping
              cartons, food &amp; pizza packaging, apparel trims, woven labels, hang tags, and waterproof stickers.
            </p>
            <div className="footer-gst-card">
              <strong>GSTIN:</strong> {siteConfig.gstin}<br />
              <strong>Registration:</strong> Active &amp; Verified Industrial Unit<br />
              <strong>Location:</strong> {siteConfig.address.area}, {siteConfig.address.city} ({siteConfig.address.state}) - {siteConfig.address.pincode}
            </div>
          </div>
        </div>

          {/* Copyright Row */}
        <div className="footer-bottom-row" style={{ marginTop: '30px' }}>
          <div>
            &copy; 2026 <strong>AS PRINT GALLERY</strong>. All Rights Reserved. Complete Designing &amp; Printing Solutions.
          </div>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/about" style={{ color: 'var(--primary)', fontWeight: 700 }}>About Us</Link>
            <Link href="/custom-box-builder" style={{ color: 'var(--primary)', fontWeight: 700 }}>Customize Print</Link>
            <Link href="/track-order" style={{ color: 'var(--text-muted)' }}>Track Order</Link>
            <Link href="/shipping-policy" style={{ color: 'var(--text-muted)' }}>Shipping Policy</Link>
            <Link href="/terms" style={{ color: 'var(--text-muted)' }}>Terms of Sale</Link>
            <Link href="/privacy" style={{ color: 'var(--text-muted)' }}>Privacy</Link>
          </div>
        </div>

        <div className="footer-social-strip" style={{ display: 'flex', justifyContent: 'center', gap: '18px', marginTop: '15px', paddingTop: '15px', borderTop: '1px solid var(--dark-border)' }}>
          <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: 'var(--text-muted)' }}>
            <InstagramIcon size={18} />
          </a>
          <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: 'var(--text-muted)' }}>
            <FacebookIcon size={18} />
          </a>
          <a href={siteConfig.socialLinks.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={{ color: 'var(--text-muted)' }}>
            <YoutubeIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};
