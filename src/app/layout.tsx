import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vetvault.com"),
  title: {
    default: "VetVault - Digital Sanctuary for Veterinary Excellence",
    template: "%s | VetVault Digital Sanctuary",
  },
  description:
    "Transform your veterinary practice into a digital sanctuary where compassion meets technology. AI-powered pet care, intelligent workflows, and exceptional experiences for every pet and family.",
  keywords: [
    "veterinary software",
    "digital sanctuary",
    "pet care technology",
    "AI veterinary assistant",
    "Pet Vault AI",
    "veterinary practice management",
    "pet health records",
    "veterinary clinic software",
    "animal hospital management",
    "compassionate pet care",
    "veterinary digital platform",
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
    type: "website",
    locale: "en_US",
    url: "https://vetvault.com",
    siteName: "VetVault Digital Sanctuary",
    title: "VetVault - Digital Sanctuary for Veterinary Excellence",
    description:
      "Transform your veterinary practice into a digital sanctuary where compassion meets technology. AI-powered pet care, intelligent workflows, and exceptional experiences.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VetVault Digital Sanctuary - Where Veterinary Magic Meets Modern Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VetVault - Digital Sanctuary for Veterinary Excellence",
    description:
      "Transform your veterinary practice into a digital sanctuary where compassion meets technology.",
    images: ["/og-image.jpg"],
    creator: "@vetvault",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://vetvault.com",
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "VetVault Digital Sanctuary",
              url: "https://vetvault.com",
              logo: "https://vetvault.com/logo.png",
              description:
                "Digital Sanctuary for Veterinary Excellence - Where compassion meets technology",
              foundingDate: "2020",
              slogan: "Where Veterinary Magic Meets Modern Technology",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-800-VETVAULT",
                contactType: "customer service",
                availableLanguage: "English",
              },
              sameAs: [
                "https://twitter.com/vetvault",
                "https://linkedin.com/company/vetvault",
                "https://facebook.com/vetvault",
              ],
            }),
          }}
        />

        {/* Structured Data for Software Application */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "VetVault Digital Sanctuary",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web, iOS, Android",
              description:
                "Digital sanctuary platform for veterinary excellence with AI-powered pet care and compassionate technology",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "1250",
              },
              featureList: [
                "AI-Powered Veterinary Assistant (Pet Vault AI)",
                "Digital Pet Health Records",
                "Smart Appointment Scheduling",
                "Compassionate Communication Tools",
                "Inventory Intelligence",
                "Mobile Pet Parent Portal",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
