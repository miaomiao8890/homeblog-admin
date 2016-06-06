import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App.js'
import Home from './containers/Home.js'
import ArticleList from './containers/ArticleList.js'

export default(
  <Route path='/' component={App}>
  	<IndexRoute component={Home}/>
    <Route path='/article/list' component={ArticleList}/>
  </Route>
);
