/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.infrastructureLogging = {
      level: "error",
    };

    return config;
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
};

module.exports = nextConfig;
