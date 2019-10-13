const path = require('path');
const ARGV = require('yargs').argv;
const webpack = require('webpack');
const merge = require('webpack-merge');
const tasks = require('./tasks').webpack;
const paths = require('./paths');

const { alias } = paths;
Object.keys(alias).forEach((key) => {
  alias[key] = path.resolve(alias[key]);
});

const config = {
  mode: ARGV.prod ? 'production' : 'development',
  entry: paths.webpack.entry,
  output: {
    path: path.resolve(paths.webpack.dest),
    publicPath: `/${path.relative(paths.server, paths.webpack.dest)}/`,
    filename: '[name].js',
  },
  resolve: {
    alias,
    extensions: ['.ts', '.js', '.scss', '.css'],
    modules: ['node_modules', paths.images.dest, paths.src],
  },
  devtool: ARGV.prod ? false : 'source-map',
  optimization: {
    minimize: ARGV.prod,
    namedChunks: true,
    splitChunks: {
      cacheGroups: {
        common: {
          name: 'common',
          chunks: 'initial',
          minChunks: 2,
        },
      },
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      DEV_ENV: !ARGV.prod,
    }),
  ],
};

module.exports = (() => merge([
  config,
  tasks.babel,
  tasks.styles,
]))();
