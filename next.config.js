/** @type {import('next').NextConfig} */
const env = require("./config/env");

const nextConfig = {
  env: {
    API_BASE_URL: process.env.NEXT_PUBLIC_API_URL,
    DEBUG_MODE: process.env.DEBUG_MODE === "true",
    ENVIRONMENT: process.env.NODE_ENV,
    IS_PRODUCTION: process.env.NODE_ENV === "production",
  },
  experimental: {
    appDir: true,
  },
  // Configuration du proxy (si nécessaire)
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
