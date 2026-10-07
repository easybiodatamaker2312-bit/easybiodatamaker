/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ['image/avif', 'image/webp'] },
  compress: true,
  async redirects() {
    return [
      { source: '/online-biodata-maker', destination: '/', permanent: true },
      { source: '/shaadi-biodata-maker', destination: '/', permanent: true },
      { source: '/free-biodata-format-download', destination: '/templates', permanent: true },
      { source: '/how-to-make-biodata-for-marriage', destination: '/blog/how-to-write-biodata-for-marriage', permanent: true },
    ];
  },
};
module.exports = nextConfig;
