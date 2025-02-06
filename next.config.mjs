/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProduction ? '/personal-web' : '', // 替换为您的仓库名称
  assetPrefix: isProduction ? '/personal-web/' : '',
  trailingSlash: false,
  output: 'export',
  distDir: 'out',
};

export default nextConfig;