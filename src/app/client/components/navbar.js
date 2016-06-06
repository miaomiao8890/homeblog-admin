import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Navbar extends Component {

  componentDidMount() {
    this._getNavClassName();
  }

  _getNavClassName() {
    this.refs[this.props.navName].className = 'active';
  }

  render() {
    return (
    	<div className="admin-sidebar">
	      <ul>
	        <li ref="dashboard"><Link to='/'><i className="icon icon-home"></i> <span>Dashboard</span></Link></li>
	        <li ref="articleList"><Link to="/article/list"><i className="icon icon-th"></i> <span>Article List</span></Link></li>
	        <li ref="articleEdit"><Link to="/"><i className="icon icon-pencil"></i> <span>Article Edit</span></Link></li>
	      </ul>
	    </div>
    )
  }
}