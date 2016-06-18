import * as types from '../constants/actionTypes'

const initialState = {
  articles: []
}

export default function article(state = initialState, action) {
  switch (action.type) {
    case types.ARTICLES_UPDATED:
      state.articles.unshift(action.article)
      return state
    case types.ARTICLES_FETCHED:
      return Object.assign({}, state, {
        articles: action.articles
      });
    default:
      return state
  }
}