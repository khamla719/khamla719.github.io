import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Disable Turbopack to avoid native module issues
  experimental: {
    turbo: false,
  },
};

export default nextConfig;
