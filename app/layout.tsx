import type { Metadata } from 'next';
import Script from 'next/script';
import { Roboto } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/data/siteConfig';
import { CartProvider } from '@/context/CartContext';

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700', '900'], variable: '--font-roboto' });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'AS Print Gallery | Corrugated Box Manufacturer, Stickers & Packaging Solutions',
    template: '%s | AS Print Gallery'
  },
  description:
    'Direct factory manufacturer for custom corrugated boxes (3-ply & 5-ply), waterproof vinyl stickers, woven garment labels, hang tags, pizza boxes & kraft paper bags. Best wholesale factory prices with Pan-India dispatch from Ghaziabad / Delhi NCR.',
  keywords: [
    'stickers',
    'custom stickers',
    'waterproof vinyl stickers',
    'packaging stickers',
    'packaging boxes',
    'corrugated boxes',
    'corrugated box manufacturer',
    'corrugated box manufacturer ghaziabad',
    'corrugated box manufacturer delhi',
    '3 ply corrugated boxes',
    '5 ply master cartons',
    'custom printed pizza boxes',
    'food packaging boxes',
    'garment boxes',
    'woven labels',
    'woven garment labels',
    'satin wash care labels',
    'hang tags',
    'clothing brand tags',
    'kraft paper bags',
    'paper courier mailers',
    'custom tape',
    'bubble wrap wholesale',
    'custom box builder',
    'as print gallery',
    'packaging manufacturer delhi ncr',
    'printing and packaging solutions india'
  ],
  authors: [{ name: 'AS Print Gallery', url: siteConfig.url }],
  creator: 'AS Print Gallery',
  publisher: 'AS Print Gallery',
  category: 'Packaging & Printing Services',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    title: 'AS Print Gallery | Direct Factory Packaging Boxes & Custom Stickers',
    description:
      'Direct factory manufacturer for custom corrugated boxes, waterproof vinyl stickers, woven labels & packaging solutions. Wholesale prices with fast Pan-India dispatch.',
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
    title: 'AS Print Gallery | Direct Factory Packaging Boxes & Custom Stickers',
    description:
      'Direct factory manufacturer for custom corrugated boxes, waterproof vinyl stickers, woven labels & packaging solutions. Wholesale prices with fast Pan-India dispatch.',
    images: [`${siteConfig.url}/assets/combo_banner_new.jpg`]
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/favicon.ico'
  },
  manifest: '/manifest.json'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AS Print Gallery',
    alternateName: ['AS Print', 'asprintgallery.com'],
    url: siteConfig.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/shop?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}/logo.png`,
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.youtube
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phones.salesDisplay,
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['en', 'Hindi']
    }
  };

  const siteNavigationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'SiteNavigationElement',
        position: 1,
        name: 'Packaging Boxes & Corrugated Cartons',
        description: 'Direct factory manufactured 3-ply and 5-ply corrugated boxes.',
        url: `${siteConfig.url}/products`
      },
      {
        '@type': 'SiteNavigationElement',
        position: 2,
        name: 'Custom Box Builder (3D Configurator)',
        description: 'Instant online quote & 3D custom packaging box customizer.',
        url: `${siteConfig.url}/custom-box-builder`
      },
      {
        '@type': 'SiteNavigationElement',
        position: 3,
        name: 'Stickers, Labels & Hang Tags',
        description: 'Waterproof stickers, woven garment labels and custom hang tags.',
        url: `${siteConfig.url}/products`
      },
      {
        '@type': 'SiteNavigationElement',
        position: 4,
        name: 'Track Order Status',
        description: 'Real-time live order tracking and dispatch status.',
        url: `${siteConfig.url}/track-order`
      },
      {
        '@type': 'SiteNavigationElement',
        position: 5,
        name: 'About Manufacturing Unit',
        description: 'About our Ghaziabad manufacturing plant and quality standards.',
        url: `${siteConfig.url}/about`
      },
      {
        '@type': 'SiteNavigationElement',
        position: 6,
        name: 'Contact Factory',
        description: 'Direct sales desk and instant WhatsApp support.',
        url: `${siteConfig.url}/contact`
      }
    ]
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}/logo.png`,
    telephone: siteConfig.phones.salesDisplay,
    priceRange: '₹₹',
    taxID: siteConfig.gstin,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1240',
      bestRating: '5',
      worstRating: '1'
    },
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
    <html lang="en" className={roboto.variable}>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RNM182BSEZ"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RNM182BSEZ', {
                page_path: window.location.pathname,
              });
            `
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <style dangerouslySetInnerHTML={{ __html: `body, * { font-family: var(--font-roboto), sans-serif !important; }` }} />
      </head>
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
