var path = require('path');
var webpack = require('webpack');
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'));
var host = (process.env.HOST || 'localhost');
var port = (+process.env.PORT + 1) || 3001;
var assetsPath = path.resolve(__dirname, '../dist/js');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    // 'webpack-hot-middleware/client',
    'index': [
      // 'webpack-hot-middleware/client?path=http://' + host + ':' + port + '/__webpack_hmr',
      './src/app/client/index'
    ]
  },
  output: {
    path: assetsPath,
    filename: 'bundle.js',
    publicPath: 'http://' + host + ':' + port + '/dist/js/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true  // <-------- DISABLE redux-devtools HERE
    }),
    webpackIsomorphicToolsPlugin.development()
  ],
  eslint: {
    configFile: '.eslintrc'
  },
  /**
   * If need eslint, add it in loaders.
   * {test: /\.js$/,loader: "eslint-loader",exclude: /node_modules/,}
   */
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
        // include: path.join(__dirname, 'src/app/client')
      // }
      }, {
        test: /\.scss$/,
        loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap'
      }
    ]
    // }, {
    //   test: /\.css$/, // Only .css files
    //   loader: 'style!css' // Run both loaders
    // },
      // {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}]
  }
};