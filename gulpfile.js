
'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./scss/index/styles/index.scss') 
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets'));
});

gulp.task('sass2', function () {
  return gulp.src('./scss/live-well/styles/live-well.scss') 
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass', 'sass2']);
});