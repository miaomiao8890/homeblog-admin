import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import * as ArticleActions from "../actions";
import { bindActionCreators } from "redux";
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ArticleTable from '../components/ArticleTable';

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
    const tableTitle = 'Article List';
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
            <div className="content-loading" style={{ display: this.props.isFetching ? 'block' : 'none' }}>
              <img src="/images/loading-big.gif" />
            </div>
            <div className="row-fluid" style={{ display: this.props.isFetching ? 'none' : 'block' }}>
              <ArticleTable articles={this.props.articles} tableTitle={tableTitle} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  articles: state.article.articles,
  isFetching: state.uiState.isFetching,
}), dispatch => ({
  actions: bindActionCreators(ArticleActions, dispatch)
}))(ArticleList)