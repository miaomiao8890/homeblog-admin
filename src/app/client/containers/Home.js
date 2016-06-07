import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import Header from '../components/header';
import Navbar from '../components/navbar';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const navName = 'dashboard';
    return (
      <div>
        <Header />
        <Navbar navName={navName} />
        <div className="admin-content">
          <div className="content-header">
            <h1>Dashboard</h1>
          </div>
          <div className="content-breadcrumb">
            <a className="tip-bottom current"><i className="icon-home"></i> Home</a>
          </div>
          <div className="container-fluid"></div>
        </div>
      </div>
    )
  }
}

export default Home;