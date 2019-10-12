const paths = require('./paths');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

module.exports = {
  webpack,
  gulp: require('gulp'),
  browserSync: require('browser-sync').create(),
  merge: require('merge-stream'),
  buffer: require('vinyl-buffer'),
  imagemin: {
    mozjpeg: require('imagemin-mozjpeg'),
    pngquant: require('imagemin-pngquant'),
  },
  gp: require('gulp-load-plugins')({
    rename: {
      'gulp-style-aliases': 'styleAlias',
    },
  }),
  config: {
    paths,
    webpack: webpackConfig,
  },
};
