import React, { Component, PropTypes } from 'react';
// import {Header, Slider} from '../components'

export default class Containers extends Component {
  static propTypes = {
    children: PropTypes.node
  }
  render() {
    //const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props
    return (
      <div className="App">
        <div className="admin-wrap">
          {this.props.children}
        </div>
      </div>
    )
  }
}