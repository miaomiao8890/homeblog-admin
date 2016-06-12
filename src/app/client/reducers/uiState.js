import * as types from '../constants/actionTypes'

export default function uiState(state = { isFetching: false }, action) {
  switch (action.type) {
    case types.DATA_LOADING:
      return Object.assign({}, state, {
        isFetching: true
      });
    case types.DATA_LOADED:
      return Object.assign({}, state, {
        isFetching: false
      });
    default:
      return state
  }
}