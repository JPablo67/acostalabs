import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Transpile packages for compatibility
  transpilePackages: [
    "@splinetool/react-spline",
    "@splinetool/runtime",
    "three",
  ],
  
  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },

  // Compression
  compress: true,

  // Headers for performance + security
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
        ],
      },
      {
        source: "/fonts/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
