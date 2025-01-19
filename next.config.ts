import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint in production
    ignoreDuringBuilds: true,
  },
  // Other config options here
};

export default nextConfig;
