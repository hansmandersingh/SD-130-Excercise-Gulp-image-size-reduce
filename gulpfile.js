const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const imageMin = require('gulp-imagemin');

function smallCss(cb) {
  gulp.src('src/css/*')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'))
  cb();
}

function imageSmall(cb) {
  gulp.src('src/img/*')
    .pipe(imageMin())
    .pipe(gulp.dest('dist/img'))
  cb();
}

exports.default = gulp.parallel(smallCss, imageSmall);