/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  i18n: {
    locales: ['en-GB', 'sv-SE'],
    defaultLocale: 'en-GB',
  },
}

module.exports = nextConfig
