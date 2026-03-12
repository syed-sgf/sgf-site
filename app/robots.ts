import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.VERCEL_ENV === "production" ||
    process.env.NODE_ENV === "production" && !process.env.VERCEL_ENV;

  const productionRobots: MetadataRoute.Robots = {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Controlled pages — never indexed
        disallow: [
          "/apply/",
          "/api/",
          "/_next/",
        ],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };

  // Preview/staging deployments — block all crawlers
  const stagingRobots: MetadataRoute.Robots = {
    rules: [
      {
        userAgent: "*",
        disallow: "/",
      },
    ],
  };

  return isProduction ? productionRobots : stagingRobots;
}
