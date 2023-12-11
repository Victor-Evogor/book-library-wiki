import { combineReducers } from 'redux'
import { Store } from '../Store'
import { Action } from '../Action'
import user from './user'
import isModalOpen from './isModalOpen'
import modalContent from './modalContent'

const rootReducer = combineReducers<Store, Action>({
  // add reducers here
  user,
  isModalOpen,
  modalContent
})

export default rootReducer
