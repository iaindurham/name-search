var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function () {
  gulp.src('app/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/styles/'))
});

gulp.task('copy-css', function () {
  return gulp.src(['app/styles/css/**/*.css'], {
    base: 'app/styles/css'
  }).pipe(gulp.dest('public/styles'));
});

gulp.task('copy-js', function () {
  return gulp.src(['app/scripts/**/*.js'], {
    base: 'app/scripts'
  }).pipe(gulp.dest('public/scripts'));
});

gulp.task('copy-templates', function () {
  return gulp.src(['app/templates/**/*.html'], {
    base: 'app/templates'
  }).pipe(gulp.dest('public/templates'));
});

gulp.task('copy-files', ['copy-css', 'copy-js', 'copy-templates'])

gulp.task('build', ['copy-files', 'styles']);

//Watch task
gulp.task('default', function () {
  gulp.watch('app/**/*', ['build']);
});
