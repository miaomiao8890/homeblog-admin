import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import * as ArticleActions from "../actions";
import { bindActionCreators } from "redux";
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ArticleForm from '../components/ArticleForm';

const initializeData = {
  title: '123',
  category: '',
  previewimg: '',
  summary: '',
  context: ''
}

class ArticleAdd extends Component {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(data) {
    this.props.actions.createArticle(data);
  }

  render() {
    const navName = 'articleAdd';

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
                  <ArticleForm onSubmit={this._handleSubmit} initializeData={initializeData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ArticleAdd.propTypes = {
  actions: PropTypes.object.isRequired
}

export default connect(state => ({}), dispatch => ({
  actions: bindActionCreators(ArticleActions, dispatch)
}))(ArticleAdd)