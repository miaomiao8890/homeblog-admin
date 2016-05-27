import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Navbar extends Component {

  render() {
    //const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props
    return (
    	<div className="admin-sidebar">
	      <ul>
	        <li><Link to='/'><i className="icon icon-home"></i> <span>Dashboard</span></Link></li>
	        <li className="active"><Link to="/"><i className="icon icon-th"></i> <span>Article List</span></Link></li>
	        <li><Link to="/"><i className="icon icon-pencil"></i> <span>Article Edit</span></Link></li>
	      </ul>
	    </div>
    )
  }
}