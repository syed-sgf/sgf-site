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
        disallow: [
          "/apply/",
          "/api/",
          "/_next/",
          "/thank-you",
          "/author/",
          "/category/",
          "/?s=",
          "/tips-to-help-improve-your-credit-score-for-sba-loan-approval-2",
        ],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };

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
