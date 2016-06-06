import React, { Component } from 'react';

export default class Content extends Component {

  render() {
    const { contentHeader } = this.props;
    const breadcrumb = [];
    contentHeader.breadcrumb.forEach((item, index) => {
      let length = contentHeader.breadcrumb.length;
      let tip;
      if (index == 0) {
        if (length == 1) {
          tip = <a className="tip-bottom current"><i className="icon-home"></i> {item}</a>
        }
        else {
          tip = <a className="tip-bottom"><i className="icon-home"></i> {item}</a>
        }
      }
      else if (index == contentHeader.breadcrumb.length - 1) {
        tip = <a className="current">{item}</a>
      }
      else {
        tip = <a>{item}</a>
      }
      breadcrumb.push(tip)
    });
    return (
    	<div className="admin-content">
	      <div className="content-header">
	        <h1>{contentHeader.title}</h1>
	      </div>
	      <div className="content-breadcrumb">
	        {breadcrumb}
	      </div>
	      <div className="container-fluid"></div>
	    </div>
    )
  }
}