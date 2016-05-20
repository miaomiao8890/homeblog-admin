import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './client/containers/App.js'
import Home from './client/containers/Home.js'
import Login from './client/containers/Login.js'

export default(
  <Route path='/' component={App}>
  	<IndexRoute component={Home}/>
    <Route path="login" component={Login}/>
  </Route>
);
