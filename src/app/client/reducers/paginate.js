import * as types from '../constants/actionTypes'

export default function article(state, action) {
  switch (action.type) {
    case types.GETLISTWITHPAGE:
      return Object.assign({}, state, {
        article: action.article
      });
    case types.ARTICLES_FETCHED:
      return Object.assign({}, state, {
        articles: action.articles
      });
    default:
      return state
  }
}