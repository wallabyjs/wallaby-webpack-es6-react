var wallabyWebpack = require('wallaby-webpack');
var babel = require('babel');

module.exports = function (wallaby) {

  var babelCompiler = wallaby.compilers.babel({
    babel: babel,
    // babel options
    stage: 0
  });

  var webpackPostprocessor = wallabyWebpack({
    // webpack options
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  });

  return {
    files: [
      {pattern: 'node_modules/react-tools/src/test/phantomjs-shims.js', instrument: false},
      {pattern: 'node_modules/react/dist/react-with-addons.js', instrument: false},
      {pattern: 'src/**/*.js*', load: false}
    ],

    tests: [
      {pattern: 'test/**/*Spec.js*', load: false}
    ],

    compilers: {
      '**/*.js*': babelCompiler
    },

    postprocessor: webpackPostprocessor,

    bootstrap: function () {
      window.__moduleBundler.loadTests();
    },

    debug: true
  };
};