import type { NextConfig } from 'next';
import path from 'path';

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
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './src'),
    };
    return config;
  },
};

export default nextConfig;
