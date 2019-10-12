module.exports = () => {
  $.gulp.task('scripts', cb => $.gulp.series('webpack')(cb));
};
