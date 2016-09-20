'use strict';

var gulp = require('gulp');

var connect = require('gulp-connect')

require('require-dir')('./gulp);

gulp.task('default', ['clean','Erase'],function() {
    gulp.start('server');
});
