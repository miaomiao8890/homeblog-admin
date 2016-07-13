import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import * as ArticleActions from "../actions";
import { bindActionCreators } from "redux";
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Rconfirm from "../components/Rconfirm";
import ArticleTable from '../components/ArticleTable';

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemId: ''
    };
    this._handleOpenConfirm = this._handleOpenConfirm.bind(this);
    this._handleDeleteConfirm = this._handleDeleteConfirm.bind(this);
    this._handleDeleteCancel = this._handleDeleteCancel.bind(this);
  }

  componentWillMount() {
    if (this.props.articles.size == 0) {
      this.props.actions.fetchArticles();
    }
  }
  _test() {
    // this.props.history.push('/admin/article/add')

  }

  _handleOpenConfirm(evt) {
    let id = evt.target.dataset.id;
    this.setState({itemId: id});
    this.props.actions.showConfirm();
  }

  _handleDeleteConfirm() {
    // console.log(this.state.itemId)
    this.props.actions.deleteArticle(this.state.itemId);
  }

  _handleDeleteCancel() {
    this.props.actions.hideConfirm();
  }

  render() {
    const navName = 'articleList';
    const perPage = 10;
    const confirmProps = {
      title: '提示',
      content: (<p>您确定要删除吗？</p>),
      confirmBtn: true,
      cancelBtn: true,
      confirmCallback: this._handleDeleteConfirm,
      cancelCallback: this._handleDeleteCancel,
      autoClose: false
    }
    const { isFetching, isShowConfirm } = this.props;
    let articles = this.props.articles.toArray();
    let totalPage = Math.ceil(articles.length / perPage);
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
            <div className="content-loading" style={{ display: isFetching ? 'block' : 'none' }}>
              <div className="loading-img"></div>
            </div>
            <div className="row-fluid" style={{ display: isFetching ? 'none' : 'block' }}>
              <div className="widget-box">
                <div className="widget-title">
                  <span className="icon">
                    <i className="icon-th"></i>
                  </span>
                  <h5>Article List</h5>
                </div>
                <div className="widget-content nopadding">
                  <ArticleTable articles={articles} perPage={perPage} totalPage={totalPage} handleDelete={this._handleOpenConfirm} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Rconfirm style={{display: isShowConfirm ? 'block' : 'none'}} {...confirmProps} />
      </div>
    )
  }
}

ArticleList.propTypes = {
  articles: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isShowConfirm: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
}

export default connect(state => ({
  articles: state.articles,
  isFetching: state.uiState.isFetching,
  isShowConfirm: state.uiState.isShowConfirm
}), dispatch => ({
  actions: bindActionCreators(ArticleActions, dispatch)
}))(ArticleList)