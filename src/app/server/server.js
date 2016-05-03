// to support es6 in node
require('babel-core/register')
// to support await/async
require("babel-polyfill")

require('./express.js')