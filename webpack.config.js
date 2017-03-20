//module to use for getting absolute directory
const path = require('path');
//a library takes a ref to a loader, runs webpack with it, and takes any text generated by loader and save into a seperate file
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//2 basic pieces of configuration for app to run
const config = {
  //1. entry property: the first file that should be executed when our app starts in the browser, s/b a relative path
  entry: './src/index.js',
  //2. output where to take bundled up modules and what to name it
  output: {
    //ref to directory to save bundle.js file, should be an absolute path
      //build: folder bundle.js is saved to
    path: path.resolve(__dirname, 'build'),
    //can be whatever you want to call it - bundle.js is standard
    filename: 'bundle.js',
    publicPath: 'build/'
  },
  //wire up loaders to weback
  module: {
    //rules specify each different loader
    rules: [
      //each rule is an object
      {
        use: 'babel-loader',
        // applied to only files ending in .js
        test: /\.js$/
      },
      {
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        //webpack should apply loaders to any file ending in css
        test: /\.css$/
      },
      {
        //diff range of image file types
        test: /\.(jpe?g|png|gif|svg)$/,
        //what to do when files are found
        use: [
          //behaves diff depending on the size of the image
          {
            loader: 'url-loader',
            //any images larger than 40kb: save as sep file, smaller than 40kb: include in bundle.js
            options: { limit: 40000 }
          },
          //first to be applied,
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    //any file extracted with plugin, will get saved to a file called style.css
    new ExtractTextPlugin('style.css')
  ]
};

module.exports = config;