import { checkHttpStatus, parseJSON } from '../utils';
import * as types from '../constants/actionTypes'

export function fetchArticles(navName) {
  return function (dispatch) {
  	dispatch(dataLoading());

  	return fetch("/getArticleAll", {
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(response => {
      try {
        dispatch(merchantsFetched(merchants));
        dispatch(dataLoaded());
      } catch (e) {
        dispatch(dataLoadedFailure());
      }
    })
    .catch(error => {
      dispatch(dataLoadedFailure());
    })
  }
}
