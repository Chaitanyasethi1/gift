import React from 'react';
import { Metadata } from 'next';
import { CookiesClient } from '@/components/CookiesClient';

export const metadata: Metadata = {
  title: 'Cookie Policy & Privacy Preferences | AS Print Gallery',
  description:
    'Overview of cookies used on asprintgallery.com, local storage cart persistence, and controls to accept or reject analytics tracking.',
  alternates: {
    canonical: '/cookies'
  }
};

export default function CookiesPage() {
  return <CookiesClient />;
}
