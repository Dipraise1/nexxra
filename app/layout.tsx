import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexxradigital.com"),
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
  authors: [{ name: "Nexxra Digital", url: "https://nexxradigital.com" }],
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
    url: "https://nexxradigital.com",
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
    creator: "@nexxradigital",
    site: "@nexxradigital",
  },
  alternates: {
    canonical: "https://nexxradigital.com",
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
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
