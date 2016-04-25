'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var runSequence = require('run-sequence');

var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

gulp.task("webpack", function (callback) {
  var myConfig = Object.create(webpackConfig);
  // run webpack
  webpack(
    // configuration
    myConfig
    , function (err, stats) {
      if (err) throw new gutil.PluginError("webpack", err);
      gutil.log("[webpack]", stats.toString({
          //     // output options
      }));
      callback();
    });
});

// 拷贝相关资源
gulp.task('copy', function () {
  return gulp.src([
    // 'app/*',
    '!dist/*',
    '!dist/*.html',
    '!dist/js/*',
    '!dist/css/*',
    'node_modules/bootstrap/dist/css/bootstrap.min.css'
  ], {
    dot: true
  })
	  .pipe(gulp.dest(function (file) {
	    if (file.path.indexOf('bootstrap') > -1) {
	      return 'dist/css';
	    }
	    return 'dist';
	  }))
	  .pipe($.size({title: 'copy'}));
});

// 图片优化
gulp.task('images', function () {
  return gulp.src('static/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'))
    .pipe($.size({title: 'images'}));
});

gulp.task('minifycss', function() {
  return gulp.src('src/sass/*.scss')      //压缩的文件
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.autoprefixer())
    .pipe(gulp.dest('dist/css'))  //输出文件夹
    .pipe($.cleanCss())   //执行压缩
    .pipe(gulp.dest('dist/css'))  //输出文件夹
    .pipe($.rename({suffix: '.min'}))
    .pipe($.size({title: 'css'}));
});

gulp.task('clean', function (cb) {
  del(['dist/*'], {dot: true}, cb);
});

// 监视源文件变化自动cd编译
gulp.task('watch', function () {
  // gulp.watch('app/**/*.html', ['html']);
  gulp.watch('src/sass/**/*.scss', ['minifycss']);
  // 使用 watchify，不再需要使用 gulp 监视 JS 变化
  // gulp.watch('app/js/**/*', ['jshint']);
  // gulp.watch('static/js/**/*.js', ['webpack']);
});

gulp.task('test', function () {
  return gulp
  .src('test/runner.html')
  .pipe($.mochaPhantomjs());
});

// 默认任务
gulp.task('default', function (cb) {
  runSequence('clean', ['copy', 'images', 'minifycss', 'webpack'], 'watch', cb);
});
