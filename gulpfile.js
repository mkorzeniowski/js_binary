var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
//var $ = require("jquery");
//require('bootstrap');

gulp.task('hello', function(){
console.log('siemanko');
})

gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
})

gulp.task('css-ready', function(){
  return gulp.src('app/css/**/*.css')
  .pipe(gulp.dest('app/css/main.css'))
})

gulp.task('watch', ['browserSync'], function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/*.js', browserSync.reload);
})

gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('useref', function(){
  gulp.src('app/js/*.js').pipe(gulp.dest('dist/js'))
  gulp.src('app/img/**').pipe(gulp.dest('dist/img'))
  return gulp.src('app/*html')
  .pipe(useref())
  .pipe(gulp.dest('dist'))

})
