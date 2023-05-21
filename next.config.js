/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  images: {
    unoptimized: true
  },
  // Other Next.js configuration options...
  productionBrowserSourceMaps: false,
  webpack(config, { isServer }) {
    if (!isServer) {
      // Minify client-side JavaScript files
      config.optimization.minimize = true;
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            compress: {
              ecma: 2015,
              warnings: false,
              comparisons: false,
              inline: 2,
            },
            mangle: {
              safari10: true,
            },
            output: {
              ecma: 2015,
              comments: false,
              ascii_only: true,
            },
          },
        }),
      ];
    }
    return config;
  },
};
