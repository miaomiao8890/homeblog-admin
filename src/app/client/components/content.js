import React, { Component } from 'react';

export default class Content extends Component {

  render() {
    //const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props
    return (
    	<div className="admin-content">
	      <div className="content-header">
	        <h1>Dashboard</h1>
	      </div>
	      <div className="content-breadcrumb">
	        <a className="tip-bottom" data-original-title="Go to Home"><i className="icon-home"></i> Home</a>
	        <a className="current">Tables</a>
	      </div>
	      <div className="container-fluid"></div>
	    </div>
    )
  }
}