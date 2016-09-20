'use strict';
var gulp = require('gulp');

var connect = require('gulp-connect');

gulp.task('clean', function() {
    console.log("Cleaning the temp files");
});


gulp.task('Erase', function() {
console.log("Erasing all the log files");
});


gulp.task('server', function() {
   connect.server({
		root:'app/',
		port:'9000'


    )};
});

