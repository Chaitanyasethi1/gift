import React from 'react';
import Link from 'next/link';
import { MailIcon, MapPinIcon, PhoneIcon } from './Icons';
import { siteConfig } from '@/data/siteConfig';

export function Footer() {
  return (
    <footer style={{ background: '#1C1C1C', color: '#FFFFFF', paddingTop: '60px', paddingBottom: '20px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
        
        {/* Quick Links */}
        <div>
          <h4 style={{ color: '#9CA3AF', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><Link href="/shipping-policy" style={{ color: '#D1D5DB', textDecoration: 'none', fontSize: '0.9rem' }}>Shipping Policy</Link></li>
            <li><Link href="/terms" style={{ color: '#D1D5DB', textDecoration: 'none', fontSize: '0.9rem' }}>Terms & Conditions</Link></li>
            <li><Link href="/returns-refunds" style={{ color: '#D1D5DB', textDecoration: 'none', fontSize: '0.9rem' }}>Cancellation/Refund Policy</Link></li>
            <li><Link href="/about" style={{ color: '#D1D5DB', textDecoration: 'none', fontSize: '0.9rem' }}>About Us</Link></li>
            <li><Link href="/contact" style={{ color: '#D1D5DB', textDecoration: 'none', fontSize: '0.9rem' }}>Contact Us</Link></li>
            <li><Link href="#" style={{ color: '#D1D5DB', textDecoration: 'none', fontSize: '0.9rem' }}>Blogs</Link></li>
            <li><Link href="#" style={{ color: '#D1D5DB', textDecoration: 'none', fontSize: '0.9rem' }}>Sitemap</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 style={{ color: '#9CA3AF', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px' }}>Contact Us</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#D1D5DB', fontSize: '0.9rem', lineHeight: 1.5 }}>
              <MapPinIcon size={18} />
              <span>{`${siteConfig.contact.address.street}, ${siteConfig.contact.address.city}, ${siteConfig.contact.address.state} - ${siteConfig.contact.address.pincode}`}</span>
            </li>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'center', color: '#D1D5DB', fontSize: '0.9rem' }}>
              <PhoneIcon size={18} />
              <span>{siteConfig.contact.salesPhone}, {siteConfig.contact.whatsappPhone}</span>
            </li>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'center', color: '#D1D5DB', fontSize: '0.9rem' }}>
              <MailIcon size={18} />
              <a href={`mailto:${siteConfig.contact.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>{siteConfig.contact.email}</a>
            </li>
          </ul>
        </div>

        {/* Find Our App (Empty Space or App links) */}
        <div>
          <h4 style={{ color: '#9CA3AF', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px' }}>Find Our App On Mobile</h4>
          {/* QR Codes removed as requested */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
             <div style={{ background: '#000', border: '1px solid #333', padding: '8px 12px', borderRadius: '6px', fontSize: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
               🍎 App Store
             </div>
             <div style={{ background: '#000', border: '1px solid #333', padding: '8px 12px', borderRadius: '6px', fontSize: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
               ▶️ Google Play
             </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div>
          <h4 style={{ color: '#9CA3AF', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px' }}>Payment Methods</h4>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '30px' }}>
             <div style={{ width: '40px', height: '25px', background: '#fff', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontSize: '0.7rem', fontWeight: 'bold' }}>VISA</div>
             <div style={{ width: '40px', height: '25px', background: '#fff', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontSize: '0.7rem', fontWeight: 'bold' }}>MC</div>
             <div style={{ width: '40px', height: '25px', background: '#fff', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontSize: '0.7rem', fontWeight: 'bold' }}>UPI</div>
          </div>
          <h4 style={{ color: '#9CA3AF', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '15px' }}>Keep In Touch</h4>
          <div style={{ display: 'flex', gap: '15px' }}>
             <span>📷</span>
             <span>📘</span>
             <span>📺</span>
             <span>📌</span>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #333', paddingTop: '20px', textAlign: 'center', color: '#6B7280', fontSize: '0.85rem' }}>
         © 2024-25 | All rights reserved
      </div>
    </footer>
  );
}
