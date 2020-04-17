
const gulp = require('gulp');
const browserSync = require("browser-sync").create();
const sass = require('gulp-sass');
const pug =  require('gulp-pug');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');

gulp.task('sass', function () {
    return gulp.src('./dev/sass/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist/styles'))
        .pipe(browserSync.stream())
});

gulp.task('pug', function(){
    return gulp.src('./dev/pug/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./dist/'));
})


exports.images = () => (
    gulp.src('./dev/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);
// Tarea babel
exports.babel = () => (
    gulp.src('./dev/script/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(gulp.dest('dist/script'))

);

//Tareas por defecto
gulp.task('default',function(){
    gulp.watch('dev/**/*.pug', gulp.series('pug'))
    gulp.watch('dev/sass/**/*.scss', gulp.series('sass'))
    gulp.watch('dist/*.html').on('change', browserSync.reload)
    gulp.watch('./dev/script/*.js').on('change', browserSync.reload)
    browserSync.init({
    server: {
    baseDir: "./dist/"
    }
});
});