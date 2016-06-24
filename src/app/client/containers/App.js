import React, { Component, PropTypes } from 'react';
import Header from '../components/Header';
// import {Header, Slider} from '../components'

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    //const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props
    return (
      <div className="App">
        <div className="admin-wrap">
          <Header />
          {this.props.children}
        </div>
      </div>
    )
  }
}