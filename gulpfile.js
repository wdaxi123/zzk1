var gulp = require('gulp');

var server = require('gulp-webserver');


var less = require('gulp-sass');

var mincss = require('gulp-clean-css');
var concat = require('gulp-concat');


var server = require('gulp-webserver');


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
gulp.task('html', function() {
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'))
})





gulp.task('server', function() {
    gulp.src('dist')
        .pipe(server({
            port: 8060,
            open: true,
            middleware: function(req, res, next) {
                var pathname = require('url').parse(req.url, true).pathname;
                pathname = pathname === '/' ? 'index.html' : pathname;
                if (req.url === '/favicon.ico') {
                    return;
                };
                res.end(require('fs').readFileSync(require('path').join(__dirname, "dist", pathname)))
                next();
                return;
            }
        }))
})
gulp.task('default', ['server', 'css', 'js', 'html'])
    // gulp.tassk('concat', function() {
    //     gulp.src('src')
    // })