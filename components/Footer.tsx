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
              <MapPinIcon size={18} color="#4ADE80" />
              <a 
                href="https://maps.app.goo.gl/sQC85oM7zJemKo9k8" 
                target="_blank" 
                rel="noreferrer"
                style={{ color: '#D1D5DB', textDecoration: 'none', transition: 'color 0.2s' }}
              >
                {`${siteConfig.contact.address.street}, ${siteConfig.contact.address.city}, ${siteConfig.contact.address.state} - ${siteConfig.contact.address.pincode}`}
              </a>
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

        {/* Find Our App / Factory Location Map */}
        <div>
          <h4 style={{ color: '#9CA3AF', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '14px' }}>
            Factory Location
          </h4>
          
          <a
            href="https://maps.app.goo.gl/sQC85oM7zJemKo9k8"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'block',
              textDecoration: 'none',
              borderRadius: '10px',
              overflow: 'hidden',
              border: '1.5px solid #374151',
              position: 'relative',
              background: '#1F2937',
              boxShadow: '0 4px 14px rgba(0,0,0,0.4)',
              transition: 'transform 0.2s, border-color 0.2s'
            }}
          >
            {/* Visual Map Graphic with Factory Pin */}
            <div style={{
              height: '115px',
              background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: 'radial-gradient(#334155 1.5px, transparent 1.5px)',
              backgroundSize: '16px 16px'
            }}>
              {/* Map Marker */}
              <div style={{
                background: '#EF4444',
                color: '#FFF',
                width: '38px',
                height: '38px',
                borderRadius: '50% 50% 50% 0',
                transform: 'rotate(-45deg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(239, 68, 68, 0.6)',
                border: '2px solid #FFF',
                marginBottom: '6px'
              }}>
                <span style={{ transform: 'rotate(45deg)', fontSize: '1rem' }}>🏭</span>
              </div>
              
              <div style={{
                background: 'rgba(0,0,0,0.8)',
                color: '#4ADE80',
                fontSize: '0.74rem',
                fontWeight: 800,
                padding: '3px 10px',
                borderRadius: '20px',
                border: '1px solid rgba(74, 222, 128, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <span>📍 AS Print Gallery Factory</span>
              </div>
            </div>

            {/* Map Click Info Box */}
            <div style={{ padding: '10px 12px', background: '#111827', borderTop: '1px solid #374151' }}>
              <div style={{ color: '#F3F4F6', fontSize: '0.82rem', fontWeight: 700, marginBottom: '2px' }}>
                Kh No. 2326/2, Loni, Ghaziabad
              </div>
              <div style={{ color: '#38BDF8', fontSize: '0.76rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span>Click to Open Live Google Map</span>
                <span>↗</span>
              </div>
            </div>
          </a>

          {/* App download pills */}
          <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
             <div style={{ background: '#000', border: '1px solid #333', padding: '6px 10px', borderRadius: '6px', fontSize: '0.72rem', display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#9CA3AF' }}>
               🍎 App Store
             </div>
             <div style={{ background: '#000', border: '1px solid #333', padding: '6px 10px', borderRadius: '6px', fontSize: '0.72rem', display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#9CA3AF' }}>
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
          <div style={{ display: 'flex', gap: '20px' }}>
             <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'flex' }} aria-label="Instagram">
               <svg width="28" height="28" viewBox="0 0 24 24" fill="#E1306C"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
             </a>
             <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'flex' }} aria-label="Facebook">
               <svg width="28" height="28" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
             </a>
             <a href="https://youtube.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'flex' }} aria-label="YouTube">
               <svg width="28" height="28" viewBox="0 0 24 24" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
             </a>
          </div>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid #222',
        padding: '16px 20px',
        color: '#9CA3AF',
        fontSize: '0.82rem',
        background: '#0D0D0D'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexWrap: 'wrap', gap: '10px' }}>
          <span>© 2024-25 AS Print Gallery | All rights reserved</span>
          <span style={{ fontSize: '0.82rem' }}>
            Developed By <strong style={{ color: '#F3F4F6', fontWeight: 700 }}>Eyesonwork</strong>
          </span>
        </div>
      </div>
    </footer>
  );
}
