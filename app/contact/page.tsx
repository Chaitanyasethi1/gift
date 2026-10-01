import React from 'react';
import { Metadata } from 'next';
import { ContactClient } from '@/components/ContactClient';

export const metadata: Metadata = {
  title: 'Contact Factory Sales & Plant Location | AS Print Gallery',
  description:
    'Contact AS Print Gallery factory sales and customer support in Loni, Ghaziabad. Phone: +91 8851627221, WhatsApp: +91 9911678386, Email: asprintgallery742@gmail.com.',
  alternates: {
    canonical: '/contact'
  }
};

export default function ContactPage() {
  return <ContactClient />;
}
