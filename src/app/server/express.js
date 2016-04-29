import express from 'express';
import path from 'path';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
// import qs from 'query-string';
// import serialize from 'serialize-javascript';
// import { createMemoryHistory } from 'history';
// import open from 'open';

// import reducer from '../client/reducers';
// import routes from '../routes';
// import {ReduxRouter} from 'redux-router';
// import {reduxReactRouter, match} from 'redux-router/server'; // 'redux-router/server';
// import request from 'superagent' 

var app = express();
var mongoose = require("mongoose");

var dbUrl = "mongodb://123.57.21.57:27017/homeblog";
mongoose.connect(dbUrl);

app.use(express.static('static'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3001, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:3001');
});