import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import * as ArticleActions from "../actions";
import { bindActionCreators } from "redux";
import Header from '../components/header';
import Navbar from '../components/navbar';
import ArticleTable from '../components/articleTable';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (!this.props.merchants) {
      this.props.loadMerchants();
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
              <ArticleTable />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  currentNav: state.UI,
}), dispatch => ({
  actions: bindActionCreators(ArticleActions, dispatch)
}))(Home)