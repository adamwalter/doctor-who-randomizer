'use strict';

var gulp = require('gulp');

var environments = require('gulp-environments');
var development = environments.development;
var production = environments.production;

var browserSync = require('browser-sync').create();

var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var pxtorem = require('postcss-pxtorem');
var mqpacker = require('css-mqpacker');
var uniqueSelectors = require('postcss-unique-selectors');

var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var uglify = require('gulp-uglify');

gulp.task('browsersync', function() {
    browserSync.init({
        proxy: 'doctorwhorandomizer.dev',
		port: 1337
    });
});

gulp.task('sass', function() {
	var sassOutputStyle = production() ? 'compressed' : 'expanded';

	return gulp.src('assets/sass/**/*.scss')
		.pipe(sass({
				outputStyle: sassOutputStyle
			}).on('error', sass.logError))
		.pipe(postcss([
	        autoprefixer({
			    expand: true,
			    flatten: true,
			    browsers: ['last 2 versions']
			}),
	        pxtorem({
			    propWhiteList: [
			        'font',
			        'font-size',
			        'line-height',
			        'letter-spacing',
			        'margin',
			        'margin-top',
			        'margin-right',
			        'margin-bottom',
			        'margin-left',
			        'padding',
			        'padding-top',
			        'padding-right',
			        'padding-bottom',
			        'padding-left'
			    ]
			}),
	        mqpacker({
			    sort: true
			}),
	        uniqueSelectors()
	    ]))
		.pipe(gulp.dest('assets/css'))
		.pipe(browserSync.stream());
});

gulp.task('jshint', function() {
	return gulp.src('assets/scripts/source/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter(stylish))
	  .pipe(jshint.reporter('fail'));
});

gulp.task('js', ['jshint'], function () {
	return gulp.src('assets/scripts/source/*.js')
		.pipe(production(uglify()))
        .pipe(gulp.dest('assets/scripts/site'));
});

gulp.task('js-watch', ['js'], function(done) {
	browserSync.reload();
	done();
});

gulp.task('reload-watch', function(done) {
	browserSync.reload();
	done();
});

gulp.task('default', ['browsersync'], function() {
	gulp.watch('assets/sass/**/*.scss', ['sass']);
	gulp.watch('assets/scripts/source/*.js', ['js-watch']);
	gulp.watch('./*.html', ['reload-watch']);
});

gulp.task('set-prod', production.task);

gulp.task('deploy', ['set-prod', 'sass', 'js']);
