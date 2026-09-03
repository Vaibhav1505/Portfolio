import type { MetadataRoute } from "next";

const baseUrl = "https://vaibhavsingh.pro";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/Experience",
    "/Experience/VKVTech",
    "/Projects",
    "/Projects/Community",
    "/Projects/Flings",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
