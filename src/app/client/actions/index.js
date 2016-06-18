import * as types from '../constants/actionTypes'
import { push } from 'react-router-redux';
import fetch from 'isomorphic-fetch'

export function fetchArticles() {
  return function (dispatch) {
    dispatch(dataLoading());

    return fetch('/articles', {
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
      if (data.status_code == 200) {
        try {
          dispatch(articlesFetched(data.result));
          dispatch(dataLoaded());
        } catch (e) {
          // dispatch(dataLoadedFailure());
        }
      }
    })
    .catch(error => {
      // dispatch(dataLoadedFailure());
    })
  }
}

export function createArticle(article) {
  return function (dispatch) {
    dispatch(dataLoading());

    return fetch('/articles', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(article)
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.status_code == 200) {
        try {
          dispatch(articlesUpdated(data.result));
          dispatch(dataLoaded());
          dispatch(navigateToArticleList());
        } catch (e) {
          // dispatch(dataLoadedFailure());
        }
      }
    })
    .catch(error => {
      // dispatch(dataLoadedFailure());
    })
  }
}

export function deleteArticle(id) {
  return function (dispatch) {
    dispatch(dataLoading());

    return fetch('/articles/' + id, {
      method: 'DELETE'
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.status_code == 200) {
        try {
          // dispatch(articleUpdated(data.result));
          dispatch(dataLoaded());
          // dispatch(navigateToArticleList());
        } catch (e) {
          // dispatch(dataLoadedFailure());
        }
      }
    })
    .catch(error => {
      // dispatch(dataLoadedFailure());
    })
  }
}

function dataLoading() {
  return {
    type: types.DATA_LOADING
  }
}

function dataLoaded() {
  return {
    type: types.DATA_LOADED
  }
}

function articlesFetched(articles) {
  return {
    type: types.ARTICLES_FETCHED,
    articles: articles
  }
}

function articlesUpdated(article) {
  return {
    type: types.ARTICLES_UPDATED,
    article: article
  }
}

function navigateToArticleList() {
  console.log('test')
  return push("/admin/article/list");
}