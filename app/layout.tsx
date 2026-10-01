import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/data/siteConfig';
import { CartProvider } from '@/context/CartContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GlobalModals } from '@/components/GlobalModals';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { CookieBanner } from '@/components/CookieBanner';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Corrugated Box Manufacturer & Printing Factory | AS Print Gallery',
    template: '%s | AS Print Gallery'
  },
  description:
    'Direct factory manufacturer in Ghaziabad for 3-ply and 5-ply corrugated boxes, custom food packaging, woven garment labels, hang tags, and waterproof stickers. Pan-India dispatch.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    title: 'Corrugated Box Manufacturer & Printing Factory | AS Print Gallery',
    description:
      'Direct factory manufacturer in Ghaziabad for 3-ply and 5-ply corrugated boxes, custom food packaging, woven garment labels, hang tags, and waterproof stickers.',
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
    title: 'Corrugated Box Manufacturer & Printing Factory | AS Print Gallery',
    description:
      'Direct factory rates on corrugated boxes, food packaging, woven labels, and custom stickers from Ghaziabad.',
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
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <CartProvider>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <GlobalModals />
          <StickyMobileBar />
          <CookieBanner />
        </CartProvider>
      </body>
    </html>
  );
}
