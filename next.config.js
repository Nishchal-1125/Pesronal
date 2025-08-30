/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // output: "export", // Temporarily commented for dev testing
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
}

module.exports = nextConfig
