/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async rewrites() {
    return [
      {
        source: '/api/images/:id',
        destination: `${process.env.S3_URL}/images/:id${".jpg"}`,
      },
    ]
  },
}

module.exports = nextConfig
