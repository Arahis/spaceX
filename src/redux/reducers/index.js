import { combineReducers } from 'redux'

import launchReducer from './launch-reducer'

const rootReducers = combineReducers({
  launches: launchReducer,
})

export default rootReducers
