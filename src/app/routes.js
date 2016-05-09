import React from 'react'
import { Route } from 'react-router'
import App from './client/containers/App.js'

export default (
  <Route path="/"  component={App}>
  	{ /* Routes requiring login */ }
    <Route onEnter={requireLogin}>
      <Route path="login" component={Login}/>
    </Route>
    { /* Catch all route */ }
    <Route path="*" component={NotFound} status={404} />
  </Route>
)