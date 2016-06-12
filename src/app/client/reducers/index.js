import { routerStateReducer } from 'redux-router'
import { combineReducers } from 'redux'
import article from "./article"
import uiState from "./uiState"

const rootReducer = combineReducers({
  article,
  uiState,
  router: routerStateReducer
})


export default rootReducer