/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { 
      ...config.resolve.fallback,
      "pino-pretty": false,
      fs: false
    };
    return config;
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ['react-leaflet', '@react-leaflet/core', 'leaflet']
}

module.exports = nextConfig 