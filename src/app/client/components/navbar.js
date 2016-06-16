import React, { Component, PropTypes } from 'react';
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
	        <li ref="dashboard"><Link to='/admin/'><i className="icon icon-home"></i> <span>Dashboard</span></Link></li>
	        <li ref="articleList"><Link to="/admin/article/list"><i className="icon icon-th"></i> <span>Article List</span></Link></li>
	        <li ref="articleAdd"><Link to="/admin/article/add"><i className="icon icon-pencil"></i> <span>Article Add</span></Link></li>
	      </ul>
	    </div>
    )
  }
}

Navbar.propTypes = {
  navName: PropTypes.string.isRequired
}