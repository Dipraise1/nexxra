export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://nexxradigital.com/#business",
        "name": "Nexxra Digital",
        "alternateName": "Nexxra Digital Technologies",
        "description":
          "CAC-registered web development and tech company in Abuja, Nigeria. We build websites, mobile apps, SaaS platforms, and business automation systems for Nigerian businesses.",
        "url": "https://nexxradigital.com",
        "email": "hello@nexxradigital.com",
        "telephone": "+234-800-NEXXRA",
        "foundingDate": "2023",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Abuja",
          "addressRegion": "Federal Capital Territory",
          "addressCountry": "NG",
          "addressCountryCode": "NG",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 9.0765,
          "longitude": 7.3986,
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday"],
            "opens": "09:00",
            "closes": "14:00",
          },
        ],
        "priceRange": "₦₦",
        "currenciesAccepted": "NGN",
        "paymentAccepted": "Bank Transfer, Cash",
        "areaServed": [
          { "@type": "Country", "name": "Nigeria" },
          { "@type": "City", "name": "Abuja" },
          { "@type": "City", "name": "Lagos" },
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Website Development",
                "description":
                  "Fast, modern websites built with Next.js and React that convert visitors into customers.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mobile App Development",
                "description":
                  "iOS and Android apps built with React Native and Flutter.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SaaS Development",
                "description":
                  "Multi-tenant SaaS platforms with billing, dashboards, and cloud infrastructure.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Real Estate Software",
                "description":
                  "Property portals, agent CRM, virtual tours, and lead generation for the Nigerian market.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Business Automation",
                "description":
                  "CRM automation, workflow automation, and API integrations for Nigerian businesses.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Digital Marketing",
                "description":
                  "SEO, PPC, social media strategy, and content marketing for Nigerian businesses.",
              },
            },
          ],
        },
        "sameAs": [
          "https://twitter.com/nexxradigital",
          "https://linkedin.com/company/nexxradigital",
          "https://instagram.com/nexxradigital",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://nexxradigital.com/#website",
        "url": "https://nexxradigital.com",
        "name": "Nexxra Digital",
        "description": "Web development company in Abuja, Nigeria",
        "publisher": { "@id": "https://nexxradigital.com/#business" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://nexxradigital.com/?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://nexxradigital.com/#webpage",
        "url": "https://nexxradigital.com",
        "name": "Web Development Company in Abuja, Nigeria | Nexxra Digital",
        "isPartOf": { "@id": "https://nexxradigital.com/#website" },
        "about": { "@id": "https://nexxradigital.com/#business" },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://nexxradigital.com/opengraph-image",
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://nexxradigital.com",
            },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
