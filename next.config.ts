import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
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
    ];
  },
};

export default nextConfig;
