global.$ = require('./config');
const tasks = require('./tasks').gulp;
tasks.forEach(task => require(task)());

$.gulp.task('build', (cb) => {
  $.gulp.series(
    'clean',
    'images',
    $.gulp.parallel('webpack', 'html'),
  )(cb);
});

$.gulp.task('default', (cb) => {
  $.gulp.series(
    'build',
    $.gulp.parallel('server', 'watch'),
  )(cb);
});
