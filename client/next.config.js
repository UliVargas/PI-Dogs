/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   domains: ['https://cdn2.thedogapi.com']
  // }
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn2.thedogapi.com'
      }
    ]
  }
}

module.exports = nextConfig
