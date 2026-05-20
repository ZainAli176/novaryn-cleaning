import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://novaryncleaning.online";
  const currentDate = new Date(); // Automatically handles the 2026 date format

  const routes = [
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

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency:
      route === ""
        ? "weekly"
        : route === "/privacy-policy"
          ? "yearly"
          : "monthly",
    priority:
      route === ""
        ? 1.0
        : route === "/services"
          ? 0.9
          : route === "/privacy-policy"
            ? 0.3
            : 0.8,
  }));
}
