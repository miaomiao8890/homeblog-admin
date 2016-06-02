import React, { Component, PropTypes } from 'react';
import Header from '../components/header';
import Navbar from '../components/navbar';
import Content from '../components/content';

export default class Containers extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <Content />
      </div>
    )
  }
}