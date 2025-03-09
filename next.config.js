/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: false, // Ensure Next.js uses Pages Router
  },
};

module.exports = nextConfig;
