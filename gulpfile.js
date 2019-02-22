/*
install 
1. skapa mappar 
2. kÃ¶r bower init. fyll i allt optional
3. installera foundation: bower install foundation --save -dev
4. npm init
5. npm install --save-dev gulp gulp-sass gulp-autoprefixer gulp-rename gulp-clean-css gulp-sourcemaps webpack-stream
6. skapa gulpfile.js nedan med länkar till bower foundation
*/


var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    minifycss = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    webpack = require('webpack-stream'),
    path = require('path');

/*
sÃ¤tter sÃ¶kvÃ¤gar till mapptrÃ¤det
*/
var srcPath = {
    'scss': './_dev/devsass',
    'publik': './public',
    'jsbundle': './_dev/jsbundle',
    'devjs': './_dev/devjs'
}


gulp.task('SassToCssSrc', function (done) {
    gulp.src(srcPath.scss + '/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(srcPath.publik + '/css/'));
    done();
});

gulp.task('SassToCssSrcPub', function (done) {
    gulp.src(srcPath.scss + '/**/*.scss')
        .pipe(sass({
            style: 'compressed',
            sourceComments: 'false'
        }).on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // pass the file through autoprefixer 
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleanCSS())
        .pipe(gulp.dest(srcPath.publik + '/css/'));
    done();
});

gulp.task('webpackjs', function (done) {
    return gulp.src(srcPath.devjs + '/app.js')
        .pipe(webpack(require('./config/webpack.config.js')))
        .pipe(gulp.dest(srcPath.publik + '/'));
    done();
});

gulp.task('jsconcatfiles', gulp.series('webpackjs', function (done) {
    return gulp.src(
        [            
            srcPath.jsbundle + '/handelbars/handlebars.js',
            srcPath.jsbundle + '/autocomplete/auto-complete.js',
            srcPath.jsbundle + '/aj_bb_boktipsadmin_KrypinbundleWebpack.1.0.js',
        ]
    )
        .pipe(sourcemaps.init())
        .pipe(concat('aj_bb_boktipsadmin_bundle.1.0.0.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(srcPath.publik + '/js/'));
    done();
}));

//Watch task
gulp.task('default', function (done) {
    gulp.watch('_dev/devsass/**/*.scss', gulp.series('SassToCssSrc'));
    gulp.watch('_dev/devjs/**/*.js', gulp.series('jsconcatfiles'));
    done();
});

gulp.task('publicera', function (done) {
    gulp.watch(srcPath.scss + '/**/*.scss', gulp.series('SassToCssSrcPub'));
    done();
});
