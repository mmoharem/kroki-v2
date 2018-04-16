require('./gulp/tasks/styles');
require('./gulp/tasks/watch');
require('./gulp/tasks/scripts');



var gulp = require('gulp'),
    watch = require('gulp-watch');


// var pcssComment = require('postcss-inline-comment');
// var pcssScss = require('postcss-scss');
// var pcssStripComment = require('postcss-strip-inline-comments');




//new task.   //------->..For html
gulp.task('html', function() {

    gulp.src('./app/*.html')
        .pipe(gulp.dest('./app'))
        // .pipe(connect.reload());

});

gulp.task('default', ['watch']);


////--------> HTML TASK....

// gulp.task('html', function() {

//     gulp.src('./app/*.html')
//         .pipe(gulp.dest('./app'))
// });