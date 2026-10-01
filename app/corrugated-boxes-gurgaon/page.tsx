import React from 'react';
import { Metadata } from 'next';
import { CITIES_DATA } from '@/data/citiesData';
import { CityLandingPage } from '@/components/CityLandingPage';

const city = CITIES_DATA.gurgaon;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: {
    canonical: '/corrugated-boxes-gurgaon'
  }
};

export default function GurgaonPage() {
  return <CityLandingPage city={city} />;
}
