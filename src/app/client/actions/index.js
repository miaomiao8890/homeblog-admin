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

    return fetch('/articles/' + id, {
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
          dispatch(articleCreated(data.result));
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

export function updateArticle(article) {
  return function (dispatch) {
    dispatch(dataSaving());

    return fetch('/articles/' + article._id, {
      method: 'PUT',
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
          dispatch(articleUpdated(data.result));
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
          dispatch(articleDeleted(id));
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

function articleCreated(article) {
  return {
    type: types.ARTICLE_CREATED,
    article: article
  }
}

function articleUpdated(article) {
  return {
    type: types.ARTICLE_UPDATED,
    article: article
  }
}

function articleDeleted(id) {
  return {
    type: types.ARTICLE_DELETED,
    id
  }
}