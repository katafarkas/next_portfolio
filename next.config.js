/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/next_portfolio",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
