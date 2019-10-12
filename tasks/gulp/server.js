module.exports = () => {
  $.gulp.task('server', () => {
    $.browserSync.init({
      open: true,
      server: {
        baseDir: $.config.paths.server,
      },
    });
  });
  $.gulp.task('server:refresh', async () => {
    await $.browserSync.stream({
      once: true,
    });
  });
  $.gulp.task('server:reload', async () => {
    await $.browserSync.reload();
  });
};
