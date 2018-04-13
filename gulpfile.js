var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var simplVars = require('postcss-simple-vars');
var pcssNested = require('postcss-nested');
var pcssImport = require('postcss-import');
var mixins =require('postcss-mixins');
var calc = require('postcss-calc');



////--------> HTML TASK....

gulp.task('html', function() {
    gulp.src('./app/*.html')
        .pipe(gulp.dest('./app'))
});

// pcssImport,
// simpleVars,
// autoprefixer,
// pcssNested,
// mixins,
// calc

////--------> HTML TASK....

gulp.task('css', function() {
    var processors = [
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



gulp.task('stream', function () {
    // Endless stream mode
    return watch('./app/assets/styles/**/*.css', { ignoreInitial: false })
        .pipe(gulp.dest('./app/temp/styles'));
});


gulp.task('callback', function(){
    return watch('./app/assets/styles/**/*.css', function(){
        gulp.src('./app/assets/styles/**/*.css')
            .pipe(gulp.dest('./app/temp/styles'));
    });
});

gulp.task('watch', function(){



    //..HTML..WATCH
    watch('./app/index/index.html', function(){
        gulp.start('html');
    });


    //..CSS..WATCH
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('css');
    });






});
