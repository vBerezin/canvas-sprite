module.exports = () => {
  $.gulp.task('images', () => $.gulp.src($.config.paths.images.src)
    .pipe($.gp.cache(
      $.gp.imagemin([
        $.gp.imagemin.gifsicle({ interlaced: true }),
        $.gp.imagemin.jpegtran({ progressive: true }),
        $.gp.imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: true }],
        }),
        $.imagemin.pngquant({
          speed: 1,
          quality: 90,
          strip: true,
          floyd: 1,
        }),
        $.imagemin.mozjpeg({ quality: 90 }),
      ], { verbose: true }),
    ))
    .pipe($.gulp.dest($.config.paths.images.dest)));
};
