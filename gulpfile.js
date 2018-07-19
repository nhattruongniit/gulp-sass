var gulp = new require('gulp');
var sass = new require('gulp-sass');
var autoprefixer = new require('gulp-autoprefixer');
var cssmin = new require('gulp-cssmin');
var rename = new require('gulp-rename');

gulp.task('sass', function(){
    return gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 5 versions']
        }))
        .pipe(gulp.dest('./css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./css'))
});