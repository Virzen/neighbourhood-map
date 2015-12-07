// Gulp
var gulp = require('gulp');

// Plugins
var git = require('gulp-git');

// Variables
var deployPath = 'D:/Zbiory/Git Workspace/virzen.github.io/neighbourhood-map';


gulp.task('deploy', function () {
    gulp.src('dev/*').
        pipe(gulp.dest(deployPath));
});
