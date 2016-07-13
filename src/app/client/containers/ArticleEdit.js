import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import * as ArticleActions from "../actions";
import { bindActionCreators } from "redux";
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ArticleForm from '../components/ArticleForm';
import Rconfirm from "../components/Rconfirm";

class ArticleAdd extends Component {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleConfirm = this._handleConfirm.bind(this);
  }

  _handleConfirm() {
    this.props.history.push('/admin/article/list');
    this.props.actions.hideConfirm()
  }

  _handleSubmit(data) {
    data._id = this.props.params.id;
    this.props.actions.updateArticle(data);
  }

  componentWillMount() {
    this.props.actions.fetchArticle(this.props.params.id);
  }

  render() {
    const navName = 'articleAdd';
    const { article, isFetching, isSaving, isShowConfirm } = this.props;
    const confirmProps = {
      title: '提示',
      content: (<p>修改成功！</p>),
      confirmBtn: true,
      cancelBtn: false,
      confirmCallback: this._handleConfirm,
      autoClose: 4000
    }
    return (
      <div>
        <Header />
        <Navbar navName={navName} />
        <div className="admin-content">
          <div className="content-header">
            <h1>Article Edit</h1>
          </div>
          <div className="content-breadcrumb">
            <a className="tip-bottom"><i className="icon-home"></i> Home</a>
            <a className="current">Article Edit</a>
          </div>
          <div className="container-fluid">
            <div className="row-fluid">
              <div className="widget-box">
                <div className="widget-title">
                  <span className="icon">
                    <i className="icon-th"></i>
                  </span>
                  <h5>Article Edit</h5>
                </div>
                <div className="widget-content nopadding">
                  <div className="content-loading" style={{ display: isFetching ? 'block' : 'none' }}>
                    <div className="loading-img"></div>
                  </div>
                  <div style={{ display: isFetching ? 'none' : 'block' }}>
                    <ArticleForm onSubmit={this._handleSubmit} initializeData={article} isSaving={isSaving} />
                  </div>  
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

ArticleAdd.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  isSaving: PropTypes.bool.isRequired,
  isShowConfirm: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
}

export default connect(state => ({
  article: state.article.article,
  isFetching: state.uiState.isFetching,
  isSaving: state.uiState.isSaving,
  isShowConfirm: state.uiState.isShowConfirm
}), dispatch => ({
  actions: bindActionCreators(ArticleActions, dispatch)
}))(ArticleAdd)