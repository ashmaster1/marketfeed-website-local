/** @type {import('next').NextConfig} */
const { NEXT_PUBLIC_BLOG_URL } = process.env;
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/read',
        destination: `${NEXT_PUBLIC_BLOG_URL}/read`,
      },
      {
        source: '/read/:path*',
        destination: `${NEXT_PUBLIC_BLOG_URL}/read/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
