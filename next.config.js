/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.ctfassets.net"],
  },
  experimental: { images: { layoutRaw: true } },
}

module.exports = nextConfig
