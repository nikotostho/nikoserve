const legacyRedirects = require("./src/lib/legacy-redirects.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    return legacyRedirects.map(({ source, destination }) => ({
      source,
      destination,
      permanent: true,
    }));
  },
  async rewrites() {
    const nestApiUrl = process.env.NEST_API_URL?.replace(/\/$/, "");
    if (!nestApiUrl) return [];

    return [
      {
        source: "/api/:path*",
        destination: `${nestApiUrl}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
