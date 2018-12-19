const gulp = require("gulp")
const pug = require("gulp-pug")
const sass = require("gulp-sass")
const postcss = require("gulp-postcss")
const autoprefixer 	= require("autoprefixer")
const perfectionist = require("perfectionist")
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")
const concat = require("gulp-concat")
const beautify = require("gulp-html-beautify")
// const babel = require('gulp-babel')
// const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')
const webpack = require('webpack-stream')
const gprint = require('gulp-print').default
// const gutil = require("gulp-util")
const del = require('del')
const vinylPaths = require('vinyl-paths')
const size = require('gulp-size')
const sourcemaps = require('gulp-sourcemaps')
const browserSync = require('browser-sync').create()

const src = "./src/";
const dist = "./dist/";

// Pug
gulp.task("pug", () => 
	gulp.src([`${src}pug/*.pug`, `!${src}pug/layout/*.pug`])
		.pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
		.pipe(pug({
			pretty: "\t"
		}))
		.pipe(gulp.dest(dist))
		.pipe(browserSync.stream())
);

// Generate Sass
gulp.task("sass", () => {
	var processors = [
		autoprefixer,
		perfectionist
	];
	return gulp.src([`${src}sass/*.sass`])
		.pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
		.pipe(sass())
		.pipe(postcss(processors))
		.pipe(gulp.dest(dist + "css"))
		.pipe(browserSync.stream())
});

// Generate Vendor CSS & JS Files
gulp.task('vendor', () => {
	// vendor css
	gulp.src(`${src}css/vendor/*.css`)
		.pipe(plumber())
		.pipe(concat('plugins.min.css'))
		.pipe(gulp.dest(dist + 'css'))
	// vendor js
	gulp.src(`${src}js/vendor/*.js`)
		.pipe(plumber())
		.pipe(concat('plugins.min.js'))
		.pipe(size())
		.pipe(gulp.dest(dist + 'js'))
		.pipe(browserSync.stream())
})

// Clean
gulp.task('cleanjs', () => 
	gulp.src(`${dist}js/app.js`)
		.pipe(gprint())
		.pipe(vinylPaths(del))
);

// Build JS Files
gulp.task('webpack', () =>
	gulp.src(`${src}js/app.js`)
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(dist + "js"))
		.pipe(browserSync.stream())
);

// HTML beutify
gulp.task("beautify", () =>
	gulp.src([`${dist}*.html`])
		.pipe(beautify({
			indent_char: '\t',
			indent_size: 1
		}))
		.pipe(gulp.dest(dist))
);

// Imagemin
gulp.task('compress', () =>
	gulp.src([`${src}img/**/**`])
		.pipe(imagemin())
		.pipe(gulp.dest(dist + 'img'))
);

gulp.task('watch', () => {
	browserSync.init({
		server: "./dist"
	});
	gulp.watch(`${src}pug/*.pug`, ['pug'])
	gulp.watch(`${src}sass/*.sass`, ['sass'])
	gulp.watch(`${src}js/*.js`, ['webpack'])
});

gulp.task('default', ['pug', 'sass', 'vendor', 'cleanjs', 'webpack', 'compress', 'watch']);
