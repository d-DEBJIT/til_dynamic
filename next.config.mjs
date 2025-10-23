/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/til',              // ✅ single /til
  assetPrefix: '',           // ✅ if you're serving static files under /til
  env: {
    NEXT_PUBLIC_BASE_PATH: '/til',
  },
  experimental: {
    serverActions: {},
  },
};

export default nextConfig;
