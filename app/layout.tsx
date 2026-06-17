import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nexxradigitals.com"),
  title: {
    default: "Web Development Company in Abuja, Nigeria | Nexxra Digital",
    template: "%s | Nexxra Digital",
  },
  description:
    "Nexxra Digital is a CAC-registered web development company in Abuja, Nigeria. We build websites, mobile apps, SaaS platforms, and business automation systems. Free consultation & 48-hour proposal.",
  keywords: [
    "web development Abuja",
    "web development Nigeria",
    "website design Abuja",
    "website design Nigeria",
    "tech company Abuja",
    "software company Abuja Nigeria",
    "mobile app development Abuja",
    "mobile app development Nigeria",
    "SaaS development Nigeria",
    "real estate website Nigeria",
    "real estate software Abuja",
    "property portal Nigeria",
    "business automation Nigeria",
    "digital marketing Nigeria",
    "e-commerce website Nigeria",
    "React developer Nigeria",
    "Next.js developer Abuja",
    "CAC registered tech company Nigeria",
    "Nexxra Digital",
    "nexxra digital Abuja",
    "IT company Abuja",
    "app developer Nigeria",
  ],
  authors: [{ name: "Nexxra Digital", url: "https://www.nexxradigitals.com" }],
  creator: "Nexxra Digital",
  publisher: "Nexxra Digital",
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
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.nexxradigitals.com",
    siteName: "Nexxra Digital",
    title: "Web Development Company in Abuja, Nigeria | Nexxra Digital",
    description:
      "CAC-registered tech company in Abuja building websites, mobile apps, SaaS platforms, and business automation for Nigerian businesses. Free consultation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in Abuja, Nigeria | Nexxra Digital",
    description:
      "CAC-registered tech company building websites, mobile apps, SaaS & automation for Nigerian businesses.",
    creator: "@nexxradigitals",
    site: "@nexxradigitals",
  },
  alternates: {
    canonical: "https://www.nexxradigitals.com",
  },
  category: "technology",
  other: {
    "geo.region": "NG-FC",
    "geo.placename": "Abuja",
    "geo.position": "9.0765;7.3986",
    ICBM: "9.0765, 7.3986",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "@id": "https://www.nexxradigitals.com/#business",
                "name": "Nexxra Digital",
                "legalName": "Nexxra Tech Innovations Limited",
                "alternateName": "Nexxra Digital Technologies",
                "description": "CAC-registered web development and tech company in Abuja, Nigeria. We build websites, mobile apps, SaaS platforms, and business automation systems for Nigerian businesses.",
                "url": "https://www.nexxradigitals.com",
                "email": "hello@nexxradigitals.com",
                "telephone": "+2348110268093",
                "foundingDate": "2025",
                "identifier": [
                  { "@type": "PropertyValue", "propertyID": "RC", "name": "CAC Registration Number", "value": "9472371" },
                  { "@type": "PropertyValue", "propertyID": "TIN", "name": "Tax Identification Number", "value": "2623718314591" }
                ],
                "address": { "@type": "PostalAddress", "addressLocality": "Abuja", "addressRegion": "Federal Capital Territory", "addressCountry": "NG" },
                "contactPoint": { "@type": "ContactPoint", "telephone": "+2348110268093", "contactType": "sales", "email": "hello@nexxradigitals.com", "areaServed": "NG", "availableLanguage": ["en"] },
                "geo": { "@type": "GeoCoordinates", "latitude": 9.0765, "longitude": 7.3986 },
                "openingHoursSpecification": [
                  { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" },
                  { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "opens": "09:00", "closes": "14:00" }
                ],
                "priceRange": "₦₦",
                "areaServed": [{ "@type": "Country", "name": "Nigeria" }, { "@type": "City", "name": "Abuja" }],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Digital Services",
                  "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development", "description": "Fast, modern websites built with Next.js and React." } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development", "description": "iOS and Android apps built with React Native and Flutter." } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SaaS Development", "description": "Multi-tenant SaaS platforms with billing, dashboards, and cloud infrastructure." } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Real Estate Software", "description": "Property portals, agent CRM, and lead generation for the Nigerian market." } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Automation", "description": "CRM automation, workflow automation, and API integrations." } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing", "description": "SEO, PPC, social media strategy for Nigerian businesses." } }
                  ]
                },
                "sameAs": ["https://twitter.com/nexxradigitals","https://linkedin.com/company/nexxradigitals","https://instagram.com/nexxradigitals"]
              },
              {
                "@type": "WebSite",
                "@id": "https://www.nexxradigitals.com/#website",
                "url": "https://www.nexxradigitals.com",
                "name": "Nexxra Digital",
                "publisher": { "@id": "https://www.nexxradigitals.com/#business" }
              }
            ]
          }) }}
        />
      </head>
      <body className={`${syne.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
