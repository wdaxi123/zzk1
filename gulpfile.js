var gulp = require('gulp');

var server = require('gulp-webserver');


var less = require('gulp-sass');

var mincss = require('gulp-clean-css');
var concat = require('gulp-concat');


var uglify = require('gulp-uglify');

gulp.task('css', function() {
    gulp.src('src/**/*.scss')
        .pipe(less())
        //.pipe(gulp.dest('dist'))
        .pipe(mincss())
        //.pipe(gulp.dest('dist'))
        .pipe(concat('all.css'))
        .pipe(gulp.dest('dist/css'))
})

gulp.task('js', function() {
    gulp.src('src/**/*.js')
        .pipe(uglify())
        //.pipe(gulp.dest('dist'))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'))
})






gulp.task('default', ['css', 'js'])
    // gulp.tassk('concat', function() {
    //     gulp.src('src')
    // })