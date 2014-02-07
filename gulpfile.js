// npm install gulp gulp-ruby-sass gulp-minify-css gulp-rename --save-dev

var gulp = require('gulp')
,	sass = require('gulp-ruby-sass')
,	minifycss = require('gulp-minify-css')
,	rename = require('gulp-rename');

gulp.task('styles', function() {
	return gulp.src('stylesheets/*.scss')
		.pipe(sass({ style: 'expanded' }))
		.pipe(gulp.dest('css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('css'))
});

gulp.task('default', function() {
	gulp.run('styles');
	gulp.watch('stylesheets/**', function() {
		gulp.run('styles');
	});
});
