module.exports = () => {
  $.gulp.task('html', cb => $.gulp.series('pug')(cb));
};
