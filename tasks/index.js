const path = require('path');

const gulp = [
  'clean',
  'server',
  'watch',
  'images',
  'html',
  'pug',
  'webpack',
];

const webpack = {
  styles: require('./webpack/styles'),
  babel: require('./webpack/babel'),
};

module.exports = {
  webpack,
  gulp: gulp.map(name => path.resolve(__dirname, `gulp/${name}`)),
};
