import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin", "/invoice/"],
      },
    ],
    sitemap: "https://www.nexxradigitals.com/sitemap.xml",
    host: "https://www.nexxradigitals.com",
  };
}
