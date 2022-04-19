/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'spbkater.ru'
    ],
},
}

module.exports = nextConfig
