const ARGV = require('yargs').argv;
const path = require('path');
const pugPluginAlias = require('pug-alias');
const { paths } = $.config;
const { dest, src } = paths.templates;
const { lang } = ARGV;

function pug(locale = '') {
  const localeDest = locale ? `${dest}/${locale}` : dest;
  return new Promise((resolve) => {
    $.gulp.src(src)
      .pipe($.gp.pug({
        basedir: path.resolve('/'),
        pretty: !ARGV.prod,
        plugins: [
          pugPluginAlias(paths.alias),
        ],
        data: {
          ARGV: {
            prod: ARGV.prod,
            lang: ARGV.lang,
          },
        },
      }))
      .on('error', $.gp.notify.onError(error => ({
        title: locale ? `pug:${locale}` : 'pug',
        message: error.message,
      })))
      .pipe($.gulp.dest(localeDest))
      .on('end', resolve);
  });
}

module.exports = () => {
  $.gulp.task('pug', async () => {
    await pug();
    if (lang) {
      await pug(lang);
    }
  });
};
