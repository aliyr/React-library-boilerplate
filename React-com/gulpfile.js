const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
 
gulp.task('default', () =>
    gulp.src('src/*.pl.js')
        .pipe(babel({
            presets: [
                "es2015",
                "react"
            ]
        }))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('lib'))
);