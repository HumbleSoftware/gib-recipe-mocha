'use strict';

// Modules:
var gulpMocha = require('gulp-spawn-mocha');
var bus = null;

module.exports = {
  mochaTask: mochaTask,
  watch: true
};

function mochaTask (options) {

  options = config(options);

  return function () {

    var gulp = this;

    return gulp.src(options.src)
      .pipe(gulpMocha(options.mocha));
  };
}

function config (options) {

  // Assertions:
  if (!options.src) throw new Error('mocha-recipe `options.src` required');

  return options;
}

function register (b) {
  bus = b;
}
