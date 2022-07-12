/** @type {import('next').NextConfig} */

const path = require('path');
const withPlugins = require('next-compose-plugins');
const withSvgr = require('@newhighsco/next-plugin-svgr');

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js', 'api.js', 'api.ts'],
  assetPrefix: isProd ? '/documents-gen/' : '',
  reactStrictMode: true,
  optimizeFonts: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  compiler: {
    styledComponents: true,
    removeConsole: {
      exclude:
        process.env.NODE_ENV === 'development' ? ['log', 'warn', 'error', 'debug'] : ['error'],
    },
  },
};

module.exports = withPlugins(
  [
    [
      withSvgr,
      {
        svgrOptions: {
          titleProp: true,
          icon: false,
          svgProps: {
            // height: 'auto',
            // width: 'auto',
          },
          removeViewBox: false,
        },
      },
    ],
    // your other plugins here
  ],

  nextConfig,
);
