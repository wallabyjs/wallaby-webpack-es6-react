var wallabyWebpack = require('wallaby-webpack');
var babel = require('babel');

module.exports = function (wallaby) {

  var babelCompiler = wallaby.compilers.babel({
    babel: babel,

    // NOTE: If you're using Babel 6, you should add `presets: ['es2015', 'react']` instead of `stage: 0`.
    // You will also need to
    // npm install babel-core (and require it instead of babel)
    // and
    // npm install babel-preset-es2015 babel-preset-react
    // See http://babeljs.io/docs/plugins/preset-es2015/ and http://babeljs.io/docs/plugins/preset-react/

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
      // you may just add the file separately,
      // like done here https://github.com/wallabyjs/wallaby-react-todomvc-sample/blob/master/wallaby-babel.js
      {pattern: 'node_modules/react-tools/src/test/phantomjs-shims.js', instrument: false},

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
    }
  };
};
