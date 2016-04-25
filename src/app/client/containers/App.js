import React from 'react'
// import SearchBar from '../components/searchBar'
// import Content from '../components/content'
// import Footer from '../components/footer'
import { connect } from 'react-redux'
import ImmutableRenderMixin from 'react-immutable-render-mixin'
import * as ItemsActions from '../actions'
import { bindActionCreators } from 'redux'

let App = React.createClass({
  mixins: [ImmutableRenderMixin],
  propTypes: {
    items: React.PropTypes.object,
    filter: React.PropTypes.string
  },
  render() {
    let styles = {
      width: '200px',
      margin: '30px auto 0'
    }
    const actions = this.props.actions

    return (
      <div style={styles}>
        <h2>test</h2>
      </div>
    )
  }
})

export default connect(state => ({
  items: state.items,
  filter: state.filter
}), dispatch => ({
  actions: bindActionCreators(ItemsActions, dispatch)
}))(App)