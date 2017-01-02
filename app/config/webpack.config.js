var path = require('path'),
    webpack = require('webpack');


//PostCSS Loader
var postCSSLoader = {
      test: /\.css$/,
      loader: "style-loader!css-loader!postcss-loader"
};

//Babel Loader
var babelLoader = {
      test: /\.js/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
          presets: ['es2015', 'react', 'stage-2']
      }
};

var jsonLoader = {
  test: /\.json$/,
  loader: 'json'
}

module.exports = {

    //Entry
    entry:  ['babel-polyfill', './app/app.js'],

    //Output
    output: {
        filename: 'build/bundle.js',
        publicPath: '/build'
    },

    //Loaders
    module: {
        loaders: [
          babelLoader,
          postCSSLoader,
          jsonLoader
        ]
    },

    //Plugins

    //Dev Tools
    devtool: 'source-map',

    //Resolve
    resolve: {
     root: path.resolve('./src/app'),
     extensions: ['', '.js']
   }
}
