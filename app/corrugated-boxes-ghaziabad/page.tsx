import React from 'react';
import { Metadata } from 'next';
import { CITIES_DATA } from '@/data/citiesData';
import { CityLandingPage } from '@/components/CityLandingPage';

const city = CITIES_DATA.ghaziabad;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: {
    canonical: '/corrugated-boxes-ghaziabad'
  }
};

export default function GhaziabadPage() {
  return <CityLandingPage city={city} />;
}
