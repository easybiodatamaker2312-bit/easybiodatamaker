/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ['image/avif', 'image/webp'] },
  compress: true,
  async redirects() {
    return [

      { source: '/gujarati-biodata-format', destination: '/gujarati-marriage-biodata', permanent: true },
      { source: '/marathi-biodata-format', destination: '/marathi-marriage-biodata', permanent: true },
      { source: '/hindi-biodata-format', destination: '/hindi-marriage-biodata', permanent: true },
      { source: '/punjabi-biodata-format', destination: '/punjabi-marriage-biodata', permanent: true },
      { source: '/tamil-biodata-format', destination: '/tamil-marriage-biodata', permanent: true },
      { source: '/telugu-biodata-format', destination: '/telugu-marriage-biodata', permanent: true },
      { source: '/bengali-biodata-format', destination: '/bengali-marriage-biodata', permanent: true },
      { source: '/kannada-biodata-format', destination: '/kannada-marriage-biodata', permanent: true },
      { source: '/rajasthani-biodata-format', destination: '/rajasthani-marriage-biodata', permanent: true },
      { source: '/wedding-biodata-format', destination: '/marriage-biodata-format', permanent: true },
      { source: '/biodata-for-marriage', destination: '/marriage-biodata-format', permanent: true },
      { source: '/matrimonial-biodata-format', destination: '/marriage-biodata-format', permanent: true },
      { source: '/free-marriage-biodata-generator', destination: '/marriage-biodata-maker-online', permanent: true },
      { source: '/free-biodata-maker-without-login', destination: '/marriage-biodata-maker-online', permanent: true },
      { source: '/biodata-maker-word-document-export', destination: '/marriage-biodata-format-word', permanent: true },
      { source: '/biodata-maker-pdf-one-page', destination: '/marriage-biodata-format-pdf', permanent: true },
      { source: '/online-biodata-maker', destination: '/', permanent: true },
      { source: '/shaadi-biodata-maker', destination: '/', permanent: true },
      { source: '/free-biodata-format-download', destination: '/templates', permanent: true },
      { source: '/how-to-make-biodata-for-marriage', destination: '/blog/how-to-write-biodata-for-marriage', permanent: true },
    ];
  },
};
module.exports = nextConfig;
