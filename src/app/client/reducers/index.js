import { routerStateReducer } from 'redux-router'
import { combineReducers } from 'redux'
import article from "./article"

const rootReducer = combineReducers({
  article,
  router: routerStateReducer
})


export default rootReducer