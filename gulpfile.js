var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var pcssComment = require('postcss-inline-comment');
var simplVars = require('postcss-simple-vars');
var pcssNested = require('postcss-nested');
var pcssImport = require('postcss-import');
var mixins =require('postcss-mixins');
var calc = require('postcss-calc');
var browserSync = require('browser-sync');



////--------> HTML TASK....

gulp.task('html', function() {
    gulp.src('./app/*.html')
        .pipe(gulp.dest('./app'))
});





////--------> CSS TASK....

gulp.task('css', function() {
    var processors = [
        pcssComment,
        pcssImport,
        autoprefixer,
        pcssNested,
        simplVars,
        mixins,
        calc
        ];
    return gulp.src('./app/assets/styles/**/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./app/temp/styles'));
});


////--------> WATCH TASK....



gulp.task('watch', function(){

    //..browserSync..WATCH
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });

    //..HTML..WATCH
    gulp.watch('./app/*.html', function(){
        gulp.start('html');
        browserSync.reload();
    });


    //..CSS..WATCH
    gulp.watch('./app/assets/styles/**/*.css', function(){
        gulp.start('css');
        // browserSync.reload();
    });


});


gulp.task('cssInject', ['css'], function() {
    return gulp.src('./app/temp/styles/main.css')
        .pipe(browserSync.stream());
});
