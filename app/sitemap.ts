// app/sitemap.ts
import type { MetadataRoute } from "next";
import { blogPosts } from "./blog/[slug]/page"; // Pulling dynamic slugs automatically

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://novaryncleaning.online";
  const currentDate = new Date();

  // 1. Core Pages & Service Routes
  const staticRoutes = [
    "",
    "/services",
    "/services/standard-home-cleaning",
    "/services/deep-cleaning",
    "/services/move-in-move-out-cleaning",
    "/services/office-commercial-cleaning",
    "/services/post-construction-cleaning",
    "/services/recurring-cleaning",
    "/privacy-policy",
  ];

  // 2. New Location Targeted SEO Pages found in your app directory
  const locationRoutes = [
    "/cleaning-service-buckhead",
    "/cleaning-service-decatur-ga",
    "/cleaning-service-midtown-atlanta",
    "/cleaning-service-sandy-springs",
  ];

  // 3. Main Blog Feed Index Root
  const blogIndexRoute = ["/blog"];

  // 4. Extract all dynamic blog post slugs currently active in your database object
  const dynamicBlogRoutes = Object.keys(blogPosts).map(
    (slug) => `/blog/${slug}`,
  );

  // Combine everything into a unified array matrix
  const allRoutes = [
    ...staticRoutes,
    ...locationRoutes,
    ...blogIndexRoute,
    ...dynamicBlogRoutes,
  ];

  return allRoutes.map((route) => {
    // Default Fallbacks
    let changeFrequency: "weekly" | "monthly" | "yearly" = "monthly";
    let priority = 0.8;

    // Homepage Rule
    if (route === "") {
      changeFrequency = "weekly";
      priority = 1.0;
    }
    // Services Directory and Location Pages Rule (High commercial intent)
    else if (route === "/services" || locationRoutes.includes(route)) {
      changeFrequency = "weekly";
      priority = 0.9;
    }
    // Blog Index Feed Rule
    else if (route === "/blog") {
      changeFrequency = "weekly";
      priority = 0.8;
    }
    // Individual Informational Blog Posts Rule
    else if (route.startsWith("/blog/")) {
      changeFrequency = "monthly";
      priority = 0.7;
    }
    // Privacy Policy Rule
    else if (route === "/privacy-policy") {
      changeFrequency = "yearly";
      priority = 0.3;
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency,
      priority,
    };
  });
}
