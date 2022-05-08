const {
  src,
  dest,
  watch,
  series,
  parallel
} = require("gulp");
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const gulpif = require('gulp-if');
const webpack = require('webpack-stream');
const fileinclude = require('gulp-file-include');
const pug = require('gulp-pug');
const browserSync = require('browser-sync');
const isProd = process.env.NODE_ENV === 'production';

const path = {
  html: {
    src: './src/',
    dest: './dist/'
  },
  scripts: {
    src: './src/js/',
    dest: './dist/js/'
  },
  styles: {
    src: './src/scss/',
    dest: './dist/css/'
  },
  images: {
    src: './src/assets/images/',
    dest: './dist/assets/images/'
  },
  cachebust: {
    src: ['./dist/'],
    dest: './dist/',
  },
};

function copyHtml() {
  return src(`${path.html.src}*.html`)
    .pipe(fileinclude())
    .pipe(
      dest(path.html.dest)
    );
};

function bundlePug() {
  return src(`${path.html.src}*.pug`)
    .pipe(pug())
    .pipe(dest(path.html.dest))
}

function optimizeImages() {
  return src(`${path.images.src}**/*.*`)
    .pipe(dest(path.images.dest));
}

function compileStyles() {
  return src(`${path.styles.src}main.scss`)
    .pipe(gulpif(!isProd, sourcemaps.init()))
    .pipe(sass({
      includePaths: ['node_modules'],
      outputStyle: 'compressed',
    }).on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulpif(!isProd, sourcemaps.write('.'), browserSync.stream()))
    .pipe(dest(path.styles.dest))
}

function compileScripts() {
  return src(`${path.scripts.src}main.js`)
    .pipe(gulpif(!isProd, sourcemaps.init({
      loadMaps: true
    })))
    .pipe(webpack({
      mode: isProd ? 'production' : 'development',
      devtool: isProd ? false : 'source-map',
      output: {
        filename: 'main.min.js',
      }
    }))
    .pipe(gulpif(!isProd, sourcemaps.write('.'), browserSync.stream()))
    .pipe(dest(path.scripts.dest));
}

function cacheBust() {
  return src(`${path.cachebust.src}*.html`)
    .pipe(replace(/cache_bust=\d+/g, 'cache_bust=' + new Date().getTime()))
    .pipe(dest(path.cachebust.dest));
}

function server() {
  return browserSync.init({
    server: {
      baseDir: path.html.dest
    },
    port: 3000
  });
}

function clear() {
  return del('./dist');
}

function watcher() {
  server();
  watch(`${path.html.src}**/*.pug`, series(bundlePug, cacheBust)).on('change', browserSync.reload);
  watch(`${path.images.src}**/*`, optimizeImages).on('change', browserSync.reload);
  watch(`${path.styles.src}**/*.scss`, parallel(compileStyles, cacheBust)).on('change', browserSync.reload);
  watch(`${path.scripts.src}**/*.js`, parallel(compileScripts, cacheBust)).on('change', browserSync.reload);
}

exports.dev = series(
  clear,
  parallel(bundlePug, optimizeImages, compileStyles, compileScripts),
  cacheBust,
  watcher
);

exports.build = series(
  clear,
  parallel(bundlePug, optimizeImages, compileStyles, compileScripts),
  cacheBust
);