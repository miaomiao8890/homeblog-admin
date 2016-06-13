import * as types from '../constants/actionTypes'
import fetch from 'isomorphic-fetch'

export function dataLoading() {
  return {
    type: types.DATA_LOADING
  }
}

export function dataLoaded() {
  return {
    type: types.DATA_LOADED
  }
}

export function fetchArticles() {
  return function (dispatch) {
  	dispatch(dataLoading());

  	return fetch("/getArticleAll", {
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      try {
        dispatch(articlesFetched(data.result));
        dispatch(dataLoaded());
      } catch (e) {
        // dispatch(dataLoadedFailure());
      }
    })
    .catch(error => {
      // dispatch(dataLoadedFailure());
    })
  }
}

export function articlesFetched(articles) {
	return {
		type: types.ARTICLES_FETCHED,
		articles: articles
	}
}

