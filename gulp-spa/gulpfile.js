var gulp = require('gulp');
var rjs = require('gulp-requirejs');
var htmlreplace = require('gulp-html-replace');
connect = require('gulp-connect');

gulp.task('buildtpl', function () {
  gulp.src('index.html')
  .pipe(htmlreplace({
      js: ['./lib/requirejs/require_2.3.6.js', './main.js'],
    }, {
      resolvePaths: true,
    }))
    .pipe(gulp.dest('dist/'));
});
gulp.task('buildjs', function () {
  return rjs({
    appDir: './src',
    dir: './dist',
    baseUrl: './lib',
    optimize: 'uglify',
    removeCombined: true,
    // 允许使用插件
    optimizeAllPluginResources: true,
    paths: {
      text: 'requirejs/text_2.0.16',
      vue: 'vuejs/vue_2.6.10',
      // less: 'lib/requirejs/less_0.1.6',
      'vue-router': 'vuejs/vue-router_3.0.5',
      main: '../main',
      app: '../app',
    },
    modules: [
      {
        name: 'main',
        exclude: ['require-less/normalize'],
      },
    ],
    packages: [
      {
        name: 'less',
        location: 'require-less',
        main: 'less'
      }
    ],
  }).on('error', function (error) {
    console.log(error);
  }).pipe(gulp.dest('./dist/'));
});
gulp.task('serve', function() {
  connect.server({
    root: './dist',
    livereload: true,
  });
});
gulp.task('build', ['buildjs', 'buildtpl']);