import React from 'react';
import { Metadata } from 'next';
import { ContactClient } from '@/components/ContactClient';

export const metadata: Metadata = {
  title: 'Contact Factory Sales & Plant Location | AS Print Gallery',
  description:
    'Contact AS Print Gallery factory sales and customer support in Loni, Ghaziabad. Phone: +91 8851627221, WhatsApp: +91 9911678386, Email: asprintgallery742@gmail.com.',
  keywords: [
    'contact as print gallery',
    'as print gallery address',
    'as print gallery phone number',
    'corrugated box manufacturer contact loni',
    'packaging factory ghaziabad location'
  ],
  alternates: {
    canonical: '/contact'
  },
  openGraph: {
    title: 'Contact Factory Sales & Plant Location | AS Print Gallery',
    description:
      'Plot No. 12, Industrial Area, Loni, Ghaziabad, UP - 201102. Direct factory contact: +91 9911678386.',
    url: 'https://asprintgallery.com/contact',
    images: ['https://asprintgallery.com/assets/combo_banner_new.jpg']
  }
};

export default function ContactPage() {
  return <ContactClient />;
}
