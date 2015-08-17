var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var nodemon = require('gulp-nodemon');
var minify = require('gulp-minify-html');


gulp.task('nodemon', function (cb) {
	return nodemon({
  		script: './app/base/server/server.js'
	});
});

gulp.task('js', function(){
	return gulp.src('./app/**/client/**/*.js')
		.pipe(concat('main.js'))
		.pipe(gulp.dest('./public/js'))
		.pipe(rename('main.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./public/js'));
});

gulp.task('html', function(){
	return gulp.src('./app/**/client/views/*.html')
			.pipe(minify())
	 		.pipe(rename({dirname: ''}))
			.pipe(gulp.dest('./public/html'));
});

gulp.task('watch', function(){
	gulp.watch('./app/**/*', ['js', 'html']);
})

gulp.task('default', ['js', 'html', 'nodemon', 'watch']);
