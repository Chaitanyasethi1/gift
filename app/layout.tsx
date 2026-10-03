import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/data/siteConfig';
import { CartProvider } from '@/context/CartContext';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'AS Print Gallery | All types of Printing and packaging solutions',
    template: '%s | AS Print Gallery'
  },
  description:
    'All types of Printing and packaging solutions. Direct factory manufacturer for custom food packaging, woven garment labels, hang tags, and waterproof stickers.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    title: 'AS Print Gallery | All types of Printing and packaging solutions',
    description:
      'All types of Printing and packaging solutions. Direct factory manufacturer for custom food packaging, woven garment labels, hang tags, and waterproof stickers.',
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/assets/combo_banner_new.jpg`,
        width: 1200,
        height: 630,
        alt: 'AS Print Gallery Factory Packaging & Printing'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AS Print Gallery | All types of Printing and packaging solutions',
    description:
      'All types of Printing and packaging solutions. Direct factory manufacturer for custom food packaging, woven garment labels, hang tags, and waterproof stickers.',
    images: [`${siteConfig.url}/assets/combo_banner_new.jpg`]
  },
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/assets/logo.png`,
    telephone: siteConfig.phones.salesDisplay,
    priceRange: '₹₹',
    taxID: siteConfig.gstin,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.pincode,
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.7515,
      longitude: 77.2885
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00'
      }
    ],
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.youtube
    ]
  };

  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <style dangerouslySetInnerHTML={{ __html: `body { font-family: 'Outfit', sans-serif !important; }` }} />
      </head>
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
