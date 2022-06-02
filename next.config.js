/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.ctfassets.net"],
  },
  experimental: {
    images: { layoutRaw: true },
    runtime: "nodejs",
    serverComponents: true,
  },
}

module.exports = nextConfig
