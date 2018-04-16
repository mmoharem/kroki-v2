<<<<<<< HEAD
var gulp = require('gulp');
var postcss = require('gulp-postcss');

var pcssImport = require('postcss-import');
var simplVars = require('postcss-simple-vars');
var pcssNested = require('postcss-nested');
var mixins = require('postcss-mixins');
var calc = require('postcss-calc');
var hexrgba = require('postcss-hexrgba');
=======
var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    pcssImport = require('postcss-import'),
    simplVars = require('postcss-simple-vars'),
    pcssNested = require('postcss-nested'),
    mixins = require('postcss-mixins'),
    calc = require('postcss-calc'),
    hexrgba = require('postcss-hexrgba');
>>>>>>> a1e052c61dd5d0337eecf0f5093187fbbc4d7cdb
// var autoprefixer = require('autoprefixer');





////--------> CSS TASK....

gulp.task('styles', function() {
    var processors = [

        pcssImport,
        mixins,
        simplVars,
        calc,
        pcssNested,
        hexrgba
        // autoprefixer
    ];
    return gulp.src('./app/assets/styles/main.css')
        .pipe(postcss(processors))
        .on('error', function(errorInfo) { // add error handlind
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});