import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App.js'
import Home from './containers/Home.js'
import ArticleList from './containers/ArticleList.js'
import ArticleAdd from './containers/ArticleAdd.js'
import ArticleEdit from './containers/ArticleEdit.js'

export default(
  <Route path='/admin/' component={App}>
  	<IndexRoute component={Home}/>
    <Route path='/admin/article/list' component={ArticleList}/>
    <Route path='/admin/article/add' component={ArticleAdd}/>
    <Route path='/admin/article/edit/:id' component={ArticleEdit}/>
  </Route>
);
