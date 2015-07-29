var gulp = require("gulp"),
    browserify = require("browserify"),
    babel = require("babel/register"),
    babelify = require("babelify"),
    mocha = require("gulp-mocha"),
    istanbul = require("gulp-istanbul"),
    isparta = require("isparta"),
    eslint = require("gulp-eslint"),
    yuidoc = require("gulp-yuidoc"),
    browserSync = require("browser-sync"),
    source = require("vinyl-source-stream"),
    packageConfig = require("./package.json");

var CONF = {
    paths: {
        main: "./app/main.jsx",
        js: ["./app/*.js", "./app/**/*.js", "./app/*.jsx", "./app/**/*.jsx"],
        html: "./app/*.html",
        tests: ["./test/*.js", "./test/**/*.js"]
    },
    build: {
        dir: "dist",
        docs: "docs",
        js: "main.js"
    }
}

gulp.task('default', ['serve']);
gulp.task('build', ['lint', 'test', 'js', 'html']);
gulp.task('test', ['test:unit']);

gulp.task('js', function () {
    browserify({
            entries: CONF.paths.main,
            extensions: ['.js', '.jsx'],
            transform: [babelify],
            debug: true
        })
        .bundle()
        .pipe(source(CONF.build.js))
        .pipe(gulp.dest(CONF.build.dir));
});

gulp.task('html', function () {
    gulp.src(CONF.paths.html)
        .pipe(gulp.dest(CONF.build.dir));
});

gulp.task('test:unit', function (cb) {
    gulp.src(CONF.paths.js)
        .pipe(istanbul({ instrumenter: isparta.Instrumenter }))
        .pipe(istanbul.hookRequire())
        .on('finish', function () {
            gulp.src(CONF.paths.tests, {read: false})
                .pipe(mocha({
                    reporter: 'spec', 
                    growl: 1,
                    compilers: {
                        js: babel
                    }
                }))
                .pipe(istanbul.writeReports())
                .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }))
                .on('end', cb);
        });
});

gulp.task('lint', function () {
    gulp.src(CONF.paths.js)
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('docs', function () {
    gulp.src(CONF.paths.js)
        .pipe(yuidoc({
            project: {
                name: "React Skeleton",
                version: packageConfig.version
            }
        }, {
            themedir: "node_modules/yuidoc-lucid-theme",
            helpers: ["node_modules/yuidoc-lucid-theme/helpers/helpers.js"]
        }))
        .pipe(gulp.dest(CONF.build.docs));
});

gulp.task('server:notify', function () {
    browserSync.reload();
});

gulp.task('serve', ['build'], function () {
    browserSync({
        server: {
            baseDir: CONF.build.dir
        }
    });

    gulp.watch([CONF.paths.main, CONF.paths.js], ['js']);
    // gulp.watch(CONF.paths.html, 'html');
    gulp.watch('./dist/*', ['server:notify']);
});