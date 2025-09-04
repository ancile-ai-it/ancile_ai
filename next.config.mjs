import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // No need for experimental.appDir in Next.js 15 - it's stable

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(process.cwd(), 'src'),
    };
    return config;
  },
}

export default nextConfig
