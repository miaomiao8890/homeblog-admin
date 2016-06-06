import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import * as ArticleActions from "../actions";
import { bindActionCreators } from "redux";
import Header from '../components/header';
import Navbar from '../components/navbar';
import Content from '../components/content';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    
  }

  render() {
    const navName = 'articleList';
    const contentHeader = {
      title: 'Article List',
      breadcrumb: ['Home', 'Article List']
    }
    return (
      <div>
        <Header />
        <Navbar navName={navName} />
        <Content contentHeader={contentHeader} />
      </div>
    )
  }
}

export default connect(state => ({
  currentNav: state.UI,
}), dispatch => ({
  actions: bindActionCreators(ArticleActions, dispatch)
}))(Home)