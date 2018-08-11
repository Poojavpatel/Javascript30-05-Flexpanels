var gulp = require('gulp');
var csso = require('gulp-csso');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify');

gulp.task('sayhello', function() {
    console.log('Hello');
});

// Gulp task to minify CSS files
gulp.task('minifycss', function () {
    return gulp.src('./style.css')
      // Minify the file
      .pipe(csso())
      // Output
      .pipe(gulp.dest('./build'));
  });

// Gulp task to minify JavaScript files
gulp.task('minifyjs', function() {
    return gulp.src('./script.js')
      // Minify the file
      .pipe(uglify())
      // Output
      .pipe(gulp.dest('./build'));
  });

// Gulp task to minify HTML files
gulp.task('minifyhtml', function() {
    return gulp.src(['./*.html'])
      .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true
      }))
      .pipe(gulp.dest('./build'));
  });

// Gulp task to minify all files
gulp.task('rockit', function () {
    runSequence(
      'minifyhtml',
      'minifycss',
      'minifyjs'
    );
  });