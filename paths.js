const ARGV = require('yargs').argv;
const src = './src';
const web = './web';
const assets = `${web}/assets`;
const build = ARGV.prod ? `${assets}/build` : `${assets}/build-dev`;

module.exports = {
  src,
  web,
  build,
  server: web,
  alias: {
    '~blocks': `${src}/blocks`,
    '~styles': `${src}/styles`,
    '~scripts': `${src}/scripts`,
    '~components': `${src}/components`,
    '~images': `${src}/images`,
    '~templates': `${src}/templates`,
  },
  webpack: {
    entry: {
      index: `${src}/index`,
    },
    watch: `${src}/**/*.{js,css,scss,sass}`,
    dest: build,
  },
  templates: {
    src: `${src}/templates/pages/**/*.{jade,pug}`,
    dest: web,
    clean: `${web}/*.html`,
    watch: `${src}/**/*.{jade,pug}`,
  },
  images: {
    src: [
      `${src}/images/**/*.*`,
      `!${src}/images/**/*.tmp`,
    ],
    dest: `${assets}/images`,
    clean: `${assets}/images`,
    watch: [
      `${src}/images/**/*.*`,
      `!${src}/images/**/*.tmp`,
    ],
  },
};
