import * as types from '../constants/actionTypes'

export default function uiState(state = { isFetching: false, isSaving: false, isShowConfirm: false }, action) {
  switch (action.type) {
    case types.DATA_LOADING:
      return Object.assign({}, state, {
        isFetching: true
      });
    case types.DATA_LOADED:
      return Object.assign({}, state, {
        isFetching: false
      });
    case types.DATA_SAVING:
      return Object.assign({}, state, {
        isSaving: true
      });
    case types.DATA_SAVED:
      return Object.assign({}, state, {
        isSaving: false
      });
    case types.SHOW_CONFIRM:
      return Object.assign({}, state, {
        isShowConfirm: true
      });
    case types.HIDE_CONFIRM:
      return Object.assign({}, state, {
        isShowConfirm: false
      });
    default:
      return state
  }
}