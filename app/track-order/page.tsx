import React from 'react';
import { Metadata } from 'next';
import { TrackOrderClient } from '@/components/TrackOrderClient';

export const metadata: Metadata = {
  title: 'Track Packaging Order & Consignment | AS Print Gallery',
  description:
    'Track your corrugated carton and packaging order dispatch status with AS Print Gallery. Real-time updates for BlueDart, Delhivery, DTDC, and SafeXpress shipments.',
  alternates: {
    canonical: '/track-order'
  }
};

export default function TrackOrderPage() {
  return <TrackOrderClient />;
}
