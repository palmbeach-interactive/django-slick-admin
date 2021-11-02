'use strict';

let config = require('./gulp-settings.json');
let gulp = require('gulp');
let gutil = require('gulp-util');
let $ = require('gulp-load-plugins')();

let browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));


let fs = require('fs');

//only needed to genereate font mappings for md-icons (currently manually)
//var prefix = require('gulp-autoprefixer');
//var cssCodepoints = require('css-codepoints');
//var vfs = require('vinyl-fs');
//var converter = require('sass-convert');

const PROJECT_ROOT = __dirname;

const PROJECT_PATH = {
    'sass': PROJECT_ROOT + '/django-slick-admin-styles/sass',
    //'sass': PROJECT_ROOT + '/node_modules/django-slick-admin-styles/sass',
    'css': PROJECT_ROOT + '/django_slick_admin/static/django_slick_admin/css'
};

const PROJECT_SASS_SRC = [
    PROJECT_PATH.sass + '/django-slick-admin.sass',
    PROJECT_PATH.sass + '/cms-styles.sass'
];

const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4'
];

//only needed to genereate font mappings for md-icons (currently manually)
/*
var cssCodepoints = require('css-codepoints');
var codepoints = JSON.parse(fs.readFileSync('./django_slick_admin/tools/codepoints.json'));

var css = cssCodepoints({
    fontFamily: 'MaterialIcons-Regular',
    prefix: '',

    formats: {
        'woff2': '../fonts/MaterialIcons-Regular.woff2',
        'woff': '../fonts/MaterialIcons-Regular.woff',
        'truetype': '../fonts/MaterialIcons-Regular.ttf',
        'svg': '../fonts/MaterialIcons-Regular.svg',
        'embedded-opentype': '../fonts/MaterialIcons-Regular.eot'
    },

    icons: codepoints.icons
});

fs.writeFileSync('./django_slick_admin/tools/codepoints_generated.css', css);
*/

gulp.task('styles', function () {
    return gulp.src(PROJECT_SASS_SRC)
        .pipe($.sourcemaps.init())
        .pipe($.sass({
            precision: 10
        }))
        .pipe($.autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(PROJECT_PATH.css))
        .pipe(browserSync.stream({match: '**/*.css'}))
        .pipe($.size({title: 'stylesheet size:'}));
});

gulp.task('dist', function () {
    return gulp.src(PROJECT_SASS_SRC)
        .pipe($.sass({
            outputStyle: 'compressed',
            sourceComments: false,
            precision: 10
        }))
        .pipe($.autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
        .pipe($.stripCssComments({}))
        .pipe(gulp.dest(PROJECT_PATH.css))
        .pipe($.size({title: 'stylesheet size:'}));
});


gulp.task('proxy', gulp.series('styles'), function () {
    browserSync.init({
        notify: false,
        port: config.local_port,
        host: config.hostname,
        //open: "external",
        open: false,
        proxy: {
            target: "127.0.0.1:" + config.proxy_port
        },
        ui: {
            port: config.local_port + 1,
            weinre: {
                port: config.local_port + 2
            }
        }
    });

    gulp.watch(PROJECT_PATH.sass + '/**/*.sass', ['styles']);
});

// gulp.task('default', ['proxy']);
// gulp.task('watch', ['proxy']);

//gulp.task('default', gulp.series('proxy', 'watch'));
//gulp.task('watch', gulp.series('proxy', 'watch'));
gulp.task('watch',  gulp.series('proxy'));
