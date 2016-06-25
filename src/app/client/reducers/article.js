import * as types from '../constants/actionTypes'

const initialState = {
  articles: []
}

export default function article(state = initialState, action) {
  switch (action.type) {
    case types.ARTICLES_CREATED:
      Object.assign({}, state, {
        articles: action.article
      });
      return state
    case types.ARTICLES_UPDATED:
      Object.assign({}, state, {
        articles: action.article
      });
      return state
    case types.ARTICLES_FETCHED:
      return Object.assign({}, state, {
        articles: action.articles
      });
    default:
      return state
  }
}