const { buildStyles } = require('./styles');
const bs = require('browser-sync').create();

bs.watch('*/**/*.html').on('change', bs.reload);

bs.watch('*/**/*.styl', function (event, file) {
    if (event === 'change') {
      buildStyles();
      bs.reload();
    }
});

bs.init({
  server: true
});
