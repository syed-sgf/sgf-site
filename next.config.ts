import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  // ── Route drift fix: redirect /financing/[slug] → /financing-options/[slug]
  // Canonical route per architecture spec is /financing-options/[slug]
  async redirects() {
    return [
      {
        source: "/financing/:slug",
        destination: "/financing-options/:slug",
        permanent: true, // 301 — passes link equity
      },
      {
        source: "/financing",
        destination: "/financing-options",
        permanent: true,
      },
      // ── WP → Next.js application page redirects ──────────────
      {
        source: "/apply/app/fix-and-flip",
        destination: "/apply/fix-and-flip",
        permanent: true,
      },
      {
        source: "/apply/app/loan-application",
        destination: "/apply/loan-application",
        permanent: true,
      },
      {
        source: "/apply/app/equipment-finance",
        destination: "/apply/equipment-finance",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
