const del = require('del');

const folders = [
  `${$.config.paths.templates.clean}`,
  `${$.config.paths.build}`,
];

module.exports = () => {
  $.gulp.task('clean', (cb) => {
    $.gulp.series('clean:images', 'clean:build')(cb);
  });
  $.gulp.task('clean:images', async () => {
    await $.gp.cache.clearAll();
    await del($.config.paths.images.clean, { force: true });
  });
  $.gulp.task('clean:build', () => del(folders, { force: true }));
};
