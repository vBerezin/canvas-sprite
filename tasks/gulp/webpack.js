module.exports = () => {
  $.gulp.task('webpack', (callback) => {
    $.webpack($.config.webpack, (error, stats) => {
      callback();
      if (stats.hasErrors()) {
        console.warn(stats.compilation.errors[0].message);
      } else {
        console.log(stats.toString());
      }
      if (error) {
        $.gp.notify.onError({
          title: 'webpack',
          message: error,
        });
      }
    });
  });
};
