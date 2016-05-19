import React from 'react'
import { Route } from 'react-router'
import App from './client/containers/App.js'
import Login from './client/containers/Login.js'

export default (store) => {
	const requireLogin = (nextState, replace, cb) => {
    function checkAuth() {
      const { auth: { user }} = store.getState();
      if (!user) {
        // oops, not logged in, so can't be here!
        replace('/');
      }
      cb();
    }

    if (!isAuthLoaded(store.getState())) {
      store.dispatch(loadAuth()).then(checkAuth);
    } else {
      checkAuth();
    }
  };

	return (
		<Route path="/"  component={App}>
	  	{ /* Routes requiring login */ }
	    <Route onEnter={requireLogin}>
	      <Route path="login" component={Login}/>
	    </Route>
	    { /* Catch all route */ }
	    <Route path="*" component={Login}/>
	  </Route>
  )
}