/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    domains: ["localhost", "yourDomainName.com"],
  },
};

module.exports = nextConfig;
