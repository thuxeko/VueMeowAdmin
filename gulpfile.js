var gulp = require('gulp');
const { series } = require('gulp');
var sass = require('gulp-sass');
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssnano = require('cssnano');
// directories
const PATHS = {
    sassFiles: 'src/sass/*.scss',
    cssDest: 'public/css'
};


function style() {
    return (
        gulp
            .src(PATHS.sassFiles)
			.pipe(sass())
			.on("error", sass.logError)
			.pipe(postcss([autoprefixer(), cssnano()]))
			.pipe(gulp.dest(PATHS.cssDest))
    );
}

function watch() {
    gulp.watch([PATHS.sassFiles], style);
}

exports.default  = series(watch);
