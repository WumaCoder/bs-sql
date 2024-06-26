/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n,
  output: 'export',
  distDir: 'dist',
  assetPrefix: './',

  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  transpilePackages: ['@douyinfe/semi-ui', '@douyinfe/semi-icons', '@douyinfe/semi-illustrations'],
}

module.exports = nextConfig