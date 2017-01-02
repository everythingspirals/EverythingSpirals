var path = require('path'),
    webpack = require('webpack'),
    promise = require('es6-promise').polyfill();

//PostCSS Loader
var jsonLoader = {
  test: /\.json$/,
  loader: 'json-loader'
};

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

module.exports = {

    //Entry
    entry:  ['babel-polyfill', './app/app.js'], //, './src/public/config/avconfig.js', './src/public/config/avlocalize.js'

    //Output
    output: {
        filename: './public/js/bundle.js',
        publicPath: './public/js/'
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
    plugins: [
      new webpack.DefinePlugin({
       'process.env':{
         'NODE_ENV': JSON.stringify('production')
       }
     }),
    ],

    //Dev Tools
    devtool: 'source-map',

    //Resolve
    resolve: {
     root: path.resolve('./src/app'),
     extensions: ['', '.js']
   }
}
