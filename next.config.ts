import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    useCache: true,
    dynamicIO: true,

  },
  allowedDevOrigins: ["http://play.localhost"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
    ],
  }
};

export default nextConfig;

