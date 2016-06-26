import * as types from '../constants/actionTypes'
import { List } from "immutable";

export default function article(state = List(), action) {
  switch (action.type) {
    case types.ARTICLES_CREATED:
      if (state.size > 0) {
        return state.unshift(action.article)
      }
      return state
    case types.ARTICLES_DELETED:
      return state.filter(article => article._id != action.id)
    case types.ARTICLES_UPDATED:
      return Object.assign({}, state, {
        articles: action.article
      });
    case types.ARTICLES_FETCHED:
      state = List(action.articles);
      return state
    default:
      return state
  }
}