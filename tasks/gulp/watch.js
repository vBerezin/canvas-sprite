module.exports = () => {
  $.gulp.task('watch', () => {
    $.gulp.watch($.config.paths.templates.watch, $.gulp.series('html', 'server:reload'));
    $.gulp.watch($.config.paths.webpack.watch, $.gulp.series('webpack', 'server:reload'));
    $.gulp.watch($.config.paths.images.watch, $.gulp.series('images', 'server:reload'));
  });
};
