import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' }
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://vetvault.com'),
  title: {
    default: "VetVault - All-in-One Veterinary Practice Management Software",
    template: "%s | VetVault"
  },
  description: "Cutting-edge veterinary software for simpler operations, improved pet care, and getting home on time. Trusted by 1000+ practices worldwide.",
  keywords: [
    "veterinary software",
    "practice management",
    "PIMS",
    "veterinary records",
    "appointment scheduling",
    "pet health records",
    "veterinary clinic software",
    "animal hospital management",
    "veterinary billing",
    "pet care software"
  ],
  authors: [{ name: "VetVault Team" }],
  creator: "VetVault",
  publisher: "VetVault",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vetvault.com',
    siteName: 'VetVault',
    title: 'VetVault - All-in-One Veterinary Practice Management Software',
    description: 'Cutting-edge veterinary software for simpler operations, improved pet care, and getting home on time. Trusted by 1000+ practices worldwide.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VetVault - Veterinary Practice Management Software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VetVault - All-in-One Veterinary Practice Management Software',
    description: 'Cutting-edge veterinary software for simpler operations, improved pet care, and getting home on time.',
    images: ['/og-image.jpg'],
    creator: '@vetvault',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://vetvault.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "VetVault",
              "url": "https://vetvault.com",
              "logo": "https://vetvault.com/logo.png",
              "description": "All-in-One Veterinary Practice Management Software",
              "foundingDate": "2020",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-VETVAULT",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://twitter.com/vetvault",
                "https://linkedin.com/company/vetvault",
                "https://facebook.com/vetvault"
              ]
            })
          }}
        />
        
        {/* Structured Data for Software Application */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "VetVault",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web, iOS, Android",
              "description": "Comprehensive veterinary practice management software",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1250"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
