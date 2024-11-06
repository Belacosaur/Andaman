/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      os: false,
      path: false,
      crypto: false,
      "pino-pretty": false
    };
    return config;
  },
  transpilePackages: ['react-leaflet', '@react-leaflet/core', 'leaflet']
}

module.exports = nextConfig 