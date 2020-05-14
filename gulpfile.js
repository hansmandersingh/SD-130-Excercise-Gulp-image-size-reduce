const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const imageMin = require('gulp-imagemin');

function smallCss(cb) {
  gulp.src('src/css/*')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dest/css'))
  cb();
}

function imageSmall(cb) {
  gulp.src('src/img/*')
    .pipe(imageMin())
    .pipe(gulp.dest('dest/img'))
  cb();
}

exports.default = gulp.parallel(smallCss, imageSmall);