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
  webpack: (config, { isServer }) => {
    // Add alias for @ to resolve to src directory
    if (config.resolve.alias) {
      config.resolve.alias['@'] = require('path').resolve(process.cwd(), 'src');
    }
    return config;
  },
};

export default nextConfig;
