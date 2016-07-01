import * as types from '../constants/actionTypes'
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

export function fetchArticle(id) {
  return function (dispatch) {
    dispatch(dataLoading());

    return fetch('/article/' + id, {
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
          dispatch(articleFetched(data.result));
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
    dispatch(dataSaving());

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
          dispatch(articlesCreated(data.result));
          dispatch(dataSaved());
          dispatch(showConfirm());
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
          dispatch(articlesDeleted(id));
          dispatch(dataLoaded());
          dispatch(hideConfirm());
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

export function showConfirm() {
  return {
    type: types.SHOW_CONFIRM
  }
}

export function hideConfirm() {
  return {
    type: types.HIDE_CONFIRM
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

function dataSaving() {
  return {
    type: types.DATA_SAVING
  }
}

function dataSaved() {
  return {
    type: types.DATA_SAVED
  }
}

function articleFetched(article) {
  return {
    type: types.ARTICLE_FETCHED,
    article: article
  }
}

function articlesFetched(articles) {
  return {
    type: types.ARTICLES_FETCHED,
    articles: articles
  }
}

function articlesCreated(article) {
  return {
    type: types.ARTICLES_CREATED,
    article: article
  }
}

function articlesUpdated(article) {
  return {
    type: types.ARTICLES_UPDATED,
    article: article
  }
}

function articlesDeleted(id) {
  return {
    type: types.ARTICLES_DELETED,
    id
  }
}