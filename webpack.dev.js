const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.config');

// enabling React Transform and React Transform HMR:
common.module.loaders[0].query.plugins.push([
  'react-transform', {
    transforms: [{
      transform: 'react-transform-hmr',
      imports: ['react'],
      locals: ['module'],
    }],
  },
]);

module.exports = merge(common, {
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.resolve('dist'),
    compress: true,
    port: 9000,
    open: true,
    inline: true,
    hot: true,
    proxy: {
      '/api': {
        target: {
          host: 'localhost',
          protocol: 'http',
          port: '9001',
        },
      },
    },
  },
});

