const ARGV = require('yargs').argv;

module.exports = () => {
  $.gulp.task('styles', () => $.gulp.src($.config.paths.styles.src)
    .pipe($.gp.styleAlias($.config.paths.alias))
    .pipe($.gp.sass({
      includePaths: $.config.paths.styles.includePaths,
    }))
    .on('error', $.gp.notify.onError({
      title: 'styles',
    }))
    .pipe($.gp.autoprefixer($.config.autoprefixer))
    .pipe($.gp.cssimport({
      matchPattern: '*.css',
      includePaths: $.config.paths.styles.includePaths,
    }))
    .on('error', $.gp.notify.onError({
      title: 'css @import',
    }))
    .pipe($.gp.if(ARGV.prod, $.gp.uglifycss()))
    .pipe($.gulp.dest($.config.paths.styles.dest)));
};
