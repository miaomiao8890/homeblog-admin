import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import * as ArticleActions from "../actions";
import { bindActionCreators } from "redux";
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ArticleForm from '../components/ArticleForm';
import Rconfirm from "../components/Rconfirm";

let confirm = null;

class ArticleAdd extends Component {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleConfirm = this._handleConfirm.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   let _this = this;
  //   console.log(nextProps)
  //   if (nextProps.isShowConfirm) {
  //     const confirmProps = {
  //       title: 'Setting',
  //       content: (<p>added successfull</p>),
  //       confirmBtn: true,
  //       cancelBtn: false,
  //       confirmCallback: _this._handleConfirm,
  //       autoClose: 4000
  //     }
  //     console.log('new')
  //     confirm = (
  //       <Rconfirm {...confirmProps} />
  //     )
  //   }
  // }

  _handleConfirm() {
    this.props.history.push('/admin/article/list');
    this.props.actions.hideConfirm()
  }

  _handleSubmit(data) {
    this.props.actions.createArticle(data);
  }

  render() {
    const navName = 'articleAdd';
    const { isSaving, isShowConfirm } = this.props;
    const initializeData = {
      title: '',
      category: '',
      previewimg: '',
      summary: '',
      context: ''
    };
    const confirmProps = {
      title: 'Setting',
      content: (<p>added successfull</p>),
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
            <h1>Article Add</h1>
          </div>
          <div className="content-breadcrumb">
            <a className="tip-bottom"><i className="icon-home"></i> Home</a>
            <a className="current">Article Add</a>
          </div>
          <div className="container-fluid">
            <div className="row-fluid">
              <div className="widget-box">
                <div className="widget-title">
                  <span className="icon">
                    <i className="icon-th"></i>
                  </span>
                  <h5>Article Add</h5>
                </div>
                <div className="widget-content nopadding">
                  <ArticleForm onSubmit={this._handleSubmit} initializeData={initializeData} isSaving={isSaving} />
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
  isSaving: PropTypes.bool.isRequired,
  isShowConfirm: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
}

export default connect(state => ({
  isSaving: state.uiState.isSaving,
  isShowConfirm: state.uiState.isShowConfirm
}), dispatch => ({
  actions: bindActionCreators(ArticleActions, dispatch)
}))(ArticleAdd)