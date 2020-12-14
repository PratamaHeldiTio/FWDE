const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
      favicon: 'src/public/images/icon.png',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
          globOptions: {
            ignore: ['**/hero/**'],
          },
        },
      ],
    }),
    new WebpackPwaManifest({
      name: 'EatGo Restaurant',
      short_name: 'EatGo',
      description: 'EatGo Restaurant tempat informasi restaurant modern nusantara',
      start_url: './src/template/index.html',
      background_color: '#1e5f74',
      display: 'standalone',
      theme_color: '#1e5f74',
      icons: [
        {
          src: './src/public/images/icon.png',
          size: [72, 96, 128, 144, 192, 256, 284, 512],
          purpose: 'any maskable',
        },
      ],
    }),
    new InjectManifest({
      swSrc: './src/scripts/sw.js',
    }),
    new BundleAnalyzerPlugin(),
  ],
};
