var wallabyWebpack = require('wallaby-webpack');

module.exports = function (wallaby) {

  var webpackPostprocessor = wallabyWebpack({
    // webpack options

    externals: {
      // Use external version of React instead of rebuilding it
      "react": "React"
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  });

  return {
    files: [
      {pattern: 'node_modules/react/dist/react-with-addons.js', instrument: false},
      {pattern: 'src/**/*.js*', load: false}
    ],

    tests: [
      {pattern: 'test/**/*Spec.js*', load: false}
    ],

    compilers: {
      '**/*.js*': wallaby.compilers.babel()
    },

    postprocessor: webpackPostprocessor,

    bootstrap: function () {
      window.__moduleBundler.loadTests();
    }
  };
};
