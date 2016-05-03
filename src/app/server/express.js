import React from 'react';
import express from 'express';
import path from 'path';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import qs from 'query-string';
import serialize from 'serialize-javascript';
import { createMemoryHistory } from 'history';

import reducer from '../client/reducers';
import routes from '../routes';
import {ReduxRouter} from 'redux-router';
import {reduxReactRouter, match} from 'redux-router/server'; // 'redux-router/server';
// import request from 'superagent'

var app = express();
var port = 3001;
var mongoose = require("mongoose");

var dbUrl = "mongodb://123.57.21.57:27017/homeblog";
mongoose.connect(dbUrl);

app.use(express.static('dist'));

// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

const getMarkup = (store) => {
  const initialState = serialize(store.getState());
  const markup = renderToString(
    <Provider store={store} key="provider">
      <ReduxRouter/>
    </Provider>
  );
  return `<!doctype html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
        <title>geekjiang</title>
        <link rel="stylesheet" type="text/css" href="http://localhost:3001/style.css" />
        <link rel="stylesheet" type="text/css" href="http://localhost:3000/css/slick.css" />
      </head>
      <body>
        <div id="root">${markup}</div>
        <script>window.__initialState = ${initialState};</script>
        <script src="http://localhost:3001/bundle.js"></script>
      </body>
    </html>
  `;
};

app.use((req, res) => {
  // TO DO
  // console.log(createStore, createMemoryHistory)
  const store = reduxReactRouter({ routes, createHistory: createMemoryHistory })(createStore)(reducer);
  const query = qs.stringify(req.query);
  const url = req.path + (query.length ? '?' + query : '');

  store.dispatch(match(url, (error, redirectLocation, routerState) => {
    if (error) {
      console.error('Router error:', error);
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (!routerState) {
      res.status(400).send('Not Found');
    } else {
      res.status(200).send(getMarkup(store));
    }
  }));
});

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})