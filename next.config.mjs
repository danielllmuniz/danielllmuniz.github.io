/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
