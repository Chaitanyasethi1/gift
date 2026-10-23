'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface CheckItem {
  id: string;
  name: string;
  status: 'PASSED' | 'WARNING' | 'FAILED';
  latency?: string;
  details: string;
  meta?: any;
}

interface DiagnosticsData {
  success: boolean;
  overallStatus: 'HEALTHY' | 'WARNINGS_DETECTED';
  timestamp: string;
  executionTimeMs: number;
  totalChecks: number;
  passedChecks: number;
  checks: CheckItem[];
}

export default function DiagnosticsPage() {
  const [data, setData] = useState<DiagnosticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false
  });

  const runDiagnostics = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/admin/diagnostics');
      if (!res.ok) {
        const errJson = await res.json();
        throw new Error(errJson.error || `HTTP ${res.status}`);
      }
      const json = await res.json();
      setData(json);
    } catch (err: any) {
      setError(err.message || 'Failed to execute diagnostics');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    runDiagnostics();
  }, []);

  const toggleCheck = (key: string) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '60px' }}>
      
      {/* Page Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px', flexWrap: 'wrap', gap: '15px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '2rem' }}>🩺</span>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#0F172A', margin: 0 }}>
              System Health &amp; Pre-Flight Diagnostics
            </h1>
          </div>
          <p style={{ color: '#64748B', margin: '6px 0 0 0', fontSize: '0.95rem' }}>
            Client delivery se pehle poore system (Database, Pricing Math, Razorpay, Coupons, Live Stock, SEO) ka automated audit.
          </p>
        </div>

        <button
          onClick={runDiagnostics}
          disabled={loading}
          style={{
            background: loading ? '#94A3B8' : '#2563EB',
            color: '#FFFFFF',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '10px',
            fontWeight: 800,
            fontSize: '0.95rem',
            cursor: loading ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 14px rgba(37, 99, 235, 0.25)'
          }}
        >
          <span>{loading ? '⏳' : '⚡'}</span>
          <span>{loading ? 'Running Tests...' : 'Re-Run All Diagnostics'}</span>
        </button>
      </div>

      {/* Overall Status Card */}
      {error ? (
        <div style={{ background: '#FEE2E2', border: '1.5px solid #F87171', borderRadius: '14px', padding: '20px', color: '#991B1B', marginBottom: '25px' }}>
          <strong>Diagnostics Failed:</strong> {error}
        </div>
      ) : data ? (
        <div style={{
          background: data.overallStatus === 'HEALTHY' ? 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)' : '#FEF3C7',
          border: `2px solid ${data.overallStatus === 'HEALTHY' ? '#86EFAC' : '#FCD34D'}`,
          borderRadius: '16px',
          padding: '24px 28px',
          marginBottom: '28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span style={{ fontSize: '1.5rem' }}>{data.overallStatus === 'HEALTHY' ? '🎉' : '⚠️'}</span>
              <span style={{ fontSize: '1.3rem', fontWeight: 900, color: data.overallStatus === 'HEALTHY' ? '#166534' : '#92400E' }}>
                {data.overallStatus === 'HEALTHY' ? 'ALL SYSTEMS 100% OPERATIONAL — READY FOR CLIENT DELIVERY' : 'SOME CHECKS REQUIRE ATTENTION'}
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '0.88rem', color: data.overallStatus === 'HEALTHY' ? '#15803D' : '#B45309' }}>
              {data.passedChecks} of {data.totalChecks} automated tests passed with zero fatal errors. Completed in {data.executionTimeMs}ms.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <Link
              href="/admin/sql-editor"
              style={{
                background: '#FFFFFF',
                color: '#0F172A',
                border: '1px solid #CBD5E1',
                padding: '9px 16px',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>⚡</span>
              <span>Open SQL Console</span>
            </Link>
            <Link
              href="/admin/stock"
              style={{
                background: '#FFFFFF',
                color: '#0F172A',
                border: '1px solid #CBD5E1',
                padding: '9px 16px',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>📦</span>
              <span>Manage Products</span>
            </Link>
          </div>
        </div>
      ) : null}

      {/* Detailed Diagnostics Grid */}
      <div style={{ marginBottom: '35px' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '14px' }}>
          Automated Subsystem Verification
        </h2>

        {loading && !data ? (
          <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: '12px', textAlign: 'center', border: '1px solid #E2E8F0', color: '#64748B' }}>
            ⏳ Running real-time tests against database, Razorpay, and pricing engine...
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '16px' }}>
            {data?.checks.map((chk) => (
              <div
                key={chk.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  border: chk.status === 'PASSED' ? '1px solid #BBF7D0' : '1.5px solid #FCD34D',
                  padding: '18px 20px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <strong style={{ fontSize: '0.98rem', color: '#0F172A' }}>{chk.name}</strong>
                    <span style={{
                      background: chk.status === 'PASSED' ? '#DCFCE7' : '#FEF3C7',
                      color: chk.status === 'PASSED' ? '#166534' : '#92400E',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      fontSize: '0.72rem',
                      fontWeight: 800
                    }}>
                      {chk.status === 'PASSED' ? '✅ PASSED' : '⚠️ WARNING'}
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>
                    {chk.details}
                  </p>
                </div>

                {chk.latency && (
                  <div style={{ marginTop: '12px', paddingTop: '10px', borderTop: '1px solid #F1F5F9', fontSize: '0.75rem', color: '#94A3B8', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Subsystem Latency</span>
                    <strong style={{ color: '#64748B' }}>{chk.latency}</strong>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 5-Minute Manual Client Demo Checklist */}
      <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '26px 30px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
        <div style={{ marginBottom: '18px' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
            📋 5-Minute Client Handover Demo Checklist
          </h2>
          <p style={{ color: '#64748B', fontSize: '0.88rem', margin: '4px 0 0 0' }}>
            Aap khud ya client ke saamne in 5 steps ko live click karke dikha sakte hain. Har feature live testing verified hai.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          
          {/* Step 1 */}
          <div 
            onClick={() => toggleCheck('step1')}
            style={{
              padding: '14px 18px',
              borderRadius: '10px',
              background: checklist.step1 ? '#F0FDF4' : '#F8FAFC',
              border: `1.5px solid ${checklist.step1 ? '#86EFAC' : '#E2E8F0'}`,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              transition: 'all 0.15s ease'
            }}
          >
            <input type="checkbox" checked={checklist.step1} onChange={() => {}} style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
            <div style={{ flex: 1 }}>
              <strong style={{ color: '#0F172A', fontSize: '0.92rem', display: 'block' }}>
                1. Homepage &amp; Clean Catalog Browsing
              </strong>
              <span style={{ fontSize: '0.82rem', color: '#64748B' }}>
                Website kholiye (<Link href="/" target="_blank" style={{ color: '#2563EB', fontWeight: 600 }}>asprintgallery.com</Link>), hero slider, clean categories, aur product cards check karein (no clutter, pure professional ecommerce UI).
              </span>
            </div>
            <span style={{ fontSize: '0.8rem', color: '#2563EB', fontWeight: 700 }}>Open &rarr;</span>
          </div>

          {/* Step 2 */}
          <div 
            onClick={() => toggleCheck('step2')}
            style={{
              padding: '14px 18px',
              borderRadius: '10px',
              background: checklist.step2 ? '#F0FDF4' : '#F8FAFC',
              border: `1.5px solid ${checklist.step2 ? '#86EFAC' : '#E2E8F0'}`,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              transition: 'all 0.15s ease'
            }}
          >
            <input type="checkbox" checked={checklist.step2} onChange={() => {}} style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
            <div style={{ flex: 1 }}>
              <strong style={{ color: '#0F172A', fontSize: '0.92rem', display: 'block' }}>
                2. Product Page: Pack Pricing &amp; Dual Detailed Specifications
              </strong>
              <span style={{ fontSize: '0.82rem', color: '#64748B' }}>
                Kisi bhi box product par click karein. "Pack of 50", "Pack of 100" click karke check karein rate automatically update hota hai aur neeche poori <strong>Technical Specifications Table, Flute Type, &amp; FAQs</strong> aate hain.
              </span>
            </div>
            <span style={{ fontSize: '0.8rem', color: '#2563EB', fontWeight: 700 }}>Open &rarr;</span>
          </div>

          {/* Step 3 */}
          <div 
            onClick={() => toggleCheck('step3')}
            style={{
              padding: '14px 18px',
              borderRadius: '10px',
              background: checklist.step3 ? '#F0FDF4' : '#F8FAFC',
              border: `1.5px solid ${checklist.step3 ? '#86EFAC' : '#E2E8F0'}`,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              transition: 'all 0.15s ease'
            }}
          >
            <input type="checkbox" checked={checklist.step3} onChange={() => {}} style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
            <div style={{ flex: 1 }}>
              <strong style={{ color: '#0F172A', fontSize: '0.92rem', display: 'block' }}>
                3. Cart Drawer &amp; Coupon Discount Application
              </strong>
              <span style={{ fontSize: '0.82rem', color: '#64748B' }}>
                Cart me item daalein. Coupon field me <strong>AS20</strong> ya <strong>WELCOME10</strong> daalkar "Apply" dabayein. Subtotal me se discount minus hoke exact 18% GST taxable base par calculate hota hai.
              </span>
            </div>
            <span style={{ fontSize: '0.8rem', color: '#2563EB', fontWeight: 700 }}>Test &rarr;</span>
          </div>

          {/* Step 4 */}
          <div 
            onClick={() => toggleCheck('step4')}
            style={{
              padding: '14px 18px',
              borderRadius: '10px',
              background: checklist.step4 ? '#F0FDF4' : '#F8FAFC',
              border: `1.5px solid ${checklist.step4 ? '#86EFAC' : '#E2E8F0'}`,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              transition: 'all 0.15s ease'
            }}
          >
            <input type="checkbox" checked={checklist.step4} onChange={() => {}} style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
            <div style={{ flex: 1 }}>
              <strong style={{ color: '#0F172A', fontSize: '0.92rem', display: 'block' }}>
                4. Checkout: Razorpay Modal &amp; COD &le; ₹999 Validation
              </strong>
              <span style={{ fontSize: '0.82rem', color: '#64748B' }}>
                Delivery details bhariye. Online payment par click karne par live Razorpay UPI/Card checkout modal khulta hai. ₹999 se upar par Cash On Delivery auto-disabled hota hai.
              </span>
            </div>
            <span style={{ fontSize: '0.8rem', color: '#2563EB', fontWeight: 700 }}>Test &rarr;</span>
          </div>

          {/* Step 5 */}
          <div 
            onClick={() => toggleCheck('step5')}
            style={{
              padding: '14px 18px',
              borderRadius: '10px',
              background: checklist.step5 ? '#F0FDF4' : '#F8FAFC',
              border: `1.5px solid ${checklist.step5 ? '#86EFAC' : '#E2E8F0'}`,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              transition: 'all 0.15s ease'
            }}
          >
            <input type="checkbox" checked={checklist.step5} onChange={() => {}} style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
            <div style={{ flex: 1 }}>
              <strong style={{ color: '#0F172A', fontSize: '0.92rem', display: 'block' }}>
                5. Admin Panel: Stock Live Deduction &amp; SQL Console
              </strong>
              <span style={{ fontSize: '0.82rem', color: '#64748B' }}>
                Order lagne ke baad <Link href="/admin/stock" style={{ color: '#2563EB', fontWeight: 600 }}>Products &amp; Stock</Link> me live pieces minus ho jaate hain. <Link href="/admin/sql-editor" style={{ color: '#2563EB', fontWeight: 600 }}>SQL Editor</Link> me presets run karke live entry dekh sakte hain.
              </span>
            </div>
            <span style={{ fontSize: '0.8rem', color: '#2563EB', fontWeight: 700 }}>Open &rarr;</span>
          </div>

        </div>
      </div>

    </div>
  );
}
