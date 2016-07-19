var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function () {
  gulp.src('app/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/styles/'))
});

gulp.task('copy-css', function () {
  return gulp.src(['app/styles/css/**/*'], {
    base: 'app/styles/css'
  }).pipe(gulp.dest('public/styles'));
});

gulp.task('build', ['copy-css', 'styles']);

//Watch task
gulp.task('default', function () {
  gulp.watch('app/styles/**/*.scss', ['styles']);
});
