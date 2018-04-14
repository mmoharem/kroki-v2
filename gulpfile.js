var gulp = require('gulp');

var postcss = require('gulp-postcss');
// var pcssComment = require('postcss-inline-comment');
// var pcssScss = require('postcss-scss');
// var pcssStripComment = require('postcss-strip-inline-comments');


require('./gulp/tasks/styles');
require('./gulp/tasks/watch');
require('./gulp/tasks/scripts');




////--------> HTML TASK....

// gulp.task('html', function() {
//     gulp.src('./app/*.html')
//         .pipe(gulp.dest('./app'))
// });