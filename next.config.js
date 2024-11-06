/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { 
      ...config.resolve.fallback,
      "pino-pretty": false 
    };
    return config;
  },
  typescript: {
    ignoreBuildErrors: true, // Temporarily disable TS errors
  },
}

module.exports = nextConfig 