
let gulp = require('gulp');
var browserSync = require("browser-sync").create();
let sass = require('gulp-sass');
let pug =  require('gulp-pug');
let autoprefixer = require('gulp-autoprefixer');
let imagemin = require('gulp-imagemin');

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



//Tareas por defecto
gulp.task('default',function(){
    gulp.watch('dev/**/*.pug', gulp.series('pug'))
    gulp.watch('dev/sass/**/*.scss', gulp.series('sass'))
    gulp.watch('dist/*.html').on('change', browserSync.reload)
    gulp.watch('./dev/**/*.js').on('change', browserSync.reload)
    browserSync.init({
    server: {
    baseDir: "./dist/"
    }
});
});