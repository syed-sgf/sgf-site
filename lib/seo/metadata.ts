import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";

const BASE_URL = siteConfig.url;

// ─────────────────────────────────────────────────────────────
// Base metadata applied to all pages via root layout
// ─────────────────────────────────────────────────────────────
export const baseMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: BASE_URL,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Commercial Financing`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/og-default.jpg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

// ─────────────────────────────────────────────────────────────
// Page-level metadata factory
// ─────────────────────────────────────────────────────────────
interface PageMetaArgs {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  noIndex = false,
}: PageMetaArgs): Metadata {
  const canonical = `${BASE_URL}${path}`;
  const resolvedOgTitle = ogTitle ?? title;
  const resolvedOgDesc = ogDescription ?? description;

  return {
    title,
    description,
    alternates: { canonical },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: resolvedOgTitle,
      description: resolvedOgDesc,
      url: canonical,
      siteName: siteConfig.name,
      type: "website",
      locale: siteConfig.locale,
      images: [
        {
          url: "/og-default.jpg",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${resolvedOgTitle}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedOgTitle,
      description: resolvedOgDesc,
    },
  };
}
