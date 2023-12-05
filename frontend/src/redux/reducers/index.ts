import { combineReducers } from 'redux'
import { Store } from '../Store'
import { Action } from '../Action'
import user from './user'

const rootReducer = combineReducers<Store, Action>({
  // add reducers here
  user,
})

export default rootReducer
