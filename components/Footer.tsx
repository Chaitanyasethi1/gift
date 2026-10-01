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

          {/* Packaging Categories */}
          <div className="footer-links-col">
            <h4>Packaging Solutions</h4>
            <ul className="footer-links-list">
              <li><Link href="/products?filter=corrugated">3-Ply Corrugated Boxes</Link></li>
              <li><Link href="/products?filter=corrugated">5-Ply Heavy Master Cartons</Link></li>
              <li><Link href="/products?filter=food">Custom Pizza Boxes</Link></li>
              <li><Link href="/products?filter=food">Mithai &amp; Sweet Gift Boxes</Link></li>
              <li><Link href="/products?filter=packaging">Apparel &amp; Shirt Packaging</Link></li>
              <li><Link href="/products?filter=bags">Kraft Paper Carry Bags</Link></li>
              <li><Link href="/products?filter=bags">Tamper-Proof Paper Envelopes</Link></li>
            </ul>
          </div>

          {/* Trims & Labels */}
          <div className="footer-links-col">
            <h4>Labels &amp; Printing</h4>
            <ul className="footer-links-list">
              <li><Link href="/products?filter=label">High-Density Woven Labels</Link></li>
              <li><Link href="/products?filter=label">Satin Wash-Care Labels</Link></li>
              <li><Link href="/products?filter=label">Brand Hang Tags &amp; Tickets</Link></li>
              <li><Link href="/products?filter=sticker">Chromo Gumming Stickers</Link></li>
              <li><Link href="/products?filter=sticker">Waterproof Vinyl Decals</Link></li>
              <li><Link href="/products?filter=sticker">Barcode &amp; Thermal Rolls</Link></li>
              <li><Link href="/products?filter=label">Tagless Heat Transfers</Link></li>
            </ul>
          </div>

          {/* Quick Contacts & Factory Info */}
          <div className="footer-links-col">
            <h4>Factory Hotline</h4>
            <div className="footer-contact-info">
              <div>
                <strong>Sales Hotline:</strong><br />
                <a href={siteConfig.phones.salesTel} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <PhoneIcon size={14} /> {siteConfig.phones.salesDisplay}
                </a>
              </div>
              <div style={{ marginTop: '8px' }}>
                <strong>WhatsApp Orders:</strong><br />
                <a href={`https://wa.me/${siteConfig.phones.whatsappRaw}?text=Hi%20AS%20Print%20Gallery!%20I%20have%20an%20inquiry%20from%20your%20website.`} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#25D366' }}>
                  <WhatsAppIcon size={14} color="#25D366" /> {siteConfig.phones.whatsappDisplay}
                </a>
              </div>
              <div style={{ marginTop: '8px' }}>
                <strong>Email Quotations:</strong><br />
                <a href={`mailto:${siteConfig.emails.quotations}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <MailIcon size={14} /> {siteConfig.emails.quotations}
                </a>
              </div>
              <div style={{ marginTop: '8px' }}>
                <strong>Manufacturing Facility:</strong><br />
                <span style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '6px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <MapPinIcon size={14} style={{ marginTop: '3px', flexShrink: 0 }} /> {siteConfig.address.full}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* City Landing Pages Quick Links */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', padding: '16px 0', marginTop: '20px', display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-light, #CBD5E1)' }}>Direct Factory Delivery:</span>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/corrugated-boxes-delhi" style={{ fontSize: '0.82rem', color: 'var(--primary)', textDecoration: 'none' }}>Corrugated Boxes Delhi</Link>
            <span style={{ color: '#475569' }}>•</span>
            <Link href="/corrugated-boxes-noida" style={{ fontSize: '0.82rem', color: 'var(--primary)', textDecoration: 'none' }}>Corrugated Boxes Noida</Link>
            <span style={{ color: '#475569' }}>•</span>
            <Link href="/corrugated-boxes-ghaziabad" style={{ fontSize: '0.82rem', color: 'var(--primary)', textDecoration: 'none' }}>Corrugated Boxes Ghaziabad</Link>
            <span style={{ color: '#475569' }}>•</span>
            <Link href="/corrugated-boxes-gurgaon" style={{ fontSize: '0.82rem', color: 'var(--primary)', textDecoration: 'none' }}>Corrugated Boxes Gurgaon</Link>
          </div>
        </div>

        {/* Logistics & Payment Badges Strip */}
        <div className="footer-trust-strip">
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-dark)' }}>Logistics Partners:</span>
            <div className="partner-badges-group">
              <span className="partner-badge-chip">BlueDart Express</span>
              <span className="partner-badge-chip">Delhivery Surface</span>
              <span className="partner-badge-chip">DTDC Air Cargo</span>
              <span className="partner-badge-chip">SafeXpress</span>
              <span className="partner-badge-chip">India Post</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-dark)' }}>Accepted Payment Modes:</span>
            <div className="partner-badges-group">
              <span className="partner-badge-chip">UPI (GPay / PhonePe)</span>
              <span className="partner-badge-chip">NEFT / RTGS</span>
              <span className="partner-badge-chip">RuPay &amp; Visa</span>
              <span className="partner-badge-chip">Mastercard</span>
              <span className="partner-badge-chip">Net Banking</span>
            </div>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="footer-bottom-row">
          <div>
            &copy; 2026 <strong>AS PRINT GALLERY</strong>. All Rights Reserved. Complete Designing &amp; Printing Solutions.
          </div>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/about" style={{ color: 'var(--primary)', fontWeight: 700 }}>About Factory</Link>
            <Link href="/custom-box-builder" style={{ color: 'var(--primary)', fontWeight: 700 }}>3D Box Builder</Link>
            <Link href="/certifications" style={{ color: 'var(--primary)', fontWeight: 700 }}>Certifications</Link>
            <Link href="/track-order" style={{ color: 'var(--text-muted)' }}>Track Order</Link>
            <Link href="/shipping-policy" style={{ color: 'var(--text-muted)' }}>Shipping Policy</Link>
            <Link href="/terms" style={{ color: 'var(--text-muted)' }}>Terms of Sale</Link>
            <Link href="/returns-refunds" style={{ color: 'var(--text-muted)' }}>Returns &amp; QC</Link>
            <Link href="/privacy" style={{ color: 'var(--text-muted)' }}>Privacy</Link>
            <Link href="/cookies" style={{ color: 'var(--text-muted)' }}>Cookies</Link>
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
