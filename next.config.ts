import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Remove output: 'export' for Netlify deployment
  // Netlify handles Next.js SSR automatically
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
