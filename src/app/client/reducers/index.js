import { routerStateReducer } from 'redux-router'
import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import article from "./article"
import uiState from "./uiState"

const rootReducer = combineReducers({
  article,
  uiState,
  form: formReducer,
  router: routerStateReducer
})


export default rootReducer