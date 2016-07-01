import { routerStateReducer } from 'redux-router'
import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import { article, articles } from "./article"
import uiState from "./uiState"

const rootReducer = combineReducers({
  uiState,
  article,
  articles,
  form: formReducer,
  router: routerStateReducer
})


export default rootReducer