import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nexxra Digital | Tech Solutions for Nigerian Businesses",
  description:
    "Nexxra Digital is a CAC-registered tech company in Abuja, Nigeria. We build websites, mobile apps, SaaS platforms, and automation systems for real estate and businesses across Nigeria.",
  keywords: [
    "web development Nigeria",
    "tech company Abuja",
    "real estate software Nigeria",
    "SaaS development Nigeria",
    "mobile app development Abuja",
    "business automation Nigeria",
    "Nexxra Digital",
  ],
  openGraph: {
    title: "Nexxra Digital | Tech Solutions for Nigerian Businesses",
    description:
      "CAC-registered tech company in Abuja building websites, apps, SaaS and automation for Nigerian businesses.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
