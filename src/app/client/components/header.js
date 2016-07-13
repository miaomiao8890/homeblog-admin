import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Header extends Component {

  render() {
    //const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props
    return (
      <div className="admin-header">
	      <h1><Link to='/'><div className="logo-img"></div></Link></h1>
	      <div className="navbar">
	        <ul className="nav btn-group">
	          <li className="btn-inverse">
	          	<Link to="/logout"><i className="icon icon-share-alt"></i> <span className="text">Logout</span></Link>
	          </li>
	        </ul>
	      </div>
	    </div>
    )
  }
}