import { combineReducers } from 'redux';
import feedingsReducer from './feedings_reducer';

const appReducer = combineReducers({
  feedings: feedingsReducer
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;