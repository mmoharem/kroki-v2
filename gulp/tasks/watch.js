var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');





////--------> WATCH TASK....



gulp.task('watch', function() {

    //..browserSync..WATCH
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });

    //..HTML..WATCH
    watch('./app/index.html', function() {
        // gulp.start('html');
        browserSync.reload();
    });


    //..CSS..WATCH
    gulp.watch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssInject');
        // browserSync.reload();
    });


});


gulp.task('cssInject', ['css'], function() {
    return gulp.src('./app/temp/styles/main.css')
        .pipe(browserSync.stream());
});