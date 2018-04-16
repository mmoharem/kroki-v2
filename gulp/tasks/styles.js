var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    pcssImport = require('postcss-import'),
    simplVars = require('postcss-simple-vars'),
    pcssNested = require('postcss-nested'),
    mixins = require('postcss-mixins'),
    calc = require('postcss-calc'),
    hexrgba = require('postcss-hexrgba');
// var autoprefixer = require('autoprefixer');





////--------> CSS TASK....

gulp.task('styles', function() {
    var processors = [

        pcssImport,
        simplVars,
        mixins,

        calc,
        pcssNested,
        hexrgba
        // autoprefixer
    ];
    return gulp.src('app/assets/styles/main.css')
        .pipe(postcss(processors))
        .on('error', function(errorInfo) { // add error handlind
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('app/temp/styles'));
});