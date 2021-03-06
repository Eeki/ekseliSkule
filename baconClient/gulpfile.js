// declarations, dependencies
// ----------------------------------------------------------------------------
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var babelify = require('babelify');

// External dependencies you do not want to rebundle while developing,
// but include in your application deployment
var dependencies = [
  'react',
  'react-dom'
];
// keep a count of the times a task refires
var scriptsCount = 0;

// Gulp tasks
// ----------------------------------------------------------------------------
gulp.task('scripts', function () {
  bundleApp(false);
});

gulp.task('deploy', function (){
  bundleApp(true);
});

gulp.task('watch', function () {
  gulp.watch(['./src/*.js', './src/components/*.js'], ['scripts']);
});

// When running 'gulp' on the terminal this task will fire.
// It will start watching for changes in every .js file.
// If there's a change, the task 'scripts' defined above will fire.
gulp.task('default', ['scripts','watch']);

// Private Functions
// ----------------------------------------------------------------------------
function bundleApp(isProduction) {
  scriptsCount++;
  // Browserify will bundle all our js files together in to one and will let
  // us use modules in the front end.
  var appBundler = browserify({
    entries: './src/index.js',
    debug: true
  })

  // If it's not for production, a separate vendors.js file will be created
  // the first time gulp is run so that we don't have to rebundle things like
  // react everytime there's a change in the js file
  if (!isProduction && scriptsCount === 1){
    // create vendors.js for dev environment.
    browserify({
      require: dependencies,
      debug: true
    })
      .bundle()
      .on('error', gutil.log)
      .pipe(source('vendors.js'))
      .pipe(gulp.dest('./web/js/'));
  }
  if (!isProduction){
    // make the dependencies external so they dont get bundled by the
    // app bundler. Dependencies are already bundled in vendor.js for
    // development environments.
    dependencies.forEach(function(dep){
      appBundler.external(dep);
    })
  }

  appBundler
  // transform ES6 and JSX to ES5 with babelify
    .transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .on('error',gutil.log)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./web/js/'));
}

/*
 Gulp: Well, you know what this one is for: The task runner itself.
 Browserify: Bundles your javascript files together and let’s you use modules that can be exported and imported in your javascript code.
 vinyl-source-stream: Plugin used for working with stream outputs. Need this to work with Browserify easily.
 gulp-util: Utility functions for gulp plugins, like nice logging.
 babelify: This is our transpiler. It converts ES6 and JSX to plain old javascript. v6.0+ of babelify must include presets in order to work. Basically they did the same as react and are embracing the unix philosophy of how to build tools even more. So that means having more plugins that do one thing and do that one thing well.
 */