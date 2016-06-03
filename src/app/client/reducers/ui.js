import * as types from '../constants/actionTypes'

const initialState = {
  currentNav: '',
}

export default function UI(state = initialState, action) {
  switch (action.type) {
    case types.GET_CURRENT_NAV:
      return Object.assign({}, state, {currentNav: action.navName});
    default:
      return state;
  }
}