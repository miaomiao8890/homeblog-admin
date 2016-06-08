import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import * as ArticleActions from "../actions";
import { bindActionCreators } from "redux";
import Header from '../components/header';
import Navbar from '../components/navbar';
import ArticleTable from '../components/articleTable';

class ArticleList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // console.log(this.props.articles)
    if (this.props.articles.length == 0) {
      this.props.actions.fetchArticles();
    }
  }

  render() {
    const navName = 'articleList';
    return (
      <div>
        <Header />
        <Navbar navName={navName} />
        <div className="admin-content">
          <div className="content-header">
            <h1>Article List</h1>
          </div>
          <div className="content-breadcrumb">
            <a className="tip-bottom"><i className="icon-home"></i> Home</a>
            <a className="current">Article List</a>
          </div>
          <div className="container-fluid">
            <div className="row-fluid">
              <ArticleTable articles={this.props.articles} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  articles: state.article.articles,
}), dispatch => ({
  actions: bindActionCreators(ArticleActions, dispatch)
}))(ArticleList)