/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['sun1-20.userapi.com'],
    },
    experimental: {
        scrollRestoration: true,
    },
};

module.exports = nextConfig;
