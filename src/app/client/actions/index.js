import * as types from '../constants/actionTypes'

export function getCurrentNav(navName) {
  return {
    type: types.GET_CURRENT_NAV,
    navName
  }
}
