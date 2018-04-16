var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();





////--------> WATCH TASK....

gulp.task('watch', function() {


    //..browserSync..WATCH
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });

    //..HTML..WATCH
    gulp.watch('./app/index.html', function() {
        gulp.start('html');
        browserSync.reload();
    });


    //..CSS..WATCH
    gulp.watch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssInject');
        // browserSync.reload();
    });


    //..webpack..WATCH
    gulp.watch('./app/assets/javascript/**/*.js', function() {
        gulp.start('scriptsRefresh');
    });


});


gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/main.css')
        .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
    browserSync.reload();
});