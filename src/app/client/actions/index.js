import * as types from '../constants/actionTypes'

export function getArticle(navName) {
  return {
    type: types.GET_CURRENT_NAV,
    navName
  }
}
