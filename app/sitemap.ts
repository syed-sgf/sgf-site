import type { MetadataRoute } from "next";
import { siteConfig, financingPrograms, industrySlugList, calculatorSlugs } from "@/lib/config/site";
import { getAllPosts } from "@/lib/blog";

const BASE_URL = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // ── Static pages ──────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/financing-options`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/industries`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/tools`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // ── Financing program detail pages ────────────────────────
  const financingPages: MetadataRoute.Sitemap = financingPrograms.map((slug) => ({
    url: `${BASE_URL}/financing-options/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ── Industry detail pages ─────────────────────────────────
  const industryPages: MetadataRoute.Sitemap = industrySlugList.map((slug) => ({
    url: `${BASE_URL}/industries/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ── Calculator pages ──────────────────────────────────────
  const calculatorPages: MetadataRoute.Sitemap = calculatorSlugs.map((slug) => ({
    url: `${BASE_URL}/tools/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // ── Partner pages ─────────────────────────────────────────
  const partnerSlugs = ["ic-broker", "referral-partner", "cpa-accountant", "real-estate-agent"];
  const partnerPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/partners`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...partnerSlugs.map((slug) => ({
      url: `${BASE_URL}/partners/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  // ── Blog pages ────────────────────────────────────────────
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const blogPosts = getAllPosts();
    blogPages = [
      {
        url: `${BASE_URL}/blog`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      },
      ...blogPosts.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: post.date,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),
    ];
  } catch {
    blogPages = [];
  }

  return [
    ...staticPages,
    ...financingPages,
    ...industryPages,
    ...calculatorPages,
    ...partnerPages,
    ...blogPages,
  ];
}
