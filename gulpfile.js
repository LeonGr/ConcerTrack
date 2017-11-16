const gulp = require('gulp');
// Requires the gulp-sass plugin
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

gulp.task('Compile SCSS', function(){
    return gulp.src('src/web/work/scss/*.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(gulp.dest('src/web/css/'))
});

gulp.task('Compile JavaScript', function(){
    return gulp.src('src/web/work/js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        //.pipe(uglify())
        .pipe(gulp.dest('src/web/js/'));
});

gulp.task('watch', function(){
    gulp.watch('src/web/work/scss/*.scss', ['Compile SCSS']);//,'autoprefix']);
});

gulp.task('babel', function(){
    gulp.watch('src/web/work/js/*.js', ['Compile JavaScript']);
});
