var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

  gulp.task('nodemon', function (cb) {
  	return nodemon({
  		script: './app/base/server/server.js'
  	});
  });

gulp.task('default', ['nodemon']);
