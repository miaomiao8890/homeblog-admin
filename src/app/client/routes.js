import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App.js'
import Home from './containers/Home.js'
import ArticleList from './containers/ArticleList.js'

export default(
  <Route path='/admin/' component={App}>
  	<IndexRoute component={Home}/>
    <Route path='/admin/article/list' component={ArticleList}/>
  </Route>
);
