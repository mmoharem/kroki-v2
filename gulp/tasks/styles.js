var gulp = require('gulp');
var postcss = require('gulp-postcss');

var pcssImport = require('postcss-import');
var simplVars = require('postcss-simple-vars');
var pcssNested = require('postcss-nested');
var mixins = require('postcss-mixins');
var calc = require('postcss-calc');
// var autoprefixer = require('autoprefixer');





////--------> CSS TASK....

gulp.task('css', function() {
    var processors = [

        pcssImport,
        mixins,
        simplVars,
        calc,
        pcssNested
        // autoprefixer
    ];
    return gulp.src('./app/assets/styles/**/*.css')
        .pipe(postcss(processors))
        .on('error', function(errorInfo) { // add error handlind
            console.log(errorInfo)
            this.emit('end')
        })
        .pipe(gulp.dest('./app/temp/styles'));
});