import React from 'react';
import { Metadata } from 'next';
import { CITIES_DATA } from '@/data/citiesData';
import { CityLandingPage } from '@/components/CityLandingPage';

const city = CITIES_DATA.noida;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: {
    canonical: '/corrugated-boxes-noida'
  }
};

export default function NoidaPage() {
  return <CityLandingPage city={city} />;
}
