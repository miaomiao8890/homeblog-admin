import { routerStateReducer } from 'redux-router'
import { combineReducers } from 'redux'
import UI from "./ui"

const rootReducer = combineReducers({
  UI,
  router: routerStateReducer
})


export default rootReducer