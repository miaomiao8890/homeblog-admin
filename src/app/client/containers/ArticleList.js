import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import * as ArticleActions from "../actions";
import { bindActionCreators } from "redux";
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ArticleTable from '../components/ArticleTable';
import { hashHistory } from 'react-router';

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this._handleDelete = this._handleDelete.bind(this);
  }

  componentWillMount() {
    this._test()
    if (this.props.articles.length == 0) {
      this.props.actions.fetchArticles();
    }
  }
  _test() {
    console.log(this.props.history)
    // hashHistory.push('/admin/article/add')
    this.props.history.push('/admin/article/add')

  }

  _handleDelete(evt) {
    let id = evt.target.dataset.id;
    console.log(evt.target)
    this.props.actions.deleteArticle(id);
  }

  render() {
    const navName = 'articleList';
    const perPage = 10;
    let totalPage = Math.ceil(this.props.articles.length / perPage);
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
              <div className="widget-box">
                <div className="widget-title">
                  <span className="icon">
                    <i className="icon-th"></i>
                  </span>
                  <h5>Article List</h5>
                </div>
                <div className="widget-content nopadding">
                  <ArticleTable articles={this.props.articles} perPage={perPage} totalPage={totalPage} handleDelete={this._handleDelete} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
}

export default connect(state => ({
  articles: state.article.articles,
  isFetching: state.uiState.isFetching,
}), dispatch => ({
  actions: bindActionCreators(ArticleActions, dispatch)
}))(ArticleList)