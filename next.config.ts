import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Explicitly set the project root to silence the warning
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
