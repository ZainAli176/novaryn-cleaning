// Place this file at: app/robots.ts in your Next.js project
// It replaces the static robots.txt and auto-generates it for you.
// Add NEXT_PUBLIC_SITE_URL=https://novaryncleaning.online to your .env.local

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://novaryncleaning.online";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
